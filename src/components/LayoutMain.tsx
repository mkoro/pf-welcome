import * as React from 'react'
import styled from '@emotion/styled'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100%-350px);
  max-width: 1000px;
  background-color: white;
  border-left: 1px solid #999;
  overflow-y: auto;
  @media (max-width: 899px) {
    width: calc(100%-200px);
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #aaaab3;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: none;
`

const StyledSidebar = styled.div`
  width: 350px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid #999;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 0 3.125rem;
  border-left: 1px solid #dedede;
  overflow: hidden;
  @media (max-width: 899px) {
    width: 200px;
    padding-left: 0.8rem;
  }
  @media (max-width: 499px) {
    display: none;
  }
`

const StyledH1 = styled.h1`
  color: #444;
  font-size: 1.8rem;
  margin: 0;
  margin-top: 1rem;
  @media (max-width: 899px) {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`

const StyledH2 = styled.h2`
  color: #777;
  font-size: 1.65rem;
  margin: 0;
  @media (max-width: 899px) {
    font-size: 1.1rem;
  }
`

const StyledH6 = styled.h6`
  color: #999;
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  @media (max-width: 899px) {
    font-size: 0.9rem;
  }
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledContainer>
    <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
    <StyledSidebar>
      <img width="100px" src="mkoro.jpg" alt="Portrait" />
      <StyledH1>Márton Koroknay</StyledH1>
      <StyledH2>Web Developer</StyledH2>
      <StyledH6>© 2020 Márton Koroknay</StyledH6>
    </StyledSidebar>
  </StyledContainer>
)

export default LayoutMain
