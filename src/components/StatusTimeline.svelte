<script lang="ts">
    import { onMount } from "svelte";
    var percentage = [0, 0, 0];
    var data: any = [];
    function getDayTimestamp(day: number) {
        const now = new Date().getTime() - 86400000 * (99 - day);
        let startOfDay = now - (now % 86400000);
        return startOfDay;
    }
    function getDateString(timestamp: number) {
        const s = new Date(timestamp).toLocaleDateString("en-au");
        return s;
    }
    function getStatusColor(status: number) {
        if (status == -1) return "lightgray";
        if (status == 0) return "limegreen";
        if (status == 1) return "orange";
        if (status == 2) return "red";
    }
    async function fetchData() {
        data = await (
            await fetch(`${import.meta.env.VITE_API_URL}/100days`)
        ).json();
        for (let i = 0; i < data.length; i++) {
            if (data[i] == -1) continue;
            percentage[data[i]]++;
        }
    }
    onMount(() => {
        fetchData();
    });
</script>

<div class="wrapper">
    <div class="cellWrapper">
        {#each data.reverse() as item, index}
            <a
                href={`/detail/${getDayTimestamp(index)}`}
                title={getDateString(getDayTimestamp(index))}
                class="ceil"
            >
                <div
                    class="cell"
                    style={`background-color: ${getStatusColor(item)}`}
                />
            </a>
        {/each}
    </div>
    <div class="labelWrapper">
        <div style="color: gray">100 ngày gần đây</div>
        <div class="leftBlock" />
        <div style="color: gray">
            <span style="color: limegreen">{percentage[0]}</span> /
            <span style="color: orange">{percentage[1]}</span>
            / <span style="color: red">{percentage[2]}</span>
        </div>
    </div>
</div>

<style lang="scss">
    .wrapper {
        margin-inline: auto;
        width: fit-content;
        height: fit-content;
        border-radius: 15px;
        box-shadow: 0 0 10px rgb(197, 197, 197);
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        max-width: 100%;
    }
    .leftBlock {
        margin-right: auto;
    }
    .cellWrapper {
        display: flex;
        max-width: 100%;
        overflow-x: auto;
        flex-direction: row-reverse;
    }
    .labelWrapper {
        display: flex;
    }
    .cell {
        background-color: lightgray;
        height: 60px;
        width: 10px;
        border-radius: 10px;
        margin-left: 2px;
        transition: opacity 0.1s;
    }
    .cell:hover {
        opacity: 0.5;
    }
</style>
