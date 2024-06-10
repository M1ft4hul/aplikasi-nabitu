'use client'
import React, { createContext, useState, useEffect } from 'react'
import handlePost from '@/app/api/HandlePost'

interface Post {
  id: number
  userId: string
  title: string
  body: string
}

interface PostContextType {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
  loading: boolean
  error: string | null
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  setPosts: () => {},
  loading: false,
  error: null
})
export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const data = await handlePost.getPosts('/posts')
        setPosts(data)
      } catch (error: any) {
        setError(error.message || 'Error fetching posts')
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return <PostContext.Provider value={{ posts, setPosts, loading, error }}>{children}</PostContext.Provider>
}
