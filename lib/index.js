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
        return [_Types.TranslationEnum.en_AU, // TranslationEnum.en_US,
        _Types.TranslationEnum.guj_IN, _Types.TranslationEnum.hi_IN];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJwb3NzaWJsZVRyYW5zbGF0aW9uc0Zvck9yZyIsIm9yZ0lkIiwiVHJhbnNsYXRpb25PcmciLCJteXdlbGwiLCJUcmFuc2xhdGlvbkVudW0iLCJlbl9BVSIsImd1al9JTiIsImhpX0lOIiwiZ2dtbiIsImZyX0ZSIiwiZXNfRVMiLCJ0cmFuc2xhdGlvbnNGb3JUcmFuc2xhdGlvbk9yZyIsInR5cGUiLCJlbl9VUyIsInRlc3RfVVBQRVIiLCJtZXJnZUZpbGVzIiwiZ2dtbl9lbl9BVSIsImdnbW5fZnJfRlIiLCJnZ21uX2VzX0VTIiwib3JpZ2luYWwiLCJvdmVycmlkZUZpbGUiLCJuZXdUZW1wbGF0ZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZW1wbGF0ZXMiLCJvdmVycmlkZXMiLCJnZXRUcmFuc2xhdGlvbkZvckxhbmd1YWdlIiwiZmlsZXMiLCJsYW5ndWFnZSIsIkVycm9yIiwiZnVuY3Rpb25SZXBsYWNlciIsIm5hbWUiLCJ2YWwiLCJlbnRpcmUiLCJ0b1N0cmluZyIsImFyZyIsInNsaWNlIiwiaW5kZXhPZiIsImJvZHkiLCJsYXN0SW5kZXhPZiIsImFyZ3VtZW50cyIsImZ1bmN0aW9uUmV2aXZlciIsIkZ1bmN0aW9uIiwidHJhbnNsYXRpb25Gcm9tSlNPTiIsImpzb25TdHJpbmciLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBV0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBSUE7OztBQUdPLFNBQVNBLDBCQUFULENBQW9DQyxLQUFwQyxFQUE4RTtBQUNuRixVQUFRQSxLQUFSO0FBQ0UsU0FBS0Msc0JBQWVDLE1BQXBCO0FBQTRCO0FBQzFCLGVBQU8sQ0FDTEMsdUJBQWdCQyxLQURYLEVBRUw7QUFDQUQsK0JBQWdCRSxNQUhYLEVBSUxGLHVCQUFn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O0FBQ0EsU0FBT2QsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25PcmcsIFRyYW5zbGF0aW9uRmlsZXMsIFRyYW5zbGF0aW9uRW51bSwgVHJhbnNsYXRpb25GaWxlLCBUcmFuc2xhdGlvbk92ZXJyaWRlRmlsZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmltcG9ydCB7ZW5fQVV9IGZyb20gJy4vY29tbW9uL2VuX0FVJztcbmltcG9ydCB7ZW5fVVN9IGZyb20gJy4vY29tbW9uL2VuX1VTJztcbmltcG9ydCB7Z3VqX0lOfSBmcm9tICcuL2NvbW1vbi9ndWpfSU4nO1xuaW1wb3J0IHtoaV9JTn0gZnJvbSAnLi9jb21tb24vaGlfSU4nO1xuaW1wb3J0IHt0ZXN0X1VQUEVSfSBmcm9tICcuL2NvbW1vbi90ZXN0X1VQUEVSJztcbmltcG9ydCB7ZnJfRlJ9IGZyb20gJy4vY29tbW9uL2ZyX0ZSJztcbmltcG9ydCB7ZXNfRVN9IGZyb20gJy4vY29tbW9uL2VzX0VTJztcblxuLy9UZW1wIHRvIGdldCBidWlsZGluZ1xuLy8gY29uc3QgZW5fVVMgPSBlbl9BVTtcbi8vIGNvbnN0IGd1al9JTiA9IGVuX0FVO1xuLy8gY29uc3QgaGlfSU4gPSBlbl9BVTtcbi8vIGNvbnN0IHRlc3RfVVBQRVIgPSBlbl9BVTtcbi8vIGNvbnN0IGZyX0ZSID0gZW5fQVU7XG4vLyBjb25zdCBlc19FUyA9IGVuX0FVO1xuXG5cbmltcG9ydCB7IGdnbW5fZW5fQVUgfSBmcm9tICcuL2dnbW4vZW5fQVUnO1xuaW1wb3J0IHsgZ2dtbl9mcl9GUiB9IGZyb20gJy4vZ2dtbi9mcl9GUic7XG5pbXBvcnQgeyBnZ21uX2VzX0VTIH0gZnJvbSAnLi9nZ21uL2VzX0VTJztcblxuXG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiB0aGUgcG9zc2libGUgVHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIG9yZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zc2libGVUcmFuc2xhdGlvbnNGb3JPcmcob3JnSWQ6IFRyYW5zbGF0aW9uT3JnKTogVHJhbnNsYXRpb25FbnVtW10ge1xuICBzd2l0Y2ggKG9yZ0lkKSB7XG4gICAgY2FzZSBUcmFuc2xhdGlvbk9yZy5teXdlbGw6IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5lbl9BVSxcbiAgICAgICAgLy8gVHJhbnNsYXRpb25FbnVtLmVuX1VTLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZ3VqX0lOLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uaGlfSU4sXG4gICAgICAgIC8vVE9ETzogaG93IHRvIGtlZXAgb25seSBpbiBkZXYsIGJ1dCBub3QgcHJvZHVjdGlvbj9cbiAgICAgICAgLy8gVHJhbnNsYXRpb25FbnVtLnRlc3RfVVBQRVIsXG4gICAgICBdXG4gICAgfVxuICAgIGNhc2UgVHJhbnNsYXRpb25PcmcuZ2dtbjoge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgVHJhbnNsYXRpb25FbnVtLmVuX0FVLFxuICAgICAgICAvLyBUcmFuc2xhdGlvbkVudW0udGVzdF9VUFBFUixcbiAgICAgICAgVHJhbnNsYXRpb25FbnVtLmZyX0ZSLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZXNfRVMsXG4gICAgICBdXG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSByb290IHRyYW5zbGF0aW9ucyBmaWxlLiBcbiAqIFxuICogSW5jbHVkZSB0aGlzIHRvIGdldCB0aGUgbWFnaWNhbCB0cmFuc2xhdGlvbnMgd29ya2luZy5cbiAqIFxuICogSW4gdGhpcyBjbGFzcywgd2UgcHVsbCBpbiB0aGUgY29tbW9uIHRyYW5zbGF0aW9ucywgYW5kIG92ZXJyaWRlIGFueVxuICogdmFsdWVzIGZvciB0aGUgZ2l2ZW4gb3JnSWQgaWYgdGhleSBleGlzdC5cbiAqL1xuIGV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGlvbnNGb3JUcmFuc2xhdGlvbk9yZyhvcmdJZDogVHJhbnNsYXRpb25PcmcpOiBUcmFuc2xhdGlvbkZpbGVzIHtcbiAgc3dpdGNoIChvcmdJZCkge1xuICAgIGNhc2UgVHJhbnNsYXRpb25PcmcubXl3ZWxsOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBUcmFuc2xhdGlvbk9yZy5teXdlbGwsXG4gICAgICAgIGVuX0FVLFxuICAgICAgICBlbl9VUyxcbiAgICAgICAgZ3VqX0lOLFxuICAgICAgICBoaV9JTixcbiAgICAgICAgdGVzdF9VUFBFUixcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIFRyYW5zbGF0aW9uT3JnLmdnbW46IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRyYW5zbGF0aW9uT3JnLmdnbW4sXG4gICAgICAgIGVuX0FVOiBtZXJnZUZpbGVzKGVuX0FVLCBnZ21uX2VuX0FVKSxcbiAgICAgICAgZnJfRlI6IG1lcmdlRmlsZXMoZnJfRlIsIGdnbW5fZnJfRlIpLFxuICAgICAgICBlc19FUzogbWVyZ2VGaWxlcyhlc19FUywgZ2dtbl9lc19FUyksXG4gICAgICAgIHRlc3RfVVBQRVIsXG4gICAgICB9XG4gICAgfVxuICB9XG59IFxuXG5cbmZ1bmN0aW9uIG1lcmdlRmlsZXMob3JpZ2luYWw6IFRyYW5zbGF0aW9uRmlsZSwgb3ZlcnJpZGVGaWxlOiBUcmFuc2xhdGlvbk92ZXJyaWRlRmlsZSB8IG51bGwpOiBUcmFuc2xhdGlvbkZpbGUge1xuICBpZiAob3ZlcnJpZGVGaWxlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsO1xuICB9XG5cbiAgY29uc3QgbmV3VGVtcGxhdGVzID0gT2JqZWN0LmFzc2lnbihvcmlnaW5hbC50ZW1wbGF0ZXMsIG51bGwsIHsgLi4ub3ZlcnJpZGVGaWxlLm92ZXJyaWRlcyB9KTtcbiAgb3JpZ2luYWwudGVtcGxhdGVzID0gbmV3VGVtcGxhdGVzO1xuXG4gIHJldHVybiBvcmlnaW5hbDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRyYW5zbGF0aW9ucyBmb3IgdGhlIGdpdmVuIHVzZXIgbGFuZ3VhZ2Ugc2V0dGluZ1xuICogXG4gKiBJJ20gdGhpbmtpbmcgb2YgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXMgd2l0aCBsZXNzIHR5cGluZywgYnV0IGF0IGxlYXN0XG4gKiB0aGlzIG1ldGhvZCBpcyBmdWxseSB0eXBlIHNhZmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uRm9yTGFuZ3VhZ2UoZmlsZXM6IFRyYW5zbGF0aW9uRmlsZXMsIGxhbmd1YWdlOiBUcmFuc2xhdGlvbkVudW0pIHtcbiAgc3dpdGNoIChmaWxlcy50eXBlKSB7XG4gICAgY2FzZSAoVHJhbnNsYXRpb25PcmcubXl3ZWxsKToge1xuICAgICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlICdlbl9BVSc6IHJldHVybiBmaWxlcy5lbl9BVTtcbiAgICAgICAgY2FzZSAnZW5fVVMnOiByZXR1cm4gZmlsZXMuZW5fVVM7XG4gICAgICAgIGNhc2UgJ2d1al9JTic6IHJldHVybiBmaWxlcy5ndWpfSU47XG4gICAgICAgIGNhc2UgJ2hpX0lOJzogcmV0dXJuIGZpbGVzLmhpX0lOO1xuICAgICAgICBjYXNlICd0ZXN0X1VQUEVSJzogcmV0dXJuIGZpbGVzLnRlc3RfVVBQRVI7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHdpdGggdHJhbnNsYXRpb25zLiBDb3VsZCBub3QgZmluZCB0cmFuc2xhdGlvbjogJHtsYW5ndWFnZX0gZm9yIE9yZzogJHtmaWxlcy50eXBlfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgKFRyYW5zbGF0aW9uT3JnLmdnbW4pOiB7XG4gICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2VuX0FVJzogcmV0dXJuIGZpbGVzLmVuX0FVO1xuICAgICAgICBjYXNlICd0ZXN0X1VQUEVSJzogcmV0dXJuIGZpbGVzLnRlc3RfVVBQRVI7XG4gICAgICAgIGNhc2UgJ2ZyX0ZSJzogcmV0dXJuIGZpbGVzLmZyX0ZSO1xuICAgICAgICBjYXNlICdlc19FUyc6IHJldHVybiBmaWxlcy5lc19FUztcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3Igd2l0aCB0cmFuc2xhdGlvbnMuIENvdWxkIG5vdCBmaW5kIHRyYW5zbGF0aW9uOiAke2xhbmd1YWdlfSBmb3IgT3JnOiAke2ZpbGVzLnR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUb29scyBmb3Igc2F2aW5nIGFuZCBwYXJzaW5nIHRyYW5zbGF0aW9ucyBhcyBqc29uXG4gKi9cbmV4cG9ydCBjb25zdCBmdW5jdGlvblJlcGxhY2VyID0gKG5hbWU6IGFueSwgdmFsOiBhbnkpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBlbnRpcmUgPSB2YWwudG9TdHJpbmcoKTtcbiAgICBjb25zdCBhcmcgPSBlbnRpcmUuc2xpY2UoZW50aXJlLmluZGV4T2YoXCIoXCIpICsgMSwgZW50aXJlLmluZGV4T2YoXCIpXCIpKTtcbiAgICBjb25zdCBib2R5ID0gZW50aXJlLnNsaWNlKGVudGlyZS5pbmRleE9mKFwie1wiKSArIDEsIGVudGlyZS5sYXN0SW5kZXhPZihcIn1cIikpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gICAgICBhcmd1bWVudHM6IGFyZyxcbiAgICAgIGJvZHksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cblxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9uUmV2aXZlciA9IChuYW1lOiBhbnksIHZhbDogYW55KSA9PiB7XG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbC50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbih2YWwuYXJndW1lbnRzLCB2YWwuYm9keSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGlvbkZyb21KU09OKGpzb25TdHJpbmc6IHN0cmluZyk6IFRyYW5zbGF0aW9uRmlsZXMge1xuICBjb25zdCBmaWxlczogVHJhbnNsYXRpb25GaWxlcyA9IEpTT04ucGFyc2UoanNvblN0cmluZywgZnVuY3Rpb25SZXZpdmVyKTtcbiAgcmV0dXJuIGZpbGVzXG59XG5cbmV4cG9ydCB7XG4gIFRyYW5zbGF0aW9uT3JnLFxuICBUcmFuc2xhdGlvbkZpbGVzLFxuICBUcmFuc2xhdGlvbkVudW0sXG4gIFRyYW5zbGF0aW9uRmlsZSxcbiAgVHJhbnNsYXRpb25PdmVycmlkZUZpbGUsXG59OyJdfQ==