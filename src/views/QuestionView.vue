<template>
  <div class="h-full pt-5">
    <h1 class="text-4xl font-bold mb-8 text-center">
      <span class="lucky leading-8">VIDES SPĒLE</span>
    </h1>
    <div class="px-5 h-4/6 flex flex-col justify-around" v-if="this.next === parseInt(this.$route.params.id)">
      <h2 class="text-2xl font-semibold">{{ this.user.path.questions[this.next].question }}</h2>
      <ul>
        <li v-for="(item, index) in this.user.path.questions[this.next].answers" :key="index">
          <button class="btn w-full mt-5 text-lg" @click="answer(index)">{{ item }}</button>
        </li>
      </ul>
      <p>{{ this.message }}</p>
    </div>
    <div class="px-5 h-4/6 flex flex-col justify-around" v-else>
      {{ this.message }}
    </div>
  </div>
    
    
  
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue"
export default {
  data(){
    return {
      next: null,
      user: null,
      message: '',
      loading: false,
    }
  },
  components: {
      HeaderComponent
  },
  mounted(){
    console.log(this.$route.params.id);

    fetch(`${import.meta.env.VITE_APP_HOST_URL}/${this.$route.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.next = data.next;
        this.user = data.user;
      })
      .catch(error => {
        console.error(error.message)
      })
      
  },
  methods: {
    answer(index){
      if(this.user.path.questions[this.next].correct == index) {
        this.loading = true;
        this.message = "Pareizi!"

        fetch(`${import.meta.env.VITE_APP_HOST_URL}/${this.$route.params.id}`, {method: "POST"})
        .then(response => response.json())
        .then(data => {
          this.next = data.next;
          this.user = data.user;
        })
        .catch(error => {
          console.error(error.message)
        })
        .finally(() => {
          this.loading = false;
        })
      } else{
        this.message = "Nepareizi :("
      }
    }
  }
}
</script>

<style>
  .lucky{
    font-family: "Alfa Slab One", serif;
    font-weight: 400;
    color: #84AC16;
  }
</style>