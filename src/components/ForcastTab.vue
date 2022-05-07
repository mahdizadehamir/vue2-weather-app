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
                v-for="(item) in temp"
                :key="temp.indexOf(item)"
                class="d-inline-flex flex-column justify-center align-center"
              >
                <v-list-item-icon class="text-center align-self-center mx-0 my-0">
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
          <v-card-title class="text-h5"> An awesome title </v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
              rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis,
              ligula mi congue nunc, vitae euismod ligula urna in dolor.
              Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
              nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
              egestas, neque sit amet convallis pulvinar, justo nulla eleifend
              augue, ac auctor orci leo non est. Etiam sit amet orci eget eros
              faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque
              suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5"> An even better title </v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Sed hendrerit.
              Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin
              faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed
              magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam
              lobortis. Suspendisse potenti.
            </p>
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
      item: ["8 DAYS", "HOURLY", "PAST 5 DAYS"],
    };
  },
  props: ["temp"],
};
</script>

<style scoped>
  .box > *{
flex: 1 1 160px;  }

</style>
