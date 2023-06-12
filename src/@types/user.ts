export interface InitialUserProps {
  name: string
  job: string
  role: 'USER' | 'ADMIN'
  password_hash: string
  email: string
}

export interface UserPropsResponse {
  name: string
  job: string
  id: string
  views: number
  role: 'USER' | 'ADMIN'
  password_hash: string
  email: string
}
