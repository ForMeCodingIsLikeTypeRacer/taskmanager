const cancelListButton = document.getElementById("cancellistid");
const createListButton = document.getElementById("createlistid");

cancelListButton.addEventListener('click', () => {
    window.location.href = "index.html";
  });

createListButton.addEventListener('click', () => {
    const listTextBox = document.getElementById("myListText");
    var listTextBoxValue = listTextBox.value;
    axios.post('http://localhost:8000/api/lists', { listTextBoxValue })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });

    window.location.href = "newtask.html";
  });