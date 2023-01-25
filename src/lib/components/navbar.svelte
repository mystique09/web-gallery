<script lang="ts">
	import { slide } from 'svelte/transition';
	import Camera from './icons/camera.svelte';

	let isOpen = false;
	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	type NavLink = {
		href: string;
		content: string;
	};

	const navLinks = [
		{
			href: '/#',
			content: 'Home'
		},
		{
			href: '/#about',
			content: 'About'
		},
		{
			href: '/contact-us',
			content: 'Contact us'
		}
	] satisfies NavLink[];
</script>

<div class="container container-lg m-auto">
	<div class="navbar px-4">
		<a href="/" draggable="false" class="navbar-start font-normal tracking-wide text-xl gap-2">
			<Camera className="w-8 stroke-primary" />
			<span>WebGallery</span>
		</a>
		<ul class="navbar-end gap-8 hidden md:flex">
			{#each navLinks as navLink}
				<li class="hover:scale-110 hover:text-primary duration-200">
					<a href={navLink.href}>{navLink.content}</a>
				</li>
			{/each}
		</ul>
		<div class="navbar-end flex md:hidden">
			<button
				on:click={toggleMenu}
				type="button"
				name="nav-menu-button"
				class="btn btn-sm btn-ghost btn-circle"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
				</svg>
			</button>
		</div>
	</div>
</div>

{#if isOpen}
	<div
		in:slide={{ duration: 300 }}
		out:slide={{ duration: 200 }}
		class:hidden={!isOpen}
		class="fixed bg-neutral w-screen py-6 px-4 top-0 left-0 h-screen z-10 md:hidden"
	>
		<div class="w-full flex flex-row items-center justify-end">
			<button on:click={toggleMenu} type="button" name="navbar-close-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
		<ul class="text-2xl font-semibold flex flex-col items-end mt-24 gap-8 h-full">
			{#each navLinks as navLink}
				<li><a on:click={toggleMenu} href={navLink.href}>{navLink.content}</a></li>
			{/each}
		</ul>
	</div>
{/if}
