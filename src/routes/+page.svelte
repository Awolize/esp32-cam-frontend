<script>
	import VideoPlayer from './VideoPlayer.svelte';

	async function generate_video() {
		const url = 'api/new_video/';

		console.log('generate_video');
		let res = await fetch(url);
		console.log(res);
	}

	async function fetch_info() {
		const url = 'api/fetch_info/';

		console.log('update_info');
		let res = await fetch(url);
		console.log(res);
	}
</script>

<svelte:head>
	<title>Timelapse of kefir & algae</title>
	<meta
		name="description"
		content="Timelapse of kefir & algae in my kitchen window (recorded with an esp32 cam)"
	/>
</svelte:head>

<section>
	<h1 class="text-5xl underline text-stone-200 my-1">Timelapse</h1>
	<h2 class="text-2xl text-stone-200 my-1">Kefir & algae</h2>
	<p class="text-1xl text-stone-200 my-1">From an esp32 cam</p>

	<VideoPlayer />
	<div class="inline-flex">
		<button
			on:click={fetch_info}
			class="bg-stone-600 hover:bg-stone-500 text-stone-100 py-2 px-4 rounded-l">Update info (WIP)</button
		>
		<button
			on:click={generate_video}
			class="bg-stone-600 hover:bg-stone-500 text-stone-100 py-2 px-4"
			>Add new frames to video</button
		>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
