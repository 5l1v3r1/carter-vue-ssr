<template>
    <div>
        <h1> Hello World! </h1>
        <h3> {{ message }} </h3>
        <button v-on:click="updateMessage"> Get Server Time </button>
    </div>
</template>
<script>
export default {
  asyncData({ store, route }) {
    return store.dispatch('helloworld/fetchMessage');
  },
  computed: {
    message() {
      return this.$store.state.helloworld.message;
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.dispatch('helloworld/fetchMessage');
    }
  }
};
</script>