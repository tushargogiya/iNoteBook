const express = require('express')
const router = express.Router()
const Notes=require('../models/Notes')
const fetchuser=require('../middleware/fetchuser')
const {body,validationResult}=require('express-validator')
router.get('/getallnotes',fetchuser, async (req, res) => {
    try {
        let id=req.user.id;
        let notes=await Notes.find({id});
        res.send(notes);    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");   
    }
      
  });
  //
 // router 2 for adding a note via post request
 router.post('/addnote',fetchuser,[ body('title', 'Enter a valid title').isLength({ min: 3 }),
 body('description', 'description cannot be too much short').isLength({ min: 5 })],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const{title,description,tag}=req.body
        const note=new Notes({title,description,tag,user:req.user.id});
        const savednotes=await note.save()
        res.send(savednotes);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");   
    }

 });

 //router 3 for updating existing notes put request login required /updatenote
 router.put('/updatenote/:id',fetchuser,async(req,res)=>{
    const{title,description,tag}=req.body
    let newnote={}
    if(title){newnote.title=title};
    if(description){newnote.description=description};
    if(tag){newnote.tag=tag};

    let note=await Notes.findById(req.params.id);

    if(!note)
    {
        return res.status(404).send("Not found");
    }
    if(note.user.toString()!==req.user.id)
    {
        return res.status(401).send("Access denied");
    }

    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true});
    res.json({note});

 });

 //router 4 for deleting existing notes delete request login required /deletenote
 router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    let note=await Notes.findById(req.params.id);
    if(!note)
    {
        return res.status(404).send("Not found");
    }
    if(note.user.toString()!==req.user.id)
    {
        return res.status(401).send("Access denied");
    }

    note=await Notes.findByIdAndDelete(req.params.id);
    res.json({note:note,"success":"Note deleted"});

 });
module.exports=router