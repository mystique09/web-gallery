<script lang="ts">
  import '../app.css';
  import '@fontsource/poppins';
	import Footer from '../lib/components/footer.svelte';
	import Navbar from '../lib/components/navbar.svelte';
</script>

<Navbar />
<slot />
<Footer />