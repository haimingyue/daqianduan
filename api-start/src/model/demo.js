import User from './test'

const user = {
    name: 'brian',
    age: 30,
    email: 'abc@qq.com'
}

const insertMethods = async () => {
    const data = new User(user)
    const result = await data.save()
    console.log(result)
}


const findMethods = async () => {
    const result = await User.find()
    console.log(result)
}

const updateMethods = async () => {
    const result = await User.updateOne({name: 'brian'}, {name: 'simood'})
    console.log(result)
}

const deleteMethods = async () => {
    const result = await User.deleteOne({name: 'brian'})
    console.log(result)
}

updateMethods()