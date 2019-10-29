import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.header `
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: ${theme.colors.pageBg};
  transition: padding 300ms ease;
  z-index: 99;

  img {
    margin-bottom: 0px;
  }

  &.sticky {
    padding: 20px 20px;
    background-color: ${theme.colors.greyishWhite};
  }

  .nav div {
    display: inline;
    margin-right: 10px;
    font-size: 15px;
    font-weight: bold;
    color: ${theme.colors.black};

    :last-child {
        margin-right: 0;
    }
  }
`
