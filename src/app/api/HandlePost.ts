// import { BASE_URL } from '@/constants/appinfos'
// import axiosClient from './axiosClient'

// class HandlePost {
//   getPosts = async (url: string) => {
//     return axiosClient.get(BASE_URL + url)
//   }
// }

// const handlePosts = new HandlePost()

// export default handlePosts

import axios, { AxiosInstance } from 'axios'

class HandlePost {
  constructor(private axiosInstance: AxiosInstance) {}

  async getPosts(url: string) {
    try {
      const response = await this.axiosInstance.get(url)
      return response.data
    } catch (error: any) {
      throw new Error(`Gagal menampilkan data posts: ${error.message}`)
    }
  }

  async createPosts(url: string, data: any) {
    try {
      const response = await this.axiosInstance.post(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(`Failed to create data: ${error.message}`)
    }
  }
}

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Tambahkan header lainnya jika diperlukan
  }
})

const handlePost = new HandlePost(axiosInstance)

export default handlePost
