import React from "react";
import { NavbarTop, NavbarBottom } from "./components/Navbar";
import Store from "./pages/Store";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import { Layout, ConfigProvider } from "antd";
const { Header } = Layout;
import { StyleProvider } from "@ant-design/cssinjs";
import { AnimatePresence } from "framer-motion";

function App() {
  
  return (
    <div className="app-main">
     
      <AnimatePresence mode="wait">
      <BrowserRouter basename={window.location.pathname || ''}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#309980",
              fontFamily: "Inter",
              fontFamilyCode: "Inter",
              borderRadius: 4,
              colorError: "#e55986",
              colorBgLayout: "transparent",
              colorLink: "#4bb299",
            },
          }}
        >
          <StyleProvider hashPriority="high">
            <Layout>
              <Header
                className="header"
                style={{ backgroundColor: "#ffffff", padding: "0 20px" }}
              >
                <NavbarTop />
                  
              </Header>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/store" element={<Store />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route
                  path="/products/:productId"
                  element={<ProductDetail />}
                ></Route>
              </Routes>
              <div className="bottom-nav-bar">
                <NavbarBottom />
              </div>
            </Layout>
          </StyleProvider>
        </ConfigProvider>
      </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
