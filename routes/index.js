var express = require('express');
var router = express.Router();
const cars = require('../controller/cars')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/cars', cars.getCars);
router.post('/cars/create', cars.createCars);
router.put('/cars/update/:id', cars.updateCars);
router.delete('/cars/:id', cars.deleteCars);


router.get('/', (req,res) => {
    res.render('index', {data: {}})
})

module.exports = router;
