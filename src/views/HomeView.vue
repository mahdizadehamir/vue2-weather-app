<template>
  <v-container fluid class="container" :class="weatherBackground" >
    <NavigationBar />
    <WeatherInfo class="mt-1" />
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
      weatherBackground: JSON.parse(localStorage.getItem("weatherBackground")) ,
    };
  },
  methods: {},
  watch: {
    "datas.weatherType": {
      handler: function () {
        if (this.datas.weatherType === "Clear") {
          this.weatherBackground = "clear";
        } else if (this.datas.weatherType === "Rain") {
          this.weatherBackground = "rainy";
        } else if (this.datas.weatherType === "Clouds") {
          this.weatherBackground = "cloudy";
        } else if (this.datas.weatherType === "Snow") {
          this.weatherBackground = "snowy";
        }
        localStorage.setItem("weatherBackground", JSON.stringify(this.weatherBackground));
      },
      deep: true,
    },
  },
};
</script>

<style  >
.container {
  height: 100%;
  box-sizing: border-box;
}
.cloudy {
  background-image: url("../assets/images/cloudy.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.rainy {
  background-image: url("../assets/images/rainy.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.clear {
  background-image: url("../assets/images/clear.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
body{
  margin:0
}
</style>