// General
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import {
  MessageOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  CreditCardOutlined,
  WalletOutlined,
  SettingOutlined,
  HeartFilled,
  ForkOutlined,
  ArrowLeftOutlined,
  SearchOutlined

} from "@ant-design/icons";
import { Avatar, Badge, Col, Space, Row, Input } from "antd";

const NavbarTop = () => {
  const [toggle, setToggle] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const location = useLocation()

  // Get Screen Size
  useEffect(() => {
    const changeWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  // Extract itemscount from CartContext
  const { cartItems } = useContext(CartContext);

  return (
    <>
    <Row justify="space-between" gutter={12}>
              <Col flex="1 1 60%">
                {!location.pathname.includes("/products")?
                    <Input
                      size="large"
                      placeholder="Search.."
                      prefix={<SearchOutlined />}
                    />
                      : <Link to="/" onClick={() => setToggle(!toggle)}>
                      <Avatar
                        icon={<ArrowLeftOutlined />}
                        style={{ backgroundColor: "transparent", color: "#292c3c" }}
                      />
                  </Link>
                }
              </Col>
            <Col>
              {location.pathname.includes("/products")?
                <Link to="/" onClick={() => setToggle(!toggle)}>
                    <Avatar
                      icon={<HeartFilled />}
                      style={{ backgroundColor: "transparent", color: "#292c3c" }}
                    />
                </Link>: null
              }
              {location.pathname.includes("/products")?
                <Link to="/" onClick={() => setToggle(!toggle)}>
                    <Avatar
                      icon={<ForkOutlined />}
                      style={{ backgroundColor: "transparent", color: "#292c3c" }}
                    />
                </Link>: null
              }
              <Link to="/cart" onClick={() => setToggle(!toggle)}>
                <Badge count={cartItems.length ? cartItems.length : null}>
                  <Avatar
                    icon={<ShoppingCartOutlined />}
                    style={{ backgroundColor: "transparent", color: "#292c3c" }}
                  />
                </Badge>
              </Link>
              {!location.pathname.includes("/products")?
                <Link to="/" onClick={() => setToggle(!toggle)}>
                  <Badge count={20} overflowCount={9}>
                    <Avatar
                      icon={<MessageOutlined />}
                      style={{ backgroundColor: "transparent", color: "#292c3c" }}
                    />
                  </Badge>
                </Link>: null
              }
            </Col>
        </Row>

    </>
  );
};

const NavbarBottom = () => {
  return (
    <>
      <Row justify={"space-around"} className="nav-items">
        <Col>
          <Link to="/" className="active">
            <Avatar
              icon={<HomeOutlined />}
              style={{ backgroundColor: "transparent", color: "#c7c9d0" }}
            />
            <span>Home</span>
          </Link>
        </Col>
        <Col>
          <Link to="/">
            <Avatar
              icon={<CreditCardOutlined />}
              style={{ backgroundColor: "transparent", color: "#c7c9d0" }}
            />
            <span>Voucer</span>
          </Link>
        </Col>
        <Col>
          <Link to="/">
            <Avatar
              icon={<WalletOutlined />}
              style={{ backgroundColor: "transparent", color: "#c7c9d0" }}
            />
            <span>Wallet</span>
          </Link>
        </Col>
        <Col>
          <Link to="/">
            <Avatar
              icon={<SettingOutlined />}
              style={{ backgroundColor: "transparent", color: "#c7c9d0" }}
            />
            <span>Settings</span>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export { NavbarTop, NavbarBottom };
