// @flow
import * as React from 'react'
import { Title, Layout, Button, ExternalLink, Subtitle } from '../styles'
import '../styles/index.css'

export default class Index extends React.Component<*> {
  render() {
    return (
      <Layout>
        <Title>Welcome to my gatsby template</Title>
        <Subtitle>
          Content in <code>markdown_data</code> is auto-generated.
        </Subtitle>
        <br />
        <ExternalLink nostyle href="/file">
          <Button>Take me to the example</Button>
        </ExternalLink>
      </Layout>
    )
  }
}
