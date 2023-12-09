import { Card, Tag } from "antd";
import React from "react";
import {
  EnvironmentOutlined,
  GlobalOutlined,
  HomeFilled,
  IdcardTwoTone,
  MailTwoTone,
  MobileTwoTone,
  SearchOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const UserCard = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div>
      <Card
        className="uppercase"
        title={"Company: " + company.name}
        bordered={true}
      >
        <p className="uppercase font-extrabold text-red-500">
          <IdcardTwoTone /> {name}
        </p>
        <div className="flex gap-4 lowercase">
          <p className="font-semibold">
            <TwitterOutlined /> @{username}
          </p>
          <p>
            <GlobalOutlined />
            {""} {""}
            {website}
          </p>
        </div>
        <p className="lowercase">
          <MailTwoTone /> {""} {""}
          {email}
        </p>
        <p>
          <MobileTwoTone /> {""} {""}
          {phone}
        </p>
        <p className="text-xs capitalize">
          <HomeFilled /> {""} {""}
          {address.street} {address.suite} {address.city}
        </p>
        <div className="flex">
          <Tag icon={<SearchOutlined />} color="success">
            {address.zipcode}
          </Tag>
          <div>
            <Tag icon={<EnvironmentOutlined />} color="processing">
              {address.geo.lat}
            </Tag>
            <Tag color="error">{address.geo.lng}</Tag>
          </div>
        </div>
        <div>
          <p className="text-center capitalize font-medium">
            {company.catchPhrase} {company.bs}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;
