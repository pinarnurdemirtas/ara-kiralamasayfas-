import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";
import { Row, Col, Card, Skeleton, Typography, Button } from "antd";
import background from "./img/carback.png.jpeg";
import FooterComponent from "./components/FooterComponent";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  CarOutlined,
  CalendarOutlined,
  ToolOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Header from "./components/Header";
import { Helmet } from "react-helmet-async";

const { Meta } = Card;

const CarGallery = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cars"));
        setCars(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching cars data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    if (!cars.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cars]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <Skeleton active />;

  return (
    <div>
      <Helmet>
        <title>Kırklareli Araç Kiralama | En Uygun Fiyatlarla Araba Kirala</title>
        <meta
          name="description"
          content="Kırklareli araç kiralama hizmetleri ile uygun fiyatlı ve konforlu arabalar kiralayın."
        />
      </Helmet>
      <Header />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: isMobile ? "column" : "row",
          padding: "0 10px", // Add padding to prevent content touching the edges
        }}
      >
        <div
          className="slider-text"
          style={{
            width: isMobile ? "100%" : "40%", // Adjust width for mobile
            color: "black",
            padding: "20px", // Reduce padding for better mobile view
            borderRadius: "10px",
            textAlign: isMobile ? "center" : "left", // Center text on mobile
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "20px" : "30px",
              marginBottom: "20px",
            }}
          >
            Kırklareli Araç Kiralama
          </h2>
          <ul
            style={{
              listStyleType: "none",
              padding: 10,
              fontSize: isMobile ? "13px" : "20px",
              marginBottom: "10px",
              textAlign: isMobile ? "center" : "left", // Center the list on mobile
            }}
          >
            <li style={{ marginBottom: isMobile ? "8px" : "15px" }}>
              ✔ Bakımlı Araçlar
            </li>
            <li style={{ marginBottom: isMobile ? "8px" : "15px" }}>
              ✔ Uygun Fiyat
            </li>
            <li style={{ marginBottom: isMobile ? "8px" : "15px" }}>
              ✔ Güvenilir Hizmet
            </li>
            <li style={{ marginBottom: isMobile ? "8px" : "15px" }}>
              ✔ Acil Durumlar İçin Hızlı Hizmet
            </li>
          </ul>
        </div>

        <div
          style={{
            width: isMobile ? "100%" : "60%",
            display: "flex",
            justifyContent: "center", // Center the image on mobile
            alignItems: "center",
            position: "relative", // Make sure the left/right buttons are aligned with the image
          }}
        >
          <LeftOutlined
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length)
            }
            style={{
              cursor: "pointer",
              position: "absolute",
              left: "0",
              zIndex: "1",
              color: "white", // Make sure the arrows are visible
            }}
          />
          {cars.length > 0 && (
            <img
              alt={cars[currentIndex].model}
              src={cars[currentIndex].imageUrl}
              style={{
                height: "300px",
                width: "80%",
                objectFit: "contain",
                maxHeight: "350px", // Ensure image isn't too large on mobile
              }}
            />
          )}
          <RightOutlined
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % cars.length)
            }
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "0",
              zIndex: "1",
              color: "white", // Make sure the arrows are visible
            }}
          />
        </div>
      </div>

      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
        Hızlı, Güvenli, Konforlu Araç Kiralama'nın Adresi
      </h1>

      <Row gutter={[24, 24]} justify="center">
        {cars.map((car) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            key={car.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={car.model}
                  src={car.imageUrl}
                  style={{
                    height: "250px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              }
            >
              <Meta title={<Typography.Title level={3}>{car.model}</Typography.Title>} />
              <p>
                <CarOutlined /> {car.fuel}
              </p>
              <p>
                <ToolOutlined /> {car.transmission}
              </p>
              <p>
                <CalendarOutlined /> {car.year}
              </p>
              <Button type="primary" icon={<PhoneOutlined />} href="tel:05522523997">
                Ara
              </Button>
              <Button
                type="default"
                icon={<WhatsAppOutlined />}
                href="https://wa.me/905522523997"
                target="_blank"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                WhatsApp
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <FooterComponent />
    </div>
  );
};

export default CarGallery;
