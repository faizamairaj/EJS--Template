import express from 'express';
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); 


// Use form data middleware
app.use(express.urlencoded({ extended: true }));


// ✅ Use environment port for Render OR default to 3000 (for local)
const port = process.env.PORT || 3000;


// Route for table generation
app.get('/', (req, res) => {
    const number = parseInt(req.query.num);
    res.render('table', { num: number });
});

app.get('/table', (req, res) => {
    // const number = parseInt(req.query.num);
    res.render('table');
});
// ✅ Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// For Vercel, no app.listen()
export default app;