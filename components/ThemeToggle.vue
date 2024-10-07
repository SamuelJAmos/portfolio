<template>
    <button @click="toggleColorMode">
      {{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
  </template>
  
  <script setup> 
  const colorMode = useColorMode()
  const isDark = computed(() => colorMode.value === 'dark')
  
  function toggleColorMode() {
    colorMode.value = isDark.value ? 'light' : 'dark'
  }
  </script>
  