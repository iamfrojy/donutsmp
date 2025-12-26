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
    const res = await fetch(`${BACKEND_URL}?username=${encodeURIComponent(username)}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!res.ok) {
      // Handle different HTTP errors
      if (res.status === 404) throw new Error("Player not found");
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();

    // Ensure keys exist (handle unexpected API changes)
    const kills = data.kills ?? "N/A";
    const deaths = data.deaths ?? "N/A";
    const balance = data.balance ?? "N/A";
    const playtime = data.playtime ?? "N/A";
    const shards = data.shards ?? "N/A";
    const playerName = data.username ?? username;

    resultsBox.innerHTML = `
      <b>${playerName}</b><br><br>
      🗡 Kills: ${kills}<br>
      💀 Deaths: ${deaths}<br>
      💰 Balance: $${balance}<br>
      ⏱ Playtime: ${playtime}<br>
      💎 Shards: ${shards}
    `;

  } catch (err) {
    console.error(err);
    resultsBox.innerHTML = `<b>Error:</b> ${err.message}`;
  }
}

