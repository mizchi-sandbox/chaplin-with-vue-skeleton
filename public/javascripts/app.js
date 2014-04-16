(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("application", function(exports, require, module) {
var Application, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

module.exports = Application = (function(_super) {
  __extends(Application, _super);

  function Application() {
    _ref = Application.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Application;

})(Chaplin.Application);
});

;require.register("components/bar/index", function(exports, require, module) {
Vue.component('bar', module.exports = Vue.extend({
  template: (require('./template'))()
}));
});

;require.register("components/bar/template", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"bar\">bar</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("components/base/component", function(exports, require, module) {
module.exports = Vue.extend({
  methods: {}
});

Vue.prototype.dispose = function() {
  return this.$destroy();
};
});

;require.register("components/foo/index", function(exports, require, module) {
var Component;

Component = require('components/base/component');

Vue.component('foo', module.exports = Component.extend({
  template: (require('./template'))()
}));
});

;require.register("components/foo/template", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"foo\">foo</div>ああああああああ");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("components/layout/index", function(exports, require, module) {
var Component;

Component = require('components/base/component');

Vue.component('layout', module.exports = Component.extend({
  template: (require('./template'))()
}));
});

;require.register("components/layout/template", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"layout\">layout</div><foo></foo><bar></bar><p><a href=\"/\">/</a></p><p><a href=\"/foo\">/foo</a></p><p><a href=\"/bar\">/bar</a></p>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("controllers/bar-controller", function(exports, require, module) {
var BarController, Controller, Foo, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('controllers/base/controller');

Foo = require('components/foo');

module.exports = BarController = (function(_super) {
  __extends(BarController, _super);

  function BarController() {
    _ref = BarController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  BarController.prototype.index = function() {
    var foo;
    foo = this.reuse('foo', Foo);
    return foo.$appendTo('body');
  };

  return BarController;

})(Controller);
});

;require.register("controllers/base/controller", function(exports, require, module) {
var Controller, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

module.exports = Controller = (function(_super) {
  __extends(Controller, _super);

  function Controller() {
    _ref = Controller.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Controller.prototype.beforeAction = function() {};

  return Controller;

})(Chaplin.Controller);
});

;require.register("controllers/foo-controller", function(exports, require, module) {
var Controller, Foo, FooController, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('controllers/base/controller');

Foo = require('components/foo');

module.exports = FooController = (function(_super) {
  __extends(FooController, _super);

  function FooController() {
    _ref = FooController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  FooController.prototype.index = function() {
    var foo;
    console.log('foo');
    foo = this.reuse('foo', Foo);
    return foo.$appendTo('body');
  };

  return FooController;

})(Controller);
});

;require.register("controllers/home-controller", function(exports, require, module) {
var Controller, HomeController, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('controllers/base/controller');

module.exports = HomeController = (function(_super) {
  __extends(HomeController, _super);

  function HomeController() {
    _ref = HomeController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  HomeController.prototype.index = function() {
    return console.log('home');
  };

  return HomeController;

})(Controller);
});

;require.register("initialize", function(exports, require, module) {
var Application, Layout, routes;

require('components/foo');

require('components/bar');

Layout = require('components/layout');

Application = require('application');

routes = require('routes');

$(function() {
  var layout;
  layout = new Layout;
  layout.$appendTo('body');
  return new Application({
    title: 'app',
    controllerSuffix: '-controller',
    routes: routes
  });
});
});

;require.register("routes", function(exports, require, module) {
module.exports = function(match) {
  match('', 'home#index');
  match('foo', 'foo#index');
  return match('bar', 'bar#index');
};
});

;
//# sourceMappingURL=app.js.map