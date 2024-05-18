'use server'

import { z } from 'zod'
import { prisma } from '@/libs/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// buat validasi data jika button simpan berjalan sukses
const LatihanSchema = z.object({
  judul: z.string().min(5),
  isi: z.string().min(10)
})

// tambah data
export const saveLatihan = async (prevState: any, formData: FormData) => {
  // ambil value yang di inputkan di form (sebelum pakai validasi)
  //   const data = Object.fromEntries(formData.entries())

  // ampil dulu di terminal tes data tersimpan apa tidak
  //   console.log(data)

  //   sesudah pakai validasi
  const validatedField = LatihanSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedField.success) {
    return {
      Error: validatedField.error.flatten().fieldErrors
    }
  }
  // simpan ke database (tambah data)
  try {
    await prisma.konten.create({
      data: {
        judul: validatedField.data.judul,
        isi: validatedField.data.isi
      }
    })
  } catch (error) {
    return { message: 'Latihan gagal di simpan' }
  }
  revalidatePath('/apps/latihan')
  redirect('/apps/latihan')
}

// edit data
export const updateLatihan = async (id: string, prevState: any, formData: FormData) => {
  //   sesudah pakai validasi
  const validatedField = LatihanSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedField.success) {
    return {
      Error: validatedField.error.flatten().fieldErrors
    }
  }
  // simpan ke database (edit data)
  try {
    await prisma.konten.update({
      data: {
        judul: validatedField.data.judul,
        isi: validatedField.data.isi
      },
      where: { id }
    })
  } catch (error) {
    return { message: 'Latihan gagal di update' }
  }
  revalidatePath('/apps/latihan')
  redirect('/apps/latihan')
}

// hapus data
export const deleteLatihan = async (id: string) => {
  // simpan ke database (edit data)
  try {
    await prisma.konten.delete({
      where: { id }
    })
  } catch (error) {
    return { message: 'Latihan gagal di hapus' }
  }
  revalidatePath('/apps/latihan')
}
