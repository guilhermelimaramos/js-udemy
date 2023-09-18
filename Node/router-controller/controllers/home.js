exports.homePage = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  <p>Name: <input type="text" name="name"></p>
  <p>Lastname: <input type='text' name="lastname"></p>

  <button> Enviar </button>
  </form> `)
}

exports.treatsPost = (req, res) => {
  res.send(`
  Hello, ${req.body.name} ${req.body.lastname}`)
}

