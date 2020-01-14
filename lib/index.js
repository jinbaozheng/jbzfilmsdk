'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));
var moment = _interopDefault(require('moment'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios$$1 = _interopDefault(axios);
var moment$$1 = _interopDefault(moment);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var commonjsGlobal$$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var urlPattern = createCommonjsModule$$1(function (module, exports) {
// Generated by CoffeeScript 1.10.0
var slice = [].slice;

(function(root, factory) {
  if ( exports !== null) {
    return module.exports = factory();
  } else {
    return root.UrlPattern = factory();
  }
})(commonjsGlobal$$1, function() {
  var P, UrlPattern, astNodeContainsSegmentsForProvidedParams, astNodeToNames, astNodeToRegexString, baseAstNodeToRegexString, concatMap, defaultOptions, escapeForRegex, getParam, keysAndValuesToObject, newParser, regexGroupCount, stringConcatMap, stringify;
  escapeForRegex = function(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };
  concatMap = function(array, f) {
    var i, length, results;
    results = [];
    i = -1;
    length = array.length;
    while (++i < length) {
      results = results.concat(f(array[i]));
    }
    return results;
  };
  stringConcatMap = function(array, f) {
    var i, length, result;
    result = '';
    i = -1;
    length = array.length;
    while (++i < length) {
      result += f(array[i]);
    }
    return result;
  };
  regexGroupCount = function(regex) {
    return (new RegExp(regex.toString() + '|')).exec('').length - 1;
  };
  keysAndValuesToObject = function(keys, values) {
    var i, key, length, object, value;
    object = {};
    i = -1;
    length = keys.length;
    while (++i < length) {
      key = keys[i];
      value = values[i];
      if (value == null) {
        continue;
      }
      if (object[key] != null) {
        if (!Array.isArray(object[key])) {
          object[key] = [object[key]];
        }
        object[key].push(value);
      } else {
        object[key] = value;
      }
    }
    return object;
  };
  P = {};
  P.Result = function(value, rest) {
    this.value = value;
    this.rest = rest;
  };
  P.Tagged = function(tag, value) {
    this.tag = tag;
    this.value = value;
  };
  P.tag = function(tag, parser) {
    return function(input) {
      var result, tagged;
      result = parser(input);
      if (result == null) {
        return;
      }
      tagged = new P.Tagged(tag, result.value);
      return new P.Result(tagged, result.rest);
    };
  };
  P.regex = function(regex) {
    return function(input) {
      var matches, result;
      matches = regex.exec(input);
      if (matches == null) {
        return;
      }
      result = matches[0];
      return new P.Result(result, input.slice(result.length));
    };
  };
  P.sequence = function() {
    var parsers;
    parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return function(input) {
      var i, length, parser, rest, result, values;
      i = -1;
      length = parsers.length;
      values = [];
      rest = input;
      while (++i < length) {
        parser = parsers[i];
        result = parser(rest);
        if (result == null) {
          return;
        }
        values.push(result.value);
        rest = result.rest;
      }
      return new P.Result(values, rest);
    };
  };
  P.pick = function() {
    var indexes, parsers;
    indexes = arguments[0], parsers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return function(input) {
      var array, result;
      result = P.sequence.apply(P, parsers)(input);
      if (result == null) {
        return;
      }
      array = result.value;
      result.value = array[indexes];
      return result;
    };
  };
  P.string = function(string) {
    var length;
    length = string.length;
    return function(input) {
      if (input.slice(0, length) === string) {
        return new P.Result(string, input.slice(length));
      }
    };
  };
  P.lazy = function(fn) {
    var cached;
    cached = null;
    return function(input) {
      if (cached == null) {
        cached = fn();
      }
      return cached(input);
    };
  };
  P.baseMany = function(parser, end, stringResult, atLeastOneResultRequired, input) {
    var endResult, parserResult, rest, results;
    rest = input;
    results = stringResult ? '' : [];
    while (true) {
      if (end != null) {
        endResult = end(rest);
        if (endResult != null) {
          break;
        }
      }
      parserResult = parser(rest);
      if (parserResult == null) {
        break;
      }
      if (stringResult) {
        results += parserResult.value;
      } else {
        results.push(parserResult.value);
      }
      rest = parserResult.rest;
    }
    if (atLeastOneResultRequired && results.length === 0) {
      return;
    }
    return new P.Result(results, rest);
  };
  P.many1 = function(parser) {
    return function(input) {
      return P.baseMany(parser, null, false, true, input);
    };
  };
  P.concatMany1Till = function(parser, end) {
    return function(input) {
      return P.baseMany(parser, end, true, true, input);
    };
  };
  P.firstChoice = function() {
    var parsers;
    parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return function(input) {
      var i, length, parser, result;
      i = -1;
      length = parsers.length;
      while (++i < length) {
        parser = parsers[i];
        result = parser(input);
        if (result != null) {
          return result;
        }
      }
    };
  };
  newParser = function(options) {
    var U;
    U = {};
    U.wildcard = P.tag('wildcard', P.string(options.wildcardChar));
    U.optional = P.tag('optional', P.pick(1, P.string(options.optionalSegmentStartChar), P.lazy(function() {
      return U.pattern;
    }), P.string(options.optionalSegmentEndChar)));
    U.name = P.regex(new RegExp("^[" + options.segmentNameCharset + "]+"));
    U.named = P.tag('named', P.pick(1, P.string(options.segmentNameStartChar), P.lazy(function() {
      return U.name;
    })));
    U.escapedChar = P.pick(1, P.string(options.escapeChar), P.regex(/^./));
    U["static"] = P.tag('static', P.concatMany1Till(P.firstChoice(P.lazy(function() {
      return U.escapedChar;
    }), P.regex(/^./)), P.firstChoice(P.string(options.segmentNameStartChar), P.string(options.optionalSegmentStartChar), P.string(options.optionalSegmentEndChar), U.wildcard)));
    U.token = P.lazy(function() {
      return P.firstChoice(U.wildcard, U.optional, U.named, U["static"]);
    });
    U.pattern = P.many1(P.lazy(function() {
      return U.token;
    }));
    return U;
  };
  defaultOptions = {
    escapeChar: '\\',
    segmentNameStartChar: ':',
    segmentValueCharset: 'a-zA-Z0-9-_~ %',
    segmentNameCharset: 'a-zA-Z0-9',
    optionalSegmentStartChar: '(',
    optionalSegmentEndChar: ')',
    wildcardChar: '*'
  };
  baseAstNodeToRegexString = function(astNode, segmentValueCharset) {
    if (Array.isArray(astNode)) {
      return stringConcatMap(astNode, function(node) {
        return baseAstNodeToRegexString(node, segmentValueCharset);
      });
    }
    switch (astNode.tag) {
      case 'wildcard':
        return '(.*?)';
      case 'named':
        return "([" + segmentValueCharset + "]+)";
      case 'static':
        return escapeForRegex(astNode.value);
      case 'optional':
        return '(?:' + baseAstNodeToRegexString(astNode.value, segmentValueCharset) + ')?';
    }
  };
  astNodeToRegexString = function(astNode, segmentValueCharset) {
    if (segmentValueCharset == null) {
      segmentValueCharset = defaultOptions.segmentValueCharset;
    }
    return '^' + baseAstNodeToRegexString(astNode, segmentValueCharset) + '$';
  };
  astNodeToNames = function(astNode) {
    if (Array.isArray(astNode)) {
      return concatMap(astNode, astNodeToNames);
    }
    switch (astNode.tag) {
      case 'wildcard':
        return ['_'];
      case 'named':
        return [astNode.value];
      case 'static':
        return [];
      case 'optional':
        return astNodeToNames(astNode.value);
    }
  };
  getParam = function(params, key, nextIndexes, sideEffects) {
    var index, maxIndex, result, value;
    if (sideEffects == null) {
      sideEffects = false;
    }
    value = params[key];
    if (value == null) {
      if (sideEffects) {
        throw new Error("no values provided for key `" + key + "`");
      } else {
        return;
      }
    }
    index = nextIndexes[key] || 0;
    maxIndex = Array.isArray(value) ? value.length - 1 : 0;
    if (index > maxIndex) {
      if (sideEffects) {
        throw new Error("too few values provided for key `" + key + "`");
      } else {
        return;
      }
    }
    result = Array.isArray(value) ? value[index] : value;
    if (sideEffects) {
      nextIndexes[key] = index + 1;
    }
    return result;
  };
  astNodeContainsSegmentsForProvidedParams = function(astNode, params, nextIndexes) {
    var i, length;
    if (Array.isArray(astNode)) {
      i = -1;
      length = astNode.length;
      while (++i < length) {
        if (astNodeContainsSegmentsForProvidedParams(astNode[i], params, nextIndexes)) {
          return true;
        }
      }
      return false;
    }
    switch (astNode.tag) {
      case 'wildcard':
        return getParam(params, '_', nextIndexes, false) != null;
      case 'named':
        return getParam(params, astNode.value, nextIndexes, false) != null;
      case 'static':
        return false;
      case 'optional':
        return astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes);
    }
  };
  stringify = function(astNode, params, nextIndexes) {
    if (Array.isArray(astNode)) {
      return stringConcatMap(astNode, function(node) {
        return stringify(node, params, nextIndexes);
      });
    }
    switch (astNode.tag) {
      case 'wildcard':
        return getParam(params, '_', nextIndexes, true);
      case 'named':
        return getParam(params, astNode.value, nextIndexes, true);
      case 'static':
        return astNode.value;
      case 'optional':
        if (astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes)) {
          return stringify(astNode.value, params, nextIndexes);
        } else {
          return '';
        }
    }
  };
  UrlPattern = function(arg1, arg2) {
    var groupCount, options, parsed, parser, withoutWhitespace;
    if (arg1 instanceof UrlPattern) {
      this.isRegex = arg1.isRegex;
      this.regex = arg1.regex;
      this.ast = arg1.ast;
      this.names = arg1.names;
      return;
    }
    this.isRegex = arg1 instanceof RegExp;
    if (!(('string' === typeof arg1) || this.isRegex)) {
      throw new TypeError('argument must be a regex or a string');
    }
    if (this.isRegex) {
      this.regex = arg1;
      if (arg2 != null) {
        if (!Array.isArray(arg2)) {
          throw new Error('if first argument is a regex the second argument may be an array of group names but you provided something else');
        }
        groupCount = regexGroupCount(this.regex);
        if (arg2.length !== groupCount) {
          throw new Error("regex contains " + groupCount + " groups but array of group names contains " + arg2.length);
        }
        this.names = arg2;
      }
      return;
    }
    if (arg1 === '') {
      throw new Error('argument must not be the empty string');
    }
    withoutWhitespace = arg1.replace(/\s+/g, '');
    if (withoutWhitespace !== arg1) {
      throw new Error('argument must not contain whitespace');
    }
    options = {
      escapeChar: (arg2 != null ? arg2.escapeChar : void 0) || defaultOptions.escapeChar,
      segmentNameStartChar: (arg2 != null ? arg2.segmentNameStartChar : void 0) || defaultOptions.segmentNameStartChar,
      segmentNameCharset: (arg2 != null ? arg2.segmentNameCharset : void 0) || defaultOptions.segmentNameCharset,
      segmentValueCharset: (arg2 != null ? arg2.segmentValueCharset : void 0) || defaultOptions.segmentValueCharset,
      optionalSegmentStartChar: (arg2 != null ? arg2.optionalSegmentStartChar : void 0) || defaultOptions.optionalSegmentStartChar,
      optionalSegmentEndChar: (arg2 != null ? arg2.optionalSegmentEndChar : void 0) || defaultOptions.optionalSegmentEndChar,
      wildcardChar: (arg2 != null ? arg2.wildcardChar : void 0) || defaultOptions.wildcardChar
    };
    parser = newParser(options);
    parsed = parser.pattern(arg1);
    if (parsed == null) {
      throw new Error("couldn't parse pattern");
    }
    if (parsed.rest !== '') {
      throw new Error("could only partially parse pattern");
    }
    this.ast = parsed.value;
    this.regex = new RegExp(astNodeToRegexString(this.ast, options.segmentValueCharset));
    this.names = astNodeToNames(this.ast);
  };
  UrlPattern.prototype.match = function(url) {
    var groups, match;
    match = this.regex.exec(url);
    if (match == null) {
      return null;
    }
    groups = match.slice(1);
    if (this.names) {
      return keysAndValuesToObject(this.names, groups);
    } else {
      return groups;
    }
  };
  UrlPattern.prototype.stringify = function(params) {
    if (params == null) {
      params = {};
    }
    if (this.isRegex) {
      throw new Error("can't stringify patterns generated from a regex");
    }
    if (params !== Object(params)) {
      throw new Error("argument must be an object or undefined");
    }
    return stringify(this.ast, params, {});
  };
  UrlPattern.escapeForRegex = escapeForRegex;
  UrlPattern.concatMap = concatMap;
  UrlPattern.stringConcatMap = stringConcatMap;
  UrlPattern.regexGroupCount = regexGroupCount;
  UrlPattern.keysAndValuesToObject = keysAndValuesToObject;
  UrlPattern.P = P;
  UrlPattern.newParser = newParser;
  UrlPattern.defaultOptions = defaultOptions;
  UrlPattern.astNodeToRegexString = astNodeToRegexString;
  UrlPattern.astNodeToNames = astNodeToNames;
  UrlPattern.getParam = getParam;
  UrlPattern.astNodeContainsSegmentsForProvidedParams = astNodeContainsSegmentsForProvidedParams;
  UrlPattern.stringify = stringify;
  return UrlPattern;
});
});

/**
 * 网络地址工具类
 */
var UrlTool = /** @class */ (function () {
    function UrlTool() {
    }
    /**
     * 合成URL完整地址
     * @param baseUrl 基础地址
     * @param subUrl 相对地址
     * @param parameters 参数
     * @returns 返回拼接后的地址
     */
    UrlTool.urlFromPortion = function (baseUrl, subUrl, parameters) {
        if (!parameters) {
            parameters = {};
        }
        var params = [];
        for (var key in parameters) {
            if (!parameters.hasOwnProperty(key)) {
                continue;
            }
            if (parameters[key] !== undefined) {
                params.push(key + '=' + parameters[key]);
            }
        }
        var iUrl = baseUrl + subUrl;
        if (params.length > 0) {
            iUrl = iUrl + '?' + params.join('&');
        }
        return iUrl;
    };
    /**
     * 分析Url并解析为对象结构
     * @param url 待分析Url
     * @param options 分析Url配置
     * @return 返回解析后的结果，url无效时返回Null
     */
    UrlTool.portionFromUrl = function (url, options) {
        options = __assign({ complete: false }, options);
        try {
            var urlObj = null;
            try {
                urlObj = new URL(url);
            }
            catch (e) {
                return null;
            }
            if (urlObj) {
                var _getKV = function (obj) {
                    var queryMap = {};
                    if (obj) {
                        for (var _i = 0, _a = obj.split('&'); _i < _a.length; _i++) {
                            var kv = _a[_i];
                            var kv_l = kv.split('=');
                            if (kv_l.length < 2)
                                continue;
                            queryMap[kv_l[0]] = kv_l[1];
                        }
                    }
                    return queryMap;
                };
                var query = new urlPattern(/^\??(.*)$/, ['query']).match(urlObj.search).query;
                var queryMap = _getKV(query);
                var hashObj = new urlPattern(/^#?(([\w-]*(\/)?)+)?((\?)+(.*))?$/, ['hashpath', '', '', 'hashsearch', '', '_hashsearch']).match(urlObj.hash);
                var hashMap = _getKV(hashObj._hashsearch);
                var p = {
                    host: urlObj.host,
                    href: urlObj.href,
                    pathname: urlObj.pathname,
                    protocol: urlObj.protocol,
                    query: queryMap,
                    hashpath: hashObj.hashpath,
                    hashquery: hashMap
                };
                if (options.complete) {
                    p = __assign(__assign({}, p), { origin: urlObj.origin, hostname: urlObj.hostname, port: urlObj.port, search: urlObj.search, username: urlObj.username, password: urlObj.password, hashsearch: hashObj.hashsearch, hash: urlObj.hash });
                }
                return p;
            }
            else {
                return null;
            }
        }
        catch (e) {
            throw e;
        }
    };
    return UrlTool;
}());

var DEFAULT_DELEGATE = {
    globalParams: function () { },
    globalHeaders: function () { },
    globalBodyData: function () { },
    requestInterceptor: function (config) {
        // Do something before request is sent
        console.log(config.method + "  " + UrlTool.urlFromPortion(config.url, '', config.params));
        return config;
    },
    requestInterceptorError: function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
    responseInterceptor: function (response) {
        // Do something with response data
        return response;
    },
    responseInterceptorError: function (error) {
        // Do something with response error
        return Promise.reject(error);
    },
    responseDataInterceptor: function (data, response) {
        return data;
    },
    responseErrorInterceptor: function (error, response) {
        return error;
    }
};

var CancelPromiseFactory = /** @class */ (function () {
    function CancelPromiseFactory(args) {
        return __assign(__assign({}, new Promise(args)), { terminate: function () { } });
    }
    CancelPromiseFactory.createJPromise = function (para) {
        var promise = null;
        if (typeof para == "function") {
            promise = new Promise(para);
        }
        else {
            promise = para;
        }
        var hasCanceled_ = false;
        var wrappedPromise = new Promise(function (resolve, reject) {
            promise.then(function (val) { return hasCanceled_
                ? function () {
                }
                : resolve(val); }, function () {
                // 不写会有警告
            });
            promise.catch(function (error) { return hasCanceled_
                ? function () {
                }
                : reject(error); });
        });
        wrappedPromise.terminate = function () {
            hasCanceled_ = true;
        };
        return wrappedPromise;
    };
    return CancelPromiseFactory;
}());

/**
 * Created by cuppi on 2017/5/10.
 */
/**
 * 对象工具类
 */
var ObjectTool = /** @class */ (function () {
    function ObjectTool() {
    }
    /**
     * 删除对象某个属性
     * @param target 对象
     * @param propertyKey 属性
     * @returns 是否删除成功
     */
    ObjectTool.deleteProperty = function (target, propertyKey) {
        if (target) {
            return Reflect.deleteProperty(target, propertyKey);
        }
        return true;
    };
    /**
     * 安全的获取链式属性 eg: a.b.c.d
     * @param target 目标对象
     * @param pChain 对象链式属性
     * @returns {*}
     */
    ObjectTool.safeGet = function (target) {
        var pChain = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            pChain[_i - 1] = arguments[_i];
        }
        if (!target || !pChain || pChain.length <= 0) {
            return undefined;
        }
        var property = target;
        var chainIndex = 0;
        do {
            property = property[pChain[chainIndex++]];
        } while (property && (chainIndex < pChain.length));
        return chainIndex === pChain.length ? property : undefined;
    };
    ObjectTool.isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    /**
     * 如果未知参数是对象 f返回该对象 如果是方法 则返回方法该方法的运行结果
     * @param obj 未知参数
     * @param args 如果是方法，则为方法参数
     */
    ObjectTool.getObjOrFuncResult = function (obj) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var o = null;
        if (obj) {
            if (typeof obj == "function") {
                o = obj.apply(void 0, args);
            }
            if (typeof obj == "object") {
                o = obj;
            }
        }
        return o || {};
    };
    return ObjectTool;
}());

var REQUESTER_COUNT = 0;
var JRequester = /** @class */ (function () {
    function JRequester(method, baseUrl, url, parameters, headers, bodyData, otherObject, delegate) {
        this.method = method;
        this.baseUrl = baseUrl;
        this.url = url;
        this.parameters = parameters;
        this.headers = headers;
        this.bodyData = bodyData;
        this.otherObject = otherObject;
        this.delegate = delegate;
        this.requesterId = ++REQUESTER_COUNT;
    }
    /**
     * 包裹可取消的请求 （使用fetch请求时使用，目前通过axios请求，无需使用）
     * @private
     * @param promise 异步请求块
     * @returns {Promise} 被包裹后的异步请求块
     */
    JRequester.wrapCancelablePromise = function (promise) {
        return CancelPromiseFactory.createJPromise(promise);
    };
    /**
     * 发送请求
     * @param method 方法类型
     * @param baseUrl 基地址
     * @param url 相对地址
     * @param parameters 参数
     * @param bodyData data参数
     * @param headers 头参数
     * @param otherObject 其他相关设置
     * @param delegate 网络请求代理
     * @returns {CancelPromiseFactory<any>}
     */
    JRequester.create = function (method, baseUrl, url, parameters, bodyData, headers, otherObject, delegate) {
        var requester = new JRequester(method, baseUrl, url, parameters, headers, bodyData, otherObject, delegate);
        if (ObjectTool.isEmptyObject(bodyData)) {
            bodyData = null;
        }
        var axiosProps = __assign({ method: method, params: parameters, baseURL: baseUrl, data: bodyData, headers: headers }, otherObject);
        /**
         * 只传指定的属性 或 忽略某些属性
         * 只传 a 参数 头参数正常
         * specific: {
         *     params: ['a']
         * }
         * 参数 a 将被忽略
         * ignore: {
         *  params: ['a']
         * }
         */
        if (otherObject.hasOwnProperty('specific') || otherObject.hasOwnProperty('ignore')) {
            [{ k: 'params', ak: 'params' }, { k: 'headers', ak: 'headers' }, { k: 'bodyData', ak: 'data' }].forEach(function (_) {
                var specV = otherObject.specific ? otherObject.specific[_.k] : null;
                var ignoV = otherObject.ignore ? otherObject.ignore[_.k] : null;
                var apl = Object.keys(axiosProps[_.ak]) || [];
                specV && (axiosProps[_.ak] = apl
                    .filter(function (_) { return specV.some(function (__) { return _ === __; }); })
                    .map(function (k) { return ({ k: k, v: axiosProps[_.ak][k] }); })
                    .reduce(function (_, _a) {
                    var _b;
                    var k = _a.k, v = _a.v;
                    return (__assign(__assign({}, _), (_b = {}, _b[k] = v, _b)));
                }, {}));
                ignoV && (axiosProps[_.ak] = apl
                    .filter(function (_) { return ignoV.some(function (__) { return _ !== __; }); })
                    .map(function (k) { return ({ k: k, v: axiosProps[_.ak][k] }); })
                    .reduce(function (_, _a) {
                    var _b;
                    var k = _a.k, v = _a.v;
                    return (__assign(__assign({}, _), (_b = {}, _b[k] = v, _b)));
                }, {}));
            });
        }
        var jaxios = axios$$1.create(axiosProps);
        delegate = __assign(__assign({}, DEFAULT_DELEGATE), (delegate || {}));
        requester.jaxios = jaxios;
        jaxios.interceptors.request.use(function (config) {
            config.params = __assign({}, parameters);
            config.headers = __assign({}, headers);
            return delegate.requestInterceptor(config);
        }, function (error) {
            return delegate.requestInterceptorError(error);
        });
        jaxios.interceptors.response.use(function (response) {
            return delegate.responseInterceptor(response);
        }, function (error) {
            return delegate.responseInterceptorError(error);
        });
        return requester;
    };
    JRequester.prototype.request = function () {
        var _this = this;
        return CancelPromiseFactory.createJPromise(function (resolve, reject) {
            _this.jaxios.request({ url: _this.url }).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    JRequester.prototype.repeat = function () {
        var _this = this;
        return CancelPromiseFactory.createJPromise(function (resolve, reject) {
            _this.jaxios.request({ url: _this.url }).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    return JRequester;
}());

var DEFAULT_CONFIG = {
    baseUrl: '',
    delegate: DEFAULT_DELEGATE,
    carryParams: {},
    carryHeaders: {},
    carryBodyData: {},
    axiosConfig: {
        timeout: 10 * 1000
    },
    otherContent: null
};

/**
 * @private
 */
var Jparam = /** @class */ (function () {
    function Jparam() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this._params = [];
        for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
            var para = params_1[_a];
            this._params.push(para);
        }
        this.isJpara = true;
    }
    Jparam.prototype.items = function () {
        return this._params;
    };
    Jparam.emptyPara = function () {
        return new Jparam();
    };
    return Jparam;
}());
/**
 * 辅助任务类
 * @private
 */
var Jtask = /** @class */ (function () {
    function Jtask(task, paramsPicker, resolve, reject) {
        this._task = task;
        this._resolve = resolve;
        this._reject = reject;
        this._paramsPicker = paramsPicker;
    }
    Jtask.prototype.setNextTask = function (task) {
        this._nextTask = task;
    };
    Jtask.prototype.do = function (params) {
        var _this = this;
        params = params ? params : this._paramsPicker();
        this._task.apply(this, this.paraItems(params)).then(function (data) {
            var nextPara = _this._resolve.apply(_this, __spreadArrays([data], _this.paraItems(params)));
            if (_this._nextTask) {
                _this._nextTask.do(nextPara);
            }
        }, function (error) {
            if (_this._reject) {
                _this._reject.apply(_this, __spreadArrays([error], _this.paraItems(params)));
            }
            else {
                console.log('ERROR: Don\'t find the error handler for task (' + _this._task.name + ')');
            }
        });
    };
    Jtask.prototype.paraItems = function (nextPara) {
        if (nextPara && nextPara.isJpara) {
            return nextPara.items();
        }
        return Jparam.emptyPara().items();
    };
    return Jtask;
}());
/**
 *
 * 任务连接类
 * @private
 */
var Jlink = /** @class */ (function () {
    function Jlink() {
        var tasks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tasks[_i] = arguments[_i];
        }
        this._tasks = [];
        for (var _a = 0, tasks_1 = tasks; _a < tasks_1.length; _a++) {
            var task = tasks_1[_a];
            this._tasks.push(task);
        }
        this._taskIndex = 0;
    }
    Jlink.prototype.para = function (para) {
        this._headTaskPara = para;
        return this;
    };
    Jlink.prototype.params = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this._allTaskPara = params;
        return this;
    };
    Jlink.prototype.next = function (resolve, reject) {
        if (this._taskIndex >= this._tasks.length) {
            return this;
        }
        var nextTask = new Jtask(this._tasks[this._taskIndex], this._paramsPicker(this._taskIndex), resolve, reject);
        this._taskIndex++;
        if (this._nextTask) {
            this._nextTask.setNextTask(nextTask);
        }
        else {
            this._headTask = nextTask;
        }
        this._nextTask = nextTask;
        return this;
    };
    Jlink.prototype.run = function () {
        this._headTask.do(this._paramsPicker(0)());
        return this;
    };
    /**
     * 指定任务的params的获取者 (目前实现会浪费内存，多个相同函数推入函数栈，后期优化）
     * @returns {Array}
     * @private
     */
    Jlink.prototype._paramsPicker = function (index) {
        var _this = this;
        return function () {
            if (_this._allTaskPara && _this._allTaskPara.length > index) {
                return _this._allTaskPara[index];
            }
            if (index === 0 && _this._headTaskPara) {
                return _this._headTaskPara;
            }
            return Jparam.emptyPara();
        };
    };
    return Jlink;
}());
// let pro1 = () => {
//     return new Promise()
// };
//
// let pro2 = () => {
//     return new Promise
// };
// let l = jlink(pro1, pro2).next(
//     (data) => {
//         console.log(data);
//     },
//     error => {
//         console.log(error);
//     }).next(
//     (data) => {
//         console.log(data);
//     },
//     error => {
//         console.log(error);
//     }
// ).run();
/**
 * 任务组合类
 * @private
 */
// class Jcombine {
//   _tasks: Function[];
//   _headTaskPara: object;
//   _taskIndex: number;
//   _paramsPicker: Function;
//   _headTask: Jtask;
//
//   constructor(...tasks) {
//     this._tasks = [];
//     for (var task of tasks) {
//       this._tasks.push(task);
//     }
//     this._taskIndex = 0;
//   }
//
//   para(para) {
//     this._headTaskPara = para;
//     return this;
//   }
//
//   params(...params) {
//     this._allTaskPara = params;
//     return this;
//   }
//
//   next(resolve, reject) {
//     if (this._taskIndex >= this._tasks.length) {
//       return this;
//     }
//     let nextTask = new Jtask(this._tasks[this._taskIndex], this._paramsPicker(this._taskIndex), resolve, reject);
//     this._taskIndex++;
//     if (this._nextTask) {
//       this._nextTask.setNextTask(nextTask);
//     } else {
//       this._headTask = nextTask;
//     }
//     this._nextTask = nextTask;
//     return this;
//   }
//
//   run() {
//     this._headTask.do(this._paramsPicker(0)());
//     return this;
//   }
// }
/**
 * 任务连接类
 * @alias other/jlink
 * @param tasks
 * @returns {Jlink}
 */
function jlink() {
    var tasks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tasks[_i] = arguments[_i];
    }
    return new (Jlink.bind.apply(Jlink, __spreadArrays([void 0], tasks)))();
}
/**
 * @private
 * @param params
 * @returns {Jpara}
 */
function jparam() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return new (Jparam.bind.apply(Jparam, __spreadArrays([void 0], params)))();
}
/**
 * @alias other/jcombine
 * @param tasks
 * @returns {Jcombine}
 */
// function jcombine(...tasks) {
//   return new Jcombine(...tasks);
// }
/**
 *
 * @param {GlobalValueRegistry | ((delegate: INetworkDelegate) => GlobalValueRegistry)} x
 * @return {x is (delegate: INetworkDelegate) => GlobalValueRegistry}
 */
function isGlobalValueRegistry(x) {
    return typeof x === 'function';
}
function isGlobalValueRegistryObject(x) {
    return typeof x === 'object';
}
function isGlobalValueRegistryFunction(x) {
    return typeof x === 'function';
}
/**
 * 获取全局指定参数
 * @param extraValues 全局参数列表
 * @param delegate 全局代理
 * @param globalValueRegistryPicker 全局参数代理对象
 * @return {{}}
 */
function jgetGlobalValue(extraValues, delegate, globalValueRegistryPicker) {
    var jgetGlobalValueWithKey = function (key) {
        var otherValues = {};
        if (!globalValueRegistryPicker) {
            throw new Error('未找到全局参数，请确认是否设置global代理');
        }
        var globalValueRegistry;
        if (isGlobalValueRegistry(globalValueRegistryPicker)) {
            globalValueRegistry = globalValueRegistryPicker(delegate);
        }
        else {
            globalValueRegistry = globalValueRegistryPicker;
        }
        var globalParaFunc = null;
        if (isGlobalValueRegistryObject(globalValueRegistry)) {
            globalParaFunc = globalValueRegistry[key];
        }
        if (isGlobalValueRegistryFunction(globalValueRegistry)) {
            globalParaFunc = globalValueRegistry()[key];
        }
        if (globalParaFunc !== null) {
            var globalPara = null;
            if (typeof globalParaFunc == "function") {
                globalPara = globalParaFunc();
            }
            else {
                globalPara = globalParaFunc;
            }
            if (typeof globalPara == "object") {
                otherValues = __assign(__assign({}, otherValues), globalPara);
            }
            else if (typeof globalPara === 'string' || typeof globalPara === 'number') {
                otherValues[key] = globalPara;
            }
            else {
                throw new Error("\u5168\u5C40\u53D8\u91CF\u7C7B\u578B\u4E0D\u6B63\u786E:" + key);
            }
        }
        else {
            throw new Error("\u4E0D\u5B58\u5728\u7684\u5168\u5C40\u53D8\u91CF:" + key);
        }
        return otherValues;
    };
    var globalOtherValues = {};
    extraValues.forEach(function (key) {
        if (typeof key == "object") {
            globalOtherValues = __assign(__assign({}, globalOtherValues), key);
        }
        else {
            if (!delegate)
                return;
            globalOtherValues = __assign(__assign({}, globalOtherValues), jgetGlobalValueWithKey(key));
        }
    });
    return globalOtherValues;
}

var JNetworkError = /** @class */ (function (_super) {
    __extends(JNetworkError, _super);
    function JNetworkError(errorMessage, code) {
        var _this = this;
        if (typeof errorMessage === 'string') {
            _this = _super.call(this, errorMessage) || this;
        }
        else if (errorMessage instanceof Error) {
            _this = _super.call(this, errorMessage.message) || this;
        }
        else {
            throw new Error('JNetworkError: 构造函数非法类型');
        }
        _this.errorCode = code;
        return _this;
        // Reflect.defineProperty(this, 'errorCode', {value: code});
    }
    return JNetworkError;
}(Error));

var JRequestEngine = /** @class */ (function () {
    // private readonly reactor;
    function JRequestEngine() {
        this.isRunning = false;
        this.runQueue = [];
        // let reactor = new Reactor();
        // this.reactor = reactor;
        // reactor.registerEvent('requestCanLoad');
    }
    JRequestEngine.prototype._pushRunQueue = function (request, resolve, reject) {
        this.runQueue.push({
            request: request,
            resolve: resolve,
            reject: reject
        });
    };
    JRequestEngine.prototype._popRunQueue = function () {
        return this.runQueue.shift();
    };
    JRequestEngine.prototype.addRequest = function (request) {
        var _this = this;
        return CancelPromiseFactory.createJPromise(function (resolve, reject) {
            if (!_this.isRunning) {
                _this.isRunning = true;
                _this.do(request, resolve, reject);
            }
            else {
                _this._pushRunQueue(request, resolve, reject);
            }
        });
    };
    JRequestEngine.prototype.do = function (request, resolve, reject) {
        var _this = this;
        request.request().then(function (data) {
            setTimeout(resolve(data), 0);
            var task = _this._popRunQueue();
            if (task) {
                _this.do(task.request, task.resolve, task.reject);
            }
            else {
                _this.isRunning = false;
            }
        }, function (error) {
            reject(error);
        });
    };
    return JRequestEngine;
}());

var JNetworkRoot = /** @class */ (function () {
    function JNetworkRoot() {
        this.extraParams = [];
        this.extraHeaders = [];
        this.extraBodyData = [];
    }
    JNetworkRoot.prototype.useParams = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.extraParams = params;
        return this;
    };
    JNetworkRoot.prototype.useHeaders = function () {
        var headers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            headers[_i] = arguments[_i];
        }
        this.extraHeaders = headers;
        return this;
    };
    JNetworkRoot.prototype.useBodyData = function () {
        var bodyData = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bodyData[_i] = arguments[_i];
        }
        this.extraBodyData = bodyData;
        return this;
    };
    JNetworkRoot.prototype.clearExtraData = function () {
        this.extraParams = [];
        this.extraHeaders = [];
        this.extraBodyData = [];
    };
    return JNetworkRoot;
}());

