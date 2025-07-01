import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use form data middleware
app.use(express.urlencoded({ extended: true }));



// Route for table generation
app.get('/table', (req, res) => {
    const number = parseInt(req.query.num);
    res.render('table', { num: number });
});

export default serverless(app);
