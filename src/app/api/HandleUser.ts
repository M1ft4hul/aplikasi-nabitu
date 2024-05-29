import { BASE_URL } from '@/constants/appinfos'
import axiosClient from './axiosClient'

class HandleUser {
  getUsers = async (url: string) => {
    return axiosClient.get(BASE_URL + url)
  }
}

const handleUser = new HandleUser()

export default handleUser
