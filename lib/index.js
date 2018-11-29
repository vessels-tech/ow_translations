"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.possibleTranslationsForOrg = possibleTranslationsForOrg;
exports.translationsForTranslationOrg = translationsForTranslationOrg;
exports.getTranslationForLanguage = getTranslationForLanguage;
exports.translationFromJSON = translationFromJSON;
Object.defineProperty(exports, "TranslationOrg", {
  enumerable: true,
  get: function get() {
    return _Types.TranslationOrg;
  }
});
Object.defineProperty(exports, "TranslationFiles", {
  enumerable: true,
  get: function get() {
    return _Types.TranslationFiles;
  }
});
Object.defineProperty(exports, "TranslationEnum", {
  enumerable: true,
  get: function get() {
    return _Types.TranslationEnum;
  }
});
Object.defineProperty(exports, "TranslationFile", {
  enumerable: true,
  get: function get() {
    return _Types.TranslationFile;
  }
});
Object.defineProperty(exports, "TranslationOverrideFile", {
  enumerable: true,
  get: function get() {
    return _Types.TranslationOverrideFile;
  }
});
exports.functionReviver = exports.functionReplacer = void 0;

var _Types = require("./Types");

var _en_AU = require("./common/en_AU");

var _en_AU2 = require("./ggmn/en_AU");

var _fr_FR = require("./ggmn/fr_FR");

var _es_ES = require("./ggmn/es_ES");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import {en_US} from './common/en_US';
// import {guj_IN} from './common/guj_IN';
// import {hi_IN} from './common/hi_IN';
// import {test_UPPER} from './common/test_UPPER';
// import {fr_FR} from './common/fr_FR';
// import {es_ES} from './common/es_ES';
//Temp to get building
var en_US = _en_AU.en_AU;
var guj_IN = _en_AU.en_AU;
var hi_IN = _en_AU.en_AU;
var test_UPPER = _en_AU.en_AU;
var fr_FR = _en_AU.en_AU;
var es_ES = _en_AU.en_AU;

/**
 * Get a list of the possible Translations for a given org
 */
function possibleTranslationsForOrg(orgId) {
  switch (orgId) {
    case _Types.TranslationOrg.mywell:
      {
        return [_Types.TranslationEnum.en_AU, _Types.TranslationEnum.en_US, _Types.TranslationEnum.guj_IN, _Types.TranslationEnum.hi_IN];
      }

    case _Types.TranslationOrg.ggmn:
      {
        return [_Types.TranslationEnum.en_AU, // TranslationEnum.test_UPPER,
        _Types.TranslationEnum.fr_FR, _Types.TranslationEnum.es_ES];
      }
  }
}
/**
 * This is the root translations file. 
 * 
 * Include this to get the magical translations working.
 * 
 * In this class, we pull in the common translations, and override any
 * values for the given orgId if they exist.
 */


function translationsForTranslationOrg(orgId) {
  switch (orgId) {
    case _Types.TranslationOrg.mywell:
      {
        return {
          type: _Types.TranslationOrg.mywell,
          en_AU: _en_AU.en_AU,
          en_US: en_US,
          guj_IN: guj_IN,
          hi_IN: hi_IN,
          test_UPPER: test_UPPER
        };
      }

    case _Types.TranslationOrg.ggmn:
      {
        return {
          type: _Types.TranslationOrg.ggmn,
          en_AU: mergeFiles(_en_AU.en_AU, _en_AU2.ggmn_en_AU),
          fr_FR: mergeFiles(fr_FR, _fr_FR.ggmn_fr_FR),
          es_ES: mergeFiles(es_ES, _es_ES.ggmn_es_ES),
          test_UPPER: test_UPPER
        };
      }
  }
}

function mergeFiles(original, overrideFile) {
  if (overrideFile === null) {
    return original;
  }

  var newTemplates = Object.assign(original.templates, null, _objectSpread({}, overrideFile.overrides));
  original.templates = newTemplates;
  return original;
}
/**
 * Get the translations for the given user language setting
 * 
 * I'm thinking of a better way to do this with less typing, but at least
 * this method is fully type safe
 */


