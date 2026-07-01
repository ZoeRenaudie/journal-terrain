import adapter from "@sveltejs/adapter-static";
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkFootnotes from "remark-footnotes";
import { remarkObsidianCallouts } from './src/lib/remark-obsidian-callouts.js'
import { remarkStripObsidian } from './src/lib/remark-strip-obsidian.js'

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/journal-phd' : ''
    },
    
    prerender: {
      entries: [
        "*",
        "/api/posts/page/*",
        "/blog/category/*/page/",
        "/blog/category/*/page/*",
        "/blog/category/page/",
        "/blog/category/page/*",
        "/blog/page/",
        "/blog/page/*",
      ],
      handleHttpError: () => {},
      handleMissingId: () => {},
      handleEntryGeneratorMismatch: () => {},
      handleUnseenRoutes: 'ignore' 
    },
  },

  preprocess: [
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [
        remarkStripObsidian, 
        remarkGfm,
        remarkObsidianCallouts,
        [remarkFootnotes, { inlineNotes: false }], // notes de bas de page
        ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    }),
  ],
};

export default config;