var GROUP_COUNT = 0;
var JNetworkGroup = /** @class */ (function (_super) {
    __extends(JNetworkGroup, _super);
    function JNetworkGroup(baseUrl, axiosConfig, delegate, options) {
        var _this = _super.call(this) || this;
        _this.requestEngine = new JRequestEngine();
        _this.baseUrl = baseUrl;
        _this.axiosConfig = axiosConfig || {};
        _this.delegate = delegate || null;
        _this.groupId = ++GROUP_COUNT;
        if (options) {
            _this.freezeParams = options.freezeParams || [];
            _this.freezeHeaders = options.freezeHeaders || [];
            _this.freezeBodyData = options.freezeBodyData || [];
            _this.freezeCarryParams = options.freezeCarryParams || {};
            _this.freezeCarryHeaders = options.freezeCarryHeaders || {};
            _this.freezeCarryBodyData = options.freezeCarryBodyData || {};
            _this.isSync = options.isSync;
            _this.parent = options.parent;
        }
        return _this;
    }
    JNetworkGroup.prototype.pickInjectParams = function () {
        return __assign(__assign({}, ObjectTool.getObjOrFuncResult(this.freezeCarryParams)), jgetGlobalValue(__spreadArrays(this.freezeParams, this.extraParams), this.delegate, function (_) { return _.globalParams; }));
    };
    JNetworkGroup.prototype.pickInjectHeaders = function () {
        return __assign(__assign({}, ObjectTool.getObjOrFuncResult(this.freezeCarryHeaders)), jgetGlobalValue(__spreadArrays(this.freezeHeaders, this.extraHeaders), this.delegate, function (_) { return _.globalHeaders; }));
    };
    JNetworkGroup.prototype.pickInjectBodyData = function () {
        return __assign(__assign({}, ObjectTool.getObjOrFuncResult(this.freezeCarryBodyData)), jgetGlobalValue(__spreadArrays(this.freezeBodyData, this.extraBodyData), this.delegate, function (_) { return _.globalBodyData; }));
    };
    /**
     * 发送请求
     * @param method 方法类型
     * @param baseUrl 基地址
     * @param url 相对地址
     * @param parameters 参数
     * @param data data参数
     * @param headers 头参数
     * @param otherObject 其他相关设置
     * @returns {CancelPromiseFactory<any>}
     */
    JNetworkGroup.prototype.fetchRequest = function (method, baseUrl, url, parameters, data, headers, otherObject) {
        if (otherObject === void 0) { otherObject = {}; }
        var carryParams = ObjectTool.getObjOrFuncResult(this.freezeCarryParams);
        var carryHeaders = ObjectTool.getObjOrFuncResult(this.freezeHeaders);
        var carryBodyData = ObjectTool.getObjOrFuncResult(this.freezeCarryBodyData);
        var delegate = this.delegate;
        var globalOtherParams = this.pickInjectParams();
        var globalOtherHeaders = this.pickInjectHeaders();
        var globalOtherBodyData = this.pickInjectBodyData();
        this.clearExtraData();
        var request = JRequester.create(method, baseUrl, url, __assign(__assign(__assign({}, carryParams), globalOtherParams), parameters), otherObject.notTransformData ? data : __assign(__assign(__assign({}, carryBodyData), globalOtherBodyData), data), __assign(__assign(__assign({ 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }, carryHeaders), globalOtherHeaders), headers), __assign({ axiosConfig: this.axiosConfig }, otherObject), delegate);
        if (this.isSync) {
            return this.requestEngine.addRequest(request);
        }
        else {
            return CancelPromiseFactory.createJPromise(function (resolve, reject) {
                request.request().then(function (response) {
                    if (response.status === 200) {
                        resolve(response);
                    }
                    else {
                        var errorMessage = void 0, errorStatus = void 0;
                        if (response.hasOwnProperty('status')) {
                            errorMessage = response.statusText;
                            errorStatus = response.status;
                        }
                        else {
                            if (response.hasOwnProperty('message')) {
                                errorMessage = response['message'];
                            }
                        }
                        reject(new JNetworkError(errorMessage, errorStatus));
                    }
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    };
    JNetworkGroup.prototype.freedomPOST = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('post', baseUrl, url || '', parameters || {}, {}, headers || {}, otherObject || {});
    };
    JNetworkGroup.prototype.freedomGET = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('get', baseUrl, url || '', parameters || {}, {}, headers || {}, otherObject || {});
    };
    JNetworkGroup.prototype.POST = function (url, parameters, headers, otherObject) {
        return this.freedomPOST(this.baseUrl, url, parameters, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    JNetworkGroup.prototype.GET = function (url, parameters, headers, otherObject) {
        return this.freedomGET(this.baseUrl, url, parameters, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    JNetworkGroup.prototype.freedomDataPOST = function (baseUrl, url, data, headers, otherObject) {
        return this.fetchRequest('post', baseUrl, url || '', {}, data || {}, headers || {}, otherObject || {});
    };
    JNetworkGroup.prototype.freedomDataGET = function (baseUrl, url, data, headers, otherObject) {
        return this.fetchRequest('get', baseUrl, url || '', {}, data || {}, headers || {}, otherObject || {});
    };
    JNetworkGroup.prototype.dataPOST = function (url, data, headers, otherObject) {
        return this.freedomDataPOST(this.baseUrl, url, data, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    JNetworkGroup.prototype.dataGET = function (url, data, headers, otherObject) {
        return this.freedomDataGET(this.baseUrl, url, data, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    return JNetworkGroup;
}(JNetworkRoot));

var DEFAULT_NETWORK_OTHER_OPTION = {
    notTransformData: false
};
var DEFAULT_NETWORK_GROUP_OPTION = {
    notClearExtraData: false,
    isSync: false,
    groupClass: JNetworkGroup
};
var INSTANCE_COUNT = 0;
/**
 * 网络请求类
 */
var JNetwork = /** @class */ (function (_super) {
    __extends(JNetwork, _super);
    function JNetwork(config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        var _this = _super.call(this) || this;
        _this.config = DEFAULT_CONFIG;
        _this.groupList = [];
        config = __assign(__assign({}, DEFAULT_CONFIG), config);
        _this.baseUrl = config.baseUrl;
        _this.delegate = config.delegate || null;
        _this.carryParams = config.carryParams || {};
        _this.carryHeaders = config.carryHeaders || {};
        _this.carryBodyData = config.carryBodyData || {};
        _this.axiosConfig = config.axiosConfig || {
            timeout: 10 * 1000
        };
        _this.otherContent = config.otherContent;
        _this.config = config;
        _this.instanceId = ++INSTANCE_COUNT;
        return _this;
    }
    JNetwork.useParams = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var instance = this.defaultInstance();
        instance.extraParams = params;
        return instance;
    };
    JNetwork.useHeaders = function () {
        var headers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            headers[_i] = arguments[_i];
        }
        var instance = this.defaultInstance();
        instance.extraHeaders = headers;
        return instance;
    };
    JNetwork.useBodyData = function () {
        var bodyData = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bodyData[_i] = arguments[_i];
        }
        var instance = this.defaultInstance();
        instance.extraBodyData = bodyData;
        return instance;
    };
    JNetwork.instance = function (config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new JNetwork(config);
    };
    JNetwork.defaultInstance = function () {
        if (!this._instance) {
            this._instance = new JNetwork();
        }
        return this._instance;
    };
    JNetwork.prototype.pickInjectParams = function () {
        return __assign(__assign({}, ObjectTool.getObjOrFuncResult(this.carryParams)), jgetGlobalValue(this.extraParams, this.delegate, function (_) { return _.globalParams; }));
    };
    JNetwork.prototype.pickInjectHeaders = function () {
        return __assign(__assign({}, ObjectTool.getObjOrFuncResult(this.carryHeaders)), jgetGlobalValue(this.extraHeaders, this.delegate, function (_) { return _.globalHeaders; }));
    };
    JNetwork.prototype.pickInjectBodyData = function () {
        return __assign(__assign({}, ObjectTool.getObjOrFuncResult(this.carryBodyData)), jgetGlobalValue(this.extraBodyData, this.delegate, function (_) { return _.globalBodyData; }));
    };
    JNetwork.prototype.createGroup = function (options) {
        options = __assign(__assign({}, DEFAULT_NETWORK_GROUP_OPTION), options);
        if (options.groupClass !== JNetworkGroup && !JNetworkGroup.isPrototypeOf(options.groupClass)) {
            throw new Error(options.groupClass.name + " is not extends of class JNetworkGroup, please extends class JNetworkGroup");
        }
        var group = new (options.groupClass)(this.baseUrl, this.axiosConfig, this.delegate, {
            freezeParams: this.extraParams,
            freezeHeaders: this.extraHeaders,
            freezeBodyData: this.extraBodyData,
            freezeCarryParams: ObjectTool.getObjOrFuncResult(this.carryParams),
            freezeCarryHeaders: ObjectTool.getObjOrFuncResult(this.carryHeaders),
            freezeCarryBodyData: ObjectTool.getObjOrFuncResult(this.carryBodyData),
            isSync: options.isSync,
            parent: this
        });
        if (!options.notClearExtraData) {
            this.clearExtraData();
        }
        this.groupList.push(group);
        return group;
    };
    JNetwork.prototype.clearGroup = function () {
        // TODO: 冻结每组活动
        this.groupList.splice(0);
    };
    /**
     * 验证失败
     * @private
     * @returns {Promise}
     */
    JNetwork.failedAuthorizationNetwork = function () {
        return new Promise(function (resolve, reject) {
            reject(new Error('authorization error'));
        });
    };
    /**
     * 不存在的方法
     * @private
     * @returns {Promise}
     */
    JNetwork.unrealizedMethod = function () {
        return new Promise(function (resolve, reject) {
            reject(new Error('unrealized method'));
        });
    };
    /***
     * 检查是否配置SDK
     * @private
     */
    JNetwork.prototype.checkConfigBaseUrl = function () {
        if (!this.baseUrl || this.baseUrl === '') {
            console.log('please check if you have config baseUrl for SDK');
            // throw Error('Not Config');
        }
    };
    /**
     * 发送请求
     * @param method 方法类型
     * @param baseUrl 基地址
     * @param url 相对地址
     * @param parameters 参数
     * @param bodyData data参数
     * @param headers 头参数
     * @param otherObject 其他相关设置
     * @returns {CancelPromiseFactory<any>}
     */
    JNetwork.prototype.fetchRequest = function (method, baseUrl, url, parameters, bodyData, headers, otherObject) {
        if (otherObject === void 0) { otherObject = DEFAULT_NETWORK_OTHER_OPTION; }
        var carryParams = ObjectTool.getObjOrFuncResult(this.carryParams);
        var carryHeaders = ObjectTool.getObjOrFuncResult(this.carryHeaders);
        var carryBodyData = ObjectTool.getObjOrFuncResult(this.carryBodyData);
        var delegate = this.delegate;
        var globalOtherParams = this.pickInjectParams();
        var globalOtherHeaders = this.pickInjectHeaders();
        var globalOtherBodyData = this.pickInjectBodyData();
        this.clearExtraData();
        var request = JRequester.create(method, baseUrl, url, __assign(__assign(__assign({}, carryParams), globalOtherParams), parameters), otherObject.notTransformData ? bodyData : __assign(__assign(__assign({}, carryBodyData), globalOtherBodyData), bodyData), __assign(__assign(__assign({ 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }, carryHeaders), globalOtherHeaders), headers), __assign(__assign({}, this.axiosConfig), otherObject), delegate);
        return CancelPromiseFactory.createJPromise(function (resolve, reject) {
            request.request().then(function (response) {
                if (response.status === 200) {
                    resolve(response);
                }
                else {
                    reject(new JNetworkError(response.statusText, response.status));
                }
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 高自由度POST方法
     * @param {string} baseUrl 基地址
     * @param {string} url 相对地址
     * @param {object} parameters 地址参数
     * @param {object} headers 头参数
     * @param {object} otherObject 其他可用配置
     * @returns {Promise} 异步请求块
     */
    JNetwork.freedomPOST = function (baseUrl, url, parameters, headers, otherObject) {
        return this.defaultInstance().freedomPOST(baseUrl, url, parameters, headers, otherObject);
    };
    /**
     * 高自由度GET方法
     * @param {string} baseUrl
     * @param {string} url
     * @param {object} parameters
     * @param {object} headers
     * @param {object} otherObject
     * @returns {Promise} 异步请求块
     */
    JNetwork.freedomGET = function (baseUrl, url, parameters, headers, otherObject) {
        return this.defaultInstance().freedomGET(baseUrl, url, parameters, headers, otherObject);
    };
    JNetwork.prototype.freedomPOST = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('post', baseUrl, url || '', parameters || {}, {}, headers || {}, otherObject || DEFAULT_NETWORK_OTHER_OPTION);
    };
    JNetwork.prototype.freedomGET = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('get', baseUrl, url || '', parameters || {}, {}, headers || {}, otherObject || DEFAULT_NETWORK_OTHER_OPTION);
    };
    JNetwork.prototype.POST = function (url, parameters, headers, otherObject) {
        return this.freedomPOST(this.baseUrl, url, parameters, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    JNetwork.prototype.GET = function (url, parameters, headers, otherObject) {
        return this.freedomGET(this.baseUrl, url, parameters, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    JNetwork.prototype.freedomDataPOST = function (baseUrl, url, bodyData, headers, otherObject) {
        return this.fetchRequest('post', baseUrl, url || '', {}, bodyData || {}, headers || {}, otherObject || DEFAULT_NETWORK_OTHER_OPTION);
    };
    JNetwork.prototype.freedomDataGET = function (baseUrl, url, bodyData, headers, otherObject) {
        return this.fetchRequest('get', baseUrl, url || '', {}, bodyData || {}, headers || {}, otherObject || DEFAULT_NETWORK_OTHER_OPTION);
    };
    JNetwork.prototype.dataPOST = function (url, bodyData, headers, otherObject) {
        return this.freedomDataPOST(this.baseUrl, url, bodyData, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    JNetwork.prototype.dataGET = function (url, bodyData, headers, otherObject) {
        return this.freedomDataGET(this.baseUrl, url, bodyData, headers, __assign(__assign({}, this.axiosConfig), otherObject));
    };
    return JNetwork;
}(JNetworkRoot));

// 北京时区(东八区)早于协调世界时
// const STANDARD_TIMEZONE = -480;
var STANDARD_TIMEZONE = 480;
var _date_format_shim = function (f) {
    if (f) {
        f = f.replace('yyyy', 'YYYY');
        f = f.replace('dd', 'DD');
        f = f.replace('hh', 'HH');
    }
    return f;
};
var _ti2d = function (ti) {
    return moment$$1(ti * 1000).toDate();
};
var _d2ti = function (d) {
    return moment$$1(d).unix();
};
var _ti2ds = function (ti, f) {
    f = _date_format_shim(f);
    return moment$$1(ti * 1000).utcOffset(STANDARD_TIMEZONE).format(f);
};
var _ds2ti = function (ds, z) {
    return DateTool.timeIntervalFromDate(moment$$1(ds).utcOffset(z, true).toDate());
};
var _d2ds = function (d, f) {
    f = _date_format_shim(f);
    return moment$$1(d).utcOffset(STANDARD_TIMEZONE).format(f);
};
var _ds2d = function (ds, z) {
    return moment$$1(ds).utcOffset(z, true).toDate();
};
/**
 * 时间工具类
 */
var DateTool = /** @class */ (function () {
    function DateTool() {
    }
    // 距离标准时区(STANDARD_TIMEZONE)的位移 --单位为分钟
    DateTool.offsetFromStandardTimezone = function () {
        return new Date().getTimezoneOffset();
    };
    /**
     * 当前日期是什么类型
     * @param _ 多态日期
     * @private
     * @returns {string}
     */
    DateTool.whatType = function (_) {
        if (_ instanceof Date) {
            return 'Date';
        }
        return typeof (_);
    };
    /**
     * 这个日期要做什么
     * @param  _ 多态日期
     * @param dateDoing 日期格式做的事情
     * @param strDoing 字符串格式做的事情
     * @param numDoing 数字格式做的事情
     * @param otherDoing  其他格式做的事情
     * @private
     */
    DateTool.whatTypeDoing = function (_, dateDoing, strDoing, numDoing, otherDoing) {
        if (typeof (_) === 'string') {
            strDoing();
        }
        if (typeof (_) === 'number') {
            numDoing();
        }
        if (_ instanceof Date) {
            dateDoing();
        }
        if (otherDoing) {
            otherDoing();
        }
    };
    /**
     * 想要日期格式的日期
     * @param _ 多态日期
     * @returns 日期
     */
    DateTool.wantDate = function (_) {
        var result = null;
        DateTool.whatTypeDoing(_, function () {
            result = _;
        }, function () {
            result = DateTool.dateFromDateString(_);
        }, function () {
            result = DateTool.dateFromTimeInterval(_);
        });
        return result;
    };
    /**
     * 想要时间戳格式的日期
     * @param _ 多态日期
     * @returns 时间戳
     */
    DateTool.wantTimeInterval = function (_) {
        var result = null;
        DateTool.whatTypeDoing(_, function () {
            result = DateTool.timeIntervalFromDate(_);
        }, function () {
            result = DateTool.timeIntervalFromDateString(_);
        }, function () {
            result = _;
        });
        return result;
    };
    /**
     * 日期转换时间戳
     * @param date 日期
     * @returns 时间戳
     */
    DateTool.timeIntervalFromDate = function (date) {
        return _d2ti(date);
    };
    /**
     * 时间戳转换日期
     * @param timeInterval 时间戳
     * @returns 日期
     */
    DateTool.dateFromTimeInterval = function (timeInterval) {
        return _ti2d(timeInterval);
    };
    /**
     * 日期字符串转换时间戳
     * @param dateString 日期
     * @param timezone 时区
     * @returns 时间戳
     */
    DateTool.timeIntervalFromDateString = function (dateString, timezone) {
        if (timezone === void 0) { timezone = STANDARD_TIMEZONE; }
        return _ds2ti(dateString, timezone);
    };
    /**
     * 时间戳转换日期字符串
     * @param timeInterval 时间戳
     * @param format 日期格式 如: YYYY-MM-DD HH:mm:ss
     * @returns 日期字符串
     */
    DateTool.dateStringFromTimeInterval = function (timeInterval, format) {
        if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
        return _ti2ds(timeInterval, format);
    };
    /**
     * 日期字符串转换日期
     * #### 待完善
     * @param dateString 日期字符串
     * @param timezone 时区
     * @returns 日期
     */
    DateTool.dateFromDateString = function (dateString, timezone) {
        if (timezone === void 0) { timezone = STANDARD_TIMEZONE; }
        return _ds2d(dateString, timezone);
    };
    /**
     * 日期转换日期字符串
     * @param date Date对象
     * @param format 格式化信息
     * @returns 日期字符串
     */
    DateTool.dateStringFromDate = function (date, format) {
        if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
        return _d2ds(date, format);
    };
    /**
     * 获取当前日期对象
     * @returns 当前日期对象
     */
    DateTool.currentDate = function () {
        return moment$$1().utcOffset(STANDARD_TIMEZONE).toDate();
    };
    /**
     * 获取当前日期字符串
     * @param format 字符串格式
     * @returns 当前日期字符串
     */
    DateTool.currentDateString = function (format) {
        if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
        return _d2ds(DateTool.currentDate(), format);
    };
    /**
     * 获取当前时间戳
     * @returns 当前时间戳
     */
    DateTool.currentTimeInterval = function () {
        return moment$$1().unix();
    };
    // TODO 需要优化月份的算法
    /**
     * 获取日期的距离
     * #### 待完善
     * @param startDate 起始多态日期
     * @param endDate 结束多态日期
     * @param justSeconds 只需要秒的总数
     * @returns [秒，分，小时，天，月, 年]
     */
    DateTool.distanceBetweenDate = function (startDate, endDate, justSeconds) {
        var startTimeInterval = this.wantTimeInterval(startDate);
        var endTimeInterval = this.wantTimeInterval(endDate);
        var distance = endTimeInterval - startTimeInterval;
        if (justSeconds) {
            return [distance, 0, 0, 0, 0];
        }
        var sec = distance % 60;
        distance = Math.floor(distance / 60);
        var min = distance % 60;
        distance = Math.floor(distance / 60);
        var hour = distance % 24;
        distance = Math.floor(distance / 24);
        var day = distance % 1000;
        var mou = Math.floor(distance / 1000);
        return [sec, min, hour, day, mou];
    };
    // TODO 待开发
    /**
     * 变换日期字符串格式
     * #### 待开发
     * @since ~1.1.*
     * @param dateString 日期字符串
     * @param fromFormat 输入格式
     * @param toFormat 输出格式
     * @param timezone 时区
     * @returns 字符串
     */
    DateTool.transformDateStringByFormat = function (dateString, fromFormat, toFormat, timezone) {
        if (toFormat === void 0) { toFormat = 'YYYY-MM-DD HH:mm:ss'; }
        if (timezone === void 0) { timezone = STANDARD_TIMEZONE; }
        return _d2ds(_ds2d(dateString, timezone), toFormat);
    };
    /**
     * 获取指定日期为星期几
     * @param date 多态日期
     * @returns 0~6 => 星期一~星期日
     */
    DateTool.weekDay = function (date) {
        return (moment$$1(DateTool.wantDate(date)).utcOffset(STANDARD_TIMEZONE).day() + 6) % 7;
    };
    /**
     * 获取某日期某天后的日期
     * @param beganDate 多态目标日期
     * @param days 天数
     * @returns 目的日期
     */
    DateTool.dateAfterDaysLater = function (beganDate, days) {
        return moment$$1(DateTool.wantDate(beganDate)).add(days, 'days').toDate();
    };
    /**
     * 获取日期某天后的日期字符串
     * @param beganDate 多态目标日期
     * @param days 天数
     * @param format 格式化信息
     * @returns 目的日期字符串
     */
    DateTool.dateStringAfterDaysLater = function (beganDate, days, format) {
        if (format === void 0) { format = 'YYYY-MM-DD'; }
        return _d2ds(DateTool.dateAfterDaysLater(beganDate, days), format);
    };
    return DateTool;
}());

/**
 * 数字工具类
 */
var NumberTool = /** @class */ (function () {
    function NumberTool() {
    }
    /**
     * 整数补0
     * @param number 整数
     * @param length 最终的长度
     * @returns 整数字符串
     */
    NumberTool.zeroPad = function (number, length) {
        return String(number).padStart(length, String(0));
    };
    /**
     * 字符补位
     * @param pad 字符
     * @param length 最终的长度
     * @param placeholder 补全字符
     * @returns 字符串
     */
    NumberTool.leftPad = function (pad, length, placeholder) {
        if (placeholder === void 0) { placeholder = 0; }
        return String(pad).padStart(length, String(placeholder));
    };
    /**
     * 小数部分有效数字保留
     * @param number 数字
     * @param digits 小数保留位数
     * @returns 数字的字符串
     */
    NumberTool.fixDigits = function (number, digits) {
        return Number(number).toFixed(digits);
    };
    /**
     * 返回正整数的字符串
     * @description 非正整数返回指定字符串或空字符串
     * @param number 数字
     * @param text 非正整数的返回（可空）
     * @returns 正整数字符串或者指定字符串
     */
    NumberTool.positiveText = function (number, text) {
        if (number <= 0) {
            return text || '';
        }
        else {
            return number + '';
        }
    };
    return NumberTool;
}());

/**
 * Created by cuppi on 2016/12/14.
 */
/**
 * 字符串工具类
 */
var StringTool = /** @class */ (function () {
    function StringTool() {
    }
    /**
     * 校验是否为手机号码
     * @param mobile 手机号码
     * @returns 结果
     */
    StringTool.isMobile = function (mobile) {
        return /^1[1234567890]\d{9}$/.test(mobile);
    };
    /**
     * 校验是否为电话号码
     * @param phone 电话号码
     * @returns 结果
     */
    StringTool.isPhoneNumber = function (phone) {
        return /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/.test(phone);
    };
    /**
     * 检验是否为邮箱
     * @param email 邮箱
     * @returns 结果
     */
    StringTool.isEmail = function (email) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email);
    };
    /**
     * 校验是否为空字符串
     * @param string 字符串
     * @returns 结果
     */
    StringTool.isEmpty = function (string) {
        return !(string && string !== '');
    };
    /**
     * 校验是否为验证码
     * @description 0~9 6位数字
     * @param verifyCode 验证码
     * @returns 结果
     */
    StringTool.isVerifyCode = function (verifyCode) {
        return /^[0-9]{6}$/.test(verifyCode);
    };
    /**
     * 校验是否为密码
     * @param password 密码
     * @param minLength 最小长度
     * @param maxLength 最大长度
     * @returns 结果
     */
    StringTool.isPassword = function (password, minLength, maxLength) {
        if (minLength !== undefined && maxLength !== undefined) {
            return new RegExp("^[a-zA-Z0-9]{" +
                minLength + "," + maxLength +
                "}$").test(password);
        }
        return /^[a-zA-Z0-9]{6,14}$/.test(password);
    };
    /**
     * 去除数字字符串左边的补位0
     * @param c 数字字符串
     * @returns {*}
     */
    StringTool.numberRemoveLeftZero = function (c) {
        if (/^[0-9]*$/.test(c)) {
            return Number.parseInt(c) + '';
        }
        return c;
    };
    /**
     * 通过asc得出字符数值
     * @param ascChar asc字符
     * @returns 数值 A=0; B=1;
     */
    StringTool.numberFromASC = function (ascChar) {
        var asc = ascChar.charCodeAt(0);
        if (asc >= 65 && asc <= 90) {
            asc -= 65;
        }
        else if (asc >= 97 && asc <= 122) {
            asc -= 97;
        }
        else if (asc >= 48 && asc <= 57) {
            asc -= 48;
        }
        else {
            asc = 0;
        }
        return asc;
    };
    /**
     * 转换字符串到数字
     * @param string 字符串
     * @param force 是否强制转换非数字字符 (即为26进制数字)
     * @param offset 非数字时的初始值
     * @returns 数值
     */
    StringTool.numberFromString = function (string, force, offset) {
        if (offset === void 0) { offset = 0; }
        if (/^[0-9]*$/.test(string)) {
            return Number.parseInt(string);
        }
        var sum = offset ? offset : 0;
        if (force) {
            for (var i = string.length - 1, radix = 1; i >= 0; i--, radix = radix * 26) {
                sum += StringTool.numberFromASC(string[i]) * radix;
            }
        }
        return sum;
    };
    /**
     * 清除所有空格字符
     * @param string 字符串
     * @returns 结果字符串
     */
    StringTool.clearSpace = function (string) {
        // 过滤空格
        return string.replace(/\s+/g, '');
    };
    /**
     * 清除所有逗号
     * @param string 字符串
     * @returns 结果字符串
     */
    StringTool.clearComma = function (string) {
        // 过滤空格
        return string.replace(/\u002c+/g, '').replace(/，+/g, '');
    };
    /**
     * 清除所有竖线
     * @param string 字符串
     * @returns 结果字符串
     */
    StringTool.clearVertical = function (string) {
        // 过滤空格
        return string.replace(/\|+/g, '');
    };
    /**
     * 清除所有特殊字符
     * @description 即空格 逗号 及竖线
     * @param string 字符串
     * @returns 结果字符串
     */
    StringTool.clearClutter = function (string) {
        var clearString = StringTool.clearSpace(string);
        clearString = StringTool.clearComma(clearString);
        clearString = StringTool.clearVertical(clearString);
        return clearString;
    };
    return StringTool;
}());

/**
 * Created by cuppi on 2016/12/7.
 */
/** @module tool*/
/**
 * 数组工具类
 * @hideconstructor
 */
var ArrayTool = /** @class */ (function () {
    function ArrayTool() {
    }
    return ArrayTool;
}());

/**
 * Created by cuppi on 2017/4/19.
 */
var JSDK = /** @class */ (function () {
    function JSDK() {
    }
    JSDK.version = function () {
        return process.env.NODE_ENV;
    };
    return JSDK;
}());

exports.JNetwork = JNetwork;
exports.JNetworkError = JNetworkError;
exports.JNetworkGroup = JNetworkGroup;
exports.JNetworkRoot = JNetworkRoot;
exports.JSDK = JSDK;
exports.JToolArray = ArrayTool;
exports.JToolDate = DateTool;
exports.JToolNumber = NumberTool;
exports.JToolObject = ObjectTool;
exports.JToolString = StringTool;
exports.JToolUrl = UrlTool;
exports.jlink = jlink;
exports.jparam = jparam;
});

unwrapExports(lib);
var lib_1 = lib.JNetwork;
var lib_2 = lib.JNetworkError;
var lib_3 = lib.JNetworkGroup;
var lib_4 = lib.JNetworkRoot;
var lib_5 = lib.JSDK;
var lib_6 = lib.JToolArray;
var lib_7 = lib.JToolDate;
var lib_8 = lib.JToolNumber;
var lib_9 = lib.JToolObject;
var lib_10 = lib.JToolString;
var lib_11 = lib.JToolUrl;
var lib_12 = lib.jlink;
var lib_13 = lib.jparam;

var JNetworkAccount = {
    systemLogin: {
        url: '/system/login',
        params: {
            key: true
        },
        book: [
            'key'
        ]
    },
    accountLogin: {
        url: '/account/login',
        params: {
            key: true
        },
        book: [
            'key'
        ]
    }
};
//# sourceMappingURL=JNetworkAccount.js.map

var JNetworkMine = {
    cancelCollectCinema: {
        url: '/mine/celcltcinema',
        params: {
            openId: true,
            cinemaId: true
        },
        book: [
            'cinemaId'
        ]
    },
    collectCinema: {
        url: '/mine/cltcinema',
        params: {
            openId: true,
            cinemaId: true,
            cinemaName: true,
            cinemaAddress: true,
        },
        book: [
            'cinemaId',
            'cinemaName',
            'cinemaAddress',
        ]
    },
    collectedCinemaList: {
        url: '/mine/cltedcinemalist',
        params: {
            openId: true,
            page: true,
            size: false,
        },
    },
    orderList: {
        url: '/mine/orderlist',
        params: {
            openId: true,
            page: true,
            size: true,
            type: false
        }
    },
    orderDetail: {
        url: '/mine/orderdetail',
        params: {
            openId: true,
            orderId: true,
        },
        book: [
            'orderId',
        ]
    },
    orderCancel: {
        url: '/order/cancel',
        params: {
            openId: true,
            orderId: true
        },
        book: [
            'orderId',
        ]
    },
    lookedFilms: {
        url: '/mine/lookedfilms',
        params: {
            openId: true,
            page: true,
            size: false
        }
    },
};
//# sourceMappingURL=JNetworkMine.js.map

var JNetworkTrade = {
    lockSeat: {
        url: '/order/lockseat',
        params: {
            openId: true,
            mobile: true,
            showId: true,
            type: true,
            cinemaId: true,
            filmId: true,
            seatIds: true,
            count: true,
            cityId: true,
            seatInfos: false,
            hallId: false,
            areaInfo: false,
            applyKey: false,
            seatNames: false,
        }
    },
    lockStatusByRequestId: {
        url: '/order/lockstatus',
        params: {
            requestId: true
        },
        book: [
            'requestId'
        ]
    },
    confirmOrder: {
        url: '/order/confirmorder',
        params: {
            openId: true,
            orderId: true,
            positionCityId: false,
            selectedCityId: false,
            activityId: false,
        }
    },
    orderStatus: {
        url: '/system/status',
        params: {
            payNo: true
        },
        book: [
            'payNo'
        ]
    },
    confirmPay: {
        url: '/system/confirm/pay',
        params: {
            _CallBackUrl: false,
            orderId: false,
            token: false
        }
    },
    prePay: {
        url: '/system/prepay',
        params: {
            jsonStr: true
        },
        book: [
            'jsonStr'
        ]
    }
};
//# sourceMappingURL=JNetworkTrade.js.map

function _netCityToCity(city) {
    return { id: city.id, name: city.cityName, latin: city.cityEn, provinceId: city.provinceId };
}
var JNetworkCity = {
    cityByCoordinate: {
        url: '/location/city',
        params: {
            longitude: false,
            latitude: false
        },
        cook: function (data) {
            // 轮询为空防止找不到报错
            if (data.hasOwnProperty('requestId')) {
                return data;
            }
            var address = data;
            lib_9.deleteProperty(address, 'formatAddress');
            return { city: _netCityToCity(address), address: address };
        }
    },
    cityByCoordinateAndRequestId: {
        url: '/location/cityinfo',
        params: {
            requestId: true
        },
        book: [
            'requestId'
        ],
        cook: function (data) {
            // 轮询为空防止找不到报错
            if (data) {
                var address = data;
                lib_9.deleteProperty(address, 'formatAddress');
                return { city: _netCityToCity(address), address: address };
            }
            else {
                return data;
            }
        }
    },
    cityHotList: {
        url: '/location/hotcities',
        cook: function (_) { return _.map(_netCityToCity); }
    },
    cityList: {
        url: '/location/cities',
        cook: function (_) { return _.map(_netCityToCity); }
    },
    cityById: {
        url: '/location/citybyid',
        params: {
            cityId: true
        },
        book: [
            'cityId'
        ],
        cook: _netCityToCity
    },
    districts: {
        url: '/location/districts',
        params: {
            cityId: true
        },
        book: [
            'cityId'
        ]
    },
    cityDistrictList: {
        url: '/location/districts',
        params: {
            cityId: true
        },
        book: [
            'cityId'
        ],
        cook: function (data) { return data.map(function (_) { return ({
            name: _.districtName,
            id: _.id
        }); }); }
    }
};
//# sourceMappingURL=JNetworkCity.js.map

function _netBanner(banner) {
    return {
        cityId: banner.cityId,
        column: banner.column,
        id: banner.id,
        imgUrl: banner.imgUrl,
        title: banner.title,
        href: banner.link,
        activity: JSON.parse(banner.activity)
    };
}
var JNetworkBanner = {
    bannerList: {
        url: '/banner/banners',
        params: {
            location: true,
            cityId: false
        },
        book: [
            'location',
            'cityId?'
        ],
        cook: function (_) { return _.map(_netBanner); }
    }
};
//# sourceMappingURL=JNetworkBanner.js.map

var instance = null;
var AutoSeatPicking = /** @class */ (function () {
    function AutoSeatPicking() {
        if (!instance) {
            this.needSeatCount = 0;
            this.rowCount = 0;
            this.colCount = 0;
            this.minRow = Number.POSITIVE_INFINITY;
            this.minCol = Number.POSITIVE_INFINITY;
            this.seatMap = [];
            this.seatModelMap = [];
            instance = this;
            this.resultCallback = null;
        }
        return instance;
    }
    AutoSeatPicking.defaultManager = function () {
        return new AutoSeatPicking();
    };
    /**
     * 创建快捷座位简图
     * @param smartSeats 目标座位图
     */
    AutoSeatPicking.prototype.createSeatMap = function (smartSeats) {
        var maxRow = 0;
        var maxCol = 0;
        var minRow = Number.POSITIVE_INFINITY;
        var minCol = Number.POSITIVE_INFINITY;
        for (var _i = 0, smartSeats_1 = smartSeats; _i < smartSeats_1.length; _i++) {
            var seat = smartSeats_1[_i];
            maxRow = Math.max(seat.row, maxRow);
            maxCol = Math.max(seat.col, maxCol);
            minRow = Math.min(seat.row, minRow);
            minCol = Math.min(seat.col, minCol);
        }
        for (var i = 0; i <= maxRow; i++) {
            this.seatMap[i] = [];
            this.seatModelMap[i] = [];
            for (var j = 0; j <= maxCol; j++) {
                this.seatMap[i][j] = '_';
                this.seatModelMap[i][j] = null;
            }
        }
        for (var _a = 0, smartSeats_2 = smartSeats; _a < smartSeats_2.length; _a++) {
            var seat = smartSeats_2[_a];
            this.seatModelMap[seat.row][seat.col] = seat;
            if (seat.status === 0 && (seat.loveIndex === 0 || isNaN(seat.loveIndex))) {
                this.seatMap[seat.row][seat.col] = '0';
            }
            else {
                this.seatMap[seat.row][seat.col] = '1';
            }
        }
        this.rowCount = maxRow + 1;
        this.colCount = maxCol + 1;
        this.minRow = minRow;
        this.minCol = minCol;
    };
    /**
     *  一层一层寻找最佳位置
     * @param smartSeats 目标座位图
     * @param count 期望最佳位置的数量
     * @param resultCallback 结果回调
     */
    AutoSeatPicking.prototype.autoSelected = function (smartSeats, count, resultCallback) {
        this.createSeatMap(smartSeats);
        this.needSeatCount = count;
        this.resultCallback = resultCallback;
        var rowLength = (this.rowCount - this.minRow);
        var colLength = (this.colCount - this.minCol);
        for (var i = 0; i <= Math.max(Math.floor(this.rowCount / 2), Math.floor(this.colCount / 2)); i++) {
            if (this.targetFromRowColTier(Math.floor(rowLength / 2) + this.minRow, Math.floor(colLength / 2) + this.minCol, i)) {
                return;
            }
        }
        resultCallback(new Map());
    };
    /**
     * 判断指定层是否存在最佳位置
     * @param row 指定点行
     * @param col 指定点列
     * @param tier 层数
     * @returns {boolean} 是否存在最佳位置
     */
    AutoSeatPicking.prototype.targetFromRowColTier = function (row, col, tier) {
        for (var i = 0; i <= tier; i++) {
            if (this.targetFromRowColInnerOffsetTier(row, col, i, tier)) {
                return true;
            }
        }
        return false;
    };
    /**
     * 判断指定点的期望结果
     * @param row 指定点行
     * @param col 指定点列
     * @param innerOffset 行内偏移
     * @param tier 层索引
     * @returns {boolean} 是否存在
     */
    AutoSeatPicking.prototype.targetFromRowColInnerOffsetTier = function (row, col, innerOffset, tier) {
        var rowSignTimes = (innerOffset !== 0) ? 1 : 0;
        for (var rowSign = -1; rowSign <= rowSignTimes; rowSign++) {
            if (!rowSign) {
                continue;
            }
            var colSignTimes = (tier !== 0) ? 1 : 0;
            for (var colSign = -1; colSign <= colSignTimes; colSign++) {
                if (!colSign) {
                    continue;
                }
                var changeTimes = (innerOffset != tier) ? 1 : 0;
                for (var change = 0; change <= changeTimes; change++) {
                    var rowOffset = void 0, colOffset = void 0;
                    if (change) {
                        rowOffset = tier * colSign;
                        colOffset = innerOffset * rowSign;
                    }
                    else {
                        rowOffset = innerOffset * rowSign;
                        colOffset = tier * colSign;
                    }
                    var resultRow = row + rowOffset;
                    var resultCol = col + colOffset;
                    if (resultRow < 0 ||
                        resultCol < 0 ||
                        resultRow >= this.rowCount ||
                        resultCol >= this.colCount) {
                        // console.log('溢出');
                        return false;
                    }
                    if (this.seatMap[resultRow][resultCol] === '0') {
                        var result = this.checkVisibleSeatAtRowColMiddleOffsetCount(resultRow, resultCol, this.needSeatCount);
                        if (result.length === this.needSeatCount) {
                            var resultMap = new Map();
                            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                                var integer = result_1[_i];
                                var row_1 = Math.floor(integer / this.colCount);
                                var col_1 = integer % this.colCount;
                                var key = row_1 + ':' + col_1;
                                var value = this.seatModelMap[row_1][col_1];
                                resultMap.set(key, value);
                                // [self selectedSeatRow:integer/this.colCount col:integer%this.rowCount];
                            }
                            if (this.resultCallback) {
                                this.resultCallback(resultMap);
                            }
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    /**
     * 判断指定点的所有行内偏移的结果
     * @param row 指定点行
     * @param col 指定点列
     * @param count 当前查找的数量(后期需要优化)
     * @returns {*} 是否存在期望点
     */
    AutoSeatPicking.prototype.checkVisibleSeatAtRowColMiddleOffsetCount = function (row, col, count) {
        if (col >= this.colCount || col < 0) {
            return [];
        }
        // 当期望是一个点的时候
        if (count === 1) {
            if (this.seatMap[row][col] === '0') {
                return [this.integerAt(row, col)];
            }
            return [];
        }
        // i为遍历偏移量 （目前是从左到右)
        for (var i = 0; i <= Math.floor(count / 2); i++) {
            var result = [];
            for (var j = 0; j < this.needSeatCount; j++) {
                result = result.concat(this.checkVisibleSeatAtRowColMiddleOffsetCount(row, col + i - Math.floor(this.needSeatCount / 2) + j, 1));
            }
            if (result.length === this.needSeatCount) {
                return result;
            }
            if (i <= Math.floor((count - 1) / 2)) {
                result = [];
                for (var j = 0; j < this.needSeatCount; j++) {
                    result = result.concat(this.checkVisibleSeatAtRowColMiddleOffsetCount(row, col - i - Math.floor(this.needSeatCount / 2) + j, 1));
                }
                if (result.length === this.needSeatCount) {
                    return result;
                }
            }
        }
        return [];
    };
    /**
     * 二维转一维
     * @param row 行号
     * @param col 列好
     * @returns {*} 一维对应的映射
     */
    AutoSeatPicking.prototype.integerAt = function (row, col) {
        return row * this.colCount + col;
    };
    AutoSeatPicking.maoyanSeatCheck = function (selectedSeats, smartSeats) {
        var _this = this;
        var rows = [];
        selectedSeats.forEach(function (seat) {
            if (rows.indexOf(seat.row) === -1) {
                rows.push(seat.row);
            }
        });
        var simpleSmartSeatsList = smartSeats.map(function (seat) {
            var isSel = selectedSeats.some(function (selSeat) {
                return selSeat.row === seat.row && selSeat.col === seat.col;
            });
            return { row: seat.row, col: seat.col, status: isSel ? -1 : seat.status };
        }).filter(function (seat) {
            return rows.indexOf(seat.row) !== -1;
        });
        var simpleSmartSeatsRowList = rows.map(function (row) {
            return simpleSmartSeatsList.filter(function (seat) {
                return seat.row === row;
            });
        });
        var _loop_1 = function (i) {
            var simpleSmartSeatsRow = simpleSmartSeatsRowList[i];
            simpleSmartSeatsRow.sort(function (a, b) {
                if (a.col > b.col) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
            var simpleSmartSeatsRowPieceList = [];
            var headIndex = Number.MIN_VALUE;
            var curPieceList = [];
            simpleSmartSeatsRow.forEach(function (seat, index) {
                if (seat.col - index !== headIndex) {
                    curPieceList = [seat];
                    simpleSmartSeatsRowPieceList.push(curPieceList);
                    headIndex = seat.col - index;
                }
                else {
                    curPieceList.push(seat);
                }
            });
            var visible = simpleSmartSeatsRowPieceList.map(function (simpleSmartSeatsRowPiece) {
                return _this.isVisibleChooseWithinRow(simpleSmartSeatsRowPiece);
            }).reduce(function (pre, cur) { return pre && cur; }, true);
            if (!visible) {
                return { value: false };
            }
        };
        for (var i = 0; i < simpleSmartSeatsRowList.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return true;
    };
    AutoSeatPicking.isVisibleChooseWithinRow = function (simpleSmartSeats) {
        var left_space = 0;
        var right_space = 0;
        var sel_space = -1;
        for (var i = 0; i < simpleSmartSeats.length; i++) {
            var seat = simpleSmartSeats[i];
            if (Math.abs(seat.status) !== 1) {
                left_space++;
                if (sel_space !== -1) {
                    sel_space++;
                }
            }
            if (seat.status === 1) {
                if ((right_space === 1 || left_space === 1) && (right_space * left_space)) {
                    return false;
                }
                right_space = 0;
                left_space = 0;
                sel_space = -1;
            }
            if (seat.status === -1) {
                if (left_space !== 0) {
                    right_space = left_space;
                    left_space = 0;
                }
                if (sel_space === 1) {
                    return false;
                }
                sel_space = 0;
            }
        }
        return !((right_space === 1 || left_space === 1) && (right_space * left_space));
    };
    return AutoSeatPicking;
}());
//# sourceMappingURL=AutoSeatPicking.js.map

/**
 * Created by cuppi on 2016/12/5.
 */
var _cellSize = 30;
var _cellRowSpace = 8;
var _cellColSpace = 8;
var instance$1 = null;
/**
 * 座位图管理类
 * @module manager
 */
var SeatManager = /** @class */ (function () {
    /**
     * 构造器
     * @returns {*}
     */
    function SeatManager() {
        if (!instance$1) {
            instance$1 = this;
        }
        return instance$1;
    }
    /**
     * 单例方法
     * @returns {SeatManager}
     */
    SeatManager.defaultManager = function () {
        return new SeatManager();
    };
    /**
     * 智能选座
     * @param smartSeats
     * @param count
     * @returns {Promise}
     */
    SeatManager.smartAutoSelected = function (smartSeats, count) {
        return new Promise(function (reduce, reject) {
            AutoSeatPicking.defaultManager().autoSelected(smartSeats, count, function (data) {
                reduce(data);
            });
        });
    };
    /**
     * 获取座位图时需要的参数
     * @param platform 平台类型
     * @param screening 平台数据
     * @returns {Object} 平台需要的参数
     */
    SeatManager.seatParasFromScreening = function (platform, screening) {
        var paras = {};
        if (platform === 'wangpiao') {
            paras = {
                cinemaId: screening.cinemaId,
                showId: screening.showId
            };
        }
        if (platform === 'spider') {
            paras = {
                cinemaId: screening.cinemaId,
                showId: screening.showId,
                hallId: screening.hallId
            };
        }
        if (platform === 'maizuo') {
            paras = {
                showId: screening.showId
            };
        }
        if (platform === 'danche') {
            paras = {
                showId: screening.showId
            };
        }
        if (platform === 'maoyan' || platform === 'meituan' || platform === 'dazhong') {
            paras = {
                showId: screening.showId
            };
        }
        if (platform === 'baidu') {
            paras = {
                showId: screening.showId
            };
        }
        if (platform === 'taobao') {
            paras = {
                cinemaId: platform.cinemaId,
                showId: platform.showId,
                sectionId: platform.sectionId
            };
        }
        return paras;
    };
    /**
     * 对原始座位图进行智能转换
     * @param type 平台类型
     * @param seatData 座位图原始数据
     * @returns {Array} 智能座位图列表
     */
    SeatManager.prototype.smartSeatsFromSeats = function (type, seatData) {
        if (type === 'ytb') {
            var seatMap = seatData.seatMap;
            for (var seatKey in seatMap) {
                var seat = seatMap[seatKey];
                seat.seatCol = seat.seatCol || '1';
                seat.seatRow = seat.seatRow || '1';
            }
        }
        var seatList = this.unitySeatWithSeatData(type, seatData);
        // 获取智能座位图
        return this.smartSeatsWithSeats(type, seatList);
    };
    /**
     * 获取智能座位图元数据
     * @param type 平台类型
     * @param smartSeats 智能座位图
     * @returns {{smartSeats: Array, seatRowData: Array.<*>}} 智能座位图详细信息
     */
    SeatManager.prototype.smartSeatDataFromSmartSeats = function (type, smartSeats) {
        var seatRowData = this.rowDataFromSmartSeats(smartSeats);
        var seatContentData = this.seatContentDataFromSmartSeats(smartSeats);
        return __assign({ smartSeats: smartSeats, seatRowData: seatRowData }, seatContentData);
    };
    /**
     * 对原始座位图进行智能转换
     * @param type 平台类型
     * @param seatData 座位图原始数据
     * @returns {{smartSeats: Array, seatRowData: Array.<*>}} 智能座位图详细信息
     */
    SeatManager.prototype.smartSeatDataFromSeats = function (type, seatData) {
        // 获取智能座位图
        var smartSeats = this.smartSeatsFromSeats(type, seatData);
        return this.smartSeatDataFromSmartSeats(type, smartSeats);
    };
    /** ***********************  下面的方法为内部方法  ******************** **/
    /**
     * 统一座位格式
     * @private
     * @param type
     * @param seatData
     * @returns {Array}
     */
    SeatManager.prototype.unitySeatWithSeatData = function (type, seatData) {
        if (!seatData) {
            return [];
        }
        if (type === 'maoyan' || type === 'meituan' || type === 'dazhong') {
            var seatList_1 = [];
            var sections = seatData.sections;
            for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
                var section = sections_1[_i];
                for (var sectionId in section) {
                    if (section.hasOwnProperty(sectionId)) {
                        var seatMap_1 = section[sectionId].seatMap;
                        var maxRow_1 = section[sectionId].maxRow ? section[sectionId].maxRow : 0;
                        var maxColumn_1 = section[sectionId].maxColumn ? section[sectionId].maxColumn : 0;
                        for (var i = 0; i <= maxRow_1; i++) {
                            for (var j = 0; j <= maxColumn_1; j++) {
                                var seat = seatMap_1[i + ':' + j];
                                // 去掉走廊
                                if (seat && seat.status !== 'E') {
                                    seat.sectionId = sectionId;
                                    // 时间复杂度多了  但是代码整洁
                                    seatList_1.push(seat);
                                }
                            }
                        }
                    }
                }
            }
            return seatList_1;
        }
        // 淘票票预处理
        if (type === 'taobao' && !seatData.regular) {
            seatData = this.handleTaoBaoSeatData(seatData);
        }
        var seatList = [];
        var seatMap = seatData.seatMap;
        var maxRow = seatData.maxRow;
        var maxColumn = seatData.maxColumn;
        // 获取基本座位图
        if (type === 'danche') {
            for (var i = 0; i <= maxRow; i++) {
                for (var j = 0; j <= maxColumn; j++) {
                    var seat = seatMap[i + ':' + j];
                    if (seat && seat.isSeat) {
                        // 时间复杂度多了  但是代码整洁
                        seatList.push(seat);
                    }
                }
            }
        }
        else if (type === 'baidu') {
            for (var i = 0; i <= maxRow; i++) {
                for (var j = 0; j <= maxColumn; j++) {
                    var seat = seatMap[i + ':' + j];
                    if (seat && seat.seatNo && seat.seatNo !== '') {
                        seat.rowId = i;
                        seat.columnId = j;
                        // 时间复杂度多了  但是代码整洁
                        seatList.push(seat);
                    }
                }
            }
        }
        else {
            for (var i = 0; i <= maxRow; i++) {
                for (var j = 0; j <= maxColumn; j++) {
                    var seat = seatMap[i + ':' + j];
                    if (seat) {
                        // 时间复杂度多了  但是代码整洁
                        seatList.push(seat);
                    }
                }
            }
        }
        return seatList;
    };
    /**
     * 淘票票座位图处理
     * @param seatData
     * @returns {*}
     */
    SeatManager.prototype.handleTaoBaoSeatData = function (seatData) {
        var seatMap = seatData.seatMap;
        var seatRowList = [];
        var seatColList = [];
        for (var key in seatMap) {
            if (seatMap.hasOwnProperty(key)) {
                var location = key.split(':');
                seatRowList.push(parseInt(location[0]));
                seatColList.push(parseInt(location[1]));
            }
        }
        seatRowList.sort(function (a, b) {
            return (a - b) && ((a - b) / Math.abs(a - b));
        });
        seatColList.sort(function (a, b) {
            return (a - b) && ((a - b) / Math.abs(a - b));
        });
        var closeRowSpace = {};
        var closeColSpace = {};
        for (var i = 1, l = Math.min(seatRowList.length, seatColList.length); i < l; i++) {
            var rowOffset = seatRowList[i] - seatRowList[i - 1];
            if (closeRowSpace.hasOwnProperty(rowOffset)) {
                closeRowSpace[rowOffset]++;
            }
            else {
                closeRowSpace[rowOffset] = 1;
            }
            var colOffset = seatColList[i] - seatColList[i - 1];
            if (closeColSpace.hasOwnProperty(colOffset)) {
                closeColSpace[colOffset]++;
            }
            else {
                closeColSpace[colOffset] = 1;
            }
        }
        var rowSpace = Number.MAX_VALUE;
        var rowStress = 0;
        for (var spaceString in closeRowSpace) {
            if (closeRowSpace.hasOwnProperty(spaceString)) {
                var space = parseInt(spaceString);
                if (space !== 0 && closeRowSpace[space] > rowStress) {
                    rowSpace = space;
                    rowStress = closeRowSpace[space];
                }
            }
        }
        var colSpace = Number.MAX_VALUE;
        var colStress = 0;
        for (var spaceString in closeColSpace) {
            var space = parseInt(spaceString);
            if (space !== 0 && closeColSpace[space] > colStress) {
                colSpace = space;
                colStress = closeColSpace[space];
            }
        }
        var filteredSeatMap = {};
        for (var key in seatMap) {
            if (seatMap.hasOwnProperty(key)) {
                var location = key.split(':');
                var filteredRow = Math.floor(parseInt(location[0]) / rowSpace);
                var filteredCol = Math.floor(parseInt(location[1]) / colSpace);
                var rowId = Math.floor(seatMap[key].rowId / rowSpace);
                var columnId = Math.floor(seatMap[key].columnId / colSpace);
                filteredSeatMap[filteredRow + ':' + filteredCol] = __assign(__assign({}, seatMap[key]), { rowId: rowId, columnId: columnId });
            }
        }
        seatData.seatMap = filteredSeatMap;
        return seatData;
    };
    /**
     * 获取智能座位图通用方法
     * @private
     * @param type 平台类型
     * @param seatList 基本座位图
     * @returns {Array} 智能座位图
     */
    SeatManager.prototype.smartSeatsWithSeats = function (type, seatList) {
        var smartSeats = [];
        if (type === 'wangpiao') {
            smartSeats = this.smartSeatsWithWPSeats(seatList);
        }
        if (type === 'spider') {
            smartSeats = this.smartSeatsWithSPSeats(seatList);
        }
        if (type === 'maizuo') {
            smartSeats = this.smartSeatsWithMZSeats(seatList);
        }
        if (type === 'danche') {
            smartSeats = this.smartSeatsWithDCSeats(seatList);
        }
        if (type === 'maoyan' || type === 'meituan' || type === 'dazhong') {
            smartSeats = this.smartSeatsWithMYSeats(seatList);
        }
        if (type === 'baidu') {
            smartSeats = this.smartSeatsWithBDSeats(seatList);
        }
        if (type === 'taobao') {
            smartSeats = this.smartSeatsWithTBSeats(seatList);
        }
        if (type === 'ytb') {
            smartSeats = this.smartSeatsWithYTBSeats(seatList);
        }
        var minRow = Number.MAX_VALUE;
        var minCol = Number.MAX_VALUE;
        smartSeats.forEach(function (seat) {
            minRow = Math.min(minRow, seat.row);
            minCol = Math.min(minCol, seat.col);
        });
        smartSeats.forEach(function (seat) {
            seat.adjustRow = seat.row - minRow;
            seat.adjustCol = seat.col - minCol;
            seat.rowLocation -= minRow * (_cellSize + _cellRowSpace);
            seat.colLocation -= minCol * (_cellSize + _cellColSpace);
        });
        return smartSeats;
    };
    /**
     * 获取网票智能座位图
     * @private
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithWPSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.key.split(':').shift());
            var col = Number.parseInt(seatModel.key.split(':').pop());
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_10.numberFromString(seatModel.Name.split(':').shift(), true, 1);
            var colNumber = lib_10.numberFromString(seatModel.Name.split(':').pop(), true, 1);
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            return __assign(__assign({}, bridgeModel), { 
                // N:lock  Y:unLock
                status: seatRowModel.Status === 'Y' ? 0 : 1, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: Number.parseInt(seatRowModel.LoveFlag) });
        });
    };
    /**
     * 获取蜘蛛智能座位图
     * @private
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithSPSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.rowNum);
            var col = Number.parseInt(seatModel.columnNum);
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_10.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_10.numberFromString(seatModel.columnId, true, 1);
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            return __assign(__assign({}, bridgeModel), { status: seatRowModel.isLock
                    ? 1
                    : 0, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: Number.parseInt(seatRowModel.loveIndex) });
        });
    };
    /**
     * 获取卖座智能座位图
     * @private
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithMZSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.rowNum);
            var col = Number.parseInt(seatModel.columnNum);
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_10.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_10.numberFromString(seatModel.columnId, true, 1);
            // 上海百美汇影城
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            return __assign(__assign({}, bridgeModel), { status: seatRowModel.isLock === '1'
                    ? 1
                    : 0, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: Number.parseInt(seatRowModel.loveIndex) });
        });
    };
    /**
     * 获取单车智能座位图
     * @private
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithDCSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.rowNum);
            var col = Number.parseInt(seatModel.columnNum);
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_10.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_10.numberFromString(seatModel.columnId, true, 1);
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            console.log(seatRowModel.loveIndex);
            return __assign(__assign({}, bridgeModel), { status: seatRowModel.isLock
                    ? 1
                    : 0, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: Number.parseInt(seatRowModel.loveIndex) });
        });
    };
    /**
     * 获取猫眼智能座位图
     * @private
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithMYSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.rowNo);
            var col = Number.parseInt(seatModel.columnNo);
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_10.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_10.numberFromString(seatModel.columnId, true, 1);
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            var loveIndex = 0;
            if (seatRowModel.status === 'L') {
                loveIndex = 1;
            }
            else if (seatRowModel.status === 'R') {
                loveIndex = 2;
            }
            return __assign(__assign({}, bridgeModel), { status: seatRowModel.status === 'LK'
                    ? 1
                    : 0, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: loveIndex });
        });
    };
    /**
     * 获取百度智能座位图
     * @private
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithBDSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.rowId);
            var col = Number.parseInt(seatModel.columnId);
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_10.numberFromString(seatModel.rowNo, true, 1);
            var colNumber = lib_10.numberFromString(seatModel.columnNo, true, 1);
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            return __assign(__assign({}, bridgeModel), { status: seatRowModel.status === '2'
                    ? 1
                    : 0, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: Number.parseInt(seatRowModel.isLove), areaInfo: seatRowModel.area });
        });
    };
    /**
     * 获取淘票票智能座位图
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithTBSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.rowId);
            var col = Number.parseInt(seatModel.columnId);
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_10.numberFromString(rowOriNumber, true, 1);
            var colNumber = lib_10.numberFromString(colOriNumber, true, 1);
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            var loveIndex = 0;
            loveIndex = seatRowModel.loveIndex;
            return __assign(__assign({}, bridgeModel), { status: seatRowModel.status === 0
                    ? 1
                    : 0, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: loveIndex });
        });
    };
    /**
     * 获取影托帮智能座位图
     * @param seatList
     * @returns {Array}
     */
    SeatManager.prototype.smartSeatsWithYTBSeats = function (seatList) {
        return seatList.map(function (seatModel) {
            var row = Number.parseInt(seatModel.graphRow);
            var col = Number.parseInt(seatModel.graphCol);
            var rowOriNumber = lib_10.numberRemoveLeftZero(seatModel.seatRow);
            var colOriNumber = lib_10.numberRemoveLeftZero(seatModel.seatCol);
            var rowNumber = lib_10.numberFromString(rowOriNumber, true, 1);
            var colNumber = lib_10.numberFromString(colOriNumber, true, 1);
            return {
                rowOriNumber: rowOriNumber,
                colOriNumber: colOriNumber,
                row: row,
                col: col,
                rowNumber: rowNumber,
                colNumber: colNumber,
                seatModel: seatModel
            };
        }).map(function (bridgeModel) {
            var seatRowModel = bridgeModel.seatModel;
            var loveIndex = 0;
            if (seatRowModel.seatType === 'L') {
                loveIndex = 1;
            }
            else if (seatRowModel.seatType === 'R') {
                loveIndex = 2;
            }
            return __assign(__assign({}, bridgeModel), { status: seatRowModel.seatState === -1
                    ? 1
                    : 0, rowLocation: bridgeModel.row * (_cellSize + _cellRowSpace), colLocation: bridgeModel.col * (_cellSize + _cellColSpace), loveIndex: loveIndex });
        });
    };
    /**
     * 获取座位图尺寸
     * @private
     * @param smartSeats 智能座位图
     * @returns {{width: *, height: *}} 座位图尺寸
     */
    SeatManager.prototype.seatContentSizeWithSmartSeats = function (smartSeats) {
        // 计算座位图大小
        var maxWidth = 0;
        var maxHeight = 0;
        for (var _i = 0, smartSeats_1 = smartSeats; _i < smartSeats_1.length; _i++) {
            var smartSeatModel = smartSeats_1[_i];
            if (maxWidth < smartSeatModel.colLocation) {
                maxWidth = smartSeatModel.colLocation;
            }
            if (maxHeight < smartSeatModel.rowLocation) {
                maxHeight = smartSeatModel.rowLocation;
            }
        }
        var seatContentWidth = maxWidth + _cellSize;
        var seatContentHeight = maxHeight + _cellSize;
        return { 'width': seatContentWidth, 'height': seatContentHeight };
    };
    /**
     * 获取座位图元数据
     * @private
     * @param smartSeats 智能座位图
     * @returns {{seatCellWidth: number, seatCellHeight: number, seatContentWidth, seatContentHeight}}
     */
    SeatManager.prototype.seatContentDataFromSmartSeats = function (smartSeats) {
        var seatContentSize = this.seatContentSizeWithSmartSeats(smartSeats);
        return {
            'seatCellRowSpace': _cellRowSpace,
            'seatCellColSpace': _cellColSpace,
            'seatCellWidth': _cellSize,
            'seatCellHeight': _cellSize,
            'seatContentWidth': seatContentSize.width,
            'seatContentHeight': seatContentSize.height
        };
    };
    /**
     * 获取行号数据
     * @private
     * @param smartSeats 智能座位图
     * @returns {Array.<*>} 返回行号数据 {rowNumber, colLocation}
     */
    SeatManager.prototype.rowDataFromSmartSeats = function (smartSeats) {
        var dict = new Map();
        for (var _i = 0, smartSeats_2 = smartSeats; _i < smartSeats_2.length; _i++) {
            var seat = smartSeats_2[_i];
            var row = seat.rowNumber;
            if (dict.hasOwnProperty(row)) {
                continue;
            }
            dict.set(row, seat.rowLocation);
        }
        var allRowData = [];
        dict.forEach(function (value, key) {
            allRowData.push({ rowNumber: key, colLocation: value });
        });
        return allRowData.sort(function (a, b) {
            return a.rowNumber.toString().localeCompare(b.rowNumber.toString());
        });
    };
    SeatManager.maoyanSeatCheck = function (selectedSeats, smartSeats) {
        var _this = this;
        var rows = [];
        selectedSeats.forEach(function (seat) {
            if (rows.indexOf(seat.row) === -1) {
                rows.push(seat.row);
            }
        });
        var simpleSmartSeatsList = smartSeats.map(function (seat) {
            var isSel = selectedSeats.some(function (selSeat) {
                return selSeat.row === seat.row && selSeat.col === seat.col;
            });
            return { row: seat.row, col: seat.col, status: isSel ? -1 : seat.status };
        }).filter(function (seat) {
            return rows.indexOf(seat.row) !== -1;
        });
        var simpleSmartSeatsRowList = rows.map(function (row) {
            return simpleSmartSeatsList.filter(function (seat) {
                return seat.row === row;
            });
        });
        var _loop_1 = function (i) {
            var simpleSmartSeatsRow = simpleSmartSeatsRowList[i];
            simpleSmartSeatsRow.sort(function (a, b) {
                if (a.col > b.col) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
            var simpleSmartSeatsRowPieceList = [];
            var headIndex = Number.MIN_VALUE;
            var curPieceList = [];
            simpleSmartSeatsRow.forEach(function (seat, index$$1) {
                if (seat.col - index$$1 !== headIndex) {
                    curPieceList = [seat];
                    simpleSmartSeatsRowPieceList.push(curPieceList);
                    headIndex = seat.col - index$$1;
                }
                else {
                    curPieceList.push(seat);
                }
            });
            var visible = simpleSmartSeatsRowPieceList.map(function (simpleSmartSeatsRowPiece) {
                return _this.isVisibleChooseWithinRow(simpleSmartSeatsRowPiece);
            }).reduce(function (pre, cur) { return pre && cur; }, true);
            if (!visible) {
                return { value: false };
            }
        };
        for (var i = 0; i < simpleSmartSeatsRowList.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return true;
    };
    SeatManager.isVisibleChooseWithinRow = function (simpleSmartSeats) {
        var left_space = 0;
        var right_space = 0;
        var sel_space = -1;
        for (var i = 0; i < simpleSmartSeats.length; i++) {
            var seat = simpleSmartSeats[i];
            if (Math.abs(seat.status) !== 1) {
                left_space++;
                if (sel_space !== -1) {
                    sel_space++;
                }
            }
            if (seat.status === 1) {
                if ((right_space === 1 || left_space === 1) && (right_space * left_space)) {
                    return false;
                }
                right_space = 0;
                left_space = 0;
                sel_space = -1;
            }
            if (seat.status === -1) {
                if (left_space !== 0) {
                    right_space = left_space;
                    left_space = 0;
                }
                if (sel_space === 1) {
                    return false;
                }
                sel_space = 0;
            }
        }
        return !((right_space === 1 || left_space === 1) && (right_space * left_space));
    };
    return SeatManager;
}());
//# sourceMappingURL=JManagerSeat.js.map

function _netcinema(cinema) {
    return {
        address: cinema.cinemaAddress,
        id: cinema.cinemaId,
        name: cinema.cinemaName,
        distance: cinema.distance,
        compareCount: cinema.maxCompareCount,
        comparedNames: JSON.parse(cinema.maxCompareNames),
        minPrice: cinema.minPrice
    };
}
function _cinemaScreeningItems(data) {
    return data = __assign(__assign({}, data), { showItems: data.showItems.map(function (_) { return (__assign(__assign({}, _), data)); }) });
}
var JNetworkCinema = {
    cinemaDetail: {
        url: '/cinema/cinemadetail',
        params: {
            cinemaId: true,
            openId: false,
        },
        book: [
            'cinemaId',
        ]
    },
    cinemasList: {
        url: '/cinema/cinemasbycityordertype',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            orderType: {
                required: false,
                default: 2
            },
            regionName: false,
            filmId: false,
            feature: false,
            page: false,
            size: false,
            date: false,
        },
        cook: function (_) { return _.map(_netcinema); }
    },
    cinemaScreeningFilmList: {
        url: '/cinema/films',
        params: {
            cinemaId: true
        },
        book: [
            'cinemaId'
        ]
    },
    cinemaScreeningDateList: {
        url: '/cinema/filmshowdates',
        params: {
            cinemaId: true,
            filmId: true
        },
        book: [
            'cinemaId',
            'filmId'
        ],
        cook: function (data) { return data.map(function (dateString) {
            return lib_7.timeIntervalFromDateString(dateString);
        }); }
    },
    cinemaScreeningItems: {
        url: '/cinema/filmshows',
        params: {
            cinemaId: true,
            filmId: true,
            date: {
                required: true,
                cook: function (_) {
                    return lib_7.dateStringFromTimeInterval(_, 'yyyy-MM-dd');
                }
            }
        },
        book: [
            'cinemaId',
            'filmId',
            'date'
        ],
        cook: function (_) { return _.map(_cinemaScreeningItems); }
    },
    cinemaSeats: {
        url: '/cinema/realtimeseats',
        params: {
            type: {
                require: true,
                cook: function (_) { return ((_ === 'meituan' || _ === 'dazhong') ? 'maoyan' : _); }
            },
            cinemaId: true,
            showId: true,
            sectionId: false
        },
        cook: function (_) {
            return _;
        }
    },
    cinemaSmartSeats: {
        url: '/cinema/realtimeseats',
        params: {
            type: {
                require: true,
                cook: function (_) { return ((_ === 'meituan' || _ === 'dazhong') ? 'maoyan' : _); }
            },
            cinemaId: true,
            showId: true,
            sectionId: false
        },
        cook: function (_, __) {
            var platform = _.platform;
            if (_.hasOwnProperty('requestId')) {
                return _;
            }
            return SeatManager.defaultManager().smartSeatsFromSeats(platform, _);
        }
    },
    cinemaSmartSeatsByRequestId: {
        url: '/cinema/realtimeseatsinfo',
        params: {
            requestId: true
        },
        book: [
            'requestId'
        ],
        cook: function (_, __) {
            if (!_) {
                return null;
            }
            var platform = _.platform;
            return SeatManager.defaultManager().smartSeatsFromSeats(platform, _);
        }
    }
};
//# sourceMappingURL=JNetworkCinema.js.map

var RootModel = /** @class */ (function () {
    function RootModel(obj) {
    }
    return RootModel;
}());
var fillProperty = function (self, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && self.hasOwnProperty(key)) {
            self[key] = obj[key];
        }
    }
};
//# sourceMappingURL=RootModel.js.map

var FilmModel = /** @class */ (function (_super) {
    __extends(FilmModel, _super);
    function FilmModel(obj) {
        var _this = _super.call(this, obj) || this;
        _this.actors = null;
        _this.area = null;
        _this.bigImg = null;
        _this.category = null;
        _this.description = null;
        _this.dimensional = null;
        _this.director = null;
        _this.duration = null;
        _this.grade = null;
        _this.hotOrWait = null;
        _this.id = null;
        _this.info = null;
        _this.language = null;
        _this.name = null;
        _this.photos = null;
        _this.show = null;
        _this.showDate = null;
        _this.smallImg = null;
        fillProperty(_this, obj);
        return _this;
    }
    FilmModel.create = function (obj) {
        return new FilmModel(obj);
    };
    return FilmModel;
}(RootModel));
//# sourceMappingURL=FilmModel.js.map

var JNetworkFilm = {
    hotFilms: {
        url: '/film/hotfilms',
        cook: function (_a) {
            var count = _a.count, films = _a.films;
            return { count: count, films: films.map(function (_) { return FilmModel.create(_); }) };
        }
    },
    hotFilmsByPage: {
        url: '/film/hotfilmspage',
        params: {
            page: true,
            size: true
        },
        cook: function (data) { return data.map(function (_) { return FilmModel.create(_); }); }
    },
    waitFilms: {
        url: '/film/soonfilms',
        cook: function (_a) {
            var count = _a.count, films = _a.films;
            return { count: count, films: films.map(function (_) { return FilmModel.create(_); }) };
        }
    },
    waitFilmsByPage: {
        url: '/film/soonfilmspage',
        params: {
            page: true,
            size: true
        },
        cook: function (data) { return data.map(function (_) { return FilmModel.create(_); }); }
    },
    filmDetail: {
        url: '/film/film',
        params: {
            filmId: true
        },
        book: [
            'filmId'
        ],
        cook: function (data) { return FilmModel.create(data); }
    },
    filmHotComments: {
        url: '/film/hotcomments',
        params: {
            filmId: true
        },
        book: [
            'filmId'
        ],
        description: '无数据'
    },
};
//# sourceMappingURL=JNetworkFilm.js.map

/**
 * 城市模型
 * @memberOf module:model
 */
var CityModel = /** @class */ (function (_super) {
    __extends(CityModel, _super);
    function CityModel(obj) {
        var _this = _super.call(this, obj) || this;
        _this.id = null;
        _this.name = null;
        _this.latin = null;
        fillProperty(_this, obj);
        return _this;
    }
    CityModel.create = function (obj) {
        var city_en = obj.city_en, city_name = obj.city_name, id = obj.id;
        return new CityModel({
            id: id,
            name: city_name,
            latin: city_en
        });
    };
    return CityModel;
}(RootModel));
//# sourceMappingURL=CityModel.js.map

/**
 * 城市模型
 * @memberOf module:model
 */
var DistrictModel = /** @class */ (function (_super) {
    __extends(DistrictModel, _super);
    function DistrictModel(obj) {
        var _this = _super.call(this, obj) || this;
        _this.id = null;
        _this.name = null;
        fillProperty(_this, obj);
        return _this;
    }
    DistrictModel.create = function (obj) {
        var tails = obj.tails, id = obj.id;
        return new DistrictModel({
            id: id,
            name: tails.Name
        });
    };
    return DistrictModel;
}(RootModel));
//# sourceMappingURL=DistrictModel.js.map

/*
* 优化代码标准模板
* */
var JNetworkLocation = {
    cities: {
        url: '/location/cities',
        cook: function (data) { return data.map(function (_) { return CityModel.create(_); }); }
    },
    city: {
        url: '/location/city',
        useBodyData: [
            'coordinate'
        ],
        cook: function (data) { return CityModel.create(data); }
    },
    cityById: {
        url: '/location/cityById',
        useBodyData: [
            'cityId'
        ],
        cook: function (data) { return CityModel.create(data); }
    },
    districts: {
        url: '/location/districts',
        useBodyData: [
            'cityId'
        ],
        cook: function (data) { return data.map(function (_) { return DistrictModel.create(_); }); }
    },
    hotCities: {
        url: '/location/hotCities',
        cook: function (data) { return data.map(function (_) { return CityModel.create(_); }); }
    }
};
//# sourceMappingURL=JNetworkLocation.js.map

var JNetworkSearch = {
    search: {
        url: '/search/searchall',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            key: true,
            page: true,
            size: false
        },
        book: [
            'key',
            'page',
            'size?'
        ],
        description: 'cinema 无数据'
    },
    searchHotKeys: {
        url: '/search/hotkey',
        params: {
            cityId: false
        }
    }
};
//# sourceMappingURL=JNetworkSearch.js.map

var JNetworkOther = {
    systemEncrypt: {
        url: '/system/encrypt',
        params: {
            key: true
        },
        book: [
            'key'
        ]
    },
    systemDecrypt: {
        url: '/system/decrypt',
        params: {
            key: true
        },
        book: [
            'key'
        ]
    },
};
//# sourceMappingURL=JNetworkOther.js.map

var JNetworkActivity = {
    getActivityQuota: {
        url: '/get/activity/quota',
        params: {
            openId: true,
            activityId: true,
            positionCityId: true,
            selectedCityId: true
        },
        book: [
            'activityId',
            'positionCityId',
            'selectedCityId'
        ]
    },
    getAllActivity: {
        url: '/get/all/activity'
    },
    inActivityDuration: {
        url: '/in/activity/duration',
        params: {
            activityId: true
        },
        book: [
            'activityId'
        ]
    },
    redirectFindPage: {
        url: '/redirect/find/page'
    }
};
//# sourceMappingURL=JNetworkActivity.js.map

var DEFAULT_NETWORK_CONFIG = {
    precook: function (_) { return _.data; },
    cook: function (_) { return _; },
    method: 'post',
    url: '',
    book: null,
    params: {},
    headers: {},
    bodyData: {},
    useParams: [],
    useHeaders: [],
    useBodyData: [],
    rule: [0, 1, 2],
    encryption: {
        required: function () { return true; },
        paramsInterceptor: function (params, self) { return (__assign(__assign({}, params), self.pickInjectParams())); }
    },
    methodName: null
};
var JConfig = {
    JNetworkAccount: JNetworkAccount,
    JNetworkMine: JNetworkMine,
    JNetworkTrade: JNetworkTrade,
    JNetworkCity: JNetworkCity,
    JNetworkBanner: JNetworkBanner,
    JNetworkCinema: JNetworkCinema,
    JNetworkFilm: JNetworkFilm,
    JNetworkLocation: JNetworkLocation,
    JNetworkSearch: JNetworkSearch,
    JNetworkOther: JNetworkOther,
    JNetworkActivity: JNetworkActivity,
    DEFAULT_NETWORK_CONFIG: DEFAULT_NETWORK_CONFIG
};
//# sourceMappingURL=JConfig.js.map

var crypt = createCommonjsModule(function (module) {
(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();
});

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

var charenc_1 = charenc;

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var isBuffer_1 = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
};

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

var md5 = createCommonjsModule(function (module) {
(function(){
  var crypt$$1 = crypt,
      utf8 = charenc_1.utf8,
      isBuffer = isBuffer_1,
      bin = charenc_1.bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt$$1.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt$$1.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt$$1.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt$$1.bytesToHex(digestbytes);
  };

})();
});

var jsencrypt = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	factory(exports);
}(commonjsGlobal, (function (exports) {
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
function int2char(n) {
    return BI_RM.charAt(n);
}
//#region BIT_OPERATIONS
// (public) this & a
function op_and(x, y) {
    return x & y;
}
// (public) this | a
function op_or(x, y) {
    return x | y;
}
// (public) this ^ a
function op_xor(x, y) {
    return x ^ y;
}
// (public) this & ~a
function op_andnot(x, y) {
    return x & ~y;
}
// return index of lowest 1-bit in x, x < 2^31
function lbit(x) {
    if (x == 0) {
        return -1;
    }
    var r = 0;
    if ((x & 0xffff) == 0) {
        x >>= 16;
        r += 16;
    }
    if ((x & 0xff) == 0) {
        x >>= 8;
        r += 8;
    }
    if ((x & 0xf) == 0) {
        x >>= 4;
        r += 4;
    }
    if ((x & 3) == 0) {
        x >>= 2;
        r += 2;
    }
    if ((x & 1) == 0) {
        ++r;
    }
    return r;
}
// return number of 1 bits in x
function cbit(x) {
    var r = 0;
    while (x != 0) {
        x &= x - 1;
        ++r;
    }
    return r;
}
//#endregion BIT_OPERATIONS

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";
function hex2b64(h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
        c = parseInt(h.substring(i, i + 3), 16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if (i + 1 == h.length) {
        c = parseInt(h.substring(i, i + 1), 16);
        ret += b64map.charAt(c << 2);
    }
    else if (i + 2 == h.length) {
        c = parseInt(h.substring(i, i + 2), 16);
        ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0) {
        ret += b64pad;
    }
    return ret;
}
// convert a base64 string to hex
function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3
    var slop = 0;
    for (i = 0; i < s.length; ++i) {
        if (s.charAt(i) == b64pad) {
            break;
        }
        var v = b64map.indexOf(s.charAt(i));
        if (v < 0) {
            continue;
        }
        if (k == 0) {
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 1;
        }
        else if (k == 1) {
            ret += int2char((slop << 2) | (v >> 4));
            slop = v & 0xf;
            k = 2;
        }
        else if (k == 2) {
            ret += int2char(slop);
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 3;
        }
        else {
            ret += int2char((slop << 2) | (v >> 4));
            ret += int2char(v & 0xf);
            k = 0;
        }
    }
    if (k == 1) {
        ret += int2char(slop << 2);
    }
    return ret;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

// Hex JavaScript decoder
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
var decoder;
var Hex = {
    decode: function (a) {
        var i;
        if (decoder === undefined) {
            var hex = "0123456789ABCDEF";
            var ignore = " \f\n\r\t\u00A0\u2028\u2029";
            decoder = {};
            for (i = 0; i < 16; ++i) {
                decoder[hex.charAt(i)] = i;
            }
            hex = hex.toLowerCase();
            for (i = 10; i < 16; ++i) {
                decoder[hex.charAt(i)] = i;
            }
            for (i = 0; i < ignore.length; ++i) {
                decoder[ignore.charAt(i)] = -1;
            }
        }
        var out = [];
        var bits = 0;
        var char_count = 0;
        for (i = 0; i < a.length; ++i) {
            var c = a.charAt(i);
            if (c == "=") {
                break;
            }
            c = decoder[c];
            if (c == -1) {
                continue;
            }
            if (c === undefined) {
                throw new Error("Illegal character at offset " + i);
            }
            bits |= c;
            if (++char_count >= 2) {
                out[out.length] = bits;
                bits = 0;
                char_count = 0;
            }
            else {
                bits <<= 4;
            }
        }
        if (char_count) {
            throw new Error("Hex encoding incomplete: 4 bits missing");
        }
        return out;
    }
};

// Base64 JavaScript decoder
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
var decoder$1;
var Base64 = {
    decode: function (a) {
        var i;
        if (decoder$1 === undefined) {
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var ignore = "= \f\n\r\t\u00A0\u2028\u2029";
            decoder$1 = Object.create(null);
            for (i = 0; i < 64; ++i) {
                decoder$1[b64.charAt(i)] = i;
            }
            for (i = 0; i < ignore.length; ++i) {
                decoder$1[ignore.charAt(i)] = -1;
            }
        }
        var out = [];
        var bits = 0;
        var char_count = 0;
        for (i = 0; i < a.length; ++i) {
            var c = a.charAt(i);
            if (c == "=") {
                break;
            }
            c = decoder$1[c];
            if (c == -1) {
                continue;
            }
            if (c === undefined) {
                throw new Error("Illegal character at offset " + i);
            }
            bits |= c;
            if (++char_count >= 4) {
                out[out.length] = (bits >> 16);
                out[out.length] = (bits >> 8) & 0xFF;
                out[out.length] = bits & 0xFF;
                bits = 0;
                char_count = 0;
            }
            else {
                bits <<= 6;
            }
        }
        switch (char_count) {
            case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
            case 2:
                out[out.length] = (bits >> 10);
                break;
            case 3:
                out[out.length] = (bits >> 16);
                out[out.length] = (bits >> 8) & 0xFF;
                break;
        }
        return out;
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
    unarmor: function (a) {
        var m = Base64.re.exec(a);
        if (m) {
            if (m[1]) {
                a = m[1];
            }
            else if (m[2]) {
                a = m[2];
            }
            else {
                throw new Error("RegExp out of sync");
            }
        }
        return Base64.decode(a);
    }
};

// Big integer base-10 printing library
// Copyright (c) 2014 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
var max = 10000000000000; // biggest integer that can still fit 2^53 when multiplied by 256
var Int10 = /** @class */ (function () {
    function Int10(value) {
        this.buf = [+value || 0];
    }
    Int10.prototype.mulAdd = function (m, c) {
        // assert(m <= 256)
        var b = this.buf;
        var l = b.length;
        var i;
        var t;
        for (i = 0; i < l; ++i) {
            t = b[i] * m + c;
            if (t < max) {
                c = 0;
            }
            else {
                c = 0 | (t / max);
                t -= c * max;
            }
            b[i] = t;
        }
        if (c > 0) {
            b[i] = c;
        }
    };
    Int10.prototype.sub = function (c) {
        // assert(m <= 256)
        var b = this.buf;
        var l = b.length;
        var i;
        var t;
        for (i = 0; i < l; ++i) {
            t = b[i] - c;
            if (t < 0) {
                t += max;
                c = 1;
            }
            else {
                c = 0;
            }
            b[i] = t;
        }
        while (b[b.length - 1] === 0) {
            b.pop();
        }
    };
    Int10.prototype.toString = function (base) {
        if ((base || 10) != 10) {
            throw new Error("only base 10 is supported");
        }
        var b = this.buf;
        var s = b[b.length - 1].toString();
        for (var i = b.length - 2; i >= 0; --i) {
            s += (max + b[i]).toString().substring(1);
        }
        return s;
    };
    Int10.prototype.valueOf = function () {
        var b = this.buf;
        var v = 0;
        for (var i = b.length - 1; i >= 0; --i) {
            v = v * max + b[i];
        }
        return v;
    };
    Int10.prototype.simplify = function () {
        var b = this.buf;
        return (b.length == 1) ? b[0] : this;
    };
    return Int10;
}());

// ASN.1 JavaScript decoder
var ellipsis = "\u2026";
var reTimeS = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
var reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
function stringCut(str, len) {
    if (str.length > len) {
        str = str.substring(0, len) + ellipsis;
    }
    return str;
}
var Stream = /** @class */ (function () {
    function Stream(enc, pos) {
        this.hexDigits = "0123456789ABCDEF";
        if (enc instanceof Stream) {
            this.enc = enc.enc;
            this.pos = enc.pos;
        }
        else {
            // enc should be an array or a binary string
            this.enc = enc;
            this.pos = pos;
        }
    }
    Stream.prototype.get = function (pos) {
        if (pos === undefined) {
            pos = this.pos++;
        }
        if (pos >= this.enc.length) {
            throw new Error("Requesting byte offset " + pos + " on a stream of length " + this.enc.length);
        }
        return ("string" === typeof this.enc) ? this.enc.charCodeAt(pos) : this.enc[pos];
    };
    Stream.prototype.hexByte = function (b) {
        return this.hexDigits.charAt((b >> 4) & 0xF) + this.hexDigits.charAt(b & 0xF);
    };
    Stream.prototype.hexDump = function (start, end, raw) {
        var s = "";
        for (var i = start; i < end; ++i) {
            s += this.hexByte(this.get(i));
            if (raw !== true) {
                switch (i & 0xF) {
                    case 0x7:
                        s += "  ";
                        break;
                    case 0xF:
                        s += "\n";
                        break;
                    default:
                        s += " ";
                }
            }
        }
        return s;
    };
    Stream.prototype.isASCII = function (start, end) {
        for (var i = start; i < end; ++i) {
            var c = this.get(i);
            if (c < 32 || c > 176) {
                return false;
            }
        }
        return true;
    };
    Stream.prototype.parseStringISO = function (start, end) {
        var s = "";
        for (var i = start; i < end; ++i) {
            s += String.fromCharCode(this.get(i));
        }
        return s;
    };
    Stream.prototype.parseStringUTF = function (start, end) {
        var s = "";
        for (var i = start; i < end;) {
            var c = this.get(i++);
            if (c < 128) {
                s += String.fromCharCode(c);
            }
            else if ((c > 191) && (c < 224)) {
                s += String.fromCharCode(((c & 0x1F) << 6) | (this.get(i++) & 0x3F));
            }
            else {
                s += String.fromCharCode(((c & 0x0F) << 12) | ((this.get(i++) & 0x3F) << 6) | (this.get(i++) & 0x3F));
            }
        }
        return s;
    };
    Stream.prototype.parseStringBMP = function (start, end) {
        var str = "";
        var hi;
        var lo;
        for (var i = start; i < end;) {
            hi = this.get(i++);
            lo = this.get(i++);
            str += String.fromCharCode((hi << 8) | lo);
        }
        return str;
    };
    Stream.prototype.parseTime = function (start, end, shortYear) {
        var s = this.parseStringISO(start, end);
        var m = (shortYear ? reTimeS : reTimeL).exec(s);
        if (!m) {
            return "Unrecognized time: " + s;
        }
        if (shortYear) {
            // to avoid querying the timer, use the fixed range [1970, 2069]
            // it will conform with ITU X.400 [-10, +40] sliding window until 2030
            m[1] = +m[1];
            m[1] += (+m[1] < 70) ? 2000 : 1900;
        }
        s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
        if (m[5]) {
            s += ":" + m[5];
            if (m[6]) {
                s += ":" + m[6];
                if (m[7]) {
                    s += "." + m[7];
                }
            }
        }
        if (m[8]) {
            s += " UTC";
            if (m[8] != "Z") {
                s += m[8];
                if (m[9]) {
                    s += ":" + m[9];
                }
            }
        }
        return s;
    };
    Stream.prototype.parseInteger = function (start, end) {
        var v = this.get(start);
        var neg = (v > 127);
        var pad = neg ? 255 : 0;
        var len;
        var s = "";
        // skip unuseful bits (not allowed in DER)
        while (v == pad && ++start < end) {
            v = this.get(start);
        }
        len = end - start;
        if (len === 0) {
            return neg ? -1 : 0;
        }
        // show bit length of huge integers
        if (len > 4) {
            s = v;
            len <<= 3;
            while (((+s ^ pad) & 0x80) == 0) {
                s = +s << 1;
                --len;
            }
            s = "(" + len + " bit)\n";
        }
        // decode the integer
        if (neg) {
            v = v - 256;
        }
        var n = new Int10(v);
        for (var i = start + 1; i < end; ++i) {
            n.mulAdd(256, this.get(i));
        }
        return s + n.toString();
    };
    Stream.prototype.parseBitString = function (start, end, maxLength) {
        var unusedBit = this.get(start);
        var lenBit = ((end - start - 1) << 3) - unusedBit;
        var intro = "(" + lenBit + " bit)\n";
        var s = "";
        for (var i = start + 1; i < end; ++i) {
            var b = this.get(i);
            var skip = (i == end - 1) ? unusedBit : 0;
            for (var j = 7; j >= skip; --j) {
                s += (b >> j) & 1 ? "1" : "0";
            }
            if (s.length > maxLength) {
                return intro + stringCut(s, maxLength);
            }
        }
        return intro + s;
    };
    Stream.prototype.parseOctetString = function (start, end, maxLength) {
        if (this.isASCII(start, end)) {
            return stringCut(this.parseStringISO(start, end), maxLength);
        }
        var len = end - start;
        var s = "(" + len + " byte)\n";
        maxLength /= 2; // we work in bytes
        if (len > maxLength) {
            end = start + maxLength;
        }
        for (var i = start; i < end; ++i) {
            s += this.hexByte(this.get(i));
        }
        if (len > maxLength) {
            s += ellipsis;
        }
        return s;
    };
    Stream.prototype.parseOID = function (start, end, maxLength) {
        var s = "";
        var n = new Int10();
        var bits = 0;
        for (var i = start; i < end; ++i) {
            var v = this.get(i);
            n.mulAdd(128, v & 0x7F);
            bits += 7;
            if (!(v & 0x80)) { // finished
                if (s === "") {
                    n = n.simplify();
                    if (n instanceof Int10) {
                        n.sub(80);
                        s = "2." + n.toString();
                    }
                    else {
                        var m = n < 80 ? n < 40 ? 0 : 1 : 2;
                        s = m + "." + (n - m * 40);
                    }
                }
                else {
                    s += "." + n.toString();
                }
                if (s.length > maxLength) {
                    return stringCut(s, maxLength);
                }
                n = new Int10();
                bits = 0;
            }
        }
        if (bits > 0) {
            s += ".incomplete";
        }
        return s;
    };
    return Stream;
}());
var ASN1 = /** @class */ (function () {
    function ASN1(stream, header, length, tag, sub) {
        if (!(tag instanceof ASN1Tag)) {
            throw new Error("Invalid tag value.");
        }
        this.stream = stream;
        this.header = header;
        this.length = length;
        this.tag = tag;
        this.sub = sub;
    }
    ASN1.prototype.typeName = function () {
        switch (this.tag.tagClass) {
            case 0: // universal
                switch (this.tag.tagNumber) {
                    case 0x00:
                        return "EOC";
                    case 0x01:
                        return "BOOLEAN";
                    case 0x02:
                        return "INTEGER";
                    case 0x03:
                        return "BIT_STRING";
                    case 0x04:
                        return "OCTET_STRING";
                    case 0x05:
                        return "NULL";
                    case 0x06:
                        return "OBJECT_IDENTIFIER";
                    case 0x07:
                        return "ObjectDescriptor";
                    case 0x08:
                        return "EXTERNAL";
                    case 0x09:
                        return "REAL";
                    case 0x0A:
                        return "ENUMERATED";
                    case 0x0B:
                        return "EMBEDDED_PDV";
                    case 0x0C:
                        return "UTF8String";
                    case 0x10:
                        return "SEQUENCE";
                    case 0x11:
                        return "SET";
                    case 0x12:
                        return "NumericString";
                    case 0x13:
                        return "PrintableString"; // ASCII subset
                    case 0x14:
                        return "TeletexString"; // aka T61String
                    case 0x15:
                        return "VideotexString";
                    case 0x16:
                        return "IA5String"; // ASCII
                    case 0x17:
                        return "UTCTime";
                    case 0x18:
                        return "GeneralizedTime";
                    case 0x19:
                        return "GraphicString";
                    case 0x1A:
                        return "VisibleString"; // ASCII subset
                    case 0x1B:
                        return "GeneralString";
                    case 0x1C:
                        return "UniversalString";
                    case 0x1E:
                        return "BMPString";
                }
                return "Universal_" + this.tag.tagNumber.toString();
            case 1:
                return "Application_" + this.tag.tagNumber.toString();
            case 2:
                return "[" + this.tag.tagNumber.toString() + "]"; // Context
            case 3:
                return "Private_" + this.tag.tagNumber.toString();
        }
    };
    ASN1.prototype.content = function (maxLength) {
        if (this.tag === undefined) {
            return null;
        }
        if (maxLength === undefined) {
            maxLength = Infinity;
        }
        var content = this.posContent();
        var len = Math.abs(this.length);
        if (!this.tag.isUniversal()) {
            if (this.sub !== null) {
                return "(" + this.sub.length + " elem)";
            }
            return this.stream.parseOctetString(content, content + len, maxLength);
        }
        switch (this.tag.tagNumber) {
            case 0x01: // BOOLEAN
                return (this.stream.get(content) === 0) ? "false" : "true";
            case 0x02: // INTEGER
                return this.stream.parseInteger(content, content + len);
            case 0x03: // BIT_STRING
                return this.sub ? "(" + this.sub.length + " elem)" :
                    this.stream.parseBitString(content, content + len, maxLength);
            case 0x04: // OCTET_STRING
                return this.sub ? "(" + this.sub.length + " elem)" :
                    this.stream.parseOctetString(content, content + len, maxLength);
            // case 0x05: // NULL
            case 0x06: // OBJECT_IDENTIFIER
                return this.stream.parseOID(content, content + len, maxLength);
            // case 0x07: // ObjectDescriptor
            // case 0x08: // EXTERNAL
            // case 0x09: // REAL
            // case 0x0A: // ENUMERATED
            // case 0x0B: // EMBEDDED_PDV
            case 0x10: // SEQUENCE
            case 0x11: // SET
                if (this.sub !== null) {
                    return "(" + this.sub.length + " elem)";
                }
                else {
                    return "(no elem)";
                }
            case 0x0C: // UTF8String
                return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);
            case 0x12: // NumericString
            case 0x13: // PrintableString
            case 0x14: // TeletexString
            case 0x15: // VideotexString
            case 0x16: // IA5String
            // case 0x19: // GraphicString
            case 0x1A: // VisibleString
                // case 0x1B: // GeneralString
                // case 0x1C: // UniversalString
                return stringCut(this.stream.parseStringISO(content, content + len), maxLength);
            case 0x1E: // BMPString
                return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);
            case 0x17: // UTCTime
            case 0x18: // GeneralizedTime
                return this.stream.parseTime(content, content + len, (this.tag.tagNumber == 0x17));
        }
        return null;
    };
    ASN1.prototype.toString = function () {
        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? "null" : this.sub.length) + "]";
    };
    ASN1.prototype.toPrettyString = function (indent) {
        if (indent === undefined) {
            indent = "";
        }
        var s = indent + this.typeName() + " @" + this.stream.pos;
        if (this.length >= 0) {
            s += "+";
        }
        s += this.length;
        if (this.tag.tagConstructed) {
            s += " (constructed)";
        }
        else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null)) {
            s += " (encapsulates)";
        }
        s += "\n";
        if (this.sub !== null) {
            indent += "  ";
            for (var i = 0, max = this.sub.length; i < max; ++i) {
                s += this.sub[i].toPrettyString(indent);
            }
        }
        return s;
    };
    ASN1.prototype.posStart = function () {
        return this.stream.pos;
    };
    ASN1.prototype.posContent = function () {
        return this.stream.pos + this.header;
    };
    ASN1.prototype.posEnd = function () {
        return this.stream.pos + this.header + Math.abs(this.length);
    };
    ASN1.prototype.toHexString = function () {
        return this.stream.hexDump(this.posStart(), this.posEnd(), true);
    };
    ASN1.decodeLength = function (stream) {
        var buf = stream.get();
        var len = buf & 0x7F;
        if (len == buf) {
            return len;
        }
        // no reason to use Int10, as it would be a huge buffer anyways
        if (len > 6) {
            throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
        }
        if (len === 0) {
            return null;
        } // undefined
        buf = 0;
        for (var i = 0; i < len; ++i) {
            buf = (buf * 256) + stream.get();
        }
        return buf;
    };
    /**
     * Retrieve the hexadecimal value (as a string) of the current ASN.1 element
     * @returns {string}
     * @public
     */
    ASN1.prototype.getHexStringValue = function () {
        var hexString = this.toHexString();
        var offset = this.header * 2;
        var length = this.length * 2;
        return hexString.substr(offset, length);
    };
    ASN1.decode = function (str) {
        var stream;
        if (!(str instanceof Stream)) {
            stream = new Stream(str, 0);
        }
        else {
            stream = str;
        }
        var streamStart = new Stream(stream);
        var tag = new ASN1Tag(stream);
        var len = ASN1.decodeLength(stream);
        var start = stream.pos;
        var header = start - streamStart.pos;
        var sub = null;
        var getSub = function () {
            var ret = [];
            if (len !== null) {
                // definite length
                var end = start + len;
                while (stream.pos < end) {
                    ret[ret.length] = ASN1.decode(stream);
                }
                if (stream.pos != end) {
                    throw new Error("Content size is not correct for container starting at offset " + start);
                }
            }
            else {
                // undefined length
                try {
                    for (;;) {
                        var s = ASN1.decode(stream);
                        if (s.tag.isEOC()) {
                            break;
                        }
                        ret[ret.length] = s;
                    }
                    len = start - stream.pos; // undefined lengths are represented as negative values
                }
                catch (e) {
                    throw new Error("Exception while decoding undefined length content: " + e);
                }
            }
            return ret;
        };
        if (tag.tagConstructed) {
            // must have valid content
            sub = getSub();
        }
        else if (tag.isUniversal() && ((tag.tagNumber == 0x03) || (tag.tagNumber == 0x04))) {
            // sometimes BitString and OctetString are used to encapsulate ASN.1
            try {
                if (tag.tagNumber == 0x03) {
                    if (stream.get() != 0) {
                        throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                    }
                }
                sub = getSub();
                for (var i = 0; i < sub.length; ++i) {
                    if (sub[i].tag.isEOC()) {
                        throw new Error("EOC is not supposed to be actual content.");
                    }
                }
            }
            catch (e) {
                // but silently ignore when they don't
                sub = null;
            }
        }
        if (sub === null) {
            if (len === null) {
                throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
            }
            stream.pos = start + Math.abs(len);
        }
        return new ASN1(streamStart, header, len, tag, sub);
    };
    return ASN1;
}());
var ASN1Tag = /** @class */ (function () {
    function ASN1Tag(stream) {
        var buf = stream.get();
        this.tagClass = buf >> 6;
        this.tagConstructed = ((buf & 0x20) !== 0);
        this.tagNumber = buf & 0x1F;
        if (this.tagNumber == 0x1F) { // long tag
            var n = new Int10();
            do {
                buf = stream.get();
                n.mulAdd(128, buf & 0x7F);
            } while (buf & 0x80);
            this.tagNumber = n.simplify();
        }
    }
    ASN1Tag.prototype.isUniversal = function () {
        return this.tagClass === 0x00;
    };
    ASN1Tag.prototype.isEOC = function () {
        return this.tagClass === 0x00 && this.tagNumber === 0x00;
    };
    return ASN1Tag;
}());

// Copyright (c) 2005  Tom Wu
// Bits per digit
var dbits;
//#region
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
//#endregion
// (public) Constructor
var BigInteger = /** @class */ (function () {
    function BigInteger(a, b, c) {
        if (a != null) {
            if ("number" == typeof a) {
                this.fromNumber(a, b, c);
            }
            else if (b == null && "string" != typeof a) {
                this.fromString(a, 256);
            }
            else {
                this.fromString(a, b);
            }
        }
    }
    //#region PUBLIC
    // BigInteger.prototype.toString = bnToString;
    // (public) return string representation in given radix
    BigInteger.prototype.toString = function (b) {
        if (this.s < 0) {
            return "-" + this.negate().toString(b);
        }
        var k;
        if (b == 16) {
            k = 4;
        }
        else if (b == 8) {
            k = 3;
        }
        else if (b == 2) {
            k = 1;
        }
        else if (b == 32) {
            k = 5;
        }
        else if (b == 4) {
            k = 2;
        }
        else {
            return this.toRadix(b);
        }
        var km = (1 << k) - 1;
        var d;
        var m = false;
        var r = "";
        var i = this.t;
        var p = this.DB - (i * this.DB) % k;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) > 0) {
                m = true;
                r = int2char(d);
            }
            while (i >= 0) {
                if (p < k) {
                    d = (this[i] & ((1 << p) - 1)) << (k - p);
                    d |= this[--i] >> (p += this.DB - k);
                }
                else {
                    d = (this[i] >> (p -= k)) & km;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if (d > 0) {
                    m = true;
                }
                if (m) {
                    r += int2char(d);
                }
            }
        }
        return m ? r : "0";
    };
    // BigInteger.prototype.negate = bnNegate;
    // (public) -this
    BigInteger.prototype.negate = function () {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r;
    };
    // BigInteger.prototype.abs = bnAbs;
    // (public) |this|
    BigInteger.prototype.abs = function () {
        return (this.s < 0) ? this.negate() : this;
    };
    // BigInteger.prototype.compareTo = bnCompareTo;
    // (public) return + if this > a, - if this < a, 0 if equal
    BigInteger.prototype.compareTo = function (a) {
        var r = this.s - a.s;
        if (r != 0) {
            return r;
        }
        var i = this.t;
        r = i - a.t;
        if (r != 0) {
            return (this.s < 0) ? -r : r;
        }
        while (--i >= 0) {
            if ((r = this[i] - a[i]) != 0) {
                return r;
            }
        }
        return 0;
    };
    // BigInteger.prototype.bitLength = bnBitLength;
    // (public) return the number of bits in "this"
    BigInteger.prototype.bitLength = function () {
        if (this.t <= 0) {
            return 0;
        }
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
    };
    // BigInteger.prototype.mod = bnMod;
    // (public) this mod a
    BigInteger.prototype.mod = function (a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            a.subTo(r, r);
        }
        return r;
    };
    // BigInteger.prototype.modPowInt = bnModPowInt;
    // (public) this^e % m, 0 <= e < 2^32
    BigInteger.prototype.modPowInt = function (e, m) {
        var z;
        if (e < 256 || m.isEven()) {
            z = new Classic(m);
        }
        else {
            z = new Montgomery(m);
        }
        return this.exp(e, z);
    };
    // BigInteger.prototype.clone = bnClone;
    // (public)
    BigInteger.prototype.clone = function () {
        var r = nbi();
        this.copyTo(r);
        return r;
    };
    // BigInteger.prototype.intValue = bnIntValue;
    // (public) return value as integer
    BigInteger.prototype.intValue = function () {
        if (this.s < 0) {
            if (this.t == 1) {
                return this[0] - this.DV;
            }
            else if (this.t == 0) {
                return -1;
            }
        }
        else if (this.t == 1) {
            return this[0];
        }
        else if (this.t == 0) {
            return 0;
        }
        // assumes 16 < DB < 32
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
    };
    // BigInteger.prototype.byteValue = bnByteValue;
    // (public) return value as byte
    BigInteger.prototype.byteValue = function () {
        return (this.t == 0) ? this.s : (this[0] << 24) >> 24;
    };
    // BigInteger.prototype.shortValue = bnShortValue;
    // (public) return value as short (assumes DB>=16)
    BigInteger.prototype.shortValue = function () {
        return (this.t == 0) ? this.s : (this[0] << 16) >> 16;
    };
    // BigInteger.prototype.signum = bnSigNum;
    // (public) 0 if this == 0, 1 if this > 0
    BigInteger.prototype.signum = function () {
        if (this.s < 0) {
            return -1;
        }
        else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) {
            return 0;
        }
        else {
            return 1;
        }
    };
    // BigInteger.prototype.toByteArray = bnToByteArray;
    // (public) convert to bigendian byte array
    BigInteger.prototype.toByteArray = function () {
        var i = this.t;
        var r = [];
        r[0] = this.s;
        var p = this.DB - (i * this.DB) % 8;
        var d;
        var k = 0;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
                r[k++] = d | (this.s << (this.DB - p));
            }
            while (i >= 0) {
                if (p < 8) {
                    d = (this[i] & ((1 << p) - 1)) << (8 - p);
                    d |= this[--i] >> (p += this.DB - 8);
                }
                else {
                    d = (this[i] >> (p -= 8)) & 0xff;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if ((d & 0x80) != 0) {
                    d |= -256;
                }
                if (k == 0 && (this.s & 0x80) != (d & 0x80)) {
                    ++k;
                }
                if (k > 0 || d != this.s) {
                    r[k++] = d;
                }
            }
        }
        return r;
    };
    // BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.equals = function (a) {
        return (this.compareTo(a) == 0);
    };
    // BigInteger.prototype.min = bnMin;
    BigInteger.prototype.min = function (a) {
        return (this.compareTo(a) < 0) ? this : a;
    };
    // BigInteger.prototype.max = bnMax;
    BigInteger.prototype.max = function (a) {
        return (this.compareTo(a) > 0) ? this : a;
    };
    // BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.and = function (a) {
        var r = nbi();
        this.bitwiseTo(a, op_and, r);
        return r;
    };
    // BigInteger.prototype.or = bnOr;
    BigInteger.prototype.or = function (a) {
        var r = nbi();
        this.bitwiseTo(a, op_or, r);
        return r;
    };
    // BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.xor = function (a) {
        var r = nbi();
        this.bitwiseTo(a, op_xor, r);
        return r;
    };
    // BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.andNot = function (a) {
        var r = nbi();
        this.bitwiseTo(a, op_andnot, r);
        return r;
    };
    // BigInteger.prototype.not = bnNot;
    // (public) ~this
    BigInteger.prototype.not = function () {
        var r = nbi();
        for (var i = 0; i < this.t; ++i) {
            r[i] = this.DM & ~this[i];
        }
        r.t = this.t;
        r.s = ~this.s;
        return r;
    };
    // BigInteger.prototype.shiftLeft = bnShiftLeft;
    // (public) this << n
    BigInteger.prototype.shiftLeft = function (n) {
        var r = nbi();
        if (n < 0) {
            this.rShiftTo(-n, r);
        }
        else {
            this.lShiftTo(n, r);
        }
        return r;
    };
    // BigInteger.prototype.shiftRight = bnShiftRight;
    // (public) this >> n
    BigInteger.prototype.shiftRight = function (n) {
        var r = nbi();
        if (n < 0) {
            this.lShiftTo(-n, r);
        }
        else {
            this.rShiftTo(n, r);
        }
        return r;
    };
    // BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    // (public) returns index of lowest 1-bit (or -1 if none)
    BigInteger.prototype.getLowestSetBit = function () {
        for (var i = 0; i < this.t; ++i) {
            if (this[i] != 0) {
                return i * this.DB + lbit(this[i]);
            }
        }
        if (this.s < 0) {
            return this.t * this.DB;
        }
        return -1;
    };
    // BigInteger.prototype.bitCount = bnBitCount;
    // (public) return number of set bits
    BigInteger.prototype.bitCount = function () {
        var r = 0;
        var x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i) {
            r += cbit(this[i] ^ x);
        }
        return r;
    };
    // BigInteger.prototype.testBit = bnTestBit;
    // (public) true iff nth bit is set
    BigInteger.prototype.testBit = function (n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t) {
            return (this.s != 0);
        }
        return ((this[j] & (1 << (n % this.DB))) != 0);
    };
    // BigInteger.prototype.setBit = bnSetBit;
    // (public) this | (1<<n)
    BigInteger.prototype.setBit = function (n) {
        return this.changeBit(n, op_or);
    };
    // BigInteger.prototype.clearBit = bnClearBit;
    // (public) this & ~(1<<n)
    BigInteger.prototype.clearBit = function (n) {
        return this.changeBit(n, op_andnot);
    };
    // BigInteger.prototype.flipBit = bnFlipBit;
    // (public) this ^ (1<<n)
    BigInteger.prototype.flipBit = function (n) {
        return this.changeBit(n, op_xor);
    };
    // BigInteger.prototype.add = bnAdd;
    // (public) this + a
    BigInteger.prototype.add = function (a) {
        var r = nbi();
        this.addTo(a, r);
        return r;
    };
    // BigInteger.prototype.subtract = bnSubtract;
    // (public) this - a
    BigInteger.prototype.subtract = function (a) {
        var r = nbi();
        this.subTo(a, r);
        return r;
    };
    // BigInteger.prototype.multiply = bnMultiply;
    // (public) this * a
    BigInteger.prototype.multiply = function (a) {
        var r = nbi();
        this.multiplyTo(a, r);
        return r;
    };
    // BigInteger.prototype.divide = bnDivide;
    // (public) this / a
    BigInteger.prototype.divide = function (a) {
        var r = nbi();
        this.divRemTo(a, r, null);
        return r;
    };
    // BigInteger.prototype.remainder = bnRemainder;
    // (public) this % a
    BigInteger.prototype.remainder = function (a) {
        var r = nbi();
        this.divRemTo(a, null, r);
        return r;
    };
    // BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    // (public) [this/a,this%a]
    BigInteger.prototype.divideAndRemainder = function (a) {
        var q = nbi();
        var r = nbi();
        this.divRemTo(a, q, r);
        return [q, r];
    };
    // BigInteger.prototype.modPow = bnModPow;
    // (public) this^e % m (HAC 14.85)
    BigInteger.prototype.modPow = function (e, m) {
        var i = e.bitLength();
        var k;
        var r = nbv(1);
        var z;
        if (i <= 0) {
            return r;
        }
        else if (i < 18) {
            k = 1;
        }
        else if (i < 48) {
            k = 3;
        }
        else if (i < 144) {
            k = 4;
        }
        else if (i < 768) {
            k = 5;
        }
        else {
            k = 6;
        }
        if (i < 8) {
            z = new Classic(m);
        }
        else if (m.isEven()) {
            z = new Barrett(m);
        }
        else {
            z = new Montgomery(m);
        }
        // precomputation
        var g = [];
        var n = 3;
        var k1 = k - 1;
        var km = (1 << k) - 1;
        g[1] = z.convert(this);
        if (k > 1) {
            var g2 = nbi();
            z.sqrTo(g[1], g2);
            while (n <= km) {
                g[n] = nbi();
                z.mulTo(g2, g[n - 2], g[n]);
                n += 2;
            }
        }
        var j = e.t - 1;
        var w;
        var is1 = true;
        var r2 = nbi();
        var t;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
            if (i >= k1) {
                w = (e[j] >> (i - k1)) & km;
            }
            else {
                w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
                if (j > 0) {
                    w |= e[j - 1] >> (this.DB + i - k1);
                }
            }
            n = k;
            while ((w & 1) == 0) {
                w >>= 1;
                --n;
            }
            if ((i -= n) < 0) {
                i += this.DB;
                --j;
            }
            if (is1) { // ret == 1, don't bother squaring or multiplying it
                g[w].copyTo(r);
                is1 = false;
            }
            else {
                while (n > 1) {
                    z.sqrTo(r, r2);
                    z.sqrTo(r2, r);
                    n -= 2;
                }
                if (n > 0) {
                    z.sqrTo(r, r2);
                }
                else {
                    t = r;
                    r = r2;
                    r2 = t;
                }
                z.mulTo(r2, g[w], r);
            }
            while (j >= 0 && (e[j] & (1 << i)) == 0) {
                z.sqrTo(r, r2);
                t = r;
                r = r2;
                r2 = t;
                if (--i < 0) {
                    i = this.DB - 1;
                    --j;
                }
            }
        }
        return z.revert(r);
    };
    // BigInteger.prototype.modInverse = bnModInverse;
    // (public) 1/this % m (HAC 14.61)
    BigInteger.prototype.modInverse = function (m) {
        var ac = m.isEven();
        if ((this.isEven() && ac) || m.signum() == 0) {
            return BigInteger.ZERO;
        }
        var u = m.clone();
        var v = this.clone();
        var a = nbv(1);
        var b = nbv(0);
        var c = nbv(0);
        var d = nbv(1);
        while (u.signum() != 0) {
            while (u.isEven()) {
                u.rShiftTo(1, u);
                if (ac) {
                    if (!a.isEven() || !b.isEven()) {
                        a.addTo(this, a);
                        b.subTo(m, b);
                    }
                    a.rShiftTo(1, a);
                }
                else if (!b.isEven()) {
                    b.subTo(m, b);
                }
                b.rShiftTo(1, b);
            }
            while (v.isEven()) {
                v.rShiftTo(1, v);
                if (ac) {
                    if (!c.isEven() || !d.isEven()) {
                        c.addTo(this, c);
                        d.subTo(m, d);
                    }
                    c.rShiftTo(1, c);
                }
                else if (!d.isEven()) {
                    d.subTo(m, d);
                }
                d.rShiftTo(1, d);
            }
            if (u.compareTo(v) >= 0) {
                u.subTo(v, u);
                if (ac) {
                    a.subTo(c, a);
                }
                b.subTo(d, b);
            }
            else {
                v.subTo(u, v);
                if (ac) {
                    c.subTo(a, c);
                }
                d.subTo(b, d);
            }
        }
        if (v.compareTo(BigInteger.ONE) != 0) {
            return BigInteger.ZERO;
        }
        if (d.compareTo(m) >= 0) {
            return d.subtract(m);
        }
        if (d.signum() < 0) {
            d.addTo(m, d);
        }
        else {
            return d;
        }
        if (d.signum() < 0) {
            return d.add(m);
        }
        else {
            return d;
        }
    };
    // BigInteger.prototype.pow = bnPow;
    // (public) this^e
    BigInteger.prototype.pow = function (e) {
        return this.exp(e, new NullExp());
    };
    // BigInteger.prototype.gcd = bnGCD;
    // (public) gcd(this,a) (HAC 14.54)
    BigInteger.prototype.gcd = function (a) {
        var x = (this.s < 0) ? this.negate() : this.clone();
        var y = (a.s < 0) ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
            var t = x;
            x = y;
            y = t;
        }
        var i = x.getLowestSetBit();
        var g = y.getLowestSetBit();
        if (g < 0) {
            return x;
        }
        if (i < g) {
            g = i;
        }
        if (g > 0) {
            x.rShiftTo(g, x);
            y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
            if ((i = x.getLowestSetBit()) > 0) {
                x.rShiftTo(i, x);
            }
            if ((i = y.getLowestSetBit()) > 0) {
                y.rShiftTo(i, y);
            }
            if (x.compareTo(y) >= 0) {
                x.subTo(y, x);
                x.rShiftTo(1, x);
            }
            else {
                y.subTo(x, y);
                y.rShiftTo(1, y);
            }
        }
        if (g > 0) {
            y.lShiftTo(g, y);
        }
        return y;
    };
    // BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
    // (public) test primality with certainty >= 1-.5^t
    BigInteger.prototype.isProbablePrime = function (t) {
        var i;
        var x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
            for (i = 0; i < lowprimes.length; ++i) {
                if (x[0] == lowprimes[i]) {
                    return true;
                }
            }
            return false;
        }
        if (x.isEven()) {
            return false;
        }
        i = 1;
        while (i < lowprimes.length) {
            var m = lowprimes[i];
            var j = i + 1;
            while (j < lowprimes.length && m < lplim) {
                m *= lowprimes[j++];
            }
            m = x.modInt(m);
            while (i < j) {
                if (m % lowprimes[i++] == 0) {
                    return false;
                }
            }
        }
        return x.millerRabin(t);
    };
    //#endregion PUBLIC
    //#region PROTECTED
    // BigInteger.prototype.copyTo = bnpCopyTo;
    // (protected) copy this to r
    BigInteger.prototype.copyTo = function (r) {
        for (var i = this.t - 1; i >= 0; --i) {
            r[i] = this[i];
        }
        r.t = this.t;
        r.s = this.s;
    };
    // BigInteger.prototype.fromInt = bnpFromInt;
    // (protected) set from integer value x, -DV <= x < DV
    BigInteger.prototype.fromInt = function (x) {
        this.t = 1;
        this.s = (x < 0) ? -1 : 0;
        if (x > 0) {
            this[0] = x;
        }
        else if (x < -1) {
            this[0] = x + this.DV;
        }
        else {
            this.t = 0;
        }
    };
    // BigInteger.prototype.fromString = bnpFromString;
    // (protected) set from string and radix
    BigInteger.prototype.fromString = function (s, b) {
        var k;
        if (b == 16) {
            k = 4;
        }
        else if (b == 8) {
            k = 3;
        }
        else if (b == 256) {
            k = 8;
            /* byte array */
        }
        else if (b == 2) {
            k = 1;
        }
        else if (b == 32) {
            k = 5;
        }
        else if (b == 4) {
            k = 2;
        }
        else {
            this.fromRadix(s, b);
            return;
        }
        this.t = 0;
        this.s = 0;
        var i = s.length;
        var mi = false;
        var sh = 0;
        while (--i >= 0) {
            var x = (k == 8) ? (+s[i]) & 0xff : intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-") {
                    mi = true;
                }
                continue;
            }
            mi = false;
            if (sh == 0) {
                this[this.t++] = x;
            }
            else if (sh + k > this.DB) {
                this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
                this[this.t++] = (x >> (this.DB - sh));
            }
            else {
                this[this.t - 1] |= x << sh;
            }
            sh += k;
            if (sh >= this.DB) {
                sh -= this.DB;
            }
        }
        if (k == 8 && ((+s[0]) & 0x80) != 0) {
            this.s = -1;
            if (sh > 0) {
                this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
            }
        }
        this.clamp();
        if (mi) {
            BigInteger.ZERO.subTo(this, this);
        }
    };
    // BigInteger.prototype.clamp = bnpClamp;
    // (protected) clamp off excess high words
    BigInteger.prototype.clamp = function () {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) {
            --this.t;
        }
    };
    // BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    // (protected) r = this << n*DB
    BigInteger.prototype.dlShiftTo = function (n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) {
            r[i + n] = this[i];
        }
        for (i = n - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r.t = this.t + n;
        r.s = this.s;
    };
    // BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    // (protected) r = this >> n*DB
    BigInteger.prototype.drShiftTo = function (n, r) {
        for (var i = n; i < this.t; ++i) {
            r[i - n] = this[i];
        }
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
    };
    // BigInteger.prototype.lShiftTo = bnpLShiftTo;
    // (protected) r = this << n
    BigInteger.prototype.lShiftTo = function (n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB);
        var c = (this.s << bs) & this.DM;
        for (var i = this.t - 1; i >= 0; --i) {
            r[i + ds + 1] = (this[i] >> cbs) | c;
            c = (this[i] & bm) << bs;
        }
        for (var i = ds - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
    };
    // BigInteger.prototype.rShiftTo = bnpRShiftTo;
    // (protected) r = this >> n
    BigInteger.prototype.rShiftTo = function (n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
            r.t = 0;
            return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
            r[i - ds - 1] |= (this[i] & bm) << cbs;
            r[i - ds] = this[i] >> bs;
        }
        if (bs > 0) {
            r[this.t - ds - 1] |= (this.s & bm) << cbs;
        }
        r.t = this.t - ds;
        r.clamp();
    };
    // BigInteger.prototype.subTo = bnpSubTo;
    // (protected) r = this - a
    BigInteger.prototype.subTo = function (a, r) {
        var i = 0;
        var c = 0;
        var m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] - a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c -= a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c -= a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c -= a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c < -1) {
            r[i++] = this.DV + c;
        }
        else if (c > 0) {
            r[i++] = c;
        }
        r.t = i;
        r.clamp();
    };
    // BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    BigInteger.prototype.multiplyTo = function (a, r) {
        var x = this.abs();
        var y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < y.t; ++i) {
            r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        }
        r.s = 0;
        r.clamp();
        if (this.s != a.s) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    // BigInteger.prototype.squareTo = bnpSquareTo;
    // (protected) r = this^2, r != this (HAC 14.16)
    BigInteger.prototype.squareTo = function (r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < x.t - 1; ++i) {
            var c = x.am(i, x[i], r, 2 * i, 0, 1);
            if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
                r[i + x.t] -= x.DV;
                r[i + x.t + 1] = 1;
            }
        }
        if (r.t > 0) {
            r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        }
        r.s = 0;
        r.clamp();
    };
    // BigInteger.prototype.divRemTo = bnpDivRemTo;
    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    BigInteger.prototype.divRemTo = function (m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0) {
            return;
        }
        var pt = this.abs();
        if (pt.t < pm.t) {
            if (q != null) {
                q.fromInt(0);
            }
            if (r != null) {
                this.copyTo(r);
            }
            return;
        }
        if (r == null) {
            r = nbi();
        }
        var y = nbi();
        var ts = this.s;
        var ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
        if (nsh > 0) {
            pm.lShiftTo(nsh, y);
            pt.lShiftTo(nsh, r);
        }
        else {
            pm.copyTo(y);
            pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) {
            return;
        }
        var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt;
        var d2 = (1 << this.F1) / yt;
        var e = 1 << this.F2;
        var i = r.t;
        var j = i - ys;
        var t = (q == null) ? nbi() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
            r[r.t++] = 1;
            r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y); // "negative" y so we can replace sub with am later
        while (y.t < ys) {
            y[y.t++] = 0;
        }
        while (--j >= 0) {
            // Estimate quotient digit
            var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
            if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) { // Try it out
                y.dlShiftTo(j, t);
                r.subTo(t, r);
                while (r[i] < --qd) {
                    r.subTo(t, r);
                }
            }
        }
        if (q != null) {
            r.drShiftTo(ys, q);
            if (ts != ms) {
                BigInteger.ZERO.subTo(q, q);
            }
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) {
            r.rShiftTo(nsh, r);
        } // Denormalize remainder
        if (ts < 0) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    // BigInteger.prototype.invDigit = bnpInvDigit;
    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    BigInteger.prototype.invDigit = function () {
        if (this.t < 1) {
            return 0;
        }
        var x = this[0];
        if ((x & 1) == 0) {
            return 0;
        }
        var y = x & 3; // y == 1/x mod 2^2
        y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
        y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
        y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
        // last step - calculate inverse mod DV directly;
        // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
        y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits
        // we really want the negative inverse, and -DV < y < DV
        return (y > 0) ? this.DV - y : -y;
    };
    // BigInteger.prototype.isEven = bnpIsEven;
    // (protected) true iff this is even
    BigInteger.prototype.isEven = function () {
        return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
    };
    // BigInteger.prototype.exp = bnpExp;
    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    BigInteger.prototype.exp = function (e, z) {
        if (e > 0xffffffff || e < 1) {
            return BigInteger.ONE;
        }
        var r = nbi();
        var r2 = nbi();
        var g = z.convert(this);
        var i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
            z.sqrTo(r, r2);
            if ((e & (1 << i)) > 0) {
                z.mulTo(r2, g, r);
            }
            else {
                var t = r;
                r = r2;
                r2 = t;
            }
        }
        return z.revert(r);
    };
    // BigInteger.prototype.chunkSize = bnpChunkSize;
    // (protected) return x s.t. r^x < DV
    BigInteger.prototype.chunkSize = function (r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
    };
    // BigInteger.prototype.toRadix = bnpToRadix;
    // (protected) convert to radix string
    BigInteger.prototype.toRadix = function (b) {
        if (b == null) {
            b = 10;
        }
        if (this.signum() == 0 || b < 2 || b > 36) {
            return "0";
        }
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a);
        var y = nbi();
        var z = nbi();
        var r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
            r = (a + z.intValue()).toString(b).substr(1) + r;
            y.divRemTo(d, y, z);
        }
        return z.intValue().toString(b) + r;
    };
    // BigInteger.prototype.fromRadix = bnpFromRadix;
    // (protected) convert from radix string
    BigInteger.prototype.fromRadix = function (s, b) {
        this.fromInt(0);
        if (b == null) {
            b = 10;
        }
        var cs = this.chunkSize(b);
        var d = Math.pow(b, cs);
        var mi = false;
        var j = 0;
        var w = 0;
        for (var i = 0; i < s.length; ++i) {
            var x = intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-" && this.signum() == 0) {
                    mi = true;
                }
                continue;
            }
            w = b * w + x;
            if (++j >= cs) {
                this.dMultiply(d);
                this.dAddOffset(w, 0);
                j = 0;
                w = 0;
            }
        }
        if (j > 0) {
            this.dMultiply(Math.pow(b, j));
            this.dAddOffset(w, 0);
        }
        if (mi) {
            BigInteger.ZERO.subTo(this, this);
        }
    };
    // BigInteger.prototype.fromNumber = bnpFromNumber;
    // (protected) alternate constructor
    BigInteger.prototype.fromNumber = function (a, b, c) {
        if ("number" == typeof b) {
            // new BigInteger(int,int,RNG)
            if (a < 2) {
                this.fromInt(1);
            }
            else {
                this.fromNumber(a, c);
                if (!this.testBit(a - 1)) {
                    // force MSB set
                    this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
                }
                if (this.isEven()) {
                    this.dAddOffset(1, 0);
                } // force odd
                while (!this.isProbablePrime(b)) {
                    this.dAddOffset(2, 0);
                    if (this.bitLength() > a) {
                        this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
                    }
                }
            }
        }
        else {
            // new BigInteger(int,RNG)
            var x = [];
            var t = a & 7;
            x.length = (a >> 3) + 1;
            b.nextBytes(x);
            if (t > 0) {
                x[0] &= ((1 << t) - 1);
            }
            else {
                x[0] = 0;
            }
            this.fromString(x, 256);
        }
    };
    // BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    // (protected) r = this op a (bitwise)
    BigInteger.prototype.bitwiseTo = function (a, op, r) {
        var i;
        var f;
        var m = Math.min(a.t, this.t);
        for (i = 0; i < m; ++i) {
            r[i] = op(this[i], a[i]);
        }
        if (a.t < this.t) {
            f = a.s & this.DM;
            for (i = m; i < this.t; ++i) {
                r[i] = op(this[i], f);
            }
            r.t = this.t;
        }
        else {
            f = this.s & this.DM;
            for (i = m; i < a.t; ++i) {
                r[i] = op(f, a[i]);
            }
            r.t = a.t;
        }
        r.s = op(this.s, a.s);
        r.clamp();
    };
    // BigInteger.prototype.changeBit = bnpChangeBit;
    // (protected) this op (1<<n)
    BigInteger.prototype.changeBit = function (n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
    };
    // BigInteger.prototype.addTo = bnpAddTo;
    // (protected) r = this + a
    BigInteger.prototype.addTo = function (a, r) {
        var i = 0;
        var c = 0;
        var m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] + a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c += a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c += a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c > 0) {
            r[i++] = c;
        }
        else if (c < -1) {
            r[i++] = this.DV + c;
        }
        r.t = i;
        r.clamp();
    };
    // BigInteger.prototype.dMultiply = bnpDMultiply;
    // (protected) this *= n, this >= 0, 1 < n < DV
    BigInteger.prototype.dMultiply = function (n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
    };
    // BigInteger.prototype.dAddOffset = bnpDAddOffset;
    // (protected) this += n << w words, this >= 0
    BigInteger.prototype.dAddOffset = function (n, w) {
        if (n == 0) {
            return;
        }
        while (this.t <= w) {
            this[this.t++] = 0;
        }
        this[w] += n;
        while (this[w] >= this.DV) {
            this[w] -= this.DV;
            if (++w >= this.t) {
                this[this.t++] = 0;
            }
            ++this[w];
        }
    };
    // BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    BigInteger.prototype.multiplyLowerTo = function (a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0; // assumes a,this >= 0
        r.t = i;
        while (i > 0) {
            r[--i] = 0;
        }
        for (var j = r.t - this.t; i < j; ++i) {
            r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        }
        for (var j = Math.min(a.t, n); i < j; ++i) {
            this.am(0, a[i], r, i, 0, n - i);
        }
        r.clamp();
    };
    // BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    BigInteger.prototype.multiplyUpperTo = function (a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0; // assumes a,this >= 0
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
            r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        }
        r.clamp();
        r.drShiftTo(1, r);
    };
    // BigInteger.prototype.modInt = bnpModInt;
    // (protected) this % n, n < 2^26
    BigInteger.prototype.modInt = function (n) {
        if (n <= 0) {
            return 0;
        }
        var d = this.DV % n;
        var r = (this.s < 0) ? n - 1 : 0;
        if (this.t > 0) {
            if (d == 0) {
                r = this[0] % n;
            }
            else {
                for (var i = this.t - 1; i >= 0; --i) {
                    r = (d * r + this[i]) % n;
                }
            }
        }
        return r;
    };
    // BigInteger.prototype.millerRabin = bnpMillerRabin;
    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    BigInteger.prototype.millerRabin = function (t) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0) {
            return false;
        }
        var r = n1.shiftRight(k);
        t = (t + 1) >> 1;
        if (t > lowprimes.length) {
            t = lowprimes.length;
        }
        var a = nbi();
        for (var i = 0; i < t; ++i) {
            // Pick bases at random, instead of starting at 2
            a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
            var y = a.modPow(r, this);
            if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
                var j = 1;
                while (j++ < k && y.compareTo(n1) != 0) {
                    y = y.modPowInt(2, this);
                    if (y.compareTo(BigInteger.ONE) == 0) {
                        return false;
                    }
                }
                if (y.compareTo(n1) != 0) {
                    return false;
                }
            }
        }
        return true;
    };
    // BigInteger.prototype.square = bnSquare;
    // (public) this^2
    BigInteger.prototype.square = function () {
        var r = nbi();
        this.squareTo(r);
        return r;
    };
    //#region ASYNC
    // Public API method
    BigInteger.prototype.gcda = function (a, callback) {
        var x = (this.s < 0) ? this.negate() : this.clone();
        var y = (a.s < 0) ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
            var t = x;
            x = y;
            y = t;
        }
        var i = x.getLowestSetBit();
        var g = y.getLowestSetBit();
        if (g < 0) {
            callback(x);
            return;
        }
        if (i < g) {
            g = i;
        }
        if (g > 0) {
            x.rShiftTo(g, x);
            y.rShiftTo(g, y);
        }
        // Workhorse of the algorithm, gets called 200 - 800 times per 512 bit keygen.
        var gcda1 = function () {
            if ((i = x.getLowestSetBit()) > 0) {
                x.rShiftTo(i, x);
            }
            if ((i = y.getLowestSetBit()) > 0) {
                y.rShiftTo(i, y);
            }
            if (x.compareTo(y) >= 0) {
                x.subTo(y, x);
                x.rShiftTo(1, x);
            }
            else {
                y.subTo(x, y);
                y.rShiftTo(1, y);
            }
            if (!(x.signum() > 0)) {
                if (g > 0) {
                    y.lShiftTo(g, y);
                }
                setTimeout(function () { callback(y); }, 0); // escape
            }
            else {
                setTimeout(gcda1, 0);
            }
        };
        setTimeout(gcda1, 10);
    };
    // (protected) alternate constructor
    BigInteger.prototype.fromNumberAsync = function (a, b, c, callback) {
        if ("number" == typeof b) {
            if (a < 2) {
                this.fromInt(1);
            }
            else {
                this.fromNumber(a, c);
                if (!this.testBit(a - 1)) {
                    this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
                }
                if (this.isEven()) {
                    this.dAddOffset(1, 0);
                }
                var bnp_1 = this;
                var bnpfn1_1 = function () {
                    bnp_1.dAddOffset(2, 0);
                    if (bnp_1.bitLength() > a) {
                        bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1);
                    }
                    if (bnp_1.isProbablePrime(b)) {
                        setTimeout(function () { callback(); }, 0); // escape
                    }
                    else {
                        setTimeout(bnpfn1_1, 0);
                    }
                };
                setTimeout(bnpfn1_1, 0);
            }
        }
        else {
            var x = [];
            var t = a & 7;
            x.length = (a >> 3) + 1;
            b.nextBytes(x);
            if (t > 0) {
                x[0] &= ((1 << t) - 1);
            }
            else {
                x[0] = 0;
            }
            this.fromString(x, 256);
        }
    };
    return BigInteger;
}());
//#region REDUCERS
//#region NullExp
var NullExp = /** @class */ (function () {
    function NullExp() {
    }
    // NullExp.prototype.convert = nNop;
    NullExp.prototype.convert = function (x) {
        return x;
    };
    // NullExp.prototype.revert = nNop;
    NullExp.prototype.revert = function (x) {
        return x;
    };
    // NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
    };
    // NullExp.prototype.sqrTo = nSqrTo;
    NullExp.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
    };
    return NullExp;
}());
// Modular reduction using "classic" algorithm
var Classic = /** @class */ (function () {
    function Classic(m) {
        this.m = m;
    }
    // Classic.prototype.convert = cConvert;
    Classic.prototype.convert = function (x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) {
            return x.mod(this.m);
        }
        else {
            return x;
        }
    };
    // Classic.prototype.revert = cRevert;
    Classic.prototype.revert = function (x) {
        return x;
    };
    // Classic.prototype.reduce = cReduce;
    Classic.prototype.reduce = function (x) {
        x.divRemTo(this.m, null, x);
    };
    // Classic.prototype.mulTo = cMulTo;
    Classic.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Classic.prototype.sqrTo = cSqrTo;
    Classic.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Classic;
}());
//#endregion
//#region Montgomery
// Montgomery reduction
var Montgomery = /** @class */ (function () {
    function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << (m.DB - 15)) - 1;
        this.mt2 = 2 * m.t;
    }
    // Montgomery.prototype.convert = montConvert;
    // xR mod m
    Montgomery.prototype.convert = function (x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            this.m.subTo(r, r);
        }
        return r;
    };
    // Montgomery.prototype.revert = montRevert;
    // x/R mod m
    Montgomery.prototype.revert = function (x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
    };
    // Montgomery.prototype.reduce = montReduce;
    // x = x/R mod m (HAC 14.32)
    Montgomery.prototype.reduce = function (x) {
        while (x.t <= this.mt2) {
            // pad x so am has enough room later
            x[x.t++] = 0;
        }
        for (var i = 0; i < this.m.t; ++i) {
            // faster way of calculating u0 = x[i]*mp mod DV
            var j = x[i] & 0x7fff;
            var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
            // use am to combine the multiply-shift-add into one call
            j = i + this.m.t;
            x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
            // propagate carry
            while (x[j] >= x.DV) {
                x[j] -= x.DV;
                x[++j]++;
            }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) {
            x.subTo(this.m, x);
        }
    };
    // Montgomery.prototype.mulTo = montMulTo;
    // r = "xy/R mod m"; x,y != r
    Montgomery.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Montgomery.prototype.sqrTo = montSqrTo;
    // r = "x^2/R mod m"; x != r
    Montgomery.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Montgomery;
}());
//#endregion Montgomery
//#region Barrett
// Barrett modular reduction
var Barrett = /** @class */ (function () {
    function Barrett(m) {
        this.m = m;
        // setup Barrett
        this.r2 = nbi();
        this.q3 = nbi();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
    }
    // Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.convert = function (x) {
        if (x.s < 0 || x.t > 2 * this.m.t) {
            return x.mod(this.m);
        }
        else if (x.compareTo(this.m) < 0) {
            return x;
        }
        else {
            var r = nbi();
            x.copyTo(r);
            this.reduce(r);
            return r;
        }
    };
    // Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.revert = function (x) {
        return x;
    };
    // Barrett.prototype.reduce = barrettReduce;
    // x = x mod m (HAC 14.42)
    Barrett.prototype.reduce = function (x) {
        x.drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
            x.t = this.m.t + 1;
            x.clamp();
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.compareTo(this.r2) < 0) {
            x.dAddOffset(1, this.m.t + 1);
        }
        x.subTo(this.r2, x);
        while (x.compareTo(this.m) >= 0) {
            x.subTo(this.m, x);
        }
    };
    // Barrett.prototype.mulTo = barrettMulTo;
    // r = x*y mod m; x,y != r
    Barrett.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Barrett.prototype.sqrTo = barrettSqrTo;
    // r = x^2 mod m; x != r
    Barrett.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Barrett;
}());
//#endregion
//#endregion REDUCERS
// return new, unset BigInteger
function nbi() { return new BigInteger(null); }
function parseBigInt(str, r) {
    return new BigInteger(str, r);
}
// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
        var v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 0x4000000);
        w[j++] = v & 0x3ffffff;
    }
    return c;
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff;
    var xh = x >> 15;
    while (--n >= 0) {
        var l = this[i] & 0x7fff;
        var h = this[i++] >> 15;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 0x3fffffff;
    }
    return c;
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff;
    var xh = x >> 14;
    while (--n >= 0) {
        var l = this[i] & 0x3fff;
        var h = this[i++] >> 14;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 0xfffffff;
    }
    return c;
}
if (navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30;
}
else if (navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1 << dbits) - 1);
BigInteger.prototype.DV = (1 << dbits);
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
// Digit conversions
var BI_RC = [];
var rr;
var vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c;
}
// return bigint initialized to value
function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
}
// returns bit length of the integer x
function nbits(x) {
    var r = 1;
    var t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
    }
    return r;
}
// "constants"
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

