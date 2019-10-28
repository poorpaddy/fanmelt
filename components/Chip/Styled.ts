import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import theme from '../../utils/theme'

export const ChipElem = styled(Chip) `
  width: 100%;
  max-width: 165px;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;

  &.selected {
    background: ${theme.colors.chipSelected};
    color: ${theme.colors.white};
  }
`
