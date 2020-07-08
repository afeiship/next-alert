/*!
 * name: @feizheng/next-alert
 * description: Alert for debug detect platform.
 * homepage: https://github.com/afeiship/next-alert
 * version: 1.0.1
 * date: 2020-07-08T12:12:13.422Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var options = {
    type: 'info',
    indent: 2,
    isMobile: function () {
      return 'ontouchstart' in document.documentElement
    }
  };

  nx.alert = function () {
    var args = nx.slice(arguments);
    if (options.isMobile()) {
      var argRes = args.map(function (arg) {
        return JSON.stringify(arg, null, options.indent)
      })
      alert(argRes.join('\n\n'));
    } else {
      console[options.type].apply(console, arguments);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.alert;
  }
})();
