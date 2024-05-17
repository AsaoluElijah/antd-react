import { Col, Row } from "antd";

const style = {
  background: "#0092ff",
  padding: "20px",
};

const GridLayout = () => (
  <>
    <Row gutter={16}>
      {[1, 2, 3, 4].map((item) => (
        <Col className="gutter-row" span={6} key={item}>
          <div style={style}>col-6</div>
        </Col>
      ))}
    </Row>
  </>
);
export default GridLayout;
