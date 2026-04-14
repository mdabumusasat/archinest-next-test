"use strict";
"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ServiceSectionFour;
var _react = _interopRequireWildcard(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _react2 = require("swiper/react");
var _modules = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var services = [{
  title: "Design Without Borders",
  desc: "Creating timeless spaces that connect people across nations, beyond cultural and geographical limits.",
  bg: "/assets/images/resource/service4-bg1.jpg"
}, {
  title: "International Expertise",
  desc: "Offering deep experience in architecture tailored to international standards and cultural contexts.",
  bg: "/assets/images/resource/service4-bg2.jpg"
}, {
  title: "Architecture Across Borders",
  desc: "Bridging cultures and communities through iconic architectural interior design projects.",
  bg: "/assets/images/resource/service4-bg1.jpg"
}, {
  title: "Global Vision",
  desc: "Delivering innovative architectural solutions with a vision that transcends boundaries and cultures.",
  bg: "/assets/images/resource/service4-bg2.jpg"
}, {
  title: "Design Without Borders",
  desc: "Creating timeless spaces that connect people across nations, beyond cultural and geographical limits.",
  bg: "/assets/images/resource/service4-bg1.jpg"
}, {
  title: "International Expertise",
  desc: "Offering deep experience in architecture tailored to international standards and cultural contexts.",
  bg: "/assets/images/resource/service4-bg2.jpg"
}];
function ServiceSectionFour() {
  var defaultBg = "/assets/images/resource/service4-bg1.jpg";
  var _useState = (0, _react.useState)("/assets/images/resource/service4-bg1.jpg"),
    _useState2 = _slicedToArray(_useState, 2),
    bgImage = _useState2[0],
    setBgImage = _useState2[1];
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "service-section-four pt-0 pb-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "outer-box",
    style: {
      backgroundImage: "url(".concat(bgImage, ")"),
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "all 0.5s ease"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title-style-two white"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "sub-title"
  }, "// Global Practice //"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "title text-reveal-anim"
  }, "Designing Tomorrow\u2019s Skylines, Creating Sustainable Cities for Generations to Come.")))), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    modules: [_modules.Navigation],
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev"
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 4
      }
    },
    className: "service-four-slider"
  }, services.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "service-block-four",
      onMouseEnter: function onMouseEnter() {
        return setBgImage(item.bg);
      },
      onMouseLeave: function onMouseLeave() {
        return setBgImage(defaultBg);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "content"
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "title"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/page-service-details"
    }, "International Expertise")), /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, "Offering deep experience in architecture tailored to international standards and cultural contexts.")), /*#__PURE__*/_react.default.createElement("div", {
      className: "overlay-content"
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "title"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/page-service-details"
    }, "International Expertise")), /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, "Bridging cultures and communities through iconic architectural interior design projects through worldwide collaborations."), /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-info"
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
      className: "icon",
      src: "/assets/images/icons/icon1.png",
      alt: ""
    }), "Global Reach, Timeless Design Excellence"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
      className: "icon",
      src: "/assets/images/icons/icon1.png",
      alt: ""
    }), "Global Practice, Local Expertise"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
      className: "icon",
      src: "/assets/images/icons/icon1.png",
      alt: ""
    }), "Designing Landmark Projects Worldwide")), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-box"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/page-service-details",
      className: "theme-btn btn-style-two"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "btn-title"
    }, "Read More"), /*#__PURE__*/_react.default.createElement("i", {
      className: "icon fa-light fa-arrow-right"
    })))))));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "arrow-box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "slider-prev mr-10"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-regular fa-arrow-left"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "slider-next"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-regular fa-arrow-right"
  })))));
}