// prng4.js - uses Arcfour as a PRNG
var Arcfour = /** @class */ (function () {
    function Arcfour() {
        this.i = 0;
        this.j = 0;
        this.S = [];
    }
    // Arcfour.prototype.init = ARC4init;
    // Initialize arcfour context from key, an array of ints, each from [0..255]
    Arcfour.prototype.init = function (key) {
        var i;
        var j;
        var t;
        for (i = 0; i < 256; ++i) {
            this.S[i] = i;
        }
        j = 0;
        for (i = 0; i < 256; ++i) {
            j = (j + this.S[i] + key[i % key.length]) & 255;
            t = this.S[i];
            this.S[i] = this.S[j];
            this.S[j] = t;
        }
        this.i = 0;
        this.j = 0;
    };
    // Arcfour.prototype.next = ARC4next;
    Arcfour.prototype.next = function () {
        var t;
        this.i = (this.i + 1) & 255;
        this.j = (this.j + this.S[this.i]) & 255;
        t = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = t;
        return this.S[(t + this.S[this.i]) & 255];
    };
    return Arcfour;
}());
// Plug in your RNG constructor here
function prng_newstate() {
    return new Arcfour();
}
// Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()
var rng_psize = 256;

// Random number generator - requires a PRNG backend, e.g. prng4.js
var rng_state;
var rng_pool = null;
var rng_pptr;
// Initialize the pool with junk if needed.
if (rng_pool == null) {
    rng_pool = [];
    rng_pptr = 0;
    var t = void 0;
    if (window.crypto && window.crypto.getRandomValues) {
        // Extract entropy (2048 bits) from RNG if available
        var z = new Uint32Array(256);
        window.crypto.getRandomValues(z);
        for (t = 0; t < z.length; ++t) {
            rng_pool[rng_pptr++] = z[t] & 255;
        }
    }
    // Use mouse events for entropy, if we do not have enough entropy by the time
    // we need it, entropy will be generated by Math.random.
    var onMouseMoveListener_1 = function (ev) {
        this.count = this.count || 0;
        if (this.count >= 256 || rng_pptr >= rng_psize) {
            if (window.removeEventListener) {
                window.removeEventListener("mousemove", onMouseMoveListener_1, false);
            }
            else if (window.detachEvent) {
                window.detachEvent("onmousemove", onMouseMoveListener_1);
            }
            return;
        }
        try {
            var mouseCoordinates = ev.x + ev.y;
            rng_pool[rng_pptr++] = mouseCoordinates & 255;
            this.count += 1;
        }
        catch (e) {
            // Sometimes Firefox will deny permission to access event properties for some reason. Ignore.
        }
    };
    if (window.addEventListener) {
        window.addEventListener("mousemove", onMouseMoveListener_1, false);
    }
    else if (window.attachEvent) {
        window.attachEvent("onmousemove", onMouseMoveListener_1);
    }
}
function rng_get_byte() {
    if (rng_state == null) {
        rng_state = prng_newstate();
        // At this point, we may not have collected enough entropy.  If not, fall back to Math.random
        while (rng_pptr < rng_psize) {
            var random = Math.floor(65536 * Math.random());
            rng_pool[rng_pptr++] = random & 255;
        }
        rng_state.init(rng_pool);
        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
            rng_pool[rng_pptr] = 0;
        }
        rng_pptr = 0;
    }
    // TODO: allow reseeding after first request
    return rng_state.next();
}
var SecureRandom = /** @class */ (function () {
    function SecureRandom() {
    }
    SecureRandom.prototype.nextBytes = function (ba) {
        for (var i = 0; i < ba.length; ++i) {
            ba[i] = rng_get_byte();
        }
    };
    return SecureRandom;
}());

