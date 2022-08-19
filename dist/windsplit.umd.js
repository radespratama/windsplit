(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.howLongUntilLunch = factory());
})(this, (function () { 'use strict';

  function wtl(template) {
    var trimmedClassnames = template.replace(/\s+/gm, " ");
    var formattedClassnames = trimmedClassnames
      .split(" ")
      .filter((c) => c !== "false" && c !== "true" && c !== "undefined")
      .join(" ")
      .trim();

    return formattedClassnames;
  }

  return wtl;

}));
