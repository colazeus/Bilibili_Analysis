<template>
    <div>
        404: 找不到该页面
        <a @click="back">返回上一页</a>
    </div>
</template>

<script>
    export default {
        name:"404",
        methods: {
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
