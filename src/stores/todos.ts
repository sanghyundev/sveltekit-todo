import type { Todo } from '$types';
import { writable } from 'svelte/store';
import supabase from '../supabase';

export const todos = writable<Todo[]>([]);

export const loadTodos = async (): Promise<void> => {
	const { data, error } = await supabase.from<Todo>('todos').select();

	if (error !== null) {
		return console.error(error);
	}

	todos.set(data);
};

export const createTodo = async (text: string, user_id: string): Promise<void> => {
	const { data, error } = await supabase.from<Todo>('todos').insert({ text, user_id });

	if (error !== null) {
		return console.error(error);
	}

	todos.update((prevTodos) => [data[0], ...prevTodos]);
};

export const deleteTodo = async (id: string): Promise<void> => {
	const { error } = await supabase.from<Todo>('todos').delete().match({ id });

	if (error !== null) {
		return console.error(error);
	}

	todos.update((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id: string, currentState: boolean): Promise<void> => {
	const { error } = await supabase
		.from<Todo>('todos')
		.update({ completed: !currentState })
		.match({ id });

	if (error !== null) {
		return console.error(error);
	}

	todos.update((prevTodos) =>
		prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
	);
};
