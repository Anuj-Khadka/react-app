# npm

> Node Package Manager

Visit: <a href="https://docs.npmjs.com/misc/config">NPMDocs</a>

## module

> individual files containing reusable code is called modules.

## package

> a directory with one or more modules with a specia file called "package.json(contains metadata of the modules.)"

## package.json

- manage dependencies of the project
- let's you add scripts that thelps with intial build

```bash
npm init
npm init --yes
npm init -y     # shorthand
```

_set default key-value(both works fine, but this is kind of permanent)_

```bash
npm config set init-author-name "Anuj"
npm set init-license "MIT"
```

_get the value_

```bash
npm get init-author-name
```

_delete default value_

```bash
npm config delete init-author-name
```

_install packages locally_

```bash
npm install <package>
npm i <package>     # shorthand
npm install <package@3.3.3>     # specific version
npm install <package@3.3>     # specific version with latest patch version
npm install <package@3>     # specific version with latest minor version
npm install <package> --save    # add the dependency to the package.json file, production
npm i <package> -S     # shorthand
npm install <package> --save-dev      # just for deelopment purpose and not for production
npm i <package> -D        # shorhand
```

_uninstall the package_

```bash
npm uninstall <package> --save
npm un <package>
npm remove <package>
npm rm <package>
npm uninstall <package> --save-dev  # uninstall devDependency
```

_install package globally_

```bash
npm install <package> -g
```

_update the package_

```bash
npm update <package> --save
npm update      # update all dependencies and devDependencies
npm update --dev --save-dev     # update just the devDependancies
npm update -g       # update all global packages
npm update -g gulp      # update specific global packages
npm install npm@latest -g       # update npm itself
```

_uninstall all unused(extraneous) additional packages_

```bash
npm prune
```

_display the list of all the packages_

```bash
npm list
npm list --depth 1  # list the nested one
npm list --global true  # list of globally installed packages
```

## npm versioning

Here, a package name Lodash is installed and is shown as following in the `package.json` file.

```json
"dependencies":{
    "lodash": "^4.16.1",
}
```

- **the caret sign (^) means stick to the exact major version but get me the latest minor and patch version**
- **the tidle sign (~) means leave the major and minor version as it is, but get the latest version of patch version when npm installed**
- **the star sign (\*) means retrive the latest version of the package irrespective to the major, minor and the patch versions.**

Where,

| 4                                     | 16                                                              | 1                                   |
| ------------------------------------- | --------------------------------------------------------------- | ----------------------------------- |
| major version number                  | minor version number                                            | patch version number                |
| when existing functionality is broken | new feature where the feature won't break existing funtionality | a bug fix or perfomance improvement |
