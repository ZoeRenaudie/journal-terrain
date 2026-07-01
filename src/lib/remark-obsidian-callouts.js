import { visit } from 'unist-util-visit'

const CALLOUT_REGEX = /^!(\w+)\|?([\w#]*)\s+(.*)/s

const hexToName = {
  '#2ea8e5': 'blue', '#2e9ed6': 'blue',
  '#5fb236': 'green',
  '#f19837': 'orange',
  '#ff6666': 'red',
  '#a28ae5': 'purple',
  '#ffd400': 'yellow',
  '#aaaaaa': 'default',
}

const colorToLabel = {
  blue: 'Interesting References',
  green: 'Very Important or Critical',
  orange: 'Supporting Argument or Example',
  red: 'Disagree with Author',
  purple: 'Vocabulary, Names, Dates, Definition',
  yellow: 'Citation',
  default: 'Note',
}

export function remarkObsidianCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      const firstParagraph = node.children?.[0]
      if (!firstParagraph) return

      const fullText = firstParagraph.children
        ?.map(c => c.value || c.children?.[0]?.value || '')
        .join('')

      const match = fullText?.match(CALLOUT_REGEX)
      if (!match) return

      const [, type, colorRaw] = match
      const colorKey = hexToName[colorRaw] || colorRaw || type
      const label = colorToLabel[colorKey] || colorKey

      // Retire seulement la première ligne du paragraphe, garde le reste
      const firstChild = firstParagraph.children?.[0]
      if (firstChild?.type === 'linkReference' || firstChild?.type === 'text') {
        firstParagraph.children.shift()
      }
      // Si le paragraphe est maintenant vide, retire-le
      if (firstParagraph.children.length === 0) {
        node.children.shift()
      }

      node.data = node.data || {}
      node.data.hName = 'div'
      node.data.hProperties = {
        class: `callout callout-${colorKey}`,
        'data-callout': type,
      }

      node.children.unshift({
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { class: 'callout-title' }
        },
        children: [{ type: 'text', value: label }]
      })
    })
  }
}