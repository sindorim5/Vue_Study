const app = Vue.createApp({
  data() {
    return {
      name: "Kihun SONG",
      age: 29,
      imgUrl:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount("#assignment");
