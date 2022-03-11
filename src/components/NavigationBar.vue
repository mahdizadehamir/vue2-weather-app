<template>
  <div>
    <v-toolbar elevation="9" flat outlined rounded>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Weather App By Vox</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Home</v-btn>
        <v-btn flat>about</v-btn>
        <v-btn flat>Contact Us</v-btn>
      </v-toolbar-items>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",

  data: () => ({
    'drawer' : false,
  }),
};
</script>
