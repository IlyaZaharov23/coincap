import { black, bluePrimary, hoverGray, semiDarkGray, white } from "./colors";

export const dangerouslySetInnerHTMLString = `
html[data-hydrated="true"] #app-initial-loader{display:none;}
#app-initial-loader{position:fixed;inset:0;display:grid;place-items:center;background:${white};color:${bluePrimary};z-index:2147483647;}
@media (prefers-color-scheme: dark){#app-initial-loader{background:${black};color:${hoverGray};}}
#app-initial-loader__spinner{width:48px;height:48px;border-radius:9999px;border:4px solid ${semiDarkGray};border-top-color:currentColor;animation:app-initial-loader-spin .9s linear infinite;}
@keyframes app-initial-loader-spin{to{transform:rotate(360deg);}}
                        `;
