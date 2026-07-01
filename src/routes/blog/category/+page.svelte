<!-- Renders any page at /blog/category/[category] -->
<script>
	import { base } from '$app/paths'
	import PostsList from '$lib/components/PostsList.svelte'

	let { data } = $props();
	const { posts, category } = data
</script>

<svelte:head>
	<title>Catégorie : {category}</title>
</svelte:head>

<h1>Catégorie : {category}</h1>

<p><a href="{base}/blog">← Tous les billets</a></p>

{#if posts.length}
	<PostsList posts={posts} />
{:else}
	<p><strong>Aucun billet</strong> trouvé dans la catégorie « {category} ».</p>
	<p><a href="{base}/blog">Retour au blog</a></p>
{/if}
