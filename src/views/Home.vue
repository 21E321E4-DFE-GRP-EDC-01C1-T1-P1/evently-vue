<template>
  <h2>Home</h2>
</template>

<script>
export default {
  name: "Home",
  created() {
    if (!this.$store.state.currentUser) {
      this.$router.replace({/* Login */})
    }
  }
}
</script>