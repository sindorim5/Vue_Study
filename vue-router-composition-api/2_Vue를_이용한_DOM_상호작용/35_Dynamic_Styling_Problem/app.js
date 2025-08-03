const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      clicked: false,
      bgColor: ""
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: !this.clicked,
        hidden: this.clicked
      };
    }
  },
  methods: {
    toggleParagraphVisibility() {
      this.clicked = !this.clicked;
      console.log(`hit ${this.clicked}`);
    }
  }
});

app.mount("#assignment");
