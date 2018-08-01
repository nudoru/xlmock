// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../fonts/overpass.css":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Overpass-Bold.eot":[["Overpass-Bold.d346cf70.eot","../fonts/Overpass-Bold.eot"],"../fonts/Overpass-Bold.eot"],"./Overpass-Bold.woff":[["Overpass-Bold.54ccde84.woff","../fonts/Overpass-Bold.woff"],"../fonts/Overpass-Bold.woff"],"./Overpass-Bold.ttf":[["Overpass-Bold.99d35727.ttf","../fonts/Overpass-Bold.ttf"],"../fonts/Overpass-Bold.ttf"],"./Overpass-Bold-Italic.eot":[["Overpass-Bold-Italic.1597c269.eot","../fonts/Overpass-Bold-Italic.eot"],"../fonts/Overpass-Bold-Italic.eot"],"./Overpass-Bold-Italic.woff":[["Overpass-Bold-Italic.cb18ba2a.woff","../fonts/Overpass-Bold-Italic.woff"],"../fonts/Overpass-Bold-Italic.woff"],"./Overpass-Bold-Italic.ttf":[["Overpass-Bold-Italic.03135e33.ttf","../fonts/Overpass-Bold-Italic.ttf"],"../fonts/Overpass-Bold-Italic.ttf"],"./Overpass-Regular.eot":[["Overpass-Regular.5999dfe4.eot","../fonts/Overpass-Regular.eot"],"../fonts/Overpass-Regular.eot"],"./Overpass-Regular.woff":[["Overpass-Regular.012bfd29.woff","../fonts/Overpass-Regular.woff"],"../fonts/Overpass-Regular.woff"],"./Overpass-Regular.ttf":[["Overpass-Regular.a0f09f4d.ttf","../fonts/Overpass-Regular.ttf"],"../fonts/Overpass-Regular.ttf"],"./Overpass-Italic.eot":[["Overpass-Italic.83357e44.eot","../fonts/Overpass-Italic.eot"],"../fonts/Overpass-Italic.eot"],"./Overpass-Italic.woff":[["Overpass-Italic.5ca19ef5.woff","../fonts/Overpass-Italic.woff"],"../fonts/Overpass-Italic.woff"],"./Overpass-Italic.ttf":[["Overpass-Italic.e9720922.ttf","../fonts/Overpass-Italic.ttf"],"../fonts/Overpass-Italic.ttf"],"./Overpass-Light.eot":[["Overpass-Light.202a7e05.eot","../fonts/Overpass-Light.eot"],"../fonts/Overpass-Light.eot"],"./Overpass-Light.woff":[["Overpass-Light.70385238.woff","../fonts/Overpass-Light.woff"],"../fonts/Overpass-Light.woff"],"./Overpass-Light.ttf":[["Overpass-Light.0b7fe65e.ttf","../fonts/Overpass-Light.ttf"],"../fonts/Overpass-Light.ttf"],"./Overpass-Light-Italic.eot":[["Overpass-Light-Italic.19030694.eot","../fonts/Overpass-Light-Italic.eot"],"../fonts/Overpass-Light-Italic.eot"],"./Overpass-Light-Italic.woff":[["Overpass-Light-Italic.4c643d03.woff","../fonts/Overpass-Light-Italic.woff"],"../fonts/Overpass-Light-Italic.woff"],"./Overpass-Light-Italic.ttf":[["Overpass-Light-Italic.19a7f161.ttf","../fonts/Overpass-Light-Italic.ttf"],"../fonts/Overpass-Light-Italic.ttf"],"./Overpass-ExtraLight.eot":[["Overpass-ExtraLight.7189814d.eot","../fonts/Overpass-ExtraLight.eot"],"../fonts/Overpass-ExtraLight.eot"],"./Overpass-ExtraLight.woff":[["Overpass-ExtraLight.de25bca2.woff","../fonts/Overpass-ExtraLight.woff"],"../fonts/Overpass-ExtraLight.woff"],"./Overpass-ExtraLight.ttf":[["Overpass-ExtraLight.d566641d.ttf","../fonts/Overpass-ExtraLight.ttf"],"../fonts/Overpass-ExtraLight.ttf"],"./Overpass-ExtraLight-Italic.eot":[["Overpass-ExtraLight-Italic.3a0f9a02.eot","../fonts/Overpass-ExtraLight-Italic.eot"],"../fonts/Overpass-ExtraLight-Italic.eot"],"./Overpass-ExtraLight-Italic.woff":[["Overpass-ExtraLight-Italic.a7277ca9.woff","../fonts/Overpass-ExtraLight-Italic.woff"],"../fonts/Overpass-ExtraLight-Italic.woff"],"./Overpass-ExtraLight-Italic.ttf":[["Overpass-ExtraLight-Italic.ad4851f2.ttf","../fonts/Overpass-ExtraLight-Italic.ttf"],"../fonts/Overpass-ExtraLight-Italic.ttf"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '40091' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)