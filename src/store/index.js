import { createStore } from 'vuex'


export default createStore({
  state: {
    guessCount: 0,
    hintCount:0,
    hints: ['2','4','5','6','7'],
    answer: '50',

    
  },
  mutations: {
    incrementGuessCount(state){
       state.guessCount += 1
    },
    incrementHintCount(state){
       state.hintCount +=1
    },
    setQuestion(state,payload){
      state.hints = payload.sum_clues.split(',')
      state.answer = payload.prime_number_secret
    },

  },
  actions: {

    incrementGuessCount({commit}){
       commit('incrementGuessCount')
    },
    incrementHintCount({commit}){
      commit('incrementHintCount')
    },

    

    getQuestion({commit}){
       
    }

  },
  modules: {
  }
})
