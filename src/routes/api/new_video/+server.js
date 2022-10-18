// @ts-nocheck
import { json } from '@sveltejs/kit';

const url = import.meta.env.VITE_PUBLIC_IP + '/api/new_video/';
async function apiBackend() {
	console.log('new_video');
	console.log(url);
	let res = await fetch(url);
	console.log('Reponse status:' + res.status);
}

/** @type {import('./$types').RequestHandler} */
export async function GET(_) {
	await apiBackend();

	return json({ status: 200, body: 'ok' });
}
