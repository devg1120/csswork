

<script>
  import { onMount } from "svelte";

  import Graph from './svelte-cytoscape-demo/src/components/Graph.svelte'
  import GraphNode from './svelte-cytoscape-demo/src/components/GraphNode.svelte'
  import GraphEdge from './svelte-cytoscape-demo/src/components/GraphEdge.svelte'

  const nodes = [
    { id: 'N1', label: 'Start' },
    { id: 'N2', label: '4' },
    { id: 'N4', label: '8' },
    { id: 'N5', label: '15' },
    { id: 'N3', label: '16' },
    { id: 'N6', label: '23' },
    { id: 'N7', label: '42' },
    { id: 'N8', label: 'End' }
  ]

  const edges = [
    { id: 'E1', source: 'N1', target: 'N2' },
    { id: 'E2', source: 'N2', target: 'N3' },
    { id: 'E3', source: 'N3', target: 'N6' },
    { id: 'E4', source: 'N2', target: 'N4' },
    { id: 'E5', source: 'N4', target: 'N5' },
    { id: 'E6', source: 'N5', target: 'N4', label: '2' },
    { id: 'E7', source: 'N5', target: 'N6' },
    { id: 'E8', source: 'N6', target: 'N7' },
    { id: 'E9', source: 'N7', target: 'N7', label: '3' },
    { id: 'E10', source: 'N7', target: 'N8' }
  ]

  onMount(() => {
    console.log("コンポーネントが初めてマウントされました");
  });


</script>

<Graph>
  {#each nodes as node}
    <GraphNode node={node}/>
  {/each}

  {#each edges as edge}
    <GraphEdge edge={edge}/>
  {/each}
</Graph>
