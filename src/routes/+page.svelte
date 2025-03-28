<script lang="ts">
	import * as m from '../paraglide/messages';

	import Navbar from '$lib/components/ui/Navbar.svelte';
	import { Motion } from 'svelte-motion';

	import SparklesText from '$lib/components/ui/SparklesText.svelte';
	import InfiniteScrollingCards from '$lib/components/ui/InfiniteScrollingCards.svelte';
	import NumberTicker from '$lib/components/ui/NumberTicker.svelte';
	import Features from '$lib/components/ui/Features.svelte';

	import family_1 from '$lib/images/h4v/family_1.webp?enhanced';
	import family_2 from '$lib/images/h4v/family_2.webp?enhanced';
	import gifts_1 from '$lib/images/h4v/gifts_4.webp?enhanced';
	import activity_3 from '$lib/images/h4v/activity_3.webp?enhanced';

	import { Info, Smile, CircleUser, HandCoins } from 'lucide-svelte';

	let current_donated = 1111;

	let { data } = $props();

	let dataFeatures = [
		{
			id: 1,
			title: '1. Sign Up',
			content: 'Quickly sign in through Google or simply by E-Mail and password!',
			image: family_1,
			icon: CircleUser
		},
		{
			id: 2,
			title: '2. Click on Donate',
			content:
				'One click for you to make the world better, and another for you to select how much you want to contribute!',
			image: family_2,
			icon: HandCoins
		},
		{
			id: 3,
			title: '3. Fill out your information',
			content:
				"Your information is filled with Stripe, a third-party purchase provider, meaning your information stays safe with them and we don't save anything!",
			image: gifts_1,
			icon: Info
		},
		{
			id: 4,
			title: "4. Help make someone's life better!",
			content:
				"And you're done! A kid just got a new blanket to help them stay warm in winter and some parents just got more food for their family!",
			image: activity_3,
			icon: Info
		}
	];
</script>

<svelte:head>
	<title>Hearts for Venezuela</title>
</svelte:head>

<Navbar currentRoute="home" />

<header class="relative flex flex-col items-center justify-center bg-amber-50 px-40 py-32">
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

	<Motion initial={{ opacity: 0 }} let:motion>
		<div class="absolute bottom-0 left-1/2 translate-x-1/2" use:motion>
			<svg>
				<circle
					cx={128}
					cy={128}
					r={124}
					stroke="var(--color-orange-400)"
					stroke-width={2}
					fill="var(--color-amber-100)"
				/>
				<text
					x={100}
					y={90}
					font-size={48}
					transform="rotate(90 90, 90)"
					fill="var(--color-amber-400)">:)</text
				>
			</svg>
		</div>
	</Motion>
</header>
<section class="z-10 flex h-24 w-full items-center justify-evenly space-x-16 bg-red-50 px-48">
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
		"{m.teresa_quote()}"
	</blockquote>
	<p class="font-sans">- {m.teresa_name()}</p>
</section>

<section class="bg-amber-50 px-48 py-18">
	<h1 class="font-display text-6xl">
		How to help! <span class="text-7xl text-red-400">&lt;3</span>
	</h1>

	<Features data={dataFeatures} />
</section>
