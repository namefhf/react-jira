import { useEffect } from 'react'

export const isFalsy = (value) => (value === 0 ? false : !value)
export const cleanObj = (obj) => {
  const result = { ...obj }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    isFalsy(value) && delete result[key]
  })
  return result
}
export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}
