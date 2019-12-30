import mongoose from 'mongoose'
import config from './index'

mongoose.connect(config.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 连接成功

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to' + config.DB_URL)
})

mongoose.connection.on('error', (err) => {
    console.log('error', err)
})

mongoose.connection.on('disconnected', () => {
    console.log('disconnected')
})

export default mongoose;