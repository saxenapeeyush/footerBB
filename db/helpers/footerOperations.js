const footerModel=require('../models/footerSchema');
const config = require('../../utils/config');
const footerOperations = {
    uploadFooterData(footerObject,res) {
        footerModel.findOne({},(err,docs)=> {
            if(err){
                res.status(500).json({"message":"Error while finding the document in Footer CRUD","Status":config.ERROR});
            }
            else if(!docs) {
                footerModel.create(footerObject,(err)=> {
                    if(err) {
                        res.status(500).json({"message":"Unable to add to the database ","Status":config.ERROR});
                            }
                    else{
                        res.status(200).json({"message":"Added to database Successfully","Status":config.SUCCESS});
                            }
            });
            }
            else {
                footerModel.findOneAndUpdate({"currentStatus":true},{"currentStatus":false},(err)=> {
                    if(err) {
                        res.status(500).json({"message":"Can't find and update in the Footer CRUD","Status":config.ERROR});
                    }
                    else {
                        footerModel.create(footerObject,(err)=> {
                            if(err) {
                                res.status(500).json({"message":"Unable to add to the database ","Status":config.ERROR});
                                    }
                            else{
                                res.status(200).json({"message":"Added to database Successfully","Status":config.SUCCESS});
                                    }
                    });
                    }
                })
            }
        })
    },
    getFooterData(res) {
        footerModel.findOne({"currentStatus":true},(err,doc)=> {
            if(err) {
                res.status(500).json({"message":"Error while finding the data in the database ","Status":config.ERROR});
            }
            else if(!doc) {
                res.status(404).json({"message":"Not Found","Status":config.NOT_FOUND});
            }
            else {
                res.status(200).json({"message":"Successfully find the data of about us section","data":doc,"Status":config.SUCCESS});
            }
        });
    }
}
module.exports=footerOperations;