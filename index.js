let div = document.querySelector("div");
let para = document.createElement("p");
para.style.fontFamily = "'Courier New', Courier, monospace"
div.append(para)
let count = 0;

const thoughts = [
  "First, solve the problem. Then, write the code. — John Johnson",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Programs must be written for people to read... — Harold Abelson",
  "The best error message is the one that never shows up. — Thomas Fuchs",
  "Code is like humor. When you have to explain it, it’s bad. — Cory House",
  "Make it work, make it right, make it fast. — Kent Beck",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "Fix the cause, not the symptom. — Steve Maguire",
  "Before software can be reusable it first has to be usable. — Ralph Johnson",
  "Any fool can write code... — Martin Fowler"
  
];

const thought = () =>{
   para.innerText = thoughts[count];
   count= (count+1)% thoughts.length 
} 