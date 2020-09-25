// DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");

// add new chat
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message).then(() => {
    newChatForm.reset();
  });
});

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("main", "username");

// get chats and render
chatroom.getChats((data, user) => {
  chatUI.render(data, user);
});
