import {Command} from 'commander'
import fs from 'fs'
import {readFile} from 'fs/promises'

const program = new Command()

const version = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
).version

program
  .name('mdjl')
  .description('Replace JIRA Issues with a link to them in a markdown file')
  .version(version)
  .command('replace', {isDefault: true})
  .description('Split a string into substrings and display as an array')
  .argument('<file>', 'The .md File')
  .argument('<baseUrl>', 'The base issue url of your jira ')
  .action(async (file, baseUrl) => {
    if (!fs.existsSync(file)) {
      console.log(`${file}does not exists.`)
      process.exit(1)
    }
    const contents = await readFile(file, 'utf-8')
    const jiraRegex = /([A-Z][A-Z0-9]+-[0-9]+)/g
    const links = []
    const newContents = contents
      .split(/\r?\n/)
      .map((line) => {
        const matches = [...line.matchAll(jiraRegex)]

        if (!matches.length) {
          return line;
        }

        const issue = matches[0][0]
        const trimmedUrl = baseUrl.replace(/\/$/, '')
        links.push(`[${issue}]:${trimmedUrl}/${issue}`)

        return line.replace(issue, '[' + issue + ']')
      })
      .join('\n')
      .concat('\n')
      .concat(links.join('\n'))

    fs.unlinkSync(file)
    fs.writeFileSync(file, newContents)
  })

program.parseAsync()
