const db = require("../models")
const User = db.User

// Creating  a user
exports.create = async (req, res)=>{
    if(!req.body){
        res.status(400).send("Cannot add without info")
        return;
    }
    let results;

    await fetch('http://localhost:3005/users')
    .then(res=>res.json())
    .then(data=>{
        console.log(results=data.results[0].email)})

      const user = new User({
        username: req.body.username,
        email: results,
        password: req.body.password,
        address: req.body.address,
        contactInfo: req.body.contactInfo
        
      })  

      try{
        user.save()
        .then(user=>{
           
            console.log(user)
            res.send(user)
        })
        return
      }catch (err){
                  res.status(500).send('Could not create a new user')
                  console.log(`Some err occured : ${err.message}`)
  }
}