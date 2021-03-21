import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;
export const StyledSearchInput = styled(Search)`
  width: 90%;
  margin-bottom: 4rem;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  & .ant-input {
    height: 4rem;
    border-radius: 0.5rem;
  }
  & .ant-input-search-button {
    height: 5rem;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    @media only screen and (min-width: 600px) {
      font-size: 2rem;
    }
  }
  & .ant-input-group-addon {
    border: none;
    padding: none;
  }
`;
