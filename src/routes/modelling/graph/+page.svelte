<script>
  import { onMount } from 'svelte';
  import { Network } from 'vis-network';
  import { DataSet } from 'vis-data';

  export let data;

  let container;

  onMount(() => {
    const nodes = new DataSet(data.graph.nodes);
    const edges = new DataSet(
      data.graph.edges.map((e, i) => ({ id: i, ...e, arrows: 'to' }))
    );

    const network = new Network(
      container,
      { nodes, edges },
      {
        nodes: { shape: 'dot', size: 12, font: { size: 12 } },
        edges: { font: { size: 9, align: 'middle' }, smooth: { type: 'curvedCW', roundness: 0.1 } },
        physics: { stabilization: true, barnesHut: { gravitationalConstant: -3000 } }
      }
    );

    return () => network.destroy();
  });
</script>

<div bind:this={container} style="width: 100%; height: 600px; border: 1px solid #ccc;"></div>