<template>
	<form action="" @submit.prevent="submit">
		<section class="content">
			<h2>{{title}}</h2>
			<slot></slot>
			<div class="actions">
				<slot name="actions"></slot>
			</div>
		</section>
		<transition name='fade'>
			<Loading v-if="busy" class="overlay"></Loading>
		</transition>
	</form>
</template>
<script>
export default{
	props: {
		title: {
			type:String,
			required:true
		},
		operation: {
			type: Function,
			required: true,
		},
		valid: {
			type: Boolean,
			required: true,
		}
	},
	data : ()=>{
		return {
			error: null,
			busy: false,
		}
	},
	methods: {
		async submit () {
			if( this.valid && !this.busy){
				this.error = null;
				this.busy = true;
				try{
					await this.operation()
				}catch (e) {
					this.error = e.message
				}
				this.busy = false
			}
		}
	}
}
</script>
