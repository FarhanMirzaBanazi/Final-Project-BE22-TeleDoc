const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nama_depan: String,
    nama_belakang: String,
    no_telp: String,
    jenis_kelamin: String,
    tempat_lahir: String,
    tanggal_lahir: String,
    email: String,
    password: String,
    alamat: String
});

module.exports = mongoose.model("user", userSchema);