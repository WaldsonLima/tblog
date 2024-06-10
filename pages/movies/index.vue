<template>
	<main class="tw-max-w-[1080px] tw-mx-auto">
		<p class="title">
			Esta é a página com todas as recomendação de filmes.
		</p>
		<p class="tw-text-xl lg:tw-text-[28px] tw-px-5 lg:tw-px-0 tw-font-normal tw-text-light-gray-text tw-text-center tw-mt-[20px] tw-mb-20">
			Todos os filmes foram assistidos e são muito legais.
		</p>
	</main>
	<section class="tw-bg-background-content tw-py-20">
		<div class="tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-mb-[100px]">
			<Card :isDetailPage="true" :category="CardCategory.Movie" />
		</div>
		<div class="tw-w-full tw-flex tw-justify-center tw-items-center">
			<v-btn
				variant="outlined"
				class="button-all-articles"
			>
				<NuxtLink to="/">
					<span>
						Todos os artigos
					</span>
				</NuxtLink>
			</v-btn>
		</div>
	</section>
</template>
<script lang="ts" setup>
	import { CardCategory } from '~/types';
</script>

<style lang="scss" scoped>
	.title {
		@apply tw-px-1 lg:tw-px-10 tw-mt-20 tw-bg-gradient-to-r tw-from-title-red tw-to-title-yellow lg:tw-text-[64px] tw-text-[32px] tw-font-bold tw-inline-block tw-text-transparent tw-bg-clip-text tw-text-center;
	}

	.button-all-articles {
		@apply tw-rounded-[8px] tw-border tw-border-light-gray-stroke hover:tw-border-transparent hover:tw-bg-dark-gray-text tw-bg-white tw-text-sm tw-font-semibold tw-text-dark-gray-text tw-normal-case hover:tw-text-white tw-mx-auto tw-mb-[100px]
	}
</style>
