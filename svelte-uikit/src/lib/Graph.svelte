

<script>
  import { onMount } from "svelte";

  import GraphApp from './svelte-cytoscape-demo/src/App.svelte'

  function renderGraph() {
    var app = new GraphApp({
      target: document.getElementById('gcy'),
    })
  };
  onMount(async () => {
    console.log("コンポーネントが初めてマウントされました");
      renderGraph();
  });


</script>

<div id="gcy">
</div>
<style>
#gcy {
  height: 100vh;
  }
</style>
