let div = document.querySelector("div");
let para = document.createElement("p");
para.style.fontFamily = "'Courier New', Courier, monospace"
div.append(para)
let count = 0;
const thoughts = () =>{
   count++ ;
  switch (count) {
  case 1:
    para.innerText = "Thought 1: Start before you feel ready.";
    break;

  case 2:
    para.innerText = "Thought 2: Small daily progress beats rare big effort.";
    break;

  case 3:
    para.innerText = "Thought 3: Consistency is a skill—train it.";
    break;

  case 4:
    para.innerText = "Thought 4: If it’s important, schedule it. If it’s not scheduled, it’s a wish.";
    break;

  case 5:
    para.innerText = "Thought 5: Your focus is your life—guard it aggressively.";
    break;

  case 6:
    para.innerText = "Thought 6: Don’t seek motivation—seek momentum.";
    break;

  case 7:
    para.innerText = "Thought 7: Discipline is choosing what you want most over what you want now.";
    break;

  case 8:
    para.innerText = "Thought 8: Learn one thing deeply today, not ten things shallowly.";
    break;

  case 9:
    para.innerText = "Thought 9: You don’t need more time—you need fewer distractions.";
    break;

  case 10:
    para.innerText = "Thought 10: Ship something small today. Finished beats perfect.";
    break;

  default:
    para.innerText = "New day, new chance. Reset count and go again.";
    count = 0; // optional: so it loops back to case 1 next click
    break;
}

}

