export default {
   namespaced:true,
   state:{
    username:''
   },
   mutations:{
    AAAAAA(state,n){
        state.username = n
    }
   },
   actions:{
    actUsername(context, n){
        context.commit('AAAAAA', n)
    }
   },
   getter:{},
}