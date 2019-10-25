npm-treatment-tools
============

# DEPRECATED
This library has being replaced by https://github.com/Ginxo/lock-treatment-tool

Helpers for treating npm lock files

Install from npmjs.org:

    npm install -g npm-treatment-tools

## Current commands

 * `npmtt`
   * Runs the npm treatment tool

### npmtt

```
usage: npmtt [Options]

Options:
  help   print this helpful message
  remove   remove `resolved` and `integrity` fields from package-lock.json and/or yarn.lock

What npmtt will do:
 - look for package-lock.json or yarn.lock files
 - remove the `resolved` and `integrity` fields from the file
 - save the file

npmtt will abort if:
 - the package-json.lock file format is not correct

npmtt will NOT abort if:
 - the package-json.lock file and/or yarn.lock does not exist

Typical usage, if you want to remove the fields:

  npmtt remove

```

#### copyright

Looks at all the .js files in the current git repo and adds/updates a
standard copyright notice to the top. The exact wording of the copyright
statement is based on the license declared in package.json, your git author
details, and the first and last commits made to a file (years only).
