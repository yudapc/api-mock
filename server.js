const express = require("express");
const jsonServer = require("json-server");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const port = process.env.PORT || 8083;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.post("/upload", upload.single("file"), (req, res) => {
  const filename = req.file ? req.file.filename : "FILE NOT UPLOADED";
  const uploadStatus = req.file
    ? "File Uploaded Successfully"
    : "File Upload Failed";

  res.json({
    status: uploadStatus,
    filename: `Name Of File: ${filename}`
  });
});

app.use("/api/v1", jsonServer.router("db.json"));

app.listen(port, () => {
  console.log(`App is live on port ${port}`);
});
