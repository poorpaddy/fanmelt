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
  border-radius: 4px;
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .details {
    .title {
      font-size: 0.8125rem;
      color: ${theme.colors.cardMediumGrey};
    }

    padding: 10px 12px;
    .name {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${theme.colors.cardDarkGrey};
    }

    .tags span {
      position: relative;
      font-size: 11px;
      color: ${theme.colors.cardMediumGrey};
      padding-left: 7px;

      :nth-child(n+2) :before {
        width: 4px;
        height: 4px;
        background-color: ${theme.colors.cardMediumGrey};
        border-radius: 50%;
        content: "aa";
        font-size: 2px;
        position: absolute;
        top: 5px;
        left: 0px;
        color: ${theme.colors.cardMediumGrey};
      }
    }
  }

  .price {
    position: absolute;
    right: 8px;
    top: 8px;
    background: #00000080;
    color: ${theme.colors.white};
    padding: 2px 10px;
    border-radius: 12px;
  }

  :hover {
    margin-top: -3px;
  }
`;
export const Img = styled.div`
  height: 80%;
  background-image: url(${({ src }) => src ? src : '' });
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

