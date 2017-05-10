"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroNoImg = function HeroNoImg(_ref) {
  var heading = _ref.heading,
      subHeading = _ref.subHeading,
      content = _ref.content,
      btnCtaText = _ref.btnCtaText,
      btnCtaUrl = _ref.btnCtaUrl;
  return _react2.default.createElement(
    "div",
    { className: "bg-gray-lighter" },
    _react2.default.createElement(
      "section",
      { className: " container buffer-xs-top-lg buffer-md-top-xl buffer-xs-btm-xl buffer-sm-btm-xl buffer-lg-btm-xxl " },
      _react2.default.createElement(
        "div",
        { className: "row align-vertical" },
        _react2.default.createElement(
          "div",
          { className: "col-sm-11 col-sm-offset-1 col-md-8" },
          _react2.default.createElement(
            "h1",
            null,
            heading && _react2.default.createElement(
              "div",
              { className: "h6 pusher-xs-top-lg pusher-sm-top-clear pusher-xs-btm-xs" },
              heading
            ),
            subHeading && _react2.default.createElement(
              "div",
              { className: "h1 domd" },
              subHeading
            )
          ),
          content && _react2.default.createElement(
            "p",
            { className: "pusher-xs-top-md" },
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
    )
  );
};
exports.default = HeroNoImg;