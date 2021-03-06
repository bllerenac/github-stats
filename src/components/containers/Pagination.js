/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 4px 12px;

  color: #4f4f4f;
  font-size: 16px;
  line-height: 20px;
`;

const BasicNumber = ({ className, selected, number }) => {
  const selectedClass = selected ? `${className} selected` : className;
  return <div className={selectedClass}>{number}</div>;
};

const NumberPage = styled(BasicNumber)`
  padding: 1px 8px;
  width: 26px;

  &.selected {
    border-radius: 50px;
    background: #2d9cdb;
    color: white;
  }
`;

export default function Pagination({ from = 1, to = 5, selected = 3 }) {
  const size = to - from + 1;
  const pages = Array.from(Array(size), (_, index) => index + from);
  return (
    <PaginationContainer>
      <MdKeyboardArrowLeft />

      <div
        css={css`
          display: flex;
          gap: 4px;
        `}
      >
        {pages.map((index) => (
          <NumberPage
            key={index}
            number={index}
            selected={index === selected}
          />
        ))}
      </div>

      <MdKeyboardArrowRight />
    </PaginationContainer>
  );
}
