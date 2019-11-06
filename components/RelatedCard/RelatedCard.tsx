import React from 'react'
import { GridImageWrapper, GridImageContainer,  Price, ImageItem, ImageContent, SmallTitle, Title} from './Styled'

export const RelatedCard = () => {
    return (
        <GridImageWrapper>
            <GridImageContainer>
                <Price>$25</Price>
                <ImageItem>
                    <img src={'/tjlavin_bottom.png'} alt="image" />
                </ImageItem>
                <ImageContent>
                    <SmallTitle>{'MTV - The Challenge'}</SmallTitle>
                    <Title>{'Zach Nichols'}</Title>
                </ImageContent>
            </GridImageContainer>
        </GridImageWrapper>
    )
}
