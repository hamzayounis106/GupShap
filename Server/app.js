
import env from 'dotenv';
env.config();
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
const app = express();

mongoose.connect(process.env.MONGO_URI);
app.use(express.json({ limit: '0.5mb' }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '500mb' }));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('You should not come here ☠💀☠💀💀🤝');
});
