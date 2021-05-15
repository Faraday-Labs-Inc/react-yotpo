declare global {
    interface Window {
        yotpo?: {
            refreshWidgets: Function;
        };
    }
}
/**
 * Forces Yotpo widgets to update when a React component mounts. This
 * refresh is debounced so that it does not repeatedly occur.
 *
 * @param debounceTime the amount of time (in milliseconds) the refresh
 *  call should be debounced. The default time is 200 milliseconds
 *
 * @returns undefined
 */
export declare function useYotpoRefresh(debounceTime?: number): void;
