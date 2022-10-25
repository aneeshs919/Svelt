<script>
    export let item = "";
    export let index = "";
    export let onClick = "";
</script>

<div class="players">
    Name: {item.title}, Age: {item.age}
    <div on:click={onClick} class="remove">x</div>
</div>

<style>
    .players {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 24px;
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
    .remove {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background-color: white;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
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
