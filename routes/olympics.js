var router = require('express').Router();

var lifters = [new athlete("Jenny Arthur", "Gainesville, GA"), new athlete("Kendrick Farris", "Shreveport, LA"), new athlete("Morgahn King", "Redmond, WA"), new athlete("Sarah Robles", "Desert Hot Springs, CA"), new athlete("Jenny Arthur", "Gainesville, GA")];
var wrestlers = [new athlete("Haley Augello", "Lockport, IL"), new athlete("Andy Bisek", "Chaska, MN"), new athlete("Jordan Burroughs", "Sicklerville, NJ"), new athlete("Adeline Gray", "Denver, CO"), new athlete("Helen Maroulis", "Rockville, MD")];
var boxers = [new athlete("Carlos Balderas", "Santa Maria, CA"), new athlete("Claressa Shields", "Flint, MI"), new athlete("Mikaela Mayer", "Los Angeles, CA"), new athlete("Gary Russell", "Washington, D.C."), new athlete("Charles Conwell", "Clevelan Heights, OH")];
var kayakers = [new athlete("Casey Eichfeld", "Drums, PA"), new athlete("Maggie Hogan", "Huntington Beach, CA"), new athlete("Devan McEwan", "Salisbury, CT"), new athlete("Ashley Nee", "Darnestown, MD"), new athlete("Michal Smolen", "Gastonia, NC")];
var judoka = [new athlete("Colton Brown", "Piscataway, NJ"), new athlete("Angelica Delgado", "Miami, FL"), new athlete("Kayla Harrison", "Middletown, OH"), new athlete("Marti Malloy", "Oak Harbor, WA"), new athlete("Travis Stevens", "Tacoma, WA")];

//constructor function for data entry //
function athlete(name, location) {
  this.name = name;
  this.location = location;
}


//router functions

router.get('/lifters', function(request, response){
  var athleteNumber =  getRandomAthlete();
  var myLifter = lifters[athleteNumber];
  response.send(myLifter);
})

router.get('/wrestlers', function(request, response){

  var athleteNumber =  getRandomAthlete();
  var myWrestler = wrestlers[athleteNumber];
  response.send(myWrestler);
})

router.get('/boxers', function(request, response){
  var athleteNumber =  getRandomAthlete();
  var myBoxer = boxers[athleteNumber];
  response.send(myBoxer);
})

router.get('/kayakers', function(request, response){
    var athleteNumber =  getRandomAthlete();
    var myKayaker = kayakers[athleteNumber];
  response.send(myKayaker);
})

router.get('/judoka', function(request, response){
  var athleteNumber = getRandomAthlete();
  var myJudoka = judoka[athleteNumber];
  response.send(myJudoka);
})

//this is the randomizer to get a random number from each array "this" refers to the array being retrieved in the specific router//

function getRandomAthlete() {
  var athleteNumber = Math.floor(Math.random() * (5 - 0) + 0);
  return athleteNumber;
}

var total = [lifters, wrestlers, boxers, kayakers, judoka];

// router.get('/total', function(request, response){
//   randomFive();
//   response.send(randomFive);
// })




module.exports = router;
