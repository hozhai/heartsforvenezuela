<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	export let items: {
		quote: string;
		name: string;
		title: string;
	}[];
	export let direction: 'left' | 'right' | undefined = 'left';
	export let speed: 'fast' | 'normal' | 'slow' | undefined = 'fast';
	export let className: string | undefined = undefined;

	let containerRef: HTMLDivElement;
	let scrollerRef: HTMLUListElement;

	onMount(() => {
		addAnimation();
	});

	let start = false;

	function addAnimation() {
		if (containerRef && scrollerRef) {
			const scrollerContent = Array.from(scrollerRef.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef) {
					scrollerRef.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			start = true;
		}
	}
	const getDirection = () => {
		if (containerRef) {
			if (direction === 'left') {
				containerRef.style.setProperty('--animation-direction', 'forwards');
			} else {
				containerRef.style.setProperty('--animation-direction', 'reverse');
			}
		}
	};
	const getSpeed = () => {
		if (containerRef) {
			if (speed === 'fast') {
				containerRef.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.style.setProperty('--animation-duration', '80s');
			}
		}
	};
</script>

<div
	bind:this={containerRef}
	class={cn(
		'scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
		className
	)}
>
	<ul
		bind:this={scrollerRef}
		class={cn(' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4')}
		style="animation:scroll infinite linear 40s;"
		onmouseenter={() =>
			(scrollerRef.style = 'animation:scroll infinite linear 40s;animation-play-state:paused;')}
		onmouseleave={() => (scrollerRef.style = 'animation:scroll infinite linear 40s;')}
	>
		{#each items as item, idx (item.name)}
			<li
				class="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl px-8 py-6 md:w-[450px]"
				style="background: linear-gradient(180deg, var(--color-sky-100), var(--color-blue-100));"
			>
				<blockquote>
					<div
						aria-hidden="true"
						class="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
					></div>
					<span class=" relative z-20 text-sm leading-[1.6] font-normal text-gray-800 italic">
						{item.quote}
					</span>
					<div class="relative z-20 mt-6 flex flex-row items-center">
						<span class="flex flex-col gap-1">
							<span class=" text-sm leading-[1.6] font-normal text-gray-500">
								{item.name}
							</span>
							<span class=" text-sm leading-[1.6] font-normal text-gray-500">
								{item.title}
							</span>
						</span>
					</div>
				</blockquote>
			</li>
		{/each}
	</ul>
</div>
