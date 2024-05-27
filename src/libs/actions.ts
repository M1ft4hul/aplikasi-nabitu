'use server'

import { z } from 'zod'
import { prisma } from '@/libs/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// buat validasi data jika button simpan berjalan sukses
const LatihanSchema = z.object({
  id: z.string(),
  judul: z
    .string({
      invalid_type_error: 'Please select a customer.'
    })
    .min(5),
  isi: z.string().min(10)
})

export type State = {
  errors?: {
    judul?: string[]
    isi?: string[]
  }
  message?: string | null
}

const CreateLatihans = LatihanSchema.omit({ id: true })
const UpdateLatihans = LatihanSchema.omit({ id: true })
// tambah data
export const saveLatihan = async (prevState: State, formData: FormData) => {
  const validatedField = CreateLatihans.safeParse({
    judul: formData.get('judul'),
    isi: formData.get('isi')
  })

  //   sesudah pakai validasi
  // const validatedField = LatihanSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: 'missing fields, failed to create latihan'
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
    return { message: 'Database tidak konek' }
  }
  revalidatePath('/apps/latihan')
  redirect('/apps/latihan')
}

// edit data
export const updateLatihan = async (id: string, prevState: State, formData: FormData) => {
  //   sesudah pakai validasi
  // const validatedField = LatihanSchema.safeParse(Object.fromEntries(formData.entries()))
  const validatedField = UpdateLatihans.safeParse({
    judul: formData.get('judul'),
    isi: formData.get('isi')
  })

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: 'missing fields, failed to update latihan'
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
    return { message: 'Database tidak konek' }
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

// ambil value yang di inputkan di form (sebelum pakai validasi)
//   const data = Object.fromEntries(formData.entries())

// ampil dulu di terminal tes data tersimpan apa tidak
//   console.log(data)
