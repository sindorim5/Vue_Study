const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
      listShowFlag: true
    };
  },
  computed: {
    listTest() {
      // true -> Hide, false -> Show
      return this.listShowFlag ? "Hide" : "Show";
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleBtn() {
      this.listShowFlag = !this.listShowFlag;
    }
  }
});

app.mount("#assignment");
