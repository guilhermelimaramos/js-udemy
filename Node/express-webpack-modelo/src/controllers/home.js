exports.homePage = (req, res) => {
  res.render('index')
}

exports.treatsPost = (req, res) => {
  res.send(`
  Hello, ${req.body.name} ${req.body.lastname}`)
}

