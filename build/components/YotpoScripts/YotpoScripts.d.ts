import { FC } from 'react';
export declare type YotpoScriptsProps = {};
export declare type HtmlScript = {
    defer?: boolean;
    async?: boolean;
    src: string;
    type: string;
};
export declare const YOTPO_SCRIPTS: HtmlScript[];
/**
 * Embeds the Yotpo widget script into the dom
 */
declare const YotpoScripts: FC<YotpoScriptsProps>;
export default YotpoScripts;
