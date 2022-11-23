const express = require('express');
const cors = require('cors');
//route
const contacts = require("./routes/contacts");
//base de datos
const db = require("./db/connection");
const app = express();

//port
const port = process.env.PORT || 2020;

//base de datos
(async ()=>{
    try{
        await db.authenticate()
        await db.sync();
        console.log("Conectados a la base de datos")
    }
    catch(error){
        throw new Error(error)
    }
})();

//middleware
app.use(express.json()); //recive information
app.use(cors()); //let other aplications made requests tu our app

app.use("/contacts", contacts);

app.listen(port, () => {
    console.log("server running at port: ", port);
});