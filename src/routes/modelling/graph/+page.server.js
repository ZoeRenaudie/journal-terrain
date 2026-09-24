import { parseTurtleToGraph } from '$lib/rdf/parseTtl.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ttlPath = path.resolve(__dirname, '../../../lib/modelling/feux-pales/feux-pales_full.ttl');

export const prerender = true;

export function load() {
  const ttlRaw = readFileSync(ttlPath, 'utf-8');
  const graph = parseTurtleToGraph(ttlRaw);
  return { graph };
}