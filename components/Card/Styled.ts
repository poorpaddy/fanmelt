import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div`
  position: relative;
  background: ${theme.colors.white};
  padding: 0px 0rem 10px 0px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  height: 20rem;
  width: 12rem;
  border-radius: 8px;

  .details {
    padding-left: 10px;
    .name {
      font-size: 1.4rem;
      font-weight: bold;
    }

    .tags span {
      font-size: 11px;
    }
  }

  .price {
    position: absolute;
    right: 8px;
    top: 8px;
    background: #00000080;
    color: ${theme.colors.white};
    padding: 2px 10px;
    border-radius: 2px;
  }
  
`
export const Img = styled.div`
  height: 80%;
  background-image: url(${({ src }) => src ? src : '' });
  background-size: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

