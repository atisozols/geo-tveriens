<template>
  <div>
    <h1>Question</h1>
  </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.$route.params.id);
  }
}
</script>

<style>
  
</style>