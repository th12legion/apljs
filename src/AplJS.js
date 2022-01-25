import {polifills} from "./polyfills/polyfills.js";
import App from "./core/Core.js";

var AplJS = {};
AplJS.App = App;

if (typeof window!="undefined"){
	window.AplJS = AplJS;
}

export default AplJS;