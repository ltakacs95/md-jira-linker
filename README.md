# md-jira-linker

> Find JIRA Issues in markdown files and replace them with a link to the ticket.

JIRA Issues are marked as links in the file, and the corresponding links are appended to the file.

Best used with generated files.

## Usage

```shell
Usage: mdjl [options] [command]

Replace JIRA Issues with a link to them in a markdown file

Options:
  -V, --version             output the version number
  -h, --help                display help for command

  Commands:
    replace <file> <baseUrl>  Split a string into substrings and display as an array (default)
help [command]            display help for command
```

## NPX

With [npm](https://npmjs.org/) installed, you can also use

```
$ npx mdjl
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install md-jira-linker
```

## Future Plans (PRs are welcome)

- Allow command to run multiple times on the same file, without messing up already linked JIRA Issues

## See Also

- [`commitchangelog`](https://github.com/ltakacs95/commitchangelog)

## License

MIT
