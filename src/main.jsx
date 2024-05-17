import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ConfigProvider } from "antd";
import esES from "antd/locale/es_ES.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    locale={esES}
    theme={{
      token: {
        colorPrimary: "#00ccff",
        borderRadius: 3,
      },
    }}
  >
    <App />
  </ConfigProvider>
);
