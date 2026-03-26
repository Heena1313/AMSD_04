const express=require('express'); 
const app=express(); 
app.use(express.json()); 
const firstHandler = (req,res,next)=>{ 
    if (10>20) 
    { 
        next(); 
    } 
    else{ 
        res.status(403).send('Blocked by firstHandler middleware (10 is not > 20)') 
    } 
}; 
 
app.get('/home',firstHandler,(req,res)=> 
{ 
    res.send("Hello , I am a home page");
}); 
app.get('/about',(req,res)=> 
{ 
res.send("Welcome to the about page"); 
}); 
app.get('/home/:id',(req,res)=> 
{ 
res.send(`Initiating search for ${req.params.id}`); 
}); 
const PORT=5000; 
app.listen(PORT,()=> 
{ 
console.log(` server activate at http://localhost:${PORT}`); 
});
