<template>
	<main class="lg:tw-w-[1080px] tw-w-[90%] tw-mx-auto">
		<p class="title">
			Esse é um site de blogs curtos, feitos com muito carinho.
		</p>
		<p class="tw-text-xl lg:tw-text-[28px] tw-px-5 lg:tw-px-0 tw-font-normal tw-text-light-gray-text tw-text-center tw-mt-[20px] tw-mb-20">
			Esse é um site usado como portfólio. Os créditos de todas as imagens vão estar na descrição de cada conteúdo.
		</p>
	</main>
	<section class="tw-bg-background-content tw-py-20">
		<div
			class="tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-mb-[100px]"
			v-for="content in cardContents"
        	:key="`card ${content.id}`"
		>
			<div class="tw-w-[350px] lg:tw-w-[980px] sm:tw-w-[90%] tw-flex tw-justify-between tw-items-center tw-mb-[30px]">
				<span class="tw-text-lg sm:tw-text-[26px] tw-font-bold tw-text-dark-gray-text">
					{{ content.title }}
				</span>
				<v-btn
					variant="outlined"
					class="!tw-rounded-[8px] !tw-border !tw-border-light-gray-stroke hover:!tw-border-transparent hover:!tw-bg-dark-gray-text !tw-bg-white !tw-text-sm !tw-font-semibold !tw-text-dark-gray-text !tw-normal-case hover:!tw-text-white"
				>
					<NuxtLink :to="content.seeAllLink.toString()">
						<span>
							Ver todos
						</span>
					</NuxtLink>
				</v-btn>
			</div>
			<Card :isDetailPage="false" :category="content.category" />
		</div>
	</section>
</template>
<script lang="ts" setup>
	import { CardCategory } from '~/types';

	const cardContents = [
		{
			id: 1,
			title: "Conteúdo diário",
			seeAllLink: "/daily",
			category: CardCategory.Daily
		},
		{
			id: 2,
			title: "Análise de jogos",
			seeAllLink: "/games",
			category: CardCategory.Game
		},
		{
			id: 3,
			title: "Filmes recomendados",
			seeAllLink: "/movies",
			category: CardCategory.Movie
		}
	];
</script>

<style lang="scss" scoped>
	.title {
		@apply tw-px-1 lg:tw-px-10 tw-mt-20 tw-bg-gradient-to-r tw-from-title-red tw-to-title-yellow lg:tw-text-[64px] tw-text-[32px] tw-font-bold tw-inline-block tw-text-transparent tw-bg-clip-text tw-text-center;
	}
</style>
