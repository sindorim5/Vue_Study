const app = Vue.createApp({
  data() {
    return {
      number: 0
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much!";
      } else {
        return this.number;
      }
    }
  },
  watch: {
    result(newVal, oldVal) {
      console.log(`result watcher: ${newVal}`);
      const that = this;
      setTimeout(() => {
        that.number = 0;
        console.log("reset");
      }, 5000);
    }
  },
  methods: {
    add(value) {
      console.log(this.number + value);
      return (this.number += value);
    }
  }
});

app.mount("#assignment");
