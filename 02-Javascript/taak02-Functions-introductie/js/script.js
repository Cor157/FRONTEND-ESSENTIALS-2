function showMessage() {
    alert( 'hallo iedereen!' );
  }
  var hello = function(name) 
{
 var name = prompt("Hoi wat is je naam");
 return "Welcome " + name;
};
console.log(hello("name"));

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed