
export default {
    namespaced: true,
    state: {
        breads: ['飞船'],
        b:'飞船',
        mark:'',
        b0: "",
        b1: "",
        b2: "",
        b3: "",
        b4: "",
        b5: "",
        allgoods:[],

    },
    mutations: {
        del(state, n) {
            state.breads = state.breads.filter(e=>e != n)
            if (state.b == n){
                state.b = ''
            }
            if (state.mark == n){
                state.mark = ''
            }
            if (state.b0 == n){
                state.b0 = ''
            }
            if (state.b1 == n){
                state.b1 = ''
            }
            if (state.b2 == n){
                state.b2 = ''
            }
            if (state.b3 == n){
                state.b3 = ''
            }
            if (state.b4 == n){
                state.b4 = ''
            }
            if (state.b5 == n){
                state.b5 = ''
            }
        },
        add(state, n) {
            if (n.index == '0'){
                state.b0 = n.d
            }
            else if(n.index == '1'){
                state.b1 = n.d
            }
            else if(n.index == '2'){
                state.b2 = n.d
            }
            else if(n.index == '3'){
                state.b3 = n.d
            }
            else if(n.index == '4'){
                state.b4 = n.d
            }
            else{
                state.b5 = n.d
            }
        },
        m(state, n){
            state.mark = n
        },
        s(state, n){
            state.b = n
        },
        f(state){
            state.breads = []
            if(state.b != ""){
                state.breads.push(state.b)
            }
            if(state.mark != ""){
                state.breads.push(state.mark)
            }
            if(state.b0 != ""){
                state.breads.push(state.b0)
            }
            if(state.b1 != ""){
                state.breads.push(state.b1)
            }
            if(state.b2 != ""){
                state.breads.push(state.b2)
            }
            if(state.b3 != ""){
                state.breads.push(state.b3)
            }
            if(state.b4 != ""){
                state.breads.push(state.b4)
            }
            if(state.b5 != ""){
                state.breads.push(state.b5)
            }

        }

    },
    actions: {
        delBreads(context, n) {
            context.commit('del', n)
        },
        addEBreads(context, n) {
            context.commit('add', n)
            context.commit('f')
        },
        markBreads(context, n) {
            context.commit('m', n)
            context.commit('f')
        },
        seaBreads(context, n) {
            context.commit('s', n)
            context.commit('f')
        },
    },
    getter: {},
}