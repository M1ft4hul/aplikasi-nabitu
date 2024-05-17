import { prisma } from '@/libs/prisma'

export const getLatihan = async () => {
  try {
    const Latihan = await prisma.konten.findMany()
    return Latihan
  } catch (error) {
    throw new Error('tidak ada data latihan')
  }
}
