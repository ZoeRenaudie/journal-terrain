<script>
	import { tagsByPrefix } from './tags.js';

	let { docs = [], searchText = $bindable(''), activeTags = $bindable([]) } = $props();

	const PREFIXES = ['case', 'type', 'experiment', 'ontology', 'rupture', 'lang'];

	const LABELS = {
		case: 'Case',
		type: 'Type',
		experiment: 'Expérimentation',
		ontology: 'Ontologie',
		rupture: 'Rupture',
		lang: 'Langue'
	};

	const facets = $derived(
		PREFIXES.map((prefix) => ({
			prefix,
			label: LABELS[prefix] ?? prefix,
			values: [...new Set(docs.flatMap((d) => tagsByPrefix(d.tags, prefix)))].sort()
		})).filter((f) => f.values.length > 0)
	);

	function toggleTag(tag) {
		activeTags = activeTags.includes(tag)
			? activeTags.filter((t) => t !== tag)
			: [...activeTags, tag];
	}

	function clearAll() {
		searchText = '';
		activeTags = [];
	}
</script>

<div class="doc-search">
	<input
		type="search"
		class="search-input"
		placeholder="Rechercher par titre ou description…"
		bind:value={searchText}
	/>

	<div class="facets">
		{#each facets as facet}
			<div class="facet-group">
				<span class="facet-label">{facet.label}</span>
				<div class="facet-chips">
					{#each facet.values as value}
						{@const tag = `${facet.prefix}:${value}`}
						<button
							type="button"
							class="chip"
							class:active={activeTags.includes(tag)}
							onclick={() => toggleTag(tag)}
						>
							{value}
						</button>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	{#if searchText || activeTags.length}
		<button type="button" class="clear-all" onclick={clearAll}>
			✕ Réinitialiser les filtres
		</button>
	{/if}
</div>

<style>
	.doc-search {
		margin-bottom: 2rem;
	}

	.search-input {
		width: 100%;
		box-sizing: border-box;
		padding: 0.6rem 0.85rem;
		border: 1px solid var(--border, #e2e2e2);
		border-radius: 4px;
		font-size: 0.95rem;
		margin-bottom: 1rem;
		font-family: inherit;
		color: inherit;
		background: #fff;
	}

	.search-input::placeholder {
		color: var(--text-light, #999);
	}

	.search-input:focus {
		outline: none;
		border-color: var(--accent, #534ab7);
	}

	.facets {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.facet-group {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
		flex-wrap: wrap;
	}

	.facet-label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-light, #888);
		flex-shrink: 0;
		width: 6.5rem;
	}

	.facet-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}

	.chip {
		border: 1px solid var(--border, #e2e2e2);
		background: #fff;
		color: #444;
		border-radius: 3px;
		padding: 0.15em 0.55em;
		font-size: 0.75rem;
		font-family: var(--mono, monospace);
		cursor: pointer;
	}

	.chip:hover {
		border-color: var(--accent, #534ab7);
	}

	.chip.active {
		background: #534ab7;
		border-color: #534ab7;
		color: #fff;
	}

	.clear-all {
		margin-top: 0.75rem;
		border: none;
		background: none;
		color: var(--text-light, #666);
		font-size: 0.8rem;
		cursor: pointer;
		padding: 0;
		text-decoration: underline;
	}

	.clear-all:hover {
		color: var(--accent, #534ab7);
	}
</style>
