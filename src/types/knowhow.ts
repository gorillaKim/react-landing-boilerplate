export interface KnowHowProps {
  demo: {
    id: string
    url: string
    href: string
    content: string
  }[]
}
export interface KnowHowSlideProps {
  demo: any
  slidesToShow: number
  animation: any
  className: string
}