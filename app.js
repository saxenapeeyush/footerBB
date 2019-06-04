const express=require('express');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./api/footerApi'));
app.listen(process.env.PORT || 4321 , (err)=> {
    if(err) {
        console.log("Error while loading the backend server at 4321");
    }
    else {
        console.log("Server started successfully");
    }
});