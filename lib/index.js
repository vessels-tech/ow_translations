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

var _en_US = require("./common/en_US");

var _guj_IN = require("./common/guj_IN");

var _hi_IN = require("./common/hi_IN");

var _test_UPPER = require("./common/test_UPPER");

var _fr_FR = require("./common/fr_FR");

var _es_ES = require("./common/es_ES");

var _en_AU2 = require("./ggmn/en_AU");

var _fr_FR2 = require("./ggmn/fr_FR");

var _es_ES2 = require("./ggmn/es_ES");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
          en_US: _en_US.en_US,
          guj_IN: _guj_IN.guj_IN,
          hi_IN: _hi_IN.hi_IN,
          test_UPPER: _test_UPPER.test_UPPER
        };
      }

    case _Types.TranslationOrg.ggmn:
      {
        return {
          type: _Types.TranslationOrg.ggmn,
          en_AU: mergeFiles(_en_AU.en_AU, _en_AU2.ggmn_en_AU),
          fr_FR: mergeFiles(_fr_FR.fr_FR, _fr_FR2.ggmn_fr_FR),
          es_ES: mergeFiles(_es_ES.es_ES, _es_ES2.ggmn_es_ES),
          test_UPPER: _test_UPPER.test_UPPER
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJwb3NzaWJsZVRyYW5zbGF0aW9uc0Zvck9yZyIsIm9yZ0lkIiwiVHJhbnNsYXRpb25PcmciLCJteXdlbGwiLCJUcmFuc2xhdGlvbkVudW0iLCJlbl9BVSIsImVuX1VTIiwiZ3VqX0lOIiwiaGlfSU4iLCJnZ21uIiwiZnJfRlIiLCJlc19FUyIsInRyYW5zbGF0aW9uc0ZvclRyYW5zbGF0aW9uT3JnIiwidHlwZSIsInRlc3RfVVBQRVIiLCJtZXJnZUZpbGVzIiwiZ2dtbl9lbl9BVSIsImdnbW5fZnJfRlIiLCJnZ21uX2VzX0VTIiwib3JpZ2luYWwiLCJvdmVycmlkZUZpbGUiLCJuZXdUZW1wbGF0ZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZW1wbGF0ZXMiLCJvdmVycmlkZXMiLCJnZXRUcmFuc2xhdGlvbkZvckxhbmd1YWdlIiwiZmlsZXMiLCJsYW5ndWFnZSIsIkVycm9yIiwiZnVuY3Rpb25SZXBsYWNlciIsIm5hbWUiLCJ2YWwiLCJlbnRpcmUiLCJ0b1N0cmluZyIsImFyZyIsInNsaWNlIiwiaW5kZXhPZiIsImJvZHkiLCJsYXN0SW5kZXhPZiIsImFyZ3VtZW50cyIsImZ1bmN0aW9uUmV2aXZlciIsIkZ1bmN0aW9uIiwidHJhbnNsYXRpb25Gcm9tSlNPTiIsImpzb25TdHJpbmciLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBR0E7OztBQUdPLFNBQVNBLDBCQUFULENBQW9DQyxLQUFwQyxFQUE4RTtBQUNuRixVQUFRQSxLQUFSO0FBQ0UsU0FBS0Msc0JBQWVDLE1BQXBCO0FBQTRCO0FBQzFCLGVBQU8sQ0FDTEMsdUJBQWdCQyxLQURYLEVBRUxELHVCQUFnQkUsS0FGWCxFQUdMRix1QkFBZ0JHLE1B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QXVCSCxlQUF2QixDQUFoQztBQUNBLFNBQU9kLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0aW9uT3JnLCBUcmFuc2xhdGlvbkZpbGVzLCBUcmFuc2xhdGlvbkVudW0sIFRyYW5zbGF0aW9uRmlsZSwgVHJhbnNsYXRpb25PdmVycmlkZUZpbGUgfSBmcm9tIFwiLi9UeXBlc1wiO1xuXG5pbXBvcnQge2VuX0FVfSBmcm9tICcuL2NvbW1vbi9lbl9BVSc7XG5pbXBvcnQge2VuX1VTfSBmcm9tICcuL2NvbW1vbi9lbl9VUyc7XG5pbXBvcnQge2d1al9JTn0gZnJvbSAnLi9jb21tb24vZ3VqX0lOJztcbmltcG9ydCB7aGlfSU59IGZyb20gJy4vY29tbW9uL2hpX0lOJztcbmltcG9ydCB7dGVzdF9VUFBFUn0gZnJvbSAnLi9jb21tb24vdGVzdF9VUFBFUic7XG5pbXBvcnQge2ZyX0ZSfSBmcm9tICcuL2NvbW1vbi9mcl9GUic7XG5pbXBvcnQge2VzX0VTfSBmcm9tICcuL2NvbW1vbi9lc19FUyc7XG5cblxuaW1wb3J0IHsgZ2dtbl9lbl9BVSB9IGZyb20gJy4vZ2dtbi9lbl9BVSc7XG5pbXBvcnQgeyBnZ21uX2ZyX0ZSIH0gZnJvbSAnLi9nZ21uL2ZyX0ZSJztcbmltcG9ydCB7IGdnbW5fZXNfRVMgfSBmcm9tICcuL2dnbW4vZXNfRVMnO1xuXG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiB0aGUgcG9zc2libGUgVHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIG9yZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zc2libGVUcmFuc2xhdGlvbnNGb3JPcmcob3JnSWQ6IFRyYW5zbGF0aW9uT3JnKTogVHJhbnNsYXRpb25FbnVtW10ge1xuICBzd2l0Y2ggKG9yZ0lkKSB7XG4gICAgY2FzZSBUcmFuc2xhdGlvbk9yZy5teXdlbGw6IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5lbl9BVSxcbiAgICAgICAgVHJhbnNsYXRpb25FbnVtLmVuX1VTLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZ3VqX0lOLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uaGlfSU4sXG4gICAgICAgIC8vVE9ETzogaG93IHRvIGtlZXAgb25seSBpbiBkZXYsIGJ1dCBub3QgcHJvZHVjdGlvbj9cbiAgICAgICAgLy8gVHJhbnNsYXRpb25FbnVtLnRlc3RfVVBQRVIsXG4gICAgICBdXG4gICAgfVxuICAgIGNhc2UgVHJhbnNsYXRpb25PcmcuZ2dtbjoge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgVHJhbnNsYXRpb25FbnVtLmVuX0FVLFxuICAgICAgICAvLyBUcmFuc2xhdGlvbkVudW0udGVzdF9VUFBFUixcbiAgICAgICAgVHJhbnNsYXRpb25FbnVtLmZyX0ZSLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZXNfRVMsXG4gICAgICBdXG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSByb290IHRyYW5zbGF0aW9ucyBmaWxlLiBcbiAqIFxuICogSW5jbHVkZSB0aGlzIHRvIGdldCB0aGUgbWFnaWNhbCB0cmFuc2xhdGlvbnMgd29ya2luZy5cbiAqIFxuICogSW4gdGhpcyBjbGFzcywgd2UgcHVsbCBpbiB0aGUgY29tbW9uIHRyYW5zbGF0aW9ucywgYW5kIG92ZXJyaWRlIGFueVxuICogdmFsdWVzIGZvciB0aGUgZ2l2ZW4gb3JnSWQgaWYgdGhleSBleGlzdC5cbiAqL1xuIGV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGlvbnNGb3JUcmFuc2xhdGlvbk9yZyhvcmdJZDogVHJhbnNsYXRpb25PcmcpOiBUcmFuc2xhdGlvbkZpbGVzIHtcbiAgc3dpdGNoIChvcmdJZCkge1xuICAgIGNhc2UgVHJhbnNsYXRpb25PcmcubXl3ZWxsOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBUcmFuc2xhdGlvbk9yZy5teXdlbGwsXG4gICAgICAgIGVuX0FVLFxuICAgICAgICBlbl9VUyxcbiAgICAgICAgZ3VqX0lOLFxuICAgICAgICBoaV9JTixcbiAgICAgICAgdGVzdF9VUFBFUixcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIFRyYW5zbGF0aW9uT3JnLmdnbW46IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRyYW5zbGF0aW9uT3JnLmdnbW4sXG4gICAgICAgIGVuX0FVOiBtZXJnZUZpbGVzKGVuX0FVLCBnZ21uX2VuX0FVKSxcbiAgICAgICAgZnJfRlI6IG1lcmdlRmlsZXMoZnJfRlIsIGdnbW5fZnJfRlIpLFxuICAgICAgICBlc19FUzogbWVyZ2VGaWxlcyhlc19FUywgZ2dtbl9lc19FUyksXG4gICAgICAgIHRlc3RfVVBQRVIsXG4gICAgICB9XG4gICAgfVxuICB9XG59IFxuXG5cbmZ1bmN0aW9uIG1lcmdlRmlsZXMob3JpZ2luYWw6IFRyYW5zbGF0aW9uRmlsZSwgb3ZlcnJpZGVGaWxlOiBUcmFuc2xhdGlvbk92ZXJyaWRlRmlsZSB8IG51bGwpOiBUcmFuc2xhdGlvbkZpbGUge1xuICBpZiAob3ZlcnJpZGVGaWxlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsO1xuICB9XG5cbiAgY29uc3QgbmV3VGVtcGxhdGVzID0gT2JqZWN0LmFzc2lnbihvcmlnaW5hbC50ZW1wbGF0ZXMsIG51bGwsIHsgLi4ub3ZlcnJpZGVGaWxlLm92ZXJyaWRlcyB9KTtcbiAgb3JpZ2luYWwudGVtcGxhdGVzID0gbmV3VGVtcGxhdGVzO1xuXG4gIHJldHVybiBvcmlnaW5hbDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRyYW5zbGF0aW9ucyBmb3IgdGhlIGdpdmVuIHVzZXIgbGFuZ3VhZ2Ugc2V0dGluZ1xuICogXG4gKiBJJ20gdGhpbmtpbmcgb2YgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXMgd2l0aCBsZXNzIHR5cGluZywgYnV0IGF0IGxlYXN0XG4gKiB0aGlzIG1ldGhvZCBpcyBmdWxseSB0eXBlIHNhZmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uRm9yTGFuZ3VhZ2UoZmlsZXM6IFRyYW5zbGF0aW9uRmlsZXMsIGxhbmd1YWdlOiBUcmFuc2xhdGlvbkVudW0pIHtcbiAgc3dpdGNoIChmaWxlcy50eXBlKSB7XG4gICAgY2FzZSAoVHJhbnNsYXRpb25PcmcubXl3ZWxsKToge1xuICAgICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlICdlbl9BVSc6IHJldHVybiBmaWxlcy5lbl9BVTtcbiAgICAgICAgY2FzZSAnZW5fVVMnOiByZXR1cm4gZmlsZXMuZW5fVVM7XG4gICAgICAgIGNhc2UgJ2d1al9JTic6IHJldHVybiBmaWxlcy5ndWpfSU47XG4gICAgICAgIGNhc2UgJ2hpX0lOJzogcmV0dXJuIGZpbGVzLmhpX0lOO1xuICAgICAgICBjYXNlICd0ZXN0X1VQUEVSJzogcmV0dXJuIGZpbGVzLnRlc3RfVVBQRVI7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHdpdGggdHJhbnNsYXRpb25zLiBDb3VsZCBub3QgZmluZCB0cmFuc2xhdGlvbjogJHtsYW5ndWFnZX0gZm9yIE9yZzogJHtmaWxlcy50eXBlfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgKFRyYW5zbGF0aW9uT3JnLmdnbW4pOiB7XG4gICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2VuX0FVJzogcmV0dXJuIGZpbGVzLmVuX0FVO1xuICAgICAgICBjYXNlICd0ZXN0X1VQUEVSJzogcmV0dXJuIGZpbGVzLnRlc3RfVVBQRVI7XG4gICAgICAgIGNhc2UgJ2ZyX0ZSJzogcmV0dXJuIGZpbGVzLmZyX0ZSO1xuICAgICAgICBjYXNlICdlc19FUyc6IHJldHVybiBmaWxlcy5lc19FUztcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3Igd2l0aCB0cmFuc2xhdGlvbnMuIENvdWxkIG5vdCBmaW5kIHRyYW5zbGF0aW9uOiAke2xhbmd1YWdlfSBmb3IgT3JnOiAke2ZpbGVzLnR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUb29scyBmb3Igc2F2aW5nIGFuZCBwYXJzaW5nIHRyYW5zbGF0aW9ucyBhcyBqc29uXG4gKi9cbmV4cG9ydCBjb25zdCBmdW5jdGlvblJlcGxhY2VyID0gKG5hbWU6IGFueSwgdmFsOiBhbnkpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBlbnRpcmUgPSB2YWwudG9TdHJpbmcoKTtcbiAgICBjb25zdCBhcmcgPSBlbnRpcmUuc2xpY2UoZW50aXJlLmluZGV4T2YoXCIoXCIpICsgMSwgZW50aXJlLmluZGV4T2YoXCIpXCIpKTtcbiAgICBjb25zdCBib2R5ID0gZW50aXJlLnNsaWNlKGVudGlyZS5pbmRleE9mKFwie1wiKSArIDEsIGVudGlyZS5sYXN0SW5kZXhPZihcIn1cIikpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gICAgICBhcmd1bWVudHM6IGFyZyxcbiAgICAgIGJvZHksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cblxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9uUmV2aXZlciA9IChuYW1lOiBhbnksIHZhbDogYW55KSA9PiB7XG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbC50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbih2YWwuYXJndW1lbnRzLCB2YWwuYm9keSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGlvbkZyb21KU09OKGpzb25TdHJpbmc6IHN0cmluZyk6IFRyYW5zbGF0aW9uRmlsZXMge1xuICBjb25zdCBmaWxlczogVHJhbnNsYXRpb25GaWxlcyA9IEpTT04ucGFyc2UoanNvblN0cmluZywgZnVuY3Rpb25SZXZpdmVyKTtcbiAgcmV0dXJuIGZpbGVzXG59XG5cbmV4cG9ydCB7XG4gIFRyYW5zbGF0aW9uT3JnLFxuICBUcmFuc2xhdGlvbkZpbGVzLFxuICBUcmFuc2xhdGlvbkVudW0sXG4gIFRyYW5zbGF0aW9uRmlsZSxcbiAgVHJhbnNsYXRpb25PdmVycmlkZUZpbGUsXG59OyJdfQ==