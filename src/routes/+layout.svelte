<script>
  import "../app.scss";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<main>
  <slot />
</main>

<style lang="scss">
  main {
    width: 70%;
    margin-inline: auto;
  }
  @media screen and (max-width: 1350px) {
    main {
      width: 95%;
    }
  }
</style>
