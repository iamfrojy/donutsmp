// Update this with your Railway Function URL
const BACKEND_URL = "https://function-bun-production-2b41.up.railway.app/";

async function searchPlayer() {
  const username = document.getElementById("usernameInput").value.trim();
  const resultsBox = document.getElementById("results");

  if (!username) {
    resultsBox.innerHTML = "Please enter a username.";
    return;
  }

  resultsBox.innerHTML = "Loading stats...";

  try {
    // Send username as a query parameter
    const res = await fetch(`${BACKEND_URL}?username=${encodeURIComponent(username)}`);
    
    if (!res.ok) {
      throw new Error("Player not found or API error");
    }

    const data = await res.json();

    // Update these keys based on your API response if needed
    resultsBox.innerHTML = `
      <b>${data.username}</b><br><br>
      🗡 Kills: ${data.kills}<br>
      💀 Deaths: ${data.deaths}<br>
      💰 Balance: $${data.balance}<br>
      ⏱ Playtime: ${data.playtime}<br>
      💎 Shards: ${data.shards}
    `;
  } catch (err) {
    resultsBox.innerHTML = `<b>Error:</b> ${err.message}`;
  }
}
