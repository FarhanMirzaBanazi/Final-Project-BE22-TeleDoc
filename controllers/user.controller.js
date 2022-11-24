const userSchema = require("../schema/user");
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
   getProfil: async (req, res) => {
        try {
            const data = await userSchema.findById(req.query.id);
            // console.log(req.query.id);
            if(data){
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'User is get successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'User is not found.'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Get User By Id Failed!!'
            })
        }
    
      },
    
  updateProfil: async (req, res) => {
        const { nama_depan, nama_belakang, no_telp, jenis_kelamin, tempat_lahir, tanggal_lahir, email, alamat } = req.body;

        try {
            const data = await userSchema.findById(req.query.id);

            if (data) {
                data.nama_depan = nama_depan
                data.nama_belakang = nama_belakang
                data.no_telp = no_telp
                data.jenis_kelamin = jenis_kelamin
                data.tempat_lahir = tempat_lahir
                data.tanggal_lahir = tanggal_lahir
                data.email = email
                data.alamat = alamat
                const update = await data.save();

                res.status(200).json({
                    data: update,
                    message: 'Update data jadwal is success'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Data failed to update'
                })

            }
        } catch (error) {
            res.send(error)
        }
    },

  register: async (req, res) => {
    const { nama_depan, nama_belakang, email, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);

        const data = await userSchema.create({
            nama_depan: nama_depan,
            nama_belakang: nama_belakang,
            email: email,
            password: hash
        });

        if (data) {
            res.status(200).json({
                success: true,
                data: data,
                message: 'Register Successfully..'
            })
        } else {
            res.status(400).json({
                success: false,
                data: data,
                message: 'data does not match'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Register Failed!!'
        })
    }

  },

  login: async(req, res) => {
    const { email, password } = req.body;

    try {
        const checkEmail = await userSchema.findOne({
            email: email,
        });

    if (checkEmail){
        const checkPass = await bcrypt.compare(password, checkEmail.password);

        if (checkPass) {
            const token = jsonwebtoken.sign({
                email: checkEmail.email,
            }, process.env.JWT_KEY );
            
            // res.send(token)
            res.status(200).json({
                success: true,
                token: token,
                message: 'login Successfully..'
            })
        } else{
            res.status(400).json({
                success: false,
                message: 'Password wrong'
            })
        }
    } else{
        res.status(400).json({
            message: 'Username wrong'
        })
    }
  } catch (error) {
    res.status(400).json({
        message: 'Login failed!!'
    })
    }
    
  },
}