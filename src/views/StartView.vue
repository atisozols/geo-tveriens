<template>
  <div class="grid grid-cols-1 items-center">
    <HeaderComponent class="justify-self-start mb-20"/>
    <div class="flex flex-col justify-self-center self-center items-center">
      <SvgComponent class="h-96" />
      <h1 class="text-4xl font-bold mb-8 text-center">
        <span class="lucky leading-8">VIDES SPĒLE</span>
      </h1>
      
      <router-link v-if="!this.loading" :to="`/${this.next}`" class="btn w-60">{{ next == 0 ? "Sākt" : "Turpināt" }}</router-link>
      <button class="btn w-60" v-else disabled><span class="loading loading-dots loading-md"></span></button>
    
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import SvgComponent from "../components/SvgComponent.vue"
export default {
  data(){
    return {
      loading: true,
      next: null,
      user: null,
    }
  },
  components:{
    SvgComponent, HeaderComponent
  },
  mounted(){
    fetch(import.meta.env.VITE_APP_HOST_URL)
      .then(response => response.json())
      .then(data => {
        this.next = data.next;
        this.user = data.user;
      })
      .catch(error => {
        console.error(error.message)
      })
      .finally(() => {
        this.loading = false
        console.log(this.loading, this.next)
      }
      )

      
  }
}
</script>

<style>
.lucky{
  font-family: "Alfa Slab One", serif;
  font-weight: 400;
}
</style>