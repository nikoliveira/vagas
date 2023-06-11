export interface CreateUserProps {
  name: string
  job: string
}

export interface UserProps extends CreateUserProps {
  id: string
}
