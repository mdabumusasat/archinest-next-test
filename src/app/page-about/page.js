"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metadata = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Head = require("../Head");
var _LayoutWrapper = _interopRequireDefault(require("../LayoutWrapper"));
var _PageTitle = _interopRequireDefault(require("../components/PageTitle"));
var _About = _interopRequireDefault(require("../section/home2/About"));
var _Funfact = _interopRequireDefault(require("../section/home1/Funfact"));
var _Service = _interopRequireDefault(require("../section/home1/Service2"));
var _Testimonial = _interopRequireDefault(require("../section/home2/Testimonial"));
var _Client = _interopRequireDefault(require("../section/home2/Client"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var metadata = exports.metadata = {
  title: "About Pages || ".concat(_Head.SITE_NAME)
};
var AboutPage = function AboutPage() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_LayoutWrapper.default, null, /*#__PURE__*/_react.default.createElement(_PageTitle.default, {
    pageName: "About Us"
  }), /*#__PURE__*/_react.default.createElement(_About.default, null), /*#__PURE__*/_react.default.createElement(_Funfact.default, null), /*#__PURE__*/_react.default.createElement(_Service.default, null), /*#__PURE__*/_react.default.createElement(_Testimonial.default, null), /*#__PURE__*/_react.default.createElement(_Client.default, null)));
};
var _default = exports.default = AboutPage;