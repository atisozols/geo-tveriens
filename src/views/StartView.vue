<template>
  <div class="flex flex-col h-full pt-5 items-center justify-center">
    <SvgComponent class="h-72" />
    <h1 class="text-4xl font-bold mb-8 text-center">
      <span class="lucky leading-8">VIDES SPĒLE</span>
    </h1>
    <button class="btn w-60">Sākt</button>
  </div>
</template>

<script>
import SvgComponent from "../components/SvgComponent.vue"
export default {
  components:{
    SvgComponent
  },
  mounted(){
    
  }
}
</script>

<style>
.lucky{
  font-family: "Alfa Slab One", serif;
  font-weight: 400;
}

     
  
</style>