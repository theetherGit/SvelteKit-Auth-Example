<script>
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import GitHub from "@auth/core/providers/github"
    import {signIn, signOut} from "@auth/sveltekit/client";
    import {page} from "$app/stores";

    console.log(GitHub)
    let providers = [
        GitHub
    ]
</script>

<div class="navbar bg-base-100 items-center justify-center">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">SvelteKit Auth Example</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li tabindex="0">
                <div>
                {#if $page.data.session}
                    <button class="btn btn-primary hover:bg-white hover:border-error gap-2" on:click={() => signOut()}>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="32"
                                height="32"
                                class="h-6 w-6"
                                stroke="currentColor"
                        ><path
                                fill-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        /></svg
                        >
                        SignOut
                    </button>
                    {:else}
                    {#each providers as provider}
                        <button class="btn btn-primary hover:bg-white hover:border-primary  gap-2" on:click={() => signIn(provider.id)}>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="32"
                                    height="32"
                                    class="h-6 w-6"
                                    stroke="currentColor"
                            ><path
                                    fill-rule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            /></svg
                            >
                            Sign In with {provider.name}
                        </button>
                    {/each}
                    {/if}
                </div>
            </li>
            <li><ThemeSwitch /></li>
        </ul>
    </div>
</div>
