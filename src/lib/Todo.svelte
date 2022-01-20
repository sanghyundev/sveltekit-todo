<script lang="ts">
	import { deleteTodo, toggleTodoCompleted } from '$store/todos';
	import type { Todo } from '$types';

	export let todo: Todo;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
	<input
		name="completed"
		class="mr-2 h-5 w-5"
		type="checkbox"
		checked={todo.completed}
		on:change={() => toggleTodoCompleted(todo.id, todo.completed)}
	/>
	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
		{todo.text}
	</span>
	<button
		type="button"
		class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none"
		on:click={() => deleteTodo(todo.id)}
	>
		Delete
	</button>
</li>
