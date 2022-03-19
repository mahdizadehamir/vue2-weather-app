<template>
  <v-container fluid class="container ">
    <NavigationBar />
    {{dd}}
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
  data(){
    return{
      
    }
  }
};
</script>
<style scoped>
.container {
  height: 100vh;
}
</style>
