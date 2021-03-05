import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NavComponent from "../components/containers/Nav";
import { CardRepo, CardRepoAdditionals } from "../components/containers/Card";
import { ContentBold, ContentSmall } from "../components/text/Content";
import { Heading } from "../components/text/Heading"

const StyledRepos = styled.div`
    width: 100vw;
    heigh: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    gap: 60px;
    & > .cards-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 16px;
        justify-content: center;
    }
`;

function Repos() {
    return (
        <StyledRepos>
             <Heading style={css`
                width: 264px;
            `} text="Public Repos">
                
            </Heading>
            <div className="cards-wrapper">
            <CardRepo>
                <ContentBold children="Frank Dominguez" color="black" />
                <ContentSmall children="lorem lorem lorem loremloremlorem loremlorem" />
                <CardRepoAdditionals stars={20} forks={15} language="ruby" />
            </CardRepo>
            </div>
            <NavComponent
                css={css`
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                `} 
            />
        </StyledRepos>
    );
}

export default Repos;
