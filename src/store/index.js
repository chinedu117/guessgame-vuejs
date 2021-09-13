import { createStore } from 'vuex'
import axios from 'axios'

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
    setSecretAndClues(state,payload){
      state.hints = payload.sum_clues.split(',')
      state.answer = payload.prime_secret_number
    },

  },
  actions: {

    incrementGuessCount({commit}){
       commit('incrementGuessCount')
    },
    incrementHintCount({commit}){
      commit('incrementHintCount')
    },

    

    getSecret({commit}){
        axios.post('http://127.0.0.1:8000/get_secret').
        then(res => {
          
           commit('setSecretAndClues',res.data);
           console.log(res)

        }).catch(error => {

            console.log(error)
        })
    }

  },
  modules: {
  }
})
