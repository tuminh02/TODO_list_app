import html from "../core.js";

export default function header(){
    return html`
        <header class="header">
            <h1>todos</h1>
            <input
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus
                onkeyup = "event.keyCode === 13 && dispatch('add',this.value.trim())"
            >
        </header>
    `;
}