// Depends on jsbn.js and rng.js
// function linebrk(s,n) {
//   var ret = "";
//   var i = 0;
//   while(i + n < s.length) {
//     ret += s.substring(i,i+n) + "\n";
//     i += n;
//   }
//   return ret + s.substring(i,s.length);
// }
// function byte2Hex(b) {
//   if(b < 0x10)
//     return "0" + b.toString(16);
//   else
//     return b.toString(16);
// }
function pkcs1pad1(s, n) {
    if (n < s.length + 22) {
        console.error("Message too long for RSA");
        return null;
    }
    var len = n - s.length - 6;
    var filler = "";
    for (var f = 0; f < len; f += 2) {
        filler += "ff";
    }
    var m = "0001" + filler + "00" + s;
    return parseBigInt(m, 16);
}
// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint
function pkcs1pad2(s, n) {
    if (n < s.length + 11) { // TODO: fix for utf-8
        console.error("Message too long for RSA");
        return null;
    }
    var ba = [];
    var i = s.length - 1;
    while (i >= 0 && n > 0) {
        var c = s.charCodeAt(i--);
        if (c < 128) { // encode using utf-8
            ba[--n] = c;
        }
        else if ((c > 127) && (c < 2048)) {
            ba[--n] = (c & 63) | 128;
            ba[--n] = (c >> 6) | 192;
        }
        else {
            ba[--n] = (c & 63) | 128;
            ba[--n] = ((c >> 6) & 63) | 128;
            ba[--n] = (c >> 12) | 224;
        }
    }
    ba[--n] = 0;
    var rng = new SecureRandom();
    var x = [];
    while (n > 2) { // random non-zero pad
        x[0] = 0;
        while (x[0] == 0) {
            rng.nextBytes(x);
        }
        ba[--n] = x[0];
    }
    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba);
}
// "empty" RSA key constructor
var RSAKey = /** @class */ (function () {
    function RSAKey() {
        this.n = null;
        this.e = 0;
        this.d = null;
        this.p = null;
        this.q = null;
        this.dmp1 = null;
        this.dmq1 = null;
        this.coeff = null;
    }
    //#region PROTECTED
    // protected
    // RSAKey.prototype.doPublic = RSADoPublic;
    // Perform raw public operation on "x": return x^e (mod n)
    RSAKey.prototype.doPublic = function (x) {
        return x.modPowInt(this.e, this.n);
    };
    // RSAKey.prototype.doPrivate = RSADoPrivate;
    // Perform raw private operation on "x": return x^d (mod n)
    RSAKey.prototype.doPrivate = function (x) {
        if (this.p == null || this.q == null) {
            return x.modPow(this.d, this.n);
        }
        // TODO: re-calculate any missing CRT params
        var xp = x.mod(this.p).modPow(this.dmp1, this.p);
        var xq = x.mod(this.q).modPow(this.dmq1, this.q);
        while (xp.compareTo(xq) < 0) {
            xp = xp.add(this.p);
        }
        return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
    };
    //#endregion PROTECTED
    //#region PUBLIC
    // RSAKey.prototype.setPublic = RSASetPublic;
    // Set the public key fields N and e from hex strings
    RSAKey.prototype.setPublic = function (N, E) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = parseBigInt(N, 16);
            this.e = parseInt(E, 16);
        }
        else {
            console.error("Invalid RSA public key");
        }
    };
    // RSAKey.prototype.encrypt = RSAEncrypt;
    // Return the PKCS#1 RSA encryption of "text" as an even-length hex string
    RSAKey.prototype.encrypt = function (text) {
        var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
        if (m == null) {
            return null;
        }
        var c = this.doPublic(m);
        if (c == null) {
            return null;
        }
        var h = c.toString(16);
        if ((h.length & 1) == 0) {
            return h;
        }
        else {
            return "0" + h;
        }
    };
    // RSAKey.prototype.setPrivate = RSASetPrivate;
    // Set the private key fields N, e, and d from hex strings
    RSAKey.prototype.setPrivate = function (N, E, D) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = parseBigInt(N, 16);
            this.e = parseInt(E, 16);
            this.d = parseBigInt(D, 16);
        }
        else {
            console.error("Invalid RSA private key");
        }
    };
    // RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
    // Set the private key fields N, e, d and CRT params from hex strings
    RSAKey.prototype.setPrivateEx = function (N, E, D, P, Q, DP, DQ, C) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = parseBigInt(N, 16);
            this.e = parseInt(E, 16);
            this.d = parseBigInt(D, 16);
            this.p = parseBigInt(P, 16);
            this.q = parseBigInt(Q, 16);
            this.dmp1 = parseBigInt(DP, 16);
            this.dmq1 = parseBigInt(DQ, 16);
            this.coeff = parseBigInt(C, 16);
        }
        else {
            console.error("Invalid RSA private key");
        }
    };
    // RSAKey.prototype.generate = RSAGenerate;
    // Generate a new random private key B bits long, using public expt E
    RSAKey.prototype.generate = function (B, E) {
        var rng = new SecureRandom();
        var qs = B >> 1;
        this.e = parseInt(E, 16);
        var ee = new BigInteger(E, 16);
        for (;;) {
            for (;;) {
                this.p = new BigInteger(B - qs, 1, rng);
                if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
                    break;
                }
            }
            for (;;) {
                this.q = new BigInteger(qs, 1, rng);
                if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
                    break;
                }
            }
            if (this.p.compareTo(this.q) <= 0) {
                var t = this.p;
                this.p = this.q;
                this.q = t;
            }
            var p1 = this.p.subtract(BigInteger.ONE);
            var q1 = this.q.subtract(BigInteger.ONE);
            var phi = p1.multiply(q1);
            if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
                this.n = this.p.multiply(this.q);
                this.d = ee.modInverse(phi);
                this.dmp1 = this.d.mod(p1);
                this.dmq1 = this.d.mod(q1);
                this.coeff = this.q.modInverse(this.p);
                break;
            }
        }
    };
    // RSAKey.prototype.decrypt = RSADecrypt;
    // Return the PKCS#1 RSA decryption of "ctext".
    // "ctext" is an even-length hex string and the output is a plain string.
    RSAKey.prototype.decrypt = function (ctext) {
        var c = parseBigInt(ctext, 16);
        var m = this.doPrivate(c);
        if (m == null) {
            return null;
        }
        return pkcs1unpad2(m, (this.n.bitLength() + 7) >> 3);
    };
    // Generate a new random private key B bits long, using public expt E
    RSAKey.prototype.generateAsync = function (B, E, callback) {
        var rng = new SecureRandom();
        var qs = B >> 1;
        this.e = parseInt(E, 16);
        var ee = new BigInteger(E, 16);
        var rsa = this;
        // These functions have non-descript names because they were originally for(;;) loops.
        // I don't know about cryptography to give them better names than loop1-4.
        var loop1 = function () {
            var loop4 = function () {
                if (rsa.p.compareTo(rsa.q) <= 0) {
                    var t = rsa.p;
                    rsa.p = rsa.q;
                    rsa.q = t;
                }
                var p1 = rsa.p.subtract(BigInteger.ONE);
                var q1 = rsa.q.subtract(BigInteger.ONE);
                var phi = p1.multiply(q1);
                if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
                    rsa.n = rsa.p.multiply(rsa.q);
                    rsa.d = ee.modInverse(phi);
                    rsa.dmp1 = rsa.d.mod(p1);
                    rsa.dmq1 = rsa.d.mod(q1);
                    rsa.coeff = rsa.q.modInverse(rsa.p);
                    setTimeout(function () { callback(); }, 0); // escape
                }
                else {
                    setTimeout(loop1, 0);
                }
            };
            var loop3 = function () {
                rsa.q = nbi();
                rsa.q.fromNumberAsync(qs, 1, rng, function () {
                    rsa.q.subtract(BigInteger.ONE).gcda(ee, function (r) {
                        if (r.compareTo(BigInteger.ONE) == 0 && rsa.q.isProbablePrime(10)) {
                            setTimeout(loop4, 0);
                        }
                        else {
                            setTimeout(loop3, 0);
                        }
                    });
                });
            };
            var loop2 = function () {
                rsa.p = nbi();
                rsa.p.fromNumberAsync(B - qs, 1, rng, function () {
                    rsa.p.subtract(BigInteger.ONE).gcda(ee, function (r) {
                        if (r.compareTo(BigInteger.ONE) == 0 && rsa.p.isProbablePrime(10)) {
                            setTimeout(loop3, 0);
                        }
                        else {
                            setTimeout(loop2, 0);
                        }
                    });
                });
            };
            setTimeout(loop2, 0);
        };
        setTimeout(loop1, 0);
    };
    RSAKey.prototype.sign = function (text, digestMethod, digestName) {
        var header = getDigestHeader(digestName);
        var digest = header + digestMethod(text).toString();
        var m = pkcs1pad1(digest, this.n.bitLength() / 4);
        if (m == null) {
            return null;
        }
        var c = this.doPrivate(m);
        if (c == null) {
            return null;
        }
        var h = c.toString(16);
        if ((h.length & 1) == 0) {
            return h;
        }
        else {
            return "0" + h;
        }
    };
    RSAKey.prototype.verify = function (text, signature, digestMethod) {
        var c = parseBigInt(signature, 16);
        var m = this.doPublic(c);
        if (m == null) {
            return null;
        }
        var unpadded = m.toString(16).replace(/^1f+00/, "");
        var digest = removeDigestHeader(unpadded);
        return digest == digestMethod(text).toString();
    };
    return RSAKey;
}());
// Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] == 0) {
        ++i;
    }
    if (b.length - i != n - 1 || b[i] != 2) {
        return null;
    }
    ++i;
    while (b[i] != 0) {
        if (++i >= b.length) {
            return null;
        }
    }
    var ret = "";
    while (++i < b.length) {
        var c = b[i] & 255;
        if (c < 128) { // utf-8 decode
            ret += String.fromCharCode(c);
        }
        else if ((c > 191) && (c < 224)) {
            ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
            ++i;
        }
        else {
            ret += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
            i += 2;
        }
    }
    return ret;
}
// https://tools.ietf.org/html/rfc3447#page-43
var DIGEST_HEADERS = {
    md2: "3020300c06082a864886f70d020205000410",
    md5: "3020300c06082a864886f70d020505000410",
    sha1: "3021300906052b0e03021a05000414",
    sha224: "302d300d06096086480165030402040500041c",
    sha256: "3031300d060960864801650304020105000420",
    sha384: "3041300d060960864801650304020205000430",
    sha512: "3051300d060960864801650304020305000440",
    ripemd160: "3021300906052b2403020105000414",
};
function getDigestHeader(name) {
    return DIGEST_HEADERS[name] || "";
}
function removeDigestHeader(str) {
    for (var name_1 in DIGEST_HEADERS) {
        if (DIGEST_HEADERS.hasOwnProperty(name_1)) {
            var header = DIGEST_HEADERS[name_1];
            var len = header.length;
            if (str.substr(0, len) == header) {
                return str.substr(len);
            }
        }
    }
    return str;
}
// Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
// function RSAEncryptB64(text) {
//  var h = this.encrypt(text);
//  if(h) return hex2b64(h); else return null;
// }
// public
// RSAKey.prototype.encrypt_b64 = RSAEncryptB64;

