const {Sequelize} = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    FIO: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Listings = sequelize.define('Listings', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, defaultValue: 'NEW'}
})

