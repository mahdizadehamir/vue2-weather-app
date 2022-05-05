<template>
  <div>
    <div>
      <v-card class="mx-auto" max-width="500">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              {{ locationName }}
            </v-list-item-title>
            <v-list-item-subtitle
              >{{ dayOfweek }}, {{ timing }},
              {{ weatherDescription }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="text-h2" cols="6"> {{ currentTemp }}&deg;C </v-col>
            <v-col cols="6">
              <v-img
                :src="require(`@/assets/icons/${weatherUrl}.png`)"
                alt="Sunny image"
                width="92"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ windSpeed }} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-water</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ humidity }}%</v-list-item-subtitle>
        </v-list-item>

        <v-divider></v-divider>
        <ForcastTab :temp="daily" :icon="'mdi-cloud'" />
      </v-card>
    </div>
  </div>
</template>

<script>
import datas from "@/store/PublicData";
import ForcastTab from "@/components/ForcastTab.vue";
export default {
  data: () => ({
    datas: datas,
    currentTemp: null,
    timeZone: null,
    labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
    time: 0,
    dayOfweek: null,
    weatherDescription: null,
    timing: null,
    humidity: null,
    windSpeed: null,
    weatherUrl: 'clear',
    locationName: "California",
    daily: null,
    days:null,
    forcastIcon:null,
  }),
  components: {
    ForcastTab,
  },
  watch: {
    "datas.select": {
      handler: function () {
        if (
          this.datas.select !== null &&
          Object.keys(this.datas.select).length !== 0
        ) {
          this.weatherInfoFetch();
        }
      },
      deep: true,
    },
  },

  methods: {
    async weatherInfoFetch() {
      let locationLat = null;
      let locationLon = null;
      if (localStorage.getItem("select")) {
        locationLat = JSON.parse(localStorage.getItem("select")).lat;
        locationLon = JSON.parse(localStorage.getItem("select")).lon;
        const locationName = JSON.parse(localStorage.getItem("select")).name;
        this.locationName = locationName;
      } else {
        locationLat = 36.778259;
        locationLon = -119.417931;

      }
      const api_key = "a3e7bdc246b811691b06aab13ccb0dbb";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLon}&exclude=hourly,minutely&appid=${api_key}&units=metric`
      );
      const weatherInfo = await response.json();
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const thatCityTime = new Date(utc + weatherInfo.timezone_offset * 1000);
      this.timeZone = thatCityTime.toString();
      this.currentTemp = Math.round(weatherInfo.current.temp);
      this.dayOfweek = this.labels[thatCityTime.getDay()];
      this.weatherDescription = weatherInfo.current.weather[0].description;
      this.timing = thatCityTime.getHours() + ":" + thatCityTime.getMinutes();
      this.humidity = weatherInfo.current.humidity;
      this.windSpeed = weatherInfo.current.wind_speed;
      this.weatherUrl = weatherInfo.current.weather[0].main
      this.daily = weatherInfo.daily;
      this.datas.weatherType = weatherInfo.current.weather[0].main;
      if (this.datas.weatherType === "Clouds") {
        this.weatherUrl = 'clouds';
        this.forcastIcon = 'mdi-cloud';
      }
      else if (this.datas.weatherType === "Clear") {
        this.weatherUrl = 'clear';
      }
      else if(this.datas.weatherType === "Rain"){
        this.weatherUrl = 'rain';
      }
      else if(this.datas.weatherType === "Snow"){
        this.weatherUrl = 'snow';
      }
      else if(this.datas.weatherType === "Thunderstorm"){
        this.weatherUrl = 'thunderstorm';
      }
      else if(this.datas.weatherType === "Drizzle"){
        this.weatherUrl = 'drizzle';
      }
      else if(this.datas.weatherType === "Haze"){
        this.weatherUrl = 'haze';
      }

      console.log(this.daily);
    },
  },
  mounted() {
    this.weatherInfoFetch();
  },
};
</script>

<style></style>
