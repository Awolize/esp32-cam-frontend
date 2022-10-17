// @ts-nocheck
import { json } from '@sveltejs/kit';

const url = 'http://backend:5000/api/fetch_info/';
async function apiBackend() {
	console.log('fetch_info');
	let res = await fetch(url);
	let data = await res.json();
	console.log('Reponse status:' + res.status);
	console.log(data);
	return data;
}

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	let content = await apiBackend();

	return json({
		// retrieve a specific header
		content
	});
}
