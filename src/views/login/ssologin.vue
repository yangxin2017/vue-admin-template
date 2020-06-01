<template>
    <div style="width:100%;height:100%;">
        {{txt}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            txt: '登录中...'
        }
    },
    mounted(){
        let token = this.$route.query['token'];
        localStorage.setItem("token", token);

        this.$store.dispatch('user/ssologin', token).then(() => {
            this.$router.push({ path: this.redirect || '/cms' })
        }).catch((err) => {
            this.txt = '登录失败！' + err.info
        })
    }
}
</script>