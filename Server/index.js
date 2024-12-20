const express = require('express')
const app = express()
const port = 3004
const chalk = require('chalk')
require('./Config/dbConn')
const User = require('./Config/User')
const Contact = require('./Config/Contact')
const cors = require('cors')
const bodyparser = require('body-parser')
const google = require('./Config/LoginWithGoogle')
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(cors())

app.use(express.json())

app.use(bodyparser.json())

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red(err));
    } else {
        console.log(chalk.inverse.green(`Server is running on port ${port}`));
    }
});

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(409).json({ field: 'username', message: 'Username already taken' });
            }
            if (existingUser.email === email) {
                return res.status(409).json({ field: 'email', message: 'Email already in use' });
            }
        }

        // Hash password before saving
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.status(200).send('success');
            } else {
                res.status(400).send('password incorrect');
            }
        } else {
            res.status(400).send('you have to register before login');
        }
    } catch (error) {
        console.log(chalk.inverse.red('Error during login:', error));
        res.status(500).json({ message: 'An error occurred during login' });
    }
});



app.post('/api/google-login', async (req, res) => {
    const { googleId, email, name, profilePic } = req.body;
    let user = await google.findOne({ googleId });
    if (!user) {
      user = new google({ googleId, email, name, profilePic });
      await user.save();
    }
    res.status(200).json(user);
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'treklenn@gmail.com',
        pass: 'ghwt jfjd admx kxjr',
    }
});

  app.post('/contact', async (req, res) => {
    try {
        const { fullname, email, phone, message } = req.body;
        const { firstname, lastname } = fullname;

        const newContact = new Contact({ fullname, email, phone, message });
        await newContact.save();

        const mailOptions = {
            from: 'treklenn@gmail.com',
            to: email,
            subject: 'Welcome to Treklen',
            text: `Dear ${firstname} ${lastname},

\n\nThank you for getting in touch with us. We appreciate your effort and look forward to helping those in need.

Best regards,
TrekLen Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(chalk.red('Error sending email:', error));
                return res.status(500).json({ alert: 'Data saved, but error occurred while sending email.' });
            }
            console.log('Email sent:', info.response);
            res.status(201).json({ alert: 'Contact form data saved and email sent successfully' });
        });

    } catch (error) {
        console.log(chalk.inverse.red('Error saving contact form data:', error));
        res.status(500).json({ alert: 'Error occurred while saving data' });
    }
});