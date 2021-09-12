import axios from "axios";

export const userAlreadyExists = async (userEmail) => {
  const { data: users } = await axios.get('http://localhost:3001/users')
  return users.some(item => item.email === userEmail)
}

export const noDataHasBeenSent = (formData) => !formData.email || !formData.username
