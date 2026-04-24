
const express=require("express");
const app=express();
const PORT=3000;

app.use(express.json());
app.use(express.static(public));

const arr=[{shorturl:""}];
function getUrl(length){
    const chars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNO1234567890';

    let shorturl='';

    for(let i=0;i<length;i++){
        shorturl=shorturl+chars.charAt(Math.floor(Math.random()*100));
    }
}


ebGkCCn862RkEgIx

alishashaik_db_user



mongodb+srv://alishashaik_db_user:94Dxi3mNvNOghIdz@cluster0.kwned3u.mongodb.net/?appName=Cluster0