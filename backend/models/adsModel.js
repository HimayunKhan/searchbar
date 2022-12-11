const mongoose=require("mongoose");

const adsSchema=new mongoose.Schema({

    
      
      companyId: {
        type: Number,
        required: [true, "Please Enter company ID"],
        maxLength: [8, "company ID cannot exceed 8 characters"],
      },
      primaryText: {
        type: String,
        required: [true, "Please Enter primaryText"],
        trim: true,
      },
      headline: {
        type: String,
        required: [true, "Please Enter headline"],
        trim: true,
      },
      description: {
        type: String,
        required: [true, "Please Enter description"],
        trim: true,
      },
      CTA: {
        type: String,
        required: [true, "Please Enter CTA"],
        trim: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },

}) 

module.exports = mongoose.model("ads", adsSchema);