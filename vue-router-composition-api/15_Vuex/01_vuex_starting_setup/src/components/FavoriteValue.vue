<template>
  <h3>favoriteValue : {{ counter }}</h3>
  <p>we do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.getters.normalizedCounter;
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
