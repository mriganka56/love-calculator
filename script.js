var a=prompt("Enter Your name");
var b=prompt("Enter Your Crush's Name");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore === 100) {
  document.write("<h1>The love score between "+a.toUpperCase()+" and "+b.toUpperCase()+"<br>is " + loveScore + "%<br><br>" + " Congratulations!<br> You are made for each other!</h1>");
} else if (loveScore > 70) {
  document.write("<h1>The love score between "+a.toUpperCase()+" and "+b.toUpperCase()+"<br>is " + loveScore + "%<br><br>" + " Time to know each other more deeply!</h1>");
} else if (loveScore > 30) {
  document.write("<h1>The love score between "+a.toUpperCase()+" and "+b.toUpperCase()+"<br>is " + loveScore + "%<br><br>" + " Keep Going!</h1>");
} else {
  document.write("<h1>The love score between "+a.toUpperCase()+" and "+b.toUpperCase()+"<br>is " + loveScore + "%<br><br>" + " Sorry! find another one XD:)</h1>");
}