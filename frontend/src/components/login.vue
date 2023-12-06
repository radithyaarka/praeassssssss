<script setup>
	import { ref } from 'vue';
	import router from '../router';

	const email = ref(null);
	const password = ref(null);
	const loginError = ref(false);

	const login = async (e) => {
		e.preventDefault();
		
		const req = await fetch("http://localhost:3000/api/accounts/login/", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email.value,
				password: password.value
			})
		});

		if (req.status === 200) {
			const res = await req.json();
			await router.push("/chat");
		}
		else {
			loginError.value = true;
		}
	}
</script>

<template>
	<main class="min-h-screen flex items-center justify-center bg-gray-100">
	  <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
		<h1 class="text-3xl font-semibold mb-6">Login</h1>
		<form @submit.prevent="login" class="space-y-4">
		  <p v-if="loginError" class="text-red-500">Invalid email or password</p>
		  <div>
			<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
			<input
			  id="email"
			  type="email"
			  v-model="email"
			  class="mt-1 p-2 w-full border rounded-md"
			  placeholder="Email"
			  required
			/>
		  </div>
		  <div>
			<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
			<input
			  id="password"
			  type="password"
			  v-model="password"
			  class="mt-1 p-2 w-full border rounded-md"
			  placeholder="Password"
			  required
			/>
		  </div>
		  <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Login</button>
		</form>
	  </div>
	</main>
  </template>
  