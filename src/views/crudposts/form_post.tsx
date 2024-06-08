'use client'
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import styles from '@core/styles/table.module.css'
import { Post } from '@/models/Post'
import handlePost from '@/app/api/HandlePost'

const DataPosts = () => {
  // tampil data dengan axios
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await handlePost.getPosts('/posts')
        setPosts(res)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <Card>
      <CardHeader title='Tabel Data Posts' />
      <div className='overflow-x-auto'>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Body</th>
              <th className='flex justify-center'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td className='flex justify-center gap-1 '>
                  {/* <ButtonsEdit /> */}
                  {/* <ButtosnDetail id={item.id} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default DataPosts
