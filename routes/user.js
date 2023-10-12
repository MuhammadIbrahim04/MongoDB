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
router.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        Users: user
    })
})

//Get Single User

router.get('/:id', (req, res) => {
    const users = user.find((data) => data.Id == req.params.id)
    if (!users) {
        res.status(500).send({
            status: 500,
            error: true,
            msg: "User not found"
        })
    }
    if (users) {
        res.status(200).send({
            status: 200, users
        })
    }

})

router.post('/'), (req, res) => {
    user.push({ Name: req.body.Name, Id: user.lenght + 1 })
    res.status(200).send({
        status: 200, user: { Name: req.body.Name, Id: user.length + 1 }
    })
    console.log(req.body);
}


module.exports = router