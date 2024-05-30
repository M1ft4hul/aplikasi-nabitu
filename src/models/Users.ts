export interface User {
  //   id: string
  //   name: string
  //   age: string
  //   alamat: string
  //   created_at: string
  //   updated_at: string
  //   deleted_at: any
  id: number
  name: string
  username: string
  email: string
  website: string
  address: Address
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
}
