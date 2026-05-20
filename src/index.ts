import express, {Request, Response} from 'express';

const app = express();
const PORT = 3000;

// Middleware: tells express to parse incoming JSON request bodies
app.use(express.json());

// A simple test route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Job Tracker API is running 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
