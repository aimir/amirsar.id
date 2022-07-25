// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
require({
    cache: {
        "esri/views/2d/engine/flow/FlowView2D": function() {
            define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/HandleOwner ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ./createFlowStyle ./dataUtils ./FlowContainer ./FlowStrategy".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F, O) {
                I = function(L) {
                    function n() {
                        var h = L.apply(this, arguments) || this;
                        h._loadImagery = (A,T,Z,V,W)=>q.loadImagery(h.layer, A, T, Z, V, W);
                        h._createFlowMesh = (A,T,Z,V)=>h.layer.createFlowMesh({
                            meshType: A,
                            flowData: Z,
                            simulationSettings: T
                        }, {
                            signal: V
                        });
                        h.attached = !1;
                        h.container = null;
                        h.layer = null;
                        h.type = "flow";
                        h.timeExtent = null;
                        h.redrawOrRefetch = w._asyncToGenerator(function*() {
                            h._updateVisualization()
                        });
                        return h
                    }
                    w._inheritsLoose(n, L);
                    var m = n.prototype;
                    m.attach = function() {
                        const {layer: h} = this
                          , A = ()=>{
                            this._loadImagery = (T,Z,V,W,c)=>q.loadImagery(h, T, Z, V, W, c);
                            this._updateVisualization()
                        }
                        ;
                        "multidimensionalDefinition"in h ? this.handles.add(v.watch(()=>h.multidimensionalDefinition, A)) : this.handles.add([v.watch(()=>h.mosaicRule, A), v.watch(()=>h.renderingRule, A), v.watch(()=>h.definitionExpression, A)]);
                        this.container = new F;
                        this._strategy = new O({
                            flowContainer: this.container
                        });
                        this._updateVisualization()
                    }
                    ;
                    m.detach = function() {
                        this._strategy.destroy();
                        this.container.removeAllChildren();
                        this.container = null;
                        this.handles.removeAll()
                    }
                    ;
                    m.update = function(h) {
                        h.stationary ? this._strategy.update(h) : this.layerView.requestUpdate()
                    }
                    ;
                    m.hitTest = function(h) {
                        return new E({
                            attributes: {},
                            geometry: h.clone(),
                            layer: this.layer
                        })
                    }
                    ;
                    m.moveEnd = function() {}
                    ;
                    m.doRefresh = function() {
                        var h = w._asyncToGenerator(function*() {});
                        return function() {
                            return h.apply(this, arguments)
                        }
                    }();
                    m._updateVisualization = function() {
                        var {renderer: h} = this.layer;
                        "flow" === h.type && (h = g(h, {
                            loadImagery: this._loadImagery,
                            createFlowMesh: this._createFlowMesh,
                            timeExtent: this.timeExtent
                        }),
                        this.container.flowStyle = h,
                        this.layerView.requestUpdate())
                    }
                    ;
                    w._createClass(n, [{
                        key: "updating",
                        get: function() {
                            return !this._strategy || this._strategy.updating
                        }
                    }]);
                    return n
                }(I.HandleOwner);
                K.__decorate([B.property()], I.prototype, "_strategy", void 0);
                K.__decorate([B.property()], I.prototype, "attached", void 0);
                K.__decorate([B.property()], I.prototype, "container", void 0);
                K.__decorate([B.property()], I.prototype, "layer", void 0);
                K.__decorate([B.property()], I.prototype, "layerView", void 0);
                K.__decorate([B.property()], I.prototype, "type", void 0);
                K.__decorate([B.property()], I.prototype, "updating", null);
                K.__decorate([B.property()], I.prototype, "timeExtent", void 0);
                return I = K.__decorate([p.subclass("esri.views.2d.engine.flow.FlowView2D")], I)
            })
        },
        "esri/views/2d/engine/flow/createFlowStyle": function() {
            define("../../../../core/maybe ./utils ./styles/Imagery ./styles/Particles ./styles/Stack ./styles/Streamlines".split(" "), function(w, K, E, I, v, B) {
                return function(u, H) {
                    const {flowSpeed: r, trailLength: p} = u
                      , g = K.getFlowSimulationSettings(u);
                    let q = null;
                    const F = {
                        opacity: K.getOpacity(u),
                        size: K.getSize(u)
                    };
                    let O = K.getColor(u);
                    "none" === u.background ? F.color = O : ("constant" === O.kind && (O = {
                        kind: "ramp",
                        stops: [0, 1],
                        values: [0, 0, 0, 1, O.value[0], O.value[1], O.value[2], O.value[3]],
                        count: 2
                    }),
                    q = new E.default({
                        loadImagery: H.loadImagery,
                        timeExtent: H.timeExtent,
                        color: O,
                        opacity: {
                            kind: "constant",
                            value: [1]
                        }
                    }),
                    F.color = K.getForegroundColor());
                    H = {
                        loadImagery: H.loadImagery,
                        createFlowMesh: H.createFlowMesh,
                        simulationSettings: g,
                        timeExtent: H.timeExtent,
                        trailLength: p,
                        flowSpeed: r,
                        featheringSize: 1,
                        featheringOffset: .5,
                        introFade: !0,
                        fadeToZero: !0,
                        decayRate: 2.3,
                        color: F.color,
                        opacity: F.opacity,
                        size: F.size
                    };
                    u = "butt" === u.trailCap || 4 >= K.getMax(K.getSize(u)) ? new B(H) : new I.default(H);
                    return w.isSome(q) ? new v.default([q, u]) : u
                }
            })
        },
        "esri/views/2d/engine/flow/utils": function() {
            define(["exports", "../../../../core/maybe", "../../../../core/screenUtils"], function(w, K, E) {
                function I(r) {
                    return "constant" === r.kind ? r.value[0] : r.values[r.values.length - 1]
                }
                function v(r) {
                    r = r.toRgba();
                    return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]]
                }
                function B(r) {
                    if (!r.hasVisualVariables("size"))
                        return {
                            kind: "constant",
                            value: [E.pt2px(r.trailWidth)]
                        };
                    const p = r.getVisualVariablesForType("size")[0];
                    r = [];
                    const g = [];
                    if (p.stops) {
                        for (q of p.stops)
                            r.push(q.value),
                            g.push(E.pt2px(q.size));
                        var q = p.stops.length
                    } else
                        r.push(p.minDataValue, p.maxDataValue),
                        g.push(E.pt2px(p.minSize), E.pt2px(p.maxSize)),
                        q = 2;
                    return {
                        kind: "ramp",
                        stops: r,
                        values: g,
                        count: q
                    }
                }
                function u(r, p, g, q) {
                    switch (p) {
                    case "int":
                        r.setUniform1iv(g, q);
                        break;
                    case "float":
                        r.setUniform1fv(g, q);
                        break;
                    case "vec2":
                        r.setUniform2fv(g, q);
                        break;
                    case "vec3":
                        r.setUniform3fv(g, q);
                        break;
                    case "vec4":
                        r.setUniform4fv(g, q)
                    }
                }
                function H(r, p) {
                    return r === p ? !0 : K.isSome(r) && K.isSome(p) ? r.equals(p) : !1
                }
                w.areStreamlinesCompatible = function(r, p) {
                    {
                        var g = r.simulationSettings;
                        var q = p.simulationSettings;
                        let F;
                        g = F = (F = (F = (F = (F = (F = (F = (F = (F = (F = (F = g.collisions === q.collisions) && g.density === q.density) && g.interpolate === q.interpolate) && g.lineCollisionWidth === q.lineCollisionWidth) && g.lineSpacing === q.lineSpacing) && g.maxTurnAngle === q.maxTurnAngle) && g.minSpeedThreshold === q.minSpeedThreshold) && g.segmentLength === q.segmentLength) && g.smoothing === q.smoothing) && g.velocityScale === q.velocityScale) && g.verticesPerLine === q.verticesPerLine
                    }
                    return g && H(r.timeExtent, p.timeExtent) ? g = (g = (g = (g = (g = r.loadImagery === p.loadImagery) && r.createFlowMesh === p.createFlowMesh) && r.color.kind === p.color.kind) && r.opacity.kind === p.opacity.kind) && r.size.kind === p.size.kind : !1
                }
                ;
                w.getColor = function(r) {
                    if (!r.hasVisualVariables("color"))
                        return {
                            kind: "constant",
                            value: v(r.color)
                        };
                    r = r.getVisualVariablesForType("color")[0];
                    const p = []
                      , g = [];
                    for (const q of r.stops)
                        p.push(q.value),
                        Array.prototype.push.apply(g, v(q.color));
                    return {
                        kind: "ramp",
                        stops: p,
                        values: g,
                        count: r.stops.length
                    }
                }
                ;
                w.getFlowSimulationSettings = function(r) {
                    var p = B(r);
                    p = I(p);
                    const g = Math.max(p / 2, 5)
                      , q = Math.round(E.pt2px(r.maxPathLength) / g) + 1
                      , {density: F} = r;
                    return {
                        smoothing: E.pt2px(r.smoothing),
                        interpolate: !0,
                        velocityScale: "flow-from" === r.flowRepresentation ? 1 : -1,
                        verticesPerLine: q,
                        minSpeedThreshold: .001,
                        segmentLength: g,
                        maxTurnAngle: 1,
                        collisions: !0,
                        lineCollisionWidth: p,
                        lineSpacing: 10,
                        density: F
                    }
                }
                ;
                w.getForegroundColor = function(r) {
                    return {
                        kind: "constant",
                        value: [.1, .1, .1, 1]
                    }
                }
                ;
                w.getMax = I;
                w.getOpacity = function(r) {
                    if (!r.hasVisualVariables("opacity"))
                        return {
                            kind: "constant",
                            value: [1]
                        };
                    r = r.getVisualVariablesForType("opacity")[0];
                    const p = []
                      , g = [];
                    for (const q of r.stops)
                        p.push(q.value),
                        g.push(q.opacity);
                    return {
                        kind: "ramp",
                        stops: p,
                        values: g,
                        count: r.stops.length
                    }
                }
                ;
                w.getSize = B;
                w.setUniform = u;
                w.setUniforms = function(r, p, g, q) {
                    "constant" === q.kind ? u(r, g, `u_${p}`, q.value) : (u(r, "float", `u_${p}_stops`, q.stops),
                    u(r, g, `u_${p}_values`, q.values),
                    r.setUniform1i(`u_${p}_count`, q.count))
                }
                ;
                w.timeExtentsEqual = H;
                w.toRgba = v;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/flow/styles/Imagery": function() {
            define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/promiseUtils ../utils ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ../../../../webgl/VertexElementDescriptor".split(" "), function(w, K, E, I, v, B, u, H, r) {
                let p = function() {
                    function L(m) {
                        this._params = m;
                        this.animated = !1
                    }
                    var n = L.prototype;
                    n.isCompatible = function(m) {
                        if (!(m instanceof L && I.timeExtentsEqual(this._params.timeExtent, m._params.timeExtent)))
                            return !1;
                        let h;
                        return h = (h = (h = this._params.loadImagery === m._params.loadImagery) && this._params.color.kind === m._params.color.kind) && this._params.opacity.kind === m._params.opacity.kind
                    }
                    ;
                    n.load = function() {
                        var m = K._asyncToGenerator(function*(h, A) {
                            const {extent: T, size: Z} = h;
                            E.throwIfAborted(A);
                            h = yield this._params.loadImagery(T, Z[0], Z[1], this._params.timeExtent, A);
                            return new O(h,{
                                color: this._params.color,
                                opacity: this._params.opacity
                            })
                        });
                        return function(h, A) {
                            return m.apply(this, arguments)
                        }
                    }();
                    n.render = function(m, h, A) {
                        ({context: m} = m);
                        const {program: T} = A;
                        m.setFaceCullingEnabled(!1);
                        m.setBlendingEnabled(!0);
                        m.setBlendFunction(B.BlendFactor.ONE, B.BlendFactor.ONE_MINUS_SRC_ALPHA);
                        m.useProgram(T);
                        T.setUniformMatrix3fv("u_dvsMat3", h.dvsMat3);
                        m.bindTexture(A.texture, 0);
                        T.setUniform1i("u_texture", 0);
                        T.setUniform1f("u_Min", A.min);
                        T.setUniform1f("u_Max", A.max);
                        I.setUniforms(T, "color", "vec4", this._params.color);
                        I.setUniforms(T, "opacity", "float", this._params.opacity);
                        m.bindVAO(A.vertexArray);
                        m.drawArrays(B.PrimitiveType.TRIANGLE_STRIP, 0, 4)
                    }
                    ;
                    return L
                }();
                const g = new Map;
                g.set("a_position", 0);
                g.set("a_texcoord", 1);
                const q = {
                    geometry: [new r.VertexElementDescriptor("a_position",2,B.DataType.UNSIGNED_SHORT,0,8), new r.VertexElementDescriptor("a_texcoord",2,B.DataType.UNSIGNED_SHORT,4,8)]
                }
                  , F = {
                    vsPath: "raster/flow/imagery",
                    fsPath: "raster/flow/imagery",
                    attributes: g
                };
                let O = function() {
                    function L(m, h) {
                        this._flowData = m;
                        this._values = h
                    }
                    var n = L.prototype;
                    n.attach = function(m) {
                        var {context: h} = m;
                        const {width: A, height: T} = this._flowData;
                        var Z = {
                            geometry: v.BufferObject.createVertex(h, B.Usage.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, A, 0, 1, 1, 0, T, 0, 0, A, T, 1, 0]))
                        };
                        Z = new H.VertexArrayObject(h,g,q,Z);
                        var V = [];
                        "ramp" === this._values.color.kind && V.push("vvColor");
                        "ramp" === this._values.opacity.kind && V.push("vvOpacity");
                        m = m.painter.materialManager.getProgram(F, V);
                        V = 1E6;
                        let W = -1E6;
                        for (var c = 0; c < T; c++)
                            for (var b = 0; b < A; b++)
                                if (0 !== this._flowData.mask[c * A + b]) {
                                    var f = this._flowData.data[2 * (c * A + b)]
                                      , t = this._flowData.data[2 * (c * A + b) + 1];
                                    f = Math.sqrt(f * f + t * t);
                                    V = Math.min(V, f);
                                    W = Math.max(W, f)
                                }
                        c = new Uint8Array(4 * A * T);
                        for (b = 0; b < T; b++)
                            for (f = 0; f < A; f++)
                                if (0 !== this._flowData.mask[b * A + f]) {
                                    t = this._flowData.data[2 * (b * A + f)];
                                    const k = this._flowData.data[2 * (b * A + f) + 1];
                                    c[4 * (b * A + f)] = (Math.sqrt(t * t + k * k) - V) / (W - V) * 255;
                                    c[4 * (b * A + f) + 1] = 0;
                                    c[4 * (b * A + f) + 2] = 0;
                                    c[4 * (b * A + f) + 3] = 255
                                } else
                                    c[4 * (b * A + f)] = 0,
                                    c[4 * (b * A + f) + 1] = 0,
                                    c[4 * (b * A + f) + 2] = 0,
                                    c[4 * (b * A + f) + 3] = 0;
                        h = new u.Texture(h,{
                            pixelFormat: B.PixelFormat.RGBA,
                            internalFormat: B.PixelFormat.RGBA,
                            samplingMode: B.TextureSamplingMode.LINEAR,
                            dataType: B.PixelType.UNSIGNED_BYTE,
                            wrapMode: B.TextureWrapMode.CLAMP_TO_EDGE,
                            flipped: !0,
                            width: A,
                            height: T
                        },c);
                        this.vertexArray = Z;
                        this.program = m;
                        this.texture = h;
                        this.min = V;
                        this.max = W;
                        this._flowData = null
                    }
                    ;
                    n.detach = function() {
                        this.vertexArray.dispose();
                        this.texture.dispose()
                    }
                    ;
                    K._createClass(L, [{
                        key: "ready",
                        get: function() {
                            return this.program.isCompiled
                        }
                    }]);
                    return L
                }();
                w.ImageryResources = O;
                w.default = p;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/flow/styles/Particles": function() {
            define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/promiseUtils ../utils ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject ../../../../webgl/VertexElementDescriptor".split(" "), function(w, K, E, I, v, B, u, H) {
                let r = function() {
                    function O(n) {
                        this._params = n
                    }
                    var L = O.prototype;
                    L.isCompatible = function(n) {
                        return n instanceof O ? I.areStreamlinesCompatible(this._params, n._params) : !1
                    }
                    ;
                    L.load = function() {
                        var n = K._asyncToGenerator(function*(m, h) {
                            const {extent: A, size: T} = m;
                            E.throwIfAborted(h);
                            m = yield this._params.loadImagery(A, T[0], T[1], this._params.timeExtent, h);
                            const {vertexData: Z, indexData: V} = yield this._params.createFlowMesh("Particles", this._params.simulationSettings, m, h);
                            return new F(Z,V,{
                                color: this._params.color,
                                opacity: this._params.opacity,
                                size: this._params.size
                            })
                        });
                        return function(m, h) {
                            return n.apply(this, arguments)
                        }
                    }();
                    L.render = function(n, m, h) {
                        ({context: n} = n);
                        const {program: A} = h;
                        n.setFaceCullingEnabled(!1);
                        n.setBlendingEnabled(!0);
                        n.setBlendFunction(B.BlendFactor.ONE, B.BlendFactor.ONE_MINUS_SRC_ALPHA);
                        n.useProgram(A);
                        A.setUniform1f("u_time", m.time);
                        A.setUniform1f("u_trailLength", this._params.trailLength);
                        A.setUniform1f("u_flowSpeed", this._params.flowSpeed);
                        A.setUniform1f("u_featheringSize", this._params.featheringSize);
                        A.setUniform1f("u_featheringOffset", this._params.featheringOffset);
                        A.setUniform1f("u_introFade", this._params.introFade ? 1 : 0);
                        A.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0);
                        A.setUniform1f("u_decayRate", this._params.decayRate);
                        A.setUniformMatrix3fv("u_dvsMat3", m.dvsMat3);
                        A.setUniformMatrix3fv("u_displayViewMat3", m.displayViewMat3);
                        I.setUniforms(A, "color", "vec4", this._params.color);
                        I.setUniforms(A, "opacity", "float", this._params.opacity);
                        I.setUniforms(A, "size", "float", this._params.size);
                        n.bindVAO(h.vertexArray);
                        n.drawElements(B.PrimitiveType.TRIANGLES, h.indexCount, B.DataType.UNSIGNED_INT, 0)
                    }
                    ;
                    K._createClass(O, [{
                        key: "animated",
                        get: function() {
                            return 0 < this._params.flowSpeed
                        }
                    }]);
                    return O
                }();
                const p = new Map;
                p.set("a_xyts0", 0);
                p.set("a_xyts1", 1);
                p.set("a_typeIdDurationSeed", 2);
                p.set("a_extrudeInfo", 3);
                const g = {
                    geometry: [new H.VertexElementDescriptor("a_xyts0",4,B.DataType.FLOAT,0,64), new H.VertexElementDescriptor("a_xyts1",4,B.DataType.FLOAT,16,64), new H.VertexElementDescriptor("a_typeIdDurationSeed",4,B.DataType.FLOAT,32,64), new H.VertexElementDescriptor("a_extrudeInfo",4,B.DataType.FLOAT,48,64)]
                }
                  , q = {
                    vsPath: "raster/flow/particles",
                    fsPath: "raster/flow/particles",
                    attributes: p
                };
                let F = function() {
                    function O(n, m, h) {
                        this._vertexData = n;
                        this._indexData = m;
                        this._values = h
                    }
                    var L = O.prototype;
                    L.attach = function(n) {
                        var {context: m} = n
                          , h = v.BufferObject.createVertex(m, B.Usage.STATIC_DRAW, this._vertexData);
                        const A = v.BufferObject.createIndex(m, B.Usage.STATIC_DRAW, this._indexData);
                        m = new u.VertexArrayObject(m,p,g,{
                            geometry: h
                        },A);
                        h = [];
                        "ramp" === this._values.color.kind && h.push("vvColor");
                        "ramp" === this._values.opacity.kind && h.push("vvOpacity");
                        "ramp" === this._values.size.kind && h.push("vvSize");
                        n = n.painter.materialManager.getProgram(q, h);
                        this.vertexArray = m;
                        this.program = n;
                        this.indexCount = this._indexData.length;
                        this._indexData = this._vertexData = null
                    }
                    ;
                    L.detach = function() {
                        this.vertexArray.dispose()
                    }
                    ;
                    K._createClass(O, [{
                        key: "ready",
                        get: function() {
                            return this.program.isCompiled
                        }
                    }]);
                    return O
                }();
                w.ParticlesResources = F;
                w.default = r;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/flow/styles/Stack": function() {
            define(["exports", "../../../../../chunks/_rollupPluginBabelHelpers"], function(w, K) {
                let E = function() {
                    function v(u) {
                        this._styles = u
                    }
                    var B = v.prototype;
                    B.isCompatible = function(u) {
                        if (!(u instanceof v) || this._styles.length !== u._styles.length)
                            return !1;
                        const H = this._styles.length;
                        for (let r = 0; r < H; r++)
                            if (!this._styles[r].isCompatible(u._styles[r]))
                                return !1;
                        return !0
                    }
                    ;
                    B.load = function() {
                        var u = K._asyncToGenerator(function*(H, r) {
                            const p = yield Promise.all(this._styles.map(g=>g.load(H, r)));
                            return new I(p)
                        });
                        return function(H, r) {
                            return u.apply(this, arguments)
                        }
                    }();
                    B.render = function(u, H, r) {
                        for (let p = 0; p < this._styles.length; p++)
                            this._styles[p].render(u, H, r.resources[p])
                    }
                    ;
                    K._createClass(v, [{
                        key: "animated",
                        get: function() {
                            return this._styles.reduce((u,H)=>u || H.animated, !1)
                        }
                    }]);
                    return v
                }()
                  , I = function() {
                    function v(u) {
                        this.resources = u
                    }
                    var B = v.prototype;
                    B.attach = function(u) {
                        for (const H of this.resources)
                            H.attach(u)
                    }
                    ;
                    B.detach = function() {
                        for (const u of this.resources)
                            u.detach()
                    }
                    ;
                    K._createClass(v, [{
                        key: "ready",
                        get: function() {
                            return this.resources.reduce((u,H)=>u && H.ready, !0)
                        }
                    }]);
                    return v
                }();
                w.StackResources = I;
                w.default = E;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/flow/styles/Streamlines": function() {
            define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/promiseUtils ../utils ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject ../../../../webgl/VertexElementDescriptor".split(" "), function(w, K, E, I, v, B, u) {
                let H = function() {
                    function F(L) {
                        this._params = L
                    }
                    var O = F.prototype;
                    O.isCompatible = function(L) {
                        return L instanceof F ? E.areStreamlinesCompatible(this._params, L._params) : !1
                    }
                    ;
                    O.load = function() {
                        var L = w._asyncToGenerator(function*(n, m) {
                            const {extent: h, size: A} = n;
                            K.throwIfAborted(m);
                            n = yield this._params.loadImagery(h, A[0], A[1], this._params.timeExtent, m);
                            const {vertexData: T, indexData: Z} = yield this._params.createFlowMesh("Streamlines", this._params.simulationSettings, n, m);
                            return new q(T,Z,{
                                color: this._params.color,
                                opacity: this._params.opacity,
                                size: this._params.size
                            })
                        });
                        return function(n, m) {
                            return L.apply(this, arguments)
                        }
                    }();
                    O.render = function(L, n, m) {
                        ({context: L} = L);
                        const {program: h} = m;
                        L.setFaceCullingEnabled(!1);
                        L.setBlendingEnabled(!0);
                        L.setBlendFunction(v.BlendFactor.ONE, v.BlendFactor.ONE_MINUS_SRC_ALPHA);
                        L.useProgram(h);
                        h.setUniform1f("u_time", n.time);
                        h.setUniform1f("u_trailLength", this._params.trailLength);
                        h.setUniform1f("u_flowSpeed", this._params.flowSpeed);
                        h.setUniform1f("u_featheringSize", this._params.featheringSize);
                        h.setUniform1f("u_featheringOffset", this._params.featheringOffset);
                        h.setUniform1f("u_introFade", this._params.introFade ? 1 : 0);
                        h.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0);
                        h.setUniform1f("u_decayRate", this._params.decayRate);
                        h.setUniformMatrix3fv("u_dvsMat3", n.dvsMat3);
                        h.setUniformMatrix3fv("u_displayViewMat3", n.displayViewMat3);
                        E.setUniforms(h, "color", "vec4", this._params.color);
                        E.setUniforms(h, "opacity", "float", this._params.opacity);
                        E.setUniforms(h, "size", "float", this._params.size);
                        L.bindVAO(m.vertexArray);
                        L.drawElements(v.PrimitiveType.TRIANGLES, m.indexCount, v.DataType.UNSIGNED_INT, 0)
                    }
                    ;
                    w._createClass(F, [{
                        key: "animated",
                        get: function() {
                            return 0 < this._params.flowSpeed
                        }
                    }]);
                    return F
                }();
                const r = new Map;
                r.set("a_positionAndSide", 0);
                r.set("a_timeInfo", 1);
                r.set("a_extrude", 2);
                r.set("a_speed", 3);
                const p = {
                    geometry: [new u.VertexElementDescriptor("a_positionAndSide",3,v.DataType.FLOAT,0,36), new u.VertexElementDescriptor("a_timeInfo",3,v.DataType.FLOAT,12,36), new u.VertexElementDescriptor("a_extrude",2,v.DataType.FLOAT,24,36), new u.VertexElementDescriptor("a_speed",1,v.DataType.FLOAT,32,36)]
                }
                  , g = {
                    vsPath: "raster/flow/streamlines",
                    fsPath: "raster/flow/streamlines",
                    attributes: r
                };
                let q = function() {
                    function F(L, n, m) {
                        this._vertexData = L;
                        this._indexData = n;
                        this._values = m
                    }
                    var O = F.prototype;
                    O.attach = function(L) {
                        var {context: n} = L
                          , m = I.BufferObject.createVertex(n, v.Usage.STATIC_DRAW, this._vertexData);
                        const h = I.BufferObject.createIndex(n, v.Usage.STATIC_DRAW, this._indexData);
                        n = new B.VertexArrayObject(n,r,p,{
                            geometry: m
                        },h);
                        m = [];
                        "ramp" === this._values.color.kind && m.push("vvColor");
                        "ramp" === this._values.opacity.kind && m.push("vvOpacity");
                        "ramp" === this._values.size.kind && m.push("vvSize");
                        L = L.painter.materialManager.getProgram(g, m);
                        this.vertexArray = n;
                        this.program = L;
                        this.indexCount = this._indexData.length;
                        this._indexData = this._vertexData = null
                    }
                    ;
                    O.detach = function() {
                        this.vertexArray.dispose()
                    }
                    ;
                    w._createClass(F, [{
                        key: "ready",
                        get: function() {
                            return this.program.isCompiled
                        }
                    }]);
                    return F
                }();
                return H
            })
        },
        "esri/views/2d/engine/flow/dataUtils": function() {
            define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../geometry ../../../../core/has ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/RandomLCG ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/Extent".split(" "), function(w, K, E, I, v, B, u, H, r, p, g) {
                function q() {
                    q = K._asyncToGenerator(function*(b, f, t, k) {
                        const x = performance.now();
                        var S = F(f, t);
                        const P = performance.now();
                        t = L(f, S, t.width, t.height);
                        f = performance.now();
                        S = m(t, !0);
                        t = performance.now();
                        b = "Streamlines" === b ? h(S, 10) : A(S);
                        S = performance.now();
                        I("esri-2d-profiler") && (c.info("I.1", "_createFlowFieldFromData (ms)", Math.round(P - x)),
                        c.info("I.2", "_getStreamlines (ms)", Math.round(f - P)),
                        c.info("I.3", "createAnimatedLinesData (ms)", Math.round(t - f)),
                        c.info("I.4", "create{Streamlines|Particles}Mesh (ms)", Math.round(S - t)),
                        c.info("I.5", "createFlowMesh (ms)", Math.round(S - x)),
                        c.info("I.6", "Mesh size (bytes)", b.vertexData.buffer.byteLength + b.indexData.buffer.byteLength));
                        yield Promise.resolve();
                        H.throwIfAborted(k);
                        return b
                    });
                    return q.apply(this, arguments)
                }
                function F(b, f) {
                    const t = n(f.data, f.width, f.height, b.smoothing);
                    return b.interpolate ? (k,x)=>{
                        const S = Math.floor(k)
                          , P = Math.floor(x);
                        if (0 > S || S >= f.width || 0 > P || P >= f.height)
                            return [0, 0];
                        k -= S;
                        x -= P;
                        const e = S < f.width - 1 ? S + 1 : S
                          , D = P < f.height - 1 ? P + 1 : P;
                        return [(t[2 * (P * f.width + S)] * (1 - x) + t[2 * (D * f.width + S)] * x) * (1 - k) + (t[2 * (P * f.width + e)] * (1 - x) + t[2 * (D * f.width + e)] * x) * k, (t[2 * (P * f.width + S) + 1] * (1 - x) + t[2 * (D * f.width + S) + 1] * x) * (1 - k) + (t[2 * (P * f.width + e) + 1] * (1 - x) + t[2 * (D * f.width + e) + 1] * x) * k]
                    }
                    : (k,x)=>{
                        k = Math.round(k);
                        x = Math.round(x);
                        return 0 > k || k >= f.width || 0 > x || x >= f.height ? [0, 0] : [t[2 * (x * f.width + k)], t[2 * (x * f.width + k) + 1]]
                    }
                }
                function O(b, f, t, k, x, S, P, e, D) {
                    const Q = [];
                    let M = 0
                      , [N,X] = f(t, k);
                    N *= b.velocityScale;
                    X *= b.velocityScale;
                    Q.push({
                        x: t,
                        y: k,
                        t: M,
                        speed: Math.sqrt(N * N + X * X)
                    });
                    for (let ha = 0; ha < b.verticesPerLine; ha++) {
                        let[a,d] = f(t, k);
                        a *= b.velocityScale;
                        d *= b.velocityScale;
                        const l = Math.sqrt(a * a + d * d);
                        if (l < b.minSpeedThreshold)
                            break;
                        const z = a / l
                          , J = d / l;
                        t += z * b.segmentLength;
                        k += J * b.segmentLength;
                        M += b.segmentLength / l;
                        if (Math.acos(z * ea + J * ca) > b.maxTurnAngle)
                            break;
                        if (b.collisions) {
                            var ea = Math.round(t * D);
                            var ca = Math.round(k * D);
                            if (0 > ea || ea > P - 1 || 0 > ca || ca > e - 1)
                                break;
                            const C = S[ca * P + ea];
                            if (-1 !== C && C !== x)
                                break;
                            S[ca * P + ea] = x
                        }
                        Q.push({
                            x: t,
                            y: k,
                            t: M,
                            speed: l
                        });
                        ea = z;
                        ca = J
                    }
                    return Q
                }
                function L(b, f, t, k) {
                    const x = []
                      , S = new r
                      , P = 1 / Math.max(b.lineCollisionWidth, 1)
                      , e = Math.round(t * P)
                      , D = Math.round(k * P)
                      , Q = new Int32Array(e * D);
                    for (var M = 0; M < Q.length; M++)
                        Q[M] = -1;
                    M = [];
                    for (let N = 0; N < k; N += b.lineSpacing)
                        for (let X = 0; X < t; X += b.lineSpacing)
                            M.push({
                                x: X,
                                y: N,
                                sort: S.getFloat()
                            });
                    M.sort((N,X)=>N.sort - X.sort);
                    for (const {x: N, y: X} of M)
                        S.getFloat() < b.density && (t = O(b, f, N, X, x.length, Q, e, D, P),
                        2 > t.length || x.push(t));
                    return x
                }
                function n(b, f, t, k) {
                    if (0 === k)
                        return b;
                    const x = Math.round(3 * k)
                      , S = Array(2 * x + 1);
                    var P = 0;
                    for (var e = -x; e <= x; e++) {
                        var D = Math.exp(-e * e / (k * k));
                        S[e + x] = D;
                        P += D
                    }
                    for (k = -x; k <= x; k++)
                        S[k + x] /= P;
                    P = new Float32Array(b.length);
                    for (k = 0; k < t; k++)
                        for (e = 0; e < f; e++) {
                            var Q = D = 0;
                            for (var M = -x; M <= x; M++)
                                if (!(0 > e + M || e + M >= f)) {
                                    var N = S[M + x];
                                    D += N * b[2 * (k * f + (e + M))];
                                    Q += N * b[2 * (k * f + (e + M)) + 1]
                                }
                            P[2 * (k * f + e)] = D;
                            P[2 * (k * f + e) + 1] = Q
                        }
                    b = new Float32Array(b.length);
                    for (k = 0; k < f; k++)
                        for (e = 0; e < t; e++) {
                            Q = D = 0;
                            for (M = -x; M <= x; M++)
                                0 > e + M || e + M >= t || (N = S[M + x],
                                D += N * P[2 * ((e + M) * f + k)],
                                Q += N * P[2 * ((e + M) * f + k) + 1]);
                            b[2 * (e * f + k)] = D;
                            b[2 * (e * f + k) + 1] = Q
                        }
                    return b
                }
                function m(b, f) {
                    const t = new r;
                    var k = b.reduce((e,D)=>e + D.length, 0);
                    k = new Float32Array(4 * k);
                    const x = Array(b.length);
                    let S = 0
                      , P = 0;
                    for (const e of b) {
                        b = S;
                        for (const D of e)
                            k[4 * S] = D.x,
                            k[4 * S + 1] = D.y,
                            k[4 * S + 2] = D.t,
                            k[4 * S + 3] = D.speed,
                            S++;
                        x[P++] = {
                            startVertex: b,
                            numberOfVertices: e.length,
                            totalTime: e[e.length - 1].t,
                            timeSeed: f ? t.getFloat() : 0
                        }
                    }
                    return {
                        lineVertices: k,
                        lineDescriptors: x
                    }
                }
                function h(b, f) {
                    function t(ea, ca, ha, a, d, l, z, J) {
                        const C = 9 * D;
                        let y = 0;
                        e[C + y++] = ea;
                        e[C + y++] = ca;
                        e[C + y++] = 1;
                        e[C + y++] = ha;
                        e[C + y++] = l;
                        e[C + y++] = z;
                        e[C + y++] = a / 2;
                        e[C + y++] = d / 2;
                        e[C + y++] = J;
                        D++;
                        e[C + y++] = ea;
                        e[C + y++] = ca;
                        e[C + y++] = -1;
                        e[C + y++] = ha;
                        e[C + y++] = l;
                        e[C + y++] = z;
                        e[C + y++] = -a / 2;
                        e[C + y++] = -d / 2;
                        e[C + y++] = J;
                        D++
                    }
                    const {lineVertices: k, lineDescriptors: x} = b;
                    var S = b = 0;
                    for (var P of x)
                        b += 2 * P.numberOfVertices,
                        S += 6 * (P.numberOfVertices - 1);
                    const e = new Float32Array(9 * b);
                    P = new Uint32Array(S);
                    let D = 0;
                    b = 0;
                    for (const ea of x) {
                        const {totalTime: ca, timeSeed: ha} = ea;
                        let a = S = null
                          , d = null;
                        var Q = null
                          , M = null
                          , N = null;
                        for (let l = 0; l < ea.numberOfVertices; l++) {
                            Q = k[4 * (ea.startVertex + l)];
                            const z = k[4 * (ea.startVertex + l) + 1]
                              , J = k[4 * (ea.startVertex + l) + 2]
                              , C = k[4 * (ea.startVertex + l) + 3];
                            let y = null
                              , R = null;
                            var X = null;
                            let G = null;
                            0 < l && (y = Q - S,
                            R = z - a,
                            X = Math.sqrt(y * y + R * R),
                            y /= X,
                            R /= X,
                            1 < l ? (M = y + M,
                            N = R + N,
                            X = Math.sqrt(M * M + N * N),
                            M /= X,
                            N /= X,
                            X = Math.min(1 / (M * y + N * R), f),
                            M *= X,
                            N *= X,
                            X = -N,
                            G = M) : (X = -R,
                            G = y),
                            null !== X && null !== G && (t(S, a, d, X, G, ca, ha, C),
                            P[b++] = D - 2,
                            P[b++] = D,
                            P[b++] = D - 1,
                            P[b++] = D,
                            P[b++] = D + 1,
                            P[b++] = D - 1));
                            S = Q;
                            a = z;
                            d = J;
                            M = y;
                            N = R;
                            Q = C
                        }
                        t(S, a, d, -N, M, ca, ha, Q)
                    }
                    return {
                        vertexData: e,
                        indexData: P
                    }
                }
                function A(b) {
                    function f(U, aa) {
                        var da = J + y
                          , ba = C + R
                          , ja = Math.sqrt(da * da + ba * ba);
                        da /= ja;
                        ba /= ja;
                        var ka = J * da + C * ba
                          , ia = y + G
                          , fa = R + Y;
                        ja = Math.sqrt(ia * ia + fa * fa);
                        ia /= ja;
                        fa /= ja;
                        var la = y * ia + R * fa;
                        {
                            ja = X;
                            var oa = ea
                              , pa = ca
                              , qa = ha;
                            ba = -(ba / ka);
                            da /= ka;
                            ka = a;
                            var ua = d
                              , va = l
                              , ra = z;
                            fa = -(fa / la);
                            ia /= la;
                            la = 16 * M;
                            let na = 0;
                            for (const wa of [1, 2])
                                for (const xa of [1, 2, 3, 4])
                                    D[la + na++] = ja,
                                    D[la + na++] = oa,
                                    D[la + na++] = pa,
                                    D[la + na++] = qa,
                                    D[la + na++] = ka,
                                    D[la + na++] = ua,
                                    D[la + na++] = va,
                                    D[la + na++] = ra,
                                    D[la + na++] = wa,
                                    D[la + na++] = xa,
                                    D[la + na++] = U,
                                    D[la + na++] = aa,
                                    D[la + na++] = ba / 2,
                                    D[la + na++] = da / 2,
                                    D[la + na++] = fa / 2,
                                    D[la + na++] = ia / 2,
                                    M++
                        }
                        Q[N++] = M - 8;
                        Q[N++] = M - 7;
                        Q[N++] = M - 6;
                        Q[N++] = M - 7;
                        Q[N++] = M - 5;
                        Q[N++] = M - 6;
                        Q[N++] = M - 4;
                        Q[N++] = M - 3;
                        Q[N++] = M - 2;
                        Q[N++] = M - 3;
                        Q[N++] = M - 1;
                        Q[N++] = M - 2
                    }
                    function t(U, aa, da, ba, ja, ka) {
                        J = y;
                        C = R;
                        y = G;
                        R = Y;
                        null == J && null == C && (J = y,
                        C = R);
                        if (null != a && null != d) {
                            G = U - a;
                            Y = aa - d;
                            const ia = Math.sqrt(G * G + Y * Y);
                            G /= ia;
                            Y /= ia
                        }
                        null != J && null != C && f(ja, ka);
                        X = a;
                        ea = d;
                        ca = l;
                        ha = z;
                        a = U;
                        d = aa;
                        l = da;
                        z = ba
                    }
                    function k(U, aa) {
                        J = y;
                        C = R;
                        y = G;
                        R = Y;
                        null == J && null == C && (J = y,
                        C = R);
                        null != J && null != C && f(U, aa)
                    }
                    const {lineVertices: x, lineDescriptors: S} = b;
                    let P = b = 0;
                    for (var e of S) {
                        const U = e.numberOfVertices - 1;
                        b += 8 * U;
                        P += 12 * U
                    }
                    const D = new Float32Array(16 * b)
                      , Q = new Uint32Array(P);
                    let M = 0, N = 0, X, ea, ca, ha, a, d, l, z, J, C, y, R, G, Y;
                    for (const U of S) {
                        Y = G = R = y = C = J = z = l = d = a = ha = ca = ea = X = null;
                        const {totalTime: aa, timeSeed: da} = U;
                        for (e = 0; e < U.numberOfVertices; e++)
                            t(x[4 * (U.startVertex + e)], x[4 * (U.startVertex + e) + 1], x[4 * (U.startVertex + e) + 2], x[4 * (U.startVertex + e) + 3], aa, da);
                        k(aa, da)
                    }
                    return {
                        vertexData: D,
                        indexData: Q
                    }
                }
                function T(b, f) {
                    const t = f.pixels
                      , {width: k, height: x} = f
                      , S = new Float32Array(k * x * 2)
                      , P = f.mask || new Uint8Array(k * x * 2);
                    f.mask || P.fill(255);
                    if ("vector-uv" === b)
                        for (b = 0; b < k * x; b++)
                            S[2 * b] = t[0][b],
                            S[2 * b + 1] = -t[1][b];
                    else if ("vector-magdir" === b)
                        for (b = 0; b < k * x; b++) {
                            f = t[0][b];
                            const e = B.deg2rad(t[1][b])
                              , D = Math.sin(e - Math.PI / 2);
                            S[2 * b] = Math.cos(e - Math.PI / 2) * f;
                            S[2 * b + 1] = D * f
                        }
                    return {
                        data: S,
                        mask: P,
                        width: k,
                        height: x
                    }
                }
                function Z() {
                    Z = K._asyncToGenerator(function*(b, f, t, k, x, S) {
                        const P = performance.now();
                        var e = p.getInfo(f.spatialReference);
                        if (!e)
                            return t = yield V(b, f, t, k, x, S),
                            I("esri-2d-profiler") && c.info("I.7", "loadImagery, early exit (ms)", Math.round(performance.now() - P)),
                            I("esri-2d-profiler") && c.info("I.9", "Number of parts", 1),
                            t;
                        const [D,Q] = e.valid
                          , M = Math.ceil(f.width / (Q - D))
                          , N = f.width / M
                          , X = Math.round(t / M);
                        let ea = f.xmin;
                        const ca = [];
                        e = performance.now();
                        for (let ha = 0; ha < M; ha++) {
                            const a = new g({
                                xmin: ea,
                                xmax: ea + N,
                                ymin: f.ymin,
                                ymax: f.ymax,
                                spatialReference: f.spatialReference
                            });
                            ca.push(V(b, a, X, k, x, S));
                            ea += N
                        }
                        b = yield Promise.all(ca);
                        I("esri-2d-profiler") && c.info("I.8", "All calls to _fetchPart (ms)", Math.round(performance.now() - e));
                        I("esri-2d-profiler") && c.info("I.9", "Number of parts", b.length);
                        k = {
                            data: new Float32Array(t * k * 2),
                            mask: new Uint8Array(t * k),
                            width: t,
                            height: k
                        };
                        f = 0;
                        for (const ha of b) {
                            for (b = 0; b < ha.height; b++)
                                for (x = 0; x < ha.width; x++)
                                    f + x >= t || (k.data[2 * (b * t + f + x)] = ha.data[2 * (b * ha.width + x)],
                                    k.data[2 * (b * t + f + x) + 1] = ha.data[2 * (b * ha.width + x) + 1],
                                    k.mask[b * t + f + x] = ha.mask[b * ha.width + x]);
                            f += ha.width
                        }
                        I("esri-2d-profiler") && c.info("I.10", "loadImagery, general exit (ms)", Math.round(performance.now() - P));
                        return k
                    });
                    return Z.apply(this, arguments)
                }
                function V(b, f, t, k, x, S) {
                    return W.apply(this, arguments)
                }
                function W() {
                    W = K._asyncToGenerator(function*(b, f, t, k, x, S) {
                        const P = {
                            requestProjectedLocalDirections: !0,
                            signal: S
                        };
                        u.isSome(x) && (P.timeExtent = x);
                        if ("imagery" === b.type)
                            return yield b.load({
                                signal: S
                            }),
                            x = b.rasterInfo.dataType,
                            b = yield b.fetchImage(f, t, k, P),
                            !b || u.isNone(b.pixelData) || u.isNone(b.pixelData.pixelBlock) ? {
                                data: new Float32Array(t * k * 2),
                                mask: new Uint8Array(t * k),
                                width: t,
                                height: k
                            } : T(x, b.pixelData.pixelBlock);
                        yield b.load({
                            signal: S
                        });
                        x = b.rasterInfo.dataType;
                        b = yield b.fetchPixels(f, t, k, P);
                        return !b || u.isNone(b.pixelBlock) ? {
                            data: new Float32Array(t * k * 2),
                            mask: new Uint8Array(t * k),
                            width: t,
                            height: k
                        } : T(x, b.pixelBlock)
                    });
                    return W.apply(this, arguments)
                }
                const c = v.getLogger("esri.views.2d.engine.flow.dataUtils");
                w.createAnimatedLinesData = m;
                w.createFlowMesh = function(b, f, t, k) {
                    return q.apply(this, arguments)
                }
                ;
                w.createParticlesMesh = A;
                w.createStreamlinesMesh = h;
                w.loadImagery = function(b, f, t, k, x, S) {
                    return Z.apply(this, arguments)
                }
                ;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/flow/FlowContainer": function() {
            define(["../../../../chunks/_rollupPluginBabelHelpers", "./BrushFlow", "../webgl/enums", "../webgl/WGLContainer"], function(w, K, E, I) {
                return function(v) {
                    function B() {
                        var H = v.apply(this, arguments) || this;
                        H.flowStyle = null;
                        return H
                    }
                    w._inheritsLoose(B, v);
                    var u = B.prototype;
                    u.doRender = function(H) {
                        v.prototype.doRender.call(this, H)
                    }
                    ;
                    u.prepareRenderPasses = function(H) {
                        const r = H.registerRenderPass({
                            name: "flow",
                            brushes: [K],
                            target: ()=>this.children,
                            drawPhase: E.WGLDrawPhase.MAP
                        });
                        return [...v.prototype.prepareRenderPasses.call(this, H), r]
                    }
                    ;
                    w._createClass(B, [{
                        key: "requiresDedicatedFBO",
                        get: function() {
                            return !1
                        }
                    }]);
                    return B
                }(I)
            })
        },
        "esri/views/2d/engine/flow/FlowStrategy": function() {
            define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Point ./FlowDisplayData ./FlowDisplayObject ../../../../geometry/Extent".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F, O, L, n, m) {
                function h(T, Z) {
                    const V = new O({
                        x: (T.xmax + T.xmin) / 2,
                        y: (T.ymax + T.ymin) / 2,
                        spatialReference: T.spatialReference
                    });
                    var W = T.xmax - T.xmin;
                    const c = T.ymax - T.ymin
                      , b = Math.abs(Math.cos(B.deg2rad(Z)))
                      , f = Math.abs(Math.sin(B.deg2rad(Z)));
                    Z = b * W + f * c;
                    W = f * W + b * c;
                    T = new m({
                        xmin: V.x - Z / 2,
                        ymin: V.y - W / 2,
                        xmax: V.x + Z / 2,
                        ymax: V.y + W / 2,
                        spatialReference: T.spatialReference
                    });
                    T.centerAt(V);
                    return T
                }
                const A = v.getLogger("esri.views.2d.engine.flow.FlowStrategy");
                E = function(T) {
                    function Z(W) {
                        W = T.call(this, W) || this;
                        W._flowDisplayObject = new n.FlowDisplayObject;
                        W._loading = null;
                        return W
                    }
                    w._inheritsLoose(Z, T);
                    var V = Z.prototype;
                    V.initialize = function() {
                        this.flowContainer.addChild(this._flowDisplayObject)
                    }
                    ;
                    V.destroy = function() {
                        this._clear();
                        this.flowContainer.removeAllChildren()
                    }
                    ;
                    V.update = function(W) {
                        var {flowStyle: c} = this.flowContainer;
                        if (u.isNone(c))
                            this._clear();
                        else {
                            var {extent: b, rotation: f, resolution: t, pixelRatio: k} = W.state;
                            W = h(b, f);
                            W.expand(1.15);
                            c = new L(c,W,[Math.round((W.xmax - W.xmin) / t), Math.round((W.ymax - W.ymin) / t)],k);
                            if (u.isSome(this._loading)) {
                                if (this._loading.update(c))
                                    return;
                                this._loading.detach();
                                this._loading = null
                            }
                            if (u.isNone(this._flowDisplayObject.displayData) || !this._flowDisplayObject.displayData.update(c))
                                c.load().then(()=>{
                                    this._flowDisplayObject.clear();
                                    this._flowDisplayObject.displayData = this._loading;
                                    this._loading = null
                                }
                                , x=>{
                                    H.isAbortError(x) || (A.error("A resource failed to load.", x),
                                    this._loading = null)
                                }
                                ),
                                this._loading = c
                        }
                    }
                    ;
                    V._clear = function() {
                        this._flowDisplayObject.clear();
                        u.isSome(this._loading) && (this._loading.detach(),
                        this._loading = null)
                    }
                    ;
                    w._createClass(Z, [{
                        key: "updating",
                        get: function() {
                            return null != this._loading
                        }
                    }]);
                    return Z
                }(I);
                K.__decorate([r.property()], E.prototype, "_loading", void 0);
                K.__decorate([r.property()], E.prototype, "flowContainer", void 0);
                K.__decorate([r.property()], E.prototype, "updating", null);
                return E = K.__decorate([F.subclass("esri.views.2d.engine.flow.FlowStrategy")], E)
            })
        },
        "esri/views/2d/engine/flow/FlowDisplayData": function() {
            define(["../../../../chunks/_rollupPluginBabelHelpers", "../../../../core/Logger"], function(w, K) {
                const E = K.getLogger("esri.views.2d.engine.flow.FlowDisplayData");
                return function() {
                    function I(B, u, H, r) {
                        this.state = {
                            name: "created"
                        };
                        this.flowStyle = B;
                        this.extent = u;
                        this.size = H;
                        this.pixelRatio = r
                    }
                    var v = I.prototype;
                    v.load = function() {
                        var B = w._asyncToGenerator(function*() {
                            const u = new AbortController;
                            this.state = {
                                name: "loading",
                                abortController: u
                            };
                            this.state = {
                                name: "loaded",
                                resources: yield this.flowStyle.load({
                                    extent: this.extent,
                                    size: this.size,
                                    pixelRatio: this.pixelRatio
                                }, u.signal)
                            }
                        });
                        return function() {
                            return B.apply(this, arguments)
                        }
                    }();
                    v.attach = function(B) {
                        if ("loaded" !== this.state.name)
                            E.error("Only loaded resources can be attached.");
                        else {
                            var u = this.state.resources;
                            u.attach(B);
                            this.state = {
                                name: "attached",
                                resources: u
                            }
                        }
                    }
                    ;
                    v.detach = function() {
                        "loading" === this.state.name ? (this.state.abortController.abort(),
                        this.state = {
                            name: "detached"
                        }) : "attached" === this.state.name && (this.state.resources.detach(),
                        this.state = {
                            name: "detached"
                        })
                    }
                    ;
                    v.update = function(B) {
                        if (!this.flowStyle.isCompatible(B.flowStyle) || !this.extent.equals(B.extent) || this.size[0] !== B.size[0] || this.size[1] !== B.size[1] || this.pixelRatio !== B.pixelRatio)
                            return !1;
                        this.flowStyle = B.flowStyle;
                        return !0
                    }
                    ;
                    return I
                }()
            })
        },
        "esri/views/2d/engine/flow/FlowDisplayObject": function() {
            define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../DisplayObject".split(" "), function(w, K, E, I, v, B, u) {
                u = function(H) {
                    function r() {
                        var g = H.apply(this, arguments) || this;
                        g._displayData = null;
                        return g
                    }
                    K._inheritsLoose(r, H);
                    var p = r.prototype;
                    p.clear = function() {
                        I.isSome(this._displayData) && (this._displayData.detach(),
                        this._displayData = null,
                        this.requestRender())
                    }
                    ;
                    p.setTransform = function(g) {
                        var {displayData: q} = this;
                        if (!I.isNone(q)) {
                            var F = [0, 0];
                            g.toScreen(F, [q.extent.xmin, q.extent.ymax]);
                            q = (q.extent.xmax - q.extent.xmin) / q.size[0] / g.resolution;
                            var O = E.deg2rad(g.rotation)
                              , {dvs: L} = this.transforms;
                            v.fromTranslation(L, [-1, 1, 0]);
                            v.scale(L, L, [2 / (g.size[0] * g.pixelRatio), -2 / (g.size[1] * g.pixelRatio), 1]);
                            v.translate(L, L, [F[0], F[1], 0]);
                            v.rotate(L, L, O);
                            v.scale(L, L, [q * g.pixelRatio, q * g.pixelRatio, 1])
                        }
                    }
                    ;
                    p._createTransforms = function() {
                        return {
                            dvs: B.create()
                        }
                    }
                    ;
                    K._createClass(r, [{
                        key: "displayData",
                        get: function() {
                            return this._displayData
                        },
                        set: function(g) {
                            this._displayData = g;
                            this.requestRender()
                        }
                    }]);
                    return r
                }(u.DisplayObject);
                w.FlowDisplayObject = u;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/layers/LayerView2D": function() {
            define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/Container ../../layers/support/ClipArea ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F, O, L, n, m) {
                const h = I.ofType({
                    key: "type",
                    base: O,
                    typeMap: {
                        rect: L,
                        path: m,
                        geometry: n
                    }
                });
                w.LayerView2DMixin = A=>{
                    A = function(T) {
                        function Z() {
                            var W = T.apply(this, arguments) || this;
                            W.attached = !1;
                            W.clips = new h;
                            W.lastUpdateId = -1;
                            W.moving = !1;
                            W.updateRequested = !1;
                            return W
                        }
                        K._inheritsLoose(Z, T);
                        var V = Z.prototype;
                        V.initialize = function() {
                            var W, c, b, f;
                            const t = null != (W = null == (c = this.view) ? void 0 : c.spatialReferenceLocked) ? W : !0;
                            (null == (b = this.view) ? 0 : b.spatialReference) && t && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new B("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{
                                layer: this.layer
                            }))) : (this.container || (this.container = new F.Container),
                            this.container.fadeTransitionEnabled = !0,
                            this.container.opacity = 0,
                            this.container.clips = this.clips,
                            this.handles.add([u.watch(()=>this.suspended, k=>{
                                this.container && (this.container.visible = !k);
                                this.view && !k && this.updateRequested && this.view.requestUpdate()
                            }
                            , u.syncAndInitial), u.watch(()=>{
                                var k, x;
                                return null != (k = null == (x = this.layer) ? void 0 : x.opacity) ? k : 1
                            }
                            , k=>{
                                this.container && (this.container.opacity = k)
                            }
                            , u.syncAndInitial), u.watch(()=>this.layer && "blendMode"in this.layer ? this.layer.blendMode : "normal", k=>{
                                this.container && (this.container.blendMode = k)
                            }
                            , u.syncAndInitial), u.watch(()=>this.layer && "effect"in this.layer ? this.layer.effect : null, k=>{
                                this.container && (this.container.effect = k)
                            }
                            , u.syncAndInitial), u.on(()=>this.clips, "change", ()=>{
                                this.container && (this.container.clips = this.clips)
                            }
                            )]),
                            null != (f = this.view) && f.whenLayerView ? this.view.whenLayerView(this.layer).then(k=>{
                                k === this && this.processAttach()
                            }
                            , ()=>{}
                            ) : this.when().then(()=>{
                                this.processAttach()
                            }
                            , ()=>{}
                            ))
                        }
                        ;
                        V.destroy = function() {
                            this.processDetach();
                            this.updateRequested = !1
                        }
                        ;
                        V.processAttach = function() {
                            this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(),
                            this.attached = !0,
                            this.requestUpdate())
                        }
                        ;
                        V.processDetach = function() {
                            this.attached && (this.attached = !1,
                            this.detach(),
                            this.updateRequested = !1)
                        }
                        ;
                        V.isVisibleAtScale = function(W) {
                            const c = this.layer && "effectiveScaleRange"in this.layer ? this.layer.effectiveScaleRange : null;
                            if (!c)
                                return !0;
                            const {minScale: b, maxScale: f} = c;
                            return (0 === b || W <= b) && (0 === f || W >= f)
                        }
                        ;
                        V.requestUpdate = function() {
                            this.destroyed || this.updateRequested || (this.updateRequested = !0,
                            this.suspended || this.view.requestUpdate())
                        }
                        ;
                        V.processUpdate = function(W) {
                            this.isFulfilled() && !this.isResolved() ? this.updateRequested = !1 : (this._set("updateParameters", W),
                            this.updateRequested && !this.suspended && (this.updateRequested = !1,
                            this.update(W)))
                        }
                        ;
                        V.hitTest = function(W, c) {
                            return Promise.resolve(null)
                        }
                        ;
                        V.supportsSpatialReference = function(W) {
                            return !0
                        }
                        ;
                        V.canResume = function() {
                            return this.spatialReferenceSupported ? T.prototype.canResume.call(this) ? this.visibleAtCurrentScale : !1 : !1
                        }
                        ;
                        V.getSuspendInfo = function() {
                            const W = T.prototype.getSuspendInfo.call(this)
                              , c = !this.spatialReferenceSupported
                              , b = this.visibleAtCurrentScale;
                            c && (W.spatialReferenceNotSupported = c);
                            b && (W.outsideScaleRange = b);
                            return W
                        }
                        ;
                        K._createClass(Z, [{
                            key: "spatialReferenceSupported",
                            get: function() {
                                var W;
                                const c = null == (W = this.view) ? void 0 : W.spatialReference;
                                return null == c || this.supportsSpatialReference(c)
                            }
                        }, {
                            key: "updating",
                            get: function() {
                                var W;
                                return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !(null == (W = this.updatingHandles) || !W.updating))
                            }
                        }, {
                            key: "visibleAtCurrentScale",
                            get: function() {
                                return this.isVisibleAtScale(this.view.scale)
                            }
                        }]);
                        return Z
                    }(A);
                    E.__decorate([H.property()], A.prototype, "attached", void 0);
                    E.__decorate([H.property({
                        type: h,
                        set(T) {
                            T = v.referenceSetter(T, this._get("clips"), h);
                            this._set("clips", T)
                        }
                    })], A.prototype, "clips", void 0);
                    E.__decorate([H.property()], A.prototype, "container", void 0);
                    E.__decorate([H.property()], A.prototype, "moving", void 0);
                    E.__decorate([H.property({
                        readOnly: !0
                    })], A.prototype, "spatialReferenceSupported", null);
                    E.__decorate([H.property({
                        readOnly: !0
                    })], A.prototype, "updateParameters", void 0);
                    E.__decorate([H.property()], A.prototype, "updateRequested", void 0);
                    E.__decorate([H.property()], A.prototype, "updating", null);
                    E.__decorate([H.property()], A.prototype, "view", void 0);
                    E.__decorate([H.property({
                        readOnly: !0
                    })], A.prototype, "visibleAtCurrentScale", null);
                    return A = E.__decorate([q.subclass("esri.views.2d.layers.LayerView2D")], A)
                }
                ;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/layers/support/ClipArea": function() {
            define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass".split(" "), function(w, K, E, I, v, B, u, H, r) {
                E = function(p) {
                    function g() {
                        return p.apply(this, arguments) || this
                    }
                    w._inheritsLoose(g, p);
                    return g
                }(E.JSONSupport);
                return E = K.__decorate([r.subclass("esri.views.layers.support.ClipArea")], E)
            })
        },
        "esri/views/layers/support/ClipRect": function() {
            define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "), function(w, K, E, I, v, B, u, H) {
                var r;
                I = r = function(p) {
                    function g() {
                        var q = p.apply(this, arguments) || this;
                        q.type = "rect";
                        q.left = null;
                        q.right = null;
                        q.top = null;
                        q.bottom = null;
                        return q
                    }
                    w._inheritsLoose(g, p);
                    g.prototype.clone = function() {
                        return new r({
                            left: this.left,
                            right: this.right,
                            top: this.top,
                            bottom: this.bottom
                        })
                    }
                    ;
                    w._createClass(g, [{
                        key: "version",
                        get: function() {
                            return (this._get("version") || 0) + 1
                        }
                    }]);
                    return g
                }(H);
                K.__decorate([E.property({
                    type: [Number, String],
                    json: {
                        write: !0
                    }
                })], I.prototype, "left", void 0);
                K.__decorate([E.property({
                    type: [Number, String],
                    json: {
                        write: !0
                    }
                })], I.prototype, "right", void 0);
                K.__decorate([E.property({
                    type: [Number, String],
                    json: {
                        write: !0
                    }
                })], I.prototype, "top", void 0);
                K.__decorate([E.property({
                    type: [Number, String],
                    json: {
                        write: !0
                    }
                })], I.prototype, "bottom", void 0);
                K.__decorate([E.property({
                    readOnly: !0
                })], I.prototype, "version", null);
                return I = r = K.__decorate([u.subclass("esri.views.layers.support.ClipRect")], I)
            })
        },
        "esri/views/layers/support/Geometry": function() {
            define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Geometry ../../../geometry/support/jsonUtils ./ClipArea ../../../geometry/Extent ../../../geometry/Polygon".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F) {
                var O;
                E = {
                    base: r,
                    key: "type",
                    typeMap: {
                        extent: q,
                        polygon: F
                    }
                };
                g = O = function(L) {
                    function n() {
                        var m = L.apply(this, arguments) || this;
                        m.type = "geometry";
                        m.geometry = null;
                        return m
                    }
                    w._inheritsLoose(n, L);
                    n.prototype.clone = function() {
                        return new O({
                            geometry: this.geometry.clone()
                        })
                    }
                    ;
                    w._createClass(n, [{
                        key: "version",
                        get: function() {
                            return (this._get("version") || 0) + 1
                        }
                    }]);
                    return n
                }(g);
                K.__decorate([I.property({
                    types: E,
                    json: {
                        read: p.fromJSON,
                        write: !0
                    }
                })], g.prototype, "geometry", void 0);
                K.__decorate([I.property({
                    readOnly: !0
                })], g.prototype, "version", null);
                return g = O = K.__decorate([H.subclass("esri.views.layers.support.Geometry")], g)
            })
        },
        "esri/views/layers/support/Path": function() {
            define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "), function(w, K, E, I, v, B, u, H) {
                I = function(r) {
                    function p() {
                        var g = r.apply(this, arguments) || this;
                        g.type = "path";
                        g.path = [];
                        return g
                    }
                    w._inheritsLoose(p, r);
                    w._createClass(p, [{
                        key: "version",
                        get: function() {
                            return (this._get("version") || 0) + 1
                        }
                    }]);
                    return p
                }(H);
                K.__decorate([E.property({
                    type: [[[Number]]],
                    json: {
                        write: !0
                    }
                })], I.prototype, "path", void 0);
                K.__decorate([E.property({
                    readOnly: !0
                })], I.prototype, "version", null);
                return I = K.__decorate([u.subclass("esri.views.layers.support.Path")], I)
            })
        },
        "esri/views/2d/layers/imagery/ImageryTileView2D": function() {
            define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../engine/imagery/RasterTileContainer ./BaseImageryTileSubView2D ../support/util".split(" "), function(w, K, E, I, v, B, u, H, r, p, g) {
                v = function(q) {
                    function F() {
                        var L = q.apply(this, arguments) || this;
                        L.container = null;
                        L.layer = null;
                        L.type = "raster";
                        return L
                    }
                    w._inheritsLoose(F, q);
                    var O = F.prototype;
                    O.attach = function() {
                        q.prototype.attach.call(this);
                        this.container = new r.RasterTileContainer(this._tileInfoView);
                        this.container.isCustomTilingScheme = this._isCustomTilingScheme
                    }
                    ;
                    O.detach = function() {
                        q.prototype.detach.call(this);
                        this.container.removeAllChildren();
                        this.container = null
                    }
                    ;
                    O.canUseWebGLForProcessing = function() {
                        return this.useWebGLForProcessing && this.layer.symbolizer.canRenderInWebGL && !("majority" === this.layer.interpolation && g.canUseMajorityInterpolationOnDataSource(this.layer))
                    }
                    ;
                    O.fetchTile = function(L, n) {
                        return this.layer.fetchTile(L.level, L.row, L.col, n)
                    }
                    ;
                    O.updateTileSource = function() {
                        var L = w._asyncToGenerator(function*(n, m) {
                            const {bandIds: h} = this.layer
                              , A = this._getLayerInterpolation()
                              , T = this.canUseWebGLForProcessing()
                              , {source: Z, globalSymbolizerParams: V, suspended: W, coords: c, resolution: b} = m;
                            m = this.layerView.hasTilingEffects ? V : m.symbolizerParams;
                            ({bitmap: n} = n);
                            [n.x,n.y] = c;
                            n.resolution = b;
                            if (Z && E.isSome(Z) && E.isSome(Z.pixelBlock)) {
                                var f = {
                                    extent: Z.extent,
                                    pixelBlock: Z.pixelBlock
                                };
                                n.rawPixelData = f;
                                T ? (n.source = Z.pixelBlock,
                                n.isRendereredSource = !1) : (f = yield this.layer.applyRenderer(f, "stretch" === (null == V ? void 0 : V.type) ? V : null),
                                n.source = f,
                                n.isRendereredSource = !0);
                                n.symbolizerParameters = T ? m : null;
                                T ? n.transformGrid || (n.transformGrid = Z.transformGrid) : n.transformGrid = null
                            } else
                                f = this.createEmptyTilePixelBlock(),
                                n.source = f,
                                n.symbolizerParameters = T ? m : null,
                                n.transformGrid = null;
                            n.bandIds = T ? h : null;
                            n.width = this._tileInfoView.tileInfo.size[0];
                            n.height = this._tileInfoView.tileInfo.size[1];
                            n.interpolation = A;
                            n.suspended = W;
                            n.invalidateTexture()
                        });
                        return function(n, m) {
                            return L.apply(this, arguments)
                        }
                    }();
                    O.updateTileSymbolizerParameters = function() {
                        var L = w._asyncToGenerator(function*(n, m) {
                            const {local: h, global: A} = m;
                            ({bandIds: m} = this.layer);
                            const T = this._getLayerInterpolation()
                              , Z = this.canUseWebGLForProcessing();
                            ({bitmap: n} = n);
                            const {rawPixelData: V} = n;
                            !Z && E.isSome(V) ? (n.source = yield this.layer.applyRenderer(V, "stretch" === (null == A ? void 0 : A.type) ? A : null),
                            n.isRendereredSource = !0) : (n.isRendereredSource && E.isSome(V) && (n.source = V.pixelBlock),
                            n.isRendereredSource = !1);
                            n.symbolizerParameters = Z ? this.layerView.hasTilingEffects ? A : h : null;
                            n.bandIds = Z ? m : null;
                            n.interpolation = T;
                            n.suspended = !1
                        });
                        return function(n, m) {
                            return L.apply(this, arguments)
                        }
                    }();
                    O._getLayerInterpolation = function() {
                        var L = this.layer.renderer.type;
                        if ("raster-colormap" === L || "unique-value" === L || "class-breaks" === L)
                            return "nearest";
                        ({interpolation: L} = this.layer);
                        const {renderer: n} = this.layer;
                        return "raster-stretch" === n.type && null != n.colorRamp ? "bilinear" === L || "cubic" === L ? "bilinear" : "nearest" : L
                    }
                    ;
                    return F
                }(p.BaseImageryTileSubView2D);
                K.__decorate([I.property()], v.prototype, "container", void 0);
                K.__decorate([I.property()], v.prototype, "layer", void 0);
                K.__decorate([I.property()], v.prototype, "type", void 0);
                return v = K.__decorate([H.subclass("esri.views.2d.layers.imagery.ImageryTileView2D")], v)
            })
        },
        "esri/views/2d/engine/imagery/RasterTileContainer": function() {
            define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../geometry/support/aaBoundingRect ../../viewpointUtils ../brushes ./RasterTile ../webgl/enums ../webgl/TileContainer".split(" "), function(w, K, E, I, v, B, u, H) {
                H = function(r) {
                    function p() {
                        var q = r.apply(this, arguments) || this;
                        q.isCustomTilingScheme = !1;
                        return q
                    }
                    K._inheritsLoose(p, r);
                    var g = p.prototype;
                    g.createTile = function(q) {
                        const F = this._getTileBounds(q)
                          , [O,L] = this._tileInfoView.tileInfo.size;
                        return new B.RasterTile(q,F[0],F[3],O,L)
                    }
                    ;
                    g.prepareRenderPasses = function(q) {
                        const F = q.registerRenderPass({
                            name: "imagery (tile)",
                            brushes: [v.brushes.raster],
                            target: ()=>this.children.map(O=>O.bitmap),
                            drawPhase: u.WGLDrawPhase.MAP
                        });
                        return [...r.prototype.prepareRenderPasses.call(this, q), F]
                    }
                    ;
                    g.doRender = function(q) {
                        this.visible && q.drawPhase === u.WGLDrawPhase.MAP && r.prototype.doRender.call(this, q)
                    }
                    ;
                    g._getTileBounds = function(q) {
                        const F = this._tileInfoView.getTileBounds(E.create(), q);
                        if (this.isCustomTilingScheme && q.world) {
                            var {tileInfo: O} = this._tileInfoView
                              , L = I.getWorldWidth(O.spatialReference);
                            if (L) {
                                const {resolution: n} = O.lodAt(q.level);
                                O = (L = L / n % O.size[0]) ? (O.size[0] - L) * n : 0;
                                F[0] -= O * q.world;
                                F[2] -= O * q.world
                            }
                        }
                        return F
                    }
                    ;
                    return p
                }(H);
                w.RasterTileContainer = H;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/imagery/RasterTile": function() {
            define(["exports", "../../../../chunks/_rollupPluginBabelHelpers", "../../../../chunks/mat3f32", "./RasterBitmap", "../webgl/TiledDisplayObject"], function(w, K, E, I, v) {
                v = function(B) {
                    function u(r, p, g, q, F, O=null) {
                        var L = B.call(this, r, p, g, q, F) || this;
                        L.bitmap = new I.RasterBitmap(O,null,null);
                        L.bitmap.coordScale = [q, F];
                        L.bitmap.once("isReady", ()=>L.ready());
                        return L
                    }
                    K._inheritsLoose(u, B);
                    var H = u.prototype;
                    H.destroy = function() {
                        B.prototype.destroy.call(this);
                        this.bitmap.destroy();
                        this.stage = this.bitmap = null
                    }
                    ;
                    H.setTransform = function(r, p) {
                        B.prototype.setTransform.call(this, r, p);
                        this.bitmap.transforms.dvs = this.transforms.dvs
                    }
                    ;
                    H._createTransforms = function() {
                        return {
                            dvs: E.create(),
                            tileMat3: E.create()
                        }
                    }
                    ;
                    H.onAttach = function() {
                        this.bitmap.stage = this.stage
                    }
                    ;
                    H.onDetach = function() {
                        this.bitmap.stage = null
                    }
                    ;
                    K._createClass(u, [{
                        key: "stencilRef",
                        get: function() {
                            return this.bitmap.stencilRef
                        },
                        set: function(r) {
                            this.bitmap.stencilRef = r
                        }
                    }]);
                    return u
                }(v.TiledDisplayObject);
                w.RasterTile = v;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/layers/imagery/BaseImageryTileSubView2D": function() {
            define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/HandleOwner ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Point ../../../../layers/support/PixelBlock ../../../../layers/support/TileInfo ../../../../layers/support/rasterDatasets/RawBlockCache ../../../../layers/support/rasterFunctions/pixelUtils ../../../../layers/support/rasterFunctions/rasterProjectionHelper ../../tiling/PagedTileQueue ../../tiling/TileInfoView ../../tiling/TileKey ../../tiling/TileQueue ../../tiling/TileStrategy ../../../webgl/capabilities ../../../../geometry/Extent".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F, O, L, n, m, h, A, T, Z, V, W, c, b, f) {
                const t = [0, 0]
                  , k = B.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");
                w.BaseImageryTileSubView2D = function(x) {
                    function S() {
                        var e = x.apply(this, arguments) || this;
                        e._emptyTilePixelBlock = null;
                        e._tileStrategy = null;
                        e._tileInfoView = null;
                        e._fetchQueue = null;
                        e._blockCacheRegistryUrl = null;
                        e._blockCacheRegistryId = null;
                        e._srcResolutions = null;
                        e.previousLOD = null;
                        e._needBlockCacheUpdate = !1;
                        e._globalSymbolizerParams = null;
                        e._symbolizerParams = null;
                        e._abortController = null;
                        e._isCustomTilingScheme = !1;
                        e._globalUpdateRequested = !1;
                        e.attached = !1;
                        e.container = null;
                        e.layer = null;
                        e.timeExtent = null;
                        e.redrawOrRefetch = H.debounce((D,Q)=>!e.previousLOD || e.layerView.suspended ? Promise.resolve() : D ? e.updatingHandles.addPromise(e.doRefresh()) : e.updatingHandles.addPromise(e._redrawImage(Q)));
                        return e
                    }
                    K._inheritsLoose(S, x);
                    var P = S.prototype;
                    P.update = function(e) {
                        this._fetchQueue.pause();
                        this._fetchQueue.state = e.state;
                        this._tileStrategy.update(e);
                        this._fetchQueue.resume();
                        const {extent: D, resolution: Q, scale: M} = e.state;
                        e = this._tileInfoView.getClosestInfoForScale(M);
                        if (this.layer.raster) {
                            var N;
                            if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
                                const X = this._srcResolutions[e.level]
                                  , ea = D.toJSON ? D : f.fromJSON(D);
                                m.update(this._blockCacheRegistryUrl, this._blockCacheRegistryId, ea, Q, X, this.layer.raster.ioConfig.sampling)
                            }
                            this._needBlockCacheUpdate = !1;
                            (null == (N = this.previousLOD) ? void 0 : N.level) !== e.level && (this.previousLOD = e,
                            null == this._symbolizerParams || this.layerView.hasTilingEffects || this._updateSymbolizerParams(),
                            this._tileStrategy.updateCacheSize(0))
                        }
                    }
                    ;
                    P.moveEnd = function() {
                        if (this.layerView.hasTilingEffects || !this.useProgressiveUpdate)
                            this._abortController && this._abortController.abort(),
                            this._abortController = new AbortController,
                            0 === this._fetchQueue.length && this._redrawImage(this._abortController.signal).then(()=>{
                                this._globalUpdateRequested = !1;
                                this.layerView.requestUpdate()
                            }
                            );
                        const e = this._getCacheSize(this.useProgressiveUpdate);
                        this._tileStrategy.updateCacheSize(e);
                        this.layerView.requestUpdate()
                    }
                    ;
                    P.attach = function() {
                        b.getWebGLCapabilities("2d").supportsTextureFloat || (this.useWebGLForProcessing = !1);
                        this._initializeTileInfo();
                        this._tileInfoView = new Z(this.layerView.tileInfo,this.layerView.fullExtent);
                        var e = this._computeFetchConcurrency();
                        this._fetchQueue = new W({
                            tileInfoView: this._tileInfoView,
                            concurrency: e,
                            process: (D,Q)=>this._fetchTile1(D, Q)
                        });
                        e = this._getCacheSize(this.useProgressiveUpdate);
                        this._tileStrategy = new c({
                            cachePolicy: "purge",
                            acquireTile: D=>this.acquireTile(D),
                            releaseTile: D=>this.releaseTile(D),
                            cacheSize: e,
                            tileInfoView: this._tileInfoView
                        });
                        this._updateBlockCacheRegistry()
                    }
                    ;
                    P.detach = function() {
                        this._tileStrategy.destroy();
                        this._fetchQueue.clear();
                        this.container.removeAllChildren();
                        this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
                        m.unregister(this._blockCacheRegistryUrl, this._blockCacheRegistryId);
                        this._blockCacheRegistryUrl = this._blockCacheRegistryId = null
                    }
                    ;
                    P.acquireTile = function(e) {
                        e = this.container.createTile(e);
                        this._enqueueTileFetch(e);
                        this.layerView.requestUpdate();
                        this._needBlockCacheUpdate = !0;
                        this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate;
                        return e
                    }
                    ;
                    P.releaseTile = function(e) {
                        this._fetchQueue.abort(e.key.id);
                        this.container.removeChild(e);
                        e.once("detach", ()=>{
                            e.destroy();
                            this.layerView.requestUpdate()
                        }
                        );
                        this.layerView.requestUpdate()
                    }
                    ;
                    P.createEmptyTilePixelBlock = function(e=null) {
                        const D = null == e || e.join(",") === this._tileInfoView.tileInfo.size.join(",");
                        if (D && u.isSome(this._emptyTilePixelBlock))
                            return this._emptyTilePixelBlock;
                        e = e || this._tileInfoView.tileInfo.size;
                        const [Q,M] = e;
                        e = new L({
                            width: Q,
                            height: M,
                            pixels: [new Uint8Array(Q * M)],
                            mask: new Uint8Array(Q * M),
                            pixelType: "u8"
                        });
                        D && (this._emptyTilePixelBlock = e);
                        return e
                    }
                    ;
                    P._fetchTile1 = function(e, D) {
                        D = u.isSome(D) && D.signal;
                        const Q = this.canUseWebGLForProcessing()
                          , {layerView: M} = this
                          , N = !M.tileInfo.isWrappable && u.isSome(A.getWorldWidth(M.view.spatialReference));
                        D = {
                            allowPartialFill: !0,
                            datumTransformation: M.datumTransformation,
                            interpolation: Q ? "nearest" : this.layer.interpolation,
                            registryId: this._blockCacheRegistryId,
                            requestRawData: Q,
                            signal: u.unwrap(D),
                            srcResolution: this._srcResolutions[e.level],
                            timeExtent: M.timeExtent,
                            tileInfo: M.tileInfo,
                            disableWrapAround: N
                        };
                        return this.fetchTile(e, D)
                    }
                    ;
                    P._getCacheSize = function(e) {
                        return e ? 40 : 0
                    }
                    ;
                    P._initializeTileInfo = function() {
                        var e = this.layerView.view.spatialReference;
                        const D = new O({
                            x: this.layerView.fullExtent.xmin,
                            y: this.layerView.fullExtent.ymax,
                            spatialReference: e
                        })
                          , {scales: Q, srcResolutions: M, isCustomTilingScheme: N} = A.computeProjectedScales(this.layer.rasterInfo, e);
                        e = n.create({
                            spatialReference: e,
                            size: 512,
                            scales: Q
                        });
                        if (0 === e.origin.x || e.origin.x > D.x)
                            e.origin = D;
                        this._isCustomTilingScheme = N;
                        this.layerView.set("tileInfo", e);
                        this._srcResolutions = null != M ? M : []
                    }
                    ;
                    P._computeFetchConcurrency = function() {
                        var {blockBoundary: e} = this.layer.rasterInfo.storageInfo;
                        e = e[e.length - 1];
                        return 64 < (e.maxCol - e.minCol + 1) * (e.maxRow - e.minRow + 1) ? 2 : 10
                    }
                    ;
                    P._enqueueTileFetch = function() {
                        var e = K._asyncToGenerator(function*(D, Q) {
                            this.updatingHandles.addPromise(this._enqueueTileFetch1(D, Q))
                        });
                        return function(D, Q) {
                            return e.apply(this, arguments)
                        }
                    }();
                    P._enqueueTileFetch1 = function() {
                        var e = K._asyncToGenerator(function*(D, Q) {
                            if (!this._fetchQueue.has(D.key.id)) {
                                try {
                                    const M = yield this._fetchQueue.push(D.key)
                                      , {bandIds: N} = this.layer;
                                    let X = !this.useProgressiveUpdate || this.layerView.hasTilingEffects && !this._globalSymbolizerParams;
                                    if (this._globalUpdateRequested && !this.layerView.moving && 0 === this._fetchQueue.length) {
                                        X = !1;
                                        try {
                                            yield this._redrawImage(this._abortController && this._abortController.signal)
                                        } catch (ha) {
                                            H.isAbortError(ha) && k.error(ha)
                                        }
                                        this._globalUpdateRequested = !1
                                    }
                                    !this.canUseWebGLForProcessing() && "rasterVF" !== this.type || this.layerView.hasTilingEffects || null != this._symbolizerParams || this._updateSymbolizerParams();
                                    const ea = this._tileInfoView.getTileCoords(t, D.key)
                                      , ca = this._tileInfoView.getTileResolution(D.key);
                                    yield this.updateTileSource(D, {
                                        source: M,
                                        symbolizerParams: this._symbolizerParams,
                                        globalSymbolizerParams: this._globalSymbolizerParams,
                                        suspended: X,
                                        bandIds: N,
                                        coords: ea,
                                        resolution: ca
                                    });
                                    D.once("attach", ()=>this.layerView.requestUpdate());
                                    this.container.addChild(D)
                                } catch (M) {
                                    H.isAbortError(M) || k.error(M)
                                }
                                this.layerView.requestUpdate()
                            }
                        });
                        return function(D, Q) {
                            return e.apply(this, arguments)
                        }
                    }();
                    P._redrawImage = function() {
                        var e = K._asyncToGenerator(function*(D) {
                            var Q = this;
                            0 !== this.container.children.length && (yield this.layer.updateRenderer(),
                            this.layerView.hasTilingEffects ? yield this._updateGlobalSymbolizerParams(D) : (this._updateSymbolizerParams(),
                            this._globalSymbolizerParams = null),
                            D = this.container.children.map(function() {
                                var M = K._asyncToGenerator(function*(N) {
                                    return Q.updateTileSymbolizerParameters(N, {
                                        local: Q._symbolizerParams,
                                        global: Q._globalSymbolizerParams
                                    })
                                });
                                return function(N) {
                                    return M.apply(this, arguments)
                                }
                            }()),
                            yield H.eachAlways(D),
                            this.container.requestRender())
                        });
                        return function(D) {
                            return e.apply(this, arguments)
                        }
                    }();
                    P._updateGlobalSymbolizerParams = function() {
                        var e = K._asyncToGenerator(function*(D) {
                            (D = yield this.layer.fetchPixels(this.layerView.view.extent, this.layerView.view.width, this.layerView.view.height, {
                                srcResolution: this._srcResolutions[this.previousLOD.level],
                                registryId: this._blockCacheRegistryId,
                                signal: D
                            })) && D.pixelBlock && (D = this.layer.symbolizer.generateWebGLParameters({
                                pixelBlock: h.extractBands(D.pixelBlock, this.layer.bandIds),
                                isGCS: this.layerView.view.spatialReference.isGeographic,
                                resolution: {
                                    x: this.previousLOD.resolution,
                                    y: this.previousLOD.resolution
                                },
                                bandIds: this.layer.bandIds
                            }),
                            !this.canUseWebGLForProcessing() && D && "stretch" === D.type && this.layer.renderer && "raster-stretch" === this.layer.renderer.type && (D.factor = D.factor.map(Q=>255 * Q),
                            D.outMin = Math.round(255 * D.outMin),
                            D.outMax = Math.round(255 * D.outMax)),
                            this._globalSymbolizerParams = D)
                        });
                        return function(D) {
                            return e.apply(this, arguments)
                        }
                    }();
                    P._updateSymbolizerParams = function() {
                        this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({
                            pixelBlock: null,
                            isGCS: this.layerView.view.spatialReference.isGeographic,
                            resolution: {
                                x: this.previousLOD.resolution,
                                y: this.previousLOD.resolution
                            },
                            bandIds: this.layer.bandIds
                        })
                    }
                    ;
                    P._updateBlockCacheRegistry = function(e=!1) {
                        const {url: D, rasterInfo: Q, raster: M} = this.layer;
                        var {multidimensionalDefinition: N} = this.layer.normalizeRasterFetchOptions({
                            multidimensionalDefinition: this.layer.multidimensionalDefinition,
                            timeExtent: this.layerView.timeExtent
                        });
                        N = null != Q && Q.multidimensionalInfo ? M.getSliceIndex(N) : null;
                        N = m.getRasterId(D, N);
                        N !== this._blockCacheRegistryUrl && (null != this._blockCacheRegistryUrl && m.unregister(this._blockCacheRegistryUrl, this._blockCacheRegistryId),
                        this._blockCacheRegistryId = m.register(N, this.layer.raster.rasterInfo),
                        e && (e = this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),
                        m.update(N, this._blockCacheRegistryId, this.layerView.view.extent, this.layerView.view.resolution, this._srcResolutions[e.level], this.layer.raster.ioConfig.sampling)),
                        this._blockCacheRegistryUrl = N)
                    }
                    ;
                    P.doRefresh = function() {
                        var e = K._asyncToGenerator(function*() {
                            yield this.layer.updateRenderer();
                            this.layerView.hasTilingEffects || this._updateSymbolizerParams();
                            this._updateBlockCacheRegistry(!0);
                            this._fetchQueue.reset();
                            const D = [];
                            this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate;
                            this._tileStrategy.tiles.forEach(Q=>D.push(this._enqueueTileFetch(Q)));
                            yield H.eachAlways(D)
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    K._createClass(S, [{
                        key: "useWebGLForProcessing",
                        get: function() {
                            var e;
                            return null != (e = this._get("useWebGLForProcessing")) ? e : !0
                        },
                        set: function(e) {
                            this._set("useWebGLForProcessing", e)
                        }
                    }, {
                        key: "useProgressiveUpdate",
                        get: function() {
                            return null == this._get("useProgressiveUpdate") ? !0 : this._get("useProgressiveUpdate")
                        },
                        set: function(e) {
                            if (this._tileStrategy && this.useProgressiveUpdate !== e) {
                                this._tileStrategy.destroy();
                                this.container.removeAllChildren();
                                const D = this._getCacheSize(e);
                                this._tileStrategy = new c({
                                    cachePolicy: "purge",
                                    acquireTile: Q=>this.acquireTile(Q),
                                    releaseTile: Q=>this.releaseTile(Q),
                                    cacheSize: D,
                                    tileInfoView: this._tileInfoView
                                });
                                this._set("useProgressiveUpdate", e);
                                this.layerView.requestUpdate()
                            }
                        }
                    }, {
                        key: "updating",
                        get: function() {
                            var e;
                            return (null == (e = this._fetchQueue) ? void 0 : e.updating) || this._globalUpdateRequested || !(!this.updatingHandles || !this.updatingHandles.updating)
                        }
                    }]);
                    return S
                }(v.HandleOwner);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "_fetchQueue", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "_globalUpdateRequested", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "attached", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "container", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "layer", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "layerView", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "type", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "useWebGLForProcessing", null);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "useProgressiveUpdate", null);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "timeExtent", void 0);
                E.__decorate([r.property()], w.BaseImageryTileSubView2D.prototype, "updating", null);
                w.BaseImageryTileSubView2D = E.__decorate([F.subclass("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")], w.BaseImageryTileSubView2D);
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/layers/support/rasterDatasets/RawBlockCache": function() {
            define("exports ../../../geometry ../../../core/maybe ./EphemeralBlockCache ../rasterFunctions/rasterProjectionHelper ../../../geometry/Point".split(" "), function(w, K, E, I, v, B) {
                function u(p, g) {
                    if (!H.has(p))
                        return null;
                    p = H.get(p);
                    return null == p[g] ? null : p[g]
                }
                const H = new Map
                  , r = new I;
                w.decreaseRefCount = function(p, g, q) {
                    if (!H.has(p))
                        return null == g ? r.decreaseRefCount(p, q) : 0;
                    const F = H.get(p);
                    if (null == F[g])
                        return r.decreaseRefCount(p, q);
                    g = F[g].cache;
                    if (g.has(q)) {
                        p = g.get(q);
                        p.refCount--;
                        if (0 === p.refCount) {
                            g.delete(q);
                            for (g = 0; g < F.length; g++)
                                F[g] && F[g].cache.has(q) && F[g].cache.delete(q);
                            p.controller && p.controller.abort()
                        }
                        return p.refCount
                    }
                    return 0
                }
                ;
                w.deleteBlock = function(p, g, q) {
                    if (H.has(p)) {
                        var F = H.get(p);
                        null == F[g] ? r.deleteBlock(p, q) : F[g].cache.delete(q)
                    } else
                        null == g && r.deleteBlock(p, q)
                }
                ;
                w.deleteRaster = function(p) {
                    H.delete(p)
                }
                ;
                w.getBlock = function(p, g, q) {
                    if (!H.has(p))
                        return null == g ? r.getBlock(p, q) : null;
                    var F = H.get(p);
                    if (null == F[g]) {
                        for (g = 0; g < F.length; g++)
                            if (F[g] && F[g].cache.has(q))
                                return q = F[g].cache.get(q),
                                q.refCount++,
                                q.block;
                        return r.getBlock(p, q)
                    }
                    p = F[g].cache;
                    if (p.has(q))
                        return q = p.get(q),
                        q.refCount++,
                        q.block;
                    for (let O = 0; O < F.length; O++)
                        if (O !== g && F[O] && F[O] && F[O].cache.has(q))
                            return F = F[O].cache.get(q),
                            F.refCount++,
                            p.set(q, F),
                            F.block;
                    return null
                }
                ;
                w.getRasterId = function(p, g) {
                    return null == g ? p : `${p}?sliceId=${g}`
                }
                ;
                w.putBlock = function(p, g, q, F, O=null) {
                    if (H.has(p)) {
                        var L = H.get(p);
                        if (null == L[g])
                            r.putBlock(p, q, F, O);
                        else {
                            var n = {
                                refCount: 1,
                                block: F,
                                isResolved: !1,
                                isRejected: !1,
                                controller: O
                            };
                            F.then(()=>n.isResolved = !0).catch(()=>n.isRejected = !0);
                            L[g].cache.set(q, n)
                        }
                    } else
                        null == g && r.putBlock(p, q, F, O)
                }
                ;
                w.register = function(p, g) {
                    g = {
                        extent: null,
                        rasterInfo: g,
                        cache: new Map
                    };
                    if (H.has(p))
                        return p = H.get(p),
                        p.push(g),
                        p.length - 1;
                    H.set(p, [g]);
                    return 0
                }
                ;
                w.unregister = function(p, g) {
                    if (H.has(p)) {
                        const q = H.get(p);
                        q[g] = null;
                        q.some(F=>null != F) || H.delete(p)
                    }
                }
                ;
                w.update = function(p, g, q, F, O, L, n=null) {
                    p = u(p, g);
                    g = p.extent;
                    const {cache: m, rasterInfo: h} = p;
                    if (!g || g.xmin !== q.xmin || g.xmax !== q.xmax || g.ymin !== q.ymin || g.ymax !== q.ymax) {
                        g = q.clone().normalize();
                        var {spatialReference: A, transform: T} = h
                          , Z = new Set;
                        for (let t = 0; t < g.length; t++) {
                            var V = g[t];
                            if (V.xmax - V.xmin <= F || V.ymax - V.ymin <= F)
                                continue;
                            var W = v.projectExtent(V, A, n);
                            E.isSome(T) && (W = T.inverseTransform(W));
                            var c = new B({
                                x: F,
                                y: F,
                                spatialReference: V.spatialReference
                            });
                            if (null == O && (O = v.projectResolution(c, A, V, n),
                            !O))
                                return;
                            const {pyramidLevel: k, pyramidResolution: x, excessiveReading: S} = v.snapPyramid(O, h, L || "closest");
                            if (S)
                                return;
                            ({storageInfo: V} = h);
                            var {origin: b} = V;
                            c = Math.max(0, Math.floor((W.xmin - b.x) / x.x));
                            b = Math.max(0, Math.floor((b.y - W.ymax) / x.y));
                            const P = 0 < k ? V.pyramidBlockWidth : V.blockWidth
                              , e = 0 < k ? V.pyramidBlockHeight : V.blockHeight;
                            V = Math.max(0, Math.floor(c / P) - 1);
                            var f = Math.max(0, Math.floor(b / e) - 1);
                            c = Math.floor((c + Math.ceil((W.xmax - W.xmin) / x.x - .1) - 1) / P) + 1;
                            W = Math.floor((b + Math.ceil((W.ymax - W.ymin) / x.y - .1) - 1) / e) + 1;
                            for (b = f; b <= W; b++)
                                for (f = V; f <= c; f++)
                                    Z.add(`${k}/${b}/${f}`)
                        }
                        m.forEach((t,k)=>{
                            Z.has(k) || (t = m.get(k),
                            (null == t || t.isResolved || t.isRejected) && m.delete(k))
                        }
                        );
                        p.extent = {
                            xmin: q.xmin,
                            ymin: q.ymin,
                            xmax: q.xmax,
                            ymax: q.ymax
                        }
                    }
                }
                ;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/layers/support/rasterDatasets/EphemeralBlockCache": function() {
            define(function() {
                return function() {
                    function w(E=15E3, I=5E3) {
                        this._timer = null;
                        this._cachedBlocks = new Map;
                        this._size = -1;
                        this._duration = E;
                        this._interval = Math.min(E, I)
                    }
                    var K = w.prototype;
                    K.decreaseRefCount = function(E, I) {
                        E = E + "/" + I;
                        I = this._cachedBlocks;
                        if (I.has(E)) {
                            const v = I.get(E);
                            v.refCount--;
                            0 >= v.refCount && (I.delete(E),
                            v.controller && v.controller.abort());
                            return v.refCount
                        }
                        return 0
                    }
                    ;
                    K.getBlock = function(E, I) {
                        E = E + "/" + I;
                        I = this._cachedBlocks;
                        if (I.has(E)) {
                            const v = I.get(E);
                            v.ts = Date.now();
                            v.refCount++;
                            I.delete(E);
                            I.set(E, v);
                            return v.block
                        }
                        return null
                    }
                    ;
                    K.putBlock = function(E, I, v, B=null) {
                        const u = this._cachedBlocks;
                        E = E + "/" + I;
                        u.has(E) ? (v = u.get(E),
                        v.ts = Date.now(),
                        v.refCount++) : u.set(E, {
                            block: v,
                            ts: Date.now(),
                            refCount: 1,
                            controller: B
                        });
                        this._trim();
                        this._updateTimer()
                    }
                    ;
                    K.deleteBlock = function(E, I) {
                        const v = this._cachedBlocks;
                        E = E + "/" + I;
                        v.has(E) && v.delete(E)
                    }
                    ;
                    K.updateMaxSize = function(E) {
                        this._size = E;
                        this._trim()
                    }
                    ;
                    K.empty = function() {
                        this._cachedBlocks.clear();
                        this._clearTimer()
                    }
                    ;
                    K.getCurrentSize = function() {
                        return this._cachedBlocks.size
                    }
                    ;
                    K._updateTimer = function() {
                        if (null == this._timer) {
                            var E = this._cachedBlocks;
                            this._timer = setInterval(()=>{
                                const I = Array.from(E)
                                  , v = Date.now();
                                for (let B = 0; B < I.length; B++)
                                    if (I[B][1].ts <= v - this._duration)
                                        E.delete(I[B][0]);
                                    else
                                        break;
                                0 === E.size && this._clearTimer()
                            }
                            , this._interval)
                        }
                    }
                    ;
                    K._trim = function() {
                        const E = this._cachedBlocks;
                        if (!(-1 === this._size || this._size >= E.size)) {
                            var I = Array.from(E);
                            for (let v = 0; v < I.length - this._size; v++)
                                E.delete(I[v][0])
                        }
                    }
                    ;
                    K._clearTimer = function() {
                        null != this._timer && (clearInterval(this._timer),
                        this._timer = null)
                    }
                    ;
                    return w
                }()
            })
        },
        "esri/layers/support/rasterFunctions/rasterProjectionHelper": function() {
            define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/unitUtils ../../../chunks/pe ../../../geometry/projection ../../../geometry/Extent ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/SpatialReference".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q) {
                function F(a, d, l) {
                    return !H.canProjectWithoutEngine(a, d, l)
                }
                function O(a, d, l) {
                    if ((a = F(a, d, l)) && !H.isLoaded())
                        throw new I("rasterprojectionhelper-project","projection engine is not loaded");
                    return a
                }
                function L() {
                    L = K._asyncToGenerator(function*() {
                        if (H.isLoaded())
                            return null;
                        yield H.load()
                    });
                    return L.apply(this, arguments)
                }
                function n(a, d, l, z=null) {
                    const J = a.spatialReference;
                    if (J.equals(d))
                        return a;
                    O(J, d, z);
                    l = l.center;
                    l = new r({
                        xmin: l.x - a.x / 2,
                        xmax: l.x + a.x / 2,
                        ymin: l.y - a.y / 2,
                        ymax: l.y + a.y / 2,
                        spatialReference: J
                    });
                    z = H.project(l, d, z);
                    l = S(d);
                    v.isNone(z) || v.isSome(l) && z.width >= l ? (d = B.getMetersPerUnitForSR(J) / B.getMetersPerUnitForSR(d),
                    a = {
                        x: a.x * d,
                        y: a.y * d
                    }) : a = {
                        x: z.width,
                        y: z.height
                    };
                    return a
                }
                function m(a, d=.01) {
                    return B.getMetersPerUnitForSR(a) ? d / B.getMetersPerUnitForSR(a) : 0
                }
                function h(a, d, l=null, z=!0) {
                    var J = a.spatialReference;
                    if (J.equals(d))
                        return a;
                    O(J, d, l);
                    l = H.project(a, d, l);
                    if (!z || !l)
                        return l;
                    z = P(J, !0);
                    d = P(d, !0);
                    (J = m(J)) && v.isSome(z) && v.isSome(d) && (0 < l.x && Math.abs(a.x - z[0]) < J ? l.x -= d[1] - d[0] : 0 > l.x && Math.abs(a.x - z[1]) < J && (l.x += d[1] - d[0]));
                    return l
                }
                function A(a) {
                    const {inSR: d, outSR: l, datumTransformation: z, preferPE: J} = a;
                    if (d.equals(l))
                        return {points: a} = c(a, null),
                        a;
                    if (d.isWebMercator && l.isWGS84 || d.isWGS84 && l.isWebMercator) {
                        {
                            const {cols: Y, rows: U, xres: aa, yres: da, usePixelCenter: ba, inSR: ja, outSR: ka} = a;
                            let {xmin: ia, ymax: fa} = a;
                            ba && (ia += aa / 2,
                            fa -= da / 2);
                            a = [];
                            var C = []
                              , y = Math.max(Y, U);
                            for (var R = 0; R < y; R++) {
                                var G = H.project(new p({
                                    x: ia + aa * Math.min(Y, R),
                                    y: fa - da * Math.min(U, R),
                                    spatialReference: ja
                                }), ka);
                                R <= Y && a.push(G.x);
                                R <= U && C.push(G.y)
                            }
                            y = [];
                            for (R = 0; R < Y; R++)
                                for (G = 0; G < U; G++)
                                    y.push([a[R], C[G]]);
                            a = y
                        }
                        return a
                    }
                    if (O(d, l, z) && J) {
                        if (d.isGeographic)
                            return Z(a);
                        C = V(d);
                        if (v.isSome(C))
                            return Z(a)
                    }
                    return T(a)
                }
                function T(a) {
                    var {points: d} = c(a, null);
                    d = d.map(l=>new p(l[0],l[1],a.inSR));
                    return H.project(d, a.outSR, a.datumTransformation).map(l=>l ? [l.x, l.y] : [NaN, NaN])
                }
                function Z(a) {
                    const {inSR: d, outSR: l, datumTransformation: z} = a
                      , J = V(d)
                      , {points: C, mask: y} = c(a, J);
                    d.isGeographic || (a = d.wkid ? u.PeFactory.coordsys(d.wkid) : u.PeFactory.fromString(d.isGeographic ? u.PeDefs.PE_TYPE_GEOGCS : u.PeDefs.PE_TYPE_PROJCS, d.wkt),
                    u.PeCSTransformations.projToGeog(a, C.length, C));
                    v.isSome(z) && z.steps.length && z.steps.forEach(R=>{
                        const G = R.wkid ? u.PeFactory.geogtran(R.wkid) : u.PeFactory.fromString(u.PeDefs.PE_TYPE_GEOGTRAN, R.wkt);
                        u.PeGTTransformations.geogToGeog(G, C.length, C, null, R.isInverse ? u.PeDefs.PE_TRANSFORM_2_TO_1 : u.PeDefs.PE_TRANSFORM_1_TO_2)
                    }
                    );
                    l.isGeographic || (a = V(l, !0),
                    a = v.isSome(a) && a.isEnvelope ? [a.bbox[1], a.bbox[3]] : [-90, 90],
                    b(C, a),
                    a = l.wkid ? u.PeFactory.coordsys(l.wkid) : u.PeFactory.fromString(l.isGeographic ? u.PeDefs.PE_TYPE_GEOGCS : u.PeDefs.PE_TYPE_PROJCS, l.wkt),
                    u.PeCSTransformations.geogToProj(a, C.length, C));
                    a = C;
                    if (y && C.length !== y.length) {
                        a = [];
                        for (let R = 0, G = 0; R < y.length; R++)
                            y[R] ? a.push(C[G++]) : a.push([NaN, NaN])
                    }
                    return a
                }
                function V(a, d=!1) {
                    var l = a.wkid || a.wkt;
                    if (!l || a.isGeographic)
                        return null;
                    l = String(l);
                    if (ca.has(l))
                        return l = ca.get(l),
                        d ? null == l ? void 0 : l.gcs : null == l ? void 0 : l.pcs;
                    var z = a.wkid ? u.PeFactory.coordsys(a.wkid) : u.PeFactory.fromString(a.isGeographic ? u.PeDefs.PE_TYPE_GEOGCS : u.PeDefs.PE_TYPE_PROJCS, a.wkt);
                    a = m(a, 1E-4);
                    a = W(z, a);
                    z = W(z, 0, !0);
                    ca.set(l, {
                        pcs: a,
                        gcs: z
                    });
                    return d ? z : a
                }
                function W(a, d=0, l=!1) {
                    var z = u.PePCSInfo.generate(a)
                      , J = l ? a.horizonGcsGenerate() : a.horizonPcsGenerate();
                    if (null == J || !J.length)
                        return null;
                    a = !1;
                    var C = J.find(U=>1 === U.getInclusive() && 1 === U.getKind());
                    if (!C) {
                        C = J.find(U=>1 === U.getInclusive() && 0 === U.getKind());
                        if (!C)
                            return null;
                        a = !0
                    }
                    l = l ? 0 : (2 === z.getNorthPoleLocation() ? 1 : 0) | (2 === z.getSouthPoleLocation() ? 2 : 0);
                    z = z.isPannableRectangle();
                    C = C.getCoord();
                    if (a)
                        return {
                            isEnvelope: a,
                            isPannable: z,
                            vertices: C,
                            coef: null,
                            bbox: [C[0][0] - d, C[0][1] - d, C[1][0] + d, C[1][1] + d],
                            poleLocation: l
                        };
                    d = 0;
                    a = [];
                    let[y,R] = C[0]
                      , [G,Y] = C[0];
                    for (let U = 0, aa = C.length; U < aa; U++) {
                        d++;
                        d === aa && (d = 0);
                        const [da,ba] = C[U]
                          , [ja,ka] = C[d];
                        if (ka === ba)
                            a.push([da, ja, ba, ka, 2]);
                        else {
                            J = (ja - da) / (ka - ba || 1E-4);
                            const ia = da - J * ba;
                            ba < ka ? a.push([J, ia, ba, ka, 0]) : a.push([J, ia, ka, ba, 1])
                        }
                        y = y < da ? y : da;
                        R = R < ba ? R : ba;
                        G = G > da ? G : da;
                        Y = Y > ba ? Y : ba
                    }
                    return {
                        isEnvelope: !1,
                        isPannable: z,
                        vertices: C,
                        coef: a,
                        bbox: [y, R, G, Y],
                        poleLocation: l
                    }
                }
                function c(a, d) {
                    const l = []
                      , {cols: z, rows: J, xres: C, yres: y, usePixelCenter: R} = a;
                    let {xmin: G, ymax: Y} = a;
                    R && (G += C / 2,
                    Y -= y / 2);
                    if (v.isNone(d)) {
                        for (a = 0; a < z; a++)
                            for (d = 0; d < J; d++)
                                l.push([G + C * a, Y - y * d]);
                        return {
                            points: l
                        }
                    }
                    a = new Uint8Array(z * J);
                    if (d.isEnvelope) {
                        const {bbox: [ia,fa,la,oa]} = d;
                        for (let pa = 0, qa = 0; pa < z; pa++) {
                            var U = G + C * pa
                              , aa = d.isPannable || U >= ia && U <= la;
                            for (var da = 0; da < J; da++,
                            qa++) {
                                var ba = Y - y * da;
                                aa && ba >= fa && ba <= oa && (l.push([U, ba]),
                                a[qa] = 1)
                            }
                        }
                        return {
                            points: l,
                            mask: a
                        }
                    }
                    ({coef: U} = d);
                    d = [];
                    for (aa = 0; aa < J; aa++) {
                        var ja = Y - y * aa;
                        da = [];
                        ba = [];
                        for (var ka = 0; ka < U.length; ka++) {
                            const [ia,fa,la,oa,pa] = U[ka];
                            ja === la && la === oa ? (da.push(ia),
                            da.push(fa),
                            ba.push(2),
                            ba.push(2)) : ja >= la && ja <= oa && (da.push(ia * ja + fa),
                            ba.push(pa))
                        }
                        ja = da;
                        if (2 < da.length) {
                            ka = 2 === ba[0] ? 0 : ba[0];
                            let ia = da[0];
                            ja = [];
                            for (let fa = 1; fa < ba.length; fa++)
                                if (2 !== ba[fa] || fa === ba.length - 1)
                                    ba[fa] !== ka && (ja.push(0 === ka ? Math.min(ia, da[fa - 1]) : Math.max(ia, da[fa - 1])),
                                    ka = ba[fa],
                                    ia = da[fa]),
                                    fa === ba.length - 1 && ja.push(0 === ba[fa] ? Math.min(ia, da[fa]) : Math.max(ia, da[fa]));
                            ja.sort((fa,la)=>fa - la)
                        } else
                            da[0] > da[1] && (ja = [da[1], da[0]]);
                        d.push(ja)
                    }
                    for (let ia = 0, fa = 0; ia < z; ia++)
                        for (U = G + C * ia,
                        aa = 0; aa < J; aa++,
                        fa++)
                            if (da = Y - y * aa,
                            ba = d[aa],
                            2 === ba.length)
                                U >= ba[0] && U <= ba[1] && (l.push([U, da]),
                                a[fa] = 1);
                            else if (2 < ba.length) {
                                ja = !1;
                                for (ka = 0; ka < ba.length; ka += 2)
                                    if (U >= ba[ka] && U <= ba[ka + 1]) {
                                        ja = !0;
                                        break
                                    }
                                ja && (l.push([U, da]),
                                a[fa] = 1)
                            }
                    return {
                        points: l,
                        mask: a
                    }
                }
                function b(a, d) {
                    const [l,z] = d;
                    for (d = 0; d < a.length; d++) {
                        const J = a[d][1];
                        if (J < l || J > z)
                            a[d] = [NaN, NaN]
                    }
                }
                function f(a) {
                    const d = S(a[0].spatialReference);
                    if (2 > a.length || v.isNone(d))
                        return a[0];
                    let {xmin: l, xmax: z, ymin: J, ymax: C} = a[0];
                    for (let y = 1; y < a.length; y++) {
                        const R = a[y];
                        z = R.xmax + d * y;
                        J = Math.min(J, R.ymin);
                        C = Math.max(C, R.ymax)
                    }
                    return new r({
                        xmin: l,
                        xmax: z,
                        ymin: J,
                        ymax: C,
                        spatialReference: a[0].spatialReference
                    })
                }
                function t(a, d, l=null, z=!0) {
                    var J = a.spatialReference;
                    if (J.equals(d))
                        return a;
                    var C = D(a);
                    const y = S(J, !0);
                    var R = S(d);
                    if (0 === C || v.isNone(y) || v.isNone(R))
                        return C = x(a, d, l, z),
                        v.isNone(y) && v.isSome(R) && Math.abs(C.width - R) < m(d) && H.isLoaded() && (J = V(J),
                        v.isSome(J) && J.poleLocation === N.None && a.width < (J.bbox[2] - J.bbox[0]) / 2) ? k(a, d) || C : C;
                    R = a.clone().normalize();
                    if (1 === R.length && a.xmax < y && a.xmax - y / 2 > m(J)) {
                        const {xmin: G, xmax: Y} = a;
                        for (let U = 0; U <= C; U++)
                            R[U] = new r({
                                xmin: 0 === U ? G : -y / 2,
                                xmax: U === C ? Y - y * U : y / 2,
                                ymin: a.ymin,
                                ymax: a.ymax,
                                spatialReference: J
                            })
                    }
                    a = R.map(G=>x(G, d, l, z));
                    return f(a.filter(G=>!!G))
                }
                function k(a, d) {
                    const l = S(d);
                    if (v.isNone(l))
                        return null;
                    let {xmin: z, ymin: J, xmax: C, ymax: y} = a;
                    var R = a.spatialReference;
                    a = new g({
                        spatialReference: R,
                        rings: [[[z, J], [C, J], [C, y], [z, y], [z, J]]]
                    });
                    a = H.project(a, d);
                    if (2 !== a.rings.length || !a.rings[0].length || !a.rings[1].length)
                        return null;
                    ({rings: a} = a);
                    R = m(R);
                    d = new r({
                        spatialReference: d
                    });
                    for (let G = 0; 2 > G; G++) {
                        z = C = a[G][0][0];
                        J = y = a[G][0][1];
                        for (let Y = 0; Y < a[G].length; Y++)
                            z = z > a[G][Y][0] ? a[G][Y][0] : z,
                            C = C < a[G][Y][0] ? a[G][Y][0] : C,
                            J = J > a[G][Y][1] ? a[G][Y][1] : J,
                            y = y < a[G][Y][1] ? a[G][Y][1] : y;
                        if (0 === G)
                            d.ymin = J,
                            d.ymax = y,
                            d.xmin = z,
                            d.xmax = C;
                        else if (d.ymin = Math.min(d.ymin, J),
                        d.ymax = Math.max(d.ymax, y),
                        Math.abs(C - l / 2) < R)
                            d.xmin = z,
                            d.xmax += l;
                        else if (Math.abs(z + l / 2) < R)
                            d.xmax = C + l;
                        else
                            return null
                    }
                    return d
                }
                function x(a, d, l=null, z=!0, J=!0) {
                    const C = a.spatialReference;
                    if (C.equals(d))
                        return a;
                    O(C, d, l);
                    const y = H.project(a, d, l);
                    if (J && d.isWebMercator && y && (y.ymax = Math.min(2.0037508342787E7, y.ymax),
                    y.ymin = Math.max(-2.0037508342787E7, y.ymin),
                    y.ymin >= y.ymax))
                        return null;
                    if (!z || !y)
                        return y;
                    var R = P(C, !0);
                    z = P(d, !0);
                    if (v.isNone(R) || v.isNone(z))
                        return y;
                    J = m(C, .001);
                    const G = m(C, 500);
                    var Y = m(d, .001);
                    if (Math.abs(y.xmin - z[0]) < Y && Math.abs(y.xmax - z[1]) < Y) {
                        Y = Math.abs(a.xmin - R[0]);
                        R = Math.abs(R[1] - a.xmax);
                        if (Y < J && R > G) {
                            y.xmin = z[0];
                            var U = [];
                            U.push(new p(a.xmax,a.ymin,C));
                            U.push(new p(a.xmax,(a.ymin + a.ymax) / 2,C));
                            U.push(new p(a.xmax,a.ymax,C));
                            U = U.map(aa=>h(aa, d, l)).filter(aa=>!isNaN(null == aa ? void 0 : aa.x)).map(aa=>aa.x);
                            y.xmax = Math.max.apply(null, U)
                        }
                        R < J && Y > G && (y.xmax = z[1],
                        z = [],
                        z.push(new p(a.xmin,a.ymin,C)),
                        z.push(new p(a.xmin,(a.ymin + a.ymax) / 2,C)),
                        z.push(new p(a.xmin,a.ymax,C)),
                        a = z.map(aa=>h(aa, d, l)).filter(aa=>!isNaN(null == aa ? void 0 : aa.x)).map(aa=>aa.x),
                        y.xmin = Math.min.apply(null, a))
                    } else
                        a = m(d, .001),
                        Math.abs(y.xmin - z[0]) < a && (y.xmin = z[0]),
                        Math.abs(y.xmax - z[1]) < a && (y.xmax = z[1]);
                    return y
                }
                function S(a, d=!1) {
                    return a.isWebMercator ? 2 * (d ? 2.0037508342787E7 : 2.0037508342788905E7) : a.wkid && a.isGeographic ? 360 : 2 * ea[a.wkid] || null
                }
                function P(a, d=!1) {
                    if (a.isGeographic)
                        return [-180, 180];
                    a = S(a, d);
                    return v.isSome(a) ? [-a / 2, a / 2] : null
                }
                function e(a, d, l, z) {
                    a = (a - d) / l;
                    0 !== a - Math.floor(a) ? a = Math.floor(a) : z && --a;
                    return a
                }
                function D(a, d=!1) {
                    var l = S(a.spatialReference);
                    if (v.isNone(l))
                        return 0;
                    const z = d ? 0 : -(l / 2)
                      , J = m(a.spatialReference)
                      , C = !d && Math.abs(a.xmin + l / 2) < J ? -l / 2 : a.xmin;
                    a = e(!d && Math.abs(a.xmax - l / 2) < J ? l / 2 : a.xmax, z, l, !0);
                    l = e(C, z, l, !1);
                    return a - l
                }
                function Q(a) {
                    const {projectedExtent: d, srcBufferExtent: l, pixelSize: z, datumTransformation: J, rasterTransform: C} = a;
                    var y = d.spatialReference;
                    const R = l.spatialReference;
                    var G = O(y, R);
                    const {xmin: Y, ymin: U, xmax: aa, ymax: da} = d
                      , ba = S(R)
                      , ja = v.isSome(ba) && (a.hasWrapAround || "gcs-shift" === (null == C ? void 0 : C.type));
                    a = a.spacing || [32, 32];
                    var ka = a[0] * z.x
                      , ia = a[1] * z.y;
                    const fa = 1 === a[0]
                      , la = Math.ceil((aa - Y) / ka - .1 / a[0]) + (fa ? 0 : 1)
                      , oa = Math.ceil((da - U) / ia - .1 / a[1]) + (fa ? 0 : 1);
                    ka = A({
                        cols: la,
                        rows: oa,
                        xmin: Y,
                        ymax: da,
                        xres: ka,
                        yres: ia,
                        inSR: y,
                        outSR: R,
                        datumTransformation: J,
                        preferPE: 4 >= a[0],
                        usePixelCenter: fa
                    });
                    ia = [];
                    let pa, qa = 0;
                    const ua = fa ? -1 : NaN
                      , {xmin: va, xmax: ra, ymax: na, width: wa, height: xa} = l
                      , ya = m(R, 500)
                      , za = v.isSome(ba) && 0 < va && ra > ba / 2;
                    var sa = !1;
                    G && (sa = V(y),
                    sa = v.isSome(sa) && 0 < sa.poleLocation);
                    for (y = 0; y < la; y++) {
                        G = [];
                        for (let ta = 0; ta < oa; ta++) {
                            var ma = ka[y * oa + ta];
                            ja && ma[0] > ra && ma[0] > ba / 2 - ya ? ma[0] -= ba : ja && 0 === y && 0 > ma[0] && za && !C && (ma[0] += ba);
                            !ma || isNaN(ma[0]) || isNaN(ma[1]) ? (ia.push(ua),
                            ia.push(ua),
                            G.push(null),
                            qa++) : (C && (ma = C.inverseTransform(new p({
                                x: ma[0],
                                y: ma[1],
                                spatialReference: R
                            })),
                            ma = [ma.x, ma.y]),
                            G.push(ma),
                            0 < y && ja && pa[ta] && ma[0] < pa[ta][0] && (ma[0] += ba,
                            sa && ma[0] > ra && ma[0] > ba && (ma[0] -= ba)),
                            ia.push((ma[0] - va) / wa),
                            ia.push((na - ma[1]) / xa))
                        }
                        pa = G
                    }
                    return {
                        offsets: ia,
                        error: null,
                        coefficients: null,
                        outofBoundPointCount: qa,
                        spacing: a,
                        size: fa ? [la, oa] : [la - 1, oa - 1]
                    }
                }
                function M(a, d, l) {
                    const {cols: z, rows: J} = d;
                    d = new Float32Array((z - 1) * (J - 1) * 12);
                    const C = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0])
                      , y = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
                    for (let da = 0; da < z - 1; da++) {
                        for (var R = 0; R < J - 1; R++) {
                            var G = da * J * 2 + 2 * R
                              , Y = a[G];
                            const ba = a[G + 1];
                            var U = a[G + 2]
                              , aa = a[G + 3];
                            G += 2 * J;
                            const ja = a[G]
                              , ka = a[G + 1]
                              , ia = a[G + 2];
                            G = a[G + 3];
                            let fa = 0
                              , la = 12 * (R * (z - 1) + da);
                            for (let oa = 0; 3 > oa; oa++)
                                d[la++] = C[fa++] * Y + C[fa++] * U + C[fa++] * ia;
                            fa = 0;
                            for (U = 0; 3 > U; U++)
                                d[la++] = C[fa++] * ba + C[fa++] * aa + C[fa++] * G;
                            fa = 0;
                            for (aa = 0; 3 > aa; aa++)
                                d[la++] = y[fa++] * Y + y[fa++] * ja + y[fa++] * ia;
                            fa = 0;
                            for (Y = 0; 3 > Y; Y++)
                                d[la++] = y[fa++] * ba + y[fa++] * ka + y[fa++] * G
                        }
                        if (l)
                            for (R = 0; R < d.length; R++)
                                isNaN(d[R]) && (d[R] = -1)
                    }
                    return d
                }
                var N;
                (function(a) {
                    a[a.None = 0] = "None";
                    a[a.North = 1] = "North";
                    a[a.South = 2] = "South";
                    a[a.Both = 3] = "Both"
                }
                )(N || (N = {}));
                const X = (a,d,l,z=0)=>{
                    if (1 === l[0])
                        return [0, 0];
                    var J = 1
                      , C = -1
                      , y = 1
                      , R = -1;
                    for (var G = 0; G < a.length; G += 2)
                        isNaN(a[G]) || (J = J > a[G] ? a[G] : J,
                        C = C > a[G] ? C : a[G],
                        y = y > a[G + 1] ? a[G + 1] : y,
                        R = R > a[G + 1] ? R : a[G + 1]);
                    const {cols: Y, rows: U} = d;
                    d = (C - J) / Y / l[0];
                    l = (R - y) / U / l[1];
                    z *= 2;
                    y = 0;
                    R = !1;
                    J = [0, 0];
                    for (C = 0; C < Y - 3; C++) {
                        for (G = 0; G < U - 3; G++) {
                            var aa = C * U * 2 + 2 * G;
                            const da = Math.abs(((a[aa] + a[aa + 4] + a[aa + 4 * U] + a[aa + 4 * U + 4]) / 4 - a[aa + 2 * U + 2]) / d);
                            aa = Math.abs(((a[aa + 1] + a[aa + 5] + a[aa + 4 * U + 1] + a[aa + 4 * U + 5]) / 4 - a[aa + 2 * U + 3]) / l);
                            da + aa > y && (y = da + aa,
                            J = [da, aa]);
                            if (z && y > z) {
                                R = !0;
                                break
                            }
                        }
                        if (R)
                            break
                    }
                    return J
                }
                  , ea = {
                    3395: 2.0037508342789244E7,
                    3410: 1.7334193943686873E7,
                    3857: 2.0037508342788905E7,
                    3975: 1.7367530445161372E7,
                    4087: 2.0037508342789244E7,
                    4088: 2.0015108787169147E7,
                    6933: 1.7367530445161372E7,
                    32662: 2.0037508342789244E7,
                    53001: 2.001508679602057E7,
                    53002: 1.000754339801029E7,
                    53003: 2.001508679602057E7,
                    53004: 2.001508679602057E7,
                    53016: 1.4152803599503474E7,
                    53017: 1.7333573624304302E7,
                    53034: 2.001508679602057E7,
                    53079: 2.0015114352186374E7,
                    53080: 2.0015114352186374E7,
                    54001: 2.0037508342789244E7,
                    54002: 1.0018754171394624E7,
                    54003: 2.0037508342789244E7,
                    54004: 2.0037508342789244E7,
                    54016: 1.4168658027268292E7,
                    54017: 1.736753044516137E7,
                    54034: 2.0037508342789244E7,
                    54079: 2.0037508342789244E7,
                    54080: 2.0037508342789244E7,
                    54100: 2.0037508342789244E7,
                    54101: 2.0037508342789244E7
                }
                  , ca = new Map
                  , ha = new Map;
                w.computeProjectedScales = function(a, d, l=512, z=!0) {
                    const {extent: J, spatialReference: C, pixelSize: y} = a
                      , R = n(new p({
                        x: y.x,
                        y: y.y,
                        spatialReference: C
                    }), d, J);
                    if (null == R)
                        return {
                            projectedPixelSize: null,
                            scales: null,
                            srcResolutions: null,
                            isCustomTilingScheme: !1
                        };
                    var G = (R.x + R.y) / 2
                      , Y = B.getMetersPerUnitForSR(d);
                    G = G * Y * 96 * 39.37;
                    const U = d.isGeographic ? 256 / l * 2.958287637958547E8 : 256 / l * 5.91657527591555E8;
                    l = "vector-magdir" === a.dataType || "vector-uv" === a.dataType;
                    const aa = t(J, d);
                    l || z && (d.isGeographic || d.isWebMercator) && (l = 0 > aa.xmin * aa.xmax);
                    z = G;
                    if (l)
                        z = U,
                        a = d.isGeographic ? 1.341104507446289E-6 : .29858214164761665,
                        Y = 96 * a * Y * 39.37,
                        d = n(new p({
                            x: a,
                            y: a,
                            spatialReference: {
                                wkid: d.isGeographic ? 4326 : 3857
                            }
                        }), C, aa),
                        d.x *= z / Y,
                        d.y *= z / Y;
                    else {
                        d = {
                            x: y.x,
                            y: y.y
                        };
                        a = Math.ceil(Math.log(Math.min(a.width, a.height) / 32) / Math.LN2);
                        for (Y = 0; z < .5005 * U && Y < a; )
                            Y++,
                            z *= 2,
                            d.x *= 2,
                            d.y *= 2;
                        1.001 >= Math.max(z, U) / Math.min(z, U) && (z = U)
                    }
                    a = [z];
                    Y = [{
                        x: d.x,
                        y: d.y
                    }];
                    for (G = Math.min(70.5310735, G) / 1.001; z >= G; )
                        z /= 2,
                        d.x /= 2,
                        d.y /= 2,
                        a.push(z),
                        Y.push({
                            x: d.x,
                            y: d.y
                        });
                    return {
                        projectedPixelSize: R,
                        scales: a,
                        srcResolutions: Y,
                        isCustomTilingScheme: !l
                    }
                }
                ;
                w.defaultGridSpacing = 32;
                w.defaultProjectionToleranceInPixels = 4;
                w.getDefaultDatumTransformationForDataset = function(a, d, l) {
                    return O(a.spatialReference, d) ? l ? H.getTransformation(d, a.spatialReference, a) : H.getTransformation(a.spatialReference, d, a) : null
                }
                ;
                w.getProjectedGridPoints = A;
                w.getProjectionOffsetGrid = function(a) {
                    var d = a.isAdaptive && null == a.spacing;
                    let l = a.spacing || [32, 32]
                      , z = Q(a);
                    var J = {
                        cols: z.size[0] + 1,
                        rows: z.size[1] + 1
                    };
                    const C = 0 < z.outofBoundPointCount && z.outofBoundPointCount < z.offsets.length / 2;
                    let y = z.outofBoundPointCount === z.offsets.length / 2 || d && C ? [0, 0] : X(z.offsets, J, l, 4);
                    const R = (y[0] + y[1]) / 2;
                    var G = a.projectedExtent.spatialReference;
                    const Y = a.srcBufferExtent.spatialReference;
                    d && (C || 4 < R) && (F(G, Y, a.datumTransformation) && (G.isGeographic || v.isSome(V(G))),
                    l = [4, 4],
                    z = Q({
                        ...a,
                        spacing: l
                    }),
                    J = {
                        cols: z.size[0] + 1,
                        rows: z.size[1] + 1
                    },
                    y = X(z.offsets, J, l, 4));
                    z.error = y;
                    1 < l[0] && (z.coefficients = M(z.offsets, J, C));
                    !a.includeGCSGrid || G.isGeographic || G.isWebMercator || (Y.isGeographic ? z.gcsGrid = {
                        offsets: z.offsets,
                        coefficients: z.coefficients,
                        spacing: l
                    } : (d = V(G),
                    v.isSome(d) && !d.isEnvelope && (G && !G.isGeographic && (d = String(G.wkid || G.wkt),
                    ha.has(d) ? G = ha.get(d) : (G = (G.wkid ? u.PeFactory.coordsys(G.wkid) : u.PeFactory.fromString(u.PeDefs.PE_TYPE_PROJCS, G.wkt)).getGeogcs().getCode(),
                    ha.set(d, G)),
                    G = new q({
                        wkid: G
                    })),
                    G = t(a.projectedExtent, G),
                    {offsets: a} = Q({
                        ...a,
                        srcBufferExtent: G,
                        spacing: l
                    }),
                    J = M(a, J, C),
                    z.gcsGrid = {
                        offsets: a,
                        coefficients: J,
                        spacing: l
                    })));
                    return z
                }
                ;
                w.getRasterDatasetAlignmentInfo = function(a) {
                    const d = a.storageInfo.origin.x;
                    var l = S(a.spatialReference, !0);
                    if (v.isNone(l))
                        return {
                            originX: d,
                            halfWorldWidth: null,
                            pyramidsInfo: null
                        };
                    const z = l / 2
                      , {nativePixelSize: J, storageInfo: C, extent: y} = a
                      , {maximumPyramidLevel: R, blockWidth: G, pyramidScalingFactor: Y} = C;
                    let U = J.x;
                    const aa = [];
                    a = v.isSome(a.transform) && "gcs-shift" === a.transform.type;
                    const da = d + (a ? 0 : z);
                    l = a ? l - d : z - d;
                    for (let ba = 0; ba <= R; ba++) {
                        const ja = (y.xmax - d) / U / G
                          , ka = l / U / G;
                        aa.push({
                            resolutionX: U,
                            blockWidth: G,
                            datsetColumnCount: 0 === ja - Math.floor(ja) ? ja : Math.ceil(ja),
                            worldColumnCountFromOrigin: 0 === ka - Math.floor(ka) ? ka : Math.ceil(ka),
                            leftMargin: Math.round(da / U) % G,
                            rightPadding: (G - Math.round(l / U) % G) % G,
                            originColumnOffset: Math.floor(da / U / G)
                        });
                        U *= Y
                    }
                    return {
                        originX: d,
                        halfWorldWidth: z,
                        pyramidsInfo: aa,
                        hasGCSSShiftTransform: a
                    }
                }
                ;
                w.getWorldWidth = S;
                w.getWorldWrapCount = D;
                w.load = function() {
                    return L.apply(this, arguments)
                }
                ;
                w.minimumGridSpacing = 4;
                w.projectExtent = t;
                w.projectPoint = h;
                w.projectResolution = n;
                w.requirePE = F;
                w.snapExtent = function(a) {
                    a = a.clone().normalize();
                    return 1 === a.length ? a[0] : f(a)
                }
                ;
                w.snapPyramid = function(a, d, l) {
                    const {storageInfo: z, pixelSize: J} = d;
                    let C = !1;
                    var {pyramidResolutions: y} = z;
                    if (v.isSome(y) && y.length) {
                        a = (a.x + a.y) / 2;
                        var R = y[y.length - 1];
                        R = (R.x + R.y) / 2;
                        var G = (J.x + J.y) / 2;
                        if (a <= G)
                            var Y = 0;
                        else if (a >= R)
                            Y = y.length,
                            C = 8 < a / R;
                        else {
                            R = G;
                            for (let U = 1; U <= y.length; U++) {
                                G = (y[U - 1].x + y[U - 1].y) / 2;
                                if (a <= G) {
                                    a === G ? Y = U : "down" === l ? (Y = U - 1,
                                    C = 8 < a / R) : Y = "up" === l ? U : a - R > G - a || 2 < a / R ? U : U - 1;
                                    break
                                }
                                R = G
                            }
                        }
                        l = 0 === Y ? J : y[Y - 1];
                        C && (y = Math.min(l.x, l.y),
                        a = B.getMetersPerUnitForSR(d.spatialReference),
                        19567 < y * a && (C = !1));
                        return {
                            pyramidLevel: Y,
                            pyramidResolution: new p({
                                x: l.x,
                                y: l.y,
                                spatialReference: d.spatialReference
                            }),
                            excessiveReading: C
                        }
                    }
                    Y = Math.log(a.x / J.x) / Math.LN2;
                    a = Math.log(a.y / J.y) / Math.LN2;
                    y = d.storageInfo.maximumPyramidLevel || 0;
                    Y = "down" === l ? Math.floor(Math.min(Y, a)) : "up" === l ? Math.ceil(Math.max(Y, a)) : Math.round((Y + a) / 2);
                    0 > Y ? Y = 0 : Y > y && (C = Y > y + 3,
                    Y = y);
                    l = 2 ** Y;
                    d = new p({
                        x: l * d.nativePixelSize.x,
                        y: l * d.nativePixelSize.y,
                        spatialReference: d.spatialReference
                    });
                    return {
                        pyramidLevel: Y,
                        pyramidResolution: d,
                        excessiveReading: C
                    }
                }
                ;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/layers/imagery/VectorFieldTileView2D": function() {
            define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/vectorFieldUtils ../../engine/imagery/RasterVFTileContainer ./BaseImageryTileSubView2D".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q) {
                B = function(F) {
                    function O() {
                        var n = F.apply(this, arguments) || this;
                        n._handle = null;
                        n.container = null;
                        n.layer = null;
                        n.type = "rasterVF";
                        return n
                    }
                    w._inheritsLoose(O, F);
                    var L = O.prototype;
                    L.canUseWebGLForProcessing = function() {
                        return !1
                    }
                    ;
                    L.fetchTile = function() {
                        var n = w._asyncToGenerator(function*(m, h) {
                            h = {
                                ...h,
                                interpolation: "nearest",
                                requestProjectedLocalDirections: !0
                            };
                            m = yield this.layer.fetchTile(m.level, m.row, m.col, h);
                            "vector-magdir" === this.layer.rasterInfo.dataType && null != m && m.pixelBlock && (m.pixelBlock = yield this.layer.convertVectorFieldData(m.pixelBlock, h));
                            return m
                        });
                        return function(m, h) {
                            return n.apply(this, arguments)
                        }
                    }();
                    L.updateTileSource = function(n, m) {
                        const h = m.symbolizerParams
                          , {tileData: A} = n;
                        A.key = n.key;
                        A.width = this._tileInfoView.tileInfo.size[0];
                        A.height = this._tileInfoView.tileInfo.size[1];
                        ({symbolTileSize: n} = h);
                        ({source: m} = m);
                        A.offset = this._getTileSymbolOffset(A.key, n);
                        E.isSome(m) && E.isSome(m.pixelBlock) ? (A.rawPixelData = {
                            extent: m.extent,
                            pixelBlock: m.pixelBlock
                        },
                        A.symbolizerParameters = h,
                        A.source = this._sampleVectorFieldData(m.pixelBlock, h, A.offset)) : (m = this.createEmptyTilePixelBlock([Math.round((this._tileInfoView.tileInfo[0] - A.offset[0]) / n), Math.round((this._tileInfoView.tileInfo[1] - A.offset[1]) / n)]),
                        A.source = m,
                        A.symbolizerParameters = h);
                        A.invalidateVAO();
                        return Promise.resolve(null)
                    }
                    ;
                    L.updateTileSymbolizerParameters = function(n, m) {
                        var h;
                        m = m.local;
                        const {symbolTileSize: A} = m;
                        ({tileData: n} = n);
                        n.offset = this._getTileSymbolOffset(n.key, A);
                        const T = n.symbolizerParameters.symbolTileSize;
                        n.symbolizerParameters = m;
                        E.isSome(null == (h = n.rawPixelData) ? void 0 : h.pixelBlock) && T !== A && (n.source = this._sampleVectorFieldData(n.rawPixelData.pixelBlock, n.symbolizerParameters, n.offset));
                        return Promise.resolve(null)
                    }
                    ;
                    L.attach = function() {
                        F.prototype.attach.call(this);
                        this.container = new g.RasterVFTileContainer(this._tileInfoView);
                        this.container.isCustomTilingScheme = this._isCustomTilingScheme;
                        this._updateSymbolType(this.layer.renderer);
                        this._handle = I.watch(()=>this.layer.renderer, n=>this._updateSymbolType(n))
                    }
                    ;
                    L.detach = function() {
                        F.prototype.detach.call(this);
                        this.container.removeAllChildren();
                        this._handle.remove();
                        this._handle = null
                    }
                    ;
                    L._getTileSymbolOffset = function(n, m) {
                        const h = n.col * this._tileInfoView.tileInfo.size[0] % m;
                        n = n.row * this._tileInfoView.tileInfo.size[1] % m;
                        return [h > m / 2 ? m - h : -h, n > m / 2 ? m - n : -n]
                    }
                    ;
                    L._sampleVectorFieldData = function(n, m, h) {
                        ({symbolTileSize: m} = m);
                        return p.sampleVectorField(n, "vector-uv", m, h)
                    }
                    ;
                    L._updateSymbolType = function(n) {
                        "vector-field" === n.type && (this.container.symbolTypes = "wind-barb" === n.style ? ["scalar", "triangle"] : "simple-scalar" === n.style ? ["scalar"] : ["triangle"])
                    }
                    ;
                    return O
                }(q.BaseImageryTileSubView2D);
                K.__decorate([v.property()], B.prototype, "container", void 0);
                K.__decorate([v.property()], B.prototype, "layer", void 0);
                K.__decorate([v.property()], B.prototype, "type", void 0);
                return B = K.__decorate([r.subclass("esri.views.2d.layers.imagery.VectorFieldTileView2D")], B)
            })
        },
        "esri/layers/support/rasterFunctions/vectorFieldUtils": function() {
            define(["exports", "../../../core/jsonMap", "../../../core/maybe", "../PixelBlock", "./pixelUtils"], function(w, K, E, I, v) {
                function B(c, b) {
                    return n.get(c) / n.get(b) || 1
                }
                function u(c, b="geographic") {
                    const [f,t] = c;
                    c = Math.sqrt(f * f + t * t);
                    let k = Math.atan2(t, f) * m;
                    k = (360 + k) % 360;
                    "geographic" === b && (k = (450 - k) % 360);
                    return [c, k]
                }
                function H(c, b="geographic") {
                    let f = c[1];
                    "geographic" === b && (f = (450 - f) % 360);
                    f %= 360;
                    c = c[0];
                    return [c * Math.cos(f / m), c * Math.sin(f / m)]
                }
                function r(c, b, f="geographic", t=1) {
                    if (!v.isValidPixelBlock(c))
                        return c;
                    const {pixels: k, width: x, height: S} = c;
                    var P = x * S;
                    const e = k[0]
                      , D = k[1]
                      , Q = c.pixelType.startsWith("f") ? c.pixelType : "f32"
                      , M = I.createEmptyBand(Q, P);
                    P = I.createEmptyBand(Q, P);
                    let N = 0;
                    for (let X = 0; X < S; X++)
                        for (let ea = 0; ea < x; ea++)
                            "vector-uv" === b ? ([M[N],P[N]] = u([e[N], D[N]], f),
                            M[N] *= t) : ([M[N],P[N]] = H([e[N], D[N]], f),
                            M[N] *= t,
                            P[N] *= t),
                            N++;
                    c = new I({
                        pixelType: Q,
                        width: c.width,
                        height: c.height,
                        mask: c.mask,
                        validPixelCount: c.validPixelCount,
                        maskIsAlpha: c.maskIsAlpha,
                        pixels: [M, P]
                    });
                    c.updateStatistics();
                    return c
                }
                function p(c=0, b=Math.PI, f=!0) {
                    f && (b = (2 * Math.PI - b) % (2 * Math.PI));
                    var t = f ? -1 : 1;
                    f = 5 * t;
                    const k = 20 * t
                      , x = 25 * t;
                    t *= 2;
                    let[S,P] = [5, 0 - k]
                      , [e,D] = [S + 2, P]
                      , [Q,M] = [e - 0, D + t]
                      , [N,X] = [-5, 0 - x]
                      , [ea,ca] = [N + 0, X - t];
                    c = Math.ceil(c / 5);
                    let ha = Math.floor(c / 10);
                    c -= 8 * ha;
                    const a = []
                      , d = [];
                    for (let U = 0; U < c / 2; U++,
                    ha--) {
                        0 >= ha && 1 === c % 2 && U === (c - 1) / 2 && (N = 0,
                        ea = N + 0,
                        X = (X + P) / 2,
                        ca = X - t);
                        const [aa,da] = g(N, X, b, 45);
                        if (0 < ha) {
                            const [ba,ja] = g(e, X, b, 45)
                              , [ka,ia] = g(S, P, b, 45);
                            a.push(ba);
                            a.push(ja);
                            a.push(aa);
                            a.push(da);
                            a.push(ka);
                            a.push(ia)
                        } else {
                            const [ba,ja] = g(e, D, b, 45)
                              , [ka,ia] = g(Q, M, b, 45)
                              , [fa,la] = g(ea, ca, b, 45);
                            d.push(aa);
                            d.push(da);
                            d.push(fa);
                            d.push(la);
                            d.push(ka);
                            d.push(ia);
                            d.push(ba);
                            d.push(ja)
                        }
                        X += f;
                        P += f;
                        D += f;
                        M += f;
                        ca += f
                    }
                    const [l,z] = g(5, 0 + k, b, 45)
                      , [J,C] = g(7, 0 + k, b, 45)
                      , [y,R] = g(5, 0 - x, b, 45)
                      , [G,Y] = g(7, 0 - x, b, 45);
                    return {
                        pennants: a,
                        barbs: d,
                        shaft: [l, z, J, C, y, R, G, Y]
                    }
                }
                function g(c, b, f, t=1) {
                    return [Math.sqrt(c * c + b * b) / t, (2 * Math.PI + (2 * Math.PI + Math.atan2(b, c)) % (2 * Math.PI) - f) % (2 * Math.PI)]
                }
                function q(c, b, f, t) {
                    f = B(t || "knots", f);
                    for (t = 1; t < b.length; t++)
                        if (t === b.length - 1) {
                            if (c < b[t] * f)
                                break
                        } else if (c <= b[t] * f)
                            break;
                    return Math.min(t - 1, b.length - 2)
                }
                function F(c, b, f, t, k) {
                    let x = 0;
                    switch (b) {
                    case "beaufort_kn":
                        x = q(c, T, "knots", f);
                        break;
                    case "beaufort_km":
                        x = q(c, T, "kilometer-per-hour", f);
                        break;
                    case "beaufort_ft":
                        x = q(c, T, "feet-per-second", f);
                        break;
                    case "beaufort_m":
                        x = q(c, T, "meter-per-second", f);
                        break;
                    case "classified_arrow":
                        x = q(c, k, t, f);
                        break;
                    case "ocean_current_m":
                        x = q(c, Z, "meter-per-second", f);
                        break;
                    case "ocean_current_kn":
                        x = q(c, V, "knots", f)
                    }
                    return x
                }
                function O(c, b) {
                    const {style: f, inputUnit: t, outputUnit: k, breakValues: x} = b;
                    b = h.fromJSON(t);
                    const S = h.fromJSON(k);
                    let P = 0
                      , e = 0;
                    const {width: D, height: Q, mask: M} = c
                      , N = c.pixels[0];
                    c = c.pixels[1];
                    var X = M ? M.filter(a=>0 < a).length : D * Q;
                    const ea = new Float32Array(42 * X);
                    X = new Uint32Array(15 * X);
                    for (let a = 0; a < Q; a++)
                        for (let d = 0; d < D; d++) {
                            var ca = a * D + d;
                            if (!M || M[a * D + d]) {
                                var ha;
                                const l = null != (ha = (c[ca] + 360) % 360 / 180 * Math.PI) ? ha : 2 * Math.PI * Math.random()
                                  , z = F(N[ca], f, b, S, x);
                                for (let J = 0; J < A.length; J += 2)
                                    ea[P++] = (d + .5) / D,
                                    ea[P++] = (a + .5) / Q,
                                    ea[P++] = A[J],
                                    ea[P++] = A[J + 1] + l,
                                    ea[P++] = z,
                                    ea[P++] = N[ca];
                                ca = 7 * (P / 42 - 1);
                                X[e++] = ca;
                                X[e++] = ca + 1;
                                X[e++] = ca + 2;
                                X[e++] = ca + 0;
                                X[e++] = ca + 4;
                                X[e++] = ca + 3;
                                X[e++] = ca + 0;
                                X[e++] = ca + 2;
                                X[e++] = ca + 3;
                                X[e++] = ca + 2;
                                X[e++] = ca + 5;
                                X[e++] = ca + 3;
                                X[e++] = ca + 5;
                                X[e++] = ca + 6;
                                X[e++] = ca + 3
                            }
                        }
                    return {
                        vertexData: ea,
                        indexData: X
                    }
                }
                function L(c, b) {
                    let f = 0
                      , t = 0;
                    const {width: k, height: x, mask: S} = c;
                    c = c.pixels[0];
                    const P = []
                      , e = [];
                    var D = h.fromJSON(b.inputUnit);
                    D = B(D, "knots");
                    b = "wind_speed" === b.style ? 5 : Number.MAX_VALUE;
                    for (let M = 0; M < x; M++)
                        for (let N = 0; N < k; N++) {
                            var Q = c[M * k + N] * D;
                            if ((!S || S[M * k + N]) && Q < b) {
                                for (let X = 0; 4 > X; X++)
                                    P[f++] = (N + .5) / k,
                                    P[f++] = (M + .5) / x,
                                    P[f++] = 2 > X ? -.5 : .5,
                                    P[f++] = 0 === X % 2 ? -.5 : .5,
                                    P[f++] = 0,
                                    P[f++] = Q;
                                Q = 4 * (f / 24 - 1);
                                e[t++] = Q;
                                e[t++] = Q + 1;
                                e[t++] = Q + 2;
                                e[t++] = Q + 1;
                                e[t++] = Q + 2;
                                e[t++] = Q + 3
                            }
                        }
                    return {
                        vertexData: new Float32Array(P),
                        indexData: new Uint32Array(e)
                    }
                }
                const n = new Map;
                n.set("meter-per-second", 1);
                n.set("kilometer-per-hour", .277778);
                n.set("knots", .514444);
                n.set("feet-per-second", .3048);
                n.set("mile-per-hour", .44704);
                const m = 180 / Math.PI
                  , h = new K.JSONMap({
                    esriMetersPerSecond: "meter-per-second",
                    esriKilometersPerHour: "kilometer-per-hour",
                    esriKnots: "knots",
                    esriFeetPerSecond: "feet-per-second",
                    esriMilesPerHour: "mile-per-hour"
                })
                  , A = function(c=0, b=0, f=Math.PI, t=!0) {
                    t && (f = (2 * Math.PI - f) % (2 * Math.PI));
                    t = t ? -1 : 1;
                    const k = -7 * t
                      , x = -2 * t
                      , S = -16 * t
                      , [P,e] = g(0, b + 13 * t, f, 21.75)
                      , [D,Q] = g(c - 5.5, b + k, f, 21.75)
                      , [M,N] = g(c + 5.5, b + k, f, 21.75)
                      , [X,ea] = g(c - 1.5, b + x, f, 21.75)
                      , [ca,ha] = g(c + 1.5, b + x, f, 21.75)
                      , [a,d] = g(c - 1.5, b + S, f, 21.75)
                      , [l,z] = g(c + 1.5, b + S, f, 21.75);
                    return [P, e, D, Q, X, ea, ca, ha, M, N, a, d, l, z]
                }(0, 0, 0)
                  , T = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63]
                  , Z = [0, .5, 1, 1.5, 2]
                  , V = [0, .25, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4]
                  , W = [];
                w.convertToLocalDirections = function(c, b, f, t="geographic") {
                    if (!v.isValidPixelBlock(c) || E.isNone(f))
                        return c;
                    c = "vector-magdir" === b ? c.clone() : E.unwrap(r(c, b));
                    const k = c.pixels[1];
                    for (let x = 0; x < k.length; x++)
                        k[x] = "geographic" === t ? (k[x] + f[x] + 270) % 360 : (k[x] + 360 - f[x]) % 360;
                    return "vector-magdir" === b ? c : r(c, "vector-magdir")
                }
                ;
                w.convertVectorFieldData = r;
                w.convertVectorFieldUnit = function(c, b, f=1) {
                    if (1 === f || !v.isValidPixelBlock(c))
                        return c;
                    c = c.clone();
                    const {pixels: t, width: k, height: x} = c
                      , S = t[0]
                      , P = t[1];
                    let e = 0;
                    for (let D = 0; D < x; D++)
                        for (let Q = 0; Q < k; Q++)
                            "vector-uv" === b ? (S[e] *= f,
                            P[e] *= f) : S[e] *= f,
                            e++;
                    c.updateStatistics();
                    return c
                }
                ;
                w.createVFMesh = function(c, b) {
                    if ("simple_scalar" === b.style)
                        var f = L(c, b);
                    else if ("wind_speed" === b.style) {
                        {
                            if (0 === W.length)
                                for (var t = 0; 30 > t; t++)
                                    W.push(p(5 * t, 0));
                            b = h.fromJSON(b.inputUnit);
                            b = B(b, "knots");
                            const {width: P, height: e, mask: D} = c;
                            t = c.pixels[0];
                            c = c.pixels[1];
                            const Q = []
                              , M = [];
                            let N = 0
                              , X = 0;
                            for (let ea = 0; ea < e; ea++)
                                for (let ca = 0; ca < P; ca++) {
                                    var k = ea * P + ca
                                      , x = t[k] * b;
                                    if ((!D || D[ea * P + ca]) && 5 <= x) {
                                        const ha = null != (f = (c[k] + 360) % 360 / 180 * Math.PI) ? f : 2 * Math.PI * Math.random()
                                          , {pennants: a, barbs: d, shaft: l} = W[Math.min(Math.floor(x / 5), 29)];
                                        if (0 === a.length + d.length)
                                            continue;
                                        k = Q.length / 6;
                                        const z = (ca + .5) / P
                                          , J = (ea + .5) / e;
                                        for (var S = 0; S < a.length; S += 2)
                                            Q[N++] = z,
                                            Q[N++] = J,
                                            Q[N++] = a[S],
                                            Q[N++] = a[S + 1] + ha,
                                            Q[N++] = 0,
                                            Q[N++] = x;
                                        for (S = 0; S < d.length; S += 2)
                                            Q[N++] = z,
                                            Q[N++] = J,
                                            Q[N++] = d[S],
                                            Q[N++] = d[S + 1] + ha,
                                            Q[N++] = 0,
                                            Q[N++] = x;
                                        for (S = 0; S < l.length; S += 2)
                                            Q[N++] = z,
                                            Q[N++] = J,
                                            Q[N++] = l[S],
                                            Q[N++] = l[S + 1] + ha,
                                            Q[N++] = 0,
                                            Q[N++] = x;
                                        for (x = 0; x < a.length / 6; x++)
                                            M[X++] = k,
                                            M[X++] = k + 1,
                                            M[X++] = k + 2,
                                            k += 3;
                                        for (x = 0; x < d.length / 8; x++)
                                            M[X++] = k,
                                            M[X++] = k + 1,
                                            M[X++] = k + 2,
                                            M[X++] = k + 1,
                                            M[X++] = k + 2,
                                            M[X++] = k + 3,
                                            k += 4;
                                        M[X++] = k + 0;
                                        M[X++] = k + 1;
                                        M[X++] = k + 2;
                                        M[X++] = k + 1;
                                        M[X++] = k + 3;
                                        M[X++] = k + 2;
                                        k += 4
                                    }
                                }
                            f = {
                                vertexData: new Float32Array(Q),
                                indexData: new Uint32Array(M)
                            }
                        }
                    } else
                        f = O(c, b);
                    return f
                }
                ;
                w.createVFMeshScalar = L;
                w.getUnitConversionFactor = B;
                w.sampleVectorField = function(c, b, f, t=[0, 0], k=.5) {
                    const {width: x, height: S, mask: P} = c
                      , [e,D] = c.pixels
                      , [Q,M] = t;
                    c = Math.round((x - Q) / f);
                    t = Math.round((S - M) / f);
                    var N = c * t;
                    const X = new Float32Array(N)
                      , ea = new Float32Array(N);
                    N = new Uint8Array(N);
                    b = "vector-uv" === b;
                    for (let ha = 0; ha < t; ha++)
                        for (let a = 0; a < c; a++) {
                            let d = 0;
                            const l = ha * c + a
                              , z = Math.max(0, ha * f + M)
                              , J = Math.max(0, a * f + Q)
                              , C = Math.min(S, z + f)
                              , y = Math.min(x, J + f);
                            for (let R = z; R < C; R++)
                                for (let G = J; G < y; G++) {
                                    var ca = R * x + G;
                                    if (!P || P[ca]) {
                                        d++;
                                        ca = b ? [e[ca], D[ca]] : [e[ca], (360 + D[ca]) % 360];
                                        const [Y,U] = b ? ca : H(ca);
                                        X[l] += Y;
                                        ea[l] += U
                                    }
                                }
                            if (d >= (C - z) * (y - J) * (1 - k)) {
                                N[l] = 1;
                                const [R,G] = u([X[l] / d, ea[l] / d]);
                                X[l] = R;
                                ea[l] = G
                            } else
                                N[l] = 0,
                                X[l] = 0,
                                ea[l] = 0
                        }
                    f = new I({
                        width: c,
                        height: t,
                        pixels: [X, ea],
                        mask: N
                    });
                    f.updateStatistics();
                    return f
                }
                ;
                w.snapImageToSymbolTile = function(c, b, f, t, k) {
                    if (E.isNone(k) || !k.spatialReference.equals(c.spatialReference))
                        return {
                            extent: c,
                            width: Math.round(b / t),
                            height: Math.round(f / t),
                            resolution: c.width / b
                        };
                    const x = k.xmin;
                    k = k.ymax;
                    b = (c.xmax - c.xmin) / b * t;
                    f = (c.ymax - c.ymin) / f * t;
                    c.xmin = x + Math.floor((c.xmin - x) / b) * b;
                    c.xmax = x + Math.ceil((c.xmax - x) / b) * b;
                    c.ymin = k + Math.floor((c.ymin - k) / f) * f;
                    c.ymax = k + Math.ceil((c.ymax - k) / f) * f;
                    return {
                        extent: c,
                        width: Math.round(c.width / b),
                        height: Math.round(c.height / f),
                        resolution: (b + f) / 2
                    }
                }
                ;
                w.unitKebabDict = h;
                w.uvComponentToVector = u;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/imagery/RasterVFTileContainer": function() {
            define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../geometry/support/aaBoundingRect ./BrushVectorField ./RasterVFTile ../webgl/enums ../webgl/TileContainer".split(" "), function(w, K, E, I, v, B, u) {
                u = function(H) {
                    function r() {
                        var g = H.apply(this, arguments) || this;
                        g.isCustomTilingScheme = !1;
                        g.symbolTypes = ["triangle"];
                        return g
                    }
                    K._inheritsLoose(r, H);
                    var p = r.prototype;
                    p.createTile = function(g) {
                        const q = this._tileInfoView.getTileBounds(E.create(), g)
                          , [F,O] = this._tileInfoView.tileInfo.size;
                        return new v.RasterVFTile(g,q[0],q[3],F,O)
                    }
                    ;
                    p.prepareRenderPasses = function(g) {
                        const q = g.registerRenderPass({
                            name: "imagery (vf tile)",
                            brushes: [I],
                            target: ()=>this.children.map(F=>F.tileData),
                            drawPhase: B.WGLDrawPhase.MAP
                        });
                        return [...H.prototype.prepareRenderPasses.call(this, g), q]
                    }
                    ;
                    p.doRender = function(g) {
                        this.visible && g.drawPhase === B.WGLDrawPhase.MAP && this.symbolTypes.forEach(q=>{
                            g.renderPass = q;
                            H.prototype.doRender.call(this, g)
                        }
                        )
                    }
                    ;
                    return r
                }(u);
                w.RasterVFTileContainer = u;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/imagery/RasterVFTile": function() {
            define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/mat3 ../../../../chunks/mat3f32 ./RasterVFDisplayObject ../webgl/TiledDisplayObject".split(" "), function(w, K, E, I, v, B) {
                B = function(u) {
                    function H(p, g, q, F, O, L=null) {
                        var n = u.call(this, p, g, q, F, O) || this;
                        n.tileData = new v.RasterVFDisplayObject(L);
                        n.tileData.coordScale = [F, O];
                        n.tileData.once("isReady", ()=>n.ready());
                        return n
                    }
                    K._inheritsLoose(H, u);
                    var r = H.prototype;
                    r.destroy = function() {
                        u.prototype.destroy.call(this);
                        this.tileData.destroy();
                        this.stage = this.tileData = null
                    }
                    ;
                    r._createTransforms = function() {
                        return {
                            dvs: I.create(),
                            tileMat3: I.create()
                        }
                    }
                    ;
                    r.setTransform = function(p, g) {
                        u.prototype.setTransform.call(this, p, g);
                        const q = g / (p.resolution * p.pixelRatio)
                          , F = this.transforms.tileMat3
                          , [O,L] = this.tileData.offset
                          , [n,m] = p.toScreenNoRotation([0, 0], [this.x + O * g, this.y - L * g]);
                        ({symbolTileSize: g} = this.tileData.symbolizerParameters);
                        E.set(F, Math.round((this.width - this.tileData.offset[0]) / g) * g / this.rangeX * q, 0, 0, 0, Math.round((this.height - this.tileData.offset[1]) / g) * g / this.rangeY * q, 0, n, m, 1);
                        E.multiply(this.transforms.dvs, p.displayViewMat3, F);
                        this.tileData.transforms.dvs = this.transforms.dvs
                    }
                    ;
                    r.onAttach = function() {
                        this.tileData.stage = this.stage
                    }
                    ;
                    r.onDetach = function() {
                        this.tileData.stage = null
                    }
                    ;
                    K._createClass(H, [{
                        key: "stencilRef",
                        get: function() {
                            return this.tileData.stencilRef
                        },
                        set: function(p) {
                            this.tileData.stencilRef = p
                        }
                    }]);
                    return H
                }(B.TiledDisplayObject);
                w.RasterVFTile = B;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/2d/engine/imagery/RasterVFDisplayObject": function() {
            define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../../../../chunks/vec2f32 ../../../../layers/support/rasterFunctions/vectorFieldUtils ../DisplayObject ../webgl/Utils ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/VertexArrayObject".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F) {
                E = function(O) {
                    function L(m=null) {
                        var h = O.call(this) || this;
                        h._source = null;
                        h._symbolizerParameters = null;
                        h._vaoInvalidated = !0;
                        h.coordScale = [1, 1];
                        h.height = null;
                        h.stencilRef = 0;
                        h.resolution = null;
                        h.pixelRatio = 1;
                        h.x = 0;
                        h.y = 0;
                        h.rotation = 0;
                        h.rawPixelData = null;
                        h.width = null;
                        h.source = m;
                        return h
                    }
                    K._inheritsLoose(L, O);
                    var n = L.prototype;
                    n.destroy = function() {
                        if (I.isSome(this.vaoData)) {
                            var m, h;
                            null == (m = this.vaoData.magdir) ? void 0 : m.vao.dispose();
                            null == (h = this.vaoData.scalar) ? void 0 : h.vao.dispose();
                            this.vaoData = null
                        }
                    }
                    ;
                    n.invalidateVAO = function() {
                        if (!this._vaoInvalidated && I.isSome(this.vaoData)) {
                            var m, h;
                            null == (m = this.vaoData.magdir) ? void 0 : m.vao.dispose();
                            null == (h = this.vaoData.scalar) ? void 0 : h.vao.dispose();
                            this.vaoData = null;
                            this._vaoInvalidated = !0;
                            this.requestRender()
                        }
                    }
                    ;
                    n.updateVectorFieldVAO = function(m) {
                        if (this._vaoInvalidated) {
                            this._vaoInvalidated = !1;
                            if (I.isSome(this.source) && I.isNone(this.vaoData)) {
                                var {style: h} = this.symbolizerParameters;
                                switch (h) {
                                case "beaufort_ft":
                                case "beaufort_km":
                                case "beaufort_kn":
                                case "beaufort_m":
                                case "beaufort_mi":
                                case "classified_arrow":
                                case "ocean_current_kn":
                                case "ocean_current_m":
                                case "single_arrow":
                                    h = H.createVFMesh(this.source, this.symbolizerParameters);
                                    this.vaoData = {
                                        magdir: this._createVectorFieldVAO(m.context, h)
                                    };
                                    break;
                                case "simple_scalar":
                                    h = H.createVFMeshScalar(this.source, this.symbolizerParameters);
                                    this.vaoData = {
                                        scalar: this._createVectorFieldVAO(m.context, h)
                                    };
                                    break;
                                case "wind_speed":
                                    {
                                        h = H.createVFMesh(this.source, this.symbolizerParameters);
                                        h = this._createVectorFieldVAO(m.context, h);
                                        const A = H.createVFMeshScalar(this.source, this.symbolizerParameters);
                                        m = this._createVectorFieldVAO(m.context, A);
                                        this.vaoData = {
                                            magdir: h,
                                            scalar: m
                                        }
                                    }
                                }
                            }
                            this.ready();
                            this.requestRender()
                        }
                    }
                    ;
                    n._createTransforms = function() {
                        return {
                            dvs: B.create()
                        }
                    }
                    ;
                    n.setTransform = function(m) {
                        const h = v.identity(this.transforms.dvs)
                          , [A,T] = m.toScreenNoRotation([0, 0], [this.x, this.y]);
                        var Z = this.resolution / this.pixelRatio / m.resolution;
                        const V = Z * this.width;
                        Z *= this.height;
                        const W = Math.PI * this.rotation / 180;
                        v.translate(h, h, u.fromValues(A, T));
                        v.translate(h, h, u.fromValues(V / 2, Z / 2));
                        v.rotate(h, h, -W);
                        v.translate(h, h, u.fromValues(-V / 2, -Z / 2));
                        v.scaleByVec2(h, h, u.fromValues(V, Z));
                        v.multiply(this.transforms.dvs, m.displayViewMat3, h)
                    }
                    ;
                    n.onAttach = function() {
                        this.invalidateVAO()
                    }
                    ;
                    n.onDetach = function() {
                        this.invalidateVAO()
                    }
                    ;
                    n._createVectorFieldVAO = function(m, h) {
                        const {vertexData: A, indexData: T} = h;
                        h = g.BufferObject.createVertex(m, q.Usage.STATIC_DRAW, new Float32Array(A));
                        const Z = g.BufferObject.createIndex(m, q.Usage.STATIC_DRAW, new Uint32Array(T))
                          , V = p.createProgramDescriptor("vector-field", {
                            geometry: [{
                                location: 0,
                                name: "a_pos",
                                count: 2,
                                type: q.DataType.FLOAT,
                                normalized: !1
                            }, {
                                location: 1,
                                name: "a_offset",
                                count: 2,
                                type: q.DataType.FLOAT,
                                normalized: !1
                            }, {
                                location: 2,
                                name: "a_vv",
                                count: 2,
                                type: q.DataType.FLOAT,
                                normalized: !1
                            }]
                        });
                        return {
                            vao: new F.VertexArrayObject(m,V.attributes,V.bufferLayouts,{
                                geometry: h
                            },Z),
                            elementCount: T.length
                        }
                    }
                    ;
                    K._createClass(L, [{
                        key: "symbolizerParameters",
                        get: function() {
                            return this._symbolizerParameters
                        },
                        set: function(m) {
                            JSON.stringify(this._symbolizerParameters) !== JSON.stringify(m) && (this._symbolizerParameters = m,
                            this.invalidateVAO())
                        }
                    }, {
                        key: "source",
                        get: function() {
                            return this._source
                        },
                        set: function(m) {
                            this._source = m;
                            this.invalidateVAO()
                        }
                    }]);
                    return L
                }(r.DisplayObject);
                w.RasterVFDisplayObject = E;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/layers/ImageryTileLayerView": function() {
            define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/Error ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/rasterFunctions/rasterProjectionHelper ./support/popupUtils".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F) {
                return O=>{
                    O = function(L) {
                        function n() {
                            var h = L.apply(this, arguments) || this;
                            h._rasterFieldPrefix = "Raster.";
                            h.layer = null;
                            h.view = null;
                            h.tileInfo = null;
                            return h
                        }
                        w._inheritsLoose(n, L);
                        var m = n.prototype;
                        m._getfullExtent = function() {
                            return this.projectFullExtent(this.view.spatialReference)
                        }
                        ;
                        m.supportsSpatialReference = function(h) {
                            return !!this.projectFullExtent(h)
                        }
                        ;
                        m.projectFullExtent = function(h) {
                            const A = v.unwrap(this.layer.fullExtent)
                              , T = q.getDefaultDatumTransformationForDataset(A, h, !1);
                            return q.projectExtent(A, h, T)
                        }
                        ;
                        m.fetchPopupFeatures = function() {
                            var h = w._asyncToGenerator(function*(A, T) {
                                const {layer: Z} = this;
                                if (!A)
                                    throw new I("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{
                                        layer: Z
                                    });
                                var {popupEnabled: V} = Z;
                                T = F.getFetchPopupTemplate(Z, T);
                                if (!V || v.isNone(T))
                                    throw new I("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{
                                        popupEnabled: V,
                                        popupTemplate: T
                                    });
                                V = [];
                                const {value: W, magdirValue: c} = yield Z.identify(A, {
                                    timeExtent: this.timeExtent
                                });
                                let b = "";
                                if (W && W.length) {
                                    var f, t;
                                    b = "imagery-tile" === Z.type && Z.hasStandardTime() && null != W[0] ? W.map(x=>Z.getStandardTimeValue(x)).join(", ") : W.join(", ");
                                    A = {
                                        ObjectId: 0
                                    };
                                    A["Raster.ServicePixelValue"] = this._formatAttributeValue(b, "Raster.ServicePixelValue");
                                    if ((T = null == (f = Z.rasterInfo) ? void 0 : null == (t = f.attributeTable) ? void 0 : t.features) && 0 < T.length && (f = T.filter(x=>String(x.attributes.value || x.attributes.Value || x.attributes.VALUE) === b),
                                    0 < f.length && (f = f[0])))
                                        for (var k in f.attributes)
                                            f.attributes.hasOwnProperty(k) && (t = this._rasterFieldPrefix + k,
                                            A[t] = this._formatAttributeValue(f.attributes[k], t));
                                    k = Z.rasterInfo.dataType;
                                    if ("vector-magdir" === k || "vector-uv" === k)
                                        A["Raster.Magnitude"] = null == c ? void 0 : c[0],
                                        A["Raster.Direction"] = null == c ? void 0 : c[1];
                                    k = new E(this.fullExtent.clone(),null,A);
                                    k.layer = Z;
                                    k.sourceLayer = k.layer;
                                    V.push(k)
                                }
                                return V
                            });
                            return function(A, T) {
                                return h.apply(this, arguments)
                            }
                        }();
                        m._formatAttributeValue = function(h, A) {
                            if ("string" === typeof h && (A = (A = this._getFieldInfo(this.layer.popupTemplate && this.layer.popupTemplate.fieldInfos, A)) && A.format)) {
                                let T, Z;
                                return h.trim().includes(",") ? (T = ",",
                                Z = T + " ",
                                this._formatDelimitedString(h, T, Z, A)) : h.trim().includes(" ") ? (T = Z = " ",
                                this._formatDelimitedString(h, T, Z, A)) : this._formatNumberFromString(h, A)
                            }
                            return h
                        }
                        ;
                        m._getFieldInfo = function(h, A) {
                            if (h && h.length && A) {
                                var T = A.toLowerCase()
                                  , Z = void 0;
                                h.some(V=>!V.fieldName || V.fieldName.toLowerCase() !== T && V.fieldName.toLowerCase() !== T.replace(/ /g, "_") ? !1 : (Z = V,
                                !0));
                                return Z
                            }
                        }
                        ;
                        m._formatDelimitedString = function(h, A, T, Z) {
                            return h && A && T && Z ? h.trim().split(A).map(V=>this._formatNumberFromString(V, Z)).join(T) : h
                        }
                        ;
                        m._formatNumberFromString = function(h, A) {
                            if (!h || !A)
                                return h;
                            const T = Number(h);
                            return isNaN(T) ? h : A.format(T)
                        }
                        ;
                        w._createClass(n, [{
                            key: "fullExtent",
                            get: function() {
                                return this._getfullExtent()
                            }
                        }, {
                            key: "hasTilingEffects",
                            get: function() {
                                return this.layer.renderer && "dynamicRangeAdjustment"in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment
                            }
                        }, {
                            key: "datumTransformation",
                            get: function() {
                                return q.getDefaultDatumTransformationForDataset(v.unwrap(this.layer.fullExtent), this.view.spatialReference, !0)
                            }
                        }]);
                        return n
                    }(O);
                    K.__decorate([B.property()], O.prototype, "layer", void 0);
                    K.__decorate([B.property(g.combinedViewLayerTimeExtentProperty)], O.prototype, "timeExtent", void 0);
                    K.__decorate([B.property()], O.prototype, "view", void 0);
                    K.__decorate([B.property()], O.prototype, "fullExtent", null);
                    K.__decorate([B.property()], O.prototype, "tileInfo", void 0);
                    K.__decorate([B.property({
                        readOnly: !0
                    })], O.prototype, "hasTilingEffects", null);
                    return O = K.__decorate([p.subclass("esri.views.layers.ImageryTileLayerView")], O)
                }
            })
        },
        "esri/views/layers/support/popupUtils": function() {
            define(["exports", "../../../chunks/_rollupPluginBabelHelpers", "../../../core/maybe", "../../../layers/support/fieldUtils"], function(w, K, E, I) {
                function v() {
                    v = K._asyncToGenerator(function*(B, u=B.popupTemplate) {
                        if (E.isNone(u))
                            return [];
                        const H = yield u.getRequiredFields(B.fieldsIndex);
                        ({lastEditInfoEnabled: u} = u);
                        const {objectIdField: r, typeIdField: p, globalIdField: g, relationships: q} = B;
                        if (H.includes("*"))
                            return ["*"];
                        u = u ? yield I.getFeatureEditFields(B) : [];
                        const F = I.fixFields(B.fieldsIndex, [...H, ...u]);
                        p && F.push(p);
                        F && r && B.fieldsIndex.has(r) && !F.includes(r) && F.push(r);
                        F && g && B.fieldsIndex.has(g) && !F.includes(g) && F.push(g);
                        q && q.forEach(O=>{
                            ({keyField: O} = O);
                            F && O && B.fieldsIndex.has(O) && !F.includes(O) && F.push(O)
                        }
                        );
                        return F
                    });
                    return v.apply(this, arguments)
                }
                w.getFetchPopupTemplate = function(B, u) {
                    return B.popupTemplate ? B.popupTemplate : E.isSome(u) && u.defaultPopupTemplateEnabled && E.isSome(B.defaultPopupTemplate) ? B.defaultPopupTemplate : null
                }
                ;
                w.getRequiredFields = function(B) {
                    return v.apply(this, arguments)
                }
                ;
                Object.defineProperties(w, {
                    __esModule: {
                        value: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "Module"
                    }
                })
            })
        },
        "esri/views/layers/RefreshableLayerView": function() {
            define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "), function(w, K, E, I, v, B, u, H, r, p) {
                return g=>{
                    g = function(q) {
                        function F() {
                            return q.apply(this, arguments) || this
                        }
                        w._inheritsLoose(F, q);
                        F.prototype.initialize = function() {
                            this.handles.add(v.on(()=>this.layer, "refresh", O=>{
                                this.doRefresh(O.dataChanged).catch(L=>{
                                    I.isAbortError(L) || E.getLogger(this.declaredClass).error(L)
                                }
                                )
                            }
                            ), "RefreshableLayerView")
                        }
                        ;
                        return F
                    }(g);
                    K.__decorate([B.property()], g.prototype, "layer", void 0);
                    return g = K.__decorate([p.subclass("esri.layers.mixins.RefreshableLayerView")], g)
                }
            })
        },
        "*noref": 1
    }
});
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Logger ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/flow/FlowView2D ./LayerView2D ./imagery/ImageryTileView2D ./imagery/VectorFieldTileView2D ./support/util ../../layers/ImageryTileLayerView ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "), function(w, K, E, I, v, B, u, H, r, p, g, q, F, O, L, n, m, h, A) {
    const T = I.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");
    I = function(Z) {
        function V() {
            var c = Z.apply(this, arguments) || this;
            c._useWebGLForProcessing = !0;
            c._useProgressiveUpdate = !0;
            c.subview = null;
            return c
        }
        w._inheritsLoose(V, Z);
        var W = V.prototype;
        W.update = function(c) {
            this.subview.update(c);
            this.notifyChange("updating")
        }
        ;
        W.isUpdating = function() {
            return !this.subview || this.subview.updating
        }
        ;
        W.attach = function() {
            this.layer.increaseRasterJobHandlerUsage();
            this._updateSubview();
            this.handles.add([B.watch(()=>{
                const {layer: c} = this;
                return {
                    bandIds: c.bandIds,
                    renderer: c.renderer,
                    interpolation: c.interpolation,
                    multidimensionalDefinition: c.multidimensionalDefinition
                }
            }
            , (c,b)=>{
                var f, t;
                const k = c.interpolation !== b.interpolation && ("majority" === c.interpolation || "majority" === b.interpolation) && n.canUseMajorityInterpolationOnDataSource(this.layer)
                  , x = c.renderer !== b.renderer && (null == (f = b.renderer) ? void 0 : f.type) !== (null == (t = c.renderer) ? void 0 : t.type);
                x && this._updateSubview();
                this.subview.redrawOrRefetch(c.multidimensionalDefinition !== b.multidimensionalDefinition || k || x).catch(S=>{
                    v.isAbortError(S) || T.error(S)
                }
                );
                this.notifyChange("updating")
            }
            ), B.watch(()=>{
                var c;
                return null != (c = this.layer.blendMode) ? c : "normal"
            }
            , c=>{
                this.subview.container.blendMode = c
            }
            , B.syncAndInitial), B.watch(()=>{
                var c;
                return null != (c = this.layer.effect) ? c : null
            }
            , c=>{
                this.subview.container.effect = c
            }
            , B.syncAndInitial), B.watch(()=>this.timeExtent, ()=>{
                this.subview.timeExtent = this.timeExtent;
                this.subview.redrawOrRefetch(!0).catch(c=>{
                    v.isAbortError(c) || T.error(c)
                }
                )
            }
            , B.initial)], "attach")
        }
        ;
        W.detach = function() {
            var c;
            this.handles.remove("attach");
            this.layer.decreaseRasterJobHandlerUsage();
            this._detachSubview(this.subview);
            null == (c = this.subview) ? void 0 : c.destroy();
            this.subview = null
        }
        ;
        W.moveStart = function() {
            this.requestUpdate()
        }
        ;
        W.viewChange = function() {
            this.requestUpdate()
        }
        ;
        W.moveEnd = function() {
            this.subview.moveEnd()
        }
        ;
        W.hitTest = function() {
            var c = w._asyncToGenerator(function*(b, f) {
                return [{
                    type: "graphic",
                    layer: this.layer,
                    mapPoint: b,
                    graphic: new E({
                        attributes: {},
                        geometry: b.clone()
                    })
                }]
            });
            return function(b, f) {
                return c.apply(this, arguments)
            }
        }();
        W.doRefresh = function() {
            return this.subview.doRefresh()
        }
        ;
        W._updateSubview = function() {
            var c = "vector-field" === this.layer.renderer.type ? "rasterVF" : "flow" === this.layer.renderer.type ? "flow" : "raster";
            if (this.subview) {
                var b;
                if (this.subview.type === c) {
                    this._attachSubview(this.subview);
                    return
                }
                this._detachSubview(this.subview);
                null == (b = this.subview) ? void 0 : b.destroy();
                this.subview = null
            }
            ({layer: b} = this);
            c = "rasterVF" === c ? new L({
                layer: b,
                layerView: this
            }) : "flow" === c ? new q({
                layer: b,
                layerView: this
            }) : new O({
                layer: b,
                layerView: this
            });
            "useWebGLForProcessing"in c && (c.useWebGLForProcessing = this._useWebGLForProcessing);
            "useProgressiveUpdate"in c && (c.useProgressiveUpdate = this._useProgressiveUpdate);
            "previousLOD"in c && (c.previousLOD = this.subview && "previousLOD"in this.subview && this.subview.previousLOD);
            this._attachSubview(c);
            this.subview = c;
            this.requestUpdate()
        }
        ;
        W._attachSubview = function(c) {
            c && !c.attached && (c.attach(),
            c.attached = !0,
            this.container.addChildAt(c.container, 0),
            c.container.blendMode = this.layer.blendMode,
            c.container.effect = this.layer.effect)
        }
        ;
        W._detachSubview = function(c) {
            null != c && c.attached && (this.container.removeChild(c.container),
            c.detach(),
            c.attached = !1)
        }
        ;
        w._createClass(V, [{
            key: "useWebGLForProcessing",
            get: function() {
                return this._useWebGLForProcessing
            },
            set: function(c) {
                this._useWebGLForProcessing = c;
                this.subview && "useWebGLForProcessing"in this.subview && (this.subview.useWebGLForProcessing = c)
            }
        }, {
            key: "useProgressiveUpdate",
            get: function() {
                return this._useWebGLForProcessing
            },
            set: function(c) {
                this._useProgressiveUpdate = c;
                this.subview && "useProgressiveUpdate"in this.subview && (this.subview.useProgressiveUpdate = c)
            }
        }]);
        return V
    }(m(A(F.LayerView2DMixin(h))));
    K.__decorate([u.property()], I.prototype, "subview", void 0);
    K.__decorate([u.property()], I.prototype, "useWebGLForProcessing", null);
    K.__decorate([u.property()], I.prototype, "useProgressiveUpdate", null);
    return I = K.__decorate([g.subclass("esri.views.2d.layers.ImageryTileLayerView2D")], I)
});
