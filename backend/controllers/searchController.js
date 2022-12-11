
const companyModel=require("../models/companyModel")
const adsModel=require("../models/adsModel")

exports.searchProduct=async(req,res)=>{
try {
    const data = await adsModel.aggregate([
        {
          '$lookup': {
            'from': 'company', 
            'localField': 'companyId', 
            'foreignField': 'id', 
            'as': 'results'
          }
        },
        {
            '$unwind': {
              'path': '$results'
            }
          },
        {
          '$match': {
            '$or': [
              {
                'primaryText': {
                  '$regex': req.params.key, 
                  '$options': 'i'
                }
              }, {
                'headline': {
                  '$regex': req.params.key, 
                  '$options': 'i'
                }
              }, {
                'description': {
                  '$regex': req.params.key, 
                  '$options': 'i'
                }
              }, {
                'results.name': {
                  '$regex': req.params.key, 
                  '$options': 'i'
                }
              }
            ]
          }
        },  {
          '$project': {
            'imageUrl': true
          }
        }
      ])
    
      return res.send(data);
    } catch (error) {
        return res.send(error.message);
    }
}