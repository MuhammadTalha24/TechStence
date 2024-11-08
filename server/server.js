import express from 'express'
import authRoutes from './routes/authRoutes.js'
import contactRoutes from './routes/contactRoute.js'
import adminRoutes from './routes/adminRoutes.js'
import dbConnection from './db/dbConnection.js';
import env from 'dotenv'
import errorHandler from './middlewares/errorMiddleware.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
const app = express();
env.config()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    credentials: true,
    origin: "*"
}))


// Routes
app.use('/api/v1', authRoutes);
app.use('/api/v1', contactRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', serviceRoutes);
app.use('/api/v1', adminRoutes);
app.use(errorHandler);

dbConnection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server Running At ${process.env.PORT}`)
    })
})
