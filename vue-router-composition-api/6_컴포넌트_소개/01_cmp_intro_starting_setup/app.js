const app = Vue.createApp({
  data() {
    return {
      detailsVisibility: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123456789",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987654321",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisibility = !this.detailsVisibility;
    },
  },
});

app.mount("#app");
