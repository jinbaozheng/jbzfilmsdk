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

/**
 * Created by cuppi on 2017/2/9.
 */
var cityUrl = {};
var cinemaUrl = {};
var filmUrl = {};
var mineUrl = {};
var accountUrl = {};
var tradeUrl = {};
var otherUrl = {};
// SDK 用到的所有的网络请求请求都在这里
var sdkApi = {
    cityUrl: {
        jbzCities: '',
        jbzCityByCoordinate: '',
        jbzCityById: '',
        jbzDistricts: '',
        jbzHotCities: ''
    },
    cinemaUrl: {
        jbzList: '',
        jbzDetail: '',
        jbzScreeningFilmList: '',
        jbzScreeningDateList: '',
        jbzScreeningItems: '',
        jbzRealtimeSeat: ''
    },
    filmUrl: {
        jbzHotFilms: '',
        jbzHotFilmsPage: '',
        jbzHotFilmsSimple: '',
        jbzWaitFilms: '',
        jbzWaitFilmsPage: '',
        jbzFilmDetailByPartner: '',
        jbzFilmDetail: '',
        jbzFilmDate: ''
    },
    mineUrl: {
        jbzMineCinema: '',
    },
    accountUrl: {
        jbzLogin: '',
        jbzLogout: '',
        jbzVerifycode: '',
        jbzRegister: '',
        jbzUpdatepass: ''
    },
    tradeUrl: {
        jbzLockSeat: '',
        jbzWebAtAppApplyTicket: '',
        // jbzAppApplyTicket: '',
        // jbzWepApplyTicket: '',
        jbzCancelOrder: '',
        jbzAppPrepay: '',
        jbzWebPrepay: ''
    },
    otherUrl: {
        jbzBanners: '',
        jbzSearch: '',
        jbzHotSearchKeyword: ''
    }
};
var _urlMap = {};
function UseConfig(urlMap) {
    _urlMap = urlMap;
    cityUrl = _chunk('cityUrl');
    cinemaUrl = _chunk('cinemaUrl');
    filmUrl = _chunk('filmUrl');
    mineUrl = _chunk('mineUrl');
    accountUrl = _chunk('accountUrl');
    tradeUrl = _chunk('tradeUrl');
    otherUrl = _chunk('otherUrl');
}
function _chunk(chunk) {
    var map = {};
    for (var title in sdkApi[chunk]) {
        if (sdkApi[chunk].hasOwnProperty(title)) {
            map[title] = _(chunk, title);
        }
    }
    return map;
}
function _(chunk, title) {
    if (_urlMap && _urlMap.hasOwnProperty(chunk) && _urlMap[chunk].hasOwnProperty(title)) {
        return _urlMap[chunk][title];
    }
    else {
        console.log('Didn\'t find the method at ( ' + chunk + ',' + title + ' ), please contact the Author => cuppi');
    }
    return '';
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
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

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var urlPattern = createCommonjsModule$$1(function (module, exports) {
// Generated by CoffeeScript 1.10.0
var slice = [].slice;

(function(root, factory) {
  if (exports !== null) {
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
 * Created by cuppi on 2016/12/14.
 */
/**
 * 网络地址工具类
 * @memberOf module:tool
 */
var UrlTool = /** @class */ (function () {
    function UrlTool() {
    }
    /**
     * 合成URL完整地址
     * @param {string} baseUrl 基础地址
     * @param {string} subUrl 相对地址
     * @param {string} parameters 参数
     * @returns {string} 返回拼接后的地址
     */
    UrlTool.urlFromPortion = function (baseUrl, subUrl, parameters) {
        if (!parameters) {
            parameters = {};
        }
        var paras = [];
        for (var key in parameters) {
            if (!parameters.hasOwnProperty(key)) {
                continue;
            }
            if (parameters[key] !== undefined) {
                paras.push(key + '=' + parameters[key]);
            }
        }
        var iUrl = baseUrl + subUrl;
        if (paras.length > 0) {
            iUrl = iUrl + '?' + paras.join('&');
        }
        return iUrl;
    };
    /**
     * 分析Url并解析为对象结构
     * @param url 待分析Url
     * @param options 分析Url配置
     * @return Promise<object> 参数为解析后的结果，url无效时返回Null
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
                    p = __assign({}, p, { origin: urlObj.origin, hostname: urlObj.hostname, port: urlObj.port, search: urlObj.search, username: urlObj.username, password: urlObj.password, hashsearch: hashObj.hashsearch, hash: urlObj.hash });
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

/**
 * Created by cuppi on 2017/9/4.
 */
var DEFAULT_DELEGATE = {
    globalParas: function () { },
    globalHeaders: function () { },
    requestInterceptor: function (config) {
        // Do something before request is sent
        console.log('POST ' + UrlTool.urlFromPortion(config.url, '', config.params));
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
    resolveInterceptor: function (response, data) {
        return true;
    },
    rejectInterceptor: function (response, error) {
        return true;
    }
};

/**
 * Created by cuppi on 2017/9/4.
 */
var CancelPromiseFactory = /** @class */ (function () {
    function CancelPromiseFactory(args) {
        return __assign({}, new Promise(args), { terminate: function () { } });
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

var REQUESTER_COUNT = 0;
var JRequester = /** @class */ (function () {
    function JRequester(method, baseUrl, url, parameters, headers, otherObject, delegate) {
        this.method = method;
        this.baseUrl = baseUrl;
        this.url = url;
        this.parameters = parameters;
        this.headers = headers;
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
     * @param headers 头参数
     * @param otherObject 其他相关设置
     * @param delegate 网络请求代理
     * @returns {CancelPromiseFactory<any>}
     */
    JRequester.create = function (method, baseUrl, url, parameters, headers, otherObject, delegate) {
        var requester = new JRequester(method, baseUrl, url, parameters, headers, otherObject, delegate);
        var jaxios = axios$$1.create(__assign({ method: method, params: parameters, baseURL: baseUrl, headers: headers }, otherObject));
        delegate = __assign({}, DEFAULT_DELEGATE, delegate);
        requester.jaxios = jaxios;
        jaxios.interceptors.request.use(function (config) {
            config.params = __assign({}, parameters);
            config.headers = __assign({}, headers);
            return delegate ? delegate.requestInterceptor(config) : config;
        }, function (error) {
            return delegate ? delegate.requestInterceptorError(error) : error;
        });
        jaxios.interceptors.response.use(function (response) {
            return delegate ? delegate.responseInterceptor(response) : response;
        }, function (error) {
            return delegate ? delegate.responseInterceptorError(error) : error;
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
    carryData: {},
    axiosConfig: {
        timeout: 10 * 1000
    }
};

/**
 * Created by cuppi on 2017/5/9.
 */
/**
 * @private
 */
var Jpara = /** @class */ (function () {
    function Jpara() {
        var paras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paras[_i] = arguments[_i];
        }
        this._paras = [];
        for (var _a = 0, paras_1 = paras; _a < paras_1.length; _a++) {
            var para = paras_1[_a];
            this._paras.push(para);
        }
        this.isJpara = true;
    }
    Jpara.prototype.items = function () {
        return this._paras;
    };
    Jpara.emptyPara = function () {
        return new Jpara();
    };
    return Jpara;
}());
/**
 * 辅助任务类
 * @private
 */
var Jtask = /** @class */ (function () {
    function Jtask(task, parasPicker, resolve, reject) {
        this._task = task;
        this._resolve = resolve;
        this._reject = reject;
        this._parasPicker = parasPicker;
    }
    Jtask.prototype.setNextTask = function (task) {
        this._nextTask = task;
    };
    Jtask.prototype.do = function (paras) {
        var _this = this;
        paras = paras ? paras : this._parasPicker();
        this._task.apply(this, this.paraItems(paras)).then(function (data) {
            var nextPara = _this._resolve.apply(_this, [data].concat(_this.paraItems(paras)));
            if (_this._nextTask) {
                _this._nextTask.do(nextPara);
            }
        }, function (error) {
            if (_this._reject) {
                _this._reject.apply(_this, [error].concat(_this.paraItems(paras)));
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
        return Jpara.emptyPara().items();
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
    Jlink.prototype.paras = function () {
        var paras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paras[_i] = arguments[_i];
        }
        this._allTaskPara = paras;
        return this;
    };
    Jlink.prototype.next = function (resolve, reject) {
        if (this._taskIndex >= this._tasks.length) {
            return this;
        }
        var nextTask = new Jtask(this._tasks[this._taskIndex], this._parasPicker(this._taskIndex), resolve, reject);
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
        this._headTask.do(this._parasPicker(0)());
        return this;
    };
    /**
     * 指定任务的paras的获取者 (目前实现会浪费内存，多个相同函数推入函数栈，后期优化）
     * @returns {Array}
     * @private
     */
    Jlink.prototype._parasPicker = function (index) {
        var _this = this;
        return function () {
            if (_this._allTaskPara && _this._allTaskPara.length > index) {
                return _this._allTaskPara[index];
            }
            if (index === 0 && _this._headTaskPara) {
                return _this._headTaskPara;
            }
            return Jpara.emptyPara();
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
//   _parasPicker: Function;
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
//   paras(...paras) {
//     this._allTaskPara = paras;
//     return this;
//   }
//
//   next(resolve, reject) {
//     if (this._taskIndex >= this._tasks.length) {
//       return this;
//     }
//     let nextTask = new Jtask(this._tasks[this._taskIndex], this._parasPicker(this._taskIndex), resolve, reject);
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
//     this._headTask.do(this._parasPicker(0)());
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
    return new (Jlink.bind.apply(Jlink, [void 0].concat(tasks)))();
}
/**
 * @private
 * @param paras
 * @returns {Jpara}
 */
function jpara() {
    var paras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paras[_i] = arguments[_i];
    }
    return new (Jpara.bind.apply(Jpara, [void 0].concat(paras)))();
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
 * 获取全局指定参数
 * @param key 指定键
 * @param globalValueRegistry 全局参数代理对象
 * @return {{}}
 */
function jgetGlobalValue(key, globalValueRegistry) {
    var otherParas = {};
    if (!globalValueRegistry) {
        throw new Error('未找到全局参数，请确认是否设置globalParas');
    }
    var globalParaFunc = null;
    if (typeof globalValueRegistry == "function") {
        globalParaFunc = globalValueRegistry()[key];
    }
    else if (typeof globalValueRegistry == "object") {
        globalParaFunc = globalValueRegistry[key];
    }
    if (globalParaFunc) {
        var globalPara = null;
        if (typeof globalParaFunc == "function") {
            globalPara = globalParaFunc();
        }
        else {
            globalPara = globalParaFunc;
        }
        if (typeof globalPara == "object") {
            otherParas = __assign({}, otherParas, globalPara);
        }
        else if (typeof globalPara === 'string' || typeof globalPara === 'number') {
            otherParas[key] = globalPara;
        }
        else {
            throw new Error("\u5168\u5C40\u53D8\u91CF\u7C7B\u578B\u4E0D\u6B63\u786E:" + key);
        }
    }
    else {
        throw new Error("\u4E0D\u5B58\u5728\u7684\u5168\u5C40\u53D8\u91CF:" + key);
    }
    return otherParas;
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

var GROUP_COUNT = 0;
/**
 * @private
 */
var JNetworkGroup = /** @class */ (function () {
    function JNetworkGroup(baseUrl, carryData, axiosConfig, delegate, options) {
        this.requestEngine = new JRequestEngine();
        this.extraParas = [];
        this.extraHeaders = [];
        this.baseUrl = baseUrl;
        this.carryData = carryData;
        this.axiosConfig = axiosConfig;
        this.delegate = delegate;
        this.groupId = ++GROUP_COUNT;
        if (options) {
            this.freezeParas = options.freezeParas || {};
            this.freezeHeaders = options.freezeHeaders || {};
            this.isSync = options.isSync;
        }
    }
    JNetworkGroup.prototype.useParas = function () {
        var paras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paras[_i] = arguments[_i];
        }
        this.extraParas = paras;
        return this;
    };
    JNetworkGroup.prototype.useHeaders = function () {
        var headers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            headers[_i] = arguments[_i];
        }
        this.extraHeaders = headers;
        return this;
    };
    /**
     * 发送请求
     * @param method 方法类型
     * @param baseUrl 基地址
     * @param url 相对地址
     * @param parameters 参数
     * @param headers 头参数
     * @param otherObject 其他相关设置
     * @returns {CancelPromiseFactory<any>}
     */
    JNetworkGroup.prototype.fetchRequest = function (method, baseUrl, url, parameters, headers, otherObject) {
        var extraParas = this.freezeParas.concat(this.extraParas);
        var extraHeaders = this.freezeHeaders.concat(this.extraHeaders);
        this.extraParas = [];
        this.extraHeaders = [];
        var delegate = this.delegate;
        headers = Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }, headers);
        var globalOtherParas = {};
        extraParas.forEach(function (key) {
            if (typeof key == "object") {
                globalOtherParas = __assign({}, globalOtherParas, key);
                return;
            }
            if (!delegate)
                return;
            globalOtherParas = __assign({}, jgetGlobalValue(key, delegate.globalParas));
        });
        var globalOtherHeaders = {};
        extraHeaders.forEach(function (key) {
            if (typeof key == "object") {
                globalOtherHeaders = __assign({}, globalOtherHeaders, key);
                return;
            }
            if (!delegate)
                return;
            globalOtherHeaders = __assign({}, jgetGlobalValue(key, delegate.globalHeaders));
        });
        var request = JRequester.create(method, baseUrl, url, __assign({}, parameters, globalOtherParas), __assign({}, headers, globalOtherHeaders), __assign({ axiosConfig: this.axiosConfig }, otherObject), delegate);
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
                        reject(new JNetworkError(response.statusText, response.status));
                    }
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    };
    JNetworkGroup.prototype.freedomPOST = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('post', baseUrl, url || '', parameters || {}, headers || {}, otherObject || {});
    };
    JNetworkGroup.prototype.freedomGET = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('get', baseUrl, url || '', parameters || {}, headers || {}, otherObject || {});
    };
    JNetworkGroup.prototype.POST = function (url, parameters, headers, otherObject) {
        return this.freedomPOST(this.baseUrl, url, __assign({}, this.carryData, parameters), headers, __assign({}, this.axiosConfig, otherObject));
    };
    JNetworkGroup.prototype.GET = function (url, parameters, headers, otherObject) {
        return this.freedomGET(this.baseUrl, url, __assign({}, this.carryData, parameters), headers, __assign({}, this.axiosConfig, otherObject));
    };
    return JNetworkGroup;
}());

/**
 * Created by cuppi on 2016/11/22.
 */
var INSTANCE_COUNT = 0;
/** @module network*/
/**
 * 网络请求类
 * @hideconstructor
 */
var JNetwork = /** @class */ (function () {
    function JNetwork(config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        this.config = DEFAULT_CONFIG;
        this.groupList = [];
        this.extraParas = [];
        this.extraHeaders = [];
        config = __assign({}, DEFAULT_CONFIG, config);
        this.baseUrl = config.baseUrl;
        this.delegate = config.delegate;
        this.carryData = config.carryData;
        this.axiosConfig = config.axiosConfig || {
            timeout: 10 * 1000
        };
        this.config = config;
        this.instanceId = ++INSTANCE_COUNT;
        return this;
    }
    JNetwork.useParas = function () {
        var paras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paras[_i] = arguments[_i];
        }
        var instance = new this();
        instance.extraParas = paras;
        return instance;
    };
    JNetwork.useHeaders = function () {
        var headers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            headers[_i] = arguments[_i];
        }
        var instance = new this();
        instance.extraHeaders = headers;
        return instance;
    };
    JNetwork.prototype.useParas = function () {
        var paras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paras[_i] = arguments[_i];
        }
        this.extraParas = paras;
        return this;
    };
    JNetwork.prototype.useHeaders = function () {
        var headers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            headers[_i] = arguments[_i];
        }
        this.extraHeaders = headers;
        return this;
    };
    JNetwork.instance = function () {
        if (!this._instance) {
            this._instance = new this();
        }
        return this._instance;
    };
    JNetwork.prototype.createGroup = function (options) {
        options = __assign({
            notClearExtraData: false,
            isSync: false
        }, options);
        var group = new JNetworkGroup(this.baseUrl, this.getCarryData(), this.axiosConfig, this.delegate, {
            freezeParas: this.extraParas,
            freezeHeaders: this.extraHeaders,
            isSync: options.isSync
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
    JNetwork.prototype.clearExtraData = function () {
        this.extraParas = [];
        this.extraHeaders = [];
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
     * @param headers 头参数
     * @param otherObject 其他相关设置
     * @returns {CancelPromiseFactory<any>}
     */
    JNetwork.prototype.fetchRequest = function (method, baseUrl, url, parameters, headers, otherObject) {
        var extraParas = this.extraParas;
        var extraHeaders = this.extraHeaders;
        this.clearExtraData();
        var delegate = this.delegate;
        headers = Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }, headers);
        var globalOtherParas = {};
        extraParas.forEach(function (key) {
            if (typeof key == "object") {
                globalOtherParas = __assign({}, globalOtherParas, key);
                return;
            }
            if (!delegate)
                return;
            globalOtherParas = __assign({}, jgetGlobalValue(key, delegate.globalParas));
        });
        var globalOtherHeaders = {};
        extraHeaders.forEach(function (key) {
            if (typeof key == "object") {
                globalOtherHeaders = __assign({}, globalOtherHeaders, key);
                return;
            }
            if (!delegate)
                return;
            globalOtherHeaders = __assign({}, jgetGlobalValue(key, delegate.globalHeaders));
        });
        var request = JRequester.create(method, baseUrl, url, __assign({}, parameters, globalOtherParas), __assign({}, headers, globalOtherHeaders), __assign({}, this.axiosConfig, otherObject), delegate);
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
        return this.instance().freedomPOST.apply(this._instance, Array.from(arguments));
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
        return this.instance().freedomGET.apply(this._instance, Array.from(arguments));
    };
    /**
     * post请求
     * @param {string} url 相对地址
     * @param {object} parameters 地址参数
     * @param {object} headers 头参数
     * @param {object} otherObject 其他参数
     * @returns {Promise} 异步请求块
     */
    JNetwork.POST = function (url, parameters, headers, otherObject) {
        return this.instance().POST.apply(this._instance, Array.from(arguments));
    };
    /**
     * get请求
     * @param {string} url 相对地址
     * @param {object} parameters 地址参数
     * @param {object} headers 头参数
     * @param {object} otherObject 其他参数
     * @returns {Promise} 异步请求块
     */
    JNetwork.GET = function (url, parameters, headers, otherObject) {
        return this.instance().GET.apply(this._instance, Array.from(arguments));
    };
    JNetwork.prototype.getCarryData = function () {
        var carryData = null;
        if (this.carryData) {
            if (typeof this.carryData == "function") {
                carryData = this.carryData();
            }
            if (typeof this.carryData == "object") {
                carryData = this.carryData;
            }
        }
        return carryData || {};
    };
    JNetwork.prototype.freedomPOST = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('post', baseUrl, url || '', parameters || {}, headers || {}, otherObject || {});
    };
    JNetwork.prototype.freedomGET = function (baseUrl, url, parameters, headers, otherObject) {
        return this.fetchRequest('get', baseUrl, url || '', parameters || {}, headers || {}, otherObject || {});
    };
    JNetwork.prototype.POST = function (url, parameters, headers, otherObject) {
        return this.freedomPOST(this.baseUrl, url, __assign({}, this.getCarryData(), parameters), headers, __assign({}, this.axiosConfig, otherObject));
    };
    JNetwork.prototype.GET = function (url, parameters, headers, otherObject) {
        return this.freedomGET(this.baseUrl, url, __assign({}, this.getCarryData(), parameters), headers, __assign({}, this.axiosConfig, otherObject));
    };
    return JNetwork;
}());

var JNetworkRoot = /** @class */ (function (_super) {
    __extends(JNetworkRoot, _super);
    function JNetworkRoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 便捷添加全局paras及headers
     * @deprecated
     * @param url
     * @param {object} paras
     * @param {object} headers
     * @param {object} options
     * @return {Promise<AxiosResponse>}
     */
    JNetworkRoot.prototype.prefixPromise = function (url, paras, headers, options) {
        var _a;
        console.warn('the Function <prefixPromise> is deprecated since icemilk-1.0.1, please use freedomPOST or POST method instead of.');
        return (_a = this.useParas.apply(this, this.extraParas)).useHeaders.apply(_a, this.extraHeaders).POST(url, paras, headers).then(function (data) {
            return data;
        });
    };
    return JNetworkRoot;
}(JNetwork));

/**
 * Created by cuppi on 2016/11/25.
 */
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
 * @memberOf module:tool
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
     * @param {Date | string | number} _ 日期
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
     * @param {Date | string | number} _ 日期
     * @param {Function} dateDoing 日期格式做的事情
     * @param {Function} strDoing 字符串格式做的事情
     * @param {Function} numDoing 数字格式做的事情
     * @param {Function} otherDoing  其他格式做的事情
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
     * @param {Date | string | number} _ 日期
     * @returns {Date}
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
     * @param {Date | string | number} _ 日期
     * @returns {number}
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
     * @static
     * @param {Date} date 日期
     * @returns {number} 时间戳
     */
    DateTool.timeIntervalFromDate = function (date) {
        return _d2ti(date);
    };
    /**
     * 时间戳转换日期
     * @param {number} timeInterval 时间戳
     * @returns {Date} 日期
     */
    DateTool.dateFromTimeInterval = function (timeInterval) {
        return _ti2d(timeInterval);
    };
    /**
     * 日期字符串转换时间戳
     * @param {string} dateString 日期
     * @param {string} timezone 时区
     * @returns {number} 时间戳
     */
    DateTool.timeIntervalFromDateString = function (dateString, timezone) {
        if (timezone === void 0) { timezone = STANDARD_TIMEZONE; }
        return _ds2ti(dateString, timezone);
    };
    /**
     * 时间戳转换日期字符串
     * @param {number} timeInterval 时间戳
     * @param {string} format 日期格式 如: YYYY-MM-DD HH:mm:ss
     * @returns {string} 日期字符串
     */
    DateTool.dateStringFromTimeInterval = function (timeInterval, format) {
        if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
        return _ti2ds(timeInterval, format);
    };
    /**
     * 日期字符串转换日期 （待开发）
     * @param {string} dateString 日期字符串
     * @param {string} timezone 时区
     * @returns {Date} 日期
     */
    DateTool.dateFromDateString = function (dateString, timezone) {
        if (timezone === void 0) { timezone = STANDARD_TIMEZONE; }
        return _ds2d(dateString, timezone);
    };
    /**
     * 日期转换日期字符串
     * @param {Date} date Date对象
     * @param {string} format 格式化信息
     * @returns {string} 日期字符串
     */
    DateTool.dateStringFromDate = function (date, format) {
        if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
        return _d2ds(date, format);
    };
    /**
     * 获取当前日期对象
     * @returns {Date} 当前日期对象
     */
    DateTool.currentDate = function () {
        return moment$$1().utcOffset(STANDARD_TIMEZONE).toDate();
    };
    /**
     * 获取当前日期字符串
     * @param {string} format 字符串格式
     * @returns {string} 当前日期字符串
     */
    DateTool.currentDateString = function (format) {
        if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
        return _d2ds(DateTool.currentDate(), format);
    };
    /**
     * 获取当前时间戳
     * @returns {number} 当前时间戳
     */
    DateTool.currentTimeInterval = function () {
        return moment$$1().unix();
    };
    // TODO 需要优化月份的算法
    /**
     * 获取(多态)日期的距离
     * @param {Date | string | number} startDate 起始日期
     * @param {Date | string | number} endDate 结束日期
     * @param {boolean} justSeconds 只需要秒的总数
     * @returns {Array} [秒，分，小时，天，月, 年]
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
     * 变换日期字符串格式 （待开发）
     * @since ~1.1.*
     * @param {string} dateString 日期字符串
     * @param {string} fromFormat 输入格式
     * @param {string} toFormat 输出格式
     * @param {string} timezone 时区
     * @returns {string} 字符串
     */
    DateTool.transformDateStringByFormat = function (dateString, fromFormat, toFormat, timezone) {
        if (toFormat === void 0) { toFormat = 'YYYY-MM-DD HH:mm:ss'; }
        if (timezone === void 0) { timezone = STANDARD_TIMEZONE; }
        return _d2ds(_ds2d(dateString, timezone), toFormat);
    };
    /**
     * 获取指定(多态)日期为星期几
     * @param {Date | string | number} date 日期
     * @returns {number} 0~6  星期一~星期日
     */
    DateTool.weekDay = function (date) {
        return (moment$$1(DateTool.wantDate(date)).utcOffset(STANDARD_TIMEZONE).day() + 6) % 7;
    };
    /**
     * 获取(多态)日期某天后的日期()
     * @param {Date | string | number} beganDate
     * @param {number} days
     * @returns {Date} 目的日期
     */
    DateTool.dateAfterDaysLater = function (beganDate, days) {
        return moment$$1(DateTool.wantDate(beganDate)).add(days, 'days').toDate();
    };
    /**
     * 获取(多态)日期某天后的日期字符串
     * @param {Date | string | number} beganDate 开始日期
     * @param {number} days 天数
     * @param {string} format 格式化信息
     * @returns {string} 目的日期字符串
     */
    DateTool.dateStringAfterDaysLater = function (beganDate, days, format) {
        if (format === void 0) { format = 'YYYY-MM-DD'; }
        return _d2ds(DateTool.dateAfterDaysLater(beganDate, days), format);
    };
    return DateTool;
}());

/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
var leftPad_1 = leftPad;

var cache = [
  '',
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '         '
];

function leftPad (str, len, ch) {
  // convert `str` to a `string`
  str = str + '';
  // `len` is the `pad`'s length now
  len = len - str.length;
  // doesn't need to pad
  if (len <= 0) return str;
  // `ch` defaults to `' '`
  if (!ch && ch !== 0) ch = ' ';
  // convert `ch` to a `string` cuz it could be a number
  ch = ch + '';
  // cache common use cases
  if (ch === ' ' && len < 10) return cache[len] + str;
  // `pad` starts with an empty string
  var pad = '';
  // loop
  while (true) {
    // add `ch` to `pad` if `len` is odd
    if (len & 1) pad += ch;
    // divide `len` by 2, ditch the remainder
    len >>= 1;
    // "double" the `ch` so this operation count grows logarithmically on `len`
    // each time `ch` is "doubled", the `len` would need to be "doubled" too
    // similar to finding a value in binary search tree, hence O(log(n))
    if (len) ch += ch;
    // `len` is 0, exit the loop
    else break;
  }
  // pad `str`!
  return pad + str;
}

/**
 * 数字工具类
 * @memberOf module:tool
 */
var NumberTool = /** @class */ (function () {
    function NumberTool() {
    }
    /**
     * 整数补0
     * @param {number} number 整数
     * @param {number} length 最终的长度
     * @returns {string}  整数字符串
     */
    NumberTool.zeroPad = function (number, length) {
        return leftPad_1(number, length, 0);
    };
    /**
     * 字符补位
     * @param {number | string} pad 字符
     * @param {number} length 最终的长度
     * @param {number, string} placeholder 补全字符
     * @returns {string}  字符串
     */
    NumberTool.leftPad = function (pad, length, placeholder) {
        if (placeholder === void 0) { placeholder = 0; }
        return leftPad_1(pad, length, placeholder);
    };
    /**
     * 小数部分有效数字保留
     * @param {number} number 数字
     * @param {number} digits 小数保留位数
     * @returns {string} 数字的字符串
     */
    NumberTool.fixDigits = function (number, digits) {
        return Number(number).toFixed(digits);
    };
    /**
     * 返回正整数的字符串（非正整数返回指定字符串或空字符串）
     * @param {number} number 数字
     * @param {string} text 非正整数的返回（可空）
     * @returns {string} 正整数字符串或者指定字符串
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
 * @memberOf module:tool
 */
var StringTool = /** @class */ (function () {
    function StringTool() {
    }
    /**
     * 校验是否为手机号码
     * @param {string} mobile 手机号码
     * @returns {boolean} 结果
     */
    StringTool.isMobile = function (mobile) {
        return (/^1[345789]\d{9}$/.test(mobile));
    };
    /**
     * 校验是否为电话号码
     * @param {string} phone 电话号码
     * @returns {boolean} 结果
     */
    StringTool.isPhoneNumber = function (phone) {
        return /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/.test(phone);
    };
    /**
     * 检验是否为邮箱
     * @param {string} email 邮箱
     * @returns {boolean} 结果
     */
    StringTool.isEmail = function (email) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email);
    };
    /**
     * 校验是否为空字符串
     * @param {string} string 字符串
     * @returns {boolean} 结果
     */
    StringTool.isEmpty = function (string) {
        return !(string && string !== '');
    };
    /**
     * 校验是否为验证码（即0~9 6位数字）
     * @param {string} verifycode 验证码
     * @returns {boolean} 结果
     */
    StringTool.isVerifyCode = function (verifycode) {
        return (/^[0-9]{6}$/.test(verifycode));
    };
    /**
     * 校验是否为密码
     * @param {string} password 密码
     * @param {number} minLength 最小长度
     * @param {number} maxLength 最大长度
     * @returns {boolean} 结果
     */
    StringTool.isPassword = function (password, minLength, maxLength) {
        if (minLength !== undefined && maxLength !== undefined) {
            return new RegExp("^[a-zA-Z0-9]{" +
                minLength + "," + maxLength +
                "}$").test(password);
        }
        return (/^[a-zA-Z0-9]{6,14}$/.test(password));
    };
    /**
     * 去除数字左边所有0
     * @param c
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
     * @param {string} ascChar asc字符
     * @returns {number} 数值 A=0; B=1;
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
     * @param {string} string 字符串
     * @param {boolean} force 是否强制转换非数字字符 (即为26进制数字)
     * @param {number} offset 非数字时的初始值
     * @returns {number} 数值
     */
    StringTool.numberFromString = function (string, force, offset) {
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
     * @param {string} string 字符串
     * @returns {string} 结果字符串
     */
    StringTool.clearSpace = function (string) {
        // 过滤空格
        return string.replace(/\s+/g, '');
    };
    /**
     * 清除所有逗号
     * @param {string} string 字符串
     * @returns {string} 结果字符串
     */
    StringTool.clearComma = function (string) {
        // 过滤空格
        return string.replace(/\u002c+/g, '').replace(/，+/g, '');
    };
    /**
     * 清除所有竖线
     * @param {string} string 字符串
     * @returns {string} 结果字符串
     */
    StringTool.clearVertical = function (string) {
        // 过滤空格
        return string.replace(/\|+/g, '');
    };
    /**
     * 清除所有特殊字符
     * @param {string} string 字符串
     * @returns {string} 结果字符串
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
 * Created by cuppi on 2017/5/10.
 */
/**
 * 对象工具类
 * @memberOf module:tool
 */
var ObjectTool = /** @class */ (function () {
    function ObjectTool() {
    }
    /**
     * 删除对象某个属性
     * @param {object} target 对象
     * @param {string} propertyKey 属性
     * @returns {boolean} 是否删除成功
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
    return ObjectTool;
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

/**
 * Created by cuppi on 2017/4/14.
 */
/* eslint-enable */

exports.JNetwork = JNetwork;
exports.JNetworkGroup = JNetworkGroup;
exports.JNetworkRoot = JNetworkRoot;
exports.JNetworkError = JNetworkError;
exports.JToolDate = DateTool;
exports.JToolNumber = NumberTool;
exports.JToolUrl = UrlTool;
exports.JToolString = StringTool;
exports.JToolArray = ArrayTool;
exports.JToolObject = ObjectTool;
exports.JSDK = JSDK;
exports.jlink = jlink;
exports.jpara = jpara;
});

unwrapExports(lib);
var lib_1 = lib.JNetwork;
var lib_2 = lib.JNetworkGroup;
var lib_3 = lib.JNetworkRoot;
var lib_4 = lib.JNetworkError;
var lib_5 = lib.JToolDate;
var lib_6 = lib.JToolNumber;
var lib_7 = lib.JToolUrl;
var lib_8 = lib.JToolString;
var lib_9 = lib.JToolArray;
var lib_10 = lib.JToolObject;
var lib_11 = lib.JSDK;
var lib_12 = lib.jlink;
var lib_13 = lib.jpara;

/**
 * Created by cuppi on 2017/5/15.
 */
var _dataMap = {};
function UseConfig$1(dataMap) {
    // if (_VISIBLE_TYPE.indexOf(inType) === -1) {
    //   console.log('ERROR: the inType value is non-existent, please look inType at config. \n the inType value is one of ( '
    //     + _VISIBLE_TYPE.join(', ')
    //     + ' )');
    //   return;
    // }
    _dataMap = dataMap;
}
function _$1 (path, data, mark, otherHandle) {
    if (!data) {
        return;
    }
    var unify = _dataMap;
    if (!unify) {
        return {};
    }
    if (!unify.hasOwnProperty(path)) {
        console.log('Can not find data unify for path:' + path + ', please contact the Author => cuppi');
        return {};
    }
    return unify[path](data, mark, otherHandle);
}

/*
*   return CancelPromiseFactory.createJPromise((resolve, reject) => {
            let isOk = false;
            let _response = null;
            request.request().then((response: AxiosResponse) => {
                isOk = response.status === 200;
                _response = response;
                return response.data;
            }).then((responseJson: { errorCode: number, data: any, message: string }) => {
                if (isOk) {
                    if (!responseJson.errorCode) {
                        if (delegate && delegate.resolveInterceptor){
                            if (delegate.resolveInterceptor(_response, responseJson.data)){
                                resolve(responseJson.data);
                            }
                        } else {
                            resolve(responseJson.data);
                        }
                    } else {
                        if (delegate && delegate.rejectInterceptor){
                            if (delegate.rejectInterceptor(_response, JNetwork.generalError(responseJson.message, responseJson.errorCode))) {
                                reject(JNetwork.generalError(responseJson.message, responseJson.errorCode));
                            }
                        } else {
                            reject(JNetwork.generalError(responseJson.message, responseJson.errorCode));
                        }
                    }
                } else {
                    reject(responseJson);
                }
            }).catch(error => {
                // 请求超时
                if (error.message.indexOf('timeout') != -1) {
                    reject(new Error('请求超时, 请稍后重试'));
                } else {
                    reject(error);
                }
            });
        })
* */
var JNetworkConfig = /** @class */ (function () {
    function JNetworkConfig() {
    }
    JNetworkConfig.setConfig = function (config) {
        UseConfig(config.urlMap);
        UseConfig$1(config.dataMap);
        JNetworkConfig.config = config;
    };
    return JNetworkConfig;
}());

var JNetworkWorker = /** @class */ (function (_super) {
    __extends(JNetworkWorker, _super);
    function JNetworkWorker(config) {
        var _this = this;
        config = __assign({}, config, JNetworkConfig.config);
        _this = _super.call(this, config) || this;
        return _this;
    }
    JNetworkWorker.prototype.generalError = function () {
    };
    JNetworkWorker.prototype.prefixPromise = function (url, paras, headers, options) {
        var _this = this;
        var isOk, _response;
        try {
            console.log(this);
            return this.POST(url, paras, headers).then(function (response) {
                isOk = response.status === 200;
                _response = response;
                if (!isOk) {
                    console.log('失败');
                    throw new lib_4(response.statusText);
                }
                return response.data;
            }).then(function (responseJson) {
                if (!responseJson.errorCode) {
                    if (_this.delegate && _this.delegate.resolveInterceptor) {
                        if (_this.delegate.resolveInterceptor(_response, responseJson.data)) {
                            return responseJson.data;
                        }
                    }
                    else {
                        return responseJson.data;
                    }
                }
                else {
                    if (_this.delegate && _this.delegate.rejectInterceptor) {
                        if (_this.delegate.rejectInterceptor(_response, new lib_4(responseJson.message, responseJson.errorCode))) {
                            throw new lib_4(responseJson.message, responseJson.errorCode);
                        }
                    }
                    else {
                        throw new lib_4(responseJson.message, responseJson.errorCode);
                    }
                }
            }).catch(function (error) {
                // 请求超时
                if (error.message.indexOf('timeout') != -1) {
                    throw new lib_4('请求超时, 请稍后重试');
                }
                else {
                    throw error;
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    return JNetworkWorker;
}(lib_3));

/**
 * Created by cuppi on 2017/3/6.
 */
/**
 * 账户接口
 * @memberOf module:network
 */
var JNetworkAccount = /** @class */ (function (_super) {
    __extends(JNetworkAccount, _super);
    function JNetworkAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 用户登录
     * @param {string} mobile 登录需要的手机号码
     * @param {string} password 登录需要的密码
     * @returns {{terminate, then}|*}
     */
    JNetworkAccount.prototype.accountLogin = function (mobile, password) {
        return this.prefixPromise(accountUrl.jbzLogin, {
            mobile: mobile,
            password: password
        });
    };
    /**
     * 用户登出
     * @param sessionId 用户登录标识
     * @returns {{terminate, then}|*}
     */
    JNetworkAccount.prototype.accountLogout = function (sessionId) {
        return this.prefixPromise(accountUrl.jbzLogout, {}, sessionId);
    };
    /**
     * 获取验证码
     * @param mobile 接收验证码的手机号码
     * @param type 验证码类型 （1：注册使用 2：忘记密码使用）
     * @returns {{terminate, then}|*}
     */
    JNetworkAccount.prototype.accountVerifyCode = function (mobile, type) {
        return this.prefixPromise(accountUrl.jbzVerifycode, {
            mobile: mobile,
            codetype: type
        });
    };
    /**
     * 注册用户
     * @param mobile 用户的手机号码
     * @param verifyCode 验证码
     * @param password 密码
     * @returns {{terminate, then}|*}
     */
    JNetworkAccount.prototype.accountRegister = function (mobile, verifyCode, password) {
        return this.prefixPromise(accountUrl.jbzRegister, {
            mobile: mobile,
            verifyCode: verifyCode,
            password: password
        });
    };
    /**
     * 忘记密码并且找回密码
     * @param mobile 手机号码
     * @param verfyCode 验证码
     * @param password 新密码
     * @returns {{terminate, then}|*}
     */
    JNetworkAccount.prototype.accountUpdatepass = function (mobile, verfyCode, password) {
        return this.prefixPromise(accountUrl.jbzUpdatepass, {
            mobile: mobile,
            verifyCode: verfyCode,
            password: password
        });
    };
    JNetworkAccount.accountLogin = function (mobile, password) {
        return this.instance().accountLogin(mobile, password);
    };
    JNetworkAccount.accountLogout = function (sessionId) {
        return this.instance().accountLogout(sessionId);
    };
    JNetworkAccount.accountVerifyCode = function (mobile, type) {
        return this.instance().accountVerifyCode(mobile, type);
    };
    JNetworkAccount.accountRegister = function (mobile, verifyCode, password) {
        return this.instance().accountRegister(mobile, verifyCode, password);
    };
    JNetworkAccount.accountUpdatepass = function (mobile, verfyCode, password) {
        return this.instance().accountUpdatepass(mobile, verfyCode, password);
    };
    return JNetworkAccount;
}(JNetworkWorker));

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
                        // console.log('内存溢出');
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
    return AutoSeatPicking;
}());

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
                filteredSeatMap[filteredRow + ':' + filteredCol] = __assign({}, seatMap[key], { rowId: rowId, columnId: columnId });
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
            var rowOriNumber = lib_8.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_8.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_8.numberFromString(seatModel.Name.split(':').shift(), true, 1);
            var colNumber = lib_8.numberFromString(seatModel.Name.split(':').pop(), true, 1);
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
            return __assign({}, bridgeModel, { 
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
            var rowOriNumber = lib_8.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_8.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_8.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_8.numberFromString(seatModel.columnId, true, 1);
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
            return __assign({}, bridgeModel, { status: seatRowModel.isLock
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
            var rowOriNumber = lib_8.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_8.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_8.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_8.numberFromString(seatModel.columnId, true, 1);
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
            return __assign({}, bridgeModel, { status: seatRowModel.isLock === '1'
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
            var rowOriNumber = lib_8.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_8.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_8.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_8.numberFromString(seatModel.columnId, true, 1);
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
            return __assign({}, bridgeModel, { status: seatRowModel.isLock
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
            var rowOriNumber = lib_8.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_8.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_8.numberFromString(seatModel.rowId, true, 1);
            var colNumber = lib_8.numberFromString(seatModel.columnId, true, 1);
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
            return __assign({}, bridgeModel, { status: seatRowModel.status === 'LK'
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
            var rowOriNumber = lib_8.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_8.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_8.numberFromString(seatModel.rowNo, true, 1);
            var colNumber = lib_8.numberFromString(seatModel.columnNo, true, 1);
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
            return __assign({}, bridgeModel, { status: seatRowModel.status === '2'
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
            var rowOriNumber = lib_8.numberRemoveLeftZero(seatModel.rowName);
            var colOriNumber = lib_8.numberRemoveLeftZero(seatModel.columnName);
            var rowNumber = lib_8.numberFromString(rowOriNumber, true, 1);
            var colNumber = lib_8.numberFromString(colOriNumber, true, 1);
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
            return __assign({}, bridgeModel, { status: seatRowModel.status === 0
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

/**
 * Created by cuppi on 2016/11/29.
 */
/**
 * 影院接口
 * @memberOf module:network
 */
var JNetworkCinema = /** @class */ (function (_super) {
    __extends(JNetworkCinema, _super);
    function JNetworkCinema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取影院详情
     * @param {string} cinemaId 影院ID
     * @returns {Promise} promise
     */
    JNetworkCinema.prototype.cinemaDetail = function (cinemaId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cinemaUrl.jbzDetail, { cinemaId: cinemaId }).then(function (data) {
                resolve(_$1('cinemaUrl.jbzDetail', data, 0));
            }, function (error) {
                reject(error);
            });
        });
    };
    JNetworkCinema.prototype.cinemaList = function (location, cinemaFilter) {
        var _this = this;
        if (cinemaFilter == undefined) {
            cinemaFilter = location;
        }
        return new Promise(function (resolve, reject) {
            var u = undefined;
            var _a = cinemaFilter ? cinemaFilter : { filmId: u, feature: u, region: u, sort: u, limit: u }, filmId = _a.filmId, feature = _a.feature, region = _a.region, sort = _a.sort, limit = _a.limit;
            _this.prefixPromise(cinemaUrl.jbzList, __assign({}, location, { filmId: filmId,
                feature: feature, regionName: region, orderType: sort, limit: limit })).then(function (data) {
                resolve(_$1('cinemaUrl.jbzList', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 获取指定影院排片
     * @param cinemaId 影院Id
     * @returns {{terminate, then}|*}
     */
    JNetworkCinema.prototype.cinemaScreeningFilmList = function (cinemaId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.prefixPromise(cinemaUrl.jbzScreeningFilmList, {
                cinemaId: cinemaId
            }).then(function (data) {
                resolve(_$1('cinemaUrl.jbzScreeningFilmList', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 获取指定影院排片日期安排
     * @param cinemaId 影院Id
     * @param filmId 影片Id
     * @returns {{terminate, then}|*}
     */
    JNetworkCinema.prototype.cinemaScreeningDateList = function (cinemaId, filmId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cinemaUrl.jbzScreeningDateList, { cinemaId: cinemaId, filmId: filmId }).then(function (data) {
                resolve(_$1('cinemaUrl.jbzScreeningDateList', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 获取指定影院排片放映厅安排
     * @param cinemaId 影院Id
     * @param filmId 影片Id
     * @param date 日期（时间戳标示）
     * @returns {{terminate, then}|*}
     */
    JNetworkCinema.prototype.cinemaScreeningItems = function (cinemaId, filmId, date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            date = lib_5.dateStringFromTimeInterval(date, 'yyyy-MM-dd');
            _this.prefixPromise(cinemaUrl.jbzScreeningItems, { cinemaId: cinemaId, filmId: filmId, date: date }).then(function (data) {
                resolve(_$1('cinemaUrl.jbzScreeningItems', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 实时座位图
     * @param type 平台类型 （必须）
     * @param paras （根据不同平台变化）
     * @returns {*}
     */
    JNetworkCinema.prototype.cinemaSeats = function (type, paras) {
        var _this = this;
        if (type === 'meituan' || type === 'dazhong') {
            type = 'maoyan';
        }
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cinemaUrl.jbzRealtimeSeat, __assign({ type: type }, paras)).then(function (data) {
                resolve(_$1('cinemaUrl.jbzRealtimeSeat', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 智能实时座位图
     * @param type 平台类型 （必须）
     * @param paras （根据不同平台变化）
     * @returns {*}
     */
    JNetworkCinema.prototype.cinemaSmartSeats = function (type, paras) {
        var _this = this;
        if (type === 'meituan' || type === 'dazhong') {
            type = 'maoyan';
        }
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cinemaUrl.jbzRealtimeSeat, __assign({ type: type }, paras)).then(function (data) {
                resolve(SeatManager.defaultManager().smartSeatsFromSeats(type, _$1('cinemaUrl.jbzRealtimeSmartSeat', data)));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 收藏影院
     * @param cinemaId 影院Id
     * @param cinemaName 影院名字
     * @returns {{terminate, then}|*}
     */
    JNetworkCinema.prototype.cinemaFavoriteCinema = function (cinemaId, cinemaName) {
        return this.prefixPromise(cinemaUrl.jbzCollectcinema, {
            cinemaId: cinemaId,
            cinemaName: cinemaName
        });
    };
    /**
     * 取消收藏影院
     * @param cinemaId 影院Id
     * @returns {{terminate, then}|*}
     */
    JNetworkCinema.prototype.cinemaCancelFavoriteCinema = function (cinemaId) {
        return this.prefixPromise(cinemaUrl.jbzCancelcollectcinema, {});
    };
    JNetworkCinema.cinemaDetail = function (cinemaId) {
        return this.instance().cinemaDetail(cinemaId);
    };
    JNetworkCinema.cinemaList = function (a, b) {
        return this.instance().cinemaList(a, b);
    };
    JNetworkCinema.cinemaScreeningFilmList = function (cinemaId) {
        return this.instance().cinemaScreeningFilmList(cinemaId);
    };
    JNetworkCinema.cinemaScreeningDateList = function (cinemaId, filmId) {
        return this.instance().cinemaScreeningDateList(cinemaId, filmId);
    };
    JNetworkCinema.cinemaScreeningItems = function (cinemaId, filmId, date) {
        return this.instance().cinemaScreeningItems(cinemaId, filmId, date);
    };
    JNetworkCinema.cinemaSeats = function (type, paras) {
        return this.instance().cinemaSeats(type, paras);
    };
    JNetworkCinema.cinemaSmartSeats = function (type, paras) {
        return this.instance().cinemaSmartSeats(type, paras);
    };
    JNetworkCinema.cinemaFavoriteCinema = function (cinemaId, cinemaName) {
        return this.instance().cinemaFavoriteCinema(cinemaId, cinemaName);
    };
    JNetworkCinema.cinemaCancelFavoriteCinema = function (cinemaId) {
        return this.instance().cinemaCancelFavoriteCinema(cinemaId);
    };
    return JNetworkCinema;
}(JNetworkWorker));

/**
 * Created by cuppi on 2016/11/30.
 */
/**
 * 城市及定位接口
 * @memberOf module:network
 * @hideconstructor
 */
var JNetworkCity = /** @class */ (function (_super) {
    __extends(JNetworkCity, _super);
    function JNetworkCity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取城市列表
     * @returns {*}
     */
    JNetworkCity.prototype.cityList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cityUrl.jbzCities).then(function (data) {
                resolve(_$1('cityUrl.jbzCities', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     *  通过经纬度获取城市
     *  @param coordinate 位置信息
     * @returns {*}
     */
    JNetworkCity.prototype.cityByCoordinate = function (coordinate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cityUrl.jbzCityByCoordinate, coordinate).then(function (data) {
                resolve(_$1('cityUrl.jbzCityByCoordinate', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**+
     * 通过经纬度获取城市（通过代理传递）
     * @returns {{terminate, then}|*}
     */
    JNetworkCity.prototype.cityNeedCoordinate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cityUrl.jbzCityByCoordinate).then(function (data) {
                resolve(_$1('cityUrl.jbzCityByCoordinate', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 通过城市id获取城市
     * @param cityId
     * @returns {{terminate, then}|*}
     */
    JNetworkCity.prototype.cityById = function (cityId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cityUrl.jbzCityById, { cityId: cityId }).then(function (data) {
                resolve(_$1('cityUrl.jbzCityById', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**+
     * 获取地区列表
     * @param cityId
     * @returns {{terminate, then}|*}
     */
    JNetworkCity.prototype.cityDistrictList = function (cityId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cityUrl.jbzDistricts, { cityId: cityId }).then(function (data) {
                resolve(_$1('cityUrl.jbzDistricts', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 获取热门城市列表
     * @returns {{terminate, then}|*}
     */
    JNetworkCity.prototype.cityHotList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(cityUrl.jbzHotCities).then(function (data) {
                resolve(_$1('cityUrl.jbzHotCities', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    JNetworkCity.cityList = function () {
        return this.instance().cityList();
    };
    JNetworkCity.cityByCoordinate = function (coordinate) {
        return this.instance().cityByCoordinate(coordinate);
    };
    JNetworkCity.cityNeedCoordinate = function () {
        return this.instance().cityNeedCoordinate();
    };
    JNetworkCity.cityById = function (cityId) {
        return this.instance().cityById(cityId);
    };
    JNetworkCity.cityDistrictList = function (cityId) {
        return this.instance().cityDistrictList(cityId);
    };
    JNetworkCity.cityHotList = function () {
        return this.instance().cityHotList();
    };
    return JNetworkCity;
}(JNetworkWorker));

/**
 * Created by cuppi on 2016/11/22.
 */
/**
 * 影片接口
 * @memberOf module:network
 */
var JNetworkFilm = /** @class */ (function (_super) {
    __extends(JNetworkFilm, _super);
    function JNetworkFilm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取热门电影
     * @param page PageModel 分页模型
     * @returns {Promise}
     */
    JNetworkFilm.prototype.filmHotfilms = function (page) {
        var _this = this;
        if (!page) {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(filmUrl.jbzHotFilms).then(function (data) {
                    resolve(_$1('filmUrl.jbzHotFilms', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(filmUrl.jbzHotFilmsPage, { page: page.index, size: page.size }).then(function (data) {
                    resolve(_$1('filmUrl.jbzHotFilmsPage', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
    };
    /**
     * 获取热门电影
     * @returns {{terminate, then}|*}
     */
    JNetworkFilm.prototype.filmHotfilmsSimple = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(filmUrl.jbzHotFilmsSimple).then(function (data) {
                resolve(_$1('filmUrl.jbzHotFilmsSimple', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 获取待映电影
     * @param page 页号
     * @returns {Promise}
     */
    JNetworkFilm.prototype.filmWaitfilms = function (page) {
        var _this = this;
        if (!page) {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(filmUrl.jbzWaitFilms).then(function (data) {
                    resolve(_$1('filmUrl.jbzWaitFilms', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(filmUrl.jbzWaitFilmsPage, { page: page.index, size: page.size }).then(function (data) {
                    resolve(_$1('filmUrl.jbzWaitFilmsPage', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
    };
    /**
     * 获取影片详情
     * @param filmId 影片Id
     * @param platform 平台类型(默认使用jbz平台)
     * @returns {Promise}
     */
    JNetworkFilm.prototype.filmDetail = function (filmId, platform) {
        var _this = this;
        if (platform === void 0) { platform = null; }
        if (platform && platform !== 'jbz') {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(filmUrl.jbzFilmDetailByPartner, { platformFilmId: filmId, platform: platform }).then(function (data) {
                    resolve(_$1('filmUrl.jbzFilmDetailByPartner', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(filmUrl.jbzFilmDetail, { filmId: filmId }).then(function (data) {
                    resolve(_$1('filmUrl.jbzFilmDetail', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
    };
    /**
     * 获取影片排片日期列表
     * @param filmId 影片Id
     * @returns {Promise}
     */
    JNetworkFilm.prototype.filmDateList = function (filmId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(filmUrl.jbzFilmDate, { filmId: filmId }).then(function (data) {
                resolve(_$1('filmUrl.jbzFilmDate', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    JNetworkFilm.filmHotfilms = function (page) {
        return this.instance().filmHotfilms(page);
    };
    JNetworkFilm.filmHotfilmsSimple = function () {
        return this.instance().filmHotfilmsSimple();
    };
    JNetworkFilm.filmWaitfilms = function (page) {
        return this.instance().filmWaitfilms(page);
    };
    JNetworkFilm.filmDetail = function (filmId, platform) {
        if (platform === void 0) { platform = null; }
        return this.instance().filmDetail(filmId, platform);
    };
    JNetworkFilm.filmDateList = function (filmId) {
        return this.instance().filmDateList(filmId);
    };
    return JNetworkFilm;
}(JNetworkWorker));

/**
 * Created by cuppi on 2017/3/6.
 */
/**
 * 个人中心接口
 * @memberOf module:network
 */
var JNetworkMine = /** @class */ (function (_super) {
    __extends(JNetworkMine, _super);
    function JNetworkMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 我的订单
     * @private
     * @returns {*}
     */
    JNetworkMine.prototype.mineOrder = function () {
        return this.prefixPromise(mineUrl.userorders);
    };
    /**
     * 我的收藏(影院)
     * @returns {*}
     */
    JNetworkMine.prototype.mineFavoriteCinema = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(mineUrl.jbzMineCinema).then(function (data) {
                resolve(_$1('mineUrl.jbzMineCinema', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 我的收藏
     * @private
     * @returns {*}
     */
    JNetworkMine.prototype.mineFavorite = function () {
        return this.prefixPromise(mineUrl.collectedcinemalist);
    };
    JNetworkMine.mineOrder = function () {
        return this.instance().mineOrder();
    };
    JNetworkMine.mineFavoriteCinema = function () {
        return this.instance().mineFavoriteCinema();
    };
    JNetworkMine.mineFavorite = function () {
        return this.instance().mineFavorite();
    };
    return JNetworkMine;
}(JNetworkWorker));

/**
 * Created by cuppi on 2016/12/1.
 */
/**
 * 其他接口
 * @memberOf module:network
 */
var JNetworkOther = /** @class */ (function (_super) {
    __extends(JNetworkOther, _super);
    function JNetworkOther() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 搜索
     * @param cityId 城市Id
     * @param searchKey 关键字
     * @param nextPageFirstKey 下一页的句柄
     * @returns {Promise}
     */
    JNetworkOther.prototype.search = function (cityId, searchKey, nextPageFirstKey) {
        var _this = this;
        if (cityId) {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(otherUrl.jbzSearch, {
                    cityId: cityId,
                    queryStr: searchKey,
                    lastKey: nextPageFirstKey
                }).then(function (data) {
                    resolve(_$1('otherUrl.jbzSearch', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.prefixPromise(otherUrl.jbzSearch, {
                    queryStr: searchKey,
                    lastKey: nextPageFirstKey
                }).then(function (data) {
                    resolve(_$1('otherUrl.jbzSearch', data));
                }, function (error) {
                    reject(error);
                });
            });
        }
    };
    /**
     * 热搜词汇
     * @returns {{terminate, then}|*}
     */
    JNetworkOther.prototype.hotSearchKeyword = function () {
        return this.prefixPromise(otherUrl.jbzHotSearchKeyword);
    };
    /**
     * 广告接口
     * @param location 广告使用地点
     * @param cityId 当前城市
     * @returns {Promise}
     */
    JNetworkOther.prototype.otherBanners = function (location, cityId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.prefixPromise(otherUrl.jbzBanners, {
                location: location, cityId: cityId
            }).then(function (data) {
                resolve(_$1('otherUrl.jbzBanners', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**+
     * 广告接口
     * @param position 广告使用地点
     * @param cityId 当前城市
     * @returns {Promise}
     */
    JNetworkOther.prototype.banners = function (position, cityId) {
        return this.prefixPromise(position, cityId);
    };
    JNetworkOther.search = function (cityId, searchKey, nextPageFirstKey) {
        return this.instance().search(cityId, searchKey, nextPageFirstKey);
    };
    JNetworkOther.hotSearchKeyword = function () {
        return this.instance().hotSearchKeyword();
    };
    JNetworkOther.otherBanners = function (location, cityId) {
        return this.instance().otherBanners(location, cityId);
    };
    JNetworkOther.banners = function (position, cityId) {
        return this.instance().banners(position, cityId);
    };
    return JNetworkOther;
}(JNetworkWorker));

/**
 * Created by cuppi on 2016/12/7.
 */
/**
 * 交易接口
 * @memberOf module:network
 */
var JNetworkTrade = /** @class */ (function (_super) {
    __extends(JNetworkTrade, _super);
    function JNetworkTrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 锁座
     * @param type 平台类型
     * @param paras 锁座参数
     * @returns {{terminate, then}|*}
     */
    JNetworkTrade.prototype.tradeLockSeat = function (type, paras) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prefixPromise(tradeUrl.jbzLockSeat, __assign({ type: type }, paras)).then(function (data) {
                resolve(_$1('tradeUrl.jbzLockSeat', data));
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 取消锁座
     * @param orderId 订单Id
     * @returns {{terminate, then}|*}
     */
    JNetworkTrade.prototype.tradeCancelLockSeat = function (orderId) {
        return this.prefixPromise(tradeUrl.jbzCancelOrder, { orderId: orderId });
    };
    JNetworkTrade.tradeLockSeat = function (type, paras) {
        return this.instance().tradeLockSeat(type, paras);
    };
    JNetworkTrade.tradeCancelLockSeat = function (orderId) {
        return this.instance().tradeCancelLockSeat(orderId);
    };
    return JNetworkTrade;
}(JNetworkWorker));

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

// /**
// /**
//  * 交易管理类
//  * @memberOf module:manager
//  */
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
    TradeManager.defaultManager = function (delegate) {
        if (!delegate.hasOwnProperty('callbackCityInfo')) {
            console.log('没有找到城市信息实现');
            return null;
        }
        instance$2 = new TradeManager();
        instance$2.callbackCityInfo = delegate.callbackCityInfo;
        return instance$2;
    };
    /**
     * 获取交易商务参数（与座位无关的）
     * @param platform 平台类型
     * @param platformData 平台数据
     * @param filmId 电影Id
     * @param filmName 电影名称
     * @param cinemaId 影院Id
     * @param cinemaName 影院名称
     * @returns {*} 商务参数
     */
    TradeManager.tradeParasFromPlatform = function (platform, platformData, filmId, filmName, cinemaId, cinemaName) {
        if (platform === 'wangpiao') {
            return {
                jbzFilmId: filmId,
                filmId: platformData.filmId,
                showId: platformData.showIndex,
                cinemaName: cinemaName,
                platformCinemaId: platformData.cinemaId,
                cinemaId: cinemaId
            };
        }
        if (platform === 'spider') {
            return {
                jbzFilmId: filmId,
                filmId: platformData.filmId,
                showId: platformData.showId,
                platformCinemaId: platformData.cinemaId,
                cinemaId: cinemaId
            };
        }
        if (platform === 'maizuo') {
            return {
                jbzFilmId: filmId,
                filmId: platformData.filmId,
                showId: platformData.foretellId,
                filmName: filmName,
                cinemaName: cinemaName,
                platformCinemaId: platformData.cinemaId,
                cinemaId: cinemaId
            };
        }
        if (platform === 'danche') {
            return {
                jbzFilmId: filmId,
                filmId: platformData.filmId,
                showId: platformData.id,
                platformCinemaId: platformData.cinemaId,
                cinemaId: cinemaId
            };
        }
        if (platform === 'maoyan' || platform === 'meituan' || platform === 'dazhong') {
            return {
                jbzFilmId: filmId,
                filmId: platformData.filmId,
                showId: platformData.showId,
                cinemaName: cinemaName,
                platformCinemaId: platformData.cinemaId,
                cinemaId: cinemaId
            };
        }
        if (platform === 'baidu') {
            return {
                showId: platformData.seqid,
                platformCinemaId: platformData.cinemaId,
                cinemaId: cinemaId
            };
        }
        if (platform === 'taobao') {
            return {
                jbzFilmId: filmId,
                filmId: platform.filmId,
                showId: platform.showId,
                cinemaName: cinemaName,
                platformCinemaId: platform.cinemaId,
                filmName: filmName,
                cinemaId: cinemaId
            };
        }
    };
    /**
     * 获取锁座处理者
     * @param type 平台类型
     * @param paras 参数
     * @returns {*} 返回请求promise
     */
    TradeManager.prototype.lockSeatHandlerFrom = function (type, paras) {
        return JNetworkTrade.tradeLockSeat(type, paras);
    };
    /**
     * 获取下订单处理者
     * @param type 平台类型
     * @param paras 参数
     * @returns {{terminate, then}|*} 返回请求promise
     */
    TradeManager.prototype.confirmOrderHandlerFrom = function (type, paras) {
        return JNetworkTrade.tradeApplyOrder(type, paras);
    };
    /**
     * 获取锁座时需要的座位参数
     * @param type 平台类型
     * @param seatList 座位列表（需要购买的）
     * @param mobile 手机号码
     * @param openId 身份标识符（目前跟手机号码一样）
     * @returns {*} 返回参数对象
     */
    TradeManager.prototype.seatInforParas = function (type, seatList, mobile, openId) {
        // 网票
        if (type === 'wangpiao') {
            var seatInfos = [];
            var seatNumberInfos = [];
            for (var _i = 0, seatList_1 = seatList; _i < seatList_1.length; _i++) {
                var seat = seatList_1[_i];
                seatInfos.push(seat.seatModel.SeatIndex);
                seatNumberInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfos.join('|'),
                count: seatInfos.length,
                seatNumberInfos: seatNumberInfos.join('|'),
                mobile: mobile,
                openId: openId
            };
        }
        // 蜘蛛
        if (type === 'spider') {
            var seatInfos = [];
            var seatNumberInfos = [];
            for (var _a = 0, seatList_2 = seatList; _a < seatList_2.length; _a++) {
                var seat = seatList_2[_a];
                seatInfos.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatNumberInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfos.join('|'),
                count: seatInfos.length,
                seatNumberInfos: seatNumberInfos.join('|'),
                mobile: mobile,
                openId: openId
            };
        }
        // 卖座
        if (type === 'maizuo') {
            var seatInfos = [];
            var seatNumberInfos = [];
            for (var _b = 0, seatList_3 = seatList; _b < seatList_3.length; _b++) {
                var seat = seatList_3[_b];
                seatInfos.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatNumberInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfos.join('|'),
                count: seatInfos.length,
                seatNumberInfos: seatNumberInfos.join('|'),
                mobile: mobile,
                openId: openId
            };
        }
        // 单车
        if (type === 'danche') {
            var seatInfos = [];
            var seatNumberInfos = [];
            for (var _c = 0, seatList_4 = seatList; _c < seatList_4.length; _c++) {
                var seat = seatList_4[_c];
                seatInfos.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatNumberInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfos.join('|'),
                count: seatInfos.length,
                seatNumberInfos: seatNumberInfos.join('|'),
                mobile: mobile,
                openId: openId
            };
        }
        // 猫眼
        if (type === 'maoyan' || type === 'meituan' || type === 'dazhong') {
            var seatInfos = [];
            var seatNumberInfos = [];
            for (var _d = 0, seatList_5 = seatList; _d < seatList_5.length; _d++) {
                var seat = seatList_5[_d];
                if (!seat.seatModel || true) {
                    console.log(seat);
                }
                console.log(seat.seatModel);
                seatInfos.push({
                    sectionId: seat.seatModel.sectionId,
                    columnId: seat.seatModel.columnId,
                    rowId: seat.seatModel.rowId,
                    seatNo: seat.seatModel.seatNo
                });
                seatNumberInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: JSON.stringify({
                    count: seatList.length,
                    list: seatInfos
                }),
                seatNumberInfos: seatNumberInfos.join('|'),
                mobile: mobile,
                openId: openId
            };
        }
        // 百度
        if (type === 'baidu') {
            var seatIds = [];
            var seatNumberInfos = [];
            for (var _e = 0, seatList_6 = seatList; _e < seatList_6.length; _e++) {
                var seat = seatList_6[_e];
                seatIds.push(seat.seatModel.seatNo);
                seatNumberInfos.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
            }
            return {
                count: seatIds.length,
                //  后台设置特意反过来的
                seatIds: seatNumberInfos.join('|'),
                seatNumberInfos: seatIds.join('|'),
                mobile: mobile,
                openId: openId
            };
        }
        // 淘票票
        if (type === 'taobao') {
            var seatInfos = [];
            var seatNumberInfos = [];
            var seatNameInfos = [];
            for (var _f = 0, seatList_7 = seatList; _f < seatList_7.length; _f++) {
                var seat = seatList_7[_f];
                seatInfos.push(seat.seatModel.seatId);
                seatNumberInfos.push(seat.rowOriNumber + ':' + seat.colOriNumber);
                seatNameInfos.push(seat.seatModel.name);
            }
            return {
                seatIds: seatInfos.join('|'),
                count: seatInfos.length,
                seatNumberInfos: seatNumberInfos.join('|'),
                seatsName: seatNameInfos.join('|'),
                applyKey: '',
                mobile: mobile,
                openId: openId
            };
        }
    };
    /**
     * 购票（执行锁座 下订单 的事务）
     * @param type 平台类型
     * @param tradeParas 商务参数（与座位无关的参数集合）
     * @param seatList 座位列表
     * @param mobile 手机号码
     * @param openId 身份标识符（同上）
     * @returns {*} 返回请求promise
     */
    TradeManager.prototype.buyTicket = function (type, tradeParas, seatList, mobile) {
        var paras = __assign({}, tradeParas, this.seatInforParas(type, seatList, mobile));
        var bridgeSelf = this;
        return {
            next: function (lockSeatCallback) {
                return {
                    next: function (confirmOrderCallback) {
                        var _this = this;
                        bridgeSelf.lockSeatHandlerFrom(type, __assign({}, paras, { cinemaId: paras.platformCinemaId })).then(function (data) {
                            lockSeatCallback(null, data);
                            var orderId = data.orderId;
                            var cinemaId = paras.cinemaId, jbzFilmId = paras.jbzFilmId, filmId = paras.filmId, showId = paras.showId;
                            var city = _this.callbackCityInfo();
                            var cityId = city.id;
                            var cityName = city.name;
                            bridgeSelf.confirmOrderHandlerFrom(type, {
                                orderId: orderId,
                                cinemaId: cinemaId,
                                jbzFilmId: jbzFilmId,
                                filmId: filmId,
                                showId: showId,
                                cityId: cityId,
                                cityName: cityName
                            }).then(function (data) {
                                confirmOrderCallback(null, data);
                            }, function (error) {
                                confirmOrderCallback(error, null);
                            });
                        }, function (error) {
                            lockSeatCallback(error, null);
                        });
                    }
                };
            }
        };
    };
    /**
     * 锁座
     * @param type 平台类型
     * @param tradeParas 商务参数（与座位无关的参数集合）
     * @param seatList 座位列表
     * @param mobile 手机号码
     * @returns {Promise} 返回请求promise
     */
    TradeManager.prototype.lockSeat = function (type, tradeParas, seatList, mobile) {
        var _this = this;
        var paras = __assign({}, tradeParas, this.seatInforParas(type, seatList, mobile));
        return new Promise(function (resolve, reject) {
            _this.lockSeatHandlerFrom(type, __assign({}, paras, { cinemaId: paras.platformCinemaId })).then(function (data) {
                var orderId = data.orderId;
                var amount = data.originalAmount;
                var cinemaId = paras.cinemaId, jbzFilmId = paras.jbzFilmId, filmId = paras.filmId, showId = paras.showId;
                // 下面两个
                var city = _this.callbackCityInfo();
                var cityId = city.id;
                var cityName = city.name;
                resolve({
                    orderId: orderId,
                    amount: amount,
                    cinemaId: cinemaId,
                    jbzFilmId: jbzFilmId,
                    filmId: filmId,
                    showId: showId,
                    cityId: cityId,
                    cityName: cityName
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * 确认订单
     * @param type 平台类型
     * @param lockSeatResultData 锁座成功返回的数据
     * @returns {Promise}
     */
    TradeManager.prototype.applyOrder = function (type, lockSeatResultData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.confirmOrderHandlerFrom(type, lockSeatResultData).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    return TradeManager;
}());

/**
 * Created by cuppi on 2017/4/14.
 */
/* eslint-enable */

exports.JNetworkAccount = JNetworkAccount;
exports.JNetworkCinema = JNetworkCinema;
exports.JNetworkCity = JNetworkCity;
exports.JNetworkFilm = JNetworkFilm;
exports.JNetworkMine = JNetworkMine;
exports.JNetworkOther = JNetworkOther;
exports.JNetworkTrade = JNetworkTrade;
exports.JNetworkConfig = JNetworkConfig;
exports.JSDK = JSDK;
exports.JManagerSeat = SeatManager;
exports.JManagerTrade = TradeManager;
