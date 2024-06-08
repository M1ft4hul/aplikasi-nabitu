// import { BASE_URL } from '@/constants/appinfos'
// import axiosClient from './axiosClient'

// class HandleProfil {
//   getProfile = async (url: string) => {
//     return axiosClient.get(BASE_URL + url)
//   }

//   createProfile = async (url: string, data: any) => {
//     return axiosClient.post(BASE_URL + url, data);
//   }
// }

// const handleProfile = new HandleProfil()

// export default handleProfile

import axios, { AxiosInstance } from 'axios'

class HandleProfil {
  constructor(private axiosInstance: AxiosInstance) {}

  async getProfile(url: string) {
    try {
      const response = await this.axiosInstance.get(url)
      return response.data
    } catch (error: any) {
      throw new Error(`Gagal menampilkan data profile: ${error.message}`)
    }
  }

  async createProfile(url: string, data: any) {
    try {
      const response = await this.axiosInstance.post(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(`Failed to create profile: ${error.message}`)
    }
  }
}

const BASE_URL = 'https://dev-api-nabitu.mjscode.pro/api/v1'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*'
    // Tambahkan header lainnya jika diperlukan
  }
})

const handleProfile = new HandleProfil(axiosInstance)

export default handleProfile
