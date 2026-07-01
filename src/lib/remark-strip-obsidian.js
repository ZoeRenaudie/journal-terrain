import { visit } from 'unist-util-visit'

export function remarkStripObsidian() {
  return (tree, file) => {
    if (file.value && typeof file.value === 'string') {
      file.value = file.value.replace(/%%[\s\S]*?%%/g, '')
    }

    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent) return
      const text = node.children?.map(c => c.value || '').join('')
      if (text.includes('%%')) {
        parent.children.splice(index, 1)
        return index
      }
    })

    visit(tree, 'text', (node) => {
      if (node.value) {
        node.value = node.value.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
      }
    })
  }
}