import "./App.css";
import Buttons from "./components/Buttons";
import FlexBox from "./components/FlexBox";
import GridLayout from "./components/Grid";
import DataEntry from "./components/DataEntry";
import DataDisplay from "./components/DataDisplay";
import Feedback from "./components/Feedback";

function App() {
  return (
    <>
      <h1>React + Ant Design</h1>
      {/* <Alert
        message="Congratulations!"
        description="You've successfully installed ant design."
        type="success"
        showIcon
      />  */}
      <Buttons></Buttons>
      <br />
      <FlexBox></FlexBox>
      <br />
      <GridLayout></GridLayout>
      <br />
      <DataEntry></DataEntry>
      <br />
      <DataDisplay></DataDisplay>
      <Feedback></Feedback>
    </>
  );
}

export default App;
