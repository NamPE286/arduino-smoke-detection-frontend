<script lang='ts'>
    export var status: number
</script>

<div class="wrapper">
    {#if status == 0}
        <div class="statusIconWrapper">
            <div class="statusIcon" style="background-color: limegreen">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
                    ><path
                        d="M18.9 36.9 6.5 24.5l3.4-3.4 9 9 19.15-19.15 3.4 3.4Z"
                    /></svg
                >
            </div>
            <h1>Nguy cơ cháy nổ <span style="color: limegreen">thấp</span></h1>
        </div>
    {/if}
    {#if status == 1}
        <div class="statusIconWrapper">
            <div class="statusIcon" style="background-color: orange">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
                    ><path
                        d="M24.05 43.7q-1.85 0-3.2-1.325T19.5 39.15q0-1.85 1.35-3.15 1.35-1.3 3.2-1.3t3.15 1.325q1.3 1.325 1.3 3.225 0 1.85-1.325 3.15-1.325 1.3-3.125 1.3Zm-3.9-13.95V4.5h7.7v25.25Z"
                    /></svg
                >
            </div>
            <h1>Nguy cơ cháy nổ <span style="color: orange">cao</span></h1>
        </div>
    {/if}
    {#if status == 2}
        <div class="statusIconWrapper">
            <div class="statusIcon" style="background-color: red">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
                    ><path
                        d="M24.05 43.7q-1.85 0-3.2-1.325T19.5 39.15q0-1.85 1.35-3.15 1.35-1.3 3.2-1.3t3.15 1.325q1.3 1.325 1.3 3.225 0 1.85-1.325 3.15-1.325 1.3-3.125 1.3Zm-3.9-13.95V4.5h7.7v25.25Z"
                    /></svg
                >
            </div>
            <h1>Nguy cơ cháy nổ <span style="color: red">nguy hiểm</span></h1>
        </div>
    {/if}
</div>

<style lang="scss">
    .statusIconWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .statusIcon {
        height: 220px;
        width: 220px;
        border-radius: 50%;
        margin-inline: auto;
        margin-top: 100px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 15px #c2c2c2;
        svg {
            scale: 3;
            fill: white;
        }
    }
    .wrapper{
        margin-bottom: 60px;
    }
    h1{
        text-align: center;
    }
</style>
