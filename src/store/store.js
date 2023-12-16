import { reactive } from "vue";

const store = reactive({
  username: "adrian.german",
  updateUsername(username) {
    this.username = username;
  },
});

export default store;
