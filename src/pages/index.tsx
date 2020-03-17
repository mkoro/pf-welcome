import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const StyledP = styled.p`
  font-size: 1.1rem;
`

const StyledA = styled.a`
  font-size: 1.1rem;
  color: #d33;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Welcome</h1>
        <StyledP>Thank you for visiting my personal site, which hosts my portfolio material.</StyledP>
        <StyledP>At the moment, I have the following two single-page application available to view:</StyledP>
        <StyledP>
          <StyledA href="/ui-portfolio">React UI Framework</StyledA>
        </StyledP>
        <StyledP>
          <StyledA href="/sp-portfolio">Angular Enterprise applications</StyledA>
        </StyledP>
        <StyledP>Please visit the above links for more information on these web apps.</StyledP>
        <h3 style={{ marginBottom: '1.2rem' }}>Notes regarding this website:</h3>
        <StyledP>
          This website is hosted on an Amazon EC2 instance. It is served from a Node.js{' '}
          <StyledA href="https://expressjs.com/">Express</StyledA> server, running on Ubuntu 18.04 LTS.
        </StyledP>
        <StyledP>
          The welcome page you are currently browsing is a static website created with{' '}
          <StyledA href="https://www.gatsbyjs.org/">Gatsby</StyledA>.
        </StyledP>
        <StyledP>
          You can find the source code for all content hosted on this domain on <StyledA href="https://github.com/mkoro/">GitHub</StyledA>.
        </StyledP>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
