<script>
    import { fly } from "svelte/transition";
    import Sports from "../src/Sports.svelte";
    import customStore from "../src/store/sportsStore";
    import Input from "../src/components/input.svelte";
    import News from "../src/components/news.svelte";
    import Players from "../src/components/players.svelte";
    let selectedSport = "";
    let show = false;
    const dataValue = {
        name: "",
        age: "",
    };
    function onChange(event, type) {
        dataValue[type] = event.target.value;
        console.log("dataValue", dataValue);
    }
    function addBook() {
        if (!dataValue.name) return alert("error");
        show = false;
        const newBook = {
            title: dataValue.name,
            age: dataValue.age,
        };
        customStore.addItem({
            ...newBook,
        });
    }
    function removeBook(index) {
        let setSubitem = $customStore;
        setSubitem.splice(index, 1);
        customStore.removeItem(setSubitem);
    }
    function handleMessage(event) {
        selectedSport = event.detail.sport;
    }
    function goBack() {
        selectedSport = "";
        customStore.removeItem([]);
    }
    function handlePress(e) {
        if (e.charCode === 13) addBook();
    }
    function addMore() {
        show = true;
    }
    const transition = {
        // delay: 700,
        duration: 600,
        x: -30,
        opacity: 0,
    };
</script>

<main>
    <div class="container">
        <div class="sportContainer">
            <h1>Hello Welcome to Playo</h1>
            {#if selectedSport}
                <section class="sportItem" transition:fly={transition}>
                    <h1>
                        <div on:click={goBack} class="goBack">Go Back</div>
                        Lets Play {selectedSport}
                    </h1>
                    <div class="addPlayers">
                        {#if !$customStore.length || show}
                            Add Players
                            {#if show}
                                {#each $customStore as item, index}
                                    <Players
                                        {item}
                                        {index}
                                        onClick={() => removeBook(index)}
                                    />
                                {/each}
                            {/if}

                            <Input
                                onInput={() => onChange(event, "name")}
                                placeholder="Enter your name"
                            />
                            <Input
                                placeholder="Age"
                                onInput={() => onChange(event, "age")}
                                onKeyPress={handlePress}
                                type="number"
                                length="2"
                            />

                            <div on:click={addBook} class="button">ADD Book</div>
                        {:else}
                            {#each $customStore as item, index}
                                <Players
                                    {item}
                                    {index}
                                    newClass={"players"}
                                    onClick={() => removeBook(index)}
                                />
                            {/each}
                            <div on:click={addMore} class="button">+ Add More</div>
                        {/if}
                    </div>
                    <div transition:fly={transition} class="bannerImage">
                        <img
                            src="assets/image/bannerImage.png"
                            alt="banner_image"
                            width="320"
                        />
                    </div>
                </section>
            {:else}
                <section>
                    <Sports on:message={handleMessage} />
                </section>
            {/if}
        </div>
    </div>
    <News />
</main>

<style>
    main {
        position: relative;
        /* padding: 100px 0; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #f8f8f8;
    }

    .container {
        height: 450px;
        padding: 100px 0;
        background: rgb(138, 0, 224);
        background: linear-gradient(
            90deg,
            rgba(138, 0, 224, 1) 0%,
            rgba(171, 0, 235, 1) 100%
        );
    }

    :is(h1) {
        font-size: 36px;
        color: white;
        margin-bottom: 20px;
    }
    .sportItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 300px;
        padding: 20px;
        background: #aa46f1;
        color: white;
        border-radius: 10px;
    }
    .sportContainer {
        position: relative;
        width: 1024px;
        margin: 0 auto;
    }
    .sportContainer section {
        position: absolute;
        left: 0;
        right: 0;
    }
    .bannerImage {
        margin-right: 50px;
    }
    .addPlayers {
        background-color: #b561f1;
        padding: 20px;
        width: 30%;
        border-radius: 10px;
    }
    .goBack {
        cursor: pointer;
        font-size: 18px;
        animation: taadaa 2s 500ms infinite;

    }
    .button {
        background-color: black;
        color: white;
        padding: 10px 20px;
        margin-top: 20px;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
    }
    @keyframes taadaa {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>
