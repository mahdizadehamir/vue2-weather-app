<template>
  <v-container fluid class="container ">
    <NavigationBar  />
    {{this.datas.select}}
  </v-container>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import datas from "@/store/PublicData"
export default {
  name: "HomeView",
  components: {
    NavigationBar,
  },
  data(){
    return{
       datas:datas
    }
  },
  methods:{

  },
  updated(){
    // console.log(this.$root.select)
  }
};
</script>
<style scoped>
.container {
  height: 100vh;
}
</style>
