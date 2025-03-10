import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from "antd";
import { PhoneOutlined, EnvironmentOutlined, InfoCircleOutlined, MailOutlined } from "@ant-design/icons";
import logo from "../img/logo.png"; // Logonun dosya yolunu ayarla

const { Footer } = Layout;

const FooterComponent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Footer
            style={{
                backgroundColor: "#2A2A2C",
                color: "white",
                padding: "20px 50px",
            }}
        >
            <Row 
                justify="space-between" 
                align="middle" 
                gutter={[16, 16]}
            >
                {/* Sol Taraf - Logo */}
                <Col xs={24} sm={8} md={6} lg={6}>
                    <img 
                        src={logo} 
                        alt="Logo" 
                        style={{ width: isMobile ? '80px' : '180px', height: "auto" }} 
                    />
                </Col>

                {/* Sağ Taraf - Bilgiler */}
                <Col xs={24} sm={16} md={18} lg={18}>
                    <h3 style={{ color: "#fff", fontSize: isMobile ? '18px' : '24px', marginBottom: "10px" }}>
                        TİGER ARAÇ KİRALAMA HİZMETLERİ LİMİTED ŞİRKETİ
                    </h3>

                    {/* Bilgileri 2 Kolona Bölme */}
                    <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                          <EnvironmentOutlined style={{ marginRight: "8px" }} />
                          <a 
                            href="https://maps.app.goo.gl/Xy1p9MkxCevXGVQS8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: "#fff", textDecoration: "underline" }}
                          >
                            Karakaş mah. Şehit jandarma Yıldırım Akbulut cad. no 27 /b, Kırklareli Merkez
                          </a>
                        </p>
                      </Col>

                        <Col xs={24} sm={12}>
                            <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                                <PhoneOutlined style={{ marginRight: "8px" }} />
                                0 552 252 39 97
                            </p>
                        </Col>
                        <Col xs={24} sm={12}>
                            <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                                <MailOutlined style={{ marginRight: "8px" }} />
                                <a href="mailto:tigerrentacar@icloud.com" style={{ color: "#fff", textDecoration: "underline" }}>
                                    tigerrentacar@icloud.com
                                </a>
                            </p>
                        </Col>
                        <Col xs={24} sm={12}>
                            <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                                <InfoCircleOutlined style={{ marginRight: "8px" }} />
                                <a href="/gizlilik-politikasi" style={{ color: "#fff", textDecoration: "underline" }}>
                                    Gizlilik Politikası
                                </a>
                            </p>
                        </Col>
                    </Row>

                    {/* Copyright Metni */}
                    <p style={{ marginTop: "20px", fontSize: "12px", opacity: 0.8 }}>
                        Copyright © 2024. Her Hakkı Saklıdır. Sitemizin herhangi bir şekilde kopyalanması, çoğaltılması ve dağıtılması
                        halinde yasal haklarımız işletilecektir.
                    </p>
                </Col>
            </Row>
        </Footer>
    );
};

export default FooterComponent;
