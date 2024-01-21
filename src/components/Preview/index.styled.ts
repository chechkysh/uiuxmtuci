import styled from 'styled-components';



export const Structure = styled.div`
    position: relative;
    display: flex;
    justify-content: left;
    align-items: end;
    flex-direction: row;
    margin: 20px 40px;
    gap: 20px;
    height: calc(100vh - 120px);
    object-fit: contain;
    overflow: hidden;
    padding: 20px 30% 20px 40px;
    border-radius: 20px 20px 20px 20px;

    @media(max-width: 992px){

        flex-direction: column;
        width: 100%;
    }
`

export const TextContent = styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        z-index: 2;
`

export const Heding = styled.h1`
color: ${props => props.theme.accentColor1};

font-family: Segoe UI;
font-size: 60px;
font-style: normal;
font-weight: 700;
margin: 0px;
    
`

export const Subtitle = styled.h2`
color: ${props => props.theme.textcolor};
margin: 0px;
font-family: Segoe UI;
font-size: 40px;
font-style: normal;
font-weight: 700;

    
`

export const Desctiption = styled.p`
color: ${props => props.theme.textcolor};
margin-top: 25px;
padding-left: 60px;
font-family: Segoe UI;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 149.5%; /* 29.9px */
letter-spacing: 0.3px;
    
`

export const Button = styled.button`
    cursor: pointer;
    border: 0;
    width: 240px;
    margin: 20px 0px 0px 0px;
    height: 40px;
    flex: 0 0 auto;
    border-radius: 10px;
    background-color: ${props => props.theme.accentColor1};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor} ;
    color: ${props => props.theme.textColor2};
    &:hover{
        background-color: ${props => props.theme.accentColor2};
        color: ${props => props.theme.textColor2};
        transition: 0.1s;
}
font-size: ${props=> props.theme.textSizeL};
font-weight: 600;

    
`

export const ImageWrapp = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    
`
