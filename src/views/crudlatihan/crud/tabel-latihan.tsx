import { getLatihan } from '@/libs/data'
import { ButtonsHapus, ButtonsEdit } from '@/views/crudlatihan/button'

const TabelData = async () => {
  const Latihan = await getLatihan()
  return Latihan.map((konten, index) => (
    <tr key={konten.id}>
      <td>{index + 1}</td>
      <td>{konten.judul}</td>
      <td>{konten.isi}</td>
      <td className='flex justify-center gap-1 '>
        <ButtonsHapus id={konten.id} />
        <ButtonsEdit id={konten.id} />
      </td>
    </tr>
  ))
}

export default TabelData
