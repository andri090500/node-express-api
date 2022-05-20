// untuk model penamaan file diawali dengan huruf kapital standarnya
const db = require("../config.js");

exports.getData = (res) => {
  //query data
  const sql = "SELECT * FROM hero";
  //execute data
  db.query(sql, (error, row, field) => {
    if (error) return console.log("error : ", error);
    //response data
    const data = JSON.parse(JSON.stringify(row));
    res.render("data", { dataList: data });
    res.end(); //agar tidak terus merender
  });
};

exports.getDataById = (id, res) => {
  const sql = `SELECT * FROM hero WHERE id = ${id}`;
  db.query(sql, (error, row, field) => {
    if (error) return console.log("error : ", error);
    const data = JSON.parse(JSON.stringify(row));
    res.render("edit", { dataList: data });
    res.end();
  });
};

exports.addData = (data, res) => {
  // console.log(data);
  const nama = data.nama;
  const role = data.role;
  const sql = `INSERT INTO hero (nama, role) VALUES ('${nama}','${role}')`;
  db.query(sql, (error, row, field) => {
    if (error) return console.log("error : ", error);
    // res.redirect("/hero/");
    res.send("<script>alert('data berhasil ditambahkan');document.location.href='/hero'</script>");
    res.end();
  });
};
exports.updateData = (data, res) => {
  // console.log(data);
  const id = data.id;
  const nama = data.nama;
  const role = data.role;
  const sql = `UPDATE hero SET nama = '${nama}', role = '${role}' WHERE id = ${id}`;
  db.query(sql, (error, row, field) => {
    if (error) return console.log("error : ", error);
    // res.redirect("/hero/");
    res.send("<script>alert('data berhasil diupdate');document.location.href='/hero'</script>");
    res.end();
  });
};

exports.dataDelete = (id, res) => {
  const sql = `DELETE FROM hero WHERE id = ${id}`;
  db.query(sql, (error, row, field) => {
    if (error) return console.log("error : ", error);
    res.redirect("/hero/");
    res.end();
  });
};
