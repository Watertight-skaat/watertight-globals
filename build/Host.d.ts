import { WatertightKeyCombo } from "./types";
/**
 * Author: Nick S.?
 * This Class is to interact with the foxpro form through chrome.webview.postMessage
 */
export default class Host {
    static post(method: string, params?: {}): void;
    static actionMenu(id: string): void;
    static attachmentMenu(id: string): void;
    static switchThread(id: string): void;
    static contactsMenu(): void;
    static contactsValid(): void;
    static keyPressed(keyCombo: WatertightKeyCombo): void;
    static openItems(ids: string[]): void;
    static routeReport(enabledRoutes: Record<number, boolean>, enabledDrivers: Record<number, boolean>, enabledProducts: Record<number, boolean>, enabledFrequencies: Record<number, boolean>, ids: string[]): void;
    static openRouteMap(enabledRoutes: Record<number, boolean>, enabledDrivers: Record<number, boolean>, enabledProducts: Record<number, boolean>, enabledFrequencies: Record<number, boolean>, ids: string[]): void;
    /** Used in Watertight Home screen */
    static downloadUpdate(): void;
    /** Used in Watertight Home screen */
    static patchUpdate(): void;
    /** Used in Watertight Home screen */
    static applyUpdate(): void;
    /** Used in Watertight Home screen */
    static showUpdateDescription(): void;
    /** Used in Watertight Home screen */
    static performMenuAction(id: any): void;
    /** Used in Watertight Home screen */
    static selectNotification(): void;
}
