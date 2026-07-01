import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async () => {
	// Tous les posts sans limite
	const { posts } = await fetchPosts({ limit: -1 })

	// Extraire les catégories uniques avec leur nombre
	const categoriesMap = {}
	posts.forEach(post => {
		post.categories?.forEach(category => {
			if (categoriesMap[category]) {
				categoriesMap[category].count += 1
			} else {
				categoriesMap[category] = { title: category, count: 1 }
			}
		})
	})

	const categories = Object.values(categoriesMap).sort((a, b) =>
		a.title.localeCompare(b.title)
	)

	return { posts, categories }
}
