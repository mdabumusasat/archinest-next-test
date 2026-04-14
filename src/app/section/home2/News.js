"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NewsSectionTwo;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var mainPost = {
  id: 1,
  title: "Top Interior Design Trends to Transform Your Home in 2026",
  image: "/assets/images/resource/news2-1.jpg",
  description: "Explore innovative design ideas, color palettes, and layouts to modernize your living spaces."
};
var sidePosts = [{
  id: 2,
  title: "How Modern Architecture Living Spaces",
  image: "/assets/images/resource/news3-1.jpg",
  description: "Learn how contemporary architecture blends functionality, sustainability in city environments."
}, {
  id: 3,
  title: "How Modern Architecture Living Spaces",
  image: "/assets/images/resource/news3-2.jpg",
  description: "Learn how contemporary architecture blends functionality, sustainability in city environments."
}];
function NewsSectionTwo() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "news-section-two"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title-style-three"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "sub-title"
  }, "// Our Latest Articles //"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "title text-reveal-anim"
  }, "Exploring Timeless Architecture & Modern Innovation")), /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-right-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Discover inspiring stories, design trends, innovations shaping modern architecture and timeless interiors."), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/news-grid",
    className: "theme-btn btn-style-one"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "View All Articles"), /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-light fa-arrow-right"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row g-24"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-6 mb-4 mb-xl-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "news-block-two"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-block mb-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/news-details"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: mainPost.image,
    alt: mainPost.title
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: mainPost.image,
    alt: mainPost.title
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/news-details"
  }, mainPost.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, mainPost.description), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/news-details",
    className: "read-more"
  }, "Read More", " ", /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fa fa-solid fa-arrow-right"
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, sidePosts.map(function (post, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: post.id,
      className: "col-xl-12 col-lg-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "news-block-three ".concat(index === sidePosts.length - 1 ? "mb-0" : "")
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
      src: post.image,
      alt: post.title
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: post.image,
      alt: post.title
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "content-box"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "title"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details"
    }, post.title)), /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, post.description), /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details",
      className: "read-more"
    }, "Read More", " ", /*#__PURE__*/_react.default.createElement("i", {
      className: "icon fa fa-solid fa-arrow-right"
    })))))));
  }))))));
}