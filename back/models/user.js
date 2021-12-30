const Sequelize = require('sequelize')

module.exports = class Board extends Sequelize.Model{
    static init(sequelize){
        return super.init({

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
        
    }
}