const scriptUrl = 'https://script.google.com/macros/s/AKfycbwrTxMHhMkkFW_B04bYL1iAPe-e-jzgXRFfmltLdTQ9tXBjNYCo3wzYGl_7RlvyMGhXOQ/exec';  // Replace with your Web App URL

// Fetch chat logs from the Google Apps Script endpoint
async function fetchChatLogs() {
  try {
    const response = await fetch(`${scriptUrl}?action=getChatLogs`);
    const logs = await response.json();
    
    // Update the chatBox with the logs
    chatBox.innerHTML = '';
    logs.forEach(log => {
      const chatEntry = document.createElement('p');
      chatEntry.textContent = `[${new Date(log.timestamp).toLocaleTimeString()}] ${log.username}: ${log.message}`;
      chatBox.appendChild(chatEntry);
    });
  } catch (error) {
    console.error('Error fetching chat logs:', error);
  }
}

// Send a new chat message to the Google Apps Script endpoint
async function sendMessage() {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!username || !message) {
    alert('Please enter both username and message.');
    return;
  }

  const payload = { username, message };
  try {
    const response = await fetch(`${scriptUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    const result = await response.json();
    if (result.status === 'success') {
      messageInput.value = '';  // Clear input
      fetchChatLogs();  // Refresh chat logs
    }
  } catch (error) {
    console.error('Failed to send message:', error);
  }
}

// Periodically fetch chat logs (every 5 seconds)
setInterval(fetchChatLogs, 5000); 
