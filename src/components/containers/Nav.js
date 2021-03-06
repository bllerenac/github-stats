/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Icon from "../UI/Icon";

const StyledNav = styled.div`
  height: 66px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
  .icons-wrap {
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

function NavComponent({ css }) {
  const icon_nav = ["home", "search", "star"];
  return (
    <StyledNav css={css}>
      <div className="icons-wrap">
        {icon_nav.map((name_icon) => {
          return (
            <Icon
              key={name_icon}
              type={name_icon}
              color={"#828282"}
              size={50}
            />
          );
        })}
      </div>
    </StyledNav>
  );
}

export default NavComponent;
