const scriptUrl = "https://script.google.com/macros/s/AKfycbzQ0fXv8ybxc7KK-yff36X7s6wrrhkt6j15RyfcnxJZ_5TSkqZ_58y03chOJfEmu4_NKw/exec";
const chatBox = document.getElementById("chatBox");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("sendMessage");

async function fetchChatLogs() {
  const response = await fetch(`${scriptUrl}?action=getChatLogs`);
  const logs = await response.json();

  chatBox.innerHTML = "";
  logs.forEach(([timestamp, username, message]) => {
    const chatEntry = document.createElement("p");
    chatEntry.textContent = `[${new Date(timestamp).toLocaleTimeString()}] ${username}: ${message}`;
    chatBox.appendChild(chatEntry);
  });
}

async function sendMessage() {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!username || !message) {
    alert("Please enter both username and message.");
    return;
  }

  if (username.toLowerCase() === "admin") {
    alert("The username 'admin' is reserved.");
    return;
  }

  const payload = { username, message };
  await fetch(`${scriptUrl}?action=logMessage`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  });

  messageInput.value = "";
  fetchChatLogs();
}

sendMessageButton.addEventListener("click", sendMessage);
setInterval(fetchChatLogs, 5000); // Refresh chat logs every 5 seconds
