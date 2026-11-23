const express = require('express')
const router = express.Router()
const Entry = require ('../models/Entry')
const verifyToken = require('../middleware/verifyToken')


async function create(req,res){
    try{
    const {title , entryBody , isPublic} = req.body

    const entry = await Entry.create({
        title,
        entryBody,
        isPublic,
        owner:req.user._id
    })
    res.status(201).json(entry)
    }catch(err){
   console.log(err)
    }

}

async function getAllEntries(req,res){
     try {
    const allEntries = await Entry.find({isPublic:true});
    res.status(200).json(allEntries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getMyEntries(req,res){
  try{
    const ownerId = req.user._id
    const myEntries = await Entry.find({owner:ownerId})
    res.status(200).json(myEntries)

  }catch(err){
   console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteEntry(req,res){
  try{
    const entryId = req.params.entryId
    const deletedEntry= await Entry.findByIdAndDelete(entryId)
    res.sendStatus(204)
  }catch(err){
  console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateEntry (req,res){
    try{
        const {title ,entryBody, isPublic} = req.body
    const  updatedEntry = await Entry.findByIdAndUpdate(req.params.entryId,{
        title,
        entryBody,
        isPublic,
    },{returnDocument:'after',runValidators:true})
    res.status(200).json(updatedEntry)
    }catch(err){
    console.log(err)
    res.status(500).json({message:'Internal Server Error'})
    }
}








module.exports = {create,getAllEntries,getMyEntries, deleteEntry, updateEntry}