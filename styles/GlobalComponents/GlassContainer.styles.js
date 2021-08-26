import { motion } from "framer-motion"
import styled from "styled-components"


export const GlassContainer = styled(motion.div)`    
    backdrop-filter: blur(4px) saturate(118%);
    -webkit-backdrop-filter: blur(4px) saturate(118%);
    background-color: rgba(17, 25, 40, 0.65);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding:3rem 5rem;
    @media ${(props) => props.theme.breakpoints.md}{
        padding:3rem 2rem;
    }
`