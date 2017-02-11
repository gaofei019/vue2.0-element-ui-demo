<template>
    <div id="Rate">
        <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                value2:3
            }
        }
    }
</script>