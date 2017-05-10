"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroCarouselSlide = function HeroCarouselSlide(_ref) {
  var heading = _ref.heading,
      subHeading = _ref.subHeading,
      btnCtaText = _ref.btnCtaText,
      btnCtaUrl = _ref.btnCtaUrl,
      imgUrl = _ref.imgUrl,
      imgCtaText = _ref.imgCtaText,
      imgCtaUrl = _ref.imgCtaUrl,
      content = _ref.content;
  return _react2.default.createElement(
    "div",
    { className: "container container-callout" },
    _react2.default.createElement(
      "div",
      { className: "row" },
      _react2.default.createElement(
        "div",
        { className: "col-sm-4 col-sm-push-1 lift-1" },
        heading && _react2.default.createElement(
          "div",
          { className: "h6 pusher-xs-btm-sm" },
          heading
        ),
        subHeading && _react2.default.createElement(
          "h1",
          { className: "domd pusher-xs-top-md pusher-xs-btm-md pusher-sm-btm-lg" },
          subHeading
        ),
        (content || btnCtaText) && _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("hr", { className: "hr-small" }),
          content && _react2.default.createElement(
            "p",
            null,
            content
          )
        ),
        btnCtaText && _react2.default.createElement(
          "a",
          {
            className: "btn btn-hollow-primary pusher-xs-btm-lg",
            href: btnCtaUrl || '/',
            target: "_blank",
            rel: "noopener noreferrer"
          },
          btnCtaText
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col-sm-8" },
        _react2.default.createElement("img", {
          className: "img-responsive",
          alt: "hero",
          src: imgUrl
        }),
        imgCtaText && _react2.default.createElement(
          "a",
          { className: "btn btn-link pusher-xs-btm-lg", href: imgCtaUrl || '/' },
          imgCtaText
        )
      )
    )
  );
};
exports.default = HeroCarouselSlide;