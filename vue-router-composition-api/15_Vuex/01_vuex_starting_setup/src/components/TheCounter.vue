<template>
  <h3>counter : {{ counter }}</h3>
  <h3>finalCounter : {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // finalCounter() {
    //   return this.$store.getters.finalCounter;
    // },
    counter() {
      // return this.$store.state.counter;
      return this.$store.state.numbers.counter;
    },
    // ...mapGetters(['finalCounter']),
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
