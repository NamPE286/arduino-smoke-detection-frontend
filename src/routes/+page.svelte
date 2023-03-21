<script lang="ts">
    import Status from "../components/Status.svelte";
    import StatusTimeline from "../components/StatusTimeline.svelte";
    import List from "../components/detail/List.svelte";
    import { onMount } from "svelte";
    import { pb } from "../pocketbase";
    const timestamp = new Date().getTime();
    var dataList: any = [];
    var lastestData: any = {
        status: 0
    };
    async function fetchData() {
        const data = await (
            await fetch(
                `${import.meta.env.VITE_API_URL}/day/${new Date().getTime()}`
            )
        ).json();
        dataList = data.items;
        const data1 = await (
            await fetch(`${import.meta.env.VITE_API_URL}/lastestData`)
        ).json();
        lastestData = data1
    }
    async function realtimeStatus() {
        pb.collection("records").subscribe("*", function (e) {
            fetchData()
        });
    }
    onMount(() => {
        fetchData();
        realtimeStatus();
    });
</script>

<Status status={lastestData.status} />
<StatusTimeline />
<h3>Nhật kí sự kiện</h3>
<List data={dataList} />
