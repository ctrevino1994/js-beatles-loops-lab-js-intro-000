var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var answer = []

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < 4; i++){
    answer.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return answer;
}

const facts = ["He was the last Beatle to learn how to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice" ];

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
  results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}
