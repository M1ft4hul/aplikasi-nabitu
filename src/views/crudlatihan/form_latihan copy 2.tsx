'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Type Imports
import type { DataType } from './datas'

// Style Imports
import styles from '@core/styles/table.module.css'

// Data Imports
import defaultData from './datas'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const columns = [
  columnHelper.accessor('id', {
    // cell: info => info.getValue(),
    header: 'ID'
  }),
  columnHelper.accessor('judul', {
    // cell: info => info.getValue(),
    header: 'Judul'
  }),
  columnHelper.accessor('isi', {
    // cell: info => info.getValue(),
    header: 'Isi'
  })
]

const FormLatihan = ({content}) => {
  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...defaultData])

  // Hooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader title='Basic Table' />
      <div className='overflow-x-auto'>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Isi</th>
              <th className='flex justify-center'>Aksi</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </Card>
  )
}

export default FormLatihan
