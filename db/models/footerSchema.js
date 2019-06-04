const mongoose = require('../connection');
const footerSchema = mongoose.Schema;
const footer = new footerSchema({
    date:{type:String},
    currentStatus:{type:Boolean},
    titleFooter:[{
        titleName:{type:String},
        titleLists:[{
            listName:{type:String},
            listLink:{type:String}
        }]
    }]
});
const Footer = mongoose.model('footers',footer);
module.exports=Footer;