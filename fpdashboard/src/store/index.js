import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
    state: {
        users: [
            { name: "Weeknd", email: "weeknd@Test.com", active: true },
            { name: "Travis", email: "travis@Test.com", active: true },
            { name: "Kanye", email: "kanye@Test.com", active: true },
            { name: "Kdfdff", email: "kendrick@Test.com", active: true },
            { name: "Kendrick", email: "kendrick@Test.com", active: true },
        ],
        tasks: [
            { title: "html", state: true },
            { title: "Travis", state: false },
            { title: "css", state: true },
            { title: "Kdfdff", state: false },
            { title: "javascript", state: true },
        ],

        num: 1,
    },

    getters: {
        
        getNum(state){
            return state.num 
        },
        getNumSq(state){
            return state.num * state.num
        },
        getAllTasks(state) {
            return state.tasks;
        },
        getAllUsers(state) {
            return state.users;
        },

        getActiveUsers(state) {
            return state.users.filter((user) => {
                return user.active === true;
            });
        },
        getInactiveUsers(state) {
            return state.users.filter((user) => {
                return user.active === false;
            });
        },
    },
    mutations: {
        increment(state, randomNumber) {
            // console.log('randomNumber: ', randomNumber)
            state.num += randomNumber
        },
        decrement(state, randomNumber) {
            state.num -= randomNumber
        },
        updateCheckBox(state, checkBoxId) {
           state.tasks[checkBoxId].state = !state.tasks[checkBoxId].state
        },
    },
    actions: {
        increment({commit}) {
            // console.log("increment (action)");
            axios(
                "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
            ).then(response => {
                commit('increment', response.data)
            });
        },
        decrement({commit}) {
            // console.log("decrement (action)");
            axios(
                "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
            ).then(response => {
                commit('decrement', response.data)
            });
        },
        toggleCheckBox({commit}, checkBoxId) {
            commit('updateCheckBox', checkBoxId)
        }
    },
});

export default store;
