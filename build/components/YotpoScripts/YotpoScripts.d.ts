import { FC } from 'react';
export declare type YotpoScriptsProps = {};
export declare type HtmlScript = {
    defer?: boolean;
    async?: boolean;
    src: string;
    type: string;
};
/**
 * Embeds the Yotpo widget script into the dom
 */
declare const YotpoScripts: FC<YotpoScriptsProps>;
export default YotpoScripts;
