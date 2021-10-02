const mongoose = require('mongoose')
const Schema = mongoose.Schema

const day = new Date()
const timestamp = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate().toString().length === 2 ? day.getDate() : '0' + day.getDate()}, ${day.getHours().toString().length === 2 ? day.getHours() : '0' + day.getHours()}:${day.getMinutes().toString().length === 2 ? day.getMinutes() : '0' + day.getMinutes()}`

const userSchema = new Schema(
  {
    username: {type: String, required: true},
    password: {type: String, required: true},
    membershipStatus: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
  }
)

const messageSchema = new mongoose.Schema(
  {
    title: {type: String, required: true},
    text: {type: String},
    timestamp: {type: String, default: timestamp},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
  }
)

const User = mongoose.model('User', userSchema)
const Message = mongoose.model('Message', messageSchema)

module.exports = {User, Message};