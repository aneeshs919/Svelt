<script>
    import { newsData } from "../store/sportsStore";
</script>

<div class="newsContainer">
    {#each $newsData as item}
        <div class="newsItemWrap">
            <div class="newsItem">
                <img src={item.icon} width="40" />
                <div class="title">{item.title}</div>
                <div>{item.note}</div>
            </div>
            <div class="counts">
                WIN <div class="count">{item.count.win}</div>
                LOSE
                <div class="count">{item.count.lose}</div>
                DRAW
                <div class="count">{item.count.draw}</div>
            </div>
        </div>
    {/each}
</div>

<style>
    .newsContainer {
        /* position: absolute; */
        width: 1024px;
        margin: 0 auto;
        margin-top: -100px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 50px;
    }
    .newsItemWrap {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        height: 200px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 1px 30px 1px rgb(0 0 0 / 20%);
    }
    .newsItem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .title {
        font-size: 36px;
    }
    .counts {
        display: flex;
        flex-direction: column;
        /* font-size: 36px; */
    }
    .count {
        font-size: 32px;
    }
</style>
