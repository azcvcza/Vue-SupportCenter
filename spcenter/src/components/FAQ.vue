<template>
	<main class="faq">
		<h1>Frequently Asked Question</h1>
		<div class="error" v-if="error">Can't load the question</div>
		<section class="list">
			<article :key=question.id v-for="question of questions">
				<h2 v-html="question.title"></h2>
				<p v-html="question.content"></p>
			</article>
		</section>
	</main>
</template>
<script>
	export default {
		data () {
			return {
				questions: [],
				error: null
			}
		},
		created () {
			fetch('http://localhost:3000/questions')
				.then(response => {
				if (response.ok) {
					return response.json()
				} else {
					return Promise.reject(new Error('error'))
				}
			}).then(result => {
				this.questions = result
			}).catch(e => {
				console.log('error:', e)
			})
		}
	}
</script>
