<script>
    import "../app.css";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import Navbar from "../lib/components/Navbar.svelte";

    onMount(() => {
        themeChange(false)
    })
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Navbar />
        <main>
            <slot />
        </main>
</div>
