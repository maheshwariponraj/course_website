globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"bac-Pt+vnEqSWooF2TKHwvGNMePeI+s\"",
		"mtime": "2026-08-12T10:11:10.235Z",
		"size": 2988,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-12T10:11:10.236Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/CTASection-DVGjoYf4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c6-hmnthvuC7F6UMhTDxu/xJIs/m4g\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 966,
		"path": "../public/assets/CTASection-DVGjoYf4.js"
	},
	"/assets/ContactForm-D0p5I5bi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee63-TrBPjzpa9feQzKvyUXU28tyTbqs\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 61027,
		"path": "../public/assets/ContactForm-D0p5I5bi.js"
	},
	"/assets/CourseGrid-DpKOH8_6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb8-eI3gHhTSYpTiM6gelc5M3S/wspY\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 4024,
		"path": "../public/assets/CourseGrid-DpKOH8_6.js"
	},
	"/assets/FAQ-Cx-M-KFg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5970-InoBAs39jqjN8Y90G/t4n8IB0fU\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 22896,
		"path": "../public/assets/FAQ-Cx-M-KFg.js"
	},
	"/assets/ProjectCard-D_YrR0oU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e0-WiOMw1JWZ/tQyl42HPeVcSUJ6Rk\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 992,
		"path": "../public/assets/ProjectCard-D_YrR0oU.js"
	},
	"/assets/Section-DnoCwRmT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36c-vKPrpBD+fIdV4/kXJURbw+4s1rY\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 876,
		"path": "../public/assets/Section-DnoCwRmT.js"
	},
	"/assets/_slug-bumKNDoh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19ed-e37G5sLnvNQMZq+MmiAOD2KN+kI\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 6637,
		"path": "../public/assets/_slug-bumKNDoh.js"
	},
	"/assets/about-B9mDJKAd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6d-pSlOAVqZgA7vjpcoUfdVq3eMHgI\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 2669,
		"path": "../public/assets/about-B9mDJKAd.js"
	},
	"/assets/badge-check-BDAtYVp2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"131-OqKtlGeuc1MN/Xh5o1nLCbr/EuQ\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 305,
		"path": "../public/assets/badge-check-BDAtYVp2.js"
	},
	"/assets/button-Ceg4Yvr3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3dd1-VCKKpXDu1TKiJJmSegmwuUiOn0U\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 15825,
		"path": "../public/assets/button-Ceg4Yvr3.js"
	},
	"/assets/circle-check-ChlRAo7h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-EohZkT+weh2HhjBd9VJRa/L+Euk\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 167,
		"path": "../public/assets/circle-check-ChlRAo7h.js"
	},
	"/assets/courses-Dsd6WfeB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"386-VulnCDCbL63RGfFYkzqrd6B9d88\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 902,
		"path": "../public/assets/courses-Dsd6WfeB.js"
	},
	"/assets/contact-DK51VJ3H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"946-troYvtJElRiD/PiIQLvednsGLgw\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 2374,
		"path": "../public/assets/contact-DK51VJ3H.js"
	},
	"/assets/hero-learning-CMcAnMSa.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fa22-kFN9dWouDOE15+08qG1aOytN0Ww\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 129570,
		"path": "../public/assets/hero-learning-CMcAnMSa.jpg"
	},
	"/assets/ilai-logo-CfBe_hMk.png": {
		"type": "image/png",
		"etag": "\"41d41-hK6tZYeM/QZk8pd85ZrQW138+VY\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 269633,
		"path": "../public/assets/ilai-logo-CfBe_hMk.png"
	},
	"/assets/placements-D_Ipfw_A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"afc-2a4AcvVc46OrRanabiqi6WNXY6s\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 2812,
		"path": "../public/assets/placements-D_Ipfw_A.js"
	},
	"/assets/presentation-BAm2XL2x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5fd-NJNVByj8QcdzfcBEWBPSc9IolbI\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 1533,
		"path": "../public/assets/presentation-BAm2XL2x.js"
	},
	"/assets/privacy-policy-CYfbFr9T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"612-rlBSIisqbZI1zM5xCdeAD2ipuAI\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 1554,
		"path": "../public/assets/privacy-policy-CYfbFr9T.js"
	},
	"/assets/programs-DbwT3EL0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca7-s19cUhU17A4jOPv1P4rdIwI1osw\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 3239,
		"path": "../public/assets/programs-DbwT3EL0.js"
	},
	"/assets/project-dashboard-CXKw_NIL.jpg": {
		"type": "image/jpeg",
		"etag": "\"d117-PZDZqmtj/xRxMF4AmNMHIn5wZBI\"",
		"mtime": "2026-08-12T10:11:08.242Z",
		"size": 53527,
		"path": "../public/assets/project-dashboard-CXKw_NIL.jpg"
	},
	"/assets/project-ecommerce-ByBdof7x.jpg": {
		"type": "image/jpeg",
		"etag": "\"d411-ijPKm5svk+bDOVMiJCGXHzV8jII\"",
		"mtime": "2026-08-12T10:11:08.242Z",
		"size": 54289,
		"path": "../public/assets/project-ecommerce-ByBdof7x.jpg"
	},
	"/assets/project-sms-BvaDXHXw.jpg": {
		"type": "image/jpeg",
		"etag": "\"dcac-ZcfAokcJQQC1rjywb6TCs0wxuQ4\"",
		"mtime": "2026-08-12T10:11:08.242Z",
		"size": 56492,
		"path": "../public/assets/project-sms-BvaDXHXw.jpg"
	},
	"/assets/index-u1nRT4Si.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61de5-Jia7GCmTn8jY9L5D2y9bL89ptJQ\"",
		"mtime": "2026-08-12T10:11:08.240Z",
		"size": 400869,
		"path": "../public/assets/index-u1nRT4Si.js"
	},
	"/assets/project-uiux-CW8WE58Y.jpg": {
		"type": "image/jpeg",
		"etag": "\"a686-wS2cMvLSKJ+LP3uQq+gAFvoqlqY\"",
		"mtime": "2026-08-12T10:11:08.242Z",
		"size": 42630,
		"path": "../public/assets/project-uiux-CW8WE58Y.jpg"
	},
	"/assets/projects-CCnALpst.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"338-6oZu9mSc4/0/t0rWHyU8X7enyCI\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 824,
		"path": "../public/assets/projects-CCnALpst.js"
	},
	"/assets/routes-DweB6nyi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d2a-vTTqByRufJTBj1BISj1ieI4OFq4\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 15658,
		"path": "../public/assets/routes-DweB6nyi.js"
	},
	"/assets/signal-CXH-3WsQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27c-PBMNkaRCxovS0IQGyzbzAH6Vu1A\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 636,
		"path": "../public/assets/signal-CXH-3WsQ.js"
	},
	"/assets/terms-C_-7kdG4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65a-tj5vFPpWzdvpw1WfViICYh+5zS8\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 1626,
		"path": "../public/assets/terms-C_-7kdG4.js"
	},
	"/assets/styles-N5vo5esE.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14b25-jEHvmCM9vagFLIdPpc2vFj5wDss\"",
		"mtime": "2026-08-12T10:11:08.242Z",
		"size": 84773,
		"path": "../public/assets/styles-N5vo5esE.css"
	},
	"/assets/utils-C9WOu9ye.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e5a-GoamjWOsZMrHhb98lUGmm5P8XCU\"",
		"mtime": "2026-08-12T10:11:08.241Z",
		"size": 28250,
		"path": "../public/assets/utils-C9WOu9ye.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_p_b93W = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_p_b93W
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
