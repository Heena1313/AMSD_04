const express=require('express'); 
const app=express(); 
app.get('/',(req,res)=> 
{ 
res.send("Hello, welcome to the website"); 
}); 
app.get('/users/:idl',(req,res)=> 
{ 
const userid=req.params.idl; 
res.send(`The user id is  ${userid}`); 
}); 
app.get('/users/:userid/books/:bookid',(req,res)=> 
{ 
const {userid,bookid}=req.params; 
res.send(`The user ${userid} selected the book #${bookid}`); 
}); 
app.get('/search',(req,res)=> 
{ 
const { keyword,limit }= req.query; 
res.send(`Searching for "${keyword}" - showing top ${limit} results`); 
}); 
app.get('/url-info',(req,res)=> 
{ 
const fullurl=`${req.protocol}://${req.get('host')}${req.originalUrl}`; 
res.send(`You accessed this endpoint via ${fullurl}`); 
}); 
const PORT=4000; 
app.listen(PORT,()=> 
{ 
console.log(`Expree server activate at http://localhost:${PORT}`); 
});