/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
var YAHOO = {};
YAHOO.lang = {
    /**
     * Utility to set up the prototype, constructor and superclass properties to
     * support an inheritance strategy that can chain constructors and methods.
     * Static members will not be inherited.
     *
     * @method extend
     * @static
     * @param {Function} subc   the object to modify
     * @param {Function} superc the object to inherit
     * @param {Object} overrides  additional properties/methods to add to the
     *                              subclass prototype.  These will override the
     *                              matching items obtained from the superclass
     *                              if present.
     */
    extend: function(subc, superc, overrides) {
        if (! superc || ! subc) {
            throw new Error("YAHOO.lang.extend failed, please check that " +
                "all dependencies are included.");
        }

        var F = function() {};
        F.prototype = superc.prototype;
        subc.prototype = new F();
        subc.prototype.constructor = subc;
        subc.superclass = superc.prototype;

        if (superc.prototype.constructor == Object.prototype.constructor) {
            superc.prototype.constructor = superc;
        }

        if (overrides) {
            var i;
            for (i in overrides) {
                subc.prototype[i] = overrides[i];
            }

            /*
             * IE will not enumerate native functions in a derived object even if the
             * function was overridden.  This is a workaround for specific functions
             * we care about on the Object prototype.
             * @property _IEEnumFix
             * @param {Function} r  the object to receive the augmentation
             * @param {Function} s  the object that supplies the properties to augment
             * @static
             * @private
             */
            var _IEEnumFix = function() {},
                ADD = ["toString", "valueOf"];
            try {
                if (/MSIE/.test(navigator.userAgent)) {
                    _IEEnumFix = function(r, s) {
                        for (i = 0; i < ADD.length; i = i + 1) {
                            var fname = ADD[i], f = s[fname];
                            if (typeof f === 'function' && f != Object.prototype[fname]) {
                                r[fname] = f;
                            }
                        }
                    };
                }
            } catch (ex) {}            _IEEnumFix(subc.prototype, overrides);
        }
    }
};

