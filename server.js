const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Oracle',
        database: 'face_detect'
    }
});
const register = require('./controllers/register');
const signIn = require('./controllers/signIn');
const profile=require('./controllers/profile');
const image=require('./controllers/image');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(database.users);
})
app.post('/signin', (req, res) => { signIn.handleSignIn(req, res, db, bcrypt) });
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
app.get('/profile/:id', (req,res)=> {profile.handleProfile(req,res,db)});
app.put('/image',(req,res)=>{image.handleImage(req,res,db)});
app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)});

app.listen(3000, () => {
    console.log('app is runnning on port 3000');
})

