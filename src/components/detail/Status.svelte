<script lang="ts">
    export var timestamp: number;
    export var detail: string;
    export var status: number;
    function getStatusColor(status: number){
        if(status == -1) return 'lightgray'
        if(status == 0) return 'limegreen'
        if(status == 1) return 'orange'
        if(status == 2) return 'red'
    }
    function getTimeString(timestamp: number){
        const date = new Date(timestamp)
        return date.toLocaleTimeString()
    }
</script>

<div class="wrapper">
    <div class="statusDot" style={`background-color: ${getStatusColor(status)}`}/>
    <div class="detailWrapper">
        <b>{getTimeString(timestamp)}</b>
        <span>{detail}</span>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        margin-bottom: 10px;
    }
    .detailWrapper {
        box-shadow: 0px 0px 5px #c2c2c2;
        height: fit-content;
        width: calc(100% - 40px);
        padding: 15px;
        border-radius: 15px;
    }
    .statusDot {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        margin-top: auto;
        margin-bottom: auto;
        margin-inline: 20px;
    }
</style>
