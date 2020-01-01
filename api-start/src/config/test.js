import { getVal, setVal,getHVal } from './RedisConfig'

setVal('imooc', 'imooc message from redis client')
getVal('imooc').then(res => {
    console.log('res', res)
})

setVal('imoocObj', {name: 'simoon', age: 30})
getHVal('imoocObj').then(res => {
    console.log('res', res)
})