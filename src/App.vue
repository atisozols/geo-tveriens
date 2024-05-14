<template>
  <div class="h-screen">
    <router-view>
    </router-view>
    <footer class="flex flex-row-reverse">
      <img src="./assets/images/TRVG.png" class="h-32">
    </footer>
  </div>
</template>

<script>


export default {
    
}
</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
