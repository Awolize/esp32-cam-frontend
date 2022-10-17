<script>
	import VideoPlayer from './VideoPlayer.svelte';

	const url = 'api/new_video/';
	async function apiBackend() {
		console.log('apiBackend');
		let res = await fetch(url);
		console.log(res);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Timelapse</h1>
	<p>From the esp32 cam</p>

	<VideoPlayer />

	<button on:click={apiBackend}>Generate new video</button>
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