function getTranslationForLanguage(files, language) {
  switch (files.type) {
    case _Types.TranslationOrg.mywell:
      {
        switch (language) {
          case 'en_AU':
            return files.en_AU;

          case 'en_US':
            return files.en_US;

          case 'guj_IN':
            return files.guj_IN;

          case 'hi_IN':
            return files.hi_IN;

          case 'test_UPPER':
            return files.test_UPPER;

          default:
            {
              throw new Error("Error with translations. Could not find translation: ".concat(language, " for Org: ").concat(files.type));
            }
        }
      }

    case _Types.TranslationOrg.ggmn:
      {
        switch (language) {
          case 'en_AU':
            return files.en_AU;

          case 'test_UPPER':
            return files.test_UPPER;

          case 'fr_FR':
            return files.fr_FR;

          case 'es_ES':
            return files.es_ES;

          default:
            {
              throw new Error("Error with translations. Could not find translation: ".concat(language, " for Org: ").concat(files.type));
            }
        }
      }
  }
}
/**
 * Tools for saving and parsing translations as json
 */


var functionReplacer = function functionReplacer(name, val) {
  if (typeof val === 'function') {
    var entire = val.toString();
    var arg = entire.slice(entire.indexOf("(") + 1, entire.indexOf(")"));
    var body = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
    return {
      type: 'function',
      arguments: arg,
      body: body
    };
  }

  return val;
};

exports.functionReplacer = functionReplacer;

var functionReviver = function functionReviver(name, val) {
  if (_typeof(val) === 'object' && val.type === 'function') {
    return new Function(val.arguments, val.body);
  }

  return val;
};

exports.functionReviver = functionReviver;

