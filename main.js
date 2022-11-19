const express = require("express");
const app = express();
const { products } = require("./data");
//query strings:

app.get('/api/v1/query',(req,res)=>{
let sortedProducts=[...products];
const{search,limit}=req.query;

if(search){
  sortedProducts=sortedProducts.filter((product)=>product.name.startsWith(search))
}

if(limit){
  sortedProducts=sortedProducts.slice(0,Number(limit));
}
res.status(200).json(sortedProducts);


})

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
