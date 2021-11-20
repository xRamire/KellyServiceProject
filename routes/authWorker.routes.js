const router = require("express").Router();
const UserWorker = require("../models/workerUser.model")
const bcrypt = require("bcrypt")
////LOGICA DE SIGNUP////////
router.get("/worker-signup", (req, res) => res.render("authWorker/signupWorker"))

router.post("/worker-signup", (req, res) => {

  const { username, password } = req.body

  //Comprobamos si existe el usuario
  UserWorker.find({ username })
    .then(user => {

      //Si ya existe devolvemos error
      if (user.length) {
        res.render("authWorker/signupWorker", { errorMessage: "Usuario ya existente." })
      } else {

        //Si no generamos el salt...
        const bcryptSalt = 10
        const salt = bcrypt.genSaltSync(bcryptSalt)
        //Y encriptamos la contraseña
        const hashPass = bcrypt.hashSync(password, salt)


        UserWorker.create({ username, password: hashPass })
          .then(createdUser => res.redirect("/authWorker/loginWorker"))
          .catch(err => console.log(err))
      }

    })

})
/////////FIN LOGICA SIGNUP/////////////
/////////LOGICA LOGIN/////////////
router.get("/worker-login", (req, res) => {
  res.render("authWorker/loginWorker")
})

router.post("/worker-login", (req, res) => {

  

    const { username, password } = req.body
  
    //Buscamos si existe el usuario
    UserWorker.findOne({ username })
      .then(user => {
  
        //Si el usuario no existe enviamos error
        if (!user) {
          res.render('authWorker/loginWorker', { errorMessage: 'Usuario no reconocido' })
          return
        }
  
        //Si la contraseña no coincide con el hash enviamos error
        if (bcrypt.compareSync(password, user.password) === false) {
          res.render('authWorker/loginWorker', { errorMessage: 'Contraseña incorrecta' })
          return
        }
  
        //5. Enganchar el objeto de usuario al req.session
        req.session.currentUser = user
        console.log(req.session)
    /////////////// TODO PROFILE WORKER
        res.redirect("/worker-profile")
      })
      .catch(err => console.log(err))
  })
  
  
  router.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/'))
  })


/////////LOGICA LOGIN/////////////

module.exports = router;