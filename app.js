const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello, World! Thank you for coming. Nice meeting you');
});
const port = 3000;
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});