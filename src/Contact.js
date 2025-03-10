import React from "react";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button, Typography, Space } from "antd";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";

const Contact = () => {
  const phoneNumber = "05522523997";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Sayfanın en az ekran boyutunda olması için
        padding: "0px",
      }}
    >
      <Header />

      {/* İçerik Alanı */}
      <div
        style={{
          flex: 1,
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <Typography.Title level={2}>İletişim Sayfası</Typography.Title>
        <Typography.Text style={{ fontSize: "16px" }}>
          Bizimle aşağıdaki seçeneklerden iletişime geçebilirsiniz.
        </Typography.Text>

        <div style={{ marginTop: "30px" }}>
          {/* Telefon ile arama butonu */}
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Button
              type="primary"
              icon={<PhoneOutlined />}
              size="large"
              style={{
                marginBottom: "20px",
                width: "50%",
                maxWidth: "400px", // Büyük ekranlarda buton genişliğini sınırladık
                borderRadius: "8px",
                margin: "0 auto", // Ortalamak için
              }}
              href={`tel:${phoneNumber}`}
            >
              Telefon ile Ara
            </Button>

            {/* WhatsApp butonu */}
            <Button
              type="default"
              icon={<WhatsAppOutlined />}
              size="large"
              href={`https://wa.me/90${phoneNumber}`}
              target="_blank"
              style={{
                backgroundColor: "#25D366",
                color: "white",
                width: "50%",
                maxWidth: "400px", // Büyük ekranlarda buton genişliğini sınırladık
                borderRadius: "8px",
                margin: "0 auto", // Ortalamak için
              }}
            >
              WhatsApp
            </Button>
          </Space>
        </div>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default Contact;
