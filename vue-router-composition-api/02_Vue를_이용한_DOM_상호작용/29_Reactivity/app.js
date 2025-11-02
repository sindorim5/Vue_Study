const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: ""
      // fullname: ""
    };
  },
  watch: {
    // name(newVal, oldValue) {
    //   newVal === "" ? (this.fullname = "") : (this.fullname = newVal + " " + "Song");
    // },
    // lastName(newVal, oldVal) {
    //   newVal === "" ? (this.fullname = "") : (this.fullname = this.name + " " + newVal);
    // },
    // counter(newVal, oldVal) {
    //   if (newVal > 50) {
    //     this.counter = 0;
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log("Fullname computed");
      return this.name === "" || this.lastName === "" ? "" : this.name + " " + this.lastName;
    },
    computedCounter() {
      if (this.counter > 50) {
        return (this.counter = 0);
      } else {
        return this.counter;
      }
    }
  },
  methods: {
    outputFullname() {
      console.log("outputFullname computed");
      return this.name === "" ? "" : this.name + " " + "Song";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount("#events");
