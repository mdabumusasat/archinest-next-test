"use strict";
"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _NavLinks = _interopRequireDefault(require("../NavLinks"));
var _MobileMenu = _interopRequireDefault(require("../MobileMenu"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Header = function Header(_ref) {
  var handleOpen = _ref.handleOpen,
    handleRemove = _ref.handleRemove,
    handleRemove2 = _ref.handleRemove2,
    scroll = _ref.scroll;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSearchActive = _useState2[0],
    setIsSearchActive = _useState2[1];
  var handleToggle = function handleToggle() {
    setIsSearchActive(!isSearchActive);
  };
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "main-header header-style-one ".concat(scroll ? "fixed-header" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "outer-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-top"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/page-contact"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-regular fa-clock"
  }), "archinest@gmail.com"))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-regular fa-envelope"
  }), "Call Us On (252) 555-0126")), /*#__PURE__*/_react.default.createElement("li", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/page-contact"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-regular fa-location-dot"
  }), "Opening Hours: 10:00 to 07:00"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-lower anim-fade-move",
    "data-delay": "0.25"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-lower"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/logo.png",
    alt: "Logo"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-outer"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "nav main-menu mx-auto"
  }, /*#__PURE__*/_react.default.createElement(_NavLinks.default, {
    extraClassName: "main-menu-list"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ui-btn search-btn",
    onClick: handleToggle
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fal fa-search"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#",
    className: "shop-cart"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fa-regular fa-cart-shopping"
  }), /*#__PURE__*/_react.default.createElement("span", null, "0")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/page-contact",
    className: "theme-btn btn-style-one d-none d-md-flex"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Get A Quote!")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "social-link"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-brands fa-facebook"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-brands fa-instagram"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-regular fa-x"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-link-slash"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mobile-nav-toggler",
    onClick: handleOpen
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fa-solid fa-bars-staggered"
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mobile-menu"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-backdrop",
    onClick: function onClick() {
      handleRemove();
      handleRemove2();
    }
  }), /*#__PURE__*/_react.default.createElement("nav", {
    className: "menu-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upper-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-logo"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/logo-2.png",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "close-btn",
    onClick: function onClick() {
      handleRemove();
      handleRemove2();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fa fa-times"
  }))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "navigation clearfix"
  }, /*#__PURE__*/_react.default.createElement(_MobileMenu.default, null)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "contact-list-one"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fal fa-envelope"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "title"
  }, "Send Email"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, "alma.lawson@example.com")))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "social-links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fab fa-twitter"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fab fa-facebook-f"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fab fa-pinterest-p"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fab fa-vimeo-v"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-popup ".concat(isSearchActive ? "active" : "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "search-back-drop",
    onClick: handleToggle
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "close-search",
    onClick: handleToggle
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fa fa-times"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-inner"
  }, /*#__PURE__*/_react.default.createElement("form", {
    method: "post",
    action: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    name: "search-field",
    placeholder: "Search..."
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-search"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "sticky-header ".concat(scroll ? "fixed-header animated slideInDown" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/logo.png",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-outer"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "main-menu"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-collapse show collapse clearfix"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navigation clearfix"
  }, /*#__PURE__*/_react.default.createElement(_NavLinks.default, {
    extraClassName: "main-menu-list"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mobile-nav-toggler",
    onClick: handleOpen
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon fa-solid fa-bars-staggered"
  })))))));
};
var _default = exports.default = Header;