import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-D8TcGee-.js";
import "./src-SPA_8e-g.js";
import { s as useWorkflowsStore } from "./users.store-CSEBKSQV.js";
import "./sanitize-html-Bm7Ej2cW.js";
import { t as BaseLayout_default } from "./BaseLayout-Y3xdoS4G.js";
import "./constants-BCpQwEVD.js";
import "./merge-CzlYFyOF.js";
import "./_baseOrderBy-CFCRztYo.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dke-0Arw.js";
import "./useClipboard-D1BjwiWW.js";
import "./executions.store-cNiF9DKu.js";
import "./assistant.store-CKrMb6VW.js";
import "./chatPanel.store-BpnUuAbe.js";
import "./RunData-4tKL-ZfY.js";
import "./NDVEmptyState-C230vcAk.js";
import "./externalSecrets.ee.store-Ci87l6zy.js";
import "./usePinnedData-DwKpqjql.js";
import "./nodeCreator.store-B7cAg8d-.js";
import "./canvas.utils-CV4tJ8Ua.js";
import "./nodeIcon-DrqvMEF9.js";
import "./useCanvasOperations-DLkvSY8-.js";
import "./folders.store-CaNbvtTa.js";
import "./RunDataHtml-CSkM1FA7.js";
import "./NodeIcon-D5r70m3X.js";
import "./useRunWorkflow-47Pp95sZ.js";
import "./pushConnection.store-CJNxTCAE.js";
import "./vue-json-pretty-Ddz7mnwe.js";
import "./collaboration.store-B1C3TeC7.js";
import "./dateFormatter-Nrjcfz8O.js";
import "./useExecutionHelpers-d49LOs2N.js";
import "./KeyboardShortcutTooltip-DgIfdmz4.js";
import "./useKeybindings-WUEYXccg.js";
import "./useLogsTreeExpand-CGZH__wV.js";
import { t as LogsPanel_default } from "./LogsPanel-Cyv_yRgM.js";
import "./AnimatedSpinner-dV_K88D1.js";
import "./ChatFile-BrXPjWV7.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };
