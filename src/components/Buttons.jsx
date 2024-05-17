import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

function Buttons() {
  return (
    <>
      <Flex gap="large">
        <Button>Default Button</Button>
        <Button type="primary">type="primary"</Button>
        <Button type="dashed">type="dashed"</Button>
        <Button type="link">type="link"</Button>
      </Flex>
      <br />
      <Flex gap="large">
        <Button type="primary" danger>
          Danger Button
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Button with Icon
        </Button>
        <Button type="primary" loading>
          Loading Button
        </Button>
      </Flex>
    </>
  );
}

export default Buttons;
