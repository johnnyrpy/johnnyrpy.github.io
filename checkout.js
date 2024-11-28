!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("Reepay", [], e)
    : "object" == typeof exports
    ? (exports.Reepay = e())
    : (t.Reepay = e());
})(self, function () {
  return (function () {
    var t = {
        4963: function (t) {
          t.exports = function (t) {
            if ("function" != typeof t)
              throw TypeError(t + " is not a function!");
            return t;
          };
        },
        7722: function (t, e, n) {
          var r = n(6314)("unscopables"),
            o = Array.prototype;
          null == o[r] && n(7728)(o, r, {}),
            (t.exports = function (t) {
              o[r][t] = !0;
            });
        },
        6793: function (t, e, n) {
          "use strict";
          var r = n(4496)(!0);
          t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1);
          };
        },
        3328: function (t) {
          t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || (void 0 !== r && r in t))
              throw TypeError(n + ": incorrect invocation!");
            return t;
          };
        },
        7007: function (t, e, n) {
          var r = n(5286);
          t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
          };
        },
        9315: function (t, e, n) {
          var r = n(2110),
            o = n(875),
            i = n(2337);
          t.exports = function (t) {
            return function (e, n, a) {
              var c,
                u = r(e),
                s = o(u.length),
                l = i(a, s);
              if (t && n != n) {
                for (; s > l; ) if ((c = u[l++]) != c) return !0;
              } else
                for (; s > l; l++)
                  if ((t || l in u) && u[l] === n) return t || l || 0;
              return !t && -1;
            };
          };
        },
        50: function (t, e, n) {
          var r = n(741),
            o = n(9797),
            i = n(508),
            a = n(875),
            c = n(6886);
          t.exports = function (t, e) {
            var n = 1 == t,
              u = 2 == t,
              s = 3 == t,
              l = 4 == t,
              f = 6 == t,
              p = 5 == t || f,
              d = e || c;
            return function (e, c, h) {
              for (
                var v,
                  y,
                  m = i(e),
                  b = o(m),
                  w = r(c, h, 3),
                  g = a(b.length),
                  _ = 0,
                  S = n ? d(e, g) : u ? d(e, 0) : void 0;
                g > _;
                _++
              )
                if ((p || _ in b) && ((y = w((v = b[_]), _, m)), t))
                  if (n) S[_] = y;
                  else if (y)
                    switch (t) {
                      case 3:
                        return !0;
                      case 5:
                        return v;
                      case 6:
                        return _;
                      case 2:
                        S.push(v);
                    }
                  else if (l) return !1;
              return f ? -1 : s || l ? l : S;
            };
          };
        },
        2736: function (t, e, n) {
          var r = n(5286),
            o = n(4302),
            i = n(6314)("species");
          t.exports = function (t) {
            var e;
            return (
              o(t) &&
                ("function" != typeof (e = t.constructor) ||
                  (e !== Array && !o(e.prototype)) ||
                  (e = void 0),
                r(e) && null === (e = e[i]) && (e = void 0)),
              void 0 === e ? Array : e
            );
          };
        },
        6886: function (t, e, n) {
          var r = n(2736);
          t.exports = function (t, e) {
            return new (r(t))(e);
          };
        },
        4398: function (t, e, n) {
          "use strict";
          var r = n(4963),
            o = n(5286),
            i = n(7242),
            a = [].slice,
            c = {};
          t.exports =
            Function.bind ||
            function (t) {
              var e = r(this),
                n = a.call(arguments, 1),
                u = function () {
                  var r = n.concat(a.call(arguments));
                  return this instanceof u
                    ? (function (t, e, n) {
                        if (!(e in c)) {
                          for (var r = [], o = 0; o < e; o++)
                            r[o] = "a[" + o + "]";
                          c[e] = Function(
                            "F,a",
                            "return new F(" + r.join(",") + ")"
                          );
                        }
                        return c[e](t, n);
                      })(e, r.length, r)
                    : i(e, r, t);
                };
              return o(e.prototype) && (u.prototype = e.prototype), u;
            };
        },
        1488: function (t, e, n) {
          var r = n(2032),
            o = n(6314)("toStringTag"),
            i =
              "Arguments" ==
              r(
                (function () {
                  return arguments;
                })()
              );
          t.exports = function (t) {
            var e, n, a;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = Object(t)), o))
              ? n
              : i
              ? r(e)
              : "Object" == (a = r(e)) && "function" == typeof e.callee
              ? "Arguments"
              : a;
          };
        },
        2032: function (t) {
          var e = {}.toString;
          t.exports = function (t) {
            return e.call(t).slice(8, -1);
          };
        },
        9824: function (t, e, n) {
          "use strict";
          var r = n(9275).f,
            o = n(2503),
            i = n(4408),
            a = n(741),
            c = n(3328),
            u = n(3531),
            s = n(2923),
            l = n(5436),
            f = n(2974),
            p = n(7057),
            d = n(4728).fastKey,
            h = n(1616),
            v = p ? "_s" : "size",
            y = function (t, e) {
              var n,
                r = d(e);
              if ("F" !== r) return t._i[r];
              for (n = t._f; n; n = n.n) if (n.k == e) return n;
            };
          t.exports = {
            getConstructor: function (t, e, n, s) {
              var l = t(function (t, r) {
                c(t, l, e, "_i"),
                  (t._t = e),
                  (t._i = o(null)),
                  (t._f = void 0),
                  (t._l = void 0),
                  (t[v] = 0),
                  null != r && u(r, n, t[s], t);
              });
              return (
                i(l.prototype, {
                  clear: function () {
                    for (var t = h(this, e), n = t._i, r = t._f; r; r = r.n)
                      (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    (t._f = t._l = void 0), (t[v] = 0);
                  },
                  delete: function (t) {
                    var n = h(this, e),
                      r = y(n, t);
                    if (r) {
                      var o = r.n,
                        i = r.p;
                      delete n._i[r.i],
                        (r.r = !0),
                        i && (i.n = o),
                        o && (o.p = i),
                        n._f == r && (n._f = o),
                        n._l == r && (n._l = i),
                        n[v]--;
                    }
                    return !!r;
                  },
                  forEach: function (t) {
                    h(this, e);
                    for (
                      var n,
                        r = a(
                          t,
                          arguments.length > 1 ? arguments[1] : void 0,
                          3
                        );
                      (n = n ? n.n : this._f);

                    )
                      for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                  },
                  has: function (t) {
                    return !!y(h(this, e), t);
                  },
                }),
                p &&
                  r(l.prototype, "size", {
                    get: function () {
                      return h(this, e)[v];
                    },
                  }),
                l
              );
            },
            def: function (t, e, n) {
              var r,
                o,
                i = y(t, e);
              return (
                i
                  ? (i.v = n)
                  : ((t._l = i =
                      {
                        i: (o = d(e, !0)),
                        k: e,
                        v: n,
                        p: (r = t._l),
                        n: void 0,
                        r: !1,
                      }),
                    t._f || (t._f = i),
                    r && (r.n = i),
                    t[v]++,
                    "F" !== o && (t._i[o] = i)),
                t
              );
            },
            getEntry: y,
            setStrong: function (t, e, n) {
              s(
                t,
                e,
                function (t, n) {
                  (this._t = h(t, e)), (this._k = n), (this._l = void 0);
                },
                function () {
                  for (var t = this, e = t._k, n = t._l; n && n.r; ) n = n.p;
                  return t._t && (t._l = n = n ? n.n : t._t._f)
                    ? l(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v])
                    : ((t._t = void 0), l(1));
                },
                n ? "entries" : "values",
                !n,
                !0
              ),
                f(e);
            },
          };
        },
        5795: function (t, e, n) {
          "use strict";
          var r = n(3816),
            o = n(2985),
            i = n(7234),
            a = n(4408),
            c = n(4728),
            u = n(3531),
            s = n(3328),
            l = n(5286),
            f = n(4253),
            p = n(7462),
            d = n(2943),
            h = n(266);
          t.exports = function (t, e, n, v, y, m) {
            var b = r[t],
              w = b,
              g = y ? "set" : "add",
              _ = w && w.prototype,
              S = {},
              E = function (t) {
                var e = _[t];
                i(
                  _,
                  t,
                  "delete" == t || "has" == t
                    ? function (t) {
                        return !(m && !l(t)) && e.call(this, 0 === t ? 0 : t);
                      }
                    : "get" == t
                    ? function (t) {
                        return m && !l(t)
                          ? void 0
                          : e.call(this, 0 === t ? 0 : t);
                      }
                    : "add" == t
                    ? function (t) {
                        return e.call(this, 0 === t ? 0 : t), this;
                      }
                    : function (t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this;
                      }
                );
              };
            if (
              "function" == typeof w &&
              (m ||
                (_.forEach &&
                  !f(function () {
                    new w().entries().next();
                  })))
            ) {
              var x = new w(),
                O = x[g](m ? {} : -0, 1) != x,
                P = f(function () {
                  x.has(1);
                }),
                k = p(function (t) {
                  new w(t);
                }),
                j =
                  !m &&
                  f(function () {
                    for (var t = new w(), e = 5; e--; ) t[g](e, e);
                    return !t.has(-0);
                  });
              k ||
                (((w = e(function (e, n) {
                  s(e, w, t);
                  var r = h(new b(), e, w);
                  return null != n && u(n, y, r[g], r), r;
                })).prototype = _),
                (_.constructor = w)),
                (P || j) && (E("delete"), E("has"), y && E("get")),
                (j || O) && E(g),
                m && _.clear && delete _.clear;
            } else
              (w = v.getConstructor(e, t, y, g)),
                a(w.prototype, n),
                (c.NEED = !0);
            return (
              d(w, t),
              (S[t] = w),
              o(o.G + o.W + o.F * (w != b), S),
              m || v.setStrong(w, t, y),
              w
            );
          };
        },
        5645: function (t) {
          var e = (t.exports = { version: "2.6.12" });
          "number" == typeof __e && (__e = e);
        },
        741: function (t, e, n) {
          var r = n(4963);
          t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
              case 1:
                return function (n) {
                  return t.call(e, n);
                };
              case 2:
                return function (n, r) {
                  return t.call(e, n, r);
                };
              case 3:
                return function (n, r, o) {
                  return t.call(e, n, r, o);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          };
        },
        1355: function (t) {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
          };
        },
        7057: function (t, e, n) {
          t.exports = !n(4253)(function () {
            return (
              7 !=
              Object.defineProperty({}, "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
        },
        2457: function (t, e, n) {
          var r = n(5286),
            o = n(3816).document,
            i = r(o) && r(o.createElement);
          t.exports = function (t) {
            return i ? o.createElement(t) : {};
          };
        },
        4430: function (t) {
          t.exports =
            "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
              ","
            );
        },
        5541: function (t, e, n) {
          var r = n(7184),
            o = n(4548),
            i = n(4682);
          t.exports = function (t) {
            var e = r(t),
              n = o.f;
            if (n)
              for (var a, c = n(t), u = i.f, s = 0; c.length > s; )
                u.call(t, (a = c[s++])) && e.push(a);
            return e;
          };
        },
        2985: function (t, e, n) {
          var r = n(3816),
            o = n(5645),
            i = n(7728),
            a = n(7234),
            c = n(741),
            u = "prototype",
            s = function (t, e, n) {
              var l,
                f,
                p,
                d,
                h = t & s.F,
                v = t & s.G,
                y = t & s.S,
                m = t & s.P,
                b = t & s.B,
                w = v ? r : y ? r[e] || (r[e] = {}) : (r[e] || {})[u],
                g = v ? o : o[e] || (o[e] = {}),
                _ = g[u] || (g[u] = {});
              for (l in (v && (n = e), n))
                (p = ((f = !h && w && void 0 !== w[l]) ? w : n)[l]),
                  (d =
                    b && f
                      ? c(p, r)
                      : m && "function" == typeof p
                      ? c(Function.call, p)
                      : p),
                  w && a(w, l, p, t & s.U),
                  g[l] != p && i(g, l, d),
                  m && _[l] != p && (_[l] = p);
            };
          (r.core = o),
            (s.F = 1),
            (s.G = 2),
            (s.S = 4),
            (s.P = 8),
            (s.B = 16),
            (s.W = 32),
            (s.U = 64),
            (s.R = 128),
            (t.exports = s);
        },
        8852: function (t, e, n) {
          var r = n(6314)("match");
          t.exports = function (t) {
            var e = /./;
            try {
              "/./"[t](e);
            } catch (n) {
              try {
                return (e[r] = !1), !"/./"[t](e);
              } catch (t) {}
            }
            return !0;
          };
        },
        4253: function (t) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        8082: function (t, e, n) {
          "use strict";
          n(8269);
          var r = n(7234),
            o = n(7728),
            i = n(4253),
            a = n(1355),
            c = n(6314),
            u = n(1165),
            s = c("species"),
            l = !i(function () {
              var t = /./;
              return (
                (t.exec = function () {
                  var t = [];
                  return (t.groups = { a: "7" }), t;
                }),
                "7" !== "".replace(t, "$<a>")
              );
            }),
            f = (function () {
              var t = /(?:)/,
                e = t.exec;
              t.exec = function () {
                return e.apply(this, arguments);
              };
              var n = "ab".split(t);
              return 2 === n.length && "a" === n[0] && "b" === n[1];
            })();
          t.exports = function (t, e, n) {
            var p = c(t),
              d = !i(function () {
                var e = {};
                return (
                  (e[p] = function () {
                    return 7;
                  }),
                  7 != ""[t](e)
                );
              }),
              h = d
                ? !i(function () {
                    var e = !1,
                      n = /a/;
                    return (
                      (n.exec = function () {
                        return (e = !0), null;
                      }),
                      "split" === t &&
                        ((n.constructor = {}),
                        (n.constructor[s] = function () {
                          return n;
                        })),
                      n[p](""),
                      !e
                    );
                  })
                : void 0;
            if (!d || !h || ("replace" === t && !l) || ("split" === t && !f)) {
              var v = /./[p],
                y = n(a, p, ""[t], function (t, e, n, r, o) {
                  return e.exec === u
                    ? d && !o
                      ? { done: !0, value: v.call(e, n, r) }
                      : { done: !0, value: t.call(n, e, r) }
                    : { done: !1 };
                }),
                m = y[0],
                b = y[1];
              r(String.prototype, t, m),
                o(
                  RegExp.prototype,
                  p,
                  2 == e
                    ? function (t, e) {
                        return b.call(t, this, e);
                      }
                    : function (t) {
                        return b.call(t, this);
                      }
                );
            }
          };
        },
        3218: function (t, e, n) {
          "use strict";
          var r = n(7007);
          t.exports = function () {
            var t = r(this),
              e = "";
            return (
              t.global && (e += "g"),
              t.ignoreCase && (e += "i"),
              t.multiline && (e += "m"),
              t.unicode && (e += "u"),
              t.sticky && (e += "y"),
              e
            );
          };
        },
        3531: function (t, e, n) {
          var r = n(741),
            o = n(8851),
            i = n(6555),
            a = n(7007),
            c = n(875),
            u = n(9002),
            s = {},
            l = {},
            f = (t.exports = function (t, e, n, f, p) {
              var d,
                h,
                v,
                y,
                m = p
                  ? function () {
                      return t;
                    }
                  : u(t),
                b = r(n, f, e ? 2 : 1),
                w = 0;
              if ("function" != typeof m)
                throw TypeError(t + " is not iterable!");
              if (i(m)) {
                for (d = c(t.length); d > w; w++)
                  if (
                    (y = e ? b(a((h = t[w]))[0], h[1]) : b(t[w])) === s ||
                    y === l
                  )
                    return y;
              } else
                for (v = m.call(t); !(h = v.next()).done; )
                  if ((y = o(v, b, h.value, e)) === s || y === l) return y;
            });
          (f.BREAK = s), (f.RETURN = l);
        },
        18: function (t, e, n) {
          t.exports = n(3825)("native-function-to-string", Function.toString);
        },
        3816: function (t) {
          var e = (t.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")());
          "number" == typeof __g && (__g = e);
        },
        9181: function (t) {
          var e = {}.hasOwnProperty;
          t.exports = function (t, n) {
            return e.call(t, n);
          };
        },
        7728: function (t, e, n) {
          var r = n(9275),
            o = n(681);
          t.exports = n(7057)
            ? function (t, e, n) {
                return r.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                return (t[e] = n), t;
              };
        },
        639: function (t, e, n) {
          var r = n(3816).document;
          t.exports = r && r.documentElement;
        },
        1734: function (t, e, n) {
          t.exports =
            !n(7057) &&
            !n(4253)(function () {
              return (
                7 !=
                Object.defineProperty(n(2457)("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        266: function (t, e, n) {
          var r = n(5286),
            o = n(7375).set;
          t.exports = function (t, e, n) {
            var i,
              a = e.constructor;
            return (
              a !== n &&
                "function" == typeof a &&
                (i = a.prototype) !== n.prototype &&
                r(i) &&
                o &&
                o(t, i),
              t
            );
          };
        },
        7242: function (t) {
          t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
              case 0:
                return r ? t() : t.call(n);
              case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
              case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
              case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
              case 4:
                return r
                  ? t(e[0], e[1], e[2], e[3])
                  : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
          };
        },
        9797: function (t, e, n) {
          var r = n(2032);
          t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                return "String" == r(t) ? t.split("") : Object(t);
              };
        },
        6555: function (t, e, n) {
          var r = n(2803),
            o = n(6314)("iterator"),
            i = Array.prototype;
          t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t);
          };
        },
        4302: function (t, e, n) {
          var r = n(2032);
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" == r(t);
            };
        },
        5286: function (t) {
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
          };
        },
        5364: function (t, e, n) {
          var r = n(5286),
            o = n(2032),
            i = n(6314)("match");
          t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
          };
        },
        8851: function (t, e, n) {
          var r = n(7007);
          t.exports = function (t, e, n, o) {
            try {
              return o ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
              var i = t.return;
              throw (void 0 !== i && r(i.call(t)), e);
            }
          };
        },
        9988: function (t, e, n) {
          "use strict";
          var r = n(2503),
            o = n(681),
            i = n(2943),
            a = {};
          n(7728)(a, n(6314)("iterator"), function () {
            return this;
          }),
            (t.exports = function (t, e, n) {
              (t.prototype = r(a, { next: o(1, n) })), i(t, e + " Iterator");
            });
        },
        2923: function (t, e, n) {
          "use strict";
          var r = n(4461),
            o = n(2985),
            i = n(7234),
            a = n(7728),
            c = n(2803),
            u = n(9988),
            s = n(2943),
            l = n(468),
            f = n(6314)("iterator"),
            p = !([].keys && "next" in [].keys()),
            d = "keys",
            h = "values",
            v = function () {
              return this;
            };
          t.exports = function (t, e, n, y, m, b, w) {
            u(n, e, y);
            var g,
              _,
              S,
              E = function (t) {
                if (!p && t in k) return k[t];
                switch (t) {
                  case d:
                  case h:
                    return function () {
                      return new n(this, t);
                    };
                }
                return function () {
                  return new n(this, t);
                };
              },
              x = e + " Iterator",
              O = m == h,
              P = !1,
              k = t.prototype,
              j = k[f] || k["@@iterator"] || (m && k[m]),
              R = j || E(m),
              M = m ? (O ? E("entries") : R) : void 0,
              T = ("Array" == e && k.entries) || j;
            if (
              (T &&
                (S = l(T.call(new t()))) !== Object.prototype &&
                S.next &&
                (s(S, x, !0), r || "function" == typeof S[f] || a(S, f, v)),
              O &&
                j &&
                j.name !== h &&
                ((P = !0),
                (R = function () {
                  return j.call(this);
                })),
              (r && !w) || (!p && !P && k[f]) || a(k, f, R),
              (c[e] = R),
              (c[x] = v),
              m)
            )
              if (
                ((g = { values: O ? R : E(h), keys: b ? R : E(d), entries: M }),
                w)
              )
                for (_ in g) _ in k || i(k, _, g[_]);
              else o(o.P + o.F * (p || P), e, g);
            return g;
          };
        },
        7462: function (t, e, n) {
          var r = n(6314)("iterator"),
            o = !1;
          try {
            var i = [7][r]();
            (i.return = function () {
              o = !0;
            }),
              Array.from(i, function () {
                throw 2;
              });
          } catch (t) {}
          t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
              var i = [7],
                a = i[r]();
              (a.next = function () {
                return { done: (n = !0) };
              }),
                (i[r] = function () {
                  return a;
                }),
                t(i);
            } catch (t) {}
            return n;
          };
        },
        5436: function (t) {
          t.exports = function (t, e) {
            return { value: e, done: !!t };
          };
        },
        2803: function (t) {
          t.exports = {};
        },
        4461: function (t) {
          t.exports = !1;
        },
        4728: function (t, e, n) {
          var r = n(3953)("meta"),
            o = n(5286),
            i = n(9181),
            a = n(9275).f,
            c = 0,
            u =
              Object.isExtensible ||
              function () {
                return !0;
              },
            s = !n(4253)(function () {
              return u(Object.preventExtensions({}));
            }),
            l = function (t) {
              a(t, r, { value: { i: "O" + ++c, w: {} } });
            },
            f = (t.exports = {
              KEY: r,
              NEED: !1,
              fastKey: function (t, e) {
                if (!o(t))
                  return "symbol" == typeof t
                    ? t
                    : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                  if (!u(t)) return "F";
                  if (!e) return "E";
                  l(t);
                }
                return t[r].i;
              },
              getWeak: function (t, e) {
                if (!i(t, r)) {
                  if (!u(t)) return !0;
                  if (!e) return !1;
                  l(t);
                }
                return t[r].w;
              },
              onFreeze: function (t) {
                return s && f.NEED && u(t) && !i(t, r) && l(t), t;
              },
            });
        },
        4351: function (t, e, n) {
          var r = n(3816),
            o = n(4193).set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            c = r.Promise,
            u = "process" == n(2032)(a);
          t.exports = function () {
            var t,
              e,
              n,
              s = function () {
                var r, o;
                for (u && (r = a.domain) && r.exit(); t; ) {
                  (o = t.fn), (t = t.next);
                  try {
                    o();
                  } catch (r) {
                    throw (t ? n() : (e = void 0), r);
                  }
                }
                (e = void 0), r && r.enter();
              };
            if (u)
              n = function () {
                a.nextTick(s);
              };
            else if (!i || (r.navigator && r.navigator.standalone))
              if (c && c.resolve) {
                var l = c.resolve(void 0);
                n = function () {
                  l.then(s);
                };
              } else
                n = function () {
                  o.call(r, s);
                };
            else {
              var f = !0,
                p = document.createTextNode("");
              new i(s).observe(p, { characterData: !0 }),
                (n = function () {
                  p.data = f = !f;
                });
            }
            return function (r) {
              var o = { fn: r, next: void 0 };
              e && (e.next = o), t || ((t = o), n()), (e = o);
            };
          };
        },
        3499: function (t, e, n) {
          "use strict";
          var r = n(4963);
          function o(t) {
            var e, n;
            (this.promise = new t(function (t, r) {
              if (void 0 !== e || void 0 !== n)
                throw TypeError("Bad Promise constructor");
              (e = t), (n = r);
            })),
              (this.resolve = r(e)),
              (this.reject = r(n));
          }
          t.exports.f = function (t) {
            return new o(t);
          };
        },
        2503: function (t, e, n) {
          var r = n(7007),
            o = n(5588),
            i = n(4430),
            a = n(9335)("IE_PROTO"),
            c = function () {},
            u = "prototype",
            s = function () {
              var t,
                e = n(2457)("iframe"),
                r = i.length;
              for (
                e.style.display = "none",
                  n(639).appendChild(e),
                  e.src = "javascript:",
                  (t = e.contentWindow.document).open(),
                  t.write("<script>document.F=Object</script>"),
                  t.close(),
                  s = t.F;
                r--;

              )
                delete s[u][i[r]];
              return s();
            };
          t.exports =
            Object.create ||
            function (t, e) {
              var n;
              return (
                null !== t
                  ? ((c[u] = r(t)), (n = new c()), (c[u] = null), (n[a] = t))
                  : (n = s()),
                void 0 === e ? n : o(n, e)
              );
            };
        },
        9275: function (t, e, n) {
          var r = n(7007),
            o = n(1734),
            i = n(1689),
            a = Object.defineProperty;
          e.f = n(7057)
            ? Object.defineProperty
            : function (t, e, n) {
                if ((r(t), (e = i(e, !0)), r(n), o))
                  try {
                    return a(t, e, n);
                  } catch (t) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t;
              };
        },
        5588: function (t, e, n) {
          var r = n(9275),
            o = n(7007),
            i = n(7184);
          t.exports = n(7057)
            ? Object.defineProperties
            : function (t, e) {
                o(t);
                for (var n, a = i(e), c = a.length, u = 0; c > u; )
                  r.f(t, (n = a[u++]), e[n]);
                return t;
              };
        },
        8693: function (t, e, n) {
          var r = n(4682),
            o = n(681),
            i = n(2110),
            a = n(1689),
            c = n(9181),
            u = n(1734),
            s = Object.getOwnPropertyDescriptor;
          e.f = n(7057)
            ? s
            : function (t, e) {
                if (((t = i(t)), (e = a(e, !0)), u))
                  try {
                    return s(t, e);
                  } catch (t) {}
                if (c(t, e)) return o(!r.f.call(t, e), t[e]);
              };
        },
        9327: function (t, e, n) {
          var r = n(2110),
            o = n(616).f,
            i = {}.toString,
            a =
              "object" == typeof window && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [];
          t.exports.f = function (t) {
            return a && "[object Window]" == i.call(t)
              ? (function (t) {
                  try {
                    return o(t);
                  } catch (t) {
                    return a.slice();
                  }
                })(t)
              : o(r(t));
          };
        },
        616: function (t, e, n) {
          var r = n(189),
            o = n(4430).concat("length", "prototype");
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return r(t, o);
            };
        },
        4548: function (t, e) {
          e.f = Object.getOwnPropertySymbols;
        },
        468: function (t, e, n) {
          var r = n(9181),
            o = n(508),
            i = n(9335)("IE_PROTO"),
            a = Object.prototype;
          t.exports =
            Object.getPrototypeOf ||
            function (t) {
              return (
                (t = o(t)),
                r(t, i)
                  ? t[i]
                  : "function" == typeof t.constructor &&
                    t instanceof t.constructor
                  ? t.constructor.prototype
                  : t instanceof Object
                  ? a
                  : null
              );
            };
        },
        189: function (t, e, n) {
          var r = n(9181),
            o = n(2110),
            i = n(9315)(!1),
            a = n(9335)("IE_PROTO");
          t.exports = function (t, e) {
            var n,
              c = o(t),
              u = 0,
              s = [];
            for (n in c) n != a && r(c, n) && s.push(n);
            for (; e.length > u; )
              r(c, (n = e[u++])) && (~i(s, n) || s.push(n));
            return s;
          };
        },
        7184: function (t, e, n) {
          var r = n(189),
            o = n(4430);
          t.exports =
            Object.keys ||
            function (t) {
              return r(t, o);
            };
        },
        4682: function (t, e) {
          e.f = {}.propertyIsEnumerable;
        },
        3160: function (t, e, n) {
          var r = n(2985),
            o = n(5645),
            i = n(4253);
          t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
              a = {};
            (a[t] = e(n)),
              r(
                r.S +
                  r.F *
                    i(function () {
                      n(1);
                    }),
                "Object",
                a
              );
          };
        },
        188: function (t) {
          t.exports = function (t) {
            try {
              return { e: !1, v: t() };
            } catch (t) {
              return { e: !0, v: t };
            }
          };
        },
        94: function (t, e, n) {
          var r = n(7007),
            o = n(5286),
            i = n(3499);
          t.exports = function (t, e) {
            if ((r(t), o(e) && e.constructor === t)) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise;
          };
        },
        681: function (t) {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        4408: function (t, e, n) {
          var r = n(7234);
          t.exports = function (t, e, n) {
            for (var o in e) r(t, o, e[o], n);
            return t;
          };
        },
        7234: function (t, e, n) {
          var r = n(3816),
            o = n(7728),
            i = n(9181),
            a = n(3953)("src"),
            c = n(18),
            u = "toString",
            s = ("" + c).split(u);
          (n(5645).inspectSource = function (t) {
            return c.call(t);
          }),
            (t.exports = function (t, e, n, c) {
              var u = "function" == typeof n;
              u && (i(n, "name") || o(n, "name", e)),
                t[e] !== n &&
                  (u &&
                    (i(n, a) || o(n, a, t[e] ? "" + t[e] : s.join(String(e)))),
                  t === r
                    ? (t[e] = n)
                    : c
                    ? t[e]
                      ? (t[e] = n)
                      : o(t, e, n)
                    : (delete t[e], o(t, e, n)));
            })(Function.prototype, u, function () {
              return ("function" == typeof this && this[a]) || c.call(this);
            });
        },
        7787: function (t, e, n) {
          "use strict";
          var r = n(1488),
            o = RegExp.prototype.exec;
          t.exports = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
              var i = n.call(t, e);
              if ("object" != typeof i)
                throw new TypeError(
                  "RegExp exec method returned something other than an Object or null"
                );
              return i;
            }
            if ("RegExp" !== r(t))
              throw new TypeError(
                "RegExp#exec called on incompatible receiver"
              );
            return o.call(t, e);
          };
        },
        1165: function (t, e, n) {
          "use strict";
          var r,
            o,
            i = n(3218),
            a = RegExp.prototype.exec,
            c = String.prototype.replace,
            u = a,
            s = "lastIndex",
            l =
              ((r = /a/),
              (o = /b*/g),
              a.call(r, "a"),
              a.call(o, "a"),
              0 !== r[s] || 0 !== o[s]),
            f = void 0 !== /()??/.exec("")[1];
          (l || f) &&
            (u = function (t) {
              var e,
                n,
                r,
                o,
                u = this;
              return (
                f && (n = new RegExp("^" + u.source + "$(?!\\s)", i.call(u))),
                l && (e = u[s]),
                (r = a.call(u, t)),
                l && r && (u[s] = u.global ? r.index + r[0].length : e),
                f &&
                  r &&
                  r.length > 1 &&
                  c.call(r[0], n, function () {
                    for (o = 1; o < arguments.length - 2; o++)
                      void 0 === arguments[o] && (r[o] = void 0);
                  }),
                r
              );
            }),
            (t.exports = u);
        },
        7375: function (t, e, n) {
          var r = n(5286),
            o = n(7007),
            i = function (t, e) {
              if ((o(t), !r(e) && null !== e))
                throw TypeError(e + ": can't set as prototype!");
            };
          t.exports = {
            set:
              Object.setPrototypeOf ||
              ("__proto__" in {}
                ? (function (t, e, r) {
                    try {
                      (r = n(741)(
                        Function.call,
                        n(8693).f(Object.prototype, "__proto__").set,
                        2
                      ))(t, []),
                        (e = !(t instanceof Array));
                    } catch (t) {
                      e = !0;
                    }
                    return function (t, n) {
                      return i(t, n), e ? (t.__proto__ = n) : r(t, n), t;
                    };
                  })({}, !1)
                : void 0),
            check: i,
          };
        },
        2974: function (t, e, n) {
          "use strict";
          var r = n(3816),
            o = n(9275),
            i = n(7057),
            a = n(6314)("species");
          t.exports = function (t) {
            var e = r[t];
            i &&
              e &&
              !e[a] &&
              o.f(e, a, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        2943: function (t, e, n) {
          var r = n(9275).f,
            o = n(9181),
            i = n(6314)("toStringTag");
          t.exports = function (t, e, n) {
            t &&
              !o((t = n ? t : t.prototype), i) &&
              r(t, i, { configurable: !0, value: e });
          };
        },
        9335: function (t, e, n) {
          var r = n(3825)("keys"),
            o = n(3953);
          t.exports = function (t) {
            return r[t] || (r[t] = o(t));
          };
        },
        3825: function (t, e, n) {
          var r = n(5645),
            o = n(3816),
            i = "__core-js_shared__",
            a = o[i] || (o[i] = {});
          (t.exports = function (t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {});
          })("versions", []).push({
            version: r.version,
            mode: n(4461) ? "pure" : "global",
            copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)",
          });
        },
        8364: function (t, e, n) {
          var r = n(7007),
            o = n(4963),
            i = n(6314)("species");
          t.exports = function (t, e) {
            var n,
              a = r(t).constructor;
            return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
          };
        },
        4496: function (t, e, n) {
          var r = n(1467),
            o = n(1355);
          t.exports = function (t) {
            return function (e, n) {
              var i,
                a,
                c = String(o(e)),
                u = r(n),
                s = c.length;
              return u < 0 || u >= s
                ? t
                  ? ""
                  : void 0
                : (i = c.charCodeAt(u)) < 55296 ||
                  i > 56319 ||
                  u + 1 === s ||
                  (a = c.charCodeAt(u + 1)) < 56320 ||
                  a > 57343
                ? t
                  ? c.charAt(u)
                  : i
                : t
                ? c.slice(u, u + 2)
                : a - 56320 + ((i - 55296) << 10) + 65536;
            };
          };
        },
        2094: function (t, e, n) {
          var r = n(5364),
            o = n(1355);
          t.exports = function (t, e, n) {
            if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(o(t));
          };
        },
        9599: function (t, e, n) {
          var r = n(2985),
            o = n(1355),
            i = n(4253),
            a = n(4644),
            c = "[" + a + "]",
            u = RegExp("^" + c + c + "*"),
            s = RegExp(c + c + "*$"),
            l = function (t, e, n) {
              var o = {},
                c = i(function () {
                  return !!a[t]() || "â€‹Â…" != "â€‹Â…"[t]();
                }),
                u = (o[t] = c ? e(f) : a[t]);
              n && (o[n] = u), r(r.P + r.F * c, "String", o);
            },
            f = (l.trim = function (t, e) {
              return (
                (t = String(o(t))),
                1 & e && (t = t.replace(u, "")),
                2 & e && (t = t.replace(s, "")),
                t
              );
            });
          t.exports = l;
        },
        4644: function (t) {
          t.exports =
            "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff";
        },
        4193: function (t, e, n) {
          var r,
            o,
            i,
            a = n(741),
            c = n(7242),
            u = n(639),
            s = n(2457),
            l = n(3816),
            f = l.process,
            p = l.setImmediate,
            d = l.clearImmediate,
            h = l.MessageChannel,
            v = l.Dispatch,
            y = 0,
            m = {},
            b = "onreadystatechange",
            w = function () {
              var t = +this;
              if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e();
              }
            },
            g = function (t) {
              w.call(t.data);
            };
          (p && d) ||
            ((p = function (t) {
              for (var e = [], n = 1; arguments.length > n; )
                e.push(arguments[n++]);
              return (
                (m[++y] = function () {
                  c("function" == typeof t ? t : Function(t), e);
                }),
                r(y),
                y
              );
            }),
            (d = function (t) {
              delete m[t];
            }),
            "process" == n(2032)(f)
              ? (r = function (t) {
                  f.nextTick(a(w, t, 1));
                })
              : v && v.now
              ? (r = function (t) {
                  v.now(a(w, t, 1));
                })
              : h
              ? ((i = (o = new h()).port2),
                (o.port1.onmessage = g),
                (r = a(i.postMessage, i, 1)))
              : l.addEventListener &&
                "function" == typeof postMessage &&
                !l.importScripts
              ? ((r = function (t) {
                  l.postMessage(t + "", "*");
                }),
                l.addEventListener("message", g, !1))
              : (r =
                  b in s("script")
                    ? function (t) {
                        u.appendChild(s("script"))[b] = function () {
                          u.removeChild(this), w.call(t);
                        };
                      }
                    : function (t) {
                        setTimeout(a(w, t, 1), 0);
                      })),
            (t.exports = { set: p, clear: d });
        },
        2337: function (t, e, n) {
          var r = n(1467),
            o = Math.max,
            i = Math.min;
          t.exports = function (t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
          };
        },
        1467: function (t) {
          var e = Math.ceil,
            n = Math.floor;
          t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? n : e)(t);
          };
        },
        2110: function (t, e, n) {
          var r = n(9797),
            o = n(1355);
          t.exports = function (t) {
            return r(o(t));
          };
        },
        875: function (t, e, n) {
          var r = n(1467),
            o = Math.min;
          t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
          };
        },
        508: function (t, e, n) {
          var r = n(1355);
          t.exports = function (t) {
            return Object(r(t));
          };
        },
        1689: function (t, e, n) {
          var r = n(5286);
          t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (
              e &&
              "function" == typeof (n = t.toString) &&
              !r((o = n.call(t)))
            )
              return o;
            if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t))))
              return o;
            if (
              !e &&
              "function" == typeof (n = t.toString) &&
              !r((o = n.call(t)))
            )
              return o;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        3953: function (t) {
          var e = 0,
            n = Math.random();
          t.exports = function (t) {
            return "Symbol(".concat(
              void 0 === t ? "" : t,
              ")_",
              (++e + n).toString(36)
            );
          };
        },
        575: function (t, e, n) {
          var r = n(3816).navigator;
          t.exports = (r && r.userAgent) || "";
        },
        1616: function (t, e, n) {
          var r = n(5286);
          t.exports = function (t, e) {
            if (!r(t) || t._t !== e)
              throw TypeError("Incompatible receiver, " + e + " required!");
            return t;
          };
        },
        6074: function (t, e, n) {
          var r = n(3816),
            o = n(5645),
            i = n(4461),
            a = n(8787),
            c = n(9275).f;
          t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || c(e, t, { value: a.f(t) });
          };
        },
        8787: function (t, e, n) {
          e.f = n(6314);
        },
        6314: function (t, e, n) {
          var r = n(3825)("wks"),
            o = n(3953),
            i = n(3816).Symbol,
            a = "function" == typeof i;
          (t.exports = function (t) {
            return r[t] || (r[t] = (a && i[t]) || (a ? i : o)("Symbol." + t));
          }).store = r;
        },
        9002: function (t, e, n) {
          var r = n(1488),
            o = n(6314)("iterator"),
            i = n(2803);
          t.exports = n(5645).getIteratorMethod = function (t) {
            if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
          };
        },
        2310: function (t, e, n) {
          "use strict";
          var r = n(2985),
            o = n(50)(5),
            i = "find",
            a = !0;
          i in [] &&
            Array(1)[i](function () {
              a = !1;
            }),
            r(r.P + r.F * a, "Array", {
              find: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            }),
            n(7722)(i);
        },
        6997: function (t, e, n) {
          "use strict";
          var r = n(7722),
            o = n(5436),
            i = n(2803),
            a = n(2110);
          (t.exports = n(2923)(
            Array,
            "Array",
            function (t, e) {
              (this._t = a(t)), (this._i = 0), (this._k = e);
            },
            function () {
              var t = this._t,
                e = this._k,
                n = this._i++;
              return !t || n >= t.length
                ? ((this._t = void 0), o(1))
                : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
            },
            "values"
          )),
            (i.Arguments = i.Array),
            r("keys"),
            r("values"),
            r("entries");
        },
        6059: function (t, e, n) {
          var r = n(9275).f,
            o = Function.prototype,
            i = /^\s*function ([^ (]*)/,
            a = "name";
          a in o ||
            (n(7057) &&
              r(o, a, {
                configurable: !0,
                get: function () {
                  try {
                    return ("" + this).match(i)[1];
                  } catch (t) {
                    return "";
                  }
                },
              }));
        },
        8416: function (t, e, n) {
          "use strict";
          var r = n(9824),
            o = n(1616),
            i = "Map";
          t.exports = n(5795)(
            i,
            function (t) {
              return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
              };
            },
            {
              get: function (t) {
                var e = r.getEntry(o(this, i), t);
                return e && e.v;
              },
              set: function (t, e) {
                return r.def(o(this, i), 0 === t ? 0 : t, e);
              },
            },
            r,
            !0
          );
        },
        1246: function (t, e, n) {
          "use strict";
          var r = n(3816),
            o = n(9181),
            i = n(2032),
            a = n(266),
            c = n(1689),
            u = n(4253),
            s = n(616).f,
            l = n(8693).f,
            f = n(9275).f,
            p = n(9599).trim,
            d = "Number",
            h = r[d],
            v = h,
            y = h.prototype,
            m = i(n(2503)(y)) == d,
            b = "trim" in String.prototype,
            w = function (t) {
              var e = c(t, !1);
              if ("string" == typeof e && e.length > 2) {
                var n,
                  r,
                  o,
                  i = (e = b ? e.trim() : p(e, 3)).charCodeAt(0);
                if (43 === i || 45 === i) {
                  if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
                } else if (48 === i) {
                  switch (e.charCodeAt(1)) {
                    case 66:
                    case 98:
                      (r = 2), (o = 49);
                      break;
                    case 79:
                    case 111:
                      (r = 8), (o = 55);
                      break;
                    default:
                      return +e;
                  }
                  for (var a, u = e.slice(2), s = 0, l = u.length; s < l; s++)
                    if ((a = u.charCodeAt(s)) < 48 || a > o) return NaN;
                  return parseInt(u, r);
                }
              }
              return +e;
            };
          if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
            h = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this;
              return n instanceof h &&
                (m
                  ? u(function () {
                      y.valueOf.call(n);
                    })
                  : i(n) != d)
                ? a(new v(w(e)), n, h)
                : w(e);
            };
            for (
              var g,
                _ = n(7057)
                  ? s(v)
                  : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                      ","
                    ),
                S = 0;
              _.length > S;
              S++
            )
              o(v, (g = _[S])) && !o(h, g) && f(h, g, l(v, g));
            (h.prototype = y), (y.constructor = h), n(7234)(r, d, h);
          }
        },
        1520: function (t, e, n) {
          var r = n(508),
            o = n(468);
          n(3160)("getPrototypeOf", function () {
            return function (t) {
              return o(r(t));
            };
          });
        },
        6253: function (t, e, n) {
          "use strict";
          var r = n(1488),
            o = {};
          (o[n(6314)("toStringTag")] = "z"),
            o + "" != "[object z]" &&
              n(7234)(
                Object.prototype,
                "toString",
                function () {
                  return "[object " + r(this) + "]";
                },
                !0
              );
        },
        851: function (t, e, n) {
          "use strict";
          var r,
            o,
            i,
            a,
            c = n(4461),
            u = n(3816),
            s = n(741),
            l = n(1488),
            f = n(2985),
            p = n(5286),
            d = n(4963),
            h = n(3328),
            v = n(3531),
            y = n(8364),
            m = n(4193).set,
            b = n(4351)(),
            w = n(3499),
            g = n(188),
            _ = n(575),
            S = n(94),
            E = "Promise",
            x = u.TypeError,
            O = u.process,
            P = O && O.versions,
            k = (P && P.v8) || "",
            j = u[E],
            R = "process" == l(O),
            M = function () {},
            T = (o = w.f),
            F = !!(function () {
              try {
                var t = j.resolve(1),
                  e = ((t.constructor = {})[n(6314)("species")] = function (t) {
                    t(M, M);
                  });
                return (
                  (R || "function" == typeof PromiseRejectionEvent) &&
                  t.then(M) instanceof e &&
                  0 !== k.indexOf("6.6") &&
                  -1 === _.indexOf("Chrome/66")
                );
              } catch (t) {}
            })(),
            I = function (t) {
              var e;
              return !(!p(t) || "function" != typeof (e = t.then)) && e;
            },
            A = function (t, e) {
              if (!t._n) {
                t._n = !0;
                var n = t._c;
                b(function () {
                  for (
                    var r = t._v,
                      o = 1 == t._s,
                      i = 0,
                      a = function (e) {
                        var n,
                          i,
                          a,
                          c = o ? e.ok : e.fail,
                          u = e.resolve,
                          s = e.reject,
                          l = e.domain;
                        try {
                          c
                            ? (o || (2 == t._h && L(t), (t._h = 1)),
                              !0 === c
                                ? (n = r)
                                : (l && l.enter(),
                                  (n = c(r)),
                                  l && (l.exit(), (a = !0))),
                              n === e.promise
                                ? s(x("Promise-chain cycle"))
                                : (i = I(n))
                                ? i.call(n, u, s)
                                : u(n))
                            : s(r);
                        } catch (t) {
                          l && !a && l.exit(), s(t);
                        }
                      };
                    n.length > i;

                  )
                    a(n[i++]);
                  (t._c = []), (t._n = !1), e && !t._h && C(t);
                });
              }
            },
            C = function (t) {
              m.call(u, function () {
                var e,
                  n,
                  r,
                  o = t._v,
                  i = N(t);
                if (
                  (i &&
                    ((e = g(function () {
                      R
                        ? O.emit("unhandledRejection", o, t)
                        : (n = u.onunhandledrejection)
                        ? n({ promise: t, reason: o })
                        : (r = u.console) &&
                          r.error &&
                          r.error("Unhandled promise rejection", o);
                    })),
                    (t._h = R || N(t) ? 2 : 1)),
                  (t._a = void 0),
                  i && e.e)
                )
                  throw e.v;
              });
            },
            N = function (t) {
              return 1 !== t._h && 0 === (t._a || t._c).length;
            },
            L = function (t) {
              m.call(u, function () {
                var e;
                R
                  ? O.emit("rejectionHandled", t)
                  : (e = u.onrejectionhandled) &&
                    e({ promise: t, reason: t._v });
              });
            },
            H = function (t) {
              var e = this;
              e._d ||
                ((e._d = !0),
                ((e = e._w || e)._v = t),
                (e._s = 2),
                e._a || (e._a = e._c.slice()),
                A(e, !0));
            },
            B = function (t) {
              var e,
                n = this;
              if (!n._d) {
                (n._d = !0), (n = n._w || n);
                try {
                  if (n === t) throw x("Promise can't be resolved itself");
                  (e = I(t))
                    ? b(function () {
                        var r = { _w: n, _d: !1 };
                        try {
                          e.call(t, s(B, r, 1), s(H, r, 1));
                        } catch (t) {
                          H.call(r, t);
                        }
                      })
                    : ((n._v = t), (n._s = 1), A(n, !1));
                } catch (t) {
                  H.call({ _w: n, _d: !1 }, t);
                }
              }
            };
          F ||
            ((j = function (t) {
              h(this, j, E, "_h"), d(t), r.call(this);
              try {
                t(s(B, this, 1), s(H, this, 1));
              } catch (t) {
                H.call(this, t);
              }
            }),
            ((r = function (t) {
              (this._c = []),
                (this._a = void 0),
                (this._s = 0),
                (this._d = !1),
                (this._v = void 0),
                (this._h = 0),
                (this._n = !1);
            }).prototype = n(4408)(j.prototype, {
              then: function (t, e) {
                var n = T(y(this, j));
                return (
                  (n.ok = "function" != typeof t || t),
                  (n.fail = "function" == typeof e && e),
                  (n.domain = R ? O.domain : void 0),
                  this._c.push(n),
                  this._a && this._a.push(n),
                  this._s && A(this, !1),
                  n.promise
                );
              },
              catch: function (t) {
                return this.then(void 0, t);
              },
            })),
            (i = function () {
              var t = new r();
              (this.promise = t),
                (this.resolve = s(B, t, 1)),
                (this.reject = s(H, t, 1));
            }),
            (w.f = T =
              function (t) {
                return t === j || t === a ? new i(t) : o(t);
              })),
            f(f.G + f.W + f.F * !F, { Promise: j }),
            n(2943)(j, E),
            n(2974)(E),
            (a = n(5645)[E]),
            f(f.S + f.F * !F, E, {
              reject: function (t) {
                var e = T(this);
                return (0, e.reject)(t), e.promise;
              },
            }),
            f(f.S + f.F * (c || !F), E, {
              resolve: function (t) {
                return S(c && this === a ? j : this, t);
              },
            }),
            f(
              f.S +
                f.F *
                  !(
                    F &&
                    n(7462)(function (t) {
                      j.all(t).catch(M);
                    })
                  ),
              E,
              {
                all: function (t) {
                  var e = this,
                    n = T(e),
                    r = n.resolve,
                    o = n.reject,
                    i = g(function () {
                      var n = [],
                        i = 0,
                        a = 1;
                      v(t, !1, function (t) {
                        var c = i++,
                          u = !1;
                        n.push(void 0),
                          a++,
                          e.resolve(t).then(function (t) {
                            u || ((u = !0), (n[c] = t), --a || r(n));
                          }, o);
                      }),
                        --a || r(n);
                    });
                  return i.e && o(i.v), n.promise;
                },
                race: function (t) {
                  var e = this,
                    n = T(e),
                    r = n.reject,
                    o = g(function () {
                      v(t, !1, function (t) {
                        e.resolve(t).then(n.resolve, r);
                      });
                    });
                  return o.e && r(o.v), n.promise;
                },
              }
            );
        },
        2139: function (t, e, n) {
          var r = n(2985),
            o = n(2503),
            i = n(4963),
            a = n(7007),
            c = n(5286),
            u = n(4253),
            s = n(4398),
            l = (n(3816).Reflect || {}).construct,
            f = u(function () {
              function t() {}
              return !(l(function () {}, [], t) instanceof t);
            }),
            p = !u(function () {
              l(function () {});
            });
          r(r.S + r.F * (f || p), "Reflect", {
            construct: function (t, e) {
              i(t), a(e);
              var n = arguments.length < 3 ? t : i(arguments[2]);
              if (p && !f) return l(t, e, n);
              if (t == n) {
                switch (e.length) {
                  case 0:
                    return new t();
                  case 1:
                    return new t(e[0]);
                  case 2:
                    return new t(e[0], e[1]);
                  case 3:
                    return new t(e[0], e[1], e[2]);
                  case 4:
                    return new t(e[0], e[1], e[2], e[3]);
                }
                var r = [null];
                return r.push.apply(r, e), new (s.apply(t, r))();
              }
              var u = n.prototype,
                d = o(c(u) ? u : Object.prototype),
                h = Function.apply.call(t, d, e);
              return c(h) ? h : d;
            },
          });
        },
        8269: function (t, e, n) {
          "use strict";
          var r = n(1165);
          n(2985)(
            { target: "RegExp", proto: !0, forced: r !== /./.exec },
            { exec: r }
          );
        },
        6774: function (t, e, n) {
          n(7057) &&
            "g" != /./g.flags &&
            n(9275).f(RegExp.prototype, "flags", {
              configurable: !0,
              get: n(3218),
            });
        },
        1466: function (t, e, n) {
          "use strict";
          var r = n(7007),
            o = n(875),
            i = n(6793),
            a = n(7787);
          n(8082)("match", 1, function (t, e, n, c) {
            return [
              function (n) {
                var r = t(this),
                  o = null == n ? void 0 : n[e];
                return void 0 !== o
                  ? o.call(n, r)
                  : new RegExp(n)[e](String(r));
              },
              function (t) {
                var e = c(n, t, this);
                if (e.done) return e.value;
                var u = r(t),
                  s = String(this);
                if (!u.global) return a(u, s);
                var l = u.unicode;
                u.lastIndex = 0;
                for (var f, p = [], d = 0; null !== (f = a(u, s)); ) {
                  var h = String(f[0]);
                  (p[d] = h),
                    "" === h && (u.lastIndex = i(s, o(u.lastIndex), l)),
                    d++;
                }
                return 0 === d ? null : p;
              },
            ];
          });
        },
        1876: function (t, e, n) {
          "use strict";
          var r = n(5364),
            o = n(7007),
            i = n(8364),
            a = n(6793),
            c = n(875),
            u = n(7787),
            s = n(1165),
            l = n(4253),
            f = Math.min,
            p = [].push,
            d = "split",
            h = "length",
            v = "lastIndex",
            y = 4294967295,
            m = !l(function () {
              RegExp(y, "y");
            });
          n(8082)("split", 2, function (t, e, n, l) {
            var b;
            return (
              (b =
                "c" == "abbc"[d](/(b)*/)[1] ||
                4 != "test"[d](/(?:)/, -1)[h] ||
                2 != "ab"[d](/(?:ab)*/)[h] ||
                4 != "."[d](/(.?)(.?)/)[h] ||
                "."[d](/()()/)[h] > 1 ||
                ""[d](/.?/)[h]
                  ? function (t, e) {
                      var o = String(this);
                      if (void 0 === t && 0 === e) return [];
                      if (!r(t)) return n.call(o, t, e);
                      for (
                        var i,
                          a,
                          c,
                          u = [],
                          l =
                            (t.ignoreCase ? "i" : "") +
                            (t.multiline ? "m" : "") +
                            (t.unicode ? "u" : "") +
                            (t.sticky ? "y" : ""),
                          f = 0,
                          d = void 0 === e ? y : e >>> 0,
                          m = new RegExp(t.source, l + "g");
                        (i = s.call(m, o)) &&
                        !(
                          (a = m[v]) > f &&
                          (u.push(o.slice(f, i.index)),
                          i[h] > 1 && i.index < o[h] && p.apply(u, i.slice(1)),
                          (c = i[0][h]),
                          (f = a),
                          u[h] >= d)
                        );

                      )
                        m[v] === i.index && m[v]++;
                      return (
                        f === o[h]
                          ? (!c && m.test("")) || u.push("")
                          : u.push(o.slice(f)),
                        u[h] > d ? u.slice(0, d) : u
                      );
                    }
                  : "0"[d](void 0, 0)[h]
                  ? function (t, e) {
                      return void 0 === t && 0 === e ? [] : n.call(this, t, e);
                    }
                  : n),
              [
                function (n, r) {
                  var o = t(this),
                    i = null == n ? void 0 : n[e];
                  return void 0 !== i
                    ? i.call(n, o, r)
                    : b.call(String(o), n, r);
                },
                function (t, e) {
                  var r = l(b, t, this, e, b !== n);
                  if (r.done) return r.value;
                  var s = o(t),
                    p = String(this),
                    d = i(s, RegExp),
                    h = s.unicode,
                    v =
                      (s.ignoreCase ? "i" : "") +
                      (s.multiline ? "m" : "") +
                      (s.unicode ? "u" : "") +
                      (m ? "y" : "g"),
                    w = new d(m ? s : "^(?:" + s.source + ")", v),
                    g = void 0 === e ? y : e >>> 0;
                  if (0 === g) return [];
                  if (0 === p.length) return null === u(w, p) ? [p] : [];
                  for (var _ = 0, S = 0, E = []; S < p.length; ) {
                    w.lastIndex = m ? S : 0;
                    var x,
                      O = u(w, m ? p : p.slice(S));
                    if (
                      null === O ||
                      (x = f(c(w.lastIndex + (m ? 0 : S)), p.length)) === _
                    )
                      S = a(p, S, h);
                    else {
                      if ((E.push(p.slice(_, S)), E.length === g)) return E;
                      for (var P = 1; P <= O.length - 1; P++)
                        if ((E.push(O[P]), E.length === g)) return E;
                      S = _ = x;
                    }
                  }
                  return E.push(p.slice(_)), E;
                },
              ]
            );
          });
        },
        6108: function (t, e, n) {
          "use strict";
          n(6774);
          var r = n(7007),
            o = n(3218),
            i = n(7057),
            a = "toString",
            c = /./[a],
            u = function (t) {
              n(7234)(RegExp.prototype, a, t, !0);
            };
          n(4253)(function () {
            return "/a/b" != c.call({ source: "a", flags: "b" });
          })
            ? u(function () {
                var t = r(this);
                return "/".concat(
                  t.source,
                  "/",
                  "flags" in t
                    ? t.flags
                    : !i && t instanceof RegExp
                    ? o.call(t)
                    : void 0
                );
              })
            : c.name != a &&
              u(function () {
                return c.call(this);
              });
        },
        2850: function (t, e, n) {
          "use strict";
          var r = n(2985),
            o = n(2094),
            i = "includes";
          r(r.P + r.F * n(8852)(i), "String", {
            includes: function (t) {
              return !!~o(this, t, i).indexOf(
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
          });
        },
        9115: function (t, e, n) {
          "use strict";
          var r = n(4496)(!0);
          n(2923)(
            String,
            "String",
            function (t) {
              (this._t = String(t)), (this._i = 0);
            },
            function () {
              var t,
                e = this._t,
                n = this._i;
              return n >= e.length
                ? { value: void 0, done: !0 }
                : ((t = r(e, n)),
                  (this._i += t.length),
                  { value: t, done: !1 });
            }
          );
        },
        5767: function (t, e, n) {
          "use strict";
          var r = n(3816),
            o = n(9181),
            i = n(7057),
            a = n(2985),
            c = n(7234),
            u = n(4728).KEY,
            s = n(4253),
            l = n(3825),
            f = n(2943),
            p = n(3953),
            d = n(6314),
            h = n(8787),
            v = n(6074),
            y = n(5541),
            m = n(4302),
            b = n(7007),
            w = n(5286),
            g = n(508),
            _ = n(2110),
            S = n(1689),
            E = n(681),
            x = n(2503),
            O = n(9327),
            P = n(8693),
            k = n(4548),
            j = n(9275),
            R = n(7184),
            M = P.f,
            T = j.f,
            F = O.f,
            I = r.Symbol,
            A = r.JSON,
            C = A && A.stringify,
            N = "prototype",
            L = d("_hidden"),
            H = d("toPrimitive"),
            B = {}.propertyIsEnumerable,
            D = l("symbol-registry"),
            z = l("symbols"),
            U = l("op-symbols"),
            G = Object[N],
            V = "function" == typeof I && !!k.f,
            W = r.QObject,
            q = !W || !W[N] || !W[N].findChild,
            K =
              i &&
              s(function () {
                return (
                  7 !=
                  x(
                    T({}, "a", {
                      get: function () {
                        return T(this, "a", { value: 7 }).a;
                      },
                    })
                  ).a
                );
              })
                ? function (t, e, n) {
                    var r = M(G, e);
                    r && delete G[e], T(t, e, n), r && t !== G && T(G, e, r);
                  }
                : T,
            Y = function (t) {
              var e = (z[t] = x(I[N]));
              return (e._k = t), e;
            },
            J =
              V && "symbol" == typeof I.iterator
                ? function (t) {
                    return "symbol" == typeof t;
                  }
                : function (t) {
                    return t instanceof I;
                  },
            $ = function (t, e, n) {
              return (
                t === G && $(U, e, n),
                b(t),
                (e = S(e, !0)),
                b(n),
                o(z, e)
                  ? (n.enumerable
                      ? (o(t, L) && t[L][e] && (t[L][e] = !1),
                        (n = x(n, { enumerable: E(0, !1) })))
                      : (o(t, L) || T(t, L, E(1, {})), (t[L][e] = !0)),
                    K(t, e, n))
                  : T(t, e, n)
              );
            },
            X = function (t, e) {
              b(t);
              for (var n, r = y((e = _(e))), o = 0, i = r.length; i > o; )
                $(t, (n = r[o++]), e[n]);
              return t;
            },
            Q = function (t) {
              var e = B.call(this, (t = S(t, !0)));
              return (
                !(this === G && o(z, t) && !o(U, t)) &&
                (!(
                  e ||
                  !o(this, t) ||
                  !o(z, t) ||
                  (o(this, L) && this[L][t])
                ) ||
                  e)
              );
            },
            Z = function (t, e) {
              if (
                ((t = _(t)), (e = S(e, !0)), t !== G || !o(z, e) || o(U, e))
              ) {
                var n = M(t, e);
                return (
                  !n || !o(z, e) || (o(t, L) && t[L][e]) || (n.enumerable = !0),
                  n
                );
              }
            },
            tt = function (t) {
              for (var e, n = F(_(t)), r = [], i = 0; n.length > i; )
                o(z, (e = n[i++])) || e == L || e == u || r.push(e);
              return r;
            },
            et = function (t) {
              for (
                var e, n = t === G, r = F(n ? U : _(t)), i = [], a = 0;
                r.length > a;

              )
                !o(z, (e = r[a++])) || (n && !o(G, e)) || i.push(z[e]);
              return i;
            };
          V ||
            ((I = function () {
              if (this instanceof I)
                throw TypeError("Symbol is not a constructor!");
              var t = p(arguments.length > 0 ? arguments[0] : void 0),
                e = function (n) {
                  this === G && e.call(U, n),
                    o(this, L) && o(this[L], t) && (this[L][t] = !1),
                    K(this, t, E(1, n));
                };
              return i && q && K(G, t, { configurable: !0, set: e }), Y(t);
            }),
            c(I[N], "toString", function () {
              return this._k;
            }),
            (P.f = Z),
            (j.f = $),
            (n(616).f = O.f = tt),
            (n(4682).f = Q),
            (k.f = et),
            i && !n(4461) && c(G, "propertyIsEnumerable", Q, !0),
            (h.f = function (t) {
              return Y(d(t));
            })),
            a(a.G + a.W + a.F * !V, { Symbol: I });
          for (
            var nt =
                "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                  ","
                ),
              rt = 0;
            nt.length > rt;

          )
            d(nt[rt++]);
          for (var ot = R(d.store), it = 0; ot.length > it; ) v(ot[it++]);
          a(a.S + a.F * !V, "Symbol", {
            for: function (t) {
              return o(D, (t += "")) ? D[t] : (D[t] = I(t));
            },
            keyFor: function (t) {
              if (!J(t)) throw TypeError(t + " is not a symbol!");
              for (var e in D) if (D[e] === t) return e;
            },
            useSetter: function () {
              q = !0;
            },
            useSimple: function () {
              q = !1;
            },
          }),
            a(a.S + a.F * !V, "Object", {
              create: function (t, e) {
                return void 0 === e ? x(t) : X(x(t), e);
              },
              defineProperty: $,
              defineProperties: X,
              getOwnPropertyDescriptor: Z,
              getOwnPropertyNames: tt,
              getOwnPropertySymbols: et,
            });
          var at = s(function () {
            k.f(1);
          });
          a(a.S + a.F * at, "Object", {
            getOwnPropertySymbols: function (t) {
              return k.f(g(t));
            },
          }),
            A &&
              a(
                a.S +
                  a.F *
                    (!V ||
                      s(function () {
                        var t = I();
                        return (
                          "[null]" != C([t]) ||
                          "{}" != C({ a: t }) ||
                          "{}" != C(Object(t))
                        );
                      })),
                "JSON",
                {
                  stringify: function (t) {
                    for (var e, n, r = [t], o = 1; arguments.length > o; )
                      r.push(arguments[o++]);
                    if (((n = e = r[1]), (w(e) || void 0 !== t) && !J(t)))
                      return (
                        m(e) ||
                          (e = function (t, e) {
                            if (
                              ("function" == typeof n &&
                                (e = n.call(this, t, e)),
                              !J(e))
                            )
                              return e;
                          }),
                        (r[1] = e),
                        C.apply(A, r)
                      );
                  },
                }
              ),
            I[N][H] || n(7728)(I[N], H, I[N].valueOf),
            f(I, "Symbol"),
            f(Math, "Math", !0),
            f(r.JSON, "JSON", !0);
        },
        2773: function (t, e, n) {
          "use strict";
          var r = n(2985),
            o = n(9315)(!0);
          r(r.P, "Array", {
            includes: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }),
            n(7722)("includes");
        },
        1181: function (t, e, n) {
          for (
            var r = n(6997),
              o = n(7184),
              i = n(7234),
              a = n(3816),
              c = n(7728),
              u = n(2803),
              s = n(6314),
              l = s("iterator"),
              f = s("toStringTag"),
              p = u.Array,
              d = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1,
              },
              h = o(d),
              v = 0;
            v < h.length;
            v++
          ) {
            var y,
              m = h[v],
              b = d[m],
              w = a[m],
              g = w && w.prototype;
            if (g && (g[l] || c(g, l, p), g[f] || c(g, f, m), (u[m] = p), b))
              for (y in r) g[y] || i(g, y, r[y], !0);
          }
        },
      },
      e = {};
    function n(r) {
      var o = e[r];
      if (void 0 !== o) return o.exports;
      var i = (e[r] = { exports: {} });
      return t[r](i, i.exports, n), i.exports;
    }
    (n.d = function (t, e) {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var r = {};
    return (
      (function () {
        "use strict";
        n.r(r),
          n.d(r, {
            EmbeddedCheckout: function () {
              return U;
            },
            EmbeddedSubscription: function () {
              return ut;
            },
            Event: function () {
              return t;
            },
            ModalCheckout: function () {
              return rt;
            },
            ModalSubscription: function () {
              return mt;
            },
            WindowCheckout: function () {
              return q;
            },
            WindowSubscription: function () {
              return pt;
            },
            isApplePayAvailable: function () {
              return C;
            },
            isGooglePayAvailable: function () {
              return I;
            },
          });
        var t = {};
        n.r(t),
          n.d(t, {
            Accept: function () {
              return e;
            },
            Cancel: function () {
              return i;
            },
            Check_Result: function () {
              return u;
            },
            Close: function () {
              return a;
            },
            Error: function () {
              return o;
            },
            Open: function () {
              return c;
            },
            get_event: function () {
              return s;
            },
          }),
          n(6059),
          n(1520),
          n(2139),
          n(5767),
          n(1246),
          n(9115),
          n(6253),
          n(6997),
          n(1181),
          n(8416);
        var e = 0,
          o = 1,
          i = 2,
          a = 3,
          c = 4,
          u = 5,
          s = function (t) {
            switch (t) {
              case 0:
                return "Reepay.Event.Accept";
              case 1:
                return "Reepay.Event.Error";
              case 2:
                return "Reepay.Event.Cancel";
              case 3:
                return "Reepay.Event.Close";
              default:
                return "Undefined: ".concat(t);
            }
          };
        function l(t) {
          return (
            (l =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            l(t)
          );
        }
        function f(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== l(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== l(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === l(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        function p(t, e, n) {
          return (
            e && f(t.prototype, e),
            n && f(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function d(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && w(t, e);
        }
        function v(t) {
          var e = b();
          return function () {
            var n,
              r = g(t);
            if (e) {
              var o = g(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === l(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function y(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (y = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return m(t, arguments, g(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                w(n, t)
              );
            }),
            y(t)
          );
        }
        function m(t, e, n) {
          return (
            (m = b()
              ? Reflect.construct.bind()
              : function (t, e, n) {
                  var r = [null];
                  r.push.apply(r, e);
                  var o = new (Function.bind.apply(t, r))();
                  return n && w(o, n.prototype), o;
                }),
            m.apply(null, arguments)
          );
        }
        function b() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function w(t, e) {
          return (
            (w = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            w(t, e)
          );
        }
        function g(t) {
          return (
            (g = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            g(t)
          );
        }
        n(6108);
        var _ = (function (t) {
            h(n, t);
            var e = v(n);
            function n(t) {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_MissingHtmlElementError] No html element with the id ".concat(
                    t,
                    " was found."
                  )
                )
              );
            }
            return p(n);
          })(y(Error)),
          S = (function (t) {
            h(n, t);
            var e = v(n);
            function n(t) {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_HtmlElementNotEmptyError] The html element with id ".concat(
                    t,
                    " is not empty. Please provide an empty html element id to serve as container for the checkout window."
                  )
                )
              );
            }
            return p(n);
          })(y(Error)),
          E = (function (t) {
            h(n, t);
            var e = v(n);
            function n() {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_SessionTokenNotProvidedError] No session token provided."
                )
              );
            }
            return p(n);
          })(y(Error)),
          x = (function (t) {
            h(n, t);
            var e = v(n);
            function n() {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_InvalidSessionToken] Token is invalid"
                )
              );
            }
            return p(n);
          })(y(Error)),
          O = (function (t) {
            h(n, t);
            var e = v(n);
            function n() {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_CheckoutNotInitialized] Trying to access iframe before it was initialized."
                )
              );
            }
            return p(n);
          })(y(Error)),
          P = (function (t) {
            h(n, t);
            var e = v(n);
            function n() {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_CallShowWhenAlreadyInitialized] Attempted to call show after iframe already loaded with session id."
                )
              );
            }
            return p(n);
          })(y(Error)),
          k = (function (t) {
            h(n, t);
            var e = v(n);
            function n(t, r) {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_UnknownEventError] Trying to handle unknown event: "
                    .concat(
                      t,
                      ". Make sure you pass an Reepay.Event.{EventName} as the first parameter to function ."
                    )
                    .concat(r, ".")
                )
              );
            }
            return p(n);
          })(y(Error)),
          j = (function (t) {
            h(n, t);
            var e = v(n);
            function n(t) {
              return (
                d(this, n),
                e.call(
                  this,
                  "[Reepay][RP_HandlerNotAFunction] Trying to add a handler that isn't a function for event ".concat(
                    t
                  )
                )
              );
            }
            return p(n);
          })(y(Error));
        function R(t) {
          return (
            (R =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            R(t)
          );
        }
        function M(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== R(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== R(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === R(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        var T = (function () {
            function t() {
              var n = this;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                (this.location = "https://checkout.reepay.com"),
                (this.default_html_id = "rp_container"),
                (this.eventHandlers = new Map()),
                this.eventHandlers.set(e, null),
                this.eventHandlers.set(o, null),
                this.eventHandlers.set(i, null),
                this.eventHandlers.set(a, null),
                (this.handle_message = function (t) {
                  if (
                    t &&
                    t.data &&
                    t.data.origin == "rp-".concat(n.iframe_token)
                  ) {
                    if (t.data.event == c) return;
                    if (!n.eventHandlers.has(t.data.event))
                      throw new k(t.data.event);
                    var e = n.eventHandlers.get(t.data.event);
                    if (e) e(t.data.data);
                    else {
                      if (t.data.event === o) return;
                      console.warn(
                        "[Reepay][RP_EventNotHandledError] An unhandled event has occured: ".concat(
                          s(t.data.event),
                          "."
                        )
                      );
                    }
                    t.data.event == a && n.destroy();
                  }
                }),
                this
              );
            }
            var n, r;
            return (
              (n = t),
              (r = [
                {
                  key: "addEventHandler",
                  value: function (t, e) {
                    if (!this.eventHandlers.has(t))
                      throw new k(t, "addEventHandler");
                    if ("function" != typeof e) throw new j(s(t));
                    return this.eventHandlers.set(t, e), this;
                  },
                },
                {
                  key: "removeEventHandler",
                  value: function (t) {
                    if (!this.eventHandlers.has(t))
                      throw new k(t, "removeEventHandler");
                    return this.eventHandlers.set(t, null), this;
                  },
                },
              ]) && M(n.prototype, r),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              t
            );
          })(),
          F =
            (n(1466),
            n(851),
            n(2850),
            n(2773),
            n(2310),
            n(1876),
            function (t) {
              if (t && !t.match(/(^(cs|pa)_[a-f0-9]{32}$)|(^mock_.*)/))
                throw new x();
            }),
          I = function (t) {
            return new Promise(function (e, n) {
              N() && !A()
                ? (function (t, e, n) {
                    var r = document.createElement("iframe"),
                      o = (function (t) {
                        switch (t) {
                          case "dev":
                            return "http://localhost:4200";
                          case "live-dev":
                            return "https://dev-checkout.reepay.com";
                          case "staging":
                            return "https://staging-checkout.reepay.com";
                          default:
                            return "https://checkout.reepay.com";
                        }
                      })(n);
                    n || (n = "prod"),
                      (r.src =
                        o + "/assets/static/gp-check/gp-check.html?env=" + n),
                      (r.id = "gp-check-frame"),
                      r.setAttribute("allow", "payment"),
                      (r.style.display = "none"),
                      (r.style.visibility = "hidden"),
                      (r.height = "0"),
                      (r.width = "0"),
                      document.body.appendChild(r),
                      window.addEventListener(
                        "message",
                        function (n) {
                          var r = n.data;
                          r &&
                            "rp_sdk" === r.for &&
                            (r.data &&
                            "rp_static" === r.data.origin &&
                            r.data.event === u
                              ? t(r.data.data.result)
                              : e());
                        },
                        !1
                      );
                  })(e, n, t)
                : e(!1);
            });
          };
        function A() {
          var t =
            navigator.userAgent.includes("Mac") && "ontouchend" in document;
          return (
            [
              "iPad Simulator",
              "iPhone Simulator",
              "iPod Simulator",
              "iPad",
              "iPhone",
              "iPod",
            ].includes(navigator.platform) || t
          );
        }
        var C = function () {
          if (window.ApplePaySession) {
            var t = window.ApplePaySession;
            return (
              !(!t.canMakePayments() || !t.supportsVersion(1)) &&
              !(
                navigator &&
                navigator.languages &&
                navigator.languages.find(function (t) {
                  return "zh-CN" === t;
                }) &&
                (!N() ||
                  !(function () {
                    var t = navigator.userAgent,
                      e = null;
                    if (
                      (t.includes("iPhone")
                        ? (e = "iPhone")
                        : usa.includes("iPad") && (e = "iPad"),
                      e)
                    ) {
                      var n = t.indexOf(e),
                        r = t.indexOf(")") - n,
                        o = t
                          .substr(n, r)
                          .match(/([0-9]+([0-9]|_)*[0-9]+)/g)[0]
                          .split("_");
                      return !(o[0] < "11" || ("11" === o[0] && o[1] < "2"));
                    }
                    return !1;
                  })())
              )
            );
          }
          return !1;
        };
        function N() {
          var t,
            e = !1;
          return (
            (t = navigator.userAgent || navigator.vendor || window.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              t
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                t.substr(0, 4)
              )) &&
              (e = !0),
            e
          );
        }
        function L(t) {
          return window.document.documentMode
            ? t +
                "/unsupported.html?return=" +
                window.encodeURIComponent(window.location.href)
            : t + "/#/preload";
        }
        function H(t) {
          return (
            (H =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            H(t)
          );
        }
        function B(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== H(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== H(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === H(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        function D(t, e) {
          return (
            (D = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            D(t, e)
          );
        }
        function z(t) {
          return (
            (z = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            z(t)
          );
        }
        var U = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && D(t, e);
          })(c, t);
          var e,
            n,
            r,
            o,
            i =
              ((r = c),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = z(r);
                if (o) {
                  var n = z(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === H(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function c(t, e) {
            var n;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
              (n = i.call(this)),
              t && F(t),
              (n.iframe_id = "rp_checkout_frame_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (n.iframe_name = "rp_checkout_frame_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (n.iframe_token = Math.floor(Math.random() * Math.floor(1e3))),
              (n.is_loaded = !1),
              (n.location += "/#/checkout/preload");
            var r,
              o,
              a = n.location;
            return (
              (function () {
                var t = n.default_html_id;
                if (
                  (e && e.hasOwnProperty("html_element")
                    ? (t = e.html_element)
                    : (console.warn(
                        "[Reepay][Embedded] No html element id provided as option. Default ".concat(
                          n.default_html_id,
                          " used instead."
                        )
                      ),
                      (t = n.default_html_id)),
                  !(r = document.getElementById(t)))
                )
                  throw new _(t);
                if (r.hasChildNodes()) throw new S(t);
                e &&
                  e.hasOwnProperty("showReceipt") &&
                  (n.showReceipt = e.showReceipt);
              })(),
              ((o = document.createElement("iframe")).frameBorder = 0),
              (o.width = "100%"),
              (o.height = "100%"),
              (o.id = n.iframe_id),
              (o.name = n.iframe_name),
              o.setAttribute("src", a),
              o.setAttribute("allow", "payment"),
              t
                ? ((o.onload = function () {
                    window.frames[n.iframe_name].postMessage(
                      {
                        for: "rp_app",
                        data: {
                          id: t,
                          content_type: "rp_checkout",
                          type: "embedded",
                          token: n.iframe_token,
                          options: e,
                        },
                      },
                      a
                    ),
                      (o.onload = null);
                  }),
                  window.addEventListener("message", n.handle_message, !1),
                  (n.is_loaded = !0))
                : (o.style.display = "hidden"),
              r.appendChild(o),
              n
            );
          }
          return (
            (e = c),
            (n = [
              {
                key: "show",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  if (this.is_loaded) throw new P();
                  if (!t) throw new E();
                  F(t);
                  var n = document.getElementById(this.iframe_id);
                  if (!n) throw new O();
                  (n.style.display = "block"),
                    null !== this.showReceipt &&
                      void 0 !== this.showReceipt &&
                      (e && !e.hasOwnProperty("showReceipt")
                        ? (e.showReceipt = this.showReceipt)
                        : e || (e = { showReceipt: this.showReceipt })),
                    window.frames[this.iframe_name].postMessage(
                      {
                        for: "rp_app",
                        data: {
                          id: t,
                          content_type: "rp_checkout",
                          type: "embedded",
                          token: this.iframe_token,
                          options: e,
                        },
                      },
                      this.location
                    ),
                    window.addEventListener("message", this.handle_message, !1),
                    (this.is_loaded = !0),
                    (this.showReceipt = null);
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t = document.getElementById(this.iframe_id);
                  if (!t) throw new O();
                  if (
                    (t.parentElement.removeChild(t),
                    window.removeEventListener("message", this.handle_message),
                    this.eventHandlers.has(a))
                  ) {
                    var e = this.eventHandlers.get(a);
                    e && "function" == typeof e && e();
                  }
                },
              },
            ]),
            n && B(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            c
          );
        })(T);
        function G(t) {
          return (
            (G =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            G(t)
          );
        }
        function V(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== G(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== G(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === G(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        function W(t, e, n) {
          return (
            e && V(t.prototype, e),
            n && V(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        var q = W(function t(e) {
          if (
            ((function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            !e)
          )
            throw new E();
          F(e),
            (this.location = "https://checkout.reepay.com"),
            (window.location.href = ""
              .concat(this.location, "#/checkout/")
              .concat(e));
        });
        function K(t) {
          return (
            (K =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            K(t)
          );
        }
        function Y(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== K(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== K(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === K(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        var J = (function () {
          function t(e, n) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.allowBehaviour = A() && n),
              (this.isCheckout = e);
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "enforceScrollStop",
                value: function () {
                  if (this.allowBehaviour) {
                    var t = document.getElementsByTagName("html")[0];
                    (this.originalHtmlOverflow = t.style.overflow),
                      (t.style.overflow = "hidden"),
                      this.isCheckout &&
                        ((this.originalHtmlPosition = t.style.position),
                        (t.style.position = "fixed"));
                  }
                },
              },
              {
                key: "reEnableScroll",
                value: function () {
                  if (this.allowBehaviour) {
                    var t = document.getElementsByTagName("html")[0];
                    (t.style.overflow = this.originalHtmlOverflow),
                      this.isCheckout &&
                        (t.style.position = this.originalHtmlPosition);
                  }
                },
              },
            ]) && Y(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function $(t) {
          return (
            ($ =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            $(t)
          );
        }
        function X(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== $(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== $(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === $(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        var Q = (function () {
          function t(e) {
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (this.supportedFlags = [
                "experimentalFeatures",
                "iosForceFullScreenModal",
                "isInitialAutoRedirectStopped",
                "forceVippsDesktopFlow",
                "forceSwishDesktopFlow",
              ]),
              (this.customFeatures = {}),
              e)
            ) {
              var n = this;
              this.supportedFlags.forEach(function (t) {
                e.hasOwnProperty(t) && (n.customFeatures[t] = e[t]);
              });
            }
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "allowIosForceFullScreenModal",
                value: function () {
                  return (
                    this.customFeatures.experimentalFeatures ||
                    this.customFeatures.iosForceFullScreenModal
                  );
                },
              },
            ]) && X(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function Z(t) {
          return (
            (Z =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Z(t)
          );
        }
        function tt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== Z(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== Z(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === Z(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        function et(t, e) {
          return (
            (et = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            et(t, e)
          );
        }
        function nt(t) {
          return (
            (nt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            nt(t)
          );
        }
        var rt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && et(t, e);
          })(l, t);
          var e,
            n,
            r,
            i,
            u =
              ((r = l),
              (i = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = nt(r);
                if (i) {
                  var n = nt(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === Z(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function l(t) {
            var e,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
              (e = u.call(this)),
              t &&
                (F(t),
                (e.customFeatures = new Q(n)),
                (e.modalUtil = new J(
                  !0,
                  e.customFeatures.allowIosForceFullScreenModal()
                ))),
              (e.iframe_id = "rp_checkout_frame_modal_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (e.iframe_name = "rp_checkout_frame_modal_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (e.html_element_id = "rp_checkout_overlay_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (e.iframe_token = Math.floor(Math.random() * Math.floor(1e4))),
              (e.is_loaded = !1),
              e.body_style;
            var r = L(e.location);
            n &&
              n.hasOwnProperty("showReceipt") &&
              (e.showReceipt = n.showReceipt);
            var i = document.createElement("div");
            (i.id = e.html_element_id),
              (i.style.width = "100%"),
              (i.style.height = "100%"),
              (i.style.position = "absolute"),
              (i.style.margin = "0px"),
              (i.style.zIndex = "9900"),
              (i.style.top = "0"),
              (i.style.left = "0"),
              t || r.includes("unsupported.html") || (i.style.display = "none"),
              (e.class_name = ""),
              document.body.appendChild(i),
              (e.handle_message = function (t) {
                if (
                  t &&
                  t.data &&
                  t.data.origin == "rp-".concat(e.iframe_token)
                )
                  if (t.data.event == c) {
                    var n = document.getElementById(e.iframe_id);
                    (n.style.display = "block"),
                      (n.parentElement.style.display = "block");
                    var r = document.body;
                    (e.body_style = r.style.cssText),
                      (r.style.overflowY = "hidden"),
                      (r.style.maxHeight = window.innerHeight + "px"),
                      window.scrollTo(0, 0),
                      e.class_name &&
                        document.documentElement.classList.remove(e.class_name),
                      (e.class_name = "rp_flow_" + new Date().getTime()),
                      document.documentElement.classList.add(e.class_name);
                  } else {
                    if (!e.eventHandlers.has(t.data.event))
                      throw new k(t.data.event);
                    var i = e.eventHandlers.get(t.data.event);
                    if (i) i(t.data.data);
                    else {
                      if (t.data.event === o) return;
                      console.warn(
                        "[Reepay][RP_EventNotHandledError] An unhandled event has occured: ".concat(
                          s(t.data.event),
                          "."
                        )
                      );
                    }
                    t.data.event == a && e.close(t.data.data);
                  }
              });
            var f = document.createElement("iframe");
            return (
              (f.frameBorder = 0),
              (f.width = "100%"),
              (f.height = "100%"),
              (f.id = e.iframe_id),
              (f.name = e.iframe_name),
              f.setAttribute("src", r),
              f.setAttribute("allow", "payment"),
              t &&
                ((f.onload = function () {
                  var o = window.frames[e.iframe_name];
                  e.modalUtil.enforceScrollStop(),
                    o.postMessage(
                      {
                        for: "rp_app",
                        data: {
                          content_type: "rp_checkout",
                          id: t,
                          type: "modal",
                          token: e.iframe_token,
                          options: n,
                        },
                      },
                      r
                    ),
                    (f.onload = null);
                }),
                window.addEventListener("message", e.handle_message, !1),
                (e.is_loaded = !0)),
              i.appendChild(f),
              e
            );
          }
          return (
            (e = l),
            (n = [
              {
                key: "show",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  if (this.is_loaded) throw new P();
                  if (!t) throw new E();
                  if (
                    (F(t),
                    (this.customFeatures = new Q(e)),
                    (this.modalUtil = new J(
                      !0,
                      this.customFeatures.allowIosForceFullScreenModal()
                    )),
                    !document.getElementById(this.iframe_id))
                  )
                    throw new O();
                  null !== this.showReceipt &&
                    void 0 !== this.showReceipt &&
                    (e && !e.hasOwnProperty("showReceipt")
                      ? (e.showReceipt = this.showReceipt)
                      : e || (e = { showReceipt: this.showReceipt }));
                  var n = window.frames[this.iframe_name];
                  this.modalUtil.enforceScrollStop(),
                    n.postMessage(
                      {
                        for: "rp_app",
                        data: {
                          content_type: "rp_checkout",
                          id: t,
                          type: "modal",
                          token: this.iframe_token,
                          options: e,
                        },
                      },
                      this.location
                    ),
                    window.addEventListener("message", this.handle_message, !1),
                    (this.is_loaded = !0),
                    (this.showReceipt = null);
                },
              },
              {
                key: "close",
                value: function (t) {
                  this.modalUtil.reEnableScroll();
                  var e = document.getElementById(this.iframe_id);
                  if (!e) throw new O();
                  document.body.style.cssText = this.body_style;
                  var n = document.getElementById(this.html_element_id);
                  (e.style.display = "none"),
                    (n.style.display = "none"),
                    (e.parentElement.style.display = "none"),
                    (this.is_loaded = !1),
                    window.removeEventListener("message", this.handle_message);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.modalUtil.reEnableScroll();
                  var t = document.getElementById(this.iframe_id);
                  if (!t) throw new O();
                  t.parentElement.removeChild(t);
                  var e = document.body;
                  if (
                    ((e.style.cssText = this.body_style),
                    e.removeChild(
                      document.getElementById(this.html_element_id)
                    ),
                    window.removeEventListener("message", this.handle_message),
                    this.eventHandlers.has(a))
                  ) {
                    var n = this.eventHandlers.get(a);
                    n && "function" == typeof n && n();
                  }
                },
              },
            ]),
            n && tt(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            l
          );
        })(T);
        function ot(t) {
          return (
            (ot =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ot(t)
          );
        }
        function it(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== ot(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== ot(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === ot(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        function at(t, e) {
          return (
            (at = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            at(t, e)
          );
        }
        function ct(t) {
          return (
            (ct = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ct(t)
          );
        }
        var ut = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && at(t, e);
          })(c, t);
          var e,
            n,
            r,
            o,
            i =
              ((r = c),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = ct(r);
                if (o) {
                  var n = ct(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === ot(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function c(t, e) {
            var n;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
              (n = i.call(this)),
              t && F(t),
              (n.iframe_id = "rp_subscription_frame_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (n.iframe_name = "rp_subscription_frame_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (n.iframe_token = Math.floor(Math.random() * Math.floor(1e3))),
              (n.is_loaded = !1),
              (n.location += "/#/subscription/preload");
            var r,
              o,
              a = n.location;
            return (
              (function () {
                var t = n.default_html_id;
                if (
                  (e && e.hasOwnProperty("html_element")
                    ? (t = e.html_element)
                    : (console.warn(
                        "[ReepaySubscription][Embedded] No html element id provided as option. Default ".concat(
                          n.default_html_id,
                          " used instead."
                        )
                      ),
                      (t = n.default_html_id)),
                  !(r = document.getElementById(t)))
                )
                  throw new _(t);
                if (r.hasChildNodes()) throw new S(t);
                e &&
                  e.hasOwnProperty("showReceipt") &&
                  (n.showReceipt = e.showReceipt);
              })(),
              ((o = document.createElement("iframe")).frameBorder = 0),
              (o.width = "100%"),
              (o.height = "100%"),
              (o.id = n.iframe_id),
              (o.name = n.iframe_name),
              o.setAttribute("src", a),
              o.setAttribute("allow", "payment"),
              t
                ? ((o.onload = function () {
                    window.frames[n.iframe_name].postMessage(
                      {
                        for: "rp_app",
                        data: {
                          id: t,
                          content_type: "rp_subscription",
                          type: "embedded",
                          token: n.iframe_token,
                          options: e,
                        },
                      },
                      a
                    ),
                      (o.onload = null);
                  }),
                  window.addEventListener("message", n.handle_message, !1),
                  (n.is_loaded = !0))
                : (o.style.display = "hidden"),
              r.appendChild(o),
              n
            );
          }
          return (
            (e = c),
            (n = [
              {
                key: "show",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  if (this.is_loaded) throw new P();
                  if (!t) throw new E();
                  F(t);
                  var n = document.getElementById(this.iframe_id);
                  if (!n) throw new O();
                  (n.style.display = "block"),
                    null !== this.showReceipt &&
                      void 0 !== this.showReceipt &&
                      (e && !e.hasOwnProperty("showReceipt")
                        ? (e.showReceipt = this.showReceipt)
                        : e || (e = { showReceipt: this.showReceipt })),
                    window.frames[this.iframe_name].postMessage(
                      {
                        for: "rp_app",
                        data: {
                          id: t,
                          content_type: "rp_subscription",
                          type: "embedded",
                          token: this.iframe_token,
                          options: e,
                        },
                      },
                      this.location
                    ),
                    window.addEventListener("message", this.handle_message, !1),
                    (this.is_loaded = !0),
                    (this.showReceipt = null);
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t = document.getElementById(this.iframe_id);
                  if (!t) throw new O();
                  if (
                    (t.parentElement.removeChild(t),
                    window.removeEventListener("message", this.handle_message),
                    this.eventHandlers.has(a))
                  ) {
                    var e = this.eventHandlers.get(a);
                    e && "function" == typeof e && e();
                  }
                },
              },
            ]),
            n && it(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            c
          );
        })(T);
        function st(t) {
          return (
            (st =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            st(t)
          );
        }
        function lt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== st(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== st(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === st(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        function ft(t, e, n) {
          return (
            e && lt(t.prototype, e),
            n && lt(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        var pt = ft(function t(e, n) {
          if (
            ((function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            !e)
          )
            throw new E();
          F(e),
            (this.location = "https://checkout.reepay.com"),
            (window.location.href =
              "create" == n
                ? "".concat(this.location, "#/subscription/create")
                : "".concat(this.location, "#/subscription/").concat(e));
        });
        function dt(t) {
          return (
            (dt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            dt(t)
          );
        }
        function ht(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== dt(t) || null === t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== dt(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(r.key)),
                "symbol" === dt(o) ? o : String(o)),
                r
              );
          }
          var o;
        }
        function vt(t, e) {
          return (
            (vt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            vt(t, e)
          );
        }
        function yt(t) {
          return (
            (yt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            yt(t)
          );
        }
        var mt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && vt(t, e);
          })(l, t);
          var e,
            n,
            r,
            i,
            u =
              ((r = l),
              (i = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = yt(r);
                if (i) {
                  var n = yt(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === dt(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function l(t) {
            var e,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
              (e = u.call(this)),
              t &&
                (F(t),
                (e.customFeatures = new Q(n)),
                (e.modalUtil = new J(
                  !1,
                  e.customFeatures.allowIosForceFullScreenModal()
                ))),
              (e.iframe_id = "rp_subs_frame_modal_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (e.iframe_name = "rp_sub_frame_modal_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (e.html_element_id = "rp_checkout_overlay_".concat(
                Math.floor(Math.random() * Math.floor(41))
              )),
              (e.iframe_token = Math.floor(Math.random() * Math.floor(1e4))),
              (e.is_loaded = !1),
              e.body_style;
            var r = L(e.location);
            n &&
              n.hasOwnProperty("showReceipt") &&
              (e.showReceipt = n.showReceipt);
            var i = document.createElement("div");
            (i.id = e.html_element_id),
              (i.style.width = "100%"),
              (i.style.height = "100%"),
              (i.style.position = "absolute"),
              (i.style.margin = "0px"),
              (i.style.zIndex = "9900"),
              (i.style.top = "0"),
              (i.style.left = "0"),
              t || r.includes("unsupported.html") || (i.style.display = "none"),
              (e.class_name = ""),
              document.body.appendChild(i),
              (e.handle_message = function (t) {
                if (
                  t &&
                  t.data &&
                  t.data.origin == "rp-".concat(e.iframe_token)
                )
                  if (t.data.event == c) {
                    var n = document.getElementById(e.iframe_id);
                    (n.style.display = "block"),
                      (n.parentElement.style.display = "block");
                    var r = document.body;
                    (e.body_style = r.style.cssText),
                      (r.style.overflowY = "hidden"),
                      (r.style.maxHeight = window.innerWidth + "px"),
                      window.scrollTo(0, 0),
                      e.class_name &&
                        document.documentElement.classList.remove(e.class_name),
                      (e.class_name = "rp_flow_" + new Date().getTime()),
                      document.documentElement.classList.add(e.class_name);
                  } else {
                    if (!e.eventHandlers.has(t.data.event))
                      throw new k(t.data.event);
                    var i = e.eventHandlers.get(t.data.event);
                    if (i) i(t.data.data);
                    else {
                      if (t.data.event === o) return;
                      console.warn(
                        "[Reepay][RP_EventNotHandledError] An unhandled event has occured: ".concat(
                          s(t.data.event),
                          "."
                        )
                      );
                    }
                    t.data.event == a && e.close(t.data.data);
                  }
              });
            var f = document.createElement("iframe");
            return (
              (f.frameBorder = 0),
              (f.width = "100%"),
              (f.height = "100%"),
              (f.id = e.iframe_id),
              (f.name = e.iframe_name),
              f.setAttribute("src", r),
              f.setAttribute("allow", "payment"),
              t &&
                ((f.onload = function () {
                  e.modalUtil.enforceScrollStop(),
                    window.frames[e.iframe_name].postMessage(
                      {
                        for: "rp_app",
                        data: {
                          content_type: "rp_subscription",
                          id: t,
                          type: "modal",
                          token: e.iframe_token,
                          options: n,
                        },
                      },
                      r
                    ),
                    (f.onload = null);
                }),
                window.addEventListener("message", e.handle_message, !1),
                (e.is_loaded = !0)),
              i.appendChild(f),
              e
            );
          }
          return (
            (e = l),
            (n = [
              {
                key: "show",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  if (this.is_loaded) throw new P();
                  if (!t) throw new E();
                  if (
                    (F(t),
                    (this.customFeatures = new Q(e)),
                    (this.modalUtil = new J(
                      !1,
                      this.customFeatures.allowIosForceFullScreenModal()
                    )),
                    !document.getElementById(this.iframe_id))
                  )
                    throw new O();
                  null !== this.showReceipt &&
                    void 0 !== this.showReceipt &&
                    (e && !e.hasOwnProperty("showReceipt")
                      ? (e.showReceipt = this.showReceipt)
                      : e || (e = { showReceipt: this.showReceipt }));
                  var n = window.frames[this.iframe_name];
                  this.modalUtil.enforceScrollStop(),
                    n.postMessage(
                      {
                        for: "rp_app",
                        data: {
                          content_type: "rp_subscription",
                          id: t,
                          type: "modal",
                          token: this.iframe_token,
                          options: e,
                        },
                      },
                      this.location
                    ),
                    window.addEventListener("message", this.handle_message, !1),
                    (this.is_loaded = !0),
                    (this.showReceipt = null);
                },
              },
              {
                key: "close",
                value: function (t) {
                  this.modalUtil.reEnableScroll();
                  var e = document.getElementById(this.iframe_id);
                  if (!e) throw new O();
                  document.body.style.cssText = this.body_style;
                  var n = document.getElementById(this.html_element_id);
                  (e.style.display = "none"),
                    (n.style.display = "none"),
                    (e.parentElement.style.display = "none"),
                    (this.is_loaded = !1),
                    window.removeEventListener("message", this.handle_message);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.modalUtil.reEnableScroll();
                  var t = document.getElementById(this.iframe_id);
                  if (!t) throw new O();
                  t.parentElement.removeChild(t);
                  var e = document.body;
                  if (
                    ((e.style.cssText = this.body_style),
                    e.removeChild(
                      document.getElementById(this.html_element_id)
                    ),
                    window.removeEventListener("message", this.handle_message),
                    this.eventHandlers.has(a))
                  ) {
                    var n = this.eventHandlers.get(a);
                    n && "function" == typeof n && n();
                  }
                },
              },
            ]),
            n && ht(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            l
          );
        })(T);
      })(),
      r
    );
  })();
});
