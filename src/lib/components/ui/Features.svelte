<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	interface Props {
		collapseDelay?: number;
		ltr?: boolean;
		linePosition?: 'left' | 'right' | 'top' | 'bottom';
		data?: Array<{
			id: number;
			title: string;
			content: string;
			image?: string;
			video?: string;
			icon?: any;
		}>;
	}

	let { collapseDelay = 5000, ltr = false, linePosition = 'left', data = [] }: Props = $props();

	let currentIndex = writable(-1);
	let carouselRef: HTMLUListElement | null | undefined = $state();

	onMount(() => {
		let timmer = setTimeout(() => {
			currentIndex.set(0);
		}, 100);
		return () => clearTimeout(timmer);
	});
	onMount(() => {
		handleScroll();
	});
	let handleScroll = () => {
		let autoScrollTimer: NodeJS.Timeout;
		let handleAutoScroll = () => {
			currentIndex.update((prevIndex) =>
				prevIndex !== undefined ? (prevIndex + 1) % data.length : 0
			);
		};

		autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

		return () => clearInterval(autoScrollTimer);
	};
</script>

<section id="features">
	<div class="container">
		<div class="mx-auto">
			<div class="mx-auto my-12 grid h-full items-center gap-10 lg:grid-cols-2">
				<div
					class="order-1 hidden lg:order-none lg:flex {ltr
						? 'lg:order-2 lg:justify-end'
						: 'justify-start'} "
				>
					<div>
						{#each data as item, index}
							<div class="relative mb-8 flex items-center last:mb-0">
								{#if linePosition === 'left' || linePosition === 'right'}
									<div
										class="absolute inset-y-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 {linePosition ===
										'right'
											? 'right-0 left-auto'
											: 'right-auto left-0'}"
									>
										<div
											class="absolute top-0 left-0 w-full {$currentIndex === index
												? 'h-full'
												: 'h-0'} bg-primary origin-top transition-all ease-linear"
											style="
          transition-duration: {$currentIndex === index ? `${collapseDelay}ms` : '0s'};"
										></div>
									</div>
								{/if}

								{#if linePosition === 'top' || linePosition === 'bottom'}
									<div
										class={`absolute inset-x-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 ${
											linePosition === 'bottom' ? 'bottom-0' : 'top-0'
										}`}
									>
										<div
											class={`absolute left-0 ${
												linePosition === 'bottom' ? 'bottom-0' : 'top-0'
											} h-full ${
												$currentIndex === index ? 'w-full' : 'w-0'
											} bg-primary origin-left transition-all ease-linear `}
											style="
                        transition-duration:
                          {$currentIndex === index ? `${collapseDelay}ms` : '0s'};"
										></div>
									</div>
								{/if}
								<div
									class="item-box bg-primary/10 mx-2 flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-6"
								>
									<item.icon class="text-primary size-6" />
								</div>
								<div class="space-y-2">
									<h3 class="text-lg font-bold lg:text-2xl">{item.title}</h3>
									<div class="text-muted-foreground w-96 text-[16px]">
										{item.content}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class={`h-[350px] min-h-[200px] w-auto ${ltr && 'lg:order-1'}`}>
					{#if data[$currentIndex]?.image}
						<img
							src={data[$currentIndex].image}
							alt="feature"
							height={400}
							class="aspect-auto size-full rounded-xl border border-neutral-300/50 object-cover object-left-top p-1 shadow-lg"
						/>
					{:else if data[$currentIndex]?.video}
						<video
							preload="auto"
							src={data[$currentIndex].video}
							class="aspect-auto size-full rounded-lg object-cover shadow-lg"
							autoplay
							loop
							muted
						></video>
					{:else}
						<div
							class="aspect-auto size-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"
						></div>
					{/if}
				</div>

				<ul
					bind:this={carouselRef}
					class="flex h-full snap-x snap-mandatory flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
				>
					{#each data as item, index}
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
						<li
							class="card_code relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0"
							onclick={() => currentIndex.set(index)}
							style="scroll-snap-align: center;"
						>
							<h2 class="text-xl font-bold">{item.title}</h2>
							<p class="mx-0 max-w-sm text-sm text-balance">{item.content}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.card_code {
		transition: all 0.3s ease;
	}
	.item-box {
		width: 3rem;
		height: 3rem;
	}
</style>
