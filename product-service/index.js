const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.json({ message: "Product Service Running" });
});

app.get('/products', (req, res) => {
   res.json([
       { id: 1, name: "Laptop" },
       { id: 2, name: "Phone" }
   ]);
});

app.listen(3001, () => {
   console.log('Product service running on port 3001');
});
