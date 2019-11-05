import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import BoltIcon from "@material-ui/icons/OfflineBoltSharp";

import MenuItem from "@material-ui/core/MenuItem";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { results, categories } from "../utils/data";

const Index = () => (
    <>
        <NavBar />
        <Body />
        <Footer />
    </>
);

export default Index;

const arr = Array.from(Array(50).keys());
const NavBar = () => (
    <FlatAppBar position="fixed">
        <Toolbar>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </FlatAppBar>
);

const Body = () => (
    <BodyWrapper>
        <HeaderRow>
            <HeaderBackImage/>
            <OrderHeader>
                <OrderBackImage/>
                <UserImageLink>
                    <UserImage src={'https://d31wcbk3iidrjq.cloudfront.net/qTx6nbG2A-2AD4CBF9-825B-4B71-AF7F-EDF24CC95FF0.jpg?w=180&h=180&q=80'}/>
                </UserImageLink>
                <OrderMessage>
                    <MessageContent>
                        <CheckIcon />
                        Your Request is booked
                    </MessageContent>
                </OrderMessage>
                <OrderStatus>
                    Your request was sent to
                    <TalentLink> Adam Pike</TalentLink>
                    . You should receive an email shortly.
                </OrderStatus>
            </OrderHeader>
        </HeaderRow>

        <BodyContainer>
            <BodyRow>
                <LeftCol>
                    <RequestDetails>
                        <BlockSeparator/>
                        <DetailTitle> Request Details </DetailTitle>
                        <Separator/>
                        <SubTitle>
                            Talent Requested
                        </SubTitle>
                        <TalentLink>Adam Pike</TalentLink>
                        <SubTitle>
                            Video For
                        </SubTitle>
                        <DescTxt> Nirav</DescTxt>
                        <SubTitle>
                            Booked By
                        </SubTitle>
                        <DescTxt>Liam</DescTxt>
                        <OrderStatus>
                            Instructions
                        </OrderStatus>
                        <DescTxt>
                            My friend Nirav just moved home after a long time from home, and I'd love you to give him a big welcome
                            home message :)
                        </DescTxt>
                        <DescTxt>
                            Booked Privately
                        </DescTxt>
                        <SubTitle>
                            Charged (if fulfilled): <PirceTxt> $5</PirceTxt>
                        </SubTitle>
                        <SubTitle>
                            Request expires on: <PirceTxt> 11/08/2019</PirceTxt>
                        </SubTitle>
                        <SubTitle>
                            Delivery Info
                        </SubTitle>
                        <SubTitle>
                            Email: <PirceTxt> liamdanielduffy@gmail.com</PirceTxt>
                        </SubTitle>
                        <OrderBtnContainer>
                            <ModifyOrderBtn>
                                Modify Order
                            </ModifyOrderBtn>
                            <CancelOrderBtn>
                                Cancel Order
                            </CancelOrderBtn>
                        </OrderBtnContainer>
                    </RequestDetails>
                </LeftCol>

                <RightCol>
                    <RightContentWrapper>
                        <RightContentContainer>
                            <DetailTitle>
                                What happens next?
                            </DetailTitle>
                            Check your email, We sent a confirmation to liamdanielduffy@gmail.com
                            Adam Pike has 4 days to complete your request
                            When your request is completed, we'll email you a link to review, share, or download your Cameo
                            if Adam Pike isn't able to complete your request, the $5 hold on your card will be removed within 5~7
                            business days.
                        </RightContentContainer>
                    </RightContentWrapper>
                </RightCol>
            </BodyRow>
            <BodyRow>
                <ResultsContainer>
                    <ResultTitle>
                        Also check out
                    </ResultTitle>
                    <ResultsGrid>
                        <RealtedItem />
                        <RealtedItem />
                        <RealtedItem />
                        <RealtedItem />
                    </ResultsGrid>
                </ResultsContainer>
            </BodyRow>
        </BodyContainer>
    </BodyWrapper>
);
const RightContentContainer = styled.div`
    padding: 0 40px;   
`
const RightContentWrapper = styled.div`
    margin-left: 8.33%;
    padding-left: 15px;
    padding-right: 15px;    
`
const OrderBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`
const ModifyOrderBtn = styled.div`
    background: transparent;
    font-family: spinnler,Courier,monospace;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    line-height: 1.5;
    border-radius: 3px;
    margin: 0 auto;
    padding: 10px 60px;
`
const CancelOrderBtn = styled.div`
    box-shadow: none;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent;
    margin: 0 auto;
    margin-top: 20px;
`
const PirceTxt = styled.span`
    font-weight: 500;
`
const DescTxt = styled.div`
    
`
const SubTitle = styled.div`
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 6px;
    margin-top: 20px;
`
const HeaderRow = styled.div `
    background: #f7f7f7;
    padding-top: 60px;
    
    @media (min-width: 992px) {
        padding-top: 0;
    }
