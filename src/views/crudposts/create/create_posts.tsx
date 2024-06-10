'use client'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import CardActions from '@mui/material/CardActions'
import { useRouter } from 'next/navigation'
import { Post } from '@/models/Post'
import { ChangeEvent, useContext, useState } from 'react'
import handlePost from '@/app/api/HandlePost'
import { ButtonsReset, ButtonsSimpan } from '../button'
import { PostContext } from '@/contexts/PostContext'

const FormInputPost = () => {
  // tambah data dengan axios
  const { posts, setPosts } = useContext(PostContext)
  const router = useRouter()
  const [newPost, setNewPost] = useState({
    userId: '1',
    title: '',
    body: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewPost({ ...newPost, [name]: value })
  }

  const handleAddPost = async (newPost: any) => {
    try {
      const res = await handlePost.createPosts('/posts', newPost)
      setPosts([...posts, res])
      console.log('Post added successfully:', res)
      setNewPost({
        userId: '1',
        title: '',
        body: ''
      })
      router.push('/apps/posts')
    } catch (error) {
      console.error('Error adding posts:', error)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    handleAddPost(newPost)
  }

  return (
    <Card>
      <CardHeader title='Tambah User' />
      <Divider />
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='body2' className='font-medium'>
                Silahkan input data posts
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Title'
                placeholder='Silahkan Isi Title '
                name='title'
                id='title'
                value={newPost.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Isi'
                placeholder='Silahkan Isi data'
                name='body'
                id='body'
                value={newPost.body}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <ButtonsSimpan label='save' />
          <ButtonsReset />
        </CardActions>
      </form>
    </Card>
  )
}

export default FormInputPost
