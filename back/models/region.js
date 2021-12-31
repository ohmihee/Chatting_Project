const Sequelize = require('sequelize')

module.exports = class Region extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            option:{
                type:Sequelize.STRING
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'Region',
            tableName:'regions',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }

}