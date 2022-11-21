const authorize=(req,res,next)=>{
const{user}=req.query;
   if(user==='osama'){
    req.query={name:"Osama",id:2};
    next();
   }else{
       res.status(401).send('Unauthorized');
       next();
   }
}

module.exports=authorize;