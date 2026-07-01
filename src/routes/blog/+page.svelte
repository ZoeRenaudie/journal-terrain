<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import { siteDescription } from '$lib/config'
	import { base } from '$app/paths'

	let { data } = $props();
	const { posts, categories } = data
</script>

<svelte:head>
	<title>Journal Ph.D.</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div class="blog-layout">
	<aside class="categories-menu">
		<h2>Catégories</h2>
		<ul>
			<li>
				<a href="{base}/blog">Tous ({posts.length})</a>
			</li>
			{#each categories as category}
			<li>
				<a href="{base}/blog/category/{category.title}">
					{category.title} ({category.count})
				</a>
			</li>
			{/each}
		</ul>
	</aside>

	<main class="posts-section">
		<h1>Journal Ph.D.</h1>
		<PostsList posts={posts} />
	</main>
</div>