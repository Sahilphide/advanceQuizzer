 // // function for scores
  // getPeopleScore = (scores)=>{
  //   let topThree = [];
  //   let items = Object.keys(scores).map(
  //     (key) => { return [key, scores[key]] });

  //   items.sort(
  //     (first, second) => { return first[1] - second[1] }
  //   );


  //   for(let i=0 ; i<items.length ; i++){
  //     topThree.push(items[i]);
  //   }

  //   if(topThree.length > 3){
  //     return topThree.slice(0, 3);
  //   }else{
  //     return topThree.slice(0,topThree.length)
  //   }
   
  // };
  
  // console.log(getPeopleScore(scores));

  //************* */
// addition of user
// saveHighScore = (e) => {
//   e.preventDefault();

//   const score = {
//       score: score,
//       name: document.getElementById("lfname").value,
//   };
//   highScores.push(score);
//   highScores.sort((a, b) => b.score - a.score);
//   highScores.splice(5);

//   localStorage.setItem('highScores', JSON.stringify(highScores));
//   window.location.assign('/');
// };
// console.log(highScores)
// some random 

  // <button onclick="location.reload()">Reload</button>