import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { vt as useI18n } from "./_MapCache-D8TcGee-.js";
import { Vt as useRouter } from "./src-SPA_8e-g.js";
import { mr as useToast, t as useUsersStore } from "./users.store-CSEBKSQV.js";
import "./sanitize-html-Bm7Ej2cW.js";
import { Vo as VIEWS } from "./constants-BCpQwEVD.js";
import "./merge-CzlYFyOF.js";
import "./_baseOrderBy-CFCRztYo.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dke-0Arw.js";
var SignoutView_default = /* @__PURE__ */ defineComponent({
	__name: "SignoutView",
	setup(__props) {
		const usersStore = useUsersStore();
		const toast = useToast();
		const router = useRouter();
		const i18n = useI18n();
		const logout = async () => {
			try {
				await usersStore.logout();
				window.location.href = router.resolve({ name: VIEWS.SIGNIN }).href;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signout.error"));
			}
		};
		onMounted(() => {
			logout();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
export { SignoutView_default as default };
