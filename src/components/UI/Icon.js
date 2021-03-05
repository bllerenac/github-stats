/** @jsxImportSource @emotion/react */

import {
    RiHome2Fill,
    RiStarFill,
    RiStarLine,
    RiUserHeartFill,
    RiSearchFill,
} from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { css } from "@emotion/react";

const setIcon = {
    home: RiHome2Fill,
    star: RiStarFill,
    starLine: RiStarLine,
    followers: FaUsers,
    followings: RiUserHeartFill,
    search: RiSearchFill,
    github: FaGithub,
}

function Icon({type, color, size, onClick}) {
    const IconToRender = setIcon[type];
    return ( 
        <IconToRender 
            onClick={onClick}
            css={css`
            color: ${color};
            font-size: ${size}px;
            `}
        />        
    );    
};

export default Icon;