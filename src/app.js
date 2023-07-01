const express = require('express');

const { bookRouter, libraryRouter, userRouter } = require("./routes");
const loggingMdw = require('./middleware/logging');
const { initializeDB } = require('./config/db-config');

const PORT = 8080;

const app = express();


// Application Midlewares
app.use(express.json()); // cada vez que llega un json lo parsea

app.use(loggingMdw);


app.get('/user', (req, res)=>{
    console.log("User", req.user);
    res.send('<h1>Hello World</h1>');
});

app.use("/book", bookRouter);
app.use("/library", libraryRouter);
app.use("/user", userRouter);

app.listen(PORT, async() => {
    await initializeDB();
    console.log(`Server running in port ${PORT}`);
});



