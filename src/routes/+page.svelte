<script lang="ts">
	import * as m from '../paraglide/messages';
</script>

<svelte:head>
	<title>Hearts for Venezuela</title>
</svelte:head>

<header class="bg-base-100 flex h-[80vh] items-center justify-center flex-col">
	<div class="flex sm:flex-col lg:flex-row">
		<div class="relative">
			<h1 class="font-display text-7xl w-[80%] sm:text-center lg:text-left">{m.header_1()} <span class="text-yellow-500">{m.header_1_all()}</span></h1>
			<h2 class="mt-2 text-3xl">Hearts for Venezuela</h2>
			<p>A non-profit student led organization to better immigrant lives.</p>
			<p class="text-sky-400 font-display text-xl">:)</p>
		</div>
		<div class="space-y-8 text-2xl sm:mt-20 lg:mt-0 lg:ml-20">
			<div class="chat chat-start">
				<div class="chat-bubble p-5">Insert testimony here</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-bubble p-5">More testimony here</div>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-center space-x-10 mt-10">
		<button class="btn btn-soft btn-info">Learn More</button>
		<button class="btn btn-primary">Donate</button>
	</div>
</header>
