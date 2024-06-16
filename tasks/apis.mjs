import fs from 'fs'
import apis from '../api/index.mjs'

const isDev = process.env.NODE_ENV === 'dev'
const API = await apis()

const config = {
	basedir: './src',
	pretty : isDev,
	locals: { API }
}

fs.writeFileSync(
	'./.pugrc', 
	JSON.stringify(config, null, isDev? 4 : null), 
	'utf-8'
)
