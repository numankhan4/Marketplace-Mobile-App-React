import React, {useRef,useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import {
  Image,
  Avatar,
  Tabs,
  Descriptions,
  List,
  Button,
  Rate,
  Progress,
  Row,
  Col,
} from "antd";
import {
  ShopOutlined,
  StarFilled,
  ShoppingCartOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./product-detail.css";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import {motion, AnimatePresence , useScroll, useTransform} from 'framer-motion';


function useParallax(value, distance) {
  return useTransform(value, [0, 1], ["-" + distance, distance]);
}

const { TabPane } = Tabs;
const ease = [0.08, 0.37, 0.45, 0.89];

const ProductDetail = () => {
  const [hideAnimationTag, setHideAnimationTag] = useState(false)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, "50vh");
 
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  const { productId } = useParams();

  const thisProduct = products.find((prod) => {
    if (prod.id === Number(productId)) {
      return prod;
    }
  });

  const onChange = (key) => {
    console.log(key);
  };
  const data = [
    {
      title: "Shopping Cart Store",
    },
  ];
  return (
    <div className="product-detail-wrap">
        <AnimatePresence>
          {!hideAnimationTag &&  <motion.div
            className="animated-overlay"
            
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0,  opacity: 1}}
            exit={{ y: 0,  opacity: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => {
              setHideAnimationTag(true)
            }}
          >
        </motion.div>}
        </AnimatePresence>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{  opacity: 1}}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        >
          <div className="product-detail">
          <motion.div className="product-image"
              initial={{ y: 100, opacity: 0  }}
              animate={{ y: 0,opacity: 1, 
              transition: { delay: 1.2, duration: 1, ease } }}
            >
              <Image width={200} src={thisProduct.image} /></motion.div>
        
            <motion.span
            className="product-type"
              initial={{ x: 100, opacity: 0  }}
              animate={{ x: 0, opacity: 1, transition: { delay: 1.2, duration: 1, ease } }}
            >{thisProduct.category}</motion.span>
            <motion.h1
              initial={{ x: 100 , opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 1.2, duration: 1, ease } }}
            >{thisProduct?.title}</motion.h1>
            <ul className="product-reputation">
              <li>
                <Avatar
                  icon={<StarFilled />}
                  shape="square"
                  size={17}
                  style={{ backgroundColor: "transparent", color: "#f9a23b" }}
                />
                <span className="rating">{thisProduct.rating.rate} Ratings</span>
              </li>
              <li>
                <span className="reviews">{thisProduct.rating.count}+ Reviews</span>
              </li>
              <li>{Number(thisProduct.rating.count) + 999} + Sold </li>
            </ul>
            <div className="product-detail-tabs">
              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="About Item" key="1">
                  <Descriptions>
                    <Descriptions.Item label="Brand">
                      Shopping Cart
                    </Descriptions.Item>
                    <Descriptions.Item label="Color">Aprikot</Descriptions.Item>
                    <Descriptions.Item label="Category">
                      {thisProduct.category}
                    </Descriptions.Item>
                    <Descriptions.Item label="Material">
                      Polyester
                    </Descriptions.Item>
                    <Descriptions.Item label="Condition">New</Descriptions.Item>
                  </Descriptions>
                </TabPane>
                <TabPane tab="Reviews" key="2">
                  {thisProduct.rating.count}+ Reviews
                </TabPane>
              </Tabs>
            </div>
            <div className="product-description">
              <p>{thisProduct.description}</p>
            </div>
            <div className="shipping-info">
              <Descriptions title="Shipping Information:">
                <Descriptions.Item label="Delivery">
                  Shipping from Jakartra, Indonesia
                </Descriptions.Item>
                <Descriptions.Item label="Shipping">
                  Free International
                </Descriptions.Item>
                <Descriptions.Item label="Arrive">
                  Estimated arival on 25 - 27 Oct 2023
                </Descriptions.Item>
              </Descriptions>
            </div>
            <div className="seller-information">
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://api.lorem.space/image/fashion?w=640&h=480&r=9683`}
                        />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Active 5 Minutes ago | 96.7% Positive Feedback"
                    />
                    <div className="seller-info-action">
                      <Button icon={<ShopOutlined />}>Visit Store</Button>
                    </div>
                  </List.Item>
                )}
              />
            </div>
            <section>
              <h4>Reviews & Ratings</h4>
              <div className="google-review">
                <div className="rating-review-item">
                  <div className="left-rating">
                    <div className="star-rating">
                      <h3>{thisProduct.rating.rate}</h3>
                      <sub>/ 5.0</sub>
                    </div>
                    <div className="number-stars">
                      <Rate
                        allowClear={false}
                        defaultValue={thisProduct.rating.count}
                      />
                    </div>
                    <div className="number-review">
                      {thisProduct.rating.count} + Reviews
                    </div>
                  </div>
                  <div className="right-rating">
                    <ul className="order-list">
                      <li>
                        <div className="star-value">
                          <Avatar
                            icon={<StarFilled />}
                            shape="square"
                            size={17}
                            style={{
                              backgroundColor: "transparent",
                              color: "#f9a23b",
                            }}
                          />
                          <h5>5</h5>
                        </div>
                        <div className="progress">
                          <Progress percent={99.9} />
                        </div>
                      </li>
                      <li>
                        <div className="star-value">
                          <Avatar
                            icon={<StarFilled />}
                            shape="square"
                            size={17}
                            style={{
                              backgroundColor: "transparent",
                              color: "#f9a23b",
                            }}
                          />
                          <h5>4</h5>
                        </div>
                        <div className="progress">
                          <Progress percent={80} />
                        </div>
                      </li>
                      <li>
                        <div className="star-value">
                          <Avatar
                            icon={<StarFilled />}
                            shape="square"
                            size={17}
                            style={{
                              backgroundColor: "transparent",
                              color: "#f9a23b",
                            }}
                          />
                          <h5>3</h5>
                        </div>
                        <div className="progress">
                          <Progress percent={70} />
                        </div>
                      </li>
                      <li>
                        <div className="star-value">
                          <Avatar
                            icon={<StarFilled />}
                            shape="square"
                            size={17}
                            style={{
                              backgroundColor: "transparent",
                              color: "#f9a23b",
                            }}
                          />
                          <h5>3</h5>
                        </div>
                        <div className="progress">
                          <Progress percent={30} />
                        </div>
                      </li>
                      <li>
                        <div className="star-value">
                          <Avatar
                            icon={<StarFilled />}
                            shape="square"
                            size={17}
                            style={{
                              backgroundColor: "transparent",
                              color: "#f9a23b",
                            }}
                          />
                          <h5>2</h5>
                        </div>
                        <div className="progress">
                          <Progress percent={5} />
                        </div>
                      </li>
                      <li>
                        <div className="star-value">
                          <Avatar
                            icon={<StarFilled />}
                            shape="square"
                            size={17}
                            style={{
                              backgroundColor: "transparent",
                              color: "#f9a23b",
                            }}
                          />
                          <h5>1</h5>
                        </div>
                        <div className="progress">
                          <Progress percent={0} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <motion.footer
            id="product-detail-footer"
            
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0,  opacity: 1}}
            exit={{ y: 0,  opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <Row align={"middle"}>
              <Col span={12}>
                <div className="footer-pricing">
                  <small>Total Price</small>
                  <strong>{formatCurrency(thisProduct.price)}</strong>
                </div>
              </Col>
              <Col span={12}>
                <div className="button-group">
                  {!isInCart(thisProduct) && (
                    <Button
                      size={"large"}
                      type="primary"
                      onClick={() => addToCart(thisProduct)}
                      icon={<ShoppingCartOutlined />}
                    ></Button>
                  )}
                  {isInCart(thisProduct) && (
                    <Button
                      size={"large"}
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={() => {
                        increase(thisProduct);
                      }}
                    ></Button>
                  )}
                  <Button size={"large"}>Buy Now</Button>
                </div>
              </Col>
            </Row>
          </motion.footer>
        </motion.div>
    </div>
  );
};

export default ProductDetail;
