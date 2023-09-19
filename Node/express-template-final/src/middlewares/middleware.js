exports.middlewareGlobal = (req, res, next) => {
  res.locals.aVarLocal = 'Valeu of local variable'
  next()
}

exports.checkCsrfErro = (err, req, res) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404')
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}