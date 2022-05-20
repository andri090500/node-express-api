const express = require("express");
const router = express.Router();
const data = require("../models/Hero.model.js");

router.get("/", (req, res) => {
  data.getData(res);
});

//untuk menaro parameter di url gunakan :
router.get("/:id", (req, res) => {
  data.getDataById(req.params.id, res);
});

router.post("/add", (req, res) => {
  const nama = req.body.nama;
  const role = req.body.role;
  const dataAdd = {
    nama: nama,
    role: role,
  };
  data.addData(dataAdd, res);
});

router.post("/update", (req, res) => {
  const id = req.body.id;
  const nama = req.body.nama;
  const role = req.body.role;
  //atau const {id, nama, alamat} = req.body;
  const dataUpdate = {
    id: id,
    nama: nama,
    role: role,
  };
  data.updateData(dataUpdate, res);
});

router.post("/delete", (req, res) => {
  // res.send("Id yang akan di hapus => " + req.params.id);
  const id = req.body.id;
  data.dataDelete(id, res);
});

module.exports = router;
