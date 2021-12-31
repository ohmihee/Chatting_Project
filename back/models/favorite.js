const Sequelize = require('sequelize')

module.exports = class Favorite extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            option:{
                type:Sequelize.STRING,
                comment:'관심사 ex)운동, 독서, 개발...'
            }

        },{
            sequelize,
            timestamps:false,
            modelName:'Favorite',
            tableName:'favorites',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }

}