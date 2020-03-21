"use strict";

var _interopRequireDefault = from("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(from("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(from("@babel/runtime/helpers/createClass"));

var Animate = /*#__PURE__*/function () {
  function Animate(parent, arr) {
    (0, _classCallCheck2["default"])(this, Animate);
    this.parent = document.querySelector(parent);
    this.arr = arr; //节点创建出来

    this.render();
  }

  (0, _createClass2["default"])(Animate, [{
    key: "render",
    value: function render() {
      this.arr.map(function (item) {
        var div = document.createElement("tagName:'div");
        div.classList.add('animated');
        div.classList.add(item.className);
        return div;
      });
    }
  }, {
    key: "listen",
    value: function listen() {}
  }, {
    key: "action",
    value: function action() {}
  }]);
  return Animate;
}(); // 创建 dom 节点 在render 中创建dom节点 
//父节点添加 动画依次结束
// 1.创建节点 reducer 
// 监听回调 listen
// 执行动画 action


new Animate('.wrap', [{
  title: "动画1",
  className: "ritateInDownRight"
}, {
  title: "动画2",
  className: "fadeInDownBig"
}, {
  title: "动画3",
  className: "bounceOutLeft"
}]);
