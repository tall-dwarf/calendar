import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import CalendarRouter from "./routers/CalendarRouter"
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const calendarRouter = new CalendarRouter()
app.use(express.json());
app.use(cors())

app.use('/calendar', calendarRouter.getRouter())

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});