import { prisma } from '@/libs/prisma'

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
