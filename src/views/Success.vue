<template>
  <main-layout>
     <div class="font-thin text-xl text-center mb-4">
        You are correct! <br />
        The answer is {{ answer }}!
      </div>
      <svg  viewBox="0 0 181 172" fill="none"  class="my-10 mx-auto w-40 h-40" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.666656 171.333L117.333 129.667L42.3333 54.6667L0.666656 171.333ZM86.9167 122.833L28.1667 143.833L49.1667 85.0833L86.9167 122.833Z" fill="#FF0202"/>
      <path d="M105.083 92.4166L151.666 45.8333C155.75 41.75 162.333 41.75 166.416 45.8333L171.333 50.75L180.166 41.9166L175.25 37C166.333 28.0833 151.75 28.0833 142.833 37L96.2498 83.5833L105.083 92.4166Z" fill="#FF0202"/>
      <path d="M67.8331 45.3333L62.9164 50.25L71.7498 59.0833L76.6664 54.1667C85.5831 45.25 85.5831 30.6667 76.6664 21.75L71.7498 16.8333L62.9164 25.75L67.8331 30.6667C71.8331 34.6667 71.8331 41.3333 67.8331 45.3333Z" fill="#FF0202"/>
      <path d="M126.166 87L112.916 100.25L121.75 109.083L135 95.8333C139.083 91.75 145.666 91.75 149.75 95.8333L163.166 109.25L172 100.417L158.583 87C149.583 78.0833 135.083 78.0833 126.166 87Z" fill="#FF0202"/>
      <path d="M109.5 37L79.5831 66.9167L88.4165 75.75L118.333 45.8333C127.25 36.9167 127.25 22.3333 118.333 13.4167L105.083 0.166656L96.2498 8.99999L109.5 22.25C113.5 26.3333 113.5 33 109.5 37Z" fill="#FF0202"/>
      </svg>
     
     <div class="font-thin text-xl text-center mb-4">
        It took you  <b class="font-extrabold text-red-500">{{ numberOfGuesses }} </b> guess{{ numberOfGuesses > 1 ? 'es' : ''}} and  <b class="font-extrabold text-red-500">{{ numberOfHints }} </b> clue{{ numberOfHints > 1 ? 's' : ''}}.
      </div>

       
      

  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue'
export default {
  watch: {
  },
  created () {
      
  },
  name: "Home",
  components: { MainLayout },
  computed: {
     numberOfGuesses(){
        return this.$store.state.guessCount
     },
     numberOfHints(){
        return this.$store.state.hintCount
     },
     answer(){
        return this.$store.state.answer
     }

  }
};
</script>
