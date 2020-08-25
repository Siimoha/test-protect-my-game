
! function(n) {
    "use strict";

    function r(n, r, t) {
        return t.a = n, t.f = r, t
    }

    function c(t) {
        return r(2, t, function(r) {
            return function(n) {
                return t(r, n)
            }
        })
    }

    function v(e) {
        return r(3, e, function(t) {
            return function(r) {
                return function(n) {
                    return e(t, r, n)
                }
            }
        })
    }

    function b(u) {
        return r(4, u, function(e) {
            return function(t) {
                return function(r) {
                    return function(n) {
                        return u(e, t, r, n)
                    }
                }
            }
        })
    }

    function t(a) {
        return r(5, a, function(u) {
            return function(e) {
                return function(t) {
                    return function(r) {
                        return function(n) {
                            return a(u, e, t, r, n)
                        }
                    }
                }
            }
        })
    }

    function e(i) {
        return r(6, i, function(a) {
            return function(u) {
                return function(e) {
                    return function(t) {
                        return function(r) {
                            return function(n) {
                                return i(a, u, e, t, r, n)
                            }
                        }
                    }
                }
            }
        })
    }

    function u(c) {
        return r(7, c, function(i) {
            return function(a) {
                return function(u) {
                    return function(e) {
                        return function(t) {
                            return function(r) {
                                return function(n) {
                                    return c(i, a, u, e, t, r, n)
                                }
                            }
                        }
                    }
                }
            }
        })
    }

    function A(n, r, t) {
        return 2 === n.a ? n.f(r, t) : n(r)(t)
    }

    function m(n, r, t, e) {
        return 3 === n.a ? n.f(r, t, e) : n(r)(t)(e)
    }

    function p(n, r, t, e, u) {
        return 4 === n.a ? n.f(r, t, e, u) : n(r)(t)(e)(u)
    }

    function s(n, r, t, e, u, a) {
        return 5 === n.a ? n.f(r, t, e, u, a) : n(r)(t)(e)(u)(a)
    }

    function g(n, r, t, e, u, a, i) {
        return 6 === n.a ? n.f(r, t, e, u, a, i) : n(r)(t)(e)(u)(a)(i)
    }

    function a(n, r, t, e, u, a, i, c) {
        return 7 === n.a ? n.f(r, t, e, u, a, i, c) : n(r)(t)(e)(u)(a)(i)(c)
    }
    var l = {
        $: 0
    };

    function d(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }
    var i = c(d);

    function h(n) {
        for (var r = l, t = n.length; t--;) r = d(n[t], r);
        return r
    }

    function o(n, r) {
        for (var t, e = [], u = f(n, r, 0, e); u && (t = e.pop()); u = f(t.a, t.b, 0, e));
        return u
    }

    function f(n, r, t, e) {
        if (100 < t) return e.push(w(n, r)), !0;
        if (n === r) return !0;
        if ("object" != typeof n || null === n || null === r) return "function" == typeof n && C(5), !1;
        for (var u in n.$ < 0 && (n = zt(n), r = zt(r)), n)
            if (!f(n[u], r[u], t + 1, e)) return !1;
        return !0
    }
    var T = c(function(n, r) {
        return !o(n, r)
    });

    function E(n, r, t) {
        if ("object" != typeof n) return n === r ? 0 : n < r ? -1 : 1;
        if (!n.$) return (t = E(n.a, r.a)) ? t : (t = E(n.b, r.b)) ? t : E(n.c, r.c);
        for (; n.b && r.b && !(t = E(n.a, r.a)); n = n.b, r = r.b);
        return t || (n.b ? 1 : r.b ? -1 : 0)
    }
    var $ = c(function(n, r) {
            var t = E(n, r);
            return t < 0 ? Gt : t ? qt : Ut
        }),
        y = 0;

    function w(n, r) {
        return {
            a: n,
            b: r
        }
    }

    function F(n, r, t) {
        return {
            a: n,
            b: r,
            c: t
        }
    }

    function _(n) {
        return n
    }

    function R(n, r) {
        var t = {};
        for (var e in n) t[e] = n[e];
        for (var e in r) t[e] = r[e];
        return t
    }
    var S = c(x);

    function x(n, r) {
        if ("string" == typeof n) return n + r;
        if (!n.b) return r;
        var t = d(n.a, r);
        n = n.b;
        for (var e = t; n.b; n = n.b) e = e.b = d(n.a, r);
        return t
    }
    var L = v(function(n, r, t) {
            for (var e = Array(n), u = 0; u < n; u++) e[u] = t(r + u);
            return e
        }),
        j = c(function(n, r) {
            for (var t = Array(n), e = 0; e < n && r.b; e++) t[e] = r.a, r = r.b;
            return t.length = e, w(t, r)
        });

    function C(n) {
        throw Error("https://github.com/elm/core/blob/1.0.0/hints/" + n + ".md")
    }
    var O = c(function(n, r) {
            return n + r
        }),
        I = c(Math.pow),
        B = Math.cos,
        N = Math.sin,
        k = Math.acos;
    var P = Math.ceil,
        D = Math.floor,
        X = Math.round,
        M = Math.sqrt,
        U = Math.log;
    var q = c(function(n, r) {
        return new Float64Array([n, r])
    });
    var G = new Float64Array(3),
        V = new Float64Array(3),
        Z = new Float64Array(3),
        z = v(function(n, r, t) {
            return new Float64Array([n, r, t])
        }),
        W = c(function(n, r) {
            var t = new Float64Array(3);
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t
        });

    function K(n, r, t) {
        return void 0 === t && (t = new Float64Array(3)), t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t
    }
    var H = c(K);

    function Y(n, r, t) {
        return void 0 === t && (t = new Float64Array(3)), J(K(n, r, t), t)
    }

    function Q(n) {
        return Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2])
    }

    function J(n, r) {
        void 0 === r && (r = new Float64Array(3));
        var t = 1 / Q(n);
        return r[0] = n[0] * t, r[1] = n[1] * t, r[2] = n[2] * t, r
    }
    var nn = J,
        rn = c(function(n, r) {
            return new Float64Array([r[0] * n, r[1] * n, r[2] * n])
        }),
        tn = function(n, r) {
            return n[0] * r[0] + n[1] * r[1] + n[2] * r[2]
        },
        en = c(tn);

    function un(n, r, t) {
        return void 0 === t && (t = new Float64Array(3)), t[0] = n[1] * r[2] - n[2] * r[1], t[1] = n[2] * r[0] - n[0] * r[2], t[2] = n[0] * r[1] - n[1] * r[0], t
    }
    var an = c(un),
        cn = c(function(n, r) {
            var t, e = G,
                u = new Float64Array(3);
            return e[0] = n[3], e[1] = n[7], e[2] = n[11], t = tn(r, e) + n[15], e[0] = n[0], e[1] = n[4], e[2] = n[8], u[0] = (tn(r, e) + n[12]) / t, e[0] = n[1], e[1] = n[5], e[2] = n[9], u[1] = (tn(r, e) + n[13]) / t, e[0] = n[2], e[1] = n[6], e[2] = n[10], u[2] = (tn(r, e) + n[14]) / t, u
        }),
        on = b(function(n, r, t, e) {
            return new Float64Array([n, r, t, e])
        });
    var fn = c(function(n, r) {
            return n[0] * r[0] + n[1] * r[1] + n[2] * r[2] + n[3] * r[3]
        }),
        bn = new Float64Array(16),
        sn = new Float64Array(16),
        vn = new Float64Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

    function ln(n, r, t, e, u, a) {
        var i = new Float64Array(16);
        return i[0] = 2 * u / (r - n), i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 2 * u / (e - t), i[6] = 0, i[7] = 0, i[8] = (r + n) / (r - n), i[9] = (e + t) / (e - t), i[10] = -(a + u) / (a - u), i[11] = -1, i[12] = 0, i[13] = 0, i[14] = -2 * a * u / (a - u), i[15] = 0, i
    }
    var dn = b(function(n, r, t, e) {
        var u = t * Math.tan(n * Math.PI / 360),
            a = -u;
        return ln(a * r, u * r, a, u, t, e)
    });

    function hn(n, r) {
        var t = new Float64Array(16),
            e = n[0],
            u = n[1],
            a = n[2],
            i = n[3],
            c = n[4],
            o = n[5],
            f = n[6],
            b = n[7],
            s = n[8],
            v = n[9],
            l = n[10],
            d = n[11],
            h = n[12],
            m = n[13],
            g = n[14],
            A = n[15],
            p = r[0],
            T = r[1],
            E = r[2],
            $ = r[3],
            y = r[4],
            w = r[5],
            F = r[6],
            _ = r[7],
            R = r[8],
            S = r[9],
            x = r[10],
            L = r[11],
            j = r[12],
            C = r[13],
            O = r[14],
            I = r[15];
        return t[0] = e * p + c * T + s * E + h * $, t[1] = u * p + o * T + v * E + m * $, t[2] = a * p + f * T + l * E + g * $, t[3] = i * p + b * T + d * E + A * $, t[4] = e * y + c * w + s * F + h * _, t[5] = u * y + o * w + v * F + m * _, t[6] = a * y + f * w + l * F + g * _, t[7] = i * y + b * w + d * F + A * _, t[8] = e * R + c * S + s * x + h * L, t[9] = u * R + o * S + v * x + m * L, t[10] = a * R + f * S + l * x + g * L, t[11] = i * R + b * S + d * x + A * L, t[12] = e * j + c * C + s * O + h * I, t[13] = u * j + o * C + v * O + m * I, t[14] = a * j + f * C + l * O + g * I, t[15] = i * j + b * C + d * O + A * I, t
    }
    var mn = c(hn),
        gn = c(function(n, r) {
            var t = new Float64Array(16),
                e = (r = J(r, G))[0],
                u = r[1],
                a = r[2],
                i = Math.cos(n),
                c = 1 - i,
                o = Math.sin(n);
            return t[0] = e * e * c + i, t[1] = u * e * c + a * o, t[2] = a * e * c - u * o, t[3] = 0, t[4] = e * u * c - a * o, t[5] = u * u * c + i, t[6] = u * a * c + e * o, t[7] = 0, t[8] = e * a * c + u * o, t[9] = u * a * c - e * o, t[10] = a * a * c + i, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        });

    function An(n, r, t) {
        var e = new Float64Array(16);
        return e[0] = n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }
    var pn = v(An);

    function Tn(n, r, t) {
        var e = new Float64Array(16);
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = n, e[13] = r, e[14] = t, e[15] = 1, e
    }
    var En = v(Tn),
        $n = v(function(n, r, t) {
            var e = Y(n, r, G),
                u = J(un(t, e, V), V),
                a = J(un(e, u, Z), Z),
                i = bn,
                c = sn;
            return i[0] = u[0], i[1] = a[0], i[2] = e[0], i[3] = 0, i[4] = u[1], i[5] = a[1], i[6] = e[1], i[7] = 0, i[8] = u[2], i[9] = a[2], i[10] = e[2], i[11] = 0, i[12] = 0, i[13] = 0, c[i[14] = 0] = i[15] = 1, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0, c[5] = 1, c[6] = 0, c[7] = 0, c[8] = 0, c[9] = 0, c[10] = 1, c[11] = 0, c[12] = -n[0], c[13] = -n[1], c[14] = -n[2], c[15] = 1, hn(i, c)
        });

    function yn(n) {
        var r = new Float64Array(16);
        return r[0] = n[0], r[1] = n[4], r[2] = n[8], r[3] = n[12], r[4] = n[1], r[5] = n[5], r[6] = n[9], r[7] = n[13], r[8] = n[2], r[9] = n[6], r[10] = n[10], r[11] = n[14], r[12] = n[3], r[13] = n[7], r[14] = n[11], r[15] = n[15], r
    }
    var wn = c(function(n, r) {
        return n + r
    });
    var Fn = v(function(n, r, t) {
        return t.slice(n, r)
    });

    function _n(n) {
        return n + ""
    }
    var Rn = c(function(n, r) {
        return {
            $: 10,
            d: n,
            b: r
        }
    });

    function Sn(n, r) {
        return {
            $: 13,
            f: n,
            g: r
        }
    }
    var xn = c(function(n, r) {
        return {
            $: 14,
            b: r,
            h: n
        }
    });
    var Ln = c(function(n, r) {
            return Sn(n, [r])
        }),
        jn = v(function(n, r, t) {
            return Sn(n, [r, t])
        }),
        Cn = b(function(n, r, t, e) {
            return Sn(n, [r, t, e])
        }),
        On = t(function(n, r, t, e, u) {
            return Sn(n, [r, t, e, u])
        }),
        In = e(function(n, r, t, e, u, a) {
            return Sn(n, [r, t, e, u, a])
        }),
        Bn = u(function(n, r, t, e, u, a, i) {
            return Sn(n, [r, t, e, u, a, i])
        }),
        Nn = c(function(n, r) {
            return kn(n, Vn(r))
        });

    function kn(n, r) {
        switch (n.$) {
            case 3:
                return "boolean" == typeof r ? He(r) : Xn("a BOOL", r);
            case 2:
                return "number" != typeof r ? Xn("an INT", r) : -2147483647 < r && r < 2147483647 && (0 | r) === r ? He(r) : !isFinite(r) || r % 1 ? Xn("an INT", r) : He(r);
            case 4:
                return "number" == typeof r ? He(r) : Xn("a FLOAT", r);
            case 6:
                return "string" == typeof r ? He(r) : r instanceof String ? He(r + "") : Xn("a STRING", r);
            case 9:
                return null === r ? He(n.c) : Xn("null", r);
            case 5:
                return He(Gn(r));
            case 7:
                return Array.isArray(r) ? Pn(n.b, r, h) : Xn("a LIST", r);
            case 8:
                return Array.isArray(r) ? Pn(n.b, r, Dn) : Xn("an ARRAY", r);
            case 10:
                var t = n.d;
                if ("object" != typeof r || null === r || !(t in r)) return Xn("an OBJECT with a field named `" + t + "`", r);
                var e = kn(n.b, r[t]);
                return Ye(e) ? e : Ke(A(Je, t, e.a));
            case 11:
                var u = n.e;
                if (!Array.isArray(r)) return Xn("an ARRAY", r);
                if (r.length <= u) return Xn("a LONGER array. Need index " + u + " but only see " + r.length + " entries", r);
                e = kn(n.b, r[u]);
                return Ye(e) ? e : Ke(A(nu, u, e.a));
            case 12:
                if ("object" != typeof r || null === r || Array.isArray(r)) return Xn("an OBJECT", r);
                var a = l;
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        e = kn(n.b, r[i]);
                        if (!Ye(e)) return Ke(A(Je, i, e.a));
                        a = d(w(i, e.a), a)
                    }
                return He(Ht(a));
            case 13:
                for (var c = n.f, o = n.g, f = 0; f < o.length; f++) {
                    e = kn(o[f], r);
                    if (!Ye(e)) return e;
                    c = c(e.a)
                }
                return He(c);
            case 14:
                e = kn(n.b, r);
                return Ye(e) ? kn(n.h(e.a), r) : e;
            case 15:
                for (var b = l, s = n.g; s.b; s = s.b) {
                    e = kn(s.a, r);
                    if (Ye(e)) return e;
                    b = d(e.a, b)
                }
                return Ke(ru(Ht(b)));
            case 1:
                return Ke(A(Qe, n.a, Gn(r)));
            case 0:
                return He(n.a)
        }
    }

    function Pn(n, r, t) {
        for (var e = r.length, u = Array(e), a = 0; a < e; a++) {
            var i = kn(n, r[a]);
            if (!Ye(i)) return Ke(A(nu, a, i.a));
            u[a] = i.a
        }
        return He(t(u))
    }

    function Dn(r) {
        return A(We, r.length, function(n) {
            return r[n]
        })
    }

    function Xn(n, r) {
        return Ke(A(Qe, "Expecting " + n, Gn(r)))
    }

    function Mn(n, r) {
        if (n === r) return !0;
        if (n.$ !== r.$) return !1;
        switch (n.$) {
            case 0:
            case 1:
                return n.a === r.a;
            case 3:
            case 2:
            case 4:
            case 6:
            case 5:
                return !0;
            case 9:
                return n.c === r.c;
            case 7:
            case 8:
            case 12:
                return Mn(n.b, r.b);
            case 10:
                return n.d === r.d && Mn(n.b, r.b);
            case 11:
                return n.e === r.e && Mn(n.b, r.b);
            case 13:
                return n.f === r.f && Un(n.g, r.g);
            case 14:
                return n.h === r.h && Mn(n.b, r.b);
            case 15:
                return Un(n.g, r.g)
        }
    }

    function Un(n, r) {
        var t = n.length;
        if (t !== r.length) return !1;
        for (var e = 0; e < t; e++)
            if (!Mn(n[e], r[e])) return !1;
        return !0
    }
    var qn = c(function(n, r) {
        return JSON.stringify(Vn(r), null, n) + ""
    });

    function Gn(n) {
        return n
    }

    function Vn(n) {
        return n
    }
    var Zn = v(function(n, r, t) {
        return t[n] = Vn(r), t
    });
    Gn(null);

    function zn(n) {
        return {
            $: 0,
            a: n
        }
    }

    function Wn(n) {
        return {
            $: 1,
            a: n
        }
    }

    function Kn(n) {
        return {
            $: 2,
            b: n,
            c: null
        }
    }
    var Hn = c(function(n, r) {
            return {
                $: 3,
                b: n,
                d: r
            }
        }),
        Yn = c(function(n, r) {
            return {
                $: 4,
                b: n,
                d: r
            }
        });
    var Qn = 0;

    function Jn(n) {
        var r = {
            $: 0,
            e: Qn++,
            f: n,
            g: null,
            h: []
        };
        return ar(r), r
    }

    function nr(r) {
        return Kn(function(n) {
            n(zn(Jn(r)))
        })
    }

    function rr(n, r) {
        n.h.push(r), ar(n)
    }
    var tr = c(function(r, t) {
        return Kn(function(n) {
            rr(r, t), n(zn(y))
        })
    });
    var er = !1,
        ur = [];

    function ar(n) {
        if (ur.push(n), !er) {
            for (er = !0; n = ur.shift();) ir(n);
            er = !1
        }
    }

    function ir(r) {
        for (; r.f;) {
            var n = r.f.$;
            if (0 === n || 1 === n) {
                for (; r.g && r.g.$ !== n;) r.g = r.g.i;
                if (!r.g) return;
                r.f = r.g.b(r.f.a), r.g = r.g.i
            } else {
                if (2 === n) return void(r.f.c = r.f.b(function(n) {
                    r.f = n, ar(r)
                }));
                if (5 === n) {
                    if (0 === r.h.length) return;
                    r.f = r.f.b(r.h.shift())
                } else r.g = {
                    $: 3 === n ? 0 : 1,
                    b: r.f.b,
                    i: r.g
                }, r.f = r.f.d
            }
        }
    }

    function cr(n, r, t, e, u, a) {
        var i = A(Nn, n, Gn(r ? r.flags : void 0));
        Ye(i) || C(2);
        var c = {},
            o = (i = t(i.a)).a,
            f = a(s, o),
            b = function(n, r) {
                var t;
                for (var e in or) {
                    var u = or[e];
                    u.a && ((t = t || {})[e] = u.a(e, r)), n[e] = br(u, r)
                }
                return t
            }(c, s);

        function s(n, r) {
            f(o = (i = A(e, n, o)).a, r), hr(c, i.b, u(o))
        }
        return hr(c, i.b, u(o)), b ? {
            ports: b
        } : {}
    }
    var or = {};

    function fr(n, r, t, e, u) {
        return {
            b: n,
            c: r,
            d: t,
            e: e,
            f: u
        }
    }

    function br(n, r) {
        var e = {
                g: r,
                h: void 0
            },
            u = n.c,
            a = n.d,
            i = n.e,
            c = n.f;

        function o(t) {
            return A(Hn, o, {
                $: 5,
                b: function(n) {
                    var r = n.a;
                    return 0 === n.$ ? m(a, e, r, t) : i && c ? p(u, e, r.i, r.j, t) : m(u, e, i ? r.i : r.j, t)
                }
            })
        }
        return e.h = Jn(A(Hn, o, n.b))
    }
    var sr = c(function(r, t) {
            return Kn(function(n) {
                r.g(t), n(zn(y))
            })
        }),
        vr = c(function(n, r) {
            return A(tr, n.h, {
                $: 0,
                a: r
            })
        });

    function lr(r) {
        return function(n) {
            return {
                $: 1,
                k: r,
                l: n
            }
        }
    }

    function dr(n) {
        return {
            $: 2,
            m: n
        }
    }

    function hr(n, r, t) {
        var e = {};
        for (var u in mr(!0, r, e, null), mr(!1, t, e, null), n) rr(n[u], {
            $: "fx",
            a: e[u] || {
                i: l,
                j: l
            }
        })
    }

    function mr(n, r, t, e) {
        switch (r.$) {
            case 1:
                var u = r.k,
                    a = function(n, r, t, e) {
                        function u(n) {
                            for (var r = t; r; r = r.q) n = r.p(n);
                            return n
                        }
                        return A(n ? or[r].e : or[r].f, u, e)
                    }(n, u, e, r.l);
                return void(t[u] = function(n, r, t) {
                    return t = t || {
                        i: l,
                        j: l
                    }, n ? t.i = d(r, t.i) : t.j = d(r, t.j), t
                }(n, a, t[u]));
            case 2:
                for (var i = r.m; i.b; i = i.b) mr(n, i.a, t, e);
                return;
            case 3:
                return void mr(n, r.o, t, {
                    p: r.n,
                    q: e
                })
        }
    }

    function gr(n) {
        or[n] && C(3)
    }
    var Ar = c(function(n, r) {
        return r
    });

    function pr(n) {
        var t, a = [],
            i = or[n].r,
            c = (t = 0, Kn(function(n) {
                var r = setTimeout(function() {
                    n(zn(y))
                }, t);
                return function() {
                    clearTimeout(r)
                }
            }));
        return or[n].b = c, or[n].c = v(function(n, r) {
            for (; r.b; r = r.b)
                for (var t = a, e = Vn(i(r.a)), u = 0; u < t.length; u++) t[u](e);
            return c
        }), {
            subscribe: function(n) {
                a.push(n)
            },
            unsubscribe: function(n) {
                var r = (a = a.slice()).indexOf(n);
                r < 0 || a.splice(r, 1)
            }
        }
    }
    var Tr;
    var Er = "undefined" != typeof document ? document : {};

    function $r(n, r) {
        n.appendChild(r)
    }

    function yr(n) {
        return {
            $: 0,
            a: n
        }
    }
    var wr = c(function(a, i) {
        return c(function(n, r) {
            for (var t = [], e = 0; r.b; r = r.b) {
                var u = r.a;
                e += u.b || 0, t.push(u)
            }
            return e += t.length, {
                $: 1,
                c: i,
                d: xr(n),
                e: t,
                f: a,
                b: e
            }
        })
    })(void 0);
    c(function(a, i) {
        return c(function(n, r) {
            for (var t = [], e = 0; r.b; r = r.b) {
                var u = r.a;
                e += u.b.b || 0, t.push(u)
            }
            return e += t.length, {
                $: 2,
                c: i,
                d: xr(n),
                e: t,
                f: a,
                b: e
            }
        })
    })(void 0);
    var Fr = c(function(n, r) {
            return {
                $: "a0",
                n: n,
                o: r
            }
        }),
        _r = c(function(n, r) {
            return {
                $: "a1",
                n: n,
                o: r
            }
        }),
        Rr = c(function(n, r) {
            return {
                $: "a3",
                n: n,
                o: r
            }
        });
    var Sr;

    function xr(n) {
        for (var r = {}; n.b; n = n.b) {
            var t = n.a,
                e = t.$,
                u = t.n,
                a = t.o;
            if ("a2" !== e) {
                var i = r[e] || (r[e] = {});
                "a3" === e && "class" === u ? Lr(i, u, a) : i[u] = a
            } else "className" === u ? Lr(r, u, Vn(a)) : r[u] = Vn(a)
        }
        return r
    }

    function Lr(n, r, t) {
        var e = n[r];
        n[r] = e ? e + " " + t : t
    }

    function jr(n, r) {
        var t = n.$;
        if (5 === t) return jr(n.k || (n.k = n.m()), r);
        if (0 === t) return Er.createTextNode(n.a);
        if (4 === t) {
            for (var e = n.k, u = n.j; 4 === e.$;) "object" != typeof u ? u = [u, e.j] : u.push(e.j), e = e.k;
            var a = {
                j: u,
                p: r
            };
            return (i = jr(e, a)).elm_event_node_ref = a, i
        }
        if (3 === t) return Cr(i = n.h(n.g), r, n.d), i;
        var i = n.f ? Er.createElementNS(n.f, n.c) : Er.createElement(n.c);
        Tr && "a" == n.c && i.addEventListener("click", Tr(i)), Cr(i, r, n.d);
        for (var c = n.e, o = 0; o < c.length; o++) $r(i, jr(1 === t ? c[o] : c[o].b, r));
        return i
    }

    function Cr(n, r, t) {
        for (var e in t) {
            var u = t[e];
            "a1" === e ? Or(n, u) : "a0" === e ? Nr(n, r, u) : "a3" === e ? Ir(n, u) : "a4" === e ? Br(n, u) : ("value" !== e || "checked" !== e || n[e] !== u) && (n[e] = u)
        }
    }

    function Or(n, r) {
        var t = n.style;
        for (var e in r) t[e] = r[e]
    }

    function Ir(n, r) {
        for (var t in r) {
            var e = r[t];
            e ? n.setAttribute(t, e) : n.removeAttribute(t)
        }
    }

    function Br(n, r) {
        for (var t in r) {
            var e = r[t],
                u = e.f,
                a = e.o;
            a ? n.setAttributeNS(u, t, a) : n.removeAttributeNS(u, t)
        }
    }

    function Nr(n, r, t) {
        var e = n.elmFs || (n.elmFs = {});
        for (var u in t) {
            var a = t[u],
                i = e[u];
            if (a) {
                if (i) {
                    if (i.q.$ === a.$) {
                        i.q = a;
                        continue
                    }
                    n.removeEventListener(u, i)
                }
                i = kr(r, a), n.addEventListener(u, i, Sr && {
                    passive: Nu(a) < 2
                }), e[u] = i
            } else n.removeEventListener(u, i), e[u] = void 0
        }
    }
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
                Sr = !0
            }
        }))
    } catch (n) {}

    function kr(b, n) {
        function s(n) {
            var r = s.q,
                t = kn(r.a, n);
            if (Ye(t)) {
                for (var e, u = Nu(r), a = t.a, i = u ? u < 3 ? a.a : a.w : a, c = 1 == u ? a.b : 3 == u && a.ap, o = (c && n.stopPropagation(), (2 == u ? a.b : 3 == u && a.am) && n.preventDefault(), b); e = o.j;) {
                    if ("function" == typeof e) i = e(i);
                    else
                        for (var f = e.length; f--;) i = e[f](i);
                    o = o.p
                }
                o(i, c)
            }
        }
        return s.q = n, s
    }

    function Pr(n, r) {
        return n.$ == r.$ && Mn(n.a, r.a)
    }

    function Dr(n, r) {
        var t = [];
        return Mr(n, r, t, 0), t
    }

    function Xr(n, r, t, e) {
        var u = {
            $: r,
            r: t,
            s: e,
            t: void 0,
            u: void 0
        };
        return n.push(u), u
    }

    function Mr(n, r, t, e) {
        if (n !== r) {
            var u = n.$,
                a = r.$;
            if (u !== a) {
                if (1 !== u || 2 !== a) return void Xr(t, 0, e, r);
                r = function(n) {
                    for (var r = n.e, t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = r[u].b;
                    return {
                        $: 1,
                        c: n.c,
                        d: n.d,
                        e: e,
                        f: n.f,
                        b: n.b
                    }
                }(r), a = 1
            }
            switch (a) {
                case 5:
                    for (var i = n.l, c = r.l, o = i.length, f = o === c.length; f && o--;) f = i[o] === c[o];
                    if (f) return void(r.k = n.k);
                    r.k = r.m();
                    var b = [];
                    return Mr(n.k, r.k, b, 0), void(0 < b.length && Xr(t, 1, e, b));
                case 4:
                    for (var s = n.j, v = r.j, l = !1, d = n.k; 4 === d.$;) l = !0, "object" != typeof s ? s = [s, d.j] : s.push(d.j), d = d.k;
                    for (var h = r.k; 4 === h.$;) l = !0, "object" != typeof v ? v = [v, h.j] : v.push(h.j), h = h.k;
                    return l && s.length !== v.length ? void Xr(t, 0, e, r) : ((l ? function(n, r) {
                        for (var t = 0; t < n.length; t++)
                            if (n[t] !== r[t]) return !1;
                        return !0
                    }(s, v) : s === v) || Xr(t, 2, e, v), void Mr(d, h, t, e + 1));
                case 0:
                    return void(n.a !== r.a && Xr(t, 3, e, r.a));
                case 1:
                    return void Ur(n, r, t, e, Gr);
                case 2:
                    return void Ur(n, r, t, e, Vr);
                case 3:
                    if (n.h !== r.h) return void Xr(t, 0, e, r);
                    var m = qr(n.d, r.d);
                    m && Xr(t, 4, e, m);
                    var g = r.i(n.g, r.g);
                    return void(g && Xr(t, 5, e, g))
            }
        }
    }

    function Ur(n, r, t, e, u) {
        if (n.c === r.c && n.f === r.f) {
            var a = qr(n.d, r.d);
            a && Xr(t, 4, e, a), u(n, r, t, e)
        } else Xr(t, 0, e, r)
    }

    function qr(n, r, t) {
        var e;
        for (var u in n)
            if ("a1" !== u && "a0" !== u && "a3" !== u && "a4" !== u)
                if (u in r) {
                    var a = n[u],
                        i = r[u];
                    a === i && "value" !== u && "checked" !== u || "a0" === t && Pr(a, i) || ((e = e || {})[u] = i)
                } else(e = e || {})[u] = t ? "a1" === t ? "" : "a0" === t || "a3" === t ? void 0 : {
                    f: n[u].f,
                    o: void 0
                } : "string" == typeof n[u] ? "" : null;
        else {
            var c = qr(n[u], r[u] || {}, u);
            c && ((e = e || {})[u] = c)
        }
        for (var o in r) o in n || ((e = e || {})[o] = r[o]);
        return e
    }

    function Gr(n, r, t, e) {
        var u = n.e,
            a = r.e,
            i = u.length,
            c = a.length;
        c < i ? Xr(t, 6, e, {
            v: c,
            i: i - c
        }) : i < c && Xr(t, 7, e, {
            v: i,
            e: a
        });
        for (var o = i < c ? i : c, f = 0; f < o; f++) {
            var b = u[f];
            Mr(b, a[f], t, ++e), e += b.b || 0
        }
    }

    function Vr(n, r, t, e) {
        for (var u = [], a = {}, i = [], c = n.e, o = r.e, f = c.length, b = o.length, s = 0, v = 0, l = e; s < f && v < b;) {
            var d = (_ = c[s]).a,
                h = (R = o[v]).a,
                m = _.b,
                g = R.b;
            if (d !== h) {
                var A = c[s + 1],
                    p = o[v + 1];
                if (A) var T = A.a,
                    E = A.b,
                    $ = h === T;
                if (p) var y = p.a,
                    w = p.b,
                    F = d === y;
                if (F && $) Mr(m, w, u, ++l), zr(a, u, d, g, v, i), l += m.b || 0, Wr(a, u, d, E, ++l), l += E.b || 0, s += 2, v += 2;
                else if (F) l++, zr(a, u, h, g, v, i), Mr(m, w, u, l), l += m.b || 0, s += 1, v += 2;
                else if ($) Wr(a, u, d, m, ++l), l += m.b || 0, Mr(E, g, u, ++l), l += E.b || 0, s += 2, v += 1;
                else {
                    if (!A || T !== y) break;
                    Wr(a, u, d, m, ++l), zr(a, u, h, g, v, i), l += m.b || 0, Mr(E, w, u, ++l), l += E.b || 0, s += 2, v += 2
                }
            } else Mr(m, g, u, ++l), l += m.b || 0, s++, v++
        }
        for (; s < f;) {
            var _;
            Wr(a, u, (_ = c[s]).a, m = _.b, ++l), l += m.b || 0, s++
        }
        for (; v < b;) {
            var R, S = S || [];
            zr(a, u, (R = o[v]).a, R.b, void 0, S), v++
        }(0 < u.length || 0 < i.length || S) && Xr(t, 8, e, {
            w: u,
            x: i,
            y: S
        })
    }
    var Zr = "_elmW6BL";

    function zr(n, r, t, e, u, a) {
        var i = n[t];
        if (!i) return a.push({
            r: u,
            A: i = {
                c: 0,
                z: e,
                r: u,
                s: void 0
            }
        }), void(n[t] = i);
        if (1 === i.c) {
            a.push({
                r: u,
                A: i
            }), i.c = 2;
            var c = [];
            return Mr(i.z, e, c, i.r), i.r = u, void(i.s.s = {
                w: c,
                A: i
            })
        }
        zr(n, r, t + Zr, e, u, a)
    }

    function Wr(n, r, t, e, u) {
        var a = n[t];
        if (a) {
            if (0 === a.c) {
                a.c = 2;
                var i = [];
                return Mr(e, a.z, i, u), void Xr(r, 9, u, {
                    w: i,
                    A: a
                })
            }
            Wr(n, r, t + Zr, e, u)
        } else {
            var c = Xr(r, 9, u, void 0);
            n[t] = {
                c: 1,
                z: e,
                r: u,
                s: c
            }
        }
    }

    function Kr(n, r, t, e) {
        ! function n(r, t, e, u, a, i, c) {
            var o = e[u];
            var f = o.r;
            for (; f === a;) {
                var b = o.$;
                if (1 === b) Kr(r, t.k, o.s, c);
                else if (8 === b) {
                    o.t = r, o.u = c;
                    var s = o.s.w;
                    0 < s.length && n(r, t, s, 0, a, i, c)
                } else if (9 === b) {
                    o.t = r, o.u = c;
                    var v = o.s;
                    if (v) {
                        v.A.s = r;
                        var s = v.w;
                        0 < s.length && n(r, t, s, 0, a, i, c)
                    }
                } else o.t = r, o.u = c;
                if (!(o = e[++u]) || (f = o.r) > i) return u
            }
            var l = t.$;
            if (4 === l) {
                for (var d = t.k; 4 === d.$;) d = d.k;
                return n(r, d, e, u, a + 1, i, r.elm_event_node_ref)
            }
            var h = t.e;
            var m = r.childNodes;
            for (var g = 0; g < h.length; g++) {
                var A = 1 === l ? h[g] : h[g].b,
                    p = ++a + (A.b || 0);
                if (a <= f && f <= p && (u = n(m[g], A, e, u, a, p, c), !(o = e[u]) || (f = o.r) > i)) return u;
                a = p
            }
            return u
        }(n, r, t, 0, 0, r.b, e)
    }

    function Hr(n, r, t, e) {
        return 0 === t.length ? n : (Kr(n, r, t, e), Yr(n, t))
    }

    function Yr(n, r) {
        for (var t = 0; t < r.length; t++) {
            var e = r[t],
                u = e.t,
                a = Qr(u, e);
            u === n && (n = a)
        }
        return n
    }

    function Qr(n, r) {
        switch (r.$) {
            case 0:
                return function(n, r, t) {
                    var e = n.parentNode,
                        u = jr(r, t);
                    u.elm_event_node_ref || (u.elm_event_node_ref = n.elm_event_node_ref);
                    e && u !== n && e.replaceChild(u, n);
                    return u
                }(n, r.s, r.u);
            case 4:
                return Cr(n, r.u, r.s), n;
            case 3:
                return n.replaceData(0, n.length, r.s), n;
            case 1:
                return Yr(n, r.s);
            case 2:
                return n.elm_event_node_ref ? n.elm_event_node_ref.j = r.s : n.elm_event_node_ref = {
                    j: r.s,
                    p: r.u
                }, n;
            case 6:
                for (var t = r.s, e = 0; e < t.i; e++) n.removeChild(n.childNodes[t.v]);
                return n;
            case 7:
                for (var u = (t = r.s).e, a = n.childNodes[e = t.v]; e < u.length; e++) n.insertBefore(jr(u[e], r.u), a);
                return n;
            case 9:
                if (!(t = r.s)) return n.parentNode.removeChild(n), n;
                var i = t.A;
                return void 0 !== i.r && n.parentNode.removeChild(n), i.s = Yr(n, t.w), n;
            case 8:
                return function(n, r) {
                    var t = r.s,
                        e = function(n, r) {
                            if (!n) return;
                            for (var t = Er.createDocumentFragment(), e = 0; e < n.length; e++) {
                                var u = n[e],
                                    a = u.A;
                                $r(t, 2 === a.c ? a.s : jr(a.z, r.u))
                            }
                            return t
                        }(t.y, r);
                    n = Yr(n, t.w);
                    for (var u = t.x, a = 0; a < u.length; a++) {
                        var i = u[a],
                            c = i.A,
                            o = 2 === c.c ? c.s : jr(c.z, r.u);
                        n.insertBefore(o, n.childNodes[i.r])
                    }
                    e && $r(n, e);
                    return n
                }(n, r);
            case 5:
                return r.s(n);
            default:
                C(10)
        }
    }

    function Jr(n) {
        if (3 === n.nodeType) return yr(n.textContent);
        if (1 !== n.nodeType) return yr("");
        for (var r = l, t = n.attributes, e = t.length; e--;) {
            var u = t[e];
            r = d(A(Rr, u.name, u.value), r)
        }
        var a = n.tagName.toLowerCase(),
            i = l,
            c = n.childNodes;
        for (e = c.length; e--;) i = d(Jr(c[e]), i);
        return m(wr, a, r, i)
    }
    var nt = b(function(r, n, t, c) {
            return cr(n, c, r.bu, r.ce, r.b3, function(e, n) {
                var u = r.ch,
                    a = c.node,
                    i = Jr(a);
                return tt(n, function(n) {
                    var r = u(n),
                        t = Dr(i, r);
                    a = Hr(a, i, t, e), i = r
                })
            })
        }),
        rt = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(n) {
            setTimeout(n, 1e3 / 60)
        };

    function tt(t, e) {
        e(t);
        var u = 0;

        function a() {
            u = 1 === u ? 0 : (rt(a), e(t), 1)
        }
        return function(n, r) {
            t = n, r ? (e(t), 2 === u && (u = 1)) : (0 === u && rt(a), u = 2)
        }
    }
    var et = {
            addEventListener: function() {},
            removeEventListener: function() {}
        },
        ut = "undefined" != typeof document ? document : et,
        at = "undefined" != typeof window ? window : et,
        it = v(function(r, t, e) {
            return nr(Kn(function() {
                function n(n) {
                    Jn(e(n))
                }
                return r.addEventListener(t, n, Sr && {
                        passive: !0
                    }),
                    function() {
                        r.removeEventListener(t, n)
                    }
            }))
        }),
        ct = c(function(n, r) {
            var t = kn(n, r);
            return Ye(t) ? ae(t.a) : ie
        });

    function ot(r) {
        return Kn(function(n) {
            rt(function() {
                n(zn(r()))
            })
        })
    }

    function ft() {
        var n = ut.body,
            r = ut.documentElement;
        return {
            a2: Math.max(n.scrollWidth, n.offsetWidth, r.scrollWidth, r.offsetWidth, r.clientWidth),
            aD: Math.max(n.scrollHeight, n.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight)
        }
    }
    var bt = 0,
        st = e(function(a, i, c, o, f, n) {
            var b = 9728 !== i && 9729 !== i;
            return Kn(function(t) {
                var e = new Image;

                function u(n) {
                    var r = n.createTexture();
                    return n.bindTexture(n.TEXTURE_2D, r), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, f), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, a), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, i), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, c), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, o), b && n.generateMipmap(n.TEXTURE_2D), n.bindTexture(n.TEXTURE_2D, null), r
                }
                e.onload = function() {
                    var n = e.width,
                        r = e.height;
                    t(0 == (n & n - 1) && 0 == (r & r - 1) || !b && 33071 === c && 33071 === o ? zn({
                        $: 0,
                        id: bt++,
                        aw: u,
                        a: n,
                        b: r
                    }) : Wn(A(Hu, n, r)))
                }, e.onerror = function() {
                    t(Wn(Ku))
                }, "data:" !== n.slice(0, 5) && (e.crossOrigin = "Anonymous"), e.src = n
            })
        });
    var vt = 0;

    function lt(n, r) {
        for (; r.b; r = r.b) n(r.a)
    }

    function dt(n) {
        for (var r = 0; n.b; n = n.b) r++;
        return r
    }
    var ht = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(n) {
            setTimeout(n, 1e3 / 60)
        },
        mt = t(function(n, r, t, e, u) {
            return e.id || (e.id = vt++), {
                $: 0,
                a: n,
                b: r,
                c: t,
                d: e,
                e: u
            }
        }),
        gt = c(function(n, r) {
            n.enable(n.BLEND), n.blendEquationSeparate(r.a, r.d), n.blendFuncSeparate(r.b, r.c, r.e, r.f), n.blendColor(r.g, r.h, r.i, r.j)
        }),
        At = c(function(n, r) {
            n.enable(n.DEPTH_TEST), n.depthFunc(r.a), n.depthMask(r.b), n.depthRange(r.c, r.d)
        }),
        pt = c(function(n, r) {
            n.enable(n.STENCIL_TEST), n.stencilFuncSeparate(n.FRONT, r.d, r.a, r.b), n.stencilOpSeparate(n.FRONT, r.e, r.f, r.g), n.stencilMaskSeparate(n.FRONT, r.c), n.stencilFuncSeparate(n.BACK, r.h, r.a, r.b), n.stencilOpSeparate(n.BACK, r.i, r.j, r.k), n.stencilMaskSeparate(n.BACK, r.c)
        }),
        Tt = c(function(n, r) {
            n.enable(n.SCISSOR_TEST), n.scissor(r.a, r.b, r.c, r.d)
        }),
        Et = c(function(n, r) {
            n.colorMask(r.a, r.b, r.c, r.d)
        }),
        $t = c(function(n, r) {
            n.enable(n.CULL_FACE), n.cullFace(r.a)
        }),
        yt = c(function(n, r) {
            n.enable(n.POLYGON_OFFSET_FILL), n.polygonOffset(r.a, r.b)
        }),
        wt = c(function(n, r) {
            n.enable(n.SAMPLE_COVERAGE), n.sampleCoverage(r.a, r.b)
        }),
        Ft = c(function(n) {
            n.enable(n.SAMPLE_ALPHA_TO_COVERAGE)
        });

    function _t(n, r, t) {
        var e = n.createShader(t);
        if (n.shaderSource(e, r), n.compileShader(e), !n.getShaderParameter(e, n.COMPILE_STATUS)) throw n.getShaderInfoLog(e);
        return e
    }

    function Rt(n, r) {
        switch (r) {
            case n.FLOAT:
                return {
                    size: 1,
                    type: Float32Array,
                    baseType: n.FLOAT
                };
            case n.FLOAT_VEC2:
                return {
                    size: 2,
                    type: Float32Array,
                    baseType: n.FLOAT
                };
            case n.FLOAT_VEC3:
                return {
                    size: 3,
                    type: Float32Array,
                    baseType: n.FLOAT
                };
            case n.FLOAT_VEC4:
                return {
                    size: 4,
                    type: Float32Array,
                    baseType: n.FLOAT
                };
            case n.INT:
                return {
                    size: 1,
                    type: Int32Array,
                    baseType: n.INT
                };
            case n.INT_VEC2:
                return {
                    size: 2,
                    type: Int32Array,
                    baseType: n.INT
                };
            case n.INT_VEC3:
                return {
                    size: 3,
                    type: Int32Array,
                    baseType: n.INT
                };
            case n.INT_VEC4:
                return {
                    size: 4,
                    type: Int32Array,
                    baseType: n.INT
                }
        }
    }

    function St(n, r, t, e) {
        for (var c = t.a.p, o = [], u = 0; u < c; u++) o.push(String.fromCharCode(97 + u));
        var a = Rt(n, r.type);
        if (void 0 === a) throw Error("No info available for: " + r.type);
        var i = 0,
            f = new a.type(dt(t.b) * a.size * c);
        lt(function(n) {
            ! function(r, t, e, u, a) {
                var i;
                if (1 === c)
                    for (i = 0; i < t; i++) r[e++] = 1 === t ? u[a] : u[a][i];
                else o.forEach(function(n) {
                    for (i = 0; i < t; i++) r[e++] = 1 === t ? u[n][a] : u[n][a][i]
                })
            }(f, a.size, i, n, e[r.name] || r.name), i += a.size * c
        }, t.b);
        var b = n.createBuffer();
        return n.bindBuffer(n.ARRAY_BUFFER, b), n.bufferData(n.ARRAY_BUFFER, f, n.STATIC_DRAW), b
    }

    function xt(n, r) {
        var t = n.createBuffer(),
            e = 0 === r.a.q ? function(n) {
                for (var r = new Uint16Array(n), t = 0; t < n; t++) r[t] = t;
                return r
            }(r.a.p * dt(r.b)) : function(n, r) {
                var t, e = new Uint16Array(dt(n) * r),
                    u = 0;
                return lt(function(n) {
                    if (1 === r) e[u++] = n;
                    else
                        for (t = 0; t < r; t++) e[u++] = n[String.fromCharCode(97 + t)]
                }, n), e
            }(r.c, r.a.q);
        return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t), n.bufferData(n.ELEMENT_ARRAY_BUFFER, e, n.STATIC_DRAW), {
            numIndices: e.length,
            indexBuffer: t,
            buffers: {}
        }
    }

    function Lt(n, r) {
        return n + "#" + r
    }
    var jt = c(function(h, n) {
        var m = h.f.gl;
        if (!m) return n;
        return m.viewport(0, 0, m.drawingBufferWidth, m.drawingBufferHeight), m.clear(m.COLOR_BUFFER_BIT | m.DEPTH_BUFFER_BIT | m.STENCIL_BUFFER_BIT), lt(function(n) {
            if (n.d.b.b) {
                var r, t, e, u;
                if (n.b.id && n.c.id && (r = Lt(n.b.id, n.c.id), t = h.f.programs[r]), !t) {
                    var a, i;
                    n.b.id ? a = h.f.shaders[n.b.id] : n.b.id = vt++, a || (a = _t(m, n.b.src, m.VERTEX_SHADER), h.f.shaders[n.b.id] = a), n.c.id ? i = h.f.shaders[n.c.id] : n.c.id = vt++, i || (i = _t(m, n.c.src, m.FRAGMENT_SHADER), h.f.shaders[n.c.id] = i);
                    var c = function(n, r, t) {
                        var e = n.createProgram();
                        if (n.attachShader(e, r), n.attachShader(e, t), n.linkProgram(e), !n.getProgramParameter(e, n.LINK_STATUS)) throw n.getProgramInfoLog(e);
                        return e
                    }(m, a, i);
                    t = {
                        glProgram: c,
                        attributes: Object.assign({}, n.b.attributes, n.c.attributes),
                        uniformSetters: function(u, a, n, r) {
                            var i = 0;

                            function t(n, r) {
                                var t = u.getUniformLocation(n, r.name);
                                switch (r.type) {
                                    case u.INT:
                                        return function(n) {
                                            u.uniform1i(t, n)
                                        };
                                    case u.FLOAT:
                                        return function(n) {
                                            u.uniform1f(t, n)
                                        };
                                    case u.FLOAT_VEC2:
                                        return function(n) {
                                            u.uniform2fv(t, new Float32Array(n))
                                        };
                                    case u.FLOAT_VEC3:
                                        return function(n) {
                                            u.uniform3fv(t, new Float32Array(n))
                                        };
                                    case u.FLOAT_VEC4:
                                        return function(n) {
                                            u.uniform4fv(t, new Float32Array(n))
                                        };
                                    case u.FLOAT_MAT4:
                                        return function(n) {
                                            u.uniformMatrix4fv(t, !1, new Float32Array(n))
                                        };
                                    case u.SAMPLER_2D:
                                        var e = i++;
                                        return function(n) {
                                            u.activeTexture(u.TEXTURE0 + e);
                                            var r = a.f.textures[n.id];
                                            r || (r = n.aw(u), a.f.textures[n.id] = r), u.bindTexture(u.TEXTURE_2D, r), u.uniform1i(t, e)
                                        };
                                    case u.BOOL:
                                        return function(n) {
                                            u.uniform1i(t, n)
                                        };
                                    default:
                                        return function() {}
                                }
                            }
                            for (var e = {}, c = u.getProgramParameter(n, u.ACTIVE_UNIFORMS), o = 0; o < c; o++) {
                                var f = u.getActiveUniform(n, o);
                                e[r[f.name] || f.name] = t(n, f)
                            }
                            return e
                        }(m, h, c, Object.assign({}, n.b.uniforms, n.c.uniforms))
                    }, r = Lt(n.b.id, n.c.id), h.f.programs[r] = t
                }
                m.useProgram(t.glProgram), e = t.uniformSetters, Object.keys(u = n.e).forEach(function(n) {
                    var r = e[n];
                    r && r(u[n])
                });
                var o = h.f.buffers[n.d.id];
                o || (o = xt(m, n.d), h.f.buffers[n.d.id] = o), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, o.indexBuffer);
                for (var f = m.getProgramParameter(t.glProgram, m.ACTIVE_ATTRIBUTES), b = 0; b < f; b++) {
                    var s = m.getActiveAttrib(t.glProgram, b),
                        v = m.getAttribLocation(t.glProgram, s.name);
                    m.enableVertexAttribArray(v), void 0 === o.buffers[s.name] && (o.buffers[s.name] = St(m, s, n.d, t.attributes));
                    var l = o.buffers[s.name],
                        d = Rt(m, s.type);
                    m.bindBuffer(m.ARRAY_BUFFER, l), m.vertexAttribPointer(v, d.size, d.baseType, !1, 0, 0)
                }
                lt(function(n) {
                    return A(_o, m, n)
                }, n.a), m.drawElements(n.d.a.s, o.numIndices, m.UNSIGNED_SHORT, 0), lt(function(n) {
                    return A(wo, m, n)
                }, n.a)
            }
        }, h.g), n
    });
    var Ct = v(function(n, r, t) {
            return function(n, r, t, e) {
                return {
                    $: 3,
                    d: xr(n),
                    g: r,
                    h: t,
                    i: e
                }
            }(r, {
                g: t,
                f: {},
                h: n
            }, Pt, Dt)
        }),
        Ot = c(function(n, r) {
            n.contextAttributes.alpha = !0, n.contextAttributes.premultipliedAlpha = r.a
        }),
        It = c(function(n, r) {
            n.contextAttributes.depth = !0, n.sceneSettings.push(function(n) {
                n.clearDepth(r.a)
            })
        }),
        Bt = c(function(n, r) {
            n.contextAttributes.stencil = !0, n.sceneSettings.push(function(n) {
                n.clearStencil(r.a)
            })
        }),
        Nt = c(function(n) {
            n.contextAttributes.antialias = !0
        }),
        kt = c(function(n, r) {
            n.sceneSettings.push(function(n) {
                n.clearColor(r.a, r.b, r.c, r.d)
            })
        });

    function Pt(n) {
        var r = {
            contextAttributes: {
                alpha: !1,
                depth: !1,
                stencil: !1,
                antialias: !1,
                premultipliedAlpha: !1
            },
            sceneSettings: []
        };
        lt(function(n) {
            return A(Fo, r, n)
        }, n.h);
        var t = Er.createElement("canvas"),
            e = t.getContext && (t.getContext("webgl", r.contextAttributes) || t.getContext("experimental-webgl", r.contextAttributes));
        return e ? r.sceneSettings.forEach(function(n) {
            n(e)
        }) : (t = Er.createElement("div")).innerHTML = '<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!', n.f.gl = e, n.f.shaders = [], n.f.programs = {}, n.f.buffers = [], n.f.textures = [], ht(function() {
            return A(jt, n, t)
        }), t
    }

    function Dt(n, r) {
        return r.f = n.f, jt(r)
    }
    var Xt = v(function(n, r, t) {
            return {
                be: r,
                bR: t,
                cd: n
            }
        }),
        Mt = c(function(n, r) {
            return r(n)
        }),
        Ut = 1,
        qt = 2,
        Gt = 0,
        Vt = v(function(n, r, t) {
            for (;;) {
                if (-2 === t.$) return r;
                var e = t.d,
                    u = n,
                    a = m(n, t.b, t.c, m(Vt, n, r, t.e));
                n = u, r = a, t = e
            }
        }),
        Zt = i,
        zt = function(n) {
            return m(Vt, v(function(n, r, t) {
                return A(Zt, w(n, r), t)
            }), l, n)
        },
        Wt = O,
        Kt = v(function(n, r, t) {
            for (;;) {
                if (!t.b) return r;
                var e = t.b,
                    u = n,
                    a = A(n, t.a, r);
                n = u, r = a, t = e
            }
        }),
        Ht = function(n) {
            return m(Kt, Zt, l, n)
        },
        Yt = b(function(n, r, t, e) {
            if (e.b) {
                var u = e.a,
                    a = e.b;
                if (a.b) {
                    var i = a.a,
                        c = a.b;
                    if (c.b) {
                        var o = c.a,
                            f = c.b;
                        if (f.b) {
                            var b = f.b;
                            return A(n, u, A(n, i, A(n, o, A(n, f.a, 500 < t ? m(Kt, n, r, Ht(b)) : p(Yt, n, r, t + 1, b)))))
                        }
                        return A(n, u, A(n, i, A(n, o, r)))
                    }
                    return A(n, u, A(n, i, r))
                }
                return A(n, u, r)
            }
            return r
        }),
        Qt = v(function(n, r, t) {
            return p(Yt, n, r, 0, t)
        }),
        Jt = c(function(n, r) {
            return r.b ? m(Qt, Zt, r, n) : n
        }),
        ne = function(n) {
            return m(Qt, Jt, l, n)
        },
        re = c(function(t, n) {
            return m(Qt, c(function(n, r) {
                return A(Zt, t(n), r)
            }), l, n)
        }),
        te = c(function(n, r) {
            return ne(A(re, n, r))
        }),
        ee = v(function(n, r, t) {
            for (;;) {
                if (1 <= E(n, r)) return t;
                var e = n,
                    u = r - 1,
                    a = A(Zt, r, t);
                n = e, r = u, t = a
            }
        }),
        ue = c(function(n, r) {
            return m(ee, n, r, l)
        }),
        ae = function(n) {
            return {
                $: 0,
                a: n
            }
        },
        ie = {
            $: 1
        },
        ce = En,
        oe = z,
        fe = function(t) {
            return A(te, function(r) {
                return A(re, function(n) {
                    return m(Xt, m(ce, r, n, -1), t, m(oe, 0, 0, -1))
                }, A(ue, -1, 1))
            }, A(ue, -1, 1))
        },
        be = gn,
        se = m(z, 1, 0, 0),
        ve = m(z, 0, 1, 0),
        le = m(z, 0, 0, 1),
        de = c(function(n, r) {
            switch (n) {
                case 0:
                    return A(be, r, se);
                case 1:
                    return A(be, r, ve);
                default:
                    return A(be, r, le)
            }
        }),
        he = mn,
        me = cn,
        ge = v(function(n, r, t) {
            var e = A(de, n, r);
            return R(t, {
                bR: A(me, e, t.bR),
                cd: A(he, e, t.cd)
            })
        }),
        Ae = A(te, function(n) {
            switch (n) {
                case 1:
                    return fe(n);
                case 3:
                    return A(re, A(ge, 0, 3.141592653589793), fe(n));
                case 2:
                    return A(re, A(ge, 0, 1.5707963267948966), fe(n));
                case 5:
                    return A(re, A(ge, 0, -1.5707963267948966), fe(n));
                case 4:
                    return A(re, A(ge, 1, -1.5707963267948966), fe(n));
                default:
                    return A(re, A(ge, 1, 1.5707963267948966), fe(n))
            }
        }, h([0, 1, 2, 3, 4, 5])),
        pe = B,
        Te = N,
        Ee = nn,
        $e = function(n) {
            return {
                a3: n[0],
                a4: n[1],
                a6: n[2]
            }
        },
        ye = on,
        we = c(function(n, r) {
            var t = n / 2,
                e = Te(t),
                u = pe(t),
                a = $e(Ee(r));
            return p(ye, a.a3 * e, a.a4 * e, a.a6 * e, u)
        }),
        Fe = p(ye, 0, 0, 0, 1),
        _e = function(n) {
            return {
                a3: n[0],
                a4: n[1],
                a6: n[2],
                cj: n[3]
            }
        },
        Re = c(function(n, r) {
            var t = _e(r),
                e = _e(n);
            return p(ye, e.a3 * t.cj + e.a4 * t.a6 - e.a6 * t.a4 + e.cj * t.a3, -e.a3 * t.a6 + e.a4 * t.cj + e.a6 * t.a3 + e.cj * t.a4, e.a3 * t.a4 - e.a4 * t.a3 + e.a6 * t.cj + e.cj * t.a6, -e.a3 * t.a3 - e.a4 * t.a4 - e.a6 * t.a6 + e.cj * t.cj)
        }),
        Se = A(Re, A(we, -.95531661779, se), A(Re, A(we, .7853981633974483, ve), Fe)),
        xe = {
            $: 0
        },
        Le = {
            ax: Ae,
            az: 2,
            bq: ie,
            aD: 0,
            aX: Se,
            aZ: xe,
            ca: 0,
            a2: 0
        },
        je = S,
        Ce = b(function(n, r, t, e) {
            return {
                $: 0,
                a: n,
                b: r,
                c: t,
                d: e
            }
        }),
        Oe = P,
        Ie = c(function(n, r) {
            return U(r) / U(n)
        }),
        Be = Oe(A(Ie, 2, 32)),
        Ne = [],
        ke = p(Ce, 0, Be, Ne, Ne),
        Pe = j,
        De = c(function(n, r) {
            for (;;) {
                var t = A(Pe, 32, n),
                    e = t.b,
                    u = A(Zt, {
                        $: 0,
                        a: t.a
                    }, r);
                if (!e.b) return Ht(u);
                n = e, r = u
            }
        }),
        Xe = function(n) {
            return n.a
        },
        Me = c(function(n, r) {
            for (;;) {
                var t = Oe(r / 32);
                if (1 === t) return A(Pe, 32, n).a;
                n = A(De, n, l), r = t
            }
        }),
        Ue = D,
        qe = c(function(n, r) {
            return 0 < E(n, r) ? n : r
        }),
        Ge = function(n) {
            return n.length
        },
        Ve = c(function(n, r) {
            if (r.b) {
                var t = 32 * r.b,
                    e = Ue(A(Ie, 32, t - 1)),
                    u = n ? Ht(r.e) : r.e,
                    a = A(Me, u, r.b);
                return p(Ce, Ge(r.d) + t, A(qe, 5, e * Be), a, r.d)
            }
            return p(Ce, Ge(r.d), Be, Ne, r.d)
        }),
        Ze = L,
        ze = t(function(n, r, t, e, u) {
            for (;;) {
                if (r < 0) return A(Ve, !1, {
                    e: e,
                    b: t / 32 | 0,
                    d: u
                });
                var a = {
                    $: 1,
                    a: m(Ze, 32, r, n)
                };
                n = n, r = r - 32, t = t, e = A(Zt, a, e), u = u
            }
        }),
        We = c(function(n, r) {
            if (0 < n) {
                var t = n % 32;
                return s(ze, r, n - t - 32, n, l, m(Ze, t, n - t, r))
            }
            return ke
        }),
        Ke = function(n) {
            return {
                $: 1,
                a: n
            }
        },
        He = function(n) {
            return {
                $: 0,
                a: n
            }
        },
        Ye = function(n) {
            return !n.$
        },
        Qe = c(function(n, r) {
            return {
                $: 3,
                a: n,
                b: r
            }
        }),
        Je = c(function(n, r) {
            return {
                $: 0,
                a: n,
                b: r
            }
        }),
        nu = c(function(n, r) {
            return {
                $: 1,
                a: n,
                b: r
            }
        }),
        ru = function(n) {
            return {
                $: 2,
                a: n
            }
        },
        tu = _n,
        eu = function(n) {
            var r = n.charCodeAt(0);
            return r ? ae(r < 55296 || 56319 < r ? w(_(n[0]), n.slice(1)) : w(_(n[0] + n[1]), n.slice(2))) : ie
        },
        uu = qn,
        au = xn,
        iu = function(n) {
            return {
                $: 1,
                a: n
            }
        },
        cu = function(n) {
            return {
                $: 0,
                a: n
            }
        },
        ou = A(au, function(n) {
            switch (n) {
                case "red":
                    return cu(0);
                case "white":
                    return cu(2);
                case "blue":
                    return cu(3);
                case "orange":
                    return cu(4);
                case "yellow":
                    return cu(5);
                case "green":
                    return cu(1);
                default:
                    return iu("Unknown color: " + n)
            }
        }, {
            $: 6
        }),
        fu = {
            $: 4
        },
        bu = function(n) {
            return {
                $: 7,
                b: n
            }
        },
        su = function(n) {
            var r = new Float64Array(16);
            return r[0] = n.bx, r[1] = n.bB, r[2] = n.bF, r[3] = n.bJ, r[4] = n.by, r[5] = n.bC, r[6] = n.bG, r[7] = n.bK, r[8] = n.bz, r[9] = n.bD, r[10] = n.bH, r[11] = n.bL, r[12] = n.bA, r[13] = n.bE, r[14] = n.bI, r[15] = n.bM, r
        },
        vu = A(au, function(n) {
            if (n.b && n.b.b && n.b.b.b && n.b.b.b.b && n.b.b.b.b.b && n.b.b.b.b.b.b && n.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b && n.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b && !n.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) {
                var r = n.b,
                    t = r.b,
                    e = t.b,
                    u = e.b,
                    a = u.b,
                    i = a.b,
                    c = i.b,
                    o = c.b,
                    f = o.b,
                    b = f.b,
                    s = b.b,
                    v = s.b,
                    l = v.b,
                    d = l.b;
                return cu(su({
                    bx: n.a,
                    by: u.a,
                    bz: o.a,
                    bA: v.a,
                    bB: r.a,
                    bC: a.a,
                    bD: f.a,
                    bE: l.a,
                    bF: t.a,
                    bG: i.a,
                    bH: b.a,
                    bI: d.a,
                    bJ: e.a,
                    bK: c.a,
                    bL: s.a,
                    bM: d.b.a
                }))
            }
            return iu("Wrong number of matrix components")
        }, bu(fu)),
        lu = A(au, function(n) {
            if (n.b && n.b.b && n.b.b.b && !n.b.b.b.b) {
                var r = n.b;
                return cu(m(oe, n.a, r.a, r.b.a))
            }
            return iu("Wrong number of vector components")
        }, bu(fu)),
        du = Rn,
        hu = Cn,
        mu = p(hu, Xt, A(du, "transform", vu), A(du, "color", ou), A(du, "normal", lu)),
        gu = A(au, function(n) {
            if (n.b && n.b.b && n.b.b.b && n.b.b.b.b && !n.b.b.b.b.b) {
                var r = n.b,
                    t = r.b;
                return cu(p(ye, n.a, r.a, t.a, t.b.a))
            }
            return iu("Wrong number of vector components")
        }, bu(fu)),
        Au = {
            $: 3
        },
        pu = g(In, t(function(n, r, t, e, u) {
            return R(Le, {
                ax: u,
                az: t,
                aD: r,
                aX: e,
                aZ: Au,
                a2: n
            })
        }), A(du, "width", fu), A(du, "height", fu), A(du, "devicePixelRatio", fu), A(du, "rotation", gu), A(du, "cubik", bu(mu))),
        Tu = function(n) {
            return {
                $: 6,
                a: n
            }
        },
        Eu = c(function(n, r) {
            return {
                $: 1,
                a: n,
                b: r
            }
        }),
        $u = function(n) {
            return n
        },
        yu = zn,
        wu = yu(0),
        Fu = Hn,
        _u = c(function(r, n) {
            return A(Fu, function(n) {
                return yu(r(n))
            }, n)
        }),
        Ru = v(function(t, n, e) {
            return A(Fu, function(r) {
                return A(Fu, function(n) {
                    return yu(A(t, r, n))
                }, e)
            }, n)
        }),
        Su = function(n) {
            return m(Qt, Ru(Zt), yu(l), n)
        },
        xu = sr,
        Lu = c(function(n, r) {
            var t = r;
            return nr(A(Fu, xu(n), t))
        });
    or.Task = fr(wu, v(function(n, r) {
        return A(_u, function() {
            return 0
        }, Su(A(re, Lu(n), r)))
    }), v(function() {
        return yu(0)
    }), c(function(n, r) {
        return A(_u, n, r)
    }));
    var ju, Cu = lr("Task"),
        Ou = c(function(n, r) {
            return Cu(A(_u, n, r))
        }),
        Iu = Ln,
        Bu = jn,
        Nu = function(n) {
            switch (n.$) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                default:
                    return 3
            }
        },
        ku = function(n) {
            return n.length
        },
        Pu = Fn,
        Du = c(function(n, r) {
            return n < 1 ? r : m(Pu, n, ku(r), r)
        }),
        Xu = c(function(n, r) {
            return n < 1 ? "" : m(Pu, 0, n, r)
        }),
        Mu = ot(function() {
            return {
                aY: ft(),
                ci: {
                    a3: at.pageXOffset,
                    a4: at.pageYOffset,
                    a2: ut.documentElement.clientWidth,
                    aD: ut.documentElement.clientHeight
                }
            }
        }),
        Uu = dr,
        qu = c(function(n, r) {
            return r.$ ? n : r.a
        }),
        Gu = v(function(n, r, t) {
            return n(r(t))
        }),
        Vu = Yn,
        Zu = c(function(n, r) {
            return Cu(A(Vu, A(Gu, A(Gu, yu, n), Ke), A(Fu, A(Gu, A(Gu, yu, n), He), r)))
        }),
        zu = Nn,
        Wu = {
            bp: !0,
            Z: 10497,
            bN: 9729,
            _: 9986,
            af: 10497
        },
        Ku = {
            $: 0
        },
        Hu = c(function(n, r) {
            return {
                $: 1,
                a: n,
                b: r
            }
        }),
        Yu = c(function(n, u) {
            var r = n.bN,
                t = n._,
                e = n.Z,
                a = n.af,
                i = n.bp;
            return p(b(function(n, r, t, e) {
                return g(st, n, r, t, e, i, u)
            }), r, t, e, a)
        }),
        Qu = Uu(l),
        Ju = function(n) {
            return n < 0 ? -n : n
        },
        na = v(function(n, r, t) {
            if (n.$) {
                var e = n.a;
                return Ju(t - r) / e
            }
            return n.a
        }),
        ra = c(function(n, r) {
            var t, e = r.ao,
                u = r.g,
                a = m(na, r.f, r.c, r.a);
            return o((t = r).c, t.a) || -1 < E(n, e + u + a)
        }),
        ta = v(function(n, r, t) {
            return w(A(ra, t.ca, n) ? R(t, {
                aX: Se,
                aZ: xe
            }) : t, Qu)
        }),
        ea = c(function(n, r) {
            return w(R(r, {
                aX: A(Re, A(we, .003 * n, ve), r.aX)
            }), Qu)
        }),
        ua = function(n) {
            return {
                $: 5,
                a: n
            }
        },
        aa = v(function(n, r, t) {
            return {
                u: r,
                ag: n,
                au: t
            }
        }),
        ia = c(function(n, r) {
            return {
                $: 0,
                a: n,
                b: r
            }
        }),
        ca = function(n) {
            var r = n.b;
            return A(ia, 1664525 * n.a + r >>> 0, r)
        },
        oa = function(n) {
            var r = n.a,
                t = 277803737 * (r ^ r >>> 4 + (r >>> 28));
            return (t >>> 22 ^ t) >>> 0
        },
        fa = c(function(t, i) {
            return function(n) {
                var r = E(t, i) < 0 ? w(t, i) : w(i, t),
                    e = r.a,
                    u = r.b - e + 1;
                if (u - 1 & u) {
                    var a = (-u >>> 0) % u >>> 0;
                    return function(n) {
                        for (;;) {
                            var r = oa(n),
                                t = ca(n);
                            if (0 <= E(r, a)) return w(r % u + e, t);
                            n = t
                        }
                    }(n)
                }
                return w(((u - 1 & oa(n)) >>> 0) + e, ca(n))
            }
        }),
        ba = m(v(function(a, n, r) {
            var i = n,
                c = r;
            return function(n) {
                var r = i(n),
                    t = r.a,
                    e = c(r.b),
                    u = e.b;
                return w(A(a, t, e.a), u)
            }
        }), c(function(n, r) {
            return 1 === r ? 3.141592653589793 * n / 2 : 3.141592653589793 * n / -2
        }), A(fa, 1, 2), A(fa, 0, 1)),
        sa = c(function(e, n) {
            var u = n;
            return function(n) {
                var r = u(n),
                    t = r.b;
                return w(e(r.a), t)
            }
        }),
        va = A(sa, function(n) {
            switch (n) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                default:
                    return 2
            }
        }, A(fa, 0, 2)),
        la = p(b(function(c, n, r, t) {
            var o = n,
                f = r,
                b = t;
            return function(n) {
                var r = o(n),
                    t = r.a,
                    e = f(r.b),
                    u = e.a,
                    a = b(e.b),
                    i = a.b;
                return w(m(c, t, u, a.a), i)
            }
        }), aa, va, ba, A(fa, -1, 1)),
        da = v(function(n, r, t) {
            return r(n(t))
        }),
        ha = c(function(e, n) {
            var u = n;
            return function(n) {
                var r = u(n),
                    t = r.b;
                return e(r.a)(t)
            }
        }),
        ma = function(n) {
            return n ? A(da, ha(function(r) {
                return A(sa, function(n) {
                    return A(Zt, n, r)
                }, la)
            }), ma(n - 1)) : $u
        },
        ga = $u,
        Aa = (ju = ga, Kn(function(n) {
            n(zn(ju(Date.now())))
        })),
        pa = A(Fu, function(n) {
            return yu(function(n) {
                var r = ca(A(ia, 0, 1013904223));
                return ca(A(ia, r.a + n >>> 0, r.b))
            }(n))
        }, Aa),
        Ta = c(function(n, r) {
            return n(r)
        }),
        Ea = v(function(n, r, t) {
            if (r.b) {
                var e = r.b,
                    u = A(Ta, r.a, t),
                    a = u.b;
                return A(Fu, function() {
                    return m(Ea, n, e, a)
                }, A(xu, n, u.a))
            }
            return yu(t)
        });
    or.Random = fr(pa, Ea, v(function(n, r, t) {
        return yu(t)
    }), c(function(n, r) {
        return A(sa, n, r)
    }));
    var $a, ya, wa = lr("Random"),
        Fa = c(function(n, r) {
            return wa(A(sa, n, r))
        }),
        _a = v(function(n, r, t) {
            return A(ra, t.ca, n) ? w(R(t, {
                aX: Se
            }), A(Fa, ua, A(ma, 32 - 1, A(sa, function(n) {
                return h([n])
            }, la)))) : w(t, Qu)
        }),
        Ra = Gn,
        Sa = Gn,
        xa = c(function(n, r) {
            return Gn(m(Kt, function(t) {
                return c(function(n, r) {
                    return r.push(Vn(t(n))), r
                })
            }(n), [], r))
        }),
        La = function(n) {
            return {
                bx: n[0],
                bB: n[1],
                bF: n[2],
                bJ: n[3],
                by: n[4],
                bC: n[5],
                bG: n[6],
                bK: n[7],
                bz: n[8],
                bD: n[9],
                bH: n[10],
                bL: n[11],
                bA: n[12],
                bE: n[13],
                bI: n[14],
                bM: n[15]
            }
        },
        ja = function(n) {
            return Gn(m(Kt, c(function(n, r) {
                return m(Zn, n.a, n.b, r)
            }), {}, n))
        },
        Ca = function(n) {
            return ja(h([w("transform", (r = n.cd, t = La(r), A(xa, Sa, h([t.bx, t.bB, t.bF, t.bJ, t.by, t.bC, t.bG, t.bK, t.bz, t.bD, t.bH, t.bL, t.bA, t.bE, t.bI, t.bM])))), w("color", function(n) {
                switch (n) {
                    case 0:
                        return Ra("red");
                    case 2:
                        return Ra("white");
                    case 3:
                        return Ra("blue");
                    case 4:
                        return Ra("orange");
                    case 5:
                        return Ra("yellow");
                    default:
                        return Ra("green")
                }
            }(n.be)), w("normal", function(n) {
                var r = $e(n);
                return A(xa, Sa, h([r.a3, r.a4, r.a6]))
            }(n.bR))]));
            var r, t
        },
        Oa = function(n) {
            var r = n.aX;
            return A(uu, 2, ja(h([w("cubik", A(xa, Ca, n.ax)), w("rotation", function(n) {
                var r = _e(n);
                return A(xa, Sa, h([r.a3, r.a4, r.a6, r.cj]))
            }(r))])))
        },
        Ia = (ya = Ra, gr($a = "save"), or[$a] = {
            e: Ar,
            r: ya,
            a: pr
        }, lr($a)),
        Ba = function(n) {
            return A(me, n.cd, m(oe, 0, 0, -.45))
        },
        Na = X,
        ka = function(n) {
            return n[0]
        },
        Pa = function(n) {
            return n[1]
        },
        Da = function(n) {
            return n[2]
        },
        Xa = c(function(n, r) {
            switch (n) {
                case 0:
                    return Na(ka(Ba(r)));
                case 1:
                    return Na(Pa(Ba(r)));
                default:
                    return Na(Da(Ba(r)))
            }
        }),
        Ma = c(function(n, r) {
            var t = n.au,
                e = n.ag,
                u = n.u;
            return A(re, function(n) {
                return o(A(Xa, e, n), t) ? m(ge, e, u, n) : n
            }, r)
        }),
        Ua = v(function(n, r, t) {
            return {
                $: 7,
                a: n,
                b: r,
                c: t
            }
        }),
        qa = function(n) {
            switch (n) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                case 4:
                    return 4;
                default:
                    return 5
            }
        },
        Ga = function(n) {
            var r = $e(n),
                t = r.a4,
                e = r.a6;
            return F(Na(r.a3), Na(t), Na(e))
        },
        Va = $,
        Za = c(function(n, r) {
            n: for (;;) {
                if (-2 === r.$) return ie;
                var t = r.c,
                    e = r.d,
                    u = r.e;
                switch (A(Va, n, r.b)) {
                    case 0:
                        n = n, r = e;
                        continue n;
                    case 1:
                        return ae(t);
                    default:
                        n = n, r = u;
                        continue n
                }
            }
        }),
        za = t(function(n, r, t, e, u) {
            return {
                $: -1,
                a: n,
                b: r,
                c: t,
                d: e,
                e: u
            }
        }),
        Wa = {
            $: -2
        },
        Ka = t(function(n, r, t, e, u) {
            if (-1 !== u.$ || u.a) {
                if (-1 !== e.$ || e.a || -1 !== e.d.$ || e.d.a) return s(za, n, r, t, e, u);
                var a = e.d;
                b = e.e;
                return s(za, 0, e.b, e.c, s(za, 1, a.b, a.c, a.d, a.e), s(za, 1, r, t, b, u))
            }
            var i = u.b,
                c = u.c,
                o = u.d,
                f = u.e;
            if (-1 !== e.$ || e.a) return s(za, n, i, c, s(za, 0, r, t, e, o), f);
            var b;
            return s(za, 0, r, t, s(za, 1, e.b, e.c, e.d, b = e.e), s(za, 1, i, c, o, f))
        }),
        Ha = v(function(n, r, t) {
            if (-2 === t.$) return s(za, 0, n, r, Wa, Wa);
            var e = t.a,
                u = t.b,
                a = t.c,
                i = t.d,
                c = t.e;
            switch (A(Va, n, u)) {
                case 0:
                    return s(Ka, e, u, a, m(Ha, n, r, i), c);
                case 1:
                    return s(za, e, u, r, i, c);
                default:
                    return s(Ka, e, u, a, i, m(Ha, n, r, c))
            }
        }),
        Ya = v(function(n, r, t) {
            var e = m(Ha, n, r, t);
            if (-1 !== e.$ || e.a) return e;
            return s(za, 1, e.b, e.c, e.d, e.e)
        }),
        Qa = Wa,
        Ja = c(function(n, r) {
            n: for (;;) {
                if (r.b) {
                    var t = r.a.be,
                        e = r.b,
                        u = Ga(r.a.bR),
                        a = qa(t),
                        i = A(Za, a, n);
                    if (i.$) {
                        n = m(Ya, qa(t), u, n), r = e;
                        continue n
                    }
                    if (o(u, i.a)) {
                        n = n, r = e;
                        continue n
                    }
                    return !1
                }
                return !0
            }
        })(Qa),
        ni = u(function(n, r, t, e, u, a, i) {
            return {
                g: r,
                f: t,
                o: u,
                c: a,
                m: e,
                ao: n,
                a: i
            }
        }),
        ri = function(n) {
            return {
                $: 0,
                a: n
            }
        },
        ti = ri(750),
        ei = function(n) {
            return (1 - pe(3.141592653589793 * n)) / 2
        },
        ui = function(n) {
            return a(ni, n, 0, ti, ie, ei, 0, 1)
        },
        ai = c(function(n, r) {
            return R(r, {
                f: ri(n)
            })
        }),
        ii = c(function(n, r) {
            return R(r, {
                m: ie,
                a: n
            })
        }),
        ci = t(function(n, r, t, e, u) {
            if (A(ra, u.ca, t)) {
                var a = R(u, {
                    ax: A(Ma, n, u.ax)
                });
                if (r.b) {
                    var i = r.a;
                    return w(R(a, {
                        aZ: m(Ua, i, r.b, A(ai, 200, A(ii, i.u, ui(u.ca))))
                    }), Qu)
                }
                return Ja(a.ax) ? w(R(a, {
                    aZ: (c = A(ai, 300, ui(u.ca)), {
                        $: 2,
                        a: c
                    })
                }), Ia("")) : w(R(a, {
                    aZ: Au
                }), Ia(Oa(a)))
            }
            return w(u, Qu);
            var c
        }),
        oi = function(n) {
            switch (n.$) {
                case 0:
                    return ae(ea);
                case 1:
                    return ae(_a(n.a));
                case 2:
                    return ae(ta(n.a));
                case 7:
                    return ae(m(ci, n.a, n.b, n.c));
                default:
                    return ie
            }
        },
        fi = c(function(n) {
            return n
        }),
        bi = c(function(n, r) {
            return r.$ ? ie : ae(n(r.a))
        }),
        si = c(function(n, r) {
            return r.$ ? n : r.a
        }),
        vi = c(function(n, r) {
            return A(si, !1, A(bi, fi(!0), n(r.aZ)))
        }),
        li = function(n) {
            return {
                $: 0,
                a: n
            }
        },
        di = function(n) {
            return {
                $: 1,
                a: n
            }
        },
        hi = v(function(n, r, t) {
            return {
                ak: t,
                aW: r,
                a_: n
            }
        }),
        mi = yu(m(hi, l, ie, 0)),
        gi = Kn(function(n) {
            n(zn(Date.now()))
        }),
        Ai = Kn(function(n) {
            var r = requestAnimationFrame(function() {
                n(zn(Date.now()))
            });
            return function() {
                cancelAnimationFrame(r)
            }
        }),
        pi = vr,
        Ti = function(t) {
            return Kn(function(n) {
                var r = t.f;
                2 === r.$ && r.c && r.c(), t.f = null, n(zn(y))
            })
        },
        Ei = nr;
    or["Browser.AnimationManager"] = fr(mi, v(function(n, t, r) {
        var e = r.aW,
            u = r.ak,
            a = w(e, t);
        if (1 === a.a.$) {
            if (a.b.b) {
                return A(Fu, function(r) {
                    return A(Fu, function(n) {
                        return yu(m(hi, t, ae(r), n))
                    }, gi)
                }, Ei(A(Fu, pi(n), Ai)))
            }
            return mi
        }
        return a.b.b ? yu(m(hi, t, e, u)) : A(Fu, function() {
            return mi
        }, Ti(a.a.a))
    }), v(function(r, t, n) {
        var e = n.a_,
            u = n.ak,
            a = function(n) {
                return A(xu, r, n.$ ? (0, n.a)(t - u) : (0, n.a)(ga(t)))
            };
        return A(Fu, function(n) {
            return A(Fu, function() {
                return yu(m(hi, e, ae(n), t))
            }, Su(A(re, a, e)))
        }, Ei(A(Fu, pi(r), Ai)))
    }), 0, c(function(n, r) {
        return r.$ ? di(A(Gu, n, r.a)) : {
            $: 0,
            a: A(Gu, n, r.a)
        }
    }));
    var $i = lr("Browser.AnimationManager"),
        yi = function(n) {
            return $i(di(n))
        },
        wi = v(function(n, r, t) {
            return {
                $: 0,
                a: n,
                b: r,
                c: t
            }
        }),
        Fi = c(function(n, r) {
            return {
                aP: r,
                a_: n
            }
        }),
        _i = yu(A(Fi, l, Qa)),
        Ri = function(n) {
            var r = n.b;
            return w(x(function(n) {
                return n ? "w_" : "d_"
            }(n.a), r), n)
        },
        Si = c(function(n, r) {
            return {
                aB: r,
                aF: n
            }
        }),
        xi = v(function(r, t, n) {
            return A(_u, function(n) {
                return w(t, n)
            }, m(it, n.a ? at : ut, n.b, function(n) {
                return A(pi, r, A(Si, t, n))
            }))
        }),
        Li = function(n) {
            return m(Kt, c(function(n, r) {
                return m(Ya, n.a, n.b, r)
            }), Qa, n)
        },
        ji = v(function(n, r, t) {
            for (;;) {
                if (-2 === t.$) return r;
                var e = t.e,
                    u = n,
                    a = m(n, t.b, t.c, m(ji, n, r, t.d));
                n = u, r = a, t = e
            }
        }),
        Ci = e(function(f, b, s, n, r, t) {
            var e = m(ji, v(function(n, r, t) {
                    n: for (;;) {
                        var e = t.a,
                            u = t.b;
                        if (e.b) {
                            var a = e.a,
                                i = a.a,
                                c = a.b,
                                o = e.b;
                            if (E(i, n) < 0) {
                                n = n, r = r, t = w(o, m(f, i, c, u));
                                continue n
                            }
                            return 0 < E(i, n) ? w(e, m(s, n, r, u)) : w(o, p(b, i, c, r, u))
                        }
                        return w(e, m(s, n, r, u))
                    }
                }), w(zt(n), t), r),
                u = e.a,
                a = e.b;
            return m(Kt, c(function(n, r) {
                return m(f, n.a, n.b, r)
            }), a, u)
        }),
        Oi = c(function(n, r) {
            return m(ji, Ya, r, n)
        }),
        Ii = v(function(u, n, r) {
            var t = v(function(n, r, t) {
                    var e = t.c;
                    return F(t.a, t.b, A(Zt, m(xi, u, n, r), e))
                }),
                e = v(function(n, r, t) {
                    var e = t.b,
                        u = t.c;
                    return F(A(Zt, r, t.a), e, u)
                }),
                a = b(function(n, r, t, e) {
                    var u = e.c;
                    return F(e.a, m(Ya, n, r, e.b), u)
                }),
                i = A(re, Ri, n),
                c = g(Ci, e, a, t, r.aP, Li(i), F(l, Qa, l)),
                o = c.b,
                f = c.c;
            return A(Fu, function(n) {
                return yu(A(Fi, i, A(Oi, o, Li(n))))
            }, A(Fu, function() {
                return Su(f)
            }, Su(A(re, Ti, c.a))))
        }),
        Bi = v(function(n, r, t) {
            var e = n(r);
            return e.$ ? t : A(Zt, e.a, t)
        }),
        Ni = c(function(n, r) {
            return m(Qt, Bi(n), l, r)
        });
    or["Browser.Events"] = fr(_i, Ii, v(function(n, r, t) {
        var e = r.aF,
            u = r.aB,
            a = A(Ni, function(n) {
                var r = n.b,
                    t = r.c;
                return o(n.a, e) ? A(ct, t, u) : ie
            }, t.a_);
        return A(Fu, function() {
            return yu(t)
        }, Su(A(re, xu(n), a)))
    }), 0, c(function(n, r) {
        return m(wi, r.a, r.b, A(Iu, n, r.c))
    }));
    var ki, Pi, Di, Xi, Mi, Ui, qi, Gi, Vi, Zi, zi = lr("Browser.Events"),
        Wi = v(function(n, r, t) {
            return zi(m(wi, n, r, t))
        }),
        Ki = {
            $: 2
        },
        Hi = c(function(t, n) {
            return m(Qt, c(function(n, r) {
                return t(n) ? A(Zt, n, r) : r
            }), l, n)
        }),
        Yi = dr,
        Qi = function(n) {
            return n.b
        },
        Ji = v(function(n, r, t) {
            return A(si, w(t, Qu), A(bi, function(n) {
                return A(n, r, t)
            }, n(t.aZ)))
        }),
        nc = m(oe, 0, 0, -11),
        rc = W,
        tc = an,
        ec = en,
        uc = rn,
        ac = H,
        ic = v(function(n, r, t) {
            var e = t.a,
                u = t.c,
                a = A(ac, t.b, e),
                i = A(tc, r, a),
                c = A(ac, u, e),
                o = A(ec, c, i);
            if (E(o, 1e-6) < 0) return ie;
            var f = A(ac, n, e),
                b = A(ec, f, i);
            if (b < 0 || 0 < E(b, o)) return ie;
            var s = A(tc, f, c),
                v = A(ec, r, s);
            return v < 0 || 0 < E(b + v, o) ? ie : ae(A(rc, n, A(uc, A(ec, a, s) / o, r)))
        }),
        cc = function(n) {
            if (n.b) {
                return ae(n.a)
            }
            return ie
        },
        oc = c(function(n, r) {
            return cc(A(Ni, A(ic, nc, n), h([F(A(me, r, m(oe, -.5, .5, -.5)), A(me, r, m(oe, -.5, -.5, -.5)), A(me, r, m(oe, .5, .5, -.5))), F(A(me, r, m(oe, .5, .5, -.5)), A(me, r, m(oe, -.5, -.5, -.5)), A(me, r, m(oe, .5, -.5, -.5)))])))
        }),
        fc = m(oe, 0, 0, 0),
        bc = m(oe, 0, -2, 0),
        sc = m(oe, 0, -2, -18),
        vc = v(function(n, r, t) {
            return A(rc, r, A(uc, n, A(ac, t, r)))
        }),
        lc = $n,
        dc = v(function(n, r, t) {
            return E(t, n) < 0 ? n : 0 < E(t, r) ? r : t
        }),
        hc = c(function(r, n) {
            var t = n.ao,
                e = n.m,
                u = n.c,
                a = n.a,
                i = n.o,
                c = m(dc, 0, 1, (r - t - n.g) / m(na, n.f, u, a));
            return u + (a - u) * i(c) + function() {
                if (1 === e.$) return 0;
                var n = e.a * (r - t);
                return n - n * ei(c)
            }()
        }),
        mc = function(n) {
            var r = n.aZ;
            switch (r.$) {
                case 0:
                    return m(lc, sc, bc, ve);
                case 1:
                    return m(lc, m(vc, A(hc, n.ca, t = r.a), sc, nc), m(vc, A(hc, n.ca, t), bc, fc), ve);
                case 2:
                    var t;
                    return m(lc, m(vc, A(hc, n.ca, t = r.a), nc, sc), m(vc, A(hc, n.ca, t), fc, bc), ve);
                default:
                    return m(lc, nc, fc, ve)
            }
        },
        gc = dn,
        Ac = function(n) {
            return p(gc, 45, n.a2 / n.aD, .01, 100)
        },
        pc = fn,
        Tc = c(function(n, r) {
            var t = La(n);
            return p(ye, A(pc, p(ye, t.bx, t.by, t.bz, t.bA), r), A(pc, p(ye, t.bB, t.bC, t.bD, t.bE), r), A(pc, p(ye, t.bF, t.bG, t.bH, t.bI), r), A(pc, p(ye, t.bJ, t.bK, t.bL, t.bM), r))
        }),
        Ec = vn,
        $c = function(n) {
            var r = new Float64Array(16);
            r[0] = n[5] * n[10] * n[15] - n[5] * n[11] * n[14] - n[9] * n[6] * n[15] + n[9] * n[7] * n[14] + n[13] * n[6] * n[11] - n[13] * n[7] * n[10], r[4] = -n[4] * n[10] * n[15] + n[4] * n[11] * n[14] + n[8] * n[6] * n[15] - n[8] * n[7] * n[14] - n[12] * n[6] * n[11] + n[12] * n[7] * n[10], r[8] = n[4] * n[9] * n[15] - n[4] * n[11] * n[13] - n[8] * n[5] * n[15] + n[8] * n[7] * n[13] + n[12] * n[5] * n[11] - n[12] * n[7] * n[9], r[12] = -n[4] * n[9] * n[14] + n[4] * n[10] * n[13] + n[8] * n[5] * n[14] - n[8] * n[6] * n[13] - n[12] * n[5] * n[10] + n[12] * n[6] * n[9], r[1] = -n[1] * n[10] * n[15] + n[1] * n[11] * n[14] + n[9] * n[2] * n[15] - n[9] * n[3] * n[14] - n[13] * n[2] * n[11] + n[13] * n[3] * n[10], r[5] = n[0] * n[10] * n[15] - n[0] * n[11] * n[14] - n[8] * n[2] * n[15] + n[8] * n[3] * n[14] + n[12] * n[2] * n[11] - n[12] * n[3] * n[10], r[9] = -n[0] * n[9] * n[15] + n[0] * n[11] * n[13] + n[8] * n[1] * n[15] - n[8] * n[3] * n[13] - n[12] * n[1] * n[11] + n[12] * n[3] * n[9], r[13] = n[0] * n[9] * n[14] - n[0] * n[10] * n[13] - n[8] * n[1] * n[14] + n[8] * n[2] * n[13] + n[12] * n[1] * n[10] - n[12] * n[2] * n[9], r[2] = n[1] * n[6] * n[15] - n[1] * n[7] * n[14] - n[5] * n[2] * n[15] + n[5] * n[3] * n[14] + n[13] * n[2] * n[7] - n[13] * n[3] * n[6], r[6] = -n[0] * n[6] * n[15] + n[0] * n[7] * n[14] + n[4] * n[2] * n[15] - n[4] * n[3] * n[14] - n[12] * n[2] * n[7] + n[12] * n[3] * n[6], r[10] = n[0] * n[5] * n[15] - n[0] * n[7] * n[13] - n[4] * n[1] * n[15] + n[4] * n[3] * n[13] + n[12] * n[1] * n[7] - n[12] * n[3] * n[5], r[14] = -n[0] * n[5] * n[14] + n[0] * n[6] * n[13] + n[4] * n[1] * n[14] - n[4] * n[2] * n[13] - n[12] * n[1] * n[6] + n[12] * n[2] * n[5], r[3] = -n[1] * n[6] * n[11] + n[1] * n[7] * n[10] + n[5] * n[2] * n[11] - n[5] * n[3] * n[10] - n[9] * n[2] * n[7] + n[9] * n[3] * n[6], r[7] = n[0] * n[6] * n[11] - n[0] * n[7] * n[10] - n[4] * n[2] * n[11] + n[4] * n[3] * n[10] + n[8] * n[2] * n[7] - n[8] * n[3] * n[6], r[11] = -n[0] * n[5] * n[11] + n[0] * n[7] * n[9] + n[4] * n[1] * n[11] - n[4] * n[3] * n[9] - n[8] * n[1] * n[7] + n[8] * n[3] * n[5], r[15] = n[0] * n[5] * n[10] - n[0] * n[6] * n[9] - n[4] * n[1] * n[10] + n[4] * n[2] * n[9] + n[8] * n[1] * n[6] - n[8] * n[2] * n[5];
            var t = n[0] * r[0] + n[1] * r[4] + n[2] * r[8] + n[3] * r[12];
            if (0 === t) return ie;
            t = 1 / t;
            for (var e = 0; e < 16; e += 1) r[e] = r[e] * t;
            return ae(r)
        },
        yc = function(n) {
            var r = yn(n),
                t = [n[12], n[13], n[14]];
            return r[3] = r[7] = r[11] = 0, r[12] = -tn([r[0], r[4], r[8]], t), r[13] = -tn([r[1], r[5], r[9]], t), r[14] = -tn([r[2], r[6], r[10]], t), r
        },
        wc = function(n) {
            return n[0]
        },
        Fc = function(n) {
            return n[1]
        },
        _c = function(n) {
            return n[2]
        },
        Rc = c(function(n, r) {
            var t = r.a,
                e = r.b,
                u = A(si, Ec, $c(Ac(n))),
                a = A(Tc, u, p(ye, 2 * t / n.a2 - 1, 1 - 2 * e / n.aD, -1, 1)),
                i = p(ye, wc(a), Fc(a), -1, 0),
                c = A(Tc, yc(mc(n)), i),
                o = m(oe, wc(c), Fc(c), _c(c));
            return Ee(o)
        }),
        Sc = function(n) {
            var r = _e(n),
                t = r.a3,
                e = r.a4,
                u = r.a6,
                a = r.cj;
            return su({
                bx: 1 - 2 * e * e - 2 * u * u,
                by: 2 * t * e - 2 * a * u,
                bz: 2 * t * u + 2 * a * e,
                bA: 0,
                bB: 2 * t * e + 2 * a * u,
                bC: 1 - 2 * t * t - 2 * u * u,
                bD: 2 * e * u - 2 * a * t,
                bE: 0,
                bF: 2 * t * u - 2 * a * e,
                bG: 2 * e * u + 2 * a * t,
                bH: 1 - 2 * t * t - 2 * e * e,
                bI: 0,
                bJ: 0,
                bK: 0,
                bL: 0,
                bM: 1
            })
        },
        xc = T,
        Lc = c(function(n, r) {
            return cc(A(Hi, A(da, function(n) {
                return n.cd
            }, A(da, he(Sc(r.aX)), A(da, oc(A(Rc, r, n)), xc(ie)))), r.ax))
        }),
        jc = function(n) {
            return {
                $: 4,
                a: n
            }
        },
        Cc = c(function(n, r) {
            return {
                $: 5,
                a: n,
                b: r
            }
        }),
        Oc = c(function(n, r) {
            var t = A(Lc, n, r);
            return w(R(r, t.$ ? {
                aZ: jc(n)
            } : {
                aZ: A(Cc, t.a, n)
            }), Qu)
        }),
        Ic = function(n) {
            return 3 === n.$ ? ae(Oc) : ie
        },
        Bc = v(function(n, r, t) {
            var e = n.a,
                u = r.a,
                a = r.b;
            return R(t, {
                aX: A(Re, A(we, .005 * (n.b - a), se), A(Re, A(we, .005 * (u - e), ve), t.aX)),
                aZ: jc(w(u, a))
            })
        }),
        Nc = v(function(n, r, t) {
            return w(m(Bc, n, r, t), Qu)
        }),
        kc = b(function(n, r, t, e) {
            var u = A(ec, r, e);
            return 0 < E(u, -1e-6) ? ie : ae(A(rc, n, A(uc, A(ec, A(ac, t, n), e) / u, r)))
        }),
        Pc = v(function(n, r, t) {
            return 1 === r.$ ? ie : 1 === t.$ ? ie : ae(A(n, r.a, t.a))
        }),
        Dc = b(function(n, r, t, e) {
            var u = Sc(r.aX),
                a = p(kc, nc, A(Rc, r, e), A(me, u, Ba(n)), A(me, u, n.bR)),
                i = yc(u),
                c = p(kc, nc, A(Rc, r, t), A(me, u, Ba(n)), A(me, u, n.bR));
            return A(si, F(0, 0, 0), A(bi, A(da, me(i), A(da, $e, function(n) {
                return F(n.a3, n.a4, n.a6)
            })), m(Pc, ac, c, a)))
        }),
        Xc = v(function(n, r, t) {
            return {
                $: 6,
                a: n,
                b: r,
                c: t
            }
        }),
        Mc = b(function(n, r, t, e) {
            var u = p(Dc, n, e, r, t),
                a = u.a,
                i = u.b,
                c = u.c,
                o = Ga(n.bR),
                f = o.a,
                b = o.b,
                s = o.c,
                v = 1 === Ju(s) ? E(Ju(a), Ju(i)) < 0 ? w(0, s * i) : w(1, -s * a) : 1 === Ju(f) ? E(Ju(c), Ju(i)) < 0 ? w(2, -f * i) : w(1, f * c) : 1 === Ju(b) ? E(Ju(a), Ju(c)) < 0 ? w(0, -b * c) : w(2, b * a) : w(2, 0),
                l = v.a;
            return R(e, {
                aZ: m(Xc, n, {
                    u: v.b,
                    ag: l,
                    au: A(Xa, l, n)
                }, r)
            })
        }),
        Uc = I,
        qc = b(function(n, r, t, e) {
            var u = r.a,
                a = r.b,
                i = t.a,
                c = t.b;
            return w(100 < A(Uc, u - i, 2) + A(Uc, a - c, 2) ? p(Mc, n, w(u, a), w(i, c), e) : e, Qu)
        }),
        Gc = t(function(n, r, t, e, u) {
            var a = r.ag,
                i = p(Dc, n, u, t, e),
                c = i.a,
                o = i.b,
                f = i.c,
                b = Ga(n.bR),
                s = b.a,
                v = b.b,
                l = b.c,
                d = 1 === Ju(l) ? a ? -l * c : l * o : 1 === Ju(s) ? 2 === a ? -s * o : s * f : 1 === Ju(v) ? a ? v * c : -v * f : 0;
            return w(R(u, {
                aZ: m(Xc, n, R(r, {
                    u: d
                }), t)
            }), Qu)
        }),
        Vc = function(n) {
            switch (n.$) {
                case 4:
                    return ae(Nc(n.a));
                case 5:
                    return ae(A(qc, n.a, n.b));
                case 6:
                    return ae(m(Gc, n.a, n.b, n.c));
                default:
                    return ie
            }
        },
        Zc = c(function(n, r) {
            return R(r, {
                c: n,
                m: ie
            })
        }),
        zc = c(function(n, r) {
            var t = 3.141592653589793 * Na(n.u / 1.5707963267948966) / 2,
                e = A(ai, 100, A(ii, t, A(Zc, n.u, ui(r.ca))));
            return w(R(r, {
                aZ: m(Ua, R(n, {
                    u: t
                }), l, e)
            }), Qu)
        }),
        Wc = function(n) {
            switch (n.$) {
                case 0:
                    return ae(c(function(n, r) {
                        return w(R(t = r, {
                            aZ: (e = A(ai, 300, ui(t.ca)), {
                                $: 1,
                                a: e
                            })
                        }), Qu);
                        var t, e
                    }));
                case 5:
                    return ae(c(function(n, r) {
                        return w(R(r, {
                            aZ: Au
                        }), Qu)
                    }));
                case 6:
                    var t = n.b;
                    return ae(c(function(n, r) {
                        return A(zc, t, r)
                    }));
                case 4:
                    return ae(c(function(n, r) {
                        return w(R(t = r, {
                            aZ: Au
                        }), Ia(Oa(t)));
                        var t
                    }));
                default:
                    return ie
            }
        },
        Kc = c(function(n, r) {
            if (n.b) {
                var t = n.a;
                return w(R(r, {
                    aZ: m(Ua, t, n.b, A(ai, 100, A(ii, t.u, A(Zc, 0, ui(r.ca)))))
                }), Qu)
            }
            return w(r, Qu)
        }),
        Hc = c(function(n, r) {
            switch (n.$) {
                case 6:
                    return w(R(r, {
                        bq: (e = n.a, e.$ ? ie : ae(e.a))
                    }), Qu);
                case 5:
                    return A(Kc, n.a, r);
                case 1:
                    return w(R(r, {
                        aD: n.b,
                        a2: n.a
                    }), Qu);
                case 4:
                    return m(Ji, Ic, n.a, r);
                case 2:
                    return m(Ji, Vc, n.a, r);
                case 3:
                    return m(Ji, Wc, n.a, r);
                default:
                    var t = n.a;
                    return m(Ji, oi, t, R(r, {
                        ca: r.ca + t
                    }))
            }
            var e
        }),
        Yc = v(function(n, r, t) {
            return {
                be: t,
                bZ: n,
                b5: r
            }
        }),
        Qc = e(function(n, r, t, e, u, a) {
            return A(da, Zt(F(m(Yc, n, u, a), m(Yc, r, u, a), m(Yc, t, u, a))), Zt(F(m(Yc, t, u, a), m(Yc, e, u, a), m(Yc, n, u, a))))
        }),
        Jc = q,
        no = b(function(n, r, t, e) {
            var u = m(oe, .2, .2, .3),
                a = A(Jc, t, e),
                i = m(oe, 1, 1, 1),
                c = m(oe, -n, -r, 0),
                o = A(rc, m(oe, .5, -.5, -.5), c),
                f = A(rc, m(oe, .5, -.5, .5), c),
                b = A(rc, m(oe, .5, .5, -.5), c),
                s = A(rc, m(oe, .5, .5, .5), c),
                v = A(rc, m(oe, -.5, .5, .5), c),
                l = A(rc, m(oe, -.5, .5, -.5), c),
                d = A(rc, m(oe, -.5, -.5, .5), c),
                h = A(rc, m(oe, -.5, -.5, -.5), c);
            return A(da, g(Qc, l, b, s, v, a, u), A(da, g(Qc, s, b, o, f, a, u), A(da, g(Qc, d, v, s, f, a, u), A(da, g(Qc, b, l, h, o, a, i), A(da, g(Qc, h, l, v, d, a, u), g(Qc, o, h, d, f, a, u))))))
        }),
        ro = c(function(n, r) {
            return {
                $: 2,
                a: n,
                b: r
            }
        })({
            p: 3,
            q: 0,
            s: 4
        }),
        to = wn,
        eo = c(function(n, r) {
            return !A(Za, n, r).$
        }),
        uo = v(function(n, r, t) {
            return {
                cj: t,
                a3: n,
                a4: r
            }
        }),
        ao = Li(h([w("e", m(uo, 0, 0, 3)), w("q", m(uo, 4, 0, 3)), w("Y", m(uo, 8, 0, 5)), w("l", m(uo, 14, 0, 1)), w("щ", m(uo, 16, 0, 6)), w("ш", m(uo, 23, 0, 5)), w("fi", m(uo, 29, 0, 4)), w("k", m(uo, 34, 0, 3)), w("X", m(uo, 38, 0, 5)), w("p", m(uo, 44, 0, 3)), w("d", m(uo, 48, 0, 3)), w("r", m(uo, 52, 0, 3)), w("f", m(uo, 56, 0, 4)), w("}", m(uo, 61, 0, 3)), w("j", m(uo, 65, 0, 3)), w("~", m(uo, 69, 0, 4)), w("g", m(uo, 74, 0, 3)), w("s", m(uo, 78, 0, 3)), w("z", m(uo, 82, 0, 3)), w("n", m(uo, 86, 0, 3)), w("w", m(uo, 90, 0, 5)), w("c", m(uo, 96, 0, 3)), w("b", m(uo, 100, 0, 3)), w("v", m(uo, 104, 0, 3)), w("m", m(uo, 108, 0, 5)), w("o", m(uo, 114, 0, 3)), w("{", m(uo, 118, 0, 3)), w("H", m(uo, 122, 0, 4)), w("t", m(uo, 0, 11, 3)), w("u", m(uo, 4, 11, 3)), w("a", m(uo, 8, 11, 3)), w("I", m(uo, 12, 11, 3)), w("|", m(uo, 16, 11, 1)), w("Ж", m(uo, 18, 11, 7)), w("К", m(uo, 26, 11, 4)), w("З", m(uo, 31, 11, 4)), w("9", m(uo, 36, 11, 4)), w("Ё", m(uo, 41, 11, 3)), w("Е", m(uo, 45, 11, 3)), w("Щ", m(uo, 49, 11, 6)), w("М", m(uo, 56, 11, 5)), w("Л", m(uo, 62, 11, 5)), w("Ш", m(uo, 68, 11, 5)), w("Д", m(uo, 74, 11, 5)), w("8", m(uo, 80, 11, 4)), w("jj", m(uo, 85, 11, 5)), w("(", m(uo, 91, 11, 3)), w("yj", m(uo, 95, 11, 5)), w("и", m(uo, 101, 11, 4)), w("П", m(uo, 106, 11, 4)), w("А", m(uo, 111, 11, 4)), w("Б", m(uo, 116, 11, 4)), w("й", m(uo, 121, 11, 4)), w(")", m(uo, 0, 22, 3)), w("ss", m(uo, 4, 22, 6)), w("О", m(uo, 11, 22, 4)), w("Г", m(uo, 16, 22, 3)), w("В", m(uo, 20, 22, 4)), w("Н", m(uo, 25, 22, 4)), w("'", m(uo, 30, 22, 1)), w("3", m(uo, 32, 22, 4)), w("*", m(uo, 37, 22, 5)), w(">", m(uo, 43, 22, 5)), w("з", m(uo, 49, 22, 3)), w("У", m(uo, 53, 22, 4)), w("к", m(uo, 58, 22, 3)), w("Ю", m(uo, 62, 22, 6)), w("Э", m(uo, 69, 22, 4)), w("Т", m(uo, 74, 22, 5)), w("ж", m(uo, 80, 22, 5)), w("=", m(uo, 86, 22, 4)), w("2", m(uo, 91, 22, 4)), w("&", m(uo, 96, 22, 6)), w("0", m(uo, 103, 22, 4)), w("$", m(uo, 108, 22, 4)), w("?", m(uo, 113, 22, 4)), w("+", m(uo, 118, 22, 5)), w("Р", m(uo, 124, 22, 4)), w("д", m(uo, 0, 33, 5)), w("Я", m(uo, 6, 33, 4)), w("л", m(uo, 11, 33, 3)), w("м", m(uo, 15, 33, 5)), w("е", m(uo, 21, 33, 3)), w("С", m(uo, 25, 33, 4)), w(",", m(uo, 30, 33, 2)), w("%", m(uo, 33, 33, 7)), w("1", m(uo, 41, 33, 4)), w("<", m(uo, 46, 33, 5)), w("5", m(uo, 52, 33, 4)), w("!", m(uo, 57, 33, 1)), w("Ь", m(uo, 59, 33, 4)), w("Й", m(uo, 64, 33, 4)), w("Х", m(uo, 69, 33, 5)), w("б", m(uo, 75, 33, 3)), w("а", m(uo, 79, 33, 3)), w("п", m(uo, 83, 33, 3)), w("И", m(uo, 87, 33, 4)), w("Ы", m(uo, 92, 33, 6)), w("4", m(uo, 99, 33, 4)), w("/", m(uo, 104, 33, 4)), w("×", m(uo, 109, 33, 5)), w(";", m(uo, 115, 33, 2)), w("-", m(uo, 118, 33, 4)), w('"', m(uo, 123, 33, 3)), w("6", m(uo, 0, 44, 4)), w("н", m(uo, 5, 44, 3)), w("в", m(uo, 9, 44, 3)), w("Ц", m(uo, 13, 44, 5)), w("Ч", m(uo, 19, 44, 4)), w("г", m(uo, 24, 44, 3)), w("Ъ", m(uo, 28, 44, 5)), w("о", m(uo, 34, 44, 3)), w("7", m(uo, 38, 44, 4)), w("#", m(uo, 43, 44, 5)), w(":", m(uo, 49, 44, 1)), w(".", m(uo, 51, 44, 1)), w("ffi", m(uo, 53, 44, 6)), w("D", m(uo, 60, 44, 4)), w("P", m(uo, 65, 44, 4)), w("x", m(uo, 70, 44, 3)), w("K", m(uo, 74, 44, 4)), w("_", m(uo, 79, 44, 4)), w("р", m(uo, 84, 44, 3)), w("я", m(uo, 88, 44, 3)), w("с", m(uo, 92, 44, 3)), w("L", m(uo, 96, 44, 3)), w("y", m(uo, 100, 44, 3)), w("Q", m(uo, 104, 44, 4)), w("E", m(uo, 109, 44, 3)), w("S", m(uo, 113, 44, 4)), w("G", m(uo, 118, 44, 4)), w("^", m(uo, 123, 44, 3)), w("J", m(uo, 0, 55, 4)), w("у", m(uo, 5, 55, 3)), w("ю", m(uo, 9, 55, 5)), w("э", m(uo, 15, 55, 3)), w("т", m(uo, 19, 55, 3)), w("]", m(uo, 23, 55, 2)), w("F", m(uo, 26, 55, 3)), w("R", m(uo, 30, 55, 4)), w("M", m(uo, 35, 55, 5)), w("V", m(uo, 41, 55, 4)), w("B", m(uo, 46, 55, 4)), w("gj", m(uo, 51, 55, 5)), w("fj", m(uo, 57, 55, 4)), w("ц", m(uo, 62, 55, 4)), w("ч", m(uo, 67, 55, 3)), w("ъ", m(uo, 71, 55, 4)), w("ff", m(uo, 76, 55, 6)), w("C", m(uo, 83, 55, 4)), w("W", m(uo, 88, 55, 7)), w("N", m(uo, 96, 55, 4)), w("Z", m(uo, 101, 55, 4)), w("\\", m(uo, 106, 55, 4)), w("i", m(uo, 111, 55, 1)), w("A", m(uo, 113, 55, 4)), w("U", m(uo, 118, 55, 4)), w("ь", m(uo, 123, 55, 3)), w("ё", m(uo, 0, 66, 3)), w("х", m(uo, 4, 66, 3)), w("ф", m(uo, 8, 66, 5)), w("ы", m(uo, 14, 66, 5)), w("T", m(uo, 20, 66, 5)), w("@", m(uo, 26, 66, 7)), w("h", m(uo, 34, 66, 3)), w("[", m(uo, 38, 66, 2)), w("O", m(uo, 41, 66, 4))])),
        io = c(function(n, r) {
            var t = A(Xu, n, r);
            return o(ku(t), n) && A(eo, t, ao) ? ae(w(t, A(Du, n, r))) : ie
        }),
        co = c(function(n, r) {
            return A(si, r, A(bi, function(n) {
                return A(co, n.b, A(Zt, n.a, r))
            }, cc(A(Ni, $u, h([A(io, 3, n), A(io, 2, n), A(bi, function(n) {
                var r = n.b;
                return w(A(to, n.a, ""), r)
            }, eu(n))])))))
        }),
        oo = c(function(n, r) {
            return r.$ ? ie : n(r.a)
        }),
        fo = Li(h([w(w(1, 14), -1), w(w(2, 2), -1), w(w(2, 6), 0), w(w(2, 14), -1), w(w(14, 2), -1), w(w(14, 6), -1), w(w(2, 10), -1), w(w(2, 13), -1), w(w(3, 3), -1), w(w(3, 7), -1), w(w(3, 14), -1), w(w(4, 2), -2), w(w(4, 4), -1), w(w(4, 6), -1), w(w(4, 7), -1), w(w(4, 10), -1), w(w(4, 13), -2), w(w(4, 14), -2), w(w(5, 3), -1), w(w(5, 14), -1), w(w(16, 3), -1), w(w(16, 7), -1), w(w(16, 9), -1), w(w(16, 14), -1), w(w(6, 2), -2), w(w(6, 3), -1), w(w(6, 4), -1), w(w(6, 5), -1), w(w(6, 6), -1), w(w(6, 7), -2), w(w(6, 13), -2), w(w(6, 14), -2), w(w(7, 3), -1), w(w(7, 7), 0), w(w(8, 7), 0), w(w(13, 2), -1), w(w(13, 14), -1), w(w(14, 10), -1), w(w(14, 14), -1), w(w(15, 2), -1), w(w(15, 13), -1), w(w(17, 14), -1)])),
        bo = Li(h([w(w("/", "/"), -2), w(w("\\", "\\"), -2), w(w("C", "f"), -1), w(w("I", "f"), -1), w(w("f", "T"), -2), w(w("q", "f"), -1), w(w("q", "fi"), -1), w(w("q", "ffi"), -1), w(w("q", "ff"), -1), w(w("л", "ч"), 1), w(w("у", "ч"), 1)])),
        so = A(Kt, c(function(n, r) {
            var t = n.a;
            return m(Kt, function(n) {
                return A(Ya, n, t)
            }, r, n.b)
        }), Qa),
        vo = so(h([w(1, h(["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "M", "N", "O", "Q", "R", "S", "U", "V", "W", "X", "Z", "l"])), w(2, h(["F", "P"])), w(3, h(["L"])), w(4, h(["T"])), w(5, h(["b", "k", "p", "s", "t", "u", "v", "w", "x", "z", "e"])), w(6, h(["f", "ff"])), w(7, h(["g", "q", "y"])), w(8, h(["i", "fi", "ffi"])), w(9, h(["j", "fj", "jj"])), w(10, h([".", ","])), w(11, h(["'", '"'])), w(12, h(["!", "?"])), w(13, h(["/"])), w(14, h(["Y", "7"])), w(15, h(["(", "["])), w(16, h(["a", "c", "h", "m", "n", "o", "r"])), w(17, h(["1", "2", "3", "4", "5", "6", "8", "9"]))])),
        lo = so(h([w(1, h(["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Z"])), w(2, h(["J"])), w(3, h(["T", "Y"])), w(4, h(["a", "c", "m", "n", "o", "q", "r", "t", "u", "v", "w", "x", "y", "z"])), w(5, h(["b", "h", "i", "k", "l"])), w(6, h(["e", "d", "g", "p", "s", "ss"])), w(7, h(["f", "ff", "fi", "ffi", "fj"])), w(8, h(["j", "jj"])), w(9, h(["7"])), w(10, h(["."])), w(11, h(["'", '"'])), w(12, h(["!", "?", ":"])), w(13, h(["/"])), w(14, h([",", ";"])), w(15, h(["$"]))])),
        ho = c(function(n, r) {
            return A(si, 0, cc(A(Ni, $u, h([A(Za, w(n, r), bo), A(oo, $u, m(Pc, c(function(n, r) {
                return A(Za, w(n, r), fo)
            }), A(Za, n, vo), A(Za, r, lo)))]))))
        }),
        mo = Li(h([w("j", w(-2, 1)), w("jj", w(-2, 1)), w(",", w(0, 1)), w(";", w(0, 1)), w(" ", w(0, 0)), w("г", w(0, 0)), w("Г", w(0, 0)), w("ч", w(-1, 1)), w("Ъ", w(-1, 1))])),
        go = w(0, 1),
        Ao = function(n) {
            return A(si, go, A(Za, n, mo)).a
        },
        po = c(function(n, r) {
            if (1 === n.$) return Ao(r);
            switch (n.a) {
                case " ":
                case "\n":
                    return Ao(r);
                default:
                    var t = n.a;
                    return e = h([function(n) {
                        return A(si, go, A(Za, n, mo)).b
                    }(t), A(ho, t, r), Ao(r)]), m(Kt, Wt, 0, e)
            }
            var e
        }),
        To = e(function(n, r, t, e, u, a) {
            n: for (;;) {
                if (!t.b) return a;
                switch (t.a) {
                    case " ":
                        var i = t.b;
                        n = v = n, r = l = ae(" "), t = d = i, e = h = e + 3, u = m = u, a = g = a;
                        continue n;
                    case "\n":
                        i = t.b;
                        n = v = n, r = l = ae("\n"), t = d = i, e = h = 0, u = m = u + 11, a = g = a;
                        continue n;
                    default:
                        var c = t.a,
                            o = (i = t.b, A(Za, c, ao));
                        if (o.$) {
                            n = v = n, r = l = r, t = d = i, e = h = e, u = m = u, a = g = a;
                            continue n
                        }
                        var f = o.a.a3,
                            b = o.a.a4,
                            s = o.a.cj,
                            v = n,
                            l = ae(c),
                            d = i,
                            h = e + s + A(po, r, c),
                            m = u,
                            g = x(n({
                                aD: 11,
                                b6: f,
                                b7: b,
                                a2: s,
                                a3: e + A(po, r, c),
                                a4: u
                            }), a);
                        n = v, r = l, t = d, e = h, u = m, a = g;
                        continue n
                }
            }
        }),
        Eo = A(da, c(function(n, r) {
            var t = Ht(A(co, r, l));
            return g(To, n, ie, t, 0, 0, l)
        })(function(n) {
            var t = n.a3,
                e = n.a4,
                r = n.a2,
                u = n.aD,
                a = n.b6,
                i = n.b7;
            return m(Kt, c(function(r, n) {
                return m(Kt, function(n) {
                    return p(no, t + r, e + n, a + r, i + n)
                }, n, A(ue, 0, Na(u) - 1))
            }), l, A(ue, 0, Na(r) - 1))
        }), ro)("Click\nto Play"),
        $o = {
            src: "\n        precision mediump float;\n        varying vec3 vcolor;\n        void main () {\n            gl_FragColor = vec4(vcolor, 1.0);\n        }\n    ",
            attributes: {},
            uniforms: {}
        },
        yo = {
            src: "\n        precision mediump float;\n        attribute vec3 color;\n        attribute vec3 position;\n        attribute vec2 texturePosition;\n        uniform sampler2D texture;\n        uniform vec2 textureSize;\n        uniform mat4 perspective;\n        uniform mat4 camera;\n        uniform mat4 transform;\n        varying vec3 vcolor;\n\n        void main () {\n            vec4 textureColor = texture2D(texture, texturePosition / textureSize);\n            vcolor = color;\n            if (dot(textureColor, textureColor) == 4.0) {\n                gl_Position = vec4(-2.0, -2.0, -2.0, 1.0);\n            } else {\n                gl_Position = perspective * camera * transform * vec4(position, 1.0);\n            }\n        }\n    ",
            attributes: {
                color: "be",
                position: "bZ",
                texturePosition: "b5"
            },
            uniforms: {
                camera: "as",
                perspective: "aO",
                texture: "a0",
                textureSize: "a1",
                transform: "cd"
            }
        },
        wo = c(function(n, r) {
            switch (r.$) {
                case 0:
                    return function(n) {
                        n.disable(n.BLEND)
                    }(n);
                case 1:
                    return function(n) {
                        n.disable(n.DEPTH_TEST)
                    }(n);
                case 2:
                    return function(n) {
                        n.disable(n.STENCIL_TEST)
                    }(n);
                case 3:
                    return function(n) {
                        n.disable(n.SCISSOR_TEST)
                    }(n);
                case 4:
                    return function(n) {
                        n.colorMask(!0, !0, !0, !0)
                    }(n);
                case 5:
                    return function(n) {
                        n.disable(n.CULL_FACE)
                    }(n);
                case 6:
                    return function(n) {
                        n.disable(n.POLYGON_OFFSET_FILL)
                    }(n);
                case 7:
                    return function(n) {
                        n.disable(n.SAMPLE_COVERAGE)
                    }(n);
                default:
                    return function(n) {
                        n.disable(n.SAMPLE_ALPHA_TO_COVERAGE)
                    }(n)
            }
        }),
        Fo = c(function(n, r) {
            switch (r.$) {
                case 0:
                    return A(Ot, n, r);
                case 1:
                    return A(It, n, r);
                case 2:
                    return A(Bt, n, r);
                case 3:
                    return A(Nt, n, r);
                default:
                    return A(kt, n, r)
            }
        }),
        _o = c(function(n, r) {
            switch (r.$) {
                case 0:
                    return A(gt, n, r);
                case 1:
                    return A(At, n, r);
                case 2:
                    return A(pt, n, r);
                case 3:
                    return A(Tt, n, r);
                case 4:
                    return A(Et, n, r);
                case 5:
                    return A($t, n, r);
                case 6:
                    return A(yt, n, r);
                case 7:
                    return A(wt, n, r);
                default:
                    return A(Ft, n, r)
            }
        }),
        Ro = mt,
        So = function(n) {
            return {
                $: 5,
                a: n
            }
        },
        xo = p(b(function(n, r, t, e) {
            return {
                $: 1,
                a: n,
                b: r,
                c: t,
                d: e
            }
        }), 513, (ki = {
            j: 1,
            k: 0,
            n: !0
        }).n, ki.k, ki.j),
        Lo = function(n) {
            return w(n.a, n.b)
        },
        jo = t(function(n, r, t, e, u) {
            return s(Ro, h([xo, So(1028)]), yo, $o, u, {
                as: t,
                aO: r,
                a0: n,
                a1: A(Jc, Lo(n).a, Lo(n).b),
                cd: e
            })
        }),
        Co = function(n) {
            return {
                bZ: n
            }
        },
        Oo = h([F(Co(m(oe, -.45, .45, -.5)), Co(m(oe, -.45, -.45, -.5)), Co(m(oe, .45, .45, -.5))), F(Co(m(oe, .45, .45, -.5)), Co(m(oe, -.45, -.45, -.5)), Co(m(oe, .45, -.45, -.5)))]),
        Io = ro(Oo),
        Bo = b(function(n, r, t, e) {
            return h([F(Co(n), Co(r), Co(t)), F(Co(t), Co(e), Co(n))])
        }),
        No = (Pi = m(oe, .5, .5, .5), Di = m(oe, .5, .5, -.5), Xi = m(oe, .5, -.5, .5), Mi = m(oe, .5, -.5, -.5), Ui = m(oe, -.5, .5, .5), qi = m(oe, -.5, .5, -.5), Gi = m(oe, -.5, -.5, .5), Vi = m(oe, -.5, -.5, -.5), ro(ne(h([p(Bo, Pi, Di, Mi, Xi), p(Bo, Pi, Di, qi, Ui), p(Bo, Pi, Ui, Gi, Xi), p(Bo, Di, qi, Vi, Mi), p(Bo, Ui, qi, Vi, Gi), p(Bo, Xi, Mi, Vi, Gi)])))),
        ko = {
            src: "\n        precision mediump float;\n        uniform vec3 color;\n\n        void main () {\n          gl_FragColor = vec4(color, 1.0);\n        }\n    ",
            attributes: {},
            uniforms: {
                color: "be"
            }
        },
        Po = k,
        Do = M,
        Xo = v(function(n, r, t) {
            var e = A(pc, r, t),
                u = Po(e),
                a = Do(1 - e * e),
                i = Te((1 - n) * u) / a,
                c = Te(n * u) / a,
                o = _e(t),
                f = _e(r),
                b = .5 * f.cj + .5 * o.cj,
                s = .5 * f.a3 + .5 * o.a3,
                v = .5 * f.a4 + .5 * o.a4,
                l = .5 * f.a6 + .5 * o.a6,
                d = f.cj * i + o.cj * c,
                h = f.a3 * i + o.a3 * c,
                m = f.a4 * i + o.a4 * c,
                g = f.a6 * i + o.a6 * c;
            return Ju(e) < 1 ? Ju(a) < .001 ? p(ye, b, s, v, l) : p(ye, d, h, m, g) : r
        }),
        Mo = function(n) {
            var r = n.aZ;
            switch (r.$) {
                case 0:
                    return Sc(n.aX);
                case 1:
                case 2:
                    return Sc(m(Xo, A(hc, n.ca, r.a), n.aX, Se));
                default:
                    return Sc(n.aX)
            }
        },
        Uo = {
            src: "\n        attribute vec3 position;\n        uniform mat4 camera;\n        uniform mat4 perspective;\n        uniform mat4 rotation;\n        uniform mat4 transform;\n\n        void main () {\n          gl_Position = perspective * camera * rotation * transform * vec4(position, 1.0);\n        }\n    ",
            attributes: {
                position: "bZ"
            },
            uniforms: {
                camera: "as",
                perspective: "aO",
                rotation: "aX",
                transform: "cd"
            }
        },
        qo = c(function(n, r) {
            return {
                $: 6,
                a: n,
                b: r
            }
        }),
        Go = c(function(i, c) {
            var n = function() {
                    var n = i.aZ;
                    switch (n.$) {
                        case 5:
                            return w(o(c, r = n.a), $u);
                        case 6:
                            var r = n.a,
                                t = n.b.au,
                                e = n.b.u;
                            return o(A(Xa, u = n.b.ag, c), t) ? w(o(c, r), he(A(de, u, e))) : w(!1, $u);
                        case 7:
                            t = n.a.au, e = n.a.u;
                            var u, a = n.c;
                            return o(A(Xa, u = n.a.ag, c), t) ? w(!1, he(A(de, u, A(hc, i.ca, a)))) : w(!1, $u);
                        default:
                            return w(!1, $u)
                    }
                }(),
                r = n.b,
                t = n.a ? uc(.6) : $u;
            return je(h([s(Ro, h([So(1028), xo]), Uo, ko, Io, {
                as: mc(i),
                be: t(function(n) {
                    switch (n) {
                        case 0:
                            return m(oe, .757, .117, .227);
                        case 1:
                            return m(oe, .003, .619, .372);
                        case 2:
                            return m(oe, 1, 1, 1);
                        case 3:
                            return m(oe, 0, .317, .729);
                        case 4:
                            return m(oe, .937, .321, .015);
                        default:
                            return m(oe, 1, .835, 0)
                    }
                }(c.be)),
                aO: Ac(i),
                aX: Mo(i),
                cd: r(c.cd)
            }), s(Ro, h([xo, A(qo, 5, 5)]), Uo, ko, No, {
                as: mc(i),
                be: m(oe, .003, .003, .251),
                aO: Ac(i),
                aX: Mo(i),
                cd: r(c.cd)
            })]))
        }),
        Vo = function(n) {
            return {
                $: 4,
                a: n
            }
        },
        Zo = function(n) {
            return {
                $: 2,
                a: n
            }
        },
        zo = function(n) {
            return {
                $: 3,
                a: n
            }
        },
        Wo = function(n) {
            return A(si, w(0, 0), A(bi, function(n) {
                return n.bd
            }, cc(n.bb)))
        },
        Ko = Fr,
        Ho = c(function(n, r) {
            return A(Ko, n, {
                $: 3,
                a: r
            })
        }),
        Yo = Bn,
        Qo = e(function(n, r, t, e, u, a) {
            return {
                ba: r,
                bd: t,
                bw: n,
                bS: e,
                al: u,
                b0: a
            }
        }),
        Jo = A(Iu, function(n) {
            switch (n) {
                case 0:
                    return 1;
                case 1:
                    return 2;
                case 2:
                    return 3;
                case 3:
                    return 4;
                case 4:
                    return 5;
                default:
                    return 0
            }
        }, A(du, "button", Ki)),
        nf = m(Bu, c(function(n, r) {
            return w(n, r)
        }), A(du, "clientX", fu), A(du, "clientY", fu)),
        rf = {
            $: 3
        },
        tf = p(hu, v(function(n, r, t) {
            return {
                a7: n,
                bg: r,
                b1: t
            }
        }), A(du, "altKey", rf), A(du, "ctrlKey", rf), A(du, "shiftKey", rf)),
        ef = m(Bu, c(function(n, r) {
            return w(n, r)
        }), A(du, "offsetX", fu), A(du, "offsetY", fu)),
        uf = m(Bu, c(function(n, r) {
            return w(n, r)
        }), A(du, "pageX", fu), A(du, "pageY", fu)),
        af = m(Bu, c(function(n, r) {
            return w(n, r)
        }), A(du, "screenX", fu), A(du, "screenY", fu)),
        cf = a(Yo, Qo, tf, Jo, nf, ef, uf, af),
        of = v(function(n, r, t) {
            return A(Ho, n, A(Iu, function(n) {
                return {
                    w: t(n),
                    am: r.am,
                    ap: r.ap
                }
            }, cf))
        }),
        ff = {
            am: !0,
            ap: !0
        },
        bf = A( of , "mousedown", ff),
        sf = A( of , "mousemove", ff),
        vf = A( of , "mouseup", ff),
        lf = On,
        df = b(function(n, r, t, e) {
            return {
                bb: r,
                bw: n,
                b4: t,
                cc: e
            }
        }),
        hf = s(lf, b(function(n, r, t, e) {
            return {
                bd: r,
                bs: n,
                al: t,
                b0: e
            }
        }), A(du, "identifier", Ki), nf, uf, af),
        mf = A(Qt, Bu(Zt), cu(l)),
        gf = function(r) {
            var t = function(n) {
                return A(du, tu(n), r)
            };
            return A(au, function(n) {
                return mf(A(re, t, A(ue, 0, n - 1)))
            }, A(du, "length", Ki))
        },
        Af = s(lf, df, tf, A(du, "changedTouches", gf(hf)), A(du, "targetTouches", gf(hf)), A(du, "touches", gf(hf))),
        pf = v(function(n, r, t) {
            return A(Ho, n, A(Iu, function(n) {
                return {
                    w: t(n),
                    am: r.am,
                    ap: r.ap
                }
            }, Af))
        }),
        Tf = {
            am: !0,
            ap: !0
        },
        Ef = A(pf, "touchend", Tf),
        $f = A(pf, "touchmove", Tf),
        yf = A(pf, "touchstart", Tf),
        wf = _n,
        Ff = _r,
        _f = pn,
        Rf = function(n) {
            return {
                $: 0,
                a: n
            }
        },
        Sf = {
            $: 3
        },
        xf = b(function(n, r, t, e) {
            return {
                $: 4,
                a: n,
                b: r,
                c: t,
                d: e
            }
        }),
        Lf = function(n) {
            return {
                $: 1,
                a: n
            }
        },
        jf = v(function(n, r, t) {
            return m(Ct, n, r, t)
        }),
        Cf = {
            $: 5
        },
        Of = nt({
            bu: function(n) {
                return w(A(qu, Le, A(zu, pu, n)), Uu(h([A(Ou, function(n) {
                    var r = n.ci;
                    return A(Eu, r.a2, r.aD)
                }, Mu), A(Zu, Tu, A(Yu, R(Wu, {
                    bp: !1,
                    bN: 9728
                }), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQAAAADrRVxmAAADeklEQVR4nO2SXWgcVRiGn/my26wh6lZakkBSttWLINhu/CmBhDqtbemVWilaq9TgH4rSFtQ2gtij9aKX4h9UQfdCe9PQJCptaKMZWpqKWhyQxlRMMw2GBDXu5IdksrMznxdJmo0ogtd5Lx/O+Xi+c15LWRrhILrX8773gQAeF0ANTKQBUCPvNT5y4tWfv2zxR7b1Ne90kXOQtLrP5eL9nWZd8uioOFmYsbGiNwIyaHWiBSjPiCZr9uFhIbfR1kLswdhz01u9NEQaRjqjX+VHVFVjFUgAxKQBLGNFQixByvGy2TlVVVVt1+tBxx/b0xCcOHTPS2vO5s83qJiKm81n76K5YGdzuuq4Kx/YRGTpAO1pM4xKS648ePISWcgGUEA8ezZ1/C4AF2WbL9jjRxQyAIrjS/NGrI2X+jTsy9zwJmEG1cOqGqkOxKfbVVUWXpJ1czvI4vOG5zsASyG2rHkWC2KmbumqdIqv153j10+a3AmxC8/IkAMPnKLC/Xg0KQUbTtbn+hPsTqct20idE7q7HtqpEdGmWulHkiaZtZKTs2U0dbvJGz8SscGElakiFxorg1uflcu9IZk/O02DKft8dZMHPVqSUFWc0i4k5kz/1o/5uAA+f4jafHPVH+9o69b+M4CowXe9cvwiFH1WiTs5llrvfTg1dPppJyg6yLXWvdTeO1Zx7ZUdZxjqwjpZjKvWs7LdiZy27+o23SdKWTBmtdqxbajtOeLIbjZXlR1bd4rIhMSNcEg1XnSfUeb+YCF5/Xf168At7puKbH3n7V/AHLvYKD6kyg7qcD3Aj/mX5axL3ejvYS5+rbBqmtQuyXk8deDyBZuguIUobcv9/hT6gs2Vo2yhrN6IpGthNWx4i6/BQTIDTtRa0RFCnPj0jisOqj2qGh1WndEorypgL1qlS001w/T1ri9kUDXhp3X77du/fb46vrs5nN4/IWDV2NbmgKib8pWjJMIvOpkunzw+vELpcS76wuyukV7tetCqMKxJgTBoarBsghysxZ0Ss9awNaik2o6vxolsSu4MHdjQpY634sXIWN3EqodVJ37qKcypJECBVKY+nDeeVVXV4R90/sQ/fcO4GXBLyBODkT9wenE/eXi9pwdKr+R28FuqFPSqKS4ZusdiSaz384+GUSG7SHRQ8yUFUQGkVC4B3LRkxn83aBksg2Xw/8Ff2lQEUVlbcagAAAAASUVORK5CYII="))])))
            },
            b3: function(n) {
                return Yi(A(re, Qi, A(Hi, A(da, Xe, Mt(n)), h([w(fi(!0), (r = c(function(n, r) {
                    return A(Eu, n, r)
                }), m(Wi, 1, "resize", A(du, "target", m(Bu, r, A(du, "innerWidth", Ki), A(du, "innerHeight", Ki)))))), w(vi(oi), yi(li))]))));
                var r
            },
            ce: Hc,
            ch: function(n) {
                return m(jf, h([Lf(1), Rf(!0), Sf, p(xf, .003, .003, .251, 1)]), x(h([(t = Na(n.a2 * n.az), A(Rr, "width", tu(t))), function(n) {
                    return A(Rr, "height", tu(n))
                }(Na(n.aD * n.az)), A(Ff, "position", "absolute"), A(Ff, "left", "0"), A(Ff, "top", "0"), A(Ff, "width", wf(n.a2) + "px"), A(Ff, "height", wf(n.aD) + "px")]), function(n) {
                    return A(re, Qi, A(Hi, A(da, Xe, Mt(n)), h([w(vi(Ic), yf(A(da, Wo, Vo))), w(vi(Vc), $f(A(da, Wo, Zo))), w(vi(Wc), Ef(A(da, Wo, zo))), w(vi(Ic), bf(A(da, function(n) {
                        return n.al
                    }, Vo))), w(vi(Vc), sf(A(da, function(n) {
                        return n.al
                    }, Zo))), w(vi(Wc), vf(A(da, function(n) {
                        return n.al
                    }, zo)))])))
                }(n)), x((r = n.bq).$ ? l : h([s(jo, r.a, Ac(n), mc(n), A(he, m(ce, 0, -.6, -11), A(he, A(be, .2243994752564138, ve), A(he, m(ce, .9, -2, 0), m(_f, .08, .08, .4)))), Eo)]), m(Kt, Go(n), l, n.ax)));
                var r, t
            }
        });
    Zi = {
        Main: {
            init: Of(Cf)(0)
        }
    }, n.Elm ? function n(r, t) {
        for (var e in t) e in r ? "init" == e ? C(6) : n(r[e], t[e]) : r[e] = t[e]
    }(n.Elm, Zi) : n.Elm = Zi
}(this);