import React from "react";
import { Skeleton, Card, Typography, Image, Row, Tag, PageHeader } from "antd";
import { formatDate } from "../../utils/date";
import "./style.css";

const { Paragraph } = Typography;
const defaultImageURL =
  "https://bloximages.newyork1.vip.townnews.com/wfmz.com/content/tncms/custom/image/b9818ac0-ee9a-11e9-8e9f-a3b831b71481.jpg";

export const CardNews = ({ newInfo, isLoading }) => {
  // const [loading, setLoading] = useState(false);
  const { category, date, img_url, source_name, title, url } = newInfo;

  const IconLink = ({ src, text }) => (
    <div className="example-link">
      <Image className="example-link-icon" src={src} alt={text} />
      {text}
    </div>
  );

  const content = (
    <>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <Tag color="blue">{category ? category : "Todas"}</Tag>
        <Paragraph class="ant-page-header-heading-sub-title">
          {formatDate(date)}
        </Paragraph>
      </div>
      <div>
        <Image
          style={{ marginBottom: "10px" }}
          src={img_url ? img_url : defaultImageURL}
          alt="content"
          width="100%"
        />
      </div>
      <div>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          text={`Leer más en ${source_name}`}
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
          title={title}
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
