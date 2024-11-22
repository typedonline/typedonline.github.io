const scriptUrl = "https://elderly-grass-elm.glitch.me/proxy";
const chatBox = document.getElementById("chatBox");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("sendMessage");

async function fetchChatLogs() {
  try {
    const response = await fetch(`${scriptUrl}?action=getChatLogs`);
    if (!response.ok) throw new Error(`Error fetching chat logs: ${response.status}`);
    
    const logs = await response.json();
    chatBox.innerHTML = "";
    logs.forEach(([timestamp, username, message]) => {
      const chatEntry = document.createElement("p");
      chatEntry.textContent = `[${new Date(timestamp).toLocaleTimeString()}] ${username}: ${message}`;
      chatBox.appendChild(chatEntry);
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function sendMessage() {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!username || !message) {
    alert("Please enter both username and message.");
    return;
  }

const adminPassword = "1234";  // Replace with your chosen password
let isAdmin = false;

// Admin login function
function loginAsAdmin() {
  const password = prompt("Enter Admin Password");
  if (password === adminPassword) {
    isAdmin = true;
    alert("You are now logged in as admin!");
  } else {
    alert("Incorrect password. Admin access denied.");
  }
}

// Use `isAdmin` to control admin-only features


  const payload = { username, message };
  try {
    const response = await fetch(`${scriptUrl}?action=logMessage`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.text();
    if (!response.ok) throw new Error(result);

    messageInput.value = "";
    fetchChatLogs();
  } catch (error) {
    console.error(error.message);
    alert("Failed to send message. Check console for details.");
  }
}

sendMessageButton.addEventListener("click", sendMessage);
setInterval(fetchChatLogs, 5000); // Refresh chat logs every 5 seconds
