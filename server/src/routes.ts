import express from 'express';

const routes = express.Router(); 


routes.get('/users',(request,response)=>{
    console.log('listagem')
    response.json([
        'Thiago',
        'teste'
    ])
})


export default routes