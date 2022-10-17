// @ts-nocheck
import { json } from '@sveltejs/kit';

const url = 'http://backend:5000/api/clear_images/';
async function apiBackend() {
	console.log('clear_images');
	let res = await fetch(url);
	console.log('Reponse status:' + res.status);
}

/** @type {import('./$types').RequestHandler} */
export async function GET(_) {
	await apiBackend();

	return json({ status: 200, body: 'ok' });
}
