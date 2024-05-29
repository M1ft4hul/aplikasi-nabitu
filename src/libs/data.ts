import { prisma } from '@/libs/prisma'
import axios from 'axios'

export const getLatihan = async () => {
  try {
    const Latihan = await prisma.konten.findMany()
    return Latihan
  } catch (error) {
    throw new Error('tidak ada data latihan')
  }
}

// membuat data fetching next js

export const getLatihanById = async (id: string) => {
  try {
    const latihans = await prisma.konten.findUnique({
      where: { id }
    })
    return latihans
  } catch (error) {
    throw new Error('tidak ada data latihan')
  }
}

// fetching API users
export const getData = async () => {
  // const [data, setData] = useState([])

  // Vars
  // const res = await fetch('https://dummyjson.com/users')
  // if (!res.ok) {
  //   throw new Error('Failed to fetch userData')
  // }

  // return res.json()
}
