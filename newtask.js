const cancelTaskButton = document.getElementById("canceltaskid");
const createTaskButton = document.getElementById("createtaskid");

const taskTextBox = document.getElementById("myTaskText");
var taskTextBoxValue = taskTextBox.value;

cancelTaskButton.addEventListener('click', () => {
    window.location.href = "newlist.html";
  });

createTaskButton.addEventListener('click', () => {
    axios.post('http://localhost:8000/api/lists', { taskTextBoxValue })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

    window.location.href = "index.html";
  });