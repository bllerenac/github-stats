import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { HeadingPrimary } from "../components/text/Heading"
import { Link, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const selected = location.pathname;
    const selectedOptions = {
        home: "/",
        search: "/Search",
        star: "/favorites",
    };
    return (
        <StyledHome>
            <HeadingPrimary style={css`
                width: 264px;
            `} text="Welcome to Github Users">
                
            </HeadingPrimary>  
            <img src={octocat} alt="OctoCat"/>
            <Link to={selectedOptions["search"]}>
                <Button>Continue</Button>   
            </Link>
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