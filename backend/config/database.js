const mongoose = require("mongoose");

const DataBase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`mongodb is running at ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};


module.exports=DataBase
