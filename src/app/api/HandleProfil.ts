import { BASE_URL } from '@/constants/appinfos'
import axiosClient from './axiosClient'

class HandleProfil {
  getProfile = async (url: string) => {
    return axiosClient.get(BASE_URL + url)
  }
}

const handleProfile = new HandleProfil()

export default handleProfile
