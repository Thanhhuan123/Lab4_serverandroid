// const pool = require('../configs/db')

const registration = function (req, res, next) {
    res.render('security/registration', { title: "Registration" });
}

const login = function (req, res, next) {
    res.render('security/login', { title: "Log in" });
}

 
// const handleSignUp = async (req, res) => {
//     const { email, userName, pass } = req.body
//     const urlImageDefault = 'https://firebasestorage.googleapis.com/v0/b/app-lap-top-kotlin.appspot.com/o/image_admin%2Favatar_default.png?alt=media&token=8cae61df-db2b-4210-ae7f-8bb208c5fbd3'
//     // add user to mysql
//     await pool.execute(
//         `insert into users(email, userName, pass, image)
//         values(?, ?, ?, ?)`,
//         [String(email).trim(), String(userName).trim(), String(pass).trim(), String(urlImageDefault).trim()]
//     )

//     return res.redirect(`/`)
// }


