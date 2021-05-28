import axios, { AxiosInstance } from 'axios'
import { IinitInputs } from 'types/mainArticle'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const env = process.env.NODE_ENV
const baseURL = env === 'development' ? 'https://dev.office.lever.me' : 'https://office.lever.me'

const customAxios: AxiosInstance = axios.create({
  baseURL: baseURL, // 기본 서버 주소 입력
})

export const contactAPI = {
  post: (inputs: IinitInputs) =>
    customAxios({
      method: 'post',
      url: '/contact/send',
      data: inputs,
    }),
}

export default customAxios
