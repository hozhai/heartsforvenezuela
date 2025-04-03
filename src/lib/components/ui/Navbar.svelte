<script lang="ts">
	import logo from '$lib/images/logo.png';

	type NavRoute = 'home' | 'blogs' | 'donate' | 'account' | 'about';

	export let currentRoute: NavRoute = 'home';
</script>

<div class="drawer fixed top-0 left-0 z-50">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar w-full bg-amber-50">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="pointer-events-none mx-2 flex-1 px-2">
				<img src={logo} alt="Logo" width={32} height={32} />
			</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li><a class={currentRoute == 'home' ? 'menu-focus' : ''} href="/">Home</a></li>
					<li><a class={currentRoute == 'blogs' ? 'menu-focus' : ''} href="/blogs">Blogs</a></li>
					<li><a class={currentRoute == 'donate' ? 'menu-focus' : ''} href="/donate">Donate</a></li>
					<li>
						<a class={currentRoute == 'account' ? 'menu-focus' : ''} href="/account">Sign In</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="drawer-side z-50">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li><a href="/">Sidebar Item 1</a></li>
			<li><a href="/">Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
