import { formatCurrency } from "../utils";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import { Card, Row, Col, Avatar } from "antd";
import "./product-card.css";
import { HeartOutlined, StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  const { Meta } = Card;
  return (
    <>
      <Card
        hoverable
        cover={
          <img
            alt="product-image"
            src={product.image + "?v=" + product.id}
            style={{ height: 100, width: "auto", margin: "auto" }}
          />
        }
        className="cardItem"
      >
        <Avatar
          className="heart-button"
          icon={<HeartOutlined />}
          shape="square"
          size={25}
          style={{ backgroundColor: "transparent", color: "#292c3c" }}
        />
        <span className="product-type">{product.category}</span>
        <h4>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </h4>
        <div className="card-footer">
          <Row justify="space-between" style={{ alignItems: "center" }}>
            <Col>
              <div className="raiting">
                <Avatar
                  icon={<StarFilled />}
                  shape="square"
                  size={17}
                  style={{ backgroundColor: "transparent", color: "#f9a23b" }}
                />
                <span>
                  {product.rating.rate} | {product.rating.count}
                </span>
              </div>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <strong className="product-price">
                {formatCurrency(product.price)}
              </strong>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
