const Sequelize = require('sequelize')

module.exports = class Chat extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            board_id:{
                type:Sequelize.INTEGER,
                allowNull:false
            },
            user_id:{
                type:Sequelize.STRING,   
                allowNull:false             
            },
            date:{
                type:Sequelize.DATE,
                defaultValue:sequelize.literal('now()')
            },
            contents:{
                type:Sequelize.TEXT,
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'Chat',
            tableName:'chats',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Chat.belongsToMany(db.Board,{through:'board_id'}),
        db.Chat.belongsToMany(db.User,{through:'user_id'})
        
    }
}