const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
    name: "Users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        username: {
            type: "varchar"
        },
        password:{
            type: "varchar"
        }
    }

})