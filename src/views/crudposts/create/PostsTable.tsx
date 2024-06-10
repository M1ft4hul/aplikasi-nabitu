import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import styles from '@core/styles/table.module.css'

interface Post {
  id: number
  userId: string
  title: string
  body: string
}

interface PostsTableProps {
  posts: Post[]
}

const PostsTable: React.FC<PostsTableProps> = ({ posts }) => {
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
            {posts.map(item => (
              <tr key={item.id}>
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

export default PostsTable
