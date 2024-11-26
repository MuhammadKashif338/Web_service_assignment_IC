const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests
app.use(express.static('public')); // Serve static files from the "public" folder

// Palindrome Checker Web Service
app.post('/api/palindrome', (req, res) => {
    const { text } = req.body;
    const isPalindrome = text === text.split('').reverse().join('');
    res.json({ result: isPalindrome ? `"${text}" is a palindrome.` : `"${text}" is not a palindrome.` });
});

// Fibonacci Sequence Web Service
app.post('/api/fibonacci', (req, res) => {
    const { number } = req.body;
    if (number < 1) {
        return res.json({ result: 'Please enter a number greater than 0.' });
    }

    let fib = [0, 1];
    for (let i = 2; i < number; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    res.json({ result: fib });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
