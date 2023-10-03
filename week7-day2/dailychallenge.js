const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// 1
let usernames = [];
gameInfo.forEach((item, index) => 
{
    usernames.push(`${item.username}!`)
})
console.log(usernames);

// 2
let winners = [];
gameInfo.forEach((item, index) => 
{
   if(item.score > 5){
        winners.push(item.username)
   }
})

console.log(winners);

// 3
let totalScore = 0;
gameInfo.forEach((item) => 
{
    totalScore += item.score;
})
console.log(totalScore);