<script>
	import { tagByPrefix } from '$lib/modelling/tags.js';
	import OntologyCaseMatrix from '$lib/modelling/OntologyCaseMatrix.svelte';
	import DocSearch from '$lib/modelling/DocSearch.svelte';

	let { data } = $props();
	const { docs } = data;

	// Separate the site-level index doc from the rest
	const index = docs.find(d => tagByPrefix(d.tags, 'type') === 'index');
	const cases = docs.filter(d => tagByPrefix(d.tags, 'type') !== 'index');

	let searchText = $state('');
	let activeTags = $state([]);

	const filtered = $derived(
		cases.filter((doc) => {
			const q = searchText.trim().toLowerCase();
			const matchesText =
				!q ||
				(doc.title ?? '').toLowerCase().includes(q) ||
				(doc.description ?? '').toLowerCase().includes(q);
			const matchesTags = activeTags.every((tag) => (doc.tags ?? []).includes(tag));
			return matchesText && matchesTags;
		})
	);

	// Group filtered docs by the case:xxx tag
	const grouped = $derived(
		filtered.reduce((acc, doc) => {
			const key = tagByPrefix(doc.tags, 'case') ?? 'other';
			if (!acc[key]) acc[key] = [];
			acc[key].push(doc);
			return acc;
		}, {})
	);

	// Tags shown per doc: everything except case:xxx (already the section heading)
	function visibleTags(tags) {
		return (tags ?? []).filter((t) => !t.startsWith('case:'));
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

	<OntologyCaseMatrix docs={cases} bind:activeTags />

	<DocSearch docs={cases} bind:searchText bind:activeTags />

	{#if filtered.length === 0}
		<p class="empty-state">Aucun document ne correspond à ces filtres.</p>
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
							{#each visibleTags(doc.tags) as tag}
								<span class="badge">{tag}</span>
							{/each}
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
		margin-bottom: 2rem;
		border-bottom: 1px solid var(--border, #e2e2e2);
		padding-bottom: 1.5rem;
	}

	.index-description {
		color: var(--text-light, #555);
		font-style: italic;
		max-width: 65ch;
	}

	.empty-state {
		color: var(--text-light, #888);
		font-style: italic;
		padding: 1.5rem 0;
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
		flex-direction: column;
		gap: 0.4rem;
		padding: 0.7rem 0;
		border-bottom: 1px solid var(--border, #f0f0f0);
	}

	.doc-link {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		text-decoration: none;
		color: inherit;
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
	}

	.badge {
		display: inline-block;
		padding: 0.15em 0.5em;
		border-radius: 3px;
		font-size: 0.7rem;
		font-family: var(--mono, monospace);
		white-space: nowrap;
		background: #f0f0f0;
		color: #444;
	}
</style>
