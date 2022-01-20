<script lang="ts">
	import Todo from '$lib/Todo.svelte';
	import TodoForm from '$lib/TodoForm.svelte';
	import { todos } from '$store/todos';
</script>

<main>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Svelte Todos</h1>
	<TodoForm />
	{#each $todos as todo}
		<Todo {todo} />
	{/each}
</main>
