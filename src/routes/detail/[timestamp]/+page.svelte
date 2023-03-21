<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import List from "../../../components/detail/List.svelte";
    const timestamp = parseInt($page.params.timestamp);
    var dataList: any = [];
    function getDateString(timestamp: number) {
        const s = new Date(timestamp).toLocaleDateString("en-au");
        return s;
    }
    async function fetchData() {
        const data = await (
            await fetch(`${import.meta.env.VITE_API_URL}/day/${timestamp}`)
        ).json();
        dataList = data.items;
    }
    onMount(() => {
        fetchData();
    });
</script>

<h3>Chi tiết {getDateString(timestamp)}</h3>
<List data={dataList} />
