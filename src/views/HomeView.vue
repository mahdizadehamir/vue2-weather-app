<template>
  <v-container fluid class="container">
    <NavigationBar />
    <WeatherInfo />
  </v-container>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
import datas from "@/store/PublicData";
export default {
  name: "HomeView",
  components: {
    NavigationBar,
    WeatherInfo,
  },
  data() {
    return {
      datas: datas,
      timeZone: null,
      currentTemp: null,
    };
  },
  methods: {
    
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
}
</style>
