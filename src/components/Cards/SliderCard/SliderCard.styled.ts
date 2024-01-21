import styled from "styled-components"
export const Card2 = styled.div`
    position: absolute;
    aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    padding: 20px;
    color: white; 
`;

export const Rating = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const RatingIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 10px;
    color:  ${props=> props.theme.iconColor};
    font-size: ${props=> props.theme.textSizeTitle};
`;
export const RatingText = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Genres = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GenresText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: ${props=> props.theme.textSizeL};
`;

export const RaitingIcons = styled.div`

display: flex; 
gap: 10px;
align-items: center;
`

export const Title = styled.p`
    cursor: pointer;
    border: 0;
    width: 100%;
    margin: 20px 0px 0px 0px;
    color: ${props => props.theme.textColor1};
    font-size: ${props=> props.theme.textSizeL};
    font-weight: 600;
`;

export const Description = styled.p`
color: ${props => props.theme.textColor1};

font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const DateRelease = styled.p`

color: rgba(249, 249, 249, 0.70);
font-family: Lato;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const Film = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;  
    flex-direction:column ;
    width: 100%;
    border-radius:10px;
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover{
        transition: all 0.3s ease;
        & ${Card2}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Cards = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;

export const Card1 = styled.img` 
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
`;

export const RaitingItem = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    width: 77px;
    height: 38px;
    border-radius: 0px 17px;
    font-size: 23px;
    text-align: center;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.accentColor1};
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
`

export const Name = styled.div`
    flex: 0 0 auto;
    flex-wrap: nowrap;
    width: 100%;
    font-size: ${props => props.theme.textSizeTextM};
    letter-spacing: 1px;
    overflow: hidden;
    margin: 10px 0px 0px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;   
    white-space: nowrap;
    @media (max-width: 992px) and (min-width: 768px)  {
        font-size: ${props => props.theme.textSizeTextM900};
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Text = styled.div`
    margin: 10px 0px 10px 0px;
    padding: 0px 10px;
    display:flex;
    flex: 0 0 auto;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    font-weight: 600;
    font-size: ${props => props.theme.textSizeTextS};
`;



