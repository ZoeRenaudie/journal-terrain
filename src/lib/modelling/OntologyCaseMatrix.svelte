<script>
	import { tagsByPrefix } from './tags.js';

	let { docs = [], activeTags = $bindable([]) } = $props();

	const ontologies = $derived(
		[...new Set(docs.flatMap((d) => tagsByPrefix(d.tags, 'ontology')))].sort()
	);
	const cases = $derived(
		[...new Set(docs.flatMap((d) => tagsByPrefix(d.tags, 'case')))].sort()
	);

	function countFor(ontology, caseName) {
		return docs.filter((d) => {
			const o = tagsByPrefix(d.tags, 'ontology');
			const c = tagsByPrefix(d.tags, 'case');
			return o.includes(ontology) && c.includes(caseName);
		}).length;
	}

	function isActive(ontology, caseName) {
		return activeTags.includes(`ontology:${ontology}`) && activeTags.includes(`case:${caseName}`);
	}

	function toggleCell(ontology, caseName) {
		const oTag = `ontology:${ontology}`;
		const cTag = `case:${caseName}`;
		if (isActive(ontology, caseName)) {
			activeTags = activeTags.filter((t) => t !== oTag && t !== cTag);
		} else {
			activeTags = [...new Set([...activeTags, oTag, cTag])];
		}
	}
</script>

{#if ontologies.length && cases.length}
	<div class="matrix-wrap">
		<p class="matrix-caption">
			Chaque cellule compte les documents qui portent à la fois cette ontologie et ce case
			d'étude. Cliquer sur une cellule filtre la liste ci-dessous.
		</p>

		<div class="matrix-scroll">
			<table class="matrix">
				<thead>
					<tr>
						<th class="corner"></th>
						{#each cases as caseName}
							<th class="col-head">{caseName}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each ontologies as ontology}
						<tr>
							<th class="row-head">{ontology}</th>
							{#each cases as caseName}
								{@const count = countFor(ontology, caseName)}
								{@const active = isActive(ontology, caseName)}
								<td>
									{#if count > 0}
										<button
											type="button"
											class="cell"
											class:active
											onclick={() => toggleCell(ontology, caseName)}
											title="{ontology} × {caseName} — {count} document{count > 1 ? 's' : ''}"
										>
											{count}
										</button>
									{:else}
										<span class="cell cell--empty">–</span>
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		{#if activeTags.some((t) => t.startsWith('ontology:')) && activeTags.some((t) => t.startsWith('case:'))}
			<button type="button" class="clear-btn" onclick={() => (activeTags = [])}>
				✕ Effacer la sélection de la matrice
			</button>
		{/if}
	</div>
{/if}

<style>
	.matrix-wrap {
		margin: 1.5rem 0 2rem;
	}

	.matrix-caption {
		font-size: 0.8rem;
		color: var(--text-light, #666);
		max-width: 65ch;
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.matrix-scroll {
		overflow-x: auto;
	}

	.matrix {
		border-collapse: collapse;
		font-size: 0.8rem;
		white-space: nowrap;
	}

	.matrix th,
	.matrix td {
		border: 1px solid var(--border, #e2e2e2);
		padding: 0.35rem 0.5rem;
		text-align: center;
	}

	.corner {
		background: transparent;
		border: none;
	}

	.col-head {
		font-family: var(--mono, monospace);
		font-weight: 500;
		color: var(--text-light, #555);
	}

	.row-head {
		font-family: var(--mono, monospace);
		font-weight: 500;
		color: var(--text-light, #555);
		text-align: right;
		white-space: nowrap;
	}

	.cell {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.6rem;
		min-height: 1.6rem;
		padding: 0.1rem 0.4rem;
		border: none;
		border-radius: 3px;
		background: #eeedfe;
		color: #534ab7;
		font-family: var(--mono, monospace);
		font-size: 0.8rem;
		cursor: pointer;
	}

	.cell:hover {
		background: #ddd9fc;
	}

	.cell.active {
		background: #534ab7;
		color: #fff;
	}

	.cell--empty {
		background: transparent;
		color: var(--border, #ddd);
		cursor: default;
	}

	.clear-btn {
		margin-top: 0.75rem;
		border: none;
		background: none;
		color: var(--text-light, #666);
		font-size: 0.8rem;
		cursor: pointer;
		padding: 0;
		text-decoration: underline;
	}

	.clear-btn:hover {
		color: var(--accent, #534ab7);
	}
</style>
