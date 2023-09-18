exports.middlewareGlobal = (req, res, next) => {
  if(req.body.client) { 
    console.log()
    console.log(`I seed what is you post ${req.body.client}`)
    console.log()
  }
  next()
}