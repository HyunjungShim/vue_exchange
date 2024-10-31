export default {
    namespaced:true,
    state() {
        return {
            isDark:true
        }
    },
    mutations:{
        setColor(state,val){
            state.isDark = val
            // console.log(val);
        }
    }
}