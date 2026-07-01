<script>
	let { posts = [] } = $props();
	import { base } from '$app/paths';
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="{base}/blog/{post.slug}">

					<h2>
						{post.title}
					</h2>
					
				</a>

				

			</article>
			<p class="post-date">
				{new Date(post.date).toLocaleDateString('fr-CA')}
			</p>

			<p>résumé : {post.excerpt}</p>
		</li>
	{/each}
</ul>