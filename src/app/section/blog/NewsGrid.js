"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var newsData = [{
  id: 1,
  title: "Blending Tradition With Modern Architecture",
  text: "Understand how modern design come together create timeless,",
  image: "/assets/images/resource/news1-1.jpg"
}, {
  id: 2,
  title: "Modern Interior Design Trends 2025",
  text: "Explore the latest interior innovations blending for modern living.",
  image: "/assets/images/resource/news1-2.jpg"
}, {
  id: 3,
  title: "Designing Spaces That Inspire Productivity",
  text: "Learn how architecture and interior design impact workplace efficiency,",
  image: "/assets/images/resource/news1-3.jpg"
}];
var NewsSection = function NewsSection() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "news-section-four"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row g-24"
  }, newsData.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "news-block-four col-lg-4 col-md-6",
      key: item.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-block"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "image-box"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/_react.default.createElement("figure", {
      className: "image"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: item.image,
      alt: item.title
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: item.image,
      alt: item.title
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "content-box"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "title"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details"
    }, item.title)), /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, item.text)), /*#__PURE__*/_react.default.createElement(_link.default, {
      className: "read-more",
      href: "/news-details"
    }, "Read More", " ", /*#__PURE__*/_react.default.createElement("i", {
      className: "icon fa fa-solid fa-arrow-right"
    })))));
  }))));
};
var _default = exports.default = NewsSection;