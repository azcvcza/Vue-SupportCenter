<template>
<nav class="menu">
	<router-link to="/" exact>Home</router-link>
	<router-link to="FAQ">F.A.Q</router-link>
</nav>
</template>
<style lang="stylus" scoped>
@import "../style/imports";
.router-link-active{
	border-bottom-color:$primary-color;
}
</style>
