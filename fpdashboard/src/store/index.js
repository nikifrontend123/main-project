import { createStore } from 'vuex'
const store = createStore({
    state: {
        users: [

            { name: 'Weeknd', email: 'weeknd@Test.com', active: true },
            { name: 'Travis', email: 'travis@Test.com', active: true },
            { name: 'Kanye', email: 'kanye@Test.com', active: true },
            { name: 'Kdfdff', email: 'kendrick@Test.com', active: true },

        ],
    },

    getters: {
        getAllUsers(state) {
            return state.users
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


    },
    actions: {

    },

})
export default store