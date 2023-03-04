const listButton = document.getElementById("newlistbtn");
const taskButton = document.getElementById("addtaskbtn");


listButton.addEventListener('click', () => {
    window.location.href = "newlist.html";
  });

taskButton.addEventListener('click', () => {
    window.location.href = "newtask.html";
  });