import styled, { keyframes } from 'styled-components';
import Image from 'next/image'


const slideRight = keyframes`
  0% {
            transform: translateX(-100px);
            opacity: 0;
  }
  100% {
            transform: translateX(0);
            opacity: 1;
  } 
`


const slideLeft = keyframes`
  0% {
            transform: translateX(100px);
            opacity: 0;
  }
  100% {
            transform: translateX(0);
            opacity: 1;
  } 
`

export const AboutContainer = styled.section`  
    display:${(props) => (props.inView ? 'grid' : 'none')};
    justify-content:center;
    align-items:center;
    margin:auto;
    grid-template-columns:1fr 300px;
    grid-template-rows:repeat(2,minmax(100px,300px));
    grid-gap:2rem;
    @media ${(props) => props.theme.breakpoints.sm}
`


export const GlassContainer = styled.div`    
    backdrop-filter: blur(13px) saturate(137%);
    -webkit-backdrop-filter: blur(13px) saturate(137%);
    background-color: rgba(255, 255, 255, 0.10);
    border-radius: 12px;
    padding:2rem 4rem;
`;

export const Education = styled(GlassContainer)` 
    display: flex;
    flex-direction:column;
    justify-content: stretch;
    align-items:stretch;
    grid-column:1/2;
    grid-row: 1/3;
    height:100%;
    width:100%;
    animation:${slideRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    & h4 {
        font-size:3rem;
    }
    &  p:first-child {
        padding:1rem 0;
    }
`
export const Technologies = styled(GlassContainer)` 
    grid-column:3;
    grid-row:2;
    width:300px;
    height:100%;
    animation:${slideLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const Portrait = styled.div`
    display: flex;
    border-radius:12px;
    overflow:hidden;
    justify-self:start;
    grid-column:3;
    grid-row:1/2;
    height:100%;
    animation:${slideLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

