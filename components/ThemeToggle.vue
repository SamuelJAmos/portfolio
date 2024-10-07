<template>
  <div v-if="colorModeReady">
    <button @click="toggleColorMode">
      <Icon
        :name="iconName"
        size="24"
      />
      <!-- <span>{{ isDark ? "Switch to Light Mode" : "Switch to Dark Mode" }}</span> For Screen readers? -->
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const colorModeReady = ref(false);

// Computed property to determine if dark mode is active
const isDark = computed(() => colorMode.value === "dark");

// Computed property for icon name based on color mode
const iconName = computed(() =>
  isDark.value ? "mdi-weather-night" : "mdi-weather-sunny"
);

// Function to toggle color mode
function toggleColorMode() {
  colorMode.preference = isDark.value ? "light" : "dark";
}

// Set colorModeReady once the component is mounted
onMounted(() => {
  colorModeReady.value = true;
});
</script>
