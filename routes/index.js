
// // MIDDLEWARE DETECTOR DE SESIÓN
// router.use((req, res, next) => {
//   console.log(req.session)
//   req.session.currentUser ? next() : res.render('authClient/loginClient', { errorMessage: 'Necesitas estar logeado para ver esta página' })
// })

// //RUTAS PROTEGIDAS
// router.get("/profile", (req, res) => {
//   res.render("profile-page", req.session.currentUser)
// })



//AUTH ROUTES
module.exports = (app) => {
  // const index = require("./base.routes");
  // app.use("/", index);

  app.use("/", require("./base.routes"))
  app.use("/authClient", require("./authClient.routes"));
  app.use("/authWorker", require("./authWorker.routes"));
}




 
