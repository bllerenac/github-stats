function Icon({type, fill, size, onClick}) {
    const IconToRender = setIcon[type];
    return ( 
        <IconToRender 
            onClick={onClick}
            css={css`
            fill: ${fill};
            font-size: ${size}px;
            `}
        />        
    );    
};

export Icon;