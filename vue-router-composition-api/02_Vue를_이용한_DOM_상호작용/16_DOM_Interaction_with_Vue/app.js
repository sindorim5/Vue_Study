const app = Vue.createApp({
  data() {
    return {
      randomNumber: Math.random(),
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and Build Amazing Apps!",
      courseGoalC: "<h3>v-html test</h3>",
      vueLink: "https://vuejs.org/"
    };
  },
  methods: {
    outputGoal() {
      if (this.randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount("#user-goal");
