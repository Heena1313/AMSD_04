const session=require('express-session'); 
const coockieparser=require('cookie-parser'); 
const express=require('express'); 
const app = express(); 
const port = 4000; 
app.use(coockieparser()); 
app.use(session({ 
secret:'mykey', 
saveUninitialized:true, 
resave:false
})); 
app.get('/',(req,res)=>{ 
    res.send("session and cookie example"); 
}); 
app.get('/login',(req,res)=>{ 
    req.session.user='Abhinay'; 
    res.cookie('sessionId',req.sessionID); 
    res.send("Session and cookie created for Abhinay"); 
}); 
app.get('/dashboard',(req,res)=>{ 
    const coockieId=req.cookies.sessionId; 
    if(coockieId && req.session.user){ 
        res.send(`Welcome to the dash board 
${req.session.user}`); 
    } 
    else{ 
        res.send("Please login to access dashboars first"); 
    } 
}); 
app.get('/logout',(req,res)=>{ 
    req.session.destroy(); 
    res.clearCookie('sessionId'); 
    res.send("Logged out successfully") 
}); 
app.listen(port, () => { 
    console.log(`🚀 Server running at 
http://localhost:${port}`); 
}); 
