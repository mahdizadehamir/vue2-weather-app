<template>
  <v-container>
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
