<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your Name" v-model="enteredName" />
      <input type="text" placeholder="Your Age" v-model="enteredAge" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>
