import { parseTurtleToGraph } from '$lib/rdf/parseTtl.js';
import ttlRaw from '$lib/modelling/feux-pales/feux-pales_full.ttl?raw';

export const prerender = true;

export function load() {
  const graph = parseTurtleToGraph(ttlRaw);
  return { graph };
}