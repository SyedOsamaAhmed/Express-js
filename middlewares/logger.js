const logger = (req, res, next) => {
    const method = req.method,
      url = req.url,
      time = new Date().getFullYear();
    console.log(method, url, time);
     next();
    // res.send('testing');
  };


  module.exports=logger;