import React from 'react';
import { RightContentRow, ImageContainer, RowTextContent } from './Styled';

interface IProps {
    src: string;
    alt: string;
    text: any;
}

export const ImageContent = ({ src, alt, text }: IProps) => {
    return (
        <RightContentRow>
	        <ImageContainer>
	            <img src={src} alt={alt} />
	        </ImageContainer>
	        <RowTextContent>
	            {text}
	        </RowTextContent>
	    </RightContentRow>
    )
}