function translationFromJSON(jsonString) {
  var files = JSON.parse(jsonString, functionReviver);
  return files;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJlbl9VUyIsImVuX0FVIiwiZ3VqX0lOIiwiaGlfSU4iLCJ0ZXN0X1VQUEVSIiwiZnJfRlIiLCJlc19FUyIsInBvc3NpYmxlVHJhbnNsYXRpb25zRm9yT3JnIiwib3JnSWQiLCJUcmFuc2xhdGlvbk9yZyIsIm15d2VsbCIsIlRyYW5zbGF0aW9uRW51bSIsImdnbW4iLCJ0cmFuc2xhdGlvbnNGb3JUcmFuc2xhdGlvbk9yZyIsInR5cGUiLCJtZXJnZUZpbGVzIiwiZ2dtbl9lbl9BVSIsImdnbW5fZnJfRlIiLCJnZ21uX2VzX0VTIiwib3JpZ2luYWwiLCJvdmVycmlkZUZpbGUiLCJuZXdUZW1wbGF0ZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZW1wbGF0ZXMiLCJvdmVycmlkZXMiLCJnZXRUcmFuc2xhdGlvbkZvckxhbmd1YWdlIiwiZmlsZXMiLCJsYW5ndWFnZSIsIkVycm9yIiwiZnVuY3Rpb25SZXBsYWNlciIsIm5hbWUiLCJ2YWwiLCJlbnRpcmUiLCJ0b1N0cmluZyIsImFyZyIsInNsaWNlIiwiaW5kZXhPZiIsImJvZHkiLCJsYXN0SW5kZXhPZiIsImFyZ3VtZW50cyIsImZ1bmN0aW9uUmV2aXZlciIsIkZ1bmN0aW9uIiwidHJhbnNsYXRpb25Gcm9tSlNPTiIsImpzb25TdHJpbmciLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBaUJBOztBQUNBOztBQUNBOzs7Ozs7OztBQWxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLEtBQUssR0FBR0MsWUFBZDtBQUNBLElBQU1DLE1BQU0sR0FBR0QsWUFBZjtBQUNBLElBQU1FLEtBQUssR0FBR0YsWUFBZDtBQUNBLElBQU1HLFVBQVUsR0FBR0gsWUFBbkI7QUFDQSxJQUFNSSxLQUFLLEdBQUdKLFlBQWQ7QUFDQSxJQUFNSyxLQUFLLEdB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RyxDQUFDUSxTQUFqQixFQUE0QlIsR0FBRyxDQUFDTSxJQUFoQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT04sR0FBUDtBQUNELENBUE07Ozs7QUFVQSxTQUFTVyxtQkFBVCxDQUE2QkMsVUFBN0IsRUFBbUU7QUFDeEUsTUFBTWpCLEtBQXVCLEdBQUdrQixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsVUFBWCxFQUF1QkgsZUFBdkIsQ0FBaEM7QUFDQSxTQUFPZCxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGlvbk9yZywgVHJhbnNsYXRpb25GaWxlcywgVHJhbnNsYXRpb25FbnVtLCBUcmFuc2xhdGlvbkZpbGUsIFRyYW5zbGF0aW9uT3ZlcnJpZGVGaWxlIH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuaW1wb3J0IHtlbl9BVX0gZnJvbSAnLi9jb21tb24vZW5fQVUnO1xuLy8gaW1wb3J0IHtlbl9VU30gZnJvbSAnLi9jb21tb24vZW5fVVMnO1xuLy8gaW1wb3J0IHtndWpfSU59IGZyb20gJy4vY29tbW9uL2d1al9JTic7XG4vLyBpbXBvcnQge2hpX0lOfSBmcm9tICcuL2NvbW1vbi9oaV9JTic7XG4vLyBpbXBvcnQge3Rlc3RfVVBQRVJ9IGZyb20gJy4vY29tbW9uL3Rlc3RfVVBQRVInO1xuLy8gaW1wb3J0IHtmcl9GUn0gZnJvbSAnLi9jb21tb24vZnJfRlInO1xuLy8gaW1wb3J0IHtlc19FU30gZnJvbSAnLi9jb21tb24vZXNfRVMnO1xuXG4vL1RlbXAgdG8gZ2V0IGJ1aWxkaW5nXG5jb25zdCBlbl9VUyA9IGVuX0FVO1xuY29uc3QgZ3VqX0lOID0gZW5fQVU7XG5jb25zdCBoaV9JTiA9IGVuX0FVO1xuY29uc3QgdGVzdF9VUFBFUiA9IGVuX0FVO1xuY29uc3QgZnJfRlIgPSBlbl9BVTtcbmNvbnN0IGVzX0VTID0gZW5fQVU7XG5cblxuaW1wb3J0IHsgZ2dtbl9lbl9BVSB9IGZyb20gJy4vZ2dtbi9lbl9BVSc7XG5pbXBvcnQgeyBnZ21uX2ZyX0ZSIH0gZnJvbSAnLi9nZ21uL2ZyX0ZSJztcbmltcG9ydCB7IGdnbW5fZXNfRVMgfSBmcm9tICcuL2dnbW4vZXNfRVMnO1xuXG5cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIHRoZSBwb3NzaWJsZSBUcmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gb3JnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3NzaWJsZVRyYW5zbGF0aW9uc0Zvck9yZyhvcmdJZDogVHJhbnNsYXRpb25PcmcpOiBUcmFuc2xhdGlvbkVudW1bXSB7XG4gIHN3aXRjaCAob3JnSWQpIHtcbiAgICBjYXNlIFRyYW5zbGF0aW9uT3JnLm15d2VsbDoge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgVHJhbnNsYXRpb25FbnVtLmVuX0FVLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZW5fVVMsXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5ndWpfSU4sXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5oaV9JTixcbiAgICAgICAgLy9UT0RPOiBob3cgdG8ga2VlcCBvbmx5IGluIGRldiwgYnV0IG5vdCBwcm9kdWN0aW9uP1xuICAgICAgICAvLyBUcmFuc2xhdGlvbkVudW0udGVzdF9VUFBFUixcbiAgICAgIF1cbiAgICB9XG4gICAgY2FzZSBUcmFuc2xhdGlvbk9yZy5nZ21uOiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZW5fQVUsXG4gICAgICAgIC8vIFRyYW5zbGF0aW9uRW51bS50ZXN0X1VQUEVSLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZnJfRlIsXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5lc19FUyxcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHJvb3QgdHJhbnNsYXRpb25zIGZpbGUuIFxuICogXG4gKiBJbmNsdWRlIHRoaXMgdG8gZ2V0IHRoZSBtYWdpY2FsIHRyYW5zbGF0aW9ucyB3b3JraW5nLlxuICogXG4gKiBJbiB0aGlzIGNsYXNzLCB3ZSBwdWxsIGluIHRoZSBjb21tb24gdHJhbnNsYXRpb25zLCBhbmQgb3ZlcnJpZGUgYW55XG4gKiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBvcmdJZCBpZiB0aGV5IGV4aXN0LlxuICovXG4gZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0aW9uc0ZvclRyYW5zbGF0aW9uT3JnKG9yZ0lkOiBUcmFuc2xhdGlvbk9yZyk6IFRyYW5zbGF0aW9uRmlsZXMge1xuICBzd2l0Y2ggKG9yZ0lkKSB7XG4gICAgY2FzZSBUcmFuc2xhdGlvbk9yZy5teXdlbGw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRyYW5zbGF0aW9uT3JnLm15d2VsbCxcbiAgICAgICAgZW5fQVUsXG4gICAgICAgIGVuX1VTLFxuICAgICAgICBndWpfSU4sXG4gICAgICAgIGhpX0lOLFxuICAgICAgICB0ZXN0X1VQUEVSLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgVHJhbnNsYXRpb25PcmcuZ2dtbjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVHJhbnNsYXRpb25PcmcuZ2dtbixcbiAgICAgICAgZW5fQVU6IG1lcmdlRmlsZXMoZW5fQVUsIGdnbW5fZW5fQVUpLFxuICAgICAgICBmcl9GUjogbWVyZ2VGaWxlcyhmcl9GUiwgZ2dtbl9mcl9GUiksXG4gICAgICAgIGVzX0VTOiBtZXJnZUZpbGVzKGVzX0VTLCBnZ21uX2VzX0VTKSxcbiAgICAgICAgdGVzdF9VUFBFUixcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gXG5cblxuZnVuY3Rpb24gbWVyZ2VGaWxlcyhvcmlnaW5hbDogVHJhbnNsYXRpb25GaWxlLCBvdmVycmlkZUZpbGU6IFRyYW5zbGF0aW9uT3ZlcnJpZGVGaWxlIHwgbnVsbCk6IFRyYW5zbGF0aW9uRmlsZSB7XG4gIGlmIChvdmVycmlkZUZpbGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gb3JpZ2luYWw7XG4gIH1cblxuICBjb25zdCBuZXdUZW1wbGF0ZXMgPSBPYmplY3QuYXNzaWduKG9yaWdpbmFsLnRlbXBsYXRlcywgbnVsbCwgeyAuLi5vdmVycmlkZUZpbGUub3ZlcnJpZGVzIH0pO1xuICBvcmlnaW5hbC50ZW1wbGF0ZXMgPSBuZXdUZW1wbGF0ZXM7XG5cbiAgcmV0dXJuIG9yaWdpbmFsO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdHJhbnNsYXRpb25zIGZvciB0aGUgZ2l2ZW4gdXNlciBsYW5ndWFnZSBzZXR0aW5nXG4gKiBcbiAqIEknbSB0aGlua2luZyBvZiBhIGJldHRlciB3YXkgdG8gZG8gdGhpcyB3aXRoIGxlc3MgdHlwaW5nLCBidXQgYXQgbGVhc3RcbiAqIHRoaXMgbWV0aG9kIGlzIGZ1bGx5IHR5cGUgc2FmZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb25Gb3JMYW5ndWFnZShmaWxlczogVHJhbnNsYXRpb25GaWxlcywgbGFuZ3VhZ2U6IFRyYW5zbGF0aW9uRW51bSkge1xuICBzd2l0Y2ggKGZpbGVzLnR5cGUpIHtcbiAgICBjYXNlIChUcmFuc2xhdGlvbk9yZy5teXdlbGwpOiB7XG4gICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2VuX0FVJzogcmV0dXJuIGZpbGVzLmVuX0FVO1xuICAgICAgICBjYXNlICdlbl9VUyc6IHJldHVybiBmaWxlcy5lbl9VUztcbiAgICAgICAgY2FzZSAnZ3VqX0lOJzogcmV0dXJuIGZpbGVzLmd1al9JTjtcbiAgICAgICAgY2FzZSAnaGlfSU4nOiByZXR1cm4gZmlsZXMuaGlfSU47XG4gICAgICAgIGNhc2UgJ3Rlc3RfVVBQRVInOiByZXR1cm4gZmlsZXMudGVzdF9VUFBFUjtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3Igd2l0aCB0cmFuc2xhdGlvbnMuIENvdWxkIG5vdCBmaW5kIHRyYW5zbGF0aW9uOiAke2xhbmd1YWdlfSBmb3IgT3JnOiAke2ZpbGVzLnR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAoVHJhbnNsYXRpb25PcmcuZ2dtbik6IHtcbiAgICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSAnZW5fQVUnOiByZXR1cm4gZmlsZXMuZW5fQVU7XG4gICAgICAgIGNhc2UgJ3Rlc3RfVVBQRVInOiByZXR1cm4gZmlsZXMudGVzdF9VUFBFUjtcbiAgICAgICAgY2FzZSAnZnJfRlInOiByZXR1cm4gZmlsZXMuZnJfRlI7XG4gICAgICAgIGNhc2UgJ2VzX0VTJzogcmV0dXJuIGZpbGVzLmVzX0VTO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB3aXRoIHRyYW5zbGF0aW9ucy4gQ291bGQgbm90IGZpbmQgdHJhbnNsYXRpb246ICR7bGFuZ3VhZ2V9IGZvciBPcmc6ICR7ZmlsZXMudHlwZX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRvb2xzIGZvciBzYXZpbmcgYW5kIHBhcnNpbmcgdHJhbnNsYXRpb25zIGFzIGpzb25cbiAqL1xuZXhwb3J0IGNvbnN0IGZ1bmN0aW9uUmVwbGFjZXIgPSAobmFtZTogYW55LCB2YWw6IGFueSkgPT4ge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGVudGlyZSA9IHZhbC50b1N0cmluZygpO1xuICAgIGNvbnN0IGFyZyA9IGVudGlyZS5zbGljZShlbnRpcmUuaW5kZXhPZihcIihcIikgKyAxLCBlbnRpcmUuaW5kZXhPZihcIilcIikpO1xuICAgIGNvbnN0IGJvZHkgPSBlbnRpcmUuc2xpY2UoZW50aXJlLmluZGV4T2YoXCJ7XCIpICsgMSwgZW50aXJlLmxhc3RJbmRleE9mKFwifVwiKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgIGFyZ3VtZW50czogYXJnLFxuICAgICAgYm9keSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuXG5leHBvcnQgY29uc3QgZnVuY3Rpb25SZXZpdmVyID0gKG5hbWU6IGFueSwgdmFsOiBhbnkpID0+IHtcblxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKHZhbC5hcmd1bWVudHMsIHZhbC5ib2R5KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0aW9uRnJvbUpTT04oanNvblN0cmluZzogc3RyaW5nKTogVHJhbnNsYXRpb25GaWxlcyB7XG4gIGNvbnN0IGZpbGVzOiBUcmFuc2xhdGlvbkZpbGVzID0gSlNPTi5wYXJzZShqc29uU3RyaW5nLCBmdW5jdGlvblJldml2ZXIpO1xuICByZXR1cm4gZmlsZXNcbn1cblxuZXhwb3J0IHtcbiAgVHJhbnNsYXRpb25PcmcsXG4gIFRyYW5zbGF0aW9uRmlsZXMsXG4gIFRyYW5zbGF0aW9uRW51bSxcbiAgVHJhbnNsYXRpb25GaWxlLFxuICBUcmFuc2xhdGlvbk92ZXJyaWRlRmlsZSxcbn07Il19