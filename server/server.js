import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import Lunch from './src/usingDB/controllers/lunches';
import User from './src/usingDB/controllers/users';
import Auth from './src/usingDB/middleware/Auth';
import cors from 'cors';

dotenv.config();
const app = express()

app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))

app.get('/', (req, res) => {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

app.get('/api/v1/users', User.getAll);
app.post('/api/v1/users', User.create);
app.post('/api/v1/users/login', User.login);
app.put('/api/v1/users/:userID', User.update);
app.delete('/api/v1/users/me', Auth.verifyToken, User.delete);

app.post('/api/v1/lunches', Auth.verifyToken, Lunch.create);
app.get('/api/v1/lunches', Auth.verifyToken, Lunch.getAll);
app.get('/api/v1/lunches/:id', Auth.verifyToken, Lunch.getOne);
app.put('/api/v1/lunches/:id', Auth.verifyToken, Lunch.update);
app.delete('/api/v1/lunches/:id', Auth.verifyToken, Lunch.delete);

app.listen(5000)
console.log('app running on port ', 5000);