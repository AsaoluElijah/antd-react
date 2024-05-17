import {
  Row,
  Col,
  Typography,
  Avatar,
  Badge,
  Calendar,
  Card,
  Carousel,
  Collapse,
  Statistic,
  Tabs,
  Tooltip,
  Tree,
  Space,
  QRCode,
  Timeline,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const DataDisplay = () => (
  <Row gutter={16}>
    {/* Column for Basic Data Display */}
    <Col className="gutter-row" span={10}>
      <Title level={5}>Basic Data Display</Title>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Avatar size="large" icon={<UserOutlined />} />
        <Badge count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Statistic title="Active Users" value={112893} />
        <QRCode value="https://www.example.com" />
      </Space>
    </Col>

    {/* Column for Structured Data Display */}
    <Col className="gutter-row" span={10}>
      <Title level={5}>Structured Data Display</Title>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Card title="Card Title">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="This is panel header 1" key="1">
            <p>Panel content</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>Panel content</p>
          </Panel>
        </Collapse>
        <Timeline>
          <Timeline.Item>Event 1</Timeline.Item>
          <Timeline.Item>Event 2</Timeline.Item>
          <Timeline.Item>Event 3</Timeline.Item>
        </Timeline>
      </Space>
    </Col>

    {/* Column for Interactive Data Display */}
    <Col className="gutter-row" span={10}>
      <Title level={5}>Interactive Data Display</Title>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Tab 1 content
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Tab 2 content
          </TabPane>
        </Tabs>
        <Tooltip title="Tooltip text">
          <span>Hover me</span>
        </Tooltip>
        <Tree
          treeData={[
            {
              title: "parent 1",
              key: "0-0",
              children: [
                {
                  title: "child 1",
                  key: "0-0-0",
                },
                {
                  title: "child 2",
                  key: "0-0-1",
                },
              ],
            },
          ]}
        />
      </Space>
    </Col>
  </Row>
);

export default DataDisplay;
