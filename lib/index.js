"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.possibleTranslationsForOrg = possibleTranslationsForOrg;
exports.translationsForTranslationOrg = translationsForTranslationOrg;
exports.getTranslationForLanguage = getTranslationForLanguage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJwb3NzaWJsZVRyYW5zbGF0aW9uc0Zvck9yZyIsIm9yZ0lkIiwiVHJhbnNsYXRpb25PcmciLCJteXdlbGwiLCJUcmFuc2xhdGlvbkVudW0iLCJlbl9BVSIsImVuX1VTIiwiZ3VqX0lOIiwiaGlfSU4iLCJnZ21uIiwiZnJfRlIiLCJlc19FUyIsInRyYW5zbGF0aW9uc0ZvclRyYW5zbGF0aW9uT3JnIiwidHlwZSIsInRlc3RfVVBQRVIiLCJtZXJnZUZpbGVzIiwiZ2dtbl9lbl9BVSIsImdnbW5fZnJfRlIiLCJnZ21uX2VzX0VTIiwib3JpZ2luYWwiLCJvdmVycmlkZUZpbGUiLCJuZXdUZW1wbGF0ZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZW1wbGF0ZXMiLCJvdmVycmlkZXMiLCJnZXRUcmFuc2xhdGlvbkZvckxhbmd1YWdlIiwiZmlsZXMiLCJsYW5ndWFnZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7Ozs7O0FBR0E7OztBQUdPLFNBQVNBLDBCQUFULENBQW9DQyxLQUFwQyxFQUE4RTtBQUNuRixVQUFRQSxLQUFSO0FBQ0UsU0FBS0Msc0JBQWVDLE1BQXBCO0FBQTRCO0FBQzFCLGVBQU8sQ0FDTEMsdUJBQWdCQyxLQURYLEVBRUxELHVCQUFnQkUsS0FGWCxFQUdMRix1QkFBZ0JHLE1BSFgsRUFJTEgsdUJBQWdCSSxLQUpYLENBQVA7QUFRRDs7QUFDRCxTQUFLTixzQkFBZU8sSUFBcEI7QUFBMEI7QUFDeEIsZUFBTyxDQUNMTCx1QkFBZ0JDLEtBRFgsRUFFTDtBQUNBRCwrQkFBZ0JNLEtBSFgsRUFJTE4sdUJBQWdCTyxLQUpYLENBQVA7QUFNRDtBQWxCSDtBQW9CRDtBQUdEOzs7Ozs7Ozs7O0FBUVEsU0FBU0MsNkJBQVQsQ0FBdUNYLEtBQXZDLEVBQWdGO0FBQ3RGLFVBQVFBLEtBQVI7QUFDRSxTQUFLQyxzQkFBZUMsTUFBcEI7QUFBNEI7QUFDMUIsZUFBTztBQUNMVSxVQUFBQSxJQUFJLEVBQUVYLHNCQUFlQyxNQURoQjtBQUVMRSxVQUFBQSxLQUFLLEVBQUxBLFlBRks7QUFHTEMsVUFBQUEsS0FBSyxFQUFMQSxZQUhLO0FBSUxDLFVBQUFBLE1BQU0sRUFBTkEsY0FKSztBQUtMQyxVQUFBQSxLQUFLLEVBQUxBLFlBTEs7QUFNTE0sVUFBQUEsVUFBVSxFQUFWQTtBQU5LLFNBQVA7QUFRRDs7QUFFRCxTQUFLWixzQkFBZU8sSUFBcEI7QUFBMEI7QUFDeEIsZUFBTztBQUNMSSxVQUFBQSxJQUFJLEVBQUVYLHNCQUFlTyxJQURoQjtBQUVMSixVQUFBQSxLQUFLLEVBQUVVLFVBQVUsQ0FBQ1YsWUFBRCxFQUFRVyxrQkFBUixDQUZaO0FBR0xOLFVBQUFBLEtBQUssRUFBRUssVUFBVSxDQUFDTCxZQUFELEVBQVFPLGtCQUFSLENBSFo7QUFJTE4sVUFBQUEsS0FBSyxFQUFFSSxVQUFVLENBQUNKLFlBQUQsRUFBUU8sa0JBQVIsQ0FKWjtBQUtMSixVQUFBQSxVQUFVLEVBQVZBO0FBTEssU0FBUDtBQU9EO0FBcEJIO0FBc0JEOztBQUdELFNBQVNDLFVBQVQsQ0FBb0JJLFFBQXBCLEVBQStDQyxZQUEvQyxFQUE4RztBQUM1RyxNQUFJQSxZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDekIsV0FBT0QsUUFBUDtBQUNEOztBQUVELE1BQU1FLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNKLFFBQVEsQ0FBQ0ssU0FBdkIsRUFBa0MsSUFBbEMsb0JBQTZDSixZQUFZLENBQUNLLFNBQTFELEVBQXJCO0FBQ0FOLEVBQUFBLFFBQVEsQ0FBQ0ssU0FBVCxHQUFxQkgsWUFBckI7QUFFQSxTQUFPRixRQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTTyx5QkFBVCxDQUFtQ0MsS0FBbkMsRUFBNERDLFFBQTVELEVBQXVGO0FBQzVGLFVBQVFELEtBQUssQ0FBQ2QsSUFBZDtBQUNFLFNBQU1YLHNCQUFlQyxNQUFyQjtBQUE4QjtBQUM1QixnQkFBUXlCLFFBQVI7QUFDRSxlQUFLLE9BQUw7QUFBYyxtQkFBT0QsS0FBSyxDQUFDdEIsS0FBYjs7QUFDZCxlQUFLLE9BQUw7QUFBYyxtQkFBT3NCLEtBQUssQ0FBQ3JCLEtBQWI7O0FBQ2QsZUFBSyxRQUFMO0FBQWUsbUJBQU9xQixLQUFLLENBQUNwQixNQUFiOztBQUNmLGVBQUssT0FBTDtBQUFjLG1CQUFPb0IsS0FBSyxDQUFDbkIsS0FBYjs7QUFDZCxlQUFLLFlBQUw7QUFBbUIsbUJBQU9tQixLQUFLLENBQUNiLFVBQWI7O0FBQ25CO0FBQVM7QUFDUCxvQkFBTSxJQUFJZSxLQUFKLGdFQUFrRUQsUUFBbEUsdUJBQXVGRCxLQUFLLENBQUNkLElBQTdGLEVBQU47QUFDRDtBQVJIO0FBVUQ7O0FBQ0QsU0FBTVgsc0JBQWVPLElBQXJCO0FBQTRCO0FBQzFCLGdCQUFRbUIsUUFBUjtBQUNFLGVBQUssT0FBTDtBQUFjLG1CQUFPRCxLQUFLLENBQUN0QixLQUFiOztBQUNkLGVBQUssWUFBTDtBQUFtQixtQkFBT3NCLEtBQUssQ0FBQ2IsVUFBYjs7QUFDbkIsZUFBSyxPQUFMO0FBQWMsbUJBQU9hLEtBQUssQ0FBQ2pCLEtBQWI7O0FBQ2QsZUFBSyxPQUFMO0FBQWMsbUJBQU9pQixLQUFLLENBQUNoQixLQUFiOztBQUNkO0FBQVM7QUFDUCxvQkFBTSxJQUFJa0IsS0FBSixnRUFBa0VELFFBQWxFLHVCQUF1RkQsS0FBSyxDQUFDZCxJQUE3RixFQUFOO0FBQ0Q7QUFQSDtBQVNEO0FBdkJIO0FBeUJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25PcmcsIFRyYW5zbGF0aW9uRmlsZXMsIFRyYW5zbGF0aW9uRW51bSwgVHJhbnNsYXRpb25GaWxlLCBUcmFuc2xhdGlvbk92ZXJyaWRlRmlsZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmltcG9ydCB7ZW5fQVV9IGZyb20gJy4vY29tbW9uL2VuX0FVJztcbmltcG9ydCB7ZW5fVVN9IGZyb20gJy4vY29tbW9uL2VuX1VTJztcbmltcG9ydCB7Z3VqX0lOfSBmcm9tICcuL2NvbW1vbi9ndWpfSU4nO1xuaW1wb3J0IHtoaV9JTn0gZnJvbSAnLi9jb21tb24vaGlfSU4nO1xuaW1wb3J0IHt0ZXN0X1VQUEVSfSBmcm9tICcuL2NvbW1vbi90ZXN0X1VQUEVSJztcbmltcG9ydCB7ZnJfRlJ9IGZyb20gJy4vY29tbW9uL2ZyX0ZSJztcbmltcG9ydCB7ZXNfRVN9IGZyb20gJy4vY29tbW9uL2VzX0VTJztcblxuXG5pbXBvcnQgeyBnZ21uX2VuX0FVIH0gZnJvbSAnLi9nZ21uL2VuX0FVJztcbmltcG9ydCB7IGdnbW5fZnJfRlIgfSBmcm9tICcuL2dnbW4vZnJfRlInO1xuaW1wb3J0IHsgZ2dtbl9lc19FUyB9IGZyb20gJy4vZ2dtbi9lc19FUyc7XG5cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIHRoZSBwb3NzaWJsZSBUcmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gb3JnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3NzaWJsZVRyYW5zbGF0aW9uc0Zvck9yZyhvcmdJZDogVHJhbnNsYXRpb25PcmcpOiBUcmFuc2xhdGlvbkVudW1bXSB7XG4gIHN3aXRjaCAob3JnSWQpIHtcbiAgICBjYXNlIFRyYW5zbGF0aW9uT3JnLm15d2VsbDoge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgVHJhbnNsYXRpb25FbnVtLmVuX0FVLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZW5fVVMsXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5ndWpfSU4sXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5oaV9JTixcbiAgICAgICAgLy9UT0RPOiBob3cgdG8ga2VlcCBvbmx5IGluIGRldiwgYnV0IG5vdCBwcm9kdWN0aW9uP1xuICAgICAgICAvLyBUcmFuc2xhdGlvbkVudW0udGVzdF9VUFBFUixcbiAgICAgIF1cbiAgICB9XG4gICAgY2FzZSBUcmFuc2xhdGlvbk9yZy5nZ21uOiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZW5fQVUsXG4gICAgICAgIC8vIFRyYW5zbGF0aW9uRW51bS50ZXN0X1VQUEVSLFxuICAgICAgICBUcmFuc2xhdGlvbkVudW0uZnJfRlIsXG4gICAgICAgIFRyYW5zbGF0aW9uRW51bS5lc19FUyxcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHJvb3QgdHJhbnNsYXRpb25zIGZpbGUuIFxuICogXG4gKiBJbmNsdWRlIHRoaXMgdG8gZ2V0IHRoZSBtYWdpY2FsIHRyYW5zbGF0aW9ucyB3b3JraW5nLlxuICogXG4gKiBJbiB0aGlzIGNsYXNzLCB3ZSBwdWxsIGluIHRoZSBjb21tb24gdHJhbnNsYXRpb25zLCBhbmQgb3ZlcnJpZGUgYW55XG4gKiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBvcmdJZCBpZiB0aGV5IGV4aXN0LlxuICovXG4gZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0aW9uc0ZvclRyYW5zbGF0aW9uT3JnKG9yZ0lkOiBUcmFuc2xhdGlvbk9yZyk6IFRyYW5zbGF0aW9uRmlsZXMge1xuICBzd2l0Y2ggKG9yZ0lkKSB7XG4gICAgY2FzZSBUcmFuc2xhdGlvbk9yZy5teXdlbGw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRyYW5zbGF0aW9uT3JnLm15d2VsbCxcbiAgICAgICAgZW5fQVUsXG4gICAgICAgIGVuX1VTLFxuICAgICAgICBndWpfSU4sXG4gICAgICAgIGhpX0lOLFxuICAgICAgICB0ZXN0X1VQUEVSLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgVHJhbnNsYXRpb25PcmcuZ2dtbjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVHJhbnNsYXRpb25PcmcuZ2dtbixcbiAgICAgICAgZW5fQVU6IG1lcmdlRmlsZXMoZW5fQVUsIGdnbW5fZW5fQVUpLFxuICAgICAgICBmcl9GUjogbWVyZ2VGaWxlcyhmcl9GUiwgZ2dtbl9mcl9GUiksXG4gICAgICAgIGVzX0VTOiBtZXJnZUZpbGVzKGVzX0VTLCBnZ21uX2VzX0VTKSxcbiAgICAgICAgdGVzdF9VUFBFUixcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gXG5cblxuZnVuY3Rpb24gbWVyZ2VGaWxlcyhvcmlnaW5hbDogVHJhbnNsYXRpb25GaWxlLCBvdmVycmlkZUZpbGU6IFRyYW5zbGF0aW9uT3ZlcnJpZGVGaWxlIHwgbnVsbCk6IFRyYW5zbGF0aW9uRmlsZSB7XG4gIGlmIChvdmVycmlkZUZpbGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gb3JpZ2luYWw7XG4gIH1cblxuICBjb25zdCBuZXdUZW1wbGF0ZXMgPSBPYmplY3QuYXNzaWduKG9yaWdpbmFsLnRlbXBsYXRlcywgbnVsbCwgeyAuLi5vdmVycmlkZUZpbGUub3ZlcnJpZGVzIH0pO1xuICBvcmlnaW5hbC50ZW1wbGF0ZXMgPSBuZXdUZW1wbGF0ZXM7XG5cbiAgcmV0dXJuIG9yaWdpbmFsO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdHJhbnNsYXRpb25zIGZvciB0aGUgZ2l2ZW4gdXNlciBsYW5ndWFnZSBzZXR0aW5nXG4gKiBcbiAqIEknbSB0aGlua2luZyBvZiBhIGJldHRlciB3YXkgdG8gZG8gdGhpcyB3aXRoIGxlc3MgdHlwaW5nLCBidXQgYXQgbGVhc3RcbiAqIHRoaXMgbWV0aG9kIGlzIGZ1bGx5IHR5cGUgc2FmZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb25Gb3JMYW5ndWFnZShmaWxlczogVHJhbnNsYXRpb25GaWxlcywgbGFuZ3VhZ2U6IFRyYW5zbGF0aW9uRW51bSkge1xuICBzd2l0Y2ggKGZpbGVzLnR5cGUpIHtcbiAgICBjYXNlIChUcmFuc2xhdGlvbk9yZy5teXdlbGwpOiB7XG4gICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2VuX0FVJzogcmV0dXJuIGZpbGVzLmVuX0FVO1xuICAgICAgICBjYXNlICdlbl9VUyc6IHJldHVybiBmaWxlcy5lbl9VUztcbiAgICAgICAgY2FzZSAnZ3VqX0lOJzogcmV0dXJuIGZpbGVzLmd1al9JTjtcbiAgICAgICAgY2FzZSAnaGlfSU4nOiByZXR1cm4gZmlsZXMuaGlfSU47XG4gICAgICAgIGNhc2UgJ3Rlc3RfVVBQRVInOiByZXR1cm4gZmlsZXMudGVzdF9VUFBFUjtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3Igd2l0aCB0cmFuc2xhdGlvbnMuIENvdWxkIG5vdCBmaW5kIHRyYW5zbGF0aW9uOiAke2xhbmd1YWdlfSBmb3IgT3JnOiAke2ZpbGVzLnR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAoVHJhbnNsYXRpb25PcmcuZ2dtbik6IHtcbiAgICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSAnZW5fQVUnOiByZXR1cm4gZmlsZXMuZW5fQVU7XG4gICAgICAgIGNhc2UgJ3Rlc3RfVVBQRVInOiByZXR1cm4gZmlsZXMudGVzdF9VUFBFUjtcbiAgICAgICAgY2FzZSAnZnJfRlInOiByZXR1cm4gZmlsZXMuZnJfRlI7XG4gICAgICAgIGNhc2UgJ2VzX0VTJzogcmV0dXJuIGZpbGVzLmVzX0VTO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB3aXRoIHRyYW5zbGF0aW9ucy4gQ291bGQgbm90IGZpbmQgdHJhbnNsYXRpb246ICR7bGFuZ3VhZ2V9IGZvciBPcmc6ICR7ZmlsZXMudHlwZX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBUcmFuc2xhdGlvbk9yZyxcbiAgVHJhbnNsYXRpb25GaWxlcyxcbiAgVHJhbnNsYXRpb25FbnVtLFxuICBUcmFuc2xhdGlvbkZpbGUsXG4gIFRyYW5zbGF0aW9uT3ZlcnJpZGVGaWxlLFxufTsiXX0=