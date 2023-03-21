<script>
  import "../app.scss";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<main>
  <slot />
</main>

<style lang="scss">
  main{
    width: 70%;
    margin-inline: auto;
  }
</style>