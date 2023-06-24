import html from "../core.js";
import header from "../component/header.js";
import todoList from "../component/todoList.js";
import footer from "../component/footer.js";
import {connect} from "../store.js"

export default connect() (function app({todos}){
    return html`
    <section class="todoapp">
        ${header()}
        ${todos.length > 0 && todoList()}
        ${todos.length > 0 && footer()}
    </section>
    `;
})