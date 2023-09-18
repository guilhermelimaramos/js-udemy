exports.homePage = (req, res) => {
  console.log('Sending index')
  res.render('index')
  return;
}

exports.treatsPost = (req, res) => {
  res.send(req.body)
}

