import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send("All fields are required");
    }

 
    res.send(`User ${name} with email ${email} has been registered successfully!`);
});

router.post('/login',(req,res) => {
    const {email, password} = req.body

    res.send(`the user login sucessful with the email ${email}`)
})
export default router;
