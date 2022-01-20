<script lang="ts">
	import supabase from '../supabase';
	let loading = false;
	let email = '';

	$: disabled = email.trim() === '';

	const handleLogin = async () => {
		try {
			loading = true;
			console.log(email);
			const { error } = await supabase.auth.signIn({ email });
			if (error !== null) throw error;
			email = '';
			alert('Check your email for the login link!');
		} catch (error) {
			console.error(error);
			alert(error.error_description || error.message || error);
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log In</h1>
<p class="text-center mt-2">Sign in via magic link with your emial below.</p>

<form on:submit|preventDefault={handleLogin}>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold mb-2 text-gray-800" for="email">Email</label>
		<input
			class="appearance-none shadow-sm border border-gray-200 p-2 mb-2 focus:outline-none focus:border-gray-500 rounded-lg"
			type="email"
			name="email"
			placeholder="Your Email"
			bind:value={email}
		/>
		<button
			type="submit"
			class="w-full shadow-sm rounded bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 disabled:bg-gray-300"
			{disabled}
		>
			Log In
		</button>
	</div>
</form>
