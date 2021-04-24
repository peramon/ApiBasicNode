const {Router} = require('express');
const router = Router();

// Routes
router.get('/', (req, res)=>{
    const data = {
        "name": "Peramon",
        "website": "peramon@utpl.edu.ec"
    };
    res.json(data);
});

module.exports = router;