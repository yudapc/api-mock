const express = require("express");
const jsonServer = require("json-server");
const multer = require("multer");
const mime = require("mime");
const port = process.env.PORT || 8083;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const nameRandom = Math.random()
      .toString(36)
      .substr(2);
    const extensionFile = mime.getExtension(file.mimetype);
    const newFileName = `${nameRandom}.${extensionFile}`;
    cb(null, newFileName);
  }
});
const upload = multer({ storage: storage });

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.options("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/static", express.static("uploads"));

app.post("/upload", upload.single("file"), (req, res) => {
  const filename = req.file ? req.file.filename : "FILE NOT UPLOADED";
  const uploadStatus = req.file
    ? "File Uploaded Successfully"
    : "File Upload Failed";

  res.json({
    status: uploadStatus,
    fullUrl: `http://localhost:8083/static/${filename}`,
    filename: `Name Of File: ${filename}`
  });
});

app.use("/api/v1", jsonServer.router("db.json"));

app.listen(port, () => {
  console.log(`App is live on port ${port}`);
});
