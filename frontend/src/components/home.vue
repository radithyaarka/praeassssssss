<template>
    <section class="hero bg-gray-500 text-white py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <router-link to="/login" class="text-white">
        <button class="bg-white text-blue-500 hover:bg-blue-100 text-lg font-semibold px-6 py-2 rounded-full shadow-md">
          Get Started
        </button>
      </router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Hero',
  };
  </script>
  