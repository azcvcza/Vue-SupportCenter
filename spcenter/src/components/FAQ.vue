/* eslint-disable no-tabs */
<template>
	<main class="faq">
		<h1>Frequently Asked Question</h1>
		<div class="error" v-if="error">Can't load the question</div>
		<Loading v-if="loading"/>
		<section class="list">
			<article :key="question.id" v-for="question of questionList">
				<h2 v-html="question.title"></h2>
				<p v-html="question.content"></p>
			</article>
		</section>
	</main>
</template>
<script>
	import RemoteData from "../mixins/RemoteData";
	export default {
		mixins: [
			RemoteData({
				questionList: 'questions'
			})
		],
		data() {
			return {
				questions: [],
				error: null,
				loading: false
			};
		},
		async created() {
			this.loading = true;
			try {
				this.questions = await this.$fetch("questions");
				console.log("in faq", this.questions);
			} catch (e) {
				this.error = e;
			}
			this.loading = false;
		}
	};
</script>
