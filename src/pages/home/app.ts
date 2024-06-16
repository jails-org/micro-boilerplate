
export default function home ({ main, on, state, dependencies }) {

	const { Data } = dependencies
	const data = Data()

	main(_ => {

		on('click', '[data-plus]', add)
		on('click', '[data-minus]', subtract)

		console.log('API Data', data)
	})

	const add = () => {
		state.set( s => s.counter++ )
	}

	const subtract = () => {
		state.set( s => s.counter-- )
	}
}

export const model = {
	counter: 0
}
