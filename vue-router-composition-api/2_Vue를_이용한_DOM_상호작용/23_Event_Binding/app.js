const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    addNum(num) {
      this.counter = this.counter + num;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
    reduceNum(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    }
  }
});

app.mount("#events");
