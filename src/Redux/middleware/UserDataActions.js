import axios from 'axios';




export const UserRegisterHandler = (userData) => {
    console.log('arrived' , userData)
    return async () => {
        await axios.post('https://jsonplaceholder.typicode.com/posts').then( console.log('success') ).catch(console.log('failed'))
    }
}

export const UserLoginHandler = (userData) => {
    console.log('arrived');
    return async () => {
        await axios.post('https://jsonplaceholder.typicode.com/posts',{...userData}).then(console.log('success')).catch(console.log('error'))
    }
}