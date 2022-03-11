<template>
<v-app>
  <router-view :key="$route.path" />
</v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
