import { BASE_URL } from '@/constants/appinfos'
import axiosClient from './axiosClient'

class HandlePost {
  getPosts = async (url: string) => {
    return axiosClient.get(BASE_URL + url)
  }
}

const handlePosts = new HandlePost()

export default handlePosts
