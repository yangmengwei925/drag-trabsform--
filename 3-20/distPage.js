"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Person1 = /*#__PURE__*/function () {
  function Person1(props) {
    (0, _classCallCheck2["default"])(this, Person1);
    var name = props.name,
        like = props.like;
    this.name = name;
    this.like = like;
  } // 方法


  (0, _createClass2["default"])(Person1, [{
    key: "say",
    value: function say() {
      console.log("".concat(this.name, " like ").concat(this.like));
    }
  }]);
  return Person1;
}(); // 调用方法


new Person1().say();
