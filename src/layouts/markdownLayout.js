// @flow
import React from 'react'
import { graphql } from 'gatsby'
import type { FrontmatterProps } from '../utils/props'
import {
  Copy,
  Title,
  Layout,
  TitleGroup,
  TitleGroupTextContainer,
  Card,
  Content,
} from '../styles'
import '../styles/index.css'

class View extends React.Component<FrontmatterProps> {
  render() {
    const {
      frontmatter: { yaml },
      html,
    } = this.props.data.markdownRemark

    return (
      <Layout>
        <TitleGroup>
          <TitleGroupTextContainer>
            <Title large>Welcome to this auto generated file</Title>
          </TitleGroupTextContainer>
        </TitleGroup>
        <br />

        <Card>
          <Content>
            <Copy>
              <code>YAML</code> from frontmatter follows:
              <br />
              {yaml}
              <br />
              <br />
              <code>MD</code> from frontmatter follows:
              <br />
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Copy>
          </Content>
        </Card>
      </Layout>
    )
  }
}

export default function CountriesView({ data }: Object) {
  return <View data={data} />
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        yaml
      }
    }
  }
`
