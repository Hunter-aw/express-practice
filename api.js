const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
    response.send({name: "John", Age: 30});
  });

router.get('/anotherRoute', function(request, response){
    response.send("Hey, I'm another route!");
});

router.get('/me', function(request, response){
    response.send({name: "Hunter", food: "Grilled Cheese", birthday: "December 28th, 1994"})
})

module.exports = router