import { parseTurtleToGraph } from '$lib/rdf/parseTtl.js';
import ttlRaw from '$lib/modelling/feux-pales/data/feux-pales.ttl?raw';

export const prerender = true;

export function load() {
  const graph = parseTurtleToGraph(ttlRaw);
  return { graph };
}