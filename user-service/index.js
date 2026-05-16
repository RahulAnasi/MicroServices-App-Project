const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "User Service Running" });
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Allison" },
        { id: 2, name: "Denise" }
    ]);
});

app.listen(3000, () => {
    console.log('User service running on port 3000');
});
