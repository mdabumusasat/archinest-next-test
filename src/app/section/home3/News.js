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
  title: "Blending Tradition With Modern Architecture",
  text: "Understand how modern design come together create timeless,",
  image: "/assets/images/resource/news1-1.jpg"
}, {
  title: "Modern Interior Design Trends 2026",
  text: "Explore the latest interior innovations blending for modern living.",
  image: "/assets/images/resource/news1-2.jpg"
}, {
  title: "Designing Spaces That Inspire Productivity",
  text: "Learn how architecture and interior design impact workplace efficiency,",
  image: "/assets/images/resource/news1-3.jpg"
}];
var NewsSection = function NewsSection() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "news-section-four"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title-style-three text-left"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "sub-title"
  }, "// Our Latest Articles ///"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "title text-reveal-anim"
  }, "Latest Updates From The World ", /*#__PURE__*/_react.default.createElement("br", null), "of Architecture")), /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-right-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Stay updated with the latest architecture trends, & creative insights from industry experts worldwide."), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/news-grid",
    className: "theme-btn btn-style-one"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, " Read More"), /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-light fa-arrow-right"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row g-24"
  }, newsData.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "news-block-four col-xl-4 col-lg-6 col-md-6",
      key: index
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
      href: "/news-details",
      className: "read-more"
    }, "Read More", /*#__PURE__*/_react.default.createElement("i", {
      className: "icon fa fa-solid fa-arrow-right"
    })))));
  }))));
};
var _default = exports.default = NewsSection;