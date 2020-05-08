export const setStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || {}
}

export const removeStorage = () => {
  localStorage.removeItem('user')
}