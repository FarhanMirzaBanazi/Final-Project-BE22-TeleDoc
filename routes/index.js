const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const dokterRouter = require('./dokter.router');

router.use("/user", userRouter);
router.use("/dokter", dokterRouter);

module.exports = router