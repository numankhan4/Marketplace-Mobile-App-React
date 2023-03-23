import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  AppstoreOutlined,
  RocketOutlined,
  AuditOutlined,
  GlobalOutlined,
  DollarOutlined,
  ApartmentOutlined,
  FunctionOutlined,
} from "@ant-design/icons";
import { Button, Space, Avatar, Col, Row } from "antd";
import brandImage from "/assets/img/clothing-brand-image.webp";
import "./home.css";
import "swiper/css/pagination";
import { products } from "../data";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Autoplay, Pagination } from "swiper";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Home = () => {
  return (
    <div className="homage-page">
      {/* hero Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 25000000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="heroSlider"
      >
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="slide-image"
            style={{ backgroundImage: `url("${brandImage}")` }}
          ></motion.div>

          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <motion.div
              className="slide-content"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <strong>#FAsHION DAY</strong>
              <h3>80% OFF</h3>
              <p>Discover fashion that suits to your style</p>
            </motion.div>
            <Button>Check this out</Button>
          </Space>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-image"
            style={{ backgroundImage: `url("${brandImage}")` }}
          ></div>

          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <div className="slide-content">
              <strong>#FAsHION DAY</strong>
              <h3>80% OFF</h3>
              <p>Discover fashion that suits to your style</p>
            </div>
            <Button>Check this out</Button>
          </Space>
        </SwiperSlide>
      </Swiper>
      {/* Feature slider */}
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="filterSlider"
      >
        <SwiperSlide>
          <motion.div
            href="/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <a href="/">
              <Avatar
                icon={<AppstoreOutlined />}
                shape="square"
                size={40}
                style={{ backgroundColor: "#f6f6f6", color: "#292c3c" }}
              />
              Category
            </a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            href="/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <a href="/">
              <Avatar
                icon={<RocketOutlined />}
                shape="square"
                size={40}
                style={{ backgroundColor: "#f6f6f6", color: "#292c3c" }}
              />
              Flight
            </a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            href="/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <a href="/">
              <Avatar
                icon={<AuditOutlined />}
                shape="square"
                size={40}
                style={{ backgroundColor: "#f6f6f6", color: "#292c3c" }}
              />
              Bill
            </a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            href="/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <a href="/">
              <Avatar
                icon={<GlobalOutlined />}
                shape="square"
                size={40}
                style={{ backgroundColor: "#f6f6f6", color: "#292c3c" }}
              />
              Data Plan
            </a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            href="/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <a href="/">
              <Avatar
                icon={<DollarOutlined />}
                shape="square"
                size={40}
                style={{ backgroundColor: "#f6f6f6", color: "#292c3c" }}
              />
              Top Up
            </a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            href="/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <a href="/">
              <Avatar
                icon={<ApartmentOutlined />}
                shape="square"
                size={40}
                style={{ backgroundColor: "#f6f6f6", color: "#292c3c" }}
              />
              Grouped
            </a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            href="/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <a href="/">
              <Avatar
                icon={<FunctionOutlined />}
                shape="square"
                size={40}
                style={{ backgroundColor: "#f6f6f6", color: "#292c3c" }}
              />
              Function
            </a>
          </motion.div>
        </SwiperSlide>
      </Swiper>
      {/* Best Products */}

      <section className="best-selling-product">
        <Row
          justify="space-between"
          align={"middle"}
          className="best-selling-product-header"
        >
          <Col>
            <h2>Best Sale Product</h2>
          </Col>
          <Col>
            <Link to="/Store">See more</Link>
          </Col>
        </Row>
        <motion.div variants={container} initial="hidden" animate="visible">
          <Row justify="space-between" gutter={[12, 16]}>
            {products
              .filter(
                (prod) =>
                  prod.category.includes("cloth") && prod.rating.count > 300
              )
              .map((product) => (
                <Col span={12} key={product.id} variants={item}>
                  <motion.div span={12} key={product.id} variants={item}>
                    <ProductCard key={product.id} product={product} />
                  </motion.div>
                </Col>
              ))}
          </Row>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
