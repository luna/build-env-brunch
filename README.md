## build-env-brunch
Allows to pass data from `brunch-config` to the app

## Installation
Install the plugin via npm with `npm install --save build-env-brunch`.

Or, do manual install:

* Add `"build-env-brunch": "x.y.z"` to `package.json` of your brunch app.
  Pick a plugin version that corresponds to your minor (y) brunch version.
* If you want to use git version of plugin, add
`"build-env-brunch": "git+ssh://git@github.com:kfigiela/build--env-brunch.git"`.

## Configuration
You can set the `--bare` option in your brunch config (such as `brunch-config.coffee`):

```coffee

git_commit = ->
  local_changes = (shelljs.exec('git diff-index --quiet HEAD --').code == 1)
  git_hash      = shelljs.exec('git rev-parse HEAD', {silent:true}).output.trim()
  "#{git_hash}#{if local_changes then "-local" else ""}";


exports.config =
  ...
  plugins:
    build_env:
      git_commit: git_commit()
      env: "development"
```

Then create empty file `app/brunch.buildenv` (you may put any comment there, file contents is discarded anyway). When you build the project, the resulting module will be populated with JSON from `brunch-config`.

## License

The MIT License (MIT)

Copyright (c) 2015 Kamil Figiela (http://kfigiela.github.io)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
