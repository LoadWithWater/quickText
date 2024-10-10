<template>
    <div class="chat-room">
      <h1>Chat Room</h1>
      <ul>
        <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
      </ul>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const messages = ref([{ id: 1, text: 'Hello, World!' }]);
  const newMessage = ref('');
  
  const sendMessage = () => {
    if (newMessage.value.trim()) {
      messages.value.push({ id: Date.now(), text: newMessage.value });
      newMessage.value = '';
    }
  };
  </script>
  
  <style scoped>
  .chat-room {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
  