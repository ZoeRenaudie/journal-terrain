/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'ZOË RENAUDIE'
export const siteDescription = 'Journal de terrain de Zoë Renaudie, doctorante en histoire de l\'art à l\'Université de Montréal.'
export const siteURL = 'journal-terrain.zoerenaudie.com'
export const siteLink = 'https://github.com/ZoeRenaudie/journal-terrain'
export const siteAuthor = 'Site statique créé par Zoë Renaudie avec l\'aide d\'Evan Renaudie à partir du [SvelteKit Blog Starter de Josh Collinsworth](https://github.com/josh-collinsworth/sveltekit-blog-starter). Les polices utilisées sont Manifont Grotesk (c) CUTE Sophie Vela, Max Lillo et al. et DM Sans (c) OFL Camille Circlude, Eugénie Bidaut, Mariel Nils, Bérénice Bouin, merci au travail de Bye-Bye Binary'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Journal de terrain',
		route: '/blog'
	},{
		title: 'Modèle documentaire',
		route: '/modelling'
	},{
		title: 'Contact',
		route: '/contact' 
	},

]