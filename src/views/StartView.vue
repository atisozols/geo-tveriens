<template>
  <div class="grid grid-cols-1 items-center">
    <HeaderComponent class="justify-self-start mb-20"/>
    <div class="flex flex-col justify-self-center self-center items-center">
      <SvgComponent class="h-96" />
      <h1 class="text-4xl font-bold mb-8 text-center">
        <span class="lucky leading-8">VIDES SPĒLE</span>
      </h1>
      <button class="btn w-60">Sākt</button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import SvgComponent from "../components/SvgComponent.vue"
export default {
  components:{
    SvgComponent, HeaderComponent
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