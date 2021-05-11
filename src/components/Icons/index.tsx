import React, { FC } from 'react'

interface IconProps {
  icon: string // 'Brnach' | 'Facebook' | 'Insta' | 'Naver' | 'Notion'
  className?: string
  onClick?: () => void
}

const Icons: FC<IconProps> = ({ icon, className = '', onClick }) =>
  icon ? (
    <img
      src={require(`./${icon}.png`)}
      alt="publisher-icon"
      style={{
        width: 25,
        height: 25,
        cursor: onClick ? 'pointer' : 'default',
      }}
      className={className}
      onClick={onClick}
    />
  ) : null

export default Icons