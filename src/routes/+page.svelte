<script>
import VideoPlayer from './VideoPlayer.svelte';

	async function generate_video() {
		const url = 'api/new_video/';

		console.log('generate_video');
		let res = await fetch(url);
		console.log(res);
	}

    // @ts-ignore
    let promise = fetch_info()
	// @ts-ignore
	async function fetch_info() {
		const url = 'api/fetch_info/';
        console.log(url);
        return fetch(url).then((res) => res.json());
	}

    function btn_fetch_info() {
        promise = fetch_info()
    }
</script>

<svelte:head>
	<title>Timelapse of kefir & algae</title>
	<meta
		name="description"
		content="Timelapse of kefir & algae in my kitchen window (recorded with an esp32 cam)"
	/>
</svelte:head>

<section class="text-stone-200">
	<h1 class="text-5xl underline text-stone-200 my-1">Timelapse</h1>
	<h2 class="text-2xl text-stone-200 my-1">Kefir & algae</h2>
	<p class="text-1xl text-stone-200 my-1">From an esp32 cam</p>

	<VideoPlayer />
	<div class="inline-flex">
		<button
			on:click={btn_fetch_info}
			class="bg-stone-600 hover:bg-stone-500 text-stone-100 py-2 px-4 rounded-l">Update info (WIP)</button
		>
		<button
			on:click={generate_video}
			class="bg-stone-600 hover:bg-stone-500 text-stone-100 py-2 px-4"
			>Add new frames to video</button
		>
	</div>

    {#await promise}
        <div>
            <p>Waiting...</p>
        </div>
    {:then json}
    
        <div>
            <ul>
                <li>{new Date(json.last_updated * 1000).toLocaleString()}</li>
                <li>Proccessed <span class="text-white text-bold text-lg">{json.len}</span> image(s)</li>
            </ul>
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
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

</style>
