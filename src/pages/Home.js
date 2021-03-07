import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { HeadingPrimary } from "../components/text/Heading"
import { Link } from "react-router-dom";
import octocat from "../assets/octocat.png"
import Button from "../components/UI/Button"
import { Template } from "./Template";


const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
`;

function Home() {
    const selectedOptions = {
        home: "/",
        search: "/Search",
        star: "/favorites",
    };
    return (
        <Template>
            <StyledHome>
                <HeadingPrimary style={css`
                    width: 264px;
                `} text="Welcome to Github Users">
                    
                </HeadingPrimary>  
                <img src={octocat} alt="OctoCat"/>
                <Link to={selectedOptions["search"]}>
                    <Button>Continue</Button>   
                </Link>
            </StyledHome>
        </Template>
    );
};

export default Home;