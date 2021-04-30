const express = require('express');
const router = express.Router();
const knex = require("../config/db-config");

module.exports = {

    //renderingRegisterForm
    registerForm:(req, res) => {
        res.render("register",{ msg:""});
    },

    //Adding client data to database
    registerClient: async(req, res) => {
        req.body.profile_pic = req.file.filename;
        console.log(req.body);
        try{
            let data = await knex.select().from('clients').where({ "phone": req.body.phone });
            console.log(data);
            if (data.length == 0) {
                await knex("clients").insert(req.body);
                res.render("register",{msg:"registered successfully!"})
            }else{
                res.render("register",{msg:"duplicate entry, try with another phone number"}) 
            }
        }catch(err){
            console.error(err);
            res.render("register",{msg:"Sorry got some error"})

        }
    },

    //rendering AllClientsData
    getAllClients: async(req, res) =>{
        try{
            let data = await knex.select("*").from("clients");
            // console.log(data);
            res.render("clients",{data:data})
        }catch(err){
            console.error(err);
            res.render("register",{msg:"Sorry got some error"})
        }

    },

    //deleting ClientById
    deleteClient: async(req, res) =>{
        let id = req.params.id;
        console.log(id);
        try{
            let data = await knex('clients').where('id',id).del();
            res.redirect("/register/clients");
        }catch(err){
            console.error(err);
            res.render("register",{msg:"Sorry got some error"})
        }

    },

    //getting ClientById
    getClientById: async(req, res) =>{
        let id = req.params.id;
        let data = await knex.select("*").from("clients").where('id',id);
        console.log(data);
        res.render("edit_details",{ data:data[0]});
    },


    //updating client data by Id
    updateClient: async(req, res) => {
        let id = req.params.id;
        try{
            let data = await knex('clients').where("id",id).update(req.body);
            res.render("register",{msg:"data updated successfully!"})
        }catch(err){
            console.error(err);
            res.render("register",{msg:"got some error"})

        }
    }
};
