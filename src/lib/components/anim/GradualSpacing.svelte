<script lang="ts">
	import { cn } from '$lib/utils';
	import { AnimatePresence, Motion } from 'svelte-motion';

	let {
		className = '',
		words = '',
		duration = 0.5,
		delayMultiple = 0.04,
		framerProps = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 1 } }
	} = $props();

	let wordsspilit = words.split('');
</script>

<div class="jusitfy-center flex space-x-1">
	<AnimatePresence let:item list={[{ key: wordsspilit }]}>
		{#each wordsspilit as char, i}
			<Motion
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={framerProps}
				transition={{
					duration: duration,
					delay: i * delayMultiple
				}}
				let:motion
			>
				<span use:motion class={cn('drop-shadow-sm', className)}>
					{#if char === ' '}
						<span>&nbsp;</span>
					{:else}
						{char}
					{/if}
				</span>
			</Motion>
		{/each}
	</AnimatePresence>
</div>
