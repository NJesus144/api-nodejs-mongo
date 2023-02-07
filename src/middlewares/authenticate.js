module.exports = (req, res, next) => {
  console.log('middleware'); 
  const authHeader = req.headers.authorization;
  
  if(!authHeader) {
    return res.status(401).json({
      error: true,
      message: "Token no provided"
    })
  }


  console.log(authHeader);

  next()
}