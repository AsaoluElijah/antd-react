import { Button, Flex } from "antd";
const boxStyle = {
  width: "100%",
  height: 120,
  borderRadius: 6,
  border: "1px solid #40a9ff",
};

const FlexBox = () => {
  return (
    <Flex style={boxStyle} justify="space-around" align="center">
      {[1, 2, 3, 4].map((item) => (
        <Button type="primary" size="large" key={item}>
          Flex Item
        </Button>
      ))}
    </Flex>
  );
};
export default FlexBox;
