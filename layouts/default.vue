<template>
  <div :class="{ dark: isDarkMode }">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  created() {
    // Initialize dark mode based on user preference or system setting
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme !== null) {
      this.isDarkMode = JSON.parse(savedTheme);
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  },
  watch: {
    isDarkMode(newValue) {
      localStorage.setItem('isDarkMode', newValue);
    },
  },
};
</script>