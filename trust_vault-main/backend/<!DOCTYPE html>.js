<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <script type="text/javascript">
            (window.NREUM || (NREUM = {})).init = {
                privacy: {
                    cookies_enabled: true
                },
                ajax: {
                    deny_list: ["bam.nr-data.net"]
                },
                feature_flags: ["soft_nav"],
                distributed_tracing: {
                    enabled: true
                }
            };
            (window.NREUM || (NREUM = {})).loader_config = {
                agentID: "772307001",
                accountID: "3346207",
                trustKey: "1380012",
                xpid: "VwUDV1RTDxAHUVlaDwIDVlM=",
                licenseKey: "NRJS-b74f7bf78de8d9658e6",
                applicationID: "758883407",
                browserID: "772307001"
            };
            ;/*! For license information please see nr-loader-spa-1.312.1.min.js.LICENSE.txt */
            ( () => {
                var e, t, r = {
                    384: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            NT: () => a,
                            Zm: () => c,
                            bQ: () => u,
                            dV: () => d,
                            pV: () => l
                        });
                        var n = r(6154)
                          , i = r(1863)
                          , s = r(944)
                          , o = r(1910);
                        const a = {
                            beacon: "bam.nr-data.net",
                            errorBeacon: "bam.nr-data.net"
                        };
                        function c() {
                            return n.gm.NREUM || (n.gm.NREUM = {}),
                            void 0 === n.gm.newrelic && (n.gm.newrelic = n.gm.NREUM),
                            n.gm.NREUM
                        }
                        function d() {
                            let e = c();
                            return e.o || (e.o = {
                                ST: n.gm.setTimeout,
                                SI: n.gm.setImmediate || n.gm.setInterval,
                                CT: n.gm.clearTimeout,
                                XHR: n.gm.XMLHttpRequest,
                                REQ: n.gm.Request,
                                EV: n.gm.Event,
                                PR: n.gm.Promise,
                                MO: n.gm.MutationObserver,
                                FETCH: n.gm.fetch,
                                WS: n.gm.WebSocket
                            },
                            (0,
                            o.i)(...Object.values(e.o))),
                            e
                        }
                        function u(e, t) {
                            let r = c();
                            r.initializedAgents ??= {},
                            t.initializedAt = {
                                ms: (0,
                                i.t)(),
                                date: new Date
                            },
                            r.initializedAgents[e] = t,
                            2 === Object.keys(r.initializedAgents).length && (0,
                            s.R)(69)
                        }
                        function l() {
                            return function() {
                                let e = c();
                                const t = e.info || {};
                                e.info = {
                                    beacon: a.beacon,
                                    errorBeacon: a.errorBeacon,
                                    ...t
                                }
                            }(),
                            function() {
                                let e = c();
                                const t = e.init || {};
                                e.init = {
                                    ...t
                                }
                            }(),
                            d(),
                            function() {
                                let e = c();
                                const t = e.loader_config || {};
                                e.loader_config = {
                                    ...t
                                }
                            }(),
                            c()
                        }
                    }
                    ,
                    782: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            T: () => n
                        });
                        const n = r(860).K7.pageViewTiming
                    }
                    ,
                    860: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            $J: () => u,
                            K7: () => c,
                            P3: () => d,
                            XX: () => i,
                            Yy: () => a,
                            df: () => s,
                            qY: () => n,
                            v4: () => o
                        });
                        const n = "events"
                          , i = "jserrors"
                          , s = "browser/blobs"
                          , o = "rum"
                          , a = "browser/logs"
                          , c = {
                            ajax: "ajax",
                            genericEvents: "generic_events",
                            jserrors: i,
                            logging: "logging",
                            metrics: "metrics",
                            pageAction: "page_action",
                            pageViewEvent: "page_view_event",
                            pageViewTiming: "page_view_timing",
                            sessionReplay: "session_replay",
                            sessionTrace: "session_trace",
                            softNav: "soft_navigations"
                        }
                          , d = {
                            [c.pageViewEvent]: 1,
                            [c.pageViewTiming]: 2,
                            [c.metrics]: 3,
                            [c.jserrors]: 4,
                            [c.softNav]: 5,
                            [c.ajax]: 6,
                            [c.sessionTrace]: 7,
                            [c.sessionReplay]: 8,
                            [c.logging]: 9,
                            [c.genericEvents]: 10
                        }
                          , u = {
                            [c.pageViewEvent]: o,
                            [c.pageViewTiming]: n,
                            [c.ajax]: n,
                            [c.softNav]: n,
                            [c.metrics]: i,
                            [c.jserrors]: i,
                            [c.sessionTrace]: s,
                            [c.sessionReplay]: s,
                            [c.logging]: a,
                            [c.genericEvents]: "ins"
                        }
                    }
                    ,
                    944: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            R: () => i
                        });
                        var n = r(3241);
                        function i(e, t) {
                            "function" == typeof console.debug && (console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e), t),
                            (0,
                            n.W)({
                                drained: null,
                                type: "data",
                                name: "warn",
                                feature: "warn",
                                data: {
                                    code: e,
                                    secondary: t
                                }
                            }))
                        }
                    }
                    ,
                    993: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            A$: () => s,
                            ET: () => o,
                            TZ: () => a,
                            p_: () => i
                        });
                        var n = r(860);
                        const i = {
                            ERROR: "ERROR",
                            WARN: "WARN",
                            INFO: "INFO",
                            DEBUG: "DEBUG",
                            TRACE: "TRACE"
                        }
                          , s = {
                            OFF: 0,
                            ERROR: 1,
                            WARN: 2,
                            INFO: 3,
                            DEBUG: 4,
                            TRACE: 5
                        }
                          , o = "log"
                          , a = n.K7.logging
                    }
                    ,
                    1541: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            $5: () => d,
                            B5: () => c,
                            Ux: () => o,
                            YA: () => a,
                            fQ: () => i
                        });
                        var n = r(5871);
                        const i = {
                            MFE: "MFE",
                            BA: "BA"
                        };
                        function s(e, t) {
                            if (!e || !t?.init.api.allow_registered_children)
                                return [];
                            const r = t.runtime.registeredEntities;
                            return r?.filter(t => t.metadata.timings?.asset?.endsWith(e)).map(e => e.metadata.target) || []
                        }
                        function o(e, t) {
                            if (!u(t))
                                return {};
                            const r = t.agentRef.runtime.appMetadata.agents[0].entityGuid;
                            return e ? e.attributes : {
                                "entity.guid": r,
                                appId: t.agentRef.info.applicationID
                            }
                        }
                        function a(e, t) {
                            return c(e, t) ? {
                                "child.id": e.id,
                                "child.type": e.type,
                                ...o(void 0, t)
                            } : {}
                        }
                        function c(e, t) {
                            return !!e && !!u(t) && t.agentRef.init.api.duplicate_registered_data
                        }
                        function d(e) {
                            if (!e?.init.api.allow_registered_children)
                                return [void 0];
                            const t = [];
                            try {
                                var r = (0,
                                n.AZ)((0,
                                n.QL)());
                                let i = r.length - 1;
                                for (; r[i]; )
                                    t.push(...s(r[i--], e))
                            } catch (e) {}
                            return t.length || t.push(void 0),
                            t
                        }
                        function u(e) {
                            return 2 === e?.harvestEndpointVersion
                        }
                    }
                    ,
                    1687: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            Ak: () => a,
                            Ze: () => d,
                            x3: () => c
                        });
                        var n = r(3241)
                          , i = r(3606)
                          , s = r(860)
                          , o = r(2646);
                        function a(e, t) {
                            if (!e)
                                return;
                            const r = {
                                staged: !1,
                                priority: s.P3[t] || 0
                            };
                            e.runtime.drainRegistry.get(t) || e.runtime.drainRegistry.set(t, r)
                        }
                        function c(e, t) {
                            if (!e)
                                return;
                            const r = e.runtime.drainRegistry;
                            r && (r.get(t) && r.delete(t),
                            l(e, t, !1),
                            r.size && u(e))
                        }
                        function d(e, t="feature", r=!1) {
                            if (e) {
                                if (!e.runtime.drainRegistry.get(t) || r)
                                    return l(e, t);
                                e.runtime.drainRegistry.get(t).staged = !0,
                                u(e)
                            }
                        }
                        function u(e) {
                            if (!e)
                                return;
                            const t = Array.from(e.runtime.drainRegistry);
                            t.every( ([e,t]) => t.staged) && (t.sort( (e, t) => e[1].priority - t[1].priority),
                            t.forEach( ([t]) => {
                                e.runtime.drainRegistry.delete(t),
                                l(e, t)
                            }
                            ))
                        }
                        function l(e, t, r=!0) {
                            if (!e)
                                return;
                            const s = e.ee
                              , a = i.i.handlers;
                            if (s && !s.aborted && s.backlog && a) {
                                if ((0,
                                n.W)({
                                    type: "lifecycle",
                                    name: "drain",
                                    feature: t
                                }),
                                r) {
                                    const e = s.backlog[t]
                                      , r = a[t];
                                    if (r) {
                                        for (let t = 0; e && t < e.length; ++t)
                                            f(e[t], r);
                                        Object.entries(r).forEach( ([e,t]) => {
                                            Object.values(t || {}).forEach(t => {
                                                t[0]?.on && t[0].context()instanceof o.y && !t[0].listeners(e).includes(t[1]) && t[0].on(e, t[1])
                                            }
                                            )
                                        }
                                        )
                                    }
                                }
                                s.isolatedBacklog || delete a[t],
                                s.backlog[t] = null,
                                s.emit("drain-" + t, [])
                            }
                        }
                        function f(e, t) {
                            var r = e[1];
                            Object.values(t[r] || {}).forEach(t => {
                                var r = e[0];
                                if (t[0] === r) {
                                    var n = t[1]
                                      , i = e[3]
                                      , s = e[2];
                                    n.apply(i, s)
                                }
                            }
                            )
                        }
                    }
                    ,
                    1738: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            U: () => f,
                            Y: () => l
                        });
                        var n = r(3241)
                          , i = r(9908)
                          , s = r(1863)
                          , o = r(944)
                          , a = r(3969)
                          , c = r(8362)
                          , d = r(860)
                          , u = r(4261);
                        function l(e, t, r, s) {
                            const l = s || r;
                            !l || l[e] && l[e] !== c.d.prototype[e] || (l[e] = function() {
                                (0,
                                i.p)(a.xV, ["API/" + e + "/called"], void 0, d.K7.metrics, r.ee),
                                (0,
                                n.W)({
                                    drained: !!r.runtime?.activatedFeatures,
                                    type: "data",
                                    name: "api",
                                    feature: u.Pl + e,
                                    data: {}
                                });
                                try {
                                    return t.apply(this, arguments)
                                } catch (e) {
                                    (0,
                                    o.R)(23, e)
                                }
                            }
                            )
                        }
                        function f(e, t, r, n, o) {
                            const a = e.info;
                            null === r ? delete a.jsAttributes[t] : a.jsAttributes[t] = r,
                            (o || null === r) && (0,
                            i.p)(u.Pl + n, [(0,
                            s.t)(), t, r], void 0, "session", e.ee)
                        }
                    }
                    ,
                    1741: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            W: () => s
                        });
                        var n = r(944)
                          , i = r(4261);
                        class s {
                            #e(e, ...t) {
                                if (this[e] !== s.prototype[e])
                                    return this[e](...t);
                                (0,
                                n.R)(35, e)
                            }
                            addPageAction(e, t) {
                                return this.#e(i.hG, e, t)
                            }
                            register(e) {
                                return this.#e(i.eY, e)
                            }
                            recordCustomEvent(e, t) {
                                return this.#e(i.fF, e, t)
                            }
                            setPageViewName(e, t) {
                                return this.#e(i.Fw, e, t)
                            }
                            setCustomAttribute(e, t, r) {
                                return this.#e(i.cD, e, t, r)
                            }
                            noticeError(e, t) {
                                return this.#e(i.o5, e, t)
                            }
                            setUserId(e, t=!1) {
                                return this.#e(i.Dl, e, t)
                            }
                            setApplicationVersion(e) {
                                return this.#e(i.nb, e)
                            }
                            setErrorHandler(e) {
                                return this.#e(i.bt, e)
                            }
                            addRelease(e, t) {
                                return this.#e(i.k6, e, t)
                            }
                            log(e, t) {
                                return this.#e(i.$9, e, t)
                            }
                            start() {
                                return this.#e(i.d3)
                            }
                            finished(e) {
                                return this.#e(i.BL, e)
                            }
                            recordReplay() {
                                return this.#e(i.CH)
                            }
                            pauseReplay() {
                                return this.#e(i.Tb)
                            }
                            addToTrace(e) {
                                return this.#e(i.U2, e)
                            }
                            setCurrentRouteName(e) {
                                return this.#e(i.PA, e)
                            }
                            interaction(e) {
                                return this.#e(i.dT, e)
                            }
                            wrapLogger(e, t, r) {
                                return this.#e(i.Wb, e, t, r)
                            }
                            measure(e, t) {
                                return this.#e(i.V1, e, t)
                            }
                            consent(e) {
                                return this.#e(i.Pv, e)
                            }
                        }
                    }
                    ,
                    1863: (e, t, r) => {
                        "use strict";
                        function n() {
                            return Math.floor(performance.now())
                        }
                        r.d(t, {
                            t: () => n
                        })
                    }
                    ,
                    1910: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            i: () => s
                        });
                        var n = r(944);
                        const i = new Map;
                        function s(...e) {
                            return e.every(e => {
                                if (i.has(e))
                                    return i.get(e);
                                const t = "function" == typeof e ? e.toString() : ""
                                  , r = t.includes("[native code]")
                                  , s = t.includes("nrWrapper");
                                return r || s || (0,
                                n.R)(64, e?.name || t),
                                i.set(e, r),
                                r
                            }
                            )
                        }
                    }
                    ,
                    2555: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            D: () => a,
                            f: () => o
                        });
                        var n = r(384)
                          , i = r(8122);
                        const s = {
                            beacon: n.NT.beacon,
                            errorBeacon: n.NT.errorBeacon,
                            licenseKey: void 0,
                            applicationID: void 0,
                            sa: void 0,
                            queueTime: void 0,
                            applicationTime: void 0,
                            ttGuid: void 0,
                            user: void 0,
                            account: void 0,
                            product: void 0,
                            extra: void 0,
                            jsAttributes: {},
                            userAttributes: void 0,
                            atts: void 0,
                            transactionName: void 0,
                            tNamePlain: void 0
                        };
                        function o(e) {
                            try {
                                return !!e.licenseKey && !!e.errorBeacon && !!e.applicationID
                            } catch (e) {
                                return !1
                            }
                        }
                        const a = e => (0,
                        i.a)(e, s)
                    }
                    ,
                    2614: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            BB: () => o,
                            H3: () => n,
                            g: () => d,
                            iL: () => c,
                            tS: () => a,
                            uh: () => i,
                            wk: () => s
                        });
                        const n = "NRBA"
                          , i = "SESSION"
                          , s = 144e5
                          , o = 18e5
                          , a = {
                            STARTED: "session-started",
                            PAUSE: "session-pause",
                            RESET: "session-reset",
                            RESUME: "session-resume",
                            UPDATE: "session-update"
                        }
                          , c = {
                            SAME_TAB: "same-tab",
                            CROSS_TAB: "cross-tab"
                        }
                          , d = {
                            OFF: 0,
                            FULL: 1,
                            ERROR: 2
                        }
                    }
                    ,
                    2646: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            y: () => n
                        });
                        class n {
                            constructor(e) {
                                this.contextId = e
                            }
                        }
                    }
                    ,
                    2843: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            G: () => s,
                            u: () => i
                        });
                        var n = r(3878);
                        function i(e, t=!1, r, i) {
                            (0,
                            n.DD)("visibilitychange", function() {
                                if (t)
                                    return void ("hidden" === document.visibilityState && e());
                                e(document.visibilityState)
                            }, r, i)
                        }
                        function s(e, t, r) {
                            (0,
                            n.sp)("pagehide", e, t, r)
                        }
                    }
                    ,
                    3241: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            W: () => s
                        });
                        var n = r(6154);
                        const i = "newrelic";
                        function s(e={}) {
                            try {
                                n.gm.dispatchEvent(new CustomEvent(i,{
                                    detail: e
                                }))
                            } catch (e) {}
                        }
                    }
                    ,
                    3304: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            A: () => s
                        });
                        var n = r(7836);
                        const i = () => {
                            const e = new WeakSet;
                            return (t, r) => {
                                if ("object" == typeof r && null !== r) {
                                    if (e.has(r))
                                        return;
                                    e.add(r)
                                }
                                return r
                            }
                        }
                        ;
                        function s(e) {
                            try {
                                return JSON.stringify(e, i()) ?? ""
                            } catch (e) {
                                try {
                                    n.ee.emit("internal-error", [e])
                                } catch (e) {}
                                return ""
                            }
                        }
                    }
                    ,
                    3333: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            $v: () => u,
                            TZ: () => n,
                            Xh: () => c,
                            Zp: () => i,
                            kd: () => d,
                            mq: () => a,
                            nf: () => o,
                            qN: () => s
                        });
                        const n = r(860).K7.genericEvents
                          , i = ["auxclick", "click", "copy", "keydown", "paste", "scrollend"]
                          , s = ["focus", "blur"]
                          , o = 4
                          , a = 1e3
                          , c = 2e3
                          , d = ["PageAction", "UserAction", "BrowserPerformance"]
                          , u = {
                            RESOURCES: "experimental.resources",
                            REGISTER: "register"
                        }
                    }
                    ,
                    3434: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            Jt: () => o,
                            YM: () => u
                        });
                        var n = r(7836)
                          , i = r(5607)
                          , s = r(1541);
                        const o = "nr@original:".concat(i.W)
                          , a = 50;
                        var c = Object.prototype.hasOwnProperty
                          , d = !1;
                        function u(e, t, r) {
                            return e || (e = n.ee),
                            i.inPlace = function(e, t, r, n, s, o) {
                                r || (r = "");
                                const a = "-" === r.charAt(0);
                                for (let c = 0; c < t.length; c++) {
                                    const d = t[c]
                                      , u = e[d];
                                    f(u) || (e[d] = i(u, a ? d + r : r, n, d, s, o))
                                }
                            }
                            ,
                            i.flag = o,
                            i;
                            function i(t, n, i, d, h, p) {
                                return f(t) ? t : (n || (n = ""),
                                nrWrapper[o] = t,
                                function(e, t, r) {
                                    if (Object.defineProperty && Object.keys)
                                        try {
                                            return Object.keys(e).forEach(function(r) {
                                                Object.defineProperty(t, r, {
                                                    get: function() {
                                                        return e[r]
                                                    },
                                                    set: function(t) {
                                                        return e[r] = t,
                                                        t
                                                    }
                                                })
                                            }),
                                            t
                                        } catch (e) {
                                            l([e], r)
                                        }
                                    for (var n in e)
                                        c.call(e, n) && (t[n] = e[n])
                                }(t, nrWrapper, e),
                                nrWrapper);
                                function nrWrapper() {
                                    var o, c, f, g;
                                    let m, v;
                                    try {
                                        c = this,
                                        o = [...arguments],
                                        v = p ? (0,
                                        s.$5)(r) : [void 0],
                                        f = "function" == typeof i ? i(o, c) : i || {}
                                    } catch (t) {
                                        l([t, "", [o, c, d], f], e)
                                    }
                                    u(n + "start", [o, c, d, v], f, h);
                                    const y = performance.now();
                                    let b;
                                    try {
                                        return g = t.apply(c, o),
                                        b = performance.now(),
                                        g
                                    } catch (e) {
                                        throw b = performance.now(),
                                        u(n + "err", [o, c, e, v], f, h),
                                        m = e,
                                        m
                                    } finally {
                                        const e = b - y
                                          , t = {
                                            start: y,
                                            end: b,
                                            duration: e,
                                            isLongTask: e >= a,
                                            methodName: d,
                                            thrownError: m
                                        };
                                        t.isLongTask && u("long-task", [t, c, v], f, h),
                                        u(n + "end", [o, c, g, v], f, h)
                                    }
                                }
                            }
                            function u(r, n, i, s) {
                                if (!d || t) {
                                    var o = d;
                                    d = !0;
                                    try {
                                        e.emit(r, n, i, t, s)
                                    } catch (t) {
                                        l([t, r, n, i], e)
                                    }
                                    d = o
                                }
                            }
                        }
                        function l(e, t) {
                            t || (t = n.ee);
                            try {
                                t.emit("internal-error", e)
                            } catch (e) {}
                        }
                        function f(e) {
                            return !(e && "function" == typeof e && e.apply && !e[o])
                        }
                    }
                    ,
                    3606: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            i: () => s
                        });
                        var n = r(9908);
                        s.on = o;
                        var i = s.handlers = {};
                        function s(e, t, r, s) {
                            o(s || n.d, i, e, t, r)
                        }
                        function o(e, t, r, i, s) {
                            s || (s = "feature"),
                            e || (e = n.d);
                            var o = t[s] = t[s] || {};
                            (o[r] = o[r] || []).push([e, i])
                        }
                    }
                    ,
                    3738: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            He: () => i,
                            Kp: () => a,
                            Lc: () => d,
                            Rz: () => u,
                            TZ: () => n,
                            bD: () => s,
                            d3: () => o,
                            jx: () => l,
                            sl: () => f,
                            uP: () => c
                        });
                        const n = r(860).K7.sessionTrace
                          , i = "bstResource"
                          , s = "resource"
                          , o = "-start"
                          , a = "-end"
                          , c = "fn" + o
                          , d = "fn" + a
                          , u = "pushState"
                          , l = 1e3
                          , f = 3e4
                    }
                    ,
                    3785: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            R: () => c,
                            b: () => d
                        });
                        var n = r(9908)
                          , i = r(1863)
                          , s = r(860)
                          , o = r(3969)
                          , a = r(993);
                        function c(e, t, r={}, c=a.p_.INFO, d=!0, u, l=(0,
                        i.t)()) {
                            (0,
                            n.p)(o.xV, ["API/logging/".concat(c.toLowerCase(), "/called")], void 0, s.K7.metrics, e),
                            (0,
                            n.p)(a.ET, [l, t, r, c, d, u], void 0, s.K7.logging, e)
                        }
                        function d(e) {
                            return "string" == typeof e && Object.values(a.p_).some(t => t === e.toUpperCase().trim())
                        }
                    }
                    ,
                    3878: (e, t, r) => {
                        "use strict";
                        function n(e, t) {
                            return {
                                capture: e,
                                passive: !1,
                                signal: t
                            }
                        }
                        function i(e, t, r=!1, i) {
                            window.addEventListener(e, t, n(r, i))
                        }
                        function s(e, t, r=!1, i) {
                            document.addEventListener(e, t, n(r, i))
                        }
                        r.d(t, {
                            DD: () => s,
                            jT: () => n,
                            sp: () => i
                        })
                    }
                    ,
                    3962: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            AM: () => o,
                            O2: () => l,
                            OV: () => s,
                            Qu: () => f,
                            TZ: () => c,
                            ih: () => h,
                            pP: () => a,
                            t1: () => u,
                            tC: () => i,
                            wD: () => d
                        });
                        var n = r(860);
                        const i = ["click", "keydown", "submit"]
                          , s = "popstate"
                          , o = "api"
                          , a = "initialPageLoad"
                          , c = n.K7.softNav
                          , d = 5e3
                          , u = 500
                          , l = {
                            INITIAL_PAGE_LOAD: "",
                            ROUTE_CHANGE: 1,
                            UNSPECIFIED: 2
                        }
                          , f = {
                            INTERACTION: 1,
                            AJAX: 2,
                            CUSTOM_END: 3,
                            CUSTOM_TRACER: 4
                        }
                          , h = {
                            IP: "in progress",
                            PF: "pending finish",
                            FIN: "finished",
                            CAN: "cancelled"
                        }
                    }
                    ,
                    3969: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            TZ: () => n,
                            XG: () => a,
                            rs: () => i,
                            xV: () => o,
                            z_: () => s
                        });
                        const n = r(860).K7.metrics
                          , i = "sm"
                          , s = "cm"
                          , o = "storeSupportabilityMetrics"
                          , a = "storeEventMetrics"
                    }
                    ,
                    4234: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            W: () => i
                        });
                        var n = r(1687);
                        class i {
                            constructor(e, t) {
                                this.agentRef = e,
                                this.ee = e?.ee,
                                this.featureName = t,
                                this.blocked = !1
                            }
                            deregisterDrain() {
                                (0,
                                n.x3)(this.agentRef, this.featureName)
                            }
                        }
                    }
                    ,
                    4261: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            $9: () => u,
                            BL: () => c,
                            CH: () => p,
                            Dl: () => R,
                            Fw: () => w,
                            PA: () => v,
                            Pl: () => n,
                            Pv: () => x,
                            Tb: () => f,
                            U2: () => o,
                            V1: () => A,
                            Wb: () => T,
                            bt: () => b,
                            cD: () => y,
                            d3: () => E,
                            dT: () => d,
                            eY: () => g,
                            fF: () => h,
                            hG: () => s,
                            hw: () => i,
                            k6: () => a,
                            nb: () => m,
                            o5: () => l
                        });
                        const n = "api-"
                          , i = n + "ixn-"
                          , s = "addPageAction"
                          , o = "addToTrace"
                          , a = "addRelease"
                          , c = "finished"
                          , d = "interaction"
                          , u = "log"
                          , l = "noticeError"
                          , f = "pauseReplay"
                          , h = "recordCustomEvent"
                          , p = "recordReplay"
                          , g = "register"
                          , m = "setApplicationVersion"
                          , v = "setCurrentRouteName"
                          , y = "setCustomAttribute"
                          , b = "setErrorHandler"
                          , w = "setPageViewName"
                          , R = "setUserId"
                          , E = "start"
                          , T = "wrapLogger"
                          , A = "measure"
                          , x = "consent"
                    }
                    ,
                    5205: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            j: () => x
                        });
                        var n = r(384)
                          , i = r(1741);
                        var s = r(2555)
                          , o = r(3333);
                        const a = e => {
                            if (!e || "string" != typeof e)
                                return !1;
                            try {
                                document.createDocumentFragment().querySelector(e)
                            } catch {
                                return !1
                            }
                            return !0
                        }
                        ;
                        var c = r(2614)
                          , d = r(944)
                          , u = r(8122);
                        const l = "[data-nr-mask]"
                          , f = e => (0,
                        u.a)(e, ( () => {
                            const e = {
                                feature_flags: [],
                                experimental: {
                                    allow_registered_children: !1,
                                    resources: !1
                                },
                                mask_selector: "*",
                                block_selector: "[data-nr-block]",
                                mask_input_options: {
                                    color: !1,
                                    date: !1,
                                    "datetime-local": !1,
                                    email: !1,
                                    month: !1,
                                    number: !1,
                                    range: !1,
                                    search: !1,
                                    tel: !1,
                                    text: !1,
                                    time: !1,
                                    url: !1,
                                    week: !1,
                                    textarea: !1,
                                    select: !1,
                                    password: !0
                                }
                            };
                            return {
                                ajax: {
                                    deny_list: void 0,
                                    block_internal: !0,
                                    enabled: !0,
                                    autoStart: !0
                                },
                                api: {
                                    get allow_registered_children() {
                                        return e.feature_flags.includes(o.$v.REGISTER) || e.experimental.allow_registered_children
                                    },
                                    set allow_registered_children(t) {
                                        e.experimental.allow_registered_children = t
                                    },
                                    duplicate_registered_data: !1
                                },
                                browser_consent_mode: {
                                    enabled: !1
                                },
                                distributed_tracing: {
                                    enabled: void 0,
                                    exclude_newrelic_header: void 0,
                                    cors_use_newrelic_header: void 0,
                                    cors_use_tracecontext_headers: void 0,
                                    allowed_origins: void 0
                                },
                                get feature_flags() {
                                    return e.feature_flags
                                },
                                set feature_flags(t) {
                                    e.feature_flags = t
                                },
                                generic_events: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                harvest: {
                                    interval: 30
                                },
                                jserrors: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                logging: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                metrics: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                obfuscate: void 0,
                                page_action: {
                                    enabled: !0
                                },
                                page_view_event: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                page_view_timing: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                performance: {
                                    capture_marks: !1,
                                    capture_measures: !1,
                                    capture_detail: !0,
                                    resources: {
                                        get enabled() {
                                            return e.feature_flags.includes(o.$v.RESOURCES) || e.experimental.resources
                                        },
                                        set enabled(t) {
                                            e.experimental.resources = t
                                        },
                                        asset_types: [],
                                        first_party_domains: [],
                                        ignore_newrelic: !0
                                    }
                                },
                                privacy: {
                                    cookies_enabled: !0
                                },
                                proxy: {
                                    assets: void 0,
                                    beacon: void 0
                                },
                                session: {
                                    expiresMs: c.wk,
                                    inactiveMs: c.BB
                                },
                                session_replay: {
                                    autoStart: !0,
                                    enabled: !1,
                                    preload: !1,
                                    sampling_rate: 10,
                                    error_sampling_rate: 100,
                                    collect_fonts: !1,
                                    inline_images: !1,
                                    fix_stylesheets: !0,
                                    mask_all_inputs: !0,
                                    get mask_text_selector() {
                                        return e.mask_selector
                                    },
                                    set mask_text_selector(t) {
                                        a(t) ? e.mask_selector = "".concat(t, ",").concat(l) : "" === t || null === t ? e.mask_selector = l : (0,
                                        d.R)(5, t)
                                    },
                                    get block_class() {
                                        return "nr-block"
                                    },
                                    get ignore_class() {
                                        return "nr-ignore"
                                    },
                                    get mask_text_class() {
                                        return "nr-mask"
                                    },
                                    get block_selector() {
                                        return e.block_selector
                                    },
                                    set block_selector(t) {
                                        a(t) ? e.block_selector += ",".concat(t) : "" !== t && (0,
                                        d.R)(6, t)
                                    },
                                    get mask_input_options() {
                                        return e.mask_input_options
                                    },
                                    set mask_input_options(t) {
                                        t && "object" == typeof t ? e.mask_input_options = {
                                            ...t,
                                            password: !0
                                        } : (0,
                                        d.R)(7, t)
                                    }
                                },
                                session_trace: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                soft_navigations: {
                                    enabled: !0,
                                    autoStart: !0
                                },
                                ssl: void 0,
                                user_actions: {
                                    enabled: !0,
                                    elementAttributes: ["id", "className", "tagName", "type"]
                                }
                            }
                        }
                        )());
                        var h = r(6154)
                          , p = r(9324);
                        let g = 0;
                        const m = {
                            buildEnv: p.F3,
                            distMethod: p.Xs,
                            version: p.xv,
                            originTime: h.WN
                        }
                          , v = {
                            consented: !1
                        }
                          , y = {
                            activatedFeatures: void 0,
                            appMetadata: {},
                            configured: !1,
                            get consented() {
                                return this.session?.state?.consent || v.consented
                            },
                            set consented(e) {
                                v.consented = e
                            },
                            customTransaction: void 0,
                            denyList: [],
                            disabled: !1,
                            drainRegistry: new Map,
                            harvester: void 0,
                            isolatedBacklog: !1,
                            isRecording: !1,
                            loaderType: void 0,
                            maxBytes: 3e4,
                            obfuscator: void 0,
                            onerror: void 0,
                            ptid: void 0,
                            releaseIds: {},
                            session: void 0,
                            timeKeeper: void 0,
                            registeredEntities: [],
                            jsAttributesMetadata: {
                                bytes: 0
                            },
                            get harvestCount() {
                                return ++g
                            }
                        }
                          , b = e => {
                            const t = (0,
                            u.a)(e, y)
                              , r = Object.keys(m).reduce( (e, t) => (e[t] = {
                                value: m[t],
                                writable: !1,
                                configurable: !0,
                                enumerable: !0
                            },
                            e), {});
                            return Object.defineProperties(t, r)
                        }
                          , w = e => {
                            const t = e.startsWith("http");
                            e += "/",
                            r.p = t ? e : "https://" + e
                        }
                        ;
                        var R = r(7836)
                          , E = r(3241);
                        const T = {
                            accountID: void 0,
                            trustKey: void 0,
                            agentID: void 0,
                            licenseKey: void 0,
                            applicationID: void 0,
                            xpid: void 0
                        }
                          , A = e => (0,
                        u.a)(e, T);
                        function x(e, t={}, r, o) {
                            let {init: a, info: c, loader_config: d, runtime: u={}, exposed: l=!0} = t;
                            if (!c) {
                                const e = (0,
                                n.pV)();
                                a = e.init,
                                c = e.info,
                                d = e.loader_config
                            }
                            e.init = f(a || {}),
                            e.loader_config = A(d || {}),
                            c.jsAttributes ??= {},
                            h.bv && (c.jsAttributes.isWorker = !0),
                            e.info = (0,
                            s.D)(c);
                            const p = e.init;
                            e.runtime ??= b(u),
                            p.proxy.assets && w(p.proxy.assets),
                            e.runtime.configured || (Object.defineProperty(e, "beacons", {
                                get: () => [e.info.beacon, e.info.errorBeacon, e.init.proxy.assets, e.init.proxy.beacon].filter(Boolean)
                            }),
                            Object.defineProperty(e.runtime, "denyList", {
                                get: () => [...e.init.ajax.deny_list || [], ...e.init.ajax.block_internal ? e.beacons : []]
                            }),
                            e.runtime.ptid = e.agentIdentifier,
                            function(e) {
                                const t = (0,
                                n.pV)();
                                Object.getOwnPropertyNames(i.W.prototype).forEach(r => {
                                    const n = i.W.prototype[r];
                                    if ("function" != typeof n || "constructor" === n)
                                        return;
                                    let s = t[r];
                                    e[r] && !1 !== e.exposed && "micro-agent" !== e.runtime?.loaderType && (t[r] = (...t) => {
                                        const n = e[r](...t);
                                        return s ? s(...t) : n
                                    }
                                    )
                                }
                                )
                            }(e),
                            e.runtime.loaderType = r,
                            e.ee = R.ee.get(e.agentIdentifier),
                            e.exposed = l,
                            (0,
                            E.W)({
                                drained: !!e.runtime.activatedFeatures,
                                type: "lifecycle",
                                name: "initialize",
                                feature: void 0,
                                data: e.config
                            }),
                            e.runtime.configured = !0)
                        }
                    }
                    ,
                    5270: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            Aw: () => o,
                            SR: () => s,
                            rF: () => a
                        });
                        var n = r(384)
                          , i = r(7767);
                        function s(e) {
                            return !!(0,
                            n.dV)().o.MO && (0,
                            i.V)(e) && !0 === e?.session_trace.enabled
                        }
                        function o(e) {
                            return !0 === e?.session_replay.preload && s(e)
                        }
                        function a(e, t) {
                            try {
                                if ("string" == typeof t?.type) {
                                    if ("password" === t.type.toLowerCase())
                                        return "*".repeat(e?.length || 0);
                                    if (void 0 !== t?.dataset?.nrUnmask || t?.classList?.contains("nr-unmask"))
                                        return e
                                }
                            } catch (e) {}
                            return "string" == typeof e ? e.replace(/[\S]/g, "*") : "*".repeat(e?.length || 0)
                        }
                    }
                    ,
                    5289: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            GG: () => o,
                            Qr: () => c,
                            sB: () => a
                        });
                        var n = r(3878)
                          , i = r(6389);
                        function s() {
                            return "undefined" == typeof document || "complete" === document.readyState
                        }
                        function o(e, t) {
                            if (s())
                                return e();
                            const r = (0,
                            i.J)(e)
                              , o = setInterval( () => {
                                s() && (clearInterval(o),
                                r())
                            }
                            , 500);
                            (0,
                            n.sp)("load", r, t)
                        }
                        function a(e) {
                            if (s())
                                return e();
                            (0,
                            n.DD)("DOMContentLoaded", e)
                        }
                        function c(e) {
                            if (s())
                                return e();
                            (0,
                            n.sp)("popstate", e)
                        }
                    }
                    ,
                    5607: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            W: () => n
                        });
                        const n = (0,
                        r(9566).bz)()
                    }
                    ,
                    5871: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            AZ: () => u,
                            QL: () => l,
                            Qr: () => f
                        });
                        var n = r(6154)
                          , i = r(1863)
                          , s = r(9119)
                          , o = r(7866);
                        let a;
                        try {
                            a = u(l())[0]
                        } catch (e) {
                            a = u(e)[0]
                        }
                        const c = new Set;
                        let d = [];
                        if (n.gm.PerformanceObserver?.supportedEntryTypes.includes("resource")) {
                            new PerformanceObserver(e => {
                                e.getEntries().forEach(e => {
                                    if ((e => "script" === e.initiatorType || ["link", "fetch"].includes(e.initiatorType) && e.name.endsWith(".js"))(e)) {
                                        c.size > 250 && c.delete(c.values().next().value),
                                        c.add(e);
                                        const t = [];
                                        d.forEach( ({test: r, addedAt: n}, s) => {
                                            (r(e) || (0,
                                            i.t)() - n > 1e4) && t.push(s)
                                        }
                                        ),
                                        d = d.filter( (e, r) => !t.includes(r))
                                    }
                                }
                                )
                            }
                            ).observe({
                                type: "resource",
                                buffered: !0
                            })
                        }
                        function u(e) {
                            if (!e || "string" != typeof e)
                                return [];
                            const t = new Set
                              , r = e.split("\n");
                            for (const e of r) {
                                const r = e.match(o.cn) || e.match(o.hB) || e.match(o.fL);
                                if (r && r[2])
                                    t.add((0,
                                    s.L)(r[2]));
                                else {
                                    const r = e.match(/\(([^)]+\.js):\d+:\d+\)/) || e.match(/^\s+at\s+([^\s(]+\.js):\d+:\d+/);
                                    r && r[1] && t.add((0,
                                    s.L)(r[1]))
                                }
                            }
                            return [...t]
                        }
                        function l() {
                            let e;
                            try {
                                const t = Error.stackTraceLimit;
                                Error.stackTraceLimit = 50,
                                e = (new Error).stack,
                                Error.stackTraceLimit = t
                            } catch (t) {
                                e = (new Error).stack
                            }
                            return e
                        }
                        function f() {
                            const e = {
                                registeredAt: (0,
                                i.t)(),
                                reportedAt: void 0,
                                fetchStart: 0,
                                fetchEnd: 0,
                                asset: void 0,
                                type: "unknown"
                            }
                              , t = l();
                            if (!t)
                                return e;
                            const r = n.gm.performance?.getEntriesByType("navigation")?.[0]?.name || "";
                            try {
                                const o = u(t)
                                  , f = (o.length > 1 ? o.filter(e => !a.endsWith(e) && !e.endsWith(a)) : o)[0];
                                if (!f)
                                    return e;
                                if (r.includes(f))
                                    return e.asset = (0,
                                    s.L)(r),
                                    e.type = "inline",
                                    e;
                                const h = performance.getEntriesByType("resource").find(p) || [...c].find(p);
                                function p(e) {
                                    const t = (0,
                                    s.L)(e.name);
                                    return t.endsWith(f) || f.endsWith(t)
                                }
                                function g(t) {
                                    e.fetchStart = Math.floor(t.startTime),
                                    e.fetchEnd = Math.floor(t.responseEnd),
                                    e.asset = t.name,
                                    e.type = t.initiatorType
                                }
                                h ? g(h) : function(e) {
                                    if (!e || !n.gm.document)
                                        return !1;
                                    try {
                                        const t = n.gm.document.querySelectorAll('link[rel="preload"][as="script"]');
                                        for (const r of t)
                                            if ((0,
                                            s.L)(r.href) === e)
                                                return !0
                                    } catch (e) {}
                                    return !1
                                }(f) && (e.asset = f,
                                e.type = "preload",
                                d.push({
                                    addedAt: (0,
                                    i.t)(),
                                    test: e => !!p(e) && (g(e),
                                    !0)
                                }))
                            } catch (m) {}
                            return e
                        }
                    }
                    ,
                    6154: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            OF: () => d,
                            RI: () => i,
                            WN: () => f,
                            bv: () => s,
                            gm: () => o,
                            lR: () => l,
                            m: () => c,
                            mw: () => a,
                            sb: () => u,
                            zk: () => h
                        });
                        var n = r(1863);
                        const i = "undefined" != typeof window && !!window.document
                          , s = "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self.navigator instanceof WorkerNavigator || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis.navigator instanceof WorkerNavigator)
                          , o = i ? window : "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis)
                          , a = Boolean("hidden" === o?.document?.visibilityState)
                          , c = "" + o?.location
                          , d = /iPad|iPhone|iPod/.test(o.navigator?.userAgent)
                          , u = d && "undefined" == typeof SharedWorker
                          , l = ( () => {
                            const e = o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
                            return Array.isArray(e) && e.length >= 2 ? +e[1] : 0
                        }
                        )()
                          , f = Date.now() - (0,
                        n.t)()
                          , h = () => {
                            const e = o?.performance?.getEntriesByType?.("navigation")?.[0];
                            if (e && e.responseStart > 0 && e.responseStart < o.performance.now())
                                return e
                        }
                    }
                    ,
                    6344: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            BB: () => u,
                            Qb: () => l,
                            TZ: () => i,
                            Ug: () => o,
                            Vh: () => s,
                            _s: () => a,
                            bc: () => d,
                            yP: () => c
                        });
                        var n = r(2614);
                        const i = r(860).K7.sessionReplay
                          , s = "errorDuringReplay"
                          , o = .12
                          , a = {
                            DomContentLoaded: 0,
                            Load: 1,
                            FullSnapshot: 2,
                            IncrementalSnapshot: 3,
                            Meta: 4,
                            Custom: 5
                        }
                          , c = {
                            [n.g.ERROR]: 15e3,
                            [n.g.FULL]: 3e5,
                            [n.g.OFF]: 0
                        }
                          , d = {
                            RESET: {
                                message: "Session was reset",
                                sm: "Reset"
                            },
                            IMPORT: {
                                message: "Recorder failed to import",
                                sm: "Import"
                            },
                            TOO_MANY: {
                                message: "429: Too Many Requests",
                                sm: "Too-Many"
                            },
                            TOO_BIG: {
                                message: "Payload was too large",
                                sm: "Too-Big"
                            },
                            CROSS_TAB: {
                                message: "Session Entity was set to OFF on another tab",
                                sm: "Cross-Tab"
                            },
                            ENTITLEMENTS: {
                                message: "Session Replay is not allowed and will not be started",
                                sm: "Entitlement"
                            }
                        }
                          , u = 5e3
                          , l = {
                            API: "api",
                            RESUME: "resume",
                            SWITCH_TO_FULL: "switchToFull",
                            INITIALIZE: "initialize",
                            PRELOAD: "preload"
                        }
                    }
                    ,
                    6389: (e, t, r) => {
                        "use strict";
                        function n(e, t=500, r={}) {
                            const n = r?.leading || !1;
                            let i;
                            return (...r) => {
                                n && void 0 === i && (e.apply(this, r),
                                i = setTimeout( () => {
                                    i = clearTimeout(i)
                                }
                                , t)),
                                n || (clearTimeout(i),
                                i = setTimeout( () => {
                                    e.apply(this, r)
                                }
                                , t))
                            }
                        }
                        function i(e) {
                            let t = !1;
                            return (...r) => {
                                t || (t = !0,
                                e.apply(this, r))
                            }
                        }
                        r.d(t, {
                            J: () => i,
                            s: () => n
                        })
                    }
                    ,
                    6630: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            T: () => n
                        });
                        const n = r(860).K7.pageViewEvent
                    }
                    ,
                    6774: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            T: () => n
                        });
                        const n = r(860).K7.jserrors
                    }
                    ,
                    7295: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            Xv: () => o,
                            gX: () => i,
                            iW: () => s
                        });
                        var n = [];
                        function i(e) {
                            if (!e || s(e))
                                return !1;
                            if (0 === n.length)
                                return !0;
                            if ("*" === n[0].hostname)
                                return !1;
                            for (var t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r.hostname.test(e.hostname) && r.pathname.test(e.pathname))
                                    return !1
                            }
                            return !0
                        }
                        function s(e) {
                            return void 0 === e.hostname
                        }
                        function o(e) {
                            if (n = [],
                            e && e.length)
                                for (var t = 0; t < e.length; t++) {
                                    let r = e[t];
                                    if (!r)
                                        continue;
                                    if ("*" === r)
                                        return void (n = [{
                                            hostname: "*"
                                        }]);
                                    0 === r.indexOf("http://") ? r = r.substring(7) : 0 === r.indexOf("https://") && (r = r.substring(8));
                                    const i = r.indexOf("/");
                                    let s, o;
                                    i > 0 ? (s = r.substring(0, i),
                                    o = r.substring(i)) : (s = r,
                                    o = "*");
                                    let[c] = s.split(":");
                                    n.push({
                                        hostname: a(c),
                                        pathname: a(o, !0)
                                    })
                                }
                        }
                        function a(e, t=!1) {
                            const r = e.replace(/[.+?^${}()|[\]\\]/g, e => "\\" + e).replace(/\*/g, ".*?");
                            return new RegExp((t ? "^" : "") + r + "$")
                        }
                    }
                    ,
                    7485: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            D: () => i
                        });
                        var n = r(6154);
                        function i(e) {
                            if (0 === (e || "").indexOf("data:"))
                                return {
                                    protocol: "data"
                                };
                            try {
                                const t = new URL(e,location.href)
                                  , r = {
                                    port: t.port,
                                    hostname: t.hostname,
                                    pathname: t.pathname,
                                    search: t.search,
                                    protocol: t.protocol.slice(0, t.protocol.indexOf(":")),
                                    sameOrigin: t.protocol === n.gm?.location?.protocol && t.host === n.gm?.location?.host
                                };
                                return r.port && "" !== r.port || ("http:" === t.protocol && (r.port = "80"),
                                "https:" === t.protocol && (r.port = "443")),
                                r.pathname && "" !== r.pathname ? r.pathname.startsWith("/") || (r.pathname = "/".concat(r.pathname)) : r.pathname = "/",
                                r
                            } catch (e) {
                                return {}
                            }
                        }
                    }
                    ,
                    7699: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            It: () => s,
                            KC: () => a,
                            No: () => i,
                            qh: () => o
                        });
                        var n = r(860);
                        const i = 16e3
                          , s = 1e6
                          , o = "SESSION_ERROR"
                          , a = {
                            [n.K7.logging]: !0,
                            [n.K7.genericEvents]: !0,
                            [n.K7.jserrors]: !0,
                            [n.K7.ajax]: !0
                        }
                    }
                    ,
                    7767: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            V: () => i
                        });
                        var n = r(6154);
                        const i = e => n.RI && !0 === e?.privacy.cookies_enabled
                    }
                    ,
                    7836: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            P: () => a,
                            ee: () => c
                        });
                        var n = r(384)
                          , i = r(8990)
                          , s = r(2646)
                          , o = r(5607);
                        const a = "nr@context:".concat(o.W)
                          , c = function e(t, r) {
                            var n = {}
                              , o = {}
                              , u = {}
                              , l = !1;
                            try {
                                l = 16 === r.length && d.initializedAgents?.[r]?.runtime.isolatedBacklog
                            } catch (e) {}
                            var f = {
                                on: p,
                                addEventListener: p,
                                removeEventListener: function(e, t) {
                                    var r = n[e];
                                    if (!r)
                                        return;
                                    for (var i = 0; i < r.length; i++)
                                        r[i] === t && r.splice(i, 1)
                                },
                                emit: function(e, r, n, i, s) {
                                    !1 !== s && (s = !0);
                                    if (c.aborted && !i)
                                        return;
                                    t && s && t.emit(e, r, n);
                                    var a = h(n);
                                    g(e).forEach(e => {
                                        e.apply(a, r)
                                    }
                                    );
                                    var d = v()[o[e]];
                                    d && d.push([f, e, r, a]);
                                    return a
                                },
                                get: m,
                                listeners: g,
                                context: h,
                                buffer: function(e, t) {
                                    const r = v();
                                    if (t = t || "feature",
                                    f.aborted)
                                        return;
                                    Object.entries(e || {}).forEach( ([e,n]) => {
                                        o[n] = t,
                                        t in r || (r[t] = [])
                                    }
                                    )
                                },
                                abort: function() {
                                    f._aborted = !0,
                                    Object.keys(f.backlog).forEach(e => {
                                        delete f.backlog[e]
                                    }
                                    )
                                },
                                isBuffering: function(e) {
                                    return !!v()[o[e]]
                                },
                                debugId: r,
                                backlog: l ? {} : t && "object" == typeof t.backlog ? t.backlog : {},
                                isolatedBacklog: l
                            };
                            return Object.defineProperty(f, "aborted", {
                                get: () => {
                                    let e = f._aborted || !1;
                                    return e || (t && (e = t.aborted),
                                    e)
                                }
                            }),
                            f;
                            function h(e) {
                                return e && e instanceof s.y ? e : e ? (0,
                                i.I)(e, a, () => new s.y(a)) : new s.y(a)
                            }
                            function p(e, t) {
                                n[e] = g(e).concat(t)
                            }
                            function g(e) {
                                return n[e] || []
                            }
                            function m(t) {
                                return u[t] = u[t] || e(f, t)
                            }
                            function v() {
                                return f.backlog
                            }
                        }(void 0, "globalEE")
                          , d = (0,
                        n.Zm)();
                        d.ee || (d.ee = c)
                    }
                    ,
                    7866: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            Nc: () => s,
                            cn: () => a,
                            fL: () => i,
                            h3: () => n,
                            hB: () => o
                        });
                        const n = /function (.+?)\s*\(/
                          , i = /^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i
                          , s = /^\s*at Function code \(Function code:\d+:\d+\)\s*/i
                          , o = /^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i
                          , a = /^\s*(?:([^@]*)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i
                    }
                    ,
                    8122: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            a: () => i
                        });
                        var n = r(944);
                        function i(e, t) {
                            try {
                                if (!e || "object" != typeof e)
                                    return (0,
                                    n.R)(3);
                                if (!t || "object" != typeof t)
                                    return (0,
                                    n.R)(4);
                                const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t))
                                  , s = 0 === Object.keys(r).length ? e : r;
                                for (let o in s)
                                    if (void 0 !== e[o])
                                        try {
                                            if (null === e[o]) {
                                                r[o] = null;
                                                continue
                                            }
                                            Array.isArray(e[o]) && Array.isArray(t[o]) ? r[o] = Array.from(new Set([...e[o], ...t[o]])) : e[o]instanceof Map || e[o]instanceof Set || e[o]instanceof Date || e[o]instanceof RegExp ? r[o] = e[o] : "object" == typeof e[o] && "object" == typeof t[o] ? r[o] = i(e[o], t[o]) : r[o] = e[o]
                                        } catch (e) {
                                            r[o] || (0,
                                            n.R)(1, e)
                                        }
                                return r
                            } catch (e) {
                                (0,
                                n.R)(2, e)
                            }
                        }
                    }
                    ,
                    8139: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            u: () => f
                        });
                        var n = r(7836)
                          , i = r(3434)
                          , s = r(8990)
                          , o = r(6154);
                        const a = {}
                          , c = o.gm.XMLHttpRequest
                          , d = "addEventListener"
                          , u = "removeEventListener"
                          , l = "nr@wrapped:".concat(n.P);
                        function f(e) {
                            var t = function(e) {
                                return (e || n.ee).get("events")
                            }(e);
                            if (a[t.debugId]++)
                                return t;
                            a[t.debugId] = 1;
                            var r = (0,
                            i.YM)(t, !0);
                            function f(e) {
                                r.inPlace(e, [d, u], "-", p)
                            }
                            function p(e, t) {
                                return e[1]
                            }
                            return "getPrototypeOf"in Object && (o.RI && h(document, f),
                            c && h(c.prototype, f),
                            h(o.gm, f)),
                            t.on(d + "-start", function(e, t) {
                                var n = e[1];
                                if (null !== n && ("function" == typeof n || "object" == typeof n) && "newrelic" !== e[0]) {
                                    var i = (0,
                                    s.I)(n, l, function() {
                                        var e = {
                                            object: function() {
                                                if ("function" != typeof n.handleEvent)
                                                    return;
                                                return n.handleEvent.apply(n, arguments)
                                            },
                                            function: n
                                        }[typeof n];
                                        return e ? r(e, "fn-", null, e.name || "anonymous") : n
                                    });
                                    this.wrapped = e[1] = i
                                }
                            }),
                            t.on(u + "-start", function(e) {
                                e[1] = this.wrapped || e[1]
                            }),
                            t
                        }
                        function h(e, t, ...r) {
                            let n = e;
                            for (; "object" == typeof n && !Object.prototype.hasOwnProperty.call(n, d); )
                                n = Object.getPrototypeOf(n);
                            n && t(n, ...r)
                        }
                    }
                    ,
                    8362: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            d: () => s
                        });
                        var n = r(9566)
                          , i = r(1741);
                        class s extends i.W {
                            agentIdentifier = (0,
                            n.LA)(16)
                        }
                    }
                    ,
                    8374: (e, t, r) => {
                        r.nc = ( () => {
                            try {
                                return document?.currentScript?.nonce
                            } catch (e) {}
                            return ""
                        }
                        )()
                    }
                    ,
                    8990: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            I: () => i
                        });
                        var n = Object.prototype.hasOwnProperty;
                        function i(e, t, r) {
                            if (n.call(e, t))
                                return e[t];
                            var i = r();
                            if (Object.defineProperty && Object.keys)
                                try {
                                    return Object.defineProperty(e, t, {
                                        value: i,
                                        writable: !0,
                                        enumerable: !1
                                    }),
                                    i
                                } catch (e) {}
                            return e[t] = i,
                            i
                        }
                    }
                    ,
                    9119: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            L: () => s
                        });
                        var n = /([^?#]*)[^#]*(#[^?]*|$).*/
                          , i = /([^?#]*)().*/;
                        function s(e, t) {
                            return e ? e.replace(t ? n : i, "$1$2") : e
                        }
                    }
                    ,
                    9300: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            T: () => n
                        });
                        const n = r(860).K7.ajax
                    }
                    ,
                    9324: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            AJ: () => o,
                            F3: () => i,
                            Xs: () => s,
                            Yq: () => a,
                            xv: () => n
                        });
                        const n = "1.312.1"
                          , i = "PROD"
                          , s = "CDN"
                          , o = "@newrelic/rrweb"
                          , a = "1.1.0"
                    }
                    ,
                    9566: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            LA: () => a,
                            ZF: () => c,
                            bz: () => o,
                            el: () => d
                        });
                        var n = r(6154);
                        const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                        function s(e, t) {
                            return e ? 15 & e[t] : 16 * Math.random() | 0
                        }
                        function o() {
                            const e = n.gm?.crypto || n.gm?.msCrypto;
                            let t, r = 0;
                            return e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(30))),
                            i.split("").map(e => "x" === e ? s(t, r++).toString(16) : "y" === e ? (3 & s() | 8).toString(16) : e).join("")
                        }
                        function a(e) {
                            const t = n.gm?.crypto || n.gm?.msCrypto;
                            let r, i = 0;
                            t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
                            const o = [];
                            for (var a = 0; a < e; a++)
                                o.push(s(r, i++).toString(16));
                            return o.join("")
                        }
                        function c() {
                            return a(16)
                        }
                        function d() {
                            return a(32)
                        }
                    }
                    ,
                    9908: (e, t, r) => {
                        "use strict";
                        r.d(t, {
                            d: () => n,
                            p: () => i
                        });
                        var n = r(7836).ee.get("handle");
                        function i(e, t, r, i, s) {
                            s ? (s.buffer([e], i),
                            s.emit(e, t, r)) : (n.buffer([e], i),
                            n.emit(e, t, r))
                        }
                    }
                }, n = {};
                function i(e) {
                    var t = n[e];
                    if (void 0 !== t)
                        return t.exports;
                    var s = n[e] = {
                        exports: {}
                    };
                    return r[e](s, s.exports, i),
                    s.exports
                }
                i.m = r,
                i.d = (e, t) => {
                    for (var r in t)
                        i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r]
                        })
                }
                ,
                i.f = {},
                i.e = e => Promise.all(Object.keys(i.f).reduce( (t, r) => (i.f[r](e, t),
                t), [])),
                i.u = e => ({
                    212: "nr-spa-compressor",
                    249: "nr-spa-recorder",
                    478: "nr-spa"
                }[e] + "-1.312.1.min.js"),
                i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                e = {},
                t = "NRBA-1.312.1.PROD:",
                i.l = (r, n, s, o) => {
                    if (e[r])
                        e[r].push(n);
                    else {
                        var a, c;
                        if (void 0 !== s)
                            for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
                                var l = d[u];
                                if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + s) {
                                    a = l;
                                    break
                                }
                            }
                        if (!a) {
                            c = !0;
                            var f = {
                                478: "sha512-dZhtzLTOyIsYHGHWAipD4+6jjzEIycTqL1F9NwinUiYL8cf0kIXf7WUbskVMB7p/nhDF+zJ9Bfd6LU9PMn0Yhw==",
                                249: "sha512-SJV3E/3SdEyaahYm8FHEFwhJvDQy/nRJJV/o+18MgXENJWR/8tfvIKfc4LE1xV9RniczXT7eQLcZi2G99UlugA==",
                                212: "sha512-dRFaJY5mEo/nxzPqxS/sHnvU66fpkTff91nWUFOafyPR61R+r2GZiy81lT47BWA4MouemCj4tvhHmn8Ofh/UOg=="
                            };
                            (a = document.createElement("script")).charset = "utf-8",
                            i.nc && a.setAttribute("nonce", i.nc),
                            a.setAttribute("data-webpack", t + s),
                            a.src = r,
                            0 !== a.src.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous"),
                            f[o] && (a.integrity = f[o])
                        }
                        e[r] = [n];
                        var h = (t, n) => {
                            a.onerror = a.onload = null,
                            clearTimeout(p);
                            var i = e[r];
                            if (delete e[r],
                            a.parentNode && a.parentNode.removeChild(a),
                            i && i.forEach(e => e(n)),
                            t)
                                return t(n)
                        }
                          , p = setTimeout(h.bind(null, void 0, {
                            type: "timeout",
                            target: a
                        }), 12e4);
                        a.onerror = h.bind(null, a.onerror),
                        a.onload = h.bind(null, a.onload),
                        c && document.head.appendChild(a)
                    }
                }
                ,
                i.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                i.p = "https://js-agent.newrelic.com/",
                ( () => {
                    var e = {
                        38: 0,
                        788: 0
                    };
                    i.f.j = (t, r) => {
                        var n = i.o(e, t) ? e[t] : void 0;
                        if (0 !== n)
                            if (n)
                                r.push(n[2]);
                            else {
                                var s = new Promise( (r, i) => n = e[t] = [r, i]);
                                r.push(n[2] = s);
                                var o = i.p + i.u(t)
                                  , a = new Error;
                                i.l(o, r => {
                                    if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                                    n)) {
                                        var s = r && ("load" === r.type ? "missing" : r.type)
                                          , o = r && r.target && r.target.src;
                                        a.message = "Loading chunk " + t + " failed: (" + s + ": " + o + ")",
                                        a.name = "ChunkLoadError",
                                        a.type = s,
                                        a.request = o,
                                        n[1](a)
                                    }
                                }
                                , "chunk-" + t, t)
                            }
                    }
                    ;
                    var t = (t, r) => {
                        var n, s, [o,a,c] = r, d = 0;
                        if (o.some(t => 0 !== e[t])) {
                            for (n in a)
                                i.o(a, n) && (i.m[n] = a[n]);
                            if (c)
                                c(i)
                        }
                        for (t && t(r); d < o.length; d++)
                            s = o[d],
                            i.o(e, s) && e[s] && e[s][0](),
                            e[s] = 0
                    }
                      , r = self["webpackChunk:NRBA-1.312.1.PROD"] = self["webpackChunk:NRBA-1.312.1.PROD"] || [];
                    r.forEach(t.bind(null, 0)),
                    r.push = t.bind(null, r.push.bind(r))
                }
                )(),
                ( () => {
                    "use strict";
                    i(8374);
                    var e = i(8362)
                      , t = i(860);
                    const r = Object.values(t.K7);
                    var n = i(5205);
                    var s = i(9908)
                      , o = i(1863)
                      , a = i(4261)
                      , c = i(1738);
                    var d = i(1687)
                      , u = i(4234)
                      , l = i(5289)
                      , f = i(6154)
                      , h = i(944)
                      , p = i(5270)
                      , g = i(7767)
                      , m = i(6389)
                      , v = i(7699);
                    class y extends u.W {
                        constructor(e, t) {
                            super(e, t),
                            this.abortHandler = void 0,
                            this.featAggregate = void 0,
                            this.loadedSuccessfully = void 0,
                            this.onAggregateImported = new Promise(e => {
                                this.loadedSuccessfully = e
                            }
                            ),
                            this.deferred = Promise.resolve(),
                            !1 === e.init[this.featureName].autoStart ? this.deferred = new Promise( (t, r) => {
                                this.ee.on("manual-start-all", (0,
                                m.J)( () => {
                                    (0,
                                    d.Ak)(e, this.featureName),
                                    t()
                                }
                                ))
                            }
                            ) : (0,
                            d.Ak)(e, t)
                        }
                        importAggregator(e, t, r={}) {
                            if (this.featAggregate)
                                return;
                            const n = async () => {
                                let n;
                                await this.deferred;
                                try {
                                    if ((0,
                                    g.V)(e.init)) {
                                        const {setupAgentSession: t} = await i.e(478).then(i.bind(i, 8766));
                                        n = t(e)
                                    }
                                } catch (e) {
                                    (0,
                                    h.R)(20, e),
                                    this.ee.emit("internal-error", [e]),
                                    (0,
                                    s.p)(v.qh, [e], void 0, this.featureName, this.ee)
                                }
                                try {
                                    if (!this.#t(this.featureName, n, e.init))
                                        return (0,
                                        d.Ze)(this.agentRef, this.featureName),
                                        void this.loadedSuccessfully(!1);
                                    const {Aggregate: i} = await t();
                                    this.featAggregate = new i(e,r),
                                    e.runtime.harvester.initializedAggregates.push(this.featAggregate),
                                    this.loadedSuccessfully(!0)
                                } catch (e) {
                                    (0,
                                    h.R)(34, e),
                                    this.abortHandler?.(),
                                    (0,
                                    d.Ze)(this.agentRef, this.featureName, !0),
                                    this.loadedSuccessfully(!1),
                                    this.ee && this.ee.abort()
                                }
                            }
                            ;
                            f.RI ? (0,
                            l.GG)( () => n(), !0) : n()
                        }
                        #t(e, r, n) {
                            if (this.blocked)
                                return !1;
                            switch (e) {
                            case t.K7.sessionReplay:
                                return (0,
                                p.SR)(n) && !!r;
                            case t.K7.sessionTrace:
                                return !!r;
                            default:
                                return !0
                            }
                        }
                    }
                    var b = i(6630)
                      , w = i(2614)
                      , R = i(3241);
                    class E extends y {
                        static featureName = b.T;
                        constructor(e) {
                            var t;
                            super(e, b.T),
                            this.setupInspectionEvents(),
                            t = e,
                            (0,
                            c.Y)(a.Fw, function(e, r) {
                                "string" == typeof e && ("/" !== e.charAt(0) && (e = "/" + e),
                                t.runtime.customTransaction = (r || "http://custom.transaction") + e,
                                (0,
                                s.p)(a.Pl + a.Fw, [(0,
                                o.t)()], void 0, void 0, t.ee))
                            }, t),
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 5839)))
                        }
                        setupInspectionEvents() {
                            const e = (e, t) => {
                                e && (0,
                                R.W)({
                                    timeStamp: e.timeStamp,
                                    loaded: "complete" === e.target.readyState,
                                    type: "window",
                                    name: t,
                                    data: e.target.location + ""
                                })
                            }
                            ;
                            (0,
                            l.sB)(t => {
                                e(t, "DOMContentLoaded")
                            }
                            ),
                            (0,
                            l.GG)(t => {
                                e(t, "load")
                            }
                            ),
                            (0,
                            l.Qr)(t => {
                                e(t, "navigate")
                            }
                            ),
                            this.ee.on(w.tS.UPDATE, (e, t) => {
                                (0,
                                R.W)({
                                    type: "lifecycle",
                                    name: "session",
                                    data: t
                                })
                            }
                            )
                        }
                    }
                    var T = i(384);
                    class A extends e.d {
                        constructor(e) {
                            var t;
                            (super(),
                            f.gm) ? (this.features = {},
                            (0,
                            T.bQ)(this.agentIdentifier, this),
                            this.desiredFeatures = new Set(e.features || []),
                            this.desiredFeatures.add(E),
                            (0,
                            n.j)(this, e, e.loaderType || "agent"),
                            t = this,
                            (0,
                            c.Y)(a.cD, function(e, r, n=!1) {
                                if ("string" == typeof e) {
                                    if (["string", "number", "boolean"].includes(typeof r) || null === r)
                                        return (0,
                                        c.U)(t, e, r, a.cD, n);
                                    (0,
                                    h.R)(40, typeof r)
                                } else
                                    (0,
                                    h.R)(39, typeof e)
                            }, t),
                            function(e) {
                                (0,
                                c.Y)(a.Dl, function(t, r=!1) {
                                    if ("string" != typeof t && null !== t)
                                        return void (0,
                                        h.R)(41, typeof t);
                                    const n = e.info.jsAttributes["enduser.id"];
                                    r && null != n && n !== t ? (0,
                                    s.p)(a.Pl + "setUserIdAndResetSession", [t], void 0, "session", e.ee) : (0,
                                    c.U)(e, "enduser.id", t, a.Dl, !0)
                                }, e)
                            }(this),
                            function(e) {
                                (0,
                                c.Y)(a.nb, function(t) {
                                    if ("string" == typeof t || null === t)
                                        return (0,
                                        c.U)(e, "application.version", t, a.nb, !1);
                                    (0,
                                    h.R)(42, typeof t)
                                }, e)
                            }(this),
                            function(e) {
                                (0,
                                c.Y)(a.d3, function() {
                                    e.ee.emit("manual-start-all")
                                }, e)
                            }(this),
                            function(e) {
                                (0,
                                c.Y)(a.Pv, function(t=!0) {
                                    if ("boolean" == typeof t) {
                                        if ((0,
                                        s.p)(a.Pl + a.Pv, [t], void 0, "session", e.ee),
                                        e.runtime.consented = t,
                                        t) {
                                            const t = e.features.page_view_event;
                                            t.onAggregateImported.then(e => {
                                                const r = t.featAggregate;
                                                e && !r.sentRum && r.sendRum()
                                            }
                                            )
                                        }
                                    } else
                                        (0,
                                        h.R)(65, typeof t)
                                }, e)
                            }(this),
                            this.run()) : (0,
                            h.R)(21)
                        }
                        get config() {
                            return {
                                info: this.info,
                                init: this.init,
                                loader_config: this.loader_config,
                                runtime: this.runtime
                            }
                        }
                        get api() {
                            return this
                        }
                        run() {
                            try {
                                const e = function(e) {
                                    const t = {};
                                    return r.forEach(r => {
                                        t[r] = !!e[r]?.enabled
                                    }
                                    ),
                                    t
                                }(this.init)
                                  , n = [...this.desiredFeatures];
                                n.sort( (e, r) => t.P3[e.featureName] - t.P3[r.featureName]),
                                n.forEach(r => {
                                    if (!e[r.featureName] && r.featureName !== t.K7.pageViewEvent)
                                        return;
                                    const n = function(e) {
                                        switch (e) {
                                        case t.K7.ajax:
                                            return [t.K7.jserrors];
                                        case t.K7.sessionTrace:
                                            return [t.K7.ajax, t.K7.pageViewEvent];
                                        case t.K7.sessionReplay:
                                            return [t.K7.sessionTrace];
                                        case t.K7.pageViewTiming:
                                            return [t.K7.pageViewEvent];
                                        default:
                                            return []
                                        }
                                    }(r.featureName).filter(e => !(e in this.features));
                                    n.length > 0 && (0,
                                    h.R)(36, {
                                        targetFeature: r.featureName,
                                        missingDependencies: n
                                    }),
                                    this.features[r.featureName] = new r(this)
                                }
                                )
                            } catch (e) {
                                (0,
                                h.R)(22, e);
                                for (const e in this.features)
                                    this.features[e].abortHandler?.();
                                const t = (0,
                                T.Zm)();
                                delete t.initializedAgents[this.agentIdentifier]?.features,
                                delete this.sharedAggregator;
                                return t.ee.get(this.agentIdentifier).abort(),
                                !1
                            }
                        }
                    }
                    var x = i(2843)
                      , S = i(782);
                    class _ extends y {
                        static featureName = S.T;
                        constructor(e) {
                            super(e, S.T),
                            f.RI && ((0,
                            x.u)( () => (0,
                            s.p)("docHidden", [(0,
                            o.t)()], void 0, S.T, this.ee), !0),
                            (0,
                            x.G)( () => (0,
                            s.p)("winPagehide", [(0,
                            o.t)()], void 0, S.T, this.ee)),
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 9917))))
                        }
                    }
                    var O = i(3969);
                    class P extends y {
                        static featureName = O.TZ;
                        constructor(e) {
                            super(e, O.TZ),
                            f.RI && document.addEventListener("securitypolicyviolation", e => {
                                (0,
                                s.p)(O.xV, ["Generic/CSPViolation/Detected"], void 0, this.featureName, this.ee)
                            }
                            ),
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 6555)))
                        }
                    }
                    var k = i(6774)
                      , N = i(3878)
                      , D = i(3304);
                    class j {
                        constructor(e, t, r, n, i) {
                            this.name = "UncaughtError",
                            this.message = "string" == typeof e ? e : (0,
                            D.A)(e),
                            this.sourceURL = t,
                            this.line = r,
                            this.column = n,
                            this.__newrelic = i
                        }
                    }
                    function C(e) {
                        return M(e) ? e : new j(void 0 !== e?.message ? e.message : e,e?.filename || e?.sourceURL,e?.lineno || e?.line,e?.colno || e?.col,e?.__newrelic,e?.cause)
                    }
                    function L(e) {
                        const t = "Unhandled Promise Rejection: ";
                        if (!e?.reason)
                            return;
                        if (M(e.reason)) {
                            try {
                                e.reason.message.startsWith(t) || (e.reason.message = t + e.reason.message)
                            } catch (e) {}
                            return C(e.reason)
                        }
                        const r = C(e.reason);
                        return (r.message || "").startsWith(t) || (r.message = t + r.message),
                        r
                    }
                    function I(e) {
                        if (e.error instanceof SyntaxError && !/:\d+$/.test(e.error.stack?.trim())) {
                            const t = new j(e.message,e.filename,e.lineno,e.colno,e.error.__newrelic,e.cause);
                            return t.name = SyntaxError.name,
                            t
                        }
                        return M(e.error) ? e.error : C(e)
                    }
                    function M(e) {
                        return e instanceof Error && !!e.stack
                    }
                    function B(e, r, n, i, a=(0,
                    o.t)()) {
                        "string" == typeof e && (e = new Error(e)),
                        (0,
                        s.p)("err", [e, a, !1, r, n.runtime.isRecording, void 0, i], void 0, t.K7.jserrors, n.ee),
                        (0,
                        s.p)("uaErr", [], void 0, t.K7.genericEvents, n.ee)
                    }
                    var H = i(1541)
                      , W = i(993)
                      , K = i(3785);
                    function F(e, {customAttributes: t={}, level: r=W.p_.INFO}={}, n, i, s=(0,
                    o.t)()) {
                        (0,
                        K.R)(n.ee, e, t, r, !1, i, s)
                    }
                    function U(e, r, n, i, c=(0,
                    o.t)()) {
                        (0,
                        s.p)(a.Pl + a.hG, [c, e, r, i], void 0, t.K7.genericEvents, n.ee)
                    }
                    function V(e, r, n, i, c=(0,
                    o.t)()) {
                        const {start: d, end: u, customAttributes: l} = r || {}
                          , f = {
                            customAttributes: l || {}
                        };
                        if ("object" != typeof f.customAttributes || "string" != typeof e || 0 === e.length)
                            return void (0,
                            h.R)(57);
                        const p = (e, t) => null == e ? t : "number" == typeof e ? e : e instanceof PerformanceMark ? e.startTime : Number.NaN;
                        if (f.start = p(d, 0),
                        f.end = p(u, c),
                        Number.isNaN(f.start) || Number.isNaN(f.end))
                            (0,
                            h.R)(57);
                        else {
                            if (f.duration = f.end - f.start,
                            !(f.duration < 0))
                                return (0,
                                s.p)(a.Pl + a.V1, [f, e, i], void 0, t.K7.genericEvents, n.ee),
                                f;
                            (0,
                            h.R)(58)
                        }
                    }
                    function G(e, r={}, n, i, c=(0,
                    o.t)()) {
                        (0,
                        s.p)(a.Pl + a.fF, [c, e, r, i], void 0, t.K7.genericEvents, n.ee)
                    }
                    var z = i(5871)
                      , Y = i(9566);
                    const Z = ["name", "id", "type"];
                    function q(e) {
                        (0,
                        c.Y)(a.eY, function(t) {
                            return X(e, t)
                        }, e)
                    }
                    function X(e, r, n) {
                        (0,
                        h.R)(54, "newrelic.register"),
                        r ||= {},
                        r.instance = (0,
                        Y.LA)(8),
                        r.type = H.fQ.MFE,
                        r.licenseKey ||= e.info.licenseKey,
                        r.blocked = !1,
                        ("object" != typeof r.tags || null === r.tags || Array.isArray(r.tags)) && (r.tags = {}),
                        r.parent = n || {
                            get id() {
                                return e.runtime.appMetadata.agents[0].entityGuid
                            },
                            type: H.fQ.BA
                        };
                        const i = (0,
                        z.Qr)()
                          , a = {};
                        Object.defineProperty(r, "attributes", {
                            get: () => ({
                                ...a,
                                "source.id": r.id,
                                "source.name": r.name,
                                "source.type": r.type,
                                "parent.type": r.parent?.type || H.fQ.BA,
                                "parent.id": r.parent?.id
                            })
                        }),
                        Object.entries(r.tags).forEach( ([e,t]) => {
                            Z.includes(e) || (a["source.".concat(e)] = t)
                        }
                        ),
                        r.isolated ??= !0;
                        let c = () => {}
                        ;
                        const d = e.runtime.registeredEntities;
                        if (!r.isolated) {
                            const e = d.find( ({metadata: {target: {id: e}}}) => e === r.id && !r.isolated);
                            if (e)
                                return e
                        }
                        const u = e => {
                            r.blocked = !0,
                            c = e
                        }
                        ;
                        function l(e) {
                            return "string" == typeof e && !!e.trim() && e.trim().length < 501
                        }
                        e.init.api.allow_registered_children || u((0,
                        m.J)( () => (0,
                        h.R)(55))),
                        l(r.id) && l(r.name) || u((0,
                        m.J)( () => (0,
                        h.R)(48, r)));
                        const f = {
                            addPageAction: (t, n={}) => y(U, [t, {
                                ...a,
                                ...n
                            }, e], r),
                            deregister: () => {
                                g(),
                                u((0,
                                m.J)( () => (0,
                                h.R)(68)))
                            }
                            ,
                            log: (t, n={}) => y(F, [t, {
                                ...n,
                                customAttributes: {
                                    ...a,
                                    ...n.customAttributes || {}
                                }
                            }, e], r),
                            measure: (t, n={}) => y(V, [t, {
                                ...n,
                                customAttributes: {
                                    ...a,
                                    ...n.customAttributes || {}
                                }
                            }, e], r),
                            noticeError: (t, n={}) => y(B, [t, {
                                ...a,
                                ...n
                            }, e], r),
                            register: (t={}) => y(X, [e, t], f.metadata.target),
                            recordCustomEvent: (t, n={}) => y(G, [t, {
                                ...a,
                                ...n
                            }, e], r),
                            setApplicationVersion: e => v("application.version", e),
                            setCustomAttribute: (e, t) => v(e, t),
                            setUserId: e => v("enduser.id", e),
                            metadata: {
                                get customAttributes() {
                                    return a
                                },
                                target: r,
                                timings: i
                            }
                        }
                          , p = () => (r.blocked && c(),
                        r.blocked);
                        function g() {
                            i.reportedAt || (i.reportedAt = (0,
                            o.t)(),
                            f.recordCustomEvent("MicroFrontEndTiming", {
                                assetUrl: i.asset,
                                assetType: i.type,
                                timeToLoad: i.registeredAt - i.fetchStart,
                                timeToBeRequested: i.fetchStart,
                                timeToFetch: i.fetchEnd - i.fetchStart,
                                timeToRegister: i.registeredAt - i.fetchEnd,
                                timeAlive: i.reportedAt - i.registeredAt
                            }))
                        }
                        p() || (d.push(f),
                        (0,
                        x.G)(g));
                        const v = (e, t) => {
                            p() || (a[e] = t)
                        }
                          , y = (r, n, i) => {
                            if (p() && r !== X)
                                return;
                            const a = (0,
                            o.t)();
                            (0,
                            s.p)(O.xV, ["API/register/".concat(r.name, "/called")], void 0, t.K7.metrics, e.ee);
                            try {
                                return r(...n, i, a)
                            } catch (e) {
                                (0,
                                h.R)(50, e)
                            }
                        }
                        ;
                        return f
                    }
                    class Q extends y {
                        static featureName = k.T;
                        constructor(e) {
                            var t;
                            super(e, k.T),
                            t = e,
                            (0,
                            c.Y)(a.o5, (e, r) => B(e, r, t), t),
                            function(e) {
                                (0,
                                c.Y)(a.bt, function(t) {
                                    e.runtime.onerror = t
                                }, e)
                            }(e),
                            function(e) {
                                let t = 0;
                                (0,
                                c.Y)(a.k6, function(e, r) {
                                    ++t > 10 || (this.runtime.releaseIds[e.slice(-200)] = ("" + r).slice(-200))
                                }, e)
                            }(e),
                            q(e);
                            try {
                                this.removeOnAbort = new AbortController
                            } catch (e) {}
                            this.ee.on("internal-error", (t, r) => {
                                this.abortHandler && (0,
                                s.p)("ierr", [C(t), (0,
                                o.t)(), !0, {}, e.runtime.isRecording, r], void 0, this.featureName, this.ee)
                            }
                            ),
                            f.gm.addEventListener("unhandledrejection", t => {
                                this.abortHandler && (0,
                                s.p)("err", [L(t), (0,
                                o.t)(), !1, {
                                    unhandledPromiseRejection: 1
                                }, e.runtime.isRecording], void 0, this.featureName, this.ee)
                            }
                            , (0,
                            N.jT)(!1, this.removeOnAbort?.signal)),
                            f.gm.addEventListener("error", t => {
                                this.abortHandler && (0,
                                s.p)("err", [I(t), (0,
                                o.t)(), !1, {}, e.runtime.isRecording], void 0, this.featureName, this.ee)
                            }
                            , (0,
                            N.jT)(!1, this.removeOnAbort?.signal)),
                            this.abortHandler = this.#r,
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 2176)))
                        }
                        #r() {
                            this.removeOnAbort?.abort(),
                            this.abortHandler = void 0
                        }
                    }
                    var J = i(8990);
                    let ee = 1;
                    function te(e) {
                        const t = typeof e;
                        return !e || "object" !== t && "function" !== t ? -1 : e === f.gm ? 0 : (0,
                        J.I)(e, "nr@id", function() {
                            return ee++
                        })
                    }
                    function re(e) {
                        if ("string" == typeof e && e.length)
                            return e.length;
                        if ("object" == typeof e) {
                            if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength)
                                return e.byteLength;
                            if ("undefined" != typeof Blob && e instanceof Blob && e.size)
                                return e.size;
                            if (!("undefined" != typeof FormData && e instanceof FormData))
                                try {
                                    return (0,
                                    D.A)(e).length
                                } catch (e) {
                                    return
                                }
                        }
                    }
                    var ne = i(8139)
                      , ie = i(7836)
                      , se = i(3434);
                    const oe = {}
                      , ae = ["open", "send"];
                    function ce(e, t) {
                        var r = e || ie.ee;
                        const n = function(e) {
                            return (e || ie.ee).get("xhr")
                        }(r);
                        if (void 0 === f.gm.XMLHttpRequest)
                            return n;
                        if (oe[n.debugId]++)
                            return n;
                        oe[n.debugId] = 1,
                        (0,
                        ne.u)(r);
                        var i = (0,
                        se.YM)(n)
                          , s = f.gm.XMLHttpRequest
                          , o = f.gm.MutationObserver
                          , a = f.gm.Promise
                          , c = f.gm.setInterval
                          , d = "readystatechange"
                          , u = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"]
                          , l = []
                          , p = f.gm.XMLHttpRequest = function(e) {
                            const r = new s(e)
                              , o = n.context(r);
                            o.targets = (0,
                            H.$5)(t);
                            try {
                                n.emit("new-xhr", [r], o),
                                r.addEventListener(d, (a = o,
                                function() {
                                    var e = this;
                                    e.readyState > 3 && !a.resolved && (a.resolved = !0,
                                    n.emit("xhr-resolved", [], e)),
                                    i.inPlace(e, u, "fn-", w)
                                }
                                ), (0,
                                N.jT)(!1))
                            } catch (e) {
                                (0,
                                h.R)(15, e);
                                try {
                                    n.emit("internal-error", [e])
                                } catch (e) {}
                            }
                            var a;
                            return r
                        }
                        ;
                        function g(e, t) {
                            i.inPlace(t, ["onreadystatechange"], "fn-", w)
                        }
                        if (function(e, t) {
                            for (var r in e)
                                t[r] = e[r]
                        }(s, p),
                        p.prototype = s.prototype,
                        i.inPlace(p.prototype, ae, "-xhr-", w),
                        n.on("send-xhr-start", function(e, t) {
                            g(e, t),
                            function(e) {
                                l.push(e),
                                o && (m ? m.then(b) : c ? c(b) : (v = -v,
                                y.data = v))
                            }(t)
                        }),
                        n.on("open-xhr-start", g),
                        o) {
                            var m = a && a.resolve();
                            if (!c && !a) {
                                var v = 1
                                  , y = document.createTextNode(v);
                                new o(b).observe(y, {
                                    characterData: !0
                                })
                            }
                        } else
                            r.on("fn-end", function(e) {
                                e[0] && e[0].type === d || b()
                            });
                        function b() {
                            for (var e = 0; e < l.length; e++)
                                g(0, l[e]);
                            l.length && (l = [])
                        }
                        function w(e, t) {
                            return t
                        }
                        return n
                    }
                    var de = "fetch-"
                      , ue = de + "body-"
                      , le = ["arrayBuffer", "blob", "json", "text", "formData"]
                      , fe = f.gm.Request
                      , he = f.gm.Response
                      , pe = "prototype";
                    const ge = {};
                    function me(e, t) {
                        const r = function(e) {
                            return (e || ie.ee).get("fetch")
                        }(e);
                        if (!(fe && he && f.gm.fetch))
                            return r;
                        if (ge[r.debugId]++)
                            return r;
                        function n(e, n, i) {
                            var s = e[n];
                            "function" == typeof s && (e[n] = function() {
                                var e = [...arguments];
                                const n = {}
                                  , o = (0,
                                H.$5)(t);
                                var a;
                                r.emit(i + "before-start", [e], n),
                                n[ie.P] && n[ie.P].dt && (a = n[ie.P].dt);
                                var c = s.apply(this, e);
                                return r.emit(i + "start", [e, a], c),
                                c.then(function(e) {
                                    return r.emit(i + "end", [null, e, o], c),
                                    e
                                }, function(e) {
                                    throw r.emit(i + "end", [e, void 0, o], c),
                                    e
                                })
                            }
                            )
                        }
                        return ge[r.debugId] = 1,
                        le.forEach(e => {
                            n(fe[pe], e, ue),
                            n(he[pe], e, ue)
                        }
                        ),
                        n(f.gm, "fetch", de),
                        r.on(de + "end", function(e, t, n) {
                            var i = this;
                            if (i.targets = n || [void 0],
                            t) {
                                var s = t.headers.get("content-length");
                                null !== s && (i.rxSize = s),
                                r.emit(de + "done", [null, t], i)
                            } else
                                r.emit(de + "done", [e], i)
                        }),
                        r
                    }
                    var ve = i(7485);
                    class ye {
                        constructor(e) {
                            this.agentRef = e
                        }
                        generateTracePayload(e) {
                            const t = this.agentRef.loader_config;
                            if (!this.shouldGenerateTrace(e) || !t)
                                return null;
                            var r = (t.accountID || "").toString() || null
                              , n = (t.agentID || "").toString() || null
                              , i = (t.trustKey || "").toString() || null;
                            if (!r || !n)
                                return null;
                            var s = (0,
                            Y.ZF)()
                              , o = (0,
                            Y.el)()
                              , a = Date.now()
                              , c = {
                                spanId: s,
                                traceId: o,
                                timestamp: a
                            };
                            return (e.sameOrigin || this.isAllowedOrigin(e) && this.useTraceContextHeadersForCors()) && (c.traceContextParentHeader = this.generateTraceContextParentHeader(s, o),
                            c.traceContextStateHeader = this.generateTraceContextStateHeader(s, a, r, n, i)),
                            (e.sameOrigin && !this.excludeNewrelicHeader() || !e.sameOrigin && this.isAllowedOrigin(e) && this.useNewrelicHeaderForCors()) && (c.newrelicHeader = this.generateTraceHeader(s, o, a, r, n, i)),
                            c
                        }
                        generateTraceContextParentHeader(e, t) {
                            return "00-" + t + "-" + e + "-01"
                        }
                        generateTraceContextStateHeader(e, t, r, n, i) {
                            return i + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t
                        }
                        generateTraceHeader(e, t, r, n, i, s) {
                            if (!("function" == typeof f.gm?.btoa))
                                return null;
                            var o = {
                                v: [0, 1],
                                d: {
                                    ty: "Browser",
                                    ac: n,
                                    ap: i,
                                    id: e,
                                    tr: t,
                                    ti: r
                                }
                            };
                            return s && n !== s && (o.d.tk = s),
                            btoa((0,
                            D.A)(o))
                        }
                        shouldGenerateTrace(e) {
                            return this.agentRef.init?.distributed_tracing?.enabled && this.isAllowedOrigin(e)
                        }
                        isAllowedOrigin(e) {
                            var t = !1;
                            const r = this.agentRef.init?.distributed_tracing;
                            if (e.sameOrigin)
                                t = !0;
                            else if (r?.allowed_origins instanceof Array)
                                for (var n = 0; n < r.allowed_origins.length; n++) {
                                    var i = (0,
                                    ve.D)(r.allowed_origins[n]);
                                    if (e.hostname === i.hostname && e.protocol === i.protocol && e.port === i.port) {
                                        t = !0;
                                        break
                                    }
                                }
                            return t
                        }
                        excludeNewrelicHeader() {
                            var e = this.agentRef.init?.distributed_tracing;
                            return !!e && !!e.exclude_newrelic_header
                        }
                        useNewrelicHeaderForCors() {
                            var e = this.agentRef.init?.distributed_tracing;
                            return !!e && !1 !== e.cors_use_newrelic_header
                        }
                        useTraceContextHeadersForCors() {
                            var e = this.agentRef.init?.distributed_tracing;
                            return !!e && !!e.cors_use_tracecontext_headers
                        }
                    }
                    var be = i(9300)
                      , we = i(7295);
                    function Re(e) {
                        return "string" == typeof e ? e : e instanceof (0,
                        T.dV)().o.REQ ? e.url : f.gm?.URL && e instanceof URL ? e.href : void 0
                    }
                    var Ee = ["load", "error", "abort", "timeout"]
                      , Te = Ee.length
                      , Ae = (0,
                    T.dV)().o.REQ
                      , xe = (0,
                    T.dV)().o.XHR;
                    const Se = "X-NewRelic-App-Data";
                    class _e extends y {
                        static featureName = be.T;
                        constructor(e) {
                            super(e, be.T),
                            this.dt = new ye(e),
                            this.handler = (e, t, r, n) => (0,
                            s.p)(e, t, r, n, this.ee);
                            try {
                                const e = {
                                    xmlhttprequest: "xhr",
                                    fetch: "fetch",
                                    beacon: "beacon"
                                };
                                f.gm?.performance?.getEntriesByType("resource").forEach(r => {
                                    if (r.initiatorType in e && 0 !== r.responseStatus) {
                                        const n = {
                                            status: r.responseStatus
                                        }
                                          , i = {
                                            rxSize: r.transferSize,
                                            duration: Math.floor(r.duration),
                                            cbTime: 0
                                        };
                                        Oe(n, r.name),
                                        this.handler("xhr", [n, i, r.startTime, r.responseEnd, e[r.initiatorType]], void 0, t.K7.ajax)
                                    }
                                }
                                )
                            } catch (e) {}
                            me(this.ee, e),
                            ce(this.ee, e),
                            function(e, r, n, i) {
                                function a(e) {
                                    var t = this;
                                    t.totalCbs = 0,
                                    t.called = 0,
                                    t.cbTime = 0,
                                    t.end = T,
                                    t.ended = !1,
                                    t.xhrGuids = {},
                                    t.lastSize = null,
                                    t.loadCaptureCalled = !1,
                                    t.params = this.params || {},
                                    t.metrics = this.metrics || {},
                                    t.latestLongtaskEnd = 0,
                                    e.addEventListener("load", function(r) {
                                        x(t, e)
                                    }, (0,
                                    N.jT)(!1)),
                                    f.lR || e.addEventListener("progress", function(e) {
                                        t.lastSize = e.loaded
                                    }, (0,
                                    N.jT)(!1))
                                }
                                function c(e) {
                                    this.params = {
                                        method: e[0]
                                    },
                                    Oe(this, e[1]),
                                    this.metrics = {}
                                }
                                function d(t, r) {
                                    e.loader_config.xpid && this.sameOrigin && r.setRequestHeader("X-NewRelic-ID", e.loader_config.xpid);
                                    var n = i.generateTracePayload(this.parsedOrigin);
                                    if (n) {
                                        var s = !1;
                                        n.newrelicHeader && (r.setRequestHeader("newrelic", n.newrelicHeader),
                                        s = !0),
                                        n.traceContextParentHeader && (r.setRequestHeader("traceparent", n.traceContextParentHeader),
                                        n.traceContextStateHeader && r.setRequestHeader("tracestate", n.traceContextStateHeader),
                                        s = !0),
                                        s && (this.dt = n)
                                    }
                                }
                                function u(e, t) {
                                    var n = this.metrics
                                      , i = e[0]
                                      , s = this;
                                    if (n && i) {
                                        var a = re(i);
                                        a && (n.txSize = a)
                                    }
                                    this.startTime = (0,
                                    o.t)(),
                                    this.body = i,
                                    this.listener = function(e) {
                                        try {
                                            "abort" !== e.type || s.loadCaptureCalled || (s.params.aborted = !0),
                                            ("load" !== e.type || s.called === s.totalCbs && (s.onloadCalled || "function" != typeof t.onload) && "function" == typeof s.end) && s.end(t)
                                        } catch (e) {
                                            try {
                                                r.emit("internal-error", [e])
                                            } catch (e) {}
                                        }
                                    }
                                    ;
                                    for (var c = 0; c < Te; c++)
                                        t.addEventListener(Ee[c], this.listener, (0,
                                        N.jT)(!1))
                                }
                                function l(e, t, r) {
                                    this.cbTime += e,
                                    t ? this.onloadCalled = !0 : this.called += 1,
                                    this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof r.onload || "function" != typeof this.end || this.end(r)
                                }
                                function h(e, t) {
                                    var r = "" + te(e) + !!t;
                                    this.xhrGuids && !this.xhrGuids[r] && (this.xhrGuids[r] = !0,
                                    this.totalCbs += 1)
                                }
                                function p(e, t) {
                                    var r = "" + te(e) + !!t;
                                    this.xhrGuids && this.xhrGuids[r] && (delete this.xhrGuids[r],
                                    this.totalCbs -= 1)
                                }
                                function g() {
                                    this.endTime = (0,
                                    o.t)()
                                }
                                function m(e, t) {
                                    t instanceof xe && "load" === e[0] && r.emit("xhr-load-added", [e[1], e[2]], t)
                                }
                                function v(e, t) {
                                    t instanceof xe && "load" === e[0] && r.emit("xhr-load-removed", [e[1], e[2]], t)
                                }
                                function y(e, t, r) {
                                    t instanceof xe && ("onload" === r && (this.onload = !0),
                                    ("load" === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (0,
                                    o.t)()))
                                }
                                function b(e, t) {
                                    this.xhrCbStart && r.emit("xhr-cb-time", [(0,
                                    o.t)() - this.xhrCbStart, this.onload, t], t)
                                }
                                function w(e) {
                                    var t, r = e[1] || {};
                                    if ("string" == typeof e[0] ? 0 === (t = e[0]).length && f.RI && (t = "" + f.gm.location.href) : e[0] && e[0].url ? t = e[0].url : f.gm?.URL && e[0] && e[0]instanceof URL ? t = e[0].href : "function" == typeof e[0].toString && (t = e[0].toString()),
                                    "string" == typeof t && 0 !== t.length) {
                                        t && (this.parsedOrigin = (0,
                                        ve.D)(t),
                                        this.sameOrigin = this.parsedOrigin.sameOrigin);
                                        var n = i.generateTracePayload(this.parsedOrigin);
                                        if (n && (n.newrelicHeader || n.traceContextParentHeader))
                                            if (e[0] && e[0].headers)
                                                a(e[0].headers, n) && (this.dt = n);
                                            else {
                                                var s = {};
                                                for (var o in r)
                                                    s[o] = r[o];
                                                s.headers = new Headers(r.headers || {}),
                                                a(s.headers, n) && (this.dt = n),
                                                e.length > 1 ? e[1] = s : e.push(s)
                                            }
                                    }
                                    function a(e, t) {
                                        var r = !1;
                                        return t.newrelicHeader && (e.set("newrelic", t.newrelicHeader),
                                        r = !0),
                                        t.traceContextParentHeader && (e.set("traceparent", t.traceContextParentHeader),
                                        t.traceContextStateHeader && e.set("tracestate", t.traceContextStateHeader),
                                        r = !0),
                                        r
                                    }
                                }
                                function R(e, t) {
                                    this.params = {},
                                    this.metrics = {},
                                    this.startTime = (0,
                                    o.t)(),
                                    this.dt = t;
                                    let[r,n={}] = e;
                                    Oe(this, Re(r));
                                    const i = ("" + (r && r instanceof Ae && r.method || n.method || "GET")).toUpperCase();
                                    this.params.method = i,
                                    this.body = n.body,
                                    this.txSize = re(n.body) || 0
                                }
                                function E(e, t) {
                                    if (this.endTime = (0,
                                    o.t)(),
                                    this.params || (this.params = {}),
                                    (0,
                                    we.iW)(this.params))
                                        return;
                                    let r;
                                    this.params.status = t ? t.status : 0,
                                    "string" == typeof this.rxSize && this.rxSize.length > 0 && (r = +this.rxSize);
                                    const n = {
                                        txSize: this.txSize,
                                        rxSize: r,
                                        duration: (0,
                                        o.t)() - this.startTime
                                    }
                                      , i = [this.params, n, this.startTime, this.endTime, "fetch"];
                                    this.targets.forEach(e => A(i, this, e))
                                }
                                function T(e) {
                                    const t = this.params
                                      , r = this.metrics;
                                    if (this.ended)
                                        return;
                                    this.ended = !0;
                                    for (let t = 0; t < Te; t++)
                                        e.removeEventListener(Ee[t], this.listener, !1);
                                    if (t.aborted)
                                        return;
                                    if ((0,
                                    we.iW)(t))
                                        return;
                                    r.duration = (0,
                                    o.t)() - this.startTime,
                                    this.loadCaptureCalled || 4 !== e.readyState ? null == t.status && (t.status = 0) : x(this, e),
                                    r.cbTime = this.cbTime;
                                    const n = [t, r, this.startTime, this.endTime, "xhr"];
                                    this.targets.forEach(e => A(n, this, e))
                                }
                                function A(e, r, i) {
                                    n("xhr", [...e, i], r, t.K7.ajax)
                                }
                                function x(e, n) {
                                    e.params.status = n.status;
                                    var i = function(e, t) {
                                        var r = e.responseType;
                                        return "json" === r && null !== t ? t : "arraybuffer" === r || "blob" === r || "json" === r ? re(e.response) : "text" === r || "" === r || void 0 === r ? re(e.responseText) : void 0
                                    }(n, e.lastSize);
                                    if (i && (e.metrics.rxSize = i),
                                    e.sameOrigin && n.getAllResponseHeaders().indexOf(Se) >= 0) {
                                        var o = n.getResponseHeader(Se);
                                        o && ((0,
                                        s.p)(O.rs, ["Ajax/CrossApplicationTracing/Header/Seen"], void 0, t.K7.metrics, r),
                                        e.params.cat = o.split(", ").pop())
                                    }
                                    e.loadCaptureCalled = !0
                                }
                                r.on("new-xhr", a),
                                r.on("open-xhr-start", c),
                                r.on("open-xhr-end", d),
                                r.on("send-xhr-start", u),
                                r.on("xhr-cb-time", l),
                                r.on("xhr-load-added", h),
                                r.on("xhr-load-removed", p),
                                r.on("xhr-resolved", g),
                                r.on("addEventListener-end", m),
                                r.on("removeEventListener-end", v),
                                r.on("fn-end", b),
                                r.on("fetch-before-start", w),
                                r.on("fetch-start", R),
                                r.on("fn-start", y),
                                r.on("fetch-done", E)
                            }(e, this.ee, this.handler, this.dt),
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 3845)))
                        }
                    }
                    function Oe(e, t) {
                        var r = (0,
                        ve.D)(t)
                          , n = e.params || e;
                        n.hostname = r.hostname,
                        n.port = r.port,
                        n.protocol = r.protocol,
                        n.host = r.hostname + ":" + r.port,
                        n.pathname = r.pathname,
                        e.parsedOrigin = r,
                        e.sameOrigin = r.sameOrigin
                    }
                    const Pe = {}
                      , ke = ["pushState", "replaceState"];
                    function Ne(e) {
                        const t = function(e) {
                            return (e || ie.ee).get("history")
                        }(e);
                        return !f.RI || Pe[t.debugId]++ || (Pe[t.debugId] = 1,
                        (0,
                        se.YM)(t).inPlace(window.history, ke, "-")),
                        t
                    }
                    var De = i(3738);
                    function je(e) {
                        (0,
                        c.Y)(a.BL, function(r=Date.now()) {
                            const n = r - f.WN;
                            n < 0 && (0,
                            h.R)(62, r),
                            (0,
                            s.p)(O.XG, [a.BL, {
                                time: n
                            }], void 0, t.K7.metrics, e.ee),
                            e.addToTrace({
                                name: a.BL,
                                start: r,
                                origin: "nr"
                            }),
                            (0,
                            s.p)(a.Pl + a.hG, [n, a.BL], void 0, t.K7.genericEvents, e.ee)
                        }, e)
                    }
                    const {He: Ce, bD: Le, d3: Ie, Kp: Me, TZ: Be, Lc: He, uP: We, Rz: Ke} = De;
                    class Fe extends y {
                        static featureName = Be;
                        constructor(e) {
                            var r;
                            super(e, Be),
                            r = e,
                            (0,
                            c.Y)(a.U2, function(e) {
                                if (!(e && "object" == typeof e && e.name && e.start))
                                    return;
                                const n = {
                                    n: e.name,
                                    s: e.start - f.WN,
                                    e: (e.end || e.start) - f.WN,
                                    o: e.origin || "",
                                    t: "api"
                                };
                                n.s < 0 || n.e < 0 || n.e < n.s ? (0,
                                h.R)(61, {
                                    start: n.s,
                                    end: n.e
                                }) : (0,
                                s.p)("bstApi", [n], void 0, t.K7.sessionTrace, r.ee)
                            }, r),
                            je(e);
                            if (!(0,
                            g.V)(e.init))
                                return void this.deregisterDrain();
                            const n = this.ee;
                            let d;
                            Ne(n),
                            this.eventsEE = (0,
                            ne.u)(n),
                            this.eventsEE.on(We, function(e, t) {
                                this.bstStart = (0,
                                o.t)()
                            }),
                            this.eventsEE.on(He, function(e, r) {
                                (0,
                                s.p)("bst", [e[0], r, this.bstStart, (0,
                                o.t)()], void 0, t.K7.sessionTrace, n)
                            }),
                            n.on(Ke + Ie, function(e) {
                                this.time = (0,
                                o.t)(),
                                this.startPath = location.pathname + location.hash
                            }),
                            n.on(Ke + Me, function(e) {
                                (0,
                                s.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, t.K7.sessionTrace, n)
                            });
                            try {
                                d = new PerformanceObserver(e => {
                                    const r = e.getEntries();
                                    (0,
                                    s.p)(Ce, [r], void 0, t.K7.sessionTrace, n)
                                }
                                ),
                                d.observe({
                                    type: Le,
                                    buffered: !0
                                })
                            } catch (e) {}
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 6974)), {
                                resourceObserver: d
                            })
                        }
                    }
                    var Ue = i(6344);
                    class Ve extends y {
                        static featureName = Ue.TZ;
                        #n;
                        recorder;
                        constructor(e) {
                            var r;
                            let n;
                            super(e, Ue.TZ),
                            r = e,
                            (0,
                            c.Y)(a.CH, function() {
                                (0,
                                s.p)(a.CH, [], void 0, t.K7.sessionReplay, r.ee)
                            }, r),
                            function(e) {
                                (0,
                                c.Y)(a.Tb, function() {
                                    (0,
                                    s.p)(a.Tb, [], void 0, t.K7.sessionReplay, e.ee)
                                }, e)
                            }(e);
                            try {
                                n = JSON.parse(localStorage.getItem("".concat(w.H3, "_").concat(w.uh)))
                            } catch (e) {}
                            (0,
                            p.SR)(e.init) && this.ee.on(a.CH, () => this.#i()),
                            this.#s(n) && this.importRecorder().then(e => {
                                e.startRecording(Ue.Qb.PRELOAD, n?.sessionReplayMode)
                            }
                            ),
                            this.importAggregator(this.agentRef, () => i.e(478).then(i.bind(i, 6167)), this),
                            this.ee.on("err", e => {
                                this.blocked || this.agentRef.runtime.isRecording && (this.errorNoticed = !0,
                                (0,
                                s.p)(Ue.Vh, [e], void 0, this.featureName, this.ee))
                            }
                            )
                        }
                        #s(e) {
                            return e && (e.sessionReplayMode === w.g.FULL || e.sessionReplayMode === w.g.ERROR) || (0,
                            p.Aw)(this.agentRef.init)
                        }
                        importRecorder() {
                            return this.recorder ? Promise.resolve(this.recorder) : (this.#n ??= Promise.all([i.e(478), i.e(249)]).then(i.bind(i, 4866)).then( ({Recorder: e}) => (this.recorder = new e(this),
                            this.recorder)).catch(e => {
                                throw this.ee.emit("internal-error", [e]),
                                this.blocked = !0,
                                e
                            }
                            ),
                            this.#n)
                        }
                        #i() {
                            this.blocked || (this.featAggregate ? this.featAggregate.mode !== w.g.FULL && this.featAggregate.initializeRecording(w.g.FULL, !0, Ue.Qb.API) : this.importRecorder().then( () => {
                                this.recorder.startRecording(Ue.Qb.API, w.g.FULL)
                            }
                            ))
                        }
                    }
                    var Ge = i(3962);
                    class ze extends y {
                        static featureName = Ge.TZ;
                        constructor(e) {
                            if (super(e, Ge.TZ),
                            function(e) {
                                const r = e.ee.get("tracer");
                                function n() {}
                                (0,
                                c.Y)(a.dT, function(e) {
                                    return (new n).get("object" == typeof e ? e : {})
                                }, e);
                                const i = n.prototype = {
                                    createTracer: function(n, i) {
                                        var a = {}
                                          , c = this
                                          , d = "function" == typeof i;
                                        return (0,
                                        s.p)(O.xV, ["API/createTracer/called"], void 0, t.K7.metrics, e.ee),
                                        function() {
                                            if (r.emit((d ? "" : "no-") + "fn-start", [(0,
                                            o.t)(), c, d], a),
                                            d)
                                                try {
                                                    return i.apply(this, arguments)
                                                } catch (e) {
                                                    const t = "string" == typeof e ? new Error(e) : e;
                                                    throw r.emit("fn-err", [arguments, this, t], a),
                                                    t
                                                } finally {
                                                    r.emit("fn-end", [(0,
                                                    o.t)()], a)
                                                }
                                        }
                                    }
                                };
                                ["actionText", "setName", "setAttribute", "save", "ignore", "onEnd", "getContext", "end", "get"].forEach(r => {
                                    c.Y.apply(this, [r, function() {
                                        return (0,
                                        s.p)(a.hw + r, [performance.now(), ...arguments], this, t.K7.softNav, e.ee),
                                        this
                                    }
                                    , e, i])
                                }
                                ),
                                (0,
                                c.Y)(a.PA, function() {
                                    (0,
                                    s.p)(a.hw + "routeName", [performance.now(), ...arguments], void 0, t.K7.softNav, e.ee)
                                }, e)
                            }(e),
                            !f.RI || !(0,
                            T.dV)().o.MO)
                                return;
                            const r = Ne(this.ee);
                            try {
                                this.removeOnAbort = new AbortController
                            } catch (e) {}
                            Ge.tC.forEach(e => {
                                (0,
                                N.sp)(e, e => {
                                    l(e)
                                }
                                , !0, this.removeOnAbort?.signal)
                            }
                            );
                            const n = () => (0,
                            s.p)("newURL", [(0,
                            o.t)(), "" + window.location], void 0, this.featureName, this.ee);
                            r.on("pushState-end", n),
                            r.on("replaceState-end", n),
                            (0,
                            N.sp)(Ge.OV, e => {
                                l(e),
                                (0,
                                s.p)("newURL", [e.timeStamp, "" + window.location], void 0, this.featureName, this.ee)
                            }
                            , !0, this.removeOnAbort?.signal);
                            let d = !1;
                            const u = new ((0,
                            T.dV)().o.MO)( (e, t) => {
                                d || (d = !0,
                                requestAnimationFrame( () => {
                                    (0,
                                    s.p)("newDom", [(0,
                                    o.t)()], void 0, this.featureName, this.ee),
                                    d = !1
                                }
                                ))
                            }
                            )
                              , l = (0,
                            m.s)(e => {
                                "loading" !== document.readyState && ((0,
                                s.p)("newUIEvent", [e], void 0, this.featureName, this.ee),
                                u.observe(document.body, {
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0
                                }))
                            }
                            , 100, {
                                leading: !0
                            });
                            this.abortHandler = function() {
                                this.removeOnAbort?.abort(),
                                u.disconnect(),
                                this.abortHandler = void 0
                            }
                            ,
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 4393)), {
                                domObserver: u
                            })
                        }
                    }
                    var Ye = i(3333)
                      , Ze = i(9119);
                    const qe = {}
                      , Xe = new Set;
                    function $e(e) {
                        return "string" == typeof e ? {
                            type: "string",
                            size: (new TextEncoder).encode(e).length
                        } : e instanceof ArrayBuffer ? {
                            type: "ArrayBuffer",
                            size: e.byteLength
                        } : e instanceof Blob ? {
                            type: "Blob",
                            size: e.size
                        } : e instanceof DataView ? {
                            type: "DataView",
                            size: e.byteLength
                        } : ArrayBuffer.isView(e) ? {
                            type: "TypedArray",
                            size: e.byteLength
                        } : {
                            type: "unknown",
                            size: 0
                        }
                    }
                    class Qe {
                        constructor(e, t) {
                            this.timestamp = (0,
                            o.t)(),
                            this.currentUrl = (0,
                            Ze.L)(window.location.href),
                            this.socketId = (0,
                            Y.LA)(8),
                            this.requestedUrl = (0,
                            Ze.L)(e),
                            this.requestedProtocols = Array.isArray(t) ? t.join(",") : t || "",
                            this.openedAt = void 0,
                            this.protocol = void 0,
                            this.extensions = void 0,
                            this.binaryType = void 0,
                            this.messageOrigin = void 0,
                            this.messageCount = 0,
                            this.messageBytes = 0,
                            this.messageBytesMin = 0,
                            this.messageBytesMax = 0,
                            this.messageTypes = void 0,
                            this.sendCount = 0,
                            this.sendBytes = 0,
                            this.sendBytesMin = 0,
                            this.sendBytesMax = 0,
                            this.sendTypes = void 0,
                            this.closedAt = void 0,
                            this.closeCode = void 0,
                            this.closeReason = "unknown",
                            this.closeWasClean = void 0,
                            this.connectedDuration = 0,
                            this.hasErrors = void 0
                        }
                    }
                    class Je extends y {
                        static featureName = Ye.TZ;
                        constructor(e) {
                            super(e, Ye.TZ);
                            const r = e.init.feature_flags.includes("websockets")
                              , n = [e.init.page_action.enabled, e.init.performance.capture_marks, e.init.performance.capture_measures, e.init.performance.resources.enabled, e.init.user_actions.enabled, r];
                            var d;
                            let u, l;
                            if (d = e,
                            (0,
                            c.Y)(a.hG, (e, t) => U(e, t, d), d),
                            function(e) {
                                (0,
                                c.Y)(a.fF, (t, r) => G(t, r, e), e)
                            }(e),
                            je(e),
                            q(e),
                            function(e) {
                                (0,
                                c.Y)(a.V1, (t, r) => V(t, r, e), e)
                            }(e),
                            r && (l = function(e) {
                                if (!(0,
                                T.dV)().o.WS)
                                    return e;
                                const t = e.get("websockets");
                                if (qe[t.debugId]++)
                                    return t;
                                qe[t.debugId] = 1,
                                (0,
                                x.G)( () => {
                                    const e = (0,
                                    o.t)();
                                    Xe.forEach(r => {
                                        r.nrData.closedAt = e,
                                        r.nrData.closeCode = 1001,
                                        r.nrData.closeReason = "Page navigating away",
                                        r.nrData.closeWasClean = !1,
                                        r.nrData.openedAt && (r.nrData.connectedDuration = e - r.nrData.openedAt),
                                        t.emit("ws", [r.nrData], r)
                                    }
                                    )
                                }
                                );
                                class r extends WebSocket {
                                    static name = "WebSocket";
                                    static toString() {
                                        return "function WebSocket() { [native code] }"
                                    }
                                    toString() {
                                        return "[object WebSocket]"
                                    }
                                    get[Symbol.toStringTag]() {
                                        return r.name
                                    }
                                    #o(e) {
                                        (e.__newrelic ??= {}).socketId = this.nrData.socketId,
                                        this.nrData.hasErrors ??= !0
                                    }
                                    constructor(...e) {
                                        super(...e),
                                        this.nrData = new Qe(e[0],e[1]),
                                        this.addEventListener("open", () => {
                                            this.nrData.openedAt = (0,
                                            o.t)(),
                                            ["protocol", "extensions", "binaryType"].forEach(e => {
                                                this.nrData[e] = this[e]
                                            }
                                            ),
                                            Xe.add(this)
                                        }
                                        ),
                                        this.addEventListener("message", e => {
                                            const {type: t, size: r} = $e(e.data);
                                            this.nrData.messageOrigin ??= (0,
                                            Ze.L)(e.origin),
                                            this.nrData.messageCount++,
                                            this.nrData.messageBytes += r,
                                            this.nrData.messageBytesMin = Math.min(this.nrData.messageBytesMin || 1 / 0, r),
                                            this.nrData.messageBytesMax = Math.max(this.nrData.messageBytesMax, r),
                                            (this.nrData.messageTypes ?? "").includes(t) || (this.nrData.messageTypes = this.nrData.messageTypes ? "".concat(this.nrData.messageTypes, ",").concat(t) : t)
                                        }
                                        ),
                                        this.addEventListener("close", e => {
                                            this.nrData.closedAt = (0,
                                            o.t)(),
                                            this.nrData.closeCode = e.code,
                                            e.reason && (this.nrData.closeReason = e.reason),
                                            this.nrData.closeWasClean = e.wasClean,
                                            this.nrData.connectedDuration = this.nrData.closedAt - this.nrData.openedAt,
                                            Xe.delete(this),
                                            t.emit("ws", [this.nrData], this)
                                        }
                                        )
                                    }
                                    addEventListener(e, t, ...r) {
                                        const n = this
                                          , i = "function" == typeof t ? function(...e) {
                                            try {
                                                return t.apply(this, e)
                                            } catch (e) {
                                                throw n.#o(e),
                                                e
                                            }
                                        }
                                        : t?.handleEvent ? {
                                            handleEvent: function(...e) {
                                                try {
                                                    return t.handleEvent.apply(t, e)
                                                } catch (e) {
                                                    throw n.#o(e),
                                                    e
                                                }
                                            }
                                        } : t;
                                        return super.addEventListener(e, i, ...r)
                                    }
                                    send(e) {
                                        if (this.readyState === WebSocket.OPEN) {
                                            const {type: t, size: r} = $e(e);
                                            this.nrData.sendCount++,
                                            this.nrData.sendBytes += r,
                                            this.nrData.sendBytesMin = Math.min(this.nrData.sendBytesMin || 1 / 0, r),
                                            this.nrData.sendBytesMax = Math.max(this.nrData.sendBytesMax, r),
                                            (this.nrData.sendTypes ?? "").includes(t) || (this.nrData.sendTypes = this.nrData.sendTypes ? "".concat(this.nrData.sendTypes, ",").concat(t) : t)
                                        }
                                        try {
                                            return super.send(e)
                                        } catch (e) {
                                            throw this.#o(e),
                                            e
                                        }
                                    }
                                    close(...e) {
                                        try {
                                            super.close(...e)
                                        } catch (e) {
                                            throw this.#o(e),
                                            e
                                        }
                                    }
                                }
                                return f.gm.WebSocket = r,
                                t
                            }(this.ee)),
                            f.RI) {
                                if (me(this.ee, e),
                                ce(this.ee, e),
                                u = Ne(this.ee),
                                e.init.user_actions.enabled) {
                                    function h(t) {
                                        const r = (0,
                                        ve.D)(t);
                                        return e.beacons.includes(r.hostname + ":" + r.port)
                                    }
                                    function p() {
                                        u.emit("navChange")
                                    }
                                    Ye.Zp.forEach(e => (0,
                                    N.sp)(e, e => (0,
                                    s.p)("ua", [e], void 0, this.featureName, this.ee), !0)),
                                    Ye.qN.forEach(e => {
                                        const t = (0,
                                        m.s)(e => {
                                            (0,
                                            s.p)("ua", [e], void 0, this.featureName, this.ee)
                                        }
                                        , 500, {
                                            leading: !0
                                        });
                                        (0,
                                        N.sp)(e, t)
                                    }
                                    ),
                                    f.gm.addEventListener("error", () => {
                                        (0,
                                        s.p)("uaErr", [], void 0, t.K7.genericEvents, this.ee)
                                    }
                                    , (0,
                                    N.jT)(!1, this.removeOnAbort?.signal)),
                                    this.ee.on("open-xhr-start", (e, r) => {
                                        h(e[1]) || r.addEventListener("readystatechange", () => {
                                            2 === r.readyState && (0,
                                            s.p)("uaXhr", [], void 0, t.K7.genericEvents, this.ee)
                                        }
                                        )
                                    }
                                    ),
                                    this.ee.on("fetch-start", e => {
                                        e.length >= 1 && !h(Re(e[0])) && (0,
                                        s.p)("uaXhr", [], void 0, t.K7.genericEvents, this.ee)
                                    }
                                    ),
                                    u.on("pushState-end", p),
                                    u.on("replaceState-end", p),
                                    window.addEventListener("hashchange", p, (0,
                                    N.jT)(!0, this.removeOnAbort?.signal)),
                                    window.addEventListener("popstate", p, (0,
                                    N.jT)(!0, this.removeOnAbort?.signal))
                                }
                                if (e.init.performance.resources.enabled && f.gm.PerformanceObserver?.supportedEntryTypes.includes("resource")) {
                                    new PerformanceObserver(e => {
                                        e.getEntries().forEach(e => {
                                            (0,
                                            s.p)("browserPerformance.resource", [e], void 0, this.featureName, this.ee)
                                        }
                                        )
                                    }
                                    ).observe({
                                        type: "resource",
                                        buffered: !0
                                    })
                                }
                            }
                            r && l.on("ws", e => {
                                (0,
                                s.p)("ws-complete", [e], void 0, this.featureName, this.ee)
                            }
                            );
                            try {
                                this.removeOnAbort = new AbortController
                            } catch (g) {}
                            this.abortHandler = () => {
                                this.removeOnAbort?.abort(),
                                this.abortHandler = void 0
                            }
                            ,
                            n.some(e => e) ? this.importAggregator(e, () => i.e(478).then(i.bind(i, 8019))) : this.deregisterDrain()
                        }
                    }
                    var et = i(2646);
                    const tt = new Map;
                    function rt(e, t, r, n, i=!0, s) {
                        if ("object" != typeof t || !t || "string" != typeof r || !r || "function" != typeof t[r])
                            return (0,
                            h.R)(29);
                        const o = function(e) {
                            return (e || ie.ee).get("logger")
                        }(e)
                          , a = (0,
                        se.YM)(o, void 0, s)
                          , c = new et.y(ie.P);
                        c.level = n.level,
                        c.customAttributes = n.customAttributes,
                        c.autoCaptured = i;
                        const d = t[r]?.[se.Jt] || t[r];
                        return tt.set(d, c),
                        a.inPlace(t, [r], "wrap-logger-", () => tt.get(d), void 0, !0),
                        o
                    }
                    var nt = i(1910);
                    class it extends y {
                        static featureName = W.TZ;
                        constructor(e) {
                            var t;
                            super(e, W.TZ),
                            t = e,
                            (0,
                            c.Y)(a.$9, (e, r) => F(e, r, t), t),
                            function(e) {
                                (0,
                                c.Y)(a.Wb, (t, r, {customAttributes: n={}, level: i=W.p_.INFO}={}) => {
                                    rt(e.ee, t, r, {
                                        customAttributes: n,
                                        level: i
                                    }, !1, e)
                                }
                                , e)
                            }(e),
                            q(e);
                            const r = this.ee;
                            ["log", "error", "warn", "info", "debug", "trace"].forEach(t => {
                                (0,
                                nt.i)(f.gm.console[t]),
                                rt(r, f.gm.console, t, {
                                    level: "log" === t ? "info" : t
                                }, void 0, e)
                            }
                            ),
                            this.ee.on("wrap-logger-end", function([e], t, n, i=[]) {
                                const {level: s, customAttributes: o, autoCaptured: a} = this;
                                i.forEach(t => {
                                    (0,
                                    K.R)(r, e, o, s, a, t)
                                }
                                )
                            }),
                            this.importAggregator(e, () => i.e(478).then(i.bind(i, 5288)))
                        }
                    }
                    new A({
                        features: [_e, E, _, Fe, Ve, P, Q, Je, it, ze],
                        loaderType: "spa"
                    })
                }
                )()
            }
            )();
        </script>
        <meta name="viewport" content="minimum-scale=1">
        <link rel="shortcut icon" href="/themes/bootstrap/images/favicon.ico" type="image/x-icon"/>
        <link rel="preload" href="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2" as="font" type="font/woff2" crossorigin>
        <script type="module" defer src="/ms/dboxuilibrary/assets/dboxuilib_dist/www/build/db-components.esm.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/db-icon-font/fonts-darwinbox.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/editor-font/editor-fonts-darwinbox.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/bootstrap-wizard.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/jquery-ui.custom.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/tokenfield.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/bootstrap-multiselect.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/bootstrap-responsive.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/fonts/css/font-awesome.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/style.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/style1.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/rating.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/circle.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/build.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/star-rating.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/jquery.dataTables.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/css/introjs.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/handsontable/jquery.handsontablenew1.full.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/darwin-assets/css/css-library/bootstrap-timepicker.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/darwin-assets/css/css-library/dropdown.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/darwin-assets/css/css-library/transition.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/darwin-assets/css/css-local/theme.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/3ea737fb/darwin-assets/css/css-local/mobile-responsive.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/df59ecda/fileuploader.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/1908f70c/chosen.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/e7fa2eef/shadowbox.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/ce731d42/immybox.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/fb53802d/css/css-library/dropdown.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/c835375b/zabuto_calendar.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/fb53802d/css/css-local/tenprofzz.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/d366435f/css/jquery_notification.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/fb53802d/css/css-local/res_modal.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/fb53802d/css/css-local/res_mobile_header.css"/>
        <script type="text/javascript" src="/assets/1eb074c9/jquery.js"></script>
        <script type="text/javascript" src="/assets/1eb074c9/jui/js/jquery-ui.min.js"></script>
        <script type="text/javascript" src="/assets/bdda64a/jquery.browser.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwinboxjs/default-darwinbox.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwinboxjs/default-darwinbox-external.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/bootstrap-wizard.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/bootstrap-treeview.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/star-rating.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/rating.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/tokenfield.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/bootstrap-multiselect.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/lodash.min.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/knockout.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/knockout.validation.3.0.0.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/bootstrap.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/jmigrate3.3.2.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/jquery.simpler-sidebar.min.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/intro.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/jquery.combinedScroll.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/handsontable/jquery.handsontablenew1.full.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/js/sticky.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwin-assets/js/js-library/bootstrap-timepicker.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwin-assets/js/js-library/transition.min.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwin-assets/js/js-library/dropdown.min.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwin-assets/js/js-library/beautify-css.min.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwin-assets/js/js-library/css-vars-ponyfill.min.js"></script>
        <script type="text/javascript" src="/assets/3ea737fb/darwin-assets/js/theme.js"></script>
        <script type="text/javascript" src="/assets/cc16e5bf/dbox-currency.min.js"></script>
        <script type="text/javascript" src="/assets/df59ecda/fileuploader.js"></script>
        <script type="text/javascript" src="/assets/1908f70c/chosen.jquery.min.js"></script>
        <script type="text/javascript" src="/assets/e7fa2eef/shadowbox.js"></script>
        <script type="text/javascript" src="/assets/ce731d42/immybox.min.js"></script>
        <script type="text/javascript" src="/assets/fb53802d/js/js-library/dropdown.min.js"></script>
        <script type="text/javascript" src="/assets/c835375b/zabuto_calendar.min.js"></script>
        <script type="text/javascript" src="/assets/5fdd9ea9/js/jquery.dataTables.js"></script>
        <script type="text/javascript" src="/assets/d366435f/js/jquery_notification_v.1.js"></script>
        <title id="darwinbox-title-id">Value Kraft</title>
        <meta name="description" content="">
        <meta name="author" content="">
    </head>
    <body>
        <div class="topbar">
            <div class="portlet" id="yw0">
                <div class="portlet-content">
                    <style type="text/css">
                        .hydrated_topbar {
                            position: fixed !important;
                            top: 0;
                            left: 0;
                            width: 100%;
                            z-index: 9999;
                        }

                        .ds-left-navigation {
                            display: block;
                            position: fixed !important;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            z-index: 9998;
                        }
                    </style>
                    <div class="dashboard-top" style="background: white;" id="dasboard-bigheader">
                        <dbx-ds-bluebar has-sidebar-apps="true" id="dbox-top-bar" class="hydrated_topbar"></dbx-ds-bluebar>
                        <div class="clearfix"></div>
                    </div>
                    <!-- APPROVALS JS -->
                    <script>
                        $(function() {
                            function split(val) {
                                return val.split(/,\s*/);
                            }
                            function extractLast(term) {
                                return split(term).pop();
                            }
                            $.widget("custom.catcomplete", $.ui.autocomplete, {
                                _create: function() {
                                    this._super();
                                    this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
                                },
                                _renderMenu: function(ul, items) {
                                    var that = this
                                      , currentCategory = "";
                                    $.each(items, function(index, item) {
                                        var li;
                                        if (item.category != currentCategory) {
                                            ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                                            currentCategory = item.category;
                                        }
                                        li = that._renderItemData(ul, item);
                                        if (item.category) {
                                            li.attr("aria-label", item.category + " : " + item.label);
                                        }
                                    });
                                    // $.each( items, function( index, item ) {
                                    //     that._renderItemData( ul, item );
                                    // });
                                    $(ul).addClass("global-search-autocomplete");
                                }
                            });
                            $("#mobile_search_modal #employee-search_dashboard, #employee-search_dashboard")// don't navigate away from the field on tab when selecting an item
                            .bind("keydown", function(event) {
                                if (event.keyCode === $.ui.keyCode.TAB && $(this).autocomplete("instance").menu.active) {
                                    event.preventDefault();
                                }
                            }).catcomplete({

                                source: function(request, response) {
                                    var ids = {};
                                    var url = "/dashboard/omniSuggestion";
                                    var search_type = $('[name="searchField"]:checked').val();
                                    // var grpcompsend = "";
                                    var grpcompsend = $('#user_list_dropdown').val();
                                    $.ajax({
                                        url: url,
                                        type: "GET",
                                        dataType: "json",
                                        data: {
                                            term: extractLast(request.term),
                                            grpcompsend: grpcompsend,
                                            type: search_type
                                        },
                                        success: function(data) {
                                            response($.map(data, function(item) {
                                                return {
                                                    label: item.value,
                                                    category: item.category,
                                                    value: item.id,
                                                    fullname: item.fullname,
                                                    href: item.href // tenant_id: item.tenant_id,
                                                    // department: item.department,
                                                }
                                            }));
                                        }
                                    });
                                },
                                search: function() {
                                    // custom minLength
                                    var term = extractLast(this.value);
                                    if (term.length < 2) {
                                        return false;
                                    }
                                },
                                focus: function() {
                                    // prevent value inserted on focus
                                    return false;
                                },
                                select: function(event, ui) {
                                    var href = ui.item.href ? ui.item.href : 'javascript:void(0)';
                                    window.location = href;
                                    var terms = split(this.value);
                                    // remove the current input
                                    terms.pop();
                                    // add the selected item
                                    if (ui.item.category == 'Employee Name') {
                                        terms.push(ui.item.fullname);
                                    } else {
                                        terms.push(ui.item.label);
                                    }
                                    var a = $("#abc").val();
                                    if (typeof a !== "undefined") {
                                        a = a + ui.item.value + ',';
                                        $("#abc").val(a);
                                    }
                                    // console.log(a);
                                    // add placeholder to get the comma-and-space at the end
                                    terms.push("");
                                    this.value = terms.join(", ");
                                    $("#mobile_search_modal #employee-search_dashboard, #employee-search_dashboard").val('');
                                    return false;
                                },
                                change: function(e, ui) {
                                    if ($(this).val() == '') {
                                        $("#abc").val("");
                                    }
                                }
                            }).catcomplete("instance")._renderItem = function(ul, item) {
                                var href = item.href ? item.href : 'javascript:void(0)';
                                return $("<li>").append("<div class='search-item'><a href='" + href + "'>" + item.label + "</a></div>").appendTo(ul);
                            }
                            ;
                        })
                    </script>
                    <!-- INTRO JS GUIDED TOUR-->
                    <script type="text/javascript">

                        // var page_full_url = window.location;
                        // var split_page_url = window.location.pathname.split('/');
                        // var cac_split_page_url = split_page_url;
                        // var page_name = split_page_url.pop();
                        // var page_name_one = split_page_url[1];
                        // var page_name_two = split_page_url[2];
                        // var page_name_three = split_page_url[3];
                        // var page_name_four = split_page_url[4];
                        // if (isInt(page_name))
                        // {
                        //   var constant_page_name = page_name_one + "_" + page_name_two + "_" + page_name_three + "_" + page_name_four;
                        //   var cookie_page_name = (page_name == '') ? 'dashboard' : constant_page_name;
                        // }
                        // else
                        // {
                        //   var cookie_page_name = (page_name == '') ? 'dashboard' : page_name;
                        // }
                        // $(document).ready(function () {
                        //   var cac_split_page_url = window.location.pathname.split('/');
                        //   if (cac_split_page_url == "" || cac_split_page_url == ",dashboard,index" || cac_split_page_url == ",dashboard" || cac_split_page_url == ","){
                        //     $("#dashboard-header-open").addClass("hidden");
                        //   }else{
                        //     $("#dashboard-header-open").removeClass("hidden");
                        //   }
                        //   var check_guided_tour = getCookie('darwinbox_guide' + cookie_page_name);
                        //   if (check_guided_tour != 1 && (cookie_page_name == "dashboard" || cookie_page_name == "index"))
                        //   {
                        //     javascript:introJs().onchange(function(targetElement) { 
                        //       if(this._currentStep == (this._introItems.length - 1)){
                        //         $(".introjs-nextbutton").hide();
                        //         $(".introjs-prevbutton").css({'border-right': '1px solid #d4d4d4','border-top-right-radius': '2px','border-bottom-right-radius': '2px'});
                        //       }
                        //       else{
                        //         $(".introjs-nextbutton").show();
                        //         $(".introjs-prevbutton").css({'border-right': '0px','border-top-right-radius': 'initial','border-bottom-right-radius': 'initial'});
                        //       }
                        //     }).start();
                        //   }
                        // });

                        // $(".introjs-skipbutton").live("click", function (e) {
                        //   document.cookie = "darwinbox_guide" + cookie_page_name + "=1; expires=31 Jan 2019 12:00:00 UTC; path=" + page_full_url + ";";
                        // });

                        // function getCookie(cname) {
                        //   var name = cname + "=";
                        //   var ca = document.cookie.split(';');
                        //   for (var i = 0; i < ca.length; i++) {
                        //     var c = ca[i];
                        //     while (c.charAt(0) == ' ')
                        //       c = c.substring(1);
                        //     if (c.indexOf(name) == 0)
                        //       return c.substring(name.length, c.length);
                        //   }
                        //   return "";
                        // }
                        // function isInt(value)
                        // {
                        //   return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
                        // }
                    </script>
                    <!-- INTRO JS GUIDED TOUR-->
                    <script>

                        function pickColorBasedOnBgColor(bgColor) {
                            if (!bgColor.includes("linear-gradient")) {

                                var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
                                var r = parseInt(color.substring(0, 2), 16);
                                // hexToR
                                var g = parseInt(color.substring(2, 4), 16);
                                // hexToG
                                var b = parseInt(color.substring(4, 6), 16);
                                // hexToB
                                var uicolors = [r / 255, g / 255, b / 255];

                                var c = uicolors.map( (col) => {
                                    if (col <= 0.03928) {
                                        return col / 12.92;
                                    }
                                    return Math.pow((col + 0.055) / 1.055, 2.4);
                                }
                                );

                                var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);

                                if (L > 0.179) {
                                    $("#dasboard-bigheader").addClass("white-header");
                                } else {
                                    $("#dasboard-bigheader").addClass("black-header")
                                }

                            }
                        }

                        $(document).ready(function() {

                            $('.global-search.ui-autocomplete-input').focus(function() {
                                $(this).closest(".search-header").addClass('focusIn');
                            });
                            $('.global-search.ui-autocomplete-input').blur(function() {
                                $(this).closest(".search-header").removeClass('focusIn');
                            });

                            $('[data-toggle="tooltip"]').tooltip({
                                container: "body",
                                trigger: "hover",
                                placement: "top",
                                html: true,
                            });
                            var dashboardHeader = document.getElementById("dasboard-bigheader");
                            var popoverTriggerList = [].slice.call(dashboardHeader.querySelectorAll('[data-bs-toggle="popover"]'));
                            var popoverList = popoverTriggerList.filter(function(ele) {
                                return ele.getAttribute("data-bs-content")
                            }).map(function(popoverTriggerEl) {
                                return new bootstrap.Popover(popoverTriggerEl,{
                                    html: true,
                                    sanitize: false
                                });
                            });
                            $('body').on("click", ".dropdown-menu", function(e) {
                                $(this).parent().is(".open") && e.stopPropagation();
                            });
                            $('.sub_dropdown>li').click(function() {
                                $('.sub_dropdown,.profile-dropdown').hide();
                                $('.sub_dropdown').css({
                                    "visibility": "hidden",
                                    "opacity": "0"
                                });
                            })
                            $('.language').click(function() {
                                $('.sub_dropdown').show();
                                $('.sub_dropdown').css({
                                    "visibility": "visible",
                                    "opacity": "1"
                                });
                            })
                            $(document).mouseup(function(e) {
                                var container = $('.sub_dropdown');
                                if (!container.is(e.target) && container.has(e.target).length === 0) {
                                    container.fadeOut("fast");
                                }
                            });
                        });
                    </script>
                    <script src='/ms/chatbot/assets/bot.js'></script>
                    <script>
                        function replaceVarInStr(msg, varMapping) {
                            let replaced = msg;
                            for (const key in varMapping) {
                                replaced = replaced.replaceAll(key, varMapping[key]);
                            }
                            return replaced;
                        }

                        $(document).ready(function() {
                            if (window.innerWidth <= 768) {
                                $('.mobile_search button').click(function() {
                                    var myModal = new bootstrap.Modal(document.getElementById("mobile_search_modal"),{
                                        show: true,
                                        keyboard: true,
                                        backdrop: false,
                                    })
                                    myModal.toggle();
                                })
                                $(".clock_sec").addClass("hidden")
                            }
                        });
                    </script>
                    <script>
                        $(document).ready(function() {
                            const dsBluebarElementReference = document.body.querySelector('dbx-ds-bluebar');
                            if (!!dsBluebarElementReference) {
                                dsBluebarElementReference?.addEventListener?.('sideBarAppsLoaded', (e) => {
                                    try {
                                        const leftNavElementReference = document.body.querySelector('dbx-ds-left-navigation');
                                        const sidebarAppsData = e?.detail;
                                        if (!!leftNavElementReference) {
                                            leftNavElementReference.sidebarAppsData = sidebarAppsData;
                                        }
                                    } catch (E) {
                                        console.error('[messageTopBar.php] Error while setting sidebarAppsData to leftNav');
                                    }
                                }
                                );
                            }
                        });
                    </script>
                </div>
            </div>
        </div>
        <div class="container-full container-minheight include-topbar-padding clearfix " style="">
            <div class="">
                <!--Outer Shell-->
                <div class="clearfix"></div>
                <script>
                    document.body.setAttribute('data-overlayscrollbars-initialize', '');

                    $(document).ready( () => {
                        OverlayScrollbarsGlobal.OverlayScrollbars(document.body, {
                            scrollbars: {
                                autoHide: 'scroll',
                                autoHideSuspend: true
                            }
                        });
                    }
                    );

                    let settings = document.querySelector('dbx-settings-l1');
                    let ribbon = document.querySelector('dbx-ribbon');
                    if (settings && ribbon) {
                        const settingsConfig = [{
                            "label": "Organization",
                            "id": "organization",
                            "children": [{
                                "label": "Organization Units",
                                "id": "organization_units",
                                "children": [{
                                    "label": "Firm Profile",
                                    "url": "\/settings\/company\/profile",
                                    "visible": true,
                                    "description": "Create a Parent Firm for the business that is at the highest level of the Functional Structure hierarchy",
                                    "hierarchy": "Organization | Organization Units",
                                    "id": "profile",
                                    "logo": "\/images\/settings\/l2_settings\/organization_units.svg"
                                }, {
                                    "label": "Group Firm",
                                    "url": "\/settings\/company\/grpcompany",
                                    "visible": true,
                                    "description": "Create and manage one or more Group Companies that act as the second level of the Functional Structure hierarchy",
                                    "hierarchy": "Organization | Organization Units",
                                    "id": "grpcompany",
                                    "logo": "\/images\/settings\/l2_settings\/organization_units.svg"
                                }, {
                                    "label": "Legal Entity",
                                    "url": "\/settings\/company\/legalentity",
                                    "visible": true,
                                    "description": "Configure and manage Legal Entity",
                                    "hierarchy": "Organization | Organization Units",
                                    "id": "legalentity",
                                    "logo": "\/images\/settings\/l2_settings\/organization_units.svg"
                                }, {
                                    "label": "Business Unit",
                                    "url": "\/settings\/company\/businessunit",
                                    "visible": true,
                                    "description": "Create and manage Business Unit that can aggregate multiple Department in the functional structure across Group Companies",
                                    "hierarchy": "Organization | Organization Units",
                                    "id": "businessunit",
                                    "logo": "\/images\/settings\/l2_settings\/organization_units.svg"
                                }, {
                                    "label": "Division",
                                    "url": "\/settings\/company\/division",
                                    "visible": true,
                                    "description": "Configure and manage Divisions to combine Business Units across multiple Group Companies",
                                    "hierarchy": "Organization | Organization Units",
                                    "id": "division",
                                    "logo": "\/images\/settings\/l2_settings\/organization_units.svg"
                                }, {
                                    "label": "Capability",
                                    "url": "\/settings\/company\/capability",
                                    "visible": true,
                                    "description": "Configure and manage Capability to combine multiple Departments across different Companies",
                                    "hierarchy": "Organization | Organization Units",
                                    "id": "capability",
                                    "logo": "\/images\/settings\/l2_settings\/organization_units.svg"
                                }, {
                                    "label": "Department",
                                    "url": "\/settings\/company\/departments",
                                    "visible": true,
                                    "description": "Configure and manage Department to add additional levels to functional structure. Departments are linked to a Firm and optionally to a Business Unit. ",
                                    "hierarchy": "Organization | Organization Units",
                                    "id": "departments",
                                    "logo": "\/images\/settings\/l2_settings\/organization_units.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/organization_units.svg"
                            }, {
                                "label": "Roles & Career",
                                "id": "roles_and_career",
                                "children": [{
                                    "label": "Designation Name",
                                    "url": "\/settings\/company\/designationnames",
                                    "visible": true,
                                    "description": "Create and manage Designation Name that you can assign for a role in a Department",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "designationnames",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Designation",
                                    "url": "\/settings\/company\/designations",
                                    "visible": true,
                                    "description": "Configure one or more Designations that indicate the role or position associated with an Employee within the Department",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "designations",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Designation Title",
                                    "url": "\/settings\/company\/designationtitles",
                                    "visible": true,
                                    "description": "Create one or more Designation Titles that can be used to represent the Designation associated with an Employee, especially in external communications",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "designationtitles",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Functional Area",
                                    "url": "\/settings\/company\/functionalarea",
                                    "visible": true,
                                    "description": "Configure one or more Functional Areas and link them to Designations for easy identification of the specialization of an Employee",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "functionalarea",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Grade",
                                    "url": "\/settings\/company\/grades",
                                    "visible": true,
                                    "description": "Create one or more Grades to easily distinguish between Employees with varying pay scales and work experience",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "grades",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Band",
                                    "url": "\/settings\/company\/bands",
                                    "visible": true,
                                    "description": "Create and manage one or more Bands to logically group Grades",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "bands",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Job Level",
                                    "url": "\/settings\/company\/joblevel",
                                    "visible": true,
                                    "description": "Create and manage one or more Job Levels to differentiate Employees who are in the role but with different Grade on the basis of their experience, pay and other attributes",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "joblevel",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Contribution Level",
                                    "url": "\/settings\/company\/neevlevel",
                                    "visible": true,
                                    "description": "Create one or more Contribution Levels that you assign to Employees for  recognizing and differentiating Employees based on their contributions toward the Firm's goals",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "neevlevel",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Position",
                                    "url": "\/settings\/company\/positionsetting",
                                    "visible": true,
                                    "description": "Configure Position Management for your Firm, by using the Position settings",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "positionsetting",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Assignment One",
                                    "url": "\/settings\/company\/assignmentone",
                                    "visible": true,
                                    "description": "Configure and manage Assignment One that you can assign to one or more Employees to segregate them for policy and other assignments in the system",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "assignmentone",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Assignment two",
                                    "url": "\/settings\/company\/assignmenttwo",
                                    "visible": true,
                                    "description": "Configure and manage Assignment two that you can assign to one or more Employees to segregate them for policy and other assignments in the system",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "assignmenttwo",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Assignment Three",
                                    "url": "\/settings\/company\/assignmentthree",
                                    "visible": true,
                                    "description": "Configure and manage Assignment Three that you can assign to one or more Employees to segregate them for policy and other assignments in the system",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "assignmentthree",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "JD Template",
                                    "url": "\/settings\/company\/jdtemplate",
                                    "visible": true,
                                    "description": "Create and manage one or more Job Descriptions detailing a Job\u2019s responsibilities and requirements for candidates",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "jdtemplate",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Job Family",
                                    "url": "\/settings\/company\/jobfamily",
                                    "visible": true,
                                    "description": "Create one or more Job Families by specifying one or more Designations and other optional attributes such as Bands, Grades, etc., to help maintain pay scales when generating offer letters",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "jobfamily",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }, {
                                    "label": "Role Category",
                                    "url": "\/settings\/company\/rolecategory",
                                    "visible": true,
                                    "description": "Create the Role Categories",
                                    "hierarchy": "Organization | Roles & Career",
                                    "id": "rolecategory",
                                    "logo": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/roles_and_career.svg"
                            }, {
                                "label": "Locations",
                                "id": "locations",
                                "children": [{
                                    "label": "Locations",
                                    "url": "\/settings\/company\/offices",
                                    "visible": true,
                                    "description": "Create and manage Locations corresponding to the Locations where a Firm has presence or where Employees are expected to work",
                                    "hierarchy": "Organization | Locations",
                                    "id": "offices",
                                    "logo": "\/images\/settings\/l2_settings\/locations.svg"
                                }, {
                                    "label": "Location Type",
                                    "url": "\/settings\/company\/locationtype",
                                    "visible": true,
                                    "description": "Create and manage Location Type to further qualify the type of Locations in the system",
                                    "hierarchy": "Organization | Locations",
                                    "id": "locationtype",
                                    "logo": "\/images\/settings\/l2_settings\/locations.svg"
                                }, {
                                    "label": "Centre Type",
                                    "url": "\/settings\/company\/centretype",
                                    "visible": true,
                                    "description": "Create and manage Centre Type to further qualify the centre of Locations in the system",
                                    "hierarchy": "Organization | Locations",
                                    "id": "centretype",
                                    "logo": "\/images\/settings\/l2_settings\/locations.svg"
                                }, {
                                    "label": "City Type",
                                    "url": "\/settings\/company\/citytype",
                                    "visible": true,
                                    "description": "Create and manage Centre Type to further qualify the city of Locations in the system",
                                    "hierarchy": "Organization | Locations",
                                    "id": "citytype",
                                    "logo": "\/images\/settings\/l2_settings\/locations.svg"
                                }, {
                                    "label": "Region",
                                    "url": "\/settings\/company\/region",
                                    "visible": true,
                                    "description": "Create and manage Regions to aggregate States (within countries) as per the Firm\u2019s requirements",
                                    "hierarchy": "Organization | Locations",
                                    "id": "region",
                                    "logo": "\/images\/settings\/l2_settings\/locations.svg"
                                }, {
                                    "label": "Locations & Address Structure",
                                    "url": "\/settings\/company\/locaddstructure",
                                    "visible": true,
                                    "description": "Setup the country-specific structure of Locations and address in the system.\n                                        This page enables addition, deletion and aliasing of location structure components.",
                                    "hierarchy": "Organization | Locations",
                                    "id": "locaddstructure",
                                    "logo": "\/images\/settings\/l2_settings\/locations.svg"
                                }, {
                                    "label": "Locations Master",
                                    "url": "\/settings\/company\/locationcountrymaster",
                                    "visible": true,
                                    "description": "View the Locations master that is applicable for the instance",
                                    "hierarchy": "Organization | Locations",
                                    "id": "locationcountrymaster",
                                    "logo": "\/images\/settings\/l2_settings\/locations.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/locations.svg"
                            }, {
                                "label": "Role Based Access Controls",
                                "id": "role_based_access_controls",
                                "children": [{
                                    "label": "Manage Standard Permission Roles",
                                    "url": "\/standardPermissions",
                                    "visible": true,
                                    "description": "View and customize the permissions that is assigned to standard roles in the system",
                                    "hierarchy": "Organization | Role Based Access Controls",
                                    "id": "standardPermissions",
                                    "logo": "\/images\/settings\/l2_settings\/role_based_access_controls.svg"
                                }, {
                                    "label": "Manage Custom Permission Roles",
                                    "url": "\/settings\/permissions\/index",
                                    "visible": true,
                                    "description": "Create and manage custom permission roles to provide role-based access controls for Employees. You can add, edit, or delete permissions within these roles and assign them to one or more  Employees , specifying the scope of access as needed.",
                                    "hierarchy": "Organization | Role Based Access Controls",
                                    "id": "customPermissions",
                                    "logo": "\/images\/settings\/l2_settings\/role_based_access_controls.svg"
                                }, {
                                    "label": "Manage Report Permissions",
                                    "url": "\/settings\/reportpermissions\/edit",
                                    "visible": true,
                                    "description": "Edit the report custom permission roles to add or remove fields that the Employees can use when generating a Report",
                                    "hierarchy": "Organization | Role Based Access Controls",
                                    "id": "reportpermissions_edit",
                                    "logo": "\/images\/settings\/l2_settings\/role_based_access_controls.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/role_based_access_controls.svg"
                            }, {
                                "label": "Employee Data",
                                "id": "employee_data",
                                "children": [{
                                    "label": "Employment Details Settings",
                                    "url": "\/settings\/employees\/employmentdetailssettings",
                                    "visible": true,
                                    "description": "Configure the visibility of sections within the Employment Details tab in the Employee profile",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "employmentdetailssettings",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Nominations",
                                    "url": "\/settings\/employees\/nominations",
                                    "visible": true,
                                    "description": "Configure and manage the benefit programs that Employee can nominate their dependents",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "nominations",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Org View Settings",
                                    "url": "\/settings\/employees\/orgsettings",
                                    "visible": true,
                                    "description": "Use these Settings to configure various Employee, Functional, and Position attributes and make them visible to users when viewing the Organizational, Functional, and Position Structures",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "orgsettings",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Profile Field Options",
                                    "url": "\/settings\/employees\/profilefieldoptions",
                                    "visible": true,
                                    "description": "Configure the options to display in the drop-down list for certain fields, such as Gender, Marital Status, Religion, etc",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "profilefieldoptions",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Profile View Settings",
                                    "url": "\/settings\/employees\/profilesetting",
                                    "visible": true,
                                    "description": "Configure the fields to be displayed on an Employee profile, set their usage during recruitment, and define View, Edit, and Delete restrictions",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "profilesetting",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Weekly Off",
                                    "url": "\/settings\/company\/weeklyoff",
                                    "visible": true,
                                    "description": "Create and manage Weekly Off configurations to specify days that Darwinbox should consider as Weekly Off or Half Day off for Employees who are assigned the created Weekly Off configuration",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "weeklyoff",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Mobile Reportee Dashboard",
                                    "url": "\/settings\/employees\/mobiledashboard",
                                    "visible": true,
                                    "description": "Configure the attributes of the Reportees that must be displayed to Reporting Managers when they access Reportee Details on their Darwinbox Mobile App",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "mobiledashboard",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Bank List",
                                    "url": "\/settings\/employees\/newbanklist",
                                    "visible": true,
                                    "description": "Configure and view the banks that is available for configuring a bank policy for Employee",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "newbanklist",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Bank Policy",
                                    "url": "\/settings\/employees\/bankpolicy",
                                    "visible": true,
                                    "description": "Configure and view the bank policy that enables Employee to choose the banks as part of their salary payment options",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "bankpolicy",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Bank Names",
                                    "url": "\/settings\/employees\/banknames",
                                    "visible": true,
                                    "description": "Configure and view the bank names that can be used for adding bank lists and bank policies in instance",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "banknames",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Directory View Setting",
                                    "url": "\/settings\/employees\/directoryviewsetting",
                                    "visible": true,
                                    "description": "Configure the columns that need to be displayed under Directory Page",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "directoryviewsetting",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Institute Master",
                                    "url": "\/coreSettings\/index\/institutemaster",
                                    "visible": true,
                                    "description": "View and configure the Institute Master that is applicable for the instance, when enabled at an instance level",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "institutemaster",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "National ID",
                                    "url": "\/settings\/employees\/nationalidmanager",
                                    "visible": true,
                                    "description": "Configure the applicable options and fields to be displayed in National ID array section in profile",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "nationalidmanager",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }, {
                                    "label": "Dependent Rules",
                                    "url": "\/settings\/employees\/dependentrules",
                                    "visible": true,
                                    "description": "Configure rules for employee dependents",
                                    "hierarchy": "Organization | Employee Data",
                                    "id": "dependentrules",
                                    "logo": "\/images\/settings\/l2_settings\/employee_data.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/employee_data.svg"
                            }, {
                                "label": "Employment Management",
                                "id": "employment_management",
                                "children": [{
                                    "label": "Employee ID Numbering",
                                    "url": "\/settings\/employees\/number",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that automatically generates and assigns an Employee ID to Employees based on specific rules or patterns determined by the Firm",
                                    "hierarchy": "Organization | Employment Management",
                                    "id": "employee_numbering",
                                    "logo": "\/images\/settings\/l2_settings\/employment_management.svg"
                                }, {
                                    "label": "Employee Type",
                                    "url": "\/settings\/employees\/types",
                                    "visible": true,
                                    "description": "Create and manage Employee Type to segregate Employees based on certain attributes such as age",
                                    "hierarchy": "Organization | Employment Management",
                                    "id": "employee_type",
                                    "logo": "\/images\/settings\/l2_settings\/employment_management.svg"
                                }, {
                                    "label": "Employee Sub Type",
                                    "url": "\/settings\/employees\/subtypes",
                                    "visible": true,
                                    "description": "Create and manage Employee Sub Type to segregate Employees who belong to the same Employee Type",
                                    "hierarchy": "Organization | Employment Management",
                                    "id": "employee_subtype",
                                    "logo": "\/images\/settings\/l2_settings\/employment_management.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/employment_management.svg"
                            }, {
                                "label": "Lifecycle Management",
                                "id": "lifecycle_management",
                                "children": [{
                                    "label": "Probation Period",
                                    "url": "\/settings\/company\/probation",
                                    "visible": true,
                                    "description": "Configure and manage one or more Probation Periods that can be assigned to  Employees to be used during the Confirmation process",
                                    "hierarchy": "Organization | Lifecycle Management",
                                    "id": "probation",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                                }, {
                                    "label": "Contract Period",
                                    "url": "\/settings\/company\/contractperiod",
                                    "visible": true,
                                    "description": "Configure and manage one or more Contract Periods that can be assigned to contract Employees for effective Contract Management",
                                    "hierarchy": "Organization | Lifecycle Management",
                                    "id": "contractperiod",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                                }, {
                                    "label": "Employee Advanced Settings",
                                    "url": "\/settings\/employees\/advancesettings",
                                    "visible": true,
                                    "description": "Configure various settings of the Employee profile, including the Visibility of fields, Hire and  Re-hire settings, New joining related , Separation, and Termination settings",
                                    "hierarchy": "Organization | Lifecycle Management",
                                    "id": "advancesettings",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                                }, {
                                    "label": "Notice Period",
                                    "url": "\/settings\/company\/notice",
                                    "visible": true,
                                    "description": "Configure and manage one or more Notice Periods that can be assigned to select groups of Employees to be used during the Separation process",
                                    "hierarchy": "Organization | Lifecycle Management",
                                    "id": "notice",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                                }, {
                                    "label": "Retirement Period",
                                    "url": "\/settings\/company\/retire",
                                    "visible": true,
                                    "description": "Configure and manage one or more Retirement Periods that can be assigned to select groups of Employees to be used when an Employee retires",
                                    "hierarchy": "Organization | Lifecycle Management",
                                    "id": "retire",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                                }, {
                                    "label": "Separation Reasons",
                                    "url": "\/settings\/employees\/deactivate",
                                    "visible": true,
                                    "description": "Configure the options to display as the reasons for Separation in the drop-down list that various users can select during the Separation process",
                                    "hierarchy": "Organization | Lifecycle Management",
                                    "id": "deactivate",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                                }, {
                                    "label": "Additional Assignments",
                                    "url": "\/coreSettings\/index\/additional_assignments_policy",
                                    "visible": true,
                                    "description": "Create and manage Additional Assignment Policy",
                                    "hierarchy": "Organization | Lifecycle Management",
                                    "id": "additional_assignments_policy",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/lifecycle_management.svg"
                            }, {
                                "label": "Project Management",
                                "id": "project_management",
                                "children": [{
                                    "label": "Activities",
                                    "url": "\/settings\/company\/activity",
                                    "visible": true,
                                    "description": "Create and manage a list of tasks or activities and assign them to Projects to help Employees effectively track time for specific tasks in Timesheets",
                                    "hierarchy": "Organization | Project Management",
                                    "id": "company_activity",
                                    "logo": "\/images\/settings\/l2_settings\/project_management.svg"
                                }, {
                                    "label": "Project",
                                    "url": "\/settings\/company\/project",
                                    "visible": true,
                                    "description": "Create and manage Projects including adding Employees and stakeholders associated with the Project",
                                    "hierarchy": "Organization | Project Management",
                                    "id": "project",
                                    "logo": "\/images\/settings\/l2_settings\/project_management.svg"
                                }, {
                                    "label": "Account",
                                    "url": "\/settings\/company\/accountsettings",
                                    "visible": true,
                                    "description": "Create and manage Account including adding Employees and stakeholders associated with the Project",
                                    "hierarchy": "Organization | Project Management",
                                    "id": "account",
                                    "logo": "\/images\/settings\/l2_settings\/project_management.svg"
                                }, {
                                    "label": "Project Roles",
                                    "url": "\/settings\/company\/project_roles",
                                    "visible": true,
                                    "description": "Create and manage Projects Roles",
                                    "hierarchy": "Organization | Project Management",
                                    "id": "project_roles",
                                    "logo": "\/images\/settings\/l2_settings\/project_management.svg"
                                }, {
                                    "label": "Rate Cards",
                                    "url": "\/settings\/company\/rate_card",
                                    "visible": true,
                                    "description": "View Rate Cards",
                                    "hierarchy": "Organization | Project Management",
                                    "id": "rate_card",
                                    "logo": "\/images\/settings\/l2_settings\/project_management.svg"
                                }, {
                                    "label": "Sub-Activity",
                                    "url": "\/settings\/company\/sub_activity",
                                    "visible": true,
                                    "description": "Create and manage a list of tasks or sub-activities.",
                                    "hierarchy": "Organization | Project Management",
                                    "id": "sub_activity",
                                    "logo": "\/images\/settings\/l2_settings\/project_management.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/project_management.svg"
                            }, {
                                "label": "Spend Tracking",
                                "id": "spend_tracking",
                                "children": [{
                                    "label": "JV Cost center",
                                    "url": "\/settings\/company\/costcenter",
                                    "visible": true,
                                    "description": "Create and manage Cost Centers that can be used to track costs at a Division, Business Unit, Department, Functional Area, and Employee levels",
                                    "hierarchy": "Organization | Spend Tracking",
                                    "id": "costcenter",
                                    "logo": "\/images\/settings\/l2_settings\/spend_tracking.svg"
                                }, {
                                    "label": "Ledgers",
                                    "url": "\/settings\/company\/ledger",
                                    "visible": true,
                                    "description": "Create and manage Ledgers that can be used to track and segregate different transactions in the Firm",
                                    "hierarchy": "Organization | Spend Tracking",
                                    "id": "ledger",
                                    "logo": "\/images\/settings\/l2_settings\/spend_tracking.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/spend_tracking.svg"
                            }]
                        }, {
                            "label": "Platform",
                            "id": "platform",
                            "children": [{
                                "label": "Notification Centre",
                                "id": "notifications",
                                "children": [{
                                    "label": "Standard Notifications",
                                    "url": "\/notificationtemplates\/template\/view",
                                    "visible": true,
                                    "autoPopulatePageLevelActionBtns": false,
                                    "description": "Manage Standard Notification Templates to send pre-defined Notification Templates. The notifications are shared with specific recipients as per the standard events across various channels enabled.",
                                    "hierarchy": "Platform | Notification Centre",
                                    "id": "notification_templates",
                                    "logo": "\/images\/settings\/l2_settings\/notifications.svg"
                                }, {
                                    "label": "Custom Notifications",
                                    "url": "\/flows\/flowssettings\/customworkflow\/createwfemailtemplate",
                                    "visible": true,
                                    "description": "Use Custom Notification Templates to create and manage custom notifications that can be used to send notifications to specific Employees during configurable events across the platform",
                                    "hierarchy": "Platform | Notification Centre",
                                    "id": "createwfemailtemplate",
                                    "logo": "\/images\/settings\/l2_settings\/notifications.svg"
                                }, {
                                    "label": "Email Digest",
                                    "url": "\/emaildigest\/index\/tab\/view",
                                    "visible": true,
                                    "description": "Configure email digests for Employees to be able to send consolidated notification for pending tasks, requests and upcoming events at required frequency",
                                    "hierarchy": "Platform | Notification Centre",
                                    "id": "emaildigest",
                                    "logo": "\/images\/settings\/l2_settings\/notifications.svg"
                                }, {
                                    "label": "Additional Settings",
                                    "url": "\/emaildigest\/index\/tab\/settings",
                                    "visible": true,
                                    "description": "Configure settings that enable applicable options for Email Digest, Email sender alias options and other notifications",
                                    "hierarchy": "Platform | Notification Centre",
                                    "id": "notification_settings",
                                    "logo": "\/images\/settings\/l2_settings\/notifications.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/notifications.svg"
                            }, {
                                "label": "Form Builder",
                                "id": "form_builder",
                                "children": [{
                                    "label": "Form Builder - PDF Forms",
                                    "url": "\/ms\/formbuilder\/settings\/list\/pdf",
                                    "description": "Create and manage fillable PDF Forms from any PDF document by mapping the fields in the PDF document to the form fields",
                                    "visible": true,
                                    "hierarchy": "Platform | Form Builder",
                                    "id": "pdf_forms",
                                    "logo": "\/images\/settings\/l2_settings\/form_builder.svg"
                                }, {
                                    "label": "Form Builder - Standard Forms",
                                    "url": "\/ms\/formbuilder\/settings\/list\/standard",
                                    "description": "Create and manage Standard Forms that can be used to collect data from Employee during a workflow or process transaction",
                                    "visible": true,
                                    "hierarchy": "Platform | Form Builder",
                                    "id": "standard_forms",
                                    "logo": "\/images\/settings\/l2_settings\/form_builder.svg"
                                }, {
                                    "label": "Smart Tags",
                                    "url": "\/ms\/formbuilder\/settings\/smart-tags",
                                    "description": "Smart Tags to be created to merge data from multiple form fields in different forms into one field.",
                                    "visible": true,
                                    "hierarchy": "Platform | Form Builder",
                                    "id": "smart_tags",
                                    "logo": "\/images\/settings\/l2_settings\/form_builder.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/form_builder.svg"
                            }, {
                                "label": "Document Management",
                                "id": "document_management",
                                "children": [{
                                    "label": "Document Categories",
                                    "url": "\/hrfiles\/hrfilessettings\/documentcategories",
                                    "visible": true,
                                    "description": "For effective Document Management, you can create categories to organize and classify your documents",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "documentcategories",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }, {
                                    "label": "Policies HR and Letters Settings",
                                    "url": "\/hrfiles\/hrfilessettings\/letterSettings",
                                    "visible": true,
                                    "description": "Use the Policies HR and Letter Settings to customize the Font Type, Font Size, Sign-off text, and Acknowledgement text. You can also use these Settings to allow specific sets of Employees to download HR Policies",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "letterSettings",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }, {
                                    "label": "Self Generate Setting",
                                    "url": "\/hrfiles\/hrfilessettings\/selfgeneration",
                                    "visible": true,
                                    "description": "Utilize the Self-Generate Settings to set the default Letter Head and Signing Authorities that will be used when Employees self-generate or request HR Letters. Additionally, you can specify which Employees are authorized to generate HR letters when requested by others.",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "selfgeneration",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }, {
                                    "label": "Letter Head Management",
                                    "url": "\/hrfiles\/hrfilessettings\/letterhead",
                                    "visible": true,
                                    "description": "Create one or more Letter Heads that can be used when generating HR Letters",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "letterhead",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }, {
                                    "label": "Signing Authority",
                                    "url": "\/hrfiles\/hrfilessettings\/lettersignature",
                                    "visible": true,
                                    "description": "Create one or more Signing Authorities that can be used when generating HR Letters",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "lettersignature",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }, {
                                    "label": "Letter Auto Numbering",
                                    "url": "\/hrfiles\/hrfilessettings\/letterAutoNumber",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that automatically generates and assigns a unique identifier to HR Letters based on specific rules or patterns determined by the Firm",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "letterAutoNumber",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }, {
                                    "label": "CTC Table Formatting Configurations",
                                    "url": "\/hrfiles\/hrfilessettings\/letterctcformatting",
                                    "visible": true,
                                    "description": "Customize the appearance of CTC Tables that appear in HR Letters",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "letterctcformatting",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }, {
                                    "label": "Document Template Name Formats",
                                    "url": "\/hrfiles\/hrfilessettings\/documenttemplateformats",
                                    "visible": true,
                                    "description": "Customize generated document file name",
                                    "hierarchy": "Platform | Document Management",
                                    "id": "documenttemplateformats",
                                    "logo": "\/images\/settings\/l2_settings\/document_management.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/document_management.svg"
                            }, {
                                "label": "Reporting & Analytics",
                                "id": "reporting_and_analytics",
                                "children": [{
                                    "label": "Reports Builder",
                                    "url": "\/settings\/company\/reportbuilder",
                                    "visible": true,
                                    "hierarchy": "Platform | Reporting & Analytics",
                                    "id": "reportbuilder",
                                    "logo": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                                }, {
                                    "label": "Reports Scheduler",
                                    "url": "\/settings\/company\/reportscheduler",
                                    "visible": true,
                                    "description": "Use the Reports Scheduler to automate the generation and distribution of reports at predefined times and intervals to specific employees",
                                    "hierarchy": "Platform | Reporting & Analytics",
                                    "id": "reportscheduler",
                                    "logo": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                                }, {
                                    "label": "Custom Roster",
                                    "url": "\/settings\/company\/customroster",
                                    "visible": true,
                                    "description": "The Custom Roster offers a range of fields that can be utilized to generate custom reports",
                                    "hierarchy": "Platform | Reporting & Analytics",
                                    "id": "customroster",
                                    "logo": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                                }, {
                                    "label": "Analytics Advanced Settings",
                                    "url": "\/ms\/analyticsnew\/settings",
                                    "description": "Customize formula for metrics and select age \/ tenure groups for your Analytics Dashboards",
                                    "visible": true,
                                    "hierarchy": "Platform | Reporting & Analytics",
                                    "id": "analyticsadvancedsettings",
                                    "logo": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                                }, {
                                    "label": "Audit Trail",
                                    "url": "\/audittrail",
                                    "visible": true,
                                    "description": "View the audit trail of changes in the system for the specified time period",
                                    "hierarchy": "Platform | Reporting & Analytics",
                                    "id": "audittrail",
                                    "logo": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                                }, {
                                    "label": "Analytics Subscription",
                                    "url": "\/ms\/analyticsnew\/subscriptions",
                                    "visible": true,
                                    "description": "Customize Analytics Subscriptions",
                                    "hierarchy": "Platform | Reporting & Analytics",
                                    "id": "analyticssubscriptions",
                                    "logo": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                                }, {
                                    "label": "Studio Settings",
                                    "url": "\/settings\/studiosettings",
                                    "visible": true,
                                    "description": "Studio Settings",
                                    "hierarchy": "Platform | Reporting & Analytics",
                                    "id": "studiosettings",
                                    "logo": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/reporting_and_analytics.svg"
                            }, {
                                "label": "Access & Security",
                                "id": "access_and_security",
                                "children": [{
                                    "label": "Mobile App Access",
                                    "url": "\/settings\/employees\/allowmobile",
                                    "visible": true,
                                    "description": "Use the Mobile App Access settings to provision Mobile App access to Employees of one or more Group Companies",
                                    "hierarchy": "Platform | Access & Security",
                                    "id": "allowmobile",
                                    "logo": "\/images\/settings\/l2_settings\/access_and_security.svg"
                                }, {
                                    "label": "Password Settings",
                                    "url": "\/settings\/company\/passwordsettings",
                                    "visible": true,
                                    "description": "Use Password Settings to secure user accounts by enforcing certain security measures and password policies for Employees",
                                    "hierarchy": "Platform | Access & Security",
                                    "id": "passwordsettings",
                                    "logo": "\/images\/settings\/l2_settings\/access_and_security.svg"
                                }, {
                                    "label": "Platform Accessibility Settings",
                                    "url": "\/settings\/employees\/platformaccessibilitysettings",
                                    "visible": true,
                                    "description": "Platform Accessibility Configuration Settings",
                                    "hierarchy": "Platform | Access & Security",
                                    "id": "platformaccessibilitysettings",
                                    "logo": "\/images\/settings\/l2_settings\/access_and_security.svg"
                                }, {
                                    "label": "Single Sign-On",
                                    "url": "\/settings\/ssoconfig",
                                    "visible": true,
                                    "description": "Single Sign-On Settings",
                                    "hierarchy": "Platform | Access & Security",
                                    "id": "ssosettings",
                                    "logo": "\/images\/settings\/l2_settings\/access_and_security.svg"
                                }, {
                                    "label": "Sensitive Data Configuration",
                                    "url": "\/SensitiveData\/configure",
                                    "visible": true,
                                    "description": "Use Sensitive Data Configuration To manage and configure sensitive information",
                                    "hierarchy": "Platform | Access & Security",
                                    "id": "sensitive_data_configuration",
                                    "logo": "\/images\/settings\/l2_settings\/access_and_security.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/access_and_security.svg"
                            }, {
                                "label": "Additional Configurations",
                                "id": "additional_configuration",
                                "children": [{
                                    "label": "User Assignments",
                                    "url": "\/settings\/company\/assignment",
                                    "visible": true,
                                    "description": "Configure User Assignments to group Employees based on specific attributes",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "assignment",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Aliases",
                                    "url": "\/settings\/company\/companyalias",
                                    "visible": true,
                                    "description": "Configure Aliases to replace default attribute names in Darwinbox with your Firm-specific naming convention",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "companyalias",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Event",
                                    "url": "\/settings\/company\/event",
                                    "visible": true,
                                    "description": "Configure Events to categorize certain actions or results in Employee lifecycle events like Employee addition, confirmation, Separation, etc",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "event",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Sub Event",
                                    "url": "\/settings\/company\/subevent",
                                    "visible": true,
                                    "description": "Create and manage Sub Events to create different categories for the same Event",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "subevent",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Custom Fields",
                                    "url": "\/settings\/customfields\/manage",
                                    "visible": true,
                                    "description": "When the out-of-the-box fields in Darwinbox fall short, you can create your own Custom Fields to meet your requirements across modules in Darwinbox",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "customfields_manage",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Reason List",
                                    "url": "\/settings\/company\/reasonlist",
                                    "visible": true,
                                    "description": "Create and manage Reasons that an Admin can select for a variety of activities including Employee lifecycle events",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "reasonlist",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Redirection",
                                    "url": "\/settings\/company\/extramenu",
                                    "visible": true,
                                    "description": "Create and manage icons with redirection links that can be used to provide quick navigation for Employees and admins",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "extramenu",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Scales",
                                    "url": "\/settings\/company\/scale",
                                    "visible": true,
                                    "description": "Create Scales with numeric or text markers to allow Employees and reviewers to rate Employees performance against assigned goals and competencies",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "scale",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Currency Conversion",
                                    "url": "\/settings\/company\/conversion",
                                    "visible": true,
                                    "description": "These settings allow you to specify the conversion factors to convert values from the currencies used in multiple transactions recorded within Darwinbox to the Base Currency",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "conversion",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Delegations",
                                    "url": "\/settings\/employees\/delegationsetting",
                                    "visible": true,
                                    "description": "Create and manage one or more Delegation policies that allow certain groups of Employees to automatically or manually delegate some or all of their tasks to Employees in their reporting hierarchy",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "delegationsetting",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "External Service Provider",
                                    "url": "\/settings\/company\/serviceproviders",
                                    "visible": true,
                                    "description": "Create and manage the profiles of external vendors who can be used in Flows",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "serviceproviders",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Attestations",
                                    "url": "\/settings\/company\/attestations",
                                    "visible": true,
                                    "description": "Configure and manage the rules and settings related to attestation",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "attestations",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Custom Import",
                                    "url": "\/import\/customImport",
                                    "visible": true,
                                    "description": "Create imports that can be shared with permission roles and used for bulk uploads with custom columns from existing imports",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "customimport",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Import Auto Numbering",
                                    "url": "\/import\/importAutoNumbering",
                                    "visible": true,
                                    "description": "Configure the auto numbering series applicable for imports in the system",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "import_autonumbering",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Decision Matrix",
                                    "url": "\/settings\/company\/decisionmatrix",
                                    "visible": true,
                                    "description": "Configure and manage the Decision Matrix",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "decisionmatrix",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Hover View Configuration",
                                    "url": "\/settings\/employees\/hoverviewconfiguration",
                                    "visible": true,
                                    "description": "Setup data to be shown on hover of data like Employee, Locations, Position in the platform",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "hoverviewconfiguration",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "BGV Vendor",
                                    "url": "\/VerificationSettings\/verification\/bgvvendor",
                                    "visible": true,
                                    "description": "Configure and manage background verification partners who have to carry out the verification process as part of the recruitment and onboarding process",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "bgvvendor",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Verification Packages",
                                    "url": "\/VerificationSettings\/verification\/verificationpackages",
                                    "visible": true,
                                    "description": "Configure and manage background verification partners who have to carry out the verification process as part of the recruitment and onboarding process",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "verification_packages",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Verification Status",
                                    "url": "\/VerificationSettings\/verification\/verificationstatus",
                                    "visible": true,
                                    "description": "Configure and manage the background verification status that the background verification vendor should select when submitting the background verification report",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "verification_status",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Tags",
                                    "url": "\/settings\/company\/tags",
                                    "visible": true,
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "tag",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Pay Scale Group",
                                    "url": "\/settings\/company\/payscalegroup",
                                    "visible": true,
                                    "description": "Create and manage Pay Scale Groups to categorize Employees based on different criteria. This helps in different ways such as auto assignmnent of Salary Structures",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "payscalegroup",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Task Category",
                                    "url": "\/ms\/flows\/config\/additional-config\/categories",
                                    "description": "Create and manage Task Cateory to ensure the smooth execution of business processes",
                                    "visible": true,
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "taskcategoryconfig",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Calculated Fields",
                                    "url": "\/settings\/company\/calculatedfields",
                                    "visible": true,
                                    "description": "Configure and manage the rules and settings related to calculated fields",
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "calculatedfields",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }, {
                                    "label": "Activities",
                                    "url": "\/settings\/company\/todoactivity",
                                    "visible": true,
                                    "hierarchy": "Platform | Additional Configurations",
                                    "id": "todoactivity",
                                    "logo": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/additional_configuration.svg"
                            }, {
                                "label": "Account Details",
                                "id": "account_details",
                                "children": [{
                                    "label": "Administrator",
                                    "url": "\/settings\/accountdetails\/administration",
                                    "visible": true,
                                    "description": "Add Employees to the System Administrator configuration that provides admin rights to users",
                                    "hierarchy": "Platform | Account Details",
                                    "id": "administration",
                                    "logo": "\/images\/settings\/l2_settings\/account_details.svg"
                                }, {
                                    "label": "Neo Users",
                                    "url": "\/settings\/accountdetails\/neousers",
                                    "visible": true,
                                    "description": "Configure Neo Users who can be provided controlled access to the system",
                                    "hierarchy": "Platform | Account Details",
                                    "id": "neousers",
                                    "logo": "\/images\/settings\/l2_settings\/account_details.svg"
                                }, {
                                    "label": "Ask Darwin Access",
                                    "url": "\/settings\/accountdetails\/askdarwin",
                                    "visible": true,
                                    "description": "Manage access to product features that are tracked based on their consumption\/usage. Enable or Disable them based on your organization requirement.",
                                    "hierarchy": "Platform | Account Details",
                                    "id": "askdarwin",
                                    "logo": "\/images\/settings\/l2_settings\/account_details.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/account_details.svg"
                            }, {
                                "label": "Data Management",
                                "id": "datamanagement",
                                "children": [{
                                    "label": "Consent Management",
                                    "url": "\/settings\/company\/consentmanagement",
                                    "visible": true,
                                    "description": "Create and Manage the different statements to which candidates or employees must provide the consent for capturing their data during their lifecycle in the Firm",
                                    "hierarchy": "Platform | Data Management",
                                    "id": "consentmanagement",
                                    "logo": "\/images\/settings\/l2_settings\/datamanagement.svg"
                                }, {
                                    "label": "Data Purge Policy",
                                    "url": "\/DataArchival\/Policy",
                                    "visible": true,
                                    "description": "Create and Manage different data archival policies",
                                    "hierarchy": "Platform | Data Management",
                                    "id": "data_purge_policy",
                                    "logo": "\/images\/settings\/l2_settings\/datamanagement.svg"
                                }, {
                                    "label": "Data Purge Logs",
                                    "url": "\/DataArchival\/logs",
                                    "visible": true,
                                    "description": "View data archival logs",
                                    "hierarchy": "Platform | Data Management",
                                    "id": "data_purge_logs",
                                    "logo": "\/images\/settings\/l2_settings\/datamanagement.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/datamanagement.svg"
                            }, {
                                "label": "Dashboard Settings",
                                "id": "dashboard_settings",
                                "children": [{
                                    "label": "App Layout",
                                    "url": "\/settings\/employees\/applayout",
                                    "visible": true,
                                    "description": "Configure the left panel icons order",
                                    "hierarchy": "Platform | Dashboard Settings",
                                    "id": "applayout",
                                    "logo": "\/images\/settings\/l2_settings\/dashboard_settings.svg"
                                }, {
                                    "label": "Default Employee Request",
                                    "url": "\/settings\/employees\/defaultemployeerequest",
                                    "visible": true,
                                    "description": "Configure default requests to be pinned in dashboard",
                                    "hierarchy": "Platform | Dashboard Settings",
                                    "id": "defaultemployeerequest",
                                    "logo": "\/images\/settings\/l2_settings\/dashboard_settings.svg"
                                }, {
                                    "label": "General Display Settings",
                                    "url": "\/settings\/company\/platformexperience",
                                    "visible": true,
                                    "description": "Setup experiential elements for the platform that impact users when accessing the platform",
                                    "hierarchy": "Platform | Dashboard Settings",
                                    "id": "platform_experience",
                                    "logo": "\/images\/settings\/l2_settings\/dashboard_settings.svg"
                                }, {
                                    "label": "Platform Theme",
                                    "url": "\/ms\/db\/settings\/themes\/list",
                                    "visible": true,
                                    "description": "Configure theme colour and logo applicable for the instance for various user groups",
                                    "hierarchy": "Platform | Dashboard Settings",
                                    "id": "platform_theme",
                                    "logo": "\/images\/settings\/l2_settings\/dashboard_settings.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/dashboard_settings.svg"
                            }]
                        }, {
                            "label": "Flows",
                            "id": "flows",
                            "children": [{
                                "label": "Onboarding",
                                "id": "onboarding",
                                "children": [{
                                    "label": "Advanced Settings",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/onboardingsettings",
                                    "visible": true,
                                    "description": "Configure and manage settings related to onboarding initiation, reminder emails, background verification, and other onboarding related settings",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "onboardingsettings",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Documents Clusters",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/docclusters",
                                    "visible": true,
                                    "description": "Configure and manage Reference, Sign-off, and Undertaking Document Clusters related to Onboarding",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "docclusters",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Onboarding Forms",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/manage",
                                    "visible": true,
                                    "description": "Configure and manage forms that need to be completed by the candidate, as well as forms that need to be completed by other task holders as part of the onboarding process",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "onboarding_create",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Onboarding Documents",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/adddoc",
                                    "visible": true,
                                    "description": "Configure and manage reference and sign-off documents that need to be provided to the Employee as part of the onboarding process",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "adddoc",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Onboarding Email Templates",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/onboardingemailtemplate",
                                    "visible": true,
                                    "description": "Configure and manage custom email templates needed for onboarding workflow tasks, candidate reminders, and exception reminder emails",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "onboardingemailtemplate",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Onboarding Task Categories",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/onboardingtaskcategories",
                                    "visible": true,
                                    "description": "Configure and manage Onboarding Task Categories to organize multiple onboarding tasks into specific groups",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "onboardingtaskcategories",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Welcome Page Settings",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/welcomepagesettings",
                                    "visible": true,
                                    "description": "Configure and manage the Welcome Page that individuals see when they access the Candidate Portal for the first time after accepting the Firm\u2019s offer",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "welcomepagesettings",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Workflow",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/manageworkflow",
                                    "visible": true,
                                    "description": "Configure and manage onboarding workflows for different sets of Employees",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "onboarding_manageworkflow",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }, {
                                    "label": "Onboarding Process Configuration",
                                    "url": "\/onboarding\/onboardingsettings\/onboarding\/onboardingprocessconfig",
                                    "visible": true,
                                    "description": "Configure and manage onboarding process for different sets of Employees",
                                    "hierarchy": "Flows | Onboarding",
                                    "id": "onboardingprocessconfig",
                                    "logo": "\/images\/settings\/l2_settings\/onboarding.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/onboarding.svg"
                            }, {
                                "label": "Flow Builder",
                                "id": "custom_flows",
                                "children": [{
                                    "label": "Flows",
                                    "url": "\/ms\/flows\/config\/flow-config\/flows",
                                    "description": "Create and manage Flows to ensure the smooth execution of business processes",
                                    "visible": true,
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "flowconfig",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Journeys",
                                    "url": "\/ms\/flows\/config\/journey-config\/journeys",
                                    "description": "Create and manage Journeys",
                                    "visible": true,
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "journeyconfig",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Approval Flows",
                                    "url": "\/flows\/flowssettings\/customworkflow\/manageapprovalflow",
                                    "visible": true,
                                    "description": "Create and manage Approval Flows that you can assign to Flows if the process needs approvals",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "createapprovalflow",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Skip Settings",
                                    "url": "\/flows\/flowssettings\/customworkflow\/skip",
                                    "visible": true,
                                    "description": "Configure Skip settings to ensure seamless flow execution",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "customworkflow_skip",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "SLA Settings",
                                    "url": "\/flows\/flowssettings\/customworkflow\/sla",
                                    "visible": true,
                                    "description": " Configure SLAs to enforce actions if approvals aren't completed on time",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "customworkflow_sla",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "User Assignment Wise Approval",
                                    "url": "\/flows\/flowssettings\/customworkflow\/userwiseapprovalassignment",
                                    "visible": true,
                                    "description": "Create and manage user assignment wise approvals for nominee based flows",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "userwiseapprovalassignment",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Workflows",
                                    "url": "\/flows\/flowssettings\/customworkflow\/manageworkflow",
                                    "visible": true,
                                    "description": "Configure and manage onboarding workflows tailored for different sets of Employees ",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "createworkflow",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Custom Flow Auto Numbering",
                                    "url": "\/flows\/flowssettings\/customworkflow\/customflowautonum",
                                    "visible": true,
                                    "description": "Create and manage an auto-numbering system that assigns a unique identifier to each Flow based on predetermined patterns. ",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "customflowautonum",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Flow Category",
                                    "url": "\/flows\/flowssettings\/customworkflow\/createflowcategory",
                                    "visible": true,
                                    "description": "Create and manage categories to group multiple flows into a category",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "createflowcategory",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Stage Category",
                                    "url": "\/flows\/flowssettings\/customworkflow\/taskcategory",
                                    "visible": true,
                                    "description": "Create and manage categories to group multiple stages in an approval flow or a workflow",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "taskcategory",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }, {
                                    "label": "Guides",
                                    "url": "\/ms\/flows\/config\/flow-config\/guides",
                                    "visible": true,
                                    "description": "Create and manage Guide to be used in Custom Workflow stages.",
                                    "hierarchy": "Flows | Flow Builder",
                                    "id": "guides",
                                    "logo": "\/images\/settings\/l2_settings\/custom_flows.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/custom_flows.svg"
                            }, {
                                "label": "Lifecycle Management",
                                "id": "lifecycle_management_flows",
                                "children": [{
                                    "label": "Confirmation Policies",
                                    "url": "\/ms\/flows\/config\/standard-workflows\/confirmation",
                                    "description": "Create and manage policies to be assigned to Employees for probation review and Confirmation process",
                                    "visible": true,
                                    "hierarchy": "Flows | Lifecycle Management",
                                    "id": "manageconfirmationpolicy",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management_flows.svg"
                                }, {
                                    "label": "Separation Policies",
                                    "url": "\/ms\/flows\/config\/standard-workflows\/separation",
                                    "description": "Create and manage policies to be assigned to Employees for exit management and Separation process",
                                    "visible": true,
                                    "hierarchy": "Flows | Lifecycle Management",
                                    "id": "manageseparationpolicy",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management_flows.svg"
                                }, {
                                    "label": "Termination Policies",
                                    "url": "\/ms\/flows\/config\/standard-workflows\/termination",
                                    "description": "Create and manage policies that can be assigned to Employees to facilitate their termination of employment",
                                    "visible": true,
                                    "hierarchy": "Flows | Lifecycle Management",
                                    "id": "manageterminationpolicy",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management_flows.svg"
                                }, {
                                    "label": "Contract Policies",
                                    "url": "\/ms\/flows\/config\/standard-workflows\/contract",
                                    "description": "Create and manage policies for contract employees, including details of their Contract review",
                                    "visible": true,
                                    "hierarchy": "Flows | Lifecycle Management",
                                    "id": "contractmanagement",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management_flows.svg"
                                }, {
                                    "label": "Disciplinary Policies",
                                    "url": "\/ms\/flows\/config\/standard-workflows\/disciplinary",
                                    "description": "Create and manage policies to define what disciplinary process to be followed for Employee who violate any Firm rule or regulation",
                                    "visible": true,
                                    "hierarchy": "Flows | Lifecycle Management",
                                    "id": "disciplinarypolicy",
                                    "logo": "\/images\/settings\/l2_settings\/lifecycle_management_flows.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/lifecycle_management_flows.svg"
                            }]
                        }, {
                            "label": "Time",
                            "id": "time",
                            "children": [{
                                "label": "Attendance",
                                "id": "attendance",
                                "children": [{
                                    "label": "Attendance Settings",
                                    "url": "\/attendancesettings\/attendancesettings",
                                    "visible": true,
                                    "description": "Configure general attendance settings to customize the fields that Employees see when they access their attendance page, raise attendance requests and perform any attendance-related actions",
                                    "hierarchy": "Time | Attendance",
                                    "id": "attendancesettings",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Break Policies",
                                    "url": "\/attendancesettings\/breakpolicy",
                                    "visible": true,
                                    "description": "Create and manage various Breaks that can be taken by Employees during the work day",
                                    "hierarchy": "Time | Attendance",
                                    "id": "attendance_breaks",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Break Types",
                                    "url": "\/attendancesettings\/breaktypes",
                                    "visible": true,
                                    "description": "Create and manage types that can be used to categorize different types of Breaks in the break policy",
                                    "hierarchy": "Time | Attendance",
                                    "id": "break_types",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Check In",
                                    "url": "\/attendancesettings\/checkinsettings",
                                    "visible": true,
                                    "description": "Configure and manage the mobile Check In rules for Employees",
                                    "hierarchy": "Time | Attendance",
                                    "id": "checkin",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Extended Attendance Settings",
                                    "url": "\/attendancesettings\/extendedattendancesettings",
                                    "visible": true,
                                    "description": "Configure and manage the attendance-related settings that override some of the settings available under attendance settings for a select group of Employees and its applicability",
                                    "hierarchy": "Time | Attendance",
                                    "id": "attendance_extendedsettings",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Geofencing",
                                    "url": "\/attendancesettings\/geofencing",
                                    "visible": true,
                                    "description": "The Geo-fencing settings allow you to specify the coordinates and a range from where an Employee can Check In to work",
                                    "hierarchy": "Time | Attendance",
                                    "id": "geofencing",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Infraction Policies",
                                    "url": "\/attendancesettings\/infractionpolicy",
                                    "visible": true,
                                    "description": "Create and manage Infraction Policies that can be used to make rules that help in penalizing Employees who fail to maintain discipline in matters of Attendance",
                                    "hierarchy": "Time | Attendance",
                                    "id": "infraction",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "IP Restrictions",
                                    "url": "\/attendancesettings\/iprestriction",
                                    "visible": true,
                                    "description": "Restrict Clockins from the Darwinbox Portal or Darwinbox Mobile Application to specific IP Addresses",
                                    "hierarchy": "Time | Attendance",
                                    "id": "attendance_option",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Overtime Policies",
                                    "url": "\/attendancesettings\/overtimepolicy",
                                    "visible": true,
                                    "description": "Create and manage the overtime policies that define Overtime eligibility, limits, rates payable to Employees, and other overtime settings",
                                    "hierarchy": "Time | Attendance",
                                    "id": "overtime",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Overtime Settings",
                                    "url": "\/attendancesettings\/overtimesettings",
                                    "visible": true,
                                    "description": "Configure and view the Overtime-related settings applicable across your Darwinbox",
                                    "hierarchy": "Time | Attendance",
                                    "id": "overtimesettings",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Overtime Slabs",
                                    "url": "\/attendancesettings\/overtimeslab",
                                    "visible": true,
                                    "description": "Configure and manage slabs that define the additional overtime payout that Employees working overtime are eligible for",
                                    "hierarchy": "Time | Attendance",
                                    "id": "overtimeslabs",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Attendance Policies",
                                    "url": "\/attendancesettings\/attendancepolicy",
                                    "visible": true,
                                    "description": "Create and manage policies to define the rules regarding information accessibility, actions, and penalties related to Employees attendance",
                                    "hierarchy": "Time | Attendance",
                                    "id": "attendance_policy",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Reason",
                                    "url": "\/attendancesettings\/attendancereason",
                                    "visible": true,
                                    "description": "Create reasons that Employees and managers can use when applying for an attendance regularization or other attendance & Overtime related requests",
                                    "hierarchy": "Time | Attendance",
                                    "id": "regularisereasons",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Shift Blocks",
                                    "url": "\/attendancesettings\/shiftblock",
                                    "visible": true,
                                    "description": "Configure and manage the shift and Weekly Off patterns applicable to Employees over a specified period",
                                    "hierarchy": "Time | Attendance",
                                    "id": "shiftblocks",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Shift",
                                    "url": "\/attendancesettings\/shift",
                                    "visible": true,
                                    "description": "Configure and manage Shifts that define the daily work schedule that Employees need to adhere to",
                                    "hierarchy": "Time | Attendance",
                                    "id": "shift",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Tags",
                                    "url": "\/attendancesettings\/tags",
                                    "visible": true,
                                    "description": "Create and manage Tags that can be used to group different types of Infraction policies and methods of marking attendance such as Geofencing and IP Restrictions",
                                    "hierarchy": "Time | Attendance",
                                    "id": "attendance_tags",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Overtime Threshold",
                                    "url": "\/attendancesettings\/overtimethreshold",
                                    "visible": true,
                                    "description": "Configure and view the Overtime Threshold settings applicable across your Darwinbox",
                                    "hierarchy": "Time | Attendance",
                                    "id": "overtime_threshold",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Overtime Simulator",
                                    "url": "\/attendancesettings\/overtimesimulator",
                                    "visible": true,
                                    "description": "Configure and view the Overtime Simulator settings applicable across your Darwinbox",
                                    "hierarchy": "Time | Attendance",
                                    "id": "overtime_simulator",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Fair Workweek Policies",
                                    "url": "\/attendancesettings\/fairworkweekpolicy",
                                    "visible": true,
                                    "description": "Configure and manage the Fair Workweek Policy that defines the Workweek that Employees need to adhere to",
                                    "hierarchy": "Time | Attendance",
                                    "id": "fairworkweek",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }, {
                                    "label": "Predictability Pay",
                                    "url": "\/attendancesettings\/predictabilitypay",
                                    "visible": true,
                                    "description": "Configure and manage the predictability pay that defines the pay for Employees based on policy need to adhere to",
                                    "hierarchy": "Time | Attendance",
                                    "id": "predictability_pay",
                                    "logo": "\/images\/settings\/l2_settings\/attendance.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/attendance.svg"
                            }, {
                                "label": "Leave",
                                "id": "leave",
                                "children": [{
                                    "label": "Leave Policies",
                                    "url": "\/leavesettings\/leavepolicy",
                                    "visible": true,
                                    "description": "Create and manage Leave policies and assign them to select groups of Employees",
                                    "hierarchy": "Time | Leave",
                                    "id": "leaves_create",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "External Sub Category",
                                    "url": "\/leavesettings\/externalsubcategory",
                                    "visible": true,
                                    "description": "Create and manage external subcategories which can be tagged to Leave policies",
                                    "hierarchy": "Time | Leave",
                                    "id": "sub_category",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Holiday",
                                    "url": "\/leavesettings\/holiday",
                                    "visible": true,
                                    "description": "Create and manage Holidays and assign them to select groups of Employees",
                                    "hierarchy": "Time | Leave",
                                    "id": "holidays",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Reason",
                                    "url": "\/leavesettings\/leavereason",
                                    "visible": true,
                                    "description": "Create and manage a list of Leave reasons that Employees can select when applying for a Leave",
                                    "hierarchy": "Time | Leave",
                                    "id": "unpaidreasons",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Leave Settings",
                                    "url": "\/leavesettings\/leavesettings",
                                    "visible": true,
                                    "description": "These are General Settings that apply to all Leave policies that exist on your Darwinbox portal. These Settings help you define the experience and the options visible to Employees when applying for a Leave and all leave-related actions.",
                                    "hierarchy": "Time | Leave",
                                    "id": "leaves_settings",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Unpaid Leave",
                                    "url": "\/leavesettings\/unpaidleavepolicy",
                                    "visible": true,
                                    "description": "Create and manage unpaid Leave policies and assign them to select groups of Employees",
                                    "hierarchy": "Time | Leave",
                                    "id": "unpaid",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Leave Rounding",
                                    "url": "\/leavesettings\/leaverounding",
                                    "visible": true,
                                    "description": "Create and manage rules that can be used to round the number of days of Leave available to employees",
                                    "hierarchy": "Time | Leave",
                                    "id": "rounding",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Extended Leave Settings",
                                    "url": "\/leavesettings\/extendedleavesettings",
                                    "visible": true,
                                    "description": "Configure and manage the leave-related settings that override some of the settings available under leave settings for a select group of Employees and its applicability",
                                    "hierarchy": "Time | Leave",
                                    "id": "leaves_extendedsettings",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Optional Holiday Policies",
                                    "url": "\/leavesettings\/optionalholidaypolicy",
                                    "visible": true,
                                    "description": "Configure and manage the Optional Holiday related policies",
                                    "hierarchy": "Time | Leave",
                                    "id": "optional_holiday_policies",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Holiday Pay Policy",
                                    "url": "\/leavesettings\/holidaypaypolicies",
                                    "visible": true,
                                    "description": "Create and manage Holiday pay policy",
                                    "hierarchy": "Time | Leave",
                                    "id": "holiday_pay_policy",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }, {
                                    "label": "Blackout Policy",
                                    "url": "\/leavesettings\/blackoutpolicy",
                                    "visible": true,
                                    "description": "Create and manage blackout policy",
                                    "hierarchy": "Time | Leave",
                                    "id": "blackout_policy",
                                    "logo": "\/images\/settings\/l2_settings\/leave.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/leave.svg"
                            }, {
                                "label": "Timesheets",
                                "id": "timesheets",
                                "children": [{
                                    "label": "Timesheet Settings",
                                    "url": "\/timesheetsettings\/timesheetsettings",
                                    "visible": true,
                                    "description": "Define the behavior of all Darwinbox timesheets using these general settings",
                                    "hierarchy": "Time | Timesheets",
                                    "id": "timesheets_setting",
                                    "logo": "\/images\/settings\/l2_settings\/timesheets.svg"
                                }, {
                                    "label": "Timesheet Policies",
                                    "url": "\/timesheetsettings\/timesheetpolicy",
                                    "visible": true,
                                    "description": "Create and manage Timesheet policies and assign them to select groups of Employees",
                                    "hierarchy": "Time | Timesheets",
                                    "id": "timesheets_policy",
                                    "logo": "\/images\/settings\/l2_settings\/timesheets.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/timesheets.svg"
                            }, {
                                "label": "Scheduling",
                                "id": "scheduling",
                                "children": [{
                                    "label": "Employee Preferences Policies",
                                    "url": "\/schedule\/tab\/employeepreferences",
                                    "visible": true,
                                    "description": "Configure and manage Employee preferences policies applicable to Employees over a specified period",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "employeepreferences",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Open Shift Framework Policies",
                                    "url": "\/schedule\/tab\/openshiftframework",
                                    "visible": true,
                                    "description": "Configure and manage policies related to opening and covering of Shift",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "open_shift_framework_policy",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Reasons",
                                    "url": "\/schedule\/tab\/reason",
                                    "visible": true,
                                    "description": "Create reasons that Employees and managers can use when applying for scheduling-related requests",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "scheduling_reason",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Scheduling Org",
                                    "url": "\/schedule\/tab\/schedulingorg",
                                    "visible": true,
                                    "description": "Configure Scheduling Org",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "schedulingorg",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Scheduling Policies",
                                    "url": "\/schedule\/tab\/schedulingenginepolicies",
                                    "visible": true,
                                    "description": "Configure Scheduling Policies",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "schedulingenginepolicies",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Scheduling Rules",
                                    "url": "\/schedule\/tab\/schedulingrules",
                                    "visible": true,
                                    "description": "Configure Scheduling Rules",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "schedulingrules",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Scheduling Units",
                                    "url": "\/schedule\/tab\/schedulingunits",
                                    "visible": true,
                                    "description": "Configure Scheduling Units",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "scheduling_units",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Scheduling Unit Groups",
                                    "url": "\/schedule\/tab\/schedulingunitgroups",
                                    "visible": true,
                                    "description": "Configure Scheduling Unit Groups",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "scheduling_unit_groups",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }, {
                                    "label": "Scheduling Tags",
                                    "url": "\/schedule\/tab\/schedulingtags",
                                    "visible": true,
                                    "description": "Configure Scheduling Tags",
                                    "hierarchy": "Time | Scheduling",
                                    "id": "scheduling_tags",
                                    "logo": "\/images\/settings\/l2_settings\/scheduling.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/scheduling.svg"
                            }, {
                                "label": "Others",
                                "id": "others_time",
                                "children": [{
                                    "label": "Time Approval Flow",
                                    "url": "\/settings\/company\/approvalflow",
                                    "visible": true,
                                    "description": "Create and manage Approval Flows for Leave, Attendance-related, and Timesheet submission requests",
                                    "hierarchy": "Time | Others",
                                    "id": "approvalflow",
                                    "logo": "\/images\/settings\/l2_settings\/others_time.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/others_time.svg"
                            }]
                        }, {
                            "label": "Talent",
                            "id": "talent",
                            "children": [{
                                "label": "Continuous Feedback",
                                "id": "continuous_feedback",
                                "children": [{
                                    "label": "Continuous Feedback",
                                    "url": "\/pmssettings\/contfeed\/contfeed",
                                    "visible": true,
                                    "description": "Configure and manage the Continuous Feedback process for the organization",
                                    "hierarchy": "Talent | Continuous Feedback",
                                    "id": "contfeed",
                                    "logo": "\/images\/settings\/l2_settings\/continuous_feedback.svg"
                                }, {
                                    "label": "Continuous Feedback Questions",
                                    "url": "\/pmssettings\/contfeed\/feedbackquestions",
                                    "visible": true,
                                    "description": "Configure and manage a list of questions that can be used in Continuous Feedback forms",
                                    "hierarchy": "Talent | Continuous Feedback",
                                    "id": "feedbackquestions",
                                    "logo": "\/images\/settings\/l2_settings\/continuous_feedback.svg"
                                }, {
                                    "label": "Other Settings",
                                    "url": "\/pmssettings\/contfeed\/other",
                                    "visible": true,
                                    "description": "These General Settings allow you to specify the character limits and SLA for a Continuous Feedback request",
                                    "hierarchy": "Talent | Continuous Feedback",
                                    "id": "contfeed_other",
                                    "logo": "\/images\/settings\/l2_settings\/continuous_feedback.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/continuous_feedback.svg"
                            }, {
                                "label": "360\u00b0 Feedback",
                                "id": "msf",
                                "children": [{
                                    "label": "360\u00b0 Feedback Question",
                                    "url": "\/pmssettings\/msf\/msfquestions",
                                    "visible": true,
                                    "description": "Create and manage the list of questions that can be used to  create questionnaires for 360\u00b0 Feedback process",
                                    "hierarchy": "Talent | 360\u00b0 Feedback",
                                    "id": "msfquestions",
                                    "logo": "\/images\/settings\/l2_settings\/msf.svg"
                                }, {
                                    "label": "360\u00b0 Feedback Questionnaires",
                                    "url": "\/pmssettings\/msf\/msfquestionset",
                                    "visible": true,
                                    "description": "Create and manage Questionnaires for 360\u00b0 Feedback process",
                                    "hierarchy": "Talent | 360\u00b0 Feedback",
                                    "id": "msfquestionset",
                                    "logo": "\/images\/settings\/l2_settings\/msf.svg"
                                }, {
                                    "label": "360\u00b0 Feedback Process",
                                    "url": "\/pmssettings\/msf\/msfprocess",
                                    "visible": true,
                                    "description": "Create and manage 360\u00b0 Feedback processes for Employees",
                                    "hierarchy": "Talent | 360\u00b0 Feedback",
                                    "id": "msfprocess",
                                    "logo": "\/images\/settings\/l2_settings\/msf.svg"
                                }, {
                                    "label": "Other Settings",
                                    "url": "\/pmssettings\/msf\/other",
                                    "visible": true,
                                    "description": "These General Settings allow you to specify SLAs and hide respondent comments in 360\u00b0 Feedback Reports",
                                    "hierarchy": "Talent | 360\u00b0 Feedback",
                                    "id": "msf_other",
                                    "logo": "\/images\/settings\/l2_settings\/msf.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/msf.svg"
                            }, {
                                "label": "Performance",
                                "id": "performance",
                                "children": [{
                                    "label": "New Goal plan cron Framework",
                                    "url": "\/pmssettings\/pms\/goalplankra",
                                    "visible": true,
                                    "description": "Allow administrators to create and manage New Goal Plans",
                                    "hierarchy": "Talent | Performance",
                                    "id": "goalplankra",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Common Objective",
                                    "url": "\/pmssettings\/pms\/goal",
                                    "visible": true,
                                    "description": "Create and manage different types of common Goals and bulk assign them to select groups of Employees",
                                    "hierarchy": "Talent | Performance",
                                    "id": "goal",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Performance Review Cycle",
                                    "url": "\/pmssettings\/pms\/reviewkra",
                                    "visible": true,
                                    "description": "Create and manage Performance Review Cycles to evaluate Employee performance within defined time periods",
                                    "hierarchy": "Talent | Performance",
                                    "id": "reviewkra",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Performance Review",
                                    "url": "\/pmssettings\/pms\/cyclekra",
                                    "visible": true,
                                    "description": "Create and manage Performance Performance Review frameworks for Performance Review Cycles",
                                    "hierarchy": "Talent | Performance",
                                    "id": "cyclekra",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Calibration",
                                    "url": "\/pmssettings\/pms\/calibration",
                                    "visible": true,
                                    "description": "Create and manage Performance Calibration processes to adjust Employee evaluation outcomes according to established criteria and benchmarks to eliminate biases and discrepancies",
                                    "hierarchy": "Talent | Performance",
                                    "id": "calibration",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Exclusions",
                                    "url": "\/pmssettings\/pms\/exclusion",
                                    "visible": true,
                                    "description": "reate and manage Exclusion rules applicable to Objective plan, Performance Performance Review and Talent Review",
                                    "hierarchy": "Talent | Performance",
                                    "id": "exclusion",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Strategic Pillar",
                                    "url": "\/pmssettings\/pms\/categories",
                                    "visible": true,
                                    "description": "Create and manage Strategic Pillar for Objective plan frameworks, to categorize Goals \/ Key Result Areas and effeciently organize them based on Balance Score Card methodology in Employees Objective plan",
                                    "hierarchy": "Talent | Performance",
                                    "id": "categories",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Normalization Settings",
                                    "url": "\/pmssettings\/pms\/normalization",
                                    "visible": true,
                                    "description": "Create and manage Normalization settings for Performance Reviews, Performance Calibration and Talent Calibration process",
                                    "hierarchy": "Talent | Performance",
                                    "id": "normalization",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Promotion Framework",
                                    "url": "\/pmssettings\/pms\/promotion",
                                    "visible": true,
                                    "description": "Create & manage Promotion Frameworks to gather manager's feedback about  Employees during Performance Review process",
                                    "hierarchy": "Talent | Performance",
                                    "id": "promotion",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Potential Framework",
                                    "url": "\/pmssettings\/pms\/potential",
                                    "visible": true,
                                    "description": "Create and manage Potential Frameworks to gather managers' input on their Reportees' Potential during Performance Review and optionally place Employees on the 9-Box Grid framework",
                                    "hierarchy": "Talent | Performance",
                                    "id": "potential",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Performance Framework",
                                    "url": "\/pmssettings\/pms\/performance",
                                    "visible": true,
                                    "description": "Create and manage Performance Frameworks to gather managers' input on their reportees' Performance during Performance Review and optionally place Employees on the 9-Box Grid framework",
                                    "hierarchy": "Talent | Performance",
                                    "id": "pms_performance",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Achievement Mapping",
                                    "url": "\/pmssettings\/pms\/achievementmapping",
                                    "visible": true,
                                    "description": "Create Achievement Mapping tables to map Employee Achievement or Score and determine ratings for specific Goals \/ Key Result Areas",
                                    "hierarchy": "Talent | Performance",
                                    "id": "achievementmapping",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "KPI",
                                    "url": "\/pmssettings\/pms\/metric",
                                    "visible": true,
                                    "description": "Create and manage Metrics to define the criteria for tracking and measuring Employee performance against goals",
                                    "hierarchy": "Talent | Performance",
                                    "id": "metric",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Custom Formula",
                                    "url": "\/pmssettings\/pms\/customformula",
                                    "visible": true,
                                    "description": "Create and manage custom formulas that can be used to calculate the Score against Goals \/ Key Result Areas and Sub Goals in an Employee Objective plan",
                                    "hierarchy": "Talent | Performance",
                                    "id": "customformula",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Map 9-Box Grid",
                                    "url": "\/pmssettings\/pms\/mapassignmentgrid",
                                    "visible": true,
                                    "description": "Create and manage Performance and Potential framework mappings to a select group of Employees to define their 9-Box Grid placement",
                                    "hierarchy": "Talent | Performance",
                                    "id": "mapassignmentgrid",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Other Settings",
                                    "url": "\/pmssettings\/pms\/other",
                                    "visible": true,
                                    "description": "These are General Settings to define Objective Plan Reviewer, Minimum character limit on Reviews, SLA's for Performance and Talent tasks and some other configurations",
                                    "hierarchy": "Talent | Performance",
                                    "id": "pms_other",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Performance Alias",
                                    "url": "\/pmssettings\/pms\/performancealias",
                                    "visible": true,
                                    "description": "Create and manage Aliases to ensure that the Performance, 360\u00b0 Feedback, CF, Talent Management and Talent Intelligence modules reflects the terminology used by your Firm",
                                    "hierarchy": "Talent | Performance",
                                    "id": "performancealias",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Review Parameter",
                                    "url": "\/pmssettings\/pms\/reviewparameter",
                                    "visible": true,
                                    "description": "Create and manage the Review Parameters on which Employees are to be assessed during Talent Reviews",
                                    "hierarchy": "Talent | Performance",
                                    "id": "reviewparameter",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Review Parameter Options",
                                    "url": "\/pmssettings\/pms\/reviewparameteroption",
                                    "visible": true,
                                    "description": "Create and manage the Options under different Review Parameters on which Employees are to be assessed during Talent Reviews",
                                    "hierarchy": "Talent | Performance",
                                    "id": "reviewparameteroption",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Review Parameter Mapping",
                                    "url": "\/pmssettings\/pms\/reviewparametermapping",
                                    "visible": true,
                                    "description": "Create and manage the mapping of a Review Parameter & different options to different sets of Employees",
                                    "hierarchy": "Talent | Performance",
                                    "id": "reviewparametermapping",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Talent Review Cycle",
                                    "url": "\/pmssettings\/pms\/talentreviewcycle",
                                    "visible": true,
                                    "description": "Create and manage Talent Review Cycles to evaluate Employee on different Parameters within defined time periods",
                                    "hierarchy": "Talent | Performance",
                                    "id": "talentreviewcycle",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Talent Review",
                                    "url": "\/pmssettings\/pms\/talentreview",
                                    "visible": true,
                                    "description": "Create and manage Talent Reviews for different Talent Review Cycles",
                                    "hierarchy": "Talent | Performance",
                                    "id": "talentreview",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Talent Calibration",
                                    "url": "\/pmssettings\/pms\/talentcalibration",
                                    "visible": true,
                                    "description": "Create and manage Talent Calibration processes to adjust Employee evaluation outcome according to established criteria and benchmarks to eliminate biases and discrepancies",
                                    "hierarchy": "Talent | Performance",
                                    "id": "talentcalibration",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }, {
                                    "label": "Team Objective Framework",
                                    "url": "\/pmssettings\/pms\/teamgoal",
                                    "visible": true,
                                    "hierarchy": "Talent | Performance",
                                    "id": "teamgoal",
                                    "logo": "\/images\/settings\/l2_settings\/performance.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/performance.svg"
                            }, {
                                "label": "Talent Acquisition",
                                "id": "talent_acquisition",
                                "children": [{
                                    "label": "Advanced Settings",
                                    "url": "\/settings\/recruitment\/user",
                                    "visible": true,
                                    "description": "Configure and manage Advance Settings for the Recruitment processes",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "recruitment_user",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Candidate Decision & Archival Reasons",
                                    "url": "\/settings\/recruitment\/reasons",
                                    "visible": true,
                                    "description": "Create and manage reasons for stakeholders to select when updating a candidate's status, job closure or archiving a job, position, or requisition.",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "reasons",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Assign Assessment",
                                    "url": "\/settings\/recruitment\/assignassessment",
                                    "visible": true,
                                    "description": "Create and manage settings to assign assessments from external vendors to specific user assignments for their respective hiring workflows",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "assignassessment",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Auto Job ID",
                                    "url": "\/settings\/recruitment\/jobid",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that auto-generates and assigns a Job ID to a newly created Job based on the specific rules defined here",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "jobid",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Auto Numbering Requisition ID",
                                    "url": "\/settings\/recruitment\/requisitionautonumber",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that auto-generates and assigns a Requisition ID to a newly created Requisition based on the specific rules defined here",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "requisitionautonumber",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Candidate Auto Numbering",
                                    "url": "\/settings\/company\/candidatenumbering",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that auto-generates and assigns a Candidate ID to a newly added Candidate in Darwinbox based on specific rules defined here",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "candidatenumbering",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Custom Tags",
                                    "url": "\/settings\/recruitment\/customtags",
                                    "visible": true,
                                    "description": "Create and manage tags for stakeholders to assign to candidates.",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "customtags",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Custom Source",
                                    "url": "\/settings\/recruitment\/customsource",
                                    "visible": true,
                                    "description": "Use Custom Sources to track candidate profiles that you receive from sources that are not already defined in Darwinbox",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "customsource",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Custom Source Type",
                                    "url": "\/settings\/recruitment\/customsourcetype",
                                    "visible": true,
                                    "description": "Create and manage Custom Source Type to create different categories for the same Custom Source",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "customsourcetype",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Duplicity Check Settings",
                                    "url": "\/settings\/recruitment\/duplicitycheck",
                                    "visible": true,
                                    "description": "Prevent adding the same candidate's profile to a job multiple times and set controls for candidate re-applications after rejection",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "duplicitycheck",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Employer Brand Settings",
                                    "url": "\/settings\/recruitment\/employerbrand",
                                    "visible": true,
                                    "description": "Customize your Firm's Career Page by adding Banner images, Terms of Use, and other relevant information",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "employerbrand",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Evaluation Forms",
                                    "url": "\/settings\/recruitment\/manageevaluation",
                                    "visible": true,
                                    "description": "Create and manage the feedback forms that are sent to interviewers to record a candidate's interview feedback",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "manageevaluation",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "External Recruiters",
                                    "url": "\/settings\/recruitment\/recruiter",
                                    "visible": true,
                                    "description": "Create and manage external Recruiter profiles to access the external Recruiter portal, view job openings, and upload candidate profiles",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "recruiter",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "External Recruiter Groups",
                                    "url": "\/settings\/recruitment\/externalrecruitergroup",
                                    "visible": true,
                                    "description": "Create groups of Recruiter(s) to easily share job postings",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "externalrecruitergroup",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Hiring Lead",
                                    "url": "\/settings\/recruitment\/hiringleads",
                                    "visible": true,
                                    "description": "Use these Settings to specify the Hiring Lead(s) and Recruiter(s) for Job Postings of specific Companies or User Assignments",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "hiringleads",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Hiring Workflow",
                                    "url": "\/settings\/recruitment\/hiringworkflow",
                                    "visible": true,
                                    "description": "Streamline the hiring process by using Hiring Workflows to define stages of evaluation and interviews required for different jobs",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "hiringworkflow",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Interview Guides",
                                    "url": "\/settings\/recruitment\/interviewguide",
                                    "visible": true,
                                    "description": "Create and manage Interview Guides for interviewers to use as guidelines while interviewing and while providing Continuous Feedback for a candidate",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "interviewguide",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Interview Types",
                                    "url": "\/settings\/recruitment\/interviewtypes",
                                    "visible": true,
                                    "description": "Create and manage different types of interviews to indicate the interviewer and candidate about the type of interview, such as telephonic and in-person",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "interviewtypes",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Job Portals",
                                    "url": "\/settings\/recruitment\/portal",
                                    "visible": true,
                                    "description": "Create a list of Job Portals and track which candidates have been sourced from each portal",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "portal",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Offer Letter Salary Structures",
                                    "url": "\/settings\/recruitment\/onboardingsalstr",
                                    "visible": true,
                                    "description": "Create and manage Salary structures that can be used in offer letters",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "onboardingsalstr",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Recruitment Email Templates",
                                    "url": "\/settings\/recruitment\/recemailtemplates",
                                    "visible": true,
                                    "description": "You can use Recruitment Email Templates to send communications to candidates and interviewers when scheduling interviews",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "recemailtemplates",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Referral Policy Configuration",
                                    "url": "\/settings\/recruitment\/referalpolicyconfiguration",
                                    "visible": true,
                                    "description": "Create and manage Referral Policies at Job opening level or at user assignment level",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "referalpolicyconfiguration",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Rehire Check Settings",
                                    "url": "\/settings\/recruitment\/rehireduplicitycheck",
                                    "visible": true,
                                    "description": "Specify the criteria that Darwinbox can use to identify candidates who have previously worked with your Firm",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "rehireduplicitycheck",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Raise Requisition Scope",
                                    "url": "\/settings\/recruitment\/reqspan",
                                    "visible": true,
                                    "description": "Settings that you can use to specify the roles or select groups of Employees who can raise Requisitions, and optionally choose to restrict raising Requisitions to specific reporting levels",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "reqspan",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "SLA & TAT Settings",
                                    "url": "\/settings\/recruitment\/tat_sla_settings",
                                    "visible": true,
                                    "description": "Configure the recruitment TATs, their targets and the recruitment task SLAs. This is to drive adherence to recruitment tasks and activities within stipulated time.",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "tat_sla_settings",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Candidate Bot Intents",
                                    "url": "\/settings\/recruitment\/candidatebotintent",
                                    "visible": true,
                                    "description": "Configure the list of the chat bot intents to specify the response to be given by the chatbot when any of these questions are asked",
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "candidatebotintent",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Job Tags",
                                    "url": "\/settings\/recruitment\/jobtags",
                                    "visible": true,
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "jobtags",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }, {
                                    "label": "Careers Page Settings",
                                    "url": "\/settings\/recruitment\/careerpagesettings",
                                    "visible": true,
                                    "hierarchy": "Talent | Talent Acquisition",
                                    "id": "careerpagesettings",
                                    "logo": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/talent_acquisition.svg"
                            }, {
                                "label": "Talent Intelligence",
                                "id": "talent_intelligence",
                                "children": [{
                                    "label": "Skill Tiers",
                                    "url": "\/talentsettings\/talentintellegence\/tier",
                                    "visible": true,
                                    "description": "By creating Skill tiers, you can conveniently categorize similar Competencies",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "tier",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "Competencies",
                                    "url": "\/talentsettings\/talentintellegence\/competency",
                                    "visible": true,
                                    "description": "Create and manage the Competencies applicable for Employees across the tenant",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "competency",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "Skill Mapping",
                                    "url": "\/talentsettings\/talentintellegence\/mapping",
                                    "visible": true,
                                    "description": "Create and manage the Competencies which are mapped to roles across the tenant",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "mapping",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "Talent Assessment Settings",
                                    "url": "\/talentsettings\/talentintellegence\/talentassesment",
                                    "visible": true,
                                    "description": "These settings allow you to specify the visibility of fields to display on an Employees Talent Assessment and Talent Profile Pages to Employee, standard roles and custom roles across the tenant",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "talentassesment",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "9-Box Grid",
                                    "url": "\/talentsettings\/talentintellegence\/ngridframework",
                                    "visible": true,
                                    "description": "Use these Settings to manage 9-Box Grid Framework that will help you place Employees on a Grid that reflects Employees current performance and potential",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "ngridframework",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "Skill Settings",
                                    "url": "\/talentsettings\/talentintellegence\/skillsettings",
                                    "visible": true,
                                    "description": "Configure and view the Skill-related settings applicable across your Darwinbox.",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "skillsettings",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "Skill Endorsement Rule",
                                    "url": "\/talentsettings\/talentintellegence\/skillendorsementrule",
                                    "visible": true,
                                    "description": "Configure the rules to specify which Employees can endorse the Skills of other Employees and which Employees can be endorsed.",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "skillendorsementrule",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "Parity Clusters",
                                    "url": "\/talentsettings\/talentintellegence\/paritycluster",
                                    "visible": true,
                                    "description": "Create and manage Parity Clusters for benchmark scores in 360\u00b0 Feedback Process",
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "paritycluster",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }, {
                                    "label": "Skill Validation Rule",
                                    "url": "\/talentsettings\/talentintellegence\/skillvalidationrule",
                                    "visible": true,
                                    "hierarchy": "Talent | Talent Intelligence",
                                    "id": "skillvalidationrule",
                                    "logo": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/talent_intelligence.svg"
                            }, {
                                "label": "Talent Center 2",
                                "id": "talent_management",
                                "children": [{
                                    "label": "Career Growth Framework",
                                    "url": "\/talentsettings\/talentmanagement\/idp",
                                    "visible": true,
                                    "description": "Create and manage Career Growth Frameworks and assign them to various employee groups",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "idp",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Create Timeline Category",
                                    "url": "\/talentsettings\/talentmanagement\/timelinecategory",
                                    "visible": true,
                                    "description": "Create and manage Timeline Categories to specify the timelines for Career Plan, Succession Plan, and Talent Pools",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "timelinecategory",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Activity Types",
                                    "url": "\/talentsettings\/talentmanagement\/activitytype",
                                    "visible": true,
                                    "description": "Create and manage Activity Types for Custom Learning Activities",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "activitytype",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Career Plan",
                                    "url": "\/talentsettings\/talentmanagement\/careerplan",
                                    "visible": true,
                                    "description": "Configure and manage Career Plan for different group of Employees",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "careerplan",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Talent Nomination Rule",
                                    "url": "\/talentsettings\/talentmanagement\/nominationrule",
                                    "visible": true,
                                    "description": "Create and manage the rules to define Nominator and Nominees for Talent Pools and Succession Plans",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "nominationrule",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Succession Plan",
                                    "url": "\/talentsettings\/talentmanagement\/successionplanning",
                                    "visible": true,
                                    "description": "Create and manage Employee or position based Succession Plans for different groups of Employees",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "successionplanning",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Talent Pool",
                                    "url": "\/talentsettings\/talentmanagement\/talentpool",
                                    "visible": true,
                                    "description": "Create and manage Talent Pool default framework for different set of Employees",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "talentpool",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Other Settings",
                                    "url": "\/talentsettings\/talentmanagement\/othersettings",
                                    "visible": true,
                                    "description": "Configure various Talent Management attributes from these settings",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "othersettings",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }, {
                                    "label": "Talent Aliases",
                                    "url": "\/talentsettings\/talentmanagement\/talentalias",
                                    "visible": true,
                                    "description": "Create and manage Aliases to ensure that the Talent Center 2 and Talent Intelligence modules reflects the terminology used by your Firm",
                                    "hierarchy": "Talent | Talent Center 2",
                                    "id": "talentalias",
                                    "logo": "\/images\/settings\/l2_settings\/talent_management.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/talent_management.svg"
                            }, {
                                "label": "Learning",
                                "id": "learning",
                                "children": [{
                                    "label": "Learning Setup Wizard",
                                    "url": "\/talentsettings\/learning\/othersettings",
                                    "visible": true,
                                    "description": "Configure key Learning Setup settings, including vendor details, course attributes, and options for the learning center page",
                                    "hierarchy": "Talent | Learning",
                                    "id": "learning_othersettings",
                                    "logo": "\/images\/settings\/l2_settings\/learning.svg"
                                }, {
                                    "label": "Talent Vendor",
                                    "url": "\/talentsettings\/learning\/vendor",
                                    "visible": true,
                                    "description": "Create and manage list of Talent Vendors who provide learning content for Employees",
                                    "hierarchy": "Talent | Learning",
                                    "id": "talentmanagement_vendor",
                                    "logo": "\/images\/settings\/l2_settings\/learning.svg"
                                }, {
                                    "label": "Talent Program",
                                    "url": "\/talentsettings\/learning\/program",
                                    "visible": true,
                                    "description": "Create and manage Talent Programs for categorizing Courses",
                                    "hierarchy": "Talent | Learning",
                                    "id": "program",
                                    "logo": "\/images\/settings\/l2_settings\/learning.svg"
                                }, {
                                    "label": "Course",
                                    "url": "\/talentsettings\/learning\/learningactivity",
                                    "visible": true,
                                    "description": "Create and manage Courses and assign them to Employees",
                                    "hierarchy": "Talent | Learning",
                                    "id": "learningactivity",
                                    "logo": "\/images\/settings\/l2_settings\/learning.svg"
                                }, {
                                    "label": "Learning Path",
                                    "url": "\/talentsettings\/learning\/learningpath",
                                    "visible": true,
                                    "description": "Create and manage Learning Paths which can be used to assign collections of Courses to different groups of Employees",
                                    "hierarchy": "Talent | Learning",
                                    "id": "learningpath",
                                    "logo": "\/images\/settings\/l2_settings\/learning.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/learning.svg"
                            }]
                        }, {
                            "label": "Connect",
                            "id": "connect",
                            "children": [{
                                "label": "VIBE",
                                "id": "vibe",
                                "children": [{
                                    "label": "Banners",
                                    "url": "\/settings\/vibe\/banners",
                                    "visible": true,
                                    "description": "Create and manage banners for one or more Group Companies to display on their respective Vibe landing pages",
                                    "hierarchy": "Connect | VIBE",
                                    "id": "banners",
                                    "logo": "\/images\/settings\/l2_settings\/vibe.svg"
                                }, {
                                    "label": "Content Control",
                                    "url": "\/settings\/vibe\/contentcontrol",
                                    "visible": true,
                                    "description": "Configure content creation and display permissions on Vibe for all or select Employee groups and group admins",
                                    "hierarchy": "Connect | VIBE",
                                    "id": "contentcontrol",
                                    "logo": "\/images\/settings\/l2_settings\/vibe.svg"
                                }, {
                                    "label": "Editor",
                                    "url": "\/settings\/vibe\/editor",
                                    "visible": true,
                                    "description": "Specify if Employees can modify the font text, color, and size when posting on Vibe",
                                    "hierarchy": "Connect | VIBE",
                                    "id": "editor",
                                    "logo": "\/images\/settings\/l2_settings\/vibe.svg"
                                }, {
                                    "label": "Visibility Settings",
                                    "url": "\/settings\/vibe\/organization",
                                    "visible": true,
                                    "description": "Use these settings to customize the appearance of posts and also optionally restrict the visibility of Vibe content to Employees of select Group Companies",
                                    "hierarchy": "Connect | VIBE",
                                    "id": "visibility_settings",
                                    "logo": "\/images\/settings\/l2_settings\/vibe.svg"
                                }, {
                                    "label": "System Generated Posts",
                                    "url": "\/settings\/vibe\/systemgenposts",
                                    "visible": true,
                                    "description": "Configure the types of Posts that Darwinbox can auto-generate and post on Vibe",
                                    "hierarchy": "Connect | VIBE",
                                    "id": "systemgenposts",
                                    "logo": "\/images\/settings\/l2_settings\/vibe.svg"
                                }, {
                                    "label": "Workflow Posts",
                                    "url": "\/settings\/vibe\/manageworkflowposts",
                                    "visible": true,
                                    "description": "Create and manage Vibe posts that can be published through Flows",
                                    "hierarchy": "Connect | VIBE",
                                    "id": "manageworkflowposts",
                                    "logo": "\/images\/settings\/l2_settings\/vibe.svg"
                                }, {
                                    "label": "Banned Words",
                                    "url": "\/settings\/vibe\/bannedwords",
                                    "visible": true,
                                    "description": "Configure content creation and display permissions on Vibe for all or select Employee groups and group admins",
                                    "hierarchy": "Connect | VIBE",
                                    "id": "bannedwords",
                                    "logo": "\/images\/settings\/l2_settings\/vibe.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/vibe.svg"
                            }, {
                                "label": "Recognition",
                                "id": "recognition",
                                "children": [{
                                    "label": "Advanced Settings",
                                    "url": "\/rewards\/randrsettings\/randr\/randrsetting",
                                    "visible": true,
                                    "description": "These General Settings define the experience and options visible to Employees when giving and receiving Recognition in any Recognition Program on Darwinbox",
                                    "hierarchy": "Connect | Recognition",
                                    "id": "randrsetting",
                                    "logo": "\/images\/settings\/l2_settings\/recognition.svg"
                                }, {
                                    "label": "Budgeting Rules",
                                    "url": "\/rewards\/randrsettings\/randr\/budgetingrule",
                                    "visible": true,
                                    "description": "Configure and manage the Budgeting Rules for Recognition Programs",
                                    "hierarchy": "Connect | Recognition",
                                    "id": "budgetingrule",
                                    "logo": "\/images\/settings\/l2_settings\/recognition.svg"
                                }, {
                                    "label": "Nomination Auto Numbering",
                                    "url": "\/rewards\/randrsettings\/randr\/nominationauto",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that automatically generates and assigns a unique identifier to a Recognition Program based on specific rules or patterns determined by the Firm",
                                    "hierarchy": "Connect | Recognition",
                                    "id": "nominationauto",
                                    "logo": "\/images\/settings\/l2_settings\/recognition.svg"
                                }, {
                                    "label": "Programs",
                                    "url": "\/rewards\/randrsettings\/randr\/program",
                                    "visible": true,
                                    "description": "Create and manage Recognition Programs by selecting a Recognition Configuration that you have created",
                                    "hierarchy": "Connect | Recognition",
                                    "id": "randr_program",
                                    "logo": "\/images\/settings\/l2_settings\/recognition.svg"
                                }, {
                                    "label": "Recognition Email Templates",
                                    "url": "\/rewards\/randrsettings\/randr\/recogemailtemplates",
                                    "visible": true,
                                    "description": "Use Recognition Email Templates to send notifications to Recognizer, Receiver and other key stakeholders about Recognitions given or received",
                                    "hierarchy": "Connect | Recognition",
                                    "id": "recogemailtemplates",
                                    "logo": "\/images\/settings\/l2_settings\/recognition.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/recognition.svg"
                            }, {
                                "label": "Engage Settings",
                                "id": "engage",
                                "children": [{
                                    "label": "Additional Engage Settings",
                                    "url": "\/settings\/engagement\/settings",
                                    "visible": true,
                                    "description": "Configure and view the Engagement-related settings applicable across your platform",
                                    "hierarchy": "Connect | Engage Settings",
                                    "id": "engagement_settings",
                                    "logo": "\/images\/settings\/l2_settings\/engage.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/engage.svg"
                            }, {
                                "label": "Engage Libraries",
                                "id": "library",
                                "children": [{
                                    "label": "Templates",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/templates",
                                    "description": "View Survey Templates that can be used across surveys",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "templates",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Question Bank",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/question-bank",
                                    "description": "Create and Manage questions that can be used across multiple surveys",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "questionbank",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Themes",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/themes",
                                    "description": "Create and manage Themes that can be used to group Sub Themes",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "themes",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Sub-Themes",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/sub-themes",
                                    "description": "Create and Manage Sub Themes that can be used to assess Employee Engagement",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "subthemes",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Benchmarks",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/benchmarks",
                                    "description": "Create and manage a list of Benchmarks that can be used to compare the Engagement of Employee across various Themes and Sub Themes against industry standards",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "benchmarks",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Action Plan Library",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/action-plan-library",
                                    "description": "Create and manage a list of Action Plans that are to be recommended for specific Engagement Sub Themes",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "actionplansuggestions",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Survey Forms",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/survey-forms",
                                    "description": "Create and manage Forms for collecting data via Surveys",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "survey_forms",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Follow-Up Questions",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/followup",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "followup",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }, {
                                    "label": "Acknowledgement Message",
                                    "url": "\/ms\/formbuilder\/survey-manager\/libraries\/ack-message",
                                    "visible": true,
                                    "hierarchy": "Connect | Engage Libraries",
                                    "id": "acknowledgement_message",
                                    "logo": "\/images\/settings\/l2_settings\/library.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/library.svg"
                            }, {
                                "label": "Surveys",
                                "id": "surveys",
                                "children": [{
                                    "label": "Form Builder - Chat Survey Forms",
                                    "url": "\/ms\/formbuilder\/settings\/list\/chat-survey",
                                    "description": "Create and manage Forms for collecting data via Chat Surveys",
                                    "visible": true,
                                    "hierarchy": "Connect | Surveys",
                                    "id": "chat_survey_forms",
                                    "logo": "\/images\/settings\/l2_settings\/surveys.svg"
                                }, {
                                    "label": "Survey Manager",
                                    "url": "\/ms\/formbuilder\/survey-manager\/all-surveys",
                                    "description": "Use Survey Manager to create and manage Standalone and Business Process Linked Surveys",
                                    "visible": true,
                                    "hierarchy": "Connect | Surveys",
                                    "id": "survey-manager",
                                    "logo": "\/images\/settings\/l2_settings\/surveys.svg"
                                }, {
                                    "label": "Survey Pillar",
                                    "url": "\/flows\/flowssettings\/customworkflow\/pillar",
                                    "visible": true,
                                    "description": "Create and manage Survey Pillars with a defined Rating Scale. When creating a question in the Survey Form, the Admin can associate a Rating Scale by selecting the appropriate Survey Pillar",
                                    "hierarchy": "Connect | Surveys",
                                    "id": "pillar",
                                    "logo": "\/images\/settings\/l2_settings\/surveys.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/surveys.svg"
                            }]
                        }, {
                            "label": "Service Delivery",
                            "id": "service_delivery",
                            "children": [{
                                "label": "Helpdesk",
                                "id": "helpdesk",
                                "children": [{
                                    "label": "Category",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/category",
                                    "visible": true,
                                    "description": "Organize Issue by Category to efficiently manage Employee queries",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "helpdesk_category",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Subcategory",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/subcategory",
                                    "visible": true,
                                    "description": "Create and manage Sub-categories to group related questions or requests",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "helpdesk_subcategory",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Rules Engine",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/assignmentrules",
                                    "visible": true,
                                    "description": "Create rules that can be added in category for assignment logic",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "assignment_rules",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "SLA",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/sla",
                                    "visible": true,
                                    "description": "Enforce Service Standards by using SLAs to define response time and resolution time for various categories of Issue",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "helpdesk_sla",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Business Hours",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/businesshours",
                                    "visible": true,
                                    "description": "Create and maintain Business Hours to specify working hours per day. It ensures accurate recording of ticket updates and closure, helping track SLAs",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "businesshours",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Issue ID",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/issueid",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that automatically generates and assigns an Issue ID to any Issue raised by an Employee based on specific rules or patterns determined by the company",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "issueid",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Settings",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/settings",
                                    "visible": true,
                                    "description": "Configure General Settings that govern various aspects of the Help Desk module",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "helpdesk_settings",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Email Parser Settings",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/emailparsersettings",
                                    "visible": true,
                                    "description": "Configure Email Parser Settings to allow Darwinbox to automatically generate Helpdesk tickets by populating fields using the information provided in emails",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "emailparsersettings",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "FAQ Category",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/faqcat",
                                    "visible": true,
                                    "description": "Organize FAQs by Category to help Employees easily find information",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "faqcat",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "FAQ Settings",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/addfaqs",
                                    "visible": true,
                                    "description": "Create and manage FAQs that Employees can refer for answers before raising a Helpdesk Issue",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "addfaqs",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "FAQ Category Auto Numbering",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/faqcatautono",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that auto-generates and assigns an ID to a newly created FAQ Category based on the specific rules defined here",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "faqcatautono",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "FAQ Auto Numbering",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/addfaqsautono",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that auto-generates and assigns an ID to a newly created FAQ based on the specific rules defined here",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "addfaqsautono",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Priority order settings",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/priority_order",
                                    "visible": true,
                                    "description": "Ensure efficient and timely Issue management by creating a priority order that is based on urgency and importance, and is used when assigning Issue for resolution",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "priority_order",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Reason",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/reassignmentreason",
                                    "visible": true,
                                    "description": "Create and manage reasons for various actions on the Issue, providing a structured approach to tracking and reporting",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "reassignmentreason",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Tags",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/tags",
                                    "visible": true,
                                    "description": "Create and manage tags to label and categorize Issue, simplifying the process of sorting and filtering based on specific criteria",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "helpdesk_tags",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }, {
                                    "label": "Template Responses",
                                    "url": "\/helpdesk\/helpdesksettings\/index\/tab\/templateresponses",
                                    "visible": true,
                                    "description": "Improve Employee experience by creating a set of preconfigured responses that assignees can send when resolving a query",
                                    "hierarchy": "Service Delivery | Helpdesk",
                                    "id": "templateresponses",
                                    "logo": "\/images\/settings\/l2_settings\/helpdesk.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/helpdesk.svg"
                            }, {
                                "label": "Chatbot",
                                "id": "chatbot",
                                "children": [{
                                    "label": "Chatbot Access",
                                    "url": "\/settings\/chatbot\/access",
                                    "visible": true,
                                    "description": "Manage default access to Web Chatbot and Mobile Voicebot by Group Firm",
                                    "hierarchy": "Service Delivery | Chatbot",
                                    "id": "chatbot_access",
                                    "logo": "\/images\/settings\/l2_settings\/chatbot.svg"
                                }, {
                                    "label": "Manage Custom Intent Categories",
                                    "url": "\/settings\/chatbot\/intentcategories",
                                    "visible": true,
                                    "description": "Create and manage Categories that can be used to group Custom Intents for the Chatbot",
                                    "hierarchy": "Service Delivery | Chatbot",
                                    "id": "intentcategories",
                                    "logo": "\/images\/settings\/l2_settings\/chatbot.svg"
                                }, {
                                    "label": "Manage Custom Intents",
                                    "url": "\/settings\/chatbot\/intents",
                                    "visible": true,
                                    "description": "Create and manage Custom Intents for the Chatbot",
                                    "hierarchy": "Service Delivery | Chatbot",
                                    "id": "intents",
                                    "logo": "\/images\/settings\/l2_settings\/chatbot.svg"
                                }, {
                                    "label": "Manage Standard Intents",
                                    "url": "\/settings\/chatbot\/standard_intents",
                                    "visible": true,
                                    "description": "Enable or Disable the preconfigured Standard Intents for the Darwin Chatbot",
                                    "autoPopulatePageLevelActionBtns": true,
                                    "hierarchy": "Service Delivery | Chatbot",
                                    "id": "standard_intents",
                                    "logo": "\/images\/settings\/l2_settings\/chatbot.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/chatbot.svg"
                            }]
                        }, {
                            "label": "Spend",
                            "id": "spend",
                            "children": [{
                                "label": "Compensation Setup",
                                "id": "compensation_setup",
                                "children": [{
                                    "label": "Salary Structures",
                                    "url": "\/ms\/payroll\/salary-structure",
                                    "visible": true,
                                    "description": "Set up and handle Salary packages to clearly display Employee compensation and its breakdown",
                                    "hierarchy": "Spend | Compensation Setup",
                                    "id": "structures",
                                    "logo": "\/images\/settings\/l2_settings\/compensation_setup.svg"
                                }, {
                                    "label": "Frequency Table",
                                    "url": "\/payroll\/frequencyTable",
                                    "visible": true,
                                    "hierarchy": "Spend | Compensation Setup",
                                    "id": "frequencyTable",
                                    "logo": "\/images\/settings\/l2_settings\/compensation_setup.svg"
                                }, {
                                    "label": "Pay Frequency",
                                    "url": "\/settings\/payroll\/frequency",
                                    "visible": true,
                                    "description": "Create and manage pay frequency which will be used for calculating the annualization of various components in the Salary structure",
                                    "hierarchy": "Spend | Compensation Setup",
                                    "id": "frequency",
                                    "logo": "\/images\/settings\/l2_settings\/compensation_setup.svg"
                                }, {
                                    "label": "Salary Components",
                                    "url": "\/payroll\/salarycomponents",
                                    "visible": true,
                                    "description": "Establish and oversee pay components at a country level to facilitate the creation of Salary structures",
                                    "hierarchy": "Spend | Compensation Setup",
                                    "id": "salarycomponents",
                                    "logo": "\/images\/settings\/l2_settings\/compensation_setup.svg"
                                }, {
                                    "label": "Pay Scale",
                                    "url": "\/settings\/company\/payscale",
                                    "visible": true,
                                    "description": "Create and manage the different Pay Scales that can be assigned to different Pay Scale Groups",
                                    "hierarchy": "Spend | Compensation Setup",
                                    "id": "payscale",
                                    "logo": "\/images\/settings\/l2_settings\/compensation_setup.svg"
                                }, {
                                    "label": "Pay Group",
                                    "url": "\/ms\/payroll\/paygroup",
                                    "visible": true,
                                    "description": "Setup and manage Pay Groups based on common criteria to efficiently process Payroll for Employees",
                                    "hierarchy": "Spend | Compensation Setup",
                                    "id": "payGroups",
                                    "logo": "\/images\/settings\/l2_settings\/compensation_setup.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/compensation_setup.svg"
                            }, {
                                "label": "Payroll Setup",
                                "id": "payroll_setup",
                                "children": [{
                                    "label": "Extra Payments Categories",
                                    "url": "\/payroll\/extraPaymentCategory",
                                    "visible": true,
                                    "description": "Create and manage additional payment categories to track Extra Payments made to Employees",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "extrapayment",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Pay slips Design",
                                    "url": "\/settings\/payroll\/payslipdesign",
                                    "visible": true,
                                    "description": "The Pay slips Design settings can be used to configure the visual representation of Pay slips that are shared with Employees",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "payslipdesign",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Negative Salary Management",
                                    "url": "\/ms\/payroll\/negative-salary",
                                    "visible": true,
                                    "description": "Create and manage Negative Salary configurations",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "negativeSalaryConfig",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Schedular Configuration",
                                    "url": "\/ms\/payroll\/schedular",
                                    "visible": true,
                                    "description": "Create and manage Schedular Configuration settings",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "schedulerConfiguration",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Wage Mapping",
                                    "url": "\/ms\/payroll\/wage-mapping",
                                    "visible": true,
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "wageGroups",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Loans Type",
                                    "url": "\/settings\/payroll\/loantype",
                                    "visible": true,
                                    "description": "Create and manage Loans categories to track Employee loans",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "loantype",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Advances \/ Extra Deductions Categories",
                                    "url": "\/payroll\/deductionCategory",
                                    "visible": true,
                                    "description": "Create and manage Deduction Categories to enable the company to track and deduct from Employee's Payroll",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "deductioncategories",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Perquisites",
                                    "url": "\/settings\/payroll\/perquisite",
                                    "visible": true,
                                    "description": "Create and manage Perquisites that Companies may offer to a select set of Employees",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "perquisite",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Bank Details",
                                    "url": "\/settings\/payroll\/bankdetails",
                                    "visible": true,
                                    "description": "Create and manage Bank Details",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "bankdetails",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Minimum Wages",
                                    "url": "\/ms\/payroll\/minimum-wages",
                                    "visible": true,
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "minimumwagesglobal",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }, {
                                    "label": "Persona Categories",
                                    "url": "\/ms\/payroll\/persona-categories",
                                    "visible": true,
                                    "description": "Define country-specific Irregular Payroll Personas with manual or automated workflow triggers.",
                                    "hierarchy": "Spend | Payroll Setup",
                                    "id": "personacategories",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/payroll_setup.svg"
                            }, {
                                "label": "Payroll Additional Settings",
                                "id": "payroll_additional_settings",
                                "children": [{
                                    "label": "Visibility Settings",
                                    "url": "\/ms\/payroll\/employee-compensation-settings",
                                    "visible": true,
                                    "description": "The Employee Compensation Settings allow you to configure which sections are visible on the Compensation tab of an Employee's profile in Darwinbox",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "employee_compensation_settings",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }, {
                                    "label": "Country Specific Settings",
                                    "url": "\/settings\/payroll\/countrySpecificSettings",
                                    "visible": true,
                                    "description": "Country specific settings",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "countrySpecificSettings",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }, {
                                    "label": "River Settings",
                                    "url": "\/ms\/payroll\/riversettings",
                                    "visible": true,
                                    "description": "These settings impact all payroll-related functions within Darwinbox, controlling the experience and available options for Employees",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "riversettings",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }, {
                                    "label": "Additional Earnings",
                                    "url": "\/ms\/payroll\/additionalearnings",
                                    "visible": true,
                                    "description": "These settings impact all payroll-related functions within Darwinbox, controlling the experience and available options for Employees",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "additionalearnings",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }, {
                                    "label": "Payroll Specific Master Fields",
                                    "url": "\/ms\/payroll\/specific-master-fields",
                                    "visible": true,
                                    "description": "These settings impact all payroll-related functions within Darwinbox, controlling the experience and available options for Employees",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "payrollspecificfields",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }, {
                                    "label": "Additional Deductions",
                                    "url": "\/ms\/payroll\/additionaldeductions",
                                    "visible": true,
                                    "description": "These settings impact all payroll-related functions within Darwinbox, controlling the experience and available options for Employees",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "additionaldeductions",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }, {
                                    "label": "Declaration Schedule Manager",
                                    "url": "\/settings\/payroll\/releaseconfig",
                                    "visible": true,
                                    "description": "The Declaration Schedule Manager settings enable Employees to endorse their IT, Tax Regime, and other information via a declaration",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "releaseconfig",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }, {
                                    "label": "Payroll Documents Categories",
                                    "url": "\/ms\/payroll\/docs",
                                    "visible": true,
                                    "description": "Manage Payroll Document Categories",
                                    "hierarchy": "Spend | Payroll Additional Settings",
                                    "id": "payrollDocumentsCategory",
                                    "logo": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/payroll_additional_settings.svg"
                            }, {
                                "label": "Expense Management",
                                "id": "reimbursement",
                                "children": [{
                                    "label": "Units",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/reimbunits",
                                    "visible": true,
                                    "description": "Create and manage Units with indicative text such as Kms, Litres, Days etc., that Employees can select when raising reimbursement requests",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "reimbunits",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Location Category",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/locationcategory",
                                    "visible": true,
                                    "description": "Create and manage different Location Categories for Per Diem expenses",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "locationcategory",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Vehicle Types",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/vehicletype",
                                    "visible": true,
                                    "description": "Create and manage different Vehicle Types for fuel reimbursement",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "vehicletype",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Distance Tiers",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/distancetier",
                                    "visible": true,
                                    "description": "Create and manage different distance tiers for mileage reimbursement",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "distancetier",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Reimbursement Category",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/reimbcategory",
                                    "visible": true,
                                    "description": "Create and manage Reimbursement Categories to apply restrictions on multiple reimbursement types",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "createcategory",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Per-unit Expense Type",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/reimbursement",
                                    "visible": true,
                                    "description": "Create and manage Per Unit Types that allow you to configure unit based reimbursement types and apply role and location specific policies",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "perunit_settings",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Per-diem Expense Type",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/perdiem",
                                    "visible": true,
                                    "description": "Create and manage Per Diem Types that allow you to configure the per diem reimbursement configuration and apply role and category specific policies",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "createperdiem",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Per-mileage Expense Type",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/permileage",
                                    "visible": true,
                                    "description": "Create and manage Per Mileage Types that allow you to configure and apply role and Vehicle Type specific policies",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "createmileagepolicy",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Reimbursement Settings",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/reimbsettings",
                                    "visible": true,
                                    "description": "These settings are applicable to all reimbursement requests on Darwinbox, and help you define the experience and options visible to Employees when applying for reimbursement",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "reimbursement_tenantsettings",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Reimbursement Auto-numbering",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/reimbautonumbering",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that automatically generates and assigns unique expense IDs to all reimbursement requests based on specific rules or patterns determined by the Firm",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "reimbautonumbering",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Advance Types",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/reimbadvancetype",
                                    "visible": true,
                                    "description": "Create and manage different types of reimbursement advances for Employees",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "createadvancetype",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Advance Policy",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/reimbadvancepolicy",
                                    "visible": true,
                                    "description": "Create and manage the Advance Policy that allows you to specify the limits on advance amount and other configurations and apply role specific restrictions on different types of advance requests",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "createadvancepolicy",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }, {
                                    "label": "Configure Rules",
                                    "url": "\/expenses\/expensesettings\/index\/tab\/configurerules",
                                    "visible": true,
                                    "description": "Configure Admin rules for recurring expenses and autosubmission.",
                                    "hierarchy": "Spend | Expense Management",
                                    "id": "configurerules",
                                    "logo": "\/images\/settings\/l2_settings\/reimbursement.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/reimbursement.svg"
                            }, {
                                "label": "Travel",
                                "id": "travel",
                                "children": [{
                                    "label": "Travel Type Aliases",
                                    "url": "\/travel\/travelsettings\/index\/tab\/traveltype",
                                    "visible": true,
                                    "description": "Create and manage different Travel Types that can be used to specify the mode of travel",
                                    "hierarchy": "Spend | Travel",
                                    "id": "traveltype",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Travel Class Aliases",
                                    "url": "\/travel\/travelsettings\/index\/tab\/travelclass",
                                    "visible": true,
                                    "description": "Create and manage different Travel Classes that can be used to specify the tier in the specified mode of travel",
                                    "hierarchy": "Spend | Travel",
                                    "id": "travelclass",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Travel Policies",
                                    "url": "\/travel\/travelsettings\/index\/tab\/travelpolicy",
                                    "visible": true,
                                    "description": "Create and manage travel policies and assign them to select groups of Employees",
                                    "hierarchy": "Spend | Travel",
                                    "id": "travelpolicy",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Advance Policies",
                                    "url": "\/travel\/travelsettings\/index\/tab\/advancepolicy",
                                    "visible": true,
                                    "description": "Create and manage the Advance Policy that allows you to specify the limits on advance amount and other configurations when Employees are travelling for work and apply role specific restrictions on different types of advance requests",
                                    "hierarchy": "Spend | Travel",
                                    "id": "advancepolicy",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Travel Settings",
                                    "url": "\/travel\/travelsettings\/index\/tab\/traveltenantsettings",
                                    "visible": true,
                                    "description": "These settings are applicable to all travel requests on Darwinbox, and help you define the experience and options visible to Employees when raising travel and accommodation requests",
                                    "hierarchy": "Spend | Travel",
                                    "id": "traveltenantsettings",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Travel Agents",
                                    "url": "\/travel\/travelsettings\/index\/tab\/agent",
                                    "visible": true,
                                    "description": "Create and manage profiles of travel agency Employees so that they can log in to the travel agent portal and complete pending bookings",
                                    "hierarchy": "Spend | Travel",
                                    "id": "travel_agent",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Travel Agencies",
                                    "url": "\/travel\/travelsettings\/index\/tab\/agency",
                                    "visible": true,
                                    "description": "Create and manage profiles of travel agencies that handle the travel and accommodation booking process",
                                    "hierarchy": "Spend | Travel",
                                    "id": "agency",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Travel Agency Assignment",
                                    "url": "\/travel\/travelsettings\/index\/tab\/agencyassignment",
                                    "visible": true,
                                    "description": "Create and manage the settings that specify which travel agency is to be used for a specific set of Employees travelling to a particular set of locations depending on the type of travel , accommodation or local conveyance request",
                                    "hierarchy": "Spend | Travel",
                                    "id": "agencyassignment",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Modification\/Cancellation Reasons",
                                    "url": "\/travel\/travelsettings\/index\/tab\/reason",
                                    "visible": true,
                                    "description": "Configure the options to display as the reasons when an Employee is cancelling or modifying their travel request",
                                    "hierarchy": "Spend | Travel",
                                    "id": "travel_reason",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }, {
                                    "label": "Travel Auto Numbering",
                                    "url": "\/travel\/travelsettings\/index\/tab\/autonumber",
                                    "visible": true,
                                    "description": "Create and maintain an auto-numbering system that automatically generates and assigns a unique identifier to each travel request, based on specific rules or patterns determined by the Firm",
                                    "hierarchy": "Spend | Travel",
                                    "id": "travel_autonumber",
                                    "logo": "\/images\/settings\/l2_settings\/travel.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/travel.svg"
                            }, {
                                "label": "Others",
                                "id": "others_spend",
                                "children": [{
                                    "label": "Budgeting",
                                    "url": "\/travel\/travelsettings\/index\/tab\/budget",
                                    "visible": true,
                                    "description": "Create and manage budgets that can be applied to travel, accommodation, & reimbursement requests, travel & reimbursement advances, etc",
                                    "hierarchy": "Spend | Others",
                                    "id": "travel_budget",
                                    "logo": "\/images\/settings\/l2_settings\/others_spend.svg"
                                }, {
                                    "label": "Tax Components",
                                    "url": "\/travel\/travelsettings\/index\/tab\/components",
                                    "visible": true,
                                    "description": "Create and manage the tax components that are included in expenditures related to travel & accommodation and expense requests",
                                    "hierarchy": "Spend | Others",
                                    "id": "travel_components",
                                    "logo": "\/images\/settings\/l2_settings\/others_spend.svg"
                                }, {
                                    "label": "Tax Groups",
                                    "url": "\/travel\/travelsettings\/index\/tab\/componentgroups",
                                    "visible": true,
                                    "description": "Create and manage tax groups that specify the country-wise taxes that are applicable for different expenditures",
                                    "hierarchy": "Spend | Others",
                                    "id": "componentgroups",
                                    "logo": "\/images\/settings\/l2_settings\/others_spend.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/others_spend.svg"
                            }]
                        }, {
                            "label": "Marketplace",
                            "id": "marketplace",
                            "children": [{
                                "label": "Applications",
                                "id": "applications",
                                "children": [{
                                    "label": "Attendance Admin App",
                                    "url": "\/settings\/company\/adminapp",
                                    "visible": true,
                                    "description": "Create and manage the profiles of Employees who can login to the Darwinbox attendance admin application",
                                    "hierarchy": "Marketplace | Applications",
                                    "id": "adminapp",
                                    "logo": "\/images\/settings\/l2_settings\/applications.svg"
                                }, {
                                    "label": "Visiting Card Settings",
                                    "url": "\/settings\/company\/evisitingcardsettings",
                                    "visible": true,
                                    "description": "Configure and manage the settings that are applicable to the visiting cards of Employees generated on the Darwinbox mobile application",
                                    "hierarchy": "Marketplace | Applications",
                                    "id": "evisitingcardsettings",
                                    "logo": "\/images\/settings\/l2_settings\/applications.svg"
                                }, {
                                    "label": "Asset Management",
                                    "url": "\/settings\/company\/assets",
                                    "visible": true,
                                    "description": "Create and manage different assets of the Firm that can be assigned\/unassigned to Employees",
                                    "hierarchy": "Marketplace | Applications",
                                    "id": "assets",
                                    "logo": "\/images\/settings\/l2_settings\/applications.svg"
                                }, {
                                    "label": "Virtual ID Card Settings",
                                    "url": "\/settings\/company\/virtualidcardsettings",
                                    "visible": true,
                                    "description": "Configure and manage the settings that are applicable to the Virtual ID cards of Employees generated on the Darwinbox mobile application",
                                    "hierarchy": "Marketplace | Applications",
                                    "id": "virtualidcardsettings",
                                    "logo": "\/images\/settings\/l2_settings\/applications.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/applications.svg"
                            }, {
                                "label": "Consumption SKUs",
                                "id": "consumptions",
                                "children": [{
                                    "label": "Consumption & Logs",
                                    "url": "\/studio\/ConsumptionSKU\/logs",
                                    "visible": true,
                                    "description": "Monitor the usage of the consumption based product features that are enabled for your tenant.",
                                    "hierarchy": "Marketplace | Consumption SKUs",
                                    "id": "consumptions_skus",
                                    "logo": "\/images\/settings\/l2_settings\/consumptions.svg"
                                }, {
                                    "label": "Enablement",
                                    "url": "\/studio\/ConsumptionSKU\/enablement",
                                    "visible": true,
                                    "description": "Manage access to product features that are tracked based on their consumption\/usage. Enable or Disable them based on your organization requirement.",
                                    "hierarchy": "Marketplace | Consumption SKUs",
                                    "id": "enablement",
                                    "logo": "\/images\/settings\/l2_settings\/consumptions.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/consumptions.svg"
                            }]
                        }, {
                            "label": "AI Agents",
                            "id": "ai_agents",
                            "children": [{
                                "label": "Agent Configurations",
                                "id": "agent_configurations",
                                "children": [{
                                    "label": "Employee Support Agent",
                                    "url": "\/aiSettings\/configurations\/employee_support_agent",
                                    "visible": true,
                                    "description": "Configure Employee Support Agent for employees by defining the knowledge base and capabilities",
                                    "hierarchy": "AI Agents | Agent Configurations",
                                    "id": "agent_configurations",
                                    "logo": "\/images\/settings\/l2_settings\/agent_configurations.svg"
                                }, {
                                    "label": "Analytics Agent",
                                    "url": "\/aiSettings\/configurations\/analytics_agent",
                                    "visible": true,
                                    "description": "Configure Analytics Agent for employees by defining profile and capabilities",
                                    "hierarchy": "AI Agents | Agent Configurations",
                                    "id": "hr_analytics_agent_configurations",
                                    "logo": "\/images\/settings\/l2_settings\/agent_configurations.svg"
                                }, {
                                    "label": "Channel Settings",
                                    "url": "\/aiSettings\/configurations\/channel_settings",
                                    "visible": true,
                                    "description": "Configure Employee Support Agent for employees by defining the knowledge base and capabilities",
                                    "hierarchy": "AI Agents | Agent Configurations",
                                    "id": "channel_settings",
                                    "logo": "\/images\/settings\/l2_settings\/agent_configurations.svg"
                                }],
                                "iconUrl": "\/images\/settings\/l2_settings\/agent_configurations.svg"
                            }]
                        }];
                        let breadCrumbItem = [];
                        const current_l1_item_id = "";
                        let clickableItems = {};
                        settingsConfig.forEach( (each_l1_setting) => {
                            if (each_l1_setting.id == current_l1_item_id) {
                                breadCrumbItem.settingItem = each_l1_setting;
                            }
                            each_l1_setting.children.forEach( (each_l2_setting) => {
                                each_l2_setting.children.forEach( (each_l3_setting) => {
                                    clickableItems[each_l3_setting.id] = each_l3_setting;
                                }
                                );
                            }
                            );
                        }
                        );

                        function bookmarkClickedCommon(idPath, failureCallback, from_ui=true, replace_html=true) {
                            if (from_ui) {
                                idPath = idPath[idPath.length - 1];
                            }
                            window.showWaiter = false;
                            $.ajax({
                                url: "/settings/activity",
                                type: 'POST',
                                dataType: 'json',
                                data: {
                                    pin: idPath,
                                    replace_html: replace_html ? '1' : '0',
                                },
                                success: function(data) {
                                    showNotification({
                                        message: data.message,
                                        type: data.status,
                                        autoClose: true,
                                        duration: 5
                                    });
                                    if (data.status == 'success') {
                                        updatePinnedItems(data.data);
                                        if (data.data.hasOwnProperty('config') && !from_ui && settings) {
                                            settings.settingsConfig = data.data.config;
                                        }
                                    }
                                    if (data.status == 'error' && typeof failureCallback === 'function') {
                                        failureCallback();
                                    }
                                },
                                error: function(xhr) {
                                    showNotification({
                                        message: xhr.responseJSON?.message,
                                        type: "error",
                                        autoClose: true,
                                        duration: 5
                                    });

                                    if (typeof failureCallback === "function") {
                                        failureCallback();
                                    }
                                },
                                complete() {
                                    window.showWaiter = true;
                                }
                            });
                        }

                        function updatePinnedItems({pinned, view}) {
                            const recentlyUsedContainer = $('.recently-used-container');
                            recentlyUsedContainer.find('.setting-unpin[data-pin="true"]').attr('data-pin', 'false');

                            pinned.forEach( (item) => {
                                recentlyUsedContainer.find(`.setting-unpin[data-setting="${item}"]`).attr('data-pin', 'true');
                            }
                            );
                            if (view) {
                                $(".favourite-settings-list").html(view);
                            }
                        }

                        settings.addEventListener('settingSelected', e => {//noop
                        }
                        );
                        settings.addEventListener('bookmarkClicked', e => {
                            bookmarkClickedCommon(e.detail.idPath, e.detail.onFailureCallback);
                        }
                        );
                        ribbon.addEventListener('bookmarkClicked', e => {
                            bookmarkClickedCommon(e.detail.idPath, e.detail.onFailureCallback, true, false);
                        }
                        );
                        ribbon.addEventListener('settingClicked', e => {//noop
                        }
                        );
                        ribbon.config = {
                            backClickRedirectionUrl: "/settings",
                            ribbonItems: [],
                            breadCrumbItem: breadCrumbItem
                        };
                        if (ribbon.config.breadCrumbItem.length == 0) {
                            ribbon.classList.add('hidden');
                            settings.classList.remove('hidden');
                        } else {
                            ribbon.classList.remove('hidden');
                            settings.classList.add('hidden');
                        }
                        settings.settingsConfig = settingsConfig;

                        if (ribbon.config.breadCrumbItem.autoPopulatePageLevelActionBtns) {
                            document.addEventListener('DOMContentLoaded', resolveButtons);
                            $(document).ajaxStop(function() {
                                requestAnimationFrame(resolveButtons);
                            });
                        } else {
                            document.body.classList.add('loaded');
                        }
                        $(document).ready(function() {
                            let currentItemId = "";
                            if (currentItemId != "") {
                                $.ajax({
                                    url: "/settings/activity",
                                    type: 'POST',
                                    dataType: 'json',
                                    data: {
                                        activity: currentItemId,
                                    },
                                    error: function(xhr) {
                                        showNotification({
                                            message: xhr.responseJSON?.message,
                                            type: "error",
                                            autoClose: true,
                                            duration: 5
                                        });
                                    }
                                });
                            }
                        });

                        $(document).on("click", '.setting-unpin', function(e) {
                            let idPath = $(this).data("setting");
                            bookmarkClickedCommon(idPath, null, false);
                            e.preventDefault();
                            e.stopPropagation();
                        });

                        function setRibbonConfig(configButtons, redirectionUrl=null) {
                            if (redirectionUrl == null) {
                                redirectionUrl = "/settings";
                            }
                            ribbon.config = {
                                ...(ribbon.config),
                                ribbonItems: configButtons,
                                backClickRedirectionUrl: redirectionUrl
                            };
                        }

                        function addButtonsToRibbon(btn, index=0) {
                            if ($(btn).hasClass('hidden-ribbon')) {
                                $(btn).removeClass('hidden-ribbon');
                            }
                            let configButtons = ribbon.config.ribbonItems;
                            if ($(btn).is(':visible')) {
                                commonResolveBtn(btn, configButtons, index, true);
                                setRibbonConfig(configButtons);
                            }
                        }

                        function toTitleCase(string) {
                            const words = string.toLowerCase().trim().split(" ");

                            return words.map( (word) => {
                                return word ? word[0].toUpperCase() + word.substring(1) : word;
                            }
                            ).join(" ");
                        }

                        function commonResolveBtn(btn, configButtons, index, custom=false) {
                            $(btn).addClass('hidden-ribbon');
                            if ($(btn).attr('data-bs-toggle') != 'dropdown' || $(btn).attr('data-bs-display') != 'static') {
                                let btnLabel = $(btn).val() || $(btn).text();
                                if (!$(btn).hasClass('ribbon-btn-label-fixed')) {
                                    btnLabel = toTitleCase(btnLabel);
                                }

                                let configBtn = {
                                    label: btnLabel,
                                    id: `btn_${index}`,
                                    callback_fn: data => {
                                        revertHiddenButtons(custom);
                                        btn.click();
                                        if (custom) {
                                            setRibbonConfig([]);
                                        } else {
                                            resolveButtons();
                                        }
                                    }
                                    ,
                                }
                                if ($(btn).hasClass('btn-primary')) {
                                    configBtn.is_primary = true;
                                }
                                configButtons.push(configBtn);
                            }
                        }

                        function revertHiddenButtons(custom=false) {
                            const hiddenButtons = $('.hidden-ribbon');
                            hiddenButtons.each(function(j, hiddenButton) {
                                $(hiddenButton).removeClass('hidden-ribbon');
                                if (!custom) {
                                    $(hiddenButton).addClass('invisible');
                                    $(hiddenButton).addClass('invisible-ribbon');
                                }
                            });
                        }

                        function resolveButtons() {
                            document.body.classList.add('loaded');

                            let hiddenButtons = $('.invisible-ribbon');
                            hiddenButtons.each(function(j, hiddenButton) {
                                $(hiddenButton).removeClass('invisible');
                                $(hiddenButton).removeClass('invisible-ribbon');
                            });
                            let configButtons = [];
                            let btns = $('input[type="submit"], input[type="button"], a.btn, a.db-btn, div.btn, button.btn, button.db-btn');
                            let count = 0;
                            let parent = null;
                            btns.each(function(i, btn) {
                                if ($(btn).hasClass('hidden-ribbon')) {
                                    $(btn).removeClass('hidden-ribbon');
                                }
                                const ul_menu = $(btn).closest('ul.dropdown-menu').length;
                                if (($(btn).is(':visible') || ul_menu) && !$(btn).hasClass('skip-ribbon') && !$(btn).closest('table').length) {
                                    let checkParent = btn;
                                    if (ul_menu) {
                                        let menuItem = $(btn).closest('ul.dropdown-menu');
                                        if (!menuItem.parent().is(':visible')) {
                                            return;
                                        }
                                        checkParent = menuItem.parent();
                                    }
                                    if ($(btn).attr('data-bs-toggle') == 'dropdown') {
                                        checkParent = $(btn).parent();
                                    }
                                    if (parent == null) {
                                        parent = $(btn).parent().parent();
                                    }
                                    if ($(checkParent).parent().parent().is(parent) || $(checkParent).parent().is(parent)) {
                                        commonResolveBtn(btn, configButtons, count);
                                        count = count + 1;
                                    }
                                }
                            });
                            setRibbonConfig(configButtons);
                        }
                    } else {
                        document.body.classList.add('loaded');
                    }
                </script>
                <style>
                    body:not(.loaded) input[type="submit"], body:not(.loaded) input[type="button"], body:not(.loaded) a.btn, body:not(.loaded) a.db-btn, body:not(.loaded) div.btn, body:not(.loaded) button.btn, body:not(.loaded) button.db-btn {
                        visibility: hidden !important;
                    }

                    .chosen-container .chosen-drop {
                        z-index: 9 !important;
                        /* to show under the ribbon */
                    }

                    .header-container {
                        height: 56px;
                        background: rgba(42, 51, 62, 1);
                        position: sticky;
                        position: -webkit-sticky;
                        top: var(--sds-variables-globalHeaderHeight);
                        z-index: 9997;
                    }

                    .hidden-ribbon {
                        display: none !important;
                    }
                </style>
                <script>

                    $(function() {
                        var allForms = $("form");
                        for (let i = 0; i < allForms.length; i++) {
                            let eachForm = $(allForms[i]);
                            let foundCsrfToken = eachForm.find("input[name=pbqBeYWPUn]");
                            if (!foundCsrfToken.length) {
                                eachForm.prepend("<input type=\"hidden\" name=\"pbqBeYWPUn\" value=\"UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==\" />");
                            }
                        }
                    })

                    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                        if (typeof (options) == "string") {
                            originalOptions.url = options;
                            options = originalOptions;
                        }

                        if (!options.data) {
                            options.data = "";
                        }

                        if (typeof (options.data) == "string" && options.data.indexOf("&pbqBeYWPUn=") < 0) {
                            try {
                                options.data = JSON.parse(options.data);
                                if (!options.data.pbqBeYWPUn) {
                                    options.data.pbqBeYWPUn = "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
                                }
                                options.data = JSON.stringify(options.data);
                            } catch (err) {
                                var token_substring = "pbqBeYWPUn=UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
                                if (options.data.indexOf(token_substring) === -1) {
                                    options.data += "&" + token_substring;
                                }
                            }
                        } else if (typeof options.data === "object" && options.data instanceof FormData) {
                            if (!options.data.has || !options.data.has("pbqBeYWPUn")) {
                                options.data.append("pbqBeYWPUn", "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==");
                            }
                        } else if (!options.data.pbqBeYWPUn) {
                            options.data.pbqBeYWPUn = "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
                        }

                    });
                </script>
                <div class="clearfix"></div>
                <!--
NOTE:
---------------------------------------

1. Add your form fields inside the class "tab_container" and inside the respective "sub_tab_container" to make them appear in their respective filter tab.
2. Add the class "searchable" to the form-group make the field searchable.
-->
                <style>
                    .form-check {
                        margin-top: 0px;
                        margin-bottom: 0px;
                    }

                    .align-partner-id {
                        margin: 10px 0px 0px -10px;
                    }

                    #google_api_key_editors_chosen {
                        font-weight: normal;
                    }

                    #integration_with_travel_partner_chosen .chosen-choices {
                        font-weight: normal
                    }

                    #integration_with_travel_partner_fare_chosen .chosen-choices {
                        font-weight: normal
                    }

                    #google_api_key_editors_chosen .chosen-choices {
                        font-weight: normal
                    }

                    .margin-t-5-b--20 {
                        margin-top: 5px !important;
                        margin-bottom: -20px !important;
                    }

                    .display-inline-block {
                        display: inline-block;
                    }

                    .enable_production_everify-radio {
                        gap: 4rem;
                        margin-top: 0.5rem;
                    }

                    .enable_production_everify-radio .radio-buttons-everify {
                        margin-top: 0.5rem;
                    }

                    .disable_ignore_att_setting .custom_tooltip {
                        pointer-events: auto;
                        opacity: 1;
                    }
                </style>
                <section class="wrapper-content p-0">
                    <div class="container-fluid p-0">
                        <div class="bg-wheight left-panel expanded ptb-20">
                            <div class="heading-block plr-16 mb-20">
                                <h1 class="font-18 base-1 m-0 plr-12 hide-on-collapse line-height-normal">Tenant Profile Settings
                    </h1>
                                <button class="collapse-left-nav font-18">
                                    <df class="db-Chevron-left"></df>
                                </button>
                            </div>
                            <div class="body-block plr-16 hide-on-collapse">
                                <!-- <input class="db-input search_module" placeholder="Search module" type="text"> -->
                                <div class="">
                                    <ul class="v_tabs mt-12 mb-0 border-none mt-0 p-0">
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab active" href="javascript:void(0)" id="tab_0">
                                                <div class="text">Admin App</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <!-- <li class="p-0 font-14">
                                <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_28">
                                    <div class="text">AI Agents</div>
                                    <span class="count"></span>
                                </a>
                            </li> -->
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_1">
                                                <div class="text">Attendance </div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_2">
                                                <div class="text">Chatbot </div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_3">
                                                <div class="text">Core</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_5">
                                                <div class="text">Help Desk</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_6">
                                                <div class="text">HR Documents</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_22">
                                                <div class="text">Journeys</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_7">
                                                <div class="text">Leave</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_8">
                                                <div class="text">Mobile</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_9">
                                                <div class="text">Notifications</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_10">
                                                <div class="text">Onboarding</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_24">
                                                <div class="text">Others</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_11">
                                                <div class="text">Payroll</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_12">
                                                <div class="text">Performance</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_13">
                                                <div class="text">Permissions</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_14">
                                                <div class="text">Platform</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_15">
                                                <div class="text">Recognition</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_16">
                                                <div class="text">Recruitment</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_17">
                                                <div class="text">Reports</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_28">
                                                <div class="text">Analytics </div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_23">
                                                <div class="text">Survey</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_18">
                                                <div class="text">Travel &amp;Expense</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_20">
                                                <div class="text">Vibe</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_26">
                                                <div class="text">Virtual ID Card </div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_21">
                                                <div class="text">Visitor Management</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_4">
                                                <div class="text">Visiting Card </div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                        <li class="p-0 font-14">
                                            <a class="plr-12 ptb-8 _tab" href="javascript:void(0)" id="tab_27">
                                                <div class="text">Workflows</div>
                                                <span class="count"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="right-panel">
                            <div id="leave_global_settings">
                                <form enctype="multipart/form-data" class="" id="tenant_setting_level" action="/settings/employees/tenantprovisioning" method="post">
                                    <input type="hidden" value="UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==" name="pbqBeYWPUn"/>
                                    <div class="header bg-wheight ptb-16 plr-20 clearfix">
                                        <div class="col-md-3 p-0">
                                            <h2 class="font-16 base-1 mt-12 mb-0">Admin App
                                </h2>
                                        </div>
                                        <div class="col-md-6 positionRelative p-0">
                                            <input type="text" placeholder="Search Settings" class="db-input search_settings_field">
                                            <button type="button" class="clear hidden">
                                                <df class="db-Close"></df>
                                            </button>
                                        </div>
                                        <div class="col-md-3 text-right">
                                            <input class="db-btn btn-primary text-uppercase" id="setting_create_btn" type="submit" name="yt0" value="SAVE SETTINGS"/>
                                        </div>
                                    </div>
                                    <div class="empty_state_text hidden mt-50">
                                        <div class="pt-50">
                                            <img src="/images/empty_states/group-3.svg">
                                            <h3 class="title-1 f-light font-16 mt-0 mb-16 base-2">No Settings Found
                                </h3>
                                        </div>
                                    </div>
                                    <!-- Admin App -->
                                    <div class="tab_container clearfix" id="tab_container_0">
                                        <div class="ptb-12 plr-20 bg-tint-blue-2">
                                            <ul id="" class="vertical_tabs m-0 p-0">
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                        </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix" data-container="0">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_enable_adminapp" type="hidden" value="0" name="TenantProfile[enable_adminapp]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[enable_adminapp]" id="TenantProfile_enable_adminapp" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable Admin App
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_adminapp_qr_allowed" type="hidden" value="0" name="TenantProfile[adminapp_qr_allowed]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[adminapp_qr_allowed]" id="TenantProfile_adminapp_qr_allowed" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Admin App qr allowed
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_adminapp_nfc_allowed" type="hidden" value="0" name="TenantProfile[adminapp_nfc_allowed]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[adminapp_nfc_allowed]" id="TenantProfile_adminapp_nfc_allowed" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Admin App nfc allowed
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_adminapp_bluetooth_allowed" type="hidden" value="0" name="TenantProfile[adminapp_bluetooth_allowed]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[adminapp_bluetooth_allowed]" id="TenantProfile_adminapp_bluetooth_allowed" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Admin App bluetooth allowed
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_import_mlf" type="hidden" value="0" name="TenantProfile[import_mlf]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[import_mlf]" id="TenantProfile_import_mlf" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Variables Import MLF
                                        </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-group col-md-6 searchable">
                                                <label>Admin App Sync Time (in minutes)</label>
                                                <input class="db-input width-100" name="TenantProfile[adminapp_sync_time]" id="TenantProfile_adminapp_sync_time" type="text" value=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- AI Agents -->
                                    <!-- <div class="tab_container clearfix" id="tab_container_28">
                            <div class="ptb-12 plr-20 bg-tint-blue-2">
                                <ul id="" class="vertical_tabs m-0 p-0">
                                    <li class="inline-block vertical-align-middle p-0">
                                        <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0">
                                            All
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="plr-12 sub_tab_container clearfix" data-container="0">
                                <div class="form-group col-md-6 searchable">
                                    <div class="form-check ptb-0">
                                                                                <label class="m-0">
                                            Enable Employee Support Agent
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group col-md-6 searchable">
                                    <div class="form-check ptb-0">
                                                                                <label class="m-0">
                                            Enable Analytics Agent
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                                    <!-- Attendance  -->
                                    <div class="tab_container clearfix hidden" id="tab_container_1">
                                        <div class="ptb-12 plr-20 bg-tint-blue-2">
                                            <ul id="" class="vertical_tabs m-0 p-0">
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_4" class="sub_tab base-1 font-13 mr-12 p-0">Punch Processing
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_6" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                        </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="4">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_punches_in_buffer_overlap_period" type="hidden" value="0" name="TenantProfile[punches_in_buffer_overlap_period]"/>
                                                    <input class="form-check-input buffer_over_lap_period" name="TenantProfile[punches_in_buffer_overlap_period]" id="TenantProfile_punches_in_buffer_overlap_period" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable Rule Engines for Punches in Buffer Overlap Period
                                        </label>
                                                </div>
                                                <div class="form-group buffer_over_lap_period_rules mt-16 searchable">
                                                    <label class="db-label">Select Rule</label>
                                                    <select class="form-select dbSelect buffer_over_lap_period_rules_drop mb-16" name="TenantProfile[punches_in_buffer_overlap_period_rule]" id="TenantProfile_punches_in_buffer_overlap_period_rule">
                                                        <option value="0" selected="selected">Rule 1: Two or more Punches between PreBuffer+ShiftTime+PostBuffer duration</option>
                                                        <option value="1">Rule 2: One or more Punch between ShiftEnd+PostBuffer duration</option>
                                                    </select>
                                                    <div class="form-group buffer_over_lap_period_rules_grace hidden">
                                                        <label class="db-label">Grace Period (in minutes) before the shift end time for the out punch</label>
                                                        <input class="db-input width-100" name="TenantProfile[punches_in_buffer_overlap_period_grace_time]" id="TenantProfile_punches_in_buffer_overlap_period_grace_time" type="text" value="0"/>
                                                    </div>
                                                    <div class="form-check ptb-0">
                                                        <input id="ytTenantProfile_ignore_buffer_overlap_period_if_no_punches" type="hidden" value="0" name="TenantProfile[ignore_buffer_overlap_period_if_no_punches]"/>
                                                        <input class="form-check-input" name="TenantProfile[ignore_buffer_overlap_period_if_no_punches]" id="TenantProfile_ignore_buffer_overlap_period_if_no_punches" value="1" checked="checked" type="checkbox"/>
                                                        <label class="m-0">Ignore buffer overlap scenario in case of no punches in the previous day
                                            </label>
                                                    </div>
                                                </div>
                                                <div class="form-check ptb-0 mt-20">
                                                    <input id="ytTenantProfile_punch_out_of_buffer_overlap" type="hidden" value="0" name="TenantProfile[punch_out_of_buffer_overlap]"/>
                                                    <input class="form-check-input" name="TenantProfile[punch_out_of_buffer_overlap]" id="TenantProfile_punch_out_of_buffer_overlap" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Extend Rule Engine Duration Till First Punch or Buffer End Of First Day Shift.
                                        </label>
                                                </div>
                                                <div class="clearfix"></div>
                                                <br/>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="6">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check">
                                                    <input id="ytTenantProfile_checkin_map_status" type="hidden" value="0" name="TenantProfile[checkin_map_status]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[checkin_map_status]" id="TenantProfile_checkin_map_status" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Check In Map (Trace)
                                        </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check p-0 mt-10">
                                                    <label class="pl-0">Past months to display in task history</label>
                                                    <br>
                                                    <input class="db-input width-50" name="TenantAttendanceSettings[limit_months_in_taskbox]" id="TenantAttendanceSettings_limit_months_in_taskbox" type="text" value="12"/>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check mt-20">
                                                    <input id="ytTenantProfile_tm_allow_access_mobile_new_ui" type="hidden" value="0" name="TenantProfile[tm_allow_access_mobile_new_ui]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[tm_allow_access_mobile_new_ui]" id="TenantProfile_tm_allow_access_mobile_new_ui" value="1" type="checkbox"/>
                                                    <label class="mt-0">Allow Access to Mobile New UI (BETA)
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check mt-20">
                                                    <input id="ytTenantAttendanceSettings_enable_alternate_work" type="hidden" value="0" name="TenantAttendanceSettings[enable_alternate_work]"/>
                                                    <input title="" class="form-check-input" name="TenantAttendanceSettings[enable_alternate_work]" id="TenantAttendanceSettings_enable_alternate_work" value="1" checked="checked" type="checkbox"/>
                                                    <label class="mt-0">Enable Alternative Work Schedule (BETA)
                                        </label>
                                                    <df class="db-Infromation font-14 vertical-align-middle ml-5" data-bs-html="true" data-bs-toggle="popover" id="total_tooltip" data-bs-content="Enable this setting to deduct Leave balance per the user's schedule for Alternative Work Schedule or compressed work week cases.Additional configurations will be visible in the shift definition after enabling this."></df>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Chatbot -->
                                    <div class="tab_container clearfix hidden" id="tab_container_2">
                                        <div class="ptb-12 plr-20 bg-tint-blue-2">
                                            <ul id="" class="vertical_tabs m-0 p-0">
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                        </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_candidate_bot" type="hidden" value="0" name="TenantProfile[candidate_bot]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[candidate_bot]" id="TenantProfile_candidate_bot" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable Candidate Bot
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_teams_bot" type="hidden" value="0" name="TenantProfile[teams_bot]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[teams_bot]" id="TenantProfile_teams_bot" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable Teams Bot
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_teams_bot_notifications" type="hidden" value="0" name="TenantProfile[teams_bot_notifications]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[teams_bot_notifications]" id="TenantProfile_teams_bot_notifications" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable Teams Bot Notifications
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_enable_custom_intent" type="hidden" value="0" name="TenantProfile[enable_custom_intent]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[enable_custom_intent]" id="TenantProfile_enable_custom_intent" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">
                                                        Custom Intent in Bot
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This is a paid feature and is to be enabled only with discretion</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_genai_gen_response" type="hidden" value="0" name="TenantProfile[genai_gen_response]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[genai_gen_response]" id="TenantProfile_genai_gen_response" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable GenAI response HR documents
                                        </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Core -->
                                    <div class="tab_container clearfix hidden" id="tab_container_3">
                                        <div class="ptb-12 plr-20 bg-tint-blue-2">
                                            <ul id="" class="vertical_tabs m-0 p-0">
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Custom Configuration
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Disable Default Configurations
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_3" class="sub_tab base-1 font-13 mr-12 p-0">Notifications
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_4" class="sub_tab base-1 font-13 mr-12 p-0">Validation
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_5" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                        </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_show_visual_reports" type="hidden" value="0" name="TenantProfile[show_visual_reports]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[show_visual_reports]" id="TenantProfile_show_visual_reports" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Show Visual Reports by default
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable to show Visual Reports by default</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_enable_education_at_instance_level" type="hidden" value="0" name="TenantProfile[enable_education_at_instance_level]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[enable_education_at_instance_level]" id="TenantProfile_enable_education_at_instance_level" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable Education Master At Instance Level
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>If Education master is enabled, Education Degree and Field of specialisation fields in Recruitment will remain disabled and will only be enabled once the migration cron has been executed.</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_hide_calendar_tab_employee" type="hidden" value="0" name="TenantProfile[hide_calendar_tab_employee]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[hide_calendar_tab_employee]" id="TenantProfile_hide_calendar_tab_employee" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Hide Calendar tab employee
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to hide the calendar tab from the dashboard for any employee</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_hide_old_reports_tab_employee" type="hidden" value="0" name="TenantProfile[hide_old_reports_tab_employee]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[hide_old_reports_tab_employee]" id="TenantProfile_hide_old_reports_tab_employee" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Hide Old Reports tab employee
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to hide the old reports tab from the dashboard for any employee</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_region_location_basis" type="hidden" value="0" name="TenantProfile[region_location_basis]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[region_location_basis]" id="TenantProfile_region_location_basis" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">
                                                        Region basis Location
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to create region based on office locations instead of states</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_jd_user_assignment" type="hidden" value="0" name="TenantProfile[jd_user_assignment]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[jd_user_assignment]" id="TenantProfile_jd_user_assignment" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable assigning Job descriptions basis user assignments
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this option to enable assigning JDs as per user assignment instead of default option of designations</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_delete_task" type="hidden" value="0" name="TenantProfile[delete_task]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[delete_task]" id="TenantProfile_delete_task" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable option to Archive task from Taskbox
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to give user the ability to remove unwanted tasks from their Requests or Tasks</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_ocr_allowed" type="hidden" value="0" name="TenantProfile[ocr_allowed]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[ocr_allowed]" id="TenantProfile_ocr_allowed" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable OCR to capture data from Personal Identity documents
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to capture data from Personal Identity documents. Currently only Aadhaar, PAN, Driving licence documents of India are supported under this</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_comp_positioning_job_family_level" type="hidden" value="0" name="TenantProfile[comp_positioning_job_family_level]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[comp_positioning_job_family_level]" id="TenantProfile_comp_positioning_job_family_level" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable Compensation positioning at Job Family level                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Compensation positioning is framework to maintain compensation details at Job Family level which is used for restricting offer letters or increments. Enter 1 for Fixed CTC or 2 for Total CTC</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_enable_continuous_service_date" type="hidden" value="0" name="TenantProfile[enable_continuous_service_date]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[enable_continuous_service_date]" id="TenantProfile_enable_continuous_service_date" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable deduction of configured leave from continuous service calculation
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>To Enable Continuous Service Date(CSD)</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_enable_start_date_of_contract_beyond_doj" type="hidden" value="0" name="TenantProfile[enable_start_date_of_contract_beyond_doj]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[enable_start_date_of_contract_beyond_doj]" id="TenantProfile_enable_start_date_of_contract_beyond_doj" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable assignment start date of contract beyond DOJ
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable assignment start date of contract beyond DOJ </div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_restrict_location_on_designation" type="hidden" value="0" name="TenantProfile[restrict_location_on_designation]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[restrict_location_on_designation]" id="TenantProfile_restrict_location_on_designation" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Restrict location based on designations
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Restrict location based on designations </div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_allow_project_based_staffing" type="hidden" value="0" name="TenantProfile[allow_project_based_staffing]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[allow_project_based_staffing]" id="TenantProfile_allow_project_based_staffing" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">
                                                        Allow staffing rules at project level
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Allow staffing rules at project level</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_enable_new_profile_page" type="hidden" value="0" name="TenantProfile[enable_new_profile_page]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[enable_new_profile_page]" id="TenantProfile_enable_new_profile_page" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">
                                                        Enable New Profile Experience
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This enables the new experience for the employee profile</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-group col-md-6 searchable">
                                                <label>Retirement Years</label>
                                                <input class="db-input width-100" name="TenantProfile[retirement_year]" id="TenantProfile_retirement_year" type="text" value="58"/>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <label>Replacement to email</label>
                                                <input class="db-input width-100" name="TenantProfile[replacement_to_email]" id="TenantProfile_replacement_to_email" type="text" value=""/>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <label class="form-label" for="TenantProfile_compensation_positioning">Compensation Positioning</label>
                                                <input class="db-input width-100" name="TenantProfile[compensation_positioning]" id="TenantProfile_compensation_positioning" type="text" value=""/>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <label class="form-label" for="TenantProfile_auto_confirm_email_before_days">Auto Confirm Email Before Days</label>
                                                <input class="db-input width-100" name="TenantProfile[auto_confirm_email_before_days]" id="TenantProfile_auto_confirm_email_before_days" type="text" value="3"/>
                                            </div>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="4">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_doj_validation" type="hidden" value="0" name="TenantProfile[doj_validation]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[doj_validation]" id="TenantProfile_doj_validation" value="1" type="checkbox"/>
                                                    <label class="m-0">
                                                        Don’t allow GDOJ to be less than DOJ
                                            
                                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to not allow having Group DOJ less than DOJ</div>">
                                                            <df class="db-Infromation"></df>
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="5">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_use_same_bu_in_division" type="hidden" value="0" name="TenantProfile[use_same_bu_in_division]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[use_same_bu_in_division]" id="TenantProfile_use_same_bu_in_division" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Use same BU in division
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_disable_bulk_deactivation_directory" type="hidden" value="0" name="TenantProfile[disable_bulk_deactivation_directory]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[disable_bulk_deactivation_directory]" id="TenantProfile_disable_bulk_deactivation_directory" value="1" type="checkbox"/>
                                                    <label class="m-0">Disable bulk deactivation directory
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_restrict_parent_company_in_search" type="hidden" value="0" name="TenantProfile[restrict_parent_company_in_search]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[restrict_parent_company_in_search]" id="TenantProfile_restrict_parent_company_in_search" value="1" type="checkbox"/>
                                                    <label class="m-0">Restrict Universal Search to Employee current Firm                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_encrypt_aadhar_number" type="hidden" value="0" name="TenantProfile[encrypt_aadhar_number]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[encrypt_aadhar_number]" id="TenantProfile_encrypt_aadhar_number" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Encrypt Aadhar Number
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_show_last_login" type="hidden" value="0" name="TenantProfile[show_last_login]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[show_last_login]" id="TenantProfile_show_last_login" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Show Last Login
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_show_only_assignment" type="hidden" value="0" name="TenantProfile[show_only_assignment]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[show_only_assignment]" id="TenantProfile_show_only_assignment" value="1" type="checkbox"/>
                                                    <label class="m-0">Show only Assignment Framework Options
                                        </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-group col-md-6 searchable">
                                                <label>Break address in Multiple Lines (add no of characters to break)</label>
                                                <input class="db-input width-100" name="TenantProfile[letter_break_address_multiple_lines]" id="TenantProfile_letter_break_address_multiple_lines" type="text" value=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- E-Visiting Card -->
                                    <div class="tab_container clearfix hidden" id="tab_container_4">
                                        <div class="ptb-12 plr-20 bg-tint-blue-2">
                                            <ul id="" class="vertical_tabs m-0 p-0">
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                        </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_visiting_card" type="hidden" value="0" name="TenantProfile[visiting_card]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[visiting_card]" id="TenantProfile_visiting_card" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable Visiting Card on Mobile
                                        </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <!-- Help Desk -->
                                    <div class="tab_container clearfix hidden" id="tab_container_5">
                                        <div class="ptb-12 plr-20 bg-tint-blue-2">
                                            <ul id="" class="vertical_tabs m-0 p-0">
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                        </a>
                                                </li>
                                                <li class="inline-block vertical-align-middle p-0">
                                                    <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                        </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ythelpdesk_enable_vendor" type="hidden" value="0" name="TenantProfile[helpdesk_enable_vendor]"/>
                                                    <input title="" class="form-check-input" id="helpdesk_enable_vendor" name="TenantProfile[helpdesk_enable_vendor]" value="1" type="checkbox"/>
                                                    <label class="m-0">Enable Vendor Login
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_helpdesk_enable_time_zone" type="hidden" value="0" name="TenantProfile[helpdesk_enable_time_zone]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[helpdesk_enable_time_zone]" id="TenantProfile_helpdesk_enable_time_zone" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Show timing in as per the user timezone
                                        </label>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-group col-md-6  hidden mb-16" id="allow_vendor">
                                                <label>Number of vendors allowed</label>
                                                <input class="db-input width-100" id="vendor_count" name="TenantProfile[helpdesk_vendor_allowed_count]" type="text" value="3"/>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_helpdesk_enable_embedded_translator" type="hidden" value="0" name="TenantProfile[helpdesk_enable_embedded_translator]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[helpdesk_enable_embedded_translator]" id="TenantProfile_helpdesk_enable_embedded_translator" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable Embedded Translator in helpdesk
                                        </label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_helpdesk_enable_rule_engine_description" type="hidden" value="0" name="TenantProfile[helpdesk_enable_rule_engine_description]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[helpdesk_enable_rule_engine_description]" id="TenantProfile_helpdesk_enable_rule_engine_description" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Enable AI Rules Engine
                                        </label>
                                                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Toggle to activate the AI rules engine for automating ticket classification and assignment.</div>">
                                                        <df class="db-Infromation"></df>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 searchable">
                                                <div class="form-check ptb-0">
                                                    <input id="ytTenantProfile_helpdesk_send_responces_to_tickets_in_single_thread" type="hidden" value="0" name="TenantProfile[helpdesk_send_responces_to_tickets_in_single_thread]"/>
                                                    <input title="" class="form-check-input" name="TenantProfile[helpdesk_send_responces_to_tickets_in_single_thread]" id="TenantProfile_helpdesk_send_responces_to_tickets_in_single_thread" value="1" checked="checked" type="checkbox"/>
                                                    <label class="m-0">Send responses to tickets via email in a single thread
                                        </label>
                                                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>If enabled, email responses for tickets created via email will be sent in a single thread. This overrides the Email Subject configured in Notification Templates and uses the subject from the original ticket-creation email instead.</div>">
                                                        <df class="db-Infromation"></df>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                            </div>
                            <!-- HR Documents -->
                            <div class="tab_container clearfix hidden" id="tab_container_6">
                                <div class="ptb-12 plr-20 bg-tint-blue-2">
                                    <ul id="" class="vertical_tabs m-0 p-0">
                                        <li class="inline-block vertical-align-middle p-0">
                                            <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
                                        </li>
                                        <li class="inline-block vertical-align-middle p-0">
                                            <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Validation
                                    </a>
                                        </li>
                                        <li class="inline-block vertical-align-middle p-0">
                                            <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                    </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
                                    <div class="form-group col-md-6 searchable">
                                        <div class="form-check ptb-0">
                                            <input id="ytTenantProfile_enable_aspose" type="hidden" value="0" name="TenantProfile[enable_aspose]"/>
                                            <input title="" class="form-check-input" name="TenantProfile[enable_aspose]" id="TenantProfile_enable_aspose" value="1" type="checkbox"/>
                                            <label class="m-0">Enable New Docx to PDF Conversion Service
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
                                    <div class="form-group col-md-6 searchable">
                                        <div class="form-group allow_languages searchable">
                                            <label class="db-label">Allowed Languages *</label>
                                            <br/>
                                            <select id="hrdocs_allowed_language" class="form-select dbSelect" data-placeholder="Select Languages... " multiple="multiple" name="TenantProfile[hrdocs_allowed_languages][]">
                                                <option value="ar">Arabic</option>
                                                <option value="bn">Bengali</option>
                                                <option value="bl">Bulgarian</option>
                                                <option value="bu">Burmese</option>
                                                <option value="fr-CA">Canadian French</option>
                                                <option value="zh">Chinese</option>
                                                <option value="ch">Chinese (Traditional)</option>
                                                <option value="cr">Croatian</option>
                                                <option value="cs">Czech</option>
                                                <option value="da">Danish</option>
                                                <option value="du">Dutch</option>
                                                <option value="en-us">English (US)</option>
                                                <option value="en-UK">English UK</option>
                                                <option value="fi">Finnish</option>
                                                <option value="fr">French</option>
                                                <option value="ka">Georgian</option>
                                                <option value="de">German</option>
                                                <option value="sw-GR">German Swiss</option>
                                                <option value="gr">Greek</option>
                                                <option value="hi" selected="selected">Hindi</option>
                                                <option value="hu">Hungarian</option>
                                                <option value="in">Indonesian</option>
                                                <option value="it">Italian</option>
                                                <option value="ja">Japanese</option>
                                                <option value="kn">Kannada</option>
                                                <option value="km">Khmer</option>
                                                <option value="ko">Korean</option>
                                                <option value="ms">Malay</option>
                                                <option value="ne">Nepali</option>
                                                <option value="nb-NO">Norwegian Bokmål</option>
                                                <option value="pl">Polish</option>
                                                <option value="pt">Portuguese (Brazil)</option>
                                                <option value="po-pt">Portuguese (Portugal)</option>
                                                <option value="ro">Romanian</option>
                                                <option value="ru">Russian</option>
                                                <option value="sr">Serbian</option>
                                                <option value="si">Sinhala</option>
                                                <option value="sk">Slovak</option>
                                                <option value="sl">Slovenian</option>
                                                <option value="es">Spanish</option>
                                                <option value="sp">Spanish (Mexico)</option>
                                                <option value="sw">Swedish</option>
                                                <option value="ta">Tamil</option>
                                                <option value="te">Telugu</option>
                                                <option value="th">Thai</option>
                                                <option value="tr">Turkish</option>
                                                <option value="uz">Uzbek</option>
                                                <option value="vi">Vietnamese</option>
                                            </select>
                                        </div>
                                    </div>
</br>
<div class="form-group col-md-6 searchable">
    <div class="form-check ptb-0">
        <input id="ytTenantProfile_allow_multiple_signers_for_docusign" type="hidden" value="0" name="TenantProfile[allow_multiple_signers_for_docusign]"/>
        <input title="" class="form-check-input" name="TenantProfile[allow_multiple_signers_for_docusign]" id="TenantProfile_allow_multiple_signers_for_docusign" value="1" checked="checked" type="checkbox"/>
        <label class="m-0">Allow multiple signers for Docusign
                                    </label>
    </div>
</div>
<div class="form-group col-md-6 searchable">
    <div class="form-check ptb-0">
        <input id="ytTenantProfile_enable_new_hr_documents" type="hidden" value="0" name="TenantProfile[enable_new_hr_documents]"/>
        <input title="" class="form-check-input" name="TenantProfile[enable_new_hr_documents]" id="TenantProfile_enable_new_hr_documents" value="1" checked="checked" type="checkbox"/>
        <label class="m-0">Enable new document creation and generation experience (Beta)
                                    </label>
    </div>
</div>
</div></div>
<!-- Leave -->
<div class="tab_container clearfix hidden" id="tab_container_7">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_allow_multiple_sets_combined_balance" type="hidden" value="0" name="TenantProfile[allow_multiple_sets_combined_balance]"/>
                <input title="" class="form-check-input allow_multiple_sets_combined_balance_checkbox" name="TenantProfile[allow_multiple_sets_combined_balance]" id="TenantProfile_allow_multiple_sets_combined_balance" value="1" type="checkbox"/>
                <label class="m-0">Enable Multiple sets of leave balance
                                    </label>
            </div>
            <div id="combined_leave_bal_sets" class="form-check hidden">
                <label>No of sets
                                    </label>
                <select class="form-control" name="TenantProfile[number_of_sets]" id="TenantProfile_number_of_sets">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected="selected">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_leave_allow_auto_reject_and_make_unpaid" type="hidden" value="0" name="TenantProfile[leave_allow_auto_reject_and_make_unpaid]"/>
                <input title="" class="form-check-input" name="TenantProfile[leave_allow_auto_reject_and_make_unpaid]" id="TenantProfile_leave_allow_auto_reject_and_make_unpaid" value="1" type="checkbox"/>
                <label class="m-0">leave allow auto reject and make unpaid
                                    </label>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!-- Mobile -->
<div class="tab_container clearfix hidden" id="tab_container_8">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Disable default configurations
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_highlights_story_mobile" type="hidden" value="0" name="TenantProfile[disable_highlights_story_mobile]"/>
                <input title="" class="form-check-input" name="TenantProfile[disable_highlights_story_mobile]" id="TenantProfile_disable_highlights_story_mobile" value="1" type="checkbox"/>
                <label class="m-0">Disable Highlights Story in mobile
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytblock_mobile_qr_code_checkbox" type="hidden" value="0" name="TenantProfile[block_mobile_qr_code]"/>
                <input title="" class="form-check-input" id="block_mobile_qr_code_checkbox" name="TenantProfile[block_mobile_qr_code]" value="1" type="checkbox"/>
                <label class="m-0" for="block_mobile_qr_code_checkbox">Hide Mobile QR Code From Profile Dropdown
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytblock_mobile_login_checkbox" type="hidden" value="0" name="TenantProfile[block_mobile_login_through_tenant_url]"/>
                <input title="" class="form-check-input" id="block_mobile_login_checkbox" name="TenantProfile[block_mobile_login_through_tenant_url]" value="1" type="checkbox"/>
                <label class="m-0" for="block_mobile_login_checkbox">Block Mobile Login Through Tenant URL
                                    </label>
            </div>
            <div class="form-group col-md-8 searchable pt-3 ps-0 d-none" id="error_message_div">
                <label>Error Message To Show While Blocking Mobile Login Through Tenant URL</label>
                <textarea class="db-input width-100" name="TenantProfile[error_message_for_mobile_block]" id="TenantProfile_error_message_for_mobile_block">Login through tenant URL is not allowed for your organization. Please contact your system administrator.</textarea>
            </div>
        </div>
    </div>
</div>
<!-- Notifications -->
<div class="tab_container clearfix hidden" id="tab_container_9">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Notification
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <h3 class="plr-12 mt-12 mb-20 font-16 base-2">WHATSAPP NOTIFICATIONS
                            </h3>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_whatsapp" type="hidden" value="0" name="TenantProfile[enable_whatsapp]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_whatsapp]" id="TenantProfile_enable_whatsapp" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Whatsapp
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_attendance_approved" type="hidden" value="0" name="TenantProfile[employee_attendance_approved]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_attendance_approved]" id="TenantProfile_employee_attendance_approved" value="1" type="checkbox"/>
                <label class="m-0">Employee Attendance Approval
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_leave_approved" type="hidden" value="0" name="TenantProfile[employee_leave_approved]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_leave_approved]" id="TenantProfile_employee_leave_approved" value="1" type="checkbox"/>
                <label class="m-0">Employee Leave Approval
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_manager_attendance_request" type="hidden" value="0" name="TenantProfile[manager_attendance_request]"/>
                <input title="" class="form-check-input" name="TenantProfile[manager_attendance_request]" id="TenantProfile_manager_attendance_request" value="1" type="checkbox"/>
                <label class="m-0">Manager Attendance Request
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_manager_leave_request" type="hidden" value="0" name="TenantProfile[manager_leave_request]"/>
                <input title="" class="form-check-input" name="TenantProfile[manager_leave_request]" id="TenantProfile_manager_leave_request" value="1" type="checkbox"/>
                <label class="m-0">Manager Leave Request
                                    </label>
            </div>
        </div>
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee clock in reminder
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee confirmation manager
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee probation extension manager
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee confirmation admin
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee probation separation manager
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Manager probation extension admin
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee probation extension admin
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Manager confirmation admin
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee probation separation admin
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Manager probation separation admin
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Manager confirmation workflow trigger
                                    </label>
                                </div>
                            </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee notice board notification
                                    </label>
                                </div>
                            </div> -->
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_continuous_recognition_receiver" type="hidden" value="0" name="TenantProfile[employee_continuous_recognition_receiver]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_continuous_recognition_receiver]" id="TenantProfile_employee_continuous_recognition_receiver" value="1" type="checkbox"/>
                <label class="m-0">Employee recognition receiver
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_nomination_certificate_recognition_receiver" type="hidden" value="0" name="TenantProfile[employee_nomination_certificate_recognition_receiver]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_nomination_certificate_recognition_receiver]" id="TenantProfile_employee_nomination_certificate_recognition_receiver" value="1" type="checkbox"/>
                <label class="m-0">Employee nomination certificate recognition receiver
                                    </label>
            </div>
        </div>
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Employee separation workflow task
                                    </label>
                                </div>
                            </div> -->
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_new_joinee_notification" type="hidden" value="0" name="TenantProfile[employee_new_joinee_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_new_joinee_notification]" id="TenantProfile_employee_new_joinee_notification" value="1" type="checkbox"/>
                <label class="m-0">New joinee notification to team members
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_new_joinee_notification_himself" type="hidden" value="0" name="TenantProfile[employee_new_joinee_notification_himself]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_new_joinee_notification_himself]" id="TenantProfile_employee_new_joinee_notification_himself" value="1" type="checkbox"/>
                <label class="m-0">Employee new joinee notification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_birthday_notification" type="hidden" value="0" name="TenantProfile[employee_birthday_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_birthday_notification]" id="TenantProfile_employee_birthday_notification" value="1" type="checkbox"/>
                <label class="m-0">Employee birthday notification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_email_to_employee_payslip_is_released" type="hidden" value="0" name="TenantProfile[email_to_employee_payslip_is_released]"/>
                <input title="" class="form-check-input" name="TenantProfile[email_to_employee_payslip_is_released]" id="TenantProfile_email_to_employee_payslip_is_released" value="1" type="checkbox"/>
                <label class="m-0">Employee payslip released notification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_email_to_employee_off_cycle_payslip_is_released" type="hidden" value="0" name="TenantProfile[email_to_employee_off_cycle_payslip_is_released]"/>
                <input title="" class="form-check-input" name="TenantProfile[email_to_employee_off_cycle_payslip_is_released]" id="TenantProfile_email_to_employee_off_cycle_payslip_is_released" value="1" type="checkbox"/>
                <label class="m-0">Employee offcycle payslip released notification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_email_to_employee_form_sixteen_is_released" type="hidden" value="0" name="TenantProfile[email_to_employee_form_sixteen_is_released]"/>
                <input title="" class="form-check-input" name="TenantProfile[email_to_employee_form_sixteen_is_released]" id="TenantProfile_email_to_employee_form_sixteen_is_released" value="1" type="checkbox"/>
                <label class="m-0">Employee Form 16 released notification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_notification_for_payroll_document_release" type="hidden" value="0" name="TenantProfile[notification_for_payroll_document_release]"/>
                <input title="" class="form-check-input" name="TenantProfile[notification_for_payroll_document_release]" id="TenantProfile_notification_for_payroll_document_release" value="1" type="checkbox"/>
                <label class="m-0">Employee Payroll Document release notification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_anniversary_notification" type="hidden" value="0" name="TenantProfile[employee_anniversary_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_anniversary_notification]" id="TenantProfile_employee_anniversary_notification" value="1" type="checkbox"/>
                <label class="m-0">Employee anniversary notification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_hr_letter_pinned" type="hidden" value="0" name="TenantProfile[employee_hr_letter_pinned]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_hr_letter_pinned]" id="TenantProfile_employee_hr_letter_pinned" value="1" type="checkbox"/>
                <label class="m-0">Employee hr letter pinned
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_hr_letter_generated" type="hidden" value="0" name="TenantProfile[employee_hr_letter_generated]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_hr_letter_generated]" id="TenantProfile_employee_hr_letter_generated" value="1" type="checkbox"/>
                <label class="m-0">Employee hr letter generated
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_merit_letter" type="hidden" value="0" name="TenantProfile[employee_merit_letter]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_merit_letter]" id="TenantProfile_employee_merit_letter" value="1" type="checkbox"/>
                <label class="m-0">Employee merit letter
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_continuous_recognition_cc" type="hidden" value="0" name="TenantProfile[employee_continuous_recognition_cc]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_continuous_recognition_cc]" id="TenantProfile_employee_continuous_recognition_cc" value="1" type="checkbox"/>
                <label class="m-0">Employee continuous recognition cc
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_manager_continuous_recognition_reportee" type="hidden" value="0" name="TenantProfile[manager_continuous_recognition_reportee]"/>
                <input title="" class="form-check-input" name="TenantProfile[manager_continuous_recognition_reportee]" id="TenantProfile_manager_continuous_recognition_reportee" value="1" type="checkbox"/>
                <label class="m-0">Manager continuous recognition reportee
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_onboarding_initiation_candidate" type="hidden" value="0" name="TenantProfile[onboarding_initiation_candidate]"/>
                <input title="" class="form-check-input" name="TenantProfile[onboarding_initiation_candidate]" id="TenantProfile_onboarding_initiation_candidate" value="1" type="checkbox"/>
                <label class="m-0">Onboarding Initiation - Candidate
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_onboarding_candidate_reminder" type="hidden" value="0" name="TenantProfile[onboarding_candidate_reminder]"/>
                <input title="" class="form-check-input" name="TenantProfile[onboarding_candidate_reminder]" id="TenantProfile_onboarding_candidate_reminder" value="1" type="checkbox"/>
                <label class="m-0">Onboarding - Candidate Reminder
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_onboarding_send_back_to_candidate" type="hidden" value="0" name="TenantProfile[onboarding_send_back_to_candidate]"/>
                <input title="" class="form-check-input" name="TenantProfile[onboarding_send_back_to_candidate]" id="TenantProfile_onboarding_send_back_to_candidate" value="1" type="checkbox"/>
                <label class="m-0">Onboarding - Send Back to Candidate
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_separation_approval_notification" type="hidden" value="0" name="TenantProfile[custom_separation_approval_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_separation_approval_notification]" id="TenantProfile_custom_separation_approval_notification" value="1" type="checkbox"/>
                <label class="m-0">Custom Separation Approval
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_separation_rejection_notification" type="hidden" value="0" name="TenantProfile[custom_separation_rejection_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_separation_rejection_notification]" id="TenantProfile_custom_separation_rejection_notification" value="1" type="checkbox"/>
                <label class="m-0">Custom Separation Rejection
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_confirmation_extension_notification" type="hidden" value="0" name="TenantProfile[custom_confirmation_extension_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_confirmation_extension_notification]" id="TenantProfile_custom_confirmation_extension_notification" value="1" type="checkbox"/>
                <label class="m-0">Custom Confirmation Extension
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_confirmation_approval_notification" type="hidden" value="0" name="TenantProfile[custom_confirmation_approval_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_confirmation_approval_notification]" id="TenantProfile_custom_confirmation_approval_notification" value="1" type="checkbox"/>
                <label class="m-0">Custom Confirmation Approval
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_confirmation_separation_notification" type="hidden" value="0" name="TenantProfile[custom_confirmation_separation_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_confirmation_separation_notification]" id="TenantProfile_custom_confirmation_separation_notification" value="1" type="checkbox"/>
                <label class="m-0">Custom Confirmation Separation                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_contract_extension_notification" type="hidden" value="0" name="TenantProfile[custom_contract_extension_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_contract_extension_notification]" id="TenantProfile_custom_contract_extension_notification" value="1" type="checkbox"/>
                <label class="m-0">Contract Extension
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_contract_closure_notification" type="hidden" value="0" name="TenantProfile[custom_contract_closure_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_contract_closure_notification]" id="TenantProfile_custom_contract_closure_notification" value="1" type="checkbox"/>
                <label class="m-0">Contract End
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_contract_separation_notification" type="hidden" value="0" name="TenantProfile[custom_contract_separation_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_contract_separation_notification]" id="TenantProfile_custom_contract_separation_notification" value="1" type="checkbox"/>
                <label class="m-0">Contract Separation                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_activation_password_notification" type="hidden" value="0" name="TenantProfile[employee_activation_password_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_activation_password_notification]" id="TenantProfile_employee_activation_password_notification" value="1" type="checkbox"/>
                <label class="m-0">Upon Employee Activation
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_employee_password_reset_notification" type="hidden" value="0" name="TenantProfile[employee_password_reset_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[employee_password_reset_notification]" id="TenantProfile_employee_password_reset_notification" value="1" type="checkbox"/>
                <label class="m-0">Employee Password Reset
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_new_reportee_email_notification_to_manager" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][new_reportee_email_notification_to_manager]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][new_reportee_email_notification_to_manager]" id="TenantProfile_whatsapp_notification_templates_new_reportee_email_notification_to_manager" value="1" type="checkbox"/>
                <label class="m-0">A new hire is assigned as Direct Report                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_existing_employee_reportee_email_notification_to_manager" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][existing_employee_reportee_email_notification_to_manager]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][existing_employee_reportee_email_notification_to_manager]" id="TenantProfile_whatsapp_notification_templates_existing_employee_reportee_email_notification_to_manager" value="1" type="checkbox"/>
                <label class="m-0">Notification to Manager when an existing employee is reassigned as Direct Report                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_self_service_change_updated" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][self_service_change_updated]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][self_service_change_updated]" id="TenantProfile_whatsapp_notification_templates_self_service_change_updated" value="1" type="checkbox"/>
                <label class="m-0">Self Service Update                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_self_service_change_updated_without_password" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][self_service_change_updated_without_password]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][self_service_change_updated_without_password]" id="TenantProfile_whatsapp_notification_templates_self_service_change_updated_without_password" value="1" type="checkbox"/>
                <label class="m-0">Self Service Update without Password                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_separation_task_email_employee" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][separation_task_email_employee]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][separation_task_email_employee]" id="TenantProfile_whatsapp_notification_templates_separation_task_email_employee" value="1" type="checkbox"/>
                <label class="m-0">Notification to Employee for Separation Task                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_separation_task_email_taskholder" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][separation_task_email_taskholder]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][separation_task_email_taskholder]" id="TenantProfile_whatsapp_notification_templates_separation_task_email_taskholder" value="1" type="checkbox"/>
                <label class="m-0">Notification to Task Holders for Separation Task                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_separation_workflow_task_assignee_change" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][separation_workflow_task_assignee_change]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][separation_workflow_task_assignee_change]" id="TenantProfile_whatsapp_notification_templates_separation_workflow_task_assignee_change" value="1" type="checkbox"/>
                <label class="m-0">Notification to task holders when separation workflow task is assigned to specific assignee amongst many tasks’ holders                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_notification_to_taskholder_on_expiry_of_alloted_time_for_separation_approval" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][notification_to_taskholder_on_expiry_of_alloted_time_for_separation_approval]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][notification_to_taskholder_on_expiry_of_alloted_time_for_separation_approval]" id="TenantProfile_whatsapp_notification_templates_notification_to_taskholder_on_expiry_of_alloted_time_for_separation_approval" value="1" type="checkbox"/>
                <label class="m-0">Notification to task holder on expiry of the allotted time for separation approval                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_email_to_escalated_users_when_SLA_is_breached" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][email_to_escalated_users_when_SLA_is_breached]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][email_to_escalated_users_when_SLA_is_breached]" id="TenantProfile_whatsapp_notification_templates_email_to_escalated_users_when_SLA_is_breached" value="1" type="checkbox"/>
                <label class="m-0">Notification to Escalated users when SLA is breached in confirmation                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_email_to_manager_before_employee_auto_confirmed" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][email_to_manager_before_employee_auto_confirmed]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][email_to_manager_before_employee_auto_confirmed]" id="TenantProfile_whatsapp_notification_templates_email_to_manager_before_employee_auto_confirmed" value="1" type="checkbox"/>
                <label class="m-0">Notification to Manager Before Employee Gets Auto Confirmed                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_email_to_escalated_users_when_SLA_is_breached_in_contract" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][email_to_escalated_users_when_SLA_is_breached_in_contract]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][email_to_escalated_users_when_SLA_is_breached_in_contract]" id="TenantProfile_whatsapp_notification_templates_email_to_escalated_users_when_SLA_is_breached_in_contract" value="1" type="checkbox"/>
                <label class="m-0">Notification to Escalated Users when Contract Workflow SLA is Breached                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_import_email_to_approver" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][import_email_to_approver]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][import_email_to_approver]" id="TenantProfile_whatsapp_notification_templates_import_email_to_approver" value="1" type="checkbox"/>
                <label class="m-0">Notification to Import approver                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_import_email_to_uploader_once_approved_rejected" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][import_email_to_uploader_once_approved_rejected]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][import_email_to_uploader_once_approved_rejected]" id="TenantProfile_whatsapp_notification_templates_import_email_to_uploader_once_approved_rejected" value="1" type="checkbox"/>
                <label class="m-0">Notification to Import Uploader on Approval/Rejection of Import Request                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_import_email_to_uploader_once_processed" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][import_email_to_uploader_once_processed]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][import_email_to_uploader_once_processed]" id="TenantProfile_whatsapp_notification_templates_import_email_to_uploader_once_processed" value="1" type="checkbox"/>
                <label class="m-0">Notification to Uploader when Import is Processed                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_import_email_to_uploader_incase_failure" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][import_email_to_uploader_incase_failure]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][import_email_to_uploader_incase_failure]" id="TenantProfile_whatsapp_notification_templates_import_email_to_uploader_incase_failure" value="1" type="checkbox"/>
                <label class="m-0">Notification to Import Uploader on Queue / Server failure                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_email_to_approvers_when_changes_are_submitted_for_approval" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][email_to_approvers_when_changes_are_submitted_for_approval]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][email_to_approvers_when_changes_are_submitted_for_approval]" id="TenantProfile_whatsapp_notification_templates_email_to_approvers_when_changes_are_submitted_for_approval" value="1" type="checkbox"/>
                <label class="m-0">Notification to Approvers when Profile Changes are Submitted for Approval                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_email_to_cc_users_when_changes_are_submitted_for_approval" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][email_to_cc_users_when_changes_are_submitted_for_approval]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][email_to_cc_users_when_changes_are_submitted_for_approval]" id="TenantProfile_whatsapp_notification_templates_email_to_cc_users_when_changes_are_submitted_for_approval" value="1" type="checkbox"/>
                <label class="m-0">Notification to Recipient for Profile Update                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_email_to_cc_users_when_approver_takes_action" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][email_to_cc_users_when_approver_takes_action]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][email_to_cc_users_when_approver_takes_action]" id="TenantProfile_whatsapp_notification_templates_email_to_cc_users_when_approver_takes_action" value="1" type="checkbox"/>
                <label class="m-0">Notification to Additional Recipient for Action by Approver on Profile Update                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_profile_update_request_by_employee" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][profile_update_request_by_employee]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][profile_update_request_by_employee]" id="TenantProfile_whatsapp_notification_templates_profile_update_request_by_employee" value="1" type="checkbox"/>
                <label class="m-0">Notification to Employee on Raising Profile Update Request                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_employee_acknowledgement_on_approval_flow_submission_by_assignee" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][employee_acknowledgement_on_approval_flow_submission_by_assignee]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][employee_acknowledgement_on_approval_flow_submission_by_assignee]" id="TenantProfile_whatsapp_notification_templates_employee_acknowledgement_on_approval_flow_submission_by_assignee" value="1" type="checkbox"/>
                <label class="m-0">Notification to Employees on profile update approval/rejection                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_whatsapp_survey_initiation_notification" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][whatsapp_survey_initiation_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][whatsapp_survey_initiation_notification]" id="TenantProfile_whatsapp_notification_templates_whatsapp_survey_initiation_notification" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Survey Initiation Notification                                            </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_whatsapp_notification_templates_whatsapp_survey_remainder_notification" type="hidden" value="0" name="TenantProfile[whatsapp_notification_templates][whatsapp_survey_remainder_notification]"/>
                <input title="" class="form-check-input" name="TenantProfile[whatsapp_notification_templates][whatsapp_survey_remainder_notification]" id="TenantProfile_whatsapp_notification_templates_whatsapp_survey_remainder_notification" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Survey Reminder Notification                                            </label>
            </div>
        </div>
    </div>
</div>
<!-- Onboarding -->
<div class="tab_container clearfix hidden" id="tab_container_10">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <div class="col-md-6">
            <div class="form-group searchable">
                <div class="form-check ptb-0">
                    <input id="ytenable_verification_partner_for_Onboarding" type="hidden" value="0" name="TenantProfile[enable_verification_partner_for_Onboarding]"/>
                    <input title="" class="form-check-input" id="enable_verification_partner_for_Onboarding" name="TenantProfile[enable_verification_partner_for_Onboarding]" value="1" checked="checked" type="checkbox"/>
                    <label class="mt-0">Enable Integration with identity verification partner for Onboarding</label>
                </div>
                <div class=" mt-12 show_verification_partners searchable">
                    <label class="m-0">Select partners</label>
                    <select id="verification_partners" class="form-select dbSelect" multiple="multiple" name="TenantProfile[verification_partners][]">
                        <option value="singpass" selected="selected">Singpass</option>
                        <option value="equal" selected="selected">Equal</option>
                        <option value="trublu" selected="selected">TruBlu</option>
                    </select>
                </div>
                <div class="display-inline-block align-partner-id">
                    <div id="singpass_id" class="col-md-6 hidden partner_id searchable">
                        <label>Singpass Purpose ID</label>
                        <input class="db-input width-100" id="singpass_id_text" name="TenantProfile[singpass_purpose_id]" type="text" value="-111"/>
                    </div>
                    <div id="equal_id" class="col-md-6 hidden partner_id searchable">
                        <label>Equal Partner ID</label>
                        <input class="db-input width-100" id="equal_id_text" name="TenantProfile[equal_partner_id]" type="text" value="equal.business.11bb551c-c9ad-4756-96d7-518f45d07ba4#c5bffa5b-5252-4772-a197-e1754b2617c3"/>
                    </div>
                    <div id="trublu_id" class="col-md-6 hidden partner_id searchable">
                        <label>Trublu Integration Key</label>
                        <input class="db-input width-100" id="trublu_id_text" name="TenantProfile[trublu_integration_key]" type="text" value="65ae57874858693d751cc1b3"/>
                    </div>
                </div>
            </div>
            <div class="form-group searchable">
                <div class="everify-section">
                    <div class="form-check ptb-0">
                        <input id="ytenable_everify_integration" type="hidden" value="0" name="TenantProfile[enable_everify_integration]"/>
                        <input title="" class="reset-input-fields form-check-input" id="enable_everify_integration" name="TenantProfile[enable_everify_integration]" value="1" checked="checked" type="checkbox"/>
                        <label for="enable_everify_integration" class="mt-0">Enable E-Verify Integration</label>
                        <div class="enable_production_everify-radio d-flex searchable">
                            <div class="radio-buttons-everify">
                                <input title="" value="0" class="form-check-input reset-input-fields enable_production_everify" name="TenantProfile[enable_production_everify]" id="TenantProfile_enable_production_everify" checked="checked" type="radio"/>
                                <label for="enable_production_everify" class="m-0">Enable Staging E-Verify</label>
                            </div>
                            <div class="radio-buttons-everify">
                                <input title="" value="1" class="form-check-input reset-input-fields enable_production_everify" name="TenantProfile[enable_production_everify]" id="TenantProfile_enable_production_everify" type="radio"/>
                                <label for="enable_production_everify" class="m-0">Enable Production E-Verify</label>
                            </div>
                        </div>
                    </div>
                    <div class="align-partner-id everify-input-fields searchable">
                        <div id="everify_username" class="col-md-6">
                            <label for="everify_username_text">E-Verify Username *</label>
                            <input class="db-input width-100" id="everify_username_text" name="TenantProfile[everify_username]" type="text" value="LK007008"/>
                        </div>
                        <div id="everify_password" class="col-md-6">
                            <label for="everify_password_text">E-Verify Password *</label>
                            <div class="showpassword">
                                <df class="db-Showpassword show-password"></df>
                                <input class="db-input width-100" id="everify_password_text" value="EDbox$45?" name="TenantProfile[everify_password]" type="password"/>
                            </div>
                        </div>
                        <div id="everify_client_id" class="col-md-6">
                            <label for="everify_client_id_text">Client Company ID</label>
                            <input class="db-input width-100" id="everify_client_id_text" value="2003695" name="TenantProfile[everify_client_id]" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Payroll -->
<div class="tab_container clearfix hidden" id="tab_container_11">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Disable default configurations
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_3" class="sub_tab base-1 font-13 mr-12 p-0">Global Payroll                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_4" class="sub_tab base-1 font-13 mr-12 p-0">Global Category Configuration
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_dont_show_logo_in_payslip" type="hidden" value="0" name="TenantProfile[dont_show_logo_in_payslip]"/>
                <input title="" class="form-check-input" name="TenantProfile[dont_show_logo_in_payslip]" id="TenantProfile_dont_show_logo_in_payslip" value="1" type="checkbox"/>
                <label class="m-0">Dont Show logo in payslip
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_use_minimum_wage" type="hidden" value="0" name="TenantProfile[use_minimum_wage]"/>
                <input title="" class="form-check-input" name="TenantProfile[use_minimum_wage]" id="TenantProfile_use_minimum_wage" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Use Minimum Wage
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_automate_payscale_group" type="hidden" value="0" name="TenantProfile[automate_payscale_group]"/>
                <input title="" class="form-check-input" name="TenantProfile[automate_payscale_group]" id="TenantProfile_automate_payscale_group" value="1" checked="checked" type="checkbox"/>
                <label class="mt-0">Automate Pay scale group based on designation and location
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_component_based_payroll" type="hidden" value="0" name="TenantProfile[enable_component_based_payroll]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_component_based_payroll]" id="TenantProfile_enable_component_based_payroll" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Component Based Payroll                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_components_onboarding_to_payroll" type="hidden" value="0" name="TenantProfile[enable_components_onboarding_to_payroll]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_components_onboarding_to_payroll]" id="TenantProfile_enable_components_onboarding_to_payroll" value="1" checked="checked" type="checkbox"/>
                <label class="mt-0">Enable Component Values flow from Offer letter to Payroll
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_hra_exemption_monthly" type="hidden" value="0" name="TenantProfile[hra_exemption_monthly]"/>
                <input title="" class="form-check-input" name="TenantProfile[hra_exemption_monthly]" id="TenantProfile_hra_exemption_monthly" value="1" type="checkbox"/>
                <label class="mt-0">HRA Exemption Monthly
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_payroll_admin_self_restriction" type="hidden" value="0" name="TenantProfile[enable_payroll_admin_self_restriction]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_payroll_admin_self_restriction]" id="TenantProfile_enable_payroll_admin_self_restriction" value="1" checked="checked" type="checkbox"/>
                <label class="mt-0">Restrict Payroll Admin from changing self Payroll data from imports                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_old_fandf" type="hidden" value="0" name="TenantProfile[old_fandf]"/>
                <input title="" class="form-check-input" name="TenantProfile[old_fandf]" id="TenantProfile_old_fandf" value="1" type="checkbox"/>
                <label class="mt-0">Old Full and Final Settlement
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_payslip_api_allow_deduction_category" type="hidden" value="0" name="TenantProfile[payslip_api_allow_deduction_category]"/>
                <input title="" class="form-check-input" name="TenantProfile[payslip_api_allow_deduction_category]" id="TenantProfile_payslip_api_allow_deduction_category" value="1" checked="checked" type="checkbox"/>
                <label class="mt-0">Enable Deduction Category for Add Payslip API
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_update_pt_lwf_on_location_change" type="hidden" value="0" name="TenantProfile[update_pt_lwf_on_location_change]"/>
                <input title="" class="form-check-input" name="TenantProfile[update_pt_lwf_on_location_change]" id="TenantProfile_update_pt_lwf_on_location_change" value="1" checked="checked" type="checkbox"/>
                <label class="mt-0">Update PT State and LWF State on Location Change
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_allow_sec_10_under_new_regime" type="hidden" value="0" name="TenantProfile[allow_sec_10_under_new_regime]"/>
                <input title="" class="form-check-input enable_sec_10_new_regime" name="TenantProfile[allow_sec_10_under_new_regime]" id="TenantProfile_allow_sec_10_under_new_regime" value="1" type="checkbox"/>
                <label class="mt-0">Allow section 10 under new regime
                                    </label>
            </div>
            <div class="mt-8 hidden enable_sec_10_div">
                <label class="mt-0">Enable for Components
                                    </label>
                <div class="control-group">
                    <div class="controls">
                        <select class="form-select dbSelect" data-placeholder="Enable section 10 Components under new regime " multiple="multiple" id="selected_comps_sec_10_id" name="TenantProfile[sec_10_comp_selected_under_new_regime][]">
                            <option value="children_hostel_allowances_bills">Children Hostel Allowance</option>
                            <option value="children_education_allowance_bills">Children Education Allowance</option>
                            <option value="fuel_allowance_billings">Fuel Allowance</option>
                            <option value="books_and_periodicals_bills">Books and Periodicals Allowance</option>
                            <option value="vehicle_or_car_allowance_bill">Vehicle or Car Allowance</option>
                            <option value="internet_or_data_card_exemption">Internet or Data Card</option>
                            <option value="lta_reimbursement_bills">LTA Reimburesement</option>
                            <option value="driver_allowance_bill">Driver Allowance</option>
                            <option value="helper_allowance_bills">Helper Allowance</option>
                            <option value="driver_reimbursement_exemption">Driver Reimbursement</option>
                            <option value="uniform_or_attire_allowance_bills">Uniform or Attire Allowance</option>
                            <option value="sodexo_exemption">Food Allowance</option>
                            <option value="fuel_allowance_bills">Fuel Reimburesement</option>
                            <option value="mfa_allowance_sec10">MFA Allowance</option>
                            <option value="internet_charges_reimbursement_bills">Internet Charges Reimbursement</option>
                            <option value="child_care_benefits_and_creche_bills">Child Care benefits and Creche</option>
                            <option value="mobile_and_internet_allowance_bills">Mobile and Internet Allowance</option>
                            <option value="vehicle_maintenance_allowance_bills">Vehicle Maintenance Allowance</option>
                            <option value="vehicle_reimbursement_bills">Vehicle Reimbursement</option>
                            <option value="vehicle_maintenance_reimburesement_bills">Vehicle Maintenance Reimburesement</option>
                            <option value="telephone_and_internet_reimbursement_exemption">Telephone and Internet Reimbursement</option>
                            <option value="car_maintenance_reimbursement_exemption">Car Maintenance Reimbursement</option>
                            <option value="health_club_facility_reimbursement_exemption">Health Club Facility Reimbursement</option>
                            <option value="telephone_reimbursement_exemption">Telephone Reimbursement</option>
                            <option value="city_compensation_allowance_bills">City Compensation Allowance</option>
                            <option value="telephone_bills">Telephone Allowance</option>
                            <option value="gym_and_club_membership_exemption">Gym and Club Membership</option>
                            <option value="attire_allowance_bills">Attire Allowance</option>
                            <option value="academic/_training_allowance_bills">Academic And Training Allowance</option>
                            <option value="laptop_and_mobile_bills">Laptop and Mobile</option>
                            <option value="education_allowance_bills">Education Allowance</option>
                            <option value="food_coupon_bills">Food Coupons R</option>
                            <option value="driver_salary_receipts">Driver Salary R</option>
                            <option value="fuel_and_maintenance_bills">Fuel And Maintenance R</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_autofill_80TT" type="hidden" value="0" name="TenantProfile[autofill_80TT]"/>
                <input title="" class="form-check-input enable_80TT" name="TenantProfile[autofill_80TT]" id="TenantProfile_autofill_80TT" value="1" checked="checked" type="checkbox"/>
                <label class="mt-0">
                    Allow 80TT autoflow 
                    <a href="javascript:void('0')" class="custom_tooltip" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<p class='base-2 font-13 mb-0'>The Interest on saving account amount will flow to respective 80TT section based on eligibility once declaration submitted in IT/POI</p>" data-bs-original-title="" title="">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
            <div class="col-md-12 mt-8 pl-0 hidden enable_80TT_div">
                <label class="reg-header">Enable for Group Companies</label>
                <div class="control-group">
                    <div class="controls">
                        <select class="form-select dbSelect" data-placeholder="Select Group Companies " multiple="multiple" id="selected_comps_80TT_id" name="TenantProfile[autofill_80TT_enabled_companies][]">
                            <option value="main">Value Kraft</option>
                            <option value="a62d17d61781a0">Mahindra Logistics</option>
                            <option value="a62d7a087cc070">Cpd2</option>
                            <option value="a62d7a0af8acac">Cpd3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <label for="TenantProfile_disable_loans_module_for_companies">Disable Loans Module for Following Group Firm</label>
            <select class="chzn-select db-input width-100 form-select dbSelect db-chosen" data-placeholder="Select Group Companies" multiple="multiple" name="TenantProfile[disable_loans_module_for_companies][]" id="TenantProfile_disable_loans_module_for_companies">
                <option value="main">Value Kraft</option>
                <option value="a62d17d61781a0">Mahindra Logistics</option>
                <option value="a62d7a087cc070">Cpd2</option>
                <option value="a62d7a0af8acac">Cpd3</option>
            </select>
        </div>
        <div class="form-group col-md-6 searchable disable_ignore_att_setting " data-field="ignore-attendance-sync-before">
            <label class="form-check-label d-flex align-items-center gap-2">
                <input id="ytTenantProfile_ignore_att" type="hidden" value="0" name="TenantProfile[ignore_att]"/>
                <input title="" class="form-check-input" name="TenantProfile[ignore_att]" id="TenantProfile_ignore_att" value="1" checked="checked" type="checkbox"/>
                Ignore Attendance Sync Before 
                                    <input class="db-input" name="TenantProfile[ignore_att_month]" id="TenantProfile_ignore_att_month" type="text" value="2025-04"/>
                <a href="javascript:void('0')" class="custom_tooltip" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<p class='base-2 font-13 mb-0'>Attendance before the selected month will not be synced. This is a one-time setting, so choose the correct month carefully</p>" data-bs-original-title="" title="">
                    <df class="db-Infromation"></df>
                </a>
            </label>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_process_gratuity_individually" type="hidden" value="0" name="TenantProfile[process_gratuity_individually]"/>
                <input title="" class="form-check-input" name="TenantProfile[process_gratuity_individually]" id="TenantProfile_process_gratuity_individually" value="1" checked="checked" type="checkbox"/>
                <label for="TenantProfile_process_gratuity_individually">Allow Gratuity Settlement Independently</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_group_company_from_gratuity" type="hidden" value="0" name="TenantProfile[disable_group_company_from_gratuity]"/>
                <input title="" class="form-check-input chck_enable_element_gratuity" name="TenantProfile[disable_group_company_from_gratuity]" id="TenantProfile_disable_group_company_from_gratuity" value="1" checked="checked" type="checkbox"/>
                <label class="mt-0">Exclude Group Firm from Gratuity Applicability                                    </label>
            </div>
            <div class="col-md-12 mt-8 pl-0 hidden enable_div_element_gratuity">
                <label class="reg-header">Enable for group companies</label>
                <div class="control-group">
                    <div class="controls">
                        <select class="form-select dbSelect" data-placeholder="Select group companies " multiple="multiple" id="disable_gratuity_for_this_companies" name="TenantProfile[disable_gratuity_for_this_companies][]">
                            <option value="main" selected="selected">Value Kraft</option>
                            <option value="a62d17d61781a0">Mahindra Logistics</option>
                            <option value="a62d7a087cc070">Cpd2</option>
                            <option value="a62d7a0af8acac">Cpd3</option>
                            <option value="a62d7a0d449fd8">Cpd4</option>
                            <option value="a62d7a0f7147cf" selected="selected">Cpd5</option>
                            <option value="a63029c86663c2">Jhansi Group Company</option>
                            <option value="a63207ac25a317">Instance8_UAT_QC_5</option>
                            <option value="a63208099ce88f">Group company new</option>
                            <option value="a635792b4c3435">BH Group level 234</option>
                            <option value="a6374aa9f90fc3">Mobile company</option>
                            <option value="a63778ab2b0174">yashu1</option>
                            <option value="a639b206fd9923">Satya industries</option>
                            <option value="a63da11cc76156">Ankur Group Company 1234565</option>
                            <option value="a63e2494a35212">SampleGroupName534</option>
                            <option value="a63e249e39bee5">SampleGroupName72</option>
                            <option value="a63e24a7b68718">SampleGroupName18</option>
                            <option value="a63e24b8db3f01">SampleGroupName592</option>
                            <option value="a63e24c13ac467">SampleGroupName538</option>
                            <option value="a63e252935344a">checkDepartcompany184</option>
                            <option value="a63e25659be3ec">checkDepartcompany501</option>
                            <option value="a63e2572b36ea7">checkDepartcompany433</option>
                            <option value="a63e25836a5a65">checkDepartcompany29</option>
                            <option value="a63e258fe68aa4">checkDepartcompany72</option>
                            <option value="a63e25b10f3121">checkDepartcompany488</option>
                            <option value="a63e292f51c4d8">checkDepartcompany468</option>
                            <option value="a63e29c977e8fa">checkDepartcompany720</option>
                            <option value="a63e29d4832fce">SampleGroupName349</option>
                            <option value="a63e29ee6279f1">checkDepartcompany669</option>
                            <option value="a63e548f278d9c">checkDepartcompany462</option>
                            <option value="a63e5de25394db">checkDepartcompany476</option>
                            <option value="a63e654c383d06">checkDepartcompany913</option>
                            <option value="a63e662095d665">checkDepartcompany213</option>
                            <option value="a63e662b746f45">SampleGroupName109</option>
                            <option value="a63e664aad1872">checkDepartcompany340</option>
                            <option value="a641815959d2ef">OK</option>
                            <option value="a64437b76649b9">123Priyal audit test gc</option>
                            <option value="a644ab26ba8f20">&quot;Shaiwal Mobile Organisation Pvt Ltd &quot;&quot;&quot;</option>
                            <option value="a6457c280d8181">Snehasis1</option>
                            <option value="a6458c5940a6ea">snehasis 2</option>
                            <option value="a6465f158e0376">Hogwarts</option>
                            <option value="a64783ecaa18cb">Mobile newform  test company</option>
                            <option value="a64b7bbd353743">Instance8_UAT_QC_4</option>
                            <option value="a64c08f4a0083c">Create Group Company New</option>
                            <option value="a64c08f88730b5">Create Group Company New One</option>
                            <option value="a64e42f989558c">GC1234</option>
                            <option value="a64f4d21010850">digest</option>
                            <option value="a6549ee937ca20">cmp 07 name</option>
                            <option value="a654a0b466791f">Darwin1</option>
                            <option value="a654b52f0eb5c8">Vikas_GC</option>
                            <option value="a655da4677d8ae">Instance8_UAT_QC_3</option>
                            <option value="a657ada078abe3">VNA-Company</option>
                            <option value="a65829b0f7b6bc">Pay Group Testing Private Limited (DO NOT USE EMPLOYEES)</option>
                            <option value="a65c0d04e29dee">JSW Test</option>
                            <option value="a65c1abf464670">Sembcorp Industries</option>
                            <option value="a65dc25c4afe5f">NSA1</option>
                            <option value="a65dda473646bb">Testing_HK</option>
                            <option value="a65e07f44897fb">JD Creator</option>
                            <option value="a660c0148f0c36">Thai Org</option>
                            <option value="a6640d05687dbd">bsrd_groupcompany</option>
                            <option value="a6642e29cb9525">Srikanth_group_company</option>
                            <option value="a664488a053bf9">Automation Group company</option>
                            <option value="a66448e18a222f">nsa test</option>
                            <option value="a666159c1cd816">Barfee GR</option>
                            <option value="a666435dfe3412">Darwinbox</option>
                            <option value="a66700327af587">db2215 Newgen Tech</option>
                            <option value="a667bc44e1a9ca">Supercell Technologies Private Limited</option>
                            <option value="a668295f50985a">Test neo</option>
                            <option value="a669de64b924c8">DarwinBoxTest</option>
                            <option value="a669e014c660b3">The Ragged Flagon</option>
                            <option value="a669e2d62c36c4">DBoxTop</option>
                            <option value="a669e4eed2d086">audit-1</option>
                            <option value="a669f37f4ab7a3">ITC</option>
                            <option value="a669f3e0cacd2a">Monk Distilleries</option>
                            <option value="a669f5f8d3b24e">Skyrim</option>
                            <option value="a669f72d87022c">New Group Company 8.1</option>
                            <option value="a66a08c23c20f2">Sri Company</option>
                            <option value="a66a0b7c602931">Pixar</option>
                            <option value="a66a1f7f0a1792">Pinelabs</option>
                            <option value="a66a1f85b521e1">Qwikcilver</option>
                            <option value="a66a34004ea179">Group_H</option>
                            <option value="a66a347a9560c6">SAAS Test</option>
                            <option value="a66a730b1960f9">DB1843 Barfee GR</option>
                            <option value="a66a9b4a8e066b">Veda</option>
                            <option value="a66b8348816896">Shivaay</option>
                            <option value="a66c71360da5b0">Om Jaju</option>
                            <option value="a66cc3752ca27e">Venky Group Company</option>
                            <option value="a66e7d28e83d1e">Yashwanth Group Company</option>
                            <option value="a670693d6745c5">delete</option>
                            <option value="a671318f2080a7">PAYROLL CORP LTD</option>
                            <option value="a6715f6b89f1cc">Real Madrid FC</option>
                            <option value="a672313121631e">cpcompany</option>
                            <option value="a672315b5e092a">Trackion</option>
                            <option value="a6723313d73f7e">Uniq Star Tech</option>
                            <option value="a6728a2b89e37a">SAAS Solutions</option>
                            <option value="a67309f3d828e5">Abhishek0001</option>
                            <option value="a6733301aa1607">Darwinbox Belgium</option>
                            <option value="a67370d1ab8b2b">Digit General Insurance</option>
                            <option value="a673734cc0546f">ACME Corp group</option>
                            <option value="a673f0cff7ae8b">Meher Group (P) Ltd.</option>
                            <option value="a673f1d935b91f">check report filter</option>
                            <option value="a6743fa84e1950">Darwinbox - New</option>
                            <option value="a674ed3c32da3d">Dogue Tech</option>
                            <option value="a6752b6873b8e0">United Arab Emirates</option>
                            <option value="a6752b84c632bf">Oman</option>
                            <option value="a676049323a46e">CRISIL</option>
                            <option value="a677678657afb2">United Kingdom</option>
                            <option value="a6778ed029a1f1">Visteon Brazil Test</option>
                            <option value="a677d087466c61">Skoda</option>
                            <option value="a67820405ee61d">PAYROLL CORP LTD</option>
                            <option value="a678353ee150c4">GreenLeaf Innovations</option>
                            <option value="a6784adff09384">Shruti Group Company</option>
                            <option value="a6789faafdd0ca">SuperAdminTest</option>
                            <option value="a67974cc2e1914">Product management Payroll</option>
                            <option value="a679cb439acc34">CK Group</option>
                            <option value="a67a59d944b3c4">grp check1</option>
                            <option value="a67a5a4c76326e">instance8</option>
                            <option value="a67a5ba6d614d0">Breather Space</option>
                            <option value="a67add92813b21">intercompanytransfer</option>
                            <option value="a67af25ac5d800">Jindal Stainless Steel Limited</option>
                            <option value="a67af261f33bca">Chromeni Steels Limited</option>
                            <option value="a67af26609246a">Jindal Ferrous Limited</option>
                            <option value="a67af269a9dcb3">Jindal Stainless Steelway Limited</option>
                            <option value="a67c7d3e232333">Blue Bank Ltd</option>
                            <option value="a67d2bac0d50f0">Zenith Wealth Ltd</option>
                            <option value="a67d640db4feba">DBoxRk</option>
                            <option value="a67d682d6212a1">Group_Company_GC</option>
                            <option value="a67d9535f9383c">Pritchett &#039;s Closet and Blinds</option>
                            <option value="a67f9f6133fd87">Group_CompanyAb</option>
                            <option value="a67fa3e44b5fda">test loc grp company</option>
                            <option value="a67fe21fe40d85">DB2490_Newgen Tech</option>
                            <option value="a67ff59edf0a4c">DarwinBoxRK</option>
                            <option value="a67ff885c4a46a">UAE Testing</option>
                            <option value="a680728699fbf9">coremodule</option>
                            <option value="a68091ea9b07e6">Dummy</option>
                            <option value="a6809df03340de">Solar X</option>
                            <option value="a6824844b5f7a3">Olive Value Tech</option>
                            <option value="a68354350e52c6">PR Talent Demo</option>
                            <option value="a68359969801cd">Patsy &#039;s Pies</option>
                            <option value="a6858272504406">MinMax Info Tech</option>
                            <option value="a6867a2655c23b">Swift Cart E Commerce</option>
                            <option value="a6871ff6fa147a">GC_Name_ABC</option>
                            <option value="a687216c203e4b">Philippiness Group Company</option>
                            <option value="a68723f7da882e">9.1 Test</option>
                            <option value="a6872404cd777e">DRL_Company_MN</option>
                            <option value="a6875ee5e6911c">PAYROLL_INDIA_GC_DND</option>
                            <option value="a6875ef4f516c1">PHP_PAYROLL_GC_DND</option>
                            <option value="a6875ef8a0560d">THAI_PAYROLL_GC_AUTOMATION</option>
                            <option value="a68774af3271da">Release 9.1 Test</option>
                            <option value="a688893c264216">Supercell</option>
                            <option value="a688894991f65c">Supercell Technologies Pvt Ltd</option>
                            <option value="a688b2669a1af4">Darwinbox demo</option>
                            <option value="a6894a0a0cdf09">ชื่อบริษัท</option>
                            <option value="a68bd3c6649bd6">Sarika Dbox PVT LTD</option>
                            <option value="a68bfc13e069a1">Test Group Company</option>
                            <option value="a68bfc1b6274df">Test Education</option>
                            <option value="a68bfc27cd5304">Test Manufacturing</option>
                            <option value="a68bfc316c39e1">Novotel Private limited</option>
                            <option value="a68cd31b7da98d">MAL</option>
                            <option value="a68d1104701e66">1234 Group Company</option>
                            <option value="a68d393b07d423">Darwin India</option>
                            <option value="a68db86e8a0ecd">Darwin Singapore</option>
                            <option value="a68ea08dcb4f22">ffghg_Name</option>
                            <option value="a68ef7abf98f08">Test Company 1</option>
                            <option value="a68ef81f7ac1cd">Tester111</option>
                            <option value="a68f08f692fec3">Pallavi Group_Company</option>
                            <option value="a68f9bd856d791">Union Bank</option>
                            <option value="a6902ffcf966db">Time Management</option>
                            <option value="a6904a4d8b6c33">Carsome</option>
                            <option value="a691459d1a2527179913329">DB2337_Newgentech Tech</option>
                            <option value="a691ac7fcbe137475946157">SNH Company</option>
                            <option value="a695b59049551a554997408">Karun Incorporated</option>
                            <option value="a695cbb1e93798959355680">DB2757_NewGen Tech</option>
                            <option value="a695cc0e0692e8250338016">DB2757_Valuekraft Inc.</option>
                            <option value="a696cb4407dcdf211731301">Gr_Company_P</option>
                            <option value="a696d9a5b21d96955342950">Malay Grp Corp</option>
                            <option value="a696d9a9765204566914400">Burundi Group Corp</option>
                            <option value="a696d9abd66270273745810">Egypt Grp Corp</option>
                            <option value="a696d9af79f8af468492431">Chile Grp Corp</option>
                            <option value="a696f2418c9629746661397">Pearson Specter Litt</option>
                            <option value="a6971c3dc608a1663875246">D_122272_Newgen Tech</option>
                            <option value="a69730f00800da305987250">NewGen Tech</option>
                            <option value="a697ad3cb3bca1129448137">2751_Newgen Tech</option>
                            <option value="a697ad6f668b4c585007418">2735_Newgen Tech</option>
                            <option value="a697b088ab4009545255916">DB2754_Newgen Tech</option>
                            <option value="a697b35a244b53302969299">Arvind Ltd</option>
                            <option value="a697b3c2c82362417300956">Eris</option>
                            <option value="a697b3d81bca40682771297">DB1342</option>
                            <option value="a697b4276cd327201185896">new company</option>
                            <option value="a697c8545a4eda718761873">Cultfit</option>
                            <option value="a6981accfb7491113199323">J Company</option>
                            <option value="a69822f1c24b06555814420">Plantu</option>
                            <option value="a69858307bbb29778403569">Best Burgers Inc_Test</option>
                            <option value="a6985b911e9c40428907717">Green Entertainment ltd.</option>
                            <option value="a6989a64e1b8b4547375795">Stratton Oakmont</option>
                            <option value="a698a3c02bd0f9158404554">Glaxo D1</option>
                            <option value="a698ac8ec65ae5390354438">UAE TEST</option>
                            <option value="a698afd3e9da20423174119">Telegram</option>
                            <option value="a698c26b0c0b09694572960">DB2746_Newgen Tech</option>
                            <option value="a698c4e2b1479d781687247">DB1613_DGT_Enterprises</option>
                            <option value="a698d842cdd3ba653312089">Thomson Medical Pte Ltd</option>
                            <option value="a698e21c30fd52161721739">AM_GC</option>
                            <option value="a698f2133b62b3387815436">23AWD</option>
                            <option value="a6990cbae3223c336215525">Avengers Ltd</option>
                            <option value="a69930b7fe0222686982665">Cellera</option>
                            <option value="a6993322793597805692630">Glaxo D2</option>
                            <option value="a6993fb99df2c5334704559">1005_BUSINESS UNIT</option>
                            <option value="a6996ac4269954836930248">Eternal Pvt Ltd</option>
                            <option value="a69990128767ce118172507">UA_Group Company</option>
                            <option value="a699dc5c5d2ac6686996902">Guh</option>
                            <option value="a69aec21f89100173654604">starpatrick</option>
                            <option value="a69afe316ca0c9193749710">JG Test</option>
                            <option value="a69b042ca7833a595627710">APAC Region</option>
                            <option value="a69b3fa8724236319423399">Utelly Limited</option>
                            <option value="a69b3fa9ad1904492685085">Synamedia Vividtec Holdings, Inc.</option>
                            <option value="a69b3fab752d08300682961">Synamedia Limited</option>
                            <option value="a69b3facfce18c004382260">Synamedia Technologies France SAS</option>
                            <option value="a69b3fae40d7ed426725784">Synamedia Asia Private Limited Hong Kong Branch (Hong Kong Branch of Singapore Entity)</option>
                            <option value="a69b3fafdbf6cc826653979">Synamedia India Private Limited (India)</option>
                            <option value="a69b3fb3cb946c575972797">Beijing NDS Information Technology Co., Ltd (China)</option>
                            <option value="a69b3fb4ea2856696602268">Synamedia Technologies Israel Ltd (Israel)</option>
                            <option value="a69b3fb61a353b624580077">Synamedia Asia Private Limited (Singapore)</option>
                            <option value="a69b3fb76ef45e481058358">Synamedia Asia Private Limited Australia Branch (Australian Branch of Singapore Entity)</option>
                            <option value="a69b3fb89955c4091623563">Synamedia Vividtec Canada ULC (Canada)</option>
                            <option value="a69b3fb9ce809b827995032">Synamedia Americas LLC</option>
                            <option value="a69b3fbac7eae7630147576">Synamedia Canada ULC</option>
                            <option value="a69b3fbbfb3a23456747839">Synamedia Vividtec Europe BVBA (Belgium)</option>
                            <option value="a69b3fbd3d166e119825430">Quortex S.A.S.</option>
                            <option value="a69c0d917954f2188143415">UAE TEST1</option>
                            <option value="a69c0dc158e3ef950195930">PATRA PHILIPPINES, LLC.</option>
                            <option value="a69c0dd3c34bca620909140">OBEN Group</option>
                            <option value="a69c0dd81d2f45061451876">BSA Solutions Outsourcing Inc.</option>
                            <option value="a69c0de5246d4e001878298">UAE Test 3</option>
                            <option value="a69c2bf10da9e2259148341">Oman Group Company</option>
                            <option value="a69c2bf224fb62631373478">Kuwait Group Company</option>
                            <option value="a69c2bf336e02c511596514">Bahrain Group company</option>
                            <option value="a69c39cd87a590328445459">XX_Newgen Tech</option>
                            <option value="a69c3dde9adde0319296052">Innate MAL</option>
                            <option value="a69c3e9834c663997620788">Hardcastle Restaurants Pvt Ltd.</option>
                            <option value="a69ca167ee9fb6288511919">Varka Tech Solutions</option>
                            <option value="a69ce2afadb06f038069213"># Sharvi Roko Pvt. Ltd.</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytnew_arrears_calculation" type="hidden" value="0" name="TenantProfile[new_arrears_calculation]"/>
                <input class="form-check-input" id="new_arrears_calculation" name="TenantProfile[new_arrears_calculation]" value="1" checked="checked" type="checkbox"/>
                <label class="m-0" for="TenantProfile_Enable_New_Arrears_Calculation_for_India">Enable  New  Arrears  Calculation For  India</label>
            </div>
        </div>
        <div class="form-group col-md-12 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_compport_trs" type="hidden" value="0" name="TenantProfile[enable_compport_trs]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_compport_trs]" id="TenantProfile_enable_compport_trs" value="1" type="checkbox"/>
                <label class="m-0">Enable Compport TRS
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable opacity-0" id="compport_base_url">
            <label class="mt-0 d-flex">Compport Base URL                                </label>
            <input name="TenantProfile[compport_base_url]" class="db-input width-100" value="https://www.google.co.in"/>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_tenant_effective_dated_fields" type="hidden" value="0" name="TenantProfile[tenant_effective_dated_fields]"/>
                <input title="" class="form-check-input" name="TenantProfile[tenant_effective_dated_fields]" id="TenantProfile_tenant_effective_dated_fields" value="1" type="checkbox"/>
                <label class="m-0">Tenant Level Fields Effective Dated (Currently used only for LOGO in Payroll Payslips)                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_cleartax_integration" type="hidden" value="0" name="TenantProfile[cleartax_integration]"/>
                <input title="" class="form-check-input" name="TenantProfile[cleartax_integration]" id="TenantProfile_cleartax_integration" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">ClearTax Integration
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_tax2win_integration" type="hidden" value="0" name="TenantProfile[tax2win_integration]"/>
                <input title="" class="form-check-input" name="TenantProfile[tax2win_integration]" id="TenantProfile_tax2win_integration" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Tax2win Integration
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="3">
        <div class="form-group col-md-6 searchable">
            <label class="mt-0">Statutory Wage Access Users</label>
            <input type="hidden" name="TenantProfile[statutory_wage_users]" id="statutory_wage_users_dummy" value="391801,,417481,472775,38533,567294,579729,428897,231071,428939,546763,39891,"/>
            <input id="statutory_wage_users" size="50" name="statutory_wage_users" value="Emanual ere Reeves ere (PYRL865),Darwinbox Admin (emp_16),PHP109 PAY109 (EMP442),Habeeba 1 AutoTest (Main424),Taylor Lee (S1007),Harikrishna B (ABC0015),Ale Ale (YO65),Payroll QA Test (QA_1),Testing  Recu (YO66) (POS213),Beacon Admin (set1383),Ankur567 Rai567 (A3602)" style="width:400px;">
        </div>
        <div class="form-group col-md-6 searchable">
            <label class="m-0">Leave Encashment Amount Rounding</label>
            <select class="form-select dbSelect" id="le_rounding" name="TenantProfile[le_rounding]">
                <option value="1">To Two Digits</option>
                <option value="2">Nearest Integer</option>
                <option value="3">Lower Integer</option>
                <option value="4">Highest Integer</option>
                <option value="9">Nearest Twelve</option>
                <option value="10">Nearest Hundred</option>
                <option value="8">Nearest Thousand</option>
                <option value="11" selected="selected">Upto 2 Decimals</option>
                <option value="12">Upto 3 Decimals</option>
                <option value="13">Ceiling</option>
            </select>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Consider Working Hours for Salary Processing based on</label>
            <br/>
            <div class="form-check-inline">
                <input title="" value="1" id="payroll_working_hours" class="dept_grp_company form-check-input" name="TenantProfile[payroll_working_hours]" type="radio"/>
                <label class="m-0">Shift Working Hours
                                    </label>
            </div>
            <div class="form-check-inline">
                <input title="" value="2" id="payroll_working_hours" class="dept_grp_company form-check-input" name="TenantProfile[payroll_working_hours]" checked="checked" type="radio"/>
                <label class="m-0">Total Working Hours
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Mid Cycle Revision Payout Value</label>
            <br/>
            <div class="form-check-inline">
                <input title="" value="1" id="prorate_payout_value" class="dept_grp_company form-check-input" name="TenantProfile[prorate_payout_value]" checked="checked" type="radio"/>
                <label class="m-0">Prorate
                                    </label>
            </div>
            <div class="form-check-inline">
                <input title="" value="0" id="prorate_payout_value" class="dept_grp_company form-check-input" name="TenantProfile[prorate_payout_value]" type="radio"/>
                <label class="m-0">Ignore
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytenable_global_payroll" disabled="disabled" type="hidden" value="0" name="TenantProfile[enable_global_payroll]"/>
                <input class="form-check-input" disabled="disabled" id="enable_global_payroll" name="TenantProfile[enable_global_payroll]" value="1" checked="checked" type="checkbox"/>
                <label class="m-0" for="TenantProfile_Enable_Global_Payroll">Enable  Global  Payroll</label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="4">
        <button type="button" onclick="$('#global_categories_modal').get(0).openModal()" class="db-btn btn-secondary">Change Global Categories Alias</button>
        <dbx-modal id="global_categories_modal" show-close-button="true" main-text="Global Categories and Sub Categories">
            <table class="table global-category-table dataTable no-footer pt-3">
                <thead class="table-light">
                    <tr>
                        <th>Global Category</th>
                        <th>Category Alias</th>
                        <th>Global Sub-Category</th>
                        <th>Sub-Category Alias</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Absence</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Absence" name="SalCompGlobalCategory[absence][alias]" id="SalCompGlobalCategory_absence_alias"/>
                        </td>
                        <td>Long Term Leaves</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Long Term Leaves" name="SalCompGlobalCategory[absence][sub_categories][gsc_long_term_leaves][alias]" id="SalCompGlobalCategory_absence_sub_categories_gsc_long_term_leaves_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Absence</td>
                        <td>Absence</td>
                        <td>Paid Leave</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Paid Leave" name="SalCompGlobalCategory[absence][sub_categories][gsc_paid_leave][alias]" id="SalCompGlobalCategory_absence_sub_categories_gsc_paid_leave_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Absence</td>
                        <td>Absence</td>
                        <td>Short Term Leaves</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Short Term Leaves" name="SalCompGlobalCategory[absence][sub_categories][gsc_short_term_leaves][alias]" id="SalCompGlobalCategory_absence_sub_categories_gsc_short_term_leaves_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Absence</td>
                        <td>Absence</td>
                        <td>Unpaid Leave</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Unpaid Leave" name="SalCompGlobalCategory[absence][sub_categories][gsc_unpaid_leave][alias]" id="SalCompGlobalCategory_absence_sub_categories_gsc_unpaid_leave_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Accruals</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Accruals" name="SalCompGlobalCategory[accruals][alias]" id="SalCompGlobalCategory_accruals_alias"/>
                        </td>
                        <td>Leave Accruals</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Leave Accruals" name="SalCompGlobalCategory[accruals][sub_categories][gsc_leave_accruals][alias]" id="SalCompGlobalCategory_accruals_sub_categories_gsc_leave_accruals_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Accruals</td>
                        <td>Accruals</td>
                        <td>Other Accruals</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Other Accruals" name="SalCompGlobalCategory[accruals][sub_categories][gsc_other_accruals][alias]" id="SalCompGlobalCategory_accruals_sub_categories_gsc_other_accruals_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Attendance & Rates</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Attendance &amp; Rates" name="SalCompGlobalCategory[attendance_n_rates][alias]" id="SalCompGlobalCategory_attendance_n_rates_alias"/>
                        </td>
                        <td>Loss of Pay / Reversal Days</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Loss of Pay / Reversal Days" name="SalCompGlobalCategory[attendance_n_rates][sub_categories][gsc_loss_of_pay_reversal_days][alias]" id="SalCompGlobalCategory_attendance_n_rates_sub_categories_gsc_loss_of_pay_reversal_days_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Attendance & Rates</td>
                        <td>Attendance & Rates</td>
                        <td>On Call Days</td>
                        <td>
                            <input class="db-input form-control" type="text" value="On Call Days" name="SalCompGlobalCategory[attendance_n_rates][sub_categories][gsc_on_call_days][alias]" id="SalCompGlobalCategory_attendance_n_rates_sub_categories_gsc_on_call_days_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Attendance & Rates</td>
                        <td>Attendance & Rates</td>
                        <td>Others Attendance Days/Hours</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Others Attendance Days/Hours" name="SalCompGlobalCategory[attendance_n_rates][sub_categories][gsc_others_attendance_days_hours][alias]" id="SalCompGlobalCategory_attendance_n_rates_sub_categories_gsc_others_attendance_days_hours_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Attendance & Rates</td>
                        <td>Attendance & Rates</td>
                        <td>Overtime Hours</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Overtime Hours" name="SalCompGlobalCategory[attendance_n_rates][sub_categories][gsc_overtime_hours][alias]" id="SalCompGlobalCategory_attendance_n_rates_sub_categories_gsc_overtime_hours_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Attendance & Rates</td>
                        <td>Attendance & Rates</td>
                        <td>Shift Hours</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Shift Hours" name="SalCompGlobalCategory[attendance_n_rates][sub_categories][gsc_shift_hours][alias]" id="SalCompGlobalCategory_attendance_n_rates_sub_categories_gsc_shift_hours_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deductions</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Deductions" name="SalCompGlobalCategory[deductions][alias]" id="SalCompGlobalCategory_deductions_alias"/>
                        </td>
                        <td>Deduction Benefit in Kind</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Deduction Benefit in Kind" name="SalCompGlobalCategory[deductions][sub_categories][gsc_deduction_benefit_in_kind][alias]" id="SalCompGlobalCategory_deductions_sub_categories_gsc_deduction_benefit_in_kind_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deductions</td>
                        <td>Deductions</td>
                        <td>Deduction RSU Vesting</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Deduction RSU Vesting" name="SalCompGlobalCategory[deductions][sub_categories][gsc_deduction_rsu_vesting][alias]" id="SalCompGlobalCategory_deductions_sub_categories_gsc_deduction_rsu_vesting_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deductions</td>
                        <td>Deductions</td>
                        <td>Exit Recoveries</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Exit Recoveries" name="SalCompGlobalCategory[deductions][sub_categories][gsc_exit_recoveries][alias]" id="SalCompGlobalCategory_deductions_sub_categories_gsc_exit_recoveries_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deductions</td>
                        <td>Deductions</td>
                        <td>Loans & Advances</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Loans &amp; Advances" name="SalCompGlobalCategory[deductions][sub_categories][gsc_loans_n_advances][alias]" id="SalCompGlobalCategory_deductions_sub_categories_gsc_loans_n_advances_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deductions</td>
                        <td>Deductions</td>
                        <td>One Time Deductions</td>
                        <td>
                            <input class="db-input form-control" type="text" value="One Time Deductions" name="SalCompGlobalCategory[deductions][sub_categories][gsc_one_time_deductions][alias]" id="SalCompGlobalCategory_deductions_sub_categories_gsc_one_time_deductions_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deductions</td>
                        <td>Deductions</td>
                        <td>Other Deductions</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Other Deductions" name="SalCompGlobalCategory[deductions][sub_categories][gsc_other_deductions][alias]" id="SalCompGlobalCategory_deductions_sub_categories_gsc_other_deductions_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deductions</td>
                        <td>Deductions</td>
                        <td>Recurring Deduction</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Recurring Deduction" name="SalCompGlobalCategory[deductions][sub_categories][gsc_recurring_deduction][alias]" id="SalCompGlobalCategory_deductions_sub_categories_gsc_recurring_deduction_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Earnings" name="SalCompGlobalCategory[earnings][alias]" id="SalCompGlobalCategory_earnings_alias"/>
                        </td>
                        <td>Allowances</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Allowances" name="SalCompGlobalCategory[earnings][sub_categories][gsc_allowances][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_allowances_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Awards & Bonus</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Awards &amp; Bonus" name="SalCompGlobalCategory[earnings][sub_categories][gsc_awards_n_bonus][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_awards_n_bonus_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Basic Salary</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Basic Salary" name="SalCompGlobalCategory[earnings][sub_categories][gsc_basic_salary][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_basic_salary_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Benefits</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Benefits" name="SalCompGlobalCategory[earnings][sub_categories][gsc_benefits][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_benefits_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Commissions</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Commissions" name="SalCompGlobalCategory[earnings][sub_categories][gsc_commissions][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_commissions_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Compensation</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Compensation" name="SalCompGlobalCategory[earnings][sub_categories][gsc_compensation][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_compensation_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Equity</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Equity" name="SalCompGlobalCategory[earnings][sub_categories][gsc_equity][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_equity_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Expenses</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Expenses" name="SalCompGlobalCategory[earnings][sub_categories][gsc_expenses][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_expenses_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Flat-Rate Taxes</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Flat-Rate Taxes" name="SalCompGlobalCategory[earnings][sub_categories][gsc_flat_rate_taxes][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_flat_rate_taxes_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Other Earnings</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Other Earnings" name="SalCompGlobalCategory[earnings][sub_categories][gsc_other_earnings][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_other_earnings_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Earnings</td>
                        <td>Earnings</td>
                        <td>Termination Pay</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Termination Pay" name="SalCompGlobalCategory[earnings][sub_categories][gsc_termination_pay][alias]" id="SalCompGlobalCategory_earnings_sub_categories_gsc_termination_pay_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Employee Benefits</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Employee Benefits" name="SalCompGlobalCategory[employee_benefits][alias]" id="SalCompGlobalCategory_employee_benefits_alias"/>
                        </td>
                        <td>Accomodation</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Accomodation" name="SalCompGlobalCategory[employee_benefits][sub_categories][gsc_accomodation][alias]" id="SalCompGlobalCategory_employee_benefits_sub_categories_gsc_accomodation_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Employee Benefits</td>
                        <td>Employee Benefits</td>
                        <td>Insurance</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Insurance" name="SalCompGlobalCategory[employee_benefits][sub_categories][gsc_insurance][alias]" id="SalCompGlobalCategory_employee_benefits_sub_categories_gsc_insurance_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Employee Benefits</td>
                        <td>Employee Benefits</td>
                        <td>Learning & Education</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Learning &amp; Education" name="SalCompGlobalCategory[employee_benefits][sub_categories][gsc_learning_n_education][alias]" id="SalCompGlobalCategory_employee_benefits_sub_categories_gsc_learning_n_education_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Employee Benefits</td>
                        <td>Employee Benefits</td>
                        <td>Other Benefits</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Other Benefits" name="SalCompGlobalCategory[employee_benefits][sub_categories][gsc_other_benefits][alias]" id="SalCompGlobalCategory_employee_benefits_sub_categories_gsc_other_benefits_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions EE</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Statutory Deductions EE" name="SalCompGlobalCategory[statutory_deductions_ee][alias]" id="SalCompGlobalCategory_statutory_deductions_ee_alias"/>
                        </td>
                        <td>EE Healthcare Contribution</td>
                        <td>
                            <input class="db-input form-control" type="text" value="EE Healthcare Contribution" name="SalCompGlobalCategory[statutory_deductions_ee][sub_categories][gsc_ee_healthcare_contribution][alias]" id="SalCompGlobalCategory_statutory_deductions_ee_sub_categories_gsc_ee_healthcare_contribution_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions EE</td>
                        <td>Statutory Deductions EE</td>
                        <td>EE Tax</td>
                        <td>
                            <input class="db-input form-control" type="text" value="EE Tax" name="SalCompGlobalCategory[statutory_deductions_ee][sub_categories][gsc_ee_tax][alias]" id="SalCompGlobalCategory_statutory_deductions_ee_sub_categories_gsc_ee_tax_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions EE</td>
                        <td>Statutory Deductions EE</td>
                        <td>EE Pension Contribution</td>
                        <td>
                            <input class="db-input form-control" type="text" value="EE Pension Contribution" name="SalCompGlobalCategory[statutory_deductions_ee][sub_categories][gsc_ee_pension_contribution][alias]" id="SalCompGlobalCategory_statutory_deductions_ee_sub_categories_gsc_ee_pension_contribution_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions EE</td>
                        <td>Statutory Deductions EE</td>
                        <td>EE Social Security Contribution</td>
                        <td>
                            <input class="db-input form-control" type="text" value="EE Social Security Contribution" name="SalCompGlobalCategory[statutory_deductions_ee][sub_categories][gsc_ee_social_security_contribution][alias]" id="SalCompGlobalCategory_statutory_deductions_ee_sub_categories_gsc_ee_social_security_contribution_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions EE</td>
                        <td>Statutory Deductions EE</td>
                        <td>EE Other Statutory Contributions</td>
                        <td>
                            <input class="db-input form-control" type="text" value="EE Other Statutory Contributions" name="SalCompGlobalCategory[statutory_deductions_ee][sub_categories][gsc_ee_other_statutory_contributions][alias]" id="SalCompGlobalCategory_statutory_deductions_ee_sub_categories_gsc_ee_other_statutory_contributions_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions ER</td>
                        <td>
                            <input class="db-input form-control" type="text" value="Statutory Deductions ER" name="SalCompGlobalCategory[statutory_deductions_er][alias]" id="SalCompGlobalCategory_statutory_deductions_er_alias"/>
                        </td>
                        <td>ER Healthcare Contribution</td>
                        <td>
                            <input class="db-input form-control" type="text" value="ER Healthcare Contribution" name="SalCompGlobalCategory[statutory_deductions_er][sub_categories][gsc_er_healthcare_contribution][alias]" id="SalCompGlobalCategory_statutory_deductions_er_sub_categories_gsc_er_healthcare_contribution_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions ER</td>
                        <td>Statutory Deductions ER</td>
                        <td>ER Tax</td>
                        <td>
                            <input class="db-input form-control" type="text" value="ER Tax" name="SalCompGlobalCategory[statutory_deductions_er][sub_categories][gsc_er_tax][alias]" id="SalCompGlobalCategory_statutory_deductions_er_sub_categories_gsc_er_tax_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions ER</td>
                        <td>Statutory Deductions ER</td>
                        <td>ER Pension Contribution</td>
                        <td>
                            <input class="db-input form-control" type="text" value="ER Pension Contribution" name="SalCompGlobalCategory[statutory_deductions_er][sub_categories][gsc_er_pension_contribution][alias]" id="SalCompGlobalCategory_statutory_deductions_er_sub_categories_gsc_er_pension_contribution_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions ER</td>
                        <td>Statutory Deductions ER</td>
                        <td>ER Social Security Contribution</td>
                        <td>
                            <input class="db-input form-control" type="text" value="ER Social Security Contribution" name="SalCompGlobalCategory[statutory_deductions_er][sub_categories][gsc_er_social_security_contribution][alias]" id="SalCompGlobalCategory_statutory_deductions_er_sub_categories_gsc_er_social_security_contribution_alias"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Statutory Deductions ER</td>
                        <td>Statutory Deductions ER</td>
                        <td>ER Other Statutory Contributions</td>
                        <td>
                            <input class="db-input form-control" type="text" value="ER Other Statutory Contributions" name="SalCompGlobalCategory[statutory_deductions_er][sub_categories][gsc_er_other_statutory_contributions][alias]" id="SalCompGlobalCategory_statutory_deductions_er_sub_categories_gsc_er_other_statutory_contributions_alias"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </dbx-modal>
    </div>
</div>
<!-- Performance -->
<div class="tab_container clearfix hidden" id="tab_container_12">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Custom Configuration
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">Validation
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_validation_calibration" type="hidden" value="0" name="TenantProfile[disable_validation_calibration]"/>
                <input title="" class="form-check-input" name="TenantProfile[disable_validation_calibration]" id="TenantProfile_disable_validation_calibration" value="1" type="checkbox"/>
                <label class="m-0">Disable Validation in Calibration
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        IDP
                                    </label>
                                </div>
                            </div> -->
        <!--
                            <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        IDP
                                    </label>
                                </div>
                            </div>
                        -->
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_reviews_in_ios" type="hidden" value="0" name="TenantProfile[enable_reviews_in_ios]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_reviews_in_ios]" id="TenantProfile_enable_reviews_in_ios" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Reviews in IOS</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantSku_enable_learning_recommendation_status" type="hidden" value="0" name="TenantSku[enable_learning_recommendation][status]"/>
                <input title="" class="form-check-input" name="TenantSku[enable_learning_recommendation][status]" id="TenantSku_enable_learning_recommendation_status" value="1" checked="checked" type="checkbox"/>
                <label class="m-0" for="TenantSku_enable_learning_recommendation">Enable Learning Recommendation</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantSku_is_manager_hub_status" type="hidden" value="0" name="TenantSku[is_manager_hub][status]"/>
                <input title="" class="form-check-input" name="TenantSku[is_manager_hub][status]" id="TenantSku_is_manager_hub_status" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Manager Hub</label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
        <div class="form-group col-md-6 searchable">
            <label>Maximum Count of Employee in Calibration Lobby *</label>
            <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>It is recommended to keep max limit restricted to 5000. There can be performance issues for user count beyond the recommended limit</div>">
                <df class="db-Infromation"></df>
            </a>
            <input class="db-input width-100" name="TenantProfile[maximum_employee_count_in_calibration_lobby]" id="TenantProfile_maximum_employee_count_in_calibration_lobby" type="text" value="5000"/>
        </div>
    </div>
</div>
<!-- Permissions -->
<div class="tab_container clearfix hidden" id="tab_container_13">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Notification
                                    </a>
            </li>
        </ul>
    </div>
</div>
<!-- Platform -->
<div class="tab_container clearfix hidden" id="tab_container_14">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Disable Default Configurations
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_4" class="sub_tab base-1 font-13 mr-12 p-0">S3 Region
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_3" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_sesssion_ip_check" type="hidden" value="0" name="TenantProfile[disable_sesssion_ip_check]"/>
                <input title="" class="form-check-input" name="TenantProfile[disable_sesssion_ip_check]" id="TenantProfile_disable_sesssion_ip_check" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Disable Session IP Check
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Disable Automated Retriggering of Task for New Assignees for the following tasks:</label>
            <select class="chzn-select db-input width-100 form-select dbSelect" id="automatic_retrigger_tasks" data-placeholder="Select Option" multiple="multiple" name="TenantProfile[automatic_retrigger_tasks][]">
                <option value="onboarding_workflow">Onboarding Workflow Tasks</option>
                <option value="onboarding_custom_workflow_task">Onboarding Custom Workflow Tasks</option>
                <option value="separation_requests">Separation Approvals</option>
                <option value="custom_flow_approvals">Custom Flow Approvals</option>
                <option value="lifecycle_changes_approval">Lifecycle Changes Approvals</option>
                <option value="business_events_approval">Business Events Approvals</option>
                <option value="custom_work_flow">Custom Flow Tasks</option>
                <option value="separation_work_task">Separation Workflow Tasks</option>
                <option value="confirmation">Confirmation</option>
                <option value="contract_management">Contract</option>
                <option value="appraisal">Evaluator 1, 2 &amp;Reviewer in Appraisal</option>
                <option value="idp_career_plan">IDP &amp;Career Plan Approvals</option>
                <option value="msf_approval">MSF Nomination Approvals</option>
                <option value="goal_plan_changes_approval">Goal Plan Approvals</option>
                <option value="publish_rating">Calibration Publish to Manager</option>
                <option value="nomination_work_flow">Recognition Nominations</option>
                <option value="rnr_team_registration_task">Recognition Team Registration</option>
                <option value="rnr_recognition_redemption_task">Recognition Redemption</option>
                <option value="talent_skills_approval">Skills Approval</option>
                <option value="payroll_loan">Loans Approval</option>
                <option value="payroll_investment_review">POI review</option>
                <option value="payroll_perquisite_declaration">Perquisities Declaration Requests</option>
                <option value="pms_talent_review">Evaluator 1, Evaluator 2 &amp;Reviewer Review Task in Talent Review</option>
                <option value="requsition_admin">Requisition Activation</option>
                <option value="travel_work_flow">Travel Approvals</option>
                <option value="reimbursement_work_flow">Reimbursement Approvals</option>
                <option value="reimbursement_advance_work_flow">Reimbursement Advance Approvals</option>
            </select>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_neouser_via_api" type="hidden" value="0" name="TenantProfile[disable_neouser_via_api]"/>
                <input title="" class="form-check-input" name="TenantProfile[disable_neouser_via_api]" id="TenantProfile_disable_neouser_via_api" value="1" type="checkbox"/>
                <label class="m-0">Disable Neo User via API
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_bulkdownload" type="hidden" value="0" name="TenantProfile[enable_bulkdownload]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_bulkdownload]" id="TenantProfile_enable_bulkdownload" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Bulk Download
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_sso_idp_ask_darwin" type="hidden" value="0" name="TenantProfile[enable_sso_idp][ask_darwin]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_sso_idp][ask_darwin]" id="TenantProfile_enable_sso_idp_ask_darwin" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Ask Darwin Portal
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_new_mobile_dashboard" type="hidden" value="0" name="TenantProfile[enable_new_mobile_dashboard]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_new_mobile_dashboard]" id="TenantProfile_enable_new_mobile_dashboard" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable New Mobile Dashboard
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_digital_signature_providers" type="hidden" value="0" name="TenantProfile[enable_digital_signature_providers]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_digital_signature_providers]" id="TenantProfile_enable_digital_signature_providers" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Digital Signature Providers
                                    </label>
            </div>
        </div>
        <!-- <div class="form-group col-md-6 searchable">
                            <div class="form-check ptb-0">
                                                                <label class="m-0">
                                    Old Analytics
                                </label>
                            </div>
                        </div> -->
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_sanitization_on_login" type="hidden" value="0" name="TenantProfile[enable_sanitization_on_login]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_sanitization_on_login]" id="TenantProfile_enable_sanitization_on_login" value="1" type="checkbox"/>
                <label class="m-0">Enable Sanitization on Login
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_sanitize_html_in_profile" type="hidden" value="0" name="TenantProfile[sanitize_html_in_profile]"/>
                <input title="" class="form-check-input" name="TenantProfile[sanitize_html_in_profile]" id="TenantProfile_sanitize_html_in_profile" value="1" type="checkbox"/>
                <label class="m-0">Sanitize HTML In Profile
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_html_sanitization" type="hidden" value="0" name="TenantProfile[enable_html_sanitization]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_html_sanitization]" id="TenantProfile_enable_html_sanitization" value="1" type="checkbox"/>
                <label class="m-0">Sanitize HTML
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_block_double_extension_files" type="hidden" value="0" name="TenantProfile[block_double_extension_files]"/>
                <input title="" class="form-check-input" name="TenantProfile[block_double_extension_files]" id="TenantProfile_block_double_extension_files" value="1" type="checkbox"/>
                <label class="m-0">Block Double Extension File Uploads
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_block_malicious_javascript_pdf" type="hidden" value="0" name="TenantProfile[block_malicious_javascript_pdf]"/>
                <input title="" class="form-check-input" name="TenantProfile[block_malicious_javascript_pdf]" id="TenantProfile_block_malicious_javascript_pdf" value="1" type="checkbox"/>
                <label class="m-0">Block Malicious Javascript PDF
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_block_embedded_exe_files" type="hidden" value="0" name="TenantProfile[block_embedded_exe_files]"/>
                <input title="" class="form-check-input" name="TenantProfile[block_embedded_exe_files]" id="TenantProfile_block_embedded_exe_files" value="1" type="checkbox"/>
                <label class="m-0">Block Embedded Executable File Uploads
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_block_embedded_files" type="hidden" value="0" name="TenantProfile[block_embedded_files]"/>
                <input title="" class="form-check-input" name="TenantProfile[block_embedded_files]" id="TenantProfile_block_embedded_files" value="1" type="checkbox"/>
                <label class="m-0">Block Embedded File Uploads
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_mathematical_captcha" type="hidden" value="0" name="TenantProfile[mathematical_captcha]"/>
                <input title="" class="form-check-input" name="TenantProfile[mathematical_captcha]" id="TenantProfile_mathematical_captcha" value="1" type="checkbox"/>
                <label class="m-0">Enable Mathematical Captcha
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_embedded_translator" type="hidden" value="0" name="TenantProfile[enable_embedded_translator]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_embedded_translator]" id="TenantProfile_enable_embedded_translator" value="1" type="checkbox"/>
                <label class="m-0">Enable Embedded Translator
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <label class="m-0">* Only Mobile Number Two Factor Authentication can be used for Admin Accounts
                                </label>
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_two_factor_auth_otp" type="hidden" value="0" name="TenantProfile[two_factor_auth_otp]"/>
                <input title="" class="form-check-input two_factor_auth_otp" name="TenantProfile[two_factor_auth_otp]" id="TenantProfile_two_factor_auth_otp" value="1" type="checkbox"/>
                <label class="m-0">Two factor auth otp
                                    </label>
            </div>
            <br>
            <div class="two_factor_auth_type" id="two_factor_auth_type">
                <div class="form-check-inline">
                    <input title="" value="1" class="form-check-input" name="TenantProfile[two_factor_auth_otp_type]" id="TenantProfile_two_factor_auth_otp_type" type="radio"/>
                    <label class="m-0">Email
                                        </label>
                </div>
                <div class="form-check-inline">
                    <input title="" value="2" class="form-check-input" name="TenantProfile[two_factor_auth_otp_type]" id="TenantProfile_two_factor_auth_otp_type" type="radio"/>
                    <label class="m-0">Mobile number
                                        </label>
                </div>
                <div class="form-check-inline">
                    <input title="" value="3" class="form-check-input" name="TenantProfile[two_factor_auth_otp_type]" id="TenantProfile_two_factor_auth_otp_type" checked="checked" type="radio"/>
                    <label class="m-0">Authenticator
                                        </label>
                </div>
                <br>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_external_recruiter_two_factor_auth" type="hidden" value="0" name="TenantProfile[external_recruiter_two_factor_auth]"/>
                <input title="" class="form-check-input external_recruiter_two_factor_auth" name="TenantProfile[external_recruiter_two_factor_auth]" id="TenantProfile_external_recruiter_two_factor_auth" value="1" type="checkbox"/>
                <label class="m-0">Enable Multi Factor Authentication for External Recruiters
                                    </label>
            </div>
            <br>
            <div class="external_recruiter_two_factor_auth_otp_type" id="external_recruiter_two_factor_auth_otp_type">
                <div class="form-check-inline">
                    <input title="" value="1" class="form-check-input" name="TenantProfile[external_recruiter_two_factor_auth_otp_type]" id="TenantProfile_external_recruiter_two_factor_auth_otp_type" type="radio"/>
                    <label class="m-0">Email
                                        </label>
                </div>
                <div class="form-check-inline">
                    <input title="" value="3" class="form-check-input" name="TenantProfile[external_recruiter_two_factor_auth_otp_type]" id="TenantProfile_external_recruiter_two_factor_auth_otp_type" checked="checked" type="radio"/>
                    <label class="m-0">Authenticator
                                        </label>
                </div>
                <br>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_two_factor_auth_otp_mobile" type="hidden" value="0" name="TenantProfile[two_factor_auth_otp_mobile]"/>
                <input title="" class="form-check-input" name="TenantProfile[two_factor_auth_otp_mobile]" id="TenantProfile_two_factor_auth_otp_mobile" value="1" type="checkbox"/>
                <label class="m-0">Enable Multi Factor Authentication for Mobile
                                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_service_provider" type="hidden" value="0" name="TenantProfile[enable_service_provider]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_service_provider]" id="TenantProfile_enable_service_provider" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable External Service Providers
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_asset_management" type="hidden" value="0" name="TenantProfile[enable_asset_management]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_asset_management]" id="TenantProfile_enable_asset_management" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Asset Management
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_language" type="hidden" value="0" name="TenantProfile[language]"/>
                <input title="" class="form-check-input language" name="TenantProfile[language]" id="TenantProfile_language" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Language
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enabling languages for tenant under MLF</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
            <div class="form-group mt-16 allow_languages searchable">
                <label class="db-label">Allowed Languages *</label>
                <br/>
                <select id="allowed_language" class="form-select dbSelect" data-placeholder="Select Languages... " multiple="multiple" name="TenantProfile[allowed_languages][]">
                    <option value="ar" selected="selected">Arabic</option>
                    <option value="bn" selected="selected">Bengali</option>
                    <option value="bl" selected="selected">Bulgarian</option>
                    <option value="bu">Burmese</option>
                    <option value="fr-CA">Canadian French</option>
                    <option value="zh" selected="selected">Chinese</option>
                    <option value="ch">Chinese (Traditional)</option>
                    <option value="cr">Croatian</option>
                    <option value="cs" selected="selected">Czech</option>
                    <option value="da">Danish</option>
                    <option value="du">Dutch</option>
                    <option value="en-us" selected="selected">English (US)</option>
                    <option value="en-UK" selected="selected">English UK</option>
                    <option value="fi">Finnish</option>
                    <option value="fr">French</option>
                    <option value="ka">Georgian</option>
                    <option value="de">German</option>
                    <option value="sw-GR">German Swiss</option>
                    <option value="gr">Greek</option>
                    <option value="hi" selected="selected">Hindi</option>
                    <option value="hu">Hungarian</option>
                    <option value="in">Indonesian</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="kn" selected="selected">Kannada</option>
                    <option value="km">Khmer</option>
                    <option value="ko">Korean</option>
                    <option value="ms" selected="selected">Malay</option>
                    <option value="ne">Nepali</option>
                    <option value="nb-NO" selected="selected">Norwegian Bokmål</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese (Brazil)</option>
                    <option value="po-pt">Portuguese (Portugal)</option>
                    <option value="ro">Romanian</option>
                    <option value="ru" selected="selected">Russian</option>
                    <option value="sr">Serbian</option>
                    <option value="si">Sinhala</option>
                    <option value="sk">Slovak</option>
                    <option value="sl">Slovenian</option>
                    <option value="es" selected="selected">Spanish</option>
                    <option value="sp">Spanish (Mexico)</option>
                    <option value="sw">Swedish</option>
                    <option value="ta" selected="selected">Tamil</option>
                    <option value="te" selected="selected">Telugu</option>
                    <option value="th" selected="selected">Thai</option>
                    <option value="tr">Turkish</option>
                    <option value="uz">Uzbek</option>
                    <option value="vi" selected="selected">Vietnamese</option>
                </select>
            </div>
            <div class="form-check ptb-0 searchable">
                <input id="ytTenantProfile_enable_arabic_in_web" type="hidden" value="0" name="TenantProfile[enable_arabic_in_web]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_arabic_in_web]" id="TenantProfile_enable_arabic_in_web" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Arabic on Web
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantSku_ai_based_notification_content_for_languages_status" type="hidden" value="0" name="TenantSku[ai_based_notification_content_for_languages][status]"/>
                <input title="" class="form-check-input" name="TenantSku[ai_based_notification_content_for_languages][status]" id="TenantSku_ai_based_notification_content_for_languages_status" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable AI Based Notification Content for Languages
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_sso_idp_help_portal" type="hidden" value="0" name="TenantProfile[enable_sso_idp][help_portal]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_sso_idp][help_portal]" id="TenantProfile_enable_sso_idp_help_portal" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Help Portal
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_rate_limiting" type="hidden" value="0" name="TenantProfile[enable_rate_limiting]"/>
                <input title="" class="form-check-input enable_rate_limiting" name="TenantProfile[enable_rate_limiting]" id="TenantProfile_enable_rate_limiting" value="1" type="checkbox"/>
                <label class="m-0">Enable Rate Limiting
                                    </label>
            </div>
            <div id="rate_limiting_details" class="opacity-0">
                <div class="form-group col-md-6 searchable">
                    <label>Rate Limiting Request Count</label>
                    <input class="db-input width-100 rate_limiting_req" name="TenantProfile[rate_limiting_restriction_count]" id="TenantProfile_rate_limiting_restriction_count" type="text" value="2"/>
                </div>
                <div class="form-group col-md-6 searchable">
                    <label>In Time (In Seconds)</label>
                    <input class="db-input width-100 rate_limiting_req" name="TenantProfile[rate_limiting_restriction_in_time]" id="TenantProfile_rate_limiting_restriction_in_time" type="text" value="3600"/>
                </div>
                <div class="form-group col-md-6 searchable">
                    <label>If exceeded,Restrict for time (In Seconds)</label>
                    <input class="db-input width-100 rate_limiting_req" name="TenantProfile[rate_limiting_restriction_time]" id="TenantProfile_rate_limiting_restriction_time" type="text" value="3600"/>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-6 searchable">
            <label class="db-label">SMS Limit (Default:3000 sms/day)</label>
            <br/>
            <input class="db-input width-100" name="TenantProfile[sms_limit]" id="TenantProfile_sms_limit" type="text" value="3000"/>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_nominee_based_application" type="hidden" value="0" name="TenantProfile[enable_nominee_based_application]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_nominee_based_application]" id="TenantProfile_enable_nominee_based_application" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable Nominee based flow
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This setting will enable relevant settings in Custom Flows for running processes like Whistleblower Reporting</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_dual_calendar" type="hidden" value="0" name="TenantProfile[enable_dual_calendar]"/>
                <input title="" class="form-check-input enable_dual_calendar" name="TenantProfile[enable_dual_calendar]" id="TenantProfile_enable_dual_calendar" value="1" type="checkbox"/>
                <label class="m-0">Enable Dual Calendar
                                    </label>
            </div>
            <br>
            <div class="secondary_calendar_type" id="secondary_calendar_type">
                <select id="allowed_secondary_calendar_types" class="form-select dbSelect" data-placeholder="Select Secondary Calendar... " multiple="multiple" name="TenantProfile[allowed_secondary_calendar_types][]">
                    <option value="hijri" selected="selected">Hijri (Islamic)</option>
                    <option value="buddhist" selected="selected">Buddhist</option>
                </select>
                <br>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_request_validation" type="hidden" value="0" name="TenantProfile[enable_request_validation]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_request_validation]" id="TenantProfile_enable_request_validation" value="1" type="checkbox"/>
                <label class="m-0">
                    Enable Request Validation for Integration Endpoints
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>> Validates the payload to ensure only allowed keys are present and each key has the correct data type. Any extra keys or incorrect data types will trigger validation errors.</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_image_tag_whitelisting" type="hidden" value="0" name="TenantProfile[enable_image_tag_whitelisting]"/>
                <input title="" class="form-check-input image_tag_whitelist" name="TenantProfile[enable_image_tag_whitelisting]" id="TenantProfile_enable_image_tag_whitelisting" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Image Tag Url WhiteListing
                                    </label>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_alumni_portal" type="hidden" value="0" name="TenantProfile[enable_alumni_portal]"/>
                <input title="" class="form-check-input enable_alumni_portal" name="TenantProfile[enable_alumni_portal]" id="TenantProfile_enable_alumni_portal" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Alumni Portal
                                </label>
            </div>
            <div class="form-group mt-16 enable_module_alumni searchable">
                <label class="db-label">Alumni Modules to be selected (By default HR Docs,Profile):</label>
                <br/>
                <select id="enable_alumni_portal_modules" class="form-select dbSelect" data-placeholder="Select Modules... " multiple="multiple" name="TenantProfile[enable_alumni_portal_modules][]">
                    <option value="is_leaves" selected="selected">Leaves Module</option>
                    <option value="is_payroll" selected="selected">Payroll Module</option>
                    <option value="is_help_desk" selected="selected">Help Desk Module</option>
                    <option value="search_finder" selected="selected">Network Search</option>
                </select>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-6 hidden">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_email_integration_leaves" type="hidden" value="0" name="TenantProfile[enable_email_integration_leaves]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_email_integration_leaves]" id="TenantProfile_enable_email_integration_leaves" value="1" type="checkbox"/>
                <label class="m-0">Enable Account Linking for Calendar Integration</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <input type="hidden" name="TenantProfile[edit_decision_matrix_users]" id="abc2" value="438359|231071|579729|"/>
            <label class="m-0">Users with Edit Access to Restricted Decision Matrices                                </label>
            <input id="employee-search3" size="50" name="employee_search3" value="COREWF12 Name (CoreWF)|Payroll QA Test (QA_1)|Harikrishna B (ABC0015)">
        </div>
    </div>
    <!--                    <div class="plr-12 sub_tab_container clearfix hidden" data-container="4">
                        <div class="form-group col-md-6 searchable">
                            <div class="form-check ptb-0">
                                                                <label class="m-0">
                                    Enable S3 for China
                                </label>
                            </div>
                        </div>

                        <div class="form-group col-md-6 ">
                            <label class="m-0">
                                <b>S3 China Available:</b>                             </label>
                        </div>
                    </div>-->
</div>
<!-- Recognition -->
<div class="tab_container clearfix hidden" id="tab_container_15">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Disable Default Configurations
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_xoxo_integration" type="hidden" value="0" name="TenantProfile[xoxo_integration]"/>
                <input title="" class="form-check-input" name="TenantProfile[xoxo_integration]" id="TenantProfile_xoxo_integration" value="1" type="checkbox"/>
                <label class="m-0">XOXO integration
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_make_values_non_mandatory" type="hidden" value="0" name="TenantProfile[make_values_non_mandatory]"/>
                <input title="" class="form-check-input" name="TenantProfile[make_values_non_mandatory]" id="TenantProfile_make_values_non_mandatory" value="1" type="checkbox"/>
                <label class="m-0">Make Values Non-Mandatory
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <label class="m-0">Minimum redeemable points to show redeem action on recommendation
                                    </label>
                <input class="db-input width-100" name="TenantProfile[minimum_redeemable_points_to_show_redeem_action]" id="TenantProfile_minimum_redeemable_points_to_show_redeem_action" type="text" value="100"/>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_hide_redemption_statement" type="hidden" value="0" name="TenantProfile[hide_redemption_statement]"/>
                <input title="" class="form-check-input" name="TenantProfile[hide_redemption_statement]" id="TenantProfile_hide_redemption_statement" value="1" type="checkbox"/>
                <label class="m-0">Hide Redemption Statement
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Trigger recognition based on</label>
            <br/>
            <div class="form-check-inline">
                <input title="" value="1" id="trigger_recognition_based_on" class="dept_grp_company form-check-input" name="TenantProfile[trigger_recognition_based_on]" checked="checked" type="radio"/>
                <label class="m-0">Date of joining
                                    </label>
            </div>
            <div class="form-check-inline">
                <input title="" value="2" id="trigger_recognition_based_on" class="dept_grp_company form-check-input" name="TenantProfile[trigger_recognition_based_on]" type="radio"/>
                <label class="m-0">Group date of joining
                                    </label>
            </div>
        </div>
    </div>
</div>
<!-- Recruitment -->
<div class="tab_container clearfix hidden" id="tab_container_16">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Custom Configuration
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Disable Default Configurations
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_3" class="sub_tab base-1 font-13 mr-12 p-0">Validation
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_4" class="sub_tab base-1 font-13 mr-12 p-0">Careers Page
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6  searchable ">
            <label>Resume Parse limit per candidate per day</label>
            <input class="db-input width-100" name="TenantProfile[resume_parse_limit_per_candidate_per_day]" id="TenantProfile_resume_parse_limit_per_candidate_per_day" type="text" value="1005"/>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Salary Computation alias in offer letter templates</label>
            <input class="db-input width-100" value="SALARY COMPUTATION" name="TenantProfile[alias_for_salary_computation]" id="TenantProfile_alias_for_salary_computation" type="text"/>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Maximum Attachment File Upload Size Limit(in MB)</label>
            <input class="db-input width-100" pattern="[1-9]|10" title="Please Enter a integer between 1-10" name="TenantProfile[maximum_attachment_file_upload_size_limit]" id="TenantProfile_maximum_attachment_file_upload_size_limit" type="text" value="10"/>
        </div>
        <div class="form-group col-md-6 searchable">
            <input id="ytTenantProfile_offerletter_accept_montly_ctc" type="hidden" value="0" name="TenantProfile[offerletter_accept_montly_ctc]"/>
            <input title="" class="form-check-input" name="TenantProfile[offerletter_accept_montly_ctc]" id="TenantProfile_offerletter_accept_montly_ctc" value="1" type="checkbox"/>
            <label class="m-0">Offer Letter Accept Monthly CTC and Convert To Annual
                                </label>
        </div>
        <div class="form-group col-md-6 searchable">
            <input id="ytTenantProfile_ctc_table_arabic_offer" type="hidden" value="0" name="TenantProfile[ctc_table_arabic_offer]"/>
            <input title="" class="form-check-input" name="TenantProfile[ctc_table_arabic_offer]" id="TenantProfile_ctc_table_arabic_offer" value="1" checked="checked" type="checkbox"/>
            <label class="m-0">Enable CTC table translation to Arabic during offer PDF generation.                                </label>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <!-- <div class="form-group col-md-6 searchable">
                            <div class="form-check ptb-0">
                                                                <label class="m-0">
                                    Enable RChilli Parser
                                </label>
                            </div>
                        </div> -->
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_recruitment_hide_status_columns" type="hidden" value="0" name="TenantProfile[recruitment_hide_status_columns]"/>
                <input title="" class="form-check-input" name="TenantProfile[recruitment_hide_status_columns]" id="TenantProfile_recruitment_hide_status_columns" value="1" type="checkbox"/>
                <label class="m-0">Recruitment hide status columns
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_restrict_resume_download_mobile" type="hidden" value="0" name="TenantProfile[restrict_resume_download_mobile]"/>
                <input title="" class="form-check-input" name="TenantProfile[restrict_resume_download_mobile]" id="TenantProfile_restrict_resume_download_mobile" value="1" type="checkbox"/>
                <label class="m-0">Restrict resume download on mobile
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_is_new_recruitment_mobile_enabled" type="hidden" value="0" name="TenantProfile[is_new_recruitment_mobile_enabled]"/>
                <input title="" class="form-check-input" name="TenantProfile[is_new_recruitment_mobile_enabled]" id="TenantProfile_is_new_recruitment_mobile_enabled" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Mobile New Recruitment UI
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_dont_allow_refral_option_adding_candidate" type="hidden" value="0" name="TenantProfile[dont_allow_refral_option_adding_candidate]"/>
                <input title="" class="form-check-input" name="TenantProfile[dont_allow_refral_option_adding_candidate]" id="TenantProfile_dont_allow_refral_option_adding_candidate" value="1" type="checkbox"/>
                <label class="m-0">Dont allow referral option adding candidate
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Share candidate status data with job boards</label>
            <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This setting will define the level of status details shared with job boards</div>">
                <df class="db-Infromation"></df>
            </a>
            <br/>
            <div class="form-check-inline">
                <input title="" value="1" id="share_candidate_status_based_on" class="dept_grp_company form-check-input" name="TenantProfile[share_candidate_status_based_on]" checked="checked" type="radio"/>
                <label class="m-0">Medium
                                    </label>
            </div>
            <div class="form-check-inline">
                <input title="" value="2" id="share_candidate_status_based_on" class="dept_grp_company form-check-input" name="TenantProfile[share_candidate_status_based_on]" type="radio"/>
                <label class="m-0">Liberal
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_new_overview_page_for_recruiters_and_hiring_leads" type="hidden" value="0" name="TenantProfile[enable_new_overview_page_for_recruiters_and_hiring_leads]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_new_overview_page_for_recruiters_and_hiring_leads]" id="TenantProfile_enable_new_overview_page_for_recruiters_and_hiring_leads" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable New Overview Page for Recruiters and Hiring Leads
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_offerletter_bulk_generation" type="hidden" value="0" name="TenantProfile[enable_offerletter_bulk_generation]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_offerletter_bulk_generation]" id="TenantProfile_enable_offerletter_bulk_generation" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Offer Letter Bulk Generation
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable" data-field="enable-mobile-number-based-signup-for-candidate-login">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_pre_bgv_stage" type="hidden" value="0" name="TenantProfile[enable_pre_bgv_stage]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_pre_bgv_stage]" id="TenantProfile_enable_pre_bgv_stage" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Verification
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_assessment_providers" type="hidden" value="0" name="TenantProfile[enable_assessment_providers]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_assessment_providers]" id="TenantProfile_enable_assessment_providers" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Assessment Providers
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_boolean_search" type="hidden" value="0" name="TenantProfile[enable_boolean_search]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_boolean_search]" id="TenantProfile_enable_boolean_search" value="1" type="checkbox"/>
                <label class="m-0">Enable Boolean Search
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_ai_insights_for_candidates" type="hidden" value="0" name="TenantProfile[ai_insights_for_candidates]"/>
                <input title="" class="form-check-input" name="TenantProfile[ai_insights_for_candidates]" id="TenantProfile_ai_insights_for_candidates" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable AI-Generated Candidate Insights
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_candidate_sourcing_extension" type="hidden" value="0" name="TenantProfile[candidate_sourcing_extension]"/>
                <input title="" class="form-check-input candidate_sourcing_extension" name="TenantProfile[candidate_sourcing_extension]" id="TenantProfile_candidate_sourcing_extension" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Browser Extension for Candidate Sourcing
                            </label>
            </div>
            <div class="mt-16 hidden candidate_sourcing_extension_show mb-12">
                <label>
                    Select Job Portal Source <span class="primary-red">*</span>
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="This source will be applicable to the candidates sourced via the browser widget.">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
                <select class="chzn-select db-input width-100 form-select dbSelect " id="candidate_sourcing_extension_portal_id" data-placeholder="Select Option" name="TenantProfile[candidate_sourcing_extension_portal_id]">
                    <option value="">Select</option>
                    <option value="a63d95e143407d">43__Naukri</option>
                    <option value="a63d95e2315a52">43__LinkedIn123</option>
                    <option value="a646c85ef4962b">New</option>
                    <option value="a64cb67d7ec80e">Monster.com</option>
                    <option value="a677d55420e86f">43___Indeed</option>
                    <option value="a684fba6a0108a">Indeed</option>
                    <option value="a688c8f544aae5">ztubnj</option>
                    <option value="a688f615a773f0">indeed</option>
                    <option value="a68ac065700124">Michael Page - Swift</option>
                    <option value="a68c3cbb33680d">2616_Indeed</option>
                    <option value="a68c3cbbfacd3d" selected="selected">2616_Linkedin</option>
                    <option value="a696cdcdd16e88">JobPortal@3</option>
                    <option value="a69b6de739baec">DB2337_Indeed</option>
                    <option value="a69cf98ca81c51">efewrfe</option>
                    <option value="a69cf98dddb6be">sdvv</option>
                    <option value="a69cf9a11066e8">LinkedIn</option>
                </select>
            </div>
            <p class="job_portal_source primary-red hidden">Please Select Job Portal Source </p>
        </div>
        <div class="form-group col-md-6 searchable">
            <input type="hidden" name="TenantProfile[recruitment_confidential_users]" id="abc3" value="545526|38533|139325|551113"/>
            <label class="m-0">
                Restricted Access to Confidential Hiring                                    
                <a href="javascript:void('0')" class="custom_tooltip" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<p class='base-2 font-13 mb-0'>Selected employees shall have additional access to confidential hiring (jobs, requisitions, candidates, offer proposals and offers) based on the custom permissions assigned.</p>" data-bs-original-title="" title="">
                    <df class="db-Infromation"></df>
                </a>
            </label>
            <input id="employee-search4" size="50" name="employee_search4" value="Ankit Admin (ANKIT01)|Habeeba 1 AutoTest (Main424)|Harshada Admin S  (EMP-012) (POS26)|Purged First Name Pms (Hub229)">
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="3">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_cand_from_multi_work_and_education" type="hidden" value="0" name="TenantProfile[disable_cand_from_multi_work_and_education]"/>
                <input title="" class="form-check-input" name="TenantProfile[disable_cand_from_multi_work_and_education]" id="TenantProfile_disable_cand_from_multi_work_and_education" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Disable candidates to select multiple concurrent work experiences or education experiences
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_cand_to_mand_check_is_highest_qualification" type="hidden" value="0" name="TenantProfile[disable_cand_to_mand_check_is_highest_qualification]"/>
                <input title="" class="form-check-input" name="TenantProfile[disable_cand_to_mand_check_is_highest_qualification]" id="TenantProfile_disable_cand_to_mand_check_is_highest_qualification" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Disable candidates to mandatorily check at least one Is Highest Qualification
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="4">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_group_company_wise_careers" type="hidden" value="0" name="TenantProfile[enable_group_company_wise_careers]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_group_company_wise_careers]" id="TenantProfile_enable_group_company_wise_careers" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable Group Firm-wise career pages                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Enabling this setting will create separate careers pages for all of your group companies in old careers site">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0 d-flex align-items-center">
                <input id="ytTenantProfile_enable_careers_otp_login" type="hidden" value="0" name="TenantProfile[enable_careers_otp_login]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_careers_otp_login]" id="TenantProfile_enable_careers_otp_login" value="1" type="checkbox"/>
                <label class="m-0 d-flex align-items-center">
                    Enable OTP Login for career pages 
                                        <df class="db-Infromation font-16 i_icon_inline color-black ms-1" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="When enabled, the candidates can log in to career pages using OTP for both mobile and email. If mobile registration is disabled for the tenant, OTP will be available only for email logins."></df>
                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_carrer_page_show_only_parent_department" type="hidden" value="0" name="TenantProfile[carrer_page_show_only_parent_department]"/>
                <input title="" class="form-check-input" name="TenantProfile[carrer_page_show_only_parent_department]" id="TenantProfile_carrer_page_show_only_parent_department" value="1" type="checkbox"/>
                <label class="m-0">Show only L1 Departments on Careers Page
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_pendo_for_careers" type="hidden" value="0" name="TenantProfile[enable_pendo_for_careers]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_pendo_for_careers]" id="TenantProfile_enable_pendo_for_careers" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Pendo for career pages
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_new_careers" type="hidden" value="0" name="TenantProfile[enable_new_careers]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_new_careers]" id="TenantProfile_enable_new_careers" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable New Candidate Experience
                                    </label>
            </div>
        </div>
    </div>
</div>
<!-- Reports -->
<div class="tab_container clearfix hidden" id="tab_container_17">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Disable Default Configurations
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_block_manager_report_custom_roster" type="hidden" value="0" name="TenantProfile[block_manager_report_custom_roster]"/>
                <input title="" class="form-check-input" name="TenantProfile[block_manager_report_custom_roster]" id="TenantProfile_block_manager_report_custom_roster" value="1" type="checkbox"/>
                <label class="m-0">Block manager custom roster
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_block_manager_report_employee_roster" type="hidden" value="0" name="TenantProfile[block_manager_report_employee_roster]"/>
                <input title="" class="form-check-input" name="TenantProfile[block_manager_report_employee_roster]" id="TenantProfile_block_manager_report_employee_roster" value="1" type="checkbox"/>
                <label class="m-0">Block manager employee roster
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_graph_for_reports" type="hidden" value="0" name="TenantProfile[enable_graph_for_reports]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_graph_for_reports]" id="TenantProfile_enable_graph_for_reports" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable graph for reports
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytenable_reports_duration" type="hidden" value="0" name="TenantProfile[enable_reports_duration]"/>
                <input title="" class="form-check-input" id="enable_reports_duration" name="TenantProfile[enable_reports_duration]" value="1" type="checkbox"/>
                <label class="mt-0">modify the range of inactive employees in old reports.
                                    </label>
            </div>
            <div class="form-group bi_or_anually_or_custom_radiobuttons hidden mb-16">
                <label class="">Select the range</label>
                <div class="radio-btns">
                    <div class="bi_or_anually_or_custom-grid-option">
                        <div class="form-check-inline radio-btn performance_default">
                            <input title="" value="1" class="reports_bi_or_anually_or_custom form-check-input" name="TenantProfile[bi_or_anually_or_custom]" id="TenantProfile_bi_or_anually_or_custom" checked="checked" type="radio"/>
                            <label for="">last year</label>
                        </div>
                        <div class="form-check-inline radio-btn">
                            <input title="" value="2" class="reports_bi_or_anually_or_custom form-check-input" name="TenantProfile[bi_or_anually_or_custom]" id="TenantProfile_bi_or_anually_or_custom" type="radio"/>
                            <label for="">Last 2 years</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_old_reports" type="hidden" value="0" name="TenantProfile[enable_old_reports]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_old_reports]" id="TenantProfile_enable_old_reports" value="1" type="checkbox"/>
                <label class="m-0">Enable Old Reports
                                    </label>
            </div>
        </div>
    </div>
</div>
<!--Analytics  -->
<div class="tab_container clearfix hidden" id="tab_container_28">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Analytics Features
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Define Analytics Usage Limits
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_analytics_qna_landing_page" type="hidden" value="0" name="TenantProfile[analytics_qna_landing_page]"/>
                <input title="" class="form-check-input" name="TenantProfile[analytics_qna_landing_page]" id="TenantProfile_analytics_qna_landing_page" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Q&A Landing Page For Analytics
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_analytics_custom_fields" type="hidden" value="0" name="TenantProfile[analytics_custom_fields]"/>
                <input title="" class="form-check-input" name="TenantProfile[analytics_custom_fields]" id="TenantProfile_analytics_custom_fields" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Custom Fields For Analytics
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_show_analytic_dashboard" type="hidden" value="0" name="TenantProfile[show_analytic_dashboard]"/>
                <input title="" class="form-check-input" name="TenantProfile[show_analytic_dashboard]" id="TenantProfile_show_analytic_dashboard" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Show Analytics Dashboard
                                            
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-toggle="popover" data-html="true" data-content="<div class='p-12'>To Enable Analytic Dashboard Icon</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
    </div>
</div>
<div class="tab_container clearfix hidden" id="tab_container_18">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Custom Configurations
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Disable Default Configurations
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_travel_advance_dont_allow_new" type="hidden" value="0" name="TenantProfile[travel_advance_dont_allow_new]"/>
                <input title="" class="form-check-input" name="TenantProfile[travel_advance_dont_allow_new]" id="TenantProfile_travel_advance_dont_allow_new" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Allow advance to be created for existing trips only
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This will not allow employee to create new trips from the Travel advance creation page. They will have to choose from an existing trip only</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="2">
        <!-- <div class="form-group col-md-6 searchable">
                                <div class="form-check ptb-0">
                                                                        <label class="m-0">
                                        Enable location search basis Google APIs
                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>When enabled in the mileage expense and in travel local conveyance an option to search basis google location will be enabled. Please note this is a paid feature</div>">
                                            <df class="db-Infromation"></df>
                                        </a>
                                    </label>
                                </div>

                                <div class="mt-16 allow_recording_distance_via_google_api_div ">
                                                                        <label class="m-0">
                                        Allow Recording Distance via Google API
                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>When enabled based on the google locations selected in per-mileage expenses distance will be autocalculated.</div>">
                                            <df class="db-Infromation"></df>
                                        </a>
                                    </label>
                                </div>

                                <div class="mt-16 allow_overwriting_distance_recorded_div ">
                                                                        <label class="m-0">
                                        Allow Overwriting Distance Recorded via Google API
                                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This setting will enable an option for the employees to overwrite the distance fetched</div>">
                                            <df class="db-Infromation"></df>
                                        </a>
                                    </label>
                                </div>
                            </div> -->
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_ocr_reimbursement" type="hidden" value="0" name="TenantProfile[enable_ocr_reimbursement]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_ocr_reimbursement]" id="TenantProfile_enable_ocr_reimbursement" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable OCR Framework in Reimbursement
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to capture data from receipts while filing expenses. Data points like Merchant name, Amount and date of expense along with uploaded file as attachment.Currently PDF, JPG, JPEG, PNG are supported under this.</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <!-- <div class="form-group col-md-6 searchable">
                        <div class="form-check ptb-0">
                                                        <label class="m-0">
                                Enable OCR Framework in Reimbursement(Veryfi)
                                <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>OCR functionality with integration with partner. Please note this is a paid feature</div>">
                                    <df class="db-Infromation"></df>
                                </a>
                            </label>
                        </div>
                    </div> -->
        <!-- <div class="form-group col-md-6 searchable">
                        <div class="form-check ptb-0">
                                                        <label class="m-0">
                                Use CLV in OCR Framework for Reimbursement
                                <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable this to use CLV for extracting data using OCR.</div>">
                                    <df class="db-Infromation"></df>
                                </a>
                            </label>
                        </div>
                    </div> -->
        <div class="form-group col-md-6 searchable">
            <input id="yttravel_integration" type="hidden" value="0" name="TenantProfile[travel_integration]"/>
            <input title="" class="form-check-input" id="travel_integration" name="TenantProfile[travel_integration]" value="1" type="checkbox"/>
            <label class="db-label">
                Integrate booking of flights and accommodation - Trip Approval Flow
                                    
                <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable Self booking for employees using travel connectors. Here the approvals will happen before booking.  </div>">
                    <df class="db-Infromation"></df>
                </a>
            </label>
            <br/>
            <div class="form-group col-md-6 searchable hidden integration_with_travel_partners ml-16">
                <select id="integration_with_travel_partner" multiple="multiple" class="form-control" name="TenantProfile[integration_with_travel_partner][]">
                    <option value="integration_with_mybiz">MyBiz</option>
                    <option value="integration_with_yatra">Yatra</option>
                    <option value="integration_with_paxes">Paxes</option>
                    <option value="integration_with_mmt">Q2T</option>
                </select>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <input id="yttravel_integration_fare" type="hidden" value="0" name="TenantProfile[travel_integration_fare]"/>
            <input title="" class="form-check-input" id="travel_integration_fare" name="TenantProfile[travel_integration_fare]" value="1" type="checkbox"/>
            <label class="db-label">
                Integrate booking of flights and accommodation - Fare Approval Flow
                                    
                <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable Self booking for employees using travel connectors. Here the booking amount will be sent for approval and once approved booking will be done.</div>">
                    <df class="db-Infromation"></df>
                </a>
            </label>
            <br/>
            <div class="form-group col-md-6 searchable hidden integration_with_travel_partners_fare  ml-16">
                <select id="integration_with_travel_partner_fare" multiple="multiple" class="form-control" name="TenantProfile[integration_with_travel_partner_fare][]">
                    <option value="integration_with_mybiz">MyBiz</option>
                </select>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <input type="checkbox" id="travel_sbt" class="form-check-input" checked>
            <label class="db-label m-0">
                Enable Self Booking Tool for
                                    
                <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enabling this setting will allow users to view and select travel inventory directly on the Darwinbox platform. </div>">
                    <df class="db-Infromation"></df>
                </a>
            </label>
            <br>
            <div class="form-group col-md-6 searchable  sbt_details ml-16">
                <select id="travel_sbt_modes" multiple="multiple" class="form-control" name="TenantProfile[travel_sbt_modes][]">
                    <option value="flights" selected="selected">Flights</option>
                </select>
            </div>
        </div>
        <div class="form-group col-md-6 searchable enable_staging_for_integration hidden">
            <div class="form-check ptb-0">
                <input id="ytenable_staging_for_integration_val" type="hidden" value="0" name="TenantProfile[enable_staging_for_integration]"/>
                <input title="" class="form-check-input" id="enable_staging_for_integration_val" name="TenantProfile[enable_staging_for_integration]" value="1" type="checkbox"/>
                <label class="m-0">
                    Enable integrated booking for Flights and Accommodation with Yatra staging environment
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable integrated booking for Flights and Accommodation with Yatra staging environment </div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group searchable col-md-6">
                <div class="form-group sbt_details ">
                    <label class="m-0">
                        Company Code
                                        
                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Company code can be obtained by the travel technology partner or the associated TMC partner. </div>">
                            <df class="db-Infromation"></df>
                        </a>
                    </label>
                    <input class="db-input width-100" name="TenantProfile[varank_company_code]" id="TenantProfile_varank_company_code" type="text" value="DA3000005"/>
                </div>
            </div>
            <div class="form-group searchable mmt_corp_id hidden col-md-6">
                <div class="form-group">
                    <label class="m-0">Travel integration CORP ID</label>
                    <input class="db-input width-100" name="TenantProfile[integration_mmt_code]" id="TenantProfile_integration_mmt_code" type="text" value=""/>
                </div>
            </div>
        </div>
        <div class="col-md-12 p-0">
            <div class="form-group col-md-6 searchable">
                <div class="form-check ptb-0">
                    <input id="ytenable_te_gst_master" type="hidden" value="0" name="TenantProfile[enable_te_gst_master]"/>
                    <input title="" class="form-check-input" id="enable_te_gst_master" name="TenantProfile[enable_te_gst_master]" value="1" type="checkbox"/>
                    <label class="m-0">Enable GST Master
                                        </label>
                </div>
            </div>
            <div class="form-group col-md-6 searchable">
                <div class="form-check ptb-0">
                    <input id="ytenable_travel_expense_budgeting" type="hidden" value="0" name="TenantProfile[enable_travel_expense_budgeting]"/>
                    <input title="" class="form-check-input" id="enable_travel_expense_budgeting" name="TenantProfile[enable_travel_expense_budgeting]" value="1" checked="checked" type="checkbox"/>
                    <label class="m-0">
                        Enable budgeting and applicable restrictions in Travel and Expense
                                            
                        <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Enable department level or cost center level budgets for better cost control </div>">
                            <df class="db-Infromation"></df>
                        </a>
                    </label>
                </div>
                <div class="mt-16 budget_type_div searchable">
                    <select class="form-control" name="TenantProfile[travel_expense_budget_type]" id="TenantProfile_travel_expense_budget_type">
                        <option value="department" selected="selected">Department</option>
                        <option value="project">Project</option>
                        <option value="all_cost_centre">Cost Centres</option>
                        <option value="employee_cost_centre">Employee Cost Centre</option>
                        <option value="department_cost_centre">Department Cost Centre</option>
                        <option value="business_unit_cost_centre">Business Unit Cost Centre</option>
                        <option value="functional_area_cost_centre">Functional Area Cost Centre</option>
                        <option value="division_cost_center">Division Cost center</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_darwin_sense_reimb" type="hidden" value="0" name="TenantProfile[enable_darwin_sense_reimb]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_darwin_sense_reimb]" id="TenantProfile_enable_darwin_sense_reimb" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable Darwin Sense in Reimbursement
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>When enabled, smartchecks will be shown for reimbursements to approvers and admins</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_real_time_currency_conversion" type="hidden" value="0" name="TenantProfile[real_time_currency_conversion]"/>
                <input title="" class="form-check-input" name="TenantProfile[real_time_currency_conversion]" id="TenantProfile_real_time_currency_conversion" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable Real-Time Currency Conversion
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>When this is enabled, real time currency conversion will be fetched in travel module using Xi APIs. Please note that this is a paid feature</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_new_ux_reimbursement" type="hidden" value="0" name="TenantProfile[enable_new_ux_reimbursement]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_new_ux_reimbursement]" id="TenantProfile_enable_new_ux_reimbursement" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable new UI for Reimbursement
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This will enable th new UX screens for Reimbursement</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytenable_sync_of_expenses" type="hidden" value="0" name="TenantProfile[enable_sync_of_expenses]"/>
                <input title="" class="form-check-input" id="enable_sync_of_expenses" name="TenantProfile[enable_sync_of_expenses]" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable Expense Sync
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>When this is enabled, the client will have access to imports and API to sync expenses from the below mentioned partners. Please note this is a paid feature. </div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
            <div class="mt-16 allowed_expense_sync_types_div searchable">
                <label>Select Expense Sync Types</label>
                <select class="chzn-select db-input width-100 form-select dbSelect" id="automatic_retrigger_tasks" data-placeholder="Select Option" multiple="multiple" name="TenantProfile[allowed_expense_sync_types][]">
                    <option value="1" selected="selected">Uber expense sync</option>
                    <option value="2" selected="selected">Expense sync for Visa Cards</option>
                    <option value="3" selected="selected">Expense sync for generic cards transaction</option>
                    <option value="4" selected="selected">Expense sync for PineLabs Pre-paid cards</option>
                </select>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_new_travel" type="hidden" value="0" name="TenantProfile[enable_new_travel]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_new_travel]" id="TenantProfile_enable_new_travel" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">
                    Enable new UI for Travel
                                        
                    <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>This will enable the new UX screens for Travel</div>">
                        <df class="db-Infromation"></df>
                    </a>
                </label>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!-- Vibe -->
<div class="tab_container clearfix hidden" id="tab_container_20">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0 active">Others
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_pulse" type="hidden" value="0" name="TenantProfile[enable_pulse]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_pulse]" id="TenantProfile_enable_pulse" value="1" type="checkbox"/>
                <label class="m-0">Enable pulse
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_banned_words_export" type="hidden" value="0" name="TenantProfile[banned_words_export]"/>
                <input title="" class="form-check-input" name="TenantProfile[banned_words_export]" id="TenantProfile_banned_words_export" value="1" type="checkbox"/>
                <label class="">Export Tenant Banned Words
                                    </label>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-6 searchable">
            <label class="">Block Welcome Message on Vibe</label>
            <select class="ui search searchabledropdown db-dropdown form-control dbSelect" name="TenantProfile[block_welcome_msg_vibe]" id="TenantProfile_block_welcome_msg_vibe">
                <option value="">Select</option>
                <optgroup label="Assignments">
                    <option value="a62d1a994c9119">BHAN1</option>
                    <option value="a6302a7088cc98">jhansi assignment</option>
                    <option value="a6320758f0d731">yashu user assignment</option>
                    <option value="a635182bbd373d">J Assignment</option>
                    
                </optgroup>
            </select>
        </div>
    </div>
</div>
<!-- Visitor Management -->
<div class="tab_container clearfix hidden" id="tab_container_21">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_visitor_management" type="hidden" value="0" name="TenantProfile[visitor_management]"/>
                <input title="" class="form-check-input" name="TenantProfile[visitor_management]" id="TenantProfile_visitor_management" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Visitor Management
                                    </label>
            </div>
        </div>
    </div>
</div>
<!-- Journeys -->
<div class="tab_container clearfix hidden" id="tab_container_22">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_journeys" type="hidden" value="0" name="TenantProfile[enable_journeys]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_journeys]" id="TenantProfile_enable_journeys" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Journeys
                                    </label>
            </div>
        </div>
    </div>
</div>
<!-- Workflows -->
<div class="tab_container clearfix hidden" id="tab_container_27">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_flow_assist" type="hidden" value="0" name="TenantProfile[flow_assist]"/>
                <input title="" class="form-check-input" name="TenantProfile[flow_assist]" id="TenantProfile_flow_assist" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable DB Sense Powered Flow Creation
                                    </label>
            </div>
        </div>
    </div>
</div>
<!-- Others -->
<div class="tab_container clearfix hidden" id="tab_container_24">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Others
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">Darwinbox Studio Settings
                                        </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_show_only_self_company_structure" type="hidden" value="0" name="TenantProfile[show_only_self_company_structure]"/>
                <input title="" class="form-check-input" name="TenantProfile[show_only_self_company_structure]" id="TenantProfile_show_only_self_company_structure" value="1" type="checkbox"/>
                <label class="m-0">show only self Firm structure                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_allow_dor_after_lwd" type="hidden" value="0" name="TenantProfile[allow_dor_after_lwd]"/>
                <input title="" class="form-check-input" name="TenantProfile[allow_dor_after_lwd]" id="TenantProfile_allow_dor_after_lwd" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Allow Date of Resignation after Last Working Day
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_disable_confirmationflow_on_contract" type="hidden" value="0" name="TenantProfile[disable_confirmationflow_on_contract]"/>
                <input title="" class="form-check-input" name="TenantProfile[disable_confirmationflow_on_contract]" id="TenantProfile_disable_confirmationflow_on_contract" value="1" type="checkbox"/>
                <label class="m-0">Disable confirmation flow till contract flow is active
                                    </label>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="1">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_studio_designer" type="hidden" value="0" name="TenantProfile[studio_designer]"/>
                <input title="" class="form-check-input" name="TenantProfile[studio_designer]" id="TenantProfile_studio_designer" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Studio Designer
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_flatfile_integration" type="hidden" value="0" name="TenantProfile[flatfile_integration]"/>
                <input title="" class="form-check-input" name="TenantProfile[flatfile_integration]" id="TenantProfile_flatfile_integration" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Flat File Integration
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_hard_limt_for_studio" type="hidden" value="0" name="TenantProfile[hard_limt_for_studio]"/>
                <input title="" class="form-check-input" name="TenantProfile[hard_limt_for_studio]" id="TenantProfile_hard_limt_for_studio" value="1" type="checkbox"/>
                <label class="m-0">Set hard limit on consumption
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_event_framework" type="hidden" value="0" name="TenantProfile[event_framework]"/>
                <input title="" class="form-check-input" name="TenantProfile[event_framework]" id="TenantProfile_event_framework" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Event Framework
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_connectors" type="hidden" value="0" name="TenantProfile[connectors]"/>
                <input title="" class="form-check-input" name="TenantProfile[connectors]" id="TenantProfile_connectors" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Connectors
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_custom_api_builder" type="hidden" value="0" name="TenantProfile[custom_api_builder]"/>
                <input title="" class="form-check-input" name="TenantProfile[custom_api_builder]" id="TenantProfile_custom_api_builder" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Custom API Builder
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_studio_email_listener" type="hidden" value="0" name="TenantProfile[studio_email_listener]"/>
                <input title="" class="form-check-input" name="TenantProfile[studio_email_listener]" id="TenantProfile_studio_email_listener" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Studio Designer Email Listener
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_integration_templates" type="hidden" value="0" name="TenantProfile[integration_templates]"/>
                <input title="" class="form-check-input" name="TenantProfile[integration_templates]" id="TenantProfile_integration_templates" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Integration Templates
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_automation_hub" type="hidden" value="0" name="TenantProfile[automation_hub]"/>
                <input title="" class="form-check-input" name="TenantProfile[automation_hub]" id="TenantProfile_automation_hub" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Automation Hub
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_amplify_assistant_gen_ai" type="hidden" value="0" name="TenantProfile[amplify_assistant_gen_ai]"/>
                <input title="" class="form-check-input" name="TenantProfile[amplify_assistant_gen_ai]" id="TenantProfile_amplify_assistant_gen_ai" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Gen AI Support in Amplify Assistant
                                        </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <label class="">Subscription Type</label>
            <select class="ui search searchabledropdown db-dropdown form-control dbSelect" disabled="disabled" name="TenantProfile[subscription_type]" id="TenantProfile_subscription_type">
                <option value="">Select</option>
                <option value="basic">Basic</option>
                <option value="essential">Essential</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
            </select>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Message Limit/month</label>
            <input class="db-input width-100" disabled="disabled" name="TenantProfile[message_limit_per_month]" id="TenantProfile_message_limit_per_month" type="number" value="100000"/>
        </div>
        <div class="form-group col-md-6 searchable">
            <label>Paycor Tenant ID</label>
            <input class="form-control db-input" name="TenantProfile[paycor_tenant_id]" id="TenantProfile_paycor_tenant_id" type="text"/>
        </div>
    </div>
</div>
<div class="tab_container clearfix hidden" id="tab_container_23">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">Survey
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-2 font-13 mr-12 p-0">Confidential Survey
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_2" class="sub_tab base-2 font-13 mr-12 p-0">Engagement
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_forms_survey_enabled" type="hidden" value="0" name="TenantProfile[forms_survey_enabled]"/>
                <input title="" class="form-check-input forms_survey_enabled" name="TenantProfile[forms_survey_enabled]" id="TenantProfile_forms_survey_enabled" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Surveys
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_show_user_specific_link" type="hidden" value="0" name="TenantProfile[show_user_specific_link]"/>
                <input title="" class="form-check-input" name="TenantProfile[show_user_specific_link]" id="TenantProfile_show_user_specific_link" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Show User Specific Link in Respondents List CSV
                                    </label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable enable_ai_smart_follow_ups hidden">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_ai_smart_follow_ups" type="hidden" value="0" name="TenantProfile[enable_ai_smart_follow_ups]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_ai_smart_follow_ups]" id="TenantProfile_enable_ai_smart_follow_ups" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable AI Smart Follow‑ups
                                    </label>
                <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Let AI generate concise follow‑up acknowledgement message and questions based on each response to make survey filling experience more conversational—no manual setup required.</div>">
                    <df class="db-Infromation"></df>
                </a>
            </div>
        </div>
    </div>
    <div class="plr-12 sub_tab_container clearfix" data-container="1">
        <!-- <div class="form-group col-md-6 searchable"> -->
        <!-- <div class="checkbox dbcheckbox-new checkbox-primary ptb-0"> -->
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_age" type="hidden" value="0" name="TenantProfile[survey][age]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][age]" id="TenantProfile_survey_age" value="1" type="checkbox"/>
                <label class="m-0">Age</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_band" type="hidden" value="0" name="TenantProfile[survey][band]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][band]" id="TenantProfile_survey_band" value="1" type="checkbox"/>
                <label class="m-0">Band</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_bu" type="hidden" value="0" name="TenantProfile[survey][bu]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][bu]" id="TenantProfile_survey_bu" value="1" type="checkbox"/>
                <label class="m-0">Business Unit</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_des" type="hidden" value="0" name="TenantProfile[survey][des]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][des]" id="TenantProfile_survey_des" value="1" type="checkbox"/>
                <label class="m-0">Designation</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_dep" type="hidden" value="0" name="TenantProfile[survey][dep]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][dep]" id="TenantProfile_survey_dep" value="1" type="checkbox"/>
                <label class="m-0">Department</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_div" type="hidden" value="0" name="TenantProfile[survey][div]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][div]" id="TenantProfile_survey_div" value="1" type="checkbox"/>
                <label class="m-0">Division</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_gc" type="hidden" value="0" name="TenantProfile[survey][gc]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][gc]" id="TenantProfile_survey_gc" value="1" type="checkbox"/>
                <label class="m-0">Group Company</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_gender" type="hidden" value="0" name="TenantProfile[survey][gender]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][gender]" id="TenantProfile_survey_gender" value="1" type="checkbox"/>
                <label class="m-0">Gender</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_grade" type="hidden" value="0" name="TenantProfile[survey][grade]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][grade]" id="TenantProfile_survey_grade" value="1" type="checkbox"/>
                <label class="m-0">Grade</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_jl" type="hidden" value="0" name="TenantProfile[survey][jl]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][jl]" id="TenantProfile_survey_jl" value="1" type="checkbox"/>
                <label class="m-0">Job Level</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_location_region" type="hidden" value="0" name="TenantProfile[survey][location_region]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][location_region]" id="TenantProfile_survey_location_region" value="1" type="checkbox"/>
                <label class="m-0">Current Office Location</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_l1_manager" type="hidden" value="0" name="TenantProfile[survey][l1_manager]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][l1_manager]" id="TenantProfile_survey_l1_manager" value="1" type="checkbox"/>
                <label class="m-0">L1 Manager Name and ID</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_l2_manager" type="hidden" value="0" name="TenantProfile[survey][l2_manager]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][l2_manager]" id="TenantProfile_survey_l2_manager" value="1" type="checkbox"/>
                <label class="m-0">L2 Manager Name and ID</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_l3_manager" type="hidden" value="0" name="TenantProfile[survey][l3_manager]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][l3_manager]" id="TenantProfile_survey_l3_manager" value="1" type="checkbox"/>
                <label class="m-0">L3 Manager Name and ID</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_l4_manager" type="hidden" value="0" name="TenantProfile[survey][l4_manager]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][l4_manager]" id="TenantProfile_survey_l4_manager" value="1" type="checkbox"/>
                <label class="m-0">L4 Manager Name and ID</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_l5_manager" type="hidden" value="0" name="TenantProfile[survey][l5_manager]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][l5_manager]" id="TenantProfile_survey_l5_manager" value="1" type="checkbox"/>
                <label class="m-0">L5 Manager Name and ID</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_hod" type="hidden" value="0" name="TenantProfile[survey][hod]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][hod]" id="TenantProfile_survey_hod" value="1" type="checkbox"/>
                <label class="m-0">HOD</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_hrbp_role" type="hidden" value="0" name="TenantProfile[survey][hrbp_role]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][hrbp_role]" id="TenantProfile_survey_hrbp_role" value="1" type="checkbox"/>
                <label class="m-0">HRBP</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_dotted_line_manager" type="hidden" value="0" name="TenantProfile[survey][dotted_line_manager]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][dotted_line_manager]" id="TenantProfile_survey_dotted_line_manager" value="1" type="checkbox"/>
                <label class="m-0">Dotted Line Manager</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_business_unit_hr" type="hidden" value="0" name="TenantProfile[survey][business_unit_hr]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][business_unit_hr]" id="TenantProfile_survey_business_unit_hr" value="1" type="checkbox"/>
                <label class="m-0">Business Unit HR</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_functional_head" type="hidden" value="0" name="TenantProfile[survey][functional_head]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][functional_head]" id="TenantProfile_survey_functional_head" value="1" type="checkbox"/>
                <label class="m-0">Functional Head</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_head_hrs" type="hidden" value="0" name="TenantProfile[survey][head_hrs]"/>
                <input title="" checked="checked" class="form-check-input" name="TenantProfile[survey][head_hrs]" id="TenantProfile_survey_head_hrs" value="1" type="checkbox"/>
                <label class="m-0">Head HR</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_group_head_hrs" type="hidden" value="0" name="TenantProfile[survey][group_head_hrs]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][group_head_hrs]" id="TenantProfile_survey_group_head_hrs" value="1" type="checkbox"/>
                <label class="m-0">Group HR Head</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_office_location_head" type="hidden" value="0" name="TenantProfile[survey][office_location_head]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][office_location_head]" id="TenantProfile_survey_office_location_head" value="1" type="checkbox"/>
                <label class="m-0">Location Head</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_business_unit_head" type="hidden" value="0" name="TenantProfile[survey][business_unit_head]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][business_unit_head]" id="TenantProfile_survey_business_unit_head" value="1" type="checkbox"/>
                <label class="m-0">Business Unit Head</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_office_location_type" type="hidden" value="0" name="TenantProfile[survey][office_location_type]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][office_location_type]" id="TenantProfile_survey_office_location_type" value="1" type="checkbox"/>
                <label class="m-0">Location Type</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_region_id" type="hidden" value="0" name="TenantProfile[survey][region_id]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][region_id]" id="TenantProfile_survey_region_id" value="1" type="checkbox"/>
                <label class="m-0">Region</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_office_location_centre_type_id" type="hidden" value="0" name="TenantProfile[survey][office_location_centre_type_id]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][office_location_centre_type_id]" id="TenantProfile_survey_office_location_centre_type_id" value="1" type="checkbox"/>
                <label class="m-0">Center Type</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_office_location_city_type_id" type="hidden" value="0" name="TenantProfile[survey][office_location_city_type_id]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][office_location_city_type_id]" id="TenantProfile_survey_office_location_city_type_id" value="1" type="checkbox"/>
                <label class="m-0">City Type</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_capability_name" type="hidden" value="0" name="TenantProfile[survey][capability_name]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][capability_name]" id="TenantProfile_survey_capability_name" value="1" type="checkbox"/>
                <label class="m-0">Capability</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_last_promotion_date" type="hidden" value="0" name="TenantProfile[survey][last_promotion_date]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][last_promotion_date]" id="TenantProfile_survey_last_promotion_date" value="1" type="checkbox"/>
                <label class="m-0">Last Promoted Date</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_on_notice_check" type="hidden" value="0" name="TenantProfile[survey][on_notice_check]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][on_notice_check]" id="TenantProfile_survey_on_notice_check" value="1" type="checkbox"/>
                <label class="m-0">Is On Notice Period</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_functional_area_hierarchy" type="hidden" value="0" name="TenantProfile[survey][functional_area_hierarchy]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][functional_area_hierarchy]" id="TenantProfile_survey_functional_area_hierarchy" value="1" type="checkbox"/>
                <label class="m-0">Functional Area Hierarchy</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_department_hierarchy_from_top" type="hidden" value="0" name="TenantProfile[survey][department_hierarchy_from_top]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][department_hierarchy_from_top]" id="TenantProfile_survey_department_hierarchy_from_top" value="1" type="checkbox"/>
                <label class="m-0">Department Hierarchy from top</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_department_hierarchy_from_bottom" type="hidden" value="0" name="TenantProfile[survey][department_hierarchy_from_bottom]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][department_hierarchy_from_bottom]" id="TenantProfile_survey_department_hierarchy_from_bottom" value="1" type="checkbox"/>
                <label class="m-0">Department Hierarchy from bottom</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_parent_department" type="hidden" value="0" name="TenantProfile[survey][parent_department]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][parent_department]" id="TenantProfile_survey_parent_department" value="1" type="checkbox"/>
                <label class="m-0">Parent Department</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_top_department" type="hidden" value="0" name="TenantProfile[survey][top_department]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][top_department]" id="TenantProfile_survey_top_department" value="1" type="checkbox"/>
                <label class="m-0">Top Department</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_contribution_level" type="hidden" value="0" name="TenantProfile[survey][contribution_level]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][contribution_level]" id="TenantProfile_survey_contribution_level" value="1" type="checkbox"/>
                <label class="m-0">Contribution Level</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_standard_role1" type="hidden" value="0" name="TenantProfile[survey][standard_role1]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][standard_role1]" id="TenantProfile_survey_standard_role1" value="1" type="checkbox"/>
                <label class="m-0">Standard Role 1</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_standard_role2" type="hidden" value="0" name="TenantProfile[survey][standard_role2]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][standard_role2]" id="TenantProfile_survey_standard_role2" value="1" type="checkbox"/>
                <label class="m-0">Standard Role 3</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_standard_role3" type="hidden" value="0" name="TenantProfile[survey][standard_role3]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][standard_role3]" id="TenantProfile_survey_standard_role3" value="1" type="checkbox"/>
                <label class="m-0">Standard Role 3</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_tenure" type="hidden" value="0" name="TenantProfile[survey][tenure]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][tenure]" id="TenantProfile_survey_tenure" value="1" type="checkbox"/>
                <label class="m-0">Tenure from Date of Joining</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_assignment_one" type="hidden" value="0" name="TenantProfile[survey][assignment_one]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][assignment_one]" id="TenantProfile_survey_assignment_one" value="1" type="checkbox"/>
                <label class="m-0">Assignment One Name</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_assignment_two" type="hidden" value="0" name="TenantProfile[survey][assignment_two]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][assignment_two]" id="TenantProfile_survey_assignment_two" value="1" type="checkbox"/>
                <label class="m-0">Assignment two Name</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_assignment_three" type="hidden" value="0" name="TenantProfile[survey][assignment_three]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][assignment_three]" id="TenantProfile_survey_assignment_three" value="1" type="checkbox"/>
                <label class="m-0">Assignment Three Name</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_functional_area_name" type="hidden" value="0" name="TenantProfile[survey][functional_area_name]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][functional_area_name]" id="TenantProfile_survey_functional_area_name" value="1" type="checkbox"/>
                <label class="m-0">Functional Area</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_cost_center_name" type="hidden" value="0" name="TenantProfile[survey][cost_center_name]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][cost_center_name]" id="TenantProfile_survey_cost_center_name" value="1" type="checkbox"/>
                <label class="m-0">JV Cost center</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_sub_type" type="hidden" value="0" name="TenantProfile[survey][sub_type]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][sub_type]" id="TenantProfile_survey_sub_type" value="1" type="checkbox"/>
                <label class="m-0">Employee Sub Type</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_employee_type" type="hidden" value="0" name="TenantProfile[survey][employee_type]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][employee_type]" id="TenantProfile_survey_employee_type" value="1" type="checkbox"/>
                <label class="m-0">Employee Type</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_employee_no" type="hidden" value="0" name="TenantProfile[survey][employee_no]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][employee_no]" id="TenantProfile_survey_employee_no" value="1" type="checkbox"/>
                <label class="m-0">E ID</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_user_id" type="hidden" value="0" name="TenantProfile[survey][user_id]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][user_id]" id="TenantProfile_survey_user_id" value="1" type="checkbox"/>
                <label class="m-0">U ID</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_ip" type="hidden" value="0" name="TenantProfile[survey][ip]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][ip]" id="TenantProfile_survey_ip" value="1" type="checkbox"/>
                <label class="m-0">IP</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_submission_time" type="hidden" value="0" name="TenantProfile[survey][submission_time]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][submission_time]" id="TenantProfile_survey_submission_time" value="1" type="checkbox"/>
                <label class="m-0">Submission Time</label>
            </div>
        </div>
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_survey_time_zone" type="hidden" value="0" name="TenantProfile[survey][time_zone]"/>
                <input title="" class="form-check-input" name="TenantProfile[survey][time_zone]" id="TenantProfile_survey_time_zone" value="1" type="checkbox"/>
                <label class="m-0">Time Zone</label>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-6 searchable">
            <label>
                Minimum attribute size to view results
                                    
                <a href="javascript:void(0)" class="vertical-align-middle inline-block base-2 font-16" data-bs-toggle="popover" data-bs-html="true" data-bs-content="<div class='p-12'>Minimum size of the employee attributes needed to show the responses in survey analyzer</div>">
                    <df class="db-Infromation"></df>
                </a>
            </label>
            <input class="db-input width-100" min="1" required="required" name="TenantProfile[max_size_view_results]" id="TenantProfile_max_size_view_results" type="number" value="5"/>
        </div>
        <!-- </div> -->
        <!-- </div> -->
    </div>
    <div class="plr-12 sub_tab_container clearfix" data-container="2">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_engagement_survey_enabled" type="hidden" value="0" name="TenantProfile[engagement_survey_enabled]"/>
                <input title="" class="form-check-input engagement_survey_enabled" name="TenantProfile[engagement_survey_enabled]" id="TenantProfile_engagement_survey_enabled" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Engagement
                                    </label>
            </div>
        </div>
    </div>
</div>
<!-- Timesheets -->
<div class="tab_container clearfix hidden" id="tab_container_25">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_1" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
</div>
<!-- Virtual ID Card-->
<div class="tab_container clearfix hidden" id="tab_container_26">
    <div class="ptb-12 plr-20 bg-tint-blue-2">
        <ul id="" class="vertical_tabs m-0 p-0">
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_all" class="sub_tab base-1 font-13 mr-12 p-0 active">All
                                    </a>
            </li>
            <li class="inline-block vertical-align-middle p-0">
                <a href="javascript:void(0)" data-tab="sub_tab_0" class="sub_tab base-1 font-13 mr-12 p-0">New Feature
                                    </a>
            </li>
        </ul>
    </div>
    <div class="plr-12 sub_tab_container clearfix hidden" data-container="0">
        <div class="form-group col-md-6 searchable">
            <div class="form-check ptb-0">
                <input id="ytTenantProfile_enable_virtual_id_card" type="hidden" value="0" name="TenantProfile[enable_virtual_id_card]"/>
                <input title="" class="form-check-input" name="TenantProfile[enable_virtual_id_card]" id="TenantProfile_enable_virtual_id_card" value="1" checked="checked" type="checkbox"/>
                <label class="m-0">Enable Virtual ID Card
                                    </label>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
</form></div></div></div></section><script>
    if ($("#enable_verification_partner_for_Onboarding").is(":checked")) {
        $(".show_verification_partners").removeClass("hidden");
        showPartnerIdField();
    }
    $(document.body).on("change", "#enable_selfbi", function() {
        if ($(this).is(":checked")) {
            $(".selfbi_dashboards_container").removeClass('hidden');
        } else {
            $(".selfbi_dashboards_container").addClass('hidden');
            $("#selfbi_no_of_dashboards").val(5);
            // set default value if unchecked
        }
    });
    $(document.body).on("change", "#analytics_limits_cb", function() {
        if ($(this).is(":checked")) {
            $(".analytics_limits_container").removeClass('hidden');
        } else {
            $(".analytics_limits_container").addClass('hidden');
            $("#enable_selfbi").prop('checked', false);
            $(".selfbi_dashboards_container").addClass('hidden');
        }
    });

    $(document.body).on("change", "#selfbi_no_of_dashboards", function() {
        let val = parseInt($(this).val(), 10);
        const min = 1;
        const max = 100;
        if (isNaN(val) || val < min) {
            alert("Number of dashboards must be at least " + min);
            $(this).val(22);
        } else if (val > max) {
            alert("Number of dashboards cannot exceed " + max);
            $(this).val(100);
        }
    });

    function showPartnerIdField() {
        var verification_partners = $("#verification_partners").val();
        verification_partners.forEach( (verification_partner) => {
            $("#" + verification_partner + "_id").removeClass("hidden");
        }
        );
        var unselectedOptions = $('#verification_partners option:not(:selected)').map(function() {
            return $(this).val();
        }).get();
        unselectedOptions.forEach( (unselectedOption) => {
            $("#" + unselectedOption + "_id_text").val("");
        }
        );
    }
    $(document.body).on("change", "#verification_partners", function(e) {
        $(".partner_id").addClass('hidden');
        showPartnerIdField();
    });

    //E-Verify scripts
    $(document.body).on("click", ".reset-input-fields", () => {
        $(".everify-input-fields input").val("");
    }
    );
    $(document.body).on("change", "#enable_everify_integration", () => {
        const isEnabled = $("#enable_everify_integration").is(":checked");
        $(".everify-input-fields").toggleClass("hidden", !isEnabled);
        $(".enable_production_everify-radio").toggleClass("hidden", !isEnabled);
        $('.enable_production_everify[value="0"]').prop('checked', true);
    }
    );

    $(document).ready(function() {
        $(".v_tabs li").each(function() {
            var section = $(this).find(".text").text().trim().toLowerCase().replace(/ /g, "-");
            $(this).attr("data-module", section)
        })
        $("#integration_with_travel_partner").chosen();
        $("#integration_with_travel_partner_fare").chosen();
        $('#google_api_key_editor').chosen();
        $(".hr_docs_advanced_access").chosen({
            width: '100% !important'
        });

        $("#travel_sbt_modes").chosen();

        $(document).on("keyup", ".search_module", function() {
            search_term = $(this).val().toLowerCase().replace(/ /g, "-");
            console.log(search_term)
            if (search_term.length) {
                $(".v_tabs li").addClass("hidden")
                $(".v_tabs li[data-module*='" + search_term + "']").each(function() {
                    $(this).removeClass("hidden")
                })
            } else {
                $(".v_tabs li").removeClass("hidden")
            }
        })

        $(".form-group").each(function() {
            var fieldName = $(this).find("label").text();
            $(this).attr("data-field", fieldName.trim().toLowerCase().replace(/ /g, "-"))
        });

        $(".sub_tab_container").each(function() {
            var container = $(this).attr("data-container")
            var subTab = $(this).closest(".tab_container").find("a[data-tab='sub_tab_" + container + "']").text().trim()

            var containerID = $(this).closest(".tab_container").attr("id").split("_")[2]
            var tab = $("#tab_" + containerID).text().trim()

            $(this).prepend("<div class='plr-12 mtb-16 base-2' style='font-weight: 500;'>" + tab + " <df class='db-Chevron-right font-20 inline-block vertical-align-top'></df> " + subTab + "</div>")
        })

        $(".tab_container").each(function() {
            var tab = $(this).attr("id").split("_")[2]
            var count = $(this).find(".form-group.searchable").length
            $("#tab_" + tab).find(".count").text(count)
        })

        function resetTabs(searchTerm) {
            $(".tab_container").addClass("hidden")
            $(".sub_tab_container").addClass("hidden")
            if (!searchTerm) {
                $(".tab_container:first").removeClass("hidden")
                $(".tab_container:first .sub_tab_container:first").removeClass("hidden")
            }
        }

        $("#verification_partners").chosen({
            width: '100% !important'
        });
        $("#allowed_language, #ai_process_enabled_components, #allowed_secondary_calendar_types , #automatic_retrigger_tasks, .db-chosen").chosen({
            width: '100% !important'
        });
        $("#enable_alumni_portal_modules").chosen({
            width: '100% !important'
        });
        $("#hrdocs_allowed_language").chosen({
            width: '100% !important'
        });
        var popoverTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle=\"popover\"]"))
        var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl,{
                trigger: "hover",
                placement: "top",
                html: true,
                container: "body"
            })
        });

        $(document).on("click", ".clear", function() {
            $(".search_settings_field").val("")
            $(".search_settings_field").trigger("keyup")
        })

        $(document).on("keyup", ".search_settings_field", function() {

            var searchTerm = $(".search_settings_field").val()
            searchTerm = searchTerm.trim().toLowerCase().replace(/ /g, "-");

            resetTabs(searchTerm.length)

            if (searchTerm.length) {
                $(".form-group.searchable[data-field*='" + searchTerm + "']").removeClass("hidden")
                $(".form-group.searchable:not([data-field*='" + searchTerm + "'])").addClass("hidden")

                $(".sub_tab_container").each(function() {
                    if ($(this).find(".form-group.searchable:not(.hidden)").length) {
                        $(this).closest(".tab_container").removeClass("hidden")
                        $(this).removeClass("hidden")
                    }
                })

                $(".tab_container .bg-tint-blue-2").addClass("hidden")
                $(".header h2").addClass("hidden")
                $(".clear").removeClass("hidden")

                if ($(".form-group.searchable").length == $(".form-group.searchable.hidden").length) {
                    $(".empty_state_text").removeClass("hidden")
                } else {
                    $(".empty_state_text").addClass("hidden")
                }
                if ($("#travel_integration").is(":checked")) {
                    $(".integration_with_travel_partners, .mmt_corp_id").removeClass("hidden");
                }
                if ($("#travel_integration_fare").is(":checked")) {
                    $(".integration_with_travel_partners_fare, .mmt_corp_id").removeClass("hidden");
                }
            } else {
                $(".form-group.searchable[data-field]").removeClass("hidden")
                $(".tab_container .bg-tint-blue-2").removeClass("hidden")
                $(".header h2").removeClass("hidden")
                $(".header h2").text($(".v_tabs li:first a .text").text());
                $(".empty_state_text").addClass("hidden")
                $(".clear").addClass("hidden")
                resetTabs(searchTerm.length)
                $(".v_tabs li a").removeClass("active");
                $(".v_tabs li:first a").addClass("active");
            }

        });

        $(document).on("click", ".enable_rate_limiting", function() {
            if ($(".enable_rate_limiting:checked").length == 1) {
                $("#rate_limiting_details").removeClass("opacity-0");
                $(".rate_limiting_req").prop("required", true);
            } else {
                $("#rate_limiting_details").addClass("opacity-0");
                $(".rate_limiting_req").prop("required", false);
            }
        });
        if ($(".enable_rate_limiting:checked").length == 1) {
            $("#rate_limiting_details").removeClass("opacity-0");
            $(".rate_limiting_req").prop("required", true);
        } else {
            $("#rate_limiting_details").addClass("opacity-0");
            $(".rate_limiting_req").prop("required", false);
        }

        $(document).on("click", ".two_factor_auth_otp", function() {
            if ($(".two_factor_auth_otp:checked").length == 1) {
                $("#two_factor_auth_type").removeClass("opacity-0");
                $(".two_factor_auth_type").prop("required", true);
            } else {
                $("#two_factor_auth_type").addClass("opacity-0");
                $(".two_factor_auth_type").prop("required", false);
            }
        });
        if ($(".two_factor_auth_otp:checked").length == 1) {
            $("#two_factor_auth_type").removeClass("opacity-0");
            $(".two_factor_auth_type").prop("required", true);
        } else {
            $("#two_factor_auth_type").addClass("opacity-0");
            $(".two_factor_auth_type").prop("required", false);
        }

        $(document).on("click", ".external_recruiter_two_factor_auth", function() {
            if ($(".external_recruiter_two_factor_auth:checked").length == 1) {
                $("#external_recruiter_two_factor_auth_otp_type").removeClass("opacity-0");
                $(".external_recruiter_two_factor_auth_otp_type").prop("required", true);
            } else {
                $("#external_recruiter_two_factor_auth_otp_type").addClass("opacity-0");
                $(".external_recruiter_two_factor_auth_otp_type").prop("required", false);
            }
        });
        if ($(".external_recruiter_two_factor_auth:checked").length == 1) {
            $("#external_recruiter_two_factor_auth_otp_type").removeClass("opacity-0");
            $(".external_recruiter_two_factor_auth_otp_type").prop("required", true);
        } else {
            $("#external_recruiter_two_factor_auth_otp_type").addClass("opacity-0");
            $(".external_recruiter_two_factor_auth_otp_type").prop("required", false);
        }

        if ($(".enable_sec_10_new_regime").is(":checked")) {
            $(".enable_sec_10_div").removeClass("hidden");
        } else {
            $(".enable_sec_10_div").addClass("hidden");
        }

        if ($(".enable_80TT").is(":checked")) {
            $(".enable_80TT_div").removeClass("hidden");
        } else {
            $(".enable_80TT_div").addClass("hidden");
        }
        if ($(".chck_enable_element_gratuity").is(":checked")) {
            $(".enable_div_element_gratuity").removeClass("hidden");
        } else {
            $(".enable_div_element_gratuity").addClass("hidden");
        }
        toggleOldFNFIndividualGratuity()
    })
    $(".enable_sec_10_new_regime").click(function() {
        if ($(this).is(":checked")) {
            $(".enable_sec_10_div").removeClass("hidden");
        } else {
            $(".enable_sec_10_div").addClass("hidden");
        }
    });
    $(".enable_80TT").click(function() {
        if ($(this).is(":checked")) {
            $(".enable_80TT_div").removeClass("hidden");
        } else {
            $(".enable_80TT_div").addClass("hidden");
        }
    });
    $(".chck_enable_element_gratuity").click(function() {
        if ($(this).is(":checked")) {
            $(".enable_div_element_gratuity").removeClass("hidden");
        } else {
            $(".enable_div_element_gratuity").addClass("hidden");
        }
    });
    $("#selected_comps_sec_10_id").chosen();
    $("#selected_comps_80TT_id").chosen();
    $("#disable_gratuity_for_this_companies").chosen();

    $(document).on("click", ".collapse-left-nav", function() {
        $(".hide-on-collapse").fadeOut(100);
        $(".left-panel").animate({
            'width': '55px'
        }, 100);
        $(this).closest(".left-panel").removeClass("expanded").addClass("collapsed");
        $(this).find("df").removeClass("db-Chevron-left").addClass("db-Chevron-right");
        $(this).removeClass("collapse-left-nav").addClass("expand-left-nav");
        $(".right-panel").animate({
            'padding-left': '55px'
        }, 100);
    });

    $(document).on("click", ".expand-left-nav", function() {
        $(".hide-on-collapse").fadeIn(100);
        $(".left-panel").animate({
            'width': '240px'
        }, 100);
        $(this).closest(".left-panel").removeClass("collapsed").addClass("expanded");
        $(this).find("df").removeClass("db-Chevron-right").addClass("db-Chevron-left");
        $(this).removeClass("expand-left-nav").addClass("collapse-left-nav");
        $(".right-panel").animate({
            'padding-left': '240px'
        }, 100);
    });

    $(document).on("mouseenter", ".left-panel.collapsed", function() {
        $(".hide-on-collapse").fadeIn(100);
        $(".left-panel").animate({
            'width': '240px'
        }, 100);
    });

    $(document).on("mouseleave", ".left-panel.collapsed", function() {
        $(".hide-on-collapse").fadeOut(100);
        $(".left-panel").animate({
            'width': '55px'
        }, 100);
    });

    $(document).on("click", ".v_tabs li a", function() {
        var heading = $(this).find(".text").text();
        $(".header h2").text(heading);

        $(".v_tabs li a").removeClass("active");
        $(this).addClass("active");

        tab = $(this).attr("id").split("_")[1];
        $(".tab_container").addClass("hidden");
        $("#tab_container_" + tab).removeClass("hidden");

        $("#tab_container_" + tab).find(".sub_tab").removeClass("active");
        $("#tab_container_" + tab).find(".sub_tab:first").addClass("active");

        $("#tab_container_" + tab).find(".sub_tab_container").removeClass("hidden")

    })

    $(document).on("click", ".sub_tab", function() {
        subTab = $(this).attr("data-tab").split("_")[2];
        $(this).closest(".vertical_tabs").find(".sub_tab").removeClass("active");
        $(this).addClass("active");
        if (subTab == 'all') {
            $(this).closest(".tab_container").find(".sub_tab_container").removeClass("hidden");
        } else {
            $(this).closest(".tab_container").find("div[data-container]").addClass("hidden");
            $(this).closest(".tab_container").find("div[data-container='" + subTab + "']").removeClass("hidden");
        }
    })

    $(document.body).on("change", ".enable_alumni_portal", function(e) {
        if ($(this).is(":checked")) {
            $(".enable_module_alumni").removeClass("hidden").addClass("searchable");

        } else {
            $(".enable_module_alumni").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", ".language", function(e) {
        if ($(this).is(":checked")) {
            $(".allow_languages").removeClass("hidden").addClass("searchable");

        } else {
            $(".allow_languages").addClass("hidden").removeClass("searchable");
        }
    });

    $(document.body).on("change", "#enable_reports_duration", function(e) {
        if ($(this).is(":checked")) {
            $(".bi_or_anually_or_custom_radiobuttons").removeClass("hidden").addClass("searchable");
        } else {
            $(".bi_or_anually_or_custom_radiobuttons").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", "#enable_location_search_basis_google_apis", function(e) {
        $("#allow_recording_distance_via_google_api").prop('checked', false);
        if ($(this).is(":checked")) {
            $(".allow_recording_distance_via_google_api_div").removeClass("hidden").addClass("searchable");
        } else {
            $("#allow_overwriting_distance_recorded").prop('checked', false);
            $(".allow_overwriting_distance_recorded_div").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", "#allow_recording_distance_via_google_api", function(e) {
        $("#allow_overwriting_distance_recorded").prop('checked', false);
        if ($(this).is(":checked")) {
            $(".allow_overwriting_distance_recorded_div").removeClass("hidden").addClass("searchable");
        } else {
            $(".allow_overwriting_distance_recorded_div").addClass("hidden").removeClass("searchable");
        }
    });

    $(document.body).on("change", "#helpdesk_enable_vendor", function(e) {
        if ($(this).is(":checked")) {
            $("#allow_vendor").removeClass("hidden").addClass("searchable");
        } else {
            $("#allow_vendor").addClass("hidden").removeClass("searchable");
            document.getElementById("vendor_count").value = '3';
        }
    });
    if ($("#google_api_key").is(":checked")) {
        $(".google_api_key_editors").removeClass("hidden");
    } else if (1) {
        $(".google_api_key_editors").addClass("hidden");
    }

    $(document.body).on("change", "#google_api_key", function() {
        if ($(this).is(":checked")) {
            $(".google_api_key_editors").removeClass("hidden");
        } else {
            $(".google_api_key_editors").addClass("hidden");
        }
    });
    $(document.body).on("change", "#travel_integration , #integration_with_travel_partner", function(e) {
        updateIntegrationStagingVisibility();
    });

    $(document.body).on("change", "#travel_integration_fare , #integration_with_travel_partner_fare", function(e) {
        updateIntegrationStagingVisibilityFare();
    });
    $(document.body).on("change", "#travel_sbt", function(e) {
        if ($('#travel_sbt').is(':checked')) {
            $('.sbt_details').removeClass("hidden");
        } else {
            $('.sbt_details').addClass("hidden");
            $('#travel_sbt_modes').val([]).trigger("chosen:updated");
        }
    });
    $(document.body).on("change", "#enable_default_scale_for_harmonization", function(e) {
        if ($(this).is(":checked")) {
            $(".show_on_default_scale_for_harmonization").removeClass("hidden").addClass("searchable");
        } else {
            $(".show_on_default_scale_for_harmonization").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", ".allow_multiple_sets_combined_balance_checkbox", function(e) {
        if ($(this).is(":checked")) {
            $("#combined_leave_bal_sets").removeClass("hidden").addClass("searchable");
        } else {
            $("#combined_leave_bal_sets").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", ".candidate_sourcing_extension", function(e) {
        if ($(this).is(":checked")) {
            $(".candidate_sourcing_extension_show").removeClass("hidden").addClass("searchable");
            if ($("#candidate_sourcing_extension_portal_id").val() == "") {
                $(".job_portal_source").removeClass("hidden")
            }
        } else {
            $(".candidate_sourcing_extension_show").addClass("hidden").removeClass("searchable");
            $(".job_portal_source").addClass("hidden")
        }
    });
    $(document.body).on("change", "#enable_default_scale_for_skill", function(e) {
        if ($(this).is(":checked")) {
            $(".show_on_default_scale_for_skill").removeClass("hidden").addClass("searchable");
        } else {
            $(".show_on_default_scale_for_skill").addClass("hidden").removeClass("searchable");
        }
    });

    $(document.body).on("change", ".buffer_over_lap_period", function(e) {
        if ($(this).is(":checked")) {
            $(".buffer_over_lap_period_rules").removeClass("hidden").addClass("searchable");
        } else {
            $(".buffer_over_lap_period_rules").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", ".buffer_over_lap_period_rules_drop", function(e) {
        if ($(this).val() == 1) {
            $(".buffer_over_lap_period_rules_grace").removeClass("hidden").addClass("searchable");
        } else {
            $(".buffer_over_lap_period_rules_grace").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", "#enable_travel_expense_budgeting", function() {
        if ($(this).is(":checked")) {
            $(".budget_type_div").removeClass("hidden").addClass("searchable");
        } else {
            $(".budget_type_div").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", "#cost_center_checks", function(e) {
        if ($(this).is(":checked")) {
            $(".cost_centers_value").removeClass("hidden");

        } else {
            $(".cost_centers_value").addClass("hidden");
            $("#assign_multiple_cost_centers_to_employee_value").val("");
        }
    });

    $(document.body).on("change", "#enable_verification_partner_for_Onboarding", function(e) {
        $(".partner_id").addClass('hidden');
        if ($(this).is(":checked")) {
            $(".show_verification_partners").removeClass("hidden");
            showPartnerIdField();
        } else {
            $(".show_verification_partners").addClass("hidden");
        }
    });

    function updateIntegrationStagingVisibility() {
        if ($('#travel_integration').is(':checked')) {
            $('.integration_with_travel_partners').removeClass("hidden");
            var selectedOptions = $('#integration_with_travel_partner').val();
            if (selectedOptions.includes('integration_with_yatra')) {
                $('.enable_staging_for_integration').removeClass("hidden");
            } else {
                $('.enable_staging_for_integration').addClass("hidden");
                $('.enable_staging_for_integration input[type="checkbox"]').prop("checked", false);
            }

        } else {
            $('.integration_with_travel_partners').addClass("hidden");
        }
        updateCorpId();
    }

    function updateCorpId() {
        if ($('#travel_integration').is(':checked') || $('#travel_integration_fare').is(':checked')) {
            $('.mmt_corp_id').removeClass("hidden");
        } else {
            $('.mmt_corp_id').addClass("hidden");
        }
    }

    function updateIntegrationStagingVisibilityFare() {
        if ($('#travel_integration_fare').is(':checked')) {
            $('.integration_with_travel_partners_fare').removeClass("hidden");
            var selectedOptions = $('#integration_with_travel_partner_fare').val();
        } else {
            $('.integration_with_travel_partners_fare').addClass("hidden");
        }
        updateCorpId();
    }

    function toggleOldFNFIndividualGratuity() {
        $('#TenantProfile_old_fandf').on('change', function() {
            if ($(this).is(':checked')) {
                $('#TenantProfile_process_gratuity_individually').prop('checked', false).prop('disabled', true).addClass('disabled-checkbox');
            } else {
                $('#TenantProfile_process_gratuity_individually').prop('disabled', false).removeClass('disabled-checkbox');
            }
        });
        $('#TenantProfile_process_gratuity_individually').on('change', function() {
            if ($(this).is(':checked')) {
                $('#TenantProfile_old_fandf').prop('checked', false).prop('disabled', true).addClass('disabled-checkbox');
            } else {
                $('#TenantProfile_old_fandf').prop('disabled', false).removeClass('disabled-checkbox');
            }
        });
    }
    if ($('#TenantProfile_old_fandf').is(':checked')) {
        $('#TenantProfile_process_gratuity_individually').prop('checked', false).prop('disabled', true).addClass('disabled-checkbox');
    } else {
        $('#TenantProfile_process_gratuity_individually').prop('disabled', false).removeClass('disabled-checkbox');
    }
    if ($('#TenantProfile_process_gratuity_individually').is(':checked')) {
        $('#TenantProfile_old_fandf').prop('checked', false).prop('disabled', true).addClass('disabled-checkbox');
    } else {
        $('#TenantProfile_old_fandf').prop('disabled', false).removeClass('disabled-checkbox');
    }
    //Code for adding elastic-search token
    $(document).ready(function() {
        $('#employee-search1').createEmpTagInput('abc1', false, false, {}, false, false, false, "|");
        $('#employee-search2').createEmpTagInput('emp_search', false, false, {}, false, false, false, ",");
        $('#employee-search3').createEmpTagInput('abc2', false, false, {}, false, false, false, "|");
        $('#employee-search4').createEmpTagInput('abc3', false, false, {}, false, false, false, "|");

        if ($('.buffer_over_lap_period_rules_drop').val() == 1) {
            $(".buffer_over_lap_period_rules_grace").removeClass("hidden").addClass("searchable");
        } else {
            $(".buffer_over_lap_period_rules_grace").addClass("hidden").removeClass("searchable");
        }

        $('#statutory_wage_users').createEmpTagInput('statutory_wage_users_dummy');
        if ($('#cost_center_checks').is(':checked')) {
            $('.cost_centers_value').removeClass("hidden");
        }
        updateIntegrationStagingVisibility();
        updateIntegrationStagingVisibilityFare();
        if ($(".candidate_sourcing_extension").is(":checked")) {
            $(".candidate_sourcing_extension_show").removeClass("hidden").addClass("searchable");
        } else {
            $(".candidate_sourcing_extension_show").addClass("hidden").removeClass("searchable");
        }
    });
    $(document.body).on("change", "#enable_sync_of_expenses", function() {
        if ($(this).is(":checked")) {
            $(".allowed_expense_sync_types_div").removeClass("hidden").addClass("searchable");
        } else {
            $(".allowed_expense_sync_types_div").addClass("hidden").removeClass("searchable");
        }
    });

    $(document).on("click", ".enable_dual_calendar", function() {
        if ($(".enable_dual_calendar:checked").length == 1) {
            $("#secondary_calendar_type").removeClass("opacity-0");
            $(".secondary_calendar_type").prop("required", true);
        } else {
            $("#secondary_calendar_type").addClass("opacity-0");
            $(".secondary_calendar_type").prop("required", false);
        }
    });

    if ($(".enable_dual_calendar:checked").length == 1) {
        $("#secondary_calendar_type").removeClass("opacity-0");
        $(".secondary_calendar_type").prop("required", true);
    } else {
        $("#secondary_calendar_type").addClass("opacity-0");
        $(".secondary_calendar_type").prop("required", false);
    }

    $(document).ready(function() {
        function toggleTextareaForMobileBlock() {
            if ($('#block_mobile_login_checkbox').is(':checked')) {
                $('#error_message_div').removeClass('d-none');
            } else {
                $('#error_message_div').addClass('d-none');
            }
        }

        toggleTextareaForMobileBlock();

        $('#block_mobile_login_checkbox').change(function() {
            toggleTextareaForMobileBlock();
        });

    });

    $(document.body).on("change", "#candidate_sourcing_extension", function(e) {
        if ($(this).is(":checked")) {
            $("#candidate_sourcing_extension_portal_id").removeClass("hidden");
        } else {
            $("#candidate_sourcing_extension_portal_id").addClass("hidden");
        }
    });
    $(document.body).on("change", "#candidate_sourcing_extension_portal_id", function(e) {
        if ($(this).val() != "") {
            $(".job_portal_source").addClass("hidden")
        }
    });
    $(document.body).on("click", "#setting_create_btn", function(e) {
        if ($(".candidate_sourcing_extension").is(":checked") && $("#candidate_sourcing_extension_portal_id").val() == "") {
            if ($(this).val() == "") {
                $(".job_portal_source").removeClass("hidden")
            } else {
                $(".job_portal_source").addClass("hidden")
            }
            $(".job_portal_source").removeClass("hidden")
            return false;
        }
    })
    $(document).ready(function() {
        function toggleEnableAISmartFollowUp() {
            if ($('.engagement_survey_enabled').is(':checked') && $('.forms_survey_enabled').is(':checked')) {
                $('.enable_ai_smart_follow_ups').removeClass("hidden");
            } else {
                $('.enable_ai_smart_follow_ups').addClass("hidden");
            }
        }
        toggleEnableAISmartFollowUp();
        $(document).on("click", ".engagement_survey_enabled", function() {
            toggleEnableAISmartFollowUp();
        });
        $(document).on("click", ".forms_survey_enabled", function() {
            toggleEnableAISmartFollowUp();
        });
    });
    $(document.body).on("change", "#enable_global_payroll", function() {
        if ($(this).is(":checked")) {
            if (!confirm("Once you enable Global Payroll for this tenant, you will not be able to disable it. Do you wish to continue ?")) {
                $(this).prop("checked", false);
            }
        }
    });
</script>
<script>

    $(function() {
        var allForms = $("form");
        for (let i = 0; i < allForms.length; i++) {
            let eachForm = $(allForms[i]);
            let foundCsrfToken = eachForm.find("input[name=pbqBeYWPUn]");
            if (!foundCsrfToken.length) {
                eachForm.prepend("<input type=\"hidden\" name=\"pbqBeYWPUn\" value=\"UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==\" />");
            }
        }
    })

    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        if (typeof (options) == "string") {
            originalOptions.url = options;
            options = originalOptions;
        }

        if (!options.data) {
            options.data = "";
        }

        if (typeof (options.data) == "string" && options.data.indexOf("&pbqBeYWPUn=") < 0) {
            try {
                options.data = JSON.parse(options.data);
                if (!options.data.pbqBeYWPUn) {
                    options.data.pbqBeYWPUn = "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
                }
                options.data = JSON.stringify(options.data);
            } catch (err) {
                var token_substring = "pbqBeYWPUn=UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
                if (options.data.indexOf(token_substring) === -1) {
                    options.data += "&" + token_substring;
                }
            }
        } else if (typeof options.data === "object" && options.data instanceof FormData) {
            if (!options.data.has || !options.data.has("pbqBeYWPUn")) {
                options.data.append("pbqBeYWPUn", "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==");
            }
        } else if (!options.data.pbqBeYWPUn) {
            options.data.pbqBeYWPUn = "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
        }

    });
</script>
<script type="text/javascript">
    $(function() {
        $(".settings_nav").addClass("nav-selected");
    });
</script>
<script>
    $(document).ready(function() {
        setTimeout( () => {
            if (!$('.sub-navigation li a').hasClass('active')) {
                $('.sub-navigation li a:first').addClass('active');
            }
        }
        , 1000);
    });
</script>
<script>

    $(function() {
        var allForms = $("form");
        for (let i = 0; i < allForms.length; i++) {
            let eachForm = $(allForms[i]);
            let foundCsrfToken = eachForm.find("input[name=pbqBeYWPUn]");
            if (!foundCsrfToken.length) {
                eachForm.prepend("<input type=\"hidden\" name=\"pbqBeYWPUn\" value=\"UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==\" />");
            }
        }
    })

    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        if (typeof (options) == "string") {
            originalOptions.url = options;
            options = originalOptions;
        }

        if (!options.data) {
            options.data = "";
        }

        if (typeof (options.data) == "string" && options.data.indexOf("&pbqBeYWPUn=") < 0) {
            try {
                options.data = JSON.parse(options.data);
                if (!options.data.pbqBeYWPUn) {
                    options.data.pbqBeYWPUn = "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
                }
                options.data = JSON.stringify(options.data);
            } catch (err) {
                var token_substring = "pbqBeYWPUn=UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
                if (options.data.indexOf(token_substring) === -1) {
                    options.data += "&" + token_substring;
                }
            }
        } else if (typeof options.data === "object" && options.data instanceof FormData) {
            if (!options.data.has || !options.data.has("pbqBeYWPUn")) {
                options.data.append("pbqBeYWPUn", "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==");
            }
        } else if (!options.data.pbqBeYWPUn) {
            options.data.pbqBeYWPUn = "UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ==";
        }

    });
</script>
<!--Outer Shell-->
</div></div>
<!-- /container -->
<div class="clearfix"></div>
<dbx-global-loader style="display: none;" id="waiter"/>
<link rel="stylesheet" href="/node_modules/overlayscrollbars/styles/overlayscrollbars.min.css"/>
<script src="/node_modules/overlayscrollbars/browser/overlayscrollbars.browser.es6.min.js"></script>
<script type="text/javascript">
    /*<![CDATA[*/
    jQuery(function($) {
        jQuery('a[rel="tooltip"]').tooltip();

        Shadowbox.init({
            handleOversize: "drag",
            modal: true
        });

        $(function() {
            $(".nav-setup-employee").addClass("active");
        });

        $("#confidential_api").chosen();

        $("#sidemenu ul li#tenantprovisioning").addClass("active");

        $("form").submit(function() {
            $(this).find("input[type=\"submit\"]").click(function() {
                return false;
            });
        });

        $(".date_picker").datepicker({
            showAnim: "fold",
            changeMonth: true,
            changeYear: true,
            dateFormat: "yy-mm-dd",
            yearRange: "c-100:",
        });

        var hash = window.location.hash;
        $("a[href='" + hash + "']").trigger("click");

        window.showWaiter = true
        $(document).ajaxStart(function() {
            if (window.showWaiter)
                $("#waiter").show();
        });
        $(document).ajaxStop(function() {
            $("#waiter").hide();
        });

        $("#dasboard-bigheader").css({
            position: "fixed",
            height: "var(--sds-variables-globalHeaderHeight)",
            top: "0px",
            left: "0px",
            width: "100%",
            "z-index": 9998
        });
        $("#dasboard-bigheader").removeClass("dashboard-top");

        $(document.body).on("click", ".dashbutton_nav", function(e) {
            e.preventDefault();
            var $this = $(this);
            var res = $this.attr("id");
            if (res != "") {
                $.ajax({
                    data: {
                        filter: res
                    },
                    dataType: "json",
                    url: "/dashboard/getWidgetData",
                    beforeSend: function() {
                        if ($("#db_widget_modal").length > 0) {
                            $("#db_widget_modal").remove();
                        }
                    },
                    success: function(data) {
                        if (data.status == "success") {
                            $("#modal_output").html("").html(data.update);
                            var myModal = new bootstrap.Modal(document.getElementById('db_widget_modal'),{
                                backdrop: true,
                                show: true,
                                keyboard: true
                            })
                            myModal.toggle();
                        }
                    }
                });
            } else {
                window.location.href = $(this).attr("href");
            }
        });

        $(document.body).on("click", ".changeaccess", function(e) {
            e.preventDefault();
            $.ajax({
                dataType: "json",
                url: "/dashboard/changeAccess",
                success: function(data) {
                    if (data.status == "success") {
                        var url = "/dashboard";
                        window.location.href = url;
                    }
                }
            });
        });

        $(document.body).on("click", "#language li", function(e) {
            e.preventDefault();
            var $this = $(this);
            var res = $this.attr("id");
            $.ajax({
                type: "POST",
                data: {
                    language: res
                },
                url: "/employee/language",
                success: function(data) {
                    data = JSON.parse(data);
                    if (data.status == "failure") {
                        showNotification({
                            message: "Something went wrong.",
                            type: "error",
                            autoClose: true,
                            duration: 5
                        });
                    } else {
                        var url = " ";
                        window.location.href = url;
                    }
                },
                error: function() {
                    showNotification({
                        message: "Something went wrong.",
                        type: "error",
                        autoClose: true,
                        duration: 5
                    });
                }
            });
        });

        $(document.body).on("click", ".request_attendance", function(e) {
            if (window.getTableInstance?.()?.tableId === "core_taskbox_tasks") {
                return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();
            if ($(this).hasClass("btn_clicked")) {
                return;
            } else {
                $(this).addClass("btn_clicked");
                $(this).closest("div").find(".db-btn").addClass("btn_clicked");
            }
            var request = $(this).attr("id").split("_request_");
            //notification id
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    action: request[0],
                    id: request[1]
                },
                url: "/request/process",
                success: function(data) {
                    if (data.status == "success") {
                        $("#ar_status_container_" + data.request).html("");
                        $("#ar_status_container_" + data.request).html(data.update);
                        showNotification({
                            message: data.update,
                            type: "success",
                            autoClose: true,
                            duration: 5
                        });
                    } else {
                        showNotification({
                            message: data.error,
                            type: "error",
                            autoClose: true,
                            duration: 5
                        });
                    }
                }
            });
        });

        //attendance log response
        $(document.body).on("click", ".request_message_attendance_log", function(e) {
            if (window.getTableInstance?.()?.tableId === "core_taskbox_tasks") {
                return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();
            if ($(this).hasClass("btn_clicked")) {
                return;
            } else {
                $(this).addClass("btn_clicked");
                $(this).closest("div").find(".db-btn").addClass("btn_clicked");
            }
            var isModal = $(this).closest("#request_modal").length;
            var request = $(this).attr("id").split("_requestlog_");
            var managerresponse = $("textarea#attendance-message-box-text_" + request[1]).val();
            var text_area_name = $("textarea#attendance-message-box-text_" + request[1]).attr("name");
            if ($(this).hasClass("reason_mandatory") && managerresponse == "") {
                showNotification({
                    message: "Message is mandatory",
                    type: "error",
                    autoClose: true,
                    duration: 5
                });
                $(this).removeClass("btn_clicked");
                return;
            }
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    action: request[0],
                    id: request[1],
                    managerresponse: managerresponse
                },
                url: "/request/process",
                success: function(data) {
                    if (data.status == "success") {
                        $("#arl_status_container_" + data.request).html("");
                        $("#arl_status_container_" + data.request).html(data.update);
                        $("#request_thread_" + request[1]).attr("class", "alert alert-success clearfix requestDiv");
                        $("#request_modal").modal("hide");
                        showNotification({
                            message: data.update,
                            type: "success",
                            autoClose: true,
                            duration: 5
                        });
                    } else {
                        showNotification({
                            message: data.error,
                            type: "error",
                            autoClose: true,
                            duration: 5
                        });
                    }
                }
            });
        });
        //compoff log response
        $(document.body).on("click", ".request_message_compoff_log", function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if ($(this).hasClass("btn_clicked")) {
                return;
            } else {
                $(this).addClass("btn_clicked");
                $(this).closest("div").find(".db-btn").addClass("btn_clicked");
            }
            var request = $(this).attr("id").split("_requestlog_");
            var time = $(this).parent().parent().parent().find(".in_time").val();
            //        console.log("action "+request[0]);
            var reqid = request[1];
            var managerresponse = $("textarea#compoff-message-box-text_" + request[1]).val();
            var managerotreason = $("select#select_ot_reason_" + request[1]).val();
            var text_area_name = $("textarea#compoff-message-box-text_" + request[1]).attr("name");
            var total_ot_without_nsd = $(this).parent().parent().parent().find(".total_ot_without_nsd").val();
            var total_nsd = $(this).parent().parent().parent().find(".total_nsd").val();
            if (typeof $("#revoke_comment_message").val() === "undefined")
                var revoke_comment_message = $("#revoke_comment_message_" + request[1]).val();
            else
                var revoke_comment_message = $("#revoke_comment_message").val()
            if ($(this).hasClass("reason_mandatory") && managerresponse == "") {
                showNotification({
                    message: "Message is mandatory",
                    type: "error",
                    autoClose: true,
                    duration: 5
                });
                $(this).removeClass("btn_clicked");
                return;
            }
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    action: request[0],
                    id: request[1],
                    time: time,
                    managerresponse: managerresponse,
                    managerotreason: managerotreason,
                    total_ot_without_nsd: total_ot_without_nsd,
                    total_nsd: total_nsd,
                    revoke_comment_message: revoke_comment_message
                },
                url: "/compoff/process",
                success: function(data) {
                    $(".request_message_compoff_log").removeClass("btn_clicked");
                    if (data.status == "success") {
                        $("#arl_status_container_" + data.request).html("");
                        $("#arl_status_container_" + data.request).html(data.update);
                        $("#accept_requestlog_" + reqid).addClass("hide");
                        $("#reject_requestlog_" + reqid).addClass("hide");
                        $("#RevokeModal").hide();
                        $("#revoke_comment_message").val("");
                        $(document.body).addClass("for_scroll");
                        if (request[0] == "revoke")
                            $("#button_" + request[1]).remove();
                        if (request[0] == "requestrevoke")
                            $("#button1_" + request[1]).remove();
                        showNotification({
                            message: data.update,
                            type: "success",
                            autoClose: true,
                            duration: 5
                        });
                        window.markTaskAsProcessed && markTaskAsProcessed(request[1]);
                    } else {
                        showNotification({
                            message: data.error,
                            type: "error",
                            autoClose: true,
                            duration: 5
                        });
                    }
                }
            });
        });
        //optional holiday
        $(document.body).on("click", ".request_optional_holiday", function(e) {
            if (window.getTableInstance?.()?.tableId === "core_taskbox_tasks") {
                return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();
            if ($(this).hasClass("btn_clicked")) {
                return;
            } else {
                $(this).addClass("btn_clicked");
                $(this).closest("div").find(".db-btn").addClass("btn_clicked");
            }
            var optionalholiday = $(this).attr("id").split("_");
            var message = $(this).parents().eq(1).find("textarea").val();
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    action: optionalholiday[1],
                    id: optionalholiday[2],
                    opid: optionalholiday[3],
                    message: message
                },
                url: "/Optionalholiday/process",
                success: function(data) {
                    if (data.status == "success") {
                        // Change color
                        $("#request_thread_" + optionalholiday[2]).attr("class", "alert alert-success clearfix requestDiv");
                        if (optionalholiday[1] === "approve") {
                            $("#request_thread_" + optionalholiday[2] + " .btn-hoverlayer").empty().html('<strong>Approved </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        } else if (optionalholiday[1] === "decline") {
                            $("#request_thread_" + optionalholiday[2] + " .btn-hoverlayer").empty().html('<strong>Rejected </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        } else {
                            $("#request_thread_" + optionalholiday[2] + " .btn-hoverlayer").empty().html('<strong>Revoked </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        }
                        $("#book_" + optionalholiday[2]).hide();
                        $("#optionalholiday_approve_" + optionalholiday[2] + "_" + optionalholiday[3]).addClass("hidden");
                        $("#message-box-text").addClass("hidden");
                        $("#optionalholiday_decline_" + optionalholiday[2] + "_" + optionalholiday[3]).addClass("hidden");
                        $("#optionalholiday_revoke_" + optionalholiday[2] + "_" + optionalholiday[3]).addClass("hidden");
                        if (optionalholiday[1] === "opholiday")
                            $(".revoke_request_op").removeClass("hidden");
                    } else {
                        showNotification({
                            message: data.error,
                            type: "error",
                            autoClose: true,
                            duration: 5,
                        });
                    }
                }
            });
        });
        //optional holiday
        //leave encash
        //flexible holiday
        $(document.body).on("click", ".request_flexible_holiday", function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if ($(this).hasClass("btn_clicked")) {
                return;
            } else {
                $(this).addClass("btn_clicked");
                $(this).closest("div").find(".db-btn").addClass("btn_clicked");
            }
            var flexibleholiday = $(this).attr("id").split("_");
            var message = $(this).parents().eq(1).find("textarea").val();
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    action: flexibleholiday[1],
                    id: flexibleholiday[2],
                    opid: flexibleholiday[3],
                    message: message
                },
                url: "/leaves/FlexibleHolidays/process",
                success: function(data) {
                    if (data.status == "success") {
                        // Change color
                        $("#request_thread_" + flexibleholiday[2]).attr("class", "alert alert-success clearfix requestDiv");
                        if (flexibleholiday[1] === "approve") {
                            $("#request_thread_" + flexibleholiday[2] + " .btn-hoverlayer").empty().html('<strong>Approved </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        } else if (flexibleholiday[1] === "decline") {
                            $("#request_thread_" + flexibleholiday[2] + " .btn-hoverlayer").empty().html('<strong>Rejected </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        } else {
                            $("#request_thread_" + flexibleholiday[2] + " .btn-hoverlayer").empty().html('<strong>Revoked </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        }
                        $("#book_" + flexibleholiday[2]).hide();
                        $("#flexibleholiday_approve_" + flexibleholiday[2] + "_" + flexibleholiday[3]).addClass("hidden");
                        $("#message-box-text").addClass("hidden");
                        $("#flexibleholiday_decline_" + flexibleholiday[2] + "_" + flexibleholiday[3]).addClass("hidden");
                        $("#flexibleholiday_revoke_" + flexibleholiday[2] + "_" + flexibleholiday[3]).addClass("hidden");

                        if (flexibleholiday[1] === "flexiholiday")
                            $(".revoke_request_op").removeClass("hidden");
                    } else {
                        showNotification({
                            message: data.error,
                            type: "error",
                            autoClose: true,
                            duration: 5,
                        });
                    }
                }
            });
        });

        $(document.body).on("click", ".request_leave_encash", function(e) {
            if (window.getTableInstance?.()?.tableId === "core_taskbox_tasks") {
                return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();
            if ($(this).hasClass("btn_clicked")) {
                return;
            } else {
                $(this).addClass("btn_clicked");
                $(this).closest("div").find(".db-btn").addClass("btn_clicked");
            }
            var optionalholiday = $(this).attr("id").split("_");
            var message = $(this).parents().eq(1).find("#message-box-text").val();
            var employee_revoke_message = $(this).parents().eq(1).find("#message-box-revoke").val();
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    action: optionalholiday[1],
                    id: optionalholiday[2],
                    opid: optionalholiday[3],
                    message: message,
                    employee_revoke_message: employee_revoke_message
                },
                url: "/leaves/leaves/leaveEncashProcess",
                success: function(data) {
                    if (data.status == "success") {
                        // Change color
                        $("#request_thread_" + optionalholiday[2]).attr("class", "alert alert-success clearfix requestDiv");
                        if (optionalholiday[1] === "approve") {
                            $("#request_thread_" + optionalholiday[2] + " .btn-hoverlayer").empty().html('<strong>Approved </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        } else if (optionalholiday[1] === "decline") {
                            $("#request_thread_" + optionalholiday[2] + " .btn-hoverlayer").empty().html('<strong>Rejected </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        } else {
                            $("#request_thread_" + optionalholiday[2] + " .btn-hoverlayer").empty().html('<strong>Revoked </strong>by <a target="_blank" class="site-color" href="https://instance8.darwinbox.in/employeeprofile/view/id/546763">Beacon Admin</a>');
                        }
                        $("#book_" + optionalholiday[2]).hide();
                        $("#optionalholiday_approve_" + optionalholiday[2] + "_" + optionalholiday[3]).addClass("hidden");
                        $("#message-box-text").addClass("hidden");
                        $("#optionalholiday_decline_" + optionalholiday[2] + "_" + optionalholiday[3]).addClass("hidden");
                        $("#optionalholiday_revoke_" + optionalholiday[2] + "_" + optionalholiday[3]).addClass("hidden");
                    } else {
                        showNotification({
                            message: data.error,
                            type: "error",
                            autoClose: true,
                            duration: 5,
                        });
                    }
                }
            });
        });
        //leave encash

    });
    /*]]>*/
</script>
<script type="text/javascript">
    window.NREUM || (NREUM = {});
    NREUM.info = {
        "beacon": "bam.nr-data.net",
        "licenseKey": "NRJS-b74f7bf78de8d9658e6",
        "applicationID": "758883407",
        "transactionName": "NQMDY0ACWRYAABYMVgxJIFRGClgLTjAHEU0LCAZEcQxZERMMDglcEEkEWkIPWBwEBhE=",
        "queueTime": 0,
        "applicationTime": 958,
        "atts": "GUQAFQgYShg=",
        "errorBeacon": "bam.nr-data.net",
        "agent": ""
    }
</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"796f05beba604f8aacd73b7ceaf40d93","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body><script>
    window.globalStrings = {
        somethingWentWrong: 'Something went wrong.',
        documentPreview: 'Document Preview',
        policySignOffText: `Bug bash text`,
        mandatoryActionText: 'Mandatory Action Required',
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', ],
        showAll: 'Show All',
        hideAll: 'Hide All',
    };

    window.userDateFormat = 'd/m/Y';
    window.DATE_FORMAT_MAPPING_FOR_DATEPICKER = {
        "d-M-Y": "dd-M-yy",
        "d-m-Y": "dd-mm-yy",
        "m-d-Y": "mm-dd-yy",
        "Y-m-d": "yy-mm-dd",
        "d/m/Y": "dd/mm/yy",
        "m/d/Y": "mm/dd/yy",
        "Y/m/d": "yy/mm/dd",
        "d.m.Y": "dd.mm.yy",
        "m.d.Y": "mm.dd.yy",
        "Y.m.d": "yy.mm.dd",
        "M-d-Y": "M-dd-yy",
        "Y-M-d": "yy-M-dd",
        "d M Y": "dd M yy",
        "M d Y": "M dd yy",
        "Y M d": "yy M dd",
        "M d, Y": "M dd, yy"
    };

    window.DATE_FORMAT_MAPPING_FOR_MOMENT = {
        "d-M-Y": "DD-MMM-YYYY",
        "d-m-Y": "DD-MM-YYYY",
        "m-d-Y": "MM-DD-YYYY",
        "M-d-Y": "MMM-DD-YYYY",
        "Y-m-d": "YYYY-MM-DD",
        "Y-M-d": "YYYY-MMM-DD",
        "d/m/Y": "DD/MM/YYYY",
        "m/d/Y": "MM/DD/YYYY",
        "Y/m/d": "YYYY/MM/DD",
        "d.m.Y": "DD.MM.YYYY",
        "m.d.Y": "MM.DD.YYYY",
        "Y.m.d": "YYYY.MM.DD",
        "d M Y": "DD MMM YYYY",
        "M d Y": "MMM DD YYYY",
        "Y M d": "YYYY MMM DD",
        "M d, Y": "MMM DD, YYYY"
    };

    $.datepicker.setDefaults({
        monthNamesShort: window.globalStrings.monthNamesShort,
        dayNamesMin: window.globalStrings.dayNamesMin,
    });

    $(document).ready(function() {
        var system_color = '#170bef';
        var system_top_color = 'linear-gradient( #1676e2)';
        if (system_color) {
            document.documentElement.style.setProperty('--primary-color', system_color);
        }
        if (system_top_color) {
            document.documentElement.style.setProperty('--primary-gradient', system_top_color);
        }

        $(window).on('scroll', function(event) {
            var scrollValue = $(window).scrollTop();
            if (scrollValue == 0) {
                $('.nav-wrapper').find('.fixednav').removeClass('affix');
            }
            if (scrollValue > 80) {
                $('.nav-wrapper').find('.fixednav').addClass('affix');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        window.showNotification = ({message, type, autoClose=false, duration=5}) => {
            type = type === "error" ? window.toast.TYPE.ERROR : window.toast.TYPE.OK;
            setTimeout( () => {
                window.toast.show(message, type, {
                    dismissable: !!autoClose,
                    duration,
                });
            }
            , 100);
        }
        ;
    }
    );

    var endpoint = "darwinbox.in";
    var events_endpoint = "eventsapi";

    // FILE TYPES THAT SHOULD BE PREVIEWED BROWSER ONLY
    var shadow_box_gv_ignore = {};
    shadow_box_gv_ignore.ext = [""];
    shadow_box_gv_ignore.modules = [""];
    shadow_box_gv_ignore.tenants = [""];
    shadow_box_gv_ignore.tenant_id = "5";

    var isProduction = "production";
    if (isProduction == 'production') {
        var userId = "546763";
        var tenantId = "5";
        var tenantKey = "instance8" + "-" + tenantId;
    } else {
        var userId = "test";
        var tenantKey = "test-test"
        var tenantId = "test"
    }
    if (isProduction == 'production' && endpoint) {
        !function() {
            var _dbox = window._dbox = window._dbox || [];
            _dbox.methods = ["track", "identify", "page"];
            _dbox.factory = function(t) {
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    e.unshift(t);
                    _dbox.push(e);
                    return _dbox
                }
            }
            ;
            for (var t = 0; t < _dbox.methods.length; t++) {
                var e = _dbox.methods[t];
                _dbox[e] = _dbox.factory(e);
            }
            _dbox.load = function(t) {
                window._dbox.writeKey = t;
                var con = document.createElement('script');
                con.type = 'text/javascript';
                con.async = !0;
                con.src = "/js/dbox.prod.min.js";
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(con, s);
            }
            ;
            // tenantId = '9'
            _dbox.load(tenantKey);

        }();

        function identfyEvent() {
            _dbox.identify(endpoint, userId, {
                'tenant': tenantId
            })
        }
        // identify user
        identfyEvent();
        _dbox.page(endpoint);

        $(document).ready(function() {
            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                _dbox.track(endpoint, originalOptions.url, {
                    queryData: originalOptions.data
                });
            });
            // console.log("window height : " + $(window).height());
            // console.log("doc height : " + $(".container-full").height());
            // $(".container-minheight").css("min-height" , ($(window).height() - 121));
        });
    }
    // datepicker dropdown on modal
    // $.fn.modal.Constructor.prototype.enforceFocus = function () {};
    // datepicker dropdown on modal
    // Pendo Setup
    (function(apiKey) {
        (function(p, e, n, d, o) {
            var v, w, x, y, z;
            o = p[d] = p[d] || {};
            o._q = o._q || [];
            v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
            for (w = 0,
            x = v.length; w < x; ++w)
                (function(m) {
                    o[m] = o[m] || function() {
                        o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0)));
                    }
                    ;
                }
                )(v[w]);
            y = e.createElement(n);
            y.async = !0;
            y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
            z = e.getElementsByTagName(n)[0];
            z.parentNode.insertBefore(y, z);
        }
        )(window, document, 'script', 'pendo');
    }
    )('ef82c8d3-52b7-41b9-4f25-b592098285e7');
    (function(urlForPendoDetails) {
        $.ajax({
            url: urlForPendoDetails,
            type: 'POST',
            dataType: 'json',
            data: {
                for_pendo: 1,
                pbqBeYWPUn: 'UXl5dldCZE5ka3IwS1NTfldqSXJBekMyWnBTbnBDbl9ACCUz_hWEHdsXa8bMVhflptvVVFTzbDPavW6bzHiCKQ=='
            },
            success: function(data) {
                window.pendoInitialize(data.pendo_details, data.user_details);
            }
        });
    }
    )("/commondata/getemployeedetails");
    // Pendo Setup
</script>
</html>
