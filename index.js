var fs   = require('fs')
  , glob = require('glob');

function BuildEnvCompiler(config) {
  var options = config.plugins && config.plugins.build_env;
  this.options = options;
  this.globPattern  = "app/**/*.[jh]s"
}

BuildEnvCompiler.prototype.brunchPlugin = true;
BuildEnvCompiler.prototype.type = 'javascript';
BuildEnvCompiler.prototype.extension = 'buildenv';
BuildEnvCompiler.prototype.compile = function(data, path, callback) {
    var out = {};
    var data = this.options;

    for (var k in data) {
        if (typeof data[k] === 'function') {
            out[k] = data[k]();
        } else {
            out[k] = data[k];
        }
    }
    callback(null, "module.exports = " + JSON.stringify(out) + ";");
};
BuildEnvCompiler.prototype.getDependencies = function(data, path, callback) {
    glob(this.globPattern, {}, function (err, files) {
        callback(null, files);
    });
}

module.exports = BuildEnvCompiler;
