// Fake player stat database for demonstration
const sampleData = {
  "Cody": {kills: 25, deaths: 3, balance: 5400},
  "Steve": {kills: 10, deaths: 9, balance: 1200},
  "Player123": {kills: 99, deaths: 1, balance: 999999}
};

function searchPlayer() {
  let user = document.getElementById("usernameInput").value.trim();
  let box = document.getElementById("results");

  if(user === "") {
    box.innerHTML = "Please enter a username.";
    return;
  }

  let player = sampleData[user];

  if(player) {
    box.innerHTML = `
      <b>${user}</b><br><br>
      🗡 Kills: ${player.kills}<br>
      💀 Deaths: ${player.deaths}<br>
      💰 Balance: $${player.balance}
    `;
  } else {
    box.innerHTML = `<b>${user}</b> not found in database.`;
  }
}
