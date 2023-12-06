<script setup>
  import { onMounted, ref } from "vue";
  import router from "../router";

  const selectedChannel = ref('');
  const channels = ref([]);
  const channelName = ref(null);
  const chats = ref([]);
  const msgContent = ref(null);

  const fetchChannels = async() => {
		const req = await fetch("http://localhost:3000/api/channels/", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    });
    
    const res = await req.json();
   	channels.value = res.docs;
	}

  onMounted(async () => {
		await fetchChannels();
	});

  const createChannel = async(e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/channels/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: channelName.value,
      })
    });
    
    await fetchChannels();
  } 

  const logout = async() => {
    await fetch("http://localhost:3000/api/accounts/logout/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    });

    router.replace("/");
  }

  const fetchChats = async() => {
    const req = await fetch(`http://localhost:3000/api/chats?where[channelID][equals]=${selectedChannel.value}&limit=1000&sort=id`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const res = await req.json();
    chats.value = res.docs;
  }

  const sendMessage = async(e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/chats/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: msgContent.value,
        channelID: selectedChannel.value
      })
    });

    await fetchChats();
  }

</script>

<template>
    <main class="p-8">
      <button class="bg-blue-500 text-white px-4 py-2 mb-4" @click="logout">Log Out</button>
  
      <div class="item">
        <h2 class="text-xl font-bold mb-4">Create Channel</h2>
        <form @submit.prevent="createChannel">
          <input type="text" placeholder="Insert channel name" v-model="channelName" class="border p-2 mb-2" />
          <button type="submit" class="bg-green-500 text-white px-4 py-2">Create New</button>
        </form>
      </div>
  
      <div class="item">
        <h2 class="text-xl font-bold mb-4">Join Channels</h2>
        <div
          v-for="c in channels"
          @click="selectedChannel = c.id; fetchChats()"
          class="cursor-pointer border p-2 mb-2 rounded transition-all duration-300"
          :class="{ 'bg-blue-200': selectedChannel && c.id === selectedChannel }"
        >
          {{ c.name }}
        </div>
      </div>
  
      <div class="item">
        <h2 class="text-xl font-bold mb-4">Chat</h2>
        <p v-for="c in chats" :key="c.id" class="mb-2">
          {{ c.senderID }}: {{ c.content }}
        </p>
      </div>
  
      <form class="message-group" @submit.prevent="sendMessage">
        <input type="text" placeholder="Type your chat here" v-model="msgContent" class="border p-2 mr-2" />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2">Send</button>
      </form>
    </main>
  </template>
  
