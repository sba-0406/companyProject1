// const express = require('express');
// const app = express();
// const postsRoutes = require('./routes/postsRoutes');

// app.use(express.json());

// // MOUNT the routes
// // Any request starting with /posts is sent to the postsRoutes router
// app.use('/posts', postsRoutes);

// app.listen(3000, () => {
//     console.log('MVC Server running on 3000');
// });

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const postRoutes = require('./routes/postsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve frontend files

app.use('/posts', postRoutes);
app.use('/users', usersRoutes);

app.listen(port, () => {
    console.log("mvc struct server running on port ", port);
})
