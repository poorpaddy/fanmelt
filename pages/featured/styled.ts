import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div `
  background: ${theme.colors.pageBg};
  padding: 15px 2.5rem 0px 2.5rem;
  height: 100vh;

  .content {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;

    .nav {
      flex-basis: 15%;
      display: flex:
      flex-direction: row;

      .title {
        font-size: 24px;
        font-weight: bold;
      }

      @media (max-width: ${theme.deviceRes.tablet}) {
        flex-basis: 100%;
        margin-bottom: 10px;
      }
    }

    .list {
      flex-basis: 85%;
      display: flex;
      flex-wrap: wrap;

      @media (max-width: ${theme.deviceRes.tablet}) {
        flex-basis: 100%;
      }
    }


  }
`
