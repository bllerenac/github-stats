import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { HeadingPrimary } from "../components/text/Heading"
import octocat from "../assets/octocat.png"
import NavComponent from "../components/containers/Nav";
import Button from "../components/UI/Button"

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
`;

function Home() {
    return (
        <StyledHome>
            <HeadingPrimary style={css`
                width: 264px;
            `} text="Welcome to Github Users">
                
            </HeadingPrimary>  
            <img src={octocat}/>
            <Button>Continue</Button>   
            <NavComponent
                css={css`
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                `} 
            />
        </StyledHome>
    );
};

export default Home;