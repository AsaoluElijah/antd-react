import {
  Row,
  Col,
  Typography,
  Alert,
  Drawer,
  Modal,
  Button,
  message,
  notification,
  Popconfirm,
  Skeleton,
  Space,
  Spin,
} from "antd";
import { useState } from "react";

const { Title } = Typography;

const Feedback = () => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const showMessage = () => {
    message.success("This is a success message");
  };

  const showNotification = () => {
    notification.info({
      message: "Notification Title",
      description: "This is the content of the notification.",
    });
  };

  return (
    <Row gutter={16}>
      {/* Column for Basic Feedback */}
      <Col className="gutter-row" span={10}>
        <Title level={5}>Basic Feedback</Title>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Alert message="Success Text" type="success" />
          <Alert message="Info Text" type="info" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
        </Space>
      </Col>

      {/* Column for Interactive Feedback */}
      <Col className="gutter-row" span={10}>
        <Title level={5}>Interactive Feedback</Title>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Button type="primary" onClick={() => setVisible(true)}>
            Open Drawer
          </Button>
          <Drawer
            title="Drawer Title"
            placement="right"
            onClose={() => setVisible(false)}
            visible={visible}
          >
            <p>Drawer content</p>
          </Drawer>
          <Button type="primary" onClick={() => setModalVisible(true)}>
            Open Modal
          </Button>
          <Modal
            title="Modal Title"
            visible={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>Modal content</p>
          </Modal>
          <Button type="primary" onClick={showMessage}>
            Show Message
          </Button>
          <Button type="primary" onClick={showNotification}>
            Show Notification
          </Button>
        </Space>
      </Col>

      {/* Column for Confirmation and Loading Feedback */}
      <Col className="gutter-row" span={10}>
        <Title level={5}>Confirmation and Loading Feedback</Title>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Popconfirm title="Are you sure?" okText="Yes" cancelText="No">
            <Button type="primary">Delete</Button>
          </Popconfirm>
          <Skeleton active />
          <Spin />
        </Space>
      </Col>
    </Row>
  );
};

export default Feedback;
