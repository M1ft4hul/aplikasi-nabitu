'use client'

// React Imports
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// Style Imports
import styles from '@core/styles/table.module.css'
import axios, { AxiosResponse } from 'axios'
import { Avatar } from '@mui/material'
import handlePosts from '@/app/api/HandlePost'
import handleUser from '@/app/api/HandleUser'
import { Post } from '@/models/Post'
import { User } from '@/models/Users'
import { Profil } from '@/models/Profile'
import { ButtonsEdit, ButtosnDetail } from './button'
import handleProfile from '@/app/api/HandleProfil'

const DataUsers = () => {
  // const [posts, setPosts] = useState<Post[]>([]) untuk data post
  // const [users, setUsers] = useState<User[]>([])
  const [users, setUsers] = useState<Profil[]>([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    const api = `/profile`
    // kalau data post `/post`

    try {
      const res: any = await handleProfile.getProfile(api)
      // const res: any = await handleUser.getUsers(api)
      // kalau data post await handlePosts.getPosts(api)

      if (res) {
        setUsers(res)
        // kalau data post jadi setPosts(res)
      } else {
        console.log(`page not found`)
      }
    } catch (error) {
      console.log(`can not get post ${error}`)
    }
  }

  return (
    <Card>
      <CardHeader title='Tabel Data Users' />
      <div className='overflow-x-auto'>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama User</th>
              <th>Umur</th>
              <th>Alamat</th>
              <th className='flex justify-center'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <div className='flex items-center gap-4'>
                      <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
                      <div className='flex flex-col'>
                        <p>{item.fullname}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.age}</td>
                  <td>{item.alamat}</td>
                  <td className='flex justify-center gap-1 '>
                    <ButtonsEdit />
                    <ButtosnDetail id={item.id}/>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default DataUsers
