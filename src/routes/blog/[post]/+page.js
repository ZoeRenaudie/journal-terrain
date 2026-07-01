import { error } from '@sveltejs/kit'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params }) => {
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`)

    // Récupère tous les posts triés
    const { posts } = await fetchPosts({ limit: -1 })
    const index = posts.findIndex(p => p.slug === params.post)

    const previous = index < posts.length - 1 ? posts[index + 1] : null
    const next = index > 0 ? posts[index - 1] : null

    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post },
      previous,
      next
    }
  } catch(err) {
    error(404, err)
  }
}