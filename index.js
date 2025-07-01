const express = require ('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', "template") // views/template
const port = 5000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

app.listen(port,()=> {
    console.log(`Server is running on http://localhost:${port}`); 
})


app.get('/table', (req, res) => {
    const number = parseInt(req.query.num);
    res.render('table', { num: number });
});







