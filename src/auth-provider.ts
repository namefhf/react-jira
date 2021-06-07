import { User } from './screens/project-list/search-panel'
const localStorageKey = '__auth_provider_token'
export const getToken = () => window.localStorage.getItem(localStorageKey)
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}
export const login = (data: { username: string; password: string }) => {}
