const dokterSchema = require("../schema/dokter");
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
   createDokter: async (req, res) => {
        const { nama, spesialis, pengalaman, detail_info, harga } = req.body;

        try {
            const data = await dokterSchema.create({
                nama: nama,
                spesialis: spesialis,
                pengalaman: pengalaman,
                detail_info: detail_info,
                harga: harga
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'You Have Successfully Created Doctor Data'
                })
            } else {
                res.status(400).json({
                    message: 'Data Failed to Add'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

   getDokterById: async (req, res) => {
        try {
            const data = await dokterSchema.findById(req.query.id);
            // console.log(req.query.id);
            if(data){
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Dokter is Get Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Dokter is Not Found.'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Get Dokter By Id Failed!!'
            })
        }
    
      },
    
   getAllDokter: async (req, res) => {
        try {
            const data = await dokterSchema.find({ })

            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'Get All Dokter Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Dokter is Not Found'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Get All Dokter Failed!!'
            })
        }
    },
    
    
}