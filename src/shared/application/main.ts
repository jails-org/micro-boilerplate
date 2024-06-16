import jails from 'jails-js'
import * as application from '.'

export const dependencies = {
	Data: () => JSON.parse(document.getElementById('data')?.textContent || '{}')
}

export const register = jails.register

export const main = () => {
	jails.register('x-application', application)
	jails.start()
}
