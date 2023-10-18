const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title : {type :  mongoose.SchemaType.String, require : true},
    description : {type :  mongoose.SchemaTypes.String},
    title : {type :  mongoose.SchemaTypes.String, require : true},
    // user: {
    //     Name: {type: mongoose.SchemaTypes.String},
    //     email: {type: mongoose.SchemaTypes.String},

    // },
    userId: {type: mongoose.SchemaTypes.ObjectId, ref:"User"}
})

const blog = mongoose.model('Blog',blogSchema)

module.exports = blog