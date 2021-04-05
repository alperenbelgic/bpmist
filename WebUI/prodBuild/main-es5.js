(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+y6Y":
    /*!*********************************************************************!*\
      !*** ./src/app/common/Models/Responsible/ResponsibleVisualState.ts ***!
      \*********************************************************************/

    /*! exports provided: ResponsibleVisualState */

    /***/
    function y6Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResponsibleVisualState", function () {
        return ResponsibleVisualState;
      });

      var ResponsibleVisualState = /*#__PURE__*/function () {
        function ResponsibleVisualState(responsible) {
          _classCallCheck(this, ResponsibleVisualState);

          this.responsible = responsible;
          this.showAdvancedOptions = false;
          this.groupTypeName = 'group';
          this.userTypeName = 'user';
          this.groupListTypeName = 'groupList';
          this.userListTypeName = 'userList';
          this.groupFromFieldTypeName = 'groupFromField';
          this.userFromFieldTypeName = 'userFromField';
          this.groupListFromFieldTypeName = 'groupListFromField';
          this.userListFromFieldTypeName = 'userListFromField';
        }

        _createClass(ResponsibleVisualState, [{
          key: "isTypeGroup",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.responsible) === null || _a === void 0 ? void 0 : _a.responsibleType) === null || _b === void 0 ? void 0 : _b.code) == this.groupTypeName;
          }
        }, {
          key: "isTypeUser",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.responsible) === null || _a === void 0 ? void 0 : _a.responsibleType) === null || _b === void 0 ? void 0 : _b.code) == this.userTypeName;
          }
        }, {
          key: "isTypeGroupList",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.responsible) === null || _a === void 0 ? void 0 : _a.responsibleType) === null || _b === void 0 ? void 0 : _b.code) == this.groupListTypeName;
          }
        }, {
          key: "isTypeUserList",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.responsible) === null || _a === void 0 ? void 0 : _a.responsibleType) === null || _b === void 0 ? void 0 : _b.code) == this.userListTypeName;
          }
        }, {
          key: "isTypeGroupFromField",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.responsible) === null || _a === void 0 ? void 0 : _a.responsibleType) === null || _b === void 0 ? void 0 : _b.code) == this.groupFromFieldTypeName;
          }
        }, {
          key: "isTypeUserFromField",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.responsible) === null || _a === void 0 ? void 0 : _a.responsibleType) === null || _b === void 0 ? void 0 : _b.code) == this.userFromFieldTypeName;
          }
        }, {
          key: "isTypeGroupListFromField",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.responsible) === null || _a === void 0 ? void 0 : _a.responsibleType) === null || _b === void 0 ? void 0 : _b.code) == this.groupListFromFieldTypeName;
          }
        }, {
          key: "isTypeUserListFromField",
          get: function get() {
            var _a;

            return ((_a = this.responsible.responsibleType) === null || _a === void 0 ? void 0 : _a.code) == this.userListFromFieldTypeName;
          }
        }, {
          key: "show_ShowHideAdvancedOptions",
          get: function get() {
            return this.isTypeGroup || this.isTypeUser;
          }
        }, {
          key: "showGroupAssignOptions",
          get: function get() {
            if (this.isTypeGroup && this.responsible.group != null) {
              return true;
            }

            if (this.isTypeGroupList && this.responsible.groups.length > 0) {
              return true;
            }

            if (this.isTypeGroupFromField && this.responsible.groupField != null) {
              return true;
            }

            if (this.isTypeGroupListFromField && this.responsible.groupFieldList.length > 0) {
              return true;
            }

            return false;
          }
        }]);

        return ResponsibleVisualState;
      }();
      /***/

    },

    /***/
    "/qon":
    /*!*********************************************!*\
      !*** ./src/app/services/Auth/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function qon(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivateChild",
          value: function canActivateChild(childRoute, state) {
            return this.canActivate(childRoute, state);
          }
        }, {
          key: "canActivate",
          value: function canActivate(next, state) {
            if (state.url === '/Login' || state.url === '/PrivacyPolicy' || state.url === '/ForgotPassword' || state.url.indexOf('/Register/') === 0 || state.url.indexOf('/SetupNewPassword/') === 0) {
              // clean auth code
              return true;
            }

            var userId = localStorage.getItem('temp_user_id');

            if (['9296A486-5D25-4A40-97BA-F67CB6FBBBCC', '208DDB53-FDF0-41C8-A2F1-535E975CED22', '83B203D7-2030-4788-BE40-CB153563A979', 'C06960E7-203F-4265-85BA-A0B59863B82D'].some(function (i) {
              return i === userId;
            })) {
              return true;
            }

            this.router.navigate(['/Login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Alperen\Documents\projects\bpmist_web_branch\bpmist\WebUI\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0dXe":
    /*!********************************************************!*\
      !*** ./src/app/common/Models/ProcessItems/StepItem.ts ***!
      \********************************************************/

    /*! exports provided: StepItem */

    /***/
    function dXe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepItem", function () {
        return StepItem;
      });
      /* harmony import */


      var _ProcessItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ProcessItem */
      "ZS8O");
      /* harmony import */


      var _StepItemVisualState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./StepItemVisualState */
      "aoop");
      /* harmony import */


      var _Responsible_Responsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Responsible/Responsible */
      "DE2k");

      var StepItem = /*#__PURE__*/function (_ProcessItem__WEBPACK) {
        _inherits(StepItem, _ProcessItem__WEBPACK);

        var _super = _createSuper(StepItem);

        function StepItem(id, justCreatedOnInterface) {
          var _this;

          var retrievedFromServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var stepName = arguments.length > 3 ? arguments[3] : undefined;
          var topPx = arguments.length > 4 ? arguments[4] : undefined;
          var leftPx = arguments.length > 5 ? arguments[5] : undefined;
          var defaultResponsibleType = arguments.length > 6 ? arguments[6] : undefined;
          var defaultGroupAssignOption = arguments.length > 7 ? arguments[7] : undefined;

          _classCallCheck(this, StepItem);

          _this = _super.call(this, id, justCreatedOnInterface, retrievedFromServer, topPx, leftPx, stepName);
          _this.justCreatedOnInterface = justCreatedOnInterface;
          _this.fieldsInStep = [];
          _this.responsible = new _Responsible_Responsible__WEBPACK_IMPORTED_MODULE_2__["Responsible"](defaultResponsibleType, null, defaultGroupAssignOption);
          _this._visualState = new _StepItemVisualState__WEBPACK_IMPORTED_MODULE_1__["StepItemVisualState"](_assertThisInitialized(_this));
          return _this;
        }

        _createClass(StepItem, [{
          key: "visualState",
          get: function get() {
            return this._visualState;
          }
        }]);

        return StepItem;
      }(_ProcessItem__WEBPACK_IMPORTED_MODULE_0__["ProcessItem"]);
      /***/

    },

    /***/
    "3KHD":
    /*!****************************************************!*\
      !*** ./src/app/common/Models/ProcessItems/Link.ts ***!
      \****************************************************/

    /*! exports provided: Link */

    /***/
    function KHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Link", function () {
        return Link;
      });

      var Link = /*#__PURE__*/function () {
        function Link(init) {
          _classCallCheck(this, Link);

          this.actionName = '';
          Object.assign(this, init);
        }

        _createClass(Link, [{
          key: "color",
          get: function get() {
            var x1 = this.startItem.leftPx;
            var x2 = this.endItem.leftPx;
            return x2 > x1 ? 'green' : 'indianred'; // TODO: returning value should be static. it should be calculated in each relevant change.
            // return 'green';
          }
        }]);

        return Link;
      }();
      /***/

    },

    /***/
    "4X+j":
    /*!*******************************************************!*\
      !*** ./src/app/common/Pipes/custom-date-time.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: CustomDateTimePipe, CustomDatePipe */

    /***/
    function XJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDateTimePipe", function () {
        return CustomDateTimePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function () {
        return CustomDatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomDateTimePipe = /*#__PURE__*/function () {
        function CustomDateTimePipe() {
          _classCallCheck(this, CustomDateTimePipe);
        }

        _createClass(CustomDateTimePipe, [{
          key: "transform",
          value: function transform(date) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'long';

            if (date == null) {
              return '';
            } // later on, if us will be introduced, we can make a check maybe from user's profile or browser
            // and, use en-US for those users.


            date = new Date(date); // if orginal type was a string

            return date.toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }) + ', ' + date.toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit'
            });
          }
        }]);

        return CustomDateTimePipe;
      }();

      CustomDateTimePipe.ɵfac = function CustomDateTimePipe_Factory(t) {
        return new (t || CustomDateTimePipe)();
      };

      CustomDateTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "_dateTime",
        type: CustomDateTimePipe,
        pure: true
      });

      var CustomDatePipe = /*#__PURE__*/function () {
        function CustomDatePipe() {
          _classCallCheck(this, CustomDatePipe);
        }

        _createClass(CustomDatePipe, [{
          key: "transform",
          value: function transform(date) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'long';

            if (date == null) {
              return '';
            } // later on, if us will be introduced, we can make a check maybe from user's profile or browser
            // and, use en-US for those users.


            date = new Date(date); // if orginal type was a string

            return date.toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
          }
        }]);

        return CustomDatePipe;
      }();

      CustomDatePipe.ɵfac = function CustomDatePipe_Factory(t) {
        return new (t || CustomDatePipe)();
      };

      CustomDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "_date",
        type: CustomDatePipe,
        pure: true
      });
      /***/
    },

    /***/
    "4Zj7":
    /*!*************************************************************!*\
      !*** ./src/app/components/left-menu/left-menu.component.ts ***!
      \*************************************************************/

    /*! exports provided: LeftMenuComponent */

    /***/
    function Zj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function () {
        return LeftMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/Auth/auth.service */
      "rgqs");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var _c0 = function _c0() {
        return ["/"];
      };

      var _c1 = function _c1() {
        return ["/MyInbox"];
      };

      var _c2 = function _c2() {
        return ["/MyGroupsInbox"];
      };

      function LeftMenuComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New flow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "My Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Group Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      }

      var LeftMenuComponent = /*#__PURE__*/function () {
        function LeftMenuComponent(authService) {
          _classCallCheck(this, LeftMenuComponent);

          this.isLoggedIn$ = authService.isLoggedIn;
        }

        _createClass(LeftMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LeftMenuComponent;
      }();

      LeftMenuComponent.ɵfac = function LeftMenuComponent_Factory(t) {
        return new (t || LeftMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      LeftMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LeftMenuComponent,
        selectors: [["app-left-menu"]],
        decls: 2,
        vars: 3,
        consts: [["class", "left-menu-wrapper", 4, "ngIf"], [1, "left-menu-wrapper"], ["src", "/assets/images/logo.png", 1, "image"], [3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "menu-icon"], [1, "far", "fa-plus-square"], [1, "menu-text"], [1, "fas", "fa-tasks"], [1, "fas", "fa-users"]],
        template: function LeftMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeftMenuComponent_div_0_Template, 20, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isLoggedIn$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [".left-menu-wrapper[_ngcontent-%COMP%] {\r\n  background-color: #003b31;\r\n  height: 100vh;\r\n  overflow-y: auto;\r\n  width: 300px;\r\n}\r\n\r\n.left-menu-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 24px;\r\n  text-decoration: none;\r\n}\r\n\r\n.menu-icon[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  width: 44px;\r\n  text-align: center;\r\n}\r\n\r\n.menu-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 34px;\r\n}\r\n\r\n.menu-text[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  \r\n  text-align: center;\r\n\r\n  \r\n  font-family: \"Baloo 2\", cursive;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  margin-bottom: 28px;\r\n  margin-top: 14px;\r\n  transform: translateX(-10px);\r\n  margin-left: 59px;\r\n  height: 185px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsaURBQWlEO0VBQ2pELCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsYUFBYTtBQUNmIiwiZmlsZSI6ImxlZnQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtbWVudS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYjMxO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LW1lbnUtd3JhcHBlciBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuXHJcbi5tZW51LXRleHQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICAvKiB3aWR0aDogMjhweDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC8qIGZvbnQtZmFtaWx5OiBcIkF2ZXJpYSBHcnVlc2EgTGlicmVcIiwgY3Vyc2l2ZTsgKi9cclxuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gIG1hcmdpbi1sZWZ0OiA1OXB4O1xyXG4gIGhlaWdodDogMTg1cHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "5NbK":
    /*!***************************************************!*\
      !*** ./src/app/common/Models/Responsible/User.ts ***!
      \***************************************************/

    /*! exports provided: User */

    /***/
    function NbK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User(userName, userId) {
        _classCallCheck(this, User);

        this.userName = userName;
        this.userId = userId;
      };
      /***/

    },

    /***/
    "6Yjd":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/components/process-item-settings-components/field-definition-editor/field-definition-editor.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: FieldDefinitionEditorComponent */

    /***/
    function Yjd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldDefinitionEditorComponent", function () {
        return FieldDefinitionEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-dropdowns */
      "jcQU");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      function FieldDefinitionEditorComponent_form_0_div_14_mat_selection_list_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FieldDefinitionEditorComponent_form_0_div_14_mat_selection_list_6_Template_mat_selection_list_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r6.fieldInStep.isRequired = $event.option.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Can be left empty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Value required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("selected", !ctx_r5.fieldInStep.isRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("selected", ctx_r5.fieldInStep.isRequired);
        }
      }

      function FieldDefinitionEditorComponent_form_0_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-selection-list", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FieldDefinitionEditorComponent_form_0_div_14_Template_mat_selection_list_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.fieldInStep.readOnly = $event.option.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Editable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Readonly ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FieldDefinitionEditorComponent_form_0_div_14_mat_selection_list_6_Template, 5, 5, "mat-selection-list", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("selected", !ctx_r3.fieldInStep.readOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("selected", ctx_r3.fieldInStep.readOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.fieldInStep.readOnly);
        }
      }

      function FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_mat_form_field_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Minimum value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_mat_form_field_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r15.fieldInStep.field.numericFieldSettings.minValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "minValue-", ctx_r13.fieldInStep.field.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.fieldInStep.field.numericFieldSettings.minValue);
        }
      }

      function FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_mat_form_field_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Maximum value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_mat_form_field_8_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r17.fieldInStep.field.numericFieldSettings.maxValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "maxValue-", ctx_r14.fieldInStep.field.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.fieldInStep.field.numericFieldSettings.maxValue);
        }
      }

      function FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_Template_mat_checkbox_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r19.fieldInStep.field.numericFieldSettings.hasMinValueRestriction = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Set Minimum Value? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_mat_form_field_4_Template, 4, 2, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_Template_mat_checkbox_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r21.fieldInStep.field.numericFieldSettings.hasMaxValueRestriction = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Set Maximum Value? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_mat_form_field_8_Template, 4, 2, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "hasMinValueRestriction-", ctx_r10.fieldInStep.field.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.fieldInStep.field.numericFieldSettings.hasMinValueRestriction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.fieldInStep.field.numericFieldSettings.hasMinValueRestriction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "hasMaxValueRestriction-", ctx_r10.fieldInStep.field.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.fieldInStep.field.numericFieldSettings.hasMaxValueRestriction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.fieldInStep.field.numericFieldSettings.hasMaxValueRestriction);
        }
      }

      function FieldDefinitionEditorComponent_form_0_ng_container_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " text settings: multiline, max character, min character ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FieldDefinitionEditorComponent_form_0_ng_container_15_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-selection-list", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FieldDefinitionEditorComponent_form_0_ng_container_15_div_3_Template_mat_selection_list_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r22.fieldInStep.field.generalFieldSettings.multipleValue = $event.option.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Single item selection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Multiple items selection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("selected", !ctx_r12.fieldInStep.field.generalFieldSettings.multipleValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("selected", ctx_r12.fieldInStep.field.generalFieldSettings.multipleValue);
        }
      }

      function FieldDefinitionEditorComponent_form_0_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDefinitionEditorComponent_form_0_ng_container_15_div_1_Template, 9, 6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FieldDefinitionEditorComponent_form_0_ng_container_15_div_2_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldDefinitionEditorComponent_form_0_ng_container_15_div_3_Template, 6, 5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fieldInStep.field.fieldType.code == "numeric");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fieldInStep.field.fieldType.code === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fieldInStep.field.fieldType.code === "user" || ctx_r4.fieldInStep.field.fieldType.code === "group");
        }
      }

      var _c0 = function _c0() {
        return {
          value: "code",
          text: "name"
        };
      };

      function FieldDefinitionEditorComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "* This field is used in multiple steps and these settings will be shared acrross steps. (show this only if there are multiple editiable uses of this field accross steps)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Field Editor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Field Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDefinitionEditorComponent_form_0_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.fieldInStep.field.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ejs-dropdownlist", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FieldDefinitionEditorComponent_form_0_Template_ejs_dropdownlist_change_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.fieldInStep.field.fieldType = $event.itemData;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FieldDefinitionEditorComponent_form_0_div_14_Template, 7, 6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FieldDefinitionEditorComponent_form_0_ng_container_15_Template, 4, 3, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "name-", ctx_r0.fieldInStep.field.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.fieldInStep.field.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "fieldType-", ctx_r0.fieldInStep.field.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.fieldTypes)("ngModel", ctx_r0.fieldInStep == null ? null : ctx_r0.fieldInStep.field == null ? null : ctx_r0.fieldInStep.field.fieldType == null ? null : ctx_r0.fieldInStep.field.fieldType.code)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fieldInStep.field.fieldType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fieldInStep.field.fieldType);
        }
      } // import { Input } from '@syncfusion/ej2-angular-inputs/src';


      var FieldDefinitionEditorComponent = /*#__PURE__*/function () {
        function FieldDefinitionEditorComponent() {
          _classCallCheck(this, FieldDefinitionEditorComponent);
        }

        _createClass(FieldDefinitionEditorComponent, [{
          key: "fieldTypes",
          get: function get() {
            return this._fieldTypes;
          },
          set: function set(value) {
            this._fieldTypes = value;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "show",
          value: function show(fieldInStep) {
            this.fieldInStep = fieldInStep;
          }
        }, {
          key: "hide",
          value: function hide() {
            this.fieldInStep = null;
          }
        }]);

        return FieldDefinitionEditorComponent;
      }();

      FieldDefinitionEditorComponent.ɵfac = function FieldDefinitionEditorComponent_Factory(t) {
        return new (t || FieldDefinitionEditorComponent)();
      };

      FieldDefinitionEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FieldDefinitionEditorComponent,
        selectors: [["app-field-definition-editor"]],
        inputs: {
          fieldInStep: "fieldInStep",
          fieldTypes: "fieldTypes"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], ["fieldsForm", "ngForm"], ["fxLayout", "column"], [1, "field-edit-title"], ["matTooltip", "Settings for fields of the form. ", 1, "fas", "fa-info-circle"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "name", "ngModelChange"], ["input", ""], ["placeholder", "Field Type", "cssClass", "e-outline", "floatLabelType", "Always", 3, "name", "dataSource", "ngModel", "fields", "change"], ["fxLayout", "column", 4, "ngIf"], [4, "ngIf"], [1, "detailed-settings-item-wrapper", 3, "multiple", "selectionChange"], [3, "value", "selected"], ["class", "detailed-settings-item-wrapper", 3, "multiple", "selectionChange", 4, "ngIf"], ["class", "detailed-settings-item-wrapper", 4, "ngIf"], ["fxLayout", "column", 1, "detailed-settings-item"], ["color", "primary", 1, "detailed-settings-item-wrapper", 3, "ngModel", "name", "ngModelChange"], ["appearance", "outline", 4, "ngIf"], ["matInput", "", "type", "number", 3, "ngModel", "name", "ngModelChange"], [1, "detailed-settings-item-wrapper"], [3, "multiple", "selectionChange"]],
        template: function FieldDefinitionEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FieldDefinitionEditorComponent_form_0_Template, 16, 9, "form", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fieldInStep && ctx.fieldTypes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownListComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 10px;\r\n}\r\n\r\n.field-edit-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.detailed-settings-item-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 22px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImZpZWxkLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZpZWxkLWVkaXQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGV0YWlsZWQtc2V0dGluZ3MtaXRlbS13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "6pm4":
    /*!****************************************************!*\
      !*** ./src/app/services/Web/web.service.adress.ts ***!
      \****************************************************/

    /*! exports provided: WebServiceAddress */

    /***/
    function pm4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebServiceAddress", function () {
        return WebServiceAddress;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WebServiceAddress = /*#__PURE__*/function () {
        function WebServiceAddress() {
          _classCallCheck(this, WebServiceAddress);
        }

        _createClass(WebServiceAddress, [{
          key: "get",
          value: function get() {
            if (location.hostname === 'localhost') {
              return 'https://localhost:5001/api';
            } else {
              return '/api';
            }
          }
        }]);

        return WebServiceAddress;
      }();

      WebServiceAddress.ɵfac = function WebServiceAddress_Factory(t) {
        return new (t || WebServiceAddress)();
      };

      WebServiceAddress.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WebServiceAddress,
        factory: WebServiceAddress.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BG+K":
    /*!***********************************************************************!*\
      !*** ./src/app/common/Directives/click-stop-propagation.directive.ts ***!
      \***********************************************************************/

    /*! exports provided: ClickStopPropagationDirective */

    /***/
    function BGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function () {
        return ClickStopPropagationDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ClickStopPropagationDirective = /*#__PURE__*/function () {
        function ClickStopPropagationDirective() {
          _classCallCheck(this, ClickStopPropagationDirective);
        }

        _createClass(ClickStopPropagationDirective, [{
          key: "onClick",
          value: function onClick(event) {
            event.stopPropagation();
          }
        }, {
          key: "onmMouseDown",
          value: function onmMouseDown(event) {
            event.stopPropagation();
          }
        }]);

        return ClickStopPropagationDirective;
      }();

      ClickStopPropagationDirective.ɵfac = function ClickStopPropagationDirective_Factory(t) {
        return new (t || ClickStopPropagationDirective)();
      };

      ClickStopPropagationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ClickStopPropagationDirective,
        selectors: [["", "appClickStopPropagation", ""]],
        hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            })("mousedown", function ClickStopPropagationDirective_mousedown_HostBindingHandler($event) {
              return ctx.onmMouseDown($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    "BrM3":
    /*!***************************************************************!*\
      !*** ./src/app/components/list-tasks/list-tasks.component.ts ***!
      \***************************************************************/

    /*! exports provided: ListTasksComponent */

    /***/
    function BrM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListTasksComponent", function () {
        return ListTasksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/Web/web.service */
      "tvHG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ListTasksComponent_ng_container_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You don't have any assigned task. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListTasksComponent_ng_container_1_div_5_ng_container_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "due");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListTasksComponent_ng_container_1_div_5_ng_container_10_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "due in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r3.AbsDaysToDue, " days");
        }
      }

      function ListTasksComponent_ng_container_1_div_5_ng_container_10_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "overdue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r3.AbsDaysToDue, " days");
        }
      }

      function ListTasksComponent_ng_container_1_div_5_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListTasksComponent_ng_container_1_div_5_ng_container_10_ng_container_1_Template, 6, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListTasksComponent_ng_container_1_div_5_ng_container_10_ng_container_2_Template, 6, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListTasksComponent_ng_container_1_div_5_ng_container_10_ng_container_3_Template, 6, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r3.DaysToDue == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r3.DaysToDue > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r3.DaysToDue < 0);
        }
      }

      var _c0 = function _c0(a1, a2, a3) {
        return ["/EditTask", a1, a2, a3];
      };

      function ListTasksComponent_ng_container_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListTasksComponent_ng_container_1_div_5_ng_container_10_Template, 4, 3, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, task_r3.ProcessId, task_r3.ProcessInstanceId, task_r3.TaskInstanceId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.TaskName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.ProcessName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r3.DueDate);
        }
      }

      function ListTasksComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Inbox!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListTasksComponent_ng_container_1_div_4_Template, 5, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListTasksComponent_ng_container_1_div_5_Template, 11, 8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.tasks.UserTaskInstanceList || ctx_r0.tasks.UserTaskInstanceList.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tasks.UserTaskInstanceList);
        }
      }

      var ListTasksComponent = /*#__PURE__*/function () {
        function ListTasksComponent(webService) {
          _classCallCheck(this, ListTasksComponent);

          this.webService = webService;
          this.tasks = null;
        }

        _createClass(ListTasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.webService.GetUserTaskInstancesQuery().subscribe({
              next: function next(r) {
                // TODO: handle error
                _this2.tasks = r.Value;
              }
            });
          }
        }]);

        return ListTasksComponent;
      }();

      ListTasksComponent.ɵfac = function ListTasksComponent_Factory(t) {
        return new (t || ListTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"]));
      };

      ListTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListTasksComponent,
        selectors: [["app-list-tasks"]],
        decls: 2,
        vars: 1,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center"], [4, "ngIf"], [2, "width", "500px"], [1, "my-inbox-label"], ["class", "no-task-message", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "task-item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "no-task-message"], [1, "task-success-icon"], [1, "fa", "fa-check-circle"], [1, "task-item", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "column"], [1, "task-title"], [1, "process-title"], ["fxLayout", "column", 1, "due-date-column"], [1, "due-day-value"], [1, "past-due-date"], [1, "due-day-value", "past-due-date"]],
        template: function ListTasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListTasksComponent_ng_container_1_Template, 6, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".my-inbox-label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  margin-top: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.no-task-message[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.task-success-icon[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n  color: green;\r\n  margin-right: 12px;\r\n}\r\n\r\n.task-item[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid gray;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-title[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.process-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\n.due-day-value[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\n.past-due-date[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.due-date-column[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Imxpc3QtdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1pbmJveC1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm8tdGFzay1tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGFzay1zdWNjZXNzLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4udGFzay1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2stdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2Nlc3MtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmR1ZS1kYXktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnBhc3QtZHVlLWRhdGUge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5kdWUtZGF0ZS1jb2x1bW4ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "C+1D":
    /*!*************************************************************!*\
      !*** ./src/app/components/edit-task/edit-task.component.ts ***!
      \*************************************************************/

    /*! exports provided: TaskModel, TaskCompletedModel, EditTaskComponent */

    /***/
    function C1D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskModel", function () {
        return TaskModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskCompletedModel", function () {
        return TaskCompletedModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function () {
        return EditTaskComponent;
      });
      /* harmony import */


      var src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/Web/web.service */
      "tvHG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_UI_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/UI/snack-bar.service */
      "ou4j");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../form/form.component */
      "x83m");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _task_completed_task_completed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../task-completed/task-completed.component */
      "S+9I");
      /* harmony import */


      var _common_Pipes_custom_date_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/Pipes/custom-date-time.pipe */
      "4X+j");

      var _c0 = ["appForm"];

      function EditTaskComponent_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " your task");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EditTaskComponent_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.taskModel.assigneeName, " will work on ");
        }
      }

      function EditTaskComponent_div_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.taskModel.assigneeName, " is working on ");
        }
      }

      function EditTaskComponent_div_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " task ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EditTaskComponent_div_1_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancelled by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.taskModel.assigneeName);
        }
      }

      function EditTaskComponent_div_1_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Completed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.taskModel.assigneeName);
        }
      }

      function EditTaskComponent_div_1_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaskComponent_div_1_div_15_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r14.pullTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Work on this? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" You are in ", ctx_r8.taskModel.assigneeName, " group. ");
        }
      }

      function EditTaskComponent_div_1_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaskComponent_div_1_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var action_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r17.submit(action_r16.ActionId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r16 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r10.taskModel.assignmentStates.assignedToCurrentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", action_r16.ActionText, " ");
        }
      }

      function EditTaskComponent_div_1_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaskComponent_div_1_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var action_r19 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r20.submit(action_r19.ActionId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r19 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r11.taskModel.assignmentStates.assignedToCurrentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", action_r19.ActionText, " ");
        }
      }

      function EditTaskComponent_div_1_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaskComponent_div_1_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var action_r22 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r23.submit(action_r22.ActionId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r22 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r12.taskModel.assignmentStates.assignedToCurrentUser || !ctx_r12.isFormValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", action_r22.ActionText, " ");
        }
      }

      function EditTaskComponent_div_1_ng_container_27_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Show all other tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function EditTaskComponent_div_1_ng_container_27_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hide other tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Completed by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancelled by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "In progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Will be handled by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "font-style": a0
        };
      };

      function EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_6_Template, 2, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_7_Template, 2, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_8_Template, 2, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_ng_container_9_Template, 2, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "_dateTime");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var otherTask_r29 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, otherTask_r29.TaskInstanceId == ctx_r28.taskModel.taskInstanceId ? "italic" : "normal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", otherTask_r29.TaskName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", otherTask_r29.TaskState == "Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", otherTask_r29.TaskState == "Canceled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", otherTask_r29.TaskState == "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", otherTask_r29.TaskState == "Waiting");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", otherTask_r29.AssingedName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, otherTask_r29.CompletedTime), " ");
        }
      }

      function EditTaskComponent_div_1_ng_container_27_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditTaskComponent_div_1_ng_container_27_ng_container_5_div_1_Template, 15, 12, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r27.taskModel.otherTasks);
        }
      }

      function EditTaskComponent_div_1_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaskComponent_div_1_ng_container_27_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r34.showAllOtherTasks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EditTaskComponent_div_1_ng_container_27_ng_container_3_Template, 2, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditTaskComponent_div_1_ng_container_27_ng_container_4_Template, 2, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditTaskComponent_div_1_ng_container_27_ng_container_5_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.otherTasksShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.otherTasksShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.otherTasksShown);
        }
      }

      function EditTaskComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " process ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditTaskComponent_div_1_div_7_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditTaskComponent_div_1_div_8_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditTaskComponent_div_1_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EditTaskComponent_div_1_div_10_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditTaskComponent_div_1_div_13_Template, 4, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditTaskComponent_div_1_div_14_Template, 4, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EditTaskComponent_div_1_div_15_Template, 4, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "app-form", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("formValid", function EditTaskComponent_div_1_Template_app_form_formValid_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r36.updateFormValidity($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, EditTaskComponent_div_1_button_23_Template, 2, 2, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, EditTaskComponent_div_1_button_25_Template, 2, 2, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, EditTaskComponent_div_1_button_26_Template, 2, 2, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EditTaskComponent_div_1_ng_container_27_Template, 6, 3, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.taskModel.processName, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.assignmentStates.assignedToCurrentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.assignmentStates.assignedToGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.assignmentStates.assignedToAnotherUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.taskState == "Completed" || ctx_r0.taskModel.taskState == "Canceled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.taskModel.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.taskState == "Canceled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.taskState == "Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.assignmentStates.assignedToCurrentUsersGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.taskModel.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formErrorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.taskModel.secondaryActions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.taskModel.warnedActions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.taskModel.primaryActions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.taskModel.otherTasks.length > 1);
        }
      }

      function EditTaskComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-task-completed", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("taskCompletedModel", ctx_r1.taskCompletedModel);
        }
      }

      var TaskModel = /*#__PURE__*/function () {
        function TaskModel() {
          _classCallCheck(this, TaskModel);

          this.processName = '';
          this.title = '';
          this.details = '';
          this.processId = '';
          this.processInstanceId = '';
          this.taskInstanceId = '';
          this.taskState = '';
          this.form = null;
          this.assigneeName = '';
          this.assignmentStates = {
            assignedToCurrentUser: false,
            assignedToGroup: false,
            assignedToAnotherUser: false,
            assignedToCurrentUsersGroup: false
          };
          this.otherTasks = [];
        }

        _createClass(TaskModel, [{
          key: "actions",
          set: function set(value) {
            this.primaryActions = value.filter(function (a) {
              return a.ActionType === 'Primary';
            });
            this.secondaryActions = value.filter(function (a) {
              return a.ActionType === 'Secondary';
            });
            this.warnedActions = value.filter(function (a) {
              return a.ActionType === 'Warned';
            });
          }
        }]);

        return TaskModel;
      }();

      var TaskCompletedModel = function TaskCompletedModel() {
        _classCallCheck(this, TaskCompletedModel);

        this.assigneeName = '';
        this.processId = '';
        this.processInstanceId = '';
        this.taskInstanceId = '';
        this.taskName = '';
        this.processCompleted = false;
        this.processCanceled = false;
      };

      var EditTaskComponent = /*#__PURE__*/function () {
        function EditTaskComponent(webService, activatedRoute, router, snackBar) {
          _classCallCheck(this, EditTaskComponent);

          this.webService = webService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.snackBar = snackBar;
          this.showCompletedMessage = false;
          this.otherTasksShown = true;
          this.formErrorMessage = '';
          this.isFormValid = false;
        }

        _createClass(EditTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.activatedRoute.params.subscribe({
              next: function next(r) {
                var processId = r.processId;
                var processInstanceId = r.processInstanceId;
                var taskInstanceId = r.taskInstanceId;

                _this3.initialize(processId, processInstanceId, taskInstanceId);
              }
            });
          }
        }, {
          key: "initialize",
          value: function initialize(processId, processInstanceId, taskInstanceId) {
            var _this4 = this;

            this.taskModel = null;
            this.showCompletedMessage = false;
            this.taskCompletedModel = null;

            if (processId != null && processInstanceId == null && taskInstanceId == null) {
              this.StartNewProcesses(processId);
            } else if (processId != null && processInstanceId != null && taskInstanceId != null) {
              // Analysis:
              // load task
              // possible responses & rendering types:
              //  completed?
              //  assinged to current user?
              //  assigned to someone else, but also related to one of the current user's groups ?
              //  assigned to a group that user can start working?
              //  assigned to a group or user and current user has no chance to work
              //  assigned to someone else but current user is god mode user.
              //    - can assign to someone else (of course including to themselves)
              //    - can change field values (of course will be logged)
              //    - can cancel completely
              //    - what else?
              this.webService.GetTaskInstanceQuery(processId, processInstanceId, taskInstanceId).subscribe({
                next: function next(r) {
                  _this4.taskModel = new TaskModel();
                  _this4.taskModel.processName = r.Value.ProcessName;
                  _this4.taskModel.title = r.Value.TaskName;
                  _this4.taskModel.processId = processId;
                  _this4.taskModel.processInstanceId = processInstanceId;
                  _this4.taskModel.taskInstanceId = taskInstanceId;
                  _this4.taskModel.taskState = r.Value.TaskState;
                  _this4.taskModel.form = r.Value.Form;
                  _this4.taskModel.actions = r.Value.Actions;
                  _this4.taskModel.assigneeName = r.Value.AssigneeName;
                  _this4.taskModel.assignmentStates.assignedToAnotherUser = r.Value.UserTaskState.AssignedToAnotherUser;
                  _this4.taskModel.assignmentStates.assignedToCurrentUser = r.Value.UserTaskState.CanEdit;
                  _this4.taskModel.assignmentStates.assignedToCurrentUsersGroup = r.Value.UserTaskState.AssignedToCurrentUsersGroup;
                  _this4.taskModel.assignmentStates.assignedToGroup = r.Value.UserTaskState.AssignedToGroup;
                  _this4.taskModel.otherTasks = r.Value.OtherTasks;
                }
              });
            }
          }
        }, {
          key: "StartNewProcesses",
          value: function StartNewProcesses(processId) {
            var _this5 = this;

            this.webService.StartNewProcessCommand(processId).subscribe({
              next: function next(r) {
                // EditTask/:processId/:processInstanceId/:taskInstanceId
                //this.router.navigate(['EditTask', processId, r.Value.ProcessInstanceId, r.Value.TaskInstanceId]);
                _this5.initialize(processId, r.Value.ProcessInstanceId, r.Value.TaskInstanceId);

                return; // this.taskModel = new TaskModel();
                // this.taskModel.processName = r.Value.ProcessName;
                // this.taskModel.title = r.Value.TaskName;
                // this.taskModel.processId = processId;
                // this.taskModel.processInstanceId = r.Value.ProcessInstanceId;
                // this.taskModel.taskInstanceId = r.Value.TaskInstanceId;
                // this.taskModel.form = r.Value.Form;
                // this.taskModel.actions = r.Value.Actions;
                // this.taskModel.assignmentStates.assignedToAnotherUser = false;
                // this.taskModel.assignmentStates.assignedToCurrentUser = true;
                // this.taskModel.assignmentStates.assignedToCurrentUsersGroup = false;
                // this.taskModel.assignmentStates.assignedToGroup = false;
              }
            });
          }
        }, {
          key: "submit",
          value: function submit(actionId) {
            var _this6 = this;

            var returningForm = this.formComponent.getReturningForm();
            this.webService.SendUserActionCommand(this.taskModel.processId, this.taskModel.processInstanceId, this.taskModel.taskInstanceId, actionId, 'some notes of course', returningForm.DateValues, returningForm.TextValues).subscribe({
              next: function next(r) {
                _this6.formErrorMessage = '';

                if (false === r.Successful) {
                  var invalidFormValuesError = r.OperationErrors.find(function (e) {
                    return e.ErrorCode === src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_0__["SendUserActionErrorCodes"].InvalidFormValues;
                  });

                  if (invalidFormValuesError != null) {
                    // show error message
                    console.log('error', invalidFormValuesError.ErrorMessage);
                    _this6.formErrorMessage = invalidFormValuesError.ErrorMessage;
                    return;
                  }
                }

                if (actionId === 'save') {
                  _this6.snackBar.open('Form values are saved.');

                  return;
                }

                console.log('action trigger result', r);
                _this6.showCompletedMessage = true;
                var taskCompletedModel = new TaskCompletedModel();
                taskCompletedModel.assigneeName = r.Value.AssignedName;
                taskCompletedModel.processId = _this6.taskModel.processId;
                taskCompletedModel.processInstanceId = _this6.taskModel.processInstanceId;
                taskCompletedModel.taskInstanceId = r.Value.NewTaskInstanceId;
                taskCompletedModel.taskName = r.Value.NewTaskName;
                taskCompletedModel.processCompleted = r.Value.HasProcessCompleted;
                taskCompletedModel.processCanceled = r.Value.HasProcessCanceled;
                _this6.taskCompletedModel = taskCompletedModel; // bu submit sonrasi gosterilen ekran
                // aslinda tum sureclerin listelendigi detay ekranina
                // sadece completed mesajinin eklendigi sey olabilir.
                // bu taskin actigi ve paralel de ilerleyen tasklarin
                // ayrimini yapmaya da gerek olmayabilir.
                // congrats! you completed your task!
                //  upon your task,
                //    this task is assigned to this person (or you) - or this group (and
                //      if aplicable - you can work on that since you are on that group)
                //    or
                //    these tasks are assigned
                //    and (if exists in other parallel branches)
                //    these are other ongoing tasks in this process
                //    or - this process now completed.
              }
            });
          }
        }, {
          key: "pullTask",
          value: function pullTask() {
            var _this7 = this;

            this.webService.PullTaskFromGroupCommand(this.taskModel.processId, this.taskModel.processInstanceId, this.taskModel.taskInstanceId).subscribe({
              next: function next(r) {
                _this7.initialize(_this7.taskModel.processId, _this7.taskModel.processInstanceId, _this7.taskModel.taskInstanceId);
              }
            });
          }
        }, {
          key: "showAllOtherTasks",
          value: function showAllOtherTasks() {
            this.otherTasksShown = !this.otherTasksShown;
          }
        }, {
          key: "updateFormValidity",
          value: function updateFormValidity(isFormValid) {
            this.isFormValid = isFormValid;
          }
        }]);

        return EditTaskComponent;
      }();

      EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) {
        return new (t || EditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_0__["WebService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_UI_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]));
      };

      EditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditTaskComponent,
        selectors: [["app-edit-task"]],
        viewQuery: function EditTaskComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formComponent = _t.first);
          }
        },
        decls: 3,
        vars: 2,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "edit-task-wrapper"], ["class", "edit-task-content", 4, "ngIf"], ["style", "width: 500px;", 4, "ngIf"], [1, "edit-task-content"], [1, "process-title-header"], [1, "fa", "fa-info-circle"], [1, "process-title"], [1, "task-title-header"], [4, "ngIf"], [1, "task-title"], ["class", "centered-text", 4, "ngIf"], [3, "form", "formValid"], ["appForm", ""], [1, "form-error-message"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "actions-wrapper"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayoutAlign", "start center", "mat-button", "", "mat-raised-button", "", "style", "margin-right:10px", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["fxLayoutAlign", "start center", "mat-button", "", "mat-raised-button", "", "color", "warn", "style", "margin-left:10px", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "start center", "mat-button", "", "mat-raised-button", "", "color", "primary", "style", "margin-left:10px", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "centered-text"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayoutAlign", "start center", "mat-button", "", "mat-raised-button", "", 2, "margin-right", "10px", 3, "disabled", "click"], ["fxLayoutAlign", "start center", "mat-button", "", "mat-raised-button", "", "color", "warn", 2, "margin-left", "10px", 3, "disabled", "click"], ["fxLayoutAlign", "start center", "mat-button", "", "mat-raised-button", "", "color", "primary", 2, "margin-left", "10px", 3, "disabled", "click"], [1, "task-history"], [2, "text-align", "center", "text-decoration", "underline", "cursor", "pointer", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "style", "margin-top:20px;", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin-top", "20px", 3, "ngStyle"], [2, "font-size", "24px", "font-weight", "bold"], ["fxLayout", "column", 2, "text-align", "right"], [2, "font-size", "18px", "font-weight", "bold"], [2, "font-size", "12px"], [2, "width", "500px"], [3, "taskCompletedModel"]],
        template: function EditTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditTaskComponent_div_1_Template, 28, 15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditTaskComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.taskModel && !ctx.showCompletedMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCompletedMessage);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], _task_completed_task_completed_component__WEBPACK_IMPORTED_MODULE_9__["TaskCompletedComponent"]],
        pipes: [_common_Pipes_custom_date_time_pipe__WEBPACK_IMPORTED_MODULE_10__["CustomDateTimePipe"]],
        styles: [".edit-task-content[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n}\r\n\r\n.process-title-header[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  \r\n  color: gray;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.process-title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.task-title-header[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  \r\n  color: gray;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n.task-title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.centered-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.task-history[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  color: gray;\r\n  margin-top: 30px;\r\n}\r\n\r\n.actions-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n.form-error-message[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  font-size: 10px;\r\n  color: red;\r\n  height: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6ImVkaXQtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtdGFzay1jb250ZW50IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5wcm9jZXNzLXRpdGxlLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLyogLy8gY29sb3IgZ3JheSAqL1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnByb2Nlc3MtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLXRpdGxlLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLyogLy8gY29sb3IgZ3JheSAqL1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGFzay10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2staGlzdG9yeSB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWVycm9yLW1lc3NhZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "DE2k":
    /*!**********************************************************!*\
      !*** ./src/app/common/Models/Responsible/Responsible.ts ***!
      \**********************************************************/

    /*! exports provided: Responsible */

    /***/
    function DE2k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Responsible", function () {
        return Responsible;
      });
      /* harmony import */


      var _ResponsibleVisualState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ResponsibleVisualState */
      "+y6Y");

      var Responsible = function Responsible(responsibleType) {
        var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var groupAssignOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var user = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var groups = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
        var users = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
        var groupField = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var userField = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        var groupFieldList = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
        var userFieldList = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : [];

        _classCallCheck(this, Responsible);

        this.responsibleType = responsibleType;
        this.group = group;
        this.groupAssignOption = groupAssignOption;
        this.user = user;
        this.groups = groups;
        this.users = users;
        this.groupField = groupField;
        this.userField = userField;
        this.groupFieldList = groupFieldList;
        this.userFieldList = userFieldList;
        this.visualState = new _ResponsibleVisualState__WEBPACK_IMPORTED_MODULE_0__["ResponsibleVisualState"](this);
      };
      /***/

    },

    /***/
    "Dbx/":
    /*!************************************************************************************************************!*\
      !*** ./src/app/components/process-item-settings-components/step-form-fields/step-form-fields.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: StepFormFieldsComponent */

    /***/
    function Dbx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepFormFieldsComponent", function () {
        return StepFormFieldsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["formFields"];

      function StepFormFieldsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This step doesn't contain any field. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function StepFormFieldsComponent_div_7_mat_button_toggle_group_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle-group", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StepFormFieldsComponent_div_7_mat_button_toggle_group_11_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var fieldInStep_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            return fieldInStep_r2.readOnly = $event;
          })("change", function StepFormFieldsComponent_div_7_mat_button_toggle_group_11_Template_mat_button_toggle_group_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.fieldInStepReadOnlyChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Editable");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Read Only");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fieldInStep_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", fieldInStep_r2.readOnly)("vertical", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
        }
      }

      function StepFormFieldsComponent_div_7_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " read only toggle removed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "field-selected": a0,
          "field-selection-disabled": a1
        };
      };

      function StepFormFieldsComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StepFormFieldsComponent_div_7_mat_button_toggle_group_11_Template, 5, 4, "mat-button-toggle-group", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, StepFormFieldsComponent_div_7_div_12_Template, 2, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepFormFieldsComponent_div_7_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var fieldInStep_r2 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.removeFieldInStep(fieldInStep_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepFormFieldsComponent_div_7_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var fieldInStep_r2 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.openFieldEditViewForExistingField(fieldInStep_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fieldInStep_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fieldInStep_r2.field.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fieldInStep_r2.field.fieldType == null ? null : fieldInStep_r2.field.fieldType.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fieldInStep_r2.editableFieldUsedInAnotherStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !fieldInStep_r2.editableFieldUsedInAnotherStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fieldInStep_r2.readOnly && fieldInStep_r2 != ctx_r1.currentFieldInStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, fieldInStep_r2 == ctx_r1.currentFieldInStep, fieldInStep_r2 != ctx_r1.currentFieldInStep && fieldInStep_r2.readOnly));
        }
      } //type FieldViewMode = 'listFields' | 'fieldEdit' | 'addExisting';


      var StepFormFieldsComponent = /*#__PURE__*/function () {
        function StepFormFieldsComponent() {
          _classCallCheck(this, StepFormFieldsComponent);

          // loaded lists
          this.fieldTypes = [];
          this.currentFieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isStepFormDesignerVisible = false;
        }

        _createClass(StepFormFieldsComponent, [{
          key: "currentFieldInStep",
          get: function get() {
            return this._currentFieldInStep;
          },
          set: function set(val) {
            this._currentFieldInStep = val;
            this.currentFieldChanged.emit(val);
          }
        }, {
          key: "stepItem",
          get: function get() {
            return this.processItem;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "processItem",
          get: function get() {
            return this._processItem;
          },
          set: function set(value) {
            if (this._processItem === value) {
              return;
            }

            this._processItem = value;
          }
        }, {
          key: "renderingFieldsInStep",
          get: function get() {
            return this.stepItem.fieldsInStep.filter(function (value, index, arr) {
              return !value.deleted;
            });
          }
        }, {
          key: "openFieldEditViewForNewField",
          value: function openFieldEditViewForNewField() {
            var _this8 = this;

            var addNewFieldResult = this.process.addNewField(this.stepItem);
            this.currentFieldInStep = addNewFieldResult.createdFieldInStep;
            setTimeout(function () {
              var _a, _b, _c;

              (_c = (_b = (_a = _this8.formFieldsViewChildren) === null || _a === void 0 ? void 0 : _a.last) === null || _b === void 0 ? void 0 : _b.nativeElement) === null || _c === void 0 ? void 0 : _c.scrollIntoView({
                behavior: 'smooth'
              });
            }, 50);
          }
        }, {
          key: "removeFieldInStep",
          value: function removeFieldInStep(fieldInStep) {
            this.currentFieldInStep = null;
            fieldInStep.deleted = true;
          }
        }, {
          key: "openFieldEditViewForExistingField",
          value: function openFieldEditViewForExistingField(fieldInStep) {
            if (this.currentFieldInStep == fieldInStep) {
              this.currentFieldInStep = null;
            } else {
              this.currentFieldInStep = fieldInStep;
            }
          }
        }, {
          key: "openAddExistingFieldView",
          value: function openAddExistingFieldView() {}
        }, {
          key: "openListFields",
          value: function openListFields() {
            this.currentFieldInStep = null;
          }
        }, {
          key: "swapStepFormDesignerVisible",
          value: function swapStepFormDesignerVisible() {
            this.isStepFormDesignerVisible = !this.isStepFormDesignerVisible;
          }
        }, {
          key: "resetViewMode",
          value: function resetViewMode() {
            this.currentFieldInStep = null;
          }
        }, {
          key: "fieldInStepReadOnlyChanged",
          value: function fieldInStepReadOnlyChanged() {
            var _a;

            if ((_a = this.currentFieldInStep) === null || _a === void 0 ? void 0 : _a.readOnly) {
              this.currentFieldInStep = null;
            }
          }
        }]);

        return StepFormFieldsComponent;
      }();

      StepFormFieldsComponent.ɵfac = function StepFormFieldsComponent_Factory(t) {
        return new (t || StepFormFieldsComponent)();
      };

      StepFormFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: StepFormFieldsComponent,
        selectors: [["app-step-form-fields"]],
        viewQuery: function StepFormFieldsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formFieldsViewChildren = _t);
          }
        },
        inputs: {
          fieldTypes: "fieldTypes",
          process: "process",
          processItem: "processItem"
        },
        outputs: {
          currentFieldChanged: "currentFieldChanged"
        },
        decls: 16,
        vars: 2,
        consts: [[1, "fields-settings"], [1, "form-setting-mode"], [1, "field-edit-title"], ["matTooltip", "Fields that are shown to the editor of this step.", 1, "fas", "fa-info-circle"], ["class", "form-designer-empty-content", 4, "ngIf"], [1, "field-list-wrapper"], ["class", "field-form", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "new-field-wrapper"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-plus"], ["matTooltip", "Include a field you created in another step.", 1, "fas", "fa-info-circle"], [1, "form-designer-empty-content"], ["fxLayout", "row", 1, "field-form"], ["formFields", ""], [1, "field-number"], ["fxLayout", "column", 1, "field-name-in-list"], [1, "field-name-span"], [1, "field-type"], [3, "ngModel", "vertical", "ngModelChange", "change", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row"], ["mat-button", "", 1, "setting-button", 3, "click"], [1, "fas", "fa-trash-alt"], ["mat-button", "", 1, "setting-button", 3, "disabled", "click"], ["matBadge", "!", "matBadgeColor", "warn", "matBadgePosition", "before", 1, "fas", "fa-pencil-alt", 3, "ngClass"], [3, "ngModel", "vertical", "ngModelChange", "change"], [3, "value"]],
        template: function StepFormFieldsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Fields in this Step ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StepFormFieldsComponent_div_5_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StepFormFieldsComponent_div_7_Template, 18, 10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepFormFieldsComponent_Template_button_click_9_listener() {
              return ctx.openFieldEditViewForNewField();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Create a New Field ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepFormFieldsComponent_Template_button_click_12_listener() {
              return ctx.openAddExistingFieldView();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Use an Existing Field ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.renderingFieldsInStep.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.renderingFieldsInStep);
          }
        },
        directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggle"]],
        styles: [".fields-settings[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.form-setting-mode[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n.form-setting-mode-with-top-button[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n}\r\n\r\n.field-edit-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.form-designer-empty-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 30px;\r\n}\r\n\r\n.field-form[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  padding-bottom: 15px;\r\n  border-bottom: gray solid 1px;\r\n  height: 56px;\r\n}\r\n\r\n.field-number[_ngcontent-%COMP%] {\r\n  width: 54px;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  color: #555;\r\n  text-align: center;\r\n  margin-top: 7px;\r\n}\r\n\r\n.field-name-in-list[_ngcontent-%COMP%] {\r\n  width: 240px;\r\n  margin-top: 7px;\r\n}\r\n\r\n.field-name-span[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.field-name-in-list[_ngcontent-%COMP%]   .field-type[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.setting-button[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n.new-field-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\n.new-field-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.new-field-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\n.new-field-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.back-button[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  line-height: 18px;\r\n  font-size: 20px;\r\n  width: 30px;\r\n  min-width: 24px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.mat-selection-list[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  border-color: rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.field-selected[_ngcontent-%COMP%] {\r\n  padding: 3px;\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 4px;\r\n}\r\n\r\n.field-selection-disabled[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n}\r\n\r\n.field-list-wrapper[_ngcontent-%COMP%] {\r\n  max-height: 50vh;\r\n  overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtZm9ybS1maWVsZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InN0ZXAtZm9ybS1maWVsZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZHMtc2V0dGluZ3Mge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1zZXR0aW5nLW1vZGUge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNldHRpbmctbW9kZS13aXRoLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmZpZWxkLWVkaXQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tZGVzaWduZXItZW1wdHktY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmZpZWxkLWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogZ3JheSBzb2xpZCAxcHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4uZmllbGQtbnVtYmVyIHtcclxuICB3aWR0aDogNTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLmZpZWxkLW5hbWUtaW4tbGlzdCB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLmZpZWxkLW5hbWUtc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5maWVsZC1uYW1lLWluLWxpc3QgLmZpZWxkLXR5cGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnNldHRpbmctYnV0dG9uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5uZXctZmllbGQtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLm5ldy1maWVsZC13cmFwcGVyIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5ldy1maWVsZC13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubmV3LWZpZWxkLXdyYXBwZXIgYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxubWF0LWNoZWNrYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0aW9uLWxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmZpZWxkLXNlbGVjdGVkIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZmllbGQtc2VsZWN0aW9uLWRpc2FibGVkIHtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLmZpZWxkLWxpc3Qtd3JhcHBlciB7XHJcbiAgbWF4LWhlaWdodDogNTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "EVZ3":
    /*!***********************************************************************!*\
      !*** ./src/app/components/list-processes/list-processes.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ListProcessesComponent */

    /***/
    function EVZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListProcessesComponent", function () {
        return ListProcessesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/Web/web.service */
      "tvHG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function ListProcessesComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Start ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var process_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "/NewProcess/" + process_r1.ProcessId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", process_r1.Visuals.IconColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", process_r1.Visuals.Initials, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](process_r1.ProcessName);
        }
      }

      var ListProcessesComponent = /*#__PURE__*/function () {
        function ListProcessesComponent(webService) {
          _classCallCheck(this, ListProcessesComponent);

          this.webService = webService;
        }

        _createClass(ListProcessesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.webService.GetProcessesQuery().subscribe(function (r) {
              console.log(r);
              _this9.processes = r.Value.Processes;
            });
          }
        }]);

        return ListProcessesComponent;
      }();

      ListProcessesComponent.ɵfac = function ListProcessesComponent_Factory(t) {
        return new (t || ListProcessesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"]));
      };

      ListProcessesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListProcessesComponent,
        selectors: [["app-list-processes"]],
        decls: 5,
        vars: 1,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center"], [2, "width", "500px"], [1, "title"], ["class", "process-box", 4, "ngFor", "ngForOf"], [1, "process-box"], [1, "process-link", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "process-name-wrapper"], ["fxLayoutAlign", "center center", 1, "process-icon"], [1, "process-name"]],
        template: function ListProcessesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start a new process");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListProcessesComponent_div_4_Template, 10, 7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.processes);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: [".title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  margin-top: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.process-box[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  padding: 30px;\r\n  width: 500px;\r\n  border: 1px solid gray;\r\n  margin-top: 20px;\r\n}\r\n\r\n.process-link[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 24px;\r\n}\r\n\r\n.process-name-wrapper[_ngcontent-%COMP%] {\r\n}\r\n\r\n.process-name[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n}\r\n\r\n.process-icon[_ngcontent-%COMP%] {\r\n  background-color: goldenrod;\r\n  width: 100px;\r\n  height: 100px;\r\n  font-size: 50px;\r\n  border-radius: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcHJvY2Vzc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJsaXN0LXByb2Nlc3Nlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9jZXNzLWJveCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnByb2Nlc3MtbGluayB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnByb2Nlc3MtbmFtZS13cmFwcGVyIHtcclxufVxyXG5cclxuLnByb2Nlc3MtbmFtZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucHJvY2Vzcy1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "HCR1":
    /*!*************************************************************************!*\
      !*** ./src/app/components/my-groups-tasks/my-groups-tasks.component.ts ***!
      \*************************************************************************/

    /*! exports provided: MyGroupsTasksComponent */

    /***/
    function HCR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyGroupsTasksComponent", function () {
        return MyGroupsTasksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/Web/web.service */
      "tvHG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function MyGroupsTasksComponent_ng_container_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You don't have any assigned task. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "due");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "due in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r5.AbsDaysToDue, " days");
        }
      }

      function MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "overdue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r5.AbsDaysToDue, " days");
        }
      }

      function MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_ng_container_1_Template, 6, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_ng_container_2_Template, 6, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_ng_container_3_Template, 6, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var task_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r5.DaysToDue == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r5.DaysToDue > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r5.DaysToDue < 0);
        }
      }

      var _c0 = function _c0(a1, a2, a3) {
        return ["/EditTask", a1, a2, a3];
      };

      function MyGroupsTasksComponent_ng_container_1_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MyGroupsTasksComponent_ng_container_1_div_5_div_1_ng_container_14_Template, 4, 3, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r5 = ctx.$implicit;

          var groupTasks_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, task_r5.ProcessId, task_r5.ProcessInstanceId, task_r5.TaskInstanceId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r5.TaskName, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", groupTasks_r3.GroupName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r5.ProcessName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r5.DueDate);
        }
      }

      function MyGroupsTasksComponent_ng_container_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyGroupsTasksComponent_ng_container_1_div_5_div_1_Template, 15, 9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var groupTasks_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", groupTasks_r3.TaskInstanceList);
        }
      }

      function MyGroupsTasksComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Groups' Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyGroupsTasksComponent_ng_container_1_div_4_Template, 5, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyGroupsTasksComponent_ng_container_1_div_5_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.groupsTasks || ctx_r0.groupsTasks.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groupsTasks);
        }
      }

      var MyGroupsTasksComponent = /*#__PURE__*/function () {
        function MyGroupsTasksComponent(webService) {
          _classCallCheck(this, MyGroupsTasksComponent);

          this.webService = webService;
        }

        _createClass(MyGroupsTasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.webService.GetUserTaskInstancesQuery().subscribe({
              next: function next(r) {
                // TODO: handle error
                _this10.groupsTasks = r.Value.GroupsTaskInstanceList;
              }
            });
          }
        }]);

        return MyGroupsTasksComponent;
      }();

      MyGroupsTasksComponent.ɵfac = function MyGroupsTasksComponent_Factory(t) {
        return new (t || MyGroupsTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Web_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"]));
      };

      MyGroupsTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyGroupsTasksComponent,
        selectors: [["app-my-groups-tasks"]],
        decls: 2,
        vars: 1,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center"], [4, "ngIf"], [2, "width", "500px"], [1, "my-inbox-label"], ["class", "no-task-message", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "no-task-message"], [1, "task-success-icon"], [1, "fa", "fa-check-circle"], ["class", "task-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "task-item", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "column"], [1, "task-title"], [1, "group-name"], [1, "group-name-group-label"], [1, "process-title"], ["fxLayout", "column", 1, "due-date-column"], [1, "due-day-value"], [1, "past-due-date"], [1, "due-day-value", "past-due-date"]],
        template: function MyGroupsTasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyGroupsTasksComponent_ng_container_1_Template, 6, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupsTasks);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".my-inbox-label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  margin-top: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.no-task-message[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.task-success-icon[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n  color: green;\r\n  margin-right: 12px;\r\n}\r\n\r\n.task-item[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid gray;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-title[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.process-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\n.due-day-value[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\n.past-due-date[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.due-date-column[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.group-name[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\n.group-name-group-label[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWdyb3Vwcy10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Im15LWdyb3Vwcy10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWluYm94LWxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uby10YXNrLW1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLXN1Y2Nlc3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvY2Vzcy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZHVlLWRheS12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucGFzdC1kdWUtZGF0ZSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmR1ZS1kYXRlLWNvbHVtbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5ncm91cC1uYW1lIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5ncm91cC1uYW1lLWdyb3VwLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "K/I7":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/process-item-settings/process-item-settings.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProcessItemSettingsComponent */

    /***/
    function KI7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProcessItemSettingsComponent", function () {
        return ProcessItemSettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-dropdowns */
      "jcQU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_Business_field_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/Business/field-type.service */
      "r9sB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _process_item_settings_components_field_definition_editor_field_definition_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../process-item-settings-components/field-definition-editor/field-definition-editor.component */
      "6Yjd");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _process_item_settings_components_responsible_responsible_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../process-item-settings-components/responsible/responsible.component */
      "gEWz");
      /* harmony import */


      var _process_item_settings_components_step_form_fields_step_form_fields_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../process-item-settings-components/step-form-fields/step-form-fields.component */
      "Dbx/");

      var _c0 = ["stepFormFields"];
      var _c1 = ["fieldDefinitionEditor"];

      function ProcessItemSettingsComponent_div_0_ng_template_10_div_0_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Step: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_template_10_div_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Condition: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_template_10_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProcessItemSettingsComponent_div_0_ng_template_10_div_0_span_1_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProcessItemSettingsComponent_div_0_ng_template_10_div_0_span_2_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r7.constructor.name == "StepItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r7.constructor.name == "ConditionItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r7.text);
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProcessItemSettingsComponent_div_0_ng_template_10_div_0_Template, 5, 3, "div", 15);
        }

        if (rf & 2) {
          var data_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r7);
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_template_12_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Step: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_template_12_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Condition: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProcessItemSettingsComponent_div_0_ng_template_12_span_1_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProcessItemSettingsComponent_div_0_ng_template_12_span_2_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r12.constructor.name == "StepItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r12.constructor.name == "ConditionItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r12.text);
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_container_15_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Form ");
        }
      }

      function ProcessItemSettingsComponent_div_0_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-tab-group", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function ProcessItemSettingsComponent_div_0_ng_container_15_Template_mat_tab_group_selectedTabChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r17.onStepItemSettingsTabChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-responsible", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-tab", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProcessItemSettingsComponent_div_0_ng_container_15_ng_template_5_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-step-form-fields", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentFieldChanged", function ProcessItemSettingsComponent_div_0_ng_container_15_Template_app_step_form_fields_currentFieldChanged_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r19.currentFieldChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-tab", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "this action goes to this step");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "this action ends the process");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "python script to arrange data");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "web service call");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "(for future)-> save/update data to database");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-tab", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Notification will be configured here. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-tab", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Documents will be edited here. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("process", ctx_r5.process)("processItem", ctx_r5.processItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("process", ctx_r5.process)("processItem", ctx_r5.processItem)("fieldTypes", ctx_r5.fieldTypes);
        }
      }

      var _c2 = function _c2() {
        return {
          value: "id"
        };
      };

      function ProcessItemSettingsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "left part");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcessItemSettingsComponent_div_0_Template_i_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ejs-dropdownlist", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProcessItemSettingsComponent_div_0_Template_ejs_dropdownlist_change_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            ctx_r22.processItem = $event.itemData;
            return ctx_r22.onProcessItemChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProcessItemSettingsComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProcessItemSettingsComponent_div_0_ng_template_12_Template, 5, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProcessItemSettingsComponent_div_0_ng_container_15_Template, 23, 5, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-field-definition-editor", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r0.processItems)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c2))("ngModel", ctx_r0.processItem == null ? null : ctx_r0.processItem.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r0.processItem.constructor.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "StepItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldTypes", ctx_r0.fieldTypes);
        }
      }

      _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_1__["ListBoxComponent"].Inject(_syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_1__["CheckBoxSelection"]);

      var ProcessItemSettingsComponent = /*#__PURE__*/function () {
        function ProcessItemSettingsComponent(fieldTypeService) {
          _classCallCheck(this, ProcessItemSettingsComponent);

          this.fieldTypeService = fieldTypeService;
          this.visible = false; //#endregion

          this.fieldTypes = [];
        }

        _createClass(ProcessItemSettingsComponent, [{
          key: "processItems",
          get: function get() {
            return this.process.processItems.value.array;
          }
        }, {
          key: "processItem",
          get: function get() {
            return this._processItem;
          },
          set: function set(value) {
            if (this._processItem === value) {
              return;
            }

            this._processItem = value;
          } //#region step item

        }, {
          key: "stepItem",
          get: function get() {
            return this.processItem;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.fieldTypeService.getFieldTypes().then(function (v) {
              _this11.fieldTypes = v;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {}
        }, {
          key: "open",
          value: function open(processItem) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.processItem = processItem;
                      this.visible = true;

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "close",
          value: function close() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.visible = false;
                      this.processItem = null;

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //#region field - step item functions

        }, {
          key: "onProcessItemChange",
          value: function onProcessItemChange() {
            this.stepFormFieldsComponent.resetViewMode();
          }
        }, {
          key: "onStepItemSettingsTabChanged",
          value: function onStepItemSettingsTabChanged($event) {
            this.stepFormFieldsComponent.resetViewMode();
          } //#endregion

        }, {
          key: "search",
          value: function search(array, selectorFunc, filter) {
            if (filter === '' || filter == null) {
              return array;
            }

            return array.filter(function (i) {
              return selectorFunc(i).toLowerCase().indexOf(filter.toLowerCase()) > -1;
            });
          }
        }, {
          key: "currentFieldChanged",
          value: function currentFieldChanged(fieldInStep) {
            this.fieldDefinitionEditor.show(fieldInStep);
          }
        }]);

        return ProcessItemSettingsComponent;
      }();

      ProcessItemSettingsComponent.ɵfac = function ProcessItemSettingsComponent_Factory(t) {
        return new (t || ProcessItemSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_Business_field_type_service__WEBPACK_IMPORTED_MODULE_3__["FieldTypeService"]));
      };

      ProcessItemSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProcessItemSettingsComponent,
        selectors: [["app-process-item-settings"]],
        viewQuery: function ProcessItemSettingsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepFormFieldsComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fieldDefinitionEditor = _t.first);
          }
        },
        inputs: {
          process: "process"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "settings-modal", 4, "ngIf"], [1, "settings-modal"], [1, "main-container"], [1, "left-part"], [1, "form-wrapper"], ["fxLayout", "row", "fxLayoutAlign", "end none"], [1, "fas", "fa-times", "close-button", "clickable", 3, "click"], ["name", "processItemPicker", "cssClass", "e-outline", 3, "dataSource", "fields", "ngModel", "change"], ["itemTemplate", ""], ["valueTemplate", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "right-part"], [3, "fieldTypes"], ["fieldDefinitionEditor", ""], [4, "ngIf"], ["fxLayoutAlign", "center center", 2, "font-weight", "bold", "font-size", "18px", "height", "50px"], [1, "step-settings-tab", 3, "selectedTabChange"], ["label", "Responsible"], [3, "process", "processItem"], ["label", "Form"], ["mat-tab-label", ""], [3, "process", "processItem", "fieldTypes", "currentFieldChanged"], ["stepFormFields", ""], ["label", "Actions"], ["label", "Notifications"], ["label", "Docs"]],
        template: function ProcessItemSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProcessItemSettingsComponent_div_0_Template, 19, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visible && ctx.process != null && ctx.processItem != null);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_1__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _process_item_settings_components_field_definition_editor_field_definition_editor_component__WEBPACK_IMPORTED_MODULE_7__["FieldDefinitionEditorComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _process_item_settings_components_responsible_responsible_component__WEBPACK_IMPORTED_MODULE_9__["ResponsibleComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabLabel"], _process_item_settings_components_step_form_fields_step_form_fields_component__WEBPACK_IMPORTED_MODULE_10__["StepFormFieldsComponent"]],
        styles: [".settings-modal[_ngcontent-%COMP%] {\r\n  display: block;\r\n  \r\n  position: fixed;\r\n  \r\n  z-index: 10000;\r\n  \r\n  \r\n  \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  \r\n  height: 100%;\r\n  \r\n  overflow: auto;\r\n  \r\n  background-color: rgb(0, 0, 0);\r\n  \r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  \r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n  margin-top: min(100px, 10vh);\r\n  width: 1500px;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: transparent;\r\n}\r\n\r\n.left-part[_ngcontent-%COMP%] {\r\n  \r\n  width: 400px;\r\n  height: 500px;\r\n}\r\n\r\n.right-part[_ngcontent-%COMP%] {\r\n  \r\n  width: 400px;\r\n  height: 500px;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  min-height: 200px;\r\n  padding: 10px;\r\n  background-color: white;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%], .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\n  border: 3px solid currentColor !important;\r\n}\r\n\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border: 3px solid currentColor !important;\r\n}\r\n\r\n.mat-selection-list[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  border-color: rgba(0, 0, 0, 0.12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtaXRlbS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLDRCQUE0QjtFQUM1QixhQUFhOztFQUViLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTs7RUFFZiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBRXpCLHNCQUFzQjtFQUV0QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InByb2Nlc3MtaXRlbS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLW1vZGFsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgLyogU2l0IG9uIHRvcCAqL1xyXG4gIC8qIHBhZGRpbmctdG9wOiAxMDBweDsgKi9cclxuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIG1hcmdpbi10b3A6IG1pbigxMDBweCwgMTB2aCk7XHJcbiAgd2lkdGg6IDE1MDBweDtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGVmdC1wYXJ0IHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1wYXJ0IHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uY2xpY2thYmxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgY3VycmVudENvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0aW9uLWxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "KquK":
    /*!************************************************************************!*\
      !*** ./src/app/common/Models/Responsible/ProcessStarterVisualState.ts ***!
      \************************************************************************/

    /*! exports provided: ProcessStarterVisualState */

    /***/
    function KquK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProcessStarterVisualState", function () {
        return ProcessStarterVisualState;
      });

      var ProcessStarterVisualState = /*#__PURE__*/function () {
        function ProcessStarterVisualState(processStarter) {
          _classCallCheck(this, ProcessStarterVisualState);

          this.processStarter = processStarter;
          this.showAdvancedOptions = false;
          this.groupListTypeName = 'groupList';
        }

        _createClass(ProcessStarterVisualState, [{
          key: "isTypeGroupList",
          get: function get() {
            var _a, _b;

            return ((_b = (_a = this.processStarter) === null || _a === void 0 ? void 0 : _a.processStarterType) === null || _b === void 0 ? void 0 : _b.code) == this.groupListTypeName;
          }
        }, {
          key: "showGroupAssignOptions",
          get: function get() {
            if (this.isTypeGroupList && this.processStarter.groups.length > 0) {
              return true;
            }

            return false;
          }
        }]);

        return ProcessStarterVisualState;
      }();
      /***/

    },

    /***/
    "LbUI":
    /*!*******************************************************************!*\
      !*** ./src/app/components/process-item/process-item.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProcessItemComponent */

    /***/
    function LbUI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProcessItemComponent", function () {
        return ProcessItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _common_Directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/Directives/click-stop-propagation.directive */
      "BG+K");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["processItemNameTextArea"];

      function ProcessItemComponent_div_0_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessItemComponent_div_0_div_1_div_1_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r9.createLink($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProcessItemComponent_div_0_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessItemComponent_div_0_div_1_div_2_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r11.openSettings($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProcessItemComponent_div_0_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessItemComponent_div_0_div_1_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r13.submitProcessName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProcessItemComponent_div_0_div_1_textarea_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ProcessItemComponent_div_0_div_1_textarea_4_Template_textarea_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r16.processItemNameSubmitted($event);
          })("ngModelChange", function ProcessItemComponent_div_0_div_1_textarea_4_Template_textarea_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r18.processItem.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.processItem.text);
        }
      }

      function ProcessItemComponent_div_0_div_1_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.processItem.text);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "selected": a0,
          "not-selected": a1
        };
      };

      function ProcessItemComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProcessItemComponent_div_0_div_1_Template_div_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.swapShowProcessItemNameEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProcessItemComponent_div_0_div_1_div_1_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProcessItemComponent_div_0_div_1_div_2_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessItemComponent_div_0_div_1_div_3_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProcessItemComponent_div_0_div_1_textarea_4_Template, 2, 1, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProcessItemComponent_div_0_div_1_ng_template_5_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx_r1.processItem.visualState.isSelected, !ctx_r1.processItem.visualState.isSelected));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showProcessItemNameEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showProcessItemNameEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showProcessItemNameEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showProcessItemNameEdit)("ngIfElse", _r7);
        }
      }

      function ProcessItemComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessItemComponent_div_0_div_2_Template_div_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.createLink($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessItemComponent_div_0_div_2_Template_div_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.openSettings($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r2.processItem.visualState.isSelected, !ctx_r2.processItem.visualState.isSelected));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.processItem.text, " - ", ctx_r2.processItem.id, " ");
        }
      }

      function ProcessItemComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProcessItemComponent_div_0_div_1_Template, 7, 9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProcessItemComponent_div_0_div_2_Template, 7, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.processItem.constructor.name == "StepItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.processItem.constructor.name == "ConditionItem");
        }
      }

      var ProcessItemComponent = /*#__PURE__*/function () {
        function ProcessItemComponent(el) {
          _classCallCheck(this, ProcessItemComponent);

          this.el = el;
          this.linkCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.settingDialogueOpening = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isSettingsVisible = false;
          this.showProcessItemNameEdit = false;
        }

        _createClass(ProcessItemComponent, [{
          key: "processItem",
          get: function get() {
            return this._processItem;
          },
          set: function set(val) {
            this._processItem = val;
            this.showProcessItemNameEdit = this._processItem.justCreatedOnInterface;

            if (this.showProcessItemNameEdit) {
              var that = this;
              setTimeout(function () {
                that.processItemNameTextArea.nativeElement.focus();
                that.processItemNameTextArea.nativeElement.select();
              }, 60);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.processItem.visualState.component = this;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.processItem.topPx = Math.round(this.processItem.visualState.middleY / 80) * 80 - this.processItem.visualState.height / 2;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.el.nativeElement.offsetWidth;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.el.nativeElement.offsetHeight;
          }
        }, {
          key: "openSettings",
          value: function openSettings($event) {
            this.settingDialogueOpening.emit(this.processItem);
          }
        }, {
          key: "createLink",
          value: function createLink($event) {
            this.linkCreated.emit({
              processItem: this.processItem,
              event: $event
            });
          }
        }, {
          key: "swapShowProcessItemNameEdit",
          value: function swapShowProcessItemNameEdit() {
            var _this12 = this;

            this.showProcessItemNameEdit = true;
            setTimeout(function () {
              _this12.processItemNameTextArea.nativeElement.focus();
            }, 40);
          }
        }, {
          key: "submitProcessName",
          value: function submitProcessName() {
            this.showProcessItemNameEdit = false;
          }
        }, {
          key: "processItemNameSubmitted",
          value: function processItemNameSubmitted(event) {
            var code = event.keyCode ? event.keyCode : event.which;

            if (code == 13) {
              //Enter keycode
              this.showProcessItemNameEdit = false;
              return false;
            }
          }
        }]);

        return ProcessItemComponent;
      }();

      ProcessItemComponent.ɵfac = function ProcessItemComponent_Factory(t) {
        return new (t || ProcessItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ProcessItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProcessItemComponent,
        selectors: [["app-process-item"]],
        viewQuery: function ProcessItemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.processItemNameTextArea = _t.first);
          }
        },
        inputs: {
          processItem: "processItem"
        },
        outputs: {
          linkCreated: "linkCreated",
          settingDialogueOpening: "settingDialogueOpening"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["class", "box state-box noselect", 3, "ngClass", "dblclick", 4, "ngIf"], ["class", "box condition-box noselect", 3, "ngClass", 4, "ngIf"], [1, "box", "state-box", "noselect", 3, "ngClass", "dblclick"], ["class", "create-link-button box-button", "appClickStopPropagation", "", 3, "click", 4, "ngIf"], ["class", "settings-button box-button", "appClickStopPropagation", "", 3, "click", 4, "ngIf"], ["class", "submit-process-name-change", "appClickStopPropagation", "", 3, "click", 4, "ngIf"], ["class", "\n    process-item-textbox", "appClickStopPropagation", "", 3, "ngModel", "keypress", "ngModelChange", 4, "ngIf", "ngIfElse"], ["processItemNameLabel", ""], ["appClickStopPropagation", "", 1, "create-link-button", "box-button", 3, "click"], [1, "fas", "fa-long-arrow-alt-up"], ["appClickStopPropagation", "", 1, "settings-button", "box-button", 3, "click"], [1, "fas", "fa-wrench"], ["appClickStopPropagation", "", 1, "submit-process-name-change", 3, "click"], ["appClickStopPropagation", "", 1, "process-item-textbox", 3, "ngModel", "keypress", "ngModelChange"], ["processItemNameTextArea", ""], [1, "box", "condition-box", "noselect", 3, "ngClass"], [1, "condition-content"]],
        template: function ProcessItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProcessItemComponent_div_0_Template, 3, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.processItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _common_Directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_3__["ClickStopPropagationDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".noselect[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  \r\n  -webkit-user-select: none;\r\n  \r\n  \r\n  -moz-user-select: none;\r\n  \r\n  \r\n  user-select: none;\r\n  \r\n}\r\n\r\n.state-box[_ngcontent-%COMP%] {\r\n  background-color: whitesmoke;\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  border: 3px solid tomato;\r\n  padding: 3px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.not-selected[_ngcontent-%COMP%] {\r\n  border: 3px solid transparent;\r\n  padding: 3px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.settings-button[_ngcontent-%COMP%] {\r\n  background-color: dodgerblue;\r\n  position: absolute;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-top-right-radius: 3px;\r\n  border-top-left-radius: 3px;\r\n  text-align: center;\r\n  position: absolute;\r\n  left: 75px;\r\n  top: -35px;\r\n}\r\n\r\n.settings-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 27px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.create-link-button[_ngcontent-%COMP%] {\r\n  \r\n\r\n  background-color: dodgerblue;\r\n  position: absolute;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-top-right-radius: 3px;\r\n  border-top-left-radius: 3px;\r\n  text-align: center;\r\n  position: absolute;\r\n  left: 35px;\r\n  top: -35px;\r\n}\r\n\r\n.create-link-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg);\r\n  font-size: 30px;\r\n  margin-top: 4px;\r\n}\r\n\r\n\r\n\r\n.condition-box[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  transform: rotate(45deg);\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.condition-content[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.condition-box[_ngcontent-%COMP%]   .create-link-button[_ngcontent-%COMP%] {\r\n  margin-left: 7px;\r\n}\r\n\r\n.condition-box[_ngcontent-%COMP%]   .settings-button[_ngcontent-%COMP%] {\r\n  margin-left: 45px;\r\n}\r\n\r\n.condition-box[_ngcontent-%COMP%]   .settings-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg);\r\n  margin-top: 3px;\r\n}\r\n\r\n.condition-box[_ngcontent-%COMP%]   .create-link-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.box-button[_ngcontent-%COMP%] {\r\n  visibility: collapse;\r\n  transition: visibility 0.2s;\r\n}\r\n\r\n.box-button[_ngcontent-%COMP%]:hover {\r\n  visibility: visible;\r\n}\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%]:hover   .box-button[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.process-item-textbox[_ngcontent-%COMP%] {\r\n  width: 94%;\r\n  height: 95%;\r\n}\r\n\r\n.submit-process-name-change[_ngcontent-%COMP%] {\r\n  background-color: dodgerblue;\r\n  position: absolute;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  text-align: center;\r\n  position: absolute;\r\n  left: 75px;\r\n  top: 112px;\r\n}\r\n\r\n.submit-process-name-change[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUVYLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBRTVCLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakI7NEVBQzBFO0FBQzVFOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhOztFQUViLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFOzs7Ozs7Ozt1QkFRcUI7O0VBRXJCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7R0FFRzs7QUFDSDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InByb2Nlc3MtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vc2VsZWN0IHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLyogaU9TIFNhZmFyaSAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLyogU2FmYXJpICovXHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xyXG59XHJcblxyXG4uc3RhdGUtYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRvbWF0bztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ubm90LXNlbGVjdGVkIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA3NXB4O1xyXG4gIHRvcDogLTM1cHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1idXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLmNyZWF0ZS1saW5rLWJ1dHRvbiB7XHJcbiAgLyogbWFyZ2luLXRvcDogLTQxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzVweDtcclxuICB0b3A6IC0zNXB4O1xyXG59XHJcblxyXG4uY3JlYXRlLWxpbmstYnV0dG9uIGkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4vKiAuc2V0dGluZ3MtZm9ybSB7XHJcblxyXG59ICovXHJcblxyXG4uY29uZGl0aW9uLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGhlaWdodDogNzVweDtcclxufVxyXG5cclxuLmNvbmRpdGlvbi1jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4uY29uZGl0aW9uLWJveCAuY3JlYXRlLWxpbmstYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcblxyXG4uY29uZGl0aW9uLWJveCAuc2V0dGluZ3MtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxufVxyXG5cclxuLmNvbmRpdGlvbi1ib3ggLnNldHRpbmdzLWJ1dHRvbiBpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLmNvbmRpdGlvbi1ib3ggLmNyZWF0ZS1saW5rLWJ1dHRvbiBpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxufVxyXG5cclxuLmJveC1idXR0b24ge1xyXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycztcclxufVxyXG5cclxuLmJveC1idXR0b246aG92ZXIge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIC5ib3g6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOztcclxufSAqL1xyXG4uYm94OmhvdmVyIC5ib3gtYnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ucHJvY2Vzcy1pdGVtLXRleHRib3gge1xyXG4gIHdpZHRoOiA5NCU7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbi5zdWJtaXQtcHJvY2Vzcy1uYW1lLWNoYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNzVweDtcclxuICB0b3A6IDExMnB4O1xyXG59XHJcblxyXG4uc3VibWl0LXByb2Nlc3MtbmFtZS1jaGFuZ2UgZGl2IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Ll+m":
    /*!**********************************************!*\
      !*** ./src/app/services/Web/http.service.ts ***!
      \**********************************************/

    /*! exports provided: HttpService, HttpAuthInterceptorService */

    /***/
    function LlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpAuthInterceptorService", function () {
        return HttpAuthInterceptorService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_service_adress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web.service.adress */
      "6pm4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http, webServiceAddress, router) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.webServiceAddress = webServiceAddress;
          this.router = router;
        }

        _createClass(HttpService, [{
          key: "getServiceRootPath",
          value: function getServiceRootPath() {
            return this.webServiceAddress.get();
          }
        }, {
          key: "get",
          value: function get(source) {
            return this.http.get(this.getServiceRootPath() + source);
          }
        }, {
          key: "getByParams",
          value: function getByParams(source, params) {
            return this.http.get(this.getServiceRootPath() + source, {
              // tslint:disable-next-line: object-literal-shorthand
              params: params
            });
          }
        }, {
          key: "post",
          value: function post(source, objectToPost) {
            console.log('http method is called:' + this.getServiceRootPath() + source);
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            return this.http.post(this.getServiceRootPath() + source, objectToPost, httpOptions);
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_service_adress__WEBPACK_IMPORTED_MODULE_2__["WebServiceAddress"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac,
        providedIn: 'root'
      });

      var HttpAuthInterceptorService = /*#__PURE__*/function () {
        function HttpAuthInterceptorService() {
          _classCallCheck(this, HttpAuthInterceptorService);

          console.log('the http interceptor is constructed!');
        }

        _createClass(HttpAuthInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = localStorage.getItem('access_token');

            if (authToken !== '' && authToken != null) {
              var authReq = req.clone({
                headers: req.headers.set('Authorization', authToken)
              });
              return next.handle(authReq);
            } else {
              return next.handle(req);
            }
          }
        }]);

        return HttpAuthInterceptorService;
      }();

      HttpAuthInterceptorService.ɵfac = function HttpAuthInterceptorService_Factory(t) {
        return new (t || HttpAuthInterceptorService)();
      };

      HttpAuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HttpAuthInterceptorService,
        factory: HttpAuthInterceptorService.ɵfac
      });
      /***/
    },

    /***/
    "OxrJ":
    /*!***************************************************************************!*\
      !*** ./src/app/components/process-designer/process-designer.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ProcessDesignerComponent */

    /***/
    function OxrJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProcessDesignerComponent", function () {
        return ProcessDesignerComponent;
      });
      /* harmony import */


      var src_app_common_Models_ProcessItems_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/common/Models/ProcessItems/Link */
      "3KHD");
      /* harmony import */


      var src_app_common_Models_ProcessItems_StepItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/Models/ProcessItems/StepItem */
      "0dXe");
      /* harmony import */


      var src_app_common_Models_ProcessItems_ConditionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/Models/ProcessItems/ConditionItem */
      "rGpJ");
      /* harmony import */


      var src_app_common_Models_ProcessItems_Process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/common/Models/ProcessItems/Process */
      "Ytwe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_Business_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/Business/general.service */
      "ytpF");
      /* harmony import */


      var src_app_services_Business_userGroup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/Business/userGroup.service */
      "paod");
      /* harmony import */


      var _process_item_settings_process_item_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../process-item-settings/process-item-settings.component */
      "K/I7");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _process_item_process_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../process-item/process-item.component */
      "LbUI");
      /* harmony import */


      var _common_Directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/Directives/click-stop-propagation.directive */
      "BG+K");

      var _c0 = ["itemSettings"];
      var _c1 = ["thebox"];

      function ProcessDesignerComponent_div_14__svg_line_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "line", 16);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("x1", ctx_r4.lineCreationStartX)("y1", ctx_r4.lineCreationStartY)("x2", ctx_r4.lineCreationEndX)("y2", ctx_r4.lineCreationEndY);
        }
      }

      function ProcessDesignerComponent_div_14__svg_line_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "line", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function ProcessDesignerComponent_div_14__svg_line_6_Template__svg_line_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var link_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r8.mouseEnter(link_r7.startItem.visualState.middleX);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("x1", link_r7.startItem.visualState.middleX)("y1", link_r7.startItem.visualState.middleY)("x2", link_r7.endItem.visualState.middleX)("y2", link_r7.endItem.visualState.middleY)("stroke", link_r7.color);
        }
      }

      function ProcessDesignerComponent_div_14_app_process_item_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-process-item", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("linkCreated", function ProcessDesignerComponent_div_14_app_process_item_7_Template_app_process_item_linkCreated_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r11.startLinkProcess($event);
          })("mousedown", function ProcessDesignerComponent_div_14_app_process_item_7_Template_app_process_item_mousedown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var processItem_r10 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r13.onProcessItemMouseDown(processItem_r10, $event);
          })("settingDialogueOpening", function ProcessDesignerComponent_div_14_app_process_item_7_Template_app_process_item_settingDialogueOpening_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r14.openSettingDialogue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var processItem_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", processItem_r10.leftPx, "px")("top", processItem_r10.topPx, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("processItem", processItem_r10);
        }
      }

      function ProcessDesignerComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "marker", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProcessDesignerComponent_div_14__svg_line_5_Template, 1, 4, "line", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProcessDesignerComponent_div_14__svg_line_6_Template, 1, 5, "line", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProcessDesignerComponent_div_14_app_process_item_7_Template, 1, 5, "app-process-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var processItems_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLinkBeingCreated);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.links);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", processItems_r3.array);
        }
      }

      var ProcessDesignerComponent = /*#__PURE__*/function () {
        function ProcessDesignerComponent(cd, randomIdGenerator, userGroupService) {
          _classCallCheck(this, ProcessDesignerComponent);

          this.cd = cd;
          this.randomIdGenerator = randomIdGenerator;
          this.userGroupService = userGroupService;
          this.selectedProcessItems = [];
          this.isLinkBeingCreated = false;
          this.lineCreationStartX = 0;
          this.lineCreationStartY = 0;
          this.lineCreationEndX = 0;
          this.lineCreationEndY = 0;
          this.startedLinkItem = null;
        }

        _createClass(ProcessDesignerComponent, [{
          key: "recalculateViewLinks",
          value: function recalculateViewLinks() {
            var links = [];
            this.process.processItems.value.array.forEach(function (processItem) {
              processItem.links.forEach(function (link) {
                if (link.startItem === processItem) {
                  links.push(link);
                }
              });
            });
            this.links = links;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize(); // move it so somewhere else please

            this.process.processItems.subscribe(function (change) {
              if (change.changeMode == 'orderChanged') {
                var processItems = _toConsumableArray(change.array);

                processItems.shift().isFirstItem = true;
                processItems.forEach(function (element) {
                  element.isFirstItem = false;
                });
                console.log(change.array);
              }
            });
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.cd.detach();
            this.process = new src_app_common_Models_ProcessItems_Process__WEBPACK_IMPORTED_MODULE_3__["Process"](this.randomIdGenerator, this.userGroupService);
            this.process.addNewStep('Request Entry', 30 + 4 * 80, 100, true);
            this.cd.detectChanges();
            this.cd.reattach();
          }
        }, {
          key: "setSelection",
          value: function setSelection(processItem, selected) {
            if (processItem.visualState.isSelected === selected) {
              return;
            }

            processItem.visualState.isSelected = selected;

            if (!processItem.visualState.isSelected) {
              this.selectedProcessItems = this.selectedProcessItems.filter(function (item) {
                return item !== processItem;
              });
            } else {
              this.selectedProcessItems.push(processItem);
            }
          }
        }, {
          key: "clickBox",
          value: function clickBox() {
            this.deselectAll();
          }
        }, {
          key: "deselectAll",
          value: function deselectAll() {
            this.cd.detach();
            this.selectedProcessItems.forEach(function (selectedItem) {
              selectedItem.visualState.isSelected = false;
            });
            this.selectedProcessItems = [];
            this.cd.detectChanges();
            this.cd.reattach();
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.cd.detach();
            this.arrangeHorizontalDistances();
            var lastItem = this.process.processItems.value.array.slice(-1)[0];
            var newItem = new src_app_common_Models_ProcessItems_StepItem__WEBPACK_IMPORTED_MODULE_1__["StepItem"](this.randomIdGenerator.generate(), true, false, '[Type Step Name]', lastItem.topPx, lastItem.leftPx + 1, this.userGroupService.getDefaultResponsibleType(), this.userGroupService.getDefaultGroupAssignOption());
            this.process.processItems.addItem(newItem);
            this.arrangeHorizontalDistances();
            this.cd.detectChanges();
            this.cd.reattach();
          }
        }, {
          key: "addCondition",
          value: function addCondition() {
            this.cd.detach();
            this.arrangeHorizontalDistances();
            var lastItem = this.process.processItems.value.array.slice(-1)[0];
            var newItem = new src_app_common_Models_ProcessItems_ConditionItem__WEBPACK_IMPORTED_MODULE_2__["ConditionItem"](this.randomIdGenerator.generate(), true, false, '[Type Condition Name]', lastItem.topPx, lastItem.leftPx + 1);
            this.process.processItems.addItem(newItem);
            this.arrangeHorizontalDistances();
            this.cd.detectChanges();
            this.cd.reattach();
          }
        }, {
          key: "onProcessItemMouseDown",
          value: function onProcessItemMouseDown(processItem, $event) {
            var _this13 = this;

            var isClickForCompletingLink = this.handleEndLinkProcess(processItem);

            if (isClickForCompletingLink) {
              return;
            }

            this.cd.detach();

            if (!this.isLeftClick($event)) {
              return;
            } // we assume that it is clicked to make the box selected, not to drag and drop
            // we will use the value when mouse up event is caught


            var clickedForDragDrop = false;
            setTimeout(function () {
              // if it is not released(mouse up) within 100ms, (once it is released)-> we will consider the user's intention as drag and drop.
              clickedForDragDrop = true;
            }, 100); // we will revert this value and apply as selection if the click is for selection of the process item

            var isSelectedBeforeClick = processItem.visualState.isSelected; // we are making this selected
            // if the click is for drag & drop this is needed,
            // otherwise(selection) we will use the reverted value of isSelectedBeforeClick)

            this.setSelection(processItem, true); // we keep each item's initial position
            // we will use it if drag & drop operation is triggered

            this.selectedProcessItems.forEach(function (i) {
              i.visualState.leftPxBeforeMove = i.leftPx;
              i.visualState.topPxBeforeMove = i.topPx;
            }); // current mouse position (last position when drag & drop starts)

            var lastXRecorded = $event.clientX;
            var lastYRecorded = $event.clientY;

            document.onmouseup = function () {
              // user clicked for selection change
              if (!clickedForDragDrop || processItem.leftPx === processItem.visualState.leftPxBeforeMove && processItem.topPx === processItem.visualState.topPxBeforeMove) {
                _this13.setSelection(processItem, !isSelectedBeforeClick);

                _this13.selectedProcessItems.forEach(function (i) {
                  // if mouse position shifted during click (within 100ms between mousedown and mouseup),
                  // we recover the position of each selected shape.
                  i.leftPx = i.visualState.leftPxBeforeMove;
                  i.topPx = i.visualState.topPxBeforeMove;
                });
              } else {
                // user clicked for drag & drop
                _this13.cd.detectChanges(); // place each item in a vertical position that is k * 80


                _this13.selectedProcessItems.forEach(function (i) {
                  i.topPx = Math.round(i.visualState.middleY / 80) * 80 - i.visualState.height / 2;
                });

                _this13.arrangeHorizontalDistances();

                if (_this13.selectedProcessItems.length === 1) {
                  // if there was one item drag&dropped, the intention is not to change selection
                  _this13.setSelection(processItem, isSelectedBeforeClick);
                } else if (_this13.selectedProcessItems.length > 1) {
                  // if there were multiple item, it would be good to make sure that the one we drag&drop is also in selected state,
                  // even though it wasn't selected initially
                  // we can consider that user thinks that it is in the same group with other selected ones.
                  _this13.setSelection(processItem, true);
                }
              }

              document.onmouseup = null;
              document.onmousemove = null;

              _this13.cd.detectChanges();

              _this13.cd.reattach();
            };

            document.onmousemove = function ($onMouseMoveEvent) {
              // shift: difference between last recoded position and current mouse position
              var xShift = lastXRecorded - $onMouseMoveEvent.clientX;
              var yShift = lastYRecorded - $onMouseMoveEvent.clientY; // current mouse position will be used as last position in the next event trigger

              lastXRecorded = $onMouseMoveEvent.clientX;
              lastYRecorded = $onMouseMoveEvent.clientY; // apply x and y shifts to each selected element

              _this13.selectedProcessItems.forEach(function (i) {
                i.leftPx = i.leftPx - xShift;
                i.topPx = i.topPx - yShift;
              });

              _this13.cd.detectChanges();
            };

            this.cd.detectChanges();
          }
        }, {
          key: "isLeftClick",
          value: function isLeftClick($event) {
            return $event.which === 1;
          }
        }, {
          key: "arrangeHorizontalDistances",
          value: function arrangeHorizontalDistances() {
            if (this.process.processItems.value.array.length < 2) {
              return;
            }

            var sortedProcessItems = _toConsumableArray(this.process.processItems.value.array).sort(function (a, b) {
              return a.leftPx - b.leftPx;
            });

            this.process.processItems.updateOrder(sortedProcessItems);
            var buffer = 70;
            var i;

            for (i = 1; i < sortedProcessItems.length; i++) {
              var previousItem = sortedProcessItems[i - 1];
              var currentItem = sortedProcessItems[i];
              var minLeft = previousItem.leftPx + previousItem.visualState.width + buffer;

              if (currentItem.leftPx < minLeft) {
                currentItem.leftPx = minLeft;
              }
            }
          }
        }, {
          key: "startLinkProcess",
          value: function startLinkProcess($event) {
            var _this14 = this;

            var processItem = $event.processItem;
            var $clickedEvent = $event.event;
            var isClickForCompletingLink = this.handleEndLinkProcess(processItem);

            if (isClickForCompletingLink) {
              return;
            }

            this.isLinkBeingCreated = true;
            this.startedLinkItem = processItem;
            this.lineCreationEndX = this.lineCreationStartX = processItem.visualState.middleX;
            this.lineCreationEndY = this.lineCreationStartY = processItem.visualState.middleY;
            var drawingBoxRectangle = this.drawingBox.nativeElement.getBoundingClientRect();
            this.lineCreationEndX = $clickedEvent.clientX - drawingBoxRectangle.left;
            this.lineCreationEndY = $clickedEvent.clientY - drawingBoxRectangle.top;
            var previousX = $clickedEvent.clientX;
            var previousY = $clickedEvent.clientY;

            document.onmousemove = function (ev) {
              // return;
              var shiftX = previousX - ev.clientX;
              var shiftY = previousY - ev.clientY;
              previousX = ev.clientX;
              previousY = ev.clientY;
              _this14.lineCreationEndX = _this14.lineCreationEndX - shiftX;
              _this14.lineCreationEndY = _this14.lineCreationEndY - shiftY;
            };
          }
        }, {
          key: "handleEndLinkProcess",
          value: function handleEndLinkProcess(processItem) {
            if (!this.isLinkBeingCreated) {
              return false;
            }

            if (this.startedLinkItem == null) {
              // unexpected case
              return true;
            }

            if (this.startedLinkItem === processItem) {
              this.isLinkBeingCreated = false;
              this.startedLinkItem = null;
              return true;
            }

            var link = new src_app_common_Models_ProcessItems_Link__WEBPACK_IMPORTED_MODULE_0__["Link"]({
              actionName: 'Submit',
              startItem: this.startedLinkItem,
              endItem: processItem
            });
            this.startedLinkItem.links.push(link);
            processItem.links.push(link);
            this.recalculateViewLinks();
            this.isLinkBeingCreated = false;
            this.startedLinkItem = null;
            return true;
          }
        }, {
          key: "openSettingDialogue",
          value: function openSettingDialogue(stepItem) {
            this.settingItemComponent.open(stepItem);
          }
        }, {
          key: "mouseEnter",
          value: function mouseEnter(arg) {
            console.log(arg);
          }
        }, {
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            if (event.key == "Escape") {
              if (this.isLinkBeingCreated) {
                this.isLinkBeingCreated = false;
                this.startedLinkItem = null;
              }
            }
          }
        }]);

        return ProcessDesignerComponent;
      }();

      ProcessDesignerComponent.ɵfac = function ProcessDesignerComponent_Factory(t) {
        return new (t || ProcessDesignerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_Business_general_service__WEBPACK_IMPORTED_MODULE_5__["RandomIdGenerator"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_Business_userGroup_service__WEBPACK_IMPORTED_MODULE_6__["UserGroupService"]));
      };

      ProcessDesignerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: ProcessDesignerComponent,
        selectors: [["app-process-designer"]],
        viewQuery: function ProcessDesignerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.settingItemComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.drawingBox = _t.first);
          }
        },
        hostBindings: function ProcessDesignerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ProcessDesignerComponent_keyup_HostBindingHandler($event) {
              return ctx.handleKeyboardEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
          }
        },
        decls: 16,
        vars: 4,
        consts: [[3, "process"], ["itemSettings", ""], [1, "designer-wrapper"], [1, "header"], [1, "title"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["id", "the-box", 1, "box", 3, "click"], ["thebox", ""], ["class", "inner-box", 4, "ngIf"], [1, "inner-box"], ["width", "100", "height", "100", 2, "overflow", "visible"], ["id", "arrow-end", "markerWidth", "2", "markerHeight", "2", "refX", "12", "refY", "1", "orient", "auto", "markerUnits", "strokeWidth"], ["d", "M0,0 L0,2 L1,1 z", "fill", "white"], ["stroke-width", "10", "stroke", "green", "marker-end", "url(#arrow-end)", 4, "ngIf"], ["class", "connector", "stroke-width", "10", "marker-end", "url(#arrow-end)", 3, "mouseenter", 4, "ngFor", "ngForOf"], ["appClickStopPropagation", "", 3, "processItem", "left", "top", "linkCreated", "mousedown", "settingDialogueOpening", 4, "ngFor", "ngForOf"], ["stroke-width", "10", "stroke", "green", "marker-end", "url(#arrow-end)"], ["stroke-width", "10", "marker-end", "url(#arrow-end)", 1, "connector", 3, "mouseenter"], ["appClickStopPropagation", "", 3, "processItem", "linkCreated", "mousedown", "settingDialogueOpening"]],
        template: function ProcessDesignerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-process-item-settings", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Process Builder: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New head count request");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessDesignerComponent_Template_button_click_8_listener() {
              return ctx.addItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " New Step ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessDesignerComponent_Template_button_click_10_listener() {
              return ctx.addCondition();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " New Condition ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessDesignerComponent_Template_div_click_12_listener() {
              return ctx.clickBox();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProcessDesignerComponent_div_14_Template, 8, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("process", ctx.process);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 2, ctx.process.processItems));
          }
        },
        directives: [_process_item_settings_process_item_settings_component__WEBPACK_IMPORTED_MODULE_7__["ProcessItemSettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _process_item_process_item_component__WEBPACK_IMPORTED_MODULE_10__["ProcessItemComponent"], _common_Directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_11__["ClickStopPropagationDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: [".designer-wrapper[_ngcontent-%COMP%] {\r\n  font-family: \"Comfortaa\";\r\n  overflow-x: auto;\r\n\r\n  background-color: #333;\r\n  background-size: 80px 80px;\r\n  background-image: linear-gradient(to bottom, #555 1px, transparent 1px);\r\n\r\n  height: 100%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 15px 0px 15px 6px;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\napp-process-item[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font: bold;\r\n  \r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n  \r\n\r\n  \r\n\r\n  height: 100%;\r\n}\r\n\r\n.inner-box[_ngcontent-%COMP%] {\r\n  \r\n  \r\n\r\n  position: -webkit-sticky;\r\n\r\n  position: sticky;\r\n}\r\n\r\n.connector[_ngcontent-%COMP%]:hover {\r\n  stroke: yellow;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n  margin-bottom: 6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtZGVzaWduZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7O0VBRWhCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsdUVBQXVFOztFQUV2RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7OzRFQUUwRTtFQUMxRSw2QkFBNkI7O0VBRTdCLG1CQUFtQjs7RUFFbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjs7RUFFakIsd0JBQWdCOztFQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJwcm9jZXNzLWRlc2lnbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzaWduZXItd3JhcHBlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCI7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLXNpemU6IDgwcHggODBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTU1IDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDZweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuYXBwLXByb2Nlc3MtaXRlbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQ6IGJvbGQ7XHJcbiAgLyogbWFyZ2luOiAxNXB4IDBweCAxNXB4IDZweDsgKi9cclxufVxyXG5cclxuLmJveCB7XHJcbiAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgLyogaGVpZ2h0OiA2MDBweDsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODBweCA4MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1NTUgMXB4LCB0cmFuc3BhcmVudCAxcHgpOyAqL1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG5cclxuICAvKiB3aWR0aDogMjgwMnB4OyAqL1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbm5lci1ib3gge1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuXHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuLmNvbm5lY3Rvcjpob3ZlciB7XHJcbiAgc3Ryb2tlOiB5ZWxsb3c7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "QccQ":
    /*!******************************************************!*\
      !*** ./src/app/services/Web/auth-key.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: AuthKeyInterceptor */

    /***/
    function QccQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthKeyInterceptor", function () {
        return AuthKeyInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthKeyInterceptor = /*#__PURE__*/function () {
        function AuthKeyInterceptor() {
          _classCallCheck(this, AuthKeyInterceptor);
        }

        _createClass(AuthKeyInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var tempUserId = localStorage.getItem('temp_user_id');

            if (tempUserId !== '' && tempUserId != null) {
              var authReq = request.clone({
                headers: request.headers.set('temp_user_id', tempUserId)
              });
              return next.handle(authReq);
            } else {
              return next.handle(request);
            }
          }
        }]);

        return AuthKeyInterceptor;
      }();

      AuthKeyInterceptor.ɵfac = function AuthKeyInterceptor_Factory(t) {
        return new (t || AuthKeyInterceptor)();
      };

      AuthKeyInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthKeyInterceptor,
        factory: AuthKeyInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "S+9I":
    /*!***********************************************************************!*\
      !*** ./src/app/components/task-completed/task-completed.component.ts ***!
      \***********************************************************************/

    /*! exports provided: TaskCompletedComponent */

    /***/
    function S9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskCompletedComponent", function () {
        return TaskCompletedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function TaskCompletedComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
        }
      }

      function TaskCompletedComponent_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
        }
      }

      function TaskCompletedComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
        }
      }

      function TaskCompletedComponent_h1_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Congrats!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskCompletedComponent_h1_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "That's it!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskCompletedComponent_h1_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskCompletedComponent_h1_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Task Completed!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskCompletedComponent_h1_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The process with all tasks are now completed!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskCompletedComponent_h1_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The process is canceled.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function TaskCompletedComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next task is");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Assigned to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/EditTask/" + ctx_r9.taskCompletedModel.processId + "/" + ctx_r9.taskCompletedModel.processInstanceId + "/" + ctx_r9.taskCompletedModel.taskInstanceId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.taskCompletedModel.taskName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.taskCompletedModel.assigneeName);
        }
      }

      var TaskCompletedComponent = /*#__PURE__*/function () {
        function TaskCompletedComponent() {
          _classCallCheck(this, TaskCompletedComponent);
        }

        _createClass(TaskCompletedComponent, [{
          key: "nextTaskUrl",
          get: function get() {
            return '';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TaskCompletedComponent;
      }();

      TaskCompletedComponent.ɵfac = function TaskCompletedComponent_Factory(t) {
        return new (t || TaskCompletedComponent)();
      };

      TaskCompletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskCompletedComponent,
        selectors: [["app-task-completed"]],
        inputs: {
          taskCompletedModel: "taskCompletedModel"
        },
        decls: 12,
        vars: 10,
        consts: [[1, "wrapper"], [1, "congrats-wrapper"], ["class", "image", "src", "/assets/images/completed-green.png", 4, "ngIf"], ["class", "image", "src", "/assets/images/cancel.jpg", 4, "ngIf"], ["class", "congrats-text", 4, "ngIf"], ["class", "task-completed-text", 4, "ngIf"], [4, "ngIf"], ["src", "/assets/images/completed-green.png", 1, "image"], ["src", "/assets/images/cancel.jpg", 1, "image"], [1, "congrats-text"], [1, "task-completed-text"], [1, "next-task", 3, "routerLink"], [1, "assigned-to-label"], [1, "assigned-to"]],
        template: function TaskCompletedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskCompletedComponent_img_2_Template, 1, 0, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskCompletedComponent_img_3_Template, 1, 0, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskCompletedComponent_img_4_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskCompletedComponent_h1_5_Template, 2, 0, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskCompletedComponent_h1_6_Template, 2, 0, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskCompletedComponent_h1_7_Template, 2, 0, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskCompletedComponent_h1_8_Template, 2, 0, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskCompletedComponent_h1_9_Template, 2, 0, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskCompletedComponent_h1_10_Template, 2, 0, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskCompletedComponent_ng_container_11_Template, 9, 5, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.taskCompletedModel.processCompleted && !ctx.taskCompletedModel.processCanceled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskCompletedModel.processCompleted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskCompletedModel.processCanceled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.taskCompletedModel.processCompleted && !ctx.taskCompletedModel.processCanceled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskCompletedModel.processCompleted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskCompletedModel.processCanceled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.taskCompletedModel.processCompleted && !ctx.taskCompletedModel.processCanceled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskCompletedModel.processCompleted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskCompletedModel.processCanceled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.taskCompletedModel.processCompleted && !ctx.taskCompletedModel.processCanceled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.congrats-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  height: 256px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.task-completed-text[_ngcontent-%COMP%] {\r\n  margin-bottom: 63px;\r\n}\r\n\r\n.congrats-text[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n}\r\n\r\n.assigned-to-label[_ngcontent-%COMP%] {\r\n  margin-top: 23px;\r\n}\r\n\r\n.assigned-to[_ngcontent-%COMP%] {\r\n  line-height: 26px;\r\n}\r\n\r\n.next-task[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stY29tcGxldGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJ0YXNrLWNvbXBsZXRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbmdyYXRzLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGhlaWdodDogMjU2cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50YXNrLWNvbXBsZXRlZC10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiA2M3B4O1xyXG59XHJcblxyXG4uY29uZ3JhdHMtdGV4dCB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYXNzaWduZWQtdG8tbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDIzcHg7XHJcbn1cclxuLmFzc2lnbmVkLXRvIHtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG4ubmV4dC10YXNrIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/left-menu/left-menu.component */
      "4Zj7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'bpm.ist';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [["fxLayout", "row"], [2, "height", "100vh", "overflow-y", "auto", "width", "100%"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-left-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__["LeftMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Uint":
    /*!****************************************************!*\
      !*** ./src/app/common/Models/Field/FieldInStep.ts ***!
      \****************************************************/

    /*! exports provided: FieldInStep */

    /***/
    function Uint(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldInStep", function () {
        return FieldInStep;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../PropertyChangedTypes */
      "jk7T");

      var FieldInStep = /*#__PURE__*/function () {
        function FieldInStep(id, retrievedFromServer, field, _readOnly, isRequired) {
          var _this15 = this;

          _classCallCheck(this, FieldInStep);

          this.id = id;
          this.retrievedFromServer = retrievedFromServer;
          this.field = field;
          this._readOnly = _readOnly;
          this.isRequired = isRequired;
          this.otherFieldInStepsSubscripbtions = [];
          this.deleted = false; // assignment of this value might be moved to a central point.

          this.editableFieldUsedInAnotherStep = false;
          this.propertyChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.visualState = {
            justDeleted: false // use this for showing, undo?
            // visual state icin tip olustur
            // yeni mi ekleniyor yoksa baska state'ten mi geliyor onu tut
            // bir takim field'lar degisince, eger baska state'ten eklendiyse, diger yerleri de etkiliyor ona gore diye uyar.

          };
          this.field.fieldInStepList.subscribe(function (fieldInStepList) {
            _this15.subscribeFieldInStepList(fieldInStepList);
          });
        }

        _createClass(FieldInStep, [{
          key: "subscribeFieldInStepList",
          value: function subscribeFieldInStepList(fieldInStepList) {
            var _this16 = this;

            this.otherFieldInStepsSubscripbtions.forEach(function (element) {
              element.unsubscribe();
            });
            this.otherFieldInStepsSubscripbtions = [];
            fieldInStepList.forEach(function (element) {
              var subscription = element.propertyChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
                return v.propertyName == Object(_PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_2__["nameof"])("readOnly");
              })).subscribe(function (v) {
                _this16.calculateEditableFieldUsedInAnotherStep();
              });

              _this16.otherFieldInStepsSubscripbtions.push(subscription);
            });
            this.calculateEditableFieldUsedInAnotherStep();
          }
        }, {
          key: "readOnly",
          get: function get() {
            return this._readOnly;
          },
          set: function set(val) {
            var oldValue = this._readOnly;
            this._readOnly = val;
            this.propertyChanged.next(new _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_2__["PC"]('readOnly', val, oldValue, this));
          }
        }, {
          key: "calculateEditableFieldUsedInAnotherStep",
          value: function calculateEditableFieldUsedInAnotherStep() {
            var _this17 = this;

            this.editableFieldUsedInAnotherStep = this.field.fieldInStepList.value.some(function (f) {
              return f != _this17 && f.readOnly == false && f.deleted == false;
            });
          }
        }]);

        return FieldInStep;
      }();
      /***/

    },

    /***/
    "VQQT":
    /*!**********************************************!*\
      !*** ./src/app/common/Models/Field/Field.ts ***!
      \**********************************************/

    /*! exports provided: Field, GeneralFieldSettings */

    /***/
    function VQQT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Field", function () {
        return Field;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralFieldSettings", function () {
        return GeneralFieldSettings;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../PropertyChangedTypes */
      "jk7T");

      var Field = /*#__PURE__*/function () {
        // tslint:disable-next-line: variable-name
        function Field(_id) {
          _classCallCheck(this, Field);

          this._id = _id;
          this.fieldInStepList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this.propertyChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // tslint:disable-next-line: variable-name

          this._name = ''; // tslint:disable-next-line: variable-name

          this._fieldType = null;
          this.numericFieldSettings = {
            hasMinValueRestriction: false,
            minValue: null,
            hasMaxValueRestriction: false,
            maxValue: null
          };
          this.textFieldSettings = {
            multiline: false,
            numberOfLines: 2,
            hasMinNumberOfChars: false,
            minNumberOfChars: null,
            hasMaxNumberOfChars: false,
            maxNumberOfChars: null,
            setRegexValidation: false,
            regex: null,
            visualState: {// validateAsEmail: false,
              // showAdvancedSettings: false
            }
          };
          this.generalFieldSettings = new GeneralFieldSettings(this);
        }

        _createClass(Field, [{
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            var oldValue = this._name;
            this._name = value;
            this.propertyChanged.next(new _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_1__["PC"]('name', value, oldValue, this));
          }
        }, {
          key: "fieldType",
          get: function get() {
            return this._fieldType;
          },
          set: function set(value) {
            var oldValue = this._fieldType;
            this._fieldType = value;
            this.propertyChanged.next(new _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_1__["PC"]('fieldType', value, oldValue, this));
          }
        }]);

        return Field;
      }();

      var GeneralFieldSettings = /*#__PURE__*/function () {
        function GeneralFieldSettings(field) {
          _classCallCheck(this, GeneralFieldSettings);

          this.field = field;
        }

        _createClass(GeneralFieldSettings, [{
          key: "multipleValue",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            var oldValue = this._multiple;
            this._multiple = value; // TODO this usage may not be ideal. no final model yet, for hierarcial data structures.

            this.field.propertyChanged.next(new _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_1__["PC"]('generalFieldSettings', value, oldValue, this.field));
          }
        }]);

        return GeneralFieldSettings;
      }();
      /***/

    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/Auth/auth.service */
      "rgqs");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-inputs */
      "QYJQ");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.busy = false;
          this.username = '';
          this.password = '';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.logout();
          }
        }, {
          key: "login",
          value: function login() {
            this.authService.login(this.username, this.password);
            console.log(this.username, this.password);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 12,
        vars: 3,
        consts: [["fxLayout", "", "fxLayoutAlign", "center center", 2, "height", "100%"], [2, "width", "300px", "border-radius", "8px"], [2, "text-align", "center"], ["src", "/assets/images/logo.png", 2, "width", "150px", "height", "154.2px", "border-radius", "10px"], [2, "margin-top", "20px", "text-align", "center", "font-size", "24px"], [2, "margin-top", "20px"], ["placeholder", "User name", "cssClass", "e-outline", "floatLabelType", "Always", 3, "value", "valueChange"], [2, "margin-top", "10px"], ["placeholder", "Password", "cssClass", "e-outline", "floatLabelType", "Always", 3, "value", "valueChange"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 2, "margin-top", "10px", 3, "disabled", "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ejs-textbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LoginComponent_Template_ejs_textbox_valueChange_7_listener($event) {
              return ctx.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ejs-textbox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LoginComponent_Template_ejs_textbox_valueChange_9_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.busy);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_4__["TextBoxComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Ytwe":
    /*!*******************************************************!*\
      !*** ./src/app/common/Models/ProcessItems/Process.ts ***!
      \*******************************************************/

    /*! exports provided: Process */

    /***/
    function Ytwe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Process", function () {
        return Process;
      });
      /* harmony import */


      var _Field_Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Field/Field */
      "VQQT");
      /* harmony import */


      var _StepItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./StepItem */
      "0dXe");
      /* harmony import */


      var _Field_FieldInStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Field/FieldInStep */
      "Uint");
      /* harmony import */


      var _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../PropertyChangedTypes */
      "jk7T");
      /* harmony import */


      var _Responsible_ProcessStarter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Responsible/ProcessStarter */
      "pLgg");

      var Process = /*#__PURE__*/function () {
        function Process(randomIdGenerator, userGroupService) {
          var _this18 = this;

          _classCallCheck(this, Process);

          this.randomIdGenerator = randomIdGenerator;
          this.userGroupService = userGroupService;
          this.processItems = new _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](this);
          this.links = [];
          this.fields = new _PropertyChangedTypes__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](this);
          this.userTypeFields = [];
          this.groupTypeFields = [];
          this.multipleUserTypeFields = [];
          this.multipleGroupTypeFields = [];
          this.processStarter = new _Responsible_ProcessStarter__WEBPACK_IMPORTED_MODULE_4__["ProcessStarter"](this.userGroupService.getDefaultProcessStarter(), []);
          this.fields.subscribe(function (change) {
            _this18.setAllUserTypeFields(change);
          });
        }

        _createClass(Process, [{
          key: "addNewField",
          value: function addNewField(stepItem) {
            var field = new _Field_Field__WEBPACK_IMPORTED_MODULE_0__["Field"](this.randomIdGenerator.generate());
            this.fields.addItem(field);
            var fieldInStep = new _Field_FieldInStep__WEBPACK_IMPORTED_MODULE_2__["FieldInStep"](this.randomIdGenerator.generate(), false, field, false, false);
            field.fieldInStepList.next([].concat(_toConsumableArray(field.fieldInStepList.value), [fieldInStep]));
            stepItem.fieldsInStep.push(fieldInStep);
            return {
              createdFieldInStep: fieldInStep
            };
          }
        }, {
          key: "addNewStepField",
          value: function addNewStepField(stepItem, field) {// TODO: work on scenarios
            // initializing with values from server and
            // creating values from ui
            // creating a fresh process
          }
        }, {
          key: "addNewStep",
          value: function addNewStep(stepName, topPx, leftPx) {
            var isFirstItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var newStep = new _StepItem__WEBPACK_IMPORTED_MODULE_1__["StepItem"](this.randomIdGenerator.generate(), true, false, stepName, topPx, leftPx, this.userGroupService.getDefaultResponsibleType(), this.userGroupService.getDefaultGroupAssignOption());
            newStep.isFirstItem = isFirstItem;
            this.processItems.addItem(newStep);
          }
        }, {
          key: "deleteField",
          value: function deleteField(field) {// TODO: check if the field is a user field or group field picked as the responsible in a step
            // TODO: call value changed
            //((field as any).processSubscription as Subscription).unsubscribe();
            // stop deletion or ask if they want to remove that field being selected
          }
        }, {
          key: "setAllUserTypeFields",
          value: function setAllUserTypeFields(change) {
            var _a, _b;

            var fieldAddedOrRemovedWithUserOrGroupFieldType = (change.changeMode == 'added' || change.changeMode == 'removed') && (((_a = change.changedValue.fieldType) === null || _a === void 0 ? void 0 : _a.code) == 'user' || ((_b = change.changedValue.fieldType) === null || _b === void 0 ? void 0 : _b.code) == 'group');
            var fieldFieldTypeOrGeneralFieldSettingsChanged = change.changeMode == 'itemPropertyChanged' && (change.itemPropertyChanged.propertyName == 'fieldType' || change.itemPropertyChanged.propertyName == 'generalFieldSettings');

            if (!fieldAddedOrRemovedWithUserOrGroupFieldType && !fieldFieldTypeOrGeneralFieldSettingsChanged) {
              return;
            }

            var fields = this.fields.getArray();
            this.userTypeFields = fields.filter(function (field) {
              var _a;

              return ((_a = field.fieldType) === null || _a === void 0 ? void 0 : _a.code) === 'user' && !field.generalFieldSettings.multipleValue;
            });
            this.multipleUserTypeFields = fields.filter(function (field) {
              var _a;

              return ((_a = field.fieldType) === null || _a === void 0 ? void 0 : _a.code) === 'user' && field.generalFieldSettings.multipleValue;
            });
            this.groupTypeFields = fields.filter(function (field) {
              var _a;

              return ((_a = field.fieldType) === null || _a === void 0 ? void 0 : _a.code) === 'group' && !field.generalFieldSettings.multipleValue;
            });
            this.multipleGroupTypeFields = fields.filter(function (field) {
              var _a;

              return ((_a = field.fieldType) === null || _a === void 0 ? void 0 : _a.code) === 'group' && field.generalFieldSettings.multipleValue;
            });
          }
        }]);

        return Process;
      }();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./material-module */
      "j5wd");
      /* harmony import */


      var _ui_controls_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ui-controls-module */
      "mhZz");
      /* harmony import */


      var _components_process_designer_process_designer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/process-designer/process-designer.component */
      "OxrJ");
      /* harmony import */


      var _components_process_item_process_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/process-item/process-item.component */
      "LbUI");
      /* harmony import */


      var _components_process_item_settings_process_item_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/process-item-settings/process-item-settings.component */
      "K/I7");
      /* harmony import */


      var _common_Directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./common/Directives/click-stop-propagation.directive */
      "BG+K");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/edit-task/edit-task.component */
      "C+1D");
      /* harmony import */


      var _components_list_processes_list_processes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/list-processes/list-processes.component */
      "EVZ3");
      /* harmony import */


      var _components_task_completed_task_completed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/task-completed/task-completed.component */
      "S+9I");
      /* harmony import */


      var _common_Pipes_custom_date_time_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./common/Pipes/custom-date-time.pipe */
      "4X+j");
      /* harmony import */


      var _components_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/list-tasks/list-tasks.component */
      "BrM3");
      /* harmony import */


      var _components_my_groups_tasks_my_groups_tasks_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/my-groups-tasks/my-groups-tasks.component */
      "HCR1");
      /* harmony import */


      var _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/left-menu/left-menu.component */
      "4Zj7");
      /* harmony import */


      var _components_form_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/form/form.component */
      "x83m");
      /* harmony import */


      var _components_fields_generic_field_generic_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/fields/generic-field/generic-field.component */
      "dZL+");
      /* harmony import */


      var _components_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/fields/date-field/date-field.component */
      "pJQG");
      /* harmony import */


      var _components_fields_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/fields/text-field/text-field.component */
      "tpZE");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _services_Web_auth_key_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./services/Web/auth-key.interceptor */
      "QccQ");
      /* harmony import */


      var _components_process_item_settings_components_responsible_responsible_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/process-item-settings-components/responsible/responsible.component */
      "gEWz");
      /* harmony import */


      var _components_process_item_settings_components_step_form_fields_step_form_fields_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/process-item-settings-components/step-form-fields/step-form-fields.component */
      "Dbx/");
      /* harmony import */


      var _components_process_item_settings_components_field_definition_editor_field_definition_editor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/process-item-settings-components/field-definition-editor/field-definition-editor.component */
      "6Yjd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var appearance = {
        appearance: 'outline'
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
          useValue: appearance
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _services_Web_auth_key_interceptor__WEBPACK_IMPORTED_MODULE_26__["AuthKeyInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _ui_controls_module__WEBPACK_IMPORTED_MODULE_8__["UiControlsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_process_designer_process_designer_component__WEBPACK_IMPORTED_MODULE_9__["ProcessDesignerComponent"], _components_process_item_process_item_component__WEBPACK_IMPORTED_MODULE_10__["ProcessItemComponent"], _components_process_item_settings_process_item_settings_component__WEBPACK_IMPORTED_MODULE_11__["ProcessItemSettingsComponent"], _common_Directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_12__["ClickStopPropagationDirective"], _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_14__["EditTaskComponent"], _components_list_processes_list_processes_component__WEBPACK_IMPORTED_MODULE_15__["ListProcessesComponent"], _components_task_completed_task_completed_component__WEBPACK_IMPORTED_MODULE_16__["TaskCompletedComponent"], _common_Pipes_custom_date_time_pipe__WEBPACK_IMPORTED_MODULE_17__["CustomDateTimePipe"], _common_Pipes_custom_date_time_pipe__WEBPACK_IMPORTED_MODULE_17__["CustomDatePipe"], _components_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_18__["ListTasksComponent"], _components_my_groups_tasks_my_groups_tasks_component__WEBPACK_IMPORTED_MODULE_19__["MyGroupsTasksComponent"], _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_20__["LeftMenuComponent"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_21__["FormComponent"], _components_fields_generic_field_generic_field_component__WEBPACK_IMPORTED_MODULE_22__["GenericFieldComponent"], _components_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_23__["DateFieldComponent"], _components_fields_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_24__["TextFieldComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], _components_process_item_settings_components_responsible_responsible_component__WEBPACK_IMPORTED_MODULE_27__["ResponsibleComponent"], _components_process_item_settings_components_step_form_fields_step_form_fields_component__WEBPACK_IMPORTED_MODULE_28__["StepFormFieldsComponent"], _components_process_item_settings_components_field_definition_editor_field_definition_editor_component__WEBPACK_IMPORTED_MODULE_29__["FieldDefinitionEditorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _ui_controls_module__WEBPACK_IMPORTED_MODULE_8__["UiControlsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetComponentScope"](_components_form_form_component__WEBPACK_IMPORTED_MODULE_21__["FormComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_31__["NgForOf"], _components_fields_generic_field_generic_field_component__WEBPACK_IMPORTED_MODULE_22__["GenericFieldComponent"]], []);
      /***/

    },

    /***/
    "ZS8O":
    /*!***********************************************************!*\
      !*** ./src/app/common/Models/ProcessItems/ProcessItem.ts ***!
      \***********************************************************/

    /*! exports provided: ProcessItem */

    /***/
    function ZS8O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProcessItem", function () {
        return ProcessItem;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ProcessItemVisualState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ProcessItemVisualState */
      "qlXl");

      var ProcessItem = /*#__PURE__*/function () {
        function ProcessItem(id, justCreatedOnInterface, retrievedFromServer) {
          var topPx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 80;
          var leftPx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 80;
          var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
          var deletable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
          var isFirstItem = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

          _classCallCheck(this, ProcessItem);

          this.id = id;
          this.justCreatedOnInterface = justCreatedOnInterface;
          this.retrievedFromServer = retrievedFromServer;
          this.topPx = topPx;
          this.leftPx = leftPx;
          this.text = text;
          this.deletable = deletable;
          this.isFirstItem = isFirstItem;
          this.propertyChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.links = []; // persistent
          // tslint:disable-next-line: variable-name

          this._visualState = new _ProcessItemVisualState__WEBPACK_IMPORTED_MODULE_1__["ProcessItemVisualState"](this);
        }

        _createClass(ProcessItem, [{
          key: "visualState",
          get: function get() {
            return this._visualState;
          }
        }]);

        return ProcessItem;
      }();
      /***/

    },

    /***/
    "aoop":
    /*!*******************************************************************!*\
      !*** ./src/app/common/Models/ProcessItems/StepItemVisualState.ts ***!
      \*******************************************************************/

    /*! exports provided: StepItemVisualState */

    /***/
    function aoop(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepItemVisualState", function () {
        return StepItemVisualState;
      });
      /* harmony import */


      var _ProcessItemVisualState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ProcessItemVisualState */
      "qlXl");

      var StepItemVisualState = /*#__PURE__*/function (_ProcessItemVisualSta) {
        _inherits(StepItemVisualState, _ProcessItemVisualSta);

        var _super2 = _createSuper(StepItemVisualState);

        function StepItemVisualState() {
          _classCallCheck(this, StepItemVisualState);

          return _super2.apply(this, arguments);
        }

        return StepItemVisualState;
      }(_ProcessItemVisualState__WEBPACK_IMPORTED_MODULE_0__["ProcessItemVisualState"]);
      /***/

    },

    /***/
    "dZL+":
    /*!****************************************************************************!*\
      !*** ./src/app/components/fields/generic-field/generic-field.component.ts ***!
      \****************************************************************************/

    /*! exports provided: GenericFieldComponent */

    /***/
    function dZL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericFieldComponent", function () {
        return GenericFieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../date-field/date-field.component */
      "pJQG");
      /* harmony import */


      var _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../text-field/text-field.component */
      "tpZE");

      function GenericFieldComponent_app_date_field_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-date-field", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx_r0.field);
        }
      }

      function GenericFieldComponent_app_text_field_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-text-field", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx_r1.field);
        }
      }

      function GenericFieldComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var GenericFieldComponent = /*#__PURE__*/function () {
        function GenericFieldComponent() {
          _classCallCheck(this, GenericFieldComponent);
        }

        _createClass(GenericFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GenericFieldComponent;
      }();

      GenericFieldComponent.ɵfac = function GenericFieldComponent_Factory(t) {
        return new (t || GenericFieldComponent)();
      };

      GenericFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GenericFieldComponent,
        selectors: [["app-generic-field"]],
        inputs: {
          field: "field"
        },
        decls: 6,
        vars: 4,
        consts: [[2, "width", "500px"], [3, "ngSwitch"], [3, "field", 4, "ngSwitchCase"], [1, "error-message-wrapper"], [4, "ngIf"], [3, "field"]],
        template: function GenericFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GenericFieldComponent_app_date_field_2_Template, 1, 1, "app-date-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GenericFieldComponent_app_text_field_3_Template, 1, 1, "app-text-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GenericFieldComponent_div_5_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.field.fieldType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.field.formControl.errors == null ? null : ctx.field.formControl.errors.required);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_2__["DateFieldComponent"], _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_3__["TextFieldComponent"]],
        styles: [".error-message-wrapper[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  font-size: 10px;\r\n  color: red;\r\n  height: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyaWMtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJnZW5lcmljLWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZS13cmFwcGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "g+Np":
    /*!****************************************************!*\
      !*** ./src/app/common/Models/Responsible/Group.ts ***!
      \****************************************************/

    /*! exports provided: Group */

    /***/
    function gNp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return Group;
      });

      var Group = function Group(groupName, groupId) {
        _classCallCheck(this, Group);

        this.groupName = groupName;
        this.groupId = groupId;
      };
      /***/

    },

    /***/
    "gEWz":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/process-item-settings-components/responsible/responsible.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ResponsibleComponent */

    /***/
    function gEWz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResponsibleComponent", function () {
        return ResponsibleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_Business_userGroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/Business/userGroup.service */
      "paod");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-dropdowns */
      "jcQU");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function ResponsibleComponent_div_0_div_1_ng_template_2_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.name);
        }
      }

      function ResponsibleComponent_div_0_div_1_ng_template_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " [No field exists]");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.name);
        }
      }

      function ResponsibleComponent_div_0_div_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResponsibleComponent_div_0_div_1_ng_template_2_span_0_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResponsibleComponent_div_0_div_1_ng_template_2_span_1_Template, 5, 1, "span", 0);
        }

        if (rf & 2) {
          var data_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.visualState.enabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r7.visualState.enabled);
        }
      }

      function ResponsibleComponent_div_0_div_1_ng_template_4_div_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hide advanced options");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function ResponsibleComponent_div_0_div_1_ng_template_4_div_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Show advanced options");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function ResponsibleComponent_div_0_div_1_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResponsibleComponent_div_0_div_1_ng_template_4_div_0_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r16.showAdvancedResponsibleTypes = !ctx_r16.showAdvancedResponsibleTypes;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResponsibleComponent_div_0_div_1_ng_template_4_div_0_ng_container_2_Template, 2, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ResponsibleComponent_div_0_div_1_ng_template_4_div_0_ng_container_3_Template, 2, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.showAdvancedResponsibleTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.showAdvancedResponsibleTypes);
        }
      }

      function ResponsibleComponent_div_0_div_1_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResponsibleComponent_div_0_div_1_ng_template_4_div_0_Template, 4, 2, "div", 7);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.stepItem == null ? null : ctx_r6.stepItem.responsible == null ? null : ctx_r6.stepItem.responsible.visualState.show_ShowHideAdvancedOptions);
        }
      }

      var _c0 = function _c0() {
        return {
          value: "code",
          text: "name"
        };
      };

      function ResponsibleComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ejs-dropdownlist", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ResponsibleComponent_div_0_div_1_Template_ejs_dropdownlist_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r18.stepItem.responsible.responsibleType = $event.itemData;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResponsibleComponent_div_0_div_1_ng_template_2_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResponsibleComponent_div_0_div_1_ng_template_4_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.showingResponsibleTypes)("ngModel", ctx_r1.stepItem == null ? null : ctx_r1.stepItem.responsible == null ? null : ctx_r1.stepItem.responsible.responsibleType == null ? null : ctx_r1.stepItem.responsible.responsibleType.code)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("allowFiltering", false);
        }
      }

      function ResponsibleComponent_div_0_div_2_ng_template_2_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r30.name);
        }
      }

      function ResponsibleComponent_div_0_div_2_ng_template_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " [No field exists]");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r30.name);
        }
      }

      function ResponsibleComponent_div_0_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResponsibleComponent_div_0_div_2_ng_template_2_span_0_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResponsibleComponent_div_0_div_2_ng_template_2_span_1_Template, 5, 1, "span", 0);
        }

        if (rf & 2) {
          var data_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r30.visualState.enabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r30.visualState.enabled);
        }
      }

      function ResponsibleComponent_div_0_div_2_ng_template_4_div_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hide advanced options");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function ResponsibleComponent_div_0_div_2_ng_template_4_div_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Show advanced options");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function ResponsibleComponent_div_0_div_2_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResponsibleComponent_div_0_div_2_ng_template_4_div_0_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r39.showAdvancedResponsibleTypes = !ctx_r39.showAdvancedResponsibleTypes;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResponsibleComponent_div_0_div_2_ng_template_4_div_0_ng_container_2_Template, 2, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ResponsibleComponent_div_0_div_2_ng_template_4_div_0_ng_container_3_Template, 2, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.showAdvancedResponsibleTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r36.showAdvancedResponsibleTypes);
        }
      }

      function ResponsibleComponent_div_0_div_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResponsibleComponent_div_0_div_2_ng_template_4_div_0_Template, 4, 2, "div", 7);
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.stepItem == null ? null : ctx_r23.stepItem.responsible == null ? null : ctx_r23.stepItem.responsible.visualState.show_ShowHideAdvancedOptions);
        }
      }

      var _c1 = function _c1() {
        return {
          value: "groupId",
          text: "groupName"
        };
      };

      function ResponsibleComponent_div_0_div_2_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ejs-dropdownlist", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ResponsibleComponent_div_0_div_2_div_6_Template_ejs_dropdownlist_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r41.stepItem.responsible.group = $event.itemData;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r24.groups)("ngModel", ctx_r24.stepItem == null ? null : ctx_r24.stepItem.responsible == null ? null : ctx_r24.stepItem.responsible.group == null ? null : ctx_r24.stepItem.responsible.group.groupId)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1))("allowFiltering", true)("ignoreAccent", true);
        }
      }

      var _c2 = function _c2() {
        return {
          value: "userId",
          text: "userName"
        };
      };

      function ResponsibleComponent_div_0_div_2_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ejs-dropdownlist", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ResponsibleComponent_div_0_div_2_div_7_Template_ejs_dropdownlist_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r43.stepItem.responsible.user = $event.itemData;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r25.users)("ngModel", ctx_r25.stepItem == null ? null : ctx_r25.stepItem.responsible == null ? null : ctx_r25.stepItem.responsible.user == null ? null : ctx_r25.stepItem.responsible.user.userId)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2))("allowFiltering", true)("ignoreAccent", true);
        }
      }

      var _c3 = function _c3() {
        return {
          text: "groupName",
          value: "groupId"
        };
      };

      function ResponsibleComponent_div_0_div_2_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ejs-multiselect", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ResponsibleComponent_div_0_div_2_div_8_Template_ejs_multiselect_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r46.selectedGroupIds = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r26.groups)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3))("showDropDownIcon", true)("closePopupOnSelect", false)("allowFiltering", true)("ignoreAccent", true)("value", ctx_r26.selectedGroupIds);
        }
      }

      var _c4 = function _c4() {
        return {
          text: "userName",
          value: "userId"
        };
      };

      function ResponsibleComponent_div_0_div_2_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ejs-multiselect", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ResponsibleComponent_div_0_div_2_div_9_Template_ejs_multiselect_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r48.assignMultiselectValues(ctx_r48.stepItem.responsible, "users", "userId", ctx_r48.users, $event.value, $event);
          })("ngModelChange", function ResponsibleComponent_div_0_div_2_div_9_Template_ejs_multiselect_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r50.selectedUserIds = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r27.users)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c4))("showDropDownIcon", true)("allowFiltering", true)("ignoreAccent", true)("ngModel", ctx_r27.selectedUserIds);
        }
      }

      var _c5 = function _c5() {
        return {
          value: "id",
          text: "name"
        };
      };

      function ResponsibleComponent_div_0_div_2_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ejs-dropdownlist", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ResponsibleComponent_div_0_div_2_div_10_Template_ejs_dropdownlist_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r51.stepItem.responsible.userField = $event.itemData;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r28.process.userTypeFields)("ngModel", ctx_r28.stepItem == null ? null : ctx_r28.stepItem.responsible == null ? null : ctx_r28.stepItem.responsible.userField == null ? null : ctx_r28.stepItem.responsible.userField.id)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c5))("allowFiltering", true)("ignoreAccent", true);
        }
      }

      function ResponsibleComponent_div_0_div_2_div_11_mat_list_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var groupAssignOption_r54 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", groupAssignOption_r54)("selected", groupAssignOption_r54.optionCode === (ctx_r53.stepItem == null ? null : ctx_r53.stepItem.responsible == null ? null : ctx_r53.stepItem.responsible.groupAssignOption == null ? null : ctx_r53.stepItem.responsible.groupAssignOption.optionCode))("matTooltip", groupAssignOption_r54.optionTooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](groupAssignOption_r54.optionText);
        }
      }

      function ResponsibleComponent_div_0_div_2_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "How to distribute?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-selection-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ResponsibleComponent_div_0_div_2_div_11_Template_mat_selection_list_selectionChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r55.stepItem.responsible.groupAssignOption = $event.option.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResponsibleComponent_div_0_div_2_div_11_mat_list_option_4_Template, 3, 4, "mat-list-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r29.groupAssignOptions);
        }
      }

      function ResponsibleComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ejs-dropdownlist", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ResponsibleComponent_div_0_div_2_Template_ejs_dropdownlist_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r57.stepItem.responsible.responsibleType = $event.itemData;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResponsibleComponent_div_0_div_2_ng_template_2_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResponsibleComponent_div_0_div_2_ng_template_4_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResponsibleComponent_div_0_div_2_div_6_Template, 2, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ResponsibleComponent_div_0_div_2_div_7_Template, 2, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ResponsibleComponent_div_0_div_2_div_8_Template, 3, 8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ResponsibleComponent_div_0_div_2_div_9_Template, 2, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResponsibleComponent_div_0_div_2_div_10_Template, 2, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ResponsibleComponent_div_0_div_2_div_11_Template, 5, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r2.showingResponsibleTypes)("ngModel", ctx_r2.stepItem == null ? null : ctx_r2.stepItem.responsible == null ? null : ctx_r2.stepItem.responsible.responsibleType == null ? null : ctx_r2.stepItem.responsible.responsibleType.code)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0))("allowFiltering", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stepItem.responsible.visualState.isTypeGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stepItem.responsible.visualState.isTypeUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stepItem.responsible.visualState.isTypeGroupList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stepItem.responsible.visualState.isTypeUserList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stepItem.responsible.visualState.isTypeUserFromField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stepItem.responsible.visualState.showGroupAssignOptions);
        }
      }

      function ResponsibleComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResponsibleComponent_div_0_div_1_Template, 6, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResponsibleComponent_div_0_div_2_Template, 12, 11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stepItem.isFirstItem == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stepItem.isFirstItem == false);
        }
      }

      var ResponsibleComponent = /*#__PURE__*/function () {
        function ResponsibleComponent(userGroupService) {
          _classCallCheck(this, ResponsibleComponent);

          this.userGroupService = userGroupService;
          this.allResponsibleTypes = [];
          this.showingResponsibleTypes = [];
          this.groups = [];
          this.users = [];
          this.selectedUserIds = [];
          this.groupAssignOptions = [];
          this._selectedGroupIds = [];
        }

        _createClass(ResponsibleComponent, [{
          key: "selectedGroupIds",
          get: function get() {
            return this._selectedGroupIds;
          },
          set: function set(value) {
            console.log('value setter', value);
            this._selectedGroupIds = value;
            this.assignMultiselectValues(this.stepItem.responsible, 'groups', 'groupId', this.groups, value, null);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.userGroupService.getGroups();

                    case 2:
                      this.groups = _context4.sent;
                      _context4.next = 5;
                      return this.userGroupService.getUsers();

                    case 5:
                      this.users = _context4.sent;
                      _context4.next = 8;
                      return this.userGroupService.getGroupAssignOptions();

                    case 8:
                      this.groupAssignOptions = _context4.sent;
                      this.allResponsibleTypes = this.userGroupService.getResponsibleTypes();
                      this.subscribeFieldChanges();
                      this.initialise_Responsible_MultipleSelection_Variables();
                      this.setShowingResponsibleTypes();

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "stepItem",
          get: function get() {
            return this.processItem;
          }
        }, {
          key: "processItem",
          get: function get() {
            return this._processItem;
          },
          set: function set(value) {
            if (this._processItem == value) {
              return;
            }

            this._processItem = value; // TODO: only if it is step item
            // TODO: explain why we make this call
            // TODO: are you handling null "value" here?

            this.initialise_Responsible_MultipleSelection_Variables();
            this.setShowingResponsibleTypes();
          } // TODO: move to a base component?

        }, {
          key: "assignMultiselectValues",
          value: function assignMultiselectValues(parentObjectOfModel, fieldNameOfModel, idFieldNameInModel, selectableListOfItems, selectedItemIds, event) {
            console.log(event); // TODO: handling a selected object which is not present in the list?

            var selectedItems = selectableListOfItems.filter(function (item) {
              return selectedItemIds.some(function (selectedItemId) {
                return selectedItemId === item[idFieldNameInModel];
              });
            });
            parentObjectOfModel[fieldNameOfModel] = selectedItems;
          }
        }, {
          key: "initialise_Responsible_MultipleSelection_Variables",
          value: function initialise_Responsible_MultipleSelection_Variables() {
            var _a, _b, _c, _d, _e, _f;

            this.selectedUserIds = ((_c = (_b = (_a = this.stepItem) === null || _a === void 0 ? void 0 : _a.responsible) === null || _b === void 0 ? void 0 : _b.users) !== null && _c !== void 0 ? _c : []).map(function (u) {
              return u.userId;
            });
            this.selectedGroupIds = ((_f = (_e = (_d = this.stepItem) === null || _d === void 0 ? void 0 : _d.responsible) === null || _e === void 0 ? void 0 : _e.groups) !== null && _f !== void 0 ? _f : []).map(function (g) {
              return g.groupId;
            });
          }
        }, {
          key: "setShowingResponsibleTypes",
          value: function setShowingResponsibleTypes() {
            var _this19 = this;

            this.showingResponsibleTypes = this.allResponsibleTypes.filter(function (rt) {
              var _a, _b, _c;

              return !rt.isAdvancedOption || ((_c = (_b = (_a = _this19.stepItem) === null || _a === void 0 ? void 0 : _a.responsible) === null || _b === void 0 ? void 0 : _b.visualState) === null || _c === void 0 ? void 0 : _c.showAdvancedOptions);
            });
          }
        }, {
          key: "showAdvancedResponsibleTypes",
          get: function get() {
            var _a, _b, _c;

            return (_c = (_b = (_a = this.stepItem) === null || _a === void 0 ? void 0 : _a.responsible) === null || _b === void 0 ? void 0 : _b.visualState) === null || _c === void 0 ? void 0 : _c.showAdvancedOptions;
          },
          set: function set(value) {
            this.stepItem.responsible.visualState.showAdvancedOptions = value;
            this.setShowingResponsibleTypes();
          }
        }, {
          key: "subscribeFieldChanges",
          value: function subscribeFieldChanges() {
            var _this20 = this;

            this.updateEnabledResponsibleTypes();
            this.fieldChangeSubscription = this.process.fields.subscribe(function (fc) {
              // TODO: this should be centralized and not handled in component.
              _this20.updateEnabledResponsibleTypes();
            });
          }
        }, {
          key: "updateEnabledResponsibleTypes",
          value: function updateEnabledResponsibleTypes() {
            var _this21 = this;

            this.allResponsibleTypes.forEach(function (rt) {
              rt.visualState.enabled = true;
              var groupFieldSelectionWithNoGroupField = rt.code === 'groupFromField' && _this21.process.groupTypeFields.length === 0;
              var userFieldSelectionWithNoUserField = rt.code === 'userFromField' && _this21.process.userTypeFields.length === 0;
              var groupListSelectionWithNoRelevantField = rt.code === 'groupListFromField' && _this21.process.multipleGroupTypeFields.length === 0;
              var userListWithSelectionNoRelevantField = rt.code === 'userListFromField' && _this21.process.multipleUserTypeFields.length === 0;

              if (groupFieldSelectionWithNoGroupField || userFieldSelectionWithNoUserField || groupListSelectionWithNoRelevantField || userListWithSelectionNoRelevantField) {
                rt.visualState.enabled = false;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe();
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            var _a;

            (_a = this.fieldChangeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return ResponsibleComponent;
      }();

      ResponsibleComponent.ɵfac = function ResponsibleComponent_Factory(t) {
        return new (t || ResponsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_Business_userGroup_service__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"]));
      };

      ResponsibleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ResponsibleComponent,
        selectors: [["app-responsible"]],
        inputs: {
          process: "process",
          processItem: "processItem"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["fxLayout", "column", 4, "ngIf"], ["fxLayout", "column"], ["placeholder", "", "name", "whoToAssign", "cssClass", "e-outline", "floatLabelType", "Never", "popupHeight", "500px", 2, "margin-top", "22px", 3, "dataSource", "ngModel", "fields", "allowFiltering", "change"], ["itemTemplate", ""], ["footerTemplate", ""], [2, "text-decoration", "line-through"], ["fxLayout", "row", "fxLayoutAlign", "end center", "style", "height: 30px;", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end center", 2, "height", "30px"], [2, "text-decoration", "underline", "cursor", "pointer", "transform", "translateX(-4px)", 3, "click"], ["placeholder", "Group", "name", "group", "filterBarPlaceholder", "Search", "cssClass", "e-outline detailed-settings-item-wrapper", "marks", "", "and", "", "floatLabelType", "Always", 1, "detailed-settings-item-wrapper", 3, "dataSource", "ngModel", "fields", "allowFiltering", "ignoreAccent", "change"], ["placeholder", "User", "name", "user", "filterBarPlaceholder", "Search", "cssClass", "e-outline", "floatLabelType", "Always", 2, "margin-top", "22px", 3, "dataSource", "ngModel", "fields", "allowFiltering", "ignoreAccent", "change"], ["placeholder", "Groups", "name", "groups", "mode", "Box", "filterBarPlaceholder", "Search", "cssClass", "e-outline", "floatLabelType", "Always", 2, "margin-top", "22px", 3, "dataSource", "fields", "showDropDownIcon", "closePopupOnSelect", "allowFiltering", "ignoreAccent", "value", "valueChange"], ["groupsMultiselect", ""], ["placeholder", "Users", "name", "users", "mode", "Box", "filterBarPlaceholder", "Search", "cssClass", "e-outline", "floatLabelType", "Always", 2, "margin-top", "22px", 3, "dataSource", "fields", "showDropDownIcon", "allowFiltering", "ignoreAccent", "ngModel", "change", "ngModelChange"], ["placeholder", "User Field", "name", "userField", "filterBarPlaceholder", "Search", "cssClass", "e-outline", "floatLabelType", "Always", 2, "margin-top", "22px", 3, "dataSource", "ngModel", "fields", "allowFiltering", "ignoreAccent", "change"], [1, "detailed-settings-item-wrapper", 2, "font-size", "12px", "margin-left", "9px", "line-height", "1em", "color", "#777", "transform", "translateY(2px)", "background-color", "white", "padding-left", "5px", "display", "inline-block", "width", "106px"], [3, "multiple", "selectionChange"], [3, "value", "selected", "matTooltip", 4, "ngFor", "ngForOf"], [3, "value", "selected", "matTooltip"], [2, "vertical-align", "middle", "height", "100%"]],
        template: function ResponsibleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResponsibleComponent_div_0_Template, 3, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.process && ctx.processItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_5__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_5__["MultiSelectComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"]],
        styles: [".detailed-settings-item-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 22px;\r\n}\r\n\r\n.mat-selection-list[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  border-color: rgba(0, 0, 0, 0.12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNpYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkMiLCJmaWxlIjoicmVzcG9uc2libGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxlZC1zZXR0aW5ncy1pdGVtLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0aW9uLWxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "j5wd":
    /*!************************************!*\
      !*** ./src/app/material-module.ts ***!
      \************************************/

    /*! exports provided: MaterialModule */

    /***/
    function j5wd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MaterialModule, {
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"]]
        });
      })();
      /***/

    },

    /***/
    "jk7T":
    /*!*******************************************************!*\
      !*** ./src/app/common/Models/PropertyChangedTypes.ts ***!
      \*******************************************************/

    /*! exports provided: ArrayChanged, ObservableArray, nameof, PC */

    /***/
    function jk7T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayChanged", function () {
        return ArrayChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObservableArray", function () {
        return ObservableArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nameof", function () {
        return nameof;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PC", function () {
        return PC;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ArrayChanged = function ArrayChanged(array, changeMode, changedValue, sender, itemPropertyChanged) {
        _classCallCheck(this, ArrayChanged);

        this.array = array;
        this.changeMode = changeMode;
        this.changedValue = changedValue;
        this.sender = sender;
        this.itemPropertyChanged = itemPropertyChanged;
      }; // create a subject implementation returning observable
      // and we use it in implementing IPropertyChanged
      // this should filter repeating values
      // also something to make assignment easier
      // this._val = obsimplementation.setvalue(newvalue, this._val)
      // it will check if values same, if same no fire, and return new value


      var ObservableArray = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
        _inherits(ObservableArray, _rxjs__WEBPACK_IMPORT);

        var _super3 = _createSuper(ObservableArray);

        function ObservableArray(owner) {
          var _this22;

          _classCallCheck(this, ObservableArray);

          _this22 = _super3.call(this, new ArrayChanged([], 'initialized', null, owner, null));
          _this22.owner = owner;
          _this22.itemSubscriptions = new Map();
          return _this22;
        }

        _createClass(ObservableArray, [{
          key: "getArray",
          value: function getArray() {
            return _get(_getPrototypeOf(ObservableArray.prototype), "value", this).array;
          }
        }, {
          key: "addItem",
          value: function addItem(item) {
            var newArray = [].concat(_toConsumableArray(_get(_getPrototypeOf(ObservableArray.prototype), "value", this).array), [item]);
            this.subscribeItem(item);

            _get(_getPrototypeOf(ObservableArray.prototype), "next", this).call(this, new ArrayChanged(newArray, 'added', item, _get(_getPrototypeOf(ObservableArray.prototype), "value", this).sender, null));
          }
        }, {
          key: "removeItem",
          value: function removeItem(item) {
            var newArray = _get(_getPrototypeOf(ObservableArray.prototype), "value", this).array.filter(function (i) {
              return i != item;
            });

            this.unSubscribeItem(item);

            _get(_getPrototypeOf(ObservableArray.prototype), "next", this).call(this, new ArrayChanged(newArray, 'removed', item, _get(_getPrototypeOf(ObservableArray.prototype), "value", this).sender, null));
          }
        }, {
          key: "updateOrder",
          value: function updateOrder(array) {
            // TODO: check if same set of values sent.
            var orderChangeExist = false;

            for (var i = 0; i < array.length; i++) {
              if (_get(_getPrototypeOf(ObservableArray.prototype), "value", this).array[i] != array[i]) {
                orderChangeExist = true;
                break;
              }
            }

            if (orderChangeExist) {
              _get(_getPrototypeOf(ObservableArray.prototype), "next", this).call(this, new ArrayChanged(array, 'orderChanged', null, _get(_getPrototypeOf(ObservableArray.prototype), "value", this).sender, null));
            }
          }
        }, {
          key: "subscribeItem",
          value: function subscribeItem(item) {
            var _this23 = this;

            var subscription = item.propertyChanged.subscribe(function (propertyChanged) {
              _get(_getPrototypeOf(ObservableArray.prototype), "next", _this23).call(_this23, new ArrayChanged(_get(_getPrototypeOf(ObservableArray.prototype), "value", _this23).array, 'itemPropertyChanged', propertyChanged.sender, _this23.owner, propertyChanged));
            });
            this.itemSubscriptions.set(item, subscription);
          }
        }, {
          key: "unSubscribeItem",
          value: function unSubscribeItem(item) {
            var subscription = this.itemSubscriptions.get(item);
            subscription.unsubscribe();
            this.itemSubscriptions["delete"](item);
          }
        }]);

        return ObservableArray;
      }(rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]);

      var nameof = function nameof(name) {
        return name;
      };

      var PC = function PC(propertyName, newValue, oldValue, sender) {
        _classCallCheck(this, PC);

        this.propertyName = propertyName;
        this.newValue = newValue;
        this.oldValue = oldValue;
        this.sender = sender;
      };
      /***/

    },

    /***/
    "mhZz":
    /*!***************************************!*\
      !*** ./src/app/ui-controls-module.ts ***!
      \***************************************/

    /*! exports provided: UiControlsModule */

    /***/
    function mhZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiControlsModule", function () {
        return UiControlsModule;
      });
      /* harmony import */


      var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-dropdowns */
      "jcQU");
      /* harmony import */


      var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-buttons */
      "SRvG");
      /* harmony import */


      var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-inputs */
      "QYJQ");
      /* harmony import */


      var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-calendars */
      "ed8r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UiControlsModule = function UiControlsModule() {
        _classCallCheck(this, UiControlsModule);
      };

      UiControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: UiControlsModule
      });
      UiControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function UiControlsModule_Factory(t) {
          return new (t || UiControlsModule)();
        },
        imports: [_syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_0__["DropDownListModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_0__["ListBoxModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_0__["MultiSelectModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__["CheckBoxModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_2__["TextBoxModule"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__["DatePickerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UiControlsModule, {
          exports: [_syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_0__["DropDownListModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_0__["ListBoxModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_0__["MultiSelectModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__["CheckBoxModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_2__["TextBoxModule"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__["DatePickerModule"]]
        });
      })();
      /***/

    },

    /***/
    "oBvu":
    /*!****************************************************************!*\
      !*** ./src/app/common/Models/Responsible/GroupAssignOption.ts ***!
      \****************************************************************/

    /*! exports provided: GroupAssignOption */

    /***/
    function oBvu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupAssignOption", function () {
        return GroupAssignOption;
      });

      var GroupAssignOption = function GroupAssignOption(optionCode, optionText, optionTooltip) {
        _classCallCheck(this, GroupAssignOption);

        this.optionCode = optionCode;
        this.optionText = optionText;
        this.optionTooltip = optionTooltip;
      };
      /***/

    },

    /***/
    "ou4j":
    /*!**************************************************!*\
      !*** ./src/app/services/UI/snack-bar.service.ts ***!
      \**************************************************/

    /*! exports provided: SnackBarService */

    /***/
    function ou4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
        return SnackBarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var SnackBarService = /*#__PURE__*/function () {
        function SnackBarService(snackBar) {
          _classCallCheck(this, SnackBarService);

          this.snackBar = snackBar;
        }

        _createClass(SnackBarService, [{
          key: "open",
          value: function open(message, duration) {
            duration = duration !== null && duration !== void 0 ? duration : 2000;
            var matSnackBarConfig = {
              duration: duration
            };
            this.snackBar.open(message, null, matSnackBarConfig);
          }
        }]);

        return SnackBarService;
      }();

      SnackBarService.ɵfac = function SnackBarService_Factory(t) {
        return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SnackBarService,
        factory: SnackBarService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "pJQG":
    /*!**********************************************************************!*\
      !*** ./src/app/components/fields/date-field/date-field.component.ts ***!
      \**********************************************************************/

    /*! exports provided: DateFieldComponent */

    /***/
    function pJQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateFieldComponent", function () {
        return DateFieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-calendars */
      "ed8r");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _common_Pipes_custom_date_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../common/Pipes/custom-date-time.pipe */
      "4X+j");

      function DateFieldComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ejs-datepicker", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.field.formControl)("placeholder", ctx_r0.field.fieldName)("allowEdit", false);
        }
      }

      function DateFieldComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "_date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.field.fieldName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r1.field.fieldValue));
        }
      }

      var DateFieldComponent = /*#__PURE__*/function () {
        function DateFieldComponent() {
          _classCallCheck(this, DateFieldComponent);
        }

        _createClass(DateFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DateFieldComponent;
      }();

      DateFieldComponent.ɵfac = function DateFieldComponent_Factory(t) {
        return new (t || DateFieldComponent)();
      };

      DateFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateFieldComponent,
        selectors: [["app-date-field"]],
        inputs: {
          field: "field"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["format", "dd MMMM yyyy", "floatLabelType", "Always", "cssClass", "e-outline", 3, "formControl", "placeholder", "allowEdit"], [1, "read-only-label"], [1, "read-only-value"]],
        template: function DateFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DateFieldComponent_div_0_Template, 2, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateFieldComponent_div_1_Template, 6, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.field.isReadOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.field.isReadOnly);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_2__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]],
        pipes: [_common_Pipes_custom_date_time_pipe__WEBPACK_IMPORTED_MODULE_4__["CustomDatePipe"]],
        styles: [".read-only-label[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: rgba(0, 0, 0, 0.54);\r\n  margin-left: 14px;\r\n}\r\n\r\n.read-only-value[_ngcontent-%COMP%] {\r\n  margin-left: 12px;\r\n  margin-top: 2px;\r\n  margin-bottom: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckIiLCJmaWxlIjoiZGF0ZS1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWQtb25seS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG4ucmVhZC1vbmx5LXZhbHVlIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "pLgg":
    /*!*************************************************************!*\
      !*** ./src/app/common/Models/Responsible/ProcessStarter.ts ***!
      \*************************************************************/

    /*! exports provided: ProcessStarter */

    /***/
    function pLgg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProcessStarter", function () {
        return ProcessStarter;
      });
      /* harmony import */


      var _ProcessStarterVisualState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ProcessStarterVisualState */
      "KquK");

      var ProcessStarter = function ProcessStarter(processStarterType) {
        var groups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, ProcessStarter);

        this.processStarterType = processStarterType;
        this.groups = groups;
        this.visualState = new _ProcessStarterVisualState__WEBPACK_IMPORTED_MODULE_0__["ProcessStarterVisualState"](this);
      };
      /***/

    },

    /***/
    "paod":
    /*!********************************************************!*\
      !*** ./src/app/services/Business/userGroup.service.ts ***!
      \********************************************************/

    /*! exports provided: UserGroupService */

    /***/
    function paod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserGroupService", function () {
        return UserGroupService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _common_Models_Responsible_Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/Models/Responsible/Group */
      "g+Np");
      /* harmony import */


      var _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/Models/Responsible/User */
      "5NbK");
      /* harmony import */


      var _common_Models_Responsible_GroupAssignOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/Models/Responsible/GroupAssignOption */
      "oBvu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserGroupService = /*#__PURE__*/function () {
        function UserGroupService() {
          _classCallCheck(this, UserGroupService);
        }

        _createClass(UserGroupService, [{
          key: "getGroups",
          value: function getGroups() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", [new _common_Models_Responsible_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]('Finance', 'F9zVhZ'), new _common_Models_Responsible_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]('Accounting', '9JtbS9'), new _common_Models_Responsible_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]('Sales', 'OABlv4'), new _common_Models_Responsible_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]('Product Development 1', 'nYaVF8'), new _common_Models_Responsible_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]('Product Development 2', 'wcYC3s')]);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", [new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('Omer Kucuk', '9c44bz'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('Baris Belgic', 'a'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('Alperen Belgic', 'b'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('Kemalettin Tugcu', 'c'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('Fazil Husnu Daglarca', 'd'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('Tacsiz Kral Pele', 'e'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('Ringo Siseler', 'f'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('a', 'g'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('b', '3'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('c', '4'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('d', '6'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('e', '5'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('f', '8'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('ag', '7'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('bg', '9'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('cg', 'aaa'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('dg', 'sss'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('eg', 'ddd'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('fg', '9c44bz1'), new _common_Models_Responsible_User__WEBPACK_IMPORTED_MODULE_2__["User"]('gSg', '9c44b11z')]);

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "getGroupAssignOptions",
          value: function getGroupAssignOptions() {
            return [new _common_Models_Responsible_GroupAssignOption__WEBPACK_IMPORTED_MODULE_3__["GroupAssignOption"]('PulledManually', 'A member of the group will manually pull the step.', 'When this step is reached, the step will be available to any member to pull and work'), new _common_Models_Responsible_GroupAssignOption__WEBPACK_IMPORTED_MODULE_3__["GroupAssignOption"]('AssignRandomly', 'The step will automatically be assigned to a member.', 'When this step is reached, the system will assign this step to a random member automatically')];
          }
        }, {
          key: "getDefaultGroupAssignOption",
          value: function getDefaultGroupAssignOption() {
            return this.getGroupAssignOptions().find(function (gao) {
              return gao.optionCode === 'PulledManually';
            });
          }
        }, {
          key: "getProcessStarterTypes",
          value: function getProcessStarterTypes() {
            return [{
              code: 'anyone',
              name: 'Anyone can start',
              tooltip: 'Anyone can start',
              visualState: {
                enabled: true
              }
            }, {
              code: 'groupList',
              name: 'Users from selected groups can start',
              tooltip: 'Users from selected groups can start.',
              visualState: {
                enabled: true
              }
            }];
          }
        }, {
          key: "getDefaultProcessStarter",
          value: function getDefaultProcessStarter() {
            return this.getProcessStarterTypes()[0];
          }
        }, {
          key: "getResponsibleTypes",
          value: function getResponsibleTypes() {
            return [{
              code: 'group',
              name: 'Assign to a group',
              tooltip: 'This step will be assigned to a user from the group you select. ',
              isAdvancedOption: false,
              visualState: {
                enabled: true
              }
            }, {
              code: 'user',
              name: 'Assign to a specific user',
              tooltip: 'The step will be assigned to the user you select.',
              isAdvancedOption: false,
              visualState: {
                enabled: true
              }
            }, {
              code: 'manager',
              name: 'Assign to the manager',
              tooltip: 'This step will be assigned to the manager of the previous action user.',
              isAdvancedOption: false,
              visualState: {
                enabled: true
              }
            }, {
              code: 'groupList',
              name: 'Assign to multiple groups parallelly',
              tooltip: 'Multiple steps will be assigned to groups you select.',
              isAdvancedOption: true,
              visualState: {
                enabled: true
              }
            }, {
              code: 'userList',
              name: 'Assign to multiple users parallelly',
              tooltip: 'Multiple steps will be assigned users you select.',
              isAdvancedOption: true,
              visualState: {
                enabled: true
              }
            }, {
              code: 'userFromField',
              name: 'Assign to the user selected in a user field',
              tooltip: 'The step will be assigned to the user selected in a field from a previous step.',
              isAdvancedOption: true,
              visualState: {
                enabled: true
              }
            }, {
              code: 'groupFromField',
              name: 'Assign to the group selected in a group field',
              tooltip: 'The step will be assigned to the group who is selected in a field from a previous step.',
              isAdvancedOption: true,
              visualState: {
                enabled: true
              }
            }, {
              code: 'userListFromField',
              name: 'Assign to multiple users selected in a multiple selection user field',
              tooltip: 'Multiple steps will be assigned parallelly to users selected in a multi selection user field from a previous step.',
              isAdvancedOption: true,
              visualState: {
                enabled: true
              }
            }, {
              code: 'groupListFromField',
              name: 'Assign to multiple groups selected in a multiple selection group field',
              tooltip: 'Multiple steps will be assigned parallelly to groups selected in a multi selection group field from a previous step.',
              isAdvancedOption: true,
              visualState: {
                enabled: true
              }
            }];
          }
        }, {
          key: "getDefaultResponsibleType",
          value: function getDefaultResponsibleType() {
            return this.getResponsibleTypes()[0];
          }
        }]);

        return UserGroupService;
      }();

      UserGroupService.ɵfac = function UserGroupService_Factory(t) {
        return new (t || UserGroupService)();
      };

      UserGroupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: UserGroupService,
        factory: UserGroupService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qlXl":
    /*!**********************************************************************!*\
      !*** ./src/app/common/Models/ProcessItems/ProcessItemVisualState.ts ***!
      \**********************************************************************/

    /*! exports provided: ProcessItemVisualState */

    /***/
    function qlXl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProcessItemVisualState", function () {
        return ProcessItemVisualState;
      });

      var ProcessItemVisualState = /*#__PURE__*/function () {
        function ProcessItemVisualState(processItem) {
          _classCallCheck(this, ProcessItemVisualState);

          this.processItem = processItem;
          this.visible = false;
          this.leftPxBeforeMove = 0;
          this.topPxBeforeMove = 0;
          this.isSelected = false;
        }

        _createClass(ProcessItemVisualState, [{
          key: "width",
          get: function get() {
            var _a, _b;

            return (_b = (_a = this.component) === null || _a === void 0 ? void 0 : _a.getWidth()) !== null && _b !== void 0 ? _b : 0;
          }
        }, {
          key: "height",
          get: function get() {
            var _a, _b;

            return (_b = (_a = this.component) === null || _a === void 0 ? void 0 : _a.getHeight()) !== null && _b !== void 0 ? _b : 0;
          }
        }, {
          key: "middleX",
          get: function get() {
            var _a, _b;

            return this.processItem.leftPx + ((_b = (_a = this.component) === null || _a === void 0 ? void 0 : _a.getWidth()) !== null && _b !== void 0 ? _b : 0) / 2;
          }
        }, {
          key: "middleY",
          get: function get() {
            var _a, _b;

            return this.processItem.topPx + ((_b = (_a = this.component) === null || _a === void 0 ? void 0 : _a.getHeight()) !== null && _b !== void 0 ? _b : 0) / 2;
          }
        }]);

        return ProcessItemVisualState;
      }();
      /***/

    },

    /***/
    "r9sB":
    /*!*********************************************************!*\
      !*** ./src/app/services/Business/field-type.service.ts ***!
      \*********************************************************/

    /*! exports provided: FieldTypeService */

    /***/
    function r9sB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldTypeService", function () {
        return FieldTypeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FieldTypeService = /*#__PURE__*/function () {
        function FieldTypeService() {
          _classCallCheck(this, FieldTypeService);
        }

        _createClass(FieldTypeService, [{
          key: "getFieldTypes",
          value: function getFieldTypes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", [{
                        name: 'Text',
                        code: 'text'
                      }, {
                        name: 'Numeric',
                        code: 'numeric'
                      }, {
                        name: 'Date',
                        code: 'date'
                      }, {
                        name: 'Checkbox',
                        code: 'checkbox'
                      }, {
                        name: 'File',
                        code: 'file'
                      }, {
                        name: 'User',
                        code: 'user'
                      }, {
                        name: 'Group',
                        code: 'group'
                      }]);

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }]);

        return FieldTypeService;
      }();

      FieldTypeService.ɵfac = function FieldTypeService_Factory(t) {
        return new (t || FieldTypeService)();
      };

      FieldTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FieldTypeService,
        factory: FieldTypeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "rGpJ":
    /*!*************************************************************!*\
      !*** ./src/app/common/Models/ProcessItems/ConditionItem.ts ***!
      \*************************************************************/

    /*! exports provided: ConditionItem */

    /***/
    function rGpJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConditionItem", function () {
        return ConditionItem;
      });
      /* harmony import */


      var _ProcessItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ProcessItem */
      "ZS8O");

      var ConditionItem = /*#__PURE__*/function (_ProcessItem__WEBPACK2) {
        _inherits(ConditionItem, _ProcessItem__WEBPACK2);

        var _super4 = _createSuper(ConditionItem);

        function ConditionItem(id, justCreatedOnInterface) {
          var _this24;

          var retrievedFromServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var conditionName = arguments.length > 3 ? arguments[3] : undefined;
          var topPx = arguments.length > 4 ? arguments[4] : undefined;
          var leftPx = arguments.length > 5 ? arguments[5] : undefined;

          _classCallCheck(this, ConditionItem);

          _this24 = _super4.call(this, id, justCreatedOnInterface, retrievedFromServer, topPx, leftPx, conditionName);
          _this24.justCreatedOnInterface = justCreatedOnInterface;
          return _this24;
        }

        return ConditionItem;
      }(_ProcessItem__WEBPACK_IMPORTED_MODULE_0__["ProcessItem"]);
      /***/

    },

    /***/
    "rgqs":
    /*!***********************************************!*\
      !*** ./src/app/services/Auth/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function rgqs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _UI_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../UI/snack-bar.service */
      "ou4j");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(router, snackBar) {
          _classCallCheck(this, AuthService);

          this.router = router;
          this.snackBar = snackBar;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        }

        _createClass(AuthService, [{
          key: "isLoggedIn",
          get: function get() {
            return this.loggedIn.asObservable();
          }
        }, {
          key: "login",
          value: function login(userName, password) {
            if (['9296A486-5D25-4A40-97BA-F67CB6FBBBCC', '208DDB53-FDF0-41C8-A2F1-535E975CED22', '83B203D7-2030-4788-BE40-CB153563A979', 'C06960E7-203F-4265-85BA-A0B59863B82D'].some(function (i) {
              return i === userName;
            })) {
              localStorage.setItem('temp_user_id', userName);
              this.loggedIn.next(true);
              this.router.navigate(['/']);
            } else {
              localStorage.setItem('temp_user_id', '');
              this.snackBar.open('Invalid user id.');
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.loggedIn.next(false);
            this.router.navigate(['/Login']);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_UI_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "tpZE":
    /*!**********************************************************************!*\
      !*** ./src/app/components/fields/text-field/text-field.component.ts ***!
      \**********************************************************************/

    /*! exports provided: TextFieldComponent */

    /***/
    function tpZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function () {
        return TextFieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-inputs */
      "QYJQ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function TextFieldComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ejs-textbox", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r0.field.fieldName)("multiline", true)("formControl", ctx_r0.field.formControl);
        }
      }

      function TextFieldComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.field.fieldName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.field.fieldValue);
        }
      }

      var TextFieldComponent = /*#__PURE__*/function () {
        function TextFieldComponent() {
          _classCallCheck(this, TextFieldComponent);
        }

        _createClass(TextFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TextFieldComponent;
      }();

      TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) {
        return new (t || TextFieldComponent)();
      };

      TextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextFieldComponent,
        selectors: [["app-text-field"]],
        inputs: {
          field: "field"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["floatLabelType", "Always", "cssClass", "e-outline", 3, "placeholder", "multiline", "formControl"], [1, "read-only-label"], [1, "read-only-value"]],
        template: function TextFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TextFieldComponent_div_0_Template, 2, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextFieldComponent_div_1_Template, 5, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.field.isReadOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.field.isReadOnly);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_2__["TextBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]],
        styles: [".read-only-label[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: rgba(0, 0, 0, 0.54);\r\n  margin-left: 14px;\r\n}\r\n\r\n.read-only-value[_ngcontent-%COMP%] {\r\n  margin-left: 12px;\r\n  margin-top: 2px;\r\n  margin-bottom: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckIiLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWQtb25seS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG4ucmVhZC1vbmx5LXZhbHVlIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "tvHG":
    /*!*********************************************!*\
      !*** ./src/app/services/Web/web.service.ts ***!
      \*********************************************/

    /*! exports provided: WebService, ServiceResult, OperationErrorInformation, SendUserActionErrorCodes */

    /***/
    function tvHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebService", function () {
        return WebService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceResult", function () {
        return ServiceResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperationErrorInformation", function () {
        return OperationErrorInformation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendUserActionErrorCodes", function () {
        return SendUserActionErrorCodes;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http.service */
      "Ll+m");

      var WebService = /*#__PURE__*/function () {
        function WebService(httpService) {
          _classCallCheck(this, WebService);

          this.httpService = httpService;
        }

        _createClass(WebService, [{
          key: "GetProcessesQuery",
          value: function GetProcessesQuery() {
            var endPoint = '/GetProcessesQuery/Get';
            return this.httpService.get(endPoint);
          }
        }, {
          key: "StartNewProcessCommand",
          value: function StartNewProcessCommand(ProcessId) {
            var endPoint = '/StartNewProcessCommand/Post';
            return this.httpService.post(endPoint, {
              ProcessId: ProcessId
            });
          }
        }, {
          key: "SendUserActionCommand",
          value: function SendUserActionCommand(ProcessId, ProcessInstanceId, TaskInstanceId, ActionId, Notes, DateFormValues, TextFormValues) {
            var endPoint = '/SendUserActionCommand/Post';
            return this.httpService.post(endPoint, {
              ProcessId: ProcessId,
              ProcessInstanceId: ProcessInstanceId,
              TaskInstanceId: TaskInstanceId,
              ActionId: ActionId,
              Notes: Notes,
              DateFormValues: DateFormValues,
              TextFormValues: TextFormValues
            });
          }
        }, {
          key: "GetTaskInstanceQuery",
          value: function GetTaskInstanceQuery(ProcessId, ProcessInstanceId, TaskInstanceId) {
            var endPoint = '/GetTaskInstanceQuery/Get';
            return this.httpService.getByParams(endPoint, {
              ProcessId: ProcessId,
              ProcessInstanceId: ProcessInstanceId,
              TaskInstanceId: TaskInstanceId
            });
          }
        }, {
          key: "PullTaskFromGroupCommand",
          value: function PullTaskFromGroupCommand(ProcessId, ProcessInstanceId, TaskInstanceId) {
            var endPoint = '/PullTaskFromGroupCommand/Post';
            return this.httpService.post(endPoint, {
              ProcessId: ProcessId,
              ProcessInstanceId: ProcessInstanceId,
              TaskInstanceId: TaskInstanceId
            });
          }
        }, {
          key: "GetUserTaskInstancesQuery",
          value: function GetUserTaskInstancesQuery() {
            var endPoint = '/GetUserTaskInstancesQuery/Get';
            return this.httpService.get(endPoint);
          }
        }]);

        return WebService;
      }();

      WebService.ɵfac = function WebService_Factory(t) {
        return new (t || WebService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      WebService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WebService,
        factory: WebService.ɵfac,
        providedIn: 'root'
      });

      var ServiceResult = function ServiceResult() {
        _classCallCheck(this, ServiceResult);
      };

      var OperationErrorInformation = function OperationErrorInformation() {
        _classCallCheck(this, OperationErrorInformation);
      };

      var SendUserActionErrorCodes = function SendUserActionErrorCodes() {
        _classCallCheck(this, SendUserActionErrorCodes);
      };

      SendUserActionErrorCodes.InvalidFormValues = 'InvalidFormValues';
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/edit-task/edit-task.component */
      "C+1D");
      /* harmony import */


      var _components_list_processes_list_processes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/list-processes/list-processes.component */
      "EVZ3");
      /* harmony import */


      var _components_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/list-tasks/list-tasks.component */
      "BrM3");
      /* harmony import */


      var _components_my_groups_tasks_my_groups_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/my-groups-tasks/my-groups-tasks.component */
      "HCR1");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _services_Auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/Auth/auth.guard */
      "/qon");
      /* harmony import */


      var _components_process_designer_process_designer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/process-designer/process-designer.component */
      "OxrJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        canActivate: [_services_Auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        canActivateChild: [_services_Auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [{
          path: '',
          component: _components_list_processes_list_processes_component__WEBPACK_IMPORTED_MODULE_2__["ListProcessesComponent"]
        }, {
          path: 'NewProcess/:processId',
          component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_1__["EditTaskComponent"]
        }, {
          path: 'EditTask/:processId/:processInstanceId/:taskInstanceId',
          component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_1__["EditTaskComponent"]
        }, {
          path: 'MyInbox',
          component: _components_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_3__["ListTasksComponent"]
        }, {
          path: 'MyGroupsInbox',
          component: _components_my_groups_tasks_my_groups_tasks_component__WEBPACK_IMPORTED_MODULE_4__["MyGroupsTasksComponent"]
        }, {
          path: 'Login',
          component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        }, {
          path: 'ProcessDesigner',
          component: _components_process_designer_process_designer_component__WEBPACK_IMPORTED_MODULE_7__["ProcessDesignerComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "x83m":
    /*!***************************************************!*\
      !*** ./src/app/components/form/form.component.ts ***!
      \***************************************************/

    /*! exports provided: FormComponent, ReturningForm, RenderingField */

    /***/
    function x83m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
        return FormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturningForm", function () {
        return ReturningForm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderingField", function () {
        return RenderingField;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function FormComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-generic-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", field_r1);
        }
      }

      var FormComponent = /*#__PURE__*/function () {
        function FormComponent(cd) {
          _classCallCheck(this, FormComponent);

          this.cd = cd;
          this.fields = [];
          this.formValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FormComponent, [{
          key: "getValue",
          value: function getValue(fieldFromBackend) {
            if (fieldFromBackend.FieldValue == null) {
              return null;
            }

            if (fieldFromBackend.FieldType === 'Date') {
              try {
                var numbers = fieldFromBackend.FieldValue;
                var year = numbers[0];
                var month = numbers[1] - 1;
                var day = numbers[2];
                return new Date(year, month, day);
              } catch (_a) {
                return null;
              }
            }

            return fieldFromBackend.FieldValue;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            var _a;

            if (((_a = this.form) === null || _a === void 0 ? void 0 : _a.Fields) == null) {
              return;
            }

            this.fields = this.form.Fields.map(function (f) {
              var field = new RenderingField();
              field.fieldId = f.FieldId;
              field.fieldName = f.FieldName;
              field.fieldType = f.FieldType;
              field.isReadOnly = f.ReadOnly;
              field.isRequired = f.Validation.IsRequired;
              field.fieldValue = _this25.getValue(f);
              return field;
            });
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
            this.fields.forEach(function (field) {
              _this25.formGroup.addControl(field.fieldName, field.formControl);
            });
            this.cd.detectChanges();
            this.formValid.next(this.formGroup.valid);
            this.formGroup.valueChanges.subscribe({
              next: function next(v) {
                _this25.formValid.next(_this25.formGroup.valid);

                _this25.cd.detectChanges();
              }
            });
          }
        }, {
          key: "getReturningForm",
          value: function getReturningForm() {
            var returningForm = new ReturningForm();
            this.fields.forEach(function (f) {
              if (f.fieldType === 'Date') {
                // Date values are kept as DateTime (containing date and time parts)
                // and they are considered in local time at midnight
                // They are converted to UTC.
                // and in some local time zones (such as BST) they have yesterday's Date after conversion
                // In order to prevent this, we pass them as integer arrays as [year, month(January=1), day]
                var dateValueArray = null;

                if (f.fieldValue != null) {
                  var dateValue = f.fieldValue;
                  dateValueArray = [dateValue.getFullYear(), dateValue.getMonth() + 1, dateValue.getDate()];
                }

                returningForm.DateValues[f.fieldId] = dateValueArray;
              } else if (f.fieldType === 'Text') {
                returningForm.TextValues[f.fieldId] = f.fieldValue;
              }
            });
            return returningForm;
          }
        }]);

        return FormComponent;
      }();

      FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormComponent,
        selectors: [["app-form"]],
        inputs: {
          form: "form"
        },
        outputs: {
          formValid: "formValid"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "field-wrapper", 4, "ngFor", "ngForOf"], [1, "field-wrapper"], [3, "field"]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
          }
        },
        styles: [".field-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });

      var ReturningForm = function ReturningForm() {
        _classCallCheck(this, ReturningForm);

        this.DateValues = {};
        this.TextValues = {};
      };

      var RenderingField = /*#__PURE__*/function () {
        function RenderingField() {
          var _this26 = this;

          _classCallCheck(this, RenderingField);

          this._fieldName = '';
          this._fieldValue = null;
          this._isRequired = false;
          this._formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.formControl.valueChanges.subscribe({
            next: function next(v) {
              // if form control triggers a change we set the field (not the property)
              // the property setter also sets to the formControl
              if (_this26._fieldValue !== v) {
                _this26._fieldValue = v;
              }
            }
          });
        }

        _createClass(RenderingField, [{
          key: "fieldName",
          get: function get() {
            return this._fieldName;
          },
          set: function set(value) {
            this._fieldName = value;
          }
        }, {
          key: "fieldValue",
          get: function get() {
            return this._fieldValue;
          },
          set: function set(value) {
            if (this._fieldValue !== value) {
              this._fieldValue = value;
              this.formControl.setValue(value);
            }
          }
        }, {
          key: "formControl",
          get: function get() {
            return this._formControl;
          }
        }, {
          key: "isRequired",
          get: function get() {
            return this._isRequired;
          },
          set: function set(value) {
            this._isRequired = value; // call this for any validation change

            this.updateValidators();
          } // mobile specific

        }, {
          key: "visibleFieldName",
          get: function get() {
            return this.fieldName + (this.isRequired ? " *" : "");
          }
        }, {
          key: "updateValidators",
          value: function updateValidators() {
            this._formControl.clearValidators();

            var validators = [];

            if (this._isRequired) {
              validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }

            if (validators.length > 0) {
              this._formControl.setValidators(validators);
            }

            this._formControl.updateValueAndValidity();
          }
        }]);

        return RenderingField;
      }();
      /***/

    },

    /***/
    "ytpF":
    /*!******************************************************!*\
      !*** ./src/app/services/Business/general.service.ts ***!
      \******************************************************/

    /*! exports provided: RandomIdGenerator */

    /***/
    function ytpF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RandomIdGenerator", function () {
        return RandomIdGenerator;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RandomIdGenerator = /*#__PURE__*/function () {
        function RandomIdGenerator() {
          _classCallCheck(this, RandomIdGenerator);
        }

        _createClass(RandomIdGenerator, [{
          key: "generate",
          value: function generate() {
            return Math.random().toString(36).substr(2, 9);
          }
        }]);

        return RandomIdGenerator;
      }();

      RandomIdGenerator.ɵfac = function RandomIdGenerator_Factory(t) {
        return new (t || RandomIdGenerator)();
      };

      RandomIdGenerator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RandomIdGenerator,
        factory: RandomIdGenerator.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'en-GB'
        }]
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map