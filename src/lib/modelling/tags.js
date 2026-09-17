// Helpers to read structured info out of a flat `tags` array.
//
// Convention: tags are plain strings. Some carry a "namespace:" prefix
// to encode a category (case, type, experiment, ontology, rupture, lang);
// others are free-form and have no prefix at all.
//
//   tags:
//     - case:feux-pales
//     - type:modelling
//     - experiment:b
//     - ontology:cidoc-crm
//     - ontology:ontoexhibit
//     - rupture:forced-choice
//     - lang:en

/** All values for a given prefix, e.g. tagsByPrefix(tags, 'ontology') -> ['cidoc-crm', 'ontoexhibit'] */
export function tagsByPrefix(tags = [], prefix) {
	const needle = `${prefix}:`
	return tags
		.filter((t) => typeof t === 'string' && t.startsWith(needle))
		.map((t) => t.slice(needle.length))
}

/** First value for a given prefix, e.g. tagByPrefix(tags, 'case') -> 'feux-pales' */
export function tagByPrefix(tags = [], prefix) {
	return tagsByPrefix(tags, prefix)[0]
}

/** Tags with no "prefix:" at all — free-form, uncategorised tags. */
export function plainTags(tags = []) {
	return tags.filter((t) => typeof t === 'string' && !t.includes(':'))
}
