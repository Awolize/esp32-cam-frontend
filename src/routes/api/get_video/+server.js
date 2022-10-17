// @ts-nocheck
import { json } from '@sveltejs/kit';

const url = 'http://backend:5000/api/get_video/';
async function apiBackend() {
	console.log('fetch_info');
	let res;
	try {
		res = await fetch(url);
	} catch (error) {
		console.log(error);
		return;
	}
	console.log('Reponse status:' + res.status);
	return res;
}

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	let content = await apiBackend();

	return content;
}
