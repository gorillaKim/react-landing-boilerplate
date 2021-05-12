import React, { FC } from 'react';
import Banner from "../../components/Banner";

interface BannerContainerProps {

}

const BannerContainer: FC<BannerContainerProps> = () => {
  // 추후 api를 통해 변경이 용이토록 container setting
  return (
    <Banner>
      <p>배너입니다.</p>
    </Banner>
  );
}

export default BannerContainer;