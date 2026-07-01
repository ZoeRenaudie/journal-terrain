<script>
	let { data } = $props();
	const { docs } = data;

	// Separate index doc from the rest
	const index = docs.find(d => d.type === 'index')
	const cases = docs.filter(d => d.type !== 'index')

	// Group remaining docs by case
	const grouped = cases.reduce((acc, doc) => {
		const key = doc.caseStudy ?? 'other'
		if (!acc[key]) acc[key] = []
		acc[key].push(doc)
		return acc
	}, {})

	// Badge colour by type
	const typeColour = {
		modelling:    'badge--type',
		data:         'badge--data',
		requirements: 'badge--requirements',
	}
</script>

<svelte:head>
	<title>Modelling Experiments</title>
	<meta name="description" content="Ontological modelling experiments for exhibition documentation. Case study: Feux pâles (capcMusée, 1990–91)." />
</svelte:head>

<div class="modelling-index">

	{#if index}
		<header class="index-header">
			<h1>{index.title}</h1>
			{#if index.description}
				<p class="index-description">{index.description}</p>
			{/if}
		</header>
	{/if}

	{#each Object.entries(grouped) as [caseName, caseDocs]}
		<section class="case-section">
			<h2 class="case-title">{caseName}</h2>

			<ul class="doc-list">
				{#each caseDocs as doc}
					<li class="doc-item">
						<a href="/modelling/{doc.slug}" class="doc-link">
							<span class="doc-title">{doc.title ?? doc.slug}</span>
							{#if doc.description}
								<span class="doc-excerpt">{doc.description}</span>
							{/if}
						</a>
						<div class="doc-tags">
							{#if doc.type}
								<span class="badge {typeColour[doc.type] ?? 'badge--type'}">{doc.type}</span>
							{/if}
							{#if doc.experiment}
								<span class="badge badge--experiment">exp. {doc.experiment.toUpperCase()}</span>
							{/if}
							{#if Array.isArray(doc.ontologies)}
								{#each doc.ontologies as onto}
									<span class="badge badge--ontology">{onto}</span>
								{/each}
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</section>
	{/each}

</div>

<style>
	.modelling-index {
		max-width: 860px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.index-header {
		margin-bottom: 3rem;
		border-bottom: 1px solid var(--border, #e2e2e2);
		padding-bottom: 1.5rem;
	}

	.index-description {
		color: var(--text-light, #555);
		font-style: italic;
		max-width: 65ch;
	}

	.case-section {
		margin-bottom: 2.5rem;
	}

	.case-title {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-light, #888);
		margin-bottom: 0.75rem;
	}

	.doc-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.doc-item {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.6rem 0;
		border-bottom: 1px solid var(--border, #f0f0f0);
	}

	.doc-link {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		text-decoration: none;
		color: inherit;
		flex: 1;
	}

	.doc-link:hover .doc-title {
		text-decoration: underline;
	}

	.doc-title {
		font-weight: 500;
	}

	.doc-excerpt {
		font-size: 0.85rem;
		color: var(--text-light, #666);
	}

	.doc-tags {
		display: flex;
		gap: 0.3rem;
		flex-wrap: wrap;
		flex-shrink: 0;
	}

	.badge {
		display: inline-block;
		padding: 0.15em 0.5em;
		border-radius: 3px;
		font-size: 0.7rem;
		font-family: var(--mono, monospace);
		white-space: nowrap;
	}

	.badge--type         { background: #eeedfe; color: #534ab7; }
	.badge--data         { background: #e1f5ee; color: #085041; }
	.badge--requirements { background: #faeeda; color: #412402; }
	.badge--experiment   { background: #e1f5ee; color: #085041; }
	.badge--ontology     { background: #f0f0f0; color: #444; }
</style>