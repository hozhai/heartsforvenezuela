<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'svelte-motion';

	let {
		word = 'Blur In',
		variant = {
			hidden: { filter: 'blur(10px)', opacity: 0 },
			visible: { filter: 'blur(0px)', opacity: 1 }
		},
		duration = 1,
		className = ''
	} = $props();

	let defaultVariants = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 }
	};
	let combinedVariants = variant || defaultVariants;
</script>

<Motion
	initial="hidden"
	animate="visible"
	transition={{ duration }}
	variants={combinedVariants}
	let:motion
>
	<h1 class={cn(className, 'tracking-[-0.02em] md:leading-[5rem]')} use:motion>
		{word}
	</h1>
</Motion>
