import { main, register, dependencies } from 'shared/application/main'
import * as home from './app'

register('app-home', home, { ...dependencies })

main()