/* asn1-1.0.13.js (c) 2013-2017 Kenji Urushima | kjur.github.com/jsrsasign/license
 */

/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version asn1 1.0.13 (2017-Jun-02)
 * @since jsrsasign 2.1
 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 */

/**
 * kjur's class library name space
 * <p>
 * This name space provides following name spaces:
 * <ul>
 * <li>{@link KJUR.asn1} - ASN.1 primitive hexadecimal encoder</li>
 * <li>{@link KJUR.asn1.x509} - ASN.1 structure for X.509 certificate and CRL</li>
 * <li>{@link KJUR.crypto} - Java Cryptographic Extension(JCE) style MessageDigest/Signature
 * class and utilities</li>
 * </ul>
 * </p>
 * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
 * @name KJUR
 * @namespace kjur's class library name space
 */
var KJUR = {};

/**
 * kjur's ASN.1 class library name space
 * <p>
 * This is ITU-T X.690 ASN.1 DER encoder class library and
 * class structure and methods is very similar to
 * org.bouncycastle.asn1 package of
 * well known BouncyCaslte Cryptography Library.
 * <h4>PROVIDING ASN.1 PRIMITIVES</h4>
 * Here are ASN.1 DER primitive classes.
 * <ul>
 * <li>0x01 {@link KJUR.asn1.DERBoolean}</li>
 * <li>0x02 {@link KJUR.asn1.DERInteger}</li>
 * <li>0x03 {@link KJUR.asn1.DERBitString}</li>
 * <li>0x04 {@link KJUR.asn1.DEROctetString}</li>
 * <li>0x05 {@link KJUR.asn1.DERNull}</li>
 * <li>0x06 {@link KJUR.asn1.DERObjectIdentifier}</li>
 * <li>0x0a {@link KJUR.asn1.DEREnumerated}</li>
 * <li>0x0c {@link KJUR.asn1.DERUTF8String}</li>
 * <li>0x12 {@link KJUR.asn1.DERNumericString}</li>
 * <li>0x13 {@link KJUR.asn1.DERPrintableString}</li>
 * <li>0x14 {@link KJUR.asn1.DERTeletexString}</li>
 * <li>0x16 {@link KJUR.asn1.DERIA5String}</li>
 * <li>0x17 {@link KJUR.asn1.DERUTCTime}</li>
 * <li>0x18 {@link KJUR.asn1.DERGeneralizedTime}</li>
 * <li>0x30 {@link KJUR.asn1.DERSequence}</li>
 * <li>0x31 {@link KJUR.asn1.DERSet}</li>
 * </ul>
 * <h4>OTHER ASN.1 CLASSES</h4>
 * <ul>
 * <li>{@link KJUR.asn1.ASN1Object}</li>
 * <li>{@link KJUR.asn1.DERAbstractString}</li>
 * <li>{@link KJUR.asn1.DERAbstractTime}</li>
 * <li>{@link KJUR.asn1.DERAbstractStructured}</li>
 * <li>{@link KJUR.asn1.DERTaggedObject}</li>
 * </ul>
 * <h4>SUB NAME SPACES</h4>
 * <ul>
 * <li>{@link KJUR.asn1.cades} - CAdES long term signature format</li>
 * <li>{@link KJUR.asn1.cms} - Cryptographic Message Syntax</li>
 * <li>{@link KJUR.asn1.csr} - Certificate Signing Request (CSR/PKCS#10)</li>
 * <li>{@link KJUR.asn1.tsp} - RFC 3161 Timestamping Protocol Format</li>
 * <li>{@link KJUR.asn1.x509} - RFC 5280 X.509 certificate and CRL</li>
 * </ul>
 * </p>
 * NOTE: Please ignore method summary and document of this namespace.
 * This caused by a bug of jsdoc2.
 * @name KJUR.asn1
 * @namespace
 */
if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) KJUR.asn1 = {};

/**
 * ASN1 utilities class
 * @name KJUR.asn1.ASN1Util
 * @class ASN1 utilities class
 * @since asn1 1.0.2
 */
KJUR.asn1.ASN1Util = new function() {
    this.integerToByteHex = function(i) {
        var h = i.toString(16);
        if ((h.length % 2) == 1) h = '0' + h;
        return h;
    };
    this.bigIntToMinTwosComplementsHex = function(bigIntegerValue) {
        var h = bigIntegerValue.toString(16);
        if (h.substr(0, 1) != '-') {
            if (h.length % 2 == 1) {
                h = '0' + h;
            } else {
                if (! h.match(/^[0-7]/)) {
                    h = '00' + h;
                }
            }
        } else {
            var hPos = h.substr(1);
            var xorLen = hPos.length;
            if (xorLen % 2 == 1) {
                xorLen += 1;
            } else {
                if (! h.match(/^[0-7]/)) {
                    xorLen += 2;
                }
            }
            var hMask = '';
            for (var i = 0; i < xorLen; i++) {
                hMask += 'f';
            }
            var biMask = new BigInteger(hMask, 16);
            var biNeg = biMask.xor(bigIntegerValue).add(BigInteger.ONE);
            h = biNeg.toString(16).replace(/^-/, '');
        }
        return h;
    };
    /**
     * get PEM string from hexadecimal data and header string
     * @name getPEMStringFromHex
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {String} dataHex hexadecimal string of PEM body
     * @param {String} pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
     * @return {String} PEM formatted string of input data
     * @description
     * This method converts a hexadecimal string to a PEM string with
     * a specified header. Its line break will be CRLF("\r\n").
     * @example
     * var pem  = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');
     * // value of pem will be:
     * -----BEGIN PRIVATE KEY-----
     * YWFh
     * -----END PRIVATE KEY-----
     */
    this.getPEMStringFromHex = function(dataHex, pemHeader) {
        return hextopem(dataHex, pemHeader);
    };

    /**
     * generate ASN1Object specifed by JSON parameters
     * @name newObject
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return {KJUR.asn1.ASN1Object} generated object
     * @since asn1 1.0.3
     * @description
     * generate any ASN1Object specified by JSON param
     * including ASN.1 primitive or structured.
     * Generally 'param' can be described as follows:
     * <blockquote>
     * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}
     * </blockquote>
     * 'TYPE-OF-ASN1OBJ' can be one of following symbols:
     * <ul>
     * <li>'bool' - DERBoolean</li>
     * <li>'int' - DERInteger</li>
     * <li>'bitstr' - DERBitString</li>
     * <li>'octstr' - DEROctetString</li>
     * <li>'null' - DERNull</li>
     * <li>'oid' - DERObjectIdentifier</li>
     * <li>'enum' - DEREnumerated</li>
     * <li>'utf8str' - DERUTF8String</li>
     * <li>'numstr' - DERNumericString</li>
     * <li>'prnstr' - DERPrintableString</li>
     * <li>'telstr' - DERTeletexString</li>
     * <li>'ia5str' - DERIA5String</li>
     * <li>'utctime' - DERUTCTime</li>
     * <li>'gentime' - DERGeneralizedTime</li>
     * <li>'seq' - DERSequence</li>
     * <li>'set' - DERSet</li>
     * <li>'tag' - DERTaggedObject</li>
     * </ul>
     * @example
     * newObject({'prnstr': 'aaa'});
     * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})
     * // ASN.1 Tagged Object
     * newObject({'tag': {'tag': 'a1',
     *                    'explicit': true,
     *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});
     * // more simple representation of ASN.1 Tagged Object
     * newObject({'tag': ['a1',
     *                    true,
     *                    {'seq': [
     *                      {'int': 3},
     *                      {'prnstr': 'aaa'}]}
     *                   ]});
     */
    this.newObject = function(param) {
        var _KJUR = KJUR,
            _KJUR_asn1 = _KJUR.asn1,
            _DERBoolean = _KJUR_asn1.DERBoolean,
            _DERInteger = _KJUR_asn1.DERInteger,
            _DERBitString = _KJUR_asn1.DERBitString,
            _DEROctetString = _KJUR_asn1.DEROctetString,
            _DERNull = _KJUR_asn1.DERNull,
            _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier,
            _DEREnumerated = _KJUR_asn1.DEREnumerated,
            _DERUTF8String = _KJUR_asn1.DERUTF8String,
            _DERNumericString = _KJUR_asn1.DERNumericString,
            _DERPrintableString = _KJUR_asn1.DERPrintableString,
            _DERTeletexString = _KJUR_asn1.DERTeletexString,
            _DERIA5String = _KJUR_asn1.DERIA5String,
            _DERUTCTime = _KJUR_asn1.DERUTCTime,
            _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime,
            _DERSequence = _KJUR_asn1.DERSequence,
            _DERSet = _KJUR_asn1.DERSet,
            _DERTaggedObject = _KJUR_asn1.DERTaggedObject,
            _newObject = _KJUR_asn1.ASN1Util.newObject;

        var keys = Object.keys(param);
        if (keys.length != 1)
            throw "key of param shall be only one.";
        var key = keys[0];

        if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + key + ":") == -1)
            throw "undefined key: " + key;

        if (key == "bool")    return new _DERBoolean(param[key]);
        if (key == "int")     return new _DERInteger(param[key]);
        if (key == "bitstr")  return new _DERBitString(param[key]);
        if (key == "octstr")  return new _DEROctetString(param[key]);
        if (key == "null")    return new _DERNull(param[key]);
        if (key == "oid")     return new _DERObjectIdentifier(param[key]);
        if (key == "enum")    return new _DEREnumerated(param[key]);
        if (key == "utf8str") return new _DERUTF8String(param[key]);
        if (key == "numstr")  return new _DERNumericString(param[key]);
        if (key == "prnstr")  return new _DERPrintableString(param[key]);
        if (key == "telstr")  return new _DERTeletexString(param[key]);
        if (key == "ia5str")  return new _DERIA5String(param[key]);
        if (key == "utctime") return new _DERUTCTime(param[key]);
        if (key == "gentime") return new _DERGeneralizedTime(param[key]);

        if (key == "seq") {
            var paramList = param[key];
            var a = [];
            for (var i = 0; i < paramList.length; i++) {
                var asn1Obj = _newObject(paramList[i]);
                a.push(asn1Obj);
            }
            return new _DERSequence({'array': a});
        }

        if (key == "set") {
            var paramList = param[key];
            var a = [];
            for (var i = 0; i < paramList.length; i++) {
                var asn1Obj = _newObject(paramList[i]);
                a.push(asn1Obj);
            }
            return new _DERSet({'array': a});
        }

        if (key == "tag") {
            var tagParam = param[key];
            if (Object.prototype.toString.call(tagParam) === '[object Array]' &&
                tagParam.length == 3) {
                var obj = _newObject(tagParam[2]);
                return new _DERTaggedObject({tag: tagParam[0],
                    explicit: tagParam[1],
                    obj: obj});
            } else {
                var newParam = {};
                if (tagParam.explicit !== undefined)
                    newParam.explicit = tagParam.explicit;
                if (tagParam.tag !== undefined)
                    newParam.tag = tagParam.tag;
                if (tagParam.obj === undefined)
                    throw "obj shall be specified for 'tag'.";
                newParam.obj = _newObject(tagParam.obj);
                return new _DERTaggedObject(newParam);
            }
        }
    };

    /**
     * get encoded hexadecimal string of ASN1Object specifed by JSON parameters
     * @name jsonToASN1HEX
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return hexadecimal string of ASN1Object
     * @since asn1 1.0.4
     * @description
     * As for ASN.1 object representation of JSON object,
     * please see {@link newObject}.
     * @example
     * jsonToASN1HEX({'prnstr': 'aaa'});
     */
    this.jsonToASN1HEX = function(param) {
        var asn1Obj = this.newObject(param);
        return asn1Obj.getEncodedHex();
    };
};

/**
 * get dot noted oid number string from hexadecimal value of OID
 * @name oidHexToInt
 * @memberOf KJUR.asn1.ASN1Util
 * @function
 * @param {String} hex hexadecimal value of object identifier
 * @return {String} dot noted string of object identifier
 * @since jsrsasign 4.8.3 asn1 1.0.7
 * @description
 * This static method converts from hexadecimal string representation of
 * ASN.1 value of object identifier to oid number string.
 * @example
 * KJUR.asn1.ASN1Util.oidHexToInt('550406') &rarr; "2.5.4.6"
 */
KJUR.asn1.ASN1Util.oidHexToInt = function(hex) {
    var s = "";
    var i01 = parseInt(hex.substr(0, 2), 16);
    var i0 = Math.floor(i01 / 40);
    var i1 = i01 % 40;
    var s = i0 + "." + i1;

    var binbuf = "";
    for (var i = 2; i < hex.length; i += 2) {
        var value = parseInt(hex.substr(i, 2), 16);
        var bin = ("00000000" + value.toString(2)).slice(- 8);
        binbuf = binbuf + bin.substr(1, 7);
        if (bin.substr(0, 1) == "0") {
            var bi = new BigInteger(binbuf, 2);
            s = s + "." + bi.toString(10);
            binbuf = "";
        }
    }
    return s;
};

/**
 * get hexadecimal value of object identifier from dot noted oid value
 * @name oidIntToHex
 * @memberOf KJUR.asn1.ASN1Util
 * @function
 * @param {String} oidString dot noted string of object identifier
 * @return {String} hexadecimal value of object identifier
 * @since jsrsasign 4.8.3 asn1 1.0.7
 * @description
 * This static method converts from object identifier value string.
 * to hexadecimal string representation of it.
 * @example
 * KJUR.asn1.ASN1Util.oidIntToHex("2.5.4.6") &rarr; "550406"
 */
KJUR.asn1.ASN1Util.oidIntToHex = function(oidString) {
    var itox = function(i) {
        var h = i.toString(16);
        if (h.length == 1) h = '0' + h;
        return h;
    };

    var roidtox = function(roid) {
        var h = '';
        var bi = new BigInteger(roid, 10);
        var b = bi.toString(2);
        var padLen = 7 - b.length % 7;
        if (padLen == 7) padLen = 0;
        var bPad = '';
        for (var i = 0; i < padLen; i++) bPad += '0';
        b = bPad + b;
        for (var i = 0; i < b.length - 1; i += 7) {
            var b8 = b.substr(i, 7);
            if (i != b.length - 7) b8 = '1' + b8;
            h += itox(parseInt(b8, 2));
        }
        return h;
    };

    if (! oidString.match(/^[0-9.]+$/)) {
        throw "malformed oid string: " + oidString;
    }
    var h = '';
    var a = oidString.split('.');
    var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
    h += itox(i0);
    a.splice(0, 2);
    for (var i = 0; i < a.length; i++) {
        h += roidtox(a[i]);
    }
    return h;
};


// ********************************************************************
//  Abstract ASN.1 Classes
// ********************************************************************

// ********************************************************************

/**
 * base class for ASN.1 DER encoder object
 * @name KJUR.asn1.ASN1Object
 * @class base class for ASN.1 DER encoder object
 * @property {Boolean} isModified flag whether internal data was changed
 * @property {String} hTLV hexadecimal string of ASN.1 TLV
 * @property {String} hT hexadecimal string of ASN.1 TLV tag(T)
 * @property {String} hL hexadecimal string of ASN.1 TLV length(L)
 * @property {String} hV hexadecimal string of ASN.1 TLV value(V)
 * @description
 */
KJUR.asn1.ASN1Object = function() {
    var hV = '';

    /**
     * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)
     * @name getLengthHexFromValue
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV length(L)
     */
    this.getLengthHexFromValue = function() {
        if (typeof this.hV == "undefined" || this.hV == null) {
            throw "this.hV is null or undefined.";
        }
        if (this.hV.length % 2 == 1) {
            throw "value hex must be even length: n=" + hV.length + ",v=" + this.hV;
        }
        var n = this.hV.length / 2;
        var hN = n.toString(16);
        if (hN.length % 2 == 1) {
            hN = "0" + hN;
        }
        if (n < 128) {
            return hN;
        } else {
            var hNlen = hN.length / 2;
            if (hNlen > 15) {
                throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
            }
            var head = 128 + hNlen;
            return head.toString(16) + hN;
        }
    };

    /**
     * get hexadecimal string of ASN.1 TLV bytes
     * @name getEncodedHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV
     */
    this.getEncodedHex = function() {
        if (this.hTLV == null || this.isModified) {
            this.hV = this.getFreshValueHex();
            this.hL = this.getLengthHexFromValue();
            this.hTLV = this.hT + this.hL + this.hV;
            this.isModified = false;
            //alert("first time: " + this.hTLV);
        }
        return this.hTLV;
    };

    /**
     * get hexadecimal string of ASN.1 TLV value(V) bytes
     * @name getValueHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV value(V) bytes
     */
    this.getValueHex = function() {
        this.getEncodedHex();
        return this.hV;
    };

    this.getFreshValueHex = function() {
        return '';
    };
};

