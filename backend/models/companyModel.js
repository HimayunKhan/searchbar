const mongoose=require("mongoose");

const companySchema=new mongoose.Schema({

    id: {
        type: Number,
        required: [true, "Please Enter ID"],
        maxLength: [8, "ID cannot exceed 8 characters"],
      },
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
      },
      url: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
      }
      
}) 

module.exports = mongoose.model("company", companySchema);