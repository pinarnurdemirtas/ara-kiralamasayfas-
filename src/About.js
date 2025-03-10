import React from 'react';
import { Helmet } from "react-helmet-async";
import { Typography, Layout, Space, Card } from 'antd';
import Header from "./components/Header";
import FooterComponent from './components/FooterComponent';
import "./styles/aboutStyles.css";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const About = () => {
  return (
    <Layout className="about-layout">
      <Header />
      <Helmet>
        <title>Tiger Rent A Car | Hakkımızda</title>
        <meta 
          name="description" 
          content="Tiger Rent A Car olarak en kaliteli ve güvenilir araç kiralama hizmetini sunuyoruz. Uygun fiyatlarla konforlu ve güvenli bir araç kiralama deneyimi yaşayın." 
        />
        <meta name="keywords" content="araç kiralama, rent a car, uygun fiyatlı araç kiralama, güvenilir araç kiralama, oto kiralama" />
        <meta name="author" content="Tiger Rent A Car" />
      </Helmet>

      <Content className="about-content">
        <Card className="about-card">
          <Title level={2} className="about-title">Tiger Rent A Car | Hakkımızda</Title>
          <Paragraph className="about-paragraph">
            Tiger Rent A Car olarak, siz değerli müşterilerimize en kaliteli ve güvenilir araç kiralama hizmetini sunmak için buradayız. 
            Yılların verdiği deneyim ve müşteri memnuniyeti odaklı hizmet anlayışımızla, seyahatlerinizi konforlu, güvenli ve keyifli hale getirmeyi amaçlıyoruz.
          </Paragraph>
        </Card>

        <Space direction="vertical" size="large" className="about-sections">
          <Card className="about-card">
            <Title level={3} className="about-subtitle">Müşteri Memnuniyeti Önceliğimiz</Title>
            <Paragraph className="about-paragraph">
              Her aracımız düzenli bakım ve kontrollerden geçirilerek, güvenliğiniz ve rahatınız düşünülerek sizlere teslim edilmektedir. 
              Kiralama sürecinizin her aşamasında, hızlı ve sorunsuz bir hizmet sunmaya özen gösteriyoruz.
            </Paragraph>
          </Card>

          <Card className="about-card">
            <Title level={3} className="about-subtitle">Şeffaf ve Güvenilir Hizmet</Title>
            <Paragraph className="about-paragraph">
              Şeffaf fiyat politikamız sayesinde sürpriz veya gizli ücretlendirmelere yer vermiyoruz. Amacımız, her bütçeye uygun kaliteli araçları, 
              kolay ve hızlı bir şekilde müşterilerimize sunarak, sorunsuz bir araç kiralama deneyimi yaşatmak.
            </Paragraph>
          </Card>

          <Card className="about-card">
            <Title level={3} className="about-subtitle">Esnek Kiralama Seçenekleri</Title>
            <Paragraph className="about-paragraph">
              İster kısa süreli ister uzun süreli kiralama taleplerinizde, iş seyahatlerinizde, tatillerinizde veya özel günlerinizde en iyi seçenekleri sunmaktan mutluluk duyarız.
            </Paragraph>
          </Card>

          <Card className="about-card">
            <Title level={3} className="about-subtitle">Bize Ulaşın</Title>
            <Paragraph className="about-paragraph">
              Kaliteli, güvenilir ve müşteri dostu bir araç kiralama deneyimi için bizimle hemen iletişime geçebilirsiniz. Tiger Rent A Car olarak, yolda daima yanınızdayız!
            </Paragraph>
          </Card>
        </Space>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default About;
