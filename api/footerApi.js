const footer=require('express').Router();
const footerOperations = require('../db/helpers/footerOperations');
const footerObject=require('../models/footermodel');
const titleListModel=require('../models/titlelistmodel');
const titlefootermodel=require('../models/titlefootermodel');
footer.post('/savefooter',(req,res)=> {
    let titleFooter=req.body.titleFooter;
    titleFooter.forEach((eachFooterTitle)=> {
        let titleList=[];
        let titleName=eachFooterTitle.titleName;
        let titleListArray=eachFooterTitle.titleList;
        titleListArray.forEach((listItem)=> {
                let listObject=new titleListModel(listItem.listName,listItem.listLink);
                titleList.push(listObject);
        });
        let titleFooterObject=new titlefootermodel(titleName,titleList);
        footerObject.titleFooter.push(titleFooterObject);
    });
    footerOperations.uploadFooterData(footerObject,res);
});
footer.get('/getfooterdata',(req,res)=> {
    aboutUsOperations.getAboutData(res);
})
module.exports=footer;