"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author: Nick S.?
 * This Class is to interact with the foxpro form through chrome.webview.postMessage
 */
class Host {
    static post(method, params = {}) {
        try {
            window.chrome.webview.postMessage({ method, params });
        }
        catch (error) {
            console.error(error);
        }
    }
    static actionMenu(id) { Host.post("actionMenu", { id }); }
    static attachmentMenu(id) { Host.post("attachmentMenu", { id }); }
    static switchThread(id) { Host.post("switchThread", { id }); }
    static contactsMenu() { Host.post("contactsMenu"); }
    static contactsValid() { Host.post("contactsValid"); }
    static keyPressed(keyCombo) { Host.post("keyPressed", { keyCombo }); }
    static openItems(ids) { Host.post("openItems", ids); }
    static routeReport(enabledRoutes, enabledDrivers, enabledProducts, enabledFrequencies, ids) {
        Host.post("report", {
            enabledRoutes,
            enabledDrivers,
            enabledProducts,
            enabledFrequencies,
            ids
        });
    }
    static openRouteMap(enabledRoutes, enabledDrivers, enabledProducts, enabledFrequencies, ids) {
        Host.post("map", {
            enabledRoutes,
            enabledDrivers,
            enabledProducts,
            enabledFrequencies,
            ids
        });
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
    static performMenuAction(id) { Host.post("menuAction", { id }); }
    /** Used in Watertight Home screen */
    static selectNotification() { Host.post("notificationSelected", {}); }
}
exports.default = Host;
