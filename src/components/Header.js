import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, HomeOutlined, ContactsOutlined, InfoCircleOutlined } from '@ant-design/icons';
import logo from "../img/logo.png";

const { Header } = Layout;

const HeaderComponent = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: isMobile ? '80px' : '100px', // Header boyutunu mobilde küçültüyoruz
        padding: isMobile ? '0 20px' : '0 70px',
        backgroundColor: '#2A2A2C',
      }}
    >
      {/* Logo ve başlık kısmı */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: '100%', // Logonun orantılı olarak küçülmesini sağlar
            height: 'auto', // Yükseklik oranını korur
            width: isMobile ? '80px' : '100px', // Mobilde biraz küçültüyoruz, masaüstünde 160px
            marginRight: '10px',
          }}
        />
        {/* Başlık, mobilde de gösterilecek şekilde düzenlendi */}
        <div
          style={{
            color: 'white',
            fontSize: isMobile ? '19px' : '24px', // Mobilde daha küçük font
            fontWeight: 'bold',
          }}
        >
          Tiger Araç Kiralama
        </div>
      </div>

      {/* Mobil Menü Butonu */}
      {isMobile ? (
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          style={{ color: 'white', fontSize: '24px' }}
        />
      ) : (
        <Menu theme="dark" mode="horizontal" style={{ backgroundColor: '#2A2A2C', fontSize: '18px' }}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Ana Sayfa</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<InfoCircleOutlined />}>
            <Link to="/about">Hakkımızda</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<ContactsOutlined />}>
            <Link to="/contact">İletişim</Link>
          </Menu.Item>
        </Menu>
      )}

      {/* Mobil Menü Drawer */}
      <Drawer
        title="Menü"
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical" theme="light" style={{ fontSize: '18px' }}>
          <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => setVisible(false)}>
            <Link to="/">Ana Sayfa</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<InfoCircleOutlined />} onClick={() => setVisible(false)}>
            <Link to="/about">Hakkımızda</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<ContactsOutlined />} onClick={() => setVisible(false)}>
            <Link to="/contact">İletişim</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;
