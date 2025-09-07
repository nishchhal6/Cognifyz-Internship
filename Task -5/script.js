const fetchButton = document.getElementById("fetch-btn");
const dataOutput = document.getElementById("data-output");

fetchButton.addEventListener("click", () => {
  fetchData();
});

function fetchData() {
  // Loading state
  dataOutput.innerHTML = "<p>> Accessing data stream... STANDBY...</p>";
  fetchButton.disabled = true;

  // JSONPlaceholder API endpoint
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // fetch() function
  fetch(apiUrl)
    .then((response) => response.json())
    .then((users) => {
      displayData(users);
    })
    .catch((error) => {
      dataOutput.innerHTML = `<p style="color: #ff5f56;">> ERROR: Connection timed out. ${error.message}</p>`;
    })
    .finally(() => {
      fetchButton.disabled = false;
    });
}

function displayData(users) {
  dataOutput.innerHTML = "<p>> Stream successful. Found 5 users:</p>";

  users.slice(0, 5).forEach((user, index) => {
    const userOutput = `
            <p>
                [user_${index + 1}]<br>
                &nbsp;&nbsp;NAME: <span>${user.name}</span><br>
                &nbsp;&nbsp;MAIL: <span>${user.email}</span><br>
                &nbsp;&nbsp;CITY: <span>${user.address.city}</span>
            </p>
        `;
    dataOutput.innerHTML += userOutput;
  });
}
