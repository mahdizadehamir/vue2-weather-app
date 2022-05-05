<template>
  <div>
    <v-toolbar max-width="500" class="mx-auto" elevation="9"  color="grey lighten-5" outlined rounded>
      <v-app-bar-nav-icon
        class="d-block"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
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
        solo
        clearable
        prepend-inner-icon="mdi-magnify"
        required
      ></v-autocomplete>
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
    "datas.select":{
      handler(){
        localStorage.setItem('select',JSON.stringify(this.datas.select))
      },
      deep:true,
      
    }
  },
  methods: {
    toAboutPage() {
      this.$router.push({ name: "about" });
    },
    async fetchPosition() {
      const api_key = "a3e7bdc246b811691b06aab13ccb0dbb";
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${this.search}&limit=5&appid=${api_key}`
      );
      const statess = await response.json();
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
