const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to display the bus payment page
app.get('/buspayment', (req, res) => {
    res.sendFile(path.join(__dirname, 'busspayment.html'));
});

// Route to handle QR code generation for blockchain payment
app.get('/generate-qr-code', (req, res) => {
    const qrCodeUrl = 'https://randomqr.com/assets/images/rickroll-qrcode.webp'; // Placeholder, replace with actual QR code generation logic

    // Respond with the QR code URL (replace with actual generation logic)
    res.json({ qrCodeUrl });
});

// Route to handle payment confirmation
app.post('/confirm-payment', (req, res) => {
    const paymentMethod = req.body.paymentMethod;

    // Process payment (mock logic for now)
    if (paymentMethod === 'blockchain') {
        // Blockchain payment processing logic (mock for now)
        console.log('Processing blockchain payment...');
    } else if (paymentMethod === 'cash') {
        console.log('Cash payment selected...');
    }

    // Redirect to the confirmation page after processing payment
    res.redirect('busconfirmation.html');
});

// Serve the bus confirmation page
app.get('/busconfirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'busconfirmation.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:3000/buspayment`);
});
