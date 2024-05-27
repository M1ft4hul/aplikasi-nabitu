'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// Style Imports
import styles from '@core/styles/table.module.css'

const DataUsers = ({ contents }: { contents: any }) => {
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
              <th>Email</th>
              <th>Password</th>
              <th>Tanggal Lahir</th>
              <th className='flex justify-center'>Aksi</th>
            </tr>
          </thead>
          <tbody>{contents}</tbody>
        </table>
      </div>
    </Card>
  )
}

export default DataUsers