`;

const HeaderBackImage = styled.span `
    background-image: url(https://d3el26csp1xekx.cloudfront.net/static/assets/confirmation-page/bigConfetti.png);
    background-position: 0;
    background-size: 1500px;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
    margin-top: -60px;
    z-index: 0;
    display: block;
    position: absolute;
    
    @media (min-width: 992px) {
        display: none
    }
`
const OrderHeader = styled.div`
    display: flex;
    background: #fff;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    padding: 0 15px;
    text-align: left;
    position: relative;
    z-index: 1;
    
    @media (min-width: 992px) {
        margin-bottom: 30px;
        margin-left: 0;
        margin-right: 0;
        padding-bottom: 30px;
        padding-top: 30px;
        text-align: center
    }    
    
`;
const OrderBackImage = styled.span `
    background-image: url(https://d3el26csp1xekx.cloudfront.net/static/assets/confirmation-page/bigConfetti.png);
    display: none;
    background-position: 50%;
    background-size: 2000px;
    display: none;
    height: 350px;
    margin-top: -73px;
    width: 99%;
    z-index: -1;
    background-repeat: no-repeat;
    position: absolute;
        
    @media (min-width: 992px) {
        display: inline-block
    }
`;
const UserImageLink = styled.a`
    align-self: center;
    display: inline-block;
    text-decoration: none
`
const UserImage = styled.img`
    align-self: center;
    display: inline-block;
    text-decoration: none;
    border: 2px solid #fa005c;
    border-radius: 50%;
    height: 56px;
    margin-top: -28px;
    width: 56px;
    
    @media (min-width: 992px) {
        height: 78px;
        margin-top: 0;
        width: 78px;
    }
`
const OrderMessage = styled.h1`
    color: #fa005c;
    font-size: 22px;
    text-transform: uppercase;
    z-index: 2;
    margin-top: 24px;
    margin-bottom: 12px;
    
    @media (min-width: 992px) {
        font-size: 32px
    }
`;
const MessageContent = styled.span `
    font-weight: 700;
    line-height: 1.1;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;  
`;
const OrderStatus = styled.div`
    z-index: 3;
    background-color: hsla(0,0%,100%,.8);
    padding: 4px 4px 4px 0;
    text-align: center;
    font-size: 18px;
    letter-spacing: 0.1px;
    -webkit-font-smoothing: antialiased;
`
const TalentLink = styled.a`
    color: #337ab7;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    font-size: 18px;
`;
const Container = styled.div `
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
        
    @media (min-width: 992px) {
        width: 970px
    }
    
    @media (min-width: 1200px) {
        width: 1170px
    }
`;
const LeftCol = styled.div`    
    position: relative;
    min-height: 1px;    
    
    @media (min-width: 992px) {
        padding-right: 15px;
        padding-left: 15px;
        float: left;
        width: 50%
    }
`;
const RightCol = styled.div`
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    width: 50%;
`;
const RequestDetails = styled.div`
    background: #fff;
    box-shadow: 2px 5px 10px #ececec;
    margin-top: -30px;
    padding: 20px 15px;
    
    @media (min-width: 992px) {
        padding-left: 40px;
        padding-right: 40px;
        margin-top: 0;
    }
`
const DetailTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 1.1;
    margin-top: 24px;
    margin-bottom: 12px;
    
    @media (min-width: 992px) {
        font-size: 30px
    }
`;
const BlockSeparator = styled.div`
    background-image: linear-gradient(90deg,transparent 50%,#f2f2f2 0);
    background-size: 38px 1px;
    margin-bottom: 50px;
    margin-top: 30px;
    padding-top: 3px;
    position: relative;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    left: -30px;
   
    &:before {
        background: #f7f7f7;
        content: "";
        height: 50px;
        position: absolute;
        top: -20px;
        width: 40px;
    }
    
    &:after {
    }
    
    @media (min-width: 992px) {
        display: none;
    }
`;
const Separator = styled.div`
    background-image: linear-gradient(90deg,transparent 50%,#f2f2f2 0);
    background-size: 38px 1px;
    margin-bottom: 20px;
    margin-top: 30px;   
    height: 4px;
    &:before {
            background: #f7f7f7;
            height: 60px;
            top: -25px;
            width: 60px;            
    }
`;
// const OrderHeader = styled.div`
//     background: red;
// `
// const OrderHeader = styled.div`
//     background: red;
// `
// const OrderHeader = styled.div`
//     background: red;
// `
// const OrderHeader = styled.div`
//     background: red;
// `
const ResultTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 12px;
`;


const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 65px;
  -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    font-size: 18px;
    background: #f7f7f7;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1280px){
    max-width: 1170px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const Title = styled.h3`
  color: #4d4d4d;
  margin: 0;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 700;
`;

const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 1200px) {
    margin-left: 8.333333%;
    margin-right: 8.333333%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Input = styled(TextField)`
  width: 100%;
  input {
    &:focus {
      box-shadow: inset 0 -2px 0 #337ab7;
    }
    line-height: 1.3;
    font-size: 24px;
    width: 100%;
    height: 30px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding: 26px 0 26px 56px;
  }
`;

const Select = styled.select`
  border: 0;
  border-radius: 0;
  appearance: none;
  width: 100%;
  height: 38px;
  padding: 6px 16px;
  box-shadow: inset 0 -1px 0 #ddd;
  font-size: 16px;
  line-height: 1.5;
  background: transparent;
`;
const ResultsContainer = styled.div.attrs({ className: "w-6/6" })`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1024px) {
    width: 100% !important;
  }
  @media (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryLink = styled.a`
  width: 100%;
  padding: 9px 18px;
  margin: 0 12px 7px 0;
  display: inline-block;
  transition: all 0.2s;
  &:nth-of-type(1) {
    background-color: #fa005c;
    span {
      color: #fff !important;
    }
  }
  &:active {
    background-color: #fa005c;
  }
  border-radius: 30px;
  box-sizing: border-box;
  color: #4d4d4d;
  background-color: #f7f7f7;
  &:hover {
    background-color: #ececec;
  }
`;

const CategoryLinkName = styled.span`
  color: #4d4d4d;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 3px;
`;

const CategoryLinkAmount = styled.span`
  color: #a1a1a1;
`;

const Item = styled(MenuItem)`
  display: block;
`;
const CatListItem = () => (
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
);
const ImgBtnContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CatImageItem = styled.div`
  height: 70%;
  width: 100%;
  img {
    border-radius: 24px;
    border-top-left-radius: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CatLeftTxt = styled.div`
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 2px;
    text-transform: uppercase;
`
const CatItemContainer = styled.div`
  box-shadow: 0 2PX 32PX 0 RGBA(0,0,0,.15);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 24px;
  /* cursor: pointer; */
  height: 100%;
  &:hover {
    transform: translateY(-3px);
  }
`
const CatItemDetailTxt = styled.div`
    color: #999;
    font-size: 14px;
    font-weight: 500;
`
const CatItemTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    @media (max-width: 1280px) {
        width: 150px;
      }
    @media (max-width: 1024px) {
        width: 100px;
      }
`
const CatItemVideoSection = styled.div`
    
`
const CatItemLeftContent = styled.div`
    border-color: rgb(213, 56, 255);
    background-color: rgb(213, 56, 255);
    backgroundc-clip: border-box;
    background-image: none;
    algign-items: center;
    background-position: top;
    border-radius: 50%;
    display: flex;
    height: 36px;
    justify-content: center;
    margin-right: 14px;
    width: 36px;
`
const CatItemRightContent = styled.div`
    
`
const CatItemTxtSection = styled.div`
    display: flex;
    padding: 10px 15px;
    color: #212121;
    border-color: #dddddd'
    border-bottom: none;
`
const CatItemWrapper = styled.div.attrs({
    className: "xl:w-1/3"

})`
  margin-bottom: 20px;
  min-height: 270px;
  max-height: 650px;
  padding-right: 10px !important;
  padding-left: 10px !important;
  min-width: 145px;
  width: 33.3333% !important;
  @media (max-width: 768px) {
    width: 100% !important;
    margin: 20px 30px;
  }
`;
const ImgBtnRightContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
        background: transparent;
        margin-bottom: 0px;
        margin-left: 20px;
        transform: scale(1);
        transition: transform .1s;
        &:hover {
            transform: scale(1.3);
            transition: transform .1s;
        }
    }
`
const ImgBtnLeftContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        background: transparent;
        margin-bottom: 0px;
        transform: scale(1);
        transition: transform .1s;
        
        &:hover {
            transform: scale(1.3);
            transition: transform .1s;
        }
    }
`
const RealtedItem = () => (
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
);

const GridImageWrapper = styled.div.attrs({
    className: "w-1/4"
})`
  margin-bottom: 20px;
  min-height: 170px;
  max-height: 350px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  min-width: 145px;
  @media (max-width: 768px) {
    width: 50% !important;
  }
  @media (max-width: 320px) {
    /* width: 150px; */
    height: 220px;
  }
`;

const TopSectionLeftContainer = styled.div`
  width: 33.333333%;
  max-width: 280px;
  img {
    width: 100%;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 100%;
      border-radius: 0px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const TopSectionRightContainer =  styled.div`
  width: 66.666666%;
  @media (max-width: 768px) {
    width: 100%;
    
  }
`;

const GridImageContainer = styled.div`
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 5px;
  /* cursor: pointer; */
  height: 100%;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Price = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 1px 14px;
  position: absolute;
  right: 11px;
  top: 11px;
  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const ImageItem = styled.div`
  background: #eee;
  height: 100%;
  width: 100%;
  max-height: 280px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageContent = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px 12px;
`;

const SmallTitle = styled.a`
  color: #6c6c6c;
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &:after {
    font-size: 13px;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }
  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;

const FlatAppBar = styled(AppBar)`
  box-shadow: none;
`;

const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img.attrs({ src: "/logo-cropped.png" })`
  max-height: 50px;
  margin: 0;
`;