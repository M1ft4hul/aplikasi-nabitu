import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'
import FormEditLatihan from '@/views/crudlatihan/FormEditLatihan'
import { getLatihanById } from '@/libs/data'
import { notFound } from 'next/navigation'

const EditData = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const latihans = await getLatihanById(id)

  //   membuat validasi
  if (!latihans) {
    notFound()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Form Edit Latihan</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormEditLatihan latihans={latihans} />
      </Grid>
    </Grid>
  )
}
export default EditData
