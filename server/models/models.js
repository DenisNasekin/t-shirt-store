const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Tshit = sequelize.define('tshit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
})

const TshitInfo = sequelize.define('tshit_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketTshit = sequelize.define('basket_tshit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Club = sequelize.define('club', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const TypeClub = sequelize.define('type_club', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketTshit)
BasketTshit.belongsTo(Basket)

Tshit.hasMany(TshitInfo)
TshitInfo.belongsTo(Tshit)

Type.hasMany(Tshit)
Tshit.belongsTo(Type)

Club.hasMany(Tshit)
Tshit.belongsTo(Club)

Tshit.hasMany(BasketTshit)
BasketTshit.belongsTo(Tshit)

Type.belongsToMany(Club , {through: TypeClub})
Club.belongsToMany(Type , {through: TypeClub})

module.exports = {
    User,
    Tshit,
    TshitInfo,
    Basket,
    BasketTshit,
    Type,
    Club,
    Rating,
    TypeClub
}