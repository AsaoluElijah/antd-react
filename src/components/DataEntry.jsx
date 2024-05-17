import { UploadOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Input,
  Typography,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  DatePicker,
  Space,
  Button,
  Upload,
} from "antd";
const { Title } = Typography;

const DataEntry = () => (
  <Row gutter={16}>
    {/* Column for Basic Inputs */}
    <Col className="gutter-row" span={10}>
      <Title level={5}>Basic Inputs</Title>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Input placeholder="Enter your name" size="large" />
        <Input.OTP style={{ fontSize: "large", height: "40px" }} />
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Space>
    </Col>

    {/* Column for Selection Controls */}
    <Col className="gutter-row" span={10}>
      <Title level={5}>Selection Controls</Title>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Radio style={{ fontSize: "large" }}>Radio</Radio>
        <Select
          defaultValue="List Item"
          style={{
            width: 180,
            fontSize: "large",
            height: "40px",
          }}
          options={[
            {
              value: "List Item",
              label: "List Item",
            },
          ]}
        />
        <Rate style={{ fontSize: "24px" }} />
      </Space>
    </Col>

    {/* Column for Other Controls */}
    <Col className="gutter-row" span={10}>
      <Title level={5}>Other Controls</Title>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Slider defaultValue={30} style={{ width: "100%" }} />
        <Switch defaultChecked style={{ fontSize: "large" }} />
        <DatePicker
          style={{ width: "100%", height: "40px", fontSize: "large" }}
        />
      </Space>
    </Col>
  </Row>
);

export default DataEntry;
