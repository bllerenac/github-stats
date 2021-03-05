/** @jsxImportSource @emotion/react */

import {
    RiHome2Fill,
    RiStarFill,
    RiStarLine,
    RiUserHeartFill,
    RiSearchFill,
} from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { css } from "@emotion/react";

const setIcon = {
    home: RiHome2Fill,
    star: RiStarFill,
    starOut: AiOutlineStar,
    starLine: RiStarLine,
    followers: FaUsers,
    followings: RiUserHeartFill,
    search: RiSearchFill,
    github: FaGithub,
    githubFork: BiGitRepoForked,
    circle: BsCircleFill,
}

function Icon({type, color, size, onClick}) {
    const IconToRender = setIcon[type];
    return ( 
        <IconToRender 
            onClick={onClick}
            css={css`
            fill: ${color};
            font-size: ${size}px;
            `}
        />        
    );    
};

export default Icon;