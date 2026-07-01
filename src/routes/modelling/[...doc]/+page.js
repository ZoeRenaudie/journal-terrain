import { error } from '@sveltejs/kit'

const docs = import.meta.glob('/src/lib/modelling/**/*.md')

export const load = async ({ params }) => {
	// params.doc should be an array with a rest param [...doc],
	// but handle the string case defensively too.
	const path = Array.isArray(params.doc) ? params.doc.join('/') : params.doc

	const key = `/src/lib/modelling/${path}.md`

	const resolver = docs[key]
	if (!resolver) error(404, `Not found: ${path}`)

	const doc = await resolver()

	return {
		DocContent: doc.default,
		meta: { ...doc.metadata, slug: path }
	}
}
