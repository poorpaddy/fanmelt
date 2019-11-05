import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import StarIcon from "@material-ui/icons/Star";
import BoltIcon from "@material-ui/icons/OfflineBoltSharp";

import MenuItem from "@material-ui/core/MenuItem";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { results, categories } from "../utils/data";
import theme from "../utils/theme";
import React from "react";

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
        <BodyContainer>
            <BodyRow>
                <BodyRowContent>
                    <FormTitle>
                        Apply to join Cameo
                    </FormTitle>
                    <FormDesc>
                        If you have fans and want to join Cameo as talent, you can enroll here and we'll be in touch.
                    </FormDesc>
                    <FormRowContent>
                        <RowLable>Your name</RowLable>
                        <InputWrapper>
                            <input type="text" placeholder="Michael Jordan" />
                        </InputWrapper>
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Email</RowLable>
                        <InputWrapper>
                            <input type="email" placeholder="you@example.com" />
                        </InputWrapper>
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Phone number (never shared)</RowLable>
                        <InputWrapper>
                            <input type="number" placeholder="555-555-5555" />
                        </InputWrapper>
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Where can we find you?</RowLable>
                        <InputWrapper>
                            <Select type="number" placeholder="555-555-5555" >
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                                <option value="youtube">YouTube</option>
                                <option value="facebook">Facebook</option>
                                <option value="twitch">Twitch</option>
                                <option value="musically">TikTok</option>
                                <option value="other">Other</option>
                            </Select>
                        </InputWrapper>
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Your handle</RowLable>
                        <InputWrapper>
                            <input type="text" placeholder="@jimmybuffet" />
                        </InputWrapper>
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>How many followers do you have?</RowLable>
                        <InputWrapper>
                            <input type="text" placeholder="400k" />
                        </InputWrapper>
                    </FormRowContent>
                    <FormRowContent>
                        <SubmitBtn>
                            Submit
                        </SubmitBtn>
                    </FormRowContent>
                </BodyRowContent>
            </BodyRow>
        </BodyContainer>
    </BodyWrapper>
);
const SubmitBtn = styled.div`
    background: transparent;
    font-family: spinnler,Courier,monospace;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    position: relative;
    color: #fff;
    background-color: #fa005c!important;
    padding: 10px 21px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    line-height: 1.5;
    border-radius: 3px;
`
const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: table;
    border-collapse: separate;
    
    input {
        padding: 0;
        border: none;
        border-radius: 0;
        line-height: 1.3;
        box-shadow: inset 0 -1px 0 #ddd;
        font-size: 18px;
        display: table-cell;
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-bottom: 0;
        height: 38px;
        background-color: transparent;
        background-image: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:focus {
            box-shadow: inset 0 -2px 0 #337ab7;
            z-index: 3;
            outline: unset;
        }
        &::placeholder{
          color: #ddd;
        }
    }
`
const RowLable = styled.label`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 0;
`
const FormRowContent = styled.div`
    margin-bottom: 15px;
`
const FormDesc = styled.div`
    margin-bottom: 10px;
`
const FormTitle = styled.div`
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 30px;
    font-weight: 700;
`
const BodyRowContent = styled.div`
    margin: 0px;
    width: 100%;
    color: #4d4d4d;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
        margin-left: 25%;
        width: 50%;
        padding: 0px;
    }
`
const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 750px;
  @media (min-width: 992px){
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
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
`;

const Select = styled.select`
    border: 0;
    border-radius: 0;
    padding-left: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAJ1BMV…3X6xt0QL6JpZWq30pdvdadme+0PMdzvHm8YThHcT1H7K0BtOMDniZhWOgAAAAASUVORK5CYII=);
    background-size: 13px;
    background-repeat: no-repeat;
    background-position: 100%;
    box-shadow: inset 0 -1px 0 #ddd;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    height: 38px;
    padding: 6px 16px;
    padding-left: 0px;
    background-color: transparent;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus {
        box-shadow: inset 0 -2px 0 #337ab7;
        z-index: 3;
        outline: unset;
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
