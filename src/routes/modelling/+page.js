export const load = async () => {
	const docs = await Promise.all(
		Object.entries(
			import.meta.glob('/src/lib/modelling/**/*.md')
		).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			// Convert file path to slug: strip prefix and .md extension
			// e.g. /src/lib/modelling/feux-pales/data/feux-pales.md → feux-pales/data/feux-pales
			const slug = path
				.replace('/src/lib/modelling/', '')
				.replace(/\.md$/, '')

			return { ...metadata, slug }
		})
	)

	// Group by case, then by type
	const sorted = docs.sort((a, b) => {
		// READMEs / index pages first within their group
		if (a.type === 'index') return -1
		if (b.type === 'index') return 1
		return (a.slug ?? '').localeCompare(b.slug ?? '')
	})

	    // Entrée statique pour le graphe RDF interactif
    const graphEntry = {
        title: 'Graphe RDF — Feux pâles',
        type: 'graph',
        slug: '../graph',   // chemin relatif depuis /modelling/
        external: false
    }

    return { docs: [...sorted, graphEntry] }

}
