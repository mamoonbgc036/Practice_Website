/*! KEditor v2.0.1 | Copyright (c) 2016-present Kademi (http://kademi.co) */ ! function (e, t) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("jQuery"), require("KEditor"), require("CKEDITOR"));
	else if ("function" == typeof define && define.amd) define(["jQuery", "KEditor", "CKEDITOR"], t);
	else {
		var n = "object" == typeof exports ? t(require("jQuery"), require("KEditor"), require("CKEDITOR")) : t(e.jQuery, e.KEditor, e.CKEDITOR);
		for (var i in n)("object" == typeof exports ? exports : e)[i] = n[i]
	}
}("undefined" != typeof self ? self : this, (function (e, t, n) {
	return function (e) {
		var t = {};

		function n(i) {
			if (t[i]) return t[i].exports;
			var r = t[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
		}
		return n.m = e, n.c = t, n.d = function (e, t, i) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: i
			})
		}, n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.t = function (e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var i = Object.create(null);
			if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
				for (var r in e) n.d(i, r, function (t) {
					return e[t]
				}.bind(null, r));
			return i
		}, n.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 22)
	}([
		function (e, t, n) {
			"use strict";
			t.a = {
				UI: "keditor-ui",
				UI_DRAGGING: "keditor-ui-dragging",
				UI_HIDDEN: "keditor-ui-hidden",
				UI_CUTTING: "keditor-ui-cutting",
				UI_RESIZER: "ui-resizable-resizer",
				SORTABLE: "ui-sortable",
				RESIZABLE: "ui-sortable",
				WRAPPER: "keditor-wrapper",
				BTN: "keditor-btn",
				BTN_GROUP: "keditor-btn-group",
				BTN_PRIMARY: "keditor-btn-primary",
				BTN_DEFAULT: "keditor-btn-default",
				STATE_ACTIVE: "active",
				STATE_OPENED: "opened",
				STATE_SHOWED: "showed",
				STATE_SELECTED: "selected",
				STATE_DUPLICATED: "duplicated",
				STATE_INITIALIZED: "initialized",
				STATE_INITIALIZING: "initializing",
				STATE_PREVIEWING: "previewing",
				STATE_TOOLBAR_SHOWED: "showed-keditor-toolbar",
				STATE_SIDEBAR_SHOWED: "showed-keditor-sidebar",
				STATE_MODAL_OPENED: "opened-modal",
				STATE_NOT_MATCHED: "not-matched",
				STATE_HAS_FOOTER: "has-footer",
				STATE_COPYING: "copying",
				STATE_COPYING_COMPONENT: "copying-component",
				STATE_COPYING_CONTAINER: "copying-container",
				STATE_COPYING_SUB_CONTAINER: "copying-sub-container",
				ADD_CONTENT: "btn-add-content",
				PASTE_CONTENT: "btn-paste-content",
				SIDEBAR: "keditor-sidebar",
				SIDEBAR_HEADER: "keditor-sidebar-header",
				SIDEBAR_BODY: "keditor-sidebar-body",
				SIDEBAR_TITLE: "keditor-sidebar-title",
				SIDEBAR_CLOSER: "keditor-sidebar-closer",
				SIDEBAR_LEFT: "keditor-sidebar-left",
				SIDEBAR_LEFT_HEADER: "keditor-sidebar-left-header",
				SIDEBAR_LEFT_BODY: "keditor-sidebar-left-body",
				SIDEBAR_LEFT_TITLE: "keditor-sidebar-left-title",
				SIDEBAR_LEFT_CLOSER: "keditor-sidebar-left-closer",
				TOPBAR: "keditor-topbar",
				TOPBAR_LEFT: "keditor-topbar-left",
				TOPBAR_CENTER: "keditor-topbar-center",
				TOPBAR_RIGHT: "keditor-topbar-right",
				TOPBAR_BUTTON: "keditor-topbar-btn",
				TOPBAR_TITLE: "keditor-topbar-title",
				MODAL: "keditor-modal",
				MODAL_COMPONENT: "keditor-modal-component",
				MODAL_CONTAINER: "keditor-modal-container",
				MODAL_HEADER: "keditor-modal-header",
				MODAL_TITLE: "keditor-modal-title",
				MODAL_BODY: "keditor-modal-body",
				MODAL_FOOTER: "keditor-modal-footer",
				MODAL_CLOSE: "keditor-modal-close",
				MODAL_ADD: "keditor-modal-add",
				SNIPPET: "keditor-snippet",
				SNIPPET_INNER: "keditor-snippet-inner",
				SNIPPET_TITLE: "keditor-snippet-title",
				SNIPPET_PREVIEW: "keditor-snippet-preview",
				SNIPPET_CONTAINER: "keditor-snippet-container",
				SNIPPET_COMPONENT: "keditor-snippet-component",
				SNIPPETS: "keditor-snippets",
				SNIPPETS_FILTER: "keditor-snippets-filter",
				SNIPPETS_FILTER_COMPONENT: "keditor-snippets-filter-component",
				SNIPPETS_FILTER_CONTAINER: "keditor-snippets-filter-container",
				SNIPPETS_FILTER_LABEL: "keditor-snippets-filter-label",
				SNIPPETS_SEARCH: "keditor-snippets-search",
				SNIPPETS_FILTER_WRAPPER: "keditor-snippets-filter-wrapper",
				SNIPPETS_COMPONENT: "keditor-snippets-component",
				SNIPPETS_WRAPPER: "keditor-snippets-wrapper",
				TOOLBAR: "keditor-toolbar",
				TOOLBAR_BOTTOM: "keditor-toolbar-bottom",
				TOOLBAR_CONTENT_AREA: "keditor-toolbar-content-area",
				TOOLBAR_CONTAINER: "keditor-toolbar-container",
				TOOLBAR_CONTAINER_BOTTOM: "keditor-toolbar-bottom-container",
				TOOLBAR_CONTAINER_CONTENT: "keditor-toolbar-container-content",
				TOOLBAR_SUB_CONTAINER: "keditor-toolbar-sub-container",
				TOOLBAR_SUB_CONTAINER_BOTTOM: "keditor-toolbar-bottom-sub-container",
				TOOLBAR_SUB_CONTAINER_CONTENT: "keditor-toolbar-sub-container-content",
				TOOLBAR_COMPONENT: "keditor-toolbar-component",
				TOOLBAR_COMPONENT_BOTTOM: "keditor-toolbar-bottom-component",
				SETTING: "keditor-setting",
				SETTING_FORM: "keditor-setting-form",
				SETTING_FORM_LOADING: "keditor-setting-form-loading",
				CONTENT_AREA: "keditor-content-area",
				CONTENT_AREA_INNER: "keditor-content-area-inner",
				CONTENT_AREAS: "keditor-content-areas",
				CONTENT_AREAS_WRAPPER: "keditor-content-areas-wrapper",
				IFRAME: "keditor-iframe",
				IFRAME_BODY: "keditor-iframe-body",
				IFRAME_WRAPPER: "keditor-iframe-wrapper",
				IFRAME_WIDTH_SWITCHER: "keditor-iframe-width-switcher",
				IFRAME_COVER_WRAPPER: "keditor-iframe-cover-wrapper",
				IFRAME_COVER_WRAPPER_FAKE: "keditor-iframe-cover-wrapper-fake",
				IFRAME_COVER: "keditor-iframe-cover",
				IFRAME_COVER_HIDDEN: "hidden-cover",
				COMPONENT: "keditor-component",
				COMPONENT_MOVE: "btn-component-move",
				COMPONENT_MOVE_UP: "btn-component-move-up",
				COMPONENT_MOVE_DOWN: "btn-component-move-down",
				COMPONENT_SETTING: "btn-component-setting",
				COMPONENT_DUPLICATE: "btn-component-duplicate",
				COMPONENT_COPY: "btn-component-copy",
				COMPONENT_CUT: "btn-component-cut",
				COMPONENT_DELETE: "btn-component-delete",
				COMPONENT_CONTENT: "keditor-component-content",
				COMPONENT_EXISTING: "existing-component",
				CONTAINER: "keditor-container",
				CONTAINER_MOVE: "btn-container-move",
				CONTAINER_MOVE_UP: "btn-container-move-up",
				CONTAINER_MOVE_DOWN: "btn-container-move-down",
				CONTAINER_DUPLICATE: "btn-container-duplicate",
				CONTAINER_COPY: "btn-container-copy",
				CONTAINER_CUT: "btn-container-cut",
				CONTAINER_DELETE: "btn-container-delete",
				CONTAINER_SETTING: "btn-container-setting",
				CONTAINER_INNER: "keditor-container-inner",
				CONTAINER_CONTENT: "keditor-container-content",
				CONTAINER_CONTENT_INNER: "keditor-container-content-inner",
				SUB_CONTAINER: "keditor-sub-container",
				SUB_CONTAINER_CONTENT: "keditor-sub-container-content",
				PREVIEW_AREA: "keditor-preview-area"
			}
		},
		function (e, t, n) {
			"use strict";
			t.a = {
				COMPONENT: "component",
				CONTAINER: "container",
				EXTRA: "extra"
			}
		},
		function (e, t, n) {
			"use strict";
			t.a = function () {
				if (console && "function" == typeof console.log && window.KEDITOR_DEBUG) {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					console.log.apply(console, ["[ KEditor ] "].concat(t))
				}
			}
		},
		function (t, n) {
			t.exports = e
		},
		function (e, t, n) {
			"use strict";
			var i = n(0),
				r = n(1),
				o = n(2);
			t.a = function () {
				Object(o.a)("closeSidebar");
				var e = this.options,
					t = this.sidebar,
					n = this.sidebarBody.children(".".concat(i.a.STATE_ACTIVE));
				if (n.length > 0) {
					switch (n.attr("[data-setting-category]")) {
					case r.a.CONTAINER:
						"function" == typeof e.containerSettingHideFunction && e.containerSettingHideFunction.call(this, n, this);
						break;
					case r.a.COMPONENT:
						var s = n.attr("data-type"),
							a = KEditor.components[s];
						"function" == typeof a.hideSettingForm && a.hideSettingForm.call(a, n, this);
						break;
					case r.a.EXTRA:
					}
					n.removeClass(i.a.STATE_ACTIVE)
				}
				this.settingComponent = null, this.settingContainer = null, t.removeClass(i.a.STATE_OPENED), this.iframeBody.removeClass(i.a.STATE_SIDEBAR_SHOWED)
			}
		},
		function (e, n) {
			e.exports = t
		},
		function (e, t, n) {
			"use strict";
			t.a = function (e) {
				var t = this.options,
					n = (e.attr("data-type") || "").replace("component-", "");
				return n && n in KEditor.components || ("string" == typeof t.defaultComponentType ? n = t.defaultComponentType : "function" == typeof t.defaultComponentType && (n = t.defaultComponentType.call(this, e)), n || this.error("Component type is undefined!")), n
			}
		},
		function (e, t, n) {
			"use strict";
			var i = n(0),
				r = n(6),
				o = n(1),
				s = n(8),
				a = n(2);
			t.a = function (e) {
				Object(a.a)("openSidebar", e);
				var t = this.options;
				if (e.is(".".concat(i.a.COMPONENT))) {
					var n = r.a.call(this, e),
						l = KEditor.components[n];
					s.a.call(this, e, n, o.a.COMPONENT, l.settingTitle, l.initSettingForm, l.showSettingForm, l)
				} else if (e.is(".".concat(i.a.CONTAINER))) s.a.call(this, e, null, o.a.CONTAINER, t.locale.containerSetting, t.containerSettingInitFunction, t.containerSettingShowFunction, this);
				else {
					var u = e.attr("data-extra-setting"),
						c = t.extraSettings[u];
					s.a.call(this, e, u, o.a.EXTRA, c.title, c.settingInitFunction, c.settingShowFunction, c)
				}
			}
		},
		function (e, t, n) {
			"use strict";
			var i = n(0),
				r = n(1),
				o = n(4),
				s = n(10);
			t.a = function (e, t, n, a, l, u, c) {
				var f = this,
					h = f.sidebar,
					p = f.sidebarTitle,
					d = f.sidebarBody,
					v = s.a.call(f, e, t, n, l, c, (function () {
						"function" == typeof u && u.call(c, m, e, f)
					})),
					m = v.settingForm,
					g = v.isExisting,
					y = m.hasClass(i.a.STATE_ACTIVE) && (e.is(f.settingContainer) || e.is(f.settingComponent) || e.is("[data-extra-setting]"));
				switch (f.settingComponent = null, f.settingContainer = null, n) {
				case r.a.COMPONENT:
					f.settingComponent = e;
					break;
				case r.a.CONTAINER:
					f.settingContainer = e
				}
				if (g) {
					if (y) return void o.a.call(f);
					"function" == typeof u && u.call(c, m, e, f)
				}
				p.html(a), d.children(".".concat(i.a.STATE_ACTIVE)).removeClass(i.a.STATE_ACTIVE), m.addClass(i.a.STATE_ACTIVE), h.addClass(i.a.STATE_OPENED), f.iframeBody.addClass(i.a.STATE_SIDEBAR_SHOWED)
			}
		},
		function (e, t) {
			e.exports = n
		},
		function (e, t, n) {
			"use strict";
			var i = n(0);
			t.a = function (e, t, n, r, o, s) {
				var a = this.sidebarBody,
					l = !1,
					u = a.children(".".concat(i.a.SETTING_FORM, '[data-setting-type="').concat(t, '"][data-setting-category="').concat(n, '"]'));
				if (0 === u.length) {
					if ("function" == typeof r) {
						u = $('\n                <div\n                    data-setting-type="'.concat(t, '"\n                    data-setting-category="').concat(n, '"\n                    class="').concat(i.a.UI, " ").concat(i.a.SETTING_FORM, '"\n                ></div>\n            '));
						var c = $('<span class="'.concat(i.a.SETTING_FORM_LOADING, '" />')).html("Loading...");
						a.append(u), u.append(c), $.when(r.call(o, u, this)).done((function () {
							setTimeout((function () {
								c.remove(), "function" == typeof s && s(!1)
							}), 100)
						}))
					}
				} else l = !0;
				return {
					settingForm: u,
					isExisting: l
				}
			}
		},
		function (e, t, n) {
			"use strict";
			var i = n(0);
			n(6), n(1), n(8), n(2), n(12);

			function r(e, t, n, i, r, o, s) {
				try {
					var a = e[o](s),
						l = a.value
				} catch (e) {
					return void n(e)
				}
				a.done ? t(l) : Promise.resolve(l).then(i, r)
			}

			function o(e) {
				return function () {
					var t = this,
						n = arguments;
					return new Promise((function (i, o) {
						var s = e.apply(t, n);

						function a(e) {
							r(s, i, o, a, l, "next", e)
						}

						function l(e) {
							r(s, i, o, a, l, "throw", e)
						}
						a(void 0)
					}))
				}
			}

			function s(e, t, n, i, r) {
				!r && n.allfiles && n.allfiles.length > 0 ? l(n.allfiles, i, e, t) : $.ajax({
					url: "/WebsiteBuilder/GetFiles",
					type: "POST",
					data: {},
					dataType: "json",
					success: function (r) {
						n.allfiles = r, l(r, i, e, t)
					},
					error: function (e) {
						console.log(e)
					}
				}).always((function () {}))
			}

			function a(e, t) {
				t.jquery ? t.find("img").attr("src", e) : t.setImage ? t.setImage(e) : t.setLink && t.setLink(e)
			}

			function l(e, t, n, i) {
				return u.apply(this, arguments)
			}

			function u() {
				return (u = o(regeneratorRuntime.mark((function e(t, n, r, o) {
					var s, l;
					return regeneratorRuntime.wrap((function (e) {
						for (;;) switch (e.prev = e.next) {
						case 0:
							r.find(".file-listing").empty(), s = function () {
								var e = t[l],
									s = e.FileName,
									u = c(e.FileName);
								if (!n.split(";").find((function (e) {
									return u == e
								}))) return "continue";
								var f = -1 == e.FullPath.indexOf(".html") ? '<img style="margin-right: 2.5px" width="100" height="100" src="' + e.FullPath + '"></img>' : "",
									h = $('<div style="display: flex; align-items: center;" class="file-row">' + f + "<span>" + s + "</span></div>");
								h.on("click", (function () {
									a(e.FullPath, o), r.parent().find(".".concat(i.a.SIDEBAR_LEFT_CLOSER)).trigger("click"), $("body").find(".".concat(i.a.SIDEBAR_CLOSER)).trigger("click")
								})), r.find(".file-listing").append(h)
							}, e.t0 = regeneratorRuntime.keys(t);
						case 3:
							if ((e.t1 = e.t0()).done) {
								e.next = 10;
								break
							}
							if (l = e.t1.value, "continue" !== s()) {
								e.next = 8;
								break
							}
							return e.abrupt("continue", 3);
						case 8:
							e.next = 3;
							break;
						case 10:
						case "end":
							return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}

			function c(e) {
				var t = e.split(".");
				return 1 === t.length || "" === t[0] && 2 === t.length ? "" : t.pop().toLowerCase()
			}
			t.a = function (e, t, n, r) {
				var o = n.sidebarLeft,
					l = n.sidebarLeftTitle,
					u = n.sidebarLeftBody;
				l.html("<strong>Files</strong>"), u.children(".".concat(i.a.STATE_ACTIVE)).removeClass(i.a.STATE_ACTIVE), o.addClass(i.a.STATE_OPENED), n.iframeBody.addClass(i.a.STATE_SIDEBAR_SHOWED), 0 == u.find(".file-manager").length && function (e, t, n, i) {
					e.append("<div class='file-manager'><div class='col-sm-12 file-manager-header'><button class='btn btn-primary btn-block' id='file-manager-upload'><span class='glyphicon glyphicon-refresh upload-btn-spinner' style='display: none'></span> Upload</button><button class='btn btn-info btn-block' id='file-manager-undo' style='display: none'>Undo</button><input type='file' id='filemanager-file' style='display: none'></div><div class='col-sm-12 file-listing'></div></div>");
					var r = function (e) {
						if (e.jquery) return e.find("img").attr("src");
						if (e.getImage) return e.getImage()
					}(t);
					e.find("#file-manager-upload").on("click", (function () {
						e.find("#filemanager-file").trigger("click")
					})), e.find("#file-manager-undo").on("click", (function () {
						a(r, t), $(this).hide()
					})), e.find("#filemanager-file").on("change", (function () {
						var r = new FormData,
							o = $(this)[0].files[0];
						r.append("file", o, o.name);
						var a = e.find(".upload-btn-spinner");
						a.addClass("spinning"), a.show(), $.ajax({
							url: "/WebsiteBuilder/UploadFiles",
							type: "POST",
							data: r,
							dataType: "json",
							processData: !1,
							contentType: !1,
							success: function (r) {
								s(e, t, n, i, !0)
							},
							error: function () {
								console.log("error")
							}
						}).always((function () {
							a.removeClass("spinning"), a.hide()
						}))
					}))
				}(u, t, n, r), s(u, t, n, r)
			}
		},
		function (e, t, n) {
			(function (t) {
				/**
				 * Less - Leaner CSS v3.11.3
				 * http://lesscss.org
				 *
				 * Copyright (c) 2009-2020, Alexis Sellier <self@cloudhead.net>
				 * Licensed under the Apache-2.0 License.
				 *
				 * @license Apache-2.0
				 */
				e.exports = function () {
					"use strict";

					function e(e) {
						return e.replace(/^[a-z-]+:\/+?[^\/]+/, "").replace(/[\?\&]livereload=\w+/, "").replace(/^\//, "").replace(/\.[a-zA-Z]+$/, "").replace(/[^\.\w-]+/g, "-").replace(/\./g, ":")
					}

					function n(e, t) {
						for (var n in t.dataset)
							if (t.dataset.hasOwnProperty(n))
								if ("env" === n || "dumpLineNumbers" === n || "rootpath" === n || "errorReporting" === n) e[n] = t.dataset[n];
								else try {
									e[n] = JSON.parse(t.dataset[n])
								} catch (e) {}
					}
					var i = function (t, n, i) {
							var r = i.href || "",
								o = "less:" + (i.title || e(r)),
								s = t.getElementById(o),
								a = !1,
								l = t.createElement("style");
							l.setAttribute("type", "text/css"), i.media && l.setAttribute("media", i.media), l.id = o, l.styleSheet || (l.appendChild(t.createTextNode(n)), a = null !== s && s.childNodes.length > 0 && l.childNodes.length > 0 && s.firstChild.nodeValue === l.firstChild.nodeValue);
							var u = t.getElementsByTagName("head")[0];
							if (null === s || !1 === a) {
								var c = i && i.nextSibling || null;
								c ? c.parentNode.insertBefore(l, c) : u.appendChild(l)
							}
							if (s && !1 === a && s.parentNode.removeChild(s), l.styleSheet) try {
								l.styleSheet.cssText = n
							} catch (e) {
								throw new Error("Couldn't reassign styleSheet.cssText.")
							}
						},
						r = function (e) {
							var t, n = e.document;
							return n.currentScript || (t = n.getElementsByTagName("script"))[t.length - 1]
						},
						o = function (e, t) {
							return (o = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function (e, t) {
									e.__proto__ = t
								} || function (e, t) {
									for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
								})(e, t)
						};

					function s(e, t) {
						function n() {
							this.constructor = e
						}
						o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
					}

					function a() {
						for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
						var i = Array(e),
							r = 0;
						for (t = 0; t < n; t++)
							for (var o = arguments[t], s = 0, a = o.length; s < a; s++, r++) i[r] = o[s];
						return i
					}
					var l = {
							aliceblue: "#f0f8ff",
							antiquewhite: "#faebd7",
							aqua: "#00ffff",
							aquamarine: "#7fffd4",
							azure: "#f0ffff",
							beige: "#f5f5dc",
							bisque: "#ffe4c4",
							black: "#000000",
							blanchedalmond: "#ffebcd",
							blue: "#0000ff",
							blueviolet: "#8a2be2",
							brown: "#a52a2a",
							burlywood: "#deb887",
							cadetblue: "#5f9ea0",
							chartreuse: "#7fff00",
							chocolate: "#d2691e",
							coral: "#ff7f50",
							cornflowerblue: "#6495ed",
							cornsilk: "#fff8dc",
							crimson: "#dc143c",
							cyan: "#00ffff",
							darkblue: "#00008b",
							darkcyan: "#008b8b",
							darkgoldenrod: "#b8860b",
							darkgray: "#a9a9a9",
							darkgrey: "#a9a9a9",
							darkgreen: "#006400",
							darkkhaki: "#bdb76b",
							darkmagenta: "#8b008b",
							darkolivegreen: "#556b2f",
							darkorange: "#ff8c00",
							darkorchid: "#9932cc",
							darkred: "#8b0000",
							darksalmon: "#e9967a",
							darkseagreen: "#8fbc8f",
							darkslateblue: "#483d8b",
							darkslategray: "#2f4f4f",
							darkslategrey: "#2f4f4f",
							darkturquoise: "#00ced1",
							darkviolet: "#9400d3",
							deeppink: "#ff1493",
							deepskyblue: "#00bfff",
							dimgray: "#696969",
							dimgrey: "#696969",
							dodgerblue: "#1e90ff",
							firebrick: "#b22222",
							floralwhite: "#fffaf0",
							forestgreen: "#228b22",
							fuchsia: "#ff00ff",
							gainsboro: "#dcdcdc",
							ghostwhite: "#f8f8ff",
							gold: "#ffd700",
							goldenrod: "#daa520",
							gray: "#808080",
							grey: "#808080",
							green: "#008000",
							greenyellow: "#adff2f",
							honeydew: "#f0fff0",
							hotpink: "#ff69b4",
							indianred: "#cd5c5c",
							indigo: "#4b0082",
							ivory: "#fffff0",
							khaki: "#f0e68c",
							lavender: "#e6e6fa",
							lavenderblush: "#fff0f5",
							lawngreen: "#7cfc00",
							lemonchiffon: "#fffacd",
							lightblue: "#add8e6",
							lightcoral: "#f08080",
							lightcyan: "#e0ffff",
							lightgoldenrodyellow: "#fafad2",
							lightgray: "#d3d3d3",
							lightgrey: "#d3d3d3",
							lightgreen: "#90ee90",
							lightpink: "#ffb6c1",
							lightsalmon: "#ffa07a",
							lightseagreen: "#20b2aa",
							lightskyblue: "#87cefa",
							lightslategray: "#778899",
							lightslategrey: "#778899",
							lightsteelblue: "#b0c4de",
							lightyellow: "#ffffe0",
							lime: "#00ff00",
							limegreen: "#32cd32",
							linen: "#faf0e6",
							magenta: "#ff00ff",
							maroon: "#800000",
							mediumaquamarine: "#66cdaa",
							mediumblue: "#0000cd",
							mediumorchid: "#ba55d3",
							mediumpurple: "#9370d8",
							mediumseagreen: "#3cb371",
							mediumslateblue: "#7b68ee",
							mediumspringgreen: "#00fa9a",
							mediumturquoise: "#48d1cc",
							mediumvioletred: "#c71585",
							midnightblue: "#191970",
							mintcream: "#f5fffa",
							mistyrose: "#ffe4e1",
							moccasin: "#ffe4b5",
							navajowhite: "#ffdead",
							navy: "#000080",
							oldlace: "#fdf5e6",
							olive: "#808000",
							olivedrab: "#6b8e23",
							orange: "#ffa500",
							orangered: "#ff4500",
							orchid: "#da70d6",
							palegoldenrod: "#eee8aa",
							palegreen: "#98fb98",
							paleturquoise: "#afeeee",
							palevioletred: "#d87093",
							papayawhip: "#ffefd5",
							peachpuff: "#ffdab9",
							peru: "#cd853f",
							pink: "#ffc0cb",
							plum: "#dda0dd",
							powderblue: "#b0e0e6",
							purple: "#800080",
							rebeccapurple: "#663399",
							red: "#ff0000",
							rosybrown: "#bc8f8f",
							royalblue: "#4169e1",
							saddlebrown: "#8b4513",
							salmon: "#fa8072",
							sandybrown: "#f4a460",
							seagreen: "#2e8b57",
							seashell: "#fff5ee",
							sienna: "#a0522d",
							silver: "#c0c0c0",
							skyblue: "#87ceeb",
							slateblue: "#6a5acd",
							slategray: "#708090",
							slategrey: "#708090",
							snow: "#fffafa",
							springgreen: "#00ff7f",
							steelblue: "#4682b4",
							tan: "#d2b48c",
							teal: "#008080",
							thistle: "#d8bfd8",
							tomato: "#ff6347",
							turquoise: "#40e0d0",
							violet: "#ee82ee",
							wheat: "#f5deb3",
							white: "#ffffff",
							whitesmoke: "#f5f5f5",
							yellow: "#ffff00",
							yellowgreen: "#9acd32"
						},
						u = {
							length: {
								m: 1,
								cm: .01,
								mm: .001,
								in : .0254,
								px: .0254 / 96,
								pt: .0254 / 72,
								pc: .0254 / 72 * 12
							},
							duration: {
								s: 1,
								ms: .001
							},
							angle: {
								rad: 1 / (2 * Math.PI),
								deg: 1 / 360,
								grad: 1 / 400,
								turn: 1
							}
						},
						c = {
							colors: l,
							unitConversions: u
						},
						f = function () {
							function e() {
								this.parent = null, this.visibilityBlocks = void 0, this.nodeVisible = void 0, this.rootNode = null, this.parsed = null;
								var e = this;
								Object.defineProperty(this, "currentFileInfo", {
									get: function () {
										return e.fileInfo()
									}
								}), Object.defineProperty(this, "index", {
									get: function () {
										return e.getIndex()
									}
								})
							}
							return e.prototype.setParent = function (t, n) {
								function i(t) {
									t && t instanceof e && (t.parent = n)
								}
								Array.isArray(t) ? t.forEach(i) : i(t)
							}, e.prototype.getIndex = function () {
								return this._index || this.parent && this.parent.getIndex() || 0
							}, e.prototype.fileInfo = function () {
								return this._fileInfo || this.parent && this.parent.fileInfo() || {}
							}, e.prototype.isRulesetLike = function () {
								return !1
							}, e.prototype.toCSS = function (e) {
								var t = [];
								return this.genCSS(e, {
									add: function (e, n, i) {
										t.push(e)
									},
									isEmpty: function () {
										return 0 === t.length
									}
								}), t.join("")
							}, e.prototype.genCSS = function (e, t) {
								t.add(this.value)
							}, e.prototype.accept = function (e) {
								this.value = e.visit(this.value)
							}, e.prototype.eval = function () {
								return this
							}, e.prototype._operate = function (e, t, n, i) {
								switch (t) {
								case "+":
									return n + i;
								case "-":
									return n - i;
								case "*":
									return n * i;
								case "/":
									return n / i
								}
							}, e.prototype.fround = function (e, t) {
								var n = e && e.numPrecision;
								return n ? Number((t + 2e-16).toFixed(n)) : t
							}, e.prototype.blocksVisibility = function () {
								return null == this.visibilityBlocks && (this.visibilityBlocks = 0), 0 !== this.visibilityBlocks
							}, e.prototype.addVisibilityBlock = function () {
								null == this.visibilityBlocks && (this.visibilityBlocks = 0), this.visibilityBlocks = this.visibilityBlocks + 1
							}, e.prototype.removeVisibilityBlock = function () {
								null == this.visibilityBlocks && (this.visibilityBlocks = 0), this.visibilityBlocks = this.visibilityBlocks - 1
							}, e.prototype.ensureVisibility = function () {
								this.nodeVisible = !0
							}, e.prototype.ensureInvisibility = function () {
								this.nodeVisible = !1
							}, e.prototype.isVisible = function () {
								return this.nodeVisible
							}, e.prototype.visibilityInfo = function () {
								return {
									visibilityBlocks: this.visibilityBlocks,
									nodeVisible: this.nodeVisible
								}
							}, e.prototype.copyVisibilityInfo = function (e) {
								e && (this.visibilityBlocks = e.visibilityBlocks, this.nodeVisible = e.nodeVisible)
							}, e
						}();
					f.compare = function (e, t) {
						if (e.compare && "Quoted" !== t.type && "Anonymous" !== t.type) return e.compare(t);
						if (t.compare) return -t.compare(e);
						if (e.type === t.type) {
							if (e = e.value, t = t.value, !Array.isArray(e)) return e === t ? 0 : void 0;
							if (e.length === t.length) {
								for (var n = 0; n < e.length; n++)
									if (0 !== f.compare(e[n], t[n])) return;
								return 0
							}
						}
					}, f.numericCompare = function (e, t) {
						return e < t ? -1 : e === t ? 0 : e > t ? 1 : void 0
					};
					var h = function (e) {
						function t(t, n, i) {
							var r = e.call(this) || this,
								o = r;
							return Array.isArray(t) ? r.rgb = t : t.length >= 6 ? (r.rgb = [], t.match(/.{2}/g).map((function (e, t) {
								t < 3 ? o.rgb.push(parseInt(e, 16)) : o.alpha = parseInt(e, 16) / 255
							}))) : (r.rgb = [], t.split("").map((function (e, t) {
								t < 3 ? o.rgb.push(parseInt(e + e, 16)) : o.alpha = parseInt(e + e, 16) / 255
							}))), r.alpha = r.alpha || ("number" == typeof n ? n : 1), void 0 !== i && (r.value = i), r
						}
						return s(t, e), t.prototype.luma = function () {
							var e = this.rgb[0] / 255,
								t = this.rgb[1] / 255,
								n = this.rgb[2] / 255;
							return .2126 * (e = e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t = t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (n = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
						}, t.prototype.genCSS = function (e, t) {
							t.add(this.toCSS(e))
						}, t.prototype.toCSS = function (e, t) {
							var n, i, r, o = e && e.compress && !t,
								s = [];
							if (i = this.fround(e, this.alpha), this.value)
								if (0 === this.value.indexOf("rgb")) i < 1 && (r = "rgba");
								else {
									if (0 !== this.value.indexOf("hsl")) return this.value;
									r = i < 1 ? "hsla" : "hsl"
								} else i < 1 && (r = "rgba");
							switch (r) {
							case "rgba":
								s = this.rgb.map((function (e) {
									return p(Math.round(e), 255)
								})).concat(p(i, 1));
								break;
							case "hsla":
								s.push(p(i, 1));
							case "hsl":
								n = this.toHSL(), s = [this.fround(e, n.h), this.fround(e, 100 * n.s) + "%", this.fround(e, 100 * n.l) + "%"].concat(s)
							}
							if (r) return r + "(" + s.join("," + (o ? "" : " ")) + ")";
							if (n = this.toRGB(), o) {
								var a = n.split("");
								a[1] === a[2] && a[3] === a[4] && a[5] === a[6] && (n = "#" + a[1] + a[3] + a[5])
							}
							return n
						}, t.prototype.operate = function (e, n, i) {
							for (var r = new Array(3), o = this.alpha * (1 - i.alpha) + i.alpha, s = 0; s < 3; s++) r[s] = this._operate(e, n, this.rgb[s], i.rgb[s]);
							return new t(r, o)
						}, t.prototype.toRGB = function () {
							return d(this.rgb)
						}, t.prototype.toHSL = function () {
							var e, t, n = this.rgb[0] / 255,
								i = this.rgb[1] / 255,
								r = this.rgb[2] / 255,
								o = this.alpha,
								s = Math.max(n, i, r),
								a = Math.min(n, i, r),
								l = (s + a) / 2,
								u = s - a;
							if (s === a) e = t = 0;
							else {
								switch (t = l > .5 ? u / (2 - s - a) : u / (s + a), s) {
								case n:
									e = (i - r) / u + (i < r ? 6 : 0);
									break;
								case i:
									e = (r - n) / u + 2;
									break;
								case r:
									e = (n - i) / u + 4
								}
								e /= 6
							}
							return {
								h: 360 * e,
								s: t,
								l: l,
								a: o
							}
						}, t.prototype.toHSV = function () {
							var e, t, n = this.rgb[0] / 255,
								i = this.rgb[1] / 255,
								r = this.rgb[2] / 255,
								o = this.alpha,
								s = Math.max(n, i, r),
								a = Math.min(n, i, r),
								l = s,
								u = s - a;
							if (t = 0 === s ? 0 : u / s, s === a) e = 0;
							else {
								switch (s) {
								case n:
									e = (i - r) / u + (i < r ? 6 : 0);
									break;
								case i:
									e = (r - n) / u + 2;
									break;
								case r:
									e = (n - i) / u + 4
								}
								e /= 6
							}
							return {
								h: 360 * e,
								s: t,
								v: l,
								a: o
							}
						}, t.prototype.toARGB = function () {
							return d([255 * this.alpha].concat(this.rgb))
						}, t.prototype.compare = function (e) {
							return e.rgb && e.rgb[0] === this.rgb[0] && e.rgb[1] === this.rgb[1] && e.rgb[2] === this.rgb[2] && e.alpha === this.alpha ? 0 : void 0
						}, t
					}(f);

					function p(e, t) {
						return Math.min(Math.max(e, 0), t)
					}

					function d(e) {
						return "#" + e.map((function (e) {
							return ((e = p(Math.round(e), 255)) < 16 ? "0" : "") + e.toString(16)
						})).join("")
					}
					h.prototype.type = "Color", h.fromKeyword = function (e) {
						var t, n = e.toLowerCase();
						if (l.hasOwnProperty(n) ? t = new h(l[n].slice(1)) : "transparent" === n && (t = new h([0, 0, 0], 0)), t) return t.value = e, t
					};
					var v = function (e) {
						function t(t) {
							var n = e.call(this) || this;
							return n.value = t, n
						}
						return s(t, e), t.prototype.genCSS = function (e, t) {
							t.add("("), this.value.genCSS(e, t), t.add(")")
						}, t.prototype.eval = function (e) {
							return new t(this.value.eval(e))
						}, t
					}(f);
					v.prototype.type = "Paren";
					var m = {
							"": !0,
							" ": !0,
							"|": !0
						},
						g = function (e) {
							function t(t) {
								var n = e.call(this) || this;
								return " " === t ? (n.value = " ", n.emptyOrWhitespace = !0) : (n.value = t ? t.trim() : "", n.emptyOrWhitespace = "" === n.value), n
							}
							return s(t, e), t.prototype.genCSS = function (e, t) {
								var n = e.compress || m[this.value] ? "" : " ";
								t.add(n + this.value + n)
							}, t
						}(f);
					g.prototype.type = "Combinator";
					var y = function (e) {
						function t(t, n, i, r, o, s) {
							var a = e.call(this) || this;
							return a.combinator = t instanceof g ? t : new g(t), a.value = "string" == typeof n ? n.trim() : n || "", a.isVariable = i, a._index = r, a._fileInfo = o, a.copyVisibilityInfo(s), a.setParent(a.combinator, a), a
						}
						return s(t, e), t.prototype.accept = function (e) {
							var t = this.value;
							this.combinator = e.visit(this.combinator), "object" == typeof t && (this.value = e.visit(t))
						}, t.prototype.eval = function (e) {
							return new t(this.combinator, this.value.eval ? this.value.eval(e) : this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo())
						}, t.prototype.clone = function () {
							return new t(this.combinator, this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo())
						}, t.prototype.genCSS = function (e, t) {
							t.add(this.toCSS(e), this.fileInfo(), this.getIndex())
						}, t.prototype.toCSS = function (e) {
							void 0 === e && (e = {});
							var t = this.value,
								n = e.firstSelector;
							return t instanceof v && (e.firstSelector = !0), t = t.toCSS ? t.toCSS(e) : t, e.firstSelector = n, "" === t && "&" === this.combinator.value.charAt(0) ? "" : this.combinator.toCSS(e) + t
						}, t
					}(f);
					y.prototype.type = "Element";
					var b = {
							ALWAYS: 0,
							PARENS_DIVISION: 1,
							PARENS: 2,
							STRICT_LEGACY: 3
						},
						w = 0,
						S = 1,
						C = 2,
						x = function (e, t) {
							return e(t = {
								exports: {}
							}, t.exports), t.exports
						}((function (e) {
							var n = function () {
								function e(e, t) {
									return null != t && e instanceof t
								}
								var n, i, r;
								try {
									n = Map
								} catch (e) {
									n = function () {}
								}
								try {
									i = Set
								} catch (e) {
									i = function () {}
								}
								try {
									r = Promise
								} catch (e) {
									r = function () {}
								}

								function o(s, l, u, c, f) {
									"object" == typeof l && (u = l.depth, c = l.prototype, f = l.includeNonEnumerable, l = l.circular);
									var h = [],
										p = [],
										d = void 0 !== t;
									return void 0 === l && (l = !0), void 0 === u && (u = 1 / 0),
										function s(u, v) {
											if (null === u) return null;
											if (0 === v) return u;
											var m, g;
											if ("object" != typeof u) return u;
											if (e(u, n)) m = new n;
											else if (e(u, i)) m = new i;
											else if (e(u, r)) m = new r((function (e, t) {
												u.then((function (t) {
													e(s(t, v - 1))
												}), (function (e) {
													t(s(e, v - 1))
												}))
											}));
											else if (o.__isArray(u)) m = [];
											else if (o.__isRegExp(u)) m = new RegExp(u.source, a(u)), u.lastIndex && (m.lastIndex = u.lastIndex);
											else if (o.__isDate(u)) m = new Date(u.getTime());
											else {
												if (d && t.isBuffer(u)) return m = t.allocUnsafe ? t.allocUnsafe(u.length) : new t(u.length), u.copy(m), m;
												e(u, Error) ? m = Object.create(u) : void 0 === c ? (g = Object.getPrototypeOf(u), m = Object.create(g)) : (m = Object.create(c), g = c)
											} if (l) {
												var y = h.indexOf(u);
												if (-1 != y) return p[y];
												h.push(u), p.push(m)
											}
											for (var b in e(u, n) && u.forEach((function (e, t) {
												var n = s(t, v - 1),
													i = s(e, v - 1);
												m.set(n, i)
											})), e(u, i) && u.forEach((function (e) {
												var t = s(e, v - 1);
												m.add(t)
											})), u) {
												var w;
												g && (w = Object.getOwnPropertyDescriptor(g, b)), w && null == w.set || (m[b] = s(u[b], v - 1))
											}
											if (Object.getOwnPropertySymbols) {
												var S = Object.getOwnPropertySymbols(u);
												for (b = 0; b < S.length; b++) {
													var C = S[b];
													(!(E = Object.getOwnPropertyDescriptor(u, C)) || E.enumerable || f) && (m[C] = s(u[C], v - 1), E.enumerable || Object.defineProperty(m, C, {
														enumerable: !1
													}))
												}
											}
											if (f) {
												var x = Object.getOwnPropertyNames(u);
												for (b = 0; b < x.length; b++) {
													var E, I = x[b];
													(E = Object.getOwnPropertyDescriptor(u, I)) && E.enumerable || (m[I] = s(u[I], v - 1), Object.defineProperty(m, I, {
														enumerable: !1
													}))
												}
											}
											return m
										}(s, u)
								}

								function s(e) {
									return Object.prototype.toString.call(e)
								}

								function a(e) {
									var t = "";
									return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
								}
								return o.clonePrototype = function (e) {
									if (null === e) return null;
									var t = function () {};
									return t.prototype = e, new t
								}, o.__objToStr = s, o.__isDate = function (e) {
									return "object" == typeof e && "[object Date]" === s(e)
								}, o.__isArray = function (e) {
									return "object" == typeof e && "[object Array]" === s(e)
								}, o.__isRegExp = function (e) {
									return "object" == typeof e && "[object RegExp]" === s(e)
								}, o.__getRegExpFlags = a, o
							}();
							e.exports && (e.exports = n)
						}));

					function E(e, t) {
						for (var n = e + 1, i = null, r = -1; --n >= 0 && "\n" !== t.charAt(n);) r++;
						return "number" == typeof e && (i = (t.slice(0, e).match(/\n/g) || "").length), {
							line: i,
							column: r
						}
					}

					function I(e) {
						var t, n = e.length,
							i = new Array(n);
						for (t = 0; t < n; t++) i[t] = e[t];
						return i
					}

					function _(e) {
						var t = {};
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
						return t
					}

					function A(e, t) {
						var n = t || {};
						if (!t._defaults) {
							n = {};
							var i = x(e);
							n._defaults = i;
							var r = t ? x(t) : {};
							Object.assign(n, i, r)
						}
						return n
					}

					function k(e, t) {
						if (t && t._defaults) return t;
						var n = A(e, t);
						if (n.strictMath && (n.math = b.STRICT_LEGACY), n.relativeUrls && (n.rewriteUrls = C), "string" == typeof n.math) switch (n.math.toLowerCase()) {
						case "always":
							n.math = b.ALWAYS;
							break;
						case "parens-division":
							n.math = b.PARENS_DIVISION;
							break;
						case "strict":
						case "parens":
							n.math = b.PARENS;
							break;
						case "strict-legacy":
							n.math = b.STRICT_LEGACY
						}
						if ("string" == typeof n.rewriteUrls) switch (n.rewriteUrls.toLowerCase()) {
						case "off":
							n.rewriteUrls = w;
							break;
						case "local":
							n.rewriteUrls = S;
							break;
						case "all":
							n.rewriteUrls = C
						}
						return n
					}

					function R(e, t) {
						void 0 === t && (t = []);
						for (var n = 0, i = e.length; n < i; n++) {
							var r = e[n];
							Array.isArray(r) ? R(r, t) : void 0 !== r && t.push(r)
						}
						return t
					}
					var T = Object.freeze({
							__proto__: null,
							getLocation: E,
							copyArray: I,
							clone: _,
							defaults: A,
							copyOptions: k,
							merge: function (e, t) {
								for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
								return e
							},
							flattenArray: R
						}),
						P = /(<anonymous>|Function):(\d+):(\d+)/,
						O = function (e, t, n) {
							Error.call(this);
							var i = e.filename || n;
							if (this.message = e.message, this.stack = e.stack, t && i) {
								var r = t.contents[i],
									o = E(e.index, r),
									s = o.line,
									a = o.column,
									l = e.call && E(e.call, r).line,
									u = r ? r.split("\n") : "";
								if (this.type = e.type || "Syntax", this.filename = i, this.index = e.index, this.line = "number" == typeof s ? s + 1 : null, this.column = a, !this.line && this.stack) {
									var c = this.stack.match(P),
										f = new Function("a", "throw new Error()"),
										h = 0;
									try {
										f()
									} catch (e) {
										var p = e.stack.match(P);
										h = 1 - parseInt(p[2])
									}
									c && (c[2] && (this.line = parseInt(c[2]) + h), c[3] && (this.column = parseInt(c[3])))
								}
								this.callLine = l + 1, this.callExtract = u[l], this.extract = [u[this.line - 2], u[this.line - 1], u[this.line]]
							}
						};
					if (void 0 === Object.create) {
						var M = function () {};
						M.prototype = Error.prototype, O.prototype = new M
					} else O.prototype = Object.create(Error.prototype);
					O.prototype.constructor = O, O.prototype.toString = function (e) {
						void 0 === e && (e = {});
						var t = "",
							n = this.extract || [],
							i = [],
							r = function (e) {
								return e
							};
						if (e.stylize) {
							var o = typeof e.stylize;
							if ("function" !== o) throw Error("options.stylize should be a function, got a " + o + "!");
							r = e.stylize
						}
						if (null !== this.line) {
							if ("string" == typeof n[0] && i.push(r(this.line - 1 + " " + n[0], "grey")), "string" == typeof n[1]) {
								var s = this.line + " ";
								n[1] && (s += n[1].slice(0, this.column) + r(r(r(n[1].substr(this.column, 1), "bold") + n[1].slice(this.column + 1), "red"), "inverse")), i.push(s)
							}
							"string" == typeof n[2] && i.push(r(this.line + 1 + " " + n[2], "grey")), i = i.join("\n") + r("", "reset") + "\n"
						}
						return t += r(this.type + "Error: " + this.message, "red"), this.filename && (t += r(" in ", "red") + this.filename), this.line && (t += r(" on line " + this.line + ", column " + (this.column + 1) + ":", "grey")), t += "\n" + i, this.callLine && (t += r("from ", "red") + (this.filename || "") + "/n", t += r(this.callLine, "grey") + " " + this.callExtract + "/n"), t
					};
					var N = function (e) {
						function t(t, n, i, r, o, s) {
							var a = e.call(this) || this;
							return a.extendList = n, a.condition = i, a.evaldCondition = !i, a._index = r, a._fileInfo = o, a.elements = a.getElements(t), a.mixinElements_ = void 0, a.copyVisibilityInfo(s), a.setParent(a.elements, a), a
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.elements && (this.elements = e.visitArray(this.elements)), this.extendList && (this.extendList = e.visitArray(this.extendList)), this.condition && (this.condition = e.visit(this.condition))
						}, t.prototype.createDerived = function (e, n, i) {
							var r = new t(e = this.getElements(e), n || this.extendList, null, this.getIndex(), this.fileInfo(), this.visibilityInfo());
							return r.evaldCondition = null != i ? i : this.evaldCondition, r.mediaEmpty = this.mediaEmpty, r
						}, t.prototype.getElements = function (e) {
							return e ? ("string" == typeof e && this.parse.parseNode(e, ["selector"], this._index, this._fileInfo, (function (t, n) {
								if (t) throw new O({
									index: t.index,
									message: t.message
								}, this.parse.imports, this._fileInfo.filename);
								e = n[0].elements
							})), e) : [new y("", "&", !1, this._index, this._fileInfo)]
						}, t.prototype.createEmptySelectors = function () {
							var e = [new t([new y("", "&", !1, this._index, this._fileInfo)], null, null, this._index, this._fileInfo)];
							return e[0].mediaEmpty = !0, e
						}, t.prototype.match = function (e) {
							var t, n, i = this.elements,
								r = i.length;
							if (0 === (t = (e = e.mixinElements()).length) || r < t) return 0;
							for (n = 0; n < t; n++)
								if (i[n].value !== e[n]) return 0;
							return t
						}, t.prototype.mixinElements = function () {
							if (this.mixinElements_) return this.mixinElements_;
							var e = this.elements.map((function (e) {
								return e.combinator.value + (e.value.value || e.value)
							})).join("").match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);
							return e ? "&" === e[0] && e.shift() : e = [], this.mixinElements_ = e
						}, t.prototype.isJustParentSelector = function () {
							return !this.mediaEmpty && 1 === this.elements.length && "&" === this.elements[0].value && (" " === this.elements[0].combinator.value || "" === this.elements[0].combinator.value)
						}, t.prototype.eval = function (e) {
							var t = this.condition && this.condition.eval(e),
								n = this.elements,
								i = this.extendList;
							return n = n && n.map((function (t) {
								return t.eval(e)
							})), i = i && i.map((function (t) {
								return t.eval(e)
							})), this.createDerived(n, i, t)
						}, t.prototype.genCSS = function (e, t) {
							var n;
							for (e && e.firstSelector || "" !== this.elements[0].combinator.value || t.add(" ", this.fileInfo(), this.getIndex()), n = 0; n < this.elements.length; n++) this.elements[n].genCSS(e, t)
						}, t.prototype.getIsOutput = function () {
							return this.evaldCondition
						}, t
					}(f);
					N.prototype.type = "Selector";
					var L = function (e) {
						function t(t) {
							var n = e.call(this) || this;
							if (!t) throw new Error("Value requires an array argument");
							return Array.isArray(t) ? n.value = t : n.value = [t], n
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.value && (this.value = e.visitArray(this.value))
						}, t.prototype.eval = function (e) {
							return 1 === this.value.length ? this.value[0].eval(e) : new t(this.value.map((function (t) {
								return t.eval(e)
							})))
						}, t.prototype.genCSS = function (e, t) {
							var n;
							for (n = 0; n < this.value.length; n++) this.value[n].genCSS(e, t), n + 1 < this.value.length && t.add(e && e.compress ? "," : ", ")
						}, t
					}(f);
					L.prototype.type = "Value";
					var F = function (e) {
						function t(t) {
							var n = e.call(this) || this;
							return n.value = t, n
						}
						return s(t, e), t.prototype.genCSS = function (e, t) {
							if ("%" === this.value) throw {
								type: "Syntax",
								message: "Invalid % without number"
							};
							t.add(this.value)
						}, t
					}(f);
					F.prototype.type = "Keyword", F.True = new F("true"), F.False = new F("false");
					var D = function (e) {
						function t(t, n, i, r, o, s) {
							var a = e.call(this) || this;
							return a.value = t, a._index = n, a._fileInfo = i, a.mapLines = r, a.rulesetLike = void 0 !== o && o, a.allowRoot = !0, a.copyVisibilityInfo(s), a
						}
						return s(t, e), t.prototype.eval = function () {
							return new t(this.value, this._index, this._fileInfo, this.mapLines, this.rulesetLike, this.visibilityInfo())
						}, t.prototype.compare = function (e) {
							return e.toCSS && this.toCSS() === e.toCSS() ? 0 : void 0
						}, t.prototype.isRulesetLike = function () {
							return this.rulesetLike
						}, t.prototype.genCSS = function (e, t) {
							this.nodeVisible = Boolean(this.value), this.nodeVisible && t.add(this.value, this._fileInfo, this._index, this.mapLines)
						}, t
					}(f);
					D.prototype.type = "Anonymous";
					var B = b,
						V = function (e) {
							function t(t, n, i, r, o, s, a, l) {
								var u = e.call(this) || this;
								return u.name = t, u.value = n instanceof f ? n : new L([n ? new D(n) : null]), u.important = i ? " " + i.trim() : "", u.merge = r, u._index = o, u._fileInfo = s, u.inline = a || !1, u.variable = void 0 !== l ? l : t.charAt && "@" === t.charAt(0), u.allowRoot = !0, u.setParent(u.value, u), u
							}
							return s(t, e), t.prototype.genCSS = function (e, t) {
								t.add(this.name + (e.compress ? ":" : ": "), this.fileInfo(), this.getIndex());
								try {
									this.value.genCSS(e, t)
								} catch (e) {
									throw e.index = this._index, e.filename = this._fileInfo.filename, e
								}
								t.add(this.important + (this.inline || e.lastRule && e.compress ? "" : ";"), this._fileInfo, this._index)
							}, t.prototype.eval = function (e) {
								var n, i, r = !1,
									o = this.name,
									s = this.variable;
								"string" != typeof o && (o = 1 === o.length && o[0] instanceof F ? o[0].value : function (e, t) {
									var n, i = "",
										r = t.length,
										o = {
											add: function (e) {
												i += e
											}
										};
									for (n = 0; n < r; n++) t[n].eval(e).genCSS(e, o);
									return i
								}(e, o), s = !1), "font" === o && e.math === B.ALWAYS && (r = !0, n = e.math, e.math = B.PARENS_DIVISION);
								try {
									if (e.importantScope.push({}), i = this.value.eval(e), !this.variable && "DetachedRuleset" === i.type) throw {
										message: "Rulesets cannot be evaluated on a property.",
										index: this.getIndex(),
										filename: this.fileInfo().filename
									};
									var a = this.important,
										l = e.importantScope.pop();
									return !a && l.important && (a = l.important), new t(o, i, a, this.merge, this.getIndex(), this.fileInfo(), this.inline, s)
								} catch (e) {
									throw "number" != typeof e.index && (e.index = this.getIndex(), e.filename = this.fileInfo().filename), e
								} finally {
									r && (e.math = n)
								}
							}, t.prototype.makeImportant = function () {
								return new t(this.name, this.value, "!important", this.merge, this.getIndex(), this.fileInfo(), this.inline)
							}, t
						}(f);
					V.prototype.type = "Declaration";
					var U = function (e, t, n) {
						var i = "";
						if (e.dumpLineNumbers && !e.compress) switch (e.dumpLineNumbers) {
						case "comments":
							i = U.asComment(t);
							break;
						case "mediaquery":
							i = U.asMediaQuery(t);
							break;
						case "all":
							i = U.asComment(t) + (n || "") + U.asMediaQuery(t)
						}
						return i
					};
					U.asComment = function (e) {
						return e.debugInfo ? "/* line " + e.debugInfo.lineNumber + ", " + e.debugInfo.fileName + " */\n" : ""
					}, U.asMediaQuery = function (e) {
						if (!e.debugInfo) return "";
						var t = e.debugInfo.fileName;
						return /^[a-z]+:\/\//i.test(t) || (t = "file://" + t), "@media -sass-debug-info{filename{font-family:" + t.replace(/([.:\/\\])/g, (function (e) {
							return "\\" == e && (e = "/"), "\\" + e
						})) + "}line{font-family:\\00003" + e.debugInfo.lineNumber + "}}\n"
					};
					var $ = function (e) {
						function t(t, n, i, r) {
							var o = e.call(this) || this;
							return o.value = t, o.isLineComment = n, o._index = i, o._fileInfo = r, o.allowRoot = !0, o
						}
						return s(t, e), t.prototype.genCSS = function (e, t) {
							this.debugInfo && t.add(U(e, this), this.fileInfo(), this.getIndex()), t.add(this.value)
						}, t.prototype.isSilent = function (e) {
							var t = e.compress && "!" !== this.value[2];
							return this.isLineComment || t
						}, t
					}(f);
					$.prototype.type = "Comment";
					var j = {},
						q = function (e, t, n) {
							if (e)
								for (var i = 0; i < n.length; i++) e.hasOwnProperty(n[i]) && (t[n[i]] = e[n[i]])
						},
						Y = ["paths", "rewriteUrls", "rootpath", "strictImports", "insecure", "dumpLineNumbers", "compress", "syncImport", "chunkInput", "mime", "useFileCache", "processImports", "pluginManager"];
					j.Parse = function (e) {
						q(e, this, Y), "string" == typeof this.paths && (this.paths = [this.paths])
					};
					var z = ["paths", "compress", "math", "strictUnits", "sourceMap", "importMultiple", "urlArgs", "javascriptEnabled", "pluginManager", "importantScope", "rewriteUrls"];

					function G(e) {
						return !/^(?:[a-z-]+:|\/|#)/i.test(e)
					}

					function W(e) {
						return "." === e.charAt(0)
					}
					j.Eval = function () {
						function e(e, t) {
							q(e, this, z), "string" == typeof this.paths && (this.paths = [this.paths]), this.frames = t || [], this.importantScope = this.importantScope || [], this.inCalc = !1, this.mathOn = !0
						}
						return e.prototype.enterCalc = function () {
							this.calcStack || (this.calcStack = []), this.calcStack.push(!0), this.inCalc = !0
						}, e.prototype.exitCalc = function () {
							this.calcStack.pop(), this.calcStack.length || (this.inCalc = !1)
						}, e.prototype.inParenthesis = function () {
							this.parensStack || (this.parensStack = []), this.parensStack.push(!0)
						}, e.prototype.outOfParenthesis = function () {
							this.parensStack.pop()
						}, e.prototype.isMathOn = function (e) {
							return !!this.mathOn && !!("/" !== e || this.math === b.ALWAYS || this.parensStack && this.parensStack.length) && (!(this.math > b.PARENS_DIVISION) || this.parensStack && this.parensStack.length)
						}, e.prototype.pathRequiresRewrite = function (e) {
							return (this.rewriteUrls === S ? W : G)(e)
						}, e.prototype.rewritePath = function (e, t) {
							var n;
							return t = t || "", n = this.normalizePath(t + e), W(e) && G(t) && !1 === W(n) && (n = "./" + n), n
						}, e.prototype.normalizePath = function (e) {
							var t, n = e.split("/").reverse();
							for (e = []; 0 !== n.length;) switch (t = n.pop()) {
							case ".":
								break;
							case "..":
								0 === e.length || ".." === e[e.length - 1] ? e.push(t) : e.pop();
								break;
							default:
								e.push(t)
							}
							return e.join("/")
						}, e
					}();
					var H = function e(t) {
							return {
								_data: {},
								add: function (e, t) {
									e = e.toLowerCase(), this._data.hasOwnProperty(e), this._data[e] = t
								},
								addMultiple: function (e) {
									var t = this;
									Object.keys(e).forEach((function (n) {
										t.add(n, e[n])
									}))
								},
								get: function (e) {
									return this._data[e] || t && t.get(e)
								},
								getLocalFunctions: function () {
									return this._data
								},
								inherit: function () {
									return e(this)
								},
								create: function (t) {
									return e(t)
								}
							}
						}(null),
						K = {
							eval: function () {
								var e = this.value_,
									t = this.error_;
								if (t) throw t;
								if (null != e) return e ? F.True : F.False
							},
							value: function (e) {
								this.value_ = e
							},
							error: function (e) {
								this.error_ = e
							},
							reset: function () {
								this.value_ = this.error_ = null
							}
						},
						J = function (e) {
							function t(t, n, i, r) {
								var o = e.call(this) || this;
								return o.selectors = t, o.rules = n, o._lookups = {}, o._variables = null, o._properties = null, o.strictImports = i, o.copyVisibilityInfo(r), o.allowRoot = !0, o.setParent(o.selectors, o), o.setParent(o.rules, o), o
							}
							return s(t, e), t.prototype.isRulesetLike = function () {
								return !0
							}, t.prototype.accept = function (e) {
								this.paths ? this.paths = e.visitArray(this.paths, !0) : this.selectors && (this.selectors = e.visitArray(this.selectors)), this.rules && this.rules.length && (this.rules = e.visitArray(this.rules))
							}, t.prototype.eval = function (e) {
								var n, i, r, o, s, a = !1;
								if (this.selectors && (i = this.selectors.length)) {
									for (n = new Array(i), K.error({
										type: "Syntax",
										message: "it is currently only allowed in parametric mixin guards,"
									}), o = 0; o < i; o++) {
										r = this.selectors[o].eval(e);
										for (var l = 0; l < r.elements.length; l++)
											if (r.elements[l].isVariable) {
												s = !0;
												break
											}
										n[o] = r, r.evaldCondition && (a = !0)
									}
									if (s) {
										var u = new Array(i);
										for (o = 0; o < i; o++) r = n[o], u[o] = r.toCSS(e);
										this.parse.parseNode(u.join(","), ["selectors"], n[0].getIndex(), n[0].fileInfo(), (function (e, t) {
											t && (n = R(t))
										}))
									}
									K.reset()
								} else a = !0;
								var c, h, p = this.rules ? I(this.rules) : null,
									d = new t(n, p, this.strictImports, this.visibilityInfo());
								d.originalRuleset = this, d.root = this.root, d.firstRoot = this.firstRoot, d.allowImports = this.allowImports, this.debugInfo && (d.debugInfo = this.debugInfo), a || (p.length = 0), d.functionRegistry = function (e) {
									for (var t, n = 0, i = e.length; n !== i; ++n)
										if (t = e[n].functionRegistry) return t;
									return H
								}(e.frames).inherit();
								var v = e.frames;
								v.unshift(d);
								var m = e.selectors;
								m || (e.selectors = m = []), m.unshift(this.selectors), (d.root || d.allowImports || !d.strictImports) && d.evalImports(e);
								var g = d.rules;
								for (o = 0; c = g[o]; o++) c.evalFirst && (g[o] = c.eval(e));
								var y = e.mediaBlocks && e.mediaBlocks.length || 0;
								for (o = 0; c = g[o]; o++) "MixinCall" === c.type ? (p = c.eval(e).filter((function (e) {
									return !(e instanceof V && e.variable && d.variable(e.name))
								})), g.splice.apply(g, [o, 1].concat(p)), o += p.length - 1, d.resetCache()) : "VariableCall" === c.type && (p = c.eval(e).rules.filter((function (e) {
									return !(e instanceof V && e.variable)
								})), g.splice.apply(g, [o, 1].concat(p)), o += p.length - 1, d.resetCache());
								for (o = 0; c = g[o]; o++) c.evalFirst || (g[o] = c = c.eval ? c.eval(e) : c);
								for (o = 0; c = g[o]; o++)
									if (c instanceof t && c.selectors && 1 === c.selectors.length && c.selectors[0] && c.selectors[0].isJustParentSelector())
										for (g.splice(o--, 1), l = 0; h = c.rules[l]; l++) h instanceof f && (h.copyVisibilityInfo(c.visibilityInfo()), h instanceof V && h.variable || g.splice(++o, 0, h));
								if (v.shift(), m.shift(), e.mediaBlocks)
									for (o = y; o < e.mediaBlocks.length; o++) e.mediaBlocks[o].bubbleSelectors(n);
								return d
							}, t.prototype.evalImports = function (e) {
								var t, n, i = this.rules;
								if (i)
									for (t = 0; t < i.length; t++) "Import" === i[t].type && ((n = i[t].eval(e)) && (n.length || 0 === n.length) ? (i.splice.apply(i, [t, 1].concat(n)), t += n.length - 1) : i.splice(t, 1, n), this.resetCache())
							}, t.prototype.makeImportant = function () {
								return new t(this.selectors, this.rules.map((function (e) {
									return e.makeImportant ? e.makeImportant() : e
								})), this.strictImports, this.visibilityInfo())
							}, t.prototype.matchArgs = function (e) {
								return !e || 0 === e.length
							}, t.prototype.matchCondition = function (e, t) {
								var n = this.selectors[this.selectors.length - 1];
								return !(!n.evaldCondition || n.condition && !n.condition.eval(new j.Eval(t, t.frames)))
							}, t.prototype.resetCache = function () {
								this._rulesets = null, this._variables = null, this._properties = null, this._lookups = {}
							}, t.prototype.variables = function () {
								return this._variables || (this._variables = this.rules ? this.rules.reduce((function (e, t) {
									if (t instanceof V && !0 === t.variable && (e[t.name] = t), "Import" === t.type && t.root && t.root.variables) {
										var n = t.root.variables();
										for (var i in n) n.hasOwnProperty(i) && (e[i] = t.root.variable(i))
									}
									return e
								}), {}) : {}), this._variables
							}, t.prototype.properties = function () {
								return this._properties || (this._properties = this.rules ? this.rules.reduce((function (e, t) {
									if (t instanceof V && !0 !== t.variable) {
										var n = 1 === t.name.length && t.name[0] instanceof F ? t.name[0].value : t.name;
										e["$" + n] ? e["$" + n].push(t) : e["$" + n] = [t]
									}
									return e
								}), {}) : {}), this._properties
							}, t.prototype.variable = function (e) {
								var t = this.variables()[e];
								if (t) return this.parseValue(t)
							}, t.prototype.property = function (e) {
								var t = this.properties()[e];
								if (t) return this.parseValue(t)
							}, t.prototype.lastDeclaration = function () {
								for (var e = this.rules.length; e > 0; e--) {
									var t = this.rules[e - 1];
									if (t instanceof V) return this.parseValue(t)
								}
							}, t.prototype.parseValue = function (e) {
								var t = this;

								function n(e) {
									return e.value instanceof D && !e.parsed ? ("string" == typeof e.value.value ? this.parse.parseNode(e.value.value, ["value", "important"], e.value.getIndex(), e.fileInfo(), (function (t, n) {
										t && (e.parsed = !0), n && (e.value = n[0], e.important = n[1] || "", e.parsed = !0)
									})) : e.parsed = !0, e) : e
								}
								if (Array.isArray(e)) {
									var i = [];
									return e.forEach((function (e) {
										i.push(n.call(t, e))
									})), i
								}
								return n.call(t, e)
							}, t.prototype.rulesets = function () {
								if (!this.rules) return [];
								var e, t, n = [],
									i = this.rules;
								for (e = 0; t = i[e]; e++) t.isRuleset && n.push(t);
								return n
							}, t.prototype.prependRule = function (e) {
								var t = this.rules;
								t ? t.unshift(e) : this.rules = [e], this.setParent(e, this)
							}, t.prototype.find = function (e, t, n) {
								void 0 === t && (t = this);
								var i, r, o = [],
									s = e.toCSS();
								return s in this._lookups ? this._lookups[s] : (this.rulesets().forEach((function (s) {
									if (s !== t)
										for (var a = 0; a < s.selectors.length; a++)
											if (i = e.match(s.selectors[a])) {
												if (e.elements.length > i) {
													if (!n || n(s)) {
														r = s.find(new N(e.elements.slice(i)), t, n);
														for (var l = 0; l < r.length; ++l) r[l].path.push(s);
														Array.prototype.push.apply(o, r)
													}
												} else o.push({
													rule: s,
													path: []
												});
												break
											}
								})), this._lookups[s] = o, o)
							}, t.prototype.genCSS = function (e, t) {
								var n, i, r, o, s, a = [];
								e.tabLevel = e.tabLevel || 0, this.root || e.tabLevel++;
								var l, u = e.compress ? "" : Array(e.tabLevel + 1).join("  "),
									c = e.compress ? "" : Array(e.tabLevel).join("  "),
									f = 0,
									h = 0;
								for (n = 0; o = this.rules[n]; n++) o instanceof $ ? (h === n && h++, a.push(o)) : o.isCharset && o.isCharset() ? (a.splice(f, 0, o), f++, h++) : "Import" === o.type ? (a.splice(h, 0, o), h++) : a.push(o);
								if (a = [].concat(a), !this.root) {
									(r = U(e, this, c)) && (t.add(r), t.add(c));
									var p = this.paths,
										d = p.length,
										v = void 0;
									for (l = e.compress ? "," : ",\n" + c, n = 0; n < d; n++)
										if (v = (s = p[n]).length)
											for (n > 0 && t.add(l), e.firstSelector = !0, s[0].genCSS(e, t), e.firstSelector = !1, i = 1; i < v; i++) s[i].genCSS(e, t);
									t.add((e.compress ? "{" : " {\n") + u)
								}
								for (n = 0; o = a[n]; n++) {
									n + 1 === a.length && (e.lastRule = !0);
									var m = e.lastRule;
									o.isRulesetLike(o) && (e.lastRule = !1), o.genCSS ? o.genCSS(e, t) : o.value && t.add(o.value.toString()), e.lastRule = m, !e.lastRule && o.isVisible() ? t.add(e.compress ? "" : "\n" + u) : e.lastRule = !1
								}
								this.root || (t.add(e.compress ? "}" : "\n" + c + "}"), e.tabLevel--), t.isEmpty() || e.compress || !this.firstRoot || t.add("\n")
							}, t.prototype.joinSelectors = function (e, t, n) {
								for (var i = 0; i < n.length; i++) this.joinSelector(e, t, n[i])
							}, t.prototype.joinSelector = function (e, t, n) {
								function i(e, t) {
									var n, i;
									if (0 === e.length) n = new v(e[0]);
									else {
										var r = new Array(e.length);
										for (i = 0; i < e.length; i++) r[i] = new y(null, e[i], t.isVariable, t._index, t._fileInfo);
										n = new v(new N(r))
									}
									return n
								}

								function r(e, t) {
									var n;
									return n = new y(null, e, t.isVariable, t._index, t._fileInfo), new N([n])
								}

								function o(e, t, n, i) {
									var r, o, s;
									if (r = [], e.length > 0 ? (o = (r = I(e)).pop(), s = i.createDerived(I(o.elements))) : s = i.createDerived([]), t.length > 0) {
										var a = n.combinator,
											l = t[0].elements[0];
										a.emptyOrWhitespace && !l.combinator.emptyOrWhitespace && (a = l.combinator), s.elements.push(new y(a, l.value, n.isVariable, n._index, n._fileInfo)), s.elements = s.elements.concat(t[0].elements.slice(1))
									}
									if (0 !== s.elements.length && r.push(s), t.length > 1) {
										var u = t.slice(1);
										u = u.map((function (e) {
											return e.createDerived(e.elements, [])
										})), r = r.concat(u)
									}
									return r
								}

								function s(e, t, n, i, r) {
									var s;
									for (s = 0; s < e.length; s++) {
										var a = o(e[s], t, n, i);
										r.push(a)
									}
									return r
								}

								function a(e, t) {
									var n, i;
									if (0 !== e.length)
										if (0 !== t.length)
											for (n = 0; i = t[n]; n++) i.length > 0 ? i[i.length - 1] = i[i.length - 1].createDerived(i[i.length - 1].elements.concat(e)) : i.push(new N(e));
										else t.push([new N(e)])
								}

								function l(e, t) {
									var n = t.createDerived(t.elements, t.extendList, t.evaldCondition);
									return n.copyVisibilityInfo(e), n
								}
								var u, c;
								if (! function e(t, n, l) {
									var u, c, f, h, p, d, m, g, b, w, S, C, x = !1;
									for (h = [], p = [
										[]
									], u = 0; g = l.elements[u]; u++)
										if ("&" !== g.value) {
											var E = (C = void 0, (S = g).value instanceof v && (C = S.value.value) instanceof N ? C : null);
											if (null != E) {
												a(h, p);
												var I, _ = [],
													A = [];
												for (I = e(_, n, E), x = x || I, f = 0; f < _.length; f++) s(p, [r(i(_[f], g), g)], g, l, A);
												p = A, h = []
											} else h.push(g)
										} else {
											for (x = !0, d = [], a(h, p), c = 0; c < p.length; c++)
												if (m = p[c], 0 === n.length) m.length > 0 && m[0].elements.push(new y(g.combinator, "", g.isVariable, g._index, g._fileInfo)), d.push(m);
												else
													for (f = 0; f < n.length; f++) {
														var k = o(m, n[f], g, l);
														d.push(k)
													}
												p = d, h = []
										}
									for (a(h, p), u = 0; u < p.length; u++)(b = p[u].length) > 0 && (t.push(p[u]), w = p[u][b - 1], p[u][b - 1] = w.createDerived(w.elements, l.extendList));
									return x
								}(c = [], t, n))
									if (t.length > 0)
										for (c = [], u = 0; u < t.length; u++) {
											var f = t[u].map(l.bind(this, n.visibilityInfo()));
											f.push(n), c.push(f)
										} else c = [
											[n]
										];
								for (u = 0; u < c.length; u++) e.push(c[u])
							}, t
						}(f);
					J.prototype.type = "Ruleset", J.prototype.isRuleset = !0;
					var Q = function (e) {
						function t(t, n, i, r, o, s, a, l) {
							var u, c = e.call(this) || this;
							if (c.name = t, c.value = n instanceof f ? n : n ? new D(n) : n, i) {
								for (Array.isArray(i) ? c.rules = i : (c.rules = [i], c.rules[0].selectors = new N([], null, null, r, o).createEmptySelectors()), u = 0; u < c.rules.length; u++) c.rules[u].allowImports = !0;
								c.setParent(c.rules, c)
							}
							return c._index = r, c._fileInfo = o, c.debugInfo = s, c.isRooted = a || !1, c.copyVisibilityInfo(l), c.allowRoot = !0, c
						}
						return s(t, e), t.prototype.accept = function (e) {
							var t = this.value,
								n = this.rules;
							n && (this.rules = e.visitArray(n)), t && (this.value = e.visit(t))
						}, t.prototype.isRulesetLike = function () {
							return this.rules || !this.isCharset()
						}, t.prototype.isCharset = function () {
							return "@charset" === this.name
						}, t.prototype.genCSS = function (e, t) {
							var n = this.value,
								i = this.rules;
							t.add(this.name, this.fileInfo(), this.getIndex()), n && (t.add(" "), n.genCSS(e, t)), i ? this.outputRuleset(e, t, i) : t.add(";")
						}, t.prototype.eval = function (e) {
							var n, i, r = this.value,
								o = this.rules;
							return n = e.mediaPath, i = e.mediaBlocks, e.mediaPath = [], e.mediaBlocks = [], r && (r = r.eval(e)), o && ((o = [o[0].eval(e)])[0].root = !0), e.mediaPath = n, e.mediaBlocks = i, new t(this.name, r, o, this.getIndex(), this.fileInfo(), this.debugInfo, this.isRooted, this.visibilityInfo())
						}, t.prototype.variable = function (e) {
							if (this.rules) return J.prototype.variable.call(this.rules[0], e)
						}, t.prototype.find = function () {
							for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
							if (this.rules) return J.prototype.find.apply(this.rules[0], e)
						}, t.prototype.rulesets = function () {
							if (this.rules) return J.prototype.rulesets.apply(this.rules[0])
						}, t.prototype.outputRuleset = function (e, t, n) {
							var i, r = n.length;
							if (e.tabLevel = 1 + (0 | e.tabLevel), e.compress) {
								for (t.add("{"), i = 0; i < r; i++) n[i].genCSS(e, t);
								return t.add("}"), void e.tabLevel--
							}
							var o = "\n" + Array(e.tabLevel).join("  "),
								s = o + "  ";
							if (r) {
								for (t.add(" {" + s), n[0].genCSS(e, t), i = 1; i < r; i++) t.add(s), n[i].genCSS(e, t);
								t.add(o + "}")
							} else t.add(" {" + o + "}");
							e.tabLevel--
						}, t
					}(f);
					Q.prototype.type = "AtRule";
					var Z = function (e) {
						function t(t, n) {
							var i = e.call(this) || this;
							return i.ruleset = t, i.frames = n, i.setParent(i.ruleset, i), i
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.ruleset = e.visit(this.ruleset)
						}, t.prototype.eval = function (e) {
							var n = this.frames || I(e.frames);
							return new t(this.ruleset, n)
						}, t.prototype.callEval = function (e) {
							return this.ruleset.eval(this.frames ? new j.Eval(e, this.frames.concat(e.frames)) : e)
						}, t
					}(f);
					Z.prototype.type = "DetachedRuleset", Z.prototype.evalFirst = !0;
					var X = function (e) {
						function t(t, n, i) {
							var r = e.call(this) || this;
							return r.numerator = t ? I(t).sort() : [], r.denominator = n ? I(n).sort() : [], i ? r.backupUnit = i : t && t.length && (r.backupUnit = t[0]), r
						}
						return s(t, e), t.prototype.clone = function () {
							return new t(I(this.numerator), I(this.denominator), this.backupUnit)
						}, t.prototype.genCSS = function (e, t) {
							var n = e && e.strictUnits;
							1 === this.numerator.length ? t.add(this.numerator[0]) : !n && this.backupUnit ? t.add(this.backupUnit) : !n && this.denominator.length && t.add(this.denominator[0])
						}, t.prototype.toString = function () {
							var e, t = this.numerator.join("*");
							for (e = 0; e < this.denominator.length; e++) t += "/" + this.denominator[e];
							return t
						}, t.prototype.compare = function (e) {
							return this.is(e.toString()) ? 0 : void 0
						}, t.prototype.is = function (e) {
							return this.toString().toUpperCase() === e.toUpperCase()
						}, t.prototype.isLength = function () {
							return RegExp("^(px|em|ex|ch|rem|in|cm|mm|pc|pt|ex|vw|vh|vmin|vmax)$", "gi").test(this.toCSS())
						}, t.prototype.isEmpty = function () {
							return 0 === this.numerator.length && 0 === this.denominator.length
						}, t.prototype.isSingular = function () {
							return this.numerator.length <= 1 && 0 === this.denominator.length
						}, t.prototype.map = function (e) {
							var t;
							for (t = 0; t < this.numerator.length; t++) this.numerator[t] = e(this.numerator[t], !1);
							for (t = 0; t < this.denominator.length; t++) this.denominator[t] = e(this.denominator[t], !0)
						}, t.prototype.usedUnits = function () {
							var e, t, n, i = {};
							for (n in t = function (t) {
								return e.hasOwnProperty(t) && !i[n] && (i[n] = t), t
							}, u) u.hasOwnProperty(n) && (e = u[n], this.map(t));
							return i
						}, t.prototype.cancel = function () {
							var e, t, n = {};
							for (t = 0; t < this.numerator.length; t++) n[e = this.numerator[t]] = (n[e] || 0) + 1;
							for (t = 0; t < this.denominator.length; t++) n[e = this.denominator[t]] = (n[e] || 0) - 1;
							for (e in this.numerator = [], this.denominator = [], n)
								if (n.hasOwnProperty(e)) {
									var i = n[e];
									if (i > 0)
										for (t = 0; t < i; t++) this.numerator.push(e);
									else if (i < 0)
										for (t = 0; t < -i; t++) this.denominator.push(e)
								}
							this.numerator.sort(), this.denominator.sort()
						}, t
					}(f);
					X.prototype.type = "Unit";
					var ee = function (e) {
						function t(t, n) {
							var i = e.call(this) || this;
							if (i.value = parseFloat(t), isNaN(i.value)) throw new Error("Dimension is not a number.");
							return i.unit = n && n instanceof X ? n : new X(n ? [n] : void 0), i.setParent(i.unit, i), i
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.unit = e.visit(this.unit)
						}, t.prototype.eval = function (e) {
							return this
						}, t.prototype.toColor = function () {
							return new h([this.value, this.value, this.value])
						}, t.prototype.genCSS = function (e, t) {
							if (e && e.strictUnits && !this.unit.isSingular()) throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: " + this.unit.toString());
							var n = this.fround(e, this.value),
								i = String(n);
							if (0 !== n && n < 1e-6 && n > -1e-6 && (i = n.toFixed(20).replace(/0+$/, "")), e && e.compress) {
								if (0 === n && this.unit.isLength()) return void t.add(i);
								n > 0 && n < 1 && (i = i.substr(1))
							}
							t.add(i), this.unit.genCSS(e, t)
						}, t.prototype.operate = function (e, n, i) {
							var r = this._operate(e, n, this.value, i.value),
								o = this.unit.clone();
							if ("+" === n || "-" === n)
								if (0 === o.numerator.length && 0 === o.denominator.length) o = i.unit.clone(), this.unit.backupUnit && (o.backupUnit = this.unit.backupUnit);
								else if (0 === i.unit.numerator.length && 0 === o.denominator.length);
							else {
								if (i = i.convertTo(this.unit.usedUnits()), e.strictUnits && i.unit.toString() !== o.toString()) throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '" + o.toString() + "' and '" + i.unit.toString() + "'.");
								r = this._operate(e, n, this.value, i.value)
							} else "*" === n ? (o.numerator = o.numerator.concat(i.unit.numerator).sort(), o.denominator = o.denominator.concat(i.unit.denominator).sort(), o.cancel()) : "/" === n && (o.numerator = o.numerator.concat(i.unit.denominator).sort(), o.denominator = o.denominator.concat(i.unit.numerator).sort(), o.cancel());
							return new t(r, o)
						}, t.prototype.compare = function (e) {
							var n, i;
							if (e instanceof t) {
								if (this.unit.isEmpty() || e.unit.isEmpty()) n = this, i = e;
								else if (n = this.unify(), i = e.unify(), 0 !== n.unit.compare(i.unit)) return;
								return f.numericCompare(n.value, i.value)
							}
						}, t.prototype.unify = function () {
							return this.convertTo({
								length: "px",
								duration: "s",
								angle: "rad"
							})
						}, t.prototype.convertTo = function (e) {
							var n, i, r, o, s, a = this.value,
								l = this.unit.clone(),
								c = {};
							if ("string" == typeof e) {
								for (n in u) u[n].hasOwnProperty(e) && ((c = {})[n] = e);
								e = c
							}
							for (i in s = function (e, t) {
								return r.hasOwnProperty(e) ? (t ? a /= r[e] / r[o] : a *= r[e] / r[o], o) : e
							}, e) e.hasOwnProperty(i) && (o = e[i], r = u[i], l.map(s));
							return l.cancel(), new t(a, l)
						}, t
					}(f);
					ee.prototype.type = "Dimension";
					var te = b,
						ne = function (e) {
							function t(t, n, i) {
								var r = e.call(this) || this;
								return r.op = t.trim(), r.operands = n, r.isSpaced = i, r
							}
							return s(t, e), t.prototype.accept = function (e) {
								this.operands = e.visitArray(this.operands)
							}, t.prototype.eval = function (e) {
								var n, i = this.operands[0].eval(e),
									r = this.operands[1].eval(e);
								if (e.isMathOn(this.op)) {
									if (n = "./" === this.op ? "/" : this.op, i instanceof ee && r instanceof h && (i = i.toColor()), r instanceof ee && i instanceof h && (r = r.toColor()), !i.operate) {
										if (i instanceof t && "/" === i.op && e.math === te.PARENS_DIVISION) return new t(this.op, [i, r], this.isSpaced);
										throw {
											type: "Operation",
											message: "Operation on an invalid type"
										}
									}
									return i.operate(e, n, r)
								}
								return new t(this.op, [i, r], this.isSpaced)
							}, t.prototype.genCSS = function (e, t) {
								this.operands[0].genCSS(e, t), this.isSpaced && t.add(" "), t.add(this.op), this.isSpaced && t.add(" "), this.operands[1].genCSS(e, t)
							}, t
						}(f);
					ne.prototype.type = "Operation";
					var ie = b,
						re = function (e) {
							function t(t, n) {
								var i = e.call(this) || this;
								if (i.value = t, i.noSpacing = n, !t) throw new Error("Expression requires an array parameter");
								return i
							}
							return s(t, e), t.prototype.accept = function (e) {
								this.value = e.visitArray(this.value)
							}, t.prototype.eval = function (e) {
								var n, i = e.isMathOn(),
									r = this.parens && (e.math !== ie.STRICT_LEGACY || !this.parensInOp),
									o = !1;
								return r && e.inParenthesis(), this.value.length > 1 ? n = new t(this.value.map((function (t) {
									return t.eval ? t.eval(e) : t
								})), this.noSpacing) : 1 === this.value.length ? (!this.value[0].parens || this.value[0].parensInOp || e.inCalc || (o = !0), n = this.value[0].eval(e)) : n = this, r && e.outOfParenthesis(), !this.parens || !this.parensInOp || i || o || n instanceof ee || (n = new v(n)), n
							}, t.prototype.genCSS = function (e, t) {
								for (var n = 0; n < this.value.length; n++) this.value[n].genCSS(e, t), !this.noSpacing && n + 1 < this.value.length && t.add(" ")
							}, t.prototype.throwAwayComments = function () {
								this.value = this.value.filter((function (e) {
									return !(e instanceof $)
								}))
							}, t
						}(f);
					re.prototype.type = "Expression";
					var oe = function () {
							function e(e, t, n, i) {
								this.name = e.toLowerCase(), this.index = n, this.context = t, this.currentFileInfo = i, this.func = t.frames[0].functionRegistry.get(this.name)
							}
							return e.prototype.isValid = function () {
								return Boolean(this.func)
							}, e.prototype.call = function (e) {
								return Array.isArray(e) && (e = e.filter((function (e) {
									return "Comment" !== e.type
								})).map((function (e) {
									if ("Expression" === e.type) {
										var t = e.value.filter((function (e) {
											return "Comment" !== e.type
										}));
										return 1 === t.length ? t[0] : new re(t)
									}
									return e
								}))), this.func.apply(this, e)
							}, e
						}(),
						se = function (e) {
							function t(t, n, i, r) {
								var o = e.call(this) || this;
								return o.name = t, o.args = n, o.calc = "calc" === t, o._index = i, o._fileInfo = r, o
							}
							return s(t, e), t.prototype.accept = function (e) {
								this.args && (this.args = e.visitArray(this.args))
							}, t.prototype.eval = function (e) {
								var n = e.mathOn;
								e.mathOn = !this.calc, (this.calc || e.inCalc) && e.enterCalc();
								var i, r = this.args.map((function (t) {
									return t.eval(e)
								}));
								(this.calc || e.inCalc) && e.exitCalc(), e.mathOn = n;
								var o = new oe(this.name, e, this.getIndex(), this.fileInfo());
								if (o.isValid()) {
									try {
										i = o.call(r)
									} catch (e) {
										throw {
											type: e.type || "Runtime",
											message: "error evaluating function `" + this.name + "`" + (e.message ? ": " + e.message : ""),
											index: this.getIndex(),
											filename: this.fileInfo().filename,
											line: e.lineNumber,
											column: e.columnNumber
										}
									}
									if (null != i) return i instanceof f || (i = new D(i && !0 !== i ? i.toString() : null)), i._index = this._index, i._fileInfo = this._fileInfo, i
								}
								return new t(this.name, r, this.getIndex(), this.fileInfo())
							}, t.prototype.genCSS = function (e, t) {
								t.add(this.name + "(", this.fileInfo(), this.getIndex());
								for (var n = 0; n < this.args.length; n++) this.args[n].genCSS(e, t), n + 1 < this.args.length && t.add(", ");
								t.add(")")
							}, t
						}(f);
					se.prototype.type = "Call";
					var ae = function (e) {
						function t(t, n, i) {
							var r = e.call(this) || this;
							return r.name = t, r._index = n, r._fileInfo = i, r
						}
						return s(t, e), t.prototype.eval = function (e) {
							var n, i = this.name;
							if (0 === i.indexOf("@@") && (i = "@" + new t(i.slice(1), this.getIndex(), this.fileInfo()).eval(e).value), this.evaluating) throw {
								type: "Name",
								message: "Recursive variable definition for " + i,
								filename: this.fileInfo().filename,
								index: this.getIndex()
							};
							if (this.evaluating = !0, n = this.find(e.frames, (function (t) {
								var n = t.variable(i);
								if (n) return n.important && (e.importantScope[e.importantScope.length - 1].important = n.important), e.inCalc ? new se("_SELF", [n.value]).eval(e) : n.value.eval(e)
							}))) return this.evaluating = !1, n;
							throw {
								type: "Name",
								message: "variable " + i + " is undefined",
								filename: this.fileInfo().filename,
								index: this.getIndex()
							}
						}, t.prototype.find = function (e, t) {
							for (var n = 0, i = void 0; n < e.length; n++)
								if (i = t.call(e, e[n])) return i;
							return null
						}, t
					}(f);
					ae.prototype.type = "Variable";
					var le = function (e) {
						function t(t, n, i) {
							var r = e.call(this) || this;
							return r.name = t, r._index = n, r._fileInfo = i, r
						}
						return s(t, e), t.prototype.eval = function (e) {
							var t, n = this.name,
								i = e.pluginManager.less.visitors.ToCSSVisitor.prototype._mergeRules;
							if (this.evaluating) throw {
								type: "Name",
								message: "Recursive property reference for " + n,
								filename: this.fileInfo().filename,
								index: this.getIndex()
							};
							if (this.evaluating = !0, t = this.find(e.frames, (function (t) {
								var r, o = t.property(n);
								if (o) {
									for (var s = 0; s < o.length; s++) r = o[s], o[s] = new V(r.name, r.value, r.important, r.merge, r.index, r.currentFileInfo, r.inline, r.variable);
									return i(o), (r = o[o.length - 1]).important && (e.importantScope[e.importantScope.length - 1].important = r.important), r = r.value.eval(e)
								}
							}))) return this.evaluating = !1, t;
							throw {
								type: "Name",
								message: "Property '" + n + "' is undefined",
								filename: this.currentFileInfo.filename,
								index: this.index
							}
						}, t.prototype.find = function (e, t) {
							for (var n = 0, i = void 0; n < e.length; n++)
								if (i = t.call(e, e[n])) return i;
							return null
						}, t
					}(f);
					le.prototype.type = "Property";
					var ue = function (e) {
						function t(t, n, i) {
							var r = e.call(this) || this;
							return r.key = t, r.op = n, r.value = i, r
						}
						return s(t, e), t.prototype.eval = function (e) {
							return new t(this.key.eval ? this.key.eval(e) : this.key, this.op, this.value && this.value.eval ? this.value.eval(e) : this.value)
						}, t.prototype.genCSS = function (e, t) {
							t.add(this.toCSS(e))
						}, t.prototype.toCSS = function (e) {
							var t = this.key.toCSS ? this.key.toCSS(e) : this.key;
							return this.op && (t += this.op, t += this.value.toCSS ? this.value.toCSS(e) : this.value), "[" + t + "]"
						}, t
					}(f);
					ue.prototype.type = "Attribute";
					var ce = function (e) {
						function t(t, n, i, r, o) {
							var s = e.call(this) || this;
							return s.escaped = null == i || i, s.value = n || "", s.quote = t.charAt(0), s._index = r, s._fileInfo = o, s.variableRegex = /@\{([\w-]+)\}/g, s.propRegex = /\$\{([\w-]+)\}/g, s.allowRoot = i, s
						}
						return s(t, e), t.prototype.genCSS = function (e, t) {
							this.escaped || t.add(this.quote, this.fileInfo(), this.getIndex()), t.add(this.value), this.escaped || t.add(this.quote)
						}, t.prototype.containsVariables = function () {
							return this.value.match(this.variableRegex)
						}, t.prototype.eval = function (e) {
							var n = this,
								i = this.value;

							function r(e, t, n) {
								var i = e;
								do {
									e = i.toString(), i = e.replace(t, n)
								} while (e !== i);
								return i
							}
							return i = r(i, this.variableRegex, (function (i, r) {
								var o = new ae("@" + r, n.getIndex(), n.fileInfo()).eval(e, !0);
								return o instanceof t ? o.value : o.toCSS()
							})), i = r(i, this.propRegex, (function (i, r) {
								var o = new le("$" + r, n.getIndex(), n.fileInfo()).eval(e, !0);
								return o instanceof t ? o.value : o.toCSS()
							})), new t(this.quote + i + this.quote, i, this.escaped, this.getIndex(), this.fileInfo())
						}, t.prototype.compare = function (e) {
							return "Quoted" !== e.type || this.escaped || e.escaped ? e.toCSS && this.toCSS() === e.toCSS() ? 0 : void 0 : f.numericCompare(this.value, e.value)
						}, t
					}(f);
					ce.prototype.type = "Quoted";
					var fe = function (e) {
						function t(t, n, i, r) {
							var o = e.call(this) || this;
							return o.value = t, o._index = n, o._fileInfo = i, o.isEvald = r, o
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.value = e.visit(this.value)
						}, t.prototype.genCSS = function (e, t) {
							t.add("url("), this.value.genCSS(e, t), t.add(")")
						}, t.prototype.eval = function (e) {
							var n, i = this.value.eval(e);
							if (!this.isEvald && ("string" == typeof (n = this.fileInfo() && this.fileInfo().rootpath) && "string" == typeof i.value && e.pathRequiresRewrite(i.value) ? (i.quote || (n = n.replace(/[\(\)'"\s]/g, (function (e) {
								return "\\" + e
							}))), i.value = e.rewritePath(i.value, n)) : i.value = e.normalizePath(i.value), e.urlArgs && !i.value.match(/^\s*data:/))) {
								var r = (-1 === i.value.indexOf("?") ? "?" : "&") + e.urlArgs; - 1 !== i.value.indexOf("#") ? i.value = i.value.replace("#", r + "#") : i.value += r
							}
							return new t(i, this.getIndex(), this.fileInfo(), !0)
						}, t
					}(f);
					fe.prototype.type = "Url";
					var he = function (e) {
						function t(t, n, i, r, o) {
							var s = e.call(this) || this;
							s._index = i, s._fileInfo = r;
							var a = new N([], null, null, s._index, s._fileInfo).createEmptySelectors();
							return s.features = new L(n), s.rules = [new J(a, t)], s.rules[0].allowImports = !0, s.copyVisibilityInfo(o), s.allowRoot = !0, s.setParent(a, s), s.setParent(s.features, s), s.setParent(s.rules, s), s
						}
						return s(t, e), t.prototype.isRulesetLike = function () {
							return !0
						}, t.prototype.accept = function (e) {
							this.features && (this.features = e.visit(this.features)), this.rules && (this.rules = e.visitArray(this.rules))
						}, t.prototype.genCSS = function (e, t) {
							t.add("@media ", this._fileInfo, this._index), this.features.genCSS(e, t), this.outputRuleset(e, t, this.rules)
						}, t.prototype.eval = function (e) {
							e.mediaBlocks || (e.mediaBlocks = [], e.mediaPath = []);
							var n = new t(null, [], this._index, this._fileInfo, this.visibilityInfo());
							return this.debugInfo && (this.rules[0].debugInfo = this.debugInfo, n.debugInfo = this.debugInfo), n.features = this.features.eval(e), e.mediaPath.push(n), e.mediaBlocks.push(n), this.rules[0].functionRegistry = e.frames[0].functionRegistry.inherit(), e.frames.unshift(this.rules[0]), n.rules = [this.rules[0].eval(e)], e.frames.shift(), e.mediaPath.pop(), 0 === e.mediaPath.length ? n.evalTop(e) : n.evalNested(e)
						}, t.prototype.evalTop = function (e) {
							var t = this;
							if (e.mediaBlocks.length > 1) {
								var n = new N([], null, null, this.getIndex(), this.fileInfo()).createEmptySelectors();
								(t = new J(n, e.mediaBlocks)).multiMedia = !0, t.copyVisibilityInfo(this.visibilityInfo()), this.setParent(t, this)
							}
							return delete e.mediaBlocks, delete e.mediaPath, t
						}, t.prototype.evalNested = function (e) {
							var t, n, i = e.mediaPath.concat([this]);
							for (t = 0; t < i.length; t++) n = i[t].features instanceof L ? i[t].features.value : i[t].features, i[t] = Array.isArray(n) ? n : [n];
							return this.features = new L(this.permute(i).map((function (e) {
								for (e = e.map((function (e) {
									return e.toCSS ? e : new D(e)
								})), t = e.length - 1; t > 0; t--) e.splice(t, 0, new D("and"));
								return new re(e)
							}))), this.setParent(this.features, this), new J([], [])
						}, t.prototype.permute = function (e) {
							if (0 === e.length) return [];
							if (1 === e.length) return e[0];
							for (var t = [], n = this.permute(e.slice(1)), i = 0; i < n.length; i++)
								for (var r = 0; r < e[0].length; r++) t.push([e[0][r]].concat(n[i]));
							return t
						}, t.prototype.bubbleSelectors = function (e) {
							e && (this.rules = [new J(I(e), [this.rules[0]])], this.setParent(this.rules, this))
						}, t
					}(Q);
					he.prototype.type = "Media";
					var pe = function (e) {
						function t(t, n, i, r, o, s) {
							var a = e.call(this) || this;
							if (a.options = i, a._index = r, a._fileInfo = o, a.path = t, a.features = n, a.allowRoot = !0, void 0 !== a.options.less || a.options.inline) a.css = !a.options.less || a.options.inline;
							else {
								var l = a.getPath();
								l && /[#\.\&\?]css([\?;].*)?$/.test(l) && (a.css = !0)
							}
							return a.copyVisibilityInfo(s), a.setParent(a.features, a), a.setParent(a.path, a), a
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.features && (this.features = e.visit(this.features)), this.path = e.visit(this.path), this.options.isPlugin || this.options.inline || !this.root || (this.root = e.visit(this.root))
						}, t.prototype.genCSS = function (e, t) {
							this.css && void 0 === this.path._fileInfo.reference && (t.add("@import ", this._fileInfo, this._index), this.path.genCSS(e, t), this.features && (t.add(" "), this.features.genCSS(e, t)), t.add(";"))
						}, t.prototype.getPath = function () {
							return this.path instanceof fe ? this.path.value.value : this.path.value
						}, t.prototype.isVariableImport = function () {
							var e = this.path;
							return e instanceof fe && (e = e.value), !(e instanceof ce) || e.containsVariables()
						}, t.prototype.evalForImport = function (e) {
							var n = this.path;
							return n instanceof fe && (n = n.value), new t(n.eval(e), this.features, this.options, this._index, this._fileInfo, this.visibilityInfo())
						}, t.prototype.evalPath = function (e) {
							var t = this.path.eval(e),
								n = this._fileInfo;
							if (!(t instanceof fe)) {
								var i = t.value;
								n && i && e.pathRequiresRewrite(i) ? t.value = e.rewritePath(i, n.rootpath) : t.value = e.normalizePath(t.value)
							}
							return t
						}, t.prototype.eval = function (e) {
							var t = this.doEval(e);
							return (this.options.reference || this.blocksVisibility()) && (t.length || 0 === t.length ? t.forEach((function (e) {
								e.addVisibilityBlock()
							})) : t.addVisibilityBlock()), t
						}, t.prototype.doEval = function (e) {
							var n, i, r = this.features && this.features.eval(e);
							if (this.options.isPlugin) {
								if (this.root && this.root.eval) try {
									this.root.eval(e)
								} catch (e) {
									throw e.message = "Plugin error during evaluation", new O(e, this.root.imports, this.root.filename)
								}
								return (i = e.frames[0] && e.frames[0].functionRegistry) && this.root && this.root.functions && i.addMultiple(this.root.functions), []
							}
							if (this.skip && ("function" == typeof this.skip && (this.skip = this.skip()), this.skip)) return [];
							if (this.options.inline) {
								var o = new D(this.root, 0, {
									filename: this.importedFilename,
									reference: this.path._fileInfo && this.path._fileInfo.reference
								}, !0, !0);
								return this.features ? new he([o], this.features.value) : [o]
							}
							if (this.css) {
								var s = new t(this.evalPath(e), r, this.options, this._index);
								if (!s.css && this.error) throw this.error;
								return s
							}
							return (n = new J(null, I(this.root.rules))).evalImports(e), this.features ? new he(n.rules, this.features.value) : n.rules
						}, t
					}(f);
					pe.prototype.type = "Import";
					var de = function (e) {
						function t(t, n, i, r) {
							var o = e.call(this) || this;
							return o.escaped = n, o.expression = t, o._index = i, o._fileInfo = r, o
						}
						return s(t, e), t.prototype.eval = function (e) {
							var t = this.evaluateJavaScript(this.expression, e),
								n = typeof t;
							return "number" !== n || isNaN(t) ? "string" === n ? new ce('"' + t + '"', t, this.escaped, this._index) : Array.isArray(t) ? new D(t.join(", ")) : new D(t) : new ee(t)
						}, t
					}(function (e) {
						function t() {
							return null !== e && e.apply(this, arguments) || this
						}
						return s(t, e), t.prototype.evaluateJavaScript = function (e, t) {
							var n, i = this,
								r = {};
							if (!t.javascriptEnabled) throw {
								message: "Inline JavaScript is not enabled. Is it set in your options?",
								filename: this.fileInfo().filename,
								index: this.getIndex()
							};
							e = e.replace(/@\{([\w-]+)\}/g, (function (e, n) {
								return i.jsify(new ae("@" + n, i.getIndex(), i.fileInfo()).eval(t))
							}));
							try {
								e = new Function("return (" + e + ")")
							} catch (t) {
								throw {
									message: "JavaScript evaluation error: " + t.message + " from `" + e + "`",
									filename: this.fileInfo().filename,
									index: this.getIndex()
								}
							}
							var o = t.frames[0].variables();
							for (var s in o) o.hasOwnProperty(s) && (r[s.slice(1)] = {
								value: o[s].value,
								toJS: function () {
									return this.value.eval(t).toCSS()
								}
							});
							try {
								n = e.call(r)
							} catch (e) {
								throw {
									message: "JavaScript evaluation error: '" + e.name + ": " + e.message.replace(/["]/g, "'") + "'",
									filename: this.fileInfo().filename,
									index: this.getIndex()
								}
							}
							return n
						}, t.prototype.jsify = function (e) {
							return Array.isArray(e.value) && e.value.length > 1 ? "[" + e.value.map((function (e) {
								return e.toCSS()
							})).join(", ") + "]" : e.toCSS()
						}, t
					}(f));
					de.prototype.type = "JavaScript";
					var ve = function (e) {
						function t(t, n) {
							var i = e.call(this) || this;
							return i.key = t, i.value = n, i
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.value = e.visit(this.value)
						}, t.prototype.eval = function (e) {
							return this.value.eval ? new t(this.key, this.value.eval(e)) : this
						}, t.prototype.genCSS = function (e, t) {
							t.add(this.key + "="), this.value.genCSS ? this.value.genCSS(e, t) : t.add(this.value)
						}, t
					}(f);
					ve.prototype.type = "Assignment";
					var me = function (e) {
						function t(t, n, i, r, o) {
							var s = e.call(this) || this;
							return s.op = t.trim(), s.lvalue = n, s.rvalue = i, s._index = r, s.negate = o, s
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.lvalue = e.visit(this.lvalue), this.rvalue = e.visit(this.rvalue)
						}, t.prototype.eval = function (e) {
							var t = function (e, t, n) {
								switch (e) {
								case "and":
									return t && n;
								case "or":
									return t || n;
								default:
									switch (f.compare(t, n)) {
									case -1:
										return "<" === e || "=<" === e || "<=" === e;
									case 0:
										return "=" === e || ">=" === e || "=<" === e || "<=" === e;
									case 1:
										return ">" === e || ">=" === e;
									default:
										return !1
									}
								}
							}(this.op, this.lvalue.eval(e), this.rvalue.eval(e));
							return this.negate ? !t : t
						}, t
					}(f);
					me.prototype.type = "Condition";
					var ge = function (e) {
						function t(t) {
							var n = e.call(this) || this;
							return n.value = t, n
						}
						return s(t, e), t
					}(f);
					ge.prototype.type = "UnicodeDescriptor";
					var ye = function (e) {
						function t(t) {
							var n = e.call(this) || this;
							return n.value = t, n
						}
						return s(t, e), t.prototype.genCSS = function (e, t) {
							t.add("-"), this.value.genCSS(e, t)
						}, t.prototype.eval = function (e) {
							return e.isMathOn() ? new ne("*", [new ee(-1), this.value]).eval(e) : new t(this.value.eval(e))
						}, t
					}(f);
					ye.prototype.type = "Negative";
					var be = function (e) {
						function t(n, i, r, o, s) {
							var a = e.call(this) || this;
							switch (a.selector = n, a.option = i, a.object_id = t.next_id++, a.parent_ids = [a.object_id], a._index = r, a._fileInfo = o, a.copyVisibilityInfo(s), a.allowRoot = !0, i) {
							case "all":
								a.allowBefore = !0, a.allowAfter = !0;
								break;
							default:
								a.allowBefore = !1, a.allowAfter = !1
							}
							return a.setParent(a.selector, a), a
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.selector = e.visit(this.selector)
						}, t.prototype.eval = function (e) {
							return new t(this.selector.eval(e), this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo())
						}, t.prototype.clone = function (e) {
							return new t(this.selector, this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo())
						}, t.prototype.findSelfSelectors = function (e) {
							var t, n, i = [];
							for (t = 0; t < e.length; t++) n = e[t].elements, t > 0 && n.length && "" === n[0].combinator.value && (n[0].combinator.value = " "), i = i.concat(e[t].elements);
							this.selfSelectors = [new N(i)], this.selfSelectors[0].copyVisibilityInfo(this.visibilityInfo())
						}, t
					}(f);
					be.next_id = 0, be.prototype.type = "Extend";
					var we = function (e) {
						function t(t, n, i) {
							var r = e.call(this) || this;
							return r.variable = t, r._index = n, r._fileInfo = i, r.allowRoot = !0, r
						}
						return s(t, e), t.prototype.eval = function (e) {
							var t, n = new ae(this.variable, this.getIndex(), this.fileInfo()).eval(e),
								i = new O({
									message: "Could not evaluate variable call " + this.variable
								});
							if (!n.ruleset) {
								if (n.rules) t = n;
								else if (Array.isArray(n)) t = new J("", n);
								else {
									if (!Array.isArray(n.value)) throw i;
									t = new J("", n.value)
								}
								n = new Z(t)
							}
							if (n.ruleset) return n.callEval(e);
							throw i
						}, t
					}(f);
					we.prototype.type = "VariableCall";
					var Se = function (e) {
						function t(t, n, i, r) {
							var o = e.call(this) || this;
							return o.value = t, o.lookups = n, o._index = i, o._fileInfo = r, o
						}
						return s(t, e), t.prototype.eval = function (e) {
							var t, n, i = this.value.eval(e);
							for (t = 0; t < this.lookups.length; t++) {
								if (n = this.lookups[t], Array.isArray(i) && (i = new J([new N], i)), "" === n) i = i.lastDeclaration();
								else if ("@" === n.charAt(0)) {
									if ("@" === n.charAt(1) && (n = "@" + new ae(n.substr(1)).eval(e).value), i.variables && (i = i.variable(n)), !i) throw {
										type: "Name",
										message: "variable " + n + " not found",
										filename: this.fileInfo().filename,
										index: this.getIndex()
									}
								} else {
									if (n = "$@" === n.substring(0, 2) ? "$" + new ae(n.substr(1)).eval(e).value : "$" === n.charAt(0) ? n : "$" + n, i.properties && (i = i.property(n)), !i) throw {
										type: "Name",
										message: 'property "' + n.substr(1) + '" not found',
										filename: this.fileInfo().filename,
										index: this.getIndex()
									};
									i = i[i.length - 1]
								}
								i.value && (i = i.eval(e).value), i.ruleset && (i = i.ruleset.eval(e))
							}
							return i
						}, t
					}(f);
					Se.prototype.type = "NamespaceValue";
					var Ce = function (e) {
						function t(t, n, i, r, o, s, a) {
							var l = e.call(this) || this;
							l.name = t || "anonymous mixin", l.selectors = [new N([new y(null, t, !1, l._index, l._fileInfo)])], l.params = n, l.condition = r, l.variadic = o, l.arity = n.length, l.rules = i, l._lookups = {};
							var u = [];
							return l.required = n.reduce((function (e, t) {
								return !t.name || t.name && !t.value ? e + 1 : (u.push(t.name), e)
							}), 0), l.optionalParameters = u, l.frames = s, l.copyVisibilityInfo(a), l.allowRoot = !0, l
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.params && this.params.length && (this.params = e.visitArray(this.params)), this.rules = e.visitArray(this.rules), this.condition && (this.condition = e.visit(this.condition))
						}, t.prototype.evalParams = function (e, t, n, i) {
							var r, o, s, a, l, u, c, f, h = new J(null, null),
								p = I(this.params),
								d = 0;
							if (t.frames && t.frames[0] && t.frames[0].functionRegistry && (h.functionRegistry = t.frames[0].functionRegistry.inherit()), t = new j.Eval(t, [h].concat(t.frames)), n)
								for (d = (n = I(n)).length, s = 0; s < d; s++)
									if (u = (o = n[s]) && o.name) {
										for (c = !1, a = 0; a < p.length; a++)
											if (!i[a] && u === p[a].name) {
												i[a] = o.value.eval(e), h.prependRule(new V(u, o.value.eval(e))), c = !0;
												break
											}
										if (c) {
											n.splice(s, 1), s--;
											continue
										}
										throw {
											type: "Runtime",
											message: "Named argument for " + this.name + " " + n[s].name + " not found"
										}
									}
							for (f = 0, s = 0; s < p.length; s++)
								if (!i[s]) {
									if (o = n && n[f], u = p[s].name)
										if (p[s].variadic) {
											for (r = [], a = f; a < d; a++) r.push(n[a].value.eval(e));
											h.prependRule(new V(u, new re(r).eval(e)))
										} else {
											if (l = o && o.value) l = Array.isArray(l) ? new Z(new J("", l)) : l.eval(e);
											else {
												if (!p[s].value) throw {
													type: "Runtime",
													message: "wrong number of arguments for " + this.name + " (" + d + " for " + this.arity + ")"
												};
												l = p[s].value.eval(t), h.resetCache()
											}
											h.prependRule(new V(u, l)), i[s] = l
										}
									if (p[s].variadic && n)
										for (a = f; a < d; a++) i[a] = n[a].value.eval(e);
									f++
								}
							return h
						}, t.prototype.makeImportant = function () {
							var e = this.rules ? this.rules.map((function (e) {
								return e.makeImportant ? e.makeImportant(!0) : e
							})) : this.rules;
							return new t(this.name, this.params, e, this.condition, this.variadic, this.frames)
						}, t.prototype.eval = function (e) {
							return new t(this.name, this.params, this.rules, this.condition, this.variadic, this.frames || I(e.frames))
						}, t.prototype.evalCall = function (e, t, n) {
							var i, r, o = [],
								s = this.frames ? this.frames.concat(e.frames) : e.frames,
								a = this.evalParams(e, new j.Eval(e, s), t, o);
							return a.prependRule(new V("@arguments", new re(o).eval(e))), i = I(this.rules), (r = new J(null, i)).originalRuleset = this, r = r.eval(new j.Eval(e, [this, a].concat(s))), n && (r = r.makeImportant()), r
						}, t.prototype.matchCondition = function (e, t) {
							return !(this.condition && !this.condition.eval(new j.Eval(t, [this.evalParams(t, new j.Eval(t, this.frames ? this.frames.concat(t.frames) : t.frames), e, [])].concat(this.frames || []).concat(t.frames))))
						}, t.prototype.matchArgs = function (e, t) {
							var n, i = e && e.length || 0,
								r = this.optionalParameters,
								o = e ? e.reduce((function (e, t) {
									return r.indexOf(t.name) < 0 ? e + 1 : e
								}), 0) : 0;
							if (this.variadic) {
								if (o < this.required - 1) return !1
							} else {
								if (o < this.required) return !1;
								if (i > this.params.length) return !1
							}
							n = Math.min(o, this.arity);
							for (var s = 0; s < n; s++)
								if (!this.params[s].name && !this.params[s].variadic && e[s].value.eval(t).toCSS() != this.params[s].value.eval(t).toCSS()) return !1;
							return !0
						}, t
					}(J);
					Ce.prototype.type = "MixinDefinition", Ce.prototype.evalFirst = !0;
					var xe = function (e) {
						function t(t, n, i, r, o) {
							var s = e.call(this) || this;
							return s.selector = new N(t), s.arguments = n || [], s._index = i, s._fileInfo = r, s.important = o, s.allowRoot = !0, s.setParent(s.selector, s), s
						}
						return s(t, e), t.prototype.accept = function (e) {
							this.selector && (this.selector = e.visit(this.selector)), this.arguments.length && (this.arguments = e.visitArray(this.arguments))
						}, t.prototype.eval = function (e) {
							var t, n, i, r, o, s, a, l, u, c, f, h, p, d, v, m = [],
								g = [],
								y = !1,
								b = [],
								w = [];

							function S(t, n) {
								var i, r, o;
								for (i = 0; i < 2; i++) {
									for (w[i] = !0, K.value(i), r = 0; r < n.length && w[i]; r++)(o = n[r]).matchCondition && (w[i] = w[i] && o.matchCondition(null, e));
									t.matchCondition && (w[i] = w[i] && t.matchCondition(m, e))
								}
								return w[0] || w[1] ? w[0] != w[1] ? w[1] ? 1 : 2 : 0 : -1
							}
							for (this.selector = this.selector.eval(e), s = 0; s < this.arguments.length; s++)
								if (o = (r = this.arguments[s]).value.eval(e), r.expand && Array.isArray(o.value))
									for (o = o.value, a = 0; a < o.length; a++) m.push({
										value: o[a]
									});
								else m.push({
									name: r.name,
									value: o
								});
							for (v = function (t) {
								return t.matchArgs(null, e)
							}, s = 0; s < e.frames.length; s++)
								if ((t = e.frames[s].find(this.selector, null, v)).length > 0) {
									for (c = !0, a = 0; a < t.length; a++) {
										for (n = t[a].rule, i = t[a].path, u = !1, l = 0; l < e.frames.length; l++)
											if (!(n instanceof Ce) && n === (e.frames[l].originalRuleset || e.frames[l])) {
												u = !0;
												break
											}
										u || n.matchArgs(m, e) && (-1 !== (f = {
											mixin: n,
											group: S(n, i)
										}).group && b.push(f), y = !0)
									}
									for (K.reset(), p = [0, 0, 0], a = 0; a < b.length; a++) p[b[a].group]++;
									if (p[0] > 0) h = 2;
									else if (h = 1, p[1] + p[2] > 1) throw {
										type: "Runtime",
										message: "Ambiguous use of `default()` found when matching for `" + this.format(m) + "`",
										index: this.getIndex(),
										filename: this.fileInfo().filename
									};
									for (a = 0; a < b.length; a++)
										if (0 === (f = b[a].group) || f === h) try {
											(n = b[a].mixin) instanceof Ce || (d = n.originalRuleset || n, (n = new Ce("", [], n.rules, null, !1, null, d.visibilityInfo())).originalRuleset = d);
											var C = n.evalCall(e, m, this.important).rules;
											this._setVisibilityToReplacement(C), Array.prototype.push.apply(g, C)
										} catch (e) {
											throw {
												message: e.message,
												index: this.getIndex(),
												filename: this.fileInfo().filename,
												stack: e.stack
											}
										}
										if (y) return g
								}
							throw c ? {
								type: "Runtime",
								message: "No matching definition was found for `" + this.format(m) + "`",
								index: this.getIndex(),
								filename: this.fileInfo().filename
							} : {
								type: "Name",
								message: this.selector.toCSS().trim() + " is undefined",
								index: this.getIndex(),
								filename: this.fileInfo().filename
							}
						}, t.prototype._setVisibilityToReplacement = function (e) {
							var t;
							if (this.blocksVisibility())
								for (t = 0; t < e.length; t++) e[t].addVisibilityBlock()
						}, t.prototype.format = function (e) {
							return this.selector.toCSS().trim() + "(" + (e ? e.map((function (e) {
								var t = "";
								return e.name && (t += e.name + ":"), e.value.toCSS ? t += e.value.toCSS() : t += "???", t
							})).join(", ") : "") + ")"
						}, t
					}(f);
					xe.prototype.type = "MixinCall";
					var Ee = {
							Node: f,
							Color: h,
							AtRule: Q,
							DetachedRuleset: Z,
							Operation: ne,
							Dimension: ee,
							Unit: X,
							Keyword: F,
							Variable: ae,
							Property: le,
							Ruleset: J,
							Element: y,
							Attribute: ue,
							Combinator: g,
							Selector: N,
							Quoted: ce,
							Expression: re,
							Declaration: V,
							Call: se,
							URL: fe,
							Import: pe,
							Comment: $,
							Anonymous: D,
							Value: L,
							JavaScript: de,
							Assignment: ve,
							Condition: me,
							Paren: v,
							Media: he,
							UnicodeDescriptor: ge,
							Negative: ye,
							Extend: be,
							VariableCall: we,
							NamespaceValue: Se,
							mixin: {
								Call: xe,
								Definition: Ce
							}
						},
						Ie = {
							error: function (e) {
								this._fireEvent("error", e)
							},
							warn: function (e) {
								this._fireEvent("warn", e)
							},
							info: function (e) {
								this._fireEvent("info", e)
							},
							debug: function (e) {
								this._fireEvent("debug", e)
							},
							addListener: function (e) {
								this._listeners.push(e)
							},
							removeListener: function (e) {
								for (var t = 0; t < this._listeners.length; t++)
									if (this._listeners[t] === e) return void this._listeners.splice(t, 1)
							},
							_fireEvent: function (e, t) {
								for (var n = 0; n < this._listeners.length; n++) {
									var i = this._listeners[n][e];
									i && i(t)
								}
							},
							_listeners: []
						},
						_e = function () {
							function e(e, t) {
								this.fileManagers = t || [], e = e || {};
								for (var n = [], i = n.concat(["encodeBase64", "mimeLookup", "charsetLookup", "getSourceMapGenerator"]), r = 0; r < i.length; r++) {
									var o = i[r],
										s = e[o];
									s ? this[o] = s.bind(e) : r < n.length && this.warn("missing required function in environment - " + o)
								}
							}
							return e.prototype.getFileManager = function (e, t, n, i, r) {
								e || Ie.warn("getFileManager called with no filename.. Please report this issue. continuing."), null == t && Ie.warn("getFileManager called with null directory.. Please report this issue. continuing.");
								var o = this.fileManagers;
								n.pluginManager && (o = [].concat(o).concat(n.pluginManager.getFileManagers()));
								for (var s = o.length - 1; s >= 0; s--) {
									var a = o[s];
									if (a[r ? "supportsSync" : "supports"](e, t, n, i)) return a
								}
								return null
							}, e.prototype.addFileManager = function (e) {
								this.fileManagers.push(e)
							}, e.prototype.clearFileManagers = function () {
								this.fileManagers = []
							}, e
						}(),
						Ae = function () {
							function e() {}
							return e.prototype.getPath = function (e) {
								var t = e.lastIndexOf("?");
								return t > 0 && (e = e.slice(0, t)), (t = e.lastIndexOf("/")) < 0 && (t = e.lastIndexOf("\\")), t < 0 ? "" : e.slice(0, t + 1)
							}, e.prototype.tryAppendExtension = function (e, t) {
								return /(\.[a-z]*$)|([\?;].*)$/.test(e) ? e : e + t
							}, e.prototype.tryAppendLessExtension = function (e) {
								return this.tryAppendExtension(e, ".less")
							}, e.prototype.supportsSync = function () {
								return !1
							}, e.prototype.alwaysMakePathsAbsolute = function () {
								return !1
							}, e.prototype.isPathAbsolute = function (e) {
								return /^(?:[a-z-]+:|\/|\\|#)/i.test(e)
							}, e.prototype.join = function (e, t) {
								return e ? e + t : t
							}, e.prototype.pathDiff = function (e, t) {
								var n, i, r, o, s = this.extractUrlParts(e),
									a = this.extractUrlParts(t),
									l = "";
								if (s.hostPart !== a.hostPart) return "";
								for (i = Math.max(a.directories.length, s.directories.length), n = 0; n < i && a.directories[n] === s.directories[n]; n++);
								for (o = a.directories.slice(n), r = s.directories.slice(n), n = 0; n < o.length - 1; n++) l += "../";
								for (n = 0; n < r.length - 1; n++) l += r[n] + "/";
								return l
							}, e.prototype.extractUrlParts = function (e, t) {
								var n, i, r = /^((?:[a-z-]+:)?\/{2}(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,
									o = e.match(r),
									s = {},
									a = [],
									l = [];
								if (!o) throw new Error("Could not parse sheet href - '" + e + "'");
								if (t && (!o[1] || o[2])) {
									if (!(i = t.match(r))) throw new Error("Could not parse page url - '" + t + "'");
									o[1] = o[1] || i[1] || "", o[2] || (o[3] = i[3] + o[3])
								}
								if (o[3])
									for (a = o[3].replace(/\\/g, "/").split("/"), n = 0; n < a.length; n++) ".." === a[n] ? l.pop() : "." !== a[n] && l.push(a[n]);
								return s.hostPart = o[1], s.directories = l, s.rawPath = (o[1] || "") + a.join("/"), s.path = (o[1] || "") + l.join("/"), s.filename = o[4], s.fileUrl = s.path + (o[4] || ""), s.url = s.fileUrl + (o[5] || ""), s
							}, e
						}(),
						ke = function () {
							function e() {
								this.require = function () {
									return null
								}
							}
							return e.prototype.evalPlugin = function (e, t, n, i, r) {
								var o, s, a, l, u, c;
								l = t.pluginManager, r && (u = "string" == typeof r ? r : r.filename);
								var f = (new this.less.FileManager).extractUrlParts(u).filename;
								if (u && (s = l.get(u))) {
									if (c = this.trySetOptions(s, u, f, i)) return c;
									try {
										s.use && s.use.call(this.context, s)
									} catch (e) {
										return e.message = e.message || "Error during @plugin call", new O(e, n, u)
									}
									return s
								}
								a = {
									exports: {},
									pluginManager: l,
									fileInfo: r
								}, o = H.create();
								try {
									new Function("module", "require", "registerPlugin", "functions", "tree", "less", "fileInfo", e)(a, this.require(u), (function (e) {
										s = e
									}), o, this.less.tree, this.less, r)
								} catch (e) {
									return new O(e, n, u)
								}
								if (s || (s = a.exports), (s = this.validatePlugin(s, u, f)) instanceof O) return s;
								if (!s) return new O({
									message: "Not a valid plugin"
								}, n, u);
								if (s.imports = n, s.filename = u, (!s.minVersion || this.compareVersion("3.0.0", s.minVersion) < 0) && (c = this.trySetOptions(s, u, f, i))) return c;
								if (l.addPlugin(s, r.filename, o), s.functions = o.getLocalFunctions(), c = this.trySetOptions(s, u, f, i)) return c;
								try {
									s.use && s.use.call(this.context, s)
								} catch (e) {
									return e.message = e.message || "Error during @plugin call", new O(e, n, u)
								}
								return s
							}, e.prototype.trySetOptions = function (e, t, n, i) {
								if (i && !e.setOptions) return new O({
									message: "Options have been provided but the plugin " + n + " does not support any options."
								});
								try {
									e.setOptions && e.setOptions(i)
								} catch (e) {
									return new O(e)
								}
							}, e.prototype.validatePlugin = function (e, t, n) {
								return e ? ("function" == typeof e && (e = new e), e.minVersion && this.compareVersion(e.minVersion, this.less.version) < 0 ? new O({
									message: "Plugin " + n + " requires version " + this.versionToString(e.minVersion)
								}) : e) : null
							}, e.prototype.compareVersion = function (e, t) {
								"string" == typeof e && (e = e.match(/^(\d+)\.?(\d+)?\.?(\d+)?/)).shift();
								for (var n = 0; n < e.length; n++)
									if (e[n] !== t[n]) return parseInt(e[n]) > parseInt(t[n]) ? -1 : 1;
								return 0
							}, e.prototype.versionToString = function (e) {
								for (var t = "", n = 0; n < e.length; n++) t += (t ? "." : "") + e[n];
								return t
							}, e.prototype.printUsage = function (e) {
								for (var t = 0; t < e.length; t++) {
									var n = e[t];
									n.printUsage && n.printUsage()
								}
							}, e
						}(),
						Re = {
							visitDeeper: !0
						},
						Te = !1;

					function Pe(e) {
						return e
					}
					var Oe = function () {
							function e(e) {
								this._implementation = e, this._visitInCache = {}, this._visitOutCache = {}, Te || (function e(t, n) {
									var i, r;
									for (i in t) switch (typeof (r = t[i])) {
									case "function":
										r.prototype && r.prototype.type && (r.prototype.typeIndex = n++);
										break;
									case "object":
										n = e(r, n)
									}
									return n
								}(Ee, 1), Te = !0)
							}
							return e.prototype.visit = function (e) {
								if (!e) return e;
								var t = e.typeIndex;
								if (!t) return e.value && e.value.typeIndex && this.visit(e.value), e;
								var n, i = this._implementation,
									r = this._visitInCache[t],
									o = this._visitOutCache[t],
									s = Re;
								if (s.visitDeeper = !0, r || (r = i[n = "visit" + e.type] || Pe, o = i[n + "Out"] || Pe, this._visitInCache[t] = r, this._visitOutCache[t] = o), r !== Pe) {
									var a = r.call(i, e, s);
									e && i.isReplacing && (e = a)
								}
								if (s.visitDeeper && e)
									if (e.length)
										for (var l = 0, u = e.length; l < u; l++) e[l].accept && e[l].accept(this);
									else e.accept && e.accept(this);
								return o != Pe && o.call(i, e), e
							}, e.prototype.visitArray = function (e, t) {
								if (!e) return e;
								var n, i = e.length;
								if (t || !this._implementation.isReplacing) {
									for (n = 0; n < i; n++) this.visit(e[n]);
									return e
								}
								var r = [];
								for (n = 0; n < i; n++) {
									var o = this.visit(e[n]);
									void 0 !== o && (o.splice ? o.length && this.flatten(o, r) : r.push(o))
								}
								return r
							}, e.prototype.flatten = function (e, t) {
								var n, i, r, o, s, a;
								for (t || (t = []), i = 0, n = e.length; i < n; i++)
									if (void 0 !== (r = e[i]))
										if (r.splice)
											for (s = 0, o = r.length; s < o; s++) void 0 !== (a = r[s]) && (a.splice ? a.length && this.flatten(a, t) : t.push(a));
										else t.push(r);
								return t
							}, e
						}(),
						Me = function () {
							function e(e) {
								this.imports = [], this.variableImports = [], this._onSequencerEmpty = e, this._currentDepth = 0
							}
							return e.prototype.addImport = function (e) {
								var t = this,
									n = {
										callback: e,
										args: null,
										isReady: !1
									};
								return this.imports.push(n),
									function () {
										for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
										n.args = Array.prototype.slice.call(e, 0), n.isReady = !0, t.tryRun()
									}
							}, e.prototype.addVariableImport = function (e) {
								this.variableImports.push(e)
							}, e.prototype.tryRun = function () {
								this._currentDepth++;
								try {
									for (;;) {
										for (; this.imports.length > 0;) {
											var e = this.imports[0];
											if (!e.isReady) return;
											this.imports = this.imports.slice(1), e.callback.apply(null, e.args)
										}
										if (0 === this.variableImports.length) break;
										var t = this.variableImports[0];
										this.variableImports = this.variableImports.slice(1), t()
									}
								} finally {
									this._currentDepth--
								}
								0 === this._currentDepth && this._onSequencerEmpty && this._onSequencerEmpty()
							}, e
						}(),
						Ne = function (e, t) {
							this._visitor = new Oe(this), this._importer = e, this._finish = t, this.context = new j.Eval, this.importCount = 0, this.onceFileDetectionMap = {}, this.recursionDetector = {}, this._sequencer = new Me(this._onSequencerEmpty.bind(this))
						};
					Ne.prototype = {
						isReplacing: !1,
						run: function (e) {
							try {
								this._visitor.visit(e)
							} catch (e) {
								this.error = e
							}
							this.isFinished = !0, this._sequencer.tryRun()
						},
						_onSequencerEmpty: function () {
							this.isFinished && this._finish(this.error)
						},
						visitImport: function (e, t) {
							var n = e.options.inline;
							if (!e.css || n) {
								var i = new j.Eval(this.context, I(this.context.frames)),
									r = i.frames[0];
								this.importCount++, e.isVariableImport() ? this._sequencer.addVariableImport(this.processImportNode.bind(this, e, i, r)) : this.processImportNode(e, i, r)
							}
							t.visitDeeper = !1
						},
						processImportNode: function (e, t, n) {
							var i, r = e.options.inline;
							try {
								i = e.evalForImport(t)
							} catch (t) {
								t.filename || (t.index = e.getIndex(), t.filename = e.fileInfo().filename), e.css = !0, e.error = t
							}
							if (!i || i.css && !r) this.importCount--, this.isFinished && this._sequencer.tryRun();
							else {
								i.options.multiple && (t.importMultiple = !0);
								for (var o = void 0 === i.css, s = 0; s < n.rules.length; s++)
									if (n.rules[s] === e) {
										n.rules[s] = i;
										break
									}
								var a = this.onImported.bind(this, i, t),
									l = this._sequencer.addImport(a);
								this._importer.push(i.getPath(), o, i.fileInfo(), i.options, l)
							}
						},
						onImported: function (e, t, n, i, r, o) {
							n && (n.filename || (n.index = e.getIndex(), n.filename = e.fileInfo().filename), this.error = n);
							var s = this,
								a = e.options.inline,
								l = e.options.isPlugin,
								u = e.options.optional,
								c = r || o in s.recursionDetector;
							if (t.importMultiple || (e.skip = !!c || function () {
								return o in s.onceFileDetectionMap || (s.onceFileDetectionMap[o] = !0, !1)
							}), !o && u && (e.skip = !0), i && (e.root = i, e.importedFilename = o, !a && !l && (t.importMultiple || !c))) {
								s.recursionDetector[o] = !0;
								var f = this.context;
								this.context = t;
								try {
									this._visitor.visit(i)
								} catch (n) {
									this.error = n
								}
								this.context = f
							}
							s.importCount--, s.isFinished && s._sequencer.tryRun()
						},
						visitDeclaration: function (e, t) {
							"DetachedRuleset" === e.value.type ? this.context.frames.unshift(e) : t.visitDeeper = !1
						},
						visitDeclarationOut: function (e) {
							"DetachedRuleset" === e.value.type && this.context.frames.shift()
						},
						visitAtRule: function (e, t) {
							this.context.frames.unshift(e)
						},
						visitAtRuleOut: function (e) {
							this.context.frames.shift()
						},
						visitMixinDefinition: function (e, t) {
							this.context.frames.unshift(e)
						},
						visitMixinDefinitionOut: function (e) {
							this.context.frames.shift()
						},
						visitRuleset: function (e, t) {
							this.context.frames.unshift(e)
						},
						visitRulesetOut: function (e) {
							this.context.frames.shift()
						},
						visitMedia: function (e, t) {
							this.context.frames.unshift(e.rules[0])
						},
						visitMediaOut: function (e) {
							this.context.frames.shift()
						}
					};
					var Le = function () {
							function e(e) {
								this.visible = e
							}
							return e.prototype.run = function (e) {
								this.visit(e)
							}, e.prototype.visitArray = function (e) {
								if (!e) return e;
								var t, n = e.length;
								for (t = 0; t < n; t++) this.visit(e[t]);
								return e
							}, e.prototype.visit = function (e) {
								return e ? e.constructor === Array ? this.visitArray(e) : (!e.blocksVisibility || e.blocksVisibility() || (this.visible ? e.ensureVisibility() : e.ensureInvisibility(), e.accept(this)), e) : e
							}, e
						}(),
						Fe = function () {
							function e() {
								this._visitor = new Oe(this), this.contexts = [], this.allExtendsStack = [
									[]
								]
							}
							return e.prototype.run = function (e) {
								return (e = this._visitor.visit(e)).allExtends = this.allExtendsStack[0], e
							}, e.prototype.visitDeclaration = function (e, t) {
								t.visitDeeper = !1
							}, e.prototype.visitMixinDefinition = function (e, t) {
								t.visitDeeper = !1
							}, e.prototype.visitRuleset = function (e, t) {
								if (!e.root) {
									var n, i, r, o, s = [],
										a = e.rules,
										l = a ? a.length : 0;
									for (n = 0; n < l; n++) e.rules[n] instanceof Ee.Extend && (s.push(a[n]), e.extendOnEveryPath = !0);
									var u = e.paths;
									for (n = 0; n < u.length; n++) {
										var c = u[n],
											f = c[c.length - 1].extendList;
										for ((o = f ? I(f).concat(s) : s) && (o = o.map((function (e) {
											return e.clone()
										}))), i = 0; i < o.length; i++) this.foundExtends = !0, (r = o[i]).findSelfSelectors(c), r.ruleset = e, 0 === i && (r.firstExtendOnThisSelectorPath = !0), this.allExtendsStack[this.allExtendsStack.length - 1].push(r)
									}
									this.contexts.push(e.selectors)
								}
							}, e.prototype.visitRulesetOut = function (e) {
								e.root || (this.contexts.length = this.contexts.length - 1)
							}, e.prototype.visitMedia = function (e, t) {
								e.allExtends = [], this.allExtendsStack.push(e.allExtends)
							}, e.prototype.visitMediaOut = function (e) {
								this.allExtendsStack.length = this.allExtendsStack.length - 1
							}, e.prototype.visitAtRule = function (e, t) {
								e.allExtends = [], this.allExtendsStack.push(e.allExtends)
							}, e.prototype.visitAtRuleOut = function (e) {
								this.allExtendsStack.length = this.allExtendsStack.length - 1
							}, e
						}(),
						De = function () {
							function e() {
								this._visitor = new Oe(this)
							}
							return e.prototype.run = function (e) {
								var t = new Fe;
								if (this.extendIndices = {}, t.run(e), !t.foundExtends) return e;
								e.allExtends = e.allExtends.concat(this.doExtendChaining(e.allExtends, e.allExtends)), this.allExtendsStack = [e.allExtends];
								var n = this._visitor.visit(e);
								return this.checkExtendsForNonMatched(e.allExtends), n
							}, e.prototype.checkExtendsForNonMatched = function (e) {
								var t = this.extendIndices;
								e.filter((function (e) {
									return !e.hasFoundMatches && 1 == e.parent_ids.length
								})).forEach((function (e) {
									var n = "_unknown_";
									try {
										n = e.selector.toCSS({})
									} catch (e) {}
									t[e.index + " " + n] || (t[e.index + " " + n] = !0, Ie.warn("extend '" + n + "' has no matches"))
								}))
							}, e.prototype.doExtendChaining = function (e, t, n) {
								var i, r, o, s, a, l, u, c, f = [],
									h = this;
								for (n = n || 0, i = 0; i < e.length; i++)
									for (r = 0; r < t.length; r++) l = e[i], u = t[r], l.parent_ids.indexOf(u.object_id) >= 0 || (a = [u.selfSelectors[0]], (o = h.findMatch(l, a)).length && (l.hasFoundMatches = !0, l.selfSelectors.forEach((function (e) {
										var t = u.visibilityInfo();
										s = h.extendSelector(o, a, e, l.isVisible()), (c = new Ee.Extend(u.selector, u.option, 0, u.fileInfo(), t)).selfSelectors = s, s[s.length - 1].extendList = [c], f.push(c), c.ruleset = u.ruleset, c.parent_ids = c.parent_ids.concat(u.parent_ids, l.parent_ids), u.firstExtendOnThisSelectorPath && (c.firstExtendOnThisSelectorPath = !0, u.ruleset.paths.push(s))
									}))));
								if (f.length) {
									if (this.extendChainCount++, n > 100) {
										var p = "{unable to calculate}",
											d = "{unable to calculate}";
										try {
											p = f[0].selfSelectors[0].toCSS(), d = f[0].selector.toCSS()
										} catch (e) {}
										throw {
											message: "extend circular reference detected. One of the circular extends is currently:" + p + ":extend(" + d + ")"
										}
									}
									return f.concat(h.doExtendChaining(f, t, n + 1))
								}
								return f
							}, e.prototype.visitDeclaration = function (e, t) {
								t.visitDeeper = !1
							}, e.prototype.visitMixinDefinition = function (e, t) {
								t.visitDeeper = !1
							}, e.prototype.visitSelector = function (e, t) {
								t.visitDeeper = !1
							}, e.prototype.visitRuleset = function (e, t) {
								if (!e.root) {
									var n, i, r, o, s = this.allExtendsStack[this.allExtendsStack.length - 1],
										a = [],
										l = this;
									for (r = 0; r < s.length; r++)
										for (i = 0; i < e.paths.length; i++)
											if (o = e.paths[i], !e.extendOnEveryPath) {
												var u = o[o.length - 1].extendList;
												u && u.length || (n = this.findMatch(s[r], o)).length && (s[r].hasFoundMatches = !0, s[r].selfSelectors.forEach((function (e) {
													var t;
													t = l.extendSelector(n, o, e, s[r].isVisible()), a.push(t)
												})))
											}
									e.paths = e.paths.concat(a)
								}
							}, e.prototype.findMatch = function (e, t) {
								var n, i, r, o, s, a, l, u = e.selector.elements,
									c = [],
									f = [];
								for (n = 0; n < t.length; n++)
									for (i = t[n], r = 0; r < i.elements.length; r++)
										for (o = i.elements[r], (e.allowBefore || 0 === n && 0 === r) && c.push({
											pathIndex: n,
											index: r,
											matched: 0,
											initialCombinator: o.combinator
										}), a = 0; a < c.length; a++) l = c[a], "" === (s = o.combinator.value) && 0 === r && (s = " "), !this.isElementValuesEqual(u[l.matched].value, o.value) || l.matched > 0 && u[l.matched].combinator.value !== s ? l = null : l.matched++, l && (l.finished = l.matched === u.length, l.finished && !e.allowAfter && (r + 1 < i.elements.length || n + 1 < t.length) && (l = null)), l ? l.finished && (l.length = u.length, l.endPathIndex = n, l.endPathElementIndex = r + 1, c.length = 0, f.push(l)) : (c.splice(a, 1), a--);
								return f
							}, e.prototype.isElementValuesEqual = function (e, t) {
								if ("string" == typeof e || "string" == typeof t) return e === t;
								if (e instanceof Ee.Attribute) return e.op === t.op && e.key === t.key && (e.value && t.value ? (e = e.value.value || e.value) === (t = t.value.value || t.value) : !e.value && !t.value);
								if (e = e.value, t = t.value, e instanceof Ee.Selector) {
									if (!(t instanceof Ee.Selector) || e.elements.length !== t.elements.length) return !1;
									for (var n = 0; n < e.elements.length; n++) {
										if (e.elements[n].combinator.value !== t.elements[n].combinator.value && (0 !== n || (e.elements[n].combinator.value || " ") !== (t.elements[n].combinator.value || " "))) return !1;
										if (!this.isElementValuesEqual(e.elements[n].value, t.elements[n].value)) return !1
									}
									return !0
								}
								return !1
							}, e.prototype.extendSelector = function (e, t, n, i) {
								var r, o, s, a, l, u = 0,
									c = 0,
									f = [];
								for (r = 0; r < e.length; r++) o = t[(a = e[r]).pathIndex], s = new Ee.Element(a.initialCombinator, n.elements[0].value, n.elements[0].isVariable, n.elements[0].getIndex(), n.elements[0].fileInfo()), a.pathIndex > u && c > 0 && (f[f.length - 1].elements = f[f.length - 1].elements.concat(t[u].elements.slice(c)), c = 0, u++), l = o.elements.slice(c, a.index).concat([s]).concat(n.elements.slice(1)), u === a.pathIndex && r > 0 ? f[f.length - 1].elements = f[f.length - 1].elements.concat(l) : (f = f.concat(t.slice(u, a.pathIndex))).push(new Ee.Selector(l)), u = a.endPathIndex, (c = a.endPathElementIndex) >= t[u].elements.length && (c = 0, u++);
								return u < t.length && c > 0 && (f[f.length - 1].elements = f[f.length - 1].elements.concat(t[u].elements.slice(c)), u++), f = (f = f.concat(t.slice(u, t.length))).map((function (e) {
									var t = e.createDerived(e.elements);
									return i ? t.ensureVisibility() : t.ensureInvisibility(), t
								}))
							}, e.prototype.visitMedia = function (e, t) {
								var n = e.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
								n = n.concat(this.doExtendChaining(n, e.allExtends)), this.allExtendsStack.push(n)
							}, e.prototype.visitMediaOut = function (e) {
								var t = this.allExtendsStack.length - 1;
								this.allExtendsStack.length = t
							}, e.prototype.visitAtRule = function (e, t) {
								var n = e.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
								n = n.concat(this.doExtendChaining(n, e.allExtends)), this.allExtendsStack.push(n)
							}, e.prototype.visitAtRuleOut = function (e) {
								var t = this.allExtendsStack.length - 1;
								this.allExtendsStack.length = t
							}, e
						}(),
						Be = function () {
							function e() {
								this.contexts = [
									[]
								], this._visitor = new Oe(this)
							}
							return e.prototype.run = function (e) {
								return this._visitor.visit(e)
							}, e.prototype.visitDeclaration = function (e, t) {
								t.visitDeeper = !1
							}, e.prototype.visitMixinDefinition = function (e, t) {
								t.visitDeeper = !1
							}, e.prototype.visitRuleset = function (e, t) {
								var n, i = this.contexts[this.contexts.length - 1],
									r = [];
								this.contexts.push(r), e.root || ((n = e.selectors) && (n = n.filter((function (e) {
									return e.getIsOutput()
								})), e.selectors = n.length ? n : n = null, n && e.joinSelectors(r, i, n)), n || (e.rules = null), e.paths = r)
							}, e.prototype.visitRulesetOut = function (e) {
								this.contexts.length = this.contexts.length - 1
							}, e.prototype.visitMedia = function (e, t) {
								var n = this.contexts[this.contexts.length - 1];
								e.rules[0].root = 0 === n.length || n[0].multiMedia
							}, e.prototype.visitAtRule = function (e, t) {
								var n = this.contexts[this.contexts.length - 1];
								e.rules && e.rules.length && (e.rules[0].root = e.isRooted || 0 === n.length || null)
							}, e
						}(),
						Ve = function () {
							function e(e) {
								this._visitor = new Oe(this), this._context = e
							}
							return e.prototype.containsSilentNonBlockedChild = function (e) {
								var t;
								if (!e) return !1;
								for (var n = 0; n < e.length; n++)
									if ((t = e[n]).isSilent && t.isSilent(this._context) && !t.blocksVisibility()) return !0;
								return !1
							}, e.prototype.keepOnlyVisibleChilds = function (e) {
								e && e.rules && (e.rules = e.rules.filter((function (e) {
									return e.isVisible()
								})))
							}, e.prototype.isEmpty = function (e) {
								return !e || !e.rules || 0 === e.rules.length
							}, e.prototype.hasVisibleSelector = function (e) {
								return !(!e || !e.paths) && e.paths.length > 0
							}, e.prototype.resolveVisibility = function (e, t) {
								if (!e.blocksVisibility()) {
									if (this.isEmpty(e) && !this.containsSilentNonBlockedChild(t)) return;
									return e
								}
								var n = e.rules[0];
								if (this.keepOnlyVisibleChilds(n), !this.isEmpty(n)) return e.ensureVisibility(), e.removeVisibilityBlock(), e
							}, e.prototype.isVisibleRuleset = function (e) {
								return !!e.firstRoot || !this.isEmpty(e) && !(!e.root && !this.hasVisibleSelector(e))
							}, e
						}(),
						Ue = function (e) {
							this._visitor = new Oe(this), this._context = e, this.utils = new Ve(e)
						};
					Ue.prototype = {
						isReplacing: !0,
						run: function (e) {
							return this._visitor.visit(e)
						},
						visitDeclaration: function (e, t) {
							if (!e.blocksVisibility() && !e.variable) return e
						},
						visitMixinDefinition: function (e, t) {
							e.frames = []
						},
						visitExtend: function (e, t) {},
						visitComment: function (e, t) {
							if (!e.blocksVisibility() && !e.isSilent(this._context)) return e
						},
						visitMedia: function (e, t) {
							var n = e.rules[0].rules;
							return e.accept(this._visitor), t.visitDeeper = !1, this.utils.resolveVisibility(e, n)
						},
						visitImport: function (e, t) {
							if (!e.blocksVisibility()) return e
						},
						visitAtRule: function (e, t) {
							return e.rules && e.rules.length ? this.visitAtRuleWithBody(e, t) : this.visitAtRuleWithoutBody(e, t)
						},
						visitAnonymous: function (e, t) {
							if (!e.blocksVisibility()) return e.accept(this._visitor), e
						},
						visitAtRuleWithBody: function (e, t) {
							var n = function (e) {
								var t = e.rules;
								return function (e) {
									var t = e.rules;
									return 1 === t.length && (!t[0].paths || 0 === t[0].paths.length)
								}(e) ? t[0].rules : t
							}(e);
							return e.accept(this._visitor), t.visitDeeper = !1, this.utils.isEmpty(e) || this._mergeRules(e.rules[0].rules), this.utils.resolveVisibility(e, n)
						},
						visitAtRuleWithoutBody: function (e, t) {
							if (!e.blocksVisibility()) {
								if ("@charset" === e.name) {
									if (this.charset) {
										if (e.debugInfo) {
											var n = new Ee.Comment("/* " + e.toCSS(this._context).replace(/\n/g, "") + " */\n");
											return n.debugInfo = e.debugInfo, this._visitor.visit(n)
										}
										return
									}
									this.charset = !0
								}
								return e
							}
						},
						checkValidNodes: function (e, t) {
							if (e)
								for (var n = 0; n < e.length; n++) {
									var i = e[n];
									if (t && i instanceof Ee.Declaration && !i.variable) throw {
										message: "Properties must be inside selector blocks. They cannot be in the root",
										index: i.getIndex(),
										filename: i.fileInfo() && i.fileInfo().filename
									};
									if (i instanceof Ee.Call) throw {
										message: "Function '" + i.name + "' is undefined",
										index: i.getIndex(),
										filename: i.fileInfo() && i.fileInfo().filename
									};
									if (i.type && !i.allowRoot) throw {
										message: i.type + " node returned by a function is not valid here",
										index: i.getIndex(),
										filename: i.fileInfo() && i.fileInfo().filename
									}
								}
						},
						visitRuleset: function (e, t) {
							var n, i = [];
							if (this.checkValidNodes(e.rules, e.firstRoot), e.root) e.accept(this._visitor), t.visitDeeper = !1;
							else {
								this._compileRulesetPaths(e);
								for (var r = e.rules, o = r ? r.length : 0, s = 0; s < o;)(n = r[s]) && n.rules ? (i.push(this._visitor.visit(n)), r.splice(s, 1), o--) : s++;
								o > 0 ? e.accept(this._visitor) : e.rules = null, t.visitDeeper = !1
							}
							return e.rules && (this._mergeRules(e.rules), this._removeDuplicateRules(e.rules)), this.utils.isVisibleRuleset(e) && (e.ensureVisibility(), i.splice(0, 0, e)), 1 === i.length ? i[0] : i
						},
						_compileRulesetPaths: function (e) {
							e.paths && (e.paths = e.paths.filter((function (e) {
								var t;
								for (" " === e[0].elements[0].combinator.value && (e[0].elements[0].combinator = new Ee.Combinator("")), t = 0; t < e.length; t++)
									if (e[t].isVisible() && e[t].getIsOutput()) return !0;
								return !1
							})))
						},
						_removeDuplicateRules: function (e) {
							if (e) {
								var t, n, i, r = {};
								for (i = e.length - 1; i >= 0; i--)
									if ((n = e[i]) instanceof Ee.Declaration)
										if (r[n.name]) {
											(t = r[n.name]) instanceof Ee.Declaration && (t = r[n.name] = [r[n.name].toCSS(this._context)]);
											var o = n.toCSS(this._context); - 1 !== t.indexOf(o) ? e.splice(i, 1) : t.push(o)
										} else r[n.name] = n
							}
						},
						_mergeRules: function (e) {
							if (e) {
								for (var t = {}, n = [], i = 0; i < e.length; i++) {
									var r = e[i];
									if (r.merge) {
										var o = r.name;
										t[o] ? e.splice(i--, 1) : n.push(t[o] = []), t[o].push(r)
									}
								}
								n.forEach((function (e) {
									if (e.length > 0) {
										var t = e[0],
											n = [],
											i = [new Ee.Expression(n)];
										e.forEach((function (e) {
											"+" === e.merge && n.length > 0 && i.push(new Ee.Expression(n = [])), n.push(e.value), t.important = t.important || e.important
										})), t.value = new Ee.Value(i)
									}
								}))
							}
						}
					};
					var $e = {
							Visitor: Oe,
							ImportVisitor: Ne,
							MarkVisibleSelectorsVisitor: Le,
							ExtendVisitor: De,
							JoinSelectorVisitor: Be,
							ToCSSVisitor: Ue
						},
						je = function () {
							var e, t, n, i, r, o, s, a = [],
								l = {};

							function u(n) {
								for (var i, a, c, f = l.i, h = t, p = l.i - s, d = l.i + o.length - p, v = l.i += n, m = e; l.i < d; l.i++) {
									if (i = m.charCodeAt(l.i), l.autoCommentAbsorb && 47 === i) {
										if ("/" === (a = m.charAt(l.i + 1))) {
											c = {
												index: l.i,
												isLineComment: !0
											};
											var g = m.indexOf("\n", l.i + 2);
											g < 0 && (g = d), l.i = g, c.text = m.substr(c.index, l.i - c.index), l.commentStore.push(c);
											continue
										}
										if ("*" === a) {
											var y = m.indexOf("*/", l.i + 2);
											if (y >= 0) {
												c = {
													index: l.i,
													text: m.substr(l.i, y + 2 - l.i),
													isLineComment: !1
												}, l.i += c.text.length - 1, l.commentStore.push(c);
												continue
											}
										}
										break
									}
									if (32 !== i && 10 !== i && 9 !== i && 13 !== i) break
								}
								if (o = o.slice(n + l.i - v + p), s = l.i, !o.length) {
									if (t < r.length - 1) return o = r[++t], u(0), !0;
									l.finished = !0
								}
								return f !== l.i || h !== t
							}
							return l.save = function () {
								s = l.i, a.push({
									current: o,
									i: l.i,
									j: t
								})
							}, l.restore = function (e) {
								(l.i > n || l.i === n && e && !i) && (n = l.i, i = e);
								var r = a.pop();
								o = r.current, s = l.i = r.i, t = r.j
							}, l.forget = function () {
								a.pop()
							}, l.isWhitespace = function (t) {
								var n = l.i + (t || 0),
									i = e.charCodeAt(n);
								return 32 === i || 13 === i || 9 === i || 10 === i
							}, l.$re = function (e) {
								l.i > s && (o = o.slice(l.i - s), s = l.i);
								var t = e.exec(o);
								return t ? (u(t[0].length), "string" == typeof t ? t : 1 === t.length ? t[0] : t) : null
							}, l.$char = function (t) {
								return e.charAt(l.i) !== t ? null : (u(1), t)
							}, l.$str = function (t) {
								for (var n = t.length, i = 0; i < n; i++)
									if (e.charAt(l.i + i) !== t.charAt(i)) return null;
								return u(n), t
							}, l.$quoted = function (t) {
								var n = t || l.i,
									i = e.charAt(n);
								if ("'" === i || '"' === i) {
									for (var r = e.length, o = n, s = 1; s + o < r; s++) switch (e.charAt(s + o)) {
									case "\\":
										s++;
										continue;
									case "\r":
									case "\n":
										break;
									case i:
										var a = e.substr(o, s + 1);
										return t || 0 === t ? [i, a] : (u(s + 1), a)
									}
									return null
								}
							}, l.$parseUntil = function (t) {
								var n, i = "",
									r = null,
									o = !1,
									s = 0,
									a = [],
									c = [],
									f = e.length,
									h = l.i,
									p = l.i,
									d = l.i,
									v = !0;
								n = "string" == typeof t ? function (e) {
									return e === t
								} : function (e) {
									return t.test(e)
								};
								do {
									var m = e.charAt(d);
									if (0 === s && n(m))(r = e.substr(p, d - p)) ? c.push(r) : c.push(" "), r = c, u(d - h), v = !1;
									else {
										if (o) {
											"*" === m && "/" === e.charAt(d + 1) && (d++, s--, o = !1), d++;
											continue
										}
										switch (m) {
										case "\\":
											d++, m = e.charAt(d), c.push(e.substr(p, d - p + 1)), p = d + 1;
											break;
										case "/":
											"*" === e.charAt(d + 1) && (d++, o = !0, s++);
											break;
										case "'":
										case '"':
											(i = l.$quoted(d)) ? (c.push(e.substr(p, d - p), i), p = (d += i[1].length - 1) + 1) : (u(d - h), r = m, v = !1);
											break;
										case "{":
											a.push("}"), s++;
											break;
										case "(":
											a.push(")"), s++;
											break;
										case "[":
											a.push("]"), s++;
											break;
										case "}":
										case ")":
										case "]":
											var g = a.pop();
											m === g ? s-- : (u(d - h), r = g, v = !1)
										}++d > f && (v = !1)
									}
								} while (v);
								return r || null
							}, l.autoCommentAbsorb = !0, l.commentStore = [], l.finished = !1, l.peek = function (t) {
								if ("string" == typeof t) {
									for (var n = 0; n < t.length; n++)
										if (e.charAt(l.i + n) !== t.charAt(n)) return !1;
									return !0
								}
								return t.test(o)
							}, l.peekChar = function (t) {
								return e.charAt(l.i) === t
							}, l.currentChar = function () {
								return e.charAt(l.i)
							}, l.prevChar = function () {
								return e.charAt(l.i - 1)
							}, l.getInput = function () {
								return e
							}, l.peekNotNumeric = function () {
								var t = e.charCodeAt(l.i);
								return t > 57 || t < 43 || 47 === t || 44 === t
							}, l.start = function (i, a, c) {
								e = i, l.i = t = s = n = 0, r = a ? function (e, t) {
									var n, i, r, o, s, a, l, u, c, f = e.length,
										h = 0,
										p = 0,
										d = [],
										v = 0;

									function m(t) {
										var n = s - v;
										n < 512 && !t || !n || (d.push(e.slice(v, s + 1)), v = s + 1)
									}
									for (s = 0; s < f; s++)
										if (!((l = e.charCodeAt(s)) >= 97 && l <= 122 || l < 34)) switch (l) {
										case 40:
											p++, i = s;
											continue;
										case 41:
											if (--p < 0) return t("missing opening `(`", s);
											continue;
										case 59:
											p || m();
											continue;
										case 123:
											h++, n = s;
											continue;
										case 125:
											if (--h < 0) return t("missing opening `{`", s);
											h || p || m();
											continue;
										case 92:
											if (s < f - 1) {
												s++;
												continue
											}
											return t("unescaped `\\`", s);
										case 34:
										case 39:
										case 96:
											for (c = 0, a = s, s += 1; s < f; s++)
												if (!((u = e.charCodeAt(s)) > 96)) {
													if (u == l) {
														c = 1;
														break
													}
													if (92 == u) {
														if (s == f - 1) return t("unescaped `\\`", s);
														s++
													}
												}
											if (c) continue;
											return t("unmatched `" + String.fromCharCode(l) + "`", a);
										case 47:
											if (p || s == f - 1) continue;
											if (47 == (u = e.charCodeAt(s + 1)))
												for (s += 2; s < f && (!((u = e.charCodeAt(s)) <= 13) || 10 != u && 13 != u); s++);
											else if (42 == u) {
												for (r = a = s, s += 2; s < f - 1 && (125 == (u = e.charCodeAt(s)) && (o = s), 42 != u || 47 != e.charCodeAt(s + 1)); s++);
												if (s == f - 1) return t("missing closing `*/`", a);
												s++
											}
											continue;
										case 42:
											if (s < f - 1 && 47 == e.charCodeAt(s + 1)) return t("unmatched `/*`", s);
											continue
										}
										return 0 !== h ? t(r > n && o > r ? "missing closing `}` or `*/`" : "missing closing `}`", n) : 0 !== p ? t("missing closing `)`", i) : (m(!0), d)
								}(i, c) : [i], o = r[0], u(0)
							}, l.end = function () {
								var t, r = l.i >= e.length;
								return l.i < n && (t = i, l.i = n), {
									isFinished: r,
									furthest: l.i,
									furthestPossibleErrorMessage: t,
									furthestReachedEnd: l.i >= e.length - 1,
									furthestChar: e[l.i]
								}
							}, l
						},
						qe = function e(t, n, i) {
							var r, o = je();

							function s(e, t) {
								throw new O({
									index: o.i,
									filename: i.filename,
									type: t || "Syntax",
									message: e
								}, n)
							}

							function a(e, t) {
								var n = e instanceof Function ? e.call(r) : o.$re(e);
								if (n) return n;
								s(t || ("string" == typeof e ? "expected '" + e + "' got '" + o.currentChar() + "'" : "unexpected token"))
							}

							function l(e, t) {
								if (o.$char(e)) return e;
								s(t || "expected '" + e + "' got '" + o.currentChar() + "'")
							}

							function u(e) {
								var t = i.filename;
								return {
									lineNumber: E(e, o.getInput()).line + 1,
									fileName: t
								}
							}
							return {
								parserInput: o,
								imports: n,
								fileInfo: i,
								parseNode: function (e, t, i, s, a) {
									var l, u = [],
										c = o;
									try {
										c.start(e, !1, (function (e, t) {
											a({
												message: e,
												index: t + i
											})
										}));
										for (var f, h = 0, p = void 0; p = t[h]; h++)
											if (f = c.i, l = r[p]()) {
												try {
													l._index = f + i, l._fileInfo = s
												} catch (e) {}
												u.push(l)
											} else u.push(null);
										c.end().isFinished ? a(null, u) : a(!0, null)
									} catch (e) {
										throw new O({
											index: e.index + i,
											message: e.message
										}, n, s.filename)
									}
								},
								parse: function (r, s, a) {
									var l, u, c, f, h = null,
										p = "";
									if (u = a && a.globalVars ? e.serializeVars(a.globalVars) + "\n" : "", c = a && a.modifyVars ? "\n" + e.serializeVars(a.modifyVars) : "", t.pluginManager)
										for (var d = t.pluginManager.getPreProcessors(), v = 0; v < d.length; v++) r = d[v].process(r, {
											context: t,
											imports: n,
											fileInfo: i
										});
									(u || a && a.banner) && (p = (a && a.banner ? a.banner : "") + u, (f = n.contentsIgnoredChars)[i.filename] = f[i.filename] || 0, f[i.filename] += p.length), r = p + (r = r.replace(/\r\n?/g, "\n")).replace(/^\uFEFF/, "") + c, n.contents[i.filename] = r;
									try {
										o.start(r, t.chunkInput, (function (e, t) {
											throw new O({
												index: t,
												type: "Parse",
												message: e,
												filename: i.filename
											}, n)
										})), Ee.Node.prototype.parse = this, l = new Ee.Ruleset(null, this.parsers.primary()), Ee.Node.prototype.rootNode = l, l.root = !0, l.firstRoot = !0, l.functionRegistry = H.inherit()
									} catch (e) {
										return s(new O(e, n, i.filename))
									}
									var m = o.end();
									if (!m.isFinished) {
										var g = m.furthestPossibleErrorMessage;
										g || (g = "Unrecognised input", "}" === m.furthestChar ? g += ". Possibly missing opening '{'" : ")" === m.furthestChar ? g += ". Possibly missing opening '('" : m.furthestReachedEnd && (g += ". Possibly missing something")), h = new O({
											type: "Parse",
											message: g,
											index: m.furthest,
											filename: i.filename
										}, n)
									}
									var y = function (e) {
										return (e = h || e || n.error) ? (e instanceof O || (e = new O(e, n, i.filename)), s(e)) : s(null, l)
									};
									if (!1 === t.processImports) return y();
									new $e.ImportVisitor(n, y).run(l)
								},
								parsers: r = {
									primary: function () {
										for (var e, t = this.mixin, n = [];;) {
											for (; e = this.comment();) n.push(e);
											if (o.finished) break;
											if (o.peek("}")) break;
											if (e = this.extendRule()) n = n.concat(e);
											else if (e = t.definition() || this.declaration() || t.call(!1, !1) || this.ruleset() || this.variableCall() || this.entities.call() || this.atrule()) n.push(e);
											else {
												for (var i = !1; o.$char(";");) i = !0;
												if (!i) break
											}
										}
										return n
									},
									comment: function () {
										if (o.commentStore.length) {
											var e = o.commentStore.shift();
											return new Ee.Comment(e.text, e.isLineComment, e.index, i)
										}
									},
									entities: {
										mixinLookup: function () {
											return r.mixin.call(!0, !0)
										},
										quoted: function (e) {
											var t, n = o.i,
												r = !1;
											if (o.save(), o.$char("~")) r = !0;
											else if (e) return void o.restore();
											if (t = o.$quoted()) return o.forget(), new Ee.Quoted(t.charAt(0), t.substr(1, t.length - 2), r, n, i);
											o.restore()
										},
										keyword: function () {
											var e = o.$char("%") || o.$re(/^\[?(?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+\]?/);
											if (e) return Ee.Color.fromKeyword(e) || new Ee.Keyword(e)
										},
										call: function () {
											var e, t, n, r = o.i;
											if (!o.peek(/^url\(/i))
												if (o.save(), e = o.$re(/^([\w-]+|%|progid:[\w\.]+)\(/)) {
													if (e = e[1], (n = this.customFuncCall(e)) && (t = n.parse()) && n.stop) return o.forget(), t;
													if (t = this.arguments(t), o.$char(")")) return o.forget(), new Ee.Call(e, t, r, i);
													o.restore("Could not parse call arguments or missing ')'")
												} else o.forget()
										},
										customFuncCall: function (e) {
											return {
												alpha: t(r.ieAlpha, !0),
												boolean: t(n),
												if :t(n)
											}[e.toLowerCase()];

											function t(e, t) {
												return {
													parse: e,
													stop: t
												}
											}

											function n() {
												return [a(r.condition, "expected condition")]
											}
										},
										arguments: function (e) {
											var t, n, i = e || [],
												s = [];
											for (o.save();;) {
												if (e) e = !1;
												else {
													if (!(n = r.detachedRuleset() || this.assignment() || r.expression())) break;
													n.value && 1 == n.value.length && (n = n.value[0]), i.push(n)
												}
												o.$char(",") || (o.$char(";") || t) && (t = !0, n = i.length < 1 ? i[0] : new Ee.Value(i), s.push(n), i = [])
											}
											return o.forget(), t ? s : i
										},
										literal: function () {
											return this.dimension() || this.color() || this.quoted() || this.unicodeDescriptor()
										},
										assignment: function () {
											var e, t;
											if (o.save(), e = o.$re(/^\w+(?=\s?=)/i))
												if (o.$char("=")) {
													if (t = r.entity()) return o.forget(), new Ee.Assignment(e, t);
													o.restore()
												} else o.restore();
											else o.restore()
										},
										url: function () {
											var e, t = o.i;
											if (o.autoCommentAbsorb = !1, o.$str("url(")) return e = this.quoted() || this.variable() || this.property() || o.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || "", o.autoCommentAbsorb = !0, l(")"), new Ee.URL(null != e.value || e instanceof Ee.Variable || e instanceof Ee.Property ? e : new Ee.Anonymous(e, t), t, i);
											o.autoCommentAbsorb = !0
										},
										variable: function () {
											var e, t, n = o.i;
											if (o.save(), "@" === o.currentChar() && (t = o.$re(/^@@?[\w-]+/))) {
												if ("(" === (e = o.currentChar()) || "[" === e && !o.prevChar().match(/^\s/)) {
													var s = r.variableCall(t);
													if (s) return o.forget(), s
												}
												return o.forget(), new Ee.Variable(t, n, i)
											}
											o.restore()
										},
										variableCurly: function () {
											var e, t = o.i;
											if ("@" === o.currentChar() && (e = o.$re(/^@\{([\w-]+)\}/))) return new Ee.Variable("@" + e[1], t, i)
										},
										property: function () {
											var e, t = o.i;
											if ("$" === o.currentChar() && (e = o.$re(/^\$[\w-]+/))) return new Ee.Property(e, t, i)
										},
										propertyCurly: function () {
											var e, t = o.i;
											if ("$" === o.currentChar() && (e = o.$re(/^\$\{([\w-]+)\}/))) return new Ee.Property("$" + e[1], t, i)
										},
										color: function () {
											var e;
											if (o.save(), "#" === o.currentChar() && (e = o.$re(/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})([\w.#\[])?/)) && !e[2]) return o.forget(), new Ee.Color(e[1], void 0, e[0]);
											o.restore()
										},
										colorKeyword: function () {
											o.save();
											var e = o.autoCommentAbsorb;
											o.autoCommentAbsorb = !1;
											var t = o.$re(/^[_A-Za-z-][_A-Za-z0-9-]+/);
											if (o.autoCommentAbsorb = e, t) {
												o.restore();
												var n = Ee.Color.fromKeyword(t);
												return n ? (o.$str(t), n) : void 0
											}
											o.forget()
										},
										dimension: function () {
											if (!o.peekNotNumeric()) {
												var e = o.$re(/^([+-]?\d*\.?\d+)(%|[a-z_]+)?/i);
												return e ? new Ee.Dimension(e[1], e[2]) : void 0
											}
										},
										unicodeDescriptor: function () {
											var e;
											if (e = o.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/)) return new Ee.UnicodeDescriptor(e[0])
										},
										javascript: function () {
											var e, t = o.i;
											o.save();
											var n = o.$char("~");
											if (o.$char("`")) {
												if (e = o.$re(/^[^`]*`/)) return o.forget(), new Ee.JavaScript(e.substr(0, e.length - 1), Boolean(n), t, i);
												o.restore("invalid javascript definition")
											} else o.restore()
										}
									},
									variable: function () {
										var e;
										if ("@" === o.currentChar() && (e = o.$re(/^(@[\w-]+)\s*:/))) return e[1]
									},
									variableCall: function (e) {
										var t, n = o.i,
											s = !!e,
											a = e;
										if (o.save(), a || "@" === o.currentChar() && (a = o.$re(/^(@[\w-]+)(\(\s*\))?/))) {
											if (!(t = this.mixin.ruleLookups()) && (s && "()" !== o.$str("()") || "()" !== a[2])) return void o.restore("Missing '[...]' lookup in variable call");
											s || (a = a[1]);
											var l = new Ee.VariableCall(a, n, i);
											return !s && r.end() ? (o.forget(), l) : (o.forget(), new Ee.NamespaceValue(l, t, n, i))
										}
										o.restore()
									},
									extend: function (e) {
										var t, n, r, l, u, c = o.i;
										if (o.$str(e ? "&:extend(" : ":extend(")) {
											do {
												for (r = null, t = null; !(r = o.$re(/^(all)(?=\s*(\)|,))/)) && (n = this.element());) t ? t.push(n) : t = [n];
												r = r && r[1], t || s("Missing target selector for :extend()."), u = new Ee.Extend(new Ee.Selector(t), r, c, i), l ? l.push(u) : l = [u]
											} while (o.$char(","));
											return a(/^\)/), e && a(/^;/), l
										}
									},
									extendRule: function () {
										return this.extend(!0)
									},
									mixin: {
										call: function (e, t) {
											var n, s, a, u, c = o.currentChar(),
												f = !1,
												h = o.i;
											if ("." === c || "#" === c) {
												if (o.save(), s = this.elements()) {
													if (o.$char("(") && (a = this.args(!0).args, l(")"), u = !0), !1 !== t && (n = this.ruleLookups()), !0 === t && !n) return void o.restore();
													if (e && !n && !u) return void o.restore();
													if (!e && r.important() && (f = !0), e || r.end()) {
														o.forget();
														var p = new Ee.mixin.Call(s, a, h, i, !n && f);
														return n ? new Ee.NamespaceValue(p, n) : p
													}
												}
												o.restore()
											}
										},
										elements: function () {
											for (var e, t, n, r, s, a = /^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/; s = o.i, t = o.$re(a);) r = new Ee.Element(n, t, !1, s, i), e ? e.push(r) : e = [r], n = o.$char(">");
											return e
										},
										args: function (e) {
											var t, n, i, a, l, u, c, f = r.entities,
												h = {
													args: null,
													variadic: !1
												},
												p = [],
												d = [],
												v = [],
												m = !0;
											for (o.save();;) {
												if (e) u = r.detachedRuleset() || r.expression();
												else {
													if (o.commentStore.length = 0, o.$str("...")) {
														h.variadic = !0, o.$char(";") && !t && (t = !0), (t ? d : v).push({
															variadic: !0
														});
														break
													}
													u = f.variable() || f.property() || f.literal() || f.keyword() || this.call(!0)
												} if (!u || !m) break;
												a = null, u.throwAwayComments && u.throwAwayComments(), l = u;
												var g = null;
												if (e ? u.value && 1 == u.value.length && (g = u.value[0]) : g = u, g && (g instanceof Ee.Variable || g instanceof Ee.Property))
													if (o.$char(":")) {
														if (p.length > 0 && (t && s("Cannot mix ; and , as delimiter types"), n = !0), !(l = r.detachedRuleset() || r.expression())) {
															if (!e) return o.restore(), h.args = [], h;
															s("could not understand value for named argument")
														}
														a = i = g.name
													} else if (o.$str("...")) {
													if (!e) {
														h.variadic = !0, o.$char(";") && !t && (t = !0), (t ? d : v).push({
															name: u.name,
															variadic: !0
														});
														break
													}
													c = !0
												} else e || (i = a = g.name, l = null);
												l && p.push(l), v.push({
													name: a,
													value: l,
													expand: c
												}), o.$char(",") ? m = !0 : ((m = ";" === o.$char(";")) || t) && (n && s("Cannot mix ; and , as delimiter types"), t = !0, p.length > 1 && (l = new Ee.Value(p)), d.push({
													name: i,
													value: l,
													expand: c
												}), i = null, p = [], n = !1)
											}
											return o.forget(), h.args = t ? d : v, h
										},
										definition: function () {
											var e, t, n, i, s = [],
												l = !1;
											if (!("." !== o.currentChar() && "#" !== o.currentChar() || o.peek(/^[^{]*\}/)))
												if (o.save(), t = o.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)) {
													e = t[1];
													var u = this.args(!1);
													if (s = u.args, l = u.variadic, !o.$char(")")) return void o.restore("Missing closing ')'");
													if (o.commentStore.length = 0, o.$str("when") && (i = a(r.conditions, "expected condition")), n = r.block()) return o.forget(), new Ee.mixin.Definition(e, s, n, i, l);
													o.restore()
												} else o.restore()
										},
										ruleLookups: function () {
											var e, t = [];
											if ("[" === o.currentChar()) {
												for (;;) {
													if (o.save(), !(e = this.lookupValue()) && "" !== e) {
														o.restore();
														break
													}
													t.push(e), o.forget()
												}
												return t.length > 0 ? t : void 0
											}
										},
										lookupValue: function () {
											if (o.save(), o.$char("[")) {
												var e = o.$re(/^(?:[@$]{0,2})[_a-zA-Z0-9-]*/);
												if (o.$char("]")) return e || "" === e ? (o.forget(), e) : void o.restore();
												o.restore()
											} else o.restore()
										}
									},
									entity: function () {
										var e = this.entities;
										return this.comment() || e.literal() || e.variable() || e.url() || e.property() || e.call() || e.keyword() || this.mixin.call(!0) || e.javascript()
									},
									end: function () {
										return o.$char(";") || o.peek("}")
									},
									ieAlpha: function () {
										var e;
										if (o.$re(/^opacity=/i)) return (e = o.$re(/^\d+/)) || (e = "@{" + (e = a(r.entities.variable, "Could not parse alpha")).name.slice(1) + "}"), l(")"), new Ee.Quoted("", "alpha(opacity=" + e + ")")
									},
									element: function () {
										var e, t, n, r = o.i;
										if (t = this.combinator(), (e = o.$re(/^(?:\d+\.\d+|\d+)%/) || o.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) || o.$char("*") || o.$char("&") || this.attribute() || o.$re(/^\([^&()@]+\)/) || o.$re(/^[\.#:](?=@)/) || this.entities.variableCurly()) || (o.save(), o.$char("(") ? (n = this.selector(!1)) && o.$char(")") ? (e = new Ee.Paren(n), o.forget()) : o.restore("Missing closing ')'") : o.forget()), e) return new Ee.Element(t, e, e instanceof Ee.Variable, r, i)
									},
									combinator: function () {
										var e = o.currentChar();
										if ("/" === e) {
											o.save();
											var t = o.$re(/^\/[a-z]+\//i);
											if (t) return o.forget(), new Ee.Combinator(t);
											o.restore()
										}
										if (">" === e || "+" === e || "~" === e || "|" === e || "^" === e) {
											for (o.i++, "^" === e && "^" === o.currentChar() && (e = "^^", o.i++); o.isWhitespace();) o.i++;
											return new Ee.Combinator(e)
										}
										return o.isWhitespace(-1) ? new Ee.Combinator(" ") : new Ee.Combinator(null)
									},
									selector: function (e) {
										var t, n, r, l, u, c, f, h = o.i;
										for (e = !1 !== e;
											(e && (n = this.extend()) || e && (c = o.$str("when")) || (l = this.element())) && (c ? f = a(this.conditions, "expected condition") : f ? s("CSS guard can only be used at the end of selector") : n ? u = u ? u.concat(n) : n : (u && s("Extend can only be used at the end of selector"), r = o.currentChar(), t ? t.push(l) : t = [l], l = null), "{" !== r && "}" !== r && ";" !== r && "," !== r && ")" !== r););
										if (t) return new Ee.Selector(t, u, f, h, i);
										u && s("Extend must be used to extend a selector, it cannot be used on its own")
									},
									selectors: function () {
										for (var e, t;
											(e = this.selector()) && (t ? t.push(e) : t = [e], o.commentStore.length = 0, e.condition && t.length > 1 && s("Guards are only currently allowed on a single selector."), o.$char(","));) e.condition && s("Guards are only currently allowed on a single selector."), o.commentStore.length = 0;
										return t
									},
									attribute: function () {
										if (o.$char("[")) {
											var e, t, n, i = this.entities;
											return (e = i.variableCurly()) || (e = a(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)), (n = o.$re(/^[|~*$^]?=/)) && (t = i.quoted() || o.$re(/^[0-9]+%/) || o.$re(/^[\w-]+/) || i.variableCurly()), l("]"), new Ee.Attribute(e, n, t)
										}
									},
									block: function () {
										var e;
										if (o.$char("{") && (e = this.primary()) && o.$char("}")) return e
									},
									blockRuleset: function () {
										var e = this.block();
										return e && (e = new Ee.Ruleset(null, e)), e
									},
									detachedRuleset: function () {
										var e, t, n;
										if (o.save(), !o.$re(/^[.#]\(/) || (t = (e = this.mixin.args(!1)).args, n = e.variadic, o.$char(")"))) {
											var i = this.blockRuleset();
											if (i) return o.forget(), t ? new Ee.mixin.Definition(null, t, i, null, n) : new Ee.DetachedRuleset(i);
											o.restore()
										} else o.restore()
									},
									ruleset: function () {
										var e, n, i;
										if (o.save(), t.dumpLineNumbers && (i = u(o.i)), (e = this.selectors()) && (n = this.block())) {
											o.forget();
											var r = new Ee.Ruleset(e, n, t.strictImports);
											return t.dumpLineNumbers && (r.debugInfo = i), r
										}
										o.restore()
									},
									declaration: function () {
										var e, t, n, r, s, a, l = o.i,
											u = o.currentChar();
										if ("." !== u && "#" !== u && "&" !== u && ":" !== u)
											if (o.save(), e = this.variable() || this.ruleProperty()) {
												if ((a = "string" == typeof e) && (t = this.detachedRuleset()) && (n = !0), o.commentStore.length = 0, !t) {
													if (s = !a && e.length > 1 && e.pop().value, t = e[0].value && "--" === e[0].value.slice(0, 2) ? this.permissiveValue() : this.anonymousValue()) return o.forget(), new Ee.Declaration(e, t, !1, s, l, i);
													t || (t = this.value()), t ? r = this.important() : a && (t = this.permissiveValue())
												}
												if (t && (this.end() || n)) return o.forget(), new Ee.Declaration(e, t, r, s, l, i);
												o.restore()
											} else o.restore()
									},
									anonymousValue: function () {
										var e = o.i,
											t = o.$re(/^([^.#@\$+\/'"*`(;{}-]*);/);
										if (t) return new Ee.Anonymous(t[1], e)
									},
									permissiveValue: function (e) {
										var t, n, r, a, l = e || ";",
											u = o.i,
											c = [];

										function f() {
											var e = o.currentChar();
											return "string" == typeof l ? e === l : l.test(e)
										}
										if (!f()) {
											a = [];
											do {
												((n = this.comment()) || (n = this.entity())) && a.push(n)
											} while (n);
											if (r = f(), a.length > 0) {
												if (a = new Ee.Expression(a), r) return a;
												c.push(a), " " === o.prevChar() && c.push(new Ee.Anonymous(" ", u))
											}
											if (o.save(), a = o.$parseUntil(l)) {
												if ("string" == typeof a && s("Expected '" + a + "'", "Parse"), 1 === a.length && " " === a[0]) return o.forget(), new Ee.Anonymous("", u);
												var h = void 0;
												for (t = 0; t < a.length; t++)
													if (h = a[t], Array.isArray(h)) c.push(new Ee.Quoted(h[0], h[1], !0, u, i));
													else {
														t === a.length - 1 && (h = h.trim());
														var p = new Ee.Quoted("'", h, !0, u, i);
														p.variableRegex = /@([\w-]+)/g, p.propRegex = /\$([\w-]+)/g, c.push(p)
													}
												return o.forget(), new Ee.Expression(c, !0)
											}
											o.restore()
										}
									},
									import: function () {
										var e, t, n = o.i,
											r = o.$re(/^@import?\s+/);
										if (r) {
											var a = (r ? this.importOptions() : null) || {};
											if (e = this.entities.quoted() || this.entities.url()) return t = this.mediaFeatures(), o.$char(";") || (o.i = n, s("missing semi-colon or unrecognised media features on import")), t = t && new Ee.Value(t), new Ee.Import(e, t, a, n, i);
											o.i = n, s("malformed import statement")
										}
									},
									importOptions: function () {
										var e, t, n, i = {};
										if (!o.$char("(")) return null;
										do {
											if (e = this.importOption()) {
												switch (n = !0, t = e) {
												case "css":
													t = "less", n = !1;
													break;
												case "once":
													t = "multiple", n = !1
												}
												if (i[t] = n, !o.$char(",")) break
											}
										} while (e);
										return l(")"), i
									},
									importOption: function () {
										var e = o.$re(/^(less|css|multiple|once|inline|reference|optional)/);
										if (e) return e[1]
									},
									mediaFeature: function () {
										var e, t, n = this.entities,
											r = [];
										o.save();
										do {
											(e = n.keyword() || n.variable() || n.mixinLookup()) ? r.push(e) : o.$char("(") && (t = this.property(), e = this.value(), o.$char(")") ? t && e ? r.push(new Ee.Paren(new Ee.Declaration(t, e, null, null, o.i, i, !0))) : e ? r.push(new Ee.Paren(e)) : s("badly formed media feature definition") : s("Missing closing ')'", "Parse"))
										} while (e);
										if (o.forget(), r.length > 0) return new Ee.Expression(r)
									},
									mediaFeatures: function () {
										var e, t = this.entities,
											n = [];
										do {
											if (e = this.mediaFeature()) {
												if (n.push(e), !o.$char(",")) break
											} else if ((e = t.variable() || t.mixinLookup()) && (n.push(e), !o.$char(","))) break
										} while (e);
										return n.length > 0 ? n : null
									},
									media: function () {
										var e, n, r, a, l = o.i;
										if (t.dumpLineNumbers && (a = u(l)), o.save(), o.$str("@media")) return e = this.mediaFeatures(), (n = this.block()) || s("media definitions require block statements after any features"), o.forget(), r = new Ee.Media(n, e, l, i), t.dumpLineNumbers && (r.debugInfo = a), r;
										o.restore()
									},
									plugin: function () {
										var e, t, n, r = o.i;
										if (o.$re(/^@plugin?\s+/)) {
											if (n = (t = this.pluginArgs()) ? {
												pluginArgs: t,
												isPlugin: !0
											} : {
												isPlugin: !0
											}, e = this.entities.quoted() || this.entities.url()) return o.$char(";") || (o.i = r, s("missing semi-colon on @plugin")), new Ee.Import(e, null, n, r, i);
											o.i = r, s("malformed @plugin statement")
										}
									},
									pluginArgs: function () {
										if (o.save(), !o.$char("(")) return o.restore(), null;
										var e = o.$re(/^\s*([^\);]+)\)\s*/);
										return e[1] ? (o.forget(), e[1].trim()) : (o.restore(), null)
									},
									atrule: function () {
										var e, n, r, a, l, c, f, h = o.i,
											p = !0,
											d = !0;
										if ("@" === o.currentChar()) {
											if (n = this.import() || this.plugin() || this.media()) return n;
											if (o.save(), e = o.$re(/^@[a-z-]+/)) {
												switch (a = e, "-" == e.charAt(1) && e.indexOf("-", 2) > 0 && (a = "@" + e.slice(e.indexOf("-", 2) + 1)), a) {
												case "@charset":
													l = !0, p = !1;
													break;
												case "@namespace":
													c = !0, p = !1;
													break;
												case "@keyframes":
												case "@counter-style":
													l = !0;
													break;
												case "@document":
												case "@supports":
													f = !0, d = !1;
													break;
												default:
													f = !0
												}
												if (o.commentStore.length = 0, l ? (n = this.entity()) || s("expected " + e + " identifier") : c ? (n = this.expression()) || s("expected " + e + " expression") : f && (n = this.permissiveValue(/^[{;]/), p = "{" === o.currentChar(), n ? n.value || (n = null) : p || ";" === o.currentChar() || s(e + " rule is missing block or ending semi-colon")), p && (r = this.blockRuleset()), r || !p && n && o.$char(";")) return o.forget(), new Ee.AtRule(e, n, r, h, i, t.dumpLineNumbers ? u(h) : null, d);
												o.restore("at-rule options not recognised")
											}
										}
									},
									value: function () {
										var e, t = [],
											n = o.i;
										do {
											if ((e = this.expression()) && (t.push(e), !o.$char(","))) break
										} while (e);
										if (t.length > 0) return new Ee.Value(t, n)
									},
									important: function () {
										if ("!" === o.currentChar()) return o.$re(/^! *important/)
									},
									sub: function () {
										var e, t;
										if (o.save(), o.$char("(")) return (e = this.addition()) && o.$char(")") ? (o.forget(), (t = new Ee.Expression([e])).parens = !0, t) : void o.restore("Expected ')'");
										o.restore()
									},
									multiplication: function () {
										var e, t, n, i, r;
										if (e = this.operand()) {
											for (r = o.isWhitespace(-1); !o.peek(/^\/[*\/]/);) {
												if (o.save(), !(n = o.$char("/") || o.$char("*") || o.$str("./"))) {
													o.forget();
													break
												}
												if (!(t = this.operand())) {
													o.restore();
													break
												}
												o.forget(), e.parensInOp = !0, t.parensInOp = !0, i = new Ee.Operation(n, [i || e, t], r), r = o.isWhitespace(-1)
											}
											return i || e
										}
									},
									addition: function () {
										var e, t, n, i, r;
										if (e = this.multiplication()) {
											for (r = o.isWhitespace(-1);
												(n = o.$re(/^[-+]\s+/) || !r && (o.$char("+") || o.$char("-"))) && (t = this.multiplication());) e.parensInOp = !0, t.parensInOp = !0, i = new Ee.Operation(n, [i || e, t], r), r = o.isWhitespace(-1);
											return i || e
										}
									},
									conditions: function () {
										var e, t, n, i = o.i;
										if (e = this.condition(!0)) {
											for (; o.peek(/^,\s*(not\s*)?\(/) && o.$char(",") && (t = this.condition(!0));) n = new Ee.Condition("or", n || e, t, i);
											return n || e
										}
									},
									condition: function (e) {
										var t, n, i;
										if (t = this.conditionAnd(e)) {
											if (n = o.$str("or")) {
												if (!(i = this.condition(e))) return;
												t = new Ee.Condition(n, t, i)
											}
											return t
										}
									},
									conditionAnd: function (e) {
										var t, n, i, r, s = this;
										if (t = (r = s.negatedCondition(e) || s.parenthesisCondition(e)) || e ? r : s.atomicCondition(e)) {
											if (n = o.$str("and")) {
												if (!(i = this.conditionAnd(e))) return;
												t = new Ee.Condition(n, t, i)
											}
											return t
										}
									},
									negatedCondition: function (e) {
										if (o.$str("not")) {
											var t = this.parenthesisCondition(e);
											return t && (t.negate = !t.negate), t
										}
									},
									parenthesisCondition: function (e) {
										var t;
										if (o.save(), o.$str("(")) {
											if (t = function (t) {
												var n;
												if (o.save(), n = t.condition(e)) {
													if (o.$char(")")) return o.forget(), n;
													o.restore()
												} else o.restore()
											}(this)) return o.forget(), t;
											if (t = this.atomicCondition(e)) {
												if (o.$char(")")) return o.forget(), t;
												o.restore("expected ')' got '" + o.currentChar() + "'")
											} else o.restore()
										} else o.restore()
									},
									atomicCondition: function (e) {
										var t, n, i, r, a = this.entities,
											l = o.i;

										function u() {
											return this.addition() || a.keyword() || a.quoted() || a.mixinLookup()
										}
										if (t = (u = u.bind(this))()) return o.$char(">") ? r = o.$char("=") ? ">=" : ">" : o.$char("<") ? r = o.$char("=") ? "<=" : "<" : o.$char("=") && (r = o.$char(">") ? "=>" : o.$char("<") ? "=<" : "="), r ? (n = u()) ? i = new Ee.Condition(r, t, n, l, !1) : s("expected expression") : i = new Ee.Condition("=", t, new Ee.Keyword("true"), l, !1), i
									},
									operand: function () {
										var e, t = this.entities;
										o.peek(/^-[@\$\(]/) && (e = o.$char("-"));
										var n = this.sub() || t.dimension() || t.color() || t.variable() || t.property() || t.call() || t.quoted(!0) || t.colorKeyword() || t.mixinLookup();
										return e && (n.parensInOp = !0, n = new Ee.Negative(n)), n
									},
									expression: function () {
										var e, t, n = [],
											i = o.i;
										do {
											(e = this.comment()) ? n.push(e) : ((e = this.addition() || this.entity()) instanceof Ee.Comment && (e = null), e && (n.push(e), o.peek(/^\/[\/*]/) || (t = o.$char("/")) && n.push(new Ee.Anonymous(t, i))))
										} while (e);
										if (n.length > 0) return new Ee.Expression(n)
									},
									property: function () {
										var e = o.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);
										if (e) return e[1]
									},
									ruleProperty: function () {
										var e, t, n = [],
											r = [];
										o.save();
										var s = o.$re(/^([_a-zA-Z0-9-]+)\s*:/);
										if (s) return n = [new Ee.Keyword(s[1])], o.forget(), n;

										function a(e) {
											var t = o.i,
												i = o.$re(e);
											if (i) return r.push(t), n.push(i[1])
										}
										for (a(/^(\*?)/); a(/^((?:[\w-]+)|(?:[@\$]\{[\w-]+\}))/););
										if (n.length > 1 && a(/^((?:\+_|\+)?)\s*:/)) {
											for (o.forget(), "" === n[0] && (n.shift(), r.shift()), t = 0; t < n.length; t++) e = n[t], n[t] = "@" !== e.charAt(0) && "$" !== e.charAt(0) ? new Ee.Keyword(e) : "@" === e.charAt(0) ? new Ee.Variable("@" + e.slice(2, -1), r[t], i) : new Ee.Property("$" + e.slice(2, -1), r[t], i);
											return n
										}
										o.restore()
									}
								}
							}
						};
					qe.serializeVars = function (e) {
						var t = "";
						for (var n in e)
							if (Object.hasOwnProperty.call(e, n)) {
								var i = e[n];
								t += ("@" === n[0] ? "" : "@") + n + ": " + i + (";" === String(i).slice(-1) ? "" : ";")
							}
						return t
					};
					var Ye, ze = {
						boolean: function (e) {
							return e ? F.True : F.False
						},
						if : function (e, t, n) {
							return e ? t : n || new D
						}
					};

					function Ge(e) {
						return Math.min(1, Math.max(0, e))
					}

					function We(e, t) {
						var n = Ye.hsla(t.h, t.s, t.l, t.a);
						if (n) return e.value && /^(rgb|hsl)/.test(e.value) ? n.value = e.value : n.value = "rgb", n
					}

					function He(e) {
						if (e.toHSL) return e.toHSL();
						throw new Error("Argument cannot be evaluated to a color")
					}

					function Ke(e) {
						if (e.toHSV) return e.toHSV();
						throw new Error("Argument cannot be evaluated to a color")
					}

					function Je(e) {
						if (e instanceof ee) return parseFloat(e.unit.is("%") ? e.value / 100 : e.value);
						if ("number" == typeof e) return e;
						throw {
							type: "Argument",
							message: "color functions take numbers as parameters"
						}
					}
					var Qe = Ye = {
						rgb: function (e, t, n) {
							var i = Ye.rgba(e, t, n, 1);
							if (i) return i.value = "rgb", i
						},
						rgba: function (e, t, n, i) {
							try {
								if (e instanceof h) return i = t ? Je(t) : e.alpha, new h(e.rgb, i, "rgba");
								var r = [e, t, n].map((function (e) {
									return n = 255, (t = e) instanceof ee && t.unit.is("%") ? parseFloat(t.value * n / 100) : Je(t);
									var t, n
								}));
								return i = Je(i), new h(r, i, "rgba")
							} catch (e) {}
						},
						hsl: function (e, t, n) {
							var i = Ye.hsla(e, t, n, 1);
							if (i) return i.value = "hsl", i
						},
						hsla: function (e, t, n, i) {
							try {
								if (e instanceof h) return i = t ? Je(t) : e.alpha, new h(e.rgb, i, "hsla");
								var r, o;

								function s(e) {
									return 6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? r + (o - r) * e * 6 : 2 * e < 1 ? o : 3 * e < 2 ? r + (o - r) * (2 / 3 - e) * 6 : r
								}
								e = Je(e) % 360 / 360, t = Ge(Je(t)), n = Ge(Je(n)), i = Ge(Je(i)), r = 2 * n - (o = n <= .5 ? n * (t + 1) : n + t - n * t);
								var a = [255 * s(e + 1 / 3), 255 * s(e), 255 * s(e - 1 / 3)];
								return i = Je(i), new h(a, i, "hsla")
							} catch (e) {}
						},
						hsv: function (e, t, n) {
							return Ye.hsva(e, t, n, 1)
						},
						hsva: function (e, t, n, i) {
							var r, o;
							e = Je(e) % 360 / 360 * 360, t = Je(t), n = Je(n), i = Je(i);
							var s = [n, n * (1 - t), n * (1 - (o = e / 60 - (r = Math.floor(e / 60 % 6))) * t), n * (1 - (1 - o) * t)],
								a = [
									[0, 3, 1],
									[2, 0, 1],
									[1, 0, 3],
									[1, 2, 0],
									[3, 1, 0],
									[0, 1, 2]
								];
							return Ye.rgba(255 * s[a[r][0]], 255 * s[a[r][1]], 255 * s[a[r][2]], i)
						},
						hue: function (e) {
							return new ee(He(e).h)
						},
						saturation: function (e) {
							return new ee(100 * He(e).s, "%")
						},
						lightness: function (e) {
							return new ee(100 * He(e).l, "%")
						},
						hsvhue: function (e) {
							return new ee(Ke(e).h)
						},
						hsvsaturation: function (e) {
							return new ee(100 * Ke(e).s, "%")
						},
						hsvvalue: function (e) {
							return new ee(100 * Ke(e).v, "%")
						},
						red: function (e) {
							return new ee(e.rgb[0])
						},
						green: function (e) {
							return new ee(e.rgb[1])
						},
						blue: function (e) {
							return new ee(e.rgb[2])
						},
						alpha: function (e) {
							return new ee(He(e).a)
						},
						luma: function (e) {
							return new ee(e.luma() * e.alpha * 100, "%")
						},
						luminance: function (e) {
							var t = .2126 * e.rgb[0] / 255 + .7152 * e.rgb[1] / 255 + .0722 * e.rgb[2] / 255;
							return new ee(t * e.alpha * 100, "%")
						},
						saturate: function (e, t, n) {
							if (!e.rgb) return null;
							var i = He(e);
							return void 0 !== n && "relative" === n.value ? i.s += i.s * t.value / 100 : i.s += t.value / 100, i.s = Ge(i.s), We(e, i)
						},
						desaturate: function (e, t, n) {
							var i = He(e);
							return void 0 !== n && "relative" === n.value ? i.s -= i.s * t.value / 100 : i.s -= t.value / 100, i.s = Ge(i.s), We(e, i)
						},
						lighten: function (e, t, n) {
							var i = He(e);
							return void 0 !== n && "relative" === n.value ? i.l += i.l * t.value / 100 : i.l += t.value / 100, i.l = Ge(i.l), We(e, i)
						},
						darken: function (e, t, n) {
							var i = He(e);
							return void 0 !== n && "relative" === n.value ? i.l -= i.l * t.value / 100 : i.l -= t.value / 100, i.l = Ge(i.l), We(e, i)
						},
						fadein: function (e, t, n) {
							var i = He(e);
							return void 0 !== n && "relative" === n.value ? i.a += i.a * t.value / 100 : i.a += t.value / 100, i.a = Ge(i.a), We(e, i)
						},
						fadeout: function (e, t, n) {
							var i = He(e);
							return void 0 !== n && "relative" === n.value ? i.a -= i.a * t.value / 100 : i.a -= t.value / 100, i.a = Ge(i.a), We(e, i)
						},
						fade: function (e, t) {
							var n = He(e);
							return n.a = t.value / 100, n.a = Ge(n.a), We(e, n)
						},
						spin: function (e, t) {
							var n = He(e),
								i = (n.h + t.value) % 360;
							return n.h = i < 0 ? 360 + i : i, We(e, n)
						},
						mix: function (e, t, n) {
							n || (n = new ee(50));
							var i = n.value / 100,
								r = 2 * i - 1,
								o = He(e).a - He(t).a,
								s = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
								a = 1 - s,
								l = [e.rgb[0] * s + t.rgb[0] * a, e.rgb[1] * s + t.rgb[1] * a, e.rgb[2] * s + t.rgb[2] * a],
								u = e.alpha * i + t.alpha * (1 - i);
							return new h(l, u)
						},
						greyscale: function (e) {
							return Ye.desaturate(e, new ee(100))
						},
						contrast: function (e, t, n, i) {
							if (!e.rgb) return null;
							if (void 0 === n && (n = Ye.rgba(255, 255, 255, 1)), void 0 === t && (t = Ye.rgba(0, 0, 0, 1)), t.luma() > n.luma()) {
								var r = n;
								n = t, t = r
							}
							return i = void 0 === i ? .43 : Je(i), e.luma() < i ? n : t
						},
						argb: function (e) {
							return new D(e.toARGB())
						},
						color: function (e) {
							if (e instanceof ce && /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})$/i.test(e.value)) {
								var t = e.value.slice(1);
								return new h(t, void 0, "#" + t)
							}
							if (e instanceof h || (e = h.fromKeyword(e.value))) return e.value = void 0, e;
							throw {
								type: "Argument",
								message: "argument must be a color keyword or 3|4|6|8 digit hex e.g. #FFF"
							}
						},
						tint: function (e, t) {
							return Ye.mix(Ye.rgb(255, 255, 255), e, t)
						},
						shade: function (e, t) {
							return Ye.mix(Ye.rgb(0, 0, 0), e, t)
						}
					};

					function Ze(e, t, n) {
						var i, r, o, s, a = t.alpha,
							l = n.alpha,
							u = [];
						o = l + a * (1 - l);
						for (var c = 0; c < 3; c++) s = e(i = t.rgb[c] / 255, r = n.rgb[c] / 255), o && (s = (l * r + a * (i - l * (i + r - s))) / o), u[c] = 255 * s;
						return new h(u, o)
					}
					var Xe = {
						multiply: function (e, t) {
							return e * t
						},
						screen: function (e, t) {
							return e + t - e * t
						},
						overlay: function (e, t) {
							return (e *= 2) <= 1 ? Xe.multiply(e, t) : Xe.screen(e - 1, t)
						},
						softlight: function (e, t) {
							var n = 1,
								i = e;
							return t > .5 && (i = 1, n = e > .25 ? Math.sqrt(e) : ((16 * e - 12) * e + 4) * e), e - (1 - 2 * t) * i * (n - e)
						},
						hardlight: function (e, t) {
							return Xe.overlay(t, e)
						},
						difference: function (e, t) {
							return Math.abs(e - t)
						},
						exclusion: function (e, t) {
							return e + t - 2 * e * t
						},
						average: function (e, t) {
							return (e + t) / 2
						},
						negation: function (e, t) {
							return 1 - Math.abs(e + t - 1)
						}
					};
					for (var et in Xe) Xe.hasOwnProperty(et) && (Ze[et] = Ze.bind(null, Xe[et]));
					var tt = function (e) {
							return Array.isArray(e.value) ? e.value : Array(e)
						},
						nt = {
							_SELF: function (e) {
								return e
							},
							extract: function (e, t) {
								return t = t.value - 1, tt(e)[t]
							},
							length: function (e) {
								return new ee(tt(e).length)
							},
							range: function (e, t, n) {
								var i, r, o = 1,
									s = [];
								t ? (r = t, i = e.value, n && (o = n.value)) : (i = 1, r = e);
								for (var a = i; a <= r.value; a += o) s.push(new ee(a, r.unit));
								return new re(s)
							},
							each: function (e, t) {
								var n, i, r = [];
								i = !e.value || e instanceof ce ? e.ruleset ? e.ruleset.rules : e.rules ? e.rules : Array.isArray(e) ? e : [e] : Array.isArray(e.value) ? e.value : [e.value];
								var o = "@value",
									s = "@key",
									a = "@index";
								t.params ? (o = t.params[0] && t.params[0].name, s = t.params[1] && t.params[1].name, a = t.params[2] && t.params[2].name, t = t.rules) : t = t.ruleset;
								for (var l = 0; l < i.length; l++) {
									var u = void 0,
										c = void 0,
										f = i[l];
									f instanceof V ? (u = "string" == typeof f.name ? f.name : f.name[0].value, c = f.value) : (u = new ee(l + 1), c = f), f instanceof $ || (n = t.rules.slice(0), o && n.push(new V(o, c, !1, !1, this.index, this.currentFileInfo)), a && n.push(new V(a, new ee(l + 1), !1, !1, this.index, this.currentFileInfo)), s && n.push(new V(s, u, !1, !1, this.index, this.currentFileInfo)), r.push(new J([new N([new y("", "&")])], n, t.strictImports, t.visibilityInfo())))
								}
								return new J([new N([new y("", "&")])], r, t.strictImports, t.visibilityInfo()).eval(this.context)
							}
						},
						it = function (e, t, n) {
							if (!(n instanceof ee)) throw {
								type: "Argument",
								message: "argument must be a number"
							};
							return null == t ? t = n.unit : n = n.unify(), new ee(e(parseFloat(n.value)), t)
						},
						rt = {
							ceil: null,
							floor: null,
							sqrt: null,
							abs: null,
							tan: "",
							sin: "",
							cos: "",
							atan: "rad",
							asin: "rad",
							acos: "rad"
						};
					for (var ot in rt) rt.hasOwnProperty(ot) && (rt[ot] = it.bind(null, Math[ot], rt[ot]));
					rt.round = function (e, t) {
						var n = void 0 === t ? 0 : t.value;
						return it((function (e) {
							return e.toFixed(n)
						}), null, e)
					};
					var st, at = function (e, t) {
							switch ((t = Array.prototype.slice.call(t)).length) {
							case 0:
								throw {
									type: "Argument",
									message: "one or more arguments required"
								}
							}
							var n, i, r, o, s, a, l, u, c = [],
								f = {};
							for (n = 0; n < t.length; n++)
								if ((r = t[n]) instanceof ee)
									if (l = "" !== (a = "" === (o = "" === r.unit.toString() && void 0 !== u ? new ee(r.value, u).unify() : r.unify()).unit.toString() && void 0 !== l ? l : o.unit.toString()) && void 0 === l || "" !== a && "" === c[0].unify().unit.toString() ? a : l, u = "" !== a && void 0 === u ? r.unit.toString() : u, void 0 !== (i = void 0 !== f[""] && "" !== a && a === l ? f[""] : f[a])) s = "" === c[i].unit.toString() && void 0 !== u ? new ee(c[i].value, u).unify() : c[i].unify(), (e && o.value < s.value || !e && o.value > s.value) && (c[i] = r);
									else {
										if (void 0 !== l && a !== l) throw {
											type: "Argument",
											message: "incompatible types"
										};
										f[a] = c.length, c.push(r)
									} else Array.isArray(t[n].value) && Array.prototype.push.apply(t, Array.prototype.slice.call(t[n].value));
							return 1 == c.length ? c[0] : (t = c.map((function (e) {
								return e.toCSS(this.context)
							})).join(this.context.compress ? "," : ", "), new D((e ? "min" : "max") + "(" + t + ")"))
						},
						lt = {
							min: function () {
								for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
								return at(!0, e)
							},
							max: function () {
								for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
								return at(!1, e)
							},
							convert: function (e, t) {
								return e.convertTo(t.value)
							},
							pi: function () {
								return new ee(Math.PI)
							},
							mod: function (e, t) {
								return new ee(e.value % t.value, e.unit)
							},
							pow: function (e, t) {
								if ("number" == typeof e && "number" == typeof t) e = new ee(e), t = new ee(t);
								else if (!(e instanceof ee && t instanceof ee)) throw {
									type: "Argument",
									message: "arguments must be numbers"
								};
								return new ee(Math.pow(e.value, t.value), e.unit)
							},
							percentage: function (e) {
								return it((function (e) {
									return 100 * e
								}), "%", e)
							}
						},
						ut = {
							e: function (e) {
								return new ce('"', e instanceof de ? e.evaluated : e.value, !0)
							},
							escape: function (e) {
								return new D(encodeURI(e.value).replace(/=/g, "%3D").replace(/:/g, "%3A").replace(/#/g, "%23").replace(/;/g, "%3B").replace(/\(/g, "%28").replace(/\)/g, "%29"))
							},
							replace: function (e, t, n, i) {
								var r = e.value;
								return n = "Quoted" === n.type ? n.value : n.toCSS(), r = r.replace(new RegExp(t.value, i ? i.value : ""), n), new ce(e.quote || "", r, e.escaped)
							},
							"%": function (e) {
								for (var t = Array.prototype.slice.call(arguments, 1), n = e.value, i = function (e) {
									n = n.replace(/%[sda]/i, (function (n) {
										var i = "Quoted" === t[e].type && n.match(/s/i) ? t[e].value : t[e].toCSS();
										return n.match(/[A-Z]$/) ? encodeURIComponent(i) : i
									}))
								}, r = 0; r < t.length; r++) i(r);
								return n = n.replace(/%%/g, "%"), new ce(e.quote || "", n, e.escaped)
							}
						},
						ct = function (e, t) {
							return e instanceof t ? F.True : F.False
						},
						ft = function (e, t) {
							if (void 0 === t) throw {
								type: "Argument",
								message: "missing the required second argument to isunit."
							};
							if ("string" != typeof (t = "string" == typeof t.value ? t.value : t)) throw {
								type: "Argument",
								message: "Second argument to isunit should be a unit or a string."
							};
							return e instanceof ee && e.unit.is(t) ? F.True : F.False
						},
						ht = {
							isruleset: function (e) {
								return ct(e, Z)
							},
							iscolor: function (e) {
								return ct(e, h)
							},
							isnumber: function (e) {
								return ct(e, ee)
							},
							isstring: function (e) {
								return ct(e, ce)
							},
							iskeyword: function (e) {
								return ct(e, F)
							},
							isurl: function (e) {
								return ct(e, fe)
							},
							ispixel: function (e) {
								return ft(e, "px")
							},
							ispercentage: function (e) {
								return ft(e, "%")
							},
							isem: function (e) {
								return ft(e, "em")
							},
							isunit: ft,
							unit: function (e, t) {
								if (!(e instanceof ee)) throw {
									type: "Argument",
									message: "the first argument to unit must be a number" + (e instanceof ne ? ". Have you forgotten parenthesis?" : "")
								};
								return t = t ? t instanceof F ? t.value : t.toCSS() : "", new ee(e.value, t)
							},
							"get-unit": function (e) {
								return new D(e.unit)
							}
						},
						pt = function (e) {
							var t = {
								functionRegistry: H,
								functionCaller: oe
							};
							return H.addMultiple(ze), H.add("default", K.eval.bind(K)), H.addMultiple(Qe), H.addMultiple(Ze), H.addMultiple(function (e) {
								var t = function (e, t) {
									return new fe(t, e.index, e.currentFileInfo).eval(e.context)
								};
								return {
									"data-uri": function (n, i) {
										i || (i = n, n = null);
										var r = n && n.value,
											o = i.value,
											s = this.currentFileInfo,
											a = s.rewriteUrls ? s.currentDirectory : s.entryPath,
											l = o.indexOf("#"),
											u = ""; - 1 !== l && (u = o.slice(l), o = o.slice(0, l));
										var c = _(this.context);
										c.rawBuffer = !0;
										var f = e.getFileManager(o, a, c, e, !0);
										if (!f) return t(this, i);
										var h = !1;
										if (n) h = /;base64$/.test(r);
										else {
											if ("image/svg+xml" === (r = e.mimeLookup(o))) h = !1;
											else {
												var p = e.charsetLookup(r);
												h = ["US-ASCII", "UTF-8"].indexOf(p) < 0
											}
											h && (r += ";base64")
										}
										var d = f.loadFileSync(o, a, c, e);
										if (!d.contents) return Ie.warn("Skipped data-uri embedding of " + o + " because file not found"), t(this, i || n);
										var v = d.contents;
										if (h && !e.encodeBase64) return t(this, i);
										var m = "data:" + r + "," + (v = h ? e.encodeBase64(v) : encodeURIComponent(v)) + u;
										return new fe(new ce('"' + m + '"', m, !1, this.index, this.currentFileInfo), this.index, this.currentFileInfo)
									}
								}
							}(e)), H.addMultiple(nt), H.addMultiple(rt), H.addMultiple(lt), H.addMultiple(ut), H.addMultiple({
								"svg-gradient": function (e) {
									var t, n, i, r, o, s, a, l, u = "linear",
										c = 'x="0" y="0" width="1" height="1"',
										f = {
											compress: !1
										},
										p = e.toCSS(f);

									function d() {
										throw {
											type: "Argument",
											message: "svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position] or direction, color list"
										}
									}
									switch (2 == arguments.length ? (arguments[1].value.length < 2 && d(), t = arguments[1].value) : arguments.length < 3 ? d() : t = Array.prototype.slice.call(arguments, 1), p) {
									case "to bottom":
										n = 'x1="0%" y1="0%" x2="0%" y2="100%"';
										break;
									case "to right":
										n = 'x1="0%" y1="0%" x2="100%" y2="0%"';
										break;
									case "to bottom right":
										n = 'x1="0%" y1="0%" x2="100%" y2="100%"';
										break;
									case "to top right":
										n = 'x1="0%" y1="100%" x2="100%" y2="0%"';
										break;
									case "ellipse":
									case "ellipse at center":
										u = "radial", n = 'cx="50%" cy="50%" r="75%"', c = 'x="-50" y="-50" width="101" height="101"';
										break;
									default:
										throw {
											type: "Argument",
											message: "svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"
										}
									}
									for (i = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><' + u + 'Gradient id="g" ' + n + ">", r = 0; r < t.length; r += 1) t[r] instanceof re ? (o = t[r].value[0], s = t[r].value[1]) : (o = t[r], s = void 0), o instanceof h && ((0 === r || r + 1 === t.length) && void 0 === s || s instanceof ee) || d(), a = s ? s.toCSS(f) : 0 === r ? "0%" : "100%", l = o.alpha, i += '<stop offset="' + a + '" stop-color="' + o.toRGB() + '"' + (l < 1 ? ' stop-opacity="' + l + '"' : "") + "/>";
									return i += "</" + u + "Gradient><rect " + c + ' fill="url(#g)" /></svg>', i = encodeURIComponent(i), new fe(new ce("'" + (i = "data:image/svg+xml," + i) + "'", i, !1, this.index, this.currentFileInfo), this.index, this.currentFileInfo)
								}
							}), H.addMultiple(ht), t
						},
						dt = function (e, t) {
							var n;
							void 0 === t && (t = {});
							var i = t.variables,
								r = new j.Eval(t);
							"object" != typeof i || Array.isArray(i) || (i = Object.keys(i).map((function (e) {
								var t = i[e];
								return t instanceof Ee.Value || (t instanceof Ee.Expression || (t = new Ee.Expression([t])), t = new Ee.Value([t])), new Ee.Declaration("@" + e, t, !1, null, 0)
							})), r.frames = [new Ee.Ruleset(null, i)]);
							var o, s, a = [new $e.JoinSelectorVisitor, new $e.MarkVisibleSelectorsVisitor(!0), new $e.ExtendVisitor, new $e.ToCSSVisitor({
									compress: Boolean(t.compress)
								})],
								l = [];
							if (t.pluginManager) {
								s = t.pluginManager.visitor();
								for (var u = 0; u < 2; u++)
									for (s.first(); o = s.get();) o.isPreEvalVisitor ? 0 !== u && -1 !== l.indexOf(o) || (l.push(o), o.run(e)) : 0 !== u && -1 !== a.indexOf(o) || (o.isPreVisitor ? a.unshift(o) : a.push(o))
							}
							for (n = e.eval(r), u = 0; u < a.length; u++) a[u].run(n);
							if (t.pluginManager)
								for (s.first(); o = s.get();) - 1 === a.indexOf(o) && -1 === l.indexOf(o) && o.run(n);
							return n
						},
						vt = function () {
							function e(e) {
								this.less = e, this.visitors = [], this.preProcessors = [], this.postProcessors = [], this.installedPlugins = [], this.fileManagers = [], this.iterator = -1, this.pluginCache = {}, this.Loader = new e.PluginLoader(e)
							}
							return e.prototype.addPlugins = function (e) {
								if (e)
									for (var t = 0; t < e.length; t++) this.addPlugin(e[t])
							}, e.prototype.addPlugin = function (e, t, n) {
								this.installedPlugins.push(e), t && (this.pluginCache[t] = e), e.install && e.install(this.less, this, n || this.less.functions.functionRegistry)
							}, e.prototype.get = function (e) {
								return this.pluginCache[e]
							}, e.prototype.addVisitor = function (e) {
								this.visitors.push(e)
							}, e.prototype.addPreProcessor = function (e, t) {
								var n;
								for (n = 0; n < this.preProcessors.length && !(this.preProcessors[n].priority >= t); n++);
								this.preProcessors.splice(n, 0, {
									preProcessor: e,
									priority: t
								})
							}, e.prototype.addPostProcessor = function (e, t) {
								var n;
								for (n = 0; n < this.postProcessors.length && !(this.postProcessors[n].priority >= t); n++);
								this.postProcessors.splice(n, 0, {
									postProcessor: e,
									priority: t
								})
							}, e.prototype.addFileManager = function (e) {
								this.fileManagers.push(e)
							}, e.prototype.getPreProcessors = function () {
								for (var e = [], t = 0; t < this.preProcessors.length; t++) e.push(this.preProcessors[t].preProcessor);
								return e
							}, e.prototype.getPostProcessors = function () {
								for (var e = [], t = 0; t < this.postProcessors.length; t++) e.push(this.postProcessors[t].postProcessor);
								return e
							}, e.prototype.getVisitors = function () {
								return this.visitors
							}, e.prototype.visitor = function () {
								var e = this;
								return {
									first: function () {
										return e.iterator = -1, e.visitors[e.iterator]
									},
									get: function () {
										return e.iterator += 1, e.visitors[e.iterator]
									}
								}
							}, e.prototype.getFileManagers = function () {
								return this.fileManagers
							}, e
						}();

					function mt(e, t) {
						return !t && st || (st = new vt(e)), st
					}
					var gt, yt, bt = function (e, t) {
							var n, i = function (e) {
									return function () {
										function t(t) {
											this._css = [], this._rootNode = t.rootNode, this._contentsMap = t.contentsMap, this._contentsIgnoredCharsMap = t.contentsIgnoredCharsMap, t.sourceMapFilename && (this._sourceMapFilename = t.sourceMapFilename.replace(/\\/g, "/")), this._outputFilename = t.outputFilename, this.sourceMapURL = t.sourceMapURL, t.sourceMapBasepath && (this._sourceMapBasepath = t.sourceMapBasepath.replace(/\\/g, "/")), t.sourceMapRootpath ? (this._sourceMapRootpath = t.sourceMapRootpath.replace(/\\/g, "/"), "/" !== this._sourceMapRootpath.charAt(this._sourceMapRootpath.length - 1) && (this._sourceMapRootpath += "/")) : this._sourceMapRootpath = "", this._outputSourceFiles = t.outputSourceFiles, this._sourceMapGeneratorConstructor = e.getSourceMapGenerator(), this._lineNumber = 0, this._column = 0
										}
										return t.prototype.removeBasepath = function (e) {
											return this._sourceMapBasepath && 0 === e.indexOf(this._sourceMapBasepath) && ("\\" !== (e = e.substring(this._sourceMapBasepath.length)).charAt(0) && "/" !== e.charAt(0) || (e = e.substring(1))), e
										}, t.prototype.normalizeFilename = function (e) {
											return e = e.replace(/\\/g, "/"), e = this.removeBasepath(e), (this._sourceMapRootpath || "") + e
										}, t.prototype.add = function (e, t, n, i) {
											if (e) {
												var r, o, s, a, l;
												if (t && t.filename) {
													var u = this._contentsMap[t.filename];
													if (this._contentsIgnoredCharsMap[t.filename] && ((n -= this._contentsIgnoredCharsMap[t.filename]) < 0 && (n = 0), u = u.slice(this._contentsIgnoredCharsMap[t.filename])), void 0 === u) return;
													a = (o = (u = u.substring(0, n)).split("\n"))[o.length - 1]
												}
												if (s = (r = e.split("\n"))[r.length - 1], t && t.filename)
													if (i)
														for (l = 0; l < r.length; l++) this._sourceMapGenerator.addMapping({
															generated: {
																line: this._lineNumber + l + 1,
																column: 0 === l ? this._column : 0
															},
															original: {
																line: o.length + l,
																column: 0 === l ? a.length : 0
															},
															source: this.normalizeFilename(t.filename)
														});
													else this._sourceMapGenerator.addMapping({
														generated: {
															line: this._lineNumber + 1,
															column: this._column
														},
														original: {
															line: o.length,
															column: a.length
														},
														source: this.normalizeFilename(t.filename)
													});
												1 === r.length ? this._column += s.length : (this._lineNumber += r.length - 1, this._column = s.length), this._css.push(e)
											}
										}, t.prototype.isEmpty = function () {
											return 0 === this._css.length
										}, t.prototype.toCSS = function (e) {
											if (this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({
												file: this._outputFilename,
												sourceRoot: null
											}), this._outputSourceFiles)
												for (var t in this._contentsMap)
													if (this._contentsMap.hasOwnProperty(t)) {
														var n = this._contentsMap[t];
														this._contentsIgnoredCharsMap[t] && (n = n.slice(this._contentsIgnoredCharsMap[t])), this._sourceMapGenerator.setSourceContent(this.normalizeFilename(t), n)
													}
											if (this._rootNode.genCSS(e, this), this._css.length > 0) {
												var i = void 0,
													r = JSON.stringify(this._sourceMapGenerator.toJSON());
												this.sourceMapURL ? i = this.sourceMapURL : this._sourceMapFilename && (i = this._sourceMapFilename), this.sourceMapURL = i, this.sourceMap = r
											}
											return this._css.join("")
										}, t
									}()
								}(e = new _e(e, t)),
								r = function (e, t) {
									return function () {
										function n(e) {
											this.options = e
										}
										return n.prototype.toCSS = function (t, n, i) {
											var r = new e({
													contentsIgnoredCharsMap: i.contentsIgnoredChars,
													rootNode: t,
													contentsMap: i.contents,
													sourceMapFilename: this.options.sourceMapFilename,
													sourceMapURL: this.options.sourceMapURL,
													outputFilename: this.options.sourceMapOutputFilename,
													sourceMapBasepath: this.options.sourceMapBasepath,
													sourceMapRootpath: this.options.sourceMapRootpath,
													outputSourceFiles: this.options.outputSourceFiles,
													sourceMapGenerator: this.options.sourceMapGenerator,
													sourceMapFileInline: this.options.sourceMapFileInline
												}),
												o = r.toCSS(n);
											return this.sourceMap = r.sourceMap, this.sourceMapURL = r.sourceMapURL, this.options.sourceMapInputFilename && (this.sourceMapInputFilename = r.normalizeFilename(this.options.sourceMapInputFilename)), void 0 !== this.options.sourceMapBasepath && void 0 !== this.sourceMapURL && (this.sourceMapURL = r.removeBasepath(this.sourceMapURL)), o + this.getCSSAppendage()
										}, n.prototype.getCSSAppendage = function () {
											var e = this.sourceMapURL;
											if (this.options.sourceMapFileInline) {
												if (void 0 === this.sourceMap) return "";
												e = "data:application/json;base64," + t.encodeBase64(this.sourceMap)
											}
											return e ? "/*# sourceMappingURL=" + e + " */" : ""
										}, n.prototype.getExternalSourceMap = function () {
											return this.sourceMap
										}, n.prototype.setExternalSourceMap = function (e) {
											this.sourceMap = e
										}, n.prototype.isInline = function () {
											return this.options.sourceMapFileInline
										}, n.prototype.getSourceMapURL = function () {
											return this.sourceMapURL
										}, n.prototype.getOutputFilename = function () {
											return this.options.sourceMapOutputFilename
										}, n.prototype.getInputFilename = function () {
											return this.sourceMapInputFilename
										}, n
									}()
								}(i, e),
								o = function (e) {
									return function () {
										function t(e, t) {
											this.root = e, this.imports = t
										}
										return t.prototype.toCSS = function (t) {
											var n, i, r = {};
											try {
												n = dt(this.root, t)
											} catch (e) {
												throw new O(e, this.imports)
											}
											try {
												var o = Boolean(t.compress);
												o && Ie.warn("The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css.");
												var s = {
													compress: o,
													dumpLineNumbers: t.dumpLineNumbers,
													strictUnits: Boolean(t.strictUnits),
													numPrecision: 8
												};
												t.sourceMap ? (i = new e(t.sourceMap), r.css = i.toCSS(n, s, this.imports)) : r.css = n.toCSS(s)
											} catch (e) {
												throw new O(e, this.imports)
											}
											if (t.pluginManager)
												for (var a = t.pluginManager.getPostProcessors(), l = 0; l < a.length; l++) r.css = a[l].process(r.css, {
													sourceMap: i,
													options: t,
													imports: this.imports
												});
											t.sourceMap && (r.map = i.getExternalSourceMap());
											var u = this.imports.rootFilename;
											return r.imports = this.imports.files.filter((function (e) {
												return e !== u
											})), r
										}, t
									}()
								}(r),
								s = function (e) {
									return function () {
										function t(e, t, n) {
											this.less = e, this.rootFilename = n.filename, this.paths = t.paths || [], this.contents = {}, this.contentsIgnoredChars = {}, this.mime = t.mime, this.error = null, this.context = t, this.queue = [], this.files = []
										}
										return t.prototype.push = function (t, n, i, r, o) {
											var s = this,
												a = this.context.pluginManager.Loader;
											this.queue.push(t);
											var l = function (e, n, i) {
													s.queue.splice(s.queue.indexOf(t), 1);
													var a = i === s.rootFilename;
													if (r.optional && e) o(null, {
														rules: []
													}, !1, null), Ie.info("The file " + i + " was skipped because it was not found and the import was marked optional.");
													else {
														var l = s.files; - 1 === l.indexOf(i) && l.push(i), e && !s.error && (s.error = e), o(e, n, a, i)
													}
												},
												u = {
													rewriteUrls: this.context.rewriteUrls,
													entryPath: i.entryPath,
													rootpath: i.rootpath,
													rootFilename: i.rootFilename
												},
												c = e.getFileManager(t, i.currentDirectory, this.context, e);
											if (c) {
												var f, h = function (e) {
														var t, n = e.filename,
															o = e.contents.replace(/^\uFEFF/, "");
														u.currentDirectory = c.getPath(n), u.rewriteUrls && (u.rootpath = c.join(s.context.rootpath || "", c.pathDiff(u.currentDirectory, u.entryPath)), !c.isPathAbsolute(u.rootpath) && c.alwaysMakePathsAbsolute() && (u.rootpath = c.join(u.entryPath, u.rootpath))), u.filename = n;
														var f = new j.Parse(s.context);
														f.processImports = !1, s.contents[n] = o, (i.reference || r.reference) && (u.reference = !0), r.isPlugin ? (t = a.evalPlugin(o, f, s, r.pluginArgs, u)) instanceof O ? l(t, null, n) : l(null, t, n) : r.inline ? l(null, o, n) : new qe(f, s, u).parse(o, (function (e, t) {
															l(e, t, n)
														}))
													},
													p = _(this.context);
												n && (p.ext = r.isPlugin ? ".js" : ".less"), r.isPlugin ? (p.mime = "application/javascript", f = a.loadPlugin(t, i.currentDirectory, p, e, c)) : f = c.loadFile(t, i.currentDirectory, p, e, (function (e, t) {
													e ? l(e) : h(t)
												})), f && f.then(h, l)
											} else l({
												message: "Could not find a file-manager for " + t
											})
										}, t
									}()
								}(e),
								l = function (e, t, n) {
									var i = function (e, n, r) {
										if ("function" == typeof n ? (r = n, n = k(this.options, {})) : n = k(this.options, n || {}), !r) {
											var o = this;
											return new Promise((function (t, r) {
												i.call(o, e, n, (function (e, n) {
													e ? r(e) : t(n)
												}))
											}))
										}
										this.parse(e, n, (function (e, n, i, o) {
											if (e) return r(e);
											var s;
											try {
												s = new t(n, i).toCSS(o)
											} catch (e) {
												return r(e)
											}
											r(null, s)
										}))
									};
									return i
								}(0, o),
								u = function (e, t, n) {
									var i = function (e, t, r) {
										if ("function" == typeof t ? (r = t, t = k(this.options, {})) : t = k(this.options, t || {}), !r) {
											var o = this;
											return new Promise((function (n, r) {
												i.call(o, e, t, (function (e, t) {
													e ? r(e) : n(t)
												}))
											}))
										}
										var s, a = void 0,
											l = new mt(this, !t.reUsePluginManager);
										if (t.pluginManager = l, s = new j.Parse(t), t.rootFileInfo) a = t.rootFileInfo;
										else {
											var u = t.filename || "input",
												c = u.replace(/[^\/\\]*$/, "");
											(a = {
												filename: u,
												rewriteUrls: s.rewriteUrls,
												rootpath: s.rootpath || "",
												currentDirectory: c,
												entryPath: c,
												rootFilename: u
											}).rootpath && "/" !== a.rootpath.slice(-1) && (a.rootpath += "/")
										}
										var f = new n(this, s, a);
										this.importManager = f, t.plugins && t.plugins.forEach((function (e) {
											var t, n;
											if (e.fileContent) {
												if (n = e.fileContent.replace(/^\uFEFF/, ""), (t = l.Loader.evalPlugin(n, s, f, e.options, e.filename)) instanceof O) return r(t)
											} else l.addPlugin(e)
										})), new qe(s, f, a).parse(e, (function (e, n) {
											if (e) return r(e);
											r(null, n, f, t)
										}), t)
									};
									return i
								}(0, 0, s),
								f = pt(e),
								h = {
									version: [3, 11, 3],
									data: c,
									tree: Ee,
									Environment: _e,
									AbstractFileManager: Ae,
									AbstractPluginLoader: ke,
									environment: e,
									visitors: $e,
									Parser: qe,
									functions: f,
									contexts: j,
									SourceMapOutput: i,
									SourceMapBuilder: r,
									ParseTree: o,
									ImportManager: s,
									render: l,
									parse: u,
									LessError: O,
									transformTree: dt,
									utils: T,
									PluginManager: mt,
									logger: Ie
								},
								p = function (e) {
									return function () {
										for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
										return new(e.bind.apply(e, a([void 0], t)))
									}
								},
								d = Object.create(h);
							for (var v in h.tree)
								if ("function" == typeof (n = h.tree[v])) d[v.toLowerCase()] = p(n);
								else
									for (var m in d[v] = Object.create(null), n) d[v][m.toLowerCase()] = p(n[m]);
							return d
						},
						wt = {},
						St = function (e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return s(t, e), t.prototype.alwaysMakePathsAbsolute = function () {
								return !0
							}, t.prototype.join = function (e, t) {
								return e ? this.extractUrlParts(t, e).path : t
							}, t.prototype.doXHR = function (e, t, n, i) {
								var r = new XMLHttpRequest,
									o = !gt.isFileProtocol || gt.fileAsync;

								function s(t, n, i) {
									t.status >= 200 && t.status < 300 ? n(t.responseText, t.getResponseHeader("Last-Modified")) : "function" == typeof i && i(t.status, e)
								}
								"function" == typeof r.overrideMimeType && r.overrideMimeType("text/css"), yt.debug("XHR: Getting '" + e + "'"), r.open("GET", e, o), r.setRequestHeader("Accept", t || "text/x-less, text/css; q=0.9, */*; q=0.5"), r.send(null), gt.isFileProtocol && !gt.fileAsync ? 0 === r.status || r.status >= 200 && r.status < 300 ? n(r.responseText) : i(r.status, e) : o ? r.onreadystatechange = function () {
									4 == r.readyState && s(r, n, i)
								} : s(r, n, i)
							}, t.prototype.supports = function () {
								return !0
							}, t.prototype.clearFileCache = function () {
								wt = {}
							}, t.prototype.loadFile = function (e, t, n, i) {
								t && !this.isPathAbsolute(e) && (e = t + e), e = n.ext ? this.tryAppendExtension(e, n.ext) : e, n = n || {};
								var r = this.extractUrlParts(e, window.location.href).url,
									o = this;
								return new Promise((function (e, t) {
									if (n.useFileCache && wt[r]) try {
										var i = wt[r];
										return e({
											contents: i,
											filename: r,
											webInfo: {
												lastModified: new Date
											}
										})
									} catch (e) {
										return t({
											filename: r,
											message: "Error loading file " + r + " error was " + e.message
										})
									}
									o.doXHR(r, n.mime, (function (t, n) {
										wt[r] = t, e({
											contents: t,
											filename: r,
											webInfo: {
												lastModified: n
											}
										})
									}), (function (e, n) {
										t({
											type: "File",
											message: "'" + n + "' wasn't found (" + e + ")",
											href: r
										})
									}))
								}))
							}, t
						}(Ae),
						Ct = function (e, t) {
							return gt = e, yt = t, St
						},
						xt = function (e) {
							function t(t) {
								var n = e.call(this) || this;
								return n.less = t, n
							}
							return s(t, e), t.prototype.loadPlugin = function (e, t, n, i, r) {
								return new Promise((function (o, s) {
									r.loadFile(e, t, n, i).then(o).catch(s)
								}))
							}, t
						}(ke),
						Et = function (t, n, r) {
							return {
								add: function (o, s) {
									r.errorReporting && "html" !== r.errorReporting ? "console" === r.errorReporting ? function (e, t) {
										var i = e.filename || t,
											o = [],
											s = (e.type || "Syntax") + "Error: " + (e.message || "There is an error in your .less file") + " in " + i,
											a = function (e, t, n) {
												void 0 !== e.extract[t] && o.push("{line} {content}".replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (t - 1)).replace(/\{class\}/, n).replace(/\{content\}/, e.extract[t]))
											};
										e.line && (a(e, 0, ""), a(e, 1, "line"), a(e, 2, ""), s += " on line " + e.line + ", column " + (e.column + 1) + ":\n" + o.join("\n")), e.stack && (e.extract || r.logLevel >= 4) && (s += "\nStack Trace\n" + e.stack), n.logger.error(s)
									}(o, s) : "function" == typeof r.errorReporting && r.errorReporting("add", o, s) : function (n, o) {
										var s, a, l = "less-error-message:" + e(o || ""),
											u = t.document.createElement("div"),
											c = [],
											f = n.filename || o,
											h = f.match(/([^\/]+(\?.*)?)$/)[1];
										u.id = l, u.className = "less-error-message", a = "<h3>" + (n.type || "Syntax") + "Error: " + (n.message || "There is an error in your .less file") + '</h3><p>in <a href="' + f + '">' + h + "</a> ";
										var p = function (e, t, n) {
											void 0 !== e.extract[t] && c.push('<li><label>{line}</label><pre class="{class}">{content}</pre></li>'.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (t - 1)).replace(/\{class\}/, n).replace(/\{content\}/, e.extract[t]))
										};
										n.line && (p(n, 0, ""), p(n, 1, "line"), p(n, 2, ""), a += "on line " + n.line + ", column " + (n.column + 1) + ":</p><ul>" + c.join("") + "</ul>"), n.stack && (n.extract || r.logLevel >= 4) && (a += "<br/>Stack Trace</br />" + n.stack.split("\n").slice(1).join("<br/>")), u.innerHTML = a, i(t.document, [".less-error-message ul, .less-error-message li {", "list-style-type: none;", "margin-right: 15px;", "padding: 4px 0;", "margin: 0;", "}", ".less-error-message label {", "font-size: 12px;", "margin-right: 15px;", "padding: 4px 0;", "color: #cc7777;", "}", ".less-error-message pre {", "color: #dd6666;", "padding: 4px 0;", "margin: 0;", "display: inline-block;", "}", ".less-error-message pre.line {", "color: #ff0000;", "}", ".less-error-message h3 {", "font-size: 20px;", "font-weight: bold;", "padding: 15px 0 5px 0;", "margin: 0;", "}", ".less-error-message a {", "color: #10a", "}", ".less-error-message .error {", "color: red;", "font-weight: bold;", "padding-bottom: 2px;", "border-bottom: 1px dashed red;", "}"].join("\n"), {
											title: "error-message"
										}), u.style.cssText = ["font-family: Arial, sans-serif", "border: 1px solid #e00", "background-color: #eee", "border-radius: 5px", "-webkit-border-radius: 5px", "-moz-border-radius: 5px", "color: #e00", "padding: 15px", "margin-bottom: 15px"].join(";"), "development" === r.env && (s = setInterval((function () {
											var e = t.document,
												n = e.body;
											n && (e.getElementById(l) ? n.replaceChild(u, e.getElementById(l)) : n.insertBefore(u, n.firstChild), clearInterval(s))
										}), 10))
									}(o, s)
								},
								remove: function (n) {
									r.errorReporting && "html" !== r.errorReporting ? "console" === r.errorReporting || "function" == typeof r.errorReporting && r.errorReporting("remove", n) : function (n) {
										var i = t.document.getElementById("less-error-message:" + e(n));
										i && i.parentNode.removeChild(i)
									}(n)
								}
							}
						},
						It = {
							javascriptEnabled: !1,
							depends: !1,
							compress: !1,
							lint: !1,
							paths: [],
							color: !0,
							strictImports: !1,
							insecure: !1,
							rootpath: "",
							rewriteUrls: !1,
							math: 0,
							strictUnits: !1,
							globalVars: null,
							modifyVars: null,
							urlArgs: ""
						};
					if (window.less)
						for (var _t in window.less) window.less.hasOwnProperty(_t) && (It[_t] = window.less[_t]);
					(function (e, t) {
						n(t, r(e)), void 0 === t.isFileProtocol && (t.isFileProtocol = /^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(e.location.protocol)), t.async = t.async || !1, t.fileAsync = t.fileAsync || !1, t.poll = t.poll || (t.isFileProtocol ? 1e3 : 1500), t.env = t.env || ("127.0.0.1" == e.location.hostname || "0.0.0.0" == e.location.hostname || "localhost" == e.location.hostname || e.location.port && e.location.port.length > 0 || t.isFileProtocol ? "development" : "production");
						var i = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(e.location.hash);
						i && (t.dumpLineNumbers = i[1]), void 0 === t.useFileCache && (t.useFileCache = !0), void 0 === t.onReady && (t.onReady = !0), t.relativeUrls && (t.rewriteUrls = "all")
					})(window, It), It.plugins = It.plugins || [], window.LESS_PLUGINS && (It.plugins = It.plugins.concat(window.LESS_PLUGINS));
					var At, kt, Rt, Tt = function (e, t) {
						var r = e.document,
							o = bt();
						o.options = t;
						var s = o.environment,
							a = Ct(t, o.logger),
							l = new a;
						s.addFileManager(l), o.FileManager = a, o.PluginLoader = xt,
						function (e, t) {
							t.logLevel = void 0 !== t.logLevel ? t.logLevel : "development" === t.env ? 3 : 1, t.loggers || (t.loggers = [{
								debug: function (e) {
									t.logLevel >= 4 && console.log(e)
								},
								info: function (e) {
									t.logLevel >= 3 && console.log(e)
								},
								warn: function (e) {
									t.logLevel >= 2 && console.warn(e)
								},
								error: function (e) {
									t.logLevel >= 1 && console.error(e)
								}
							}]);
							for (var n = 0; n < t.loggers.length; n++) e.logger.addListener(t.loggers[n])
						}(o, t);
						var u = Et(e, o, t),
							c = o.cache = t.cache || function (e, t, n) {
								var i = null;
								if ("development" !== t.env) try {
									i = void 0 === e.localStorage ? null : e.localStorage
								} catch (e) {}
								return {
									setCSS: function (e, t, r, o) {
										if (i) {
											n.info("saving " + e + " to cache.");
											try {
												i.setItem(e, o), i.setItem(e + ":timestamp", t), r && i.setItem(e + ":vars", JSON.stringify(r))
											} catch (t) {
												n.error('failed to save "' + e + '" to local storage for caching.')
											}
										}
									},
									getCSS: function (e, t, n) {
										var r = i && i.getItem(e),
											o = i && i.getItem(e + ":timestamp"),
											s = i && i.getItem(e + ":vars");
										if (n = n || {}, s = s || "{}", o && t.lastModified && new Date(t.lastModified).valueOf() === new Date(o).valueOf() && JSON.stringify(n) === s) return r
									}
								}
							}(e, t, o.logger);
						! function () {
							function e() {
								throw {
									type: "Runtime",
									message: "Image size functions are not supported in browser version of less"
								}
							}
							var t = {
								"image-size": function (t) {
									return e(), -1
								},
								"image-width": function (t) {
									return e(), -1
								},
								"image-height": function (t) {
									return e(), -1
								}
							};
							H.addMultiple(t)
						}(o.environment), t.functions && o.functions.functionRegistry.addMultiple(t.functions);
						var f = /^text\/(x-)?less$/;

						function h(e) {
							var t = {};
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
							return t
						}

						function p(e, t) {
							var n = Array.prototype.slice.call(arguments, 2);
							return function () {
								var i = n.concat(Array.prototype.slice.call(arguments, 0));
								return e.apply(t, i)
							}
						}

						function d(e) {
							for (var n, i = r.getElementsByTagName("style"), s = 0; s < i.length; s++)
								if ((n = i[s]).type.match(f)) {
									var a = h(t);
									a.modifyVars = e;
									var l = n.innerHTML || "";
									a.filename = r.location.href.replace(/#.*$/, ""), o.render(l, a, p((function (e, t, n) {
										t ? u.add(t, "inline") : (e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = n.css : e.innerHTML = n.css)
									}), null, n))
								}
						}

						function v(e, i, r, a, f) {
							var p = h(t);
							n(p, e), p.mime = e.type, f && (p.modifyVars = f), l.loadFile(e.href, null, p, s).then((function (t) {
								! function (t) {
									var n = t.contents,
										s = t.filename,
										f = t.webInfo,
										h = {
											currentDirectory: l.getPath(s),
											filename: s,
											rootFilename: s,
											rewriteUrls: p.rewriteUrls
										};
									if (h.entryPath = h.currentDirectory, h.rootpath = p.rootpath || h.currentDirectory, f) {
										f.remaining = a;
										var d = c.getCSS(s, f, p.modifyVars);
										if (!r && d) return f.local = !0, void i(null, d, n, e, f, s)
									}
									u.remove(s), p.rootFileInfo = h, o.render(n, p, (function (t, r) {
										t ? (t.href = s, i(t)) : (c.setCSS(e.href, f.lastModified, p.modifyVars, r.css), i(null, r.css, n, e, f, s))
									}))
								}(t)
							})).catch((function (e) {
								console.log(e), i(e)
							}))
						}

						function m(e, t, n) {
							for (var i = 0; i < o.sheets.length; i++) v(o.sheets[i], e, t, o.sheets.length - (i + 1), n)
						}
						return o.watch = function () {
							return o.watchMode || (o.env = "development", "development" === o.env && (o.watchTimer = setInterval((function () {
								o.watchMode && (l.clearFileCache(), m((function (t, n, r, o, s) {
									t ? u.add(t, t.href || o.href) : n && i(e.document, n, o)
								})))
							}), t.poll))), this.watchMode = !0, !0
						}, o.unwatch = function () {
							return clearInterval(o.watchTimer), this.watchMode = !1, !1
						}, o.registerStylesheetsImmediately = function () {
							var e = r.getElementsByTagName("link");
							o.sheets = [];
							for (var t = 0; t < e.length; t++)("stylesheet/less" === e[t].rel || e[t].rel.match(/stylesheet/) && e[t].type.match(f)) && o.sheets.push(e[t])
						}, o.registerStylesheets = function () {
							return new Promise((function (e, t) {
								o.registerStylesheetsImmediately(), e()
							}))
						}, o.modifyVars = function (e) {
							return o.refresh(!0, e, !1)
						}, o.refresh = function (t, n, r) {
							return (t || r) && !1 !== r && l.clearFileCache(), new Promise((function (r, s) {
								var a, l, c, f;
								a = l = new Date, 0 === (f = o.sheets.length) ? (l = new Date, c = l - a, o.logger.info("Less has finished and no sheets were loaded."), r({
									startTime: a,
									endTime: l,
									totalMilliseconds: c,
									sheets: o.sheets.length
								})) : m((function (t, n, h, p, d) {
									if (t) return u.add(t, t.href || p.href), void s(t);
									d.local ? o.logger.info("Loading " + p.href + " from cache.") : o.logger.info("Rendered " + p.href + " successfully."), i(e.document, n, p), o.logger.info("CSS for " + p.href + " generated in " + (new Date - l) + "ms"), 0 == --f && (c = new Date - a, o.logger.info("Less has finished. CSS generated in " + c + "ms"), r({
										startTime: a,
										endTime: l,
										totalMilliseconds: c,
										sheets: o.sheets.length
									})), l = new Date
								}), t, n), d(n)
							}))
						}, o.refreshStyles = d, o
					}(window, It);

					function Pt(e) {
						e.filename && console.warn(e), It.async || kt.removeChild(Rt)
					}
					return window.less = Tt, It.onReady && (/!watch/.test(window.location.hash) && Tt.watch(), It.async || (At = "body { display: none !important }", kt = document.head || document.getElementsByTagName("head")[0], (Rt = document.createElement("style")).type = "text/css", Rt.styleSheet ? Rt.styleSheet.cssText = At : Rt.appendChild(document.createTextNode(At)), kt.appendChild(Rt)), Tt.registerStylesheetsImmediately(), Tt.pageLoadFinished = Tt.refresh("development" === Tt.env).then(Pt, Pt)), Tt
				}()
			}).call(this, n(13).Buffer)
		},
		function (e, t, n) {
			"use strict";
			(function (e) {
				/*!
				 * The buffer module from node.js, for the browser.
				 *
				 * @author   Feross Aboukhadijeh <http://feross.org>
				 * @license  MIT
				 */
				var i = n(15),
					r = n(16),
					o = n(17);

				function s() {
					return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
				}

				function a(e, t) {
					if (s() < t) throw new RangeError("Invalid typed array length");
					return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
				}

				function l(e, t, n) {
					if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
					if ("number" == typeof e) {
						if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
						return f(this, e)
					}
					return u(this, e, t, n)
				}

				function u(e, t, n, i) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, i) {
						if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
						t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i);
						l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = h(e, t);
						return e
					}(e, t, n, i) : "string" == typeof t ? function (e, t, n) {
						"string" == typeof n && "" !== n || (n = "utf8");
						if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
						var i = 0 | d(t, n),
							r = (e = a(e, i)).write(t, n);
						r !== i && (e = e.slice(0, r));
						return e
					}(e, t, n) : function (e, t) {
						if (l.isBuffer(t)) {
							var n = 0 | p(t.length);
							return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n), e
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (i = t.length) != i ? a(e, 0) : h(e, t);
							if ("Buffer" === t.type && o(t.data)) return h(e, t.data)
						}
						var i;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}

				function c(e) {
					if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
					if (e < 0) throw new RangeError('"size" argument must not be negative')
				}

				function f(e, t) {
					if (c(t), e = a(e, t < 0 ? 0 : 0 | p(t)), !l.TYPED_ARRAY_SUPPORT)
						for (var n = 0; n < t; ++n) e[n] = 0;
					return e
				}

				function h(e, t) {
					var n = t.length < 0 ? 0 : 0 | p(t.length);
					e = a(e, n);
					for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
					return e
				}

				function p(e) {
					if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
					return 0 | e
				}

				function d(e, t) {
					if (l.isBuffer(e)) return e.length;
					if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
					"string" != typeof e && (e = "" + e);
					var n = e.length;
					if (0 === n) return 0;
					for (var i = !1;;) switch (t) {
					case "ascii":
					case "latin1":
					case "binary":
						return n;
					case "utf8":
					case "utf-8":
					case void 0:
						return U(e).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * n;
					case "hex":
						return n >>> 1;
					case "base64":
						return $(e).length;
					default:
						if (i) return U(e).length;
						t = ("" + t).toLowerCase(), i = !0
					}
				}

				function v(e, t, n) {
					var i = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (t >>>= 0)) return "";
					for (e || (e = "utf8");;) switch (e) {
					case "hex":
						return R(this, t, n);
					case "utf8":
					case "utf-8":
						return _(this, t, n);
					case "ascii":
						return A(this, t, n);
					case "latin1":
					case "binary":
						return k(this, t, n);
					case "base64":
						return I(this, t, n);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return T(this, t, n);
					default:
						if (i) throw new TypeError("Unknown encoding: " + e);
						e = (e + "").toLowerCase(), i = !0
					}
				}

				function m(e, t, n) {
					var i = e[t];
					e[t] = e[n], e[n] = i
				}

				function g(e, t, n, i, r) {
					if (0 === e.length) return -1;
					if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
						if (r) return -1;
						n = e.length - 1
					} else if (n < 0) {
						if (!r) return -1;
						n = 0
					}
					if ("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, i, r);
					if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, i, r);
					throw new TypeError("val must be string, number or Buffer")
				}

				function y(e, t, n, i, r) {
					var o, s = 1,
						a = e.length,
						l = t.length;
					if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
						if (e.length < 2 || t.length < 2) return -1;
						s = 2, a /= 2, l /= 2, n /= 2
					}

					function u(e, t) {
						return 1 === s ? e[t] : e.readUInt16BE(t * s)
					}
					if (r) {
						var c = -1;
						for (o = n; o < a; o++)
							if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
								if (-1 === c && (c = o), o - c + 1 === l) return c * s
							} else -1 !== c && (o -= o - c), c = -1
					} else
						for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
							for (var f = !0, h = 0; h < l; h++)
								if (u(e, o + h) !== u(t, h)) {
									f = !1;
									break
								}
							if (f) return o
						}
					return -1
				}

				function b(e, t, n, i) {
					n = Number(n) || 0;
					var r = e.length - n;
					i ? (i = Number(i)) > r && (i = r) : i = r;
					var o = t.length;
					if (o % 2 != 0) throw new TypeError("Invalid hex string");
					i > o / 2 && (i = o / 2);
					for (var s = 0; s < i; ++s) {
						var a = parseInt(t.substr(2 * s, 2), 16);
						if (isNaN(a)) return s;
						e[n + s] = a
					}
					return s
				}

				function w(e, t, n, i) {
					return j(U(t, e.length - n), e, n, i)
				}

				function S(e, t, n, i) {
					return j(function (e) {
						for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
						return t
					}(t), e, n, i)
				}

				function C(e, t, n, i) {
					return S(e, t, n, i)
				}

				function x(e, t, n, i) {
					return j($(t), e, n, i)
				}

				function E(e, t, n, i) {
					return j(function (e, t) {
						for (var n, i, r, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), i = n >> 8, r = n % 256, o.push(r), o.push(i);
						return o
					}(t, e.length - n), e, n, i)
				}

				function I(e, t, n) {
					return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
				}

				function _(e, t, n) {
					n = Math.min(e.length, n);
					for (var i = [], r = t; r < n;) {
						var o, s, a, l, u = e[r],
							c = null,
							f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
						if (r + f <= n) switch (f) {
						case 1:
							u < 128 && (c = u);
							break;
						case 2:
							128 == (192 & (o = e[r + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (c = l);
							break;
						case 3:
							o = e[r + 1], s = e[r + 2], 128 == (192 & o) && 128 == (192 & s) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (c = l);
							break;
						case 4:
							o = e[r + 1], s = e[r + 2], a = e[r + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l)
						}
						null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), i.push(c), r += f
					}
					return function (e) {
						var t = e.length;
						if (t <= 4096) return String.fromCharCode.apply(String, e);
						var n = "",
							i = 0;
						for (; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += 4096));
						return n
					}(i)
				}
				t.Buffer = l, t.SlowBuffer = function (e) {
					+e != e && (e = 0);
					return l.alloc(+e)
				}, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
					try {
						var e = new Uint8Array(1);
						return e.__proto__ = {
							__proto__: Uint8Array.prototype,
							foo: function () {
								return 42
							}
						}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
					} catch (e) {
						return !1
					}
				}(), t.kMaxLength = s(), l.poolSize = 8192, l._augment = function (e) {
					return e.__proto__ = l.prototype, e
				}, l.from = function (e, t, n) {
					return u(null, e, t, n)
				}, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
					value: null,
					configurable: !0
				})), l.alloc = function (e, t, n) {
					return function (e, t, n, i) {
						return c(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof i ? a(e, t).fill(n, i) : a(e, t).fill(n) : a(e, t)
					}(null, e, t, n)
				}, l.allocUnsafe = function (e) {
					return f(null, e)
				}, l.allocUnsafeSlow = function (e) {
					return f(null, e)
				}, l.isBuffer = function (e) {
					return !(null == e || !e._isBuffer)
				}, l.compare = function (e, t) {
					if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
					if (e === t) return 0;
					for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r)
						if (e[r] !== t[r]) {
							n = e[r], i = t[r];
							break
						}
					return n < i ? -1 : i < n ? 1 : 0
				}, l.isEncoding = function (e) {
					switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
					}
				}, l.concat = function (e, t) {
					if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === e.length) return l.alloc(0);
					var n;
					if (void 0 === t)
						for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
					var i = l.allocUnsafe(t),
						r = 0;
					for (n = 0; n < e.length; ++n) {
						var s = e[n];
						if (!l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
						s.copy(i, r), r += s.length
					}
					return i
				}, l.byteLength = d, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
					var e = this.length;
					if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var t = 0; t < e; t += 2) m(this, t, t + 1);
					return this
				}, l.prototype.swap32 = function () {
					var e = this.length;
					if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
					return this
				}, l.prototype.swap64 = function () {
					var e = this.length;
					if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
					return this
				}, l.prototype.toString = function () {
					var e = 0 | this.length;
					return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : v.apply(this, arguments)
				}, l.prototype.equals = function (e) {
					if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					return this === e || 0 === l.compare(this, e)
				}, l.prototype.inspect = function () {
					var e = "",
						n = t.INSPECT_MAX_BYTES;
					return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
				}, l.prototype.compare = function (e, t, n, i, r) {
					if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw new RangeError("out of range index");
					if (i >= r && t >= n) return 0;
					if (i >= r) return -1;
					if (t >= n) return 1;
					if (this === e) return 0;
					for (var o = (r >>>= 0) - (i >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), u = this.slice(i, r), c = e.slice(t, n), f = 0; f < a; ++f)
						if (u[f] !== c[f]) {
							o = u[f], s = c[f];
							break
						}
					return o < s ? -1 : s < o ? 1 : 0
				}, l.prototype.includes = function (e, t, n) {
					return -1 !== this.indexOf(e, t, n)
				}, l.prototype.indexOf = function (e, t, n) {
					return g(this, e, t, n, !0)
				}, l.prototype.lastIndexOf = function (e, t, n) {
					return g(this, e, t, n, !1)
				}, l.prototype.write = function (e, t, n, i) {
					if (void 0 === t) i = "utf8", n = this.length, t = 0;
					else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
					else {
						if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
					}
					var r = this.length - t;
					if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					i || (i = "utf8");
					for (var o = !1;;) switch (i) {
					case "hex":
						return b(this, e, t, n);
					case "utf8":
					case "utf-8":
						return w(this, e, t, n);
					case "ascii":
						return S(this, e, t, n);
					case "latin1":
					case "binary":
						return C(this, e, t, n);
					case "base64":
						return x(this, e, t, n);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return E(this, e, t, n);
					default:
						if (o) throw new TypeError("Unknown encoding: " + i);
						i = ("" + i).toLowerCase(), o = !0
					}
				}, l.prototype.toJSON = function () {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};

				function A(e, t, n) {
					var i = "";
					n = Math.min(e.length, n);
					for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
					return i
				}

				function k(e, t, n) {
					var i = "";
					n = Math.min(e.length, n);
					for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
					return i
				}

				function R(e, t, n) {
					var i = e.length;
					(!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
					for (var r = "", o = t; o < n; ++o) r += V(e[o]);
					return r
				}

				function T(e, t, n) {
					for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
					return r
				}

				function P(e, t, n) {
					if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
					if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function O(e, t, n, i, r, o) {
					if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
					if (n + i > e.length) throw new RangeError("Index out of range")
				}

				function M(e, t, n, i) {
					t < 0 && (t = 65535 + t + 1);
					for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
				}

				function N(e, t, n, i) {
					t < 0 && (t = 4294967295 + t + 1);
					for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
				}

				function L(e, t, n, i, r, o) {
					if (n + i > e.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function F(e, t, n, i, o) {
					return o || L(e, 0, n, 4), r.write(e, t, n, i, 23, 4), n + 4
				}

				function D(e, t, n, i, o) {
					return o || L(e, 0, n, 8), r.write(e, t, n, i, 52, 8), n + 8
				}
				l.prototype.slice = function (e, t) {
					var n, i = this.length;
					if ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), (t = void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
					else {
						var r = t - e;
						n = new l(r, void 0);
						for (var o = 0; o < r; ++o) n[o] = this[o + e]
					}
					return n
				}, l.prototype.readUIntLE = function (e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
					return i
				}, l.prototype.readUIntBE = function (e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
					return i
				}, l.prototype.readUInt8 = function (e, t) {
					return t || P(e, 1, this.length), this[e]
				}, l.prototype.readUInt16LE = function (e, t) {
					return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
				}, l.prototype.readUInt16BE = function (e, t) {
					return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
				}, l.prototype.readUInt32LE = function (e, t) {
					return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
				}, l.prototype.readUInt32BE = function (e, t) {
					return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
				}, l.prototype.readIntLE = function (e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
					return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i
				}, l.prototype.readIntBE = function (e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
					return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o
				}, l.prototype.readInt8 = function (e, t) {
					return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
				}, l.prototype.readInt16LE = function (e, t) {
					t || P(e, 2, this.length);
					var n = this[e] | this[e + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, l.prototype.readInt16BE = function (e, t) {
					t || P(e, 2, this.length);
					var n = this[e + 1] | this[e] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, l.prototype.readInt32LE = function (e, t) {
					return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
				}, l.prototype.readInt32BE = function (e, t) {
					return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
				}, l.prototype.readFloatLE = function (e, t) {
					return t || P(e, 4, this.length), r.read(this, e, !0, 23, 4)
				}, l.prototype.readFloatBE = function (e, t) {
					return t || P(e, 4, this.length), r.read(this, e, !1, 23, 4)
				}, l.prototype.readDoubleLE = function (e, t) {
					return t || P(e, 8, this.length), r.read(this, e, !0, 52, 8)
				}, l.prototype.readDoubleBE = function (e, t) {
					return t || P(e, 8, this.length), r.read(this, e, !1, 52, 8)
				}, l.prototype.writeUIntLE = function (e, t, n, i) {
					(e = +e, t |= 0, n |= 0, i) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var r = 1,
						o = 0;
					for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
					return t + n
				}, l.prototype.writeUIntBE = function (e, t, n, i) {
					(e = +e, t |= 0, n |= 0, i) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var r = n - 1,
						o = 1;
					for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
					return t + n
				}, l.prototype.writeUInt8 = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
				}, l.prototype.writeUInt16LE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : M(this, e, t, !0), t + 2
				}, l.prototype.writeUInt16BE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : M(this, e, t, !1), t + 2
				}, l.prototype.writeUInt32LE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : N(this, e, t, !0), t + 4
				}, l.prototype.writeUInt32BE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
				}, l.prototype.writeIntLE = function (e, t, n, i) {
					if (e = +e, t |= 0, !i) {
						var r = Math.pow(2, 8 * n - 1);
						O(this, e, t, n, r - 1, -r)
					}
					var o = 0,
						s = 1,
						a = 0;
					for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
					return t + n
				}, l.prototype.writeIntBE = function (e, t, n, i) {
					if (e = +e, t |= 0, !i) {
						var r = Math.pow(2, 8 * n - 1);
						O(this, e, t, n, r - 1, -r)
					}
					var o = n - 1,
						s = 1,
						a = 0;
					for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
					return t + n
				}, l.prototype.writeInt8 = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
				}, l.prototype.writeInt16LE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : M(this, e, t, !0), t + 2
				}, l.prototype.writeInt16BE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : M(this, e, t, !1), t + 2
				}, l.prototype.writeInt32LE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : N(this, e, t, !0), t + 4
				}, l.prototype.writeInt32BE = function (e, t, n) {
					return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
				}, l.prototype.writeFloatLE = function (e, t, n) {
					return F(this, e, t, !0, n)
				}, l.prototype.writeFloatBE = function (e, t, n) {
					return F(this, e, t, !1, n)
				}, l.prototype.writeDoubleLE = function (e, t, n) {
					return D(this, e, t, !0, n)
				}, l.prototype.writeDoubleBE = function (e, t, n) {
					return D(this, e, t, !1, n)
				}, l.prototype.copy = function (e, t, n, i) {
					if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
					if (0 === e.length || 0 === this.length) return 0;
					if (t < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
					if (i < 0) throw new RangeError("sourceEnd out of bounds");
					i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
					var r, o = i - n;
					if (this === e && n < t && t < i)
						for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
					else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
						for (r = 0; r < o; ++r) e[r + t] = this[r + n];
					else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
					return o
				}, l.prototype.fill = function (e, t, n, i) {
					if ("string" == typeof e) {
						if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
							var r = e.charCodeAt(0);
							r < 256 && (e = r)
						}
						if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
						if ("string" == typeof i && !l.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
					} else "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
					if (n <= t) return this;
					var o;
					if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
						for (o = t; o < n; ++o) this[o] = e;
					else {
						var s = l.isBuffer(e) ? e : U(new l(e, i).toString()),
							a = s.length;
						for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
					}
					return this
				};
				var B = /[^+\/0-9A-Za-z-_]/g;

				function V(e) {
					return e < 16 ? "0" + e.toString(16) : e.toString(16)
				}

				function U(e, t) {
					var n;
					t = t || 1 / 0;
					for (var i = e.length, r = null, o = [], s = 0; s < i; ++s) {
						if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
							if (!r) {
								if (n > 56319) {
									(t -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								if (s + 1 === i) {
									(t -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								r = n;
								continue
							}
							if (n < 56320) {
								(t -= 3) > -1 && o.push(239, 191, 189), r = n;
								continue
							}
							n = 65536 + (r - 55296 << 10 | n - 56320)
						} else r && (t -= 3) > -1 && o.push(239, 191, 189); if (r = null, n < 128) {
							if ((t -= 1) < 0) break;
							o.push(n)
						} else if (n < 2048) {
							if ((t -= 2) < 0) break;
							o.push(n >> 6 | 192, 63 & n | 128)
						} else if (n < 65536) {
							if ((t -= 3) < 0) break;
							o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if (!(n < 1114112)) throw new Error("Invalid code point");
							if ((t -= 4) < 0) break;
							o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return o
				}

				function $(e) {
					return i.toByteArray(function (e) {
						if ((e = function (e) {
							return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
						}(e).replace(B, "")).length < 2) return "";
						for (; e.length % 4 != 0;) e += "=";
						return e
					}(e))
				}

				function j(e, t, n, i) {
					for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
					return r
				}
			}).call(this, n(14))
		},
		function (e, t) {
			var n;
			n = function () {
				return this
			}();
			try {
				n = n || new Function("return this")()
			} catch (e) {
				"object" == typeof window && (n = window)
			}
			e.exports = n
		},
		function (e, t, n) {
			"use strict";
			t.byteLength = function (e) {
				var t = u(e),
					n = t[0],
					i = t[1];
				return 3 * (n + i) / 4 - i
			}, t.toByteArray = function (e) {
				var t, n, i = u(e),
					s = i[0],
					a = i[1],
					l = new o(function (e, t, n) {
						return 3 * (t + n) / 4 - n
					}(0, s, a)),
					c = 0,
					f = a > 0 ? s - 4 : s;
				for (n = 0; n < f; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
				2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, l[c++] = 255 & t);
				1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t);
				return l
			}, t.fromByteArray = function (e) {
				for (var t, n = e.length, r = n % 3, o = [], s = 0, a = n - r; s < a; s += 16383) o.push(c(e, s, s + 16383 > a ? a : s + 16383));
				1 === r ? (t = e[n - 1], o.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "="));
				return o.join("")
			};
			for (var i = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, l = s.length; a < l; ++a) i[a] = s[a], r[s.charCodeAt(a)] = a;

			function u(e) {
				var t = e.length;
				if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var n = e.indexOf("=");
				return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
			}

			function c(e, t, n) {
				for (var r, o, s = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(i[(o = r) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
				return s.join("")
			}
			r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
		},
		function (e, t) {
			/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
			t.read = function (e, t, n, i, r) {
				var o, s, a = 8 * r - i - 1,
					l = (1 << a) - 1,
					u = l >> 1,
					c = -7,
					f = n ? r - 1 : 0,
					h = n ? -1 : 1,
					p = e[t + f];
				for (f += h, o = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; o = 256 * o + e[t + f], f += h, c -= 8);
				for (s = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; s = 256 * s + e[t + f], f += h, c -= 8);
				if (0 === o) o = 1 - u;
				else {
					if (o === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
					s += Math.pow(2, i), o -= u
				}
				return (p ? -1 : 1) * s * Math.pow(2, o - i)
			}, t.write = function (e, t, n, i, r, o) {
				var s, a, l, u = 8 * o - r - 1,
					c = (1 << u) - 1,
					f = c >> 1,
					h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					p = i ? 0 : o - 1,
					d = i ? 1 : -1,
					v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
				for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = c) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + f >= 1 ? h / l : h * Math.pow(2, 1 - f)) * l >= 2 && (s++, l /= 2), s + f >= c ? (a = 0, s = c) : s + f >= 1 ? (a = (t * l - 1) * Math.pow(2, r), s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + p] = 255 & a, p += d, a /= 256, r -= 8);
				for (s = s << r | a, u += r; u > 0; e[n + p] = 255 & s, p += d, s /= 256, u -= 8);
				e[n + p - d] |= 128 * v
			}
		},
		function (e, t) {
			var n = {}.toString;
			e.exports = Array.isArray || function (e) {
				return "[object Array]" == n.call(e)
			}
		}, ,
		function (e, t, n) {},
		function (e, t, n) {}, ,
		function (e, t, n) {
			"use strict";
			n.r(t);
			var i = n(5),
				r = n.n(i);
			r.a.components.audio = {
				settingEnabled: !0,
				settingTitle: "Audio Settings",
				init: function (e, t, n, i) {
					var r = n.find(".keditor-component-content");
					0 === r.find(".audio-wrapper").length && r.wrapInner('<div class="audio-wrapper"></div>')
				},
				initSettingForm: function (e, t) {
					e.append('<form class="form-horizontal">     <div class="form-group">         <label class="col-sm-12">Audio file</label>         <div class="col-sm-12">             <div class="audio-toolbar">                 <a href="#" class="btn-audio-upload btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>                 <input class="audio-upload" type="file" style="display: none" />             </div>         </div>     </div>     <div class="form-group">         <label class="col-sm-12">Autoplay</label>         <div class="col-sm-12">             <input type="checkbox" class="audio-autoplay" />         </div>     </div>     <div class="form-group">         <label class="col-sm-12">Show Controls</label>         <div class="col-sm-12">             <input type="checkbox" class="audio-controls" checked />         </div>     </div>     <div class="form-group">         <label class="col-sm-12">Width (%)</label>         <div class="col-sm-12">             <input type="number" min="20" max="100" class="form-control audio-width" value="100" />         </div>     </div></form>');
					var n = e.find(".audio-upload");
					e.find(".btn-audio-upload").off("click").on("click", (function (e) {
						e.preventDefault(), n.trigger("click")
					})), n.off("change").on("change", (function () {
						var e = this.files[0];
						/audio/.test(e.type) ? t.getSettingComponent().find("audio").attr("src", URL.createObjectURL(e)) : alert("Your selected file is not an audio file!")
					})), e.find(".audio-autoplay").on("click", (function () {
						t.getSettingComponent().find("audio").prop("autoplay", this.checked)
					})), e.find(".audio-controls").on("click", (function () {
						t.getSettingComponent().find("audio").prop("controls", this.checked)
					})), e.find(".audio-width").on("change", (function () {
						var e = t.getSettingComponent().find("audio");
						e.parent().attr("data-width", this.value), e.css("width", this.value + "%")
					}))
				},
				showSettingForm: function (e, t, n) {
					var i = t.find("audio"),
						r = i.parent(),
						o = e.find(".audio-autoplay"),
						s = e.find(".audio-controls"),
						a = e.find(".audio-width");
					o.prop("checked", !!i.attr("autoplay")), s.prop("checked", !!i.attr("controls")), a.val(r.attr("data-width") || 100)
				}
			};
			n(19);
			var o, s, a = n(3),
				l = n.n(a);
			r.a.components.form = {
				emptyContent: '<p class="text-muted lead text-center"><br />[No form content]<br /><br /></p>',
				renderForm: function (e) {
					var t = e.find(".form-content"),
						n = l()("<div />");
					n.formRender({
						dataType: "json",
						formData: s.actions.getData("json")
					}), t.html(n.html()), t.hasClass("form-horizontal") && t.children("div").each((function () {
						var e = l()(this),
							n = t.attr("data-grid") || "4-8";
						if (n = n.split("-"), e.attr("class"))
							if (e.hasClass("fb-button")) e.find("button").wrap('<div class="col-sm-'.concat(n[1], " col-sm-offset-").concat(n[0], '"></div>'));
							else {
								var i = e.children("label"),
									r = e.children("input, select, textarea"),
									o = e.children("div");
								i.addClass("control-label col-sm-".concat(n[0])), o.length > 0 ? o.addClass("col-sm-".concat(n[1])) : r.addClass("form-control").wrap('<div class="col-sm-'.concat(n[1], '"></div>'))
							}
					}))
				},
				initModal: function (e) {
					var t = this;
					(o = e.initModal("keditor-modal-form")).find(".keditor-modal-title").html("Design form"), o.css({
						visibility: "hidden",
						display: "block",
						opacity: 1
					}), o.find(".keditor-modal-body").append('\n            <div class="form-builder-area-wrapper">\n                <div class="form-builder-area"></div>\n            </div>\n        '), s = o.find(".form-builder-area").formBuilder({
						showActionButtons: !1,
						dataType: "json",
						disableFields: ["autocomplete", "paragraph", "header"],
						disabledAttrs: ["access"],
						typeUserDisabledAttrs: {
							"checkbox-group": ["toggle", "inline"]
						}
					}), o.find(".keditor-modal-footer").html('\n            <button type="button" class="keditor-ui keditor-btn keditor-btn-default keditor-modal-close">Close</button>\n            <button type="button" class="keditor-ui keditor-btn keditor-btn-primary btn-save-form">Save</button>\n        '), o.find(".btn-save-form").on("click", (function (n) {
						n.preventDefault();
						var i = e.getSettingComponent();
						i.find(".form-data").html(s.actions.getData("json")), t.renderForm(i), e.hideModal(o)
					})), setTimeout((function () {
						o.css({
							visibility: "",
							display: "",
							opacity: ""
						})
					}), 500)
				},
				init: function (e, t, n, i) {
					var r = n.find(".keditor-component-content"),
						s = n.find(".form-content");
					0 === n.find(".form-data").length && r.append('<div class="form-data" style="display: none !important;"></div>'), 0 === s.length && r.append('<form class="form-content">'.concat(this.emptyContent, "</form>")), o || this.initModal(i)
				},
				settingEnabled: !0,
				settingTitle: "Form",
				initSettingForm: function (e, t) {
					console.log("keditor component form!"), e.html('\n            <div class="form-horizontal">\n                <div class="form-group">\n                    <label class="col-sm-12">Your Email</label>\n                    <div class="col-sm-12">\n                        <input type="text" class="form-control send-data-email" placeholder="The email where you want to receive these details..."/>\n                    </div>\n                </div>\n                <button class="btn btn-primary btn-block">Confirm Email</button>\n            </div>\n        ')
				},
				showSettingForm: function (e, t, n) {
					var i = t.find(".form-content"),
						r = "";
					i.hasClass("form-inline") ? r = "form-inline" : i.hasClass("form-horizontal") && (r = "form-horizontal"), e.find(".txt-form-action").val(i.attr("action") || ""), e.find(".select-method").val(i.attr("method") || "get"), e.find(".select-enctype").val(i.attr("enctype")), e.find(".select-layout").val(r), e.find(".select-grid-wrapper").css("display", "form-horizontal" === r ? "block" : "none"), e.find(".select-grid").val(i.attr("data-grid") || "4-8")
				}
			}, r.a.components.googlemap = {
				init: function (e, t, n, i) {
					var r = n.find("iframe"),
						o = r.parent();
					i.initIframeCover(r, o)
				},
				settingEnabled: !0,
				settingTitle: "Google Map Settings",
				initSettingForm: function (e, t) {
					e.append('<form class="form-horizontal">   <div class="form-group">       <div class="col-sm-12">           <button type="button" class="btn btn-block btn-primary btn-googlemap-edit">Update Map</button>       </div>   </div>   <div class="form-group">       <label class="col-sm-12">Aspect Ratio</label>       <div class="col-sm-12">           <button type="button" class="btn btn-sm btn-default btn-googlemap-169">16:9</button>           <button type="button" class="btn btn-sm btn-default btn-googlemap-43">4:3</button>       </div>   </div></form>'), e.find(".btn-googlemap-edit").on("click", (function (e) {
						e.preventDefault();
						var n = prompt("Please enter Google Map embed code in here:"),
							i = l()(n),
							r = i.attr("src");
						i.length > 0 && r && r.length > 0 ? t.getSettingComponent().find(".embed-responsive-item").attr("src", r) : alert("Your Google Map embed code is invalid!")
					})), e.find(".btn-googlemap-169").on("click", (function (e) {
						e.preventDefault(), t.getSettingComponent().find(".embed-responsive").removeClass("embed-responsive-4by3").addClass("embed-responsive-16by9")
					})), e.find(".btn-googlemap-43").on("click", (function (e) {
						e.preventDefault(), t.getSettingComponent().find(".embed-responsive").removeClass("embed-responsive-16by9").addClass("embed-responsive-4by3")
					}))
				}
			};
			n(7);
			var u = n(11);
			r.a.components.photo = {
				init: function (e, t, n, i) {
					n.children(".keditor-component-content").find("img").css("display", "inline-block")
				},
				settingEnabled: !0,
				settingTitle: "Photo Settings",
				initSettingForm: function (e, t) {
					var n = this;
					t.options;
					e.append('<form class="form-horizontal">   <div class="form-group">       <div class="col-sm-12">           <button type="button" class="btn btn-block btn-primary" id="photo-edit">Change Photo</button>           <input type="file" style="display: none" />       </div>   </div>   <div class="form-group">       <label for="photo-align" class="col-sm-12">Align</label>       <div class="col-sm-12">           <select id="photo-align" class="form-control">               <option value="left">Left</option>               <option value="center">Center</option>               <option value="right">Right</option>           </select>       </div>   </div>   <div class="form-group">       <label for="photo-style" class="col-sm-12">Style</label>       <div class="col-sm-12">           <select id="photo-style" class="form-control">               <option value="">None</option>               <option value="img-rounded">Rounded</option>               <option value="img-circle">Circle</option>               <option value="img-thumbnail">Thumbnail</option>           </select>       </div>   </div>   <div class="form-group">       <label for="photo-responsive" class="col-sm-12">Responsive</label>       <div class="col-sm-12">           <input type="checkbox" id="photo-responsive" />       </div>   </div>   <div class="form-group">       <label for="photo-width" class="col-sm-12">Width</label>       <div class="col-sm-12">           <input type="number" id="photo-width" class="form-control" />       </div>   </div>   <div class="form-group">       <label for="photo-height" class="col-sm-12">Height</label>       <div class="col-sm-12">           <input type="number" id="photo-height" class="form-control" />       </div>   </div>   <div class="form-group">       <label for="maintain-aspect-ratio" class="col-sm-12">Maintain Aspect Ratio</label>       <div class="col-sm-12">           <input type="checkbox" id="maintain-aspect-ratio" checked/>       </div>   </div></form>');
					var i = e.find("#photo-edit"),
						r = i.next();
					i.on("click", (function (i) {
						i.preventDefault(), u.a.call(n, e, t.getSettingComponent(), t, "png;jpg;gif")
					})), r.on("change", (function () {
						var i = this.files[0];
						if (/image/.test(i.type)) {
							var r = new FileReader;
							r.addEventListener("load", (function (i) {
								var r = t.getSettingComponent().find("img");
								r.attr("src", i.target.result), r.css({
									width: "",
									height: ""
								}), r.load((function () {
									n.showSettingForm.call(n, e, t.getSettingComponent(), t)
								}))
							})), r.readAsDataURL(this.files[0])
						} else alert("Your selected file is not photo!")
					})), e.find("#photo-align").on("change", (function () {
						console.log(this.value), t.getSettingComponent().find("img").closest("div").css("text-align", this.value)
					})), e.find("#photo-responsive").on("click", (function () {
						t.getSettingComponent().find("img")[this.checked ? "addClass" : "removeClass"]("img-responsive")
					})), e.find("#photo-style").on("change", (function () {
						var e = t.getSettingComponent().find("img"),
							n = this.value;
						e.removeClass("img-rounded img-circle img-thumbnail"), n && e.addClass(n)
					}));
					var o = e.find("#photo-width"),
						s = e.find("#photo-height"),
						a = e.find("#maintain-aspect-ratio");
					o.on("input", (function () {
						var e = t.getSettingComponent().find("img"),
							i = +this.value,
							r = l()(a).is(":checked") ? Math.round(i / n.ratio) : s.val();
						console.log(r, "" != r), i <= 0 && (i = n.width, r = n.height, this.value = i), e.css({
							width: i,
							height: r
						}), "" != r && (n.nonEmptyHeight = r), s.val(n.nonEmptyHeight)
					})), s.on("input", (function () {
						var e = t.getSettingComponent().find("img"),
							i = +this.value,
							r = l()(a).is(":checked") ? Math.round(i * n.ratio) : o.val();
						console.log(r, "" != r), i <= 0 && (r = n.width, i = n.height, this.value = i), e.css({
							height: i,
							width: r
						}), "" != r && (n.nonEmptyWidth = r), o.val(n.nonEmptyWidth)
					})), a.on("change", (function () {
						var e = t.getSettingComponent().find("img");
						this.checked ? e.attr("data-maintain-aspect-ratio", "true") : e.attr("data-maintain-aspect-ratio", "false")
					}))
				},
				showSettingForm: function (e, t, n) {
					var i = this,
						r = e.find("#photo-align"),
						o = e.find("#photo-responsive"),
						s = e.find("#photo-width"),
						a = e.find("#photo-height"),
						u = e.find("#photo-style"),
						c = e.find("#maintain-aspect-ratio"),
						f = (t.find(".photo-panel"), t.find("img"));
					void 0 === f.attr("data-maintain-aspect-ratio") || 0 == f.attr("data-maintain-aspect-ratio") || "true" == f.attr("data-maintain-aspect-ratio") ? c.prop("checked", !0) : c.prop("checked", !1);
					var h = f.closest("div").css("text-align");
					"right" != h && "left" != h && (h = "center"), f.hasClass("img-rounded") ? u.val("img-rounded") : f.hasClass("img-circle") ? u.val("img-circle") : f.hasClass("img-thumbnail") ? u.val("img-thumbnail") : u.val(""), r.val(h), o.prop("checked", f.hasClass("img-responsive")), s.val(f.width()), a.val(f.height()), l()("<img />").attr("src", f.attr("src")).load((function () {
						i.ratio = this.width / this.height, i.width = this.width, i.height = this.height, i.nonEmptyWidth = this.width, i.nonEmptyHeight = this.height
					}))
				}
			};
			n(20);
			var c = n(9),
				f = n.n(c);
			f.a.disableAutoInline = !0, f.a.dom.element.prototype.scrollIntoView = function () {}, f.a.dom.selection.prototype.scrollIntoView = function () {}, f.a.dom.range.prototype.scrollIntoView = function () {}, r.a.components.text = {
				options: {
					toolbarGroups: [{
						name: "document",
						groups: ["mode", "document", "doctools"]
					}, {
						name: "editing",
						groups: ["find", "selection", "spellchecker", "editing"]
					}, {
						name: "forms",
						groups: ["forms"]
					}, {
						name: "basicstyles",
						groups: ["basicstyles", "cleanup"]
					}, {
						name: "paragraph",
						groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
					}, {
						name: "links",
						groups: ["links"]
					}, {
						name: "insert",
						groups: ["insert"]
					}, "/", {
						name: "clipboard",
						groups: ["clipboard", "undo"]
					}, {
						name: "styles",
						groups: ["styles"]
					}, {
						name: "colors",
						groups: ["colors"]
					}],
					title: !1,
					allowedContent: !0,
					bodyId: "editor",
					templates_replaceContent: !1,
					enterMode: "P",
					forceEnterMode: !0,
					format_tags: "p;h1;h2;h3;h4;h5;h6",
					removePlugins: "table,magicline,tableselection,tabletools",
					removeButtons: "Save,NewPage,Preview,Print,Templates,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,Blockquote,CreateDiv,Language,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,About,ShowBlocks,BidiLtr,BidiRtl,Flash,Image,Subscript,Superscript,Anchor",
					minimumChangeMilliseconds: 100
				},
				init: function (e, t, n, i) {
					var r = i.options,
						o = n.children(".keditor-component-content");
					o.prop("contenteditable", !0), o.on("input", (function (o) {
						"function" == typeof r.onComponentChanged && r.onComponentChanged.call(i, o, n), "function" == typeof r.onContainerChanged && r.onContainerChanged.call(i, o, t, e), "function" == typeof r.onContentChanged && r.onContentChanged.call(i, o, e)
					}));
					var s = f.a.inline(o[0], this.options);
					s.on("instanceReady", (function () {
						$("#cke_" + o.attr("id")).appendTo(i.wrapper), "function" == typeof r.onComponentReady && r.onComponentReady.call(e, n, s)
					})), s.on("key", (function (e) {
						(e.data.domEvent.$.ctrlKey && 86 === e.data.domEvent.$.keyCode || 13 === e.data.domEvent.$.keyCode) && (console.log("Dont scroll!!"), i.iframeBody.scrollTop($(s.element.$).offset().top), setTimeout((function () {}), 10))
					}), s)
				},
				getContent: function (e, t) {
					var n = e.find(".keditor-component-content"),
						i = n.attr("id"),
						r = f.a.instances[i];
					return r ? r.getData() : n.html()
				},
				destroy: function (e, t) {
					var n = e.find(".keditor-component-content").attr("id");
					f.a.instances[n] && f.a.instances[n].destroy()
				}
			}, r.a.components.video = {
				init: function (e, t, n, i) {
					var r = n.children(".keditor-component-content").find("video");
					r.parent().is(".video-wrapper") || r.wrap('<div class="video-wrapper"></div>')
				},
				getContent: function (e, t) {
					var n = e.children(".keditor-component-content");
					return n.find("video").unwrap(), n.html()
				},
				settingEnabled: !0,
				settingTitle: "Video Settings",
				initSettingForm: function (e, t) {
					e.append('\n            <form class="form-horizontal">\n                <div class="form-group">\n                    <label for="video-input" class="col-sm-12">Video file</label>\n                    <div class="col-sm-12">\n                        <div class="video-toolbar">\n                            <a href="#" class="btn-video-input btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>\n                            <input class="video-input" type="file" style="display: none" />\n                        </div>\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="video-autoplay" class="col-sm-12">Autoplay</label>\n                    <div class="col-sm-12">\n                        <input type="checkbox" class="video-autoplay" />\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="video-loop" class="col-sm-12">Loop</label>\n                    <div class="col-sm-12">\n                        <input type="checkbox" class="video-loop" />\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="video-controls" class="col-sm-12">Show Controls</label>\n                    <div class="col-sm-12">\n                        <input type="checkbox" class="video-controls" checked />\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="" class="col-sm-12">Ratio</label>\n                    <div class="col-sm-12">\n                        <input type="radio" name="video-radio" class="video-ratio" value="4/3" checked /> 4:3\n                    </div>\n                    <div class="col-sm-12">\n                        <input type="radio" name="video-radio" class="video-ratio" value="16/9" /> 16:9\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="video-width" class="col-sm-12">Width (px)</label>\n                    <div class="col-sm-12">\n                        <input type="number" class="video-width form-control" min="320" max="1920" value="320" />\n                    </div>\n                </div>\n            </form>\n        ');
					var n = e.find(".video-input");
					e.find(".btn-video-input").on("click", (function (e) {
						e.preventDefault(), n.trigger("click")
					})), n.on("change", (function () {
						var e = this.files[0],
							n = t.getSettingComponent().find("video");
						/video/.test(e.type) ? n.attr("src", URL.createObjectURL(e)) : alert("Your selected file is not an video file!")
					})), e.find(".video-autoplay").on("click", (function () {
						t.getSettingComponent().find("video").prop("autoplay", this.checked)
					})), e.find(".video-loop").on("click", (function () {
						t.getSettingComponent().find("video").prop("loop", this.checked)
					})), e.find(".video-ratio").on("click", (function () {
						t.getSettingComponent().find("video").attr("data-ratio", this.value), e.find(".video-width").trigger("change")
					})), e.find(".video-controls").on("click", (function () {
						t.getSettingComponent().find("video").prop("controls", this.checked)
					})), e.find(".video-width").on("change", (function () {
						var e = t.getSettingComponent().find("video"),
							n = "16/9" === e.attr("data-ratio") ? 16 / 9 : 4 / 3,
							i = this.value / n;
						e.attr("width", this.value), e.attr("height", i)
					}))
				},
				showSettingForm: function (e, t, n) {
					var i = t.find("video");
					e.find(".video-autoplay").prop("checked", i.prop("autoplay")), e.find(".video-loop").prop("checked", i.prop("loop")), e.find(".video-ratio").prop("checked", !1).filter('[value="' + i.attr("data-ratio") + '"]').prop("checked", !0), e.find(".video-controls").prop("checked", i.prop("controls")), e.find(".video-width").val(i.attr("width"))
				}
			}, r.a.components.vimeo = {
				init: function (e, t, n, i) {
					var r = n.find("iframe"),
						o = r.parent();
					i.initIframeCover(r, o)
				},
				settingEnabled: !0,
				settingTitle: "Vimeo Settings",
				initSettingForm: function (e, t) {
					e.append('<form class="form-horizontal">   <div class="form-group">       <div class="col-sm-12">           <button type="button" class="btn btn-block btn-primary btn-vimeo-edit">Change Video</button>       </div>   </div>   <div class="form-group">       <label class="col-sm-12">Autoplay</label>       <div class="col-sm-12">           <input type="checkbox" id="vimeo-autoplay" />       </div>   </div>   <div class="form-group">       <label class="col-sm-12">Aspect Ratio</label>       <div class="col-sm-12">           <button type="button" class="btn btn-sm btn-default btn-vimeo-169">16:9</button>           <button type="button" class="btn btn-sm btn-default btn-vimeo-43">4:3</button>       </div>   </div></form>'), e.find(".btn-vimeo-edit").on("click", (function (e) {
						e.preventDefault();
						var n = prompt("Please enter Vimeo URL in here:").match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
						n && n[1] ? t.getSettingComponent().find(".embed-responsive-item").attr("src", "https://player.vimeo.com/video/" + n[1] + "?byline=0&portrait=0&badge=0") : alert("Your Vimeo URL is invalid!")
					})), e.find(".btn-vimeo-169").on("click", (function (e) {
						e.preventDefault(), t.getSettingComponent().find(".embed-responsive").removeClass("embed-responsive-4by3").addClass("embed-responsive-16by9")
					})), e.find(".btn-vimeo-43").on("click", (function (e) {
						e.preventDefault(), t.getSettingComponent().find(".embed-responsive").removeClass("embed-responsive-16by9").addClass("embed-responsive-4by3")
					}));
					var n = e.find("#vimeo-autoplay");
					n.on("click", (function () {
						var e = t.getSettingComponent().find(".embed-responsive-item"),
							i = e.attr("src").replace(/(\?.+)+/, "") + "?byline=0&portrait=0&badge=0&autoplay=" + (n.is(":checked") ? 1 : 0);
						e.attr("src", i)
					}))
				},
				showSettingForm: function (e, t, n) {
					var i = t.find(".embed-responsive-item"),
						r = e.find("#vimeo-autoplay"),
						o = i.attr("src");
					r.prop("checked", -1 !== o.indexOf("autoplay=1"))
				}
			}, r.a.components.youtube = {
				init: function (e, t, n, i) {
					var r = n.find("iframe"),
						o = r.parent();
					i.initIframeCover(r, o)
				},
				settingEnabled: !0,
				settingTitle: "Youtube Settings",
				initSettingForm: function (e, t) {
					e.append('<form class="form-horizontal">   <div class="form-group">       <div class="col-sm-12">           <button type="button" class="btn btn-block btn-primary btn-youtube-edit">Change Video</button>       </div>   </div>   <div class="form-group">       <label class="col-sm-12">Autoplay</label>       <div class="col-sm-12">           <input type="checkbox" id="youtube-autoplay" />       </div>   </div>   <div class="form-group">       <label class="col-sm-12">Aspect Ratio</label>       <div class="col-sm-12">           <button type="button" class="btn btn-sm btn-default btn-youtube-169">16:9</button>           <button type="button" class="btn btn-sm btn-default btn-youtube-43">4:3</button>       </div>   </div></form>'), e.find(".btn-youtube-edit").on("click", (function (e) {
						e.preventDefault();
						var n = prompt("Please enter Youtube URL in here:").match(/^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/);
						n && n[1] ? t.getSettingComponent().find(".embed-responsive-item").attr("src", "https://www.youtube.com/embed/" + n[1]) : alert("Your Youtube URL is invalid!")
					})), e.find(".btn-youtube-169").on("click", (function (e) {
						e.preventDefault(), t.getSettingComponent().find(".embed-responsive").removeClass("embed-responsive-4by3").addClass("embed-responsive-16by9")
					})), e.find(".btn-youtube-43").on("click", (function (e) {
						e.preventDefault(), t.getSettingComponent().find(".embed-responsive").removeClass("embed-responsive-16by9").addClass("embed-responsive-4by3")
					}));
					var n = e.find("#youtube-autoplay");
					n.on("click", (function () {
						var e = t.getSettingComponent().find(".embed-responsive-item"),
							i = e.attr("src").replace(/(\?.+)+/, "") + "?autoplay=" + (n.is(":checked") ? 1 : 0);
						e.attr("src", i)
					}))
				},
				showSettingForm: function (e, t, n) {
					var i = t.find(".embed-responsive-item"),
						r = e.find("#youtube-autoplay"),
						o = i.attr("src");
					r.prop("checked", -1 !== o.indexOf("autoplay=1"))
				}
			}, r.a.components.button = {
				init: function (e, t, n, i) {
					n.children(".keditor-component-content")
				},
				settingEnabled: !0,
				settingTitle: "Button Settings",
				initSettingForm: function (e, t) {
					var n = this;
					t.options;
					e.append(`<div>
					<label style="margin-bottom: 5px;" for="body-color-setting" class="form-label">Background color: </label>
					<input type="text" id="btn-color-setting" value="" />
				</div>
				<form class="form-horizontal">
					<div class="form-group">
						<label for="button-type" class="col-sm-12">Text</label>
						<div class="col-sm-12">
						<input type="text" class="form-control" id="btn-text"> </div>
					</div>
					<div class="form-group">
						<label for="button-type" class="col-sm-12">Link To</label>
						<div class="col-sm-12">
							<input type="text" class="form-control" id="link-to">
							<button type="button" class="btn btn-block btn-primary" id="link-to-file">Link to File</button>
						</div>
					</div>
					<div class="form-group">
						<label for="btn-width" class="col-sm-12">Width</label>
						<div class="col-sm-12">
						<input type="number" id="btn-width" class="form-control" /> </div>
					</div>
					<div class="form-group">
						<label for="photo-height" class="col-sm-12">Height</label>
						<div class="col-sm-12">
							<input type="number" id="photo-height" class="form-control" />
						</div>
					</div>
					<div class="form-group">       
					<label for="photo-align" class="col-sm-12">Align</label>    <div class="col-sm-12"> 
						<select id="photo-align" class="form-control">         
							<option value="left">Left</option>              
							<option value="center">Center</option>             
							<option value="right">Right</option>          
						</select>     
					</div>  
	  			 </div>
				</form>`), e.find("#btn-text").on("change", (function (e) {
						e.preventDefault();
						var n = l()(this).val();
						t.getSettingComponent().find("a[role='button']").text(n)
					}));
					var i = e.find("#link-to");
					i.on("change", (function (e) {
						e.preventDefault();
						var n = l()(this).val();
						t.getSettingComponent().find("a[role='button']").attr("href", n)
					})), e.find("#link-to-file").on("click", (function (r) {
						r.preventDefault();
						var o = t.getSettingComponent(),
							s = {
								setLink: function (e) {
									o.find("a[role='button']").attr("href", e), i.val(e)
								}
							};
						u.a.call(n, e, s, t, "htm;html;txt;doc;pdf")
					})), e.find("#btn-type").on("change", (function (e) {
						e.preventDefault();
						var n = l()(this).val(),
        
							i = t.getSettingComponent().find("a[role='button']");
						i.removeClass("btn-primary btn-success btn-warning btn-danger btn-link"), i.addClass(n)
					})),
                    //add by me
					$("#btn-color-setting").colorpicker({ transparentColor: true });
                    e.find("#btn-color-setting").on("change", (function (e) {
						e.preventDefault();
                        $("#btn-color-setting").colorpicker({ transparentColor: true });
						var n = l()(this).val().toString(),
        
							i = t.getSettingComponent().find("a[role='button']");
						i.removeClass("btn-primary btn-success btn-warning btn-danger btn-link"), 
                         i.css('background-color', n);
                        //alert(typeof(n));
					})),
					//button width
					e.find("#btn-width").on("change", (function (e) {
						let w = t.getSettingComponent().closest('section').width();
						alert(w);
					}))
				},
				showSettingForm: function (e, t, n) {
					var i = t.find("a[role='button']");
					console.log(i), e.find("#btn-text").val(i.text()), e.find("#link-to").val(i.attr("href")), i.hasClass("btn-primary") ? e.find("#btn-type option[value='btn-primary']").attr("selected", "selected") : i.hasClass("btn-success") ? e.find("#btn-type option[value='btn-success']").attr("selected", "selected") : i.hasClass("btn-warning") ? e.find("#btn-type option[value='btn-warning']").attr("selected", "selected") : i.hasClass("btn-danger") ? e.find("#btn-type option[value='btn-danger']").attr("selected", "selected") : i.hasClass("btn-link") && e.find("#btn-type option[value='btn-link']").attr("selected", "selected")
				}
			}
		}
	])
}));
//# sourceMappingURL=keditor-components.js.map
