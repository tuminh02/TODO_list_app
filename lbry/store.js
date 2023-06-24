
import { createStore } from "../lbry/core.js";
import reducer from "../lbry/reducer.js";
import withLogger from "./logger.js"

const {attach,connect,dispatch} = createStore(withLogger(reducer));

window.dispatch = dispatch

export {
    attach,
    connect
}
