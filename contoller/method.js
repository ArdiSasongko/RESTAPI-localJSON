let people = require("../data")
const express = require("express")

const getdata = (req,res) =>{
    res.status(200).json(people)
}

const addData = (req,res) =>{
    const newData = req.body;
    people.push(newData)
    res.status(200).send("Berhasil Menambahkan")
}

const updateData = (req,res) =>{
    const id = req.params.id
    const newData = req.body
    const findId = people.findIndex((data)=> data.id === id);

    if(!findId){
        res.status(404).send("Item Not Found")
    }

    people[findId] === newData;
    res.status(200).send("Data berhasil diperbarui")
}

const delteData = (req, res) =>{
    const id = req.params.id
    const findId = people.findIndex((data)=> data.id === id);

    if(!findId){
        res.status(404).send("Item Not Found")
    }

    people.splice(findId,1)
    res.status(200).send("Data Berhasil dihapus")
}
module.exports = { getdata, addData, updateData}