// == BEGIN DERAbstractString ================================================
/**
 * base class for ASN.1 DER string classes
 * @name KJUR.asn1.DERAbstractString
 * @class base class for ASN.1 DER string classes
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @property {String} s internal string of value
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERAbstractString = function(params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);

    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @return {String} string value of this string object
     */
    this.getString = function() {
        return this.s;
    };

    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newS value by a string to set
     */
    this.setString = function(newS) {
        this.hTLV = null;
        this.isModified = true;
        this.s = newS;
        this.hV = stohex(this.s);
    };

    /**
     * set value by a hexadecimal string
     * @name setStringHex
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newHexString value by a hexadecimal string to set
     */
    this.setStringHex = function(newHexString) {
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = newHexString;
    };

    this.getFreshValueHex = function() {
        return this.hV;
    };

    if (typeof params != "undefined") {
        if (typeof params == "string") {
            this.setString(params);
        } else if (typeof params['str'] != "undefined") {
            this.setString(params['str']);
        } else if (typeof params['hex'] != "undefined") {
            this.setStringHex(params['hex']);
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
// == END   DERAbstractString ================================================

// == BEGIN DERAbstractTime ==================================================
/**
 * base class for ASN.1 DER Generalized/UTCTime class
 * @name KJUR.asn1.DERAbstractTime
 * @class base class for ASN.1 DER Generalized/UTCTime class
 * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERAbstractTime = function(params) {
    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);

    // --- PRIVATE METHODS --------------------
    this.localDateToUTC = function(d) {
        utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var utcDate = new Date(utc);
        return utcDate;
    };

    /*
     * format date string by Data object
     * @name formatDate
     * @memberOf KJUR.asn1.AbstractTime;
     * @param {Date} dateObject
     * @param {string} type 'utc' or 'gen'
     * @param {boolean} withMillis flag for with millisections or not
     * @description
     * 'withMillis' flag is supported from asn1 1.0.6.
     */
    this.formatDate = function(dateObject, type, withMillis) {
        var pad = this.zeroPadding;
        var d = this.localDateToUTC(dateObject);
        var year = String(d.getFullYear());
        if (type == 'utc') year = year.substr(2, 2);
        var month = pad(String(d.getMonth() + 1), 2);
        var day = pad(String(d.getDate()), 2);
        var hour = pad(String(d.getHours()), 2);
        var min = pad(String(d.getMinutes()), 2);
        var sec = pad(String(d.getSeconds()), 2);
        var s = year + month + day + hour + min + sec;
        if (withMillis === true) {
            var millis = d.getMilliseconds();
            if (millis != 0) {
                var sMillis = pad(String(millis), 3);
                sMillis = sMillis.replace(/[0]+$/, "");
                s = s + "." + sMillis;
            }
        }
        return s + "Z";
    };

    this.zeroPadding = function(s, len) {
        if (s.length >= len) return s;
        return new Array(len - s.length + 1).join('0') + s;
    };

    // --- PUBLIC METHODS --------------------
    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @return {String} string value of this time object
     */
    this.getString = function() {
        return this.s;
    };

    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {String} newS value by a string to set such like "130430235959Z"
     */
    this.setString = function(newS) {
        this.hTLV = null;
        this.isModified = true;
        this.s = newS;
        this.hV = stohex(newS);
    };

    /**
     * set value by a Date object
     * @name setByDateValue
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {Integer} year year of date (ex. 2013)
     * @param {Integer} month month of date between 1 and 12 (ex. 12)
     * @param {Integer} day day of month
     * @param {Integer} hour hours of date
     * @param {Integer} min minutes of date
     * @param {Integer} sec seconds of date
     */
    this.setByDateValue = function(year, month, day, hour, min, sec) {
        var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));
        this.setByDate(dateObject);
    };

    this.getFreshValueHex = function() {
        return this.hV;
    };
};
YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
// == END   DERAbstractTime ==================================================

// == BEGIN DERAbstractStructured ============================================
/**
 * base class for ASN.1 DER structured class
 * @name KJUR.asn1.DERAbstractStructured
 * @class base class for ASN.1 DER structured class
 * @property {Array} asn1Array internal array of ASN1Object
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERAbstractStructured = function(params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);

    /**
     * set value by array of ASN1Object
     * @name setByASN1ObjectArray
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {array} asn1ObjectArray array of ASN1Object to set
     */
    this.setByASN1ObjectArray = function(asn1ObjectArray) {
        this.hTLV = null;
        this.isModified = true;
        this.asn1Array = asn1ObjectArray;
    };

    /**
     * append an ASN1Object to internal array
     * @name appendASN1Object
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {ASN1Object} asn1Object to add
     */
    this.appendASN1Object = function(asn1Object) {
        this.hTLV = null;
        this.isModified = true;
        this.asn1Array.push(asn1Object);
    };

    this.asn1Array = new Array();
    if (typeof params != "undefined") {
        if (typeof params['array'] != "undefined") {
            this.asn1Array = params['array'];
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);


// ********************************************************************
//  ASN.1 Object Classes
// ********************************************************************

// ********************************************************************
/**
 * class for ASN.1 DER Boolean
 * @name KJUR.asn1.DERBoolean
 * @class class for ASN.1 DER Boolean
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERBoolean = function() {
    KJUR.asn1.DERBoolean.superclass.constructor.call(this);
    this.hT = "01";
    this.hTLV = "0101ff";
};
YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);

// ********************************************************************
/**
 * class for ASN.1 DER Integer
 * @name KJUR.asn1.DERInteger
 * @class class for ASN.1 DER Integer
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>int - specify initial ASN.1 value(V) by integer value</li>
 * <li>bigint - specify initial ASN.1 value(V) by BigInteger object</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERInteger = function(params) {
    KJUR.asn1.DERInteger.superclass.constructor.call(this);
    this.hT = "02";

    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */
    this.setByBigInteger = function(bigIntegerValue) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };

    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DERInteger
     * @function
     * @param {Integer} integer value to set
     */
    this.setByInteger = function(intValue) {
        var bi = new BigInteger(String(intValue), 10);
        this.setByBigInteger(bi);
    };

    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     * @example
     * new KJUR.asn1.DERInteger(123);
     * new KJUR.asn1.DERInteger({'int': 123});
     * new KJUR.asn1.DERInteger({'hex': '1fad'});
     */
    this.setValueHex = function(newHexString) {
        this.hV = newHexString;
    };

    this.getFreshValueHex = function() {
        return this.hV;
    };

    if (typeof params != "undefined") {
        if (typeof params['bigint'] != "undefined") {
            this.setByBigInteger(params['bigint']);
        } else if (typeof params['int'] != "undefined") {
            this.setByInteger(params['int']);
        } else if (typeof params == "number") {
            this.setByInteger(params);
        } else if (typeof params['hex'] != "undefined") {
            this.setValueHex(params['hex']);
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);

// ********************************************************************
/**
 * class for ASN.1 DER encoded BitString primitive
 * @name KJUR.asn1.DERBitString
 * @class class for ASN.1 DER encoded BitString primitive
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>bin - specify binary string (ex. '10111')</li>
 * <li>array - specify array of boolean (ex. [true,false,true,true])</li>
 * <li>hex - specify hexadecimal string of ASN.1 value(V) including unused bits</li>
 * <li>obj - specify {@link KJUR.asn1.ASN1Util.newObject}
 * argument for "BitString encapsulates" structure.</li>
 * </ul>
 * NOTE1: 'params' can be omitted.<br/>
 * NOTE2: 'obj' parameter have been supported since
 * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).<br/>
 * @example
 * // default constructor
 * o = new KJUR.asn1.DERBitString();
 * // initialize with binary string
 * o = new KJUR.asn1.DERBitString({bin: "1011"});
 * // initialize with boolean array
 * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});
 * // initialize with hexadecimal string (04 is unused bits)
 * o = new KJUR.asn1.DEROctetString({hex: "04bac0"});
 * // initialize with ASN1Util.newObject argument for encapsulated
 * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
 * // above generates a ASN.1 data like this:
 * // BIT STRING, encapsulates {
 * //   SEQUENCE {
 * //     INTEGER 3
 * //     PrintableString 'aaa'
 * //     }
 * //   }
 */
KJUR.asn1.DERBitString = function(params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
        var o = KJUR.asn1.ASN1Util.newObject(params.obj);
        params.hex = "00" + o.getEncodedHex();
    }
    KJUR.asn1.DERBitString.superclass.constructor.call(this);
    this.hT = "03";

    /**
     * set ASN.1 value(V) by a hexadecimal string including unused bits
     * @name setHexValueIncludingUnusedBits
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} newHexStringIncludingUnusedBits
     */
    this.setHexValueIncludingUnusedBits = function(newHexStringIncludingUnusedBits) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = newHexStringIncludingUnusedBits;
    };

    /**
     * set ASN.1 value(V) by unused bit and hexadecimal string of value
     * @name setUnusedBitsAndHexValue
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {Integer} unusedBits
     * @param {String} hValue
     */
    this.setUnusedBitsAndHexValue = function(unusedBits, hValue) {
        if (unusedBits < 0 || 7 < unusedBits) {
            throw "unused bits shall be from 0 to 7: u = " + unusedBits;
        }
        var hUnusedBits = "0" + unusedBits;
        this.hTLV = null;
        this.isModified = true;
        this.hV = hUnusedBits + hValue;
    };

    /**
     * set ASN.1 DER BitString by binary string<br/>
     * @name setByBinaryString
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} binaryString binary value string (i.e. '10111')
     * @description
     * Its unused bits will be calculated automatically by length of
     * 'binaryValue'. <br/>
     * NOTE: Trailing zeros '0' will be ignored.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray("01011");
     */
    this.setByBinaryString = function(binaryString) {
        binaryString = binaryString.replace(/0+$/, '');
        var unusedBits = 8 - binaryString.length % 8;
        if (unusedBits == 8) unusedBits = 0;
        for (var i = 0; i <= unusedBits; i++) {
            binaryString += '0';
        }
        var h = '';
        for (var i = 0; i < binaryString.length - 1; i += 8) {
            var b = binaryString.substr(i, 8);
            var x = parseInt(b, 2).toString(16);
            if (x.length == 1) x = '0' + x;
            h += x;
        }
        this.hTLV = null;
        this.isModified = true;
        this.hV = '0' + unusedBits + h;
    };

    /**
     * set ASN.1 TLV value(V) by an array of boolean<br/>
     * @name setByBooleanArray
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {array} booleanArray array of boolean (ex. [true, false, true])
     * @description
     * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray([false, true, false, true, true]);
     */
    this.setByBooleanArray = function(booleanArray) {
        var s = '';
        for (var i = 0; i < booleanArray.length; i++) {
            if (booleanArray[i] == true) {
                s += '1';
            } else {
                s += '0';
            }
        }
        this.setByBinaryString(s);
    };

    /**
     * generate an array of falses with specified length<br/>
     * @name newFalseArray
     * @memberOf KJUR.asn1.DERBitString
     * @function
     * @param {Integer} nLength length of array to generate
     * @return {array} array of boolean falses
     * @description
     * This static method may be useful to initialize boolean array.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.newFalseArray(3) &rarr; [false, false, false]
     */
    this.newFalseArray = function(nLength) {
        var a = new Array(nLength);
        for (var i = 0; i < nLength; i++) {
            a[i] = false;
        }
        return a;
    };

    this.getFreshValueHex = function() {
        return this.hV;
    };

    if (typeof params != "undefined") {
        if (typeof params == "string" && params.toLowerCase().match(/^[0-9a-f]+$/)) {
            this.setHexValueIncludingUnusedBits(params);
        } else if (typeof params['hex'] != "undefined") {
            this.setHexValueIncludingUnusedBits(params['hex']);
        } else if (typeof params['bin'] != "undefined") {
            this.setByBinaryString(params['bin']);
        } else if (typeof params['array'] != "undefined") {
            this.setByBooleanArray(params['array']);
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);

// ********************************************************************
/**
 * class for ASN.1 DER OctetString<br/>
 * @name KJUR.asn1.DEROctetString
 * @class class for ASN.1 DER OctetString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * This class provides ASN.1 OctetString simple type.<br/>
 * Supported "params" attributes are:
 * <ul>
 * <li>str - to set a string as a value</li>
 * <li>hex - to set a hexadecimal string as a value</li>
 * <li>obj - to set a encapsulated ASN.1 value by JSON object
 * which is defined in {@link KJUR.asn1.ASN1Util.newObject}</li>
 * </ul>
 * NOTE: A parameter 'obj' have been supported
 * for "OCTET STRING, encapsulates" structure.
 * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
 * @see KJUR.asn1.DERAbstractString - superclass
 * @example
 * // default constructor
 * o = new KJUR.asn1.DEROctetString();
 * // initialize with string
 * o = new KJUR.asn1.DEROctetString({str: "aaa"});
 * // initialize with hexadecimal string
 * o = new KJUR.asn1.DEROctetString({hex: "616161"});
 * // initialize with ASN1Util.newObject argument
 * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
 * // above generates a ASN.1 data like this:
 * // OCTET STRING, encapsulates {
 * //   SEQUENCE {
 * //     INTEGER 3
 * //     PrintableString 'aaa'
 * //     }
 * //   }
 */
KJUR.asn1.DEROctetString = function(params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
        var o = KJUR.asn1.ASN1Util.newObject(params.obj);
        params.hex = o.getEncodedHex();
    }
    KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);
    this.hT = "04";
};
YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);

