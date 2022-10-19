<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    import { fly } from "svelte/transition";
    let sport = "";
    const data = [
        {
            title: "Badminton",
            icon: "https://playo.imgix.net/SPORTICONS/SP5/ic_badminton_grey.png?auto=compress,format&h=70",
            count: 3,
            date: "27 Jan",
            location: "hsr layout",
        },
        {
            title: "Football",
            icon: "https://playo.imgix.net/SPORTICONS/SP2/ic_football_grey.png?auto=compress,format&h=70",
            count: 10,
            date: "27 Jan",
            location: "hsr layout",
        },
        {
            title: "Tennis",
            icon: "https://playo.imgix.net/SPORTICONS/SP3/ic_tennis_grey.png?auto=compress,format&h=70",
            count: 1,
            date: "27 Jan",
            location: "hsr layout",
        },
        {
            title: "Cricket",
            icon: "https://playo.imgix.net/SPORTICONS/SP0/ic_cricket_grey.png?auto=compress,format&h=70",
            count: 13,
            date: "27 Jan",
            location: "hsr layout",
        },
    ];
    const setFlay = {
        0: 200,
        1: 300,
        2: 500,
        3: 700,
    };
    function flayValue(index) {
        return setFlay[index];
    }
    function handleTileClick(type) {
        dispatch("message", {
            sport: type,
        });
    }
</script>

<section>
    {#each data as sport, index}
        <div
            class="sportItem"
            on:click={() => handleTileClick(sport.title)}
            transition:fly={{
                delay: flayValue(index),
                duration: 400,
                x: -30,
                opacity: 0,
            }}
        >
            <div class="date">
                <img src={sport.icon} class="icon" />{sport.date}
            </div>
            <div>
                <div class="title">{sport.title}</div>
                <div class="location">{sport.location}</div>
            </div>
            <div class="joined">
                <div class="count">{sport.count}</div>
                Joined
            </div>
        </div>
    {/each}
</section>

<style>
    section {
        display: flex;
        gap: 10px;
    }
    .sportItem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 250px;
        width: 25%;
        padding: 15px;
        background: #aa46f1;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
    .title {
        font-size: 32px;
    }
    .joined {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #1cc330;
    }
    .count {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: white;
        background-color: #1cc330;
    }
    .date {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .icon {
        background-color: white;
        border-radius: 50%;
        padding: 5px;
        width: 40px;
    }
</style>
