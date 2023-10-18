const app = require("express");
const router = app.Router();


const user = [
    {
        Name: 'IBM',
        Id: 1,
    },
    {
        Name: 'ABC',
        Id: 2,
    },
    {
        Name: 'DEF',
        Id: 3,
    },
    {
        Name: 'GHI',
        Id: 4,
    },


]
//Get All Users
router.get('/',(req,res)=>{
    res.status(200).send({
        status : 200,
        user : user
    })
    
})

//Get single User
router.get('/:Id', (req,res)=>{
    if(user[req.params.Id-1]){
        res.status(200).send({
            status : 200,
            user : user[req.params.Id-1]
        })
    }
    
    else{res.status (500).send({
        status : 500,
        msg : "User not Found"
    })
}
    
})



//Get All Users
// router.get('/', (req, res) => {
//     res.status(200).send({
//         status: 200,
//         Users: user
//     })
// })

//Get Single User

// router.get('/:id', (req, res) => {
//     const users = user.find((data) => data.Id == req.params.id)
//     if (!users) {
//         res.status(500).send({
//             status: 500,
//             error: true,
//             msg: "User not found"
//         })
//     }
//     if (users) {
//         res.status(200).send({
//             status: 200, users
//         })
//     }

// })

// router.get('/:Id', (req, res) => {
//     if (user[req.params.Id - 1]) {
//         res.status(200).send({
//             status: 200,
//             User: user[req.params.Id - 1]

//         })
//     }
//     else {
//         res.status(500).send({
//             status: 500,
//             msg: 'User not Found'
//         })
//     }
// })

// router.post('/', (req, res) => {
//     user.push({ Name: req.body.name, Id: user.length + 1 })
//     res.status(200).send({
//         status: 200,
//         user: user
//     })
// }
//     )


// router.delete('/:Id', (req, res) => {
//     user.splice(req.params.Id - 1, 1)
//     res.status(200).send({
//         status: 200,
//         user: user
//     })
// }
// )

// router.put('/:Id',(req,res)=>{
//     user[req.params.Id-1].Name = req.body.Name
//     res.status(200).send({
//         status : 200,
//         user : user[req.params.Id-1]
//     })
// })

module.exports = router