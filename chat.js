const scriptUrl = "https://script.google.com/macros/s/AKfycbyV54rzzQFNZOP_RdjEDszX5RM4yOGGnxnki88Ncheb0n6puQD23lptAwQSTdQw27OmCQ/exec";
const chatBox = document.getElementById("chatBox");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("sendMessage");

let isAdmin = false;  // Track if the user is logged in as admin

// Admin login function
function loginAsAdmin() {
  const password = prompt("Enter Admin Password");
  if (password === "1234") {
    isAdmin = true;
    alert("You are now logged in as admin!");
  } else {
    alert("Incorrect password. Admin access denied.");
  }
}

// Fetch chat logs from Google Apps Script
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

// Send message to Google Apps Script
async function sendMessage() {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!username || !message) {
    alert("Please enter both username and message.");
    return;
  }

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

// Admin access check (optional step)
sendMessageButton.addEventListener("click", () => {
  if (!isAdmin) {
    loginAsAdmin();  // Prompt for admin login if not logged in
  } else {
    sendMessage();
  }
});

setInterval(fetchChatLogs, 5000);  // Refresh chat logs every 5 seconds
