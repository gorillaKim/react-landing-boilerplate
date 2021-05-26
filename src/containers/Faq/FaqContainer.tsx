import React, { FC } from 'react'
import Faq from '../../components/Faq'

type itemProps = {
  id: string
  title: string
  description: string
}[]
const data: itemProps = [
  {
    id: '0',
    title: '레버를 이용하려면 어떻게 해야 하나요?',
    description: '회원가입을 하시면 담당자가 관련 정보를 확인하고 안내 메일을 전달 드립니다.',
  },
  {
    id: '1',
    title: '가입 후에 바로 진행이 가능한가요?',
    description:
      '광고비 결제카드 등록 및 광고매체 계정 연동 후 진행이 가능합니다. 소재가 준비된 경우는 즉시 진행이 가능하나, 그렇지 않다면 소재 기획&제작에 따른 추가 시간이 소요될 수 있습니다.',
  },
  {
    id: '2',
    title: '업종, 업태, 플랫폼 등 이용 조건이 있나요?',
    description:
      '사행성, 선정성, 적법성 등을 고려하여 부적절한 서비스는 이용이 제한될 수 있습니다.',
  },
  {
    id: '3',
    title: '앱 광고도 진행할 수 있나요?',
    description: '현재 안드로이드 앱만 가능하며, 추후 IOS 앱 광고는 지원할 예정입니다.',
  },
  {
    id: '4',
    title: '서비스 비용이 있나요?',
    description:
      '서비스 비용은 별도로 없으며, 소진 광고비의 20%를 대행 수수료로 청구합니다. 현재 5%p 인하된 15%의 대행수수료로 레버를 사용하실 수 있는 프로모션이 진행중입니다. 단, 네이버는 매체 특성상 별도의 수수료가 청구되지 않습니다.',
  },
  {
    id: '5',
    title: '전환 스크립트 설치도 해주시나요?',
    description:
      '매체별 성과 측정 도구를 무료로 설치 지원해 드립니다. 단, 자체 구축의 경우 스크립트 제공은 가능하나 설치 지원이 일부 제한될 수 있는 점 참고 부탁 드립니다.',
  },
  {
    id: '6',
    title: '레버가 기존 광고 대행사/솔루션과 다른 점은 무엇인가요?',
    description:
      '레버는 휴먼어드바이저 (담당 AE)와 로보어드바이저 (AI알고리즘)가 함께 캠페인을 관리하는 데이터 기반의 마케팅 자동화 솔루션입니다. 오차범위와 시행착오를 최소화하고 광고 목표에 맞게 빠른 최적화가 가능합니다. 기존 광고 대행사/솔루션의 경우, AE 또는 AI 중 한 쪽으로 집중된 서비스를 제공하나, 레버는 양방향의 서비스가 유연하게 제공됩니다.',
  },
]
interface FaqContainerProps {}

const FaqContainer: FC<FaqContainerProps> = () => {
  // 추후 api를 통해 변경이 용이토록 container setting
  return <Faq contents={data} />
}

export default FaqContainer