// ********************************************************************
/**
 * class for ASN.1 DER Null
 * @name KJUR.asn1.DERNull
 * @class class for ASN.1 DER Null
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERNull = function() {
    KJUR.asn1.DERNull.superclass.constructor.call(this);
    this.hT = "05";
    this.hTLV = "0500";
};
YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);

// ********************************************************************
/**
 * class for ASN.1 DER ObjectIdentifier
 * @name KJUR.asn1.DERObjectIdentifier
 * @class class for ASN.1 DER ObjectIdentifier
 * @param {Array} params associative array of parameters (ex. {'oid': '2.5.4.5'})
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>oid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERObjectIdentifier = function(params) {
    var itox = function(i) {
        var h = i.toString(16);
        if (h.length == 1) h = '0' + h;
        return h;
    };
    var roidtox = function(roid) {
        var h = '';
        var bi = new BigInteger(roid, 10);
        var b = bi.toString(2);
        var padLen = 7 - b.length % 7;
        if (padLen == 7) padLen = 0;
        var bPad = '';
        for (var i = 0; i < padLen; i++) bPad += '0';
        b = bPad + b;
        for (var i = 0; i < b.length - 1; i += 7) {
            var b8 = b.substr(i, 7);
            if (i != b.length - 7) b8 = '1' + b8;
            h += itox(parseInt(b8, 2));
        }
        return h;
    };

    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
    this.hT = "06";

    /**
     * set value by a hexadecimal string
     * @name setValueHex
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} newHexString hexadecimal value of OID bytes
     */
    this.setValueHex = function(newHexString) {
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = newHexString;
    };

    /**
     * set value by a OID string<br/>
     * @name setValueOidString
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidString OID string (ex. 2.5.4.13)
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueOidString("2.5.4.13");
     */
    this.setValueOidString = function(oidString) {
        if (! oidString.match(/^[0-9.]+$/)) {
            throw "malformed oid string: " + oidString;
        }
        var h = '';
        var a = oidString.split('.');
        var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
        h += itox(i0);
        a.splice(0, 2);
        for (var i = 0; i < a.length; i++) {
            h += roidtox(a[i]);
        }
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = h;
    };

    /**
     * set value by a OID name
     * @name setValueName
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidName OID name (ex. 'serverAuth')
     * @since 1.0.1
     * @description
     * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.
     * Otherwise raise error.
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueName("serverAuth");
     */
    this.setValueName = function(oidName) {
        var oid = KJUR.asn1.x509.OID.name2oid(oidName);
        if (oid !== '') {
            this.setValueOidString(oid);
        } else {
            throw "DERObjectIdentifier oidName undefined: " + oidName;
        }
    };

    this.getFreshValueHex = function() {
        return this.hV;
    };

    if (params !== undefined) {
        if (typeof params === "string") {
            if (params.match(/^[0-2].[0-9.]+$/)) {
                this.setValueOidString(params);
            } else {
                this.setValueName(params);
            }
        } else if (params.oid !== undefined) {
            this.setValueOidString(params.oid);
        } else if (params.hex !== undefined) {
            this.setValueHex(params.hex);
        } else if (params.name !== undefined) {
            this.setValueName(params.name);
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);

// ********************************************************************
/**
 * class for ASN.1 DER Enumerated
 * @name KJUR.asn1.DEREnumerated
 * @class class for ASN.1 DER Enumerated
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>int - specify initial ASN.1 value(V) by integer value</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 * @example
 * new KJUR.asn1.DEREnumerated(123);
 * new KJUR.asn1.DEREnumerated({int: 123});
 * new KJUR.asn1.DEREnumerated({hex: '1fad'});
 */
KJUR.asn1.DEREnumerated = function(params) {
    KJUR.asn1.DEREnumerated.superclass.constructor.call(this);
    this.hT = "0a";

    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */
    this.setByBigInteger = function(bigIntegerValue) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };

    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {Integer} integer value to set
     */
    this.setByInteger = function(intValue) {
        var bi = new BigInteger(String(intValue), 10);
        this.setByBigInteger(bi);
    };

    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     */
    this.setValueHex = function(newHexString) {
        this.hV = newHexString;
    };

    this.getFreshValueHex = function() {
        return this.hV;
    };

    if (typeof params != "undefined") {
        if (typeof params['int'] != "undefined") {
            this.setByInteger(params['int']);
        } else if (typeof params == "number") {
            this.setByInteger(params);
        } else if (typeof params['hex'] != "undefined") {
            this.setValueHex(params['hex']);
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object);

// ********************************************************************
/**
 * class for ASN.1 DER UTF8String
 * @name KJUR.asn1.DERUTF8String
 * @class class for ASN.1 DER UTF8String
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERUTF8String = function(params) {
    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);
    this.hT = "0c";
};
YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);

// ********************************************************************
/**
 * class for ASN.1 DER NumericString
 * @name KJUR.asn1.DERNumericString
 * @class class for ASN.1 DER NumericString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERNumericString = function(params) {
    KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);
    this.hT = "12";
};
YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);

// ********************************************************************
/**
 * class for ASN.1 DER PrintableString
 * @name KJUR.asn1.DERPrintableString
 * @class class for ASN.1 DER PrintableString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERPrintableString = function(params) {
    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);
    this.hT = "13";
};
YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);

// ********************************************************************
/**
 * class for ASN.1 DER TeletexString
 * @name KJUR.asn1.DERTeletexString
 * @class class for ASN.1 DER TeletexString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERTeletexString = function(params) {
    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);
    this.hT = "14";
};
YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);

// ********************************************************************
/**
 * class for ASN.1 DER IA5String
 * @name KJUR.asn1.DERIA5String
 * @class class for ASN.1 DER IA5String
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERIA5String = function(params) {
    KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);
    this.hT = "16";
};
YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);

// ********************************************************************
/**
 * class for ASN.1 DER UTCTime
 * @name KJUR.asn1.DERUTCTime
 * @class class for ASN.1 DER UTCTime
 * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
 * @extends KJUR.asn1.DERAbstractTime
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * <li>date - specify Date object.</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 * <h4>EXAMPLES</h4>
 * @example
 * d1 = new KJUR.asn1.DERUTCTime();
 * d1.setString('130430125959Z');
 *
 * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});
 * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});
 * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');
 */
KJUR.asn1.DERUTCTime = function(params) {
    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);
    this.hT = "17";

    /**
     * set value by a Date object<br/>
     * @name setByDate
     * @memberOf KJUR.asn1.DERUTCTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * o = new KJUR.asn1.DERUTCTime();
     * o.setByDate(new Date("2016/12/31"));
     */
    this.setByDate = function(dateObject) {
        this.hTLV = null;
        this.isModified = true;
        this.date = dateObject;
        this.s = this.formatDate(this.date, 'utc');
        this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function() {
        if (typeof this.date == "undefined" && typeof this.s == "undefined") {
            this.date = new Date();
            this.s = this.formatDate(this.date, 'utc');
            this.hV = stohex(this.s);
        }
        return this.hV;
    };

    if (params !== undefined) {
        if (params.str !== undefined) {
            this.setString(params.str);
        } else if (typeof params == "string" && params.match(/^[0-9]{12}Z$/)) {
            this.setString(params);
        } else if (params.hex !== undefined) {
            this.setStringHex(params.hex);
        } else if (params.date !== undefined) {
            this.setByDate(params.date);
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);

// ********************************************************************
/**
 * class for ASN.1 DER GeneralizedTime
 * @name KJUR.asn1.DERGeneralizedTime
 * @class class for ASN.1 DER GeneralizedTime
 * @param {Array} params associative array of parameters (ex. {'str': '20130430235959Z'})
 * @property {Boolean} withMillis flag to show milliseconds or not
 * @extends KJUR.asn1.DERAbstractTime
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * <li>date - specify Date object.</li>
 * <li>millis - specify flag to show milliseconds (from 1.0.6)</li>
 * </ul>
 * NOTE1: 'params' can be omitted.
 * NOTE2: 'withMillis' property is supported from asn1 1.0.6.
 */
KJUR.asn1.DERGeneralizedTime = function(params) {
    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);
    this.hT = "18";
    this.withMillis = false;

    /**
     * set value by a Date object
     * @name setByDate
     * @memberOf KJUR.asn1.DERGeneralizedTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * When you specify UTC time, use 'Date.UTC' method like this:<br/>
     * o1 = new DERUTCTime();
     * o1.setByDate(date);
     *
     * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59
     */
    this.setByDate = function(dateObject) {
        this.hTLV = null;
        this.isModified = true;
        this.date = dateObject;
        this.s = this.formatDate(this.date, 'gen', this.withMillis);
        this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function() {
        if (this.date === undefined && this.s === undefined) {
            this.date = new Date();
            this.s = this.formatDate(this.date, 'gen', this.withMillis);
            this.hV = stohex(this.s);
        }
        return this.hV;
    };

    if (params !== undefined) {
        if (params.str !== undefined) {
            this.setString(params.str);
        } else if (typeof params == "string" && params.match(/^[0-9]{14}Z$/)) {
            this.setString(params);
        } else if (params.hex !== undefined) {
            this.setStringHex(params.hex);
        } else if (params.date !== undefined) {
            this.setByDate(params.date);
        }
        if (params.millis === true) {
            this.withMillis = true;
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);

// ********************************************************************
/**
 * class for ASN.1 DER Sequence
 * @name KJUR.asn1.DERSequence
 * @class class for ASN.1 DER Sequence
 * @extends KJUR.asn1.DERAbstractStructured
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>array - specify array of ASN1Object to set elements of content</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERSequence = function(params) {
    KJUR.asn1.DERSequence.superclass.constructor.call(this, params);
    this.hT = "30";
    this.getFreshValueHex = function() {
        var h = '';
        for (var i = 0; i < this.asn1Array.length; i++) {
            var asn1Obj = this.asn1Array[i];
            h += asn1Obj.getEncodedHex();
        }
        this.hV = h;
        return this.hV;
    };
};
YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);

// ********************************************************************
/**
 * class for ASN.1 DER Set
 * @name KJUR.asn1.DERSet
 * @class class for ASN.1 DER Set
 * @extends KJUR.asn1.DERAbstractStructured
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>array - specify array of ASN1Object to set elements of content</li>
 * <li>sortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.</li>
 * </ul>
 * NOTE1: 'params' can be omitted.<br/>
 * NOTE2: sortflag is supported since 1.0.5.
 */
KJUR.asn1.DERSet = function(params) {
    KJUR.asn1.DERSet.superclass.constructor.call(this, params);
    this.hT = "31";
    this.sortFlag = true; // item shall be sorted only in ASN.1 DER
    this.getFreshValueHex = function() {
        var a = new Array();
        for (var i = 0; i < this.asn1Array.length; i++) {
            var asn1Obj = this.asn1Array[i];
            a.push(asn1Obj.getEncodedHex());
        }
        if (this.sortFlag == true) a.sort();
        this.hV = a.join('');
        return this.hV;
    };

    if (typeof params != "undefined") {
        if (typeof params.sortflag != "undefined" &&
            params.sortflag == false)
            this.sortFlag = false;
    }
};
YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);

// ********************************************************************
/**
 * class for ASN.1 DER TaggedObject
 * @name KJUR.asn1.DERTaggedObject
 * @class class for ASN.1 DER TaggedObject
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.
 * For example, if you find '[1]' tag in a ASN.1 dump,
 * 'tagNoHex' will be 'a1'.
 * <br/>
 * As for optional argument 'params' for constructor, you can specify *ANY* of
 * following properties:
 * <ul>
 * <li>explicit - specify true if this is explicit tag otherwise false
 *     (default is 'true').</li>
 * <li>tag - specify tag (default is 'a0' which means [0])</li>
 * <li>obj - specify ASN1Object which is tagged</li>
 * </ul>
 * @example
 * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});
 * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});
 * hex = d2.getEncodedHex();
 */
KJUR.asn1.DERTaggedObject = function(params) {
    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
    this.hT = "a0";
    this.hV = '';
    this.isExplicit = true;
    this.asn1Object = null;

    /**
     * set value by an ASN1Object
     * @name setString
     * @memberOf KJUR.asn1.DERTaggedObject#
     * @function
     * @param {Boolean} isExplicitFlag flag for explicit/implicit tag
     * @param {Integer} tagNoHex hexadecimal string of ASN.1 tag
     * @param {ASN1Object} asn1Object ASN.1 to encapsulate
     */
    this.setASN1Object = function(isExplicitFlag, tagNoHex, asn1Object) {
        this.hT = tagNoHex;
        this.isExplicit = isExplicitFlag;
        this.asn1Object = asn1Object;
        if (this.isExplicit) {
            this.hV = this.asn1Object.getEncodedHex();
            this.hTLV = null;
            this.isModified = true;
        } else {
            this.hV = null;
            this.hTLV = asn1Object.getEncodedHex();
            this.hTLV = this.hTLV.replace(/^../, tagNoHex);
            this.isModified = false;
        }
    };

    this.getFreshValueHex = function() {
        return this.hV;
    };

    if (typeof params != "undefined") {
        if (typeof params['tag'] != "undefined") {
            this.hT = params['tag'];
        }
        if (typeof params['explicit'] != "undefined") {
            this.isExplicit = params['explicit'];
        }
        if (typeof params['obj'] != "undefined") {
            this.asn1Object = params['obj'];
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
        }
    }
};
YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);

/**
 * Create a new JSEncryptRSAKey that extends Tom Wu's RSA key object.
 * This object is just a decorator for parsing the key parameter
 * @param {string|Object} key - The key in string format, or an object containing
 * the parameters needed to build a RSAKey object.
 * @constructor
 */
var JSEncryptRSAKey = /** @class */ (function (_super) {
    __extends(JSEncryptRSAKey, _super);
    function JSEncryptRSAKey(key) {
        var _this = _super.call(this) || this;
        // Call the super constructor.
        //  RSAKey.call(this);
        // If a key key was provided.
        if (key) {
            // If this is a string...
            if (typeof key === "string") {
                _this.parseKey(key);
            }
            else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) ||
                JSEncryptRSAKey.hasPublicKeyProperty(key)) {
                // Set the values for the key.
                _this.parsePropertiesFrom(key);
            }
        }
        return _this;
    }
    /**
     * Method to parse a pem encoded string containing both a public or private key.
     * The method will translate the pem encoded string in a der encoded string and
     * will parse private key and public key parameters. This method accepts public key
     * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).
     *
     * @todo Check how many rsa formats use the same format of pkcs #1.
     *
     * The format is defined as:
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * it's possible to examine the structure of the keys obtained from openssl using
     * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/
     * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer
     * @private
     */
    JSEncryptRSAKey.prototype.parseKey = function (pem) {
        try {
            var modulus = 0;
            var public_exponent = 0;
            var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
            var der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem);
            var asn1 = ASN1.decode(der);
            // Fixes a bug with OpenSSL 1.0+ private keys
            if (asn1.sub.length === 3) {
                asn1 = asn1.sub[2].sub[0];
            }
            if (asn1.sub.length === 9) {
                // Parse the private key.
                modulus = asn1.sub[1].getHexStringValue(); // bigint
                this.n = parseBigInt(modulus, 16);
                public_exponent = asn1.sub[2].getHexStringValue(); // int
                this.e = parseInt(public_exponent, 16);
                var private_exponent = asn1.sub[3].getHexStringValue(); // bigint
                this.d = parseBigInt(private_exponent, 16);
                var prime1 = asn1.sub[4].getHexStringValue(); // bigint
                this.p = parseBigInt(prime1, 16);
                var prime2 = asn1.sub[5].getHexStringValue(); // bigint
                this.q = parseBigInt(prime2, 16);
                var exponent1 = asn1.sub[6].getHexStringValue(); // bigint
                this.dmp1 = parseBigInt(exponent1, 16);
                var exponent2 = asn1.sub[7].getHexStringValue(); // bigint
                this.dmq1 = parseBigInt(exponent2, 16);
                var coefficient = asn1.sub[8].getHexStringValue(); // bigint
                this.coeff = parseBigInt(coefficient, 16);
            }
            else if (asn1.sub.length === 2) {
                // Parse the public key.
                var bit_string = asn1.sub[1];
                var sequence = bit_string.sub[0];
                modulus = sequence.sub[0].getHexStringValue();
                this.n = parseBigInt(modulus, 16);
                public_exponent = sequence.sub[1].getHexStringValue();
                this.e = parseInt(public_exponent, 16);
            }
            else {
                return false;
            }
            return true;
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa key.
     *
     * The translation follow the ASN.1 notation :
     * RSAPrivateKey ::= SEQUENCE {
     *   version           Version,
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER,  -- e
     *   privateExponent   INTEGER,  -- d
     *   prime1            INTEGER,  -- p
     *   prime2            INTEGER,  -- q
     *   exponent1         INTEGER,  -- d mod (p1)
     *   exponent2         INTEGER,  -- d mod (q-1)
     *   coefficient       INTEGER,  -- (inverse of q) mod p
     * }
     * @returns {string}  DER Encoded String representing the rsa private key
     * @private
     */
    JSEncryptRSAKey.prototype.getPrivateBaseKey = function () {
        var options = {
            array: [
                new KJUR.asn1.DERInteger({ int: 0 }),
                new KJUR.asn1.DERInteger({ bigint: this.n }),
                new KJUR.asn1.DERInteger({ int: this.e }),
                new KJUR.asn1.DERInteger({ bigint: this.d }),
                new KJUR.asn1.DERInteger({ bigint: this.p }),
                new KJUR.asn1.DERInteger({ bigint: this.q }),
                new KJUR.asn1.DERInteger({ bigint: this.dmp1 }),
                new KJUR.asn1.DERInteger({ bigint: this.dmq1 }),
                new KJUR.asn1.DERInteger({ bigint: this.coeff })
            ]
        };
        var seq = new KJUR.asn1.DERSequence(options);
        return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function () {
        return hex2b64(this.getPrivateBaseKey());
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa public key.
     * The representation follow the ASN.1 notation :
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * @returns {string} DER Encoded String representing the rsa public key
     * @private
     */
    JSEncryptRSAKey.prototype.getPublicBaseKey = function () {
        var first_sequence = new KJUR.asn1.DERSequence({
            array: [
                new KJUR.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
                new KJUR.asn1.DERNull()
            ]
        });
        var second_sequence = new KJUR.asn1.DERSequence({
            array: [
                new KJUR.asn1.DERInteger({ bigint: this.n }),
                new KJUR.asn1.DERInteger({ int: this.e })
            ]
        });
        var bit_string = new KJUR.asn1.DERBitString({
            hex: "00" + second_sequence.getEncodedHex()
        });
        var seq = new KJUR.asn1.DERSequence({
            array: [
                first_sequence,
                bit_string
            ]
        });
        return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function () {
        return hex2b64(this.getPublicBaseKey());
    };
    /**
     * wrap the string in block of width chars. The default value for rsa keys is 64
     * characters.
     * @param {string} str the pem encoded string without header and footer
     * @param {Number} [width=64] - the length the string has to be wrapped at
     * @returns {string}
     * @private
     */
    JSEncryptRSAKey.wordwrap = function (str, width) {
        width = width || 64;
        if (!str) {
            return str;
        }
        var regex = "(.{1," + width + "})( +|$\n?)|(.{1," + width + "})";
        return str.match(RegExp(regex, "g")).join("\n");
    };
    /**
     * Retrieve the pem encoded private key
     * @returns {string} the pem encoded private key with header/footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPrivateKey = function () {
        var key = "-----BEGIN RSA PRIVATE KEY-----\n";
        key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
        key += "-----END RSA PRIVATE KEY-----";
        return key;
    };
    /**
     * Retrieve the pem encoded public key
     * @returns {string} the pem encoded public key with header/footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPublicKey = function () {
        var key = "-----BEGIN PUBLIC KEY-----\n";
        key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n";
        key += "-----END PUBLIC KEY-----";
        return key;
    };
    /**
     * Check if the object contains the necessary parameters to populate the rsa modulus
     * and public exponent parameters.
     * @param {Object} [obj={}] - An object that may contain the two public key
     * parameters
     * @returns {boolean} true if the object contains both the modulus and the public exponent
     * properties (n and e)
     * @todo check for types of n and e. N should be a parseable bigInt object, E should
     * be a parseable integer number
     * @private
     */
    JSEncryptRSAKey.hasPublicKeyProperty = function (obj) {
        obj = obj || {};
        return (obj.hasOwnProperty("n") &&
            obj.hasOwnProperty("e"));
    };
    /**
     * Check if the object contains ALL the parameters of an RSA key.
     * @param {Object} [obj={}] - An object that may contain nine rsa key
     * parameters
     * @returns {boolean} true if the object contains all the parameters needed
     * @todo check for types of the parameters all the parameters but the public exponent
     * should be parseable bigint objects, the public exponent should be a parseable integer number
     * @private
     */
    JSEncryptRSAKey.hasPrivateKeyProperty = function (obj) {
        obj = obj || {};
        return (obj.hasOwnProperty("n") &&
            obj.hasOwnProperty("e") &&
            obj.hasOwnProperty("d") &&
            obj.hasOwnProperty("p") &&
            obj.hasOwnProperty("q") &&
            obj.hasOwnProperty("dmp1") &&
            obj.hasOwnProperty("dmq1") &&
            obj.hasOwnProperty("coeff"));
    };
    /**
     * Parse the properties of obj in the current rsa object. Obj should AT LEAST
     * include the modulus and public exponent (n, e) parameters.
     * @param {Object} obj - the object containing rsa parameters
     * @private
     */
    JSEncryptRSAKey.prototype.parsePropertiesFrom = function (obj) {
        this.n = obj.n;
        this.e = obj.e;
        if (obj.hasOwnProperty("d")) {
            this.d = obj.d;
            this.p = obj.p;
            this.q = obj.q;
            this.dmp1 = obj.dmp1;
            this.dmq1 = obj.dmq1;
            this.coeff = obj.coeff;
        }
    };
    return JSEncryptRSAKey;
}(RSAKey));

/**
 *
 * @param {Object} [options = {}] - An object to customize JSEncrypt behaviour
 * possible parameters are:
 * - default_key_size        {number}  default: 1024 the key size in bit
 * - default_public_exponent {string}  default: '010001' the hexadecimal representation of the public exponent
 * - log                     {boolean} default: false whether log warn/error or not
 * @constructor
 */
var JSEncrypt = /** @class */ (function () {
    function JSEncrypt(options) {
        options = options || {};
        this.default_key_size = parseInt(options.default_key_size, 10) || 1024;
        this.default_public_exponent = options.default_public_exponent || "010001"; // 65537 default openssl public exponent for rsa key type
        this.log = options.log || false;
        // The private and public key.
        this.key = null;
    }
    /**
     * Method to set the rsa key parameter (one method is enough to set both the public
     * and the private key, since the private key contains the public key paramenters)
     * Log a warning if logs are enabled
     * @param {Object|string} key the pem encoded string or an object (with or without header/footer)
     * @public
     */
    JSEncrypt.prototype.setKey = function (key) {
        if (this.log && this.key) {
            console.warn("A key was already set, overriding existing.");
        }
        this.key = new JSEncryptRSAKey(key);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */
    JSEncrypt.prototype.setPrivateKey = function (privkey) {
        // Create the key.
        this.setKey(privkey);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */
    JSEncrypt.prototype.setPublicKey = function (pubkey) {
        // Sets the public key.
        this.setKey(pubkey);
    };
    /**
     * Proxy method for RSAKey object's decrypt, decrypt the string using the private
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str base64 encoded crypted string to decrypt
     * @return {string} the decrypted string
     * @public
     */
    JSEncrypt.prototype.decrypt = function (str) {
        // Return the decrypted string.
        try {
            return this.getKey().decrypt(b64tohex(str));
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Proxy method for RSAKey object's encrypt, encrypt the string using the public
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str the string to encrypt
     * @return {string} the encrypted string encoded in base64
     * @public
     */
    JSEncrypt.prototype.encrypt = function (str) {
        // Return the encrypted string.
        try {
            return hex2b64(this.getKey().encrypt(str));
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Proxy method for RSAKey object's sign.
     * @param {string} str the string to sign
     * @param {function} digestMethod hash method
     * @param {string} digestName the name of the hash algorithm
     * @return {string} the signature encoded in base64
     * @public
     */
    JSEncrypt.prototype.sign = function (str, digestMethod, digestName) {
        // return the RSA signature of 'str' in 'hex' format.
        try {
            return hex2b64(this.getKey().sign(str, digestMethod, digestName));
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Proxy method for RSAKey object's verify.
     * @param {string} str the string to verify
     * @param {string} signature the signature encoded in base64 to compare the string to
     * @param {function} digestMethod hash method
     * @return {boolean} whether the data and signature match
     * @public
     */
    JSEncrypt.prototype.verify = function (str, signature, digestMethod) {
        // Return the decrypted 'digest' of the signature.
        try {
            return this.getKey().verify(str, b64tohex(signature), digestMethod);
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object
     * will be created and returned
     * @param {callback} [cb] the callback to be called if we want the key to be generated
     * in an async fashion
     * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object
     * @public
     */
    JSEncrypt.prototype.getKey = function (cb) {
        // Only create new if it does not exist.
        if (!this.key) {
            // Get a new private key.
            this.key = new JSEncryptRSAKey();
            if (cb && {}.toString.call(cb) === "[object Function]") {
                this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
                return;
            }
            // Generate the key.
            this.key.generate(this.default_key_size, this.default_public_exponent);
        }
        return this.key;
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITH header and footer
     * @public
     */
    JSEncrypt.prototype.getPrivateKey = function () {
        // Return the private representation of this key.
        return this.getKey().getPrivateKey();
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITHOUT header and footer
     * @public
     */
    JSEncrypt.prototype.getPrivateKeyB64 = function () {
        // Return the private representation of this key.
        return this.getKey().getPrivateBaseKeyB64();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITH header and footer
     * @public
     */
    JSEncrypt.prototype.getPublicKey = function () {
        // Return the private representation of this key.
        return this.getKey().getPublicKey();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITHOUT header and footer
     * @public
     */
    JSEncrypt.prototype.getPublicKeyB64 = function () {
        // Return the private representation of this key.
        return this.getKey().getPublicBaseKeyB64();
    };
    JSEncrypt.version = "3.0.0-rc.1";
    return JSEncrypt;
}());

window.JSEncrypt = JSEncrypt;

exports.JSEncrypt = JSEncrypt;
exports.default = JSEncrypt;

Object.defineProperty(exports, '__esModule', { value: true });

})));
});

unwrapExports(jsencrypt);

var JBZ_KEY = '&jbzkey=filmjbz2016';
var routerPath = {
    '/banner/banners': 'M10001',
    '/cinema/realtimeseats': 'M10010',
    '/cinema/realtimeseatsinfo': 'M10011',
    '/cinema/cinemadetail': 'M10012',
    '/cinema/films': 'M10013',
    '/cinema/filmshowdates': 'M10014',
    '/cinema/filmshows': 'M10015',
    '/cinema/cinemasbycityordertype': 'M10016',
    '/film/film': 'M10020',
    '/film/hotcomments': 'M10021',
    '/film/hotfilms': 'M10022',
    '/film/hotfilmspage': 'M10023',
    '/film/soonfilms': 'M10024',
    '/film/soonfilmspage': 'M10025',
    '/location/cities': 'M10030',
    '/location/hotcities': 'M10031',
    '/location/city': 'M10032',
    '/location/cityinfo': 'M10033',
    '/location/citybyid': 'M10034',
    '/location/districts': 'M10035',
    '/search/searchall': 'M10040',
    '/search/hotkey': 'M10041',
    '/order/lockseat': 'M10050',
    '/order/lockstatus': 'M10051',
    '/mine/orderlist': 'M10060',
    '/mine/orderdetail': 'M10061',
    '/mine/cltedcinemalist': 'M10062',
    '/mine/cltcinema': 'M10063',
    '/mine/celcltcinema': 'M10064',
    '/mine/lookedfilms': 'H10010',
    '/order/cancel': 'M10065',
    '/system/encrypt': 'M10080',
    '/system/decrypt': 'M10081',
    '/system/login': 'M10082',
    '/system/status': 'M10083',
    '/system/confirm/pay': 'M10084',
    '/get/activity/quota': 'A10010',
    '/get/all/activity': 'A10013',
    '/in/activity/duration': 'A10014',
    '/redirect/find/page': 'A10015',
    '/account/login': 'C10006',
    '/order/confirmorder': 'M10053',
    '/system/prepay': 'M10052' // 预支付
};
var JEncryptionTool = /** @class */ (function () {
    function JEncryptionTool() {
    }
    JEncryptionTool.sortAsc = function (o) {
        var n = [];
        var str = '';
        for (var k in o)
            n.push(k);
        n.sort();
        for (var i = 0; i < n.length; i++) {
            var v = o[n[i]];
            if (v) {
                if ({}.toString.call(v) === '[object Object]') {
                    v = this.sortAsc(v);
                }
                else if ({}.toString.call(v) === '[object Array]') {
                    v = JSON.stringify(v).replace(/:/g, '=');
                }
            }
            if (v !== null && v !== '') {
                str += '&' + n[i] + '=' + v;
            }
        }
        return str.slice(1);
    };
    JEncryptionTool.deleteEmptyProperty = function (obj) {
        var object = obj;
        for (var i in object) {
            var value = object[i];
            if (typeof value === 'object' && value !== null) {
                if (Array.isArray(value)) {
                    if (value.length === 0) {
                        delete object[i];
                        continue;
                    }
                }
                this.deleteEmptyProperty(value);
            }
            else {
                if (value === '' || value === null || value === undefined) {
                    delete object[i];
                }
            }
        }
        return object;
    };
    JEncryptionTool.encryption = function (url, obj, bank, methodName) {
        var routerNumber = null;
        if (methodName) {
            routerNumber = methodName;
        }
        else {
            routerNumber = this.router(url);
        }
        if (!routerNumber) {
            return false;
        }
        var params = obj;
        params.b = md5(bank);
        params.method = routerNumber;
        params = this.deleteEmptyProperty(params);
        var ascii = this.sortAsc(params);
        params.signCode = md5(ascii + JBZ_KEY);
        var jsonString = JSON.stringify(params);
        return { cipher: jsonString };
    };
    JEncryptionTool.router = function (url) {
        if (routerPath[url]) {
            return routerPath[url];
        }
        return false;
    };
    return JEncryptionTool;
}());
//# sourceMappingURL=JEncryptionTool.js.map

var BUS_GW = '/bus/gw';
var DEFAULT_NETWORK_CONFIG$1 = {
    precook: function (_) { return _.data; },
    cook: function (_) { return _; },
    method: 'get',
    url: '',
    book: null,
    params: {},
    headers: {},
    bodyData: {},
    useParams: [],
    useHeaders: [],
    useBodyData: [],
    rule: [0, 1, 2],
    encryption: null,
    methodName: null
};
var _config = JConfig;
var JNetworkWorker = /** @class */ (function (_super) {
    __extends(JNetworkWorker, _super);
    function JNetworkWorker(config) {
        return _super.call(this, config) || this;
    }
    JNetworkWorker.prototype.fetchRequest = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var workerDelegate = (this.config || {}).workerDelegate;
        return _super.prototype.fetchRequest.apply(this, Array.from(args)).then(function (res) {
            if (!res.data.errorCode) {
                if (workerDelegate && workerDelegate.resolveDataInterceptor) {
                    workerDelegate.resolveDataInterceptor(_this, res.data);
                }
                return res.data;
            }
            else {
                if (workerDelegate && workerDelegate.rejectDataInterceptor) {
                    workerDelegate.rejectDataInterceptor(_this, res.data);
                }
                return Promise.reject(res.data);
            }
        });
    };
    return JNetworkWorker;
}(lib_1));
var JNetworkWorkerGroup = /** @class */ (function (_super) {
    __extends(JNetworkWorkerGroup, _super);
    function JNetworkWorkerGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JNetworkWorkerGroup.prototype.fetchRequest = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var workerDelegate = (this.parent.config || {}).workerDelegate;
        return _super.prototype.fetchRequest.apply(this, Array.from(args)).then(function (res) {
            if (workerDelegate && workerDelegate.resolveDataInterceptor) {
                workerDelegate.resolveDataInterceptor(_this, res.data);
            }
            if (!res.data.errorCode) {
                return res.data;
            }
            else {
                if (workerDelegate && workerDelegate.rejectDataInterceptor) {
                    workerDelegate.rejectDataInterceptor(_this, res.data);
                }
                return Promise.reject(res.data);
            }
        });
    };
    return JNetworkWorkerGroup;
}(lib_3));
var configPicker = function (picker) {
    if (!picker) {
        return;
    }
    if (typeof picker === 'function') {
        _config = picker();
    }
    else if (typeof picker === 'object') {
        _config = picker;
    }
};
var revealNetwork = function (networkClass, networkName, config) {
    if (networkName === void 0) { networkName = networkClass.name; }
    if (!JNetworkWorker.isPrototypeOf(networkClass)) {
        throw new Error(networkName + " is not extends of class JNetworkWorker, please extends class JNetworkWorker");
    }
    var classConfig = config ? config[networkName] : _config[networkName];
    // config[DEFAULT_NETWORK_CONFIG]为用户默认配置 _config['DEFAULT_NETWORK_CONFIG'] 为SDK默认配置
    // 目前没有实现revealNetwork内部默认配置
    var defaultNetworkConfig = __assign(__assign({}, DEFAULT_NETWORK_CONFIG$1), (config ? config['DEFAULT_NETWORK_CONFIG'] : _config['DEFAULT_NETWORK_CONFIG']));
    if (!classConfig) {
        if (config) {
            throw new Error("network " + networkName + " not found in config " + JSON.stringify(config));
        }
        else {
            throw new Error("network " + networkName + " not found in default_config");
        }
    }
    var pickValue = function (refer, from, injectFrom, url) {
        var r = {};
        var _loop_2 = function (key) {
            if (refer.hasOwnProperty(key)) {
                var referObj = refer[key];
                if (typeof referObj === 'boolean') {
                    var required = referObj;
                    if (required && !from.hasOwnProperty(key)) {
                        var hasKey = injectFrom.some(function (_) {
                            if (typeof _ === "string") {
                                return _ === key;
                            }
                            if (typeof _ === "object") {
                                return _.hasOwnProperty(key);
                            }
                        });
                        if (!hasKey) {
                            throw new Error("url: " + url + " \u53C2\u6570 " + key + " \u4E3A\u7A7A");
                        }
                    }
                    if (from.hasOwnProperty(key)) {
                        r[key] = from[key];
                    }
                }
                else if (typeof referObj === 'object') {
                    var required = referObj.required;
                    if (from.hasOwnProperty(key)) {
                        r[key] = referObj.cook ? referObj.cook(from[key]) : from[key];
                    }
                    else if (required) {
                        if (referObj.hasOwnProperty('default')) {
                            r[key] = referObj.cook ? referObj.cook(referObj['default']) : referObj['default'];
                        }
                        else {
                            if (!injectFrom.hasOwnProperty(key)) {
                                throw new Error("url: " + url + " \u53C2\u6570 " + key + " \u4E3A\u7A7A");
                            }
                        }
                    }
                }
            }
        };
        for (var key in refer) {
            _loop_2(key);
        }
        return r;
    };
    var _loop_1 = function (key) {
        if (classConfig.hasOwnProperty(key)) {
            var config_1 = classConfig[key];
            var _a = __assign(__assign({}, defaultNetworkConfig), config_1), precook_1 = _a.precook, cook_1 = _a.cook, method_1 = _a.method, url_1 = _a.url, book_1 = _a.book, rule_1 = _a.rule, params_1 = _a.params, headers_1 = _a.headers, bodyData_1 = _a.bodyData, useParams_1 = _a.useParams, useHeaders_1 = _a.useHeaders, useBodyData_1 = _a.useBodyData, encryption_1 = _a.encryption, methodName_1 = _a.methodName;
            if (!Array.isArray(rule_1) || rule_1.length !== 3 || rule_1.some(function (_) { return _ > 2 || _ < 0; })) {
                throw new Error("rule \u53C2\u6570\u51FA\u9519");
            }
            if (networkClass.prototype.hasOwnProperty(key)) {
                return "continue";
            }
            networkClass.prototype[key] = function () {
                var _a, _b, _c;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // 解决url 闭包被修改，初始化地址
                url_1 = config_1.url;
                try {
                    var networkArgs = args;
                    if (book_1) {
                        networkArgs = [{}, {}, {}];
                        for (var i = 0; i < book_1.length; i++) {
                            var page = book_1[i];
                            var isOptional = /^.*\?$/.test(page);
                            if (isOptional) {
                                page = page.slice(0, -1);
                            }
                            for (var j = 0; j < 3; j++) {
                                var valueObj = [params_1, bodyData_1, headers_1][rule_1[j]];
                                if (valueObj.hasOwnProperty(page)) {
                                    networkArgs[j][page] = args[i];
                                }
                            }
                        }
                    }
                    var paramsValue = pickValue.call(this, params_1, __assign(__assign({}, this.pickInjectParams()), (networkArgs[rule_1[0]] || {})), useParams_1, url_1);
                    var bodyDataValue = pickValue.call(this, bodyData_1, __assign(__assign({}, this.pickInjectBodyData()), (networkArgs[rule_1[1]] || {})), useBodyData_1, url_1);
                    var headersValue = pickValue.call(this, headers_1, __assign(__assign({}, this.pickInjectHeaders()), (networkArgs[rule_1[2]] || {})), useHeaders_1, url_1);
                    if (encryption_1 && lib_9.getObjOrFuncResult(encryption_1.required)) {
                        var inType = (this.otherContent || { inType: undefined }).inType;
                        if (!inType) {
                            throw new Error('Not found inType property, Do you forget config inType value in otherContent?');
                        }
                        var noUndefinedParams = {};
                        for (var key_1 in paramsValue) {
                            if (paramsValue.hasOwnProperty(key_1) && paramsValue[key_1] !== undefined) {
                                noUndefinedParams[key_1] = paramsValue[key_1];
                            }
                        }
                        var _d = encryption_1.paramsInterceptor, paramsInterceptor = _d === void 0 ? function (_, __) { return (_); } : _d;
                        var paramsObj = JEncryptionTool.encryption(url_1, paramsInterceptor(noUndefinedParams, this), inType, methodName_1);
                        if (!paramsObj) {
                            throw new Error("\u5730\u5740 " + url_1 + " \u52A0\u5BC6\u8FC7\u7A0B\u5F02\u5E38");
                        }
                        url_1 = BUS_GW;
                        paramsValue = __assign({}, paramsObj);
                    }
                    var pizza_1 = {
                        params: paramsValue,
                        bodyData: bodyDataValue,
                        headers: headersValue,
                        args: args,
                    };
                    return (_a = (_b = (_c = this
                        .createGroup({
                        groupClass: JNetworkWorkerGroup
                    })).useParams.apply(_c, __spreadArrays(useParams_1, this.extraParams))).useHeaders.apply(_b, __spreadArrays(useHeaders_1, this.extraHeaders))).useBodyData.apply(_a, __spreadArrays(useBodyData_1, this.extraBodyData)).fetchRequest(method_1, this.baseUrl, url_1, paramsValue, bodyDataValue, headersValue)
                        .then(function (data) { return cook_1(precook_1(data, pizza_1), pizza_1); });
                }
                catch (e) {
                    return Promise.reject(e);
                }
            };
        }
    };
    for (var key in classConfig) {
        _loop_1(key);
    }
    return networkClass;
};

var JNetworkAccount$1 = /** @class */ (function (_super) {
    __extends(JNetworkAccount, _super);
    function JNetworkAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkAccount;
}(JNetworkWorker));
var JNetworkAccount$2 = revealNetwork(JNetworkAccount$1, 'JNetworkAccount');
//# sourceMappingURL=JNetworkAccount.js.map

var JNetworkMine$1 = /** @class */ (function (_super) {
    __extends(JNetworkMine, _super);
    function JNetworkMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkMine;
}(JNetworkWorker));
var JNetworkMine$2 = revealNetwork(JNetworkMine$1, 'JNetworkMine');
//# sourceMappingURL=JNetworkMine.js.map

var JNetworkTrade$1 = /** @class */ (function (_super) {
    __extends(JNetworkTrade, _super);
    function JNetworkTrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkTrade;
}(JNetworkWorker));
var JNetworkTrade$2 = revealNetwork(JNetworkTrade$1, 'JNetworkTrade');
//# sourceMappingURL=JNetworkTrade.js.map

var JNetworkCity$1 = /** @class */ (function (_super) {
    __extends(JNetworkCity, _super);
    function JNetworkCity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkCity;
}(JNetworkWorker));
var JNetworkCity$2 = revealNetwork(JNetworkCity$1, 'JNetworkCity');
//# sourceMappingURL=JNetworkCity.js.map

var JNetworkBanner$1 = /** @class */ (function (_super) {
    __extends(JNetworkBanner, _super);
    function JNetworkBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkBanner;
}(JNetworkWorker));
var JNetworkBanner$2 = revealNetwork(JNetworkBanner$1, 'JNetworkBanner');
//# sourceMappingURL=JNetworkBanner.js.map

/**
 * 影院接口
 */
var JNetworkCinema$1 = /** @class */ (function (_super) {
    __extends(JNetworkCinema, _super);
    function JNetworkCinema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkCinema;
}(JNetworkWorker));
var JNetworkCinema$2 = revealNetwork(JNetworkCinema$1, 'JNetworkCinema');
//# sourceMappingURL=JNetworkCinema.js.map

/**
 * 城市及定位接口
 * @hideconstructor
 */
var JNetworkLocation$1 = /** @class */ (function (_super) {
    __extends(JNetworkLocation, _super);
    function JNetworkLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkLocation;
}(JNetworkWorker));
var JNetworkLocation$2 = revealNetwork(JNetworkLocation$1, 'JNetworkLocation');
//# sourceMappingURL=JNetworkLocation.js.map

/**
 * 影片接口
 */
var JNetworkFilm$1 = /** @class */ (function (_super) {
    __extends(JNetworkFilm, _super);
    function JNetworkFilm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkFilm;
}(JNetworkWorker));
var JNetworkFilm$2 = revealNetwork(JNetworkFilm$1, 'JNetworkFilm');
//# sourceMappingURL=JNetworkFilm.js.map

var JNetworkSearch$1 = /** @class */ (function (_super) {
    __extends(JNetworkSearch, _super);
    function JNetworkSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkSearch;
}(JNetworkWorker));
var JNetworkSearch$2 = revealNetwork(JNetworkSearch$1, 'JNetworkSearch');
//# sourceMappingURL=JNetworkSearch.js.map

var JNetworkOther$1 = /** @class */ (function (_super) {
    __extends(JNetworkOther, _super);
    function JNetworkOther() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkOther;
}(JNetworkWorker));
var JNetworkOther$2 = revealNetwork(JNetworkOther$1, 'JNetworkOther');
//# sourceMappingURL=JNetworkOther.js.map

var JNetworkActivity$1 = /** @class */ (function (_super) {
    __extends(JNetworkActivity, _super);
    function JNetworkActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JNetworkActivity;
}(JNetworkWorker));
var JNetworkActivity$2 = revealNetwork(JNetworkActivity$1, 'JNetworkActivity');
//# sourceMappingURL=JNetworkActivity.js.map

/**
 * Created by cuppi on 2017/4/19.
 */
var JSDK = /** @class */ (function () {
    function JSDK() {
    }
    JSDK.version = function () {
        return process.env.NODE_ENV;
    };
    return JSDK;
}());
//# sourceMappingURL=JSDK.js.map

/**
 * Created by cuppi on 2016/12/7.
 *  交易相关
 */
var instance$2 = null;
var TradeManager = /** @class */ (function () {
    function TradeManager() {
        if (!instance$2) {
            instance$2 = this;
        }
        return instance$2;
    }
    /**
     * 获取单例实例
     * @returns {TradeManager}
     */
    TradeManager.defaultManager = function () {
        return new TradeManager();
    };
    /**
     * 获取锁座时需要的座位参数
     * @param type 平台类型
     * @param seatList 座位列表（需要购买的）
     * @param mobile 手机号码
     * @param xsessionId 身份标识符（目前跟手机号码一样）
     * @returns {*} 返回参数对象
     */
    TradeManager.prototype.seatInforParas = function (type, seatList) {
        // 网票
        if (type === 'wangpiao') {
            var seatInfosArr = [];
            var seatInfos = [];
            for (var _i = 0, seatList_1 = seatList; _i < seatList_1.length; _i++) {
                var seat = seatList_1[_i];
                seatInfosArr.push(seat.seatModel.SeatIndex);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            };
        }
        // 蜘蛛
        if (type === 'spider') {
            var seatInfosArr = [];
            var seatInfos = [];
            for (var _a = 0, seatList_2 = seatList; _a < seatList_2.length; _a++) {
                var seat = seatList_2[_a];
                seatInfosArr.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            };
        }
        // 卖座
        if (type === 'maizuo') {
            var seatInfosArr = [];
            var seatInfos = [];
            for (var _b = 0, seatList_3 = seatList; _b < seatList_3.length; _b++) {
                var seat = seatList_3[_b];
                seatInfosArr.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            };
        }
        // 单车
        if (type === 'danche') {
            var seatInfosArr = [];
            var seatInfos = [];
            for (var _c = 0, seatList_4 = seatList; _c < seatList_4.length; _c++) {
                var seat = seatList_4[_c];
                seatInfosArr.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            };
        }
        // 猫眼
        if (type === 'maoyan' || type === 'meituan' || type === 'dazhong') {
            var seatInfosArr = [];
            var seatInfos = [];
            for (var _d = 0, seatList_5 = seatList; _d < seatList_5.length; _d++) {
                var seat = seatList_5[_d];
                if (!seat.seatModel) {
                    console.log(seat);
                }
                seatInfosArr.push({
                    sectionId: seat.seatModel.sectionId,
                    columnId: seat.seatModel.columnId,
                    rowId: seat.seatModel.rowId,
                    seatNo: seat.seatModel.seatNo
                });
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: JSON.stringify({
                    count: seatList.length,
                    list: seatInfosArr
                }),
                areaInfo: '',
                count: seatList.length,
                seatInfos: seatInfos.join('|')
            };
        }
        // 百度
        if (type === 'baidu') {
            var seatIds = [];
            var areaInfos = [];
            var seatInfos = [];
            for (var _e = 0, seatList_6 = seatList; _e < seatList_6.length; _e++) {
                var seat = seatList_6[_e];
                seatIds.push(seat.seatModel.seatNo);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
                if (seat.areaInfo) {
                    areaInfos.push(seat.areaInfo);
                }
            }
            return {
                count: seatIds.length,
                //  后台设置特意反过来的
                seatIds: seatIds.join('|'),
                areaInfo: areaInfos.join('|'),
                seatInfos: seatInfos.join('|')
            };
        }
        // 淘票票
        if (type === 'taobao') {
            var seatNames = [];
            var areaInfo = [];
            var seatIds = [];
            var seatInfos = [];
            for (var _f = 0, seatList_7 = seatList; _f < seatList_7.length; _f++) {
                var seat = seatList_7[_f];
                seatNames.push(seat.seatModel.name);
                areaInfo.push(seat.seatModel.name);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
                seatIds.push(seat.seatModel.seatId);
            }
            return {
                count: seatList.length,
                areaInfo: areaInfo.join('|'),
                seatNames: seatNames.join('|'),
                seatInfos: seatInfos.join('|'),
                seatIds: seatIds.join('|')
            };
        }
        // 影托帮
        if (type === 'ytb') {
            var seatNames = [];
            var areaInfo = [];
            var seatIds = [];
            var seatInfos = [];
            for (var _g = 0, seatList_8 = seatList; _g < seatList_8.length; _g++) {
                var seat = seatList_8[_g];
                seatNames.push(seat.seatModel.seatPieceName);
                areaInfo.push(seat.seatModel.seatPieceName);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
                seatIds.push(seat.seatModel.seatNo);
            }
            return {
                count: seatList.length,
                areaInfo: areaInfo.join('|'),
                seatNames: seatNames.join('|'),
                seatInfos: seatInfos.join('|'),
                seatIds: seatIds.join('|')
            };
        }
    };
    return TradeManager;
}());
//# sourceMappingURL=JManagerTrade.js.map

var JToolAsyncNetwork = /** @class */ (function () {
    function JToolAsyncNetwork() {
    }
    JToolAsyncNetwork.tryRequest = function (method, _a, tryCount, interval) {
        var methodArgs = _a.slice(0);
        if (tryCount === void 0) { tryCount = 10; }
        if (interval === void 0) { interval = 500; }
        return __awaiter(this, void 0, void 0, function () {
            var data, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = null, i = 0;
                        _b.label = 1;
                    case 1: return [4 /*yield*/, method.apply(void 0, methodArgs)];
                    case 2:
                        data = _b.sent();
                        return [4 /*yield*/, new Promise(function (resolve) { setTimeout(resolve, interval); })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        if (data === null && ++i < tryCount) return [3 /*break*/, 1];
                        _b.label = 5;
                    case 5: return [2 /*return*/, data];
                }
            });
        });
    };
    return JToolAsyncNetwork;
}());
//# sourceMappingURL=JToolAsyncNetwork.js.map

var JToolOrderStatus = /** @class */ (function () {
    function JToolOrderStatus() {
    }
    JToolOrderStatus.statusMessageFromStatus = function (status, picker) {
        if (picker === void 0) { picker = 'message'; }
        var statusValue = [
            {
                key: '锁座失败',
                code: 100,
                message: '锁座失败',
                description: '锁座失败',
                status: '锁座失败',
            },
            {
                key: '待支付',
                code: 110,
                message: '待支付',
                description: '锁座成功，等待支付',
                status: '待支付',
            },
            {
                key: '未支付',
                code: 120,
                message: '已关闭',
                description: '锁座成功后15分钟之内用户未尝试支付或重复锁座关闭订单',
                status: '未支付',
            },
            {
                key: '未支付_取消订单',
                code: 121,
                message: '已关闭',
                description: '用户主动取消订单',
                status: '取消订单',
            },
            {
                key: '未支付_预支付订单号获取失败',
                code: 125,
                message: '已关闭',
                description: '获取支付系统的预支付订单号失败',
                status: '预支付订单号获取失败',
            },
            {
                key: '支付中',
                code: 130,
                message: '支付中',
                description: '锁座成功后15分钟之内首次尝试支付',
                status: '支付中',
            },
            {
                key: '支付超时',
                code: 135,
                message: '已关闭',
                description: '尝试支付后，实际并没有支付，超过15分钟，订单超时！',
                status: '支付超时',
            },
            {
                key: '支付失败_支付超时',
                code: 140,
                message: '已关闭',
                description: '15分钟之内有支付，但是银行反馈支付超时',
                status: '支付失败，支付超时',
            },
            {
                key: '支付失败_银行反馈',
                code: 150,
                message: '已关闭',
                description: '15分钟之内有支付，但银行反馈的支付失败',
                status: '支付失败，银行反馈',
            },
            {
                key: '支付失败_原因未知',
                code: 160,
                message: '已关闭',
                description: '15分钟之内有支付，但支付失败，原因未知',
                status: '支付失败，原因未知',
            },
            {
                key: '支付失败_用券或积分不符合要求',
                code: 170,
                message: '已关闭',
                description: '15分钟之内有支付，但支付失败，用券或积分不符合要求',
                status: '支付失败，用券或积分不符合要求',
            },
            {
                key: '已支付',
                code: 300,
                message: '出票中',
                description: '支付成功，等待向票务商发起出票请求',
                status: '已支付',
            },
            {
                key: '出票中',
                code: 320,
                message: '出票中',
                description: '向票务商发起出票请求，出票商返回出票中',
                status: '出票中',
            },
            {
                key: '出票失败',
                code: 330,
                message: '出票失败，退款中',
                description: '约定时间内票务商返回出票失败',
                status: '出票失败',
            },
            {
                key: '出票异常',
                code: 340,
                message: '出票失败，退款中',
                description: '超过约定的时间，票务商未返回明确失败和成功',
                status: '出票异常',
            },
            {
                key: '出票失败_退款中',
                code: 350,
                message: '出票失败，退款中',
                description: '出票失败发起退款申请',
                status: '退款中',
            },
            {
                key: '出票异常_退款中',
                code: 352,
                message: '出票失败，退款中',
                description: '出票异常发起退款申请',
                status: '退款中',
            },
            {
                key: '已支付_未通知出票_退款中',
                code: 354,
                message: '出票失败，退款中',
                description: '支付成功，单由于订单超时，未通知票务商出票，发起退款申请',
                status: '退款中',
            },
            {
                key: '交易完成_退款中',
                code: 356,
                message: '出票失败，退款中',
                description: '交易完成的订单发起退款',
                status: '退款中',
            },
            {
                key: '出票失败_退款失败',
                code: 400,
                message: '退款失败，联系客服',
                description: '约定时间内票务商返回出票失败，进行退款且退款失败',
                status: '出票失败，退款失败',
            },
            {
                key: '出票异常_退款失败',
                code: 410,
                message: '退款失败，联系客服',
                description: '超过约定的时间，票务商未返回明确失败和成功，进行退款且退款失败',
                status: '出票异常，退款失败',
            },
            {
                key: '交易完成_退款失败',
                code: 420,
                message: '退款失败，联系客服',
                description: '出票成功的订单，由于影院取消场次等原因，进行退款且退款失败',
                status: '交易完成，退款失败',
            },
            {
                key: '已支付_未通知出票_退款失败',
                code: 430,
                message: '退款失败，联系客服',
                description: '支付成功，但由于订单超时，未通知票务商出票，进行退款且退款失败',
                status: '退款失败',
            },
            {
                key: '出票失败_已退款',
                code: 450,
                message: '已退款',
                description: '约定时间内票务商返回出票失败，进行退款且退款成功',
                status: '出票失败，已退款',
            },
            {
                key: '出票异常_已退款',
                code: 460,
                message: '已退款',
                description: '超过约定的时间，票务商未返回明确失败和成功，进行退款且退款成功',
                status: '出票异常，已退款',
            },
            {
                key: '交易完成_已退款',
                code: 470,
                message: '已退款',
                description: '出票成功的订单，由于影院取消场次等原因，进行退款且退款成功',
                status: '交易完成，已退款',
            },
            {
                key: '已支付_未通知出票_已退款',
                code: 480,
                message: '已退款',
                description: '支付成功，但由于订单超时，未通知票务商出票，进行退款且退款成功',
                status: '已退款',
            },
            {
                key: '交易完成',
                code: 600,
                message: '交易完成',
                description: '出票成功',
                status: '交易完成',
            }
        ].find(function (_a) {
            var code = _a.code;
            return code === status;
        });
        if (typeof picker === "string") {
            return statusValue[picker];
        }
        return picker(statusValue);
    };
    return JToolOrderStatus;
}());
//# sourceMappingURL=JToolOrderStatus.js.map

/**
 * Created by cuppi on 2017/4/14.
 */
/* eslint-enable */
//# sourceMappingURL=index.js.map

exports.JNetworkAccount = JNetworkAccount$2;
exports.JNetworkMine = JNetworkMine$2;
exports.JNetworkTrade = JNetworkTrade$2;
exports.JNetworkCity = JNetworkCity$2;
exports.JNetworkBanner = JNetworkBanner$2;
exports.JNetworkCinema = JNetworkCinema$2;
exports.JNetworkLocation = JNetworkLocation$2;
exports.JNetworkFilm = JNetworkFilm$2;
exports.JNetworkSearch = JNetworkSearch$2;
exports.JNetworkOther = JNetworkOther$2;
exports.JNetworkActivity = JNetworkActivity$2;
exports.JNetworkWorker = JNetworkWorker;
exports.revealNetwork = revealNetwork;
exports.configPicker = configPicker;
exports.JSDK = JSDK;
exports.JManagerSeat = SeatManager;
exports.JManagerTrade = TradeManager;
exports.JToolAsyncNetwork = JToolAsyncNetwork;
exports.JToolOrderStatus = JToolOrderStatus;
