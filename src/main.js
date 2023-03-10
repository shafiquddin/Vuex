import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store=createStore({
    state(){
        return {
            counter:0,
            isLogged:false,
        }
    },
    mutations:{
        increment(state){
            state.counter=state.counter+2
        },
        increase(state,payload){
            state.counter=state.counter+payload.value
        },
        setAuth(state,payload){
            state.isLogged=payload.isAuth
        }
    },
    actions:{
      increment(context){
        setTimeout(()=>{
        context.commit('increment')
       },2000)
      },
      increase(context,payload){
        console.log(context);
        context.commit('increase',payload)
      },
      login(context){
        context.commit('setAuth',{isAuth:true})
      },
      logout(context){
        context.commit('setAuth',{isAuth:false})
      }
    },
    getters:{
        finalCounter(state){
           return state.counter*3;
        },
        normalizeCounter(_,getters){
            const finalCounter=getters.finalCounter;
            if(finalCounter<0){
                return 0;
            }else if(finalCounter>100) {
                return 100;
            }
            else{
                return finalCounter;
            }
        },
        userIsAuthenticated(state){
            return state.isLogged;
        }
    },
})

const app = createApp(App);
app.use(store);

app.mount('#app');
