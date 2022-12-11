const app=require("./app")

const DataBase=require("./config/database")
const dotenv=require("dotenv")

// config

dotenv.config({path:"backend/config/config.env"})


// Database Connection
DataBase()




app.listen(process.env.PORT,()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`)
})