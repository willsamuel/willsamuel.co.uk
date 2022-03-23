<script>
export let name
import { onMount } from 'svelte';
    
    
let thisObj;
    let text = '';
    
    onMount(() => {
        text = thisObj.textContent;
    });
  
</script>

<div bind:this={thisObj}>
    <slot />
</div>

<div>
<p>{text}</p>
</div>

<style>

</style>
