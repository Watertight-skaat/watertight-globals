import { WatertightKeyCombo } from "./types";

/**
 * This Class is to interact with the foxpro form through chrome.webview.postMessage
 */
export default class Host {
	static post(method: string, params = {}) {
		try {
			(window as any).chrome.webview.postMessage({ method, params });
		} catch (error) {
			console.error(error);
		}
	}

	static actionMenu(id: string) { Host.post("actionMenu", { id }); }
	static attachmentMenu(id: string) { Host.post("attachmentMenu", { id }); }
	static switchThread(id: string) { Host.post("switchThread", { id }); }
	static contactsMenu() { Host.post("contactsMenu"); }
	static contactsValid() { Host.post("contactsValid"); }
	static keyPressed(keyCombo: WatertightKeyCombo) { Host.post("keyPressed", { keyCombo }); }
	static openItems(ids: string[]) { Host.post("openItems", ids) }
	static routeReport(
		enabledRoutes: Record<number, boolean>,
		enabledDrivers: Record<number, boolean>,
		enabledProducts: Record<number, boolean>,
		enabledFrequencies: Record<number, boolean>,
		ids: string[]
	) {
		Host.post("report", {
			enabledRoutes,
			enabledDrivers,
			enabledProducts,
			enabledFrequencies,
			ids
		})
	}
	static openRouteMap(enabledRoutes: Record<number, boolean>,
		enabledDrivers: Record<number, boolean>,
		enabledProducts: Record<number, boolean>,
		enabledFrequencies: Record<number, boolean>,
		ids: string[]
	) {
		Host.post("map", {
			enabledRoutes,
			enabledDrivers,
			enabledProducts,
			enabledFrequencies,
			ids
		})
	}
	/** Used in Watertight Home screen */
	static downloadUpdate() { Host.post("downloadUpdate"); }
	/** Used in Watertight Home screen */
	static patchUpdate() { Host.post("patchUpdate"); }
	/** Used in Watertight Home screen */
	static applyUpdate() { Host.post("applyUpdate"); }
	/** Used in Watertight Home screen */
	static showUpdateDescription() { Host.post("showUpdateDescription"); }
	/** Used in Watertight Home screen */
	static performMenuAction(id: any) { Host.post("menuAction", { id }); }
	/** Used in Watertight Home screen */
	static selectNotification() { Host.post("notificationSelected", { }); }
}