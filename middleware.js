const express=require('express');

const app=express();

const reqFilter=require('./separate');
//Apply middleware on group:
const route=express.Router();
route.use(reqFilter);

//Application level middleware:
//app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Homepage');

})
//Route level middleware:
route.get('/user',reqFilter,(req,resp)=>{
    resp.send('Users');

})
route.get('/about',reqFilter,(req,resp)=>{
    resp.send('About');

})

app.use('/',route);
app.listen(5000);