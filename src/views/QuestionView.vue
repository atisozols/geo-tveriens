<template>
  <div>
    <HeaderComponent />
    <h1>Question</h1>
  </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue"
export default {
  components: {
      HeaderComponent
  },
  mounted(){
    console.log(this.$route.params.id);
  }
}
</script>

<style>
  
</style>