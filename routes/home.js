const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<html><h1>Home Page</h1><body>Welcome to My Wallet App</body></html>');
});


module.exports = router;