const express = require ("express");
const  bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');




app.get("/",function (req,res){

    var today = new Date();
    var currentday = today.getDay();
    var day = "";

    if (currentday ==0 ){
        day = " sunday";
    }else if  (currentday ==1 ){
        day = " monday";
    } else if (currentday ==2 ){
        day = " tuesday";
    }else if (currentday ==3 ){
        day = " wenesday";
    }else if (currentday ==4 ){
        day = " thersday";
    }else if (currentday ==5 ){
        day = " friday";
    }
    else {
        day = "saturday";
    }
    res.render("list",{kindofday:day});


});


app.listen (3000,function (){
    console.log("the server is running in server 3000");
});