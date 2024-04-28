
<script>
import { onMount } from 'svelte';

import Spreadsheet from "x-data-spreadsheet";

function renderGraph() {

    //const sheet = new Spreadsheet("#x-spreadsheet-demo")
    var elem = document.getElementById("x-spreadsheet-demo");
    const sheet = new Spreadsheet(elem)
}

onMount(async () => {
      renderGraph();
});

</script>
<main>
<div   id="x-spreadsheet-demo" class="fixed-content">
</div>
</main>


