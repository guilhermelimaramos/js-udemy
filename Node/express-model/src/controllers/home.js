const HomeModel = require('../models/HomeModel')

HomeModel.create({
  title: 'Other title to test',
  description: ''
})
  .then(data => console.log(data))
  .catch(e => console.log('Error:', e))

exports.homePage = (req, res) => {
  console.log('Sending index')
  res.render('index')
  return;
}

exports.treatsPost = (req, res) => {
  res.send(req.body)
}

