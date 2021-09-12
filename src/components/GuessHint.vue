<template lang="">
<div @click="showHint">
    <div  class=" text-center text-gray-300 text-3xl font-bold  p-10" :class="[displayHint ? 'bg-red-700' : 'bg-green-700']" >
        
        {{ displayHint ? hint : " ?"}}
        
     </div>

</div>  
</template>
<script>
export default {
  props: {
      hint: {
           type: String,
           default: "40"
      }
  },
  data () {
    return {
        displayHint: false
      
    }
  },
    name: 'guess-hint',
    
    methods: {
         showHint(){
              this.displayHint = true
              var context = this
              this.$store.dispatch('incrementHintCount')
              setTimeout(()=> {
                   context.displayHint = false
              },3000)
                
         }
    }
}
</script>
<style lang="">
    
</style>