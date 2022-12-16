<div class="mockup-code">
    {#if name}
        <div class="tabs ml-3">
            <div class="tab tab-lifted tab-active">{name}</div>
        </div>
            <br>
    {/if}
    <slot />
</div>

<script>
    export let name;
</script>
