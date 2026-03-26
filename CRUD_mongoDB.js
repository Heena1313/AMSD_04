// Import required modules 
const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser"); 
const app = express();
app.use(bodyParser.json()); 

// 1. Connect to MongoDB 
mongoose.connect("mongodb://localhost:27017/mydb",  
{ 
useNewUrlParser: true, 
useUnifiedTopology: true })  
.then(() => console.log("✅ Connected to MongoDB"))  
.catch((err) => console.error("❌ MongoDB connection error:", err));  

// 2. Define a Schema & Model const 
userSchema = new mongoose.Schema({   
    name: String,   
    email: String,   
    age: Number  
});  
const User = mongoose.model("User", userSchema); 

// ---------------- CRUD OPERATIONS ----------------  
// Create (POST) app.post("/users", async (req, res) => {   
try {    
 const user = new User(req.body);     
await user.save();     
res.status(201).send(user);  
} catch (error) {     
res.status(400).send(error);  
}  
});  

// Read All (GET) app.get("/users", async (req, res) => {   
try {     
const users = await User.find();     
res.send(users);   
} catch (error) {     
res.status(500).send(error);  
}  
});  

// Read One by ID (GET) app.get("/users/:id", async (req, res) => {   
try {    
 const user = await User.findById(req.params.id);    
return res.status(404).send({ message: "User not found" });     
res.send(user);   
} catch (error) {     
 if (!user) 
res.status(500).send(error);  
}  
});  

// Update (PUT) app.put("/users/:id", async (req, res) => {   
try {  
const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });     
if (!user) return res.status(404).send({ message: "User not found" });     
res.send(user);   
} catch (error) {     
res.status(400).send(error);  
}  
});  

// Delete (DELETE) app.delete("/users/:id", async (req, res) => {   
try 
{     
const user = await User.findByIdAndDelete(req.params.id);     
if (!user) return res.status(404).send({ message: "User not found" });     
res.send({ message: "User deleted successfully" });  
} catch (error) {     
res.status(500).send(error);  
}  
});  

// --------------------------------------------------  
// Start server const 
PORT = 3000;  app.listen(PORT,  ()  =>  http://localhost:${PORT}`));  
