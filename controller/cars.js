const { request } = require('express');
const {cars}= require('../models');
module.exports=class{
    static getCars(req,res){
        cars.findAll().then((result) => {
            // res.status(200).json({
            //     status: 200,
            //     message: "Success Get Data",
            //     data: result
            // })
            const car = [...result]
            res.render('index',{car});
        }).catch((err) => {
            console.log(err);
        });
    }
    static createCars(req,res){
        cars.create({
            nama: req.body.nama,
            tipe: req.body.tipe,
            harga: req.body.harga,
            ukuran: req.body.ukuran,
            foto: req.body.foto
        }).then((result) => {
            res.status(201).json({
                status: 201,
                message: "Success Create Data",
                data: result
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    static updateCars(req,res){
        cars.update(req.body,{
            where:{
                id:req.params.id
            }
        }).then((result) => {
            res.status(201).json({
                status: 201,
                message: "Success Update Data",
                data: req.body
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    static deleteCars(req,res){
        cars.destroy({
            where:{
                id:req.params.id
            }
        }).then((result) => {
            res.status(200).json({
                status: 200,
                message: "Success Delete Data",
            })
        }).catch((err) => {
            console.log(err);
        });
    }

}