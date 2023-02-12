 const runPromt =  require('./chatgpt')
 const express = require('express')
 const path = require('path')
 const hbs = require('hbs')
const { query } = require('express')

 const app = express()
 const PORT =  3000

 const publicDirectory = path.join(__dirname , "./public")
 

 app.set('view engine' , 'hbs')
 app.use(express.static(publicDirectory))

app.get('/' , (req , res) => {
    res.render('index' , {
        text : "Smart Application"
    })   
})

app.get('/askquestion',(req , res) => {
    if(!req.query.ask){
         res.send("please ask valid question")
    }else{
       runPromt(req.query.ask).then((response) => {
        res.send(response)
       })
       
    }
})


app.listen(PORT , () => {
    console.log('server is running on port ' + PORT)
})
