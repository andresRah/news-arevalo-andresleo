import React from "react";
import { Skeleton, Card, Typography, Image, Row, Tag, PageHeader } from "antd";

import "./style.css";

const { Paragraph } = Typography;

export const CardNews = () => {
  // const [loading, setLoading] = useState(false);

  const IconLink = ({ src, text }) => (
    <div className="example-link">
      <Image className="example-link-icon" src={src} alt={text} />
      {text}
    </div>
  );

  const content = (
    <>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <Tag color="blue">Deportes</Tag>
        <Paragraph class="ant-page-header-heading-sub-title">
          24/4/2019 21:24:00
        </Paragraph>
      </div>
      <div>
        <Image
          style={{ marginBottom: "10px" }}
          src="https://www.infobae.com/new-resizer/icHNZM9y0PIk5insU7FBG2V1RkA=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/R5FNCYTQQ5GBPGN6AUYHMCLSIQ.jpg"
          alt="content"
          width="100%"
        />
      </div>
      <div>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          text="Leer más en Clarin"
        />
      </div>
    </>
  );

  const Content = ({ children, extraContent }) => {
    return (
      <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
      </Row>
    );
  };

  return (
    <Card hoverable bodyStyle={{ margin: 0, padding: 0 }}>
      <Skeleton loading={false} avatar active>
        <PageHeader
          title="Coronavirus en Tabasco: continúan los contagios con 192 nuevos casos y 11 fallecidos"
          avatar={{
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          }}
        >
          <Content>{content}</Content>
        </PageHeader>
      </Skeleton>
    </Card>
  );
};
