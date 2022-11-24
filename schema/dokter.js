const mongoose = require("mongoose");

const dokterSchema = new mongoose.Schema({
    nama: String,
    spesialis: String,
    pengalaman: String,
    detail_info: String,
    harga: String,
});

module.exports = mongoose.model("dokter", dokterSchema);