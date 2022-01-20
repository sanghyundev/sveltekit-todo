<script lang="ts">
	import { user } from '$store/user';

	import { createTodo } from '../stores/todos';

	let todo = '';
	$: disabled = todo.trim() === '';

	const handleSubmit = () => {
		if (disabled) return;
		createTodo(todo.trim(), $user.id);
		todo = '';
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold mb-2 text-gray-800" for="todo">Create New Todo</label>
		<input
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
			type="text"
			name="todo"
			placeholder="Watcha gotta do?"
			bind:value={todo}
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm bg-blue-400 rounded hover:bg-blue-500 text-white py-2 px-4 uppercase disabled:bg-gray-300"
		{disabled}
	>
		Submit
	</button>
</form>
