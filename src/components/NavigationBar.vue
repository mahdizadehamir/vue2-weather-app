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
        v-model="model"
        :loading="loading"
        :search-input.sync="search"
        return-object
        item-value="lat"
        item-text="name"
        :items="states"
        cache-items
        label="Search Your City "
        hide-details
        hide-no-data
        solo-inverted
        clearable
        prepend-inner-icon="mdi-magnify"
        required
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

          <v-list-item @click="toAboutPage()">
            <v-list-item-title>About Us</v-list-item-title>
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
import datas from "../store/PublicData";
export default {
  name: "NavigationBar",
  props: [],
  data: () => ({
    drawer: false,
    model: null,
    search: null,
    loading: false,
    searching: null,
    states: [],
    lastLatLon: null,
    datas: datas,
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections();
    },
  },
  methods: {
    toAboutPage() {
      this.$router.push({ name: "about" });
    },
    async fetchPosition() {
      const api_key = "14476baa7dc7b943fa43681da12a198c";
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${this.search}&limit=5&appid=${api_key}`
      );
      const statess = await response.json();
      // console.log(res);
      //check if model has passed or not
      let names = [];
      for (let i = 0; i < statess.length; i++) {
        names.push({
          name: statess[i].name + " " + statess[i].country,
          country: statess[i].country,
          lat: statess[i].lat,
          lon: statess[i].lon,
        });
      }

      this.states = names;
      this.loading = false;
    },

    querySelections() {
      this.loading = true;
      //fetching 5 position for dispalying in Navbar

      this.fetchPosition();
      const configObj = JSON.parse(JSON.stringify(this.model));
      this.datas.select = configObj;
    },
  },
};
</script>
