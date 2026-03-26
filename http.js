const express=require('express'); 
const app=express(); 
let users=[]; 
app.use(express.json()) 
app.post('/users',(req,res)=> 
{ 
const user=req.body; 
users.push(user); 
res.status(201).send(`User added : ${JSON.stringify(user)}`); 
}); 
app.get('/users',(req,res)=> 
{ 
    res.status(200).json(users); 
}); 
 
app.delete('/users/:id',(req,res)=> 
{ 
    const userid=parseInt(req.params.id); 
    const initiallength=users.length; 
    users=users.filter(user=>user.id !== userid); 
 
    if(users.length<initiallength) 
    { 
        res.send(`User with ID ${userid} deleted`); 
 
    } 
 
    else 
    { 
        res.status(404).send('User Not Found'); 
    } 
}); 
 
const PORT=4000;  
app.listen(PORT,()=> 
{ 
console.log(` server activate at http://localhost:${PORT}`); 
}); 
