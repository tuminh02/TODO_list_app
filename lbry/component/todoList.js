
import html from "../core.js";
import todoItem from "../component/todoItem.js";
import {connect} from "../store.js"

export default connect() (function todoList({todos,filter, filters,editIndex}){
    return html`
            <section class="main">
                    <input 
                        id="toggle-all" 
                        class="toggle-all" 
                        type="checkbox"
                        onchange = "dispatch('toggeAll',this.checked)"
                        ${todos.every(filters.completed) && 'checked'}
                    >
                    <label for="toggle-all">Mark all as complete</label>
                    <ul class="todo-list">
                        ${todos.filter(filters[filter]).map((todo,index) => todoItem(todo, index, editIndex))}
                        
                    </ul>
			</section>
    `
});



