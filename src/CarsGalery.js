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

<Helmet>
  <title>Kırklareli Araç Kiralama - En Uygun Fiyatlarla Araba Kirala</title>
  <meta name="description" content="Kırklareli araç kiralama hizmetleri ile uygun fiyatlı ve konforlu arabalar kiralayın. Geniş araç filomuzla 7/24 hizmetinizdeyiz." />
  <meta name="keywords" content="Kırklareli araç kiralama, Kırklareli araba kiralama, Uygun fiyatlı araç kiralama, Günlük araç kiralama, Kırklareli oto kiralama" />
  <meta name="author" content="Tiger Oto,Tiger Rent A Car" />
  <meta property="og:title" content="Kırklareli Araç Kiralama - En Uygun Fiyatlarla Araba Kirala" />
  <meta property="og:description" content="Kırklareli'de araba kiralama mı arıyorsunuz? Ekonomik ve lüks araç seçenekleriyle en iyi fiyat garantisi sunuyoruz!" />
  <meta property="og:image" content="URL_TO_YOUR_COVER_IMAGE" />
  <meta property="og:url" content="https://seninsiten.com" />
  <meta name="robots" content="index, follow" />
</Helmet>

const { Meta } = Card;

const CarGallery = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch car data from firebase
  useEffect(() => {
    const fetchCars = async () => {
      const carsCollection = collection(db, "cars");
      try {
        const querySnapshot = await getDocs(carsCollection);
        const carsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCars(carsList);
      } catch (error) {
        console.error("Error fetching cars data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Auto carousel effect
  useEffect(() => {
    if (cars.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cars]);

  // Mobile screen detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen is mobile size
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle next and previous buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div style={{ padding: "0px" }}>
      <Header />

      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        flexDirection: isMobile ? 'column' : 'row', // isMobile durumu ile yönü belirle
        flexWrap: 'nowrap',
      }}
    >
      {/* Sol Taraf: Yazılar */}
<div
  className="slider-text"
  style={{
    width: isMobile ? '100%' : '40%', // Mobilde %100 genişlik, normalde %40
    color: 'black',
    padding: '20px',
    
    borderRadius: '10px',
  }}
>
  <h2 style={{ fontSize: isMobile ? '20px' : '30px', marginBottom: '20px' }}>Kırklareli Araç Kiralama</h2>
  <ul style={{ listStyleType: 'none', padding: 10, fontSize: isMobile ? '13px' : '20px', marginBottom: '10px' }}>
    <li style={{ marginBottom: isMobile ? '8px' : '15px' }}>✔ Bakımlı Araçlar</li>
    <li style={{ marginBottom: isMobile ? '8px' : '15px' }}>✔ Uygun Fiyat</li>
    <li style={{ marginBottom: isMobile ? '8px' : '15px' }}>✔ Güvenilir Hizmet</li>
    <li style={{ marginBottom: isMobile ? '8px' : '15px' }}>✔ Acil Durumlar İçin Hızlı Hizmet</li>
  </ul>
</div>


      {/* Sağ Taraf: Slider ve Butonlar */}
      <div
        className="slider-content"
        style={{
          width: isMobile ? '100%' : '60%', // Mobilde %100 genişlik, normalde %60
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Sol Ok Tuşu */}
        <LeftOutlined
          onClick={handlePrev}
          style={{
            fontSize: '10px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '10px',
            borderRadius: '50%',
            cursor: 'pointer',
            marginRight: isMobile ? '0px' : '0px', 
            marginLeft: isMobile ? '0px' : '0px',// Mobilde sağa margin ekleme
          }}
        />

        {/* Slider Resmi */}
        {cars.length > 0 && (
          <img
            alt={cars[currentIndex].model}
            src={cars[currentIndex].imageUrl}
            className="slider-image"
            style={{
              height: isMobile ? '200px' : '300px', // Mobilde daha küçük resim
              width: isMobile ? '80%' : '80%', // Mobilde resim daha küçük
              objectFit: 'contain',
              borderRadius: '10px',
              transition: 'opacity 1s ease-in-out',
              opacity: 0.9,
            }}
          />
        )}

        {/* Sağ Ok Tuşu */}
        <RightOutlined
          onClick={handleNext}
          style={{
            fontSize: '10px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '10px',
            borderRadius: '50%',
            cursor: 'pointer',
            marginLeft: isMobile ? '0' : '0px', // Mobilde sağa margin ekleme
          }}
        />
      </div>
    </div>

      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
      Hızlı, Güvenli, Konforlu Araç Kiralama'nın Adresi
      </h1>

      {/* Car Cards Section */}
      <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
        <div style={{ maxWidth: "1200px", width: "100%", padding: "0 30px" }}>
          <Row gutter={[24, 24]} justify="center">
            {cars.map((car) => (
              <Col xs={24} sm={12} md={8} lg={8} key={car.id}>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    textAlign: "center",
                    position: "relative",
                  }}
                  cover={
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden", // Taşmaların engellenmesi için
                        height: isMobile ? "180px" : "250px", // Mobilde daha küçük yükseklik, masaüstünde büyük
                        width: "100%", // Genişlik 100% olmalı, sabit değil
                      }}
                    >
                      <img
                        alt={car.model}
                        src={car.imageUrl}
                        style={{
                          width: "100%", // Genişlik her zaman %100 olacak şekilde ayarlanır
                          height: "100%", // Yükseklik de %100 yapılır
                          objectFit: "contain", // Resmin tamamını görünür kıl, taşma olmasın
                          objectPosition: "center", // Resmi ortalar
                        }}
                      />
                    </div>
                  }
                >
                  

                  <Meta
                    title={
                      <Typography.Title level={3} style={{ marginBottom: "8px" }}>
                        {car.model}
                      </Typography.Title>
                    }
                    description={
                      <div>
                        <p>
                          <CarOutlined style={{ color: '#FFA500' }} /> <strong>{car.fuel}</strong>
                        </p>
                        <p>
                          <ToolOutlined style={{ color: '#FFA500' }} /> <strong>{car.transmission}</strong>
                        </p>
                        <p>
                          <CalendarOutlined style={{ color: '#FFA500' }} /> <strong>{car.year}</strong>
                        </p>
                      </div>
                    }
                  />

                  {/* WhatsApp and Phone Buttons */}
                  <div style={{ marginTop: "10px" }}>
                    <Button
                      type="primary"
                      icon={<PhoneOutlined />}
                      href={`tel:05522523997`}
                      style={{ marginRight: "10px" }}
                    >
                      Ara
                    </Button>

                    <Button
                      type="default"
                      icon={<WhatsAppOutlined />}
                      href={`https://wa.me/905522523997`}
                      target="_blank"
                      style={{ backgroundColor: "#25D366", color: "white" }}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default CarGallery;
