npm-treatment-tools
============

Helpers for treating npm lock files

Install from npmjs.org:

    npm install -g npm-treatment-tools

## Current commands

 * `npmtt`
   * Runs the npm treatment tool

### npmtt

```
usage: npmtt [-hr]

Options:
  h   print this helpful message
  r   remove `resolved` and `integrity` fields from package-lock.json and/or yarn.lock

What npmtt will do:
 - look for package-lock.json or yarn.lock files
 - remove the `resolved` and `integrity` fields from the file
 - save the file

npmtt will abort if:
 - no lock file is present

Typical usage, if you want to remove the fields:

  npmtt -r

```

#### slt copyright

Looks at all the .js files in the current git repo and adds/updates a
standard copyright notice to the top. The exact wording of the copyright
statement is based on the license declared in package.json, your git author
details, and the first and last commits made to a file (years only).
