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
          3387: function (t) {
            t.exports = function (t) {
              if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
              return t;
            };
          },
          8184: function (t, e, n) {
            var r = n(7574)("unscopables"),
              o = Array.prototype;
            null == o[r] && n(3341)(o, r, {}),
              (t.exports = function (t) {
                o[r][t] = !0;
              });
          },
          8828: function (t, e, n) {
            "use strict";
            var r = n(1212)(!0);
            t.exports = function (t, e, n) {
              return e + (n ? r(t, e).length : 1);
            };
          },
          6440: function (t) {
            t.exports = function (t, e, n, r) {
              if (!(t instanceof e) || (void 0 !== r && r in t))
                throw TypeError(n + ": incorrect invocation!");
              return t;
            };
          },
          4228: function (t, e, n) {
            var r = n(3305);
            t.exports = function (t) {
              if (!r(t)) throw TypeError(t + " is not an object!");
              return t;
            };
          },
          1464: function (t, e, n) {
            var r = n(7221),
              o = n(1485),
              i = n(157);
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
          6179: function (t, e, n) {
            var r = n(5052),
              o = n(1249),
              i = n(8270),
              a = n(1485),
              c = n(5572);
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
          3606: function (t, e, n) {
            var r = n(3305),
              o = n(7981),
              i = n(7574)("species");
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
          5572: function (t, e, n) {
            var r = n(3606);
            t.exports = function (t, e) {
              return new (r(t))(e);
            };
          },
          5538: function (t, e, n) {
            "use strict";
            var r = n(3387),
              o = n(3305),
              i = n(4877),
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
          4848: function (t, e, n) {
            var r = n(5089),
              o = n(7574)("toStringTag"),
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
          5089: function (t) {
            var e = {}.toString;
            t.exports = function (t) {
              return e.call(t).slice(8, -1);
            };
          },
          6197: function (t, e, n) {
            "use strict";
            var r = n(7967).f,
              o = n(4719),
              i = n(6065),
              a = n(5052),
              c = n(6440),
              u = n(8790),
              s = n(8175),
              l = n(4970),
              f = n(5762),
              p = n(1763),
              d = n(2988).fastKey,
              h = n(2888),
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
          8933: function (t, e, n) {
            "use strict";
            var r = n(7526),
              o = n(2127),
              i = n(8859),
              a = n(6065),
              c = n(2988),
              u = n(8790),
              s = n(6440),
              l = n(3305),
              f = n(9448),
              p = n(8931),
              d = n(3844),
              h = n(8880);
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
          6094: function (t) {
            var e = (t.exports = { version: "2.6.12" });
            "number" == typeof __e && (__e = e);
          },
          5052: function (t, e, n) {
            var r = n(3387);
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
          3344: function (t) {
            t.exports = function (t) {
              if (null == t) throw TypeError("Can't call method on  " + t);
              return t;
            };
          },
          1763: function (t, e, n) {
            t.exports = !n(9448)(function () {
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
          6034: function (t, e, n) {
            var r = n(3305),
              o = n(7526).document,
              i = r(o) && r(o.createElement);
            t.exports = function (t) {
              return i ? o.createElement(t) : {};
            };
          },
          6140: function (t) {
            t.exports =
              "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                ","
              );
          },
          5969: function (t, e, n) {
            var r = n(1311),
              o = n(1060),
              i = n(8449);
            t.exports = function (t) {
              var e = r(t),
                n = o.f;
              if (n)
                for (var a, c = n(t), u = i.f, s = 0; c.length > s; )
                  u.call(t, (a = c[s++])) && e.push(a);
              return e;
            };
          },
          2127: function (t, e, n) {
            var r = n(7526),
              o = n(6094),
              i = n(3341),
              a = n(8859),
              c = n(5052),
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
          5203: function (t, e, n) {
            var r = n(7574)("match");
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
          9448: function (t) {
            t.exports = function (t) {
              try {
                return !!t();
              } catch (t) {
                return !0;
              }
            };
          },
          9228: function (t, e, n) {
            "use strict";
            n(4116);
            var r = n(8859),
              o = n(3341),
              i = n(9448),
              a = n(3344),
              c = n(7574),
              u = n(9600),
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
          1158: function (t, e, n) {
            "use strict";
            var r = n(4228);
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
          8790: function (t, e, n) {
            var r = n(5052),
              o = n(7368),
              i = n(1508),
              a = n(4228),
              c = n(1485),
              u = n(762),
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
          9461: function (t, e, n) {
            t.exports = n(4556)("native-function-to-string", Function.toString);
          },
          7526: function (t) {
            var e = (t.exports =
              "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")());
            "number" == typeof __g && (__g = e);
          },
          7917: function (t) {
            var e = {}.hasOwnProperty;
            t.exports = function (t, n) {
              return e.call(t, n);
            };
          },
          3341: function (t, e, n) {
            var r = n(7967),
              o = n(1996);
            t.exports = n(1763)
              ? function (t, e, n) {
                  return r.f(t, e, o(1, n));
                }
              : function (t, e, n) {
                  return (t[e] = n), t;
                };
          },
          1308: function (t, e, n) {
            var r = n(7526).document;
            t.exports = r && r.documentElement;
          },
          2956: function (t, e, n) {
            t.exports =
              !n(1763) &&
              !n(9448)(function () {
                return (
                  7 !=
                  Object.defineProperty(n(6034)("div"), "a", {
                    get: function () {
                      return 7;
                    },
                  }).a
                );
              });
          },
          8880: function (t, e, n) {
            var r = n(3305),
              o = n(5170).set;
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
          4877: function (t) {
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
          1249: function (t, e, n) {
            var r = n(5089);
            t.exports = Object("z").propertyIsEnumerable(0)
              ? Object
              : function (t) {
                  return "String" == r(t) ? t.split("") : Object(t);
                };
          },
          1508: function (t, e, n) {
            var r = n(906),
              o = n(7574)("iterator"),
              i = Array.prototype;
            t.exports = function (t) {
              return void 0 !== t && (r.Array === t || i[o] === t);
            };
          },
          7981: function (t, e, n) {
            var r = n(5089);
            t.exports =
              Array.isArray ||
              function (t) {
                return "Array" == r(t);
              };
          },
          3305: function (t) {
            t.exports = function (t) {
              return "object" == typeof t ? null !== t : "function" == typeof t;
            };
          },
          5411: function (t, e, n) {
            var r = n(3305),
              o = n(5089),
              i = n(7574)("match");
            t.exports = function (t) {
              var e;
              return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
            };
          },
          7368: function (t, e, n) {
            var r = n(4228);
            t.exports = function (t, e, n, o) {
              try {
                return o ? e(r(n)[0], n[1]) : e(n);
              } catch (e) {
                var i = t.return;
                throw (void 0 !== i && r(i.call(t)), e);
              }
            };
          },
          6032: function (t, e, n) {
            "use strict";
            var r = n(4719),
              o = n(1996),
              i = n(3844),
              a = {};
            n(3341)(a, n(7574)("iterator"), function () {
              return this;
            }),
              (t.exports = function (t, e, n) {
                (t.prototype = r(a, { next: o(1, n) })), i(t, e + " Iterator");
              });
          },
          8175: function (t, e, n) {
            "use strict";
            var r = n(2750),
              o = n(2127),
              i = n(8859),
              a = n(3341),
              c = n(906),
              u = n(6032),
              s = n(3844),
              l = n(627),
              f = n(7574)("iterator"),
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
          8931: function (t, e, n) {
            var r = n(7574)("iterator"),
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
          4970: function (t) {
            t.exports = function (t, e) {
              return { value: e, done: !!t };
            };
          },
          906: function (t) {
            t.exports = {};
          },
          2750: function (t) {
            t.exports = !1;
          },
          2988: function (t, e, n) {
            var r = n(4415)("meta"),
              o = n(3305),
              i = n(7917),
              a = n(7967).f,
              c = 0,
              u =
                Object.isExtensible ||
                function () {
                  return !0;
                },
              s = !n(9448)(function () {
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
          1384: function (t, e, n) {
            var r = n(7526),
              o = n(2780).set,
              i = r.MutationObserver || r.WebKitMutationObserver,
              a = r.process,
              c = r.Promise,
              u = "process" == n(5089)(a);
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
          4258: function (t, e, n) {
            "use strict";
            var r = n(3387);
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
          4719: function (t, e, n) {
            var r = n(4228),
              o = n(1626),
              i = n(6140),
              a = n(766)("IE_PROTO"),
              c = function () {},
              u = "prototype",
              s = function () {
                var t,
                  e = n(6034)("iframe"),
                  r = i.length;
                for (
                  e.style.display = "none",
                    n(1308).appendChild(e),
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
          7967: function (t, e, n) {
            var r = n(4228),
              o = n(2956),
              i = n(3048),
              a = Object.defineProperty;
            e.f = n(1763)
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
          1626: function (t, e, n) {
            var r = n(7967),
              o = n(4228),
              i = n(1311);
            t.exports = n(1763)
              ? Object.defineProperties
              : function (t, e) {
                  o(t);
                  for (var n, a = i(e), c = a.length, u = 0; c > u; )
                    r.f(t, (n = a[u++]), e[n]);
                  return t;
                };
          },
          8641: function (t, e, n) {
            var r = n(8449),
              o = n(1996),
              i = n(7221),
              a = n(3048),
              c = n(7917),
              u = n(2956),
              s = Object.getOwnPropertyDescriptor;
            e.f = n(1763)
              ? s
              : function (t, e) {
                  if (((t = i(t)), (e = a(e, !0)), u))
                    try {
                      return s(t, e);
                    } catch (t) {}
                  if (c(t, e)) return o(!r.f.call(t, e), t[e]);
                };
          },
          4765: function (t, e, n) {
            var r = n(7221),
              o = n(9415).f,
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
          9415: function (t, e, n) {
            var r = n(4561),
              o = n(6140).concat("length", "prototype");
            e.f =
              Object.getOwnPropertyNames ||
              function (t) {
                return r(t, o);
              };
          },
          1060: function (t, e) {
            e.f = Object.getOwnPropertySymbols;
          },
          627: function (t, e, n) {
            var r = n(7917),
              o = n(8270),
              i = n(766)("IE_PROTO"),
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
          4561: function (t, e, n) {
            var r = n(7917),
              o = n(7221),
              i = n(1464)(!1),
              a = n(766)("IE_PROTO");
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
          1311: function (t, e, n) {
            var r = n(4561),
              o = n(6140);
            t.exports =
              Object.keys ||
              function (t) {
                return r(t, o);
              };
          },
          8449: function (t, e) {
            e.f = {}.propertyIsEnumerable;
          },
          923: function (t, e, n) {
            var r = n(2127),
              o = n(6094),
              i = n(9448);
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
          128: function (t) {
            t.exports = function (t) {
              try {
                return { e: !1, v: t() };
              } catch (t) {
                return { e: !0, v: t };
              }
            };
          },
          5957: function (t, e, n) {
            var r = n(4228),
              o = n(3305),
              i = n(4258);
            t.exports = function (t, e) {
              if ((r(t), o(e) && e.constructor === t)) return e;
              var n = i.f(t);
              return (0, n.resolve)(e), n.promise;
            };
          },
          1996: function (t) {
            t.exports = function (t, e) {
              return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e,
              };
            };
          },
          6065: function (t, e, n) {
            var r = n(8859);
            t.exports = function (t, e, n) {
              for (var o in e) r(t, o, e[o], n);
              return t;
            };
          },
          8859: function (t, e, n) {
            var r = n(7526),
              o = n(3341),
              i = n(7917),
              a = n(4415)("src"),
              c = n(9461),
              u = "toString",
              s = ("" + c).split(u);
            (n(6094).inspectSource = function (t) {
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
          2535: function (t, e, n) {
            "use strict";
            var r = n(4848),
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
          9600: function (t, e, n) {
            "use strict";
            var r,
              o,
              i = n(1158),
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
          5170: function (t, e, n) {
            var r = n(3305),
              o = n(4228),
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
                        (r = n(5052)(
                          Function.call,
                          n(8641).f(Object.prototype, "__proto__").set,
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
          5762: function (t, e, n) {
            "use strict";
            var r = n(7526),
              o = n(7967),
              i = n(1763),
              a = n(7574)("species");
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
          3844: function (t, e, n) {
            var r = n(7967).f,
              o = n(7917),
              i = n(7574)("toStringTag");
            t.exports = function (t, e, n) {
              t &&
                !o((t = n ? t : t.prototype), i) &&
                r(t, i, { configurable: !0, value: e });
            };
          },
          766: function (t, e, n) {
            var r = n(4556)("keys"),
              o = n(4415);
            t.exports = function (t) {
              return r[t] || (r[t] = o(t));
            };
          },
          4556: function (t, e, n) {
            var r = n(6094),
              o = n(7526),
              i = "__core-js_shared__",
              a = o[i] || (o[i] = {});
            (t.exports = function (t, e) {
              return a[t] || (a[t] = void 0 !== e ? e : {});
            })("versions", []).push({
              version: r.version,
              mode: n(2750) ? "pure" : "global",
              copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
            });
          },
          9190: function (t, e, n) {
            var r = n(4228),
              o = n(3387),
              i = n(7574)("species");
            t.exports = function (t, e) {
              var n,
                a = r(t).constructor;
              return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
            };
          },
          1212: function (t, e, n) {
            var r = n(7087),
              o = n(3344);
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
          8942: function (t, e, n) {
            var r = n(5411),
              o = n(3344);
            t.exports = function (t, e, n) {
              if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
              return String(o(t));
            };
          },
          629: function (t, e, n) {
            var r = n(2127),
              o = n(3344),
              i = n(9448),
              a = n(8451),
              c = "[" + a + "]",
              u = RegExp("^" + c + c + "*"),
              s = RegExp(c + c + "*$"),
              l = function (t, e, n) {
                var o = {},
                  c = i(function () {
                    return !!a[t]() || "​" != "​"[t]();
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
          8451: function (t) {
            t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
          },
          2780: function (t, e, n) {
            var r,
              o,
              i,
              a = n(5052),
              c = n(4877),
              u = n(1308),
              s = n(6034),
              l = n(7526),
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
              "process" == n(5089)(f)
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
          157: function (t, e, n) {
            var r = n(7087),
              o = Math.max,
              i = Math.min;
            t.exports = function (t, e) {
              return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
            };
          },
          7087: function (t) {
            var e = Math.ceil,
              n = Math.floor;
            t.exports = function (t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? n : e)(t);
            };
          },
          7221: function (t, e, n) {
            var r = n(1249),
              o = n(3344);
            t.exports = function (t) {
              return r(o(t));
            };
          },
          1485: function (t, e, n) {
            var r = n(7087),
              o = Math.min;
            t.exports = function (t) {
              return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
          },
          8270: function (t, e, n) {
            var r = n(3344);
            t.exports = function (t) {
              return Object(r(t));
            };
          },
          3048: function (t, e, n) {
            var r = n(3305);
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
          4415: function (t) {
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
          4514: function (t, e, n) {
            var r = n(7526).navigator;
            t.exports = (r && r.userAgent) || "";
          },
          2888: function (t, e, n) {
            var r = n(3305);
            t.exports = function (t, e) {
              if (!r(t) || t._t !== e)
                throw TypeError("Incompatible receiver, " + e + " required!");
              return t;
            };
          },
          5392: function (t, e, n) {
            var r = n(7526),
              o = n(6094),
              i = n(2750),
              a = n(7960),
              c = n(7967).f;
            t.exports = function (t) {
              var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
              "_" == t.charAt(0) || t in e || c(e, t, { value: a.f(t) });
            };
          },
          7960: function (t, e, n) {
            e.f = n(7574);
          },
          7574: function (t, e, n) {
            var r = n(4556)("wks"),
              o = n(4415),
              i = n(7526).Symbol,
              a = "function" == typeof i;
            (t.exports = function (t) {
              return r[t] || (r[t] = (a && i[t]) || (a ? i : o)("Symbol." + t));
            }).store = r;
          },
          762: function (t, e, n) {
            var r = n(4848),
              o = n(7574)("iterator"),
              i = n(906);
            t.exports = n(6094).getIteratorMethod = function (t) {
              if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
            };
          },
          5144: function (t, e, n) {
            "use strict";
            var r = n(2127),
              o = n(6179)(5),
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
              n(8184)(i);
          },
          5165: function (t, e, n) {
            "use strict";
            var r = n(8184),
              o = n(4970),
              i = n(906),
              a = n(7221);
            (t.exports = n(8175)(
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
          489: function (t, e, n) {
            var r = n(7967).f,
              o = Function.prototype,
              i = /^\s*function ([^ (]*)/,
              a = "name";
            a in o ||
              (n(1763) &&
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
          3386: function (t, e, n) {
            "use strict";
            var r = n(6197),
              o = n(2888),
              i = "Map";
            t.exports = n(8933)(
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
          4509: function (t, e, n) {
            "use strict";
            var r = n(7526),
              o = n(7917),
              i = n(5089),
              a = n(8880),
              c = n(3048),
              u = n(9448),
              s = n(9415).f,
              l = n(8641).f,
              f = n(7967).f,
              p = n(629).trim,
              d = "Number",
              h = r[d],
              v = h,
              y = h.prototype,
              m = i(n(4719)(y)) == d,
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
                  _ = n(1763)
                    ? s(v)
                    : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                        ","
                      ),
                  S = 0;
                _.length > S;
                S++
              )
                o(v, (g = _[S])) && !o(h, g) && f(h, g, l(v, g));
              (h.prototype = y), (y.constructor = h), n(8859)(r, d, h);
            }
          },
          3e3: function (t, e, n) {
            var r = n(8270),
              o = n(627);
            n(923)("getPrototypeOf", function () {
              return function (t) {
                return o(r(t));
              };
            });
          },
          7482: function (t, e, n) {
            "use strict";
            var r = n(4848),
              o = {};
            (o[n(7574)("toStringTag")] = "z"),
              o + "" != "[object z]" &&
                n(8859)(
                  Object.prototype,
                  "toString",
                  function () {
                    return "[object " + r(this) + "]";
                  },
                  !0
                );
          },
          6517: function (t, e, n) {
            "use strict";
            var r,
              o,
              i,
              a,
              c = n(2750),
              u = n(7526),
              s = n(5052),
              l = n(4848),
              f = n(2127),
              p = n(3305),
              d = n(3387),
              h = n(6440),
              v = n(8790),
              y = n(9190),
              m = n(2780).set,
              b = n(1384)(),
              w = n(4258),
              g = n(128),
              _ = n(4514),
              S = n(5957),
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
                    e = ((t.constructor = {})[n(7574)("species")] = function (t) {
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
              }).prototype = n(6065)(j.prototype, {
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
              n(3844)(j, E),
              n(5762)(E),
              (a = n(6094)[E]),
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
                      n(8931)(function (t) {
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
          2586: function (t, e, n) {
            var r = n(2127),
              o = n(4719),
              i = n(3387),
              a = n(4228),
              c = n(3305),
              u = n(9448),
              s = n(5538),
              l = (n(7526).Reflect || {}).construct,
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
          4116: function (t, e, n) {
            "use strict";
            var r = n(9600);
            n(2127)(
              { target: "RegExp", proto: !0, forced: r !== /./.exec },
              { exec: r }
            );
          },
          9638: function (t, e, n) {
            n(1763) &&
              "g" != /./g.flags &&
              n(7967).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(1158),
              });
          },
          4040: function (t, e, n) {
            "use strict";
            var r = n(4228),
              o = n(1485),
              i = n(8828),
              a = n(2535);
            n(9228)("match", 1, function (t, e, n, c) {
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
          341: function (t, e, n) {
            "use strict";
            var r = n(5411),
              o = n(4228),
              i = n(9190),
              a = n(8828),
              c = n(1485),
              u = n(2535),
              s = n(9600),
              l = n(9448),
              f = Math.min,
              p = [].push,
              d = "split",
              h = "length",
              v = "lastIndex",
              y = 4294967295,
              m = !l(function () {
                RegExp(y, "y");
              });
            n(9228)("split", 2, function (t, e, n, l) {
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
          8604: function (t, e, n) {
            "use strict";
            n(9638);
            var r = n(4228),
              o = n(1158),
              i = n(1763),
              a = "toString",
              c = /./[a],
              u = function (t) {
                n(8859)(RegExp.prototype, a, t, !0);
              };
            n(9448)(function () {
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
          8872: function (t, e, n) {
            "use strict";
            var r = n(2127),
              o = n(8942),
              i = "includes";
            r(r.P + r.F * n(5203)(i), "String", {
              includes: function (t) {
                return !!~o(this, t, i).indexOf(
                  t,
                  arguments.length > 1 ? arguments[1] : void 0
                );
              },
            });
          },
          2975: function (t, e, n) {
            "use strict";
            var r = n(1212)(!0);
            n(8175)(
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
          9650: function (t, e, n) {
            "use strict";
            var r = n(7526),
              o = n(7917),
              i = n(1763),
              a = n(2127),
              c = n(8859),
              u = n(2988).KEY,
              s = n(9448),
              l = n(4556),
              f = n(3844),
              p = n(4415),
              d = n(7574),
              h = n(7960),
              v = n(5392),
              y = n(5969),
              m = n(7981),
              b = n(4228),
              w = n(3305),
              g = n(8270),
              _ = n(7221),
              S = n(3048),
              E = n(1996),
              x = n(4719),
              O = n(4765),
              P = n(8641),
              k = n(1060),
              j = n(7967),
              R = n(1311),
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
              (n(9415).f = O.f = tt),
              (n(8449).f = Q),
              (k.f = et),
              i && !n(2750) && c(G, "propertyIsEnumerable", Q, !0),
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
              I[N][H] || n(3341)(I[N], H, I[N].valueOf),
              f(I, "Symbol"),
              f(Math, "Math", !0),
              f(r.JSON, "JSON", !0);
          },
          9087: function (t, e, n) {
            "use strict";
            var r = n(2127),
              o = n(1464)(!0);
            r(r.P, "Array", {
              includes: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            }),
              n(8184)("includes");
          },
          5890: function (t, e, n) {
            for (
              var r = n(5165),
                o = n(1311),
                i = n(8859),
                a = n(7526),
                c = n(3341),
                u = n(906),
                s = n(7574),
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
                return q;
              },
              EmbeddedSubscription: function () {
                return _t;
              },
              Event: function () {
                return t;
              },
              ModalCheckout: function () {
                return dt;
              },
              ModalSubscription: function () {
                return At;
              },
              WindowCheckout: function () {
                return X;
              },
              WindowSubscription: function () {
                return Pt;
              },
              isApplePayAvailable: function () {
                return N;
              },
              isGooglePayAvailable: function () {
                return A;
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
            n(489),
            n(3e3),
            n(2586),
            n(9650),
            n(4509),
            n(2975),
            n(7482),
            n(5165),
            n(5890),
            n(3386);
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
                Object.defineProperty(t, d(r.key), r);
            }
          }
          function p(t, e, n) {
            return (
              e && f(t.prototype, e),
              n && f(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          function d(t) {
            var e = (function (t, e) {
              if ("object" != l(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != l(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == l(e) ? e : e + "";
          }
          function h(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function v(t, e, n) {
            return (
              (e = g(e)),
              (function (t, e) {
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
              })(
                t,
                b()
                  ? Reflect.construct(e, n || [], g(t).constructor)
                  : e.apply(t, n)
              )
            );
          }
          function y(t, e) {
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
          function m(t) {
            var e = "function" == typeof Map ? new Map() : void 0;
            return (
              (m = function (t) {
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
                  return (function (t, e, n) {
                    if (b()) return Reflect.construct.apply(null, arguments);
                    var r = [null];
                    r.push.apply(r, e);
                    var o = new (t.bind.apply(t, r))();
                    return n && w(o, n.prototype), o;
                  })(t, arguments, g(this).constructor);
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
              m(t)
            );
          }
          function b() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (t) {}
            return (b = function () {
              return !!t;
            })();
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
          n(8604);
          var _ = (function (t) {
              function e(t) {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_MissingHtmlElementError] No html element with the id ".concat(
                      t,
                      " was found."
                    ),
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error)),
            S = (function (t) {
              function e(t) {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_HtmlElementNotEmptyError] The html element with id ".concat(
                      t,
                      " is not empty. Please provide an empty html element id to serve as container for the checkout window."
                    ),
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error)),
            E = (function (t) {
              function e() {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_SessionTokenNotProvidedError] No session token provided.",
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error)),
            x = (function (t) {
              function e() {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_InvalidSessionToken] Token is invalid",
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error)),
            O = (function (t) {
              function e() {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_CheckoutNotInitialized] Trying to access iframe before it was initialized.",
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error)),
            P = (function (t) {
              function e() {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_CallShowWhenAlreadyInitialized] Attempted to call show after iframe already loaded with session id.",
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error)),
            k = (function (t) {
              function e(t, n) {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_UnknownEventError] Trying to handle unknown event: "
                      .concat(
                        t,
                        ". Make sure you pass an Reepay.Event.{EventName} as the first parameter to function ."
                      )
                      .concat(n, "."),
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error)),
            j = (function (t) {
              function e(t) {
                return (
                  h(this, e),
                  v(this, e, [
                    "[Reepay][RP_HandlerNotAFunction] Trying to add a handler that isn't a function for event ".concat(
                      t
                    ),
                  ])
                );
              }
              return y(e, t), p(e);
            })(m(Error));
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
                Object.defineProperty(t, T(r.key), r);
            }
          }
          function T(t) {
            var e = (function (t, e) {
              if ("object" != R(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != R(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == R(e) ? e : e + "";
          }
          var F = (function () {
              return (
                (t = function t() {
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
                }),
                (n = [
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
                ]) && M(t.prototype, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
              var t, n;
            })(),
            I =
              (n(4040),
              n(6517),
              n(8872),
              n(9087),
              n(5144),
              n(341),
              function (t) {
                if (t && !t.match(/(^(cs|pa)_[a-f0-9]{32}$)|(^mock_.*)/))
                  throw new x();
              }),
            A = function (t) {
              return new Promise(function (e, n) {
                L() && !C()
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
                            var r,
                              o = n.data;
                            "rp_sdk" ===
                              (null == o || null === (r = o.data) || void 0 === r
                                ? void 0
                                : r.for) &&
                              (o.data &&
                              "rp_static" === o.data.origin &&
                              o.data.event === u
                                ? t(o.data.data.result)
                                : e());
                          },
                          !1
                        );
                    })(e, n, t)
                  : e(!1);
              });
            };
          function C() {
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
          var N = function () {
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
                  (!L() ||
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
          function L() {
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
          function H(t) {
            return window.document.documentMode
              ? t +
                  "/unsupported.html?return=" +
                  window.encodeURIComponent(window.location.href)
              : t + "/#/preload";
          }
          function B(t) {
            return (
              (B =
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
              B(t)
            );
          }
          function D(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, z(r.key), r);
            }
          }
          function z(t) {
            var e = (function (t, e) {
              if ("object" != B(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != B(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == B(e) ? e : e + "";
          }
          function U(t, e, n) {
            return (
              (e = V(e)),
              (function (t, e) {
                if (e && ("object" === B(e) || "function" == typeof e)) return e;
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
              })(
                t,
                G()
                  ? Reflect.construct(e, n || [], V(t).constructor)
                  : e.apply(t, n)
              )
            );
          }
          function G() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (t) {}
            return (G = function () {
              return !!t;
            })();
          }
          function V(t) {
            return (
              (V = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              V(t)
            );
          }
          function W(t, e) {
            return (
              (W = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              W(t, e)
            );
          }
          var q = (function (t) {
            function e(t, n) {
              var r;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (r = U(this, e)),
                t && I(t),
                (r.iframe_id = "rp_checkout_frame_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (r.iframe_name = "rp_checkout_frame_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (r.iframe_token = Math.floor(Math.random() * Math.floor(1e3))),
                (r.is_loaded = !1),
                (r.location += "/#/checkout/preload");
              var o,
                i,
                a = r.location;
              return (
                (function () {
                  var t = r.default_html_id;
                  if (
                    (n && n.hasOwnProperty("html_element")
                      ? (t = n.html_element)
                      : (console.warn(
                          "[Reepay][Embedded] No html element id provided as option. Default ".concat(
                            r.default_html_id,
                            " used instead."
                          )
                        ),
                        (t = r.default_html_id)),
                    !(o = document.getElementById(t)))
                  )
                    throw new _(t);
                  if (o.hasChildNodes()) throw new S(t);
                  n &&
                    n.hasOwnProperty("showReceipt") &&
                    (r.showReceipt = n.showReceipt);
                })(),
                ((i = document.createElement("iframe")).frameBorder = 0),
                (i.width = "100%"),
                (i.height = "100%"),
                (i.id = r.iframe_id),
                (i.name = r.iframe_name),
                i.setAttribute("src", a),
                i.setAttribute("allow", "payment"),
                i.setAttribute("allow", "clipboard-write"),
                t
                  ? ((i.onload = function () {
                      window.frames[r.iframe_name].postMessage(
                        {
                          for: "rp_app",
                          data: {
                            id: t,
                            content_type: "rp_checkout",
                            type: "embedded",
                            token: r.iframe_token,
                            options: n,
                          },
                        },
                        a
                      ),
                        (i.onload = null);
                    }),
                    window.addEventListener("message", r.handle_message, !1),
                    (r.is_loaded = !0))
                  : (i.style.display = "hidden"),
                o.appendChild(i),
                r
              );
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && W(t, e);
              })(e, t),
              (n = e),
              (r = [
                {
                  key: "show",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    if (this.is_loaded) throw new P();
                    if (!t) throw new E();
                    I(t);
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
              r && D(n.prototype, r),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              n
            );
            var n, r;
          })(F);
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
                Object.defineProperty(t, $(r.key), r);
            }
          }
          function J(t, e, n) {
            return (
              e && Y(t.prototype, e),
              n && Y(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          function $(t) {
            var e = (function (t, e) {
              if ("object" != K(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != K(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == K(e) ? e : e + "";
          }
          var X = J(function t(e) {
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              !e)
            )
              throw new E();
            I(e),
              (this.location = "https://checkout.reepay.com"),
              (window.location.href = ""
                .concat(this.location, "#/checkout/")
                .concat(e));
          });
          function Q(t) {
            return (
              (Q =
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
              Q(t)
            );
          }
          function Z(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, tt(r.key), r);
            }
          }
          function tt(t) {
            var e = (function (t, e) {
              if ("object" != Q(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != Q(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == Q(e) ? e : e + "";
          }
          var et = (function () {
            return (
              (t = function t(e, n) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this.allowBehaviour = C() && n),
                  (this.isCheckout = e);
              }),
              (e = [
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
              ]) && Z(t.prototype, e),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
            var t, e;
          })();
          function nt(t) {
            return (
              (nt =
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
              nt(t)
            );
          }
          function rt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, ot(r.key), r);
            }
          }
          function ot(t) {
            var e = (function (t, e) {
              if ("object" != nt(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != nt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == nt(e) ? e : e + "";
          }
          var it = (function () {
            return (
              (t = function t(e) {
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
              }),
              (e = [
                {
                  key: "allowIosForceFullScreenModal",
                  value: function () {
                    return (
                      this.customFeatures.experimentalFeatures ||
                      this.customFeatures.iosForceFullScreenModal
                    );
                  },
                },
              ]) && rt(t.prototype, e),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
            var t, e;
          })();
          function at(t) {
            return (
              (at =
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
              at(t)
            );
          }
          function ct(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, ut(r.key), r);
            }
          }
          function ut(t) {
            var e = (function (t, e) {
              if ("object" != at(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != at(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == at(e) ? e : e + "";
          }
          function st(t, e, n) {
            return (
              (e = ft(e)),
              (function (t, e) {
                if (e && ("object" === at(e) || "function" == typeof e)) return e;
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
              })(
                t,
                lt()
                  ? Reflect.construct(e, n || [], ft(t).constructor)
                  : e.apply(t, n)
              )
            );
          }
          function lt() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (t) {}
            return (lt = function () {
              return !!t;
            })();
          }
          function ft(t) {
            return (
              (ft = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              ft(t)
            );
          }
          function pt(t, e) {
            return (
              (pt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              pt(t, e)
            );
          }
          var dt = (function (t) {
            function e(t) {
              var n,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (n = st(this, e)),
                t &&
                  (I(t),
                  (n.customFeatures = new it(r)),
                  (n.modalUtil = new et(
                    !0,
                    n.customFeatures.allowIosForceFullScreenModal()
                  ))),
                (n.iframe_id = "rp_checkout_frame_modal_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (n.iframe_name = "rp_checkout_frame_modal_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (n.html_element_id = "rp_checkout_overlay_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (n.iframe_token = Math.floor(Math.random() * Math.floor(1e4))),
                (n.is_loaded = !1),
                n.body_style;
              var i = H(n.location);
              r &&
                r.hasOwnProperty("showReceipt") &&
                (n.showReceipt = r.showReceipt);
              var u = document.createElement("div");
              (u.id = n.html_element_id),
                (u.style.width = "100%"),
                (u.style.height = "100%"),
                (u.style.position = "absolute"),
                (u.style.margin = "0px"),
                (u.style.zIndex = "9900"),
                (u.style.top = "0"),
                (u.style.left = "0"),
                t || i.includes("unsupported.html") || (u.style.display = "none"),
                (n.class_name = ""),
                document.body.appendChild(u),
                (n.handle_message = function (t) {
                  if (
                    t &&
                    t.data &&
                    t.data.origin == "rp-".concat(n.iframe_token)
                  )
                    if (t.data.event == c) {
                      var e = document.getElementById(n.iframe_id);
                      (e.style.display = "block"),
                        (e.parentElement.style.display = "block");
                      var r = document.body;
                      (n.body_style = r.style.cssText),
                        (r.style.overflowY = "hidden"),
                        (r.style.maxHeight = window.innerHeight + "px"),
                        window.scrollTo(0, 0),
                        n.class_name &&
                          document.documentElement.classList.remove(n.class_name),
                        (n.class_name = "rp_flow_" + new Date().getTime()),
                        document.documentElement.classList.add(n.class_name);
                    } else {
                      if (!n.eventHandlers.has(t.data.event))
                        throw new k(t.data.event);
                      var i = n.eventHandlers.get(t.data.event);
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
                      t.data.event == a && n.close(t.data.data);
                    }
                });
              var l = document.createElement("iframe");
              return (
                (l.frameBorder = 0),
                (l.width = "100%"),
                (l.height = "100%"),
                (l.id = n.iframe_id),
                (l.name = n.iframe_name),
                l.setAttribute("src", i),
                l.setAttribute("allow", "payment"),
                l.setAttribute("allow", "clipboard-write"),
                t &&
                  ((l.onload = function () {
                    var e = window.frames[n.iframe_name];
                    n.modalUtil.enforceScrollStop(),
                      e.postMessage(
                        {
                          for: "rp_app",
                          data: {
                            content_type: "rp_checkout",
                            id: t,
                            type: "modal",
                            token: n.iframe_token,
                            options: r,
                          },
                        },
                        i
                      ),
                      (l.onload = null);
                  }),
                  window.addEventListener("message", n.handle_message, !1),
                  (n.is_loaded = !0)),
                u.appendChild(l),
                n
              );
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && pt(t, e);
              })(e, t),
              (n = e),
              (r = [
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
                      (I(t),
                      (this.customFeatures = new it(e)),
                      (this.modalUtil = new et(
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
              r && ct(n.prototype, r),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              n
            );
            var n, r;
          })(F);
          function ht(t) {
            return (
              (ht =
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
              ht(t)
            );
          }
          function vt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, yt(r.key), r);
            }
          }
          function yt(t) {
            var e = (function (t, e) {
              if ("object" != ht(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != ht(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == ht(e) ? e : e + "";
          }
          function mt(t, e, n) {
            return (
              (e = wt(e)),
              (function (t, e) {
                if (e && ("object" === ht(e) || "function" == typeof e)) return e;
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
              })(
                t,
                bt()
                  ? Reflect.construct(e, n || [], wt(t).constructor)
                  : e.apply(t, n)
              )
            );
          }
          function bt() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (t) {}
            return (bt = function () {
              return !!t;
            })();
          }
          function wt(t) {
            return (
              (wt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              wt(t)
            );
          }
          function gt(t, e) {
            return (
              (gt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              gt(t, e)
            );
          }
          var _t = (function (t) {
            function e(t, n) {
              var r;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (r = mt(this, e)),
                t && I(t),
                (r.iframe_id = "rp_subscription_frame_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (r.iframe_name = "rp_subscription_frame_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (r.iframe_token = Math.floor(Math.random() * Math.floor(1e3))),
                (r.is_loaded = !1),
                (r.location += "/#/subscription/preload");
              var o,
                i,
                a = r.location;
              return (
                (function () {
                  var t = r.default_html_id;
                  if (
                    (n && n.hasOwnProperty("html_element")
                      ? (t = n.html_element)
                      : (console.warn(
                          "[ReepaySubscription][Embedded] No html element id provided as option. Default ".concat(
                            r.default_html_id,
                            " used instead."
                          )
                        ),
                        (t = r.default_html_id)),
                    !(o = document.getElementById(t)))
                  )
                    throw new _(t);
                  if (o.hasChildNodes()) throw new S(t);
                  n &&
                    n.hasOwnProperty("showReceipt") &&
                    (r.showReceipt = n.showReceipt);
                })(),
                ((i = document.createElement("iframe")).frameBorder = 0),
                (i.width = "100%"),
                (i.height = "100%"),
                (i.id = r.iframe_id),
                (i.name = r.iframe_name),
                i.setAttribute("src", a),
                i.setAttribute("allow", "payment"),
                t
                  ? ((i.onload = function () {
                      window.frames[r.iframe_name].postMessage(
                        {
                          for: "rp_app",
                          data: {
                            id: t,
                            content_type: "rp_subscription",
                            type: "embedded",
                            token: r.iframe_token,
                            options: n,
                          },
                        },
                        a
                      ),
                        (i.onload = null);
                    }),
                    window.addEventListener("message", r.handle_message, !1),
                    (r.is_loaded = !0))
                  : (i.style.display = "hidden"),
                o.appendChild(i),
                r
              );
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && gt(t, e);
              })(e, t),
              (n = e),
              (r = [
                {
                  key: "show",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    if (this.is_loaded) throw new P();
                    if (!t) throw new E();
                    I(t);
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
              r && vt(n.prototype, r),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              n
            );
            var n, r;
          })(F);
          function St(t) {
            return (
              (St =
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
              St(t)
            );
          }
          function Et(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, Ot(r.key), r);
            }
          }
          function xt(t, e, n) {
            return (
              e && Et(t.prototype, e),
              n && Et(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          function Ot(t) {
            var e = (function (t, e) {
              if ("object" != St(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != St(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == St(e) ? e : e + "";
          }
          var Pt = xt(function t(e, n) {
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              !e)
            )
              throw new E();
            I(e),
              (this.location = "https://checkout.reepay.com"),
              (window.location.href =
                "create" == n
                  ? "".concat(this.location, "#/subscription/create")
                  : "".concat(this.location, "#/subscription/").concat(e));
          });
          function kt(t) {
            return (
              (kt =
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
              kt(t)
            );
          }
          function jt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, Rt(r.key), r);
            }
          }
          function Rt(t) {
            var e = (function (t, e) {
              if ("object" != kt(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" != kt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == kt(e) ? e : e + "";
          }
          function Mt(t, e, n) {
            return (
              (e = Ft(e)),
              (function (t, e) {
                if (e && ("object" === kt(e) || "function" == typeof e)) return e;
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
              })(
                t,
                Tt()
                  ? Reflect.construct(e, n || [], Ft(t).constructor)
                  : e.apply(t, n)
              )
            );
          }
          function Tt() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (t) {}
            return (Tt = function () {
              return !!t;
            })();
          }
          function Ft(t) {
            return (
              (Ft = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              Ft(t)
            );
          }
          function It(t, e) {
            return (
              (It = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              It(t, e)
            );
          }
          var At = (function (t) {
            function e(t) {
              var n,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (n = Mt(this, e)),
                t &&
                  (I(t),
                  (n.customFeatures = new it(r)),
                  (n.modalUtil = new et(
                    !1,
                    n.customFeatures.allowIosForceFullScreenModal()
                  ))),
                (n.iframe_id = "rp_subs_frame_modal_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (n.iframe_name = "rp_sub_frame_modal_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (n.html_element_id = "rp_checkout_overlay_".concat(
                  Math.floor(Math.random() * Math.floor(41))
                )),
                (n.iframe_token = Math.floor(Math.random() * Math.floor(1e4))),
                (n.is_loaded = !1),
                n.body_style;
              var i = H(n.location);
              r &&
                r.hasOwnProperty("showReceipt") &&
                (n.showReceipt = r.showReceipt);
              var u = document.createElement("div");
              (u.id = n.html_element_id),
                (u.style.width = "100%"),
                (u.style.height = "100%"),
                (u.style.position = "absolute"),
                (u.style.margin = "0px"),
                (u.style.zIndex = "9900"),
                (u.style.top = "0"),
                (u.style.left = "0"),
                t || i.includes("unsupported.html") || (u.style.display = "none"),
                (n.class_name = ""),
                document.body.appendChild(u),
                (n.handle_message = function (t) {
                  if (
                    t &&
                    t.data &&
                    t.data.origin == "rp-".concat(n.iframe_token)
                  )
                    if (t.data.event == c) {
                      var e = document.getElementById(n.iframe_id);
                      (e.style.display = "block"),
                        (e.parentElement.style.display = "block");
                      var r = document.body;
                      (n.body_style = r.style.cssText),
                        (r.style.overflowY = "hidden"),
                        (r.style.maxHeight = window.innerWidth + "px"),
                        window.scrollTo(0, 0),
                        n.class_name &&
                          document.documentElement.classList.remove(n.class_name),
                        (n.class_name = "rp_flow_" + new Date().getTime()),
                        document.documentElement.classList.add(n.class_name);
                    } else {
                      if (!n.eventHandlers.has(t.data.event))
                        throw new k(t.data.event);
                      var i = n.eventHandlers.get(t.data.event);
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
                      t.data.event == a && n.close(t.data.data);
                    }
                });
              var l = document.createElement("iframe");
              return (
                (l.frameBorder = 0),
                (l.width = "100%"),
                (l.height = "100%"),
                (l.id = n.iframe_id),
                (l.name = n.iframe_name),
                l.setAttribute("src", i),
                l.setAttribute("allow", "payment"),
                t &&
                  ((l.onload = function () {
                    n.modalUtil.enforceScrollStop(),
                      window.frames[n.iframe_name].postMessage(
                        {
                          for: "rp_app",
                          data: {
                            content_type: "rp_subscription",
                            id: t,
                            type: "modal",
                            token: n.iframe_token,
                            options: r,
                          },
                        },
                        i
                      ),
                      (l.onload = null);
                  }),
                  window.addEventListener("message", n.handle_message, !1),
                  (n.is_loaded = !0)),
                u.appendChild(l),
                n
              );
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && It(t, e);
              })(e, t),
              (n = e),
              (r = [
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
                      (I(t),
                      (this.customFeatures = new it(e)),
                      (this.modalUtil = new et(
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
              r && jt(n.prototype, r),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              n
            );
            var n, r;
          })(F);
        })(),
        r
      );
    })();
  });
  