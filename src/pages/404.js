// @flow
import * as React from 'react'
import { Title, ExternalLink, Layout, Copy } from '../styles'
import '../styles/index.css'

export default class ErrorPage extends React.Component<*> {
  render() {
    return (
      <Layout>
        <Title large>
          Sorry, we can&#39;t find the page you&#39;re looking for
        </Title>
        <br />
        <Copy>Find a better page!</Copy>
        <ExternalLink href="/">Go home&nbsp;&rsaquo;</ExternalLink>
      </Layout>
    )
  }
}
