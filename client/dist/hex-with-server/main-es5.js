function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
    * (c) 2010-2020 Google LLC. https://angular.io/
    * License: MIT
    */


    (function (factory) {
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function () {
      'use strict';
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var Zone$1 = function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone = /*#__PURE__*/function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass(Zone, [{
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }, {
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "__load_patch",
            // tslint:disable-next-line:require-internal-with-underscore
            value: function __load_patch(name, fn) {
              if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var ZoneDelegate = /*#__PURE__*/function () {
          function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck(this, ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass(ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return ZoneDelegate;
        }();

        var ZoneTask = /*#__PURE__*/function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass(ZoneTask, [{
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }, {
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
              if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
              }
            }

            if (nativeMicroTaskQueuePromise) {
              var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

              if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
              }

              nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else {
              global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          setNativePromise: function setNativePromise(NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
              nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          }
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                if (!isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // and the rejected value is an Error object,
                  // use the value instead of wrapping it.
                  try {
                    // Here we throws a new Error to print more readable error log
                    // and if the value is not an error, zone.js builds an `Error`
                    // Object here to attach the stack information.
                    throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                  } catch (err) {
                    uncaughtPromiseError = err;
                  }
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var ZoneAwarePromise = /*#__PURE__*/function () {
          _createClass(ZoneAwarePromise, null, [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator2 = _createForOfIteratorHelper(values),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var value = _step2.value;

                  if (!isThenable(value)) {
                    value = _this.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          function ZoneAwarePromise(executor) {
            _classCallCheck(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass(ZoneAwarePromise, [{
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }, {
            key: Symbol.toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: Symbol.species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }]);

          return ZoneAwarePromise;
        }(); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];

        var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

        var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

        if (!desc || desc.configurable) {
          desc && delete desc.writable;
          desc && delete desc.value;

          if (!desc) {
            desc = {
              configurable: true,
              enumerable: true
            };
          }

          desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
          };

          desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
              // if the NewNativePromise is ZoneAwarePromise
              // save to global
              global[ZONE_AWARE_PROMISE] = NewNativePromise;
            } else {
              // if the NewNativePromise is not ZoneAwarePromise
              // for example: after load zone.js, some library just
              // set es6-promise to global, if we set it to global
              // directly, assertZonePatched will fail and angular
              // will not loaded, so we just set the NewNativePromise
              // to global[symbolPromise], so the result is just like
              // we load ES6 Promise before zone.js
              global[symbolPromise] = NewNativePromise;

              if (!NewNativePromise.prototype[symbolThen]) {
                patchThen(NewNativePromise);
              }

              api.setNativePromise(NewNativePromise);
            }
          };

          ObjectDefineProperty(global, 'Promise', desc);
        }

        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this2 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this2, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function () {
            var resultPromise = fn.apply(this, arguments);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          var fetch = global['fetch'];

          if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
          }
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';
      var NULL_ON_PROP_VALUE = [null];

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop3 = function _loop3(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop3(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signiture
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
          }

          if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
          } else {
            target[eventNameSymbol] = null;
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
          return;
        }

        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
          var desc = Object.getOwnPropertyDescriptor(src, symbol);
          Object.defineProperty(dest, symbol, {
            get: function get() {
              return src[symbol];
            },
            set: function set(value) {
              if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                // if src[symbol] is not writable or not have a setter, just return
                return;
              }

              src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
          });
        });
      }

      var shouldCopySymbolProperties = false;

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && !(delegate = proto[delegateName])) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);

            if (shouldCopySymbolProperties) {
              copySymbolProperties(delegate, proto[name]);
            }
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames$1 = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke


          task.invoke(task, target, [event]);
          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (blackListedEvents) {
                // check black list
                for (var i = 0; i < blackListedEvents.length; i++) {
                  if (eventName === blackListedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames$1[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i = 0; _i < existingTasks.length; _i++) {
                    if (compare(existingTasks[_i], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                    var task = removeTasks[_i2];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                    var _task = _removeTasks[_i3];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames$1[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames$1[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype;

              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var frameEventNames = ['load'];
      var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
      var marqueeEventNames = ['bounce', 'finish', 'start'];
      var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
      var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
      var websocketEventNames = ['close', 'error', 'open', 'message'];
      var workerEventNames = ['error', 'message'];
      var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        if (isBrowser) {
          var _internalWindow = window;
          var ignoreErrorProperties = isIE ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
          patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

          if (typeof _internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
          }

          patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
          patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
          patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
          var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

          if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
          }

          var Worker = _internalWindow['Worker'];

          if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (XMLHttpRequest) {
          // XMLHttpRequest is not available in ServiceWorker, so we need to check here
          patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget) {
          patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        if (typeof IDBIndex !== 'undefined') {
          patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }

        if (supportsWebSocket) {
          patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          function timer() {
            try {
              task.invoke.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              if (!(task.data && task.data.isPeriodic)) {
                if (typeof data.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[data.handleId];
                } else if (data.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  data.handleId[taskSymbol] = null;
                }
              }
            }
          }

          data.args[0] = timer;
          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative(task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects.isBrowser,
            isMix = _api$getGlobalObjects.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects2.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }

        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
    });
    /***/

  },

  /***/
  "./src/app/_modal/index.ts":
  /*!*********************************!*\
    !*** ./src/app/_modal/index.ts ***!
    \*********************************/

  /*! exports provided: ModalModule, ModalService */

  /***/
  function srcApp_modalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modal.module */
    "./src/app/_modal/modal.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return _modal_module__WEBPACK_IMPORTED_MODULE_0__["ModalModule"];
    });
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/_modal/modal.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"];
    });
    /***/

  },

  /***/
  "./src/app/_modal/modal.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/_modal/modal.component.ts ***!
    \*******************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcApp_modalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/_modal/modal.service.ts");

    var _c0 = ["*"];

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(modalService, el) {
        _classCallCheck(this, ModalComponent);

        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'jw-modal') {//this.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.modalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('jw-modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('jw-modal-open');
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["jw-modal"]],
      inputs: {
        id: "id"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 0,
      consts: [[1, "jw-modal"], [1, "jw-modal-body"], [1, "jw-modal-background"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }
      },
      styles: ["/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  position: absolute;\n  padding: 20px;\n  background: rgba(227, 183, 197, 0.46);\n  width: 60%;\n  margin-left: 20%;\n  margin-right: 20%;\n  margin-top: 5%;\n  border: 3px solid #362b32;\n  border-radius: 10px;\n  /* margin exposes part of the modal background */\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #362b32;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9fbW9kYWwvQzovVXNlcnMvVG9zaGliYS9oZXgtd2l0aC1zZXJ2ZXIvY2xpZW50L3NyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUNnQztBQ0NoQztFRENFLGlDQUFpQztFQ0NqQyxhQUFBO0FEQ0Y7QUNIQTtFREtFLDhDQUE4QztFQ0M1QyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFRENGLHFEQUFxRDtFQ0VuRCxhQUFBO0VEQUYsc0NBQXNDO0VDR3BDLGNBQUE7QURESjtBQ2ZBO0VBbUJNLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtFREZKLGdEQUFnRDtBQUNsRDtBQzNCQTtFRDZCRSwrQ0FBK0M7RUNPN0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURMRiw0QkFBNEI7RUNRMUIseUJBQUE7RUFDQSxhQUFBO0VETkYsK0RBQStEO0VDUzdELFlBQUE7QURQSjtBQ1dBO0VEVEUsNkVBQTZFO0VDVzdFLGdCQUFBO0FEVEYiLCJmaWxlIjoic3JjL2FwcC9fbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuanctbW9kYWwge1xuICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG5qdy1tb2RhbCAuanctbW9kYWwge1xuICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICBvdmVyZmxvdzogYXV0bztcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbCAuanctbW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDE4MywgMTk3LCAwLjQ2KTtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMzYyYjMyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG59XG5qdy1tb2RhbCAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MmIzMjtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG5ib2R5Lmp3LW1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcblxuICAuanctbW9kYWwge1xuICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcblxuICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICAgIHotaW5kZXg6IDEwMDA7XG5cbiAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIC5qdy1tb2RhbC1ib2R5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMTgzLCAxOTcsIDAuNDYpO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgIzM2MmIzMjtcblxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cblxuICAgIH1cbiAgfVxuXG4gIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYyYjMyO1xuICAgIG9wYWNpdHk6IDAuNzU7XG5cbiAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgei1pbmRleDogOTAwO1xuICB9XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'jw-modal',
          templateUrl: 'modal.component.html',
          styleUrls: ['modal.component.less'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/_modal/modal.module.ts":
  /*!****************************************!*\
    !*** ./src/app/_modal/modal.module.ts ***!
    \****************************************/

  /*! exports provided: ModalModule */

  /***/
  function srcApp_modalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/_modal/modal.component.ts");

    var ModalModule = function ModalModule() {
      _classCallCheck(this, ModalModule);
    };

    ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalModule
    });
    ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalModule_Factory(t) {
        return new (t || ModalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
          exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_modal/modal.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/_modal/modal.service.ts ***!
    \*****************************************/

  /*! exports provided: ModalService */

  /***/
  function srcApp_modalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modals = [];
      }

      _createClass(ModalService, [{
        key: "add",
        value: function add(modal) {
          // add modal to array of active modals
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.close();
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_consent_consent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/consent/consent.component */
    "./src/app/components/consent/consent.component.ts");
    /* harmony import */


    var _components_demograph_demograph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/demograph/demograph.component */
    "./src/app/components/demograph/demograph.component.ts");
    /* harmony import */


    var _components_game_tutorial_game_tutorial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/game-tutorial/game-tutorial.component */
    "./src/app/components/game-tutorial/game-tutorial.component.ts");
    /* harmony import */


    var _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/game/game.component */
    "./src/app/components/game/game.component.ts");
    /* harmony import */


    var _components_game_expiriment_game_expiriment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/game-expiriment/game-expiriment.component */
    "./src/app/components/game-expiriment/game-expiriment.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_part2_part2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/part2/part2.component */
    "./src/app/components/part2/part2.component.ts");
    /* harmony import */


    var _components_part3_part3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/part3/part3.component */
    "./src/app/components/part3/part3.component.ts");
    /* harmony import */


    var _components_tnx_tnx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/tnx/tnx.component */
    "./src/app/components/tnx/tnx.component.ts");

    var routes = [{
      path: 'consent',
      component: _components_consent_consent_component__WEBPACK_IMPORTED_MODULE_2__["ConsentComponent"]
    }, {
      path: 'demograph',
      component: _components_demograph_demograph_component__WEBPACK_IMPORTED_MODULE_3__["DemographComponent"]
    }, {
      path: 'tutorial',
      component: _components_game_tutorial_game_tutorial_component__WEBPACK_IMPORTED_MODULE_4__["GameTutorialComponent"]
    }, {
      path: 'hexGame',
      component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]
    }, {
      path: 'expiriment',
      component: _components_game_expiriment_game_expiriment_component__WEBPACK_IMPORTED_MODULE_6__["GameExpirimentComponent"]
    }, {
      path: 'part2',
      component: _components_part2_part2_component__WEBPACK_IMPORTED_MODULE_8__["Part2Component"]
    }, {
      path: 'part3',
      component: _components_part3_part3_component__WEBPACK_IMPORTED_MODULE_9__["Part3Component"]
    }, {
      path: 'Tnx',
      component: _components_tnx_tnx_component__WEBPACK_IMPORTED_MODULE_10__["TnxComponent"]
    }, {
      path: '',
      redirectTo: 'consent',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // this is the main heart of our component.
    // the component decorator and has the location


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hex-with-server';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_consent_consent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/consent/consent.component */
    "./src/app/components/consent/consent.component.ts");
    /* harmony import */


    var _components_demograph_demograph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/demograph/demograph.component */
    "./src/app/components/demograph/demograph.component.ts");
    /* harmony import */


    var _components_game_tutorial_game_tutorial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/game-tutorial/game-tutorial.component */
    "./src/app/components/game-tutorial/game-tutorial.component.ts");
    /* harmony import */


    var _components_game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/game/game.component */
    "./src/app/components/game/game.component.ts");
    /* harmony import */


    var _components_game_expiriment_game_expiriment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/game-expiriment/game-expiriment.component */
    "./src/app/components/game-expiriment/game-expiriment.component.ts");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_modal */
    "./src/app/_modal/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular-disable-browser-back-button */
    "./node_modules/angular-disable-browser-back-button/__ivy_ngcc__/fesm2015/angular-disable-browser-back-button.js");
    /* harmony import */


    var _components_part2_part2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/part2/part2.component */
    "./src/app/components/part2/part2.component.ts");
    /* harmony import */


    var _components_part3_part3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/part3/part3.component */
    "./src/app/components/part3/part3.component.ts");
    /* harmony import */


    var _components_tnx_tnx_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/tnx/tnx.component */
    "./src/app/components/tnx/tnx.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_15__["BackButtonDisableModule"].forRoot({
        preserveScrollPosition: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_consent_consent_component__WEBPACK_IMPORTED_MODULE_5__["ConsentComponent"], _components_demograph_demograph_component__WEBPACK_IMPORTED_MODULE_6__["DemographComponent"], _components_game_tutorial_game_tutorial_component__WEBPACK_IMPORTED_MODULE_7__["GameTutorialComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"], _components_game_expiriment_game_expiriment_component__WEBPACK_IMPORTED_MODULE_9__["GameExpirimentComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"], _components_part2_part2_component__WEBPACK_IMPORTED_MODULE_16__["Part2Component"], _components_part3_part3_component__WEBPACK_IMPORTED_MODULE_17__["Part3Component"], _components_tnx_tnx_component__WEBPACK_IMPORTED_MODULE_18__["TnxComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_15__["BackButtonDisableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_consent_consent_component__WEBPACK_IMPORTED_MODULE_5__["ConsentComponent"], _components_demograph_demograph_component__WEBPACK_IMPORTED_MODULE_6__["DemographComponent"], _components_game_tutorial_game_tutorial_component__WEBPACK_IMPORTED_MODULE_7__["GameTutorialComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"], _components_game_expiriment_game_expiriment_component__WEBPACK_IMPORTED_MODULE_9__["GameExpirimentComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"], _components_part2_part2_component__WEBPACK_IMPORTED_MODULE_16__["Part2Component"], _components_part3_part3_component__WEBPACK_IMPORTED_MODULE_17__["Part3Component"], _components_tnx_tnx_component__WEBPACK_IMPORTED_MODULE_18__["TnxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_15__["BackButtonDisableModule"].forRoot({
            preserveScrollPosition: true
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/consent/consent.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/consent/consent.component.ts ***!
    \*********************************************************/

  /*! exports provided: ConsentComponent */

  /***/
  function srcAppComponentsConsentConsentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsentComponent", function () {
      return ConsentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConsentComponent_div_73_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsentComponent_div_73_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.toDemography();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ConsentComponent = /*#__PURE__*/function () {
      function ConsentComponent(route) {
        _classCallCheck(this, ConsentComponent);

        this.route = route;
        this.isAgreed = false;
      }

      _createClass(ConsentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toDemography",
        value: function toDemography() {
          sessionStorage.setItem('clickConsent', 'True');
        }
      }]);

      return ConsentComponent;
    }();

    ConsentComponent.ɵfac = function ConsentComponent_Factory(t) {
      return new (t || ConsentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ConsentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConsentComponent,
      selectors: [["app-consent"]],
      decls: 76,
      vars: 2,
      consts: [[1, "content"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["id", "btn1", "routerLink", "/demograph", 3, "click"]],
      template: function ConsentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Consent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please consider this information carefully before deciding whether to accept this task.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PURPOSE OF RESEARCH:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "To examine problem solving performance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WHAT YOU WILL DO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "You will be asked to solve an HEX game problem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "TIME REQUIRED:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Participation will take approximately 40-60 minutes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "RISKS:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "There are no anticipated risks associated with participating in this study. The effects of participating should be comparable to those you would experience from viewing a computer monitor for 60 minutes and using a mouse.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "COMPENSATION:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Upon completion of this task, you will receive a code to enter on the Amazon Mechanical Turk task page,and you will receive the amount that was indicated on the task page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "CONFIDENTIALITY:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Your participation in this study will remain confidential. Your responses will be assigned a code number. You will ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "NOT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " be asked to provide your name. You will be asked to provide your age and gender. Throughout the experiment, we may collect data such as browser type, operating system version, mouse movements, and error rates. The records of this study will be kept private. In any sort of report we make public we will not include any information that will make it possible to identify you without your explicit consent. Research records will be kept in a locked file; only the researchers will have access to the records.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "PARTICIPATION AND WITHDRAWAL:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Your participation in this study is voluntarily, and you may withdraw and return the task to Amazon Mechanical Turk at any time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "You will receive a compensation only if you complete the task. You may withdraw at any time by closing the web page of the task.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "CONTACT:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "This study is conducted by researchers at the Ben-Gurion University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " If you have any questions or concerns about this study, please contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "hillash@post.bgu.ac.il");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "CONSENT:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "I have read the above information and the nature and purpose of this research have been sufficiently explained. I consent to take part in the study. I understand that I am free to withdraw at any time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConsentComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.isAgreed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "I agree to the Terms and Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ConsentComponent_div_73_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isAgreed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAgreed);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["h1[_ngcontent-%COMP%]{font-size:36px; color: antiquewhite;}h2[_ngcontent-%COMP%]{font-size:18px;}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide[_ngcontent-%COMP%]{letter-spacing:4px}h1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-weight: 800;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #733949;\r\n}h2[_ngcontent-%COMP%]{line-height: initial;}strong[_ngcontent-%COMP%]{\r\n  color: #733949;\r\n}.content[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:20%;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  width: 60%;\r\n  height: 82vh;\r\n  background: rgba(227, 183, 197, 0.46);\r\n\r\n  overflow: auto;\r\n  border: 5px solid #362b32;\r\n\r\n  border-radius: 10px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0.8vw;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n\r\n  box-shadow: inset 0 0 5px #242912;\r\n  border-radius: 10px;\r\n\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #eedceb;\r\n  border-radius: 9px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(141, 0, 49, 0.62);\r\n}#btn1[_ngcontent-%COMP%]{\r\n  background-color: rgba(155, 0, 50, 0.43);\r\n  color: antiquewhite;\r\n  border: 2px solid antiquewhite;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n\r\n}#btn1[_ngcontent-%COMP%]:hover {\r\n  background-color:antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25zZW50L2NvbnNlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsVUFBVSxpQkFBaUIsQ0FDdEYsWUFBWSx1Q0FBdUMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsa0JBQWtCLENBQzdHO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDLENBQ0EsR0FBRyxvQkFBb0IsQ0FBQyxDQUN4QjtFQUNFLGNBQWM7QUFDaEIsQ0FDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLHFDQUFxQzs7RUFFckMsY0FBYztFQUNkLHlCQUF5Qjs7RUFFekIsbUJBQW1CO0FBQ3JCLENBRUE7RUFDRSxZQUFZO0FBQ2QsQ0FFQSxVQUFVLENBQ1Y7O0VBRUUsaUNBQWlDO0VBQ2pDLG1CQUFtQjs7QUFFckIsQ0FFQSxXQUFXLENBQ1g7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCLENBRUEsb0JBQW9CLENBQ3BCO0VBQ0Usa0NBQWtDO0FBQ3BDLENBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQixDQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uc2VudC9jb25zZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtmb250LXNpemU6MzZweDsgY29sb3I6IGFudGlxdWV3aGl0ZTt9aDJ7Zm9udC1zaXplOjE4cHg7fS53My1zZXJpZntmb250LWZhbWlseTpzZXJpZn1cclxuaDEsaDIscCwgaDN7Zm9udC1mYW1pbHk6XCJTZWdvZSBVSVwiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO21hcmdpbjoxMHB4IDB9LnczLXdpZGV7bGV0dGVyLXNwYWNpbmc6NHB4fVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogIzczMzk0OTtcclxufVxyXG5oMntsaW5lLWhlaWdodDogaW5pdGlhbDt9XHJcbnN0cm9uZ3tcclxuICBjb2xvcjogIzczMzk0OTtcclxufVxyXG4uY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDoyMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogODJ2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMTgzLCAxOTcsIDAuNDYpO1xyXG5cclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3JkZXI6IDVweCBzb2xpZCAjMzYyYjMyO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMC44dnc7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMyNDI5MTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVkY2ViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTQxLCAwLCA0OSwgMC42Mik7XHJcbn1cclxuXHJcbiNidG4xe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAwLCA1MCwgMC40Myk7XHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBhbnRpcXVld2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuXHJcbn1cclxuXHJcbiNidG4xOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmFudGlxdWV3aGl0ZTtcclxuICBjb2xvcjogcmdiKDIwOSwgMCwgNzEpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-consent',
          templateUrl: './consent.component.html',
          styleUrls: ['./consent.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/demograph/demograph.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/demograph/demograph.component.ts ***!
    \*************************************************************/

  /*! exports provided: DemographComponent */

  /***/
  function srcAppComponentsDemographDemographComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemographComponent", function () {
      return DemographComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_hex_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/hex-service.service */
    "./src/app/services/hex-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DemographComponent_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Worker ID is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DemographComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemographComponent_div_10_div_1_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.workerID.errors.required);
      }
    }

    function DemographComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "age must be over 18");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DemographComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemographComponent_div_15_div_1_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.f.age.errors == null ? null : ctx_r1.f.age.errors.pattern) || ctx_r1.f.age.errors.min || ctx_r1.f.age.errors.max);
      }
    }

    function DemographComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "age is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DemographComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemographComponent_div_16_div_1_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.age.errors.required);
      }
    }

    function DemographComponent_div_28_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gender is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DemographComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemographComponent_div_28_div_1_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.gender.errors.required);
      }
    }

    function DemographComponent_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Strong hand is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DemographComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemographComponent_div_39_div_1_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.hand.errors.required);
      }
    }

    function DemographComponent_div_55_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Education is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DemographComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemographComponent_div_55_div_1_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.education.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var DemographComponent = /*#__PURE__*/function () {
      function DemographComponent(formBuilder, hexService, router) {
        _classCallCheck(this, DemographComponent);

        this.formBuilder = formBuilder;
        this.hexService = hexService;
        this.router = router;
        this.submitted = false;
        this.unamePattern = '[0-9]+';
      }

      _createClass(DemographComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var clicks = sessionStorage.getItem('clickConsent');

          if (clicks !== 'True') {
            this.router.navigate(['/', 'notFound']);
          }

          this.registerForm = this.formBuilder.group({
            workerID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90)]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            education: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          var data = {
            workerID: this.registerForm.get('workerID').value,
            age: this.registerForm.get('age').value,
            gender: this.registerForm.get('gender').value,
            hand: this.registerForm.get('hand').value,
            education: this.registerForm.get('education').value
          };
          this.hexService.create(data).subscribe(function (response) {
            console.log('here is the response');
            var userDBID = response;
            console.log(userDBID);

            _this3.navigatesss(userDBID);
          }, function (error) {
            console.log(error);
          }); // display form values on success
          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.registerForm.reset();
        }
      }, {
        key: "navigatesss",
        value: function navigatesss(userDBID) {
          sessionStorage.setItem('userID', userDBID);
          sessionStorage.removeItem('clickConsent');
          sessionStorage.setItem('clickTutorial', 'True');
          this.router.navigate(['/', 'tutorial']);
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return DemographComponent;
    }();

    DemographComponent.ɵfac = function DemographComponent_Factory(t) {
      return new (t || DemographComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hex_service_service__WEBPACK_IMPORTED_MODULE_2__["HexServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    DemographComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemographComponent,
      selectors: [["app-demograph"]],
      decls: 61,
      vars: 22,
      consts: [[1, "card", "m-3"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-4"], ["type", "text", "formControlName", "workerID", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-2"], ["type", "text", "formControlName", "age", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-3"], ["formControlName", "gender", 1, "form-control", 3, "ngClass"], ["value", "Male"], ["value", "Female"], ["value", "Prefer not to say"], [1, "form-group", "col-5"], ["formControlName", "hand", 1, "form-control", 3, "ngClass"], ["value", "right"], ["value", "left"], ["value", "both"], [1, "form-group", "col-8"], ["formControlName", "education", 1, "form-control", 3, "ngClass"], ["value", "less"], ["value", "hight"], ["value", "college"], ["value", "graduate"], ["value", "prefer"], [1, "text-center"], ["id", "btn1"], ["id", "btn2", "type", "reset", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function DemographComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Demographic information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DemographComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "worker ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DemographComponent_div_10_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DemographComponent_div_15_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DemographComponent_div_16_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Prefer not to say");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DemographComponent_div_28_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "What is your strong hand?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Both hand are equally strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DemographComponent_div_39_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Less then hight school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Hight school/GED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "College");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Graduate gagree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Prefer not to say");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DemographComponent_div_55_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemographComponent_Template_button_click_59_listener() {
            return ctx.onReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Reset information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.workerID.errors || ctx.f.workerID.touched && ctx.f.workerID.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.workerID.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.age.errors || ctx.f.age.errors && ctx.f.age.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.age.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.age.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.gender.errors || ctx.f.gender.errors && ctx.f.gender.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.gender.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.hand.errors || ctx.f.hand.errors && ctx.f.hand.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.hand.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.education.errors || ctx.f.education.errors && ctx.f.education.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.education.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["label[_ngcontent-%COMP%]{font-size:18px}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h5[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding-top: 2%;\r\n  color: antiquewhite;\r\n  font-weight: 800;\r\n  font-size: 28px;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #733949;\r\n}.card[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:20%;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  width: 60%;\r\n  height: 80vh;\r\n  background: rgba(227, 183, 197, 0.46);\r\n  overflow: auto;\r\n  border: 3px solid #362b32;\r\n\r\n  border-radius: 10px;\r\n}label[_ngcontent-%COMP%]{\r\n  color: #733949;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n\r\n\r\n}#btn1[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n  border: 2px solid #362b32;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n\r\n\r\n}#btn1[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(155, 0, 50, 0.43); \r\n  color: antiquewhite;\r\n}#btn2[_ngcontent-%COMP%]{\r\n  background-color: rgba(155, 0, 50, 0.43);\r\n  color: antiquewhite;\r\n  border: 2px solid antiquewhite;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  margin-left: 3%;\r\n}#btn2[_ngcontent-%COMP%]:hover {\r\n  background-color:antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZW1vZ3JhcGgvZGVtb2dyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxjQUFjLENBQUMsVUFBVSxpQkFBaUIsQ0FDaEQ7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEMsQ0FHQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QseUJBQXlCOztFQUV6QixtQkFBbUI7QUFDckIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTs7O0FBR2pCLENBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCOzs7QUFHcEIsQ0FFQTtFQUNFLHdDQUF3QyxFQUFFLFVBQVU7RUFDcEQsbUJBQW1CO0FBQ3JCLENBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIsQ0FFQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbW9ncmFwaC9kZW1vZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse2ZvbnQtc2l6ZToxOHB4fS53My1zZXJpZntmb250LWZhbWlseTpzZXJpZn1cclxuaDV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjNzMzOTQ5O1xyXG59XHJcblxyXG5cclxuLmNhcmR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6MjAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDE4MywgMTk3LCAwLjQ2KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMzYyYjMyO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBjb2xvcjogIzczMzk0OTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcblxyXG59XHJcblxyXG4jYnRuMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgY29sb3I6IHJnYigyMDksIDAsIDcxKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMzYyYjMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcblxyXG5cclxufVxyXG5cclxuI2J0bjE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAwLCA1MCwgMC40Myk7IC8qIEdyZWVuICovXHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuI2J0bjJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDAsIDUwLCAwLjQzKTtcclxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGFudGlxdWV3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG5cclxuI2J0bjI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6YW50aXF1ZXdoaXRlO1xyXG4gIGNvbG9yOiByZ2IoMjA5LCAwLCA3MSk7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemographComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-demograph',
          templateUrl: './demograph.component.html',
          styleUrls: ['./demograph.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_hex_service_service__WEBPACK_IMPORTED_MODULE_2__["HexServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game-expiriment/game-expiriment.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/game-expiriment/game-expiriment.component.ts ***!
    \*************************************************************************/

  /*! exports provided: GameExpirimentComponent */

  /***/
  function srcAppComponentsGameExpirimentGameExpirimentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameExpirimentComponent", function () {
      return GameExpirimentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/hex-service.service */
    "./src/app/services/hex-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GameExpirimentComponent_div_0_div_46_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_46_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f1.q1.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_option_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r25);
      }
    }

    function GameExpirimentComponent_div_0_div_56_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_56_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f1.q2.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_option_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r27);
      }
    }

    function GameExpirimentComponent_div_0_div_66_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_66_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f1.q3.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_option_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r29);
      }
    }

    function GameExpirimentComponent_div_0_div_76_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_76_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f1.q4.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_div_83_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_83_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.f1.q5.errors == null ? null : ctx_r8.f1.q5.errors.pattern) || ctx_r8.f1.q5.errors.min || ctx_r8.f1.q5.errors.max);
      }
    }

    function GameExpirimentComponent_div_0_div_84_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_84_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f1.q5.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_div_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("please notice you have left ", 100 - ctx_r10.f1.A.value - ctx_r10.f1.B.value - ctx_r10.f1.C.value - ctx_r10.f1.D.value - ctx_r10.f1.E.value, "% to complete");
      }
    }

    function GameExpirimentComponent_div_0_div_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("please notice your values are too high, get rid of ", (0 - 1) * (100 - ctx_r11.f1.A.value - ctx_r11.f1.B.value - ctx_r11.f1.C.value - ctx_r11.f1.D.value - ctx_r11.f1.E.value), "% to complete");
      }
    }

    function GameExpirimentComponent_div_0_div_94_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_94_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.f1.A.errors == null ? null : ctx_r12.f1.A.errors.pattern) || ctx_r12.f1.A.errors.min || ctx_r12.f1.A.errors.max);
      }
    }

    function GameExpirimentComponent_div_0_div_95_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_95_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f1.A.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_div_98_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_98_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_98_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.f1.B.errors == null ? null : ctx_r14.f1.B.errors.pattern) || ctx_r14.f1.B.errors.min || ctx_r14.f1.B.errors.max);
      }
    }

    function GameExpirimentComponent_div_0_div_99_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_99_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.f1.B.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_div_102_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_102_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_102_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r16.f1.C.errors == null ? null : ctx_r16.f1.C.errors.pattern) || ctx_r16.f1.C.errors.min || ctx_r16.f1.C.errors.max);
      }
    }

    function GameExpirimentComponent_div_0_div_103_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_103_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.f1.C.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_div_106_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_106_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_106_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r18.f1.D.errors == null ? null : ctx_r18.f1.D.errors.pattern) || ctx_r18.f1.D.errors.min || ctx_r18.f1.D.errors.max);
      }
    }

    function GameExpirimentComponent_div_0_div_107_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_107_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.f1.D.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_div_110_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_110_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_110_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.f1.E.errors == null ? null : ctx_r20.f1.E.errors.pattern) || ctx_r20.f1.E.errors.min || ctx_r20.f1.E.errors.max);
      }
    }

    function GameExpirimentComponent_div_0_div_111_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_111_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.f1.E.errors.required);
      }
    }

    function GameExpirimentComponent_div_0_button_130_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameExpirimentComponent_div_0_button_130_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r43.changAns1(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes. I want to change my answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_131_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameExpirimentComponent_div_0_div_131_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r47.changAns1(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I regret. I don't want to change my answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_131_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameExpirimentComponent_div_0_div_131_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameExpirimentComponent_div_0_div_131_div_19_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.f1.q6.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function GameExpirimentComponent_div_0_div_131_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What should be the next step for the red player which secure his victory?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please choose your answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GameExpirimentComponent_div_0_div_131_button_18_Template, 2, 0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GameExpirimentComponent_div_0_div_131_div_19_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r23.next1 && ctx_r23.f1.q6.errors || ctx_r23.f1.q6.errors && ctx_r23.f1.q6.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.changeANS1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.next1 && ctx_r23.f1.q6.errors);
      }
    }

    function GameExpirimentComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In this part you can go back and play again for practice. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Notice: when you choose to play, you loose all your answers, if you fill them out.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameExpirimentComponent_div_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.playGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I want to play again");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Questionnaire part 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Please follow the questions carefully, after you click \"next\", your answers ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "will be saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " and you will move to the next section of questions.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GameExpirimentComponent_div_0_Template_form_ngSubmit_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.onNext1();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Questions:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "What should be the next step for the red player which secure his victory?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Please choose your answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, GameExpirimentComponent_div_0_div_46_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "How confident are you in your answers?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1- Very easy 10- Extremely difficult");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, GameExpirimentComponent_div_0_option_55_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, GameExpirimentComponent_div_0_div_56_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "How difficult was it for you to solve this problem?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1- Very easy 10- Extremely difficult");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, GameExpirimentComponent_div_0_option_65_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, GameExpirimentComponent_div_0_div_66_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "In your opinion, how difficult is it for most people to solve this problem?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "1- Very easy 10- Extremely difficult");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, GameExpirimentComponent_div_0_option_75_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, GameExpirimentComponent_div_0_div_76_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "How many responders do you estimate, will select the correct answer?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, GameExpirimentComponent_div_0_div_83_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, GameExpirimentComponent_div_0_div_84_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "How many responders do you estimate will select each answer? A number between 0-100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, GameExpirimentComponent_div_0_div_89_Template, 2, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, GameExpirimentComponent_div_0_div_90_Template, 2, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, GameExpirimentComponent_div_0_div_94_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, GameExpirimentComponent_div_0_div_95_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, GameExpirimentComponent_div_0_div_98_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, GameExpirimentComponent_div_0_div_99_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, GameExpirimentComponent_div_0_div_102_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, GameExpirimentComponent_div_0_div_103_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, GameExpirimentComponent_div_0_div_106_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, GameExpirimentComponent_div_0_div_107_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, GameExpirimentComponent_div_0_div_110_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, GameExpirimentComponent_div_0_div_111_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Now we will show you data about others answers for this question:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "23% of the responders choose A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "20% of the responders choose B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "15% of the responders choose C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "24% of the responders choose D ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "18% of the responders choose E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Now, do you want to change you first answer?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, GameExpirimentComponent_div_0_button_130_Template, 2, 0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, GameExpirimentComponent_div_0_div_131_Template, 20, 5, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.questionForm1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx_r0.next1 && ctx_r0.f1.q1.errors || ctx_r0.f1.q1.errors && ctx_r0.f1.q1.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q1.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx_r0.next1 && ctx_r0.f1.q2.errors || ctx_r0.f1.q2.errors && ctx_r0.f1.q2.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q2.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx_r0.next1 && ctx_r0.f1.q3.errors || ctx_r0.f1.q3.errors && ctx_r0.f1.q3.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q3.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx_r0.next1 && ctx_r0.f1.q4.errors || ctx_r0.f1.q4.errors && ctx_r0.f1.q4.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q4.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx_r0.next1 && ctx_r0.f1.q5.errors || ctx_r0.f1.q5.errors && ctx_r0.f1.q5.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.q5.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q5.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionForm1.hasError("notValid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionForm1.hasError("notValid2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx_r0.next1 && ctx_r0.f1.A.errors || ctx_r0.f1.A.errors && ctx_r0.f1.A.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.A.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.A.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx_r0.next1 && ctx_r0.f1.B.errors || ctx_r0.f1.B.errors && ctx_r0.f1.B.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.B.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.B.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx_r0.next1 && ctx_r0.f1.C.errors || ctx_r0.f1.C.errors && ctx_r0.f1.C.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.C.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.C.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx_r0.next1 && ctx_r0.f1.D.errors || ctx_r0.f1.D.errors && ctx_r0.f1.D.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.D.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.D.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx_r0.next1 && ctx_r0.f1.E.errors || ctx_r0.f1.E.errors && ctx_r0.f1.E.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.E.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.E.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.changeANS1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeANS1);
      }
    }

    var GameExpirimentComponent = /*#__PURE__*/function () {
      function GameExpirimentComponent(formBuilder, router, hexService) {
        _classCallCheck(this, GameExpirimentComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.hexService = hexService;
        this.next1 = false;
        this.next2 = false;
        this.finish = false;
        this.part1 = true;
        this.unamePattern = '[0-9]+';
        this.changeANS1 = false;
      }

      _createClass(GameExpirimentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var isClickGame = sessionStorage.getItem('clickGame');

          if (isClickGame === null) {
            sessionStorage.setItem('clickGame', '0');
          }

          var isUser = sessionStorage.getItem('userID');

          if (isUser == null) {
            this.router.navigate(['/', 'notFound']);
          } else {
            this.isItUserFromDB(isUser);
          }

          this.options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
          this.questionForm1 = this.formBuilder.group({
            q1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            A: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            B: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            C: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            D: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            E: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            q6: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validators: this.checkSum
          });
        }
      }, {
        key: "isItUserFromDB",
        value: function isItUserFromDB(userID) {
          var _this4 = this;

          this.hexService.get(userID).subscribe(function (data) {
            console.log(data);
            console.log(true);
          }, function (error) {
            console.log(error);

            _this4.router.navigate(['/', 'pageNotFound']);
          });
        }
      }, {
        key: "checkSum",
        value: function checkSum(group) {
          if (!group.valid && !group.hasError('notValid')) {
            // return if another validator has already found an error on the matchingControl
            return;
          }

          var sum;
          var a = +group.get('A').value;
          var b = +group.get('B').value;
          var c = +group.get('C').value;
          var d = +group.get('D').value;
          var e = +group.get('E').value;
          sum = a + b + c + d + e;

          if (sum < 100) {
            return {
              notValid: true
            };
          } else if (sum > 100) {
            return {
              notValid2: true
            };
          } else {
            return null;
          }
        }
      }, {
        key: "changAns1",
        value: function changAns1(isIT) {
          if (isIT === true) {
            this.changeANS1 = true;
          } else {
            this.f1.q6.setValue('');
            this.changeANS1 = false;
          }
        }
      }, {
        key: "playGame",
        value: function playGame() {
          var counter = parseInt(sessionStorage.getItem('clickGame'));
          counter = counter + 1;
          sessionStorage.removeItem('clickGame');
          sessionStorage.setItem('clickGame', String(counter));
          sessionStorage.setItem('isPlay', 'True');
          this.router.navigate(['/', 'hexGame']);
        }
      }, {
        key: "onNext1",
        value: function onNext1() {
          this.next1 = true;

          if (this.f1.q1.errors || this.f1.q2.errors || this.f1.q3.errors || this.f1.q4.errors || this.f1.q5.errors || this.f1.A.errors || this.f1.B.errors || this.questionForm1.hasError('notValid2') || this.f1.C.errors || this.f1.D.errors || this.f1.E.errors || this.f1.q6.errors && this.changeANS1 || this.questionForm1.hasError('notValid')) {
            console.log('yes');
          } else {
            var data = {
              id: sessionStorage.getItem('userID'),
              q1: this.f1.q1.value,
              q2: this.f1.q2.value,
              q3: this.f1.q3.value,
              q4: this.f1.q4.value,
              q5: this.f1.q5.value,
              A: this.f1.A.value,
              B: this.f1.B.value,
              C: this.f1.C.value,
              D: this.f1.D.value,
              E: this.f1.E.value,
              q6: this.f1.q6.value,
              numOfTrying: sessionStorage.getItem('clickGame')
            };
            this.hexService.savepart1(data).subscribe(function (response) {
              console.log('here is the response');
              var part1AnsDb = response;
              console.log(part1AnsDb);
            }, function (error) {
              console.log(error);
            });
          }
          /*this.wrongAns1 = false;
          this.wrongAns2 = false;
          console.log(this.questionForm.get('q1').value)
          if (this.questionForm.get('q1').value === 'red' && this.questionForm.get('q2').value === 'no2') {
            this.submitted = true;
            this.navigatesss();
          }
          else {
            if (this.questionForm.get('q1').value != 'red') {
              this.wrongAns1 = true;
              console.log("the 1:" + this.wrongAns1);
              console.log("ffffff::::");
              console.log(this.submitted);
            }
            if (this.questionForm.get('q2').value != 'no2') {
              this.wrongAns2 = true;
              console.log("the 2:" + this.wrongAns2);
            }
            return;
          }*/

        }
      }, {
        key: "navigatesss",
        value: function navigatesss() {//this.showPage = true;
        }
      }, {
        key: "readyFor",
        value: function readyFor() {
          /*this.continue = true;
          if (this.familiarity.get('howFamiliar').value === '')
          {
            document.getElementById('aaa').scrollIntoView();
            return;
          }
          sessionStorage.setItem('tutorialAns' , this.familiarity.get('howFamiliar').value)
          sessionStorage.setItem('isPlay', 'True');
          sessionStorage.removeItem('clickTutorial');
          this.router.navigate(['/', 'hexGame']);*/
        }
      }, {
        key: "f1",
        get: function get() {
          return this.questionForm1.controls;
        }
      }, {
        key: "f2",
        get: function get() {
          return this.questionForm2.controls;
        }
      }, {
        key: "f3",
        get: function get() {
          return this.questionForm3.controls;
        }
      }]);

      return GameExpirimentComponent;
    }();

    GameExpirimentComponent.ɵfac = function GameExpirimentComponent_Factory(t) {
      return new (t || GameExpirimentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__["HexServiceService"]));
    };

    GameExpirimentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameExpirimentComponent,
      selectors: [["app-game-expiriment"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "lblGoback"], ["type", "button", 1, "btn3", 3, "click"], [1, "content"], [3, "formGroup", "ngSubmit"], ["src", "assets\\exQ1.jpg", "width", "88%"], [1, "form-row"], [1, "form-group", "col-10"], ["formControlName", "q1", 1, "form-control", 3, "ngClass"], ["value", "", "disabled", ""], ["value", "a"], ["value", "b"], ["value", "c"], ["value", "d"], ["value", "e"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "q2", 1, "form-control", 3, "ngClass"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "q3", 1, "form-control", 3, "ngClass"], ["formControlName", "q4", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "Number between 0%-100%", "formControlName", "q5", 1, "form-control", 3, "ngClass"], ["class", "worn1", 4, "ngIf"], [1, "form-group", "col-2"], ["type", "text", "placeholder", "A", "formControlName", "A", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "B", "formControlName", "B", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "C", "formControlName", "C", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "D", "formControlName", "D", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "E", "formControlName", "E", 1, "form-control", 3, "ngClass"], ["class", "btn1", "type", "button", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn2"], [1, "invalid-feedback"], [3, "ngValue"], [1, "worn1"], ["type", "button", 1, "btn1", 3, "click"], ["formControlName", "q6", 1, "form-control", 3, "ngClass"]],
      template: function GameExpirimentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameExpirimentComponent_div_0_Template, 137, 54, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.part1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      styles: ["h2[_ngcontent-%COMP%]{font-size:18px}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide[_ngcontent-%COMP%]{letter-spacing:4px}h1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size:36px;\r\n  font-weight: 800;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #733949;\r\n  color: antiquewhite;\r\n}h2[_ngcontent-%COMP%]{line-height: initial;}strong[_ngcontent-%COMP%]{\r\n  color: #733949;\r\n}.content[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:15%;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  width: 70%;\r\n  height: 78vh;\r\n  background: rgba(227, 183, 197, 0.46);\r\n  overflow: auto;\r\n  border: 3px solid #362b32;\r\n\r\n  border-radius: 10px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0.8vw;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n\r\n  box-shadow: inset 0 0 5px #242912;\r\n  border-radius: 10px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #eedceb;\r\n  border-radius: 9px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(141, 0, 49, 0.62);\r\n}h4[_ngcontent-%COMP%]{font-size:36px}h5[_ngcontent-%COMP%]{font-size:30px}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{text-align:center; font-family:\"Segoe UI\",Arial,sans-serif;font-weight:200;margin:10px 0}.w3-wide[_ngcontent-%COMP%]{letter-spacing:4px}h4[_ngcontent-%COMP%]{text-align: center}.btn2[_ngcontent-%COMP%]{\r\n  background-color: rgba(185, 98, 128, 0.67);\r\n  color: antiquewhite;\r\n  border: 2px solid antiquewhite;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n\r\n}.btn2[_ngcontent-%COMP%]:hover {\r\n  background-color:antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n}.btn1[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n  border: 2px solid #b96280;\r\n  border-radius: 8px;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  margin-left: 2%;\r\n\r\n}.btn1[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(155, 0, 50, 0.43); \r\n  color: antiquewhite;\r\n}.worn1[_ngcontent-%COMP%]{\r\n  color: red;\r\n}.lblGoback[_ngcontent-%COMP%]{\r\n\r\n  margin-left:10%;\r\n  font-size: 18px;\r\n\r\n}.btn3[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n  border: 2px solid #b96280;\r\n  border-radius: 8px;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  margin-left: 5%;\r\n\r\n}.btn3[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(155, 0, 50, 0.43); \r\n  color: antiquewhite;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWV4cGlyaW1lbnQvZ2FtZS1leHBpcmltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxjQUFjLENBQUMsVUFBVSxpQkFBaUIsQ0FDN0MsWUFBWSx1Q0FBdUMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsa0JBQWtCLENBQzdHO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckIsQ0FDQSxHQUFHLG9CQUFvQixDQUFDLENBRXhCO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCx5QkFBeUI7O0VBRXpCLG1CQUFtQjtBQUNyQixDQUdBO0VBQ0UsWUFBWTtBQUNkLENBRUEsVUFBVSxDQUNWOztFQUVFLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckIsQ0FFQSxXQUFXLENBQ1g7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCLENBRUEsb0JBQW9CLENBQ3BCO0VBQ0Usa0NBQWtDO0FBQ3BDLENBRUEsR0FBRyxjQUFjLENBQUMsR0FBRyxjQUFjLENBQUMsVUFBVSxpQkFBaUIsQ0FDL0QsTUFBTSxpQkFBaUIsRUFBRSx1Q0FBdUMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsa0JBQWtCLENBQzFILEdBQUcsa0JBQWtCLENBRXJCO0VBQ0UsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEIsQ0FFQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEIsQ0FFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7O0FBRWpCLENBRUE7RUFDRSx3Q0FBd0MsRUFBRSxVQUFVO0VBQ3BELG1CQUFtQjtBQUNyQixDQUVBO0VBQ0UsVUFBVTtBQUNaLENBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7O0FBRWpCLENBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlOztBQUVqQixDQUVBO0VBQ0Usd0NBQXdDLEVBQUUsVUFBVTtFQUNwRCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtZXhwaXJpbWVudC9nYW1lLWV4cGlyaW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye2ZvbnQtc2l6ZToxOHB4fS53My1zZXJpZntmb250LWZhbWlseTpzZXJpZn1cclxuaDEsaDIscCwgaDN7Zm9udC1mYW1pbHk6XCJTZWdvZSBVSVwiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO21hcmdpbjoxMHB4IDB9LnczLXdpZGV7bGV0dGVyLXNwYWNpbmc6NHB4fVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogIzczMzk0OTtcclxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcbmgye2xpbmUtaGVpZ2h0OiBpbml0aWFsO31cclxuXHJcbnN0cm9uZ3tcclxuICBjb2xvcjogIzczMzk0OTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6MTUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDc4dmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDE4MywgMTk3LCAwLjQ2KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMzYyYjMyO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDAuOHZ3O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjMjQyOTEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVkY2ViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTQxLCAwLCA0OSwgMC42Mik7XHJcbn1cclxuXHJcbmg0e2ZvbnQtc2l6ZTozNnB4fWg1e2ZvbnQtc2l6ZTozMHB4fS53My1zZXJpZntmb250LWZhbWlseTpzZXJpZn1cclxuaDQsaDV7dGV4dC1hbGlnbjpjZW50ZXI7IGZvbnQtZmFtaWx5OlwiU2Vnb2UgVUlcIixBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjIwMDttYXJnaW46MTBweCAwfS53My13aWRle2xldHRlci1zcGFjaW5nOjRweH1cclxuaDR7dGV4dC1hbGlnbjogY2VudGVyfVxyXG5cclxuLmJ0bjJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDk4LCAxMjgsIDAuNjcpO1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYW50aXF1ZXdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcblxyXG59XHJcblxyXG4uYnRuMjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjphbnRpcXVld2hpdGU7XHJcbiAgY29sb3I6IHJnYigyMDksIDAsIDcxKTtcclxufVxyXG5cclxuLmJ0bjF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIGNvbG9yOiByZ2IoMjA5LCAwLCA3MSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2I5NjI4MDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcblxyXG59XHJcblxyXG4uYnRuMTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDAsIDUwLCAwLjQzKTsgLyogR3JlZW4gKi9cclxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG4ud29ybjF7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxibEdvYmFja3tcclxuXHJcbiAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbi5idG4ze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICBjb2xvcjogcmdiKDIwOSwgMCwgNzEpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOTYyODA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxufVxyXG5cclxuLmJ0bjM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAwLCA1MCwgMC40Myk7IC8qIEdyZWVuICovXHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameExpirimentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-expiriment',
          templateUrl: './game-expiriment.component.html',
          styleUrls: ['./game-expiriment.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__["HexServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game-tutorial/game-tutorial.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/game-tutorial/game-tutorial.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GameTutorialComponent */

  /***/
  function srcAppComponentsGameTutorialGameTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameTutorialComponent", function () {
      return GameTutorialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GameTutorialComponent_div_0_div_57_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameTutorialComponent_div_0_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameTutorialComponent_div_0_div_57_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.wrongAns1 || ctx_r2.f.q1.errors.required);
      }
    }

    function GameTutorialComponent_div_0_div_75_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameTutorialComponent_div_0_div_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameTutorialComponent_div_0_div_75_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.wrongAns2 || ctx_r3.f.q2.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function GameTutorialComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Game tutorial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please follow the tutorial in carefully, after you finnish you will get some questions for seeing your understanding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Step 1: Learn the object of Hex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The object of Hex is to create a row of hexes going from one side of the board to the other. You will play with the red Hex, which means you take the the left and right sides of the board, while the computer will play with the blue Hex, which means it takes the top and bottom the board. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Step 2: play the game, you GO FIRST");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The player who goes first has the advantage in a game, for this experiment you always start with your red Hex. Take turns placing one piece or marking one hex on the board per move. Once a piece is played or a hex has been marked, it stays that way for the rest of the game. Either player may play a piece in any hexagon that is not yet occupied. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Step 3: Block your opponent whenever possible.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "One way to increase your chances of winning hex is to prevent your opponent from winning. If your opponent is close to finishing his or her path, then you may need to devote some of your play time to blocking your opponent. You can block your opponent by placing tiles in his path, thereby making it harder for your opponent to win.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Step 4: Win the game by connecting a row of adjacent hexagons between your two opposite sides.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "The first player to create a path from one of your sides of the board to the opposite side is the winner. Any continuous path will do, and the pieces need not have been placed in any special order. As you can see the winner here is the blue player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GameTutorialComponent_div_0_Template_form_ngSubmit_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Questions:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Who is the winner in the picture?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Please choose the right answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Red player is the winner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Blue player is the winner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Can't tell who is the winner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, GameTutorialComponent_div_0_div_57_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Is the red player moving in the right direction?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Please choose the right answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Yes! the red player is moving in right direction");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "No! the red player should be moving from red border to blue border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "No! the red player should be moving from red to red borders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, GameTutorialComponent_div_0_div_75_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.questionForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.submitted && ctx_r0.wrongAns1 || ctx_r0.f.q1.errors && ctx_r0.f.q1.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.wrongAns1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.submitted && ctx_r0.wrongAns2 || ctx_r0.f.q2.errors && ctx_r0.f.q2.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.wrongAns2);
      }
    }

    function GameTutorialComponent_div_1_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameTutorialComponent_div_1_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameTutorialComponent_div_1_div_27_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f2.howFamiliar.errors.required);
      }
    }

    function GameTutorialComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Game tutorial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GameTutorialComponent_div_1_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.readyFor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please rate your familiarity and level of expertise with Hex game, prior to this study:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "please choose the correct answer about you");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Absolutely no familiarity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Minimal familiarity and little to no experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Below average level of expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Average level of expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Above average level of expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hight level of expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GameTutorialComponent_div_1_div_27_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Stages and Tasks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First, you will experience the game. As we mentioned before, you will play against an AI opponent. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Your purpose is to win.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " The game will last until someone will win. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "By the time you will play, 1 or 2 questione (depend on your performance quality) will pop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "You have to answer to this questions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "After your first try with the game, you will move to the \"Game questionnaire\" part, which includes questions about the game, and predictions about other participants' performances. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "There is only one answer that is correct");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Buttons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "make a move back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " You can use this button while you are playing the game. This means you can go back one step (before the opposite player played and before your previous move). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "The number of times you use the button will be counted and saved.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Remember you have to play carefully because ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "your purpose is to win");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ".");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Are you ready to play?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Yes I'm ready");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.familiarity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1["continue"] || ctx_r1.f2.howFamiliar.errors && ctx_r1.f2.howFamiliar.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1["continue"]);
      }
    }

    var GameTutorialComponent = /*#__PURE__*/function () {
      function GameTutorialComponent(formBuilder, router) {
        _classCallCheck(this, GameTutorialComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this["continue"] = false;
        this.wrongAns1 = false;
        this.wrongAns2 = false;
        this.showPage = false;
      }

      _createClass(GameTutorialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var isUser = sessionStorage.getItem('userID');

          if (isUser == null) {
            this.router.navigate(['/', 'notFound']);
          }

          var clicks = sessionStorage.getItem('clickTutorial');

          if (clicks !== 'True') {
            this.router.navigate(['/', 'notFound']);
          }

          console.log(isUser);
          this.questionForm = this.formBuilder.group({
            q1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.familiarity = this.formBuilder.group({
            howFamiliar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          this.wrongAns1 = false;
          this.wrongAns2 = false;
          console.log(this.questionForm.get('q1').value);

          if (this.questionForm.get('q1').value === 'red' && this.questionForm.get('q2').value === 'no2') {
            this.submitted = true;
            this.navigatesss();
          } else {
            if (this.questionForm.get('q1').value != 'red') {
              this.wrongAns1 = true;
              console.log("the 1:" + this.wrongAns1);
              console.log("ffffff::::");
              console.log(this.submitted);
            }

            if (this.questionForm.get('q2').value != 'no2') {
              this.wrongAns2 = true;
              console.log("the 2:" + this.wrongAns2);
            }

            return;
          }
        }
      }, {
        key: "navigatesss",
        value: function navigatesss() {
          this.showPage = true;
        }
      }, {
        key: "readyFor",
        value: function readyFor() {
          this["continue"] = true;

          if (this.familiarity.get('howFamiliar').value === '') {
            document.getElementById('aaa').scrollIntoView();
            return;
          }

          sessionStorage.setItem('tutorialAns', this.familiarity.get('howFamiliar').value);
          sessionStorage.setItem('isPlay', 'True');
          sessionStorage.removeItem('clickTutorial');
          this.router.navigate(['/', 'hexGame']);
        }
      }, {
        key: "f",
        get: function get() {
          return this.questionForm.controls;
        }
      }, {
        key: "f2",
        get: function get() {
          return this.familiarity.controls;
        }
      }]);

      return GameTutorialComponent;
    }();

    GameTutorialComponent.ɵfac = function GameTutorialComponent_Factory(t) {
      return new (t || GameTutorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    GameTutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameTutorialComponent,
      selectors: [["app-game-tutorial"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "content"], ["src", "assets\\board.JPG", "width", "88%"], ["src", "assets\\play1.JPG", "width", "88%"], ["src", "assets\\block.JPG", "width", "88%"], ["src", "assets\\win.JPG", "width", "88%"], [3, "formGroup", "ngSubmit"], ["src", "assets\\q1.JPG", "width", "88%"], [1, "form-row"], [1, "form-group", "col-8"], ["formControlName", "q1", 1, "form-control", 3, "ngClass"], ["value", "", "disabled", ""], ["value", "red"], ["value", "blue"], ["value", "dont't know"], ["class", "invalid-feedback", 4, "ngIf"], ["src", "assets\\q2.JPG", "width", "88%"], ["formControlName", "q2", 1, "form-control", 3, "ngClass"], ["value", "yes"], ["value", "no"], ["value", "no2"], ["id", "btn2"], [1, "invalid-feedback"], ["id", "aaa"], ["formControlName", "howFamiliar", 1, "form-control", 3, "ngClass"], ["value", "Minimal"], ["value", "belowaverage"], ["value", "high"], ["value", "aboveaverage"], ["value", "hight"], ["src", "assets\\makemove.JPG", "width", "40%"], [1, "text-center"], ["id", "btn1"]],
      template: function GameTutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameTutorialComponent_div_0_Template, 80, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameTutorialComponent_div_1_Template, 76, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["h2[_ngcontent-%COMP%]{font-size:18px}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide[_ngcontent-%COMP%]{letter-spacing:4px}h1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size:36px;\r\n  font-weight: 800;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #733949;\r\n  color: antiquewhite;\r\n}h2[_ngcontent-%COMP%]{line-height: initial;}strong[_ngcontent-%COMP%]{\r\n  color: #733949;\r\n}.content[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:20%;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  width: 60%;\r\n  height: 82vh;\r\n  background: rgba(227, 183, 197, 0.46);\r\n  overflow: auto;\r\n  border: 3px solid #362b32;\r\n\r\n  border-radius: 10px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0.8vw;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n\r\n  box-shadow: inset 0 0 5px #242912;\r\n  border-radius: 10px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #eedceb;\r\n  border-radius: 9px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(141, 0, 49, 0.62);\r\n}h4[_ngcontent-%COMP%]{font-size:36px}h5[_ngcontent-%COMP%]{font-size:30px}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{text-align:center; font-family:\"Segoe UI\",Arial,sans-serif;font-weight:200;margin:10px 0}.w3-wide[_ngcontent-%COMP%]{letter-spacing:4px}h4[_ngcontent-%COMP%]{text-align: center}#btn2[_ngcontent-%COMP%]{\r\n  background-color: rgba(185, 98, 128, 0.67);\r\n  color: antiquewhite;\r\n  border: 2px solid antiquewhite;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n\r\n}#btn2[_ngcontent-%COMP%]:hover {\r\n  background-color:antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n}#btn1[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n  border: 2px solid #b96280;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  font-size: 24px;\r\n\r\n}#btn1[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(155, 0, 50, 0.43); \r\n  color: antiquewhite;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXR1dG9yaWFsL2dhbWUtdHV0b3JpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLGNBQWMsQ0FBQyxVQUFVLGlCQUFpQixDQUM3QyxZQUFZLHVDQUF1QyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxrQkFBa0IsQ0FDN0c7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQixDQUNBLEdBQUcsb0JBQW9CLENBQUMsQ0FFeEI7RUFDRSxjQUFjO0FBQ2hCLENBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLHlCQUF5Qjs7RUFFekIsbUJBQW1CO0FBQ3JCLENBR0E7RUFDRSxZQUFZO0FBQ2QsQ0FFQSxVQUFVLENBQ1Y7O0VBRUUsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQixDQUVBLFdBQVcsQ0FDWDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIsQ0FFQSxvQkFBb0IsQ0FDcEI7RUFDRSxrQ0FBa0M7QUFDcEMsQ0FFQSxHQUFHLGNBQWMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxVQUFVLGlCQUFpQixDQUMvRCxNQUFNLGlCQUFpQixFQUFFLHVDQUF1QyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxrQkFBa0IsQ0FDMUgsR0FBRyxrQkFBa0IsQ0FFckI7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQixDQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QixDQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlOztBQUVqQixDQUVBO0VBQ0Usd0NBQXdDLEVBQUUsVUFBVTtFQUNwRCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtdHV0b3JpYWwvZ2FtZS10dXRvcmlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7Zm9udC1zaXplOjE4cHh9LnczLXNlcmlme2ZvbnQtZmFtaWx5OnNlcmlmfVxyXG5oMSxoMixwLCBoM3tmb250LWZhbWlseTpcIlNlZ29lIFVJXCIsQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo0MDA7bWFyZ2luOjEwcHggMH0udzMtd2lkZXtsZXR0ZXItc3BhY2luZzo0cHh9XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6MzZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjNzMzOTQ5O1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuaDJ7bGluZS1oZWlnaHQ6IGluaXRpYWw7fVxyXG5cclxuc3Ryb25ne1xyXG4gIGNvbG9yOiAjNzMzOTQ5O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDoyMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogODJ2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMTgzLCAxOTcsIDAuNDYpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzNjJiMzI7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMC44dnc7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMyNDI5MTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNlZWRjZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNDEsIDAsIDQ5LCAwLjYyKTtcclxufVxyXG5cclxuaDR7Zm9udC1zaXplOjM2cHh9aDV7Zm9udC1zaXplOjMwcHh9LnczLXNlcmlme2ZvbnQtZmFtaWx5OnNlcmlmfVxyXG5oNCxoNXt0ZXh0LWFsaWduOmNlbnRlcjsgZm9udC1mYW1pbHk6XCJTZWdvZSBVSVwiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6MjAwO21hcmdpbjoxMHB4IDB9LnczLXdpZGV7bGV0dGVyLXNwYWNpbmc6NHB4fVxyXG5oNHt0ZXh0LWFsaWduOiBjZW50ZXJ9XHJcblxyXG4jYnRuMntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgOTgsIDEyOCwgMC42Nyk7XHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBhbnRpcXVld2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuXHJcbn1cclxuXHJcbiNidG4yOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmFudGlxdWV3aGl0ZTtcclxuICBjb2xvcjogcmdiKDIwOSwgMCwgNzEpO1xyXG59XHJcblxyXG4jYnRuMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgY29sb3I6IHJnYigyMDksIDAsIDcxKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYjk2MjgwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxufVxyXG5cclxuI2J0bjE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAwLCA1MCwgMC40Myk7IC8qIEdyZWVuICovXHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameTutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-tutorial',
          templateUrl: './game-tutorial.component.html',
          styleUrls: ['./game-tutorial.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game/game.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/game/game.component.ts ***!
    \***************************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppComponentsGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_modal */
    "./src/app/_modal/index.ts");
    /* harmony import */


    var src_app_services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/hex-service.service */
    "./src/app/services/hex-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_modal/modal.component */
    "./src/app/_modal/modal.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["canvas"];

    function GameComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5);
      }
    }

    function GameComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please enter correct rate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameComponent_option_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6);
      }
    }

    function GameComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please enter correct rate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent(modalService, hexService, router, fb) {
        _classCallCheck(this, GameComponent);

        this.modalService = modalService;
        this.hexService = hexService;
        this.router = router;
        this.fb = fb;
        this.r = 20;
        this.w = this.r * 2 * (Math.sqrt(3) / 2);
        this.sel = [-1, -1];
        this.board = new Array(14);
        this.hist = [];
        this.player = 0;
        this.multiplayer = false;
        this.active = true;
        this.IsOver = true;
        this.Size = 14;
        this.IsRunning = false;
        this.LastEvent = '';
        this.MaxFld = this.Size * this.Size;
        this.ActiveColor = 0;
        this.IsPlayer = new Array(2); // set AI to 0 means it's false and it's not AI

        this.IsAI = 0;
        this.Level = new Array(2);
        this.ImgNum = new Array(this.Size);
        this.Fld = new Array(this.Size);
        this.Pot = new Array(this.Size);
        this.Bridge = new Array(this.Size);
        this.Upd = new Array(this.Size);
        this.History = new Array(this.MaxFld + 1);
        this.vv = new Array(6);
        this.tt = new Array(6); // define who start the game - true for real player and false for computer player

        this.IsStart0 = true;
        this.q1 = '0';
        this.q2 = '0';
        this.counterMoveBack = 0;
        this.q1Form = this.fb.group({
          q1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.q2Form = this.fb.group({
          q2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.tutorialAns = '';
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = '';
          });

          if (sessionStorage.getItem('isPlay') === null) {
            this.router.navigate(['/', 'pageNotFound']);
          } else {
            sessionStorage.removeItem('isPlay');
          }

          this.tutorialAns = sessionStorage.getItem('tutorialAns');
          sessionStorage.removeItem('tutorialAns');
          var userID = sessionStorage.getItem('userID');
          this.isItUserFromDB(userID);
        }
      }, {
        key: "isItUserFromDB",
        value: function isItUserFromDB(userID) {
          var _this5 = this;

          this.hexService.get(userID).subscribe(function (data) {
            console.log(data);
            console.log(true);
            _this5.ctx = _this5.canvas.nativeElement.getContext('2d');

            _this5.SetLevel(1, 2);

            _this5.initCanvas();

            _this5.initParam();

            _this5.Init();

            _this5.options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            window.setInterval(function () {
              return _this5.Timer();
            }, 200);
          }, function (error) {
            console.log(error);

            _this5.router.navigate(['/', 'pageNotFound']);
          });
        }
      }, {
        key: "handleMousemove",
        value: function handleMousemove(event) {
          this.getSel(event);

          if (this.active) {
            this.draw();
          }
        }
      }, {
        key: "handleMousedown",
        value: function handleMousedown(event) {
          // let txt;
          this.getSel(event);
          this.Clicked(this.sel[0], this.sel[1]);
        }
      }, {
        key: "saveAns",
        value: function saveAns(id) {
          if (id === 'custom-modal-1') {
            if (this.q1Form.get('q1').value === '') {
              this.IsNotq1 = true;
              return;
            } else {
              this.IsNotq1 = false;
              this.q1 = this.q1Form.get('q1').value;
              console.log(this.q1);
            }
          }

          if (id === 'custom-modal-2') {
            if (this.q2Form.get('q2').value === '') {
              this.IsNotq2 = true;
              return;
            } else {
              this.IsNotq2 = false;
              this.q2 = this.q2Form.get('q2').value;
              console.log(this.q2);
            }

            console.log(this.q2);
          }

          this.modalService.close(id);
        }
      }, {
        key: "addToCount",
        value: function addToCount() {
          this.counterMoveBack = this.counterMoveBack + 1;
        }
      }, {
        key: "initParam",
        value: function initParam() {
          for (this.i = 0; this.i < this.Size; this.i++) {
            this.ImgNum[this.i] = new Array(this.Size);
          }

          for (this.i = 0; this.i < this.Size; this.i++) {
            this.Fld[this.i] = new Array(this.Size);
          }

          for (this.i = 0; this.i < this.Size; this.i++) {
            this.Pot[this.i] = new Array(this.Size);
          }

          for (this.i = 0; this.i < this.Size; this.i++) {
            for (this.j = 0; this.j < this.Size; this.j++) {
              this.Pot[this.i][this.j] = new Array(4);
            }
          }

          for (this.i = 0; this.i < this.Size; this.i++) {
            this.Bridge[this.i] = new Array(this.Size);
          }

          for (this.i = 0; this.i < this.Size; this.i++) {
            for (this.j = 0; this.j < this.Size; this.j++) {
              this.Bridge[this.i][this.j] = new Array(4);
            }
          }

          for (this.i = 0; this.i < this.Size; this.i++) {
            this.Upd[this.i] = new Array(this.Size);
          }

          for (this.i = 0; this.i < this.MaxFld + 1; this.i++) {
            History[this.i] = new Array(2);
          } // define which player is playing for now, 0- real player, 1- computer player


          this.IsPlayer[0] = true;
          this.IsPlayer[1] = false; // define which level each player when both of the players are computers

          this.Level[0] = 2;
          this.Level[1] = 3;
        } // initialize the board to be empty

      }, {
        key: "initCanvas",
        value: function initCanvas() {
          // this.canvas = document.getElementById('output');
          // ctx = canvas.getContext('2d');
          for (var i = 0; i < 14; i++) {
            this.board[i] = new Array(14);

            for (var j = 0; j < 14; j++) {
              this.board[i][j] = -1;
            }
          }

          this.ctx.clearRect(0, 0, 850, 500);
          this.ctx.lineWidth = 1;
          this.ctx.fillStyle = 'rgb(255,0,39)';
          this.ctx.beginPath();
          this.ctx.moveTo(this.w * 15.65, this.r);
          this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
          this.ctx.lineTo(0, this.r);
          this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
          this.ctx.closePath();
          this.ctx.fill();
          this.ctx.fillStyle = 'rgb(0,154,172)';
          this.ctx.beginPath();
          this.ctx.moveTo(0, this.r);
          this.ctx.lineTo(this.w * 15.65, this.r);
          this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
          this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
          this.ctx.closePath();
          this.ctx.fill();
          var num = 0;
          this.ctx.strokeStyle = 'white';

          for (var y = 0; y < 14; y++) {
            for (var x = 0; x < 14; x++) {
              if (this.board[x][y] === 0) {
                this.ctx.fillStyle = 'rgb(255,0,39)';
              } else if (this.board[x][y] === 1) {
                this.ctx.fillStyle = 'rgb(0,154,172)';
              } else if (x === this.sel[0] && y === this.sel[1]) {
                this.ctx.fillStyle = 'rgb(' + (x + (this.player === 0 ? 241 : 0)) + ',' + (y + (this.player === 0 ? 0 : 140)) + ',' + (this.player === 0 ? 38 : 171) + ')';
              } else {
                this.ctx.fillStyle = 'rgb(' + (x + 241) + ',' + (y + 220) + ',178)';
              }

              this.drawHexagon(this.ctx, (x + y) * this.w - (y - 4) * (this.w / 2), (y + 2) * 1.5 * this.r, this.r);
              num++;
            }
          } // canvas.onmousedown = this.mouseDown;

        }
      }, {
        key: "drawHexagon",
        value: function drawHexagon(c, x, y, r) {
          c.beginPath();
          c.moveTo(x, y - r);

          for (var i = 0; i < 6; i++) {
            c.lineTo(x + r * Math.cos(Math.PI * (1.5 + 1 / 3 * i)), y + r * Math.sin(Math.PI * (1.5 + 1 / 3 * i)));
          }

          c.closePath();
          c.fill();
          c.stroke();
        }
      }, {
        key: "getSel",
        value: function getSel(e) {
          // get the color where the mouse clicked
          var rect = this.canvas.nativeElement.getBoundingClientRect();
          var scaleX = this.canvas.nativeElement.width / rect.width;
          var color = this.ctx.getImageData((e.clientX - rect.left) * scaleX, e.clientY, 1, 1).data;
          color[0] -= color[2] === 38 || color[2] === 178 ? 241 : 0;
          color[1] -= color[2] === 178 ? 220 : color[2] === 38 ? 0 : 140;

          if (color[0] >= 0 && color[0] <= 13 && color[1] >= 0 && color[1] <= 13 && (color[2] === 38 || color[2] === 171 || color[2] === 178)) {
            this.sel = [color[0], color[1]];
          } else {
            this.sel = [-1, -1];
          }
        }
      }, {
        key: "draw",
        value: function draw() {
          this.ctx.clearRect(0, 0, 850, 600);
          this.ctx.lineWidth = 1;
          this.ctx.fillStyle = 'rgb(255,0,39)';
          this.ctx.beginPath();
          this.ctx.moveTo(this.w * 15.65, this.r);
          this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
          this.ctx.lineTo(0, this.r);
          this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
          this.ctx.closePath();
          this.ctx.fill();
          this.ctx.fillStyle = 'rgb(0,154,172)';
          this.ctx.beginPath();
          this.ctx.moveTo(0, this.r);
          this.ctx.lineTo(this.w * 15.65, this.r);
          this.ctx.lineTo(this.w * 7.85, 24.5 * this.r);
          this.ctx.lineTo(this.w * 23.5, 24.5 * this.r);
          this.ctx.closePath();
          this.ctx.fill();
          var num = 0;
          this.ctx.strokeStyle = 'white';

          for (var y = 0; y < 14; y++) {
            for (var x = 0; x < 14; x++) {
              if (this.Fld[x][y] === -1) {
                this.ctx.fillStyle = 'rgb(255,0,39)';
              } else if (this.Fld[x][y] === 1) {
                this.ctx.fillStyle = 'rgb(0,154,172)';
              } else if (x === this.sel[0] && y === this.sel[1]) {
                this.ctx.fillStyle = 'rgb(' + (x + (this.player === 0 ? 241 : 0)) + ',' + (y + (this.player === 0 ? 0 : 140)) + ',' + (this.player === 0 ? 38 : 171) + ')';
              } else {
                this.ctx.fillStyle = 'rgb(' + (x + 241) + ',' + (y + 220) + ',178)';
              }

              this.drawHexagon(this.ctx, (x + y) * this.w - (y - 4) * (this.w / 2), (y + 2) * 1.5 * this.r, this.r);
              num++;
            }
          }
        }
      }, {
        key: "Init",
        value: function Init() {
          if (this.IsRunning) {
            this.LastEvent = 'Init()';
            return;
          } // fill Fld with zeroes - empty board


          for (var ii = 0; ii < this.Size; ii++) {
            for (var jj = 0; jj < this.Size; jj++) {
              this.Fld[ii][jj] = 0;
            }
          } // checking which player is starting


          if (this.IsStart0) {
            this.Start0 = true;
          } else {
            this.Start0 = false;
          }

          this.MoveCount = 0;
          this.MaxMoveCount = 0;
          this.WritePot(true);
          this.IsOver = false;
        }
      }, {
        key: "WritePot",
        value: function WritePot(bb) {
          // if it's not computer
          if (!this.IsAI) {
            return;
          }

          if (bb) {
            this.GetPot(2);
          }

          for (var ii = 0; ii < this.Size; ii++) {
            for (var jj = 0; jj < this.Size; jj++) {
              window.document.getElementById('Pot0' + ii + jj).title = String(Math.round(this.Pot[ii][jj][0]));
              window.document.getElementById('Pot1' + ii + jj).title = String(Math.round(this.Pot[ii][jj][1]));
              window.document.getElementById('Pot2' + ii + jj).title = String(Math.round(this.Pot[ii][jj][2]));
              window.document.getElementById('Pot3' + ii + jj).title = String(Math.round(this.Pot[ii][jj][3]));
              window.document.getElementById('Pot0' + ii + jj).style.backgroundColor = this.BluePotCol(this.Pot[ii][jj][0]);
              window.document.getElementById('Pot1' + ii + jj).style.backgroundColor = this.BluePotCol(this.Pot[ii][jj][1]);
              window.document.getElementById('Pot2' + ii + jj).style.backgroundColor = this.RedPotCol(this.Pot[ii][jj][2]);
              window.document.getElementById('Pot3' + ii + jj).style.backgroundColor = this.RedPotCol(this.Pot[ii][jj][3]);
            }
          }
        }
      }, {
        key: "GetPot",
        value: function GetPot(llevel) {
          var nn;
          var bb;
          var dd = 128;
          this.ActiveColor = (this.MoveCount + 1 + this.Start0) % 2 * 2 - 1;

          for (var ii = 0; ii < this.Size; ii++) {
            for (var jj = 0; jj < this.Size; jj++) {
              for (var kk = 0; kk < 4; kk++) {
                this.Pot[ii][jj][kk] = 20000;
                this.Bridge[ii][jj][kk] = 0;
              }
            }
          }

          for (var _ii = 0; _ii < this.Size; _ii++) {
            if (this.Fld[_ii][0] === 0) {
              this.Pot[_ii][0][0] = dd;
            } // blue border
            else {
                if (this.Fld[_ii][0] > 0) {
                  this.Pot[_ii][0][0] = 0;
                }
              }

            if (this.Fld[_ii][this.Size - 1] === 0) {
              this.Pot[_ii][this.Size - 1][1] = dd;
            } // blue border
            else {
                if (this.Fld[_ii][this.Size - 1] > 0) {
                  this.Pot[_ii][this.Size - 1][1] = 0;
                }
              }
          }

          for (var _jj = 0; _jj < this.Size; _jj++) {
            if (this.Fld[0][_jj] === 0) {
              this.Pot[0][_jj][2] = dd;
            } // red border
            else {
                if (this.Fld[0][_jj] < 0) {
                  this.Pot[0][_jj][2] = 0;
                }
              }

            if (this.Fld[this.Size - 1][_jj] === 0) {
              this.Pot[this.Size - 1][_jj][3] = dd;
            } // red border
            else {
                if (this.Fld[this.Size - 1][_jj] < 0) {
                  this.Pot[this.Size - 1][_jj][3] = 0;
                }
              }
          }

          for (var _kk = 0; _kk < 2; _kk++) // blue potential
          {
            for (var _ii2 = 0; _ii2 < this.Size; _ii2++) {
              for (var _jj2 = 0; _jj2 < this.Size; _jj2++) {
                this.Upd[_ii2][_jj2] = true;
              }
            }

            nn = 0;

            do {
              nn++;
              bb = 0;

              for (var _ii3 = 0; _ii3 < this.Size; _ii3++) {
                for (var _jj3 = 0; _jj3 < this.Size; _jj3++) {
                  if (this.Upd[_ii3][_jj3]) {
                    bb += this.SetPot(_ii3, _jj3, _kk, 1, llevel);
                  }
                }
              }

              for (var _ii4 = this.Size - 1; _ii4 >= 0; _ii4--) {
                for (var _jj4 = this.Size - 1; _jj4 >= 0; _jj4--) {
                  if (this.Upd[_ii4][_jj4]) {
                    bb += this.SetPot(_ii4, _jj4, _kk, 1, llevel);
                  }
                }
              }
            } while (bb > 0 && nn < 12);
          }

          for (var _kk2 = 2; _kk2 < 4; _kk2++) // red potential
          {
            for (var _ii5 = 0; _ii5 < this.Size; _ii5++) {
              for (var _jj5 = 0; _jj5 < this.Size; _jj5++) {
                this.Upd[_ii5][_jj5] = true;
              }
            }

            nn = 0;

            do {
              nn++;
              bb = 0;

              for (var _ii6 = 0; _ii6 < this.Size; _ii6++) {
                for (var _jj6 = 0; _jj6 < this.Size; _jj6++) {
                  if (this.Upd[_ii6][_jj6]) {
                    bb += this.SetPot(_ii6, _jj6, _kk2, -1, llevel);
                  }
                }
              }

              for (var _ii7 = this.Size - 1; _ii7 >= 0; _ii7--) {
                for (var _jj7 = this.Size - 1; _jj7 >= 0; _jj7--) {
                  if (this.Upd[_ii7][_jj7]) {
                    bb += this.SetPot(_ii7, _jj7, _kk2, -1, llevel);
                  }
                }
              }
            } while (bb > 0 && nn < 12);
          }
        }
      }, {
        key: "RedPotCol",
        value: function RedPotCol(aa) {
          var xx = 0;
          var hh = '0123456789abcdef';

          if (aa > 0) {
            xx = aa;
          }

          var nn = Math.floor(255 / (1 + xx / 255));
          return '#' + hh.charAt(Math.floor(nn / 16)) + hh.charAt(nn % 16) + '0000';
        }
      }, {
        key: "BluePotCol",
        value: function BluePotCol(aa) {
          var xx = 0;
          var hh = '0123456789abcdef';

          if (aa > 0) {
            xx = aa;
          }

          var nn = Math.floor(255 / (1 + xx / 255));
          return '#0000' + hh.charAt(Math.floor(nn / 16)) + hh.charAt(nn % 16);
        }
      }, {
        key: "SetPot",
        value: function SetPot(ii, jj, kk, cc, llevel) {
          this.Upd[ii][jj] = false;
          this.Bridge[ii][jj][kk] = 0;

          if (this.Fld[ii][jj] === -cc) {
            return 0;
          }

          var ll;
          var mm;
          var ddb = 0;
          var nn;
          var oo = 0;
          var dd = 140;
          var bb = 66;

          if (cc !== this.ActiveColor) {
            bb = 52;
          }

          this.vv[0] = this.PotVal(ii + 1, jj, kk, cc);
          this.vv[1] = this.PotVal(ii, jj + 1, kk, cc);
          this.vv[2] = this.PotVal(ii - 1, jj + 1, kk, cc);
          this.vv[3] = this.PotVal(ii - 1, jj, kk, cc);
          this.vv[4] = this.PotVal(ii, jj - 1, kk, cc);
          this.vv[5] = this.PotVal(ii + 1, jj - 1, kk, cc);

          for (ll = 0; ll < 6; ll++) {
            if (this.vv[ll] >= 30000 && this.vv[(ll + 2) % 6] >= 30000) {
              if (this.vv[(ll + 1) % 6] < 0) {
                ddb = +32;
              } else {
                this.vv[(ll + 1) % 6] += 128;
              } // 512;

            }
          }

          for (ll = 0; ll < 6; ll++) {
            if (this.vv[ll] >= 30000 && this.vv[(ll + 3) % 6] >= 30000) {
              ddb += 30;
            }
          }

          mm = 30000;

          for (ll = 0; ll < 6; ll++) {
            if (this.vv[ll] < 0) {
              this.vv[ll] += 30000;
              this.tt[ll] = 10;
            } else {
              this.tt[ll] = 1;
            }

            if (mm > this.vv[ll]) {
              mm = this.vv[ll];
            }
          }

          nn = 0;

          for (ll = 0; ll < 6; ll++) {
            if (this.vv[ll] === mm) {
              nn += this.tt[ll];
            }
          }

          if (llevel > 1) {
            this.Bridge[ii][jj][kk] = nn / 5;

            if (nn >= 2 && nn < 10) {
              this.Bridge[ii][jj][kk] = bb + nn - 2;
              mm -= 32;
            }

            if (nn < 2) {
              oo = 30000;

              for (ll = 0; ll < 6; ll++) {
                if (this.vv[ll] > mm && oo > this.vv[ll]) {
                  oo = this.vv[ll];
                }
              }

              if (oo <= mm + 104) {
                this.Bridge[ii][jj][kk] = bb - (oo - mm) / 4;
                mm -= 64;
              }

              mm += oo;
              mm /= 2;
            }
          }

          if (ii > 0 && ii < this.Size - 1 && jj > 0 && jj < this.Size - 1) {
            this.Bridge[ii][jj][kk] += ddb;
          } else {
            this.Bridge[ii][jj][kk] -= 2;
          }

          if ((ii === 0 || ii === this.Size - 1) && (jj === 0 || jj === this.Size - 1)) {
            this.Bridge[ii][jj][kk] /= 2;
          } // /=4


          if (this.Bridge[ii][jj][kk] > 68) {
            this.Bridge[ii][jj][kk] = 68;
          } // 66


          if (this.Fld[ii][jj] === cc) {
            if (mm < this.Pot[ii][jj][kk]) {
              this.Pot[ii][jj][kk] = mm;
              this.SetUpd(ii + 1, jj, cc);
              this.SetUpd(ii, jj + 1, cc);
              this.SetUpd(ii - 1, jj + 1, cc);
              this.SetUpd(ii - 1, jj, cc);
              this.SetUpd(ii, jj - 1, cc);
              this.SetUpd(ii + 1, jj - 1, cc);
              return 1;
            }

            return 0;
          }

          if (mm + dd < this.Pot[ii][jj][kk]) {
            this.Pot[ii][jj][kk] = mm + dd;
            this.SetUpd(ii + 1, jj, cc);
            this.SetUpd(ii, jj + 1, cc);
            this.SetUpd(ii - 1, jj + 1, cc);
            this.SetUpd(ii - 1, jj, cc);
            this.SetUpd(ii, jj - 1, cc);
            this.SetUpd(ii + 1, jj - 1, cc);
            return 1;
          }

          return 0;
        }
      }, {
        key: "PotVal",
        value: function PotVal(ii, jj, kk, cc) {
          if (ii < 0) {
            return 30000;
          }

          if (jj < 0) {
            return 30000;
          }

          if (ii >= this.Size) {
            return 30000;
          }

          if (jj >= this.Size) {
            return 30000;
          }

          if (this.Fld[ii][jj] === 0) {
            return this.Pot[ii][jj][kk];
          }

          if (this.Fld[ii][jj] === -cc) {
            return 30000;
          }

          return this.Pot[ii][jj][kk] - 30000;
        }
      }, {
        key: "SetUpd",
        value: function SetUpd(ii, jj, cc) {
          if (ii < 0) {
            return;
          }

          if (jj < 0) {
            return;
          }

          if (ii >= this.Size) {
            return;
          }

          if (jj >= this.Size) {
            return;
          }

          this.Upd[ii][jj] = true;
        }
      }, {
        key: "SetLevel",
        value: function SetLevel(nn, mm) {
          if (this.IsRunning) {
            this.LastEvent = 'SetLevel(' + nn + ',' + mm + ')';
            return;
          }

          this.Level[nn] = mm;
        }
      }, {
        key: "SetOption",
        value: function SetOption(nn, mm) {
          if (this.IsRunning) {
            this.LastEvent = 'SetOption(' + nn + ',' + mm + ')';
            return;
          }

          if (nn < 2) {
            if (mm === 0) {
              this.IsPlayer[nn] = true;
            } else {
              this.IsPlayer[nn] = false;
            }
          } else {
            this.IsStart0 = mm;
          }
        }
      }, {
        key: "ShowAI",
        value: function ShowAI(bb) {
          var ww;
          this.IsAI = bb;

          if (this.IsAI) {
            this.WritePot(true);
            document.getElementById('AI').style.display = 'inline';
            ww = parseInt(String(window.top.innerWidth));

            if (ww < 840) {
              window.top.resizeBy(840 - ww, 0);
            }
          } else {
            document.getElementById('AI').style.display = 'none';
          }
        }
      }, {
        key: "Back",
        value: function Back() {
          if (this.IsRunning) {
            this.LastEvent = 'Back()';
            return;
          }

          if (this.MoveCount > 0) {
            this.IsOver = false;
            this.MoveCount--;
            var ii = History[this.MoveCount][0];
            var jj = History[this.MoveCount][1];

            if (this.MoveCount === 1 && this.IsSwap) {
              this.Fld[jj][ii] = 0; // RefreshPic(jj, ii);

              this.draw();
              this.Fld[ii][jj] = (this.MoveCount + this.Start0) % 2 * 2 - 1; // RefreshPic(ii, jj);

              this.draw();
            } else {
              this.Fld[ii][jj] = 0; // RefreshPic(ii, jj);

              this.draw();
            }
            /*if (MoveCount<10)
                window.document.OptionsForm.Moves.value=" "+eval(MoveCount)+" ";
            else
                window.document.OptionsForm.Moves.value=MoveCount;
            if ((MoveCount+Start0)%2===0) window.document.OptionsForm.Msg.value=" Blue to move.";
            else window.document.OptionsForm.Msg.value=" Red to move.";*/


            this.WritePot(true);
          }
        }
      }, {
        key: "Replay",
        value: function Replay() {
          if (this.IsRunning) {
            this.LastEvent = 'Replay()';
            return;
          }

          if (this.MoveCount < this.MaxMoveCount) {
            var ii = History[this.MoveCount][0];
            var jj = History[this.MoveCount][1];

            if (this.MoveCount < this.MaxMoveCount - 1) {
              this.MakeMove(ii, jj, false);
              this.WritePot(true);
            } else {
              this.MakeMove(ii, jj, true);
            }
          }
        }
      }, {
        key: "GetMoveList",
        value: function GetMoveList() {
          var ii;
          var jj;
          var nn;
          var ss = '';

          for (nn = 0; nn < this.MaxMoveCount; nn++) {
            ii = History[nn][0];
            jj = History[nn][1];

            if (nn > 0) {
              ss += ' ';
            }

            ss += String.fromCharCode(65 + jj) + eval(ii + 1);
          } // window.document.OptionsForm.MoveList.value = ss;

        }
      }, {
        key: "checkWin",
        value: function checkWin(c) {
          var open = [];
          var openPrev = [];
          var closed = [];
          var closedPrev = [];

          for (var a = 0; a < 14; a++) {
            if (this.Fld[c === 1 ? a : 0][c === 1 ? 0 : a] === c) {
              open.length = openPrev.length = closed.length = closedPrev.length = 0;
              var pathFound = false;
              open.push([c === 1 ? a : 0, c === 1 ? 0 : a]);
              openPrev.push(-1);

              while (open.length > 0) {
                var u = open[0];
                open.splice(0, 1);
                var uI = openPrev.splice(0, 1);
                closed.push(u);
                closedPrev.push(uI);

                if (u[c === 1 ? 1 : 0] === 13) {
                  pathFound = true;
                  break;
                }

                var connections = this.getConnections(u[0], u[1], c, open, closed);

                for (var i = 0; i < connections.length; i++) {
                  open.push(connections[i]);
                  openPrev.push(closed.length - 1);
                }
              }

              if (pathFound) {
                var path = [];

                var _u = closed.length - 1;

                while (closedPrev[_u] != -1) {
                  path.push(closed[_u]);
                  _u = closedPrev[_u];
                  console.log(closedPrev[_u]);
                }

                path.push([c === 1 ? a : 0, c === 1 ? 0 : a]);
                path.reverse();
                this.active = false;
                return path;
              }
            }
          }

          return false;
        }
      }, {
        key: "MakeMove",
        value: function MakeMove(ii, jj, oo) {
          var ccol; // const kk;

          var iis = ii;
          var jjs = jj;
          ccol = (this.MoveCount + 1 + this.Start0) % 2 * 2 - 1;
          this.Fld[iis][jjs] = ccol;
          this.draw();

          if (History[this.MoveCount][0] !== ii) {
            History[this.MoveCount][0] = ii;
            this.MaxMoveCount = this.MoveCount + 1;
          }

          if (History[this.MoveCount][1] !== jj) {
            History[this.MoveCount][1] = jj;
            this.MaxMoveCount = this.MoveCount + 1;
          }

          this.MoveCount++;

          if (this.MaxMoveCount < this.MoveCount) {
            this.MaxMoveCount = this.MoveCount;
          }

          if (!oo) {
            return;
          }

          this.GetPot(0);
          this.GetPot(2); // ShowPot();

          this.WritePot(true);

          if (ccol < 0) {
            if (this.Pot[ii][jj][2] > 0 || this.Pot[ii][jj][3] > 0) {
              return;
            } // window.document.OptionsForm.Msg.value=" Red has won !";


            var p1 = this.checkWin(-1);
            this.drawPath(this.ctx, p1); // alert("You won!");

            this.Blink(0);
          } else {
            if (this.Pot[ii][jj][0] > 0 || this.Pot[ii][jj][1] > 0) {
              return;
            } // window.document.OptionsForm.Msg.value=" Blue has won !";


            var p0 = this.checkWin(1);
            this.drawPath(this.ctx, p0);
            alert('The blue player won!');
            this.Blink(0);
          }

          this.IsOver = true;
          var data = {
            id: sessionStorage.getItem('userID'),
            tutorialAns: this.tutorialAns,
            q1: this.q1,
            q2: this.q2,
            countBack: this.counterMoveBack,
            whoWin: "red player"
          };
          this.hexService.saveOpQ(data).subscribe(function (response) {
            console.log('here is the response');
            var opAnsDb = response;
            console.log(opAnsDb);
          }, function (error) {
            console.log(error);
          }); //this.router.navigate(['/', 'expiriment']);

          this.moveToEx();
        }
      }, {
        key: "random",
        value: function random(nn) {
          return Math.floor(Math.random() * 1000) % nn;
        }
      }, {
        key: "drawPath",
        value: function drawPath(c, p) {
          c.lineWidth = 10;
          c.beginPath();
          c.moveTo((p[0][0] + p[0][1]) * this.w - (p[0][1] - 4) * (this.w / 2), (p[0][1] + 2) * 1.5 * this.r);

          for (var i = 1; i < p.length; i++) {
            c.lineTo((p[i][0] + p[i][1]) * this.w - (p[i][1] - 4) * (this.w / 2), (p[i][1] + 2) * 1.5 * this.r);
          }

          c.stroke();
        }
      }, {
        key: "sign",
        value: function sign(xx) {
          if (xx < 0) {
            return -1;
          }

          if (xx > 0) {
            return 1;
          }

          return 0;
        }
      }, {
        key: "findArr",
        value: function findArr(a, b) {
          for (var i = 0; i < a.length; i++) {
            if (JSON.stringify(a[i]) === JSON.stringify(b)) {
              return i;
            }
          }

          return -1;
        }
      }, {
        key: "getConnections",
        value: function getConnections(x, y, c, open, closed) {
          var a = [-1, 0, 1, 0, 0, -1, 0, 1, 1, -1, -1, 1];
          var ret = [];

          for (var i = 0; i < 6; i++) {
            if (x + a[i * 2] >= 0 && x + a[i * 2] < 14 && y + a[i * 2 + 1] >= 0 && y + a[i * 2 + 1] < 14) {
              if (this.Fld[x + a[i * 2]][y + a[i * 2 + 1]] === c && this.findArr(open, [x + a[i * 2], y + a[i * 2 + 1]]) === -1 && this.findArr(closed, [x + a[i * 2], y + a[i * 2 + 1]]) === -1) {
                ret.push([x + a[i * 2], y + a[i * 2 + 1]]);
              }
            }
          }

          return ret;
        }
      }, {
        key: "GetBestMove",
        value: function GetBestMove(theCol, theLevel) {
          var ff = 0;
          var kk;
          var ii_b;
          var jj_b;
          var ii_q = 0;
          var jj_q = 0;
          var cc;
          var pp0;
          var pp1;
          var mmp;
          var vv = new Array();

          if (this.MoveCount > 0) {
            ff = 190 / (this.MoveCount * this.MoveCount);
          }

          var mm = 20000;

          for (var ii = 0; ii < this.Size; ii++) {
            for (var jj = 0; jj < this.Size; jj++) {
              if (this.Fld[ii][jj] !== 0) {
                ii_q += 2 * ii + 1 - this.Size;
                jj_q += 2 * jj + 1 - this.Size;
              }
            }
          }

          ii_q = this.sign(ii_q);
          jj_q = this.sign(jj_q);

          for (var _ii8 = 0; _ii8 < this.Size; _ii8++) {
            for (var _jj8 = 0; _jj8 < this.Size; _jj8++) {
              if (this.Fld[_ii8][_jj8] === 0) {
                mmp = Math.random() * (49 - theLevel * 16);
                mmp += (Math.abs(_ii8 - 5) + Math.abs(_jj8 - 5)) * ff;
                mmp += 8 * (ii_q * (_ii8 - 5) + jj_q * (_jj8 - 5)) / (this.MoveCount + 1);

                if (theLevel > 2) {
                  for (kk = 0; kk < 4; kk++) {
                    mmp -= this.Bridge[_ii8][_jj8][kk];
                  }
                }

                pp0 = this.Pot[_ii8][_jj8][0] + this.Pot[_ii8][_jj8][1];
                pp1 = this.Pot[_ii8][_jj8][2] + this.Pot[_ii8][_jj8][3];
                mmp += pp0 + pp1;

                if (pp0 <= 268 || pp1 <= 268) {
                  mmp -= 400;
                } // 140+128


                vv[_ii8 * this.Size + _jj8] = mmp;

                if (mmp < mm) {
                  mm = mmp;
                  ii_b = _ii8;
                  jj_b = _jj8;
                }
              }
            }
          }

          if (theLevel > 2) {
            mm += 108;

            for (var _ii9 = 0; _ii9 < this.Size; _ii9++) {
              for (var _jj9 = 0; _jj9 < this.Size; _jj9++) {
                if (vv[_ii9 * this.Size + _jj9] < mm) {
                  if (theCol < 0) // red
                    {
                      if (_ii9 > 3 && _ii9 < this.Size - 1 && _jj9 > 0 && _jj9 < 3) {
                        if (this.Fld[_ii9 - 1][_jj9 + 2] === -theCol) {
                          cc = this.CanConnectFarBorder(_ii9 - 1, _jj9 + 2, -theCol);

                          if (cc < 2) {
                            ii_b = _ii9;

                            if (cc < -1) {
                              ii_b--;
                              cc++;
                            }

                            jj_b = _jj9 - cc;
                            mm = vv[_ii9 * this.Size + _jj9];
                          }
                        }
                      }

                      if (_ii9 > 0 && _ii9 < this.Size - 1 && _jj9 === 0) {
                        if (this.Fld[_ii9 - 1][_jj9 + 2] === -theCol && this.Fld[_ii9 - 1][_jj9] === 0 && this.Fld[_ii9 - 1][_jj9 + 1] === 0 && this.Fld[_ii9][_jj9 + 1] === 0 && this.Fld[_ii9 + 1][_jj9] === 0) {
                          ii_b = _ii9;
                          jj_b = _jj9;
                          mm = vv[_ii9 * this.Size + _jj9];
                        }
                      }

                      if (_ii9 > 0 && _ii9 < this.Size - 4 && _jj9 < this.Size - 1 && _jj9 > this.Size - 4) {
                        if (this.Fld[_ii9 + 1][_jj9 - 2] === -theCol) {
                          cc = this.CanConnectFarBorder(_ii9 + 1, _jj9 - 2, -theCol);

                          if (cc < 2) {
                            ii_b = _ii9;

                            if (cc < -1) {
                              ii_b++;
                              cc++;
                            }

                            jj_b = _jj9 + cc;
                            mm = vv[_ii9 * this.Size + _jj9];
                          }
                        }
                      }

                      if (_ii9 > 0 && _ii9 < this.Size - 1 && _jj9 === this.Size - 1) {
                        if (this.Fld[_ii9 + 1][_jj9 - 2] === -theCol && this.Fld[_ii9 + 1][_jj9] === 0 && this.Fld[_ii9 + 1][_jj9 - 1] === 0 && this.Fld[_ii9][_jj9 - 1] === 0 && this.Fld[_ii9 - 1][_jj9] === 0) {
                          ii_b = _ii9;
                          jj_b = _jj9;
                          mm = vv[_ii9 * this.Size + _jj9];
                        }
                      }
                    } else {
                    if (_jj9 > 3 && _jj9 < this.Size - 1 && _ii9 > 0 && _ii9 < 3) {
                      if (this.Fld[_ii9 + 2][_jj9 - 1] === -theCol) {
                        cc = this.CanConnectFarBorder(_ii9 + 2, _jj9 - 1, -theCol);

                        if (cc < 2) {
                          jj_b = _jj9;

                          if (cc < -1) {
                            jj_b--;
                            cc++;
                          }

                          ii_b = _ii9 - cc;
                          mm = vv[_ii9 * this.Size + _jj9];
                        }
                      }
                    }

                    if (_jj9 > 0 && _jj9 < this.Size - 1 && _ii9 === 0) {
                      if (this.Fld[_ii9 + 2][_jj9 - 1] === -theCol && this.Fld[_ii9][_jj9 - 1] === 0 && this.Fld[_ii9 + 1][_jj9 - 1] === 0 && this.Fld[_ii9 + 1][_jj9] === 0 && this.Fld[_ii9][_jj9 + 1] === 0) {
                        ii_b = _ii9;
                        jj_b = _jj9;
                        mm = vv[_ii9 * this.Size + _jj9];
                      }
                    }

                    if (_jj9 > 0 && _jj9 < this.Size - 4 && _ii9 < this.Size - 1 && _ii9 > this.Size - 4) {
                      if (this.Fld[_ii9 - 2][_jj9 + 1] === -theCol) {
                        cc = this.CanConnectFarBorder(_ii9 - 2, _jj9 + 1, -theCol);

                        if (cc < 2) {
                          jj_b = _jj9;

                          if (cc < -1) {
                            jj_b++;
                            cc++;
                          }

                          ii_b = _ii9 + cc;
                          mm = vv[_ii9 * this.Size + _jj9];
                        }
                      }
                    }

                    if (_jj9 > 0 && _jj9 < this.Size - 1 && _ii9 === this.Size - 1) {
                      if (this.Fld[_ii9 - 2][_jj9 + 1] === -theCol && this.Fld[_ii9][_jj9 + 1] === 0 && this.Fld[_ii9 - 1][_jj9 + 1] === 0 && this.Fld[_ii9 - 1][_jj9] === 0 && this.Fld[_ii9][_jj9 - 1] === 0) {
                        ii_b = _ii9;
                        jj_b = _jj9;
                        mm = vv[_ii9 * this.Size + _jj9];
                      }
                    }
                  }
                }
              }
            }
          }

          this.MakeMove(ii_b, jj_b, false);
          this.IsRunning = false;

          if (theCol < 0) {
            if (this.Pot[ii_b][jj_b][2] > 140 || this.Pot[ii_b][jj_b][3] > 140) {
              this.WritePot(false);
              return;
            } // window.document.OptionsForm.Msg.value=" Red has won !";


            var p1 = this.checkWin(-1);
            this.drawPath(this.ctx, p1); // alert("You won!");

            this.Blink(-2);
          } else {
            if (this.Pot[ii_b][jj_b][0] > 140 || this.Pot[ii_b][jj_b][1] > 140) {
              this.WritePot(false);
              return;
            } // window.document.OptionsForm.Msg.value=" Blue has won !";


            var p0 = this.checkWin(1);
            this.drawPath(this.ctx, p0); // alert("The blue player on!");

            this.Blink(-2);
          }

          console.log("red is the winner");
          this.IsOver = true;
          var data = {
            id: sessionStorage.getItem('userID'),
            tutorialAns: this.tutorialAns,
            q1: this.q1,
            q2: this.q2,
            countBack: this.counterMoveBack,
            whoWin: "blue player"
          };
          this.hexService.saveOpQ(data).subscribe(function (response) {
            console.log('here is the response');
            var opAnsDb = response;
            console.log(opAnsDb);
          }, function (error) {
            console.log(error);
          });
          this.moveToEx(); //this.router.navigate(['/', 'expiriment']);
        }
      }, {
        key: "moveToEx",
        value: function moveToEx() {
          var _this6 = this;

          setTimeout(function () {
            _this6.router.navigate(['/expiriment']);
          }, 900);
        }
      }, {
        key: "CanConnectFarBorder",
        value: function CanConnectFarBorder(nn, mm, cc) {
          var ii;
          var jj;

          if (cc > 0) // blue
            {
              if (2 * mm < this.Size - 1) {
                for (ii = 0; ii < this.Size; ii++) {
                  for (jj = 0; jj < mm; jj++) {
                    if (jj - ii < mm - nn && ii + jj <= nn + mm && this.Fld[ii][jj] !== 0) {
                      return 2;
                    }
                  }
                }

                if (this.Fld[nn - 1][mm] === -cc) {
                  return 0;
                }

                if (this.Fld[nn - 1][mm - 1] === -cc) {
                  if (this.GetFld(nn + 2, mm - 1) === -cc) {
                    return 0;
                  }

                  return -1;
                }

                if (this.GetFld(nn + 2, mm - 1) === -cc) {
                  return -2;
                }
              } else {
                for (ii = 0; ii < this.Size; ii++) {
                  for (jj = this.Size - 1; jj > mm; jj--) {
                    if (jj - ii > mm - nn && ii + jj >= nn + mm && this.Fld[ii][jj] !== 0) {
                      return 2;
                    }
                  }
                }

                if (this.Fld[nn + 1][mm] === -cc) {
                  return 0;
                }

                if (this.Fld[nn + 1][mm + 1] === -cc) {
                  if (this.GetFld(nn - 2, mm + 1) === -cc) {
                    return 0;
                  }

                  return -1;
                }

                if (this.GetFld(nn - 2, mm + 1) === -cc) {
                  return -2;
                }
              }
            } else {
            if (2 * nn < this.Size - 1) {
              for (jj = 0; jj < this.Size; jj++) {
                for (ii = 0; ii < nn; ii++) {
                  if (ii - jj < nn - mm && ii + jj <= nn + mm && this.Fld[ii][jj] !== 0) {
                    return 2;
                  }
                }
              }

              if (this.Fld[nn][mm - 1] === -cc) {
                return 0;
              }

              if (this.Fld[nn - 1][mm - 1] === -cc) {
                if (this.GetFld(nn - 1, mm + 2) === -cc) {
                  return 0;
                }

                return -1;
              }

              if (this.GetFld(nn - 1, mm + 2) === -cc) {
                return -2;
              }
            } else {
              for (jj = 0; jj < this.Size; jj++) {
                for (ii = this.Size - 1; ii > nn; ii--) {
                  if (ii - jj > nn - mm && ii + jj >= nn + mm && this.Fld[ii][jj] !== 0) {
                    return 2;
                  }
                }
              }

              if (this.Fld[nn][mm + 1] === -cc) {
                return 0;
              }

              if (this.Fld[nn + 1][mm + 1] === -cc) {
                if (this.GetFld(nn + 1, mm - 2) === -cc) {
                  return 0;
                }

                return -1;
              }

              if (this.GetFld(nn + 1, mm - 2) === -cc) {
                return -2;
              }
            }
          }

          return 1;
        }
      }, {
        key: "GetFld",
        value: function GetFld(ii, jj) {
          if (ii < 0) {
            return -1;
          }

          if (jj < 0) {
            return 1;
          }

          if (ii >= this.Size) {
            return -1;
          }

          if (jj >= this.Size) {
            return 1;
          }

          return this.Fld[ii][jj];
        }
      }, {
        key: "Blink",
        value: function Blink(nn) {
          this.IsRunning = true;

          if (nn === -2) {
            setTimeout('Blink(-1)', 10);
            return;
          }

          if (nn === -1) {
            this.GetPot(0);
            this.WritePot(false);
            setTimeout('Blink(0)', 10);
            return;
          }

          if (nn === 14) {
            this.IsRunning = false;
            return;
          }

          var ii;
          var jj;
          var cc = nn % 2 * ((this.MoveCount + this.Start0) % 2 * 2 - 1);

          for (ii = 0; ii < this.Size; ii++) {
            for (jj = 0; jj < this.Size; jj++) {
              if (this.Pot[ii][jj][0] + this.Pot[ii][jj][1] <= 0 || this.Pot[ii][jj][2] + this.Pot[ii][jj][3] <= 0) {
                this.Fld[ii][jj] = cc; // this.RefreshPic(ii, jj);
              }
            }
          }

          setTimeout('Blink(' + eval(nn + 1) + ')', 200);
        }
      }, {
        key: "Clicked",
        value: function Clicked(ii, jj) {
          if (this.IsOver) {
            return;
          }

          if (this.IsRunning) {
            this.LastEvent = 'Clicked(' + ii + ',' + jj + ')';
            return;
          }

          if (this.Fld[ii][jj] !== 0) {
            /*if ((MoveCount==1)&&(window.document.OptionsForm.Swap.checked))
                MakeMove(ii,jj,false);*/
            return;
          }

          if (!this.IsPlayer[(this.MoveCount + this.Start0 + 1) % 2]) {
            return;
          }

          if (this.MoveCount === 6) {
            this.modalService.open('custom-modal-1');
          }

          if (this.MoveCount === 28) {
            this.modalService.open('custom-modal-2');
          }

          this.MakeMove(ii, jj, true);
        }
      }, {
        key: "Resize",
        value: function Resize() {
          if (navigator.appName === 'Netscape') {
            history.go(0);
          }
        }
      }, {
        key: "Timer",
        value: function Timer() {
          var _this7 = this;

          // if (this.LastEvent !== '')
          // {
          //   eval(this.LastEvent);
          //   this.LastEvent = '';
          //   return;
          // }
          if (this.IsOver) {
            return;
          }

          if (this.IsRunning) {
            return;
          }

          if (this.IsPlayer[(this.MoveCount + this.Start0 + 1) % 2]) {
            this.WritePot(true);
            return;
          }

          this.IsRunning = true;
          var ll = this.Level[(this.MoveCount + this.Start0 + 1) % 2]; // if (SwapTest()) return;

          this.GetPot(ll);
          window.setTimeout(function () {
            return _this7.GetBestMove((_this7.MoveCount + 1 + _this7.Start0) % 2 * 2 - 1, ll);
          }, 10);
        }
      }, {
        key: "f",
        get: function get() {
          return this.q1Form.controls;
        }
      }, {
        key: "f2",
        get: function get() {
          return this.q2Form.controls;
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__["HexServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      viewQuery: function GameComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      hostBindings: function GameComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function GameComponent_mousemove_HostBindingHandler($event) {
            return ctx.handleMousemove($event);
          })("mousedown", function GameComponent_mousedown_HostBindingHandler($event) {
            return ctx.handleMousedown($event);
          });
        }
      },
      decls: 38,
      vars: 12,
      consts: [["id", "lalala"], ["width", "850", "height", "500", "id", "output", 2, "padding-right", "0", "padding-left", "0", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["canvas", ""], ["id", "back"], ["id", "button1", "type", "button", "value", "make a move back <", "title", "two moves back", 2, "width", "300px", "font-size", "15px", 3, "click"], ["id", "custom-modal-1"], [1, "form-group", "col-6"], [3, "formGroup", "ngSubmit"], ["formControlName", "q1", "id", "modalQ1", 1, "form-control", 3, "ngClass"], ["value", "", "disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "buttonModal"], ["id", "custom-modal-2"], ["formControlName", "q2", "id", "modalQ2", 1, "form-control", 3, "ngClass"], ["type", "submit"], [3, "ngValue"], [1, "invalid-feedback"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Canvas not supported...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_input_click_5_listener() {
            ctx.Back();
            ctx.Back();
            return ctx.addToCount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "When you finish the game, you will move to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "game questions part");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "jw-modal", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "How well do know your opponent strategy?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GameComponent_Template_form_ngSubmit_16_listener() {
            return ctx.saveAns("custom-modal-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Please choose a number between 1-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GameComponent_option_20_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GameComponent_div_21_Template, 4, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "jw-modal", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "How well do know your opponent strategy?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GameComponent_Template_form_ngSubmit_29_listener() {
            return ctx.saveAns("custom-modal-2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Please choose a number between 1-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GameComponent_option_33_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GameComponent_div_34_Template, 4, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.q1Form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.IsNotq1 && ctx.f.q1.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsNotq1 || ctx.f.q1.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.q2Form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.IsNotq2 && ctx.f2.q2.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsNotq2 || ctx.f2.q2.errors);
        }
      },
      directives: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["body[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n}\r\n\r\n\r\n\r\n#welcomeLogo[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 2vh;\r\n}\r\n\r\n\r\n\r\n#buttons[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: #ce4f71;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n#button1[_ngcontent-%COMP%]{\r\n  background-color: rgba(185, 98, 128, 0.67);\r\n  color: antiquewhite;\r\n  border: 2px solid antiquewhite;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\n\r\n#button1[_ngcontent-%COMP%]:hover {\r\n  background-color:antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n}\r\n\r\n\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-weight: 400;\r\n  font-size: 24px;\r\n  text-align: center;\r\n  background-color: white;\r\n\r\n}\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  font-size: 30px;\r\n  color: #ffe9e6;\r\n  margin-left: 2%;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #733949;\r\n}\r\n\r\n\r\n\r\n.buttonModal[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n  border: 2px solid #b96280;\r\n  border-radius: 4px;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.buttonModal[_ngcontent-%COMP%]:hover {\r\n  background-color:rgba(155, 0, 50, 0.43);\r\n  color:antiquewhite;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7OztBQUlBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOzs7O0FBR0E7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7O0FBRWQ7Ozs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7Ozs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7QUFFekI7Ozs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOzs7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4jd2VsY29tZUxvZ297XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5cclxuI2J1dHRvbnN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U0ZjcxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuI2J1dHRvbjF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDk4LCAxMjgsIDAuNjcpO1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYW50aXF1ZXdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcblxyXG4jYnV0dG9uMTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjphbnRpcXVld2hpdGU7XHJcbiAgY29sb3I6IHJnYigyMDksIDAsIDcxKTtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuaDF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogI2ZmZTllNjtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICM3MzM5NDk7XHJcbn1cclxuXHJcbi5idXR0b25Nb2RhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgY29sb3I6IHJnYigyMDksIDAsIDcxKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYjk2MjgwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b25Nb2RhbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1NSwgMCwgNTAsIDAuNDMpO1xyXG4gIGNvbG9yOmFudGlxdWV3aGl0ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game',
          template: "\n    <div id=\"lalala\" >\n      <canvas #canvas style=\" padding-right: 0; padding-left:0; margin-left: auto; margin-right: auto; display: block; \" width=\"850\" height=\"500\" id=\"output\" >Canvas not supported...</canvas>\n    </div>\n    <div id=\"back\">\n      <input id=\"button1\" type=button value=\"make a move back <\" style=\"width:300px;font-size:15px\" (click)=\"Back();Back();addToCount()\" title=\"two moves back\">\n    </div>\n    <br/>\n    <h2>When you finish the game, you will move to the <strong>game questions part</strong></h2>\n    <jw-modal id=\"custom-modal-1\">\n      <h1>How well do know your opponent strategy?</h1>\n      <br/>\n      <div class=\"form-group col-6\">\n        <form [formGroup]=\"q1Form\" (ngSubmit)=\"saveAns('custom-modal-1') \">\n          <select formControlName=\"q1\" id=\"modalQ1\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': IsNotq1 && f.q1.errors}\">\n            <option value=\"\" disabled>Please choose a number between 1-10</option>\n            <option *ngFor=\"let option of options\" [ngValue]=\"option\" >{{option}}</option>\n          </select>\n          <div class=\"invalid-feedback\" *ngIf=\"IsNotq1 || f.q1.errors\">\n            <sup>*</sup>Please enter correct rate\n          </div>\n          <br/>\n          <button class=\"buttonModal\" type=\"submit\" >Continue</button>\n      </form>\n      </div>\n    </jw-modal>\n    <jw-modal id=\"custom-modal-2\">\n      <h1>How well do know your opponent strategy?</h1>\n      <div class=\"form-group col-6\">\n      <form [formGroup]=\"q2Form\" (ngSubmit)=\"saveAns('custom-modal-2') \">\n      <select formControlName=\"q2\" id=\"modalQ2\" class=\"form-control\" [ngClass]=\"{ 'is-invalid':  IsNotq2 && f2.q2.errors}\">\n        <option value=\"\" disabled>Please choose a number between 1-10</option>\n        <option *ngFor=\"let option of options\" [ngValue]=\"option\" >{{option}}</option>\n      </select>\n      <div class=\"invalid-feedback\" *ngIf=\"IsNotq2  || f2.q2.errors \">\n        <sup>*</sup>Please enter correct rate\n      </div>\n        <br/>\n        <button  type=\"submit\" >Continue</button>\n      </form>\n      </div>\n    </jw-modal>\n  ",
          styleUrls: ['./game.component.css']
        }]
      }], function () {
        return [{
          type: src_app_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
        }, {
          type: src_app_services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__["HexServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas', {
            "static": true
          }]
        }],
        handleMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousemove', ['$event']]
        }],
        handleMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/part2/part2.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/part2/part2.component.ts ***!
    \*****************************************************/

  /*! exports provided: Part2Component */

  /***/
  function srcAppComponentsPart2Part2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Part2Component", function () {
      return Part2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/hex-service.service */
    "./src/app/services/hex-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Part2Component_div_0_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_37_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f1.q1.errors.required);
      }
    }

    function Part2Component_div_0_option_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r25);
      }
    }

    function Part2Component_div_0_div_47_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_47_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f1.q2.errors.required);
      }
    }

    function Part2Component_div_0_option_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r27);
      }
    }

    function Part2Component_div_0_div_57_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_57_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f1.q3.errors.required);
      }
    }

    function Part2Component_div_0_option_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r29);
      }
    }

    function Part2Component_div_0_div_67_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_67_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f1.q4.errors.required);
      }
    }

    function Part2Component_div_0_div_74_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_74_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.f1.q5.errors == null ? null : ctx_r8.f1.q5.errors.pattern) || ctx_r8.f1.q5.errors.min || ctx_r8.f1.q5.errors.max);
      }
    }

    function Part2Component_div_0_div_75_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_75_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f1.q5.errors.required);
      }
    }

    function Part2Component_div_0_div_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("please notice you have left ", 100 - ctx_r10.f1.A.value - ctx_r10.f1.B.value - ctx_r10.f1.C.value - ctx_r10.f1.D.value - ctx_r10.f1.E.value, "% to complete");
      }
    }

    function Part2Component_div_0_div_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("please notice your values are too high, get rid of ", (0 - 1) * (100 - ctx_r11.f1.A.value - ctx_r11.f1.B.value - ctx_r11.f1.C.value - ctx_r11.f1.D.value - ctx_r11.f1.E.value), "% to complete");
      }
    }

    function Part2Component_div_0_div_85_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_85_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.f1.A.errors == null ? null : ctx_r12.f1.A.errors.pattern) || ctx_r12.f1.A.errors.min || ctx_r12.f1.A.errors.max);
      }
    }

    function Part2Component_div_0_div_86_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_86_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f1.A.errors.required);
      }
    }

    function Part2Component_div_0_div_89_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_89_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.f1.B.errors == null ? null : ctx_r14.f1.B.errors.pattern) || ctx_r14.f1.B.errors.min || ctx_r14.f1.B.errors.max);
      }
    }

    function Part2Component_div_0_div_90_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_90_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.f1.B.errors.required);
      }
    }

    function Part2Component_div_0_div_93_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_93_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r16.f1.C.errors == null ? null : ctx_r16.f1.C.errors.pattern) || ctx_r16.f1.C.errors.min || ctx_r16.f1.C.errors.max);
      }
    }

    function Part2Component_div_0_div_94_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_94_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.f1.C.errors.required);
      }
    }

    function Part2Component_div_0_div_97_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_97_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r18.f1.D.errors == null ? null : ctx_r18.f1.D.errors.pattern) || ctx_r18.f1.D.errors.min || ctx_r18.f1.D.errors.max);
      }
    }

    function Part2Component_div_0_div_98_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_98_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_98_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.f1.D.errors.required);
      }
    }

    function Part2Component_div_0_div_101_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer must be between 0-100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_101_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.f1.E.errors == null ? null : ctx_r20.f1.E.errors.pattern) || ctx_r20.f1.E.errors.min || ctx_r20.f1.E.errors.max);
      }
    }

    function Part2Component_div_0_div_102_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_102_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_102_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.f1.E.errors.required);
      }
    }

    function Part2Component_div_0_button_121_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Part2Component_div_0_button_121_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r43.changAns1(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes. I want to change my answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_122_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Part2Component_div_0_div_122_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r47.changAns1(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I regret. I don't want to change my answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_122_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have to answer the question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Part2Component_div_0_div_122_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Part2Component_div_0_div_122_div_19_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.f1.q6.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function Part2Component_div_0_div_122_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What should be the next step for the red player which secure his victory?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please choose your answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Part2Component_div_0_div_122_button_18_Template, 2, 0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Part2Component_div_0_div_122_div_19_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r23.next1 && ctx_r23.f1.q6.errors || ctx_r23.f1.q6.errors && ctx_r23.f1.q6.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.changeANS1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.next1 && ctx_r23.f1.q6.errors);
      }
    }

    function Part2Component_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Questionnaire part 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please follow the questions carefully, after you click \"next\", your answers ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "will be saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " and you will move to the next section of questions.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function Part2Component_div_0_Template_form_ngSubmit_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.onNext1();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Questions:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "What should be the next step for the blue player which secure his victory?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Please choose your answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, Part2Component_div_0_div_37_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "How confident are you in your answers?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1- Very easy 10- Extremely difficult");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, Part2Component_div_0_option_46_Template, 2, 2, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, Part2Component_div_0_div_47_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "How difficult was it for you to solve this problem?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "1- Very easy 10- Extremely difficult");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, Part2Component_div_0_option_56_Template, 2, 2, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, Part2Component_div_0_div_57_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "In your opinion, how difficult is it for most people to solve this problem?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "1- Very easy 10- Extremely difficult");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, Part2Component_div_0_option_66_Template, 2, 2, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, Part2Component_div_0_div_67_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "How many responders do you estimate, will select the correct answer?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, Part2Component_div_0_div_74_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, Part2Component_div_0_div_75_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "How many responders do you estimate will select each answer? A number between 0-100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, Part2Component_div_0_div_80_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, Part2Component_div_0_div_81_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, Part2Component_div_0_div_85_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, Part2Component_div_0_div_86_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, Part2Component_div_0_div_89_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, Part2Component_div_0_div_90_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, Part2Component_div_0_div_93_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, Part2Component_div_0_div_94_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, Part2Component_div_0_div_97_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, Part2Component_div_0_div_98_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, Part2Component_div_0_div_101_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, Part2Component_div_0_div_102_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Now we will show you data about others answers for this question:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "23% of the responders choose A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "20% of the responders choose B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "15% of the responders choose C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "24% of the responders choose D ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "18% of the responders choose E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Now, do you want to change you first answer?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, Part2Component_div_0_button_121_Template, 2, 0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, Part2Component_div_0_div_122_Template, 20, 5, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.questionForm1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx_r0.next1 && ctx_r0.f1.q1.errors || ctx_r0.f1.q1.errors && ctx_r0.f1.q1.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q1.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx_r0.next1 && ctx_r0.f1.q2.errors || ctx_r0.f1.q2.errors && ctx_r0.f1.q2.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q2.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx_r0.next1 && ctx_r0.f1.q3.errors || ctx_r0.f1.q3.errors && ctx_r0.f1.q3.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q3.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx_r0.next1 && ctx_r0.f1.q4.errors || ctx_r0.f1.q4.errors && ctx_r0.f1.q4.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q4.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx_r0.next1 && ctx_r0.f1.q5.errors || ctx_r0.f1.q5.errors && ctx_r0.f1.q5.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.q5.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.q5.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionForm1.hasError("notValid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionForm1.hasError("notValid2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx_r0.next1 && ctx_r0.f1.A.errors || ctx_r0.f1.A.errors && ctx_r0.f1.A.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.A.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.A.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx_r0.next1 && ctx_r0.f1.B.errors || ctx_r0.f1.B.errors && ctx_r0.f1.B.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.B.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.B.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx_r0.next1 && ctx_r0.f1.C.errors || ctx_r0.f1.C.errors && ctx_r0.f1.C.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.C.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.C.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx_r0.next1 && ctx_r0.f1.D.errors || ctx_r0.f1.D.errors && ctx_r0.f1.D.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.D.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.D.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx_r0.next1 && ctx_r0.f1.E.errors || ctx_r0.f1.E.errors && ctx_r0.f1.E.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f1.E.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.next1 && ctx_r0.f1.E.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.changeANS1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeANS1);
      }
    }

    var Part2Component = /*#__PURE__*/function () {
      function Part2Component(formBuilder, router, hexService) {
        _classCallCheck(this, Part2Component);

        this.formBuilder = formBuilder;
        this.router = router;
        this.hexService = hexService;
        this.next1 = false;
        this.next2 = false;
        this.finish = false;
        this.part1 = true;
        this.unamePattern = '[0-9]+';
        this.changeANS1 = false;
      }

      _createClass(Part2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var isClickGame = sessionStorage.getItem('clickGame');

          if (isClickGame === null) {
            sessionStorage.setItem('clickGame', '0');
          }

          var isUser = sessionStorage.getItem('userID');

          if (isUser == null) {
            this.router.navigate(['/', 'notFound']);
          } else {
            this.isItUserFromDB(isUser);
          }

          this.options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
          this.questionForm1 = this.formBuilder.group({
            q1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            A: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            B: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            C: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            D: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            E: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.unamePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            q6: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validators: this.checkSum
          });
        }
      }, {
        key: "isItUserFromDB",
        value: function isItUserFromDB(userID) {
          var _this8 = this;

          this.hexService.get(userID).subscribe(function (data) {
            console.log(data);
            console.log(true);
          }, function (error) {
            console.log(error);

            _this8.router.navigate(['/', 'pageNotFound']);
          });
        }
      }, {
        key: "checkSum",
        value: function checkSum(group) {
          if (!group.valid && !group.hasError('notValid')) {
            // return if another validator has already found an error on the matchingControl
            return;
          }

          var sum;
          var a = +group.get('A').value;
          var b = +group.get('B').value;
          var c = +group.get('C').value;
          var d = +group.get('D').value;
          var e = +group.get('E').value;
          sum = a + b + c + d + e;

          if (sum < 100) {
            return {
              notValid: true
            };
          } else if (sum > 100) {
            return {
              notValid2: true
            };
          } else {
            return null;
          }
        }
      }, {
        key: "changAns1",
        value: function changAns1(isIT) {
          if (isIT === true) {
            this.changeANS1 = true;
          } else {
            this.f1.q6.setValue('');
            this.changeANS1 = false;
          }
        }
      }, {
        key: "playGame",
        value: function playGame() {
          var counter = parseInt(sessionStorage.getItem('clickGame'));
          counter = counter + 1;
          sessionStorage.removeItem('clickGame');
          sessionStorage.setItem('clickGame', String(counter));
          sessionStorage.setItem('isPlay', 'True');
          this.router.navigate(['/', 'hexGame']);
        }
      }, {
        key: "onNext1",
        value: function onNext1() {
          this.next1 = true;

          if (this.f1.q1.errors || this.f1.q2.errors || this.f1.q3.errors || this.f1.q4.errors || this.f1.q5.errors || this.f1.A.errors || this.f1.B.errors || this.questionForm1.hasError('notValid2') || this.f1.C.errors || this.f1.D.errors || this.f1.E.errors || this.f1.q6.errors && this.changeANS1 || this.questionForm1.hasError('notValid')) {
            console.log('yes');
          } else {
            var data = {
              id: sessionStorage.getItem('userID'),
              q1: this.f1.q1.value,
              q2: this.f1.q2.value,
              q3: this.f1.q3.value,
              q4: this.f1.q4.value,
              q5: this.f1.q5.value,
              A: this.f1.A.value,
              B: this.f1.B.value,
              C: this.f1.C.value,
              D: this.f1.D.value,
              E: this.f1.E.value,
              q6: this.f1.q6.value,
              numOfTrying: sessionStorage.getItem('clickGame')
            };
            this.hexService.savepart1(data).subscribe(function (response) {
              console.log('here is the response');
              var part1AnsDb = response;
              console.log(part1AnsDb);
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "f1",
        get: function get() {
          return this.questionForm1.controls;
        }
      }]);

      return Part2Component;
    }();

    Part2Component.ɵfac = function Part2Component_Factory(t) {
      return new (t || Part2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__["HexServiceService"]));
    };

    Part2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Part2Component,
      selectors: [["app-part2"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "content"], [3, "formGroup", "ngSubmit"], ["src", "assets\\exQ2_1", "width", "88%"], [1, "form-row"], [1, "form-group", "col-10"], ["formControlName", "q1", 1, "form-control", 3, "ngClass"], ["value", "", "disabled", ""], ["value", "a"], ["value", "b"], ["value", "c"], ["value", "d"], ["value", "e"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "q2", 1, "form-control", 3, "ngClass"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "q3", 1, "form-control", 3, "ngClass"], ["formControlName", "q4", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "Number between 0%-100%", "formControlName", "q5", 1, "form-control", 3, "ngClass"], ["class", "worn1", 4, "ngIf"], [1, "form-group", "col-2"], ["type", "text", "placeholder", "A", "formControlName", "A", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "B", "formControlName", "B", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "C", "formControlName", "C", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "D", "formControlName", "D", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "E", "formControlName", "E", 1, "form-control", 3, "ngClass"], ["class", "btn1", "type", "button", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn2"], [1, "invalid-feedback"], [3, "ngValue"], [1, "worn1"], ["type", "button", 1, "btn1", 3, "click"], ["formControlName", "q6", 1, "form-control", 3, "ngClass"]],
      template: function Part2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Part2Component_div_0_Template, 128, 54, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.part1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      styles: ["h2[_ngcontent-%COMP%]{font-size:18px}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide[_ngcontent-%COMP%]{letter-spacing:4px}h1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size:36px;\r\n  font-weight: 800;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #733949;\r\n  color: antiquewhite;\r\n}h2[_ngcontent-%COMP%]{line-height: initial;}strong[_ngcontent-%COMP%]{\r\n  color: #733949;\r\n}.content[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:15%;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  width: 70%;\r\n  height: 78vh;\r\n  background: rgba(227, 183, 197, 0.46);\r\n  overflow: auto;\r\n  border: 3px solid #362b32;\r\n\r\n  border-radius: 10px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0.8vw;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n\r\n  box-shadow: inset 0 0 5px #242912;\r\n  border-radius: 10px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #eedceb;\r\n  border-radius: 9px;\r\n}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(141, 0, 49, 0.62);\r\n}h4[_ngcontent-%COMP%]{font-size:36px}h5[_ngcontent-%COMP%]{font-size:30px}.w3-serif[_ngcontent-%COMP%]{font-family:serif}h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{text-align:center; font-family:\"Segoe UI\",Arial,sans-serif;font-weight:200;margin:10px 0}.w3-wide[_ngcontent-%COMP%]{letter-spacing:4px}h4[_ngcontent-%COMP%]{text-align: center}.btn2[_ngcontent-%COMP%]{\r\n  background-color: rgba(185, 98, 128, 0.67);\r\n  color: antiquewhite;\r\n  border: 2px solid antiquewhite;\r\n  border-radius: 8px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n\r\n}.btn2[_ngcontent-%COMP%]:hover {\r\n  background-color:antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n}.btn1[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n  border: 2px solid #b96280;\r\n  border-radius: 8px;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  margin-left: 2%;\r\n\r\n}.btn1[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(155, 0, 50, 0.43); \r\n  color: antiquewhite;\r\n}.worn1[_ngcontent-%COMP%]{\r\n  color: red;\r\n}.lblGoback[_ngcontent-%COMP%]{\r\n\r\n  margin-left:10%;\r\n  font-size: 18px;\r\n\r\n}.btn3[_ngcontent-%COMP%]{\r\n  background-color: antiquewhite;\r\n  color: rgb(209, 0, 71);\r\n  border: 2px solid #b96280;\r\n  border-radius: 8px;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  margin-left: 5%;\r\n\r\n}.btn3[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(155, 0, 50, 0.43); \r\n  color: antiquewhite;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0Mi9wYXJ0Mi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsY0FBYyxDQUFDLFVBQVUsaUJBQWlCLENBQzdDLFlBQVksdUNBQXVDLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLGtCQUFrQixDQUM3RztFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCLENBQ0EsR0FBRyxvQkFBb0IsQ0FBQyxDQUV4QjtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QseUJBQXlCOztFQUV6QixtQkFBbUI7QUFDckIsQ0FHQTtFQUNFLFlBQVk7QUFDZCxDQUVBLFVBQVUsQ0FDVjs7RUFFRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCLENBRUEsV0FBVyxDQUNYO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBLG9CQUFvQixDQUNwQjtFQUNFLGtDQUFrQztBQUNwQyxDQUVBLEdBQUcsY0FBYyxDQUFDLEdBQUcsY0FBYyxDQUFDLFVBQVUsaUJBQWlCLENBQy9ELE1BQU0saUJBQWlCLEVBQUUsdUNBQXVDLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLGtCQUFrQixDQUMxSCxHQUFHLGtCQUFrQixDQUVyQjtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCLENBRUE7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCLENBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlOztBQUVqQixDQUVBO0VBQ0Usd0NBQXdDLEVBQUUsVUFBVTtFQUNwRCxtQkFBbUI7QUFDckIsQ0FFQTtFQUNFLFVBQVU7QUFDWixDQUVBOztFQUVFLGVBQWU7RUFDZixlQUFlOztBQUVqQixDQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTs7QUFFakIsQ0FFQTtFQUNFLHdDQUF3QyxFQUFFLFVBQVU7RUFDcEQsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJ0Mi9wYXJ0Mi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7Zm9udC1zaXplOjE4cHh9LnczLXNlcmlme2ZvbnQtZmFtaWx5OnNlcmlmfVxyXG5oMSxoMixwLCBoM3tmb250LWZhbWlseTpcIlNlZ29lIFVJXCIsQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo0MDA7bWFyZ2luOjEwcHggMH0udzMtd2lkZXtsZXR0ZXItc3BhY2luZzo0cHh9XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6MzZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjNzMzOTQ5O1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuaDJ7bGluZS1oZWlnaHQ6IGluaXRpYWw7fVxyXG5cclxuc3Ryb25ne1xyXG4gIGNvbG9yOiAjNzMzOTQ5O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDoxNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNzh2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMTgzLCAxOTcsIDAuNDYpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzNjJiMzI7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMC44dnc7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMyNDI5MTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNlZWRjZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNDEsIDAsIDQ5LCAwLjYyKTtcclxufVxyXG5cclxuaDR7Zm9udC1zaXplOjM2cHh9aDV7Zm9udC1zaXplOjMwcHh9LnczLXNlcmlme2ZvbnQtZmFtaWx5OnNlcmlmfVxyXG5oNCxoNXt0ZXh0LWFsaWduOmNlbnRlcjsgZm9udC1mYW1pbHk6XCJTZWdvZSBVSVwiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6MjAwO21hcmdpbjoxMHB4IDB9LnczLXdpZGV7bGV0dGVyLXNwYWNpbmc6NHB4fVxyXG5oNHt0ZXh0LWFsaWduOiBjZW50ZXJ9XHJcblxyXG4uYnRuMntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgOTgsIDEyOCwgMC42Nyk7XHJcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBhbnRpcXVld2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuXHJcbn1cclxuXHJcbi5idG4yOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmFudGlxdWV3aGl0ZTtcclxuICBjb2xvcjogcmdiKDIwOSwgMCwgNzEpO1xyXG59XHJcblxyXG4uYnRuMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgY29sb3I6IHJnYigyMDksIDAsIDcxKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYjk2MjgwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuXHJcbn1cclxuXHJcbi5idG4xOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMCwgNTAsIDAuNDMpOyAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuXHJcbi53b3JuMXtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubGJsR29iYWNre1xyXG5cclxuICBtYXJnaW4tbGVmdDoxMCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bjN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIGNvbG9yOiByZ2IoMjA5LCAwLCA3MSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2I5NjI4MDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG59XHJcblxyXG4uYnRuMzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDAsIDUwLCAwLjQzKTsgLyogR3JlZW4gKi9cclxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Part2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-part2',
          templateUrl: './part2.component.html',
          styleUrls: ['./part2.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_hex_service_service__WEBPACK_IMPORTED_MODULE_3__["HexServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/part3/part3.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/part3/part3.component.ts ***!
    \*****************************************************/

  /*! exports provided: Part3Component */

  /***/
  function srcAppComponentsPart3Part3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Part3Component", function () {
      return Part3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Part3Component = /*#__PURE__*/function () {
      function Part3Component() {
        _classCallCheck(this, Part3Component);
      }

      _createClass(Part3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Part3Component;
    }();

    Part3Component.ɵfac = function Part3Component_Factory(t) {
      return new (t || Part3Component)();
    };

    Part3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Part3Component,
      selectors: [["app-part3"]],
      decls: 2,
      vars: 0,
      template: function Part3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "part3 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydDMvcGFydDMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Part3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-part3',
          templateUrl: './part3.component.html',
          styleUrls: ['./part3.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tnx/tnx.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/tnx/tnx.component.ts ***!
    \*************************************************/

  /*! exports provided: TnxComponent */

  /***/
  function srcAppComponentsTnxTnxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TnxComponent", function () {
      return TnxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TnxComponent = /*#__PURE__*/function () {
      function TnxComponent() {
        _classCallCheck(this, TnxComponent);
      }

      _createClass(TnxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TnxComponent;
    }();

    TnxComponent.ɵfac = function TnxComponent_Factory(t) {
      return new (t || TnxComponent)();
    };

    TnxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TnxComponent,
      selectors: [["app-tnx"]],
      decls: 2,
      vars: 0,
      template: function TnxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tnx works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG54L3RueC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TnxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tnx',
          templateUrl: './tnx.component.html',
          styleUrls: ['./tnx.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/hex-service.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/hex-service.service.ts ***!
    \*************************************************/

  /*! exports provided: HexServiceService */

  /***/
  function srcAppServicesHexServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HexServiceService", function () {
      return HexServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LOCAL = "http://localhost:8080/";
    var baseUrl = 'api/hex';

    var HexServiceService = /*#__PURE__*/function () {
      function HexServiceService(http) {
        _classCallCheck(this, HexServiceService);

        this.http = http;
      }

      _createClass(HexServiceService, [{
        key: "create",
        value: function create(data) {
          console.log('here I am');
          console.log(data);
          return this.http.post(baseUrl + '/users', data);
        }
      }, {
        key: "get",
        value: function get(userID) {
          console.log("is here:" + userID);
          return this.http.get(baseUrl + '/users' + "/".concat(userID));
        }
      }, {
        key: "saveOpQ",
        value: function saveOpQ(data) {
          console.log('here I am');
          console.log(data);
          return this.http.post(baseUrl + '/opStrategy', data);
        }
      }, {
        key: "savepart1",
        value: function savepart1(data) {
          console.log('here I am');
          console.log(data);
          return this.http.post(baseUrl + '/part1', data);
        }
      }]);

      return HexServiceService;
    }();

    HexServiceService.ɵfac = function HexServiceService_Factory(t) {
      return new (t || HexServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HexServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HexServiceService,
      factory: HexServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HexServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./polyfills.ts */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
    /**
     * This file includes polyfills needed by Angular and is loaded before the app.
     * You can add your own extra polyfills to this file.
     *
     * This file is divided into 2 sections:
     *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
     *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
     *      file.
     *
     * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
     * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
     * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
     *
     * Learn more in https://angular.io/guide/browser-support
     */

    /***************************************************************************************************
     * BROWSER POLYFILLS
     */

    /** IE10 and IE11 requires the following for NgClass support on SVG elements */
    // import 'classlist.js';  // Run `npm install --save classlist.js`.

    /**
     * Web Animations `@angular/platform-browser/animations`
     * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
     * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
     */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /**
     * By default, zone.js will patch all possible macroTask and DomEvents
     * user can disable parts of macroTask/DomEvents patch by setting following flags
     * because those flags need to be set before `zone.js` being loaded, and webpack
     * will put import in the top of bundle, so user need to create a separate file
     * in this directory (for example: zone-flags.ts), and put the following flags
     * into that file, and then add the following code before importing zone.js.
     * import './zone-flags';
     *
     * The flags allowed in zone-flags.ts are listed here.
     *
     * The following flags will work for all browsers.
     *
     * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
     * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
     * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
     *
     *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
     *  with the following flag, it will bypass `zone.js` patch for IE/Edge
     *
     *  (window as any).__Zone_enable_cross_context_check = true;
     *
     */

    /***************************************************************************************************
     * Zone JS is required by default for Angular itself.
     */
    // Included with Angular CLI.

    /***************************************************************************************************
     * APPLICATION IMPORTS
     */

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
    /*! C:\Users\Toshiba\hex-with-server\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map