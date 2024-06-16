import axios from 'axios'

export default async () => {
	return {
		users : await getUsers()
	}
}

const getUsers = async () => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
	return data
}
