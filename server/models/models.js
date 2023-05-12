const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "User"},
})

const Hero = sequelize.define('hero', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Rarity = sequelize.define('rarity', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,  unique: true, allowNull: false}
})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,  unique: true, allowNull: false}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER,  unique: true, allowNull: false}
})

const HeroInfo = sequelize.define('hero_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.STRING, allowNull: false},
    desc: {type: DataTypes.STRING, allowNull: false}
})

const Mode = sequelize.define('mode', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const ModeInfo = sequelize.define('mode_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.STRING, allowNull: false},
    desc: {type: DataTypes.STRING, allowNull: false}
})

User.hasMany(Rating)
Rating.belongsTo(User)

Type.hasMany(Hero)
Hero.hasMany(Type)

Rarity.hasMany(Hero)
Hero.belongsTo(Rarity)

Hero.hasMany(Rating)
Rating.belongsTo(Hero)

Hero.hasMany(HeroInfo, {as: 'info'})
HeroInfo.belongsTo(Hero)

Mode.hasMany(ModeInfo, {as: 'info'})
ModeInfo.belongsTo(Mode)

module.exports = {
    User,
    Hero,
    Type,
    Rating,
    HeroInfo,
    Rarity,
    Mode,
    ModeInfo
}

