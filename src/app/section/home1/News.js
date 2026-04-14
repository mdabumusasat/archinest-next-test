"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NewsSection;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var articles = [{
  id: 1,
  title: "Sustainable Architecture: Building a Greener Future",
  description: "Discover eco-friendly design principles shaping sustainable architectural futures",
  image: "/assets/images/resource/news1-1.jpg",
  day: "12",
  month: "August"
}, {
  id: 2,
  title: "Sustainable Architecture: Building a Greener Future",
  description: "Discover eco-friendly design principles shaping sustainable architectural futures",
  image: "/assets/images/resource/news1-2.jpg",
  day: "12",
  month: "August"
}, {
  id: 3,
  title: "Sustainable Architecture: Building a Greener Future",
  description: "Discover eco-friendly design principles shaping sustainable architectural futures",
  image: "/assets/images/resource/news1-3.jpg",
  day: "12",
  month: "August"
}];
function NewsSection() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "news-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title-style-three text-center"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "sub-title"
  }, "// Our Latest Articles //"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "title text-reveal-anim"
  }, "Stay Inspired with Our Latest Articles on ", /*#__PURE__*/_react.default.createElement("br", null), "Architecture & Interiors"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Explore expert tips, design trends, and inspiring stories to elevate and transform your living spaces.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "row g-24"
  }, articles.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.id,
      className: "news-block col-xl-4 col-lg-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-block"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "image-box"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-box relative"
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
    }))), /*#__PURE__*/_react.default.createElement("span", {
      className: "date"
    }, /*#__PURE__*/_react.default.createElement("strong", null, item.day), /*#__PURE__*/_react.default.createElement("span", null, item.month)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "content-box"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "title"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details"
    }, item.title)), /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, item.description), /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details",
      className: "read-more"
    }, "Read More", /*#__PURE__*/_react.default.createElement("i", {
      className: "icon fa-solid fa-arrow-right"
    }))))));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-box text-center"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/news-grid",
    className: "theme-btn btn-style-one"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "View all Articles"), /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-light fa-arrow-right"
  }))))));
}