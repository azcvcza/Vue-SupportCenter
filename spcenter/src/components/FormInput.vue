<template>
	<div class="row">
		<input
			type="text"
			class="row"
			:class="input"
			:name="name"
			:type="type"
			:value.prop="value"
			:placeholder="placeholder"
		>
	</div>
</template>
<script>
	export default {
		props: {
			name: {
				type: String
			},
			type: {
				type: String,
				default: "text"
			},
			placeholder: {
				type: String
			},
			invalid: {
				type: Boolean,
				default: false
			}
		}
	};
</script>
