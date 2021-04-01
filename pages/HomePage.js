import React from "react";
import { StyledLayout } from "../styledComponents/StyledLayout";
import { StyledSearchInput } from "../styledComponents/StyledSearchInput";
import { Typography } from "antd";

const { Title } = Typography;

const HomePage = () => {
  const onSearch = (value) => console.log("Value from search input", value);
  return (
    <StyledLayout>
      <Title level={1} type="warning">
        HI WORLD!
      </Title>
      <StyledSearchInput
        placeholder="Seach something..."
        allowClear
        enterButton="Search"
        onSearch={onSearch}
      />
    </StyledLayout>
  );
};

export default HomePage;
