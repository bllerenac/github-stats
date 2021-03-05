import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Navbar from "../components/containers/Navbar";
import Card from "../components/containers/Card";
import Avatar from "../components/UI/Avatar";
import Icon from "../components/UI/Icon";

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

