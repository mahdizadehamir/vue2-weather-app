<template>
  <div>
    <div
      v-if="
        this.datas.select !== null &&
        Object.keys(this.datas.select).length !== 0
      "
    >
      <p>{{ timeZone }}</p>
      <v-card class="mx-auto" max-width="400">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              {{ this.datas.select.name }}
            </v-list-item-title>
            <v-list-item-subtitle
              >{{dayOfweek}}, {{timing}} PM, {{weatherDescription}}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="text-h3" cols="6"> {{ currentTemp }}&deg;C </v-col>
            <v-col cols="6">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                alt="Sunny image"
                width="92"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>48%</v-list-item-subtitle>
        </v-list-item>

        <v-slider
          v-model="time"
          :max="6"
          :tick-labels="labels"
          class="mx-4"
          ticks
        ></v-slider>

        <v-list class="transparent">
          <v-list-item v-for="item in forecast" :key="item.day">
            <v-list-item-title>{{ item.day }}</v-list-item-title>

            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle class="text-right">
              {{ item.temp }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text> Full Report </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import datas from "@/store/PublicData";
export default {
  data: () => ({
    datas: datas,
    currentTemp: null,
    timeZone: null,
    labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
    time: 0,
    forecast: [
      {
        day: "Tuesday",
        icon: "mdi-white-balance-sunny",
        temp: "24\xB0/12\xB0",
      },
      {
        day: "Wednesday",
        icon: "mdi-white-balance-sunny",
        temp: "22\xB0/14\xB0",
      },
      { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
    ],
    dayOfweek:null,
    weatherDescription:null,
    timing:null
  }),
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
      const api_key = "a3e7bdc246b811691b06aab13ccb0dbb";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.datas.select.lat}&lon=${this.datas.select.lon}&exclude=hourly,minutely&appid=${api_key}&units=metric`
      );
      const weatherInfo = await response.json();
      // console.log(res);
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const thatCityTime = new Date(utc + weatherInfo.timezone_offset * 1000);
      this.timeZone = thatCityTime.toString();
      console.log(weatherInfo, this.datas.select.length);
      this.currentTemp = weatherInfo.current.temp;
      this.dayOfweek = this.labels[thatCityTime.getDay()];
      this.weatherDescription = weatherInfo.current.weather[0].description;
      this.timing = thatCityTime.getHours()  + ":" + thatCityTime.getMinutes();
      console.log(typeof(this.time))
    },
  },
};
</script>

<style></style>
