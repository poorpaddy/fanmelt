import React from 'react'
import { CatItemWrapper, CatItemContainer,  CatItemTxtSection, CatItemLeftContent,
    CatItemRightContent, CatLeftTxt, CatItemTitle,
    CatItemVideoSection,CatItemDetailTxt,CatImageItem,
    ImgBtnContainer,ImgBtnLeftContainer,ImgBtnRightContainer} from './Styled'

export const CardListItem = () => {
    return (
        <CatItemWrapper>
            <CatItemContainer>
                <CatItemTxtSection>
                    <CatItemLeftContent>
                        <CatLeftTxt>
                            A
                        </CatLeftTxt>
                    </CatItemLeftContent>
                    <CatItemRightContent>
                        <CatItemTitle>
                            By Cubby for Brian
                        </CatItemTitle>
                        <CatItemDetailTxt>
                            Details
                        </CatItemDetailTxt>
                    </CatItemRightContent>
                </CatItemTxtSection>
                <CatItemVideoSection>
                    <CatImageItem>
                        <img src={'/tjlavin_bottom.png'} alt="image" />
                        <ImgBtnContainer>
                            <ImgBtnLeftContainer>
                                <img src="/play.svg" alt="image" />
                            </ImgBtnLeftContainer>
                            <ImgBtnRightContainer>
                                <img src={'heart-white.svg'} alt='image' />
                                <img src={'message-circle-white.svg'} alt='image' />
                            </ImgBtnRightContainer>
                        </ImgBtnContainer>
                    </CatImageItem>
                </CatItemVideoSection>
            </CatItemContainer>
        </CatItemWrapper>
    )
}
