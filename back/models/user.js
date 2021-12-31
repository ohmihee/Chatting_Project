const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user_id:{
                type:Sequelize.STRING,
                allowNull:false,
            },
            user_pw:{
                type:Sequelize.STRING,
                allowNull:false,
            },
            age:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            region:{
                type:Sequelize.STRING,
            },
            favorite:{
                type:Sequelize.STRING
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.User.belongsToMany(db.Chat,{through:'user_id'})
    }

}