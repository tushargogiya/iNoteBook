const express = require('express')
const router = express.Router()
const User=require('../models/Users')
const fetchuser=require('../middleware/fetchuser')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
let JWT_SECRET=process.env.REACT_APP_SECRET
const {body,validationResult}=require('express-validator')
//post request for saving user data /api/auth/createuser
router.post('/createuser',[ body('email','enter valid email').isEmail(),
body('password','enter valid password').isLength({ min: 5 }),
body('name','enter valid name').isLength({ min: 3 }),
],async (req,res)=>{
  let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
let user=await User.findOne({email:req.body.email})
if(user)
{
    return res.status(400).json({success, error:'we have same email already'})

}
let salt =bcrypt.genSaltSync(10);
let secpassword= bcrypt.hashSync(req.body.password,salt);
    user=await User.create({
      name: req.body.name,
      password: secpassword,
      email:req.body.email
    })
data={
  user:{
  id:user.id
    }  }
  let token = jwt.sign(data,JWT_SECRET);

success=true;
    res.json({success,token});
   
} catch (error) {
    console.error(error.message);
    res.status(500).send("soe error occured");
        
}
}) ;

//creating endpoint for login;/api/auth/sign
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});
//ROUTER 3 FOR GETTING USER DETAILS WITH LOGIN DETAILS /api/auth/getuser
router.post('/getuser',fetchuser, async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  
  try {
    let id=req.user.id;
    let user = await User.findById(id).select("-password");
res.send(user);
   
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


module.exports=router