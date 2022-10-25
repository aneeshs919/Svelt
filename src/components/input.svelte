<script>
    export let onInput = "";
    export let placeholder = "";
    export let onKeyPress = "";
    export let type = "";
    export let length;
    export let error = "";
</script>

<div class="inputWrap">
    <input
        on:input={onInput}
        {placeholder}
        on:keypress={onKeyPress}
        {type}
        maxlength={length}
        class={error ? "error" : ""}
    />
    <div class="errorText">{error || ''}</div>
</div>

<style>
    .inputWrap {
        margin: 8px 0;
    }
    input {
        width: 100%;
        padding: 12px 20px;
        margin: 0;
        /* margin: 8px 0; */
        box-sizing: border-box;
        outline: none;
    }
    .error {
        border: solid 2px #bc0606;
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

    }
    .errorText {
        color: #bc0606;
    }
    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>
