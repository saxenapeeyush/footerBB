const footer=require('express').Router();
const footerOperations = require('../db/helpers/footerOperations');
const footerObject=require('../models/footermodel');
const titleListModel=require('../models/titlelistmodel');
const titlefootermodel=require('../models/titlefootermodel');
footer.post('/savefooter',(req,res)=> {
    let titleFooterPrevious=footerObject.titleFooter;
    if(titleFooterPrevious.length>0) {
        titleFooterPrevious.length=0;
    }
    let titleFooter=req.body.titleFooter;
    titleFooter.forEach((eachFooterTitle)=> {
        let titleList=[];
        let titleName=eachFooterTitle.titleName;
        let titleListArray=eachFooterTitle.titleList;
        titleListArray.forEach((listItem)=> {
                for(let key in listItem) {
                    if(key=="listName"){
                        var listName=listItem[key];
                    }
                    else {
                        var listLink=listItem[key];
                    }
                }
                let listObject=new titleListModel(listName,listLink);
                titleList.push(listObject);
        });
        let titleFooterObject=new titlefootermodel(titleName,titleList);
        titleFooterPrevious.push(titleFooterObject);
    });
    footerOperations.uploadFooterData(footerObject,res);
});
footer.get('/getfooterdata',(req,res)=> {
    footerOperations.getFooterData(res);
})
module.exports=footer;