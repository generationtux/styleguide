"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwoUpImgLeft = function TwoUpImgLeft(_ref) {
  var heading = _ref.heading,
      content = _ref.content,
      btnCtaText = _ref.btnCtaText,
      btnCtaUrl = _ref.btnCtaUrl,
      imgUrl = _ref.imgUrl;
  return _react2.default.createElement(
    "div",
    { className: "container buffer-xs-top-xl buffer-md-top-xxl buffer-xs-btm-xl buffer-md-btm-xxl " },
    _react2.default.createElement(
      "div",
      { className: "row align-vertical" },
      _react2.default.createElement(
        "div",
        { className: "col-sm-6 text-center" },
        _react2.default.createElement("img", {
          alt: "content",
          className: "shadow-level-4 img-responsive",
          src: imgUrl
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "col-sm-4 col-sm-offset-1" },
        heading && _react2.default.createElement(
          "h2",
          { className: "h3 pusher-xs-top-lg pusher-sm-top-md" },
          heading
        ),
        content && _react2.default.createElement(
          "p",
          null,
          content
        ),
        btnCtaText && _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { href: btnCtaUrl, className: "btn btn-primary" },
            btnCtaText
          )
        )
      )
    )
  );
};
exports.default = TwoUpImgLeft;