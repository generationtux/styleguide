"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroTwoUpImgLeft = function HeroTwoUpImgLeft(_ref) {
  var heading = _ref.heading,
      subHeading = _ref.subHeading,
      content = _ref.content,
      btnCtaText = _ref.btnCtaText,
      btnCtaUrl = _ref.btnCtaUrl,
      imgUrl = _ref.imgUrl;
  return _react2.default.createElement(
    "div",
    { className: "bg-gray-lighter" },
    _react2.default.createElement(
      "section",
      { className: " container-fluid bg-offset-base bg-offset-leftbottom-5-2 buffer-xs-top-lg buffer-md-top-xl buffer-xs-btm-lg buffer-sm-btm-xl buffer-lg-btm-xxl " },
      _react2.default.createElement(
        "div",
        { className: "row align-vertical" },
        _react2.default.createElement(
          "div",
          { className: "col-sm-8 col-md-5 col-lg-4 col-lg-offset-1" },
          _react2.default.createElement("img", {
            alt: "hero",
            className: "shadow-level-4 img-responsive",
            src: imgUrl
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "col-sm-12 col-md-7 col-lg-6 buffer-lg-left-xl" },
          _react2.default.createElement(
            "h1",
            { className: "domd" },
            heading && _react2.default.createElement(
              "div",
              { className: "h6 pusher-xs-top-lg pusher-sm-top-clear pusher-xs-btm-xs" },
              heading
            ),
            subHeading && subHeading
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
exports.default = HeroTwoUpImgLeft;