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
