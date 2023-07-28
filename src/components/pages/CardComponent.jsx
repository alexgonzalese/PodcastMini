import React from 'react'
import { Card, Divider } from "antd";
import { useSelector } from 'react-redux';

const { Meta } = Card;
export default function CardComponent() {
  const { title, summary, artist, imageUrl } = useSelector((state) => state.podcats);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={imageUrl} />}
    >
      <Meta title={title} description={`by ${artist}`}/>
      <Divider />
      <Meta title="Description:" description={summary} />
    </Card>
  );
}

