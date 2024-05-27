import { getData } from '@/libs/data'
import { Avatar } from '@mui/material'

const TabelDataUser = async () => {
  const data = await getData()
  return data.users.map((item: any, index: any) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <div className='flex items-center gap-4'>
          <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
          <div className='flex flex-col'>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
          </div>
        </div>
      </td>
      <td>{item.age}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>{item.birthDate}</td>
    </tr>
  ))
}

export default TabelDataUser
