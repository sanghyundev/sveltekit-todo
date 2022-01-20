<script lang="ts">
	import Auth from '$lib/Auth.svelte';
	import supabase from '../supabase';
	import { user } from '$store/user';
	import '../app.css';
	import { loadTodos } from '$store/todos';
	import Navbar from '$lib/Navbar.svelte';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		user.set(supabase.auth.user());
	});

	$: {
		if ($user !== null) {
			loadTodos();
		}
	}

	const { data } = supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user ? session.user : null);
	});

	onDestroy(data?.unsubscribe);
</script>

<div class="mx-auto my-6 max-w-lg container">
	{#if $user === null}
		<Auth />
	{:else}
		<Navbar />
		<slot />
	{/if}
</div>
