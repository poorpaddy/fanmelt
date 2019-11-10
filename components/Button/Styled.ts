import styled from 'styled-components'  

export const ShareButton = styled.a`
    background: transparent;
    font-family: spinnler,Courier,monospace;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    padding: ${props => props.padding};
    font-size: ${props => props.fSize};
    line-height: 1.5;
    border-radius: 3px;
    display: inline-block;
    font-weight: ${props => props.fWeight};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    margin-right: 10px;
    margin-bottom: 10px;

    &:hover, &:focus {
        color: ${props => props.hoverC};
        background-color: ${props => props.hoverBG};
    }
`;