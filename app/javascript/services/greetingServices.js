const GREETINGS_API = 'v1/greetings'

const getGreetings = async () => {
	try {
		const response = await fetch(`${GREETINGS_API}`)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}

export default getGreetings