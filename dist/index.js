/*!
 * name: @jswork/next-alert
 * description: Alert for debug detect platform.
 * homepage: https://github.com/afeiship/next-alert
 * version: 1.0.0
 * date: 2020-11-20 18:40:01
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var options = {
    type: 'info',
    indent: 2,
    isMobile: function () {
      return 'ontouchstart' in document.documentElement;
    }
  };

  nx.alert = function () {
    var args = nx.slice(arguments);
    if (options.isMobile()) {
      var argRes = args.map(function (arg) {
        return JSON.stringify(arg, null, options.indent);
      });
      alert(argRes.join('\n\n'));
    } else {
      console[options.type].apply(console, arguments);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.alert;
  }
})();
