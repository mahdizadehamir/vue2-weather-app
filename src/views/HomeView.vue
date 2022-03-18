<template>
  <v-container fluid class="container ">
    <NavigationBar />
  </v-container>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "HomeView",
  components: {
    NavigationBar,
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
}
</style>
