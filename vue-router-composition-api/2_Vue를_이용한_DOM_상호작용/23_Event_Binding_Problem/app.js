const app = Vue.createApp({
  data() {
    return {
      output_1: "",
      output_2: ""
    };
  },
  methods: {
    showAlert() {
      alert("Button Clicked!");
    },
    setOutput_1(event) {
      this.output_1 = event.target.value;
    },
    setOutput_2(event) {
      this.output_2 = event.target.value;
    }
  }
});

app.mount("#assignment");
