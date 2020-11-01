const { router } = require('express');
const express = require('express');
const router =require('./routes');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(router); 


let dataBase = [
    {id:1,artistName:"Pablo",paintings:"a",price:00},
    {id:2,artistName:"Davenci",paintings:"b",price:00},
    {id:3,artistName:"Van Gogh",paintings:"c",price:00},
    {id:4,artistName:"Michel Angelo",paintings:"d",price:00},
    {id:5,artistName:"Edvard Munch",paintings:"e",price:00}
];

app.get('/id',(req,res)=>{
    console.log("welcom to project-3 server")
    
    res.json(dataBase)
})

app.get('/artistName',(req,res)=>{
    console.log("take a look on our artists")
    res.json(dataBase)
})

app.get('/paintings',(req,res)=>{
    console.log("there are a most famous paintings")
    res.json(dataBase)
})

app.put('/paintings/:index',(req,res)=>{
    const {index}=req.params
    const {newPaintings}=req.body // new put
    dataBase[index].paintings=newPaintings
    res.json(dataBase)
})

app.post('/actorName',(req,res)=>{
    dataBase.push(req.body)
    
    res.json(dataBase)
})

app.delete('/actorName',(req,res)=>{
    dataBase = []
    console.log("Delete is confirmed")
    res.json(dataBase)
})


// i have an error but i don`t know how to handle it -_-
app.delete('/id/paintings/:paintings',(req,res) =>{       
    dataBase= dataBase.filter((element,index)=>{
        return element.paintings != req.params.paintings
    });
    res.json(dataBase)
})


/* 
*/
const port = 3000 || process.env.port;
app.listen(port, () => {
  console.log(`SERVER ON at http://localhost:${port}`);
});