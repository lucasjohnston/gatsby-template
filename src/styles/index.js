// @flow
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'
import LayoutComponent from '../utils/layout'

// Global variables
export const WHITE = '#ffffff'
export const DARK_BLUE = '#04143c'
export const BLUE_BLUE = '#1E2E56'
export const PURPLEY_BLUE = '#343967'
export const PURPLE = '#302d7e'
export const LIGHT_PURPLE = '#6681AD'
export const SUPER_LIGHT_PURPLE = '#809BC7'
export const BREAKPOINT_BUTTONS = 1060
export const BREAKPOINT_MOB = 790

// Global text
export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: ${DARK_BLUE};

  ${props =>
    props.large &&
    css`
      font-size: 2em;
    `}

  ${props =>
    props.small &&
    css`
      width: fit-content;
      font-size: 1.5em;
      margin-bottom: 0;
    `}
`

export const Subtitle = styled.h3`
  font-family: 'Merriweather', serif;
  font-weight: 600;
  color: ${PURPLEY_BLUE};
  margin-bottom: 0.3em;

  ${props =>
    props.active &&
    css`
      opacity: 1;
      &:hover {
        opacity: 0.7;
      }
    `}
`

export const Link = styled(GatsbyLink)`
  font-family: 'Fauna One', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  width: fit-content;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
  color: ${PURPLE};

  &:hover {
    opacity: 0.7;
    color: ${PURPLE};
  }
  &:focus {
    outline: none;
  }
`

export const ExternalLink = styled.a`
  font-family: 'Fauna One', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
  color: ${PURPLE};

  &:hover {
    opacity: 0.7;
    color: ${PURPLE};
  }
  &:focus {
    outline: none;
  }
  ${props =>
    props.nostyle &&
    css`
      font-family: inherit;
      font-weight: inherit;
      text-decoration: inherit;
      opacity: inherit;
      color: inherit;
      &:hover {
        opacity: inherit;
        color: inherit;
      }
      &:focus {
        outline: inherit;
      }
    `}
`

export const Copy = styled.p`
  font-family: 'Fauna One', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 400;
  color: ${DARK_BLUE};
  margin-bottom: 0;
  margin-top: 0;

  ${props =>
    props.active &&
    css`
      opacity: 1;
      color: ${PURPLE};
      &:hover {
        opacity: 0.7;
        color: ${PURPLE};
      }
      &:focus {
        outline: none;
      }
    `}

  ${props =>
    props.small &&
    css`
      font-size: 0.9em;
      color: ${BLUE_BLUE};
    `}
`

export const List = styled.ul`
  font-family: 'Fauna One', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 400;
  margin-top: 0.2em;
  color: ${DARK_BLUE};
`

// Global components
export const Layout = styled(LayoutComponent)`
  margin: 0;
  padding: 30px 50px 30px 50px;
  position: relative;
  height: 100%;
  width: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  background: ${WHITE};
  flex-grow: 1;

  @media all and (max-width: ${BREAKPOINT_MOB}px) {
    padding: 1em 1.5em 1em 1.5em;
    width: calc(100% - 3em);
  }
`

export const Button = styled.button`
  width: fit-content;
  font-family: 'Fauna One', serif;
  font-weight: 400;
  font-size: 0.9em;
  padding: 0.8em 1.7em;
  border-radius: 15px;
  text-decoration: none;
  border: none;
  text-align: left;
  display: inline-block;
  cursor: pointer;
  background: ${DARK_BLUE};
  color: ${WHITE};

  &:hover {
    background-color: ${BLUE_BLUE};
  }
  &:focus {
    outline: none;
  }

  ${props =>
    props.babyblue &&
    css`
      background: ${LIGHT_PURPLE};
      &:hover {
        background-color: ${SUPER_LIGHT_PURPLE};
      }
    `}
  ${props =>
    props.fixed &&
    css`
      font-size: 1em;
      padding: 1em 2em;
    `}
`

export const Card = styled.div`
  width: 40em;
  position: relative;
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 0 2em 0.1em rgba(0, 0, 0, 0.1);
  padding: 0.2em 1.5em 1.5em;
  min-height: 5em;
  margin-bottom: 30px;

  @media all and (max-width: ${BREAKPOINT_MOB}px) {
    width: calc(100% - 3em);
  }
`

export const TitleGroup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;

  @media all and (max-width: ${BREAKPOINT_BUTTONS}px) {
    display: block;
  }
  @media all and (max-width: ${BREAKPOINT_MOB}px) {
    margin-top: 1em;
  }
`

export const TitleGroupButtonContainer = styled.div`
  margin: 0 0 0 auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  a,
  button {
    display: flex;
    flex: 1;
  }

  button {
    margin-bottom: 5px;
  }

  @media all and (max-width: ${BREAKPOINT_BUTTONS}px) {
    display: inline-block;
    margin: 1em 0 1em;
    flex-direction: initial;

    a,
    button {
      display: inline-block;
      flex: none;
      margin-right: 10px;
    }
  }
`

export const TitleGroupTextContainer = styled.div`
  display: block;
  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 0;
  }
  p {
    margin-top: 1em;
    margin-bottom: 30px;
  }

  @media all and (max-width: ${BREAKPOINT_MOB}px) {
    h3 {
      margin-top: 0.5em;
    }
    p {
      margin-top: 1em;
      margin-bottom: 0;
    }
  }
`

export const Content = styled.div`
  padding-left: 10px;
`

export const Page = styled.div`
  min-height: calc(100vh - 30px - 13em);

  @media all and (max-width: ${BREAKPOINT_MOB}px) {
    min-height: calc(100vh - 1em - 12.5em);
  }
`

export const Footer = styled.div`
  height: 6em;
  margin-bottom: 2em;

  @media all and (max-width: ${BREAKPOINT_MOB}px) {
    margin-bottom: 1em;
  }
`
