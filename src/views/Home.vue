<template>
  <main-layout>
     <div class="font-thin text-xl mb-4">
        Guess the secret <br />
        prime number!
      </div>

      <div class="font-thin text-base  mb-4">
        The secret number is a prime number under 100. <br />
        You have to sum up <b>4</b> numbers to reach the secret<br />
        number. For example, if the number is <b>11</b>, the four <br />clues
        could be 4, 2, 4, 1.
      </div>

      <div>
        <label for="" class="block font-bold">Guess the number</label>
        <div class="flex ">

         
          <input v-model="guess" type="text" class=" flex-grow " :class="[ isWrongGuess ? 'border-red-500' : '']"/>
          

          <button
            @click="check"
            type="button"
            class=" ml-3 px-4 bg-blue-600 text-white rounded-sm shadow-md font-bold "
          >
            Check
          </button>
        </div>
          <p  v-show="isWrongGuess" class="text-red-600 text-sm">Wrong guess</p>
        
      </div>

      <div class="mt-4 grid grid-cols-2 gap-2">
         <guess-hint  v-for="(hint,index) in hints" :key="index" :hint="hint"/>
      </div>

  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue'
import GuessHint from '@/components/GuessHint.vue'
export default {
  data () {
    return {
      guess: '',
      isWrongGuess: false
    }
  },
  
  created () {
      
  },
  computed: {
    hints(){
       return this.$store.state.hints
    },
    answer(){
       return this.$store.state.answer
    }
  },
  name: "Home",
  components: { MainLayout, GuessHint },
  methods: {
    check(){
      this.$store.dispatch('incrementGuessCount')
       if(this.answer == this.guess.trim())
       {
          this.$router.push({name: 'Success'})
          return;
       }
       this.isWrongGuess = true
       
       var context = this
       setTimeout(()=>{
          context.clear()
       },2000)

    },

    clear(){
       this.isWrongGuess = false
       this.guess = ''
    }
  }

};
</script>
