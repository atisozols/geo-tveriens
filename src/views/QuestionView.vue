<template>
  <div class="h-full pt-5">
    <h1 class="text-4xl font-bold mb-8 text-center">
      <span class="lucky leading-8">VIDES SPĒLE</span>
    </h1>
    <div v-if="this.quiz" class="h-5/6 flex flex-col justify center">
      <div class="px-5 h-4/6 flex flex-col flex-grow justify-around">
        <h2 class="text-2xl font-semibold">{{ this.quiz.question }}</h2>
        <ul>
          <li v-for="(item, index) in this.quiz.answers" :key="index">
            <button class="btn w-full mt-5 h-20 text-lg" @click="answer(index)">{{ item }}</button>
          </li>
        </ul>
        <p class="text-center p-10 h-10">{{ this.message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import quizes from '../assets/quizes'
export default {
  data(){
    return {
      quiz: null,
      message: '',
    }
  },
  components: {
      HeaderComponent
  },
  mounted(){
    const randomIndex = Math.floor(Math.random() * quizes.length);
    this.quiz = quizes[randomIndex];
  },
  methods: {
    answer(index){
      if(this.quiz.correct == index) {
        if(this.$route.params.id == 9){
          this.message = "Tu to paveici! Tava vērīgā acs un apņēmība aizveda tevi līdz finišam, un mēs esam priecīgi svinēt tavu sasniegumu. Turpini izpētīt, turpini atklāt un atceries: pasaule ir pilna ar slēptiem dārgumiem, kas tikai gaida, lai tos atrastu."
        } else{
          this.message = "Pareizi! Meklē nākošo jautājumu!"
        }
        
        
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