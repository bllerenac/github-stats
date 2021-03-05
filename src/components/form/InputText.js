import styled from "@emotion/styled";

const StyledInput = styled.input`
  outline: none;
  border: 1px solid transparent;

  padding: 4px 8px;
  width: 213px;

  border-radius: 4px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  color: #333333;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  transition: border 250ms ease;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    border: 1px solid #2d9cdb;
  }
`;

export default function InputText({ text, onChange }) {
  return <StyledInput type="text " value={text} onChange={onChange} />;
}
