module.exports = mongoose =>{
    const userSchema = mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        contactInfo: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            
        }
    })

    schemaUser.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
});

let User = mongoose.model('User',schemaUser );
return User
 
}



