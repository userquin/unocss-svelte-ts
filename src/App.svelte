<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    let logo = false
    let red = false
    const toggleLogo = () => {
        logo = !logo
    }
    const toggleSpan = () => {
        red = !red
    }
    $: button = logo ? 'Hide logo' : 'Show logo'
    $: span = red ? 'Normal' : 'Red'
</script>
<main>
  <span class="i-logos-svelte-icon w-6em h-6em transform transition-800 !hover:rotate-180"></span>

  {#if logo}
    <span class:logo={logo} in:fly="{{ y: 200, duration: 2000 }}" out:fade></span>
  {/if}

  <h1 class="animate-bounce">Hello Typescript!</h1>

  <br/>

  <div class:bg-red-300={red}>BG Color should change</div>

  <br/>

  <button on:click={toggleLogo}>{button}</button>
  <button on:click={toggleSpan}>Change BG Color: {span}</button>

  <br />

  <div data-absolute=" " data-mt-20px=" " data-bottom-0=" ">data-***</div>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }


  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }


  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
