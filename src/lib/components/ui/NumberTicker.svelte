<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { Spring, Tween } from 'svelte/motion';
	import { cn } from '$lib/utils';

	let { initial = 0, duration = 6000, className = '', value = 100, ...props } = $props();

	let num = new Tween(initial, {
		duration: duration,
		easing: cubicOut
	});
	onMount(() => {
		num.set(0);
		num.target = value;
	});
</script>

<div class={cn('inline-block  tracking-normal', className)} {...props}>
	{Math.floor(num.current).toLocaleString()}
</div>
