const express = require('express')
const router = express.Router()
const Album = require('../models/records')

// Index Route
router.get('/', (req, res) =>{
    Album.find({}, (err, foundAlbum)=>{
        res.json(foundAlbum)
    })
})

// Delete Route
router.delete('/:id', (req, res)=>{
    Album.findByIdAndRemove(req.params.id, (err, deletedAlbum)=>{
        res.json(deletedAlbum)
    })
})

// Update Route
router.put('/:id', (req, res)=>{
    Album.findByIdUpdate(req.params.id, req.body, {new:true}, (err, updatedAlbum)=>{
        res.json(updatedAlbum)
    })
})

// Create route
router.post('/', (req, res)=>{
    Album.create(req.body, (err, createdAlbum)=>{
        res.json(createdAlbum) //.json() will send proper headers in response so client knows it's json coming back
    })
})

// Show Route
router.get('/:id', (req, res)=>{
    Album.findById(req.params.id, (err, foundAlbum)=>{
        res.json(foundAlbum)
    })
})

module.exports = router