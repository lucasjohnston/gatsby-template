// @flow
import HTML from '../../.cache/default-html'

type frontmatter = {
  yaml: string,
}

export type FrontmatterProps = {
  data: {
    markdownRemark: {
      html: HTML,
      frontmatter: frontmatter,
    },
  },
}
