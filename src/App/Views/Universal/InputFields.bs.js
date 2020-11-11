// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Int$OptolithClient = require("../../../Data/Int.bs.js");

var roughCheck = /-?[0-9]*/g;

var strictCheck = /|0|-?[1-9][0-9]*/g;

function isRoughValid(param) {
  return roughCheck.test(param);
}

function isStrictValid(param) {
  return strictCheck.test(param);
}

function unsafeInputToInt(input) {
  if (input === "") {
    return 0;
  } else {
    return Int$OptolithClient.read(input);
  }
}

function make(value, onChange) {
  var match = React.useState(function () {
        return value;
      });
  var setInternalValue = match[1];
  var match$1 = React.useState(function () {
        return strictCheck.test(value);
      });
  var setValid = match$1[1];
  var handleChange = React.useCallback((function ($$event) {
          var newValue = $$event.target.value;
          if (!roughCheck.test(newValue)) {
            return ;
          }
          Curry._1(setInternalValue, (function (param) {
                  return newValue;
                }));
          var strictValid = strictCheck.test(newValue);
          Curry._1(setValid, (function (param) {
                  return strictValid;
                }));
          if (strictValid) {
            return Curry._1(onChange, newValue);
          }
          
        }), [onChange]);
  var handleBlur = React.useCallback((function (param) {
          Curry._1(setInternalValue, (function (param) {
                  return value;
                }));
          return Curry._1(setValid, (function (param) {
                        return true;
                      }));
        }), [value]);
  return React.createElement("input", {
              className: match$1[0] ? "" : "invalid",
              type: "number",
              value: match[0],
              onBlur: handleBlur,
              onChange: handleChange
            });
}

var Integer = {
  roughCheck: roughCheck,
  strictCheck: strictCheck,
  isRoughValid: isRoughValid,
  isStrictValid: isStrictValid,
  unsafeInputToInt: unsafeInputToInt,
  make: make
};

exports.Integer = Integer;
/* react Not a pure module */
