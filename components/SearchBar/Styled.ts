import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import theme from '../../utils/theme'

export const Container = styled.div `
  width: 100%;
  background: ${theme.colors.white};
  height: 72px;
  display: flex;

  .icon {
    padding-top: 23px;
    padding-left: 15px;
    padding-right: 10px;
    svg {
      font-size: 36px;
      color: ${theme.colors.red};
    }
  }
`

export const Text = styled(TextField) `
  input {
    padding-top: 34px;
    padding-bottom: 20px;
  }
  &&& {
    ::before {
      border-bottom: none
    }
  }
`