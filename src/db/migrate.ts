import postgres from 'postgres'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { env } from '../env'
import chalk from 'chalk'

const connection = postgres(env.DATABASE_URL, { max: 1 })
const db = drizzle(connection)

await migrate(db, { migrationsFolder: 'drizzle' })
  .then(() => {
    console.log(chalk.greenBright('Migrations ran successfully'))
    process.exit()
  })
  .catch((error) => {
    console.log(chalk.redBright('Error running migrations', error))
    process.exit(1)
  })
  .finally(async () => {
    await connection.end()
  })
