<template>
  <v-card>
    <v-toolbar color="purple" dark flat>
      <template>
        <v-tabs v-model="tabs" centered>
          <v-tab v-for="n in item" :key="n">
            {{ n }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-list>
              <div class="d-flex flex-row flex-wrap box">
                <v-list-item
                  v-for="item in temp"
                  :key="temp.indexOf(item)"
                  class="d-inline-flex flex-column justify-center align-center"
                >
                  <v-list-item-subtitle>
                    {{ labels[timer.getDay() + temp.indexOf(item)] }}
                  </v-list-item-subtitle>
                  <v-list-item-icon
                    class="text-center align-self-center mx-0 my-0"
                  >
                    <v-img
                      :src="
                        'http://openweathermap.org/img/wn/' +
                        item.weather[0].icon +
                        '.png'
                      "
                      alt="icon"
                    ></v-img>
                  </v-list-item-icon>
                  <v-list-item-subtitle class="d-inline align-self-center">
                    {{ Math.round(item.temp.min) }} /
                    {{ Math.round(item.temp.max) }} &deg;C
                  </v-list-item-subtitle>
                </v-list-item>
              </div>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-list>
              <div class="d-flex flex-row flex-wrap box-hour">
                <v-list-item
                  v-for="mored in hourly.slice(0, 5)"
                  :key="hourly.indexOf(mored)"
                  class="d-inline-flex flex-column justify-center align-center"
                >
                  <v-list-item-subtitle>
                    {{ timer.getHours() + hourly.indexOf(mored) }} :{{
                      String(timer.getMinutes()).padStart(2, "0")
                    }}
                  </v-list-item-subtitle>
                  <v-list-item-icon
                    class="text-center align-self-center mx-0 my-0"
                  >
                    <v-img
                      :src="
                        'http://openweathermap.org/img/wn/' +
                        mored.weather[0].icon +
                        '.png'
                      "
                      alt="icon"
                    ></v-img>
                  </v-list-item-icon>
                  <v-list-item-subtitle class="d-inline align-self-center">
                    {{ Math.round(mored.temp) }} &deg;C
                  </v-list-item-subtitle>
                </v-list-item>
              </div>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      item: ["8 DAYS", "5 Hours"],
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  props: ["temp", "hourly", "timer"],
};
</script>

<style scoped>
.box > * {
  flex: 1 1 100px;
}
.box-hour > * {
  flex: 1 0 20px;
}
</style>
