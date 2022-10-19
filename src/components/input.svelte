<script>
    export let onInput = "";
    export let placeholder = "";
    export let onKeyPress = "";
    export let type = "";
    export let length;
</script>

<input
    on:input={onInput}
    {placeholder}
    on:keypress={onKeyPress}
    {type}
    maxlength={length}
/>

<style>
    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        outline: none;
    }
</style>
