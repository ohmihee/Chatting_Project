const Sequelize = require('sequelize')

module.exports = class Board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            board_id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            title:{
                type:Sequelize.STRING,
            },
            peoples:{
                type:Sequelize.STRING,
                comment:'성진,미희,, ,를 기준으로 추가됨'
            },
            board_type:{
                type:Sequelize.INTEGER,
                comment:''
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'Board',
            tableName:'boards',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Board.belongsToMany(db.Chat,{through:'board_id'})
    }
}