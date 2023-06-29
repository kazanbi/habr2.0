export const Posts = () => {
	const apiPost = 'http://localhost:3000/api/user/2'

	const fetchPost = async () => {
		try {
			const res = await fetch(apiPost)
			const data = await res.json()
			console.log(data)
		} catch (error) {
			console.log('Post fetch error ' + error)
		}
	}
}
