import { Parser } from 'n3';

export function parseTurtleToGraph(ttlString) {
  const parser = new Parser();
  const quads = parser.parse(ttlString);

  const nodesMap = new Map();
  const edges = [];

  function shortLabel(uri) {
    // garde juste le fragment après # ou le dernier segment après /
    const match = uri.match(/[#/]([^#/]+)$/);
    return match ? match[1] : uri;
  }

  for (const quad of quads) {
    const subj = quad.subject.value;
    const pred = quad.predicate.value;
    const obj = quad.object.value;
    const objIsLiteral = quad.object.termType === 'Literal';

    if (!nodesMap.has(subj)) {
      nodesMap.set(subj, { id: subj, label: shortLabel(subj) });
    }

    if (objIsLiteral) {
      // littéral → attribut du nœud sujet plutôt qu'un nœud séparé
      const node = nodesMap.get(subj);
      node.attributes = node.attributes || {};
      node.attributes[shortLabel(pred)] = obj;
    } else {
      if (!nodesMap.has(obj)) {
        nodesMap.set(obj, { id: obj, label: shortLabel(obj) });
      }
      edges.push({ from: subj, to: obj, label: shortLabel(pred) });
    }
  }

  return { nodes: Array.from(nodesMap.values()), edges };
}