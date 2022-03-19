<template>
  <div>
    <v-toolbar elevation="9" dark color="teal" outlined rounded>
      <v-app-bar-nav-icon
        class="d-sm-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="d-none d-md-block white--text"
        >Weather App By Vox</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :search-input.sync="search"
        cache-items
        flat
        :items="items"
        label="Search Your City "
        hide-details
        hide-no-data
        solo-inverted
        prepend-inner-icon="mdi-magnify"
      ></v-autocomplete>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-md-block">
        <v-btn text>Home</v-btn>
        <v-btn text @click="toAboutPage()">About</v-btn>
        <v-btn text>Contact Us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- //insert drawer for mobile view -->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="toAboutPage()"
              >About Us</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contact Me</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data: () => ({
    drawer: false,
    select: null,
    search: null,
    loading: false,
    items: [],
    states: [],
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    toAboutPage() {
      this.$router.push({ name: "about" });
    },
    querySelections(v) {
      this.loading = true;

      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${this.search}&limit=5&appid=${process.env.VUE_APP_WEATHER_API}`
      )
        .then((res) => res.clone().json())
        .then((res) => {
          let allStates = [];
          console.log(res);
          for (let i = 0; i < res.length; i++) {
            allStates.push(
              res[i].name + " " + res[i].state + " " + res[i].country
            );
          }
          this.items = allStates;
        });

      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
  mounted() {},
};
</script>
