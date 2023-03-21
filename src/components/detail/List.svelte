<script lang='ts'>
    export var data: any = []
    import Status from "./Status.svelte";
    function getStatusColor(status: number){
        if(status == -1) return 'không xác định'
        if(status == 0) return 'thấp'
        if(status == 1) return 'báo động'
        if(status == 2) return 'rất cao'
    }
</script>

{#if data.length == 0}
    <p>Không có dữ liệu</p>
{/if}

{#each data as item, index}
    <Status timestamp={Date.parse(item.created)} detail={`Nồng độ khói chuyển thành ${getStatusColor(item.status)}`} status={item.status}/>
{/each}

<style lang='scss'>
    p{
        color: gray;
    }
</style>