export const htmlPlugin = () => ({
  name: 'html-transform',
  transformIndexHtml(html: string) {
    return html.replace(
      /<title>(.*?)<\/title>/,
      `<title>${process.env.HTML_TEMPLATE_TITLE}</title>`
    )
  },
})
