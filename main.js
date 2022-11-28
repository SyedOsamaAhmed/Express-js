const express = require("express");
const app = express();
const peopleRouter=require('./routes/people');






app.use(express.json());
app.use('/api/people',peopleRouter);



app.listen(5000, () => {
  console.log("Server running at port 5000");
});
