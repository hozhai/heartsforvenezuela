<script lang="ts">
	import * as m from '../paraglide/messages';

	import Navbar from '$lib/components/ui/Navbar.svelte';

	import SparklesText from '$lib/components/ui/SparklesText.svelte';
	import InfiniteScrollingCards from '$lib/components/ui/InfiniteScrollingCards.svelte';
	import NumberTicker from '$lib/components/ui/NumberTicker.svelte';

	import { Info, Smile } from 'lucide-svelte';

	let current_donated = 32149;

	let { data } = $props();
</script>

<svelte:head>
	<title>Hearts for Venezuela</title>
</svelte:head>

<Navbar />

<header class="flex flex-col items-center justify-center bg-amber-50 py-32">
	<div class="flex flex-col items-center space-x-0 lg:flex-row">
		<div class="relative flex flex-col items-center justify-center lg:block">
			<h1 class="font-display w-[80%] text-center text-7xl lg:text-left lg:text-8xl">
				{m.header_1()}
				<span class="text-yellow-500 lg:text-8xl"
					><SparklesText className="inline-block lg:text-9xl" text={m.header_1_all()} /></span
				>
				:)
			</h1>
			<h2 class="mt-2 text-3xl">Hearts for Venezuela</h2>
			<p class="w-1/2">
				{m.club_description()}
			</p>

			<div class="mt-10 flex items-center space-x-10">
				<a href="/donate" class="btn btn-primary"><Smile /> {m.donate_button()}</a>
				<button
					onclick={(e) => {
						e.preventDefault();
						alert('scroll to learn more');
					}}
					class="btn btn-soft btn-info"><Info /> {m.learn_more_button()}</button
				>
			</div>
		</div>

		<div class="font-display mt-10 rotate-[220deg] text-9xl text-red-400 lg:mt-0">&lt;3</div>
	</div>
</header>
<section class="flex h-24 w-full items-center justify-evenly space-x-16 bg-red-50 px-48">
	<div class="text-center">
		<!-- todo: make sure the current donated count is grabbed from stripe api -->
		<h3 class="font-mono text-2xl font-bold text-black">
			$<NumberTicker value={current_donated} /> CLP
		</h3>
		<p>{m.current_donated()}</p>
	</div>
	<span class="flex w-1/2 items-center justify-center space-x-4 text-lg">
		<p>🫙</p>
		<progress class="progress progress-primary" value={current_donated} max="400000"></progress>
		<p>🎉</p>
	</span>
	<div class="text-center">
		<h3 class="font-mono text-2xl font-bold text-black">$<NumberTicker value={400000} /> CLP</h3>
		<p>{m.donation_goal()}</p>
	</div>
</section>

<section class="flex w-full items-center justify-center">
	<InfiniteScrollingCards items={data.content} speed="normal" />
</section>

<section class="flex h-24 w-full flex-col items-center justify-center bg-red-50 px-48">
	<blockquote class="font-display text-3xl">
		"It's not how much we give but how much love we put into giving."
	</blockquote>
	<p class="font-sans">- Mother Teresa</p>
</section>
