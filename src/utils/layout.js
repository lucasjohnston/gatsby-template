// @flow
import * as React from 'react'
import { Helmet } from 'react-helmet'
import {
  ExternalLink,
  Subtitle,
  Copy,
  Page,
  Footer,
  Title,
  Link,
} from '../styles'

const LayoutComponent = (props: {
  children?: React.Node,
  className: string,
}) => (
  <>
    <Helmet>
      <title>gatsby-template</title>
      <meta charSet="utf-8" />
      <meta name="description" content="description goes here" />
      <meta name="keywords" content="tag me up" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="Cache-Control" content="max-age=200" />
      <meta name="theme-color" content="#DDD5D0" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://EXTERNAL.URL/image.png" />
      <meta name="twitter:site" content="@lucasjohnston" />
      <meta name="twitter:creator" content="@lucasjohnston" />
      <meta name="twitter:title" content="Lucas Johnston" />
      <meta name="twitter:description" content="description goes here" />
      <meta property="og:url" content="https://EXTERNAL.URL" />
      <meta property="og:title" content="Lucas Johnston" />
      <meta property="og:description" content="description goes here" />
      <meta property="og:image" content="https://EXTERNAL.URL/image.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e5b89c" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=2"
      />
      <link rel="manifest" href="/site.webmanifest?v=2" />
      <link rel="shortcut icon" href="/favicon.png?v=2" />
    </Helmet>
    <>
      <div className={props.className}>
        <Link nostyle to="/">
          <Title small>Title goes here</Title>
        </Link>
        <Page>{props.children}</Page>
        <Footer>
          <ExternalLink href="https://www.twitter.com/lucasjohnston">
            <Subtitle active>made with ❤️ by @lucasjohnston</Subtitle>
          </ExternalLink>
          <ExternalLink href="https://buymeacoff.ee/lucasjohnston">
            <Copy active>Buy me coffee pls</Copy>
          </ExternalLink>
        </Footer>
      </div>
    </>
  </>
)

export default LayoutComponent
