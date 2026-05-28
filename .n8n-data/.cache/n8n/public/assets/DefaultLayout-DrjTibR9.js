import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-D8TcGee-.js";
import "./src-SPA_8e-g.js";
import "./users.store-CSEBKSQV.js";
import "./sanitize-html-Bm7Ej2cW.js";
import "./MainSidebarHeader-wLFPYlh8.js";
import { t as BaseLayout_default } from "./BaseLayout-Y3xdoS4G.js";
import "./constants-BCpQwEVD.js";
import "./merge-CzlYFyOF.js";
import "./_baseOrderBy-CFCRztYo.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dke-0Arw.js";
import "./versions.store-CT0AB7kU.js";
import "./usePageRedirectionHelper-BEVzfc9L.js";
import "./useBugReporting-CznVGdS3.js";
import "./canvas.utils-CV4tJ8Ua.js";
import "./KeyboardShortcutTooltip-DgIfdmz4.js";
import "./sourceControl.eventBus-qDEsAf3U.js";
import "./useKeybindings-WUEYXccg.js";
import "./personalizedTemplatesV3.store-Dn7txAoj.js";
import "./useGlobalEntityCreation-C8EvgAAH.js";
import "./useSettingsItems-BARyPXdd.js";
import { t as AppSidebar_default } from "./AppSidebar-CJu2R52J.js";
var DefaultLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(AppSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DefaultLayout_default as default };
