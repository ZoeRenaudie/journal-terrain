<script>
	import { onMount, tick } from 'svelte';

	let { data } = $props();

	const { title, description, type, experiment, ontologies, ruptures, date, status, lang } = data.meta;
	const { DocContent } = data;

	// Normalise arrays that may come as YAML strings
	const ontologyList = Array.isArray(ontologies) ? ontologies : (ontologies ? [ontologies] : []);
	const ruptureList  = Array.isArray(ruptures)   ? ruptures   : (ruptures   ? [ruptures]   : []);

	let docContentEl;

	onMount(async () => {
		await tick();
		if (!docContentEl) return;

		// mdsvex renders ```mermaid blocks as <pre><code class="language-mermaid">
		const blocks = docContentEl.querySelectorAll('code.language-mermaid');
		if (blocks.length === 0) return;

		const mermaid = (await import('mermaid')).default;
		mermaid.initialize({ startOnLoad: false, theme: 'neutral' });

		for (const [i, block] of Array.from(blocks).entries()) {
			const graphDefinition = block.textContent;
			const container = block.closest('pre') ?? block;
			try {
				const { svg } = await mermaid.render(`mermaid-${i}-${Date.now()}`, graphDefinition);
				const wrapper = document.createElement('div');
				wrapper.className = 'mermaid-rendered';
				wrapper.innerHTML = svg;
				container.replaceWith(wrapper);
			} catch (err) {
				console.error('Mermaid render failed:', err);
			}
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	{#if description}
		<meta data-key="description" name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="modelling-doc">

	<header class="doc-header">
		<div class="doc-meta">
			{#if type}
				<span class="badge badge--type">{type}</span>
			{/if}
			{#if experiment}
				<span class="badge badge--experiment">exp. {experiment.toUpperCase()}</span>
			{/if}
			{#if status && status !== 'published'}
				<span class="badge badge--status">{status}</span>
			{/if}
		</div>

		<h1>{title}</h1>

		{#if description}
			<p class="doc-description">{description}</p>
		{/if}

		<div class="doc-tags">
			{#each ontologyList as ontology}
				<span class="tag tag--ontology">{ontology}</span>
			{/each}
			{#each ruptureList as rupture}
				<span class="tag tag--rupture">{rupture}</span>
			{/each}
		</div>
	</header>

	<div class="doc-content" bind:this={docContentEl}>
		<DocContent />
	</div>

	{#if date}
		<footer class="doc-footer">
			<span class="doc-date">{date}</span>
			{#if lang}
				<span class="doc-lang">{lang}</span>
			{/if}
		</footer>
	{/if}

</article>

<style>
	.modelling-doc {
		max-width: 860px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.doc-header {
		margin-bottom: 2.5rem;
		border-bottom: 1px solid var(--border, #e2e2e2);
		padding-bottom: 1.5rem;
	}

	.doc-meta {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 0.75rem;
	}

	h1 {
		margin: 0 0 0.75rem;
	}

	.doc-description {
		color: var(--text-light, #555);
		font-style: italic;
		margin: 0 0 1rem;
	}

	.doc-tags {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.badge,
	.tag {
		display: inline-block;
		padding: 0.2em 0.55em;
		border-radius: 3px;
		font-size: 0.75rem;
		font-family: var(--mono, monospace);
		line-height: 1.4;
	}

	.badge--type       { background: var(--accent-light, #eeedfe); color: var(--accent, #534ab7); }
	.badge--experiment { background: #e1f5ee; color: #085041; }
	.badge--status     { background: #faeeda; color: #412402; }

	.tag--ontology { background: #f0f0f0; color: #333; }
	.tag--rupture  { background: #fcebeb; color: #501313; }

	.doc-content {
		line-height: 1.75;
	}

	.doc-content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
		font-size: 0.9rem;
	}

	.doc-content :global(th),
	.doc-content :global(td) {
		border: 1px solid var(--border, #e2e2e2);
		padding: 0.5rem 0.75rem;
		text-align: left;
		vertical-align: top;
	}

	.doc-content :global(th) {
		background: var(--light-bg, #f7f7f7);
		font-weight: 600;
	}

	.doc-content :global(.mermaid),
	.doc-content :global(pre.mermaid),
	.doc-content :global(.mermaid-rendered) {
		margin: 1.5rem 0;
		overflow-x: auto;
		text-align: center;
	}

	.doc-content :global(.mermaid-rendered svg) {
		max-width: 100%;
		height: auto;
	}

	.doc-content :global(blockquote) {
		border-left: 3px solid var(--accent, #534ab7);
		margin: 1.5rem 0;
		padding: 0.5rem 1rem;
		color: var(--text-light, #555);
		font-style: italic;
	}

	.doc-footer {
		margin-top: 3rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border, #e2e2e2);
		font-size: 0.8rem;
		color: var(--text-light, #888);
		display: flex;
		gap: 1rem;
	}
</style>