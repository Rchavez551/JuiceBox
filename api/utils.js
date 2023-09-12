function requireUser(req, res, next) {
  if (req.user){
  next()
  }
  else{
    res.json({message: "Not Authenticated"})
  }
}

module.exports = {
  requireUser
}