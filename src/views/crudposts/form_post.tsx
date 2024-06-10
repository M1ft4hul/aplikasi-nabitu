'use client'
import { useContext, useEffect, useState } from 'react'

import PostsTable from './create/PostsTable'
import { PostContext } from '@/contexts/PostContext'

const DataPosts = () => {
  const postContext = useContext(PostContext)

  if (!postContext) {
    return (
      <div>
        Loading... Mohon Menunggu <i className='tabler-alert-circle-filled' />
      </div>
    )
  }
  const { posts } = useContext(PostContext)

  return <PostsTable posts={posts} />
}

export default DataPosts
