<template>
    <main class="tw-max-w-[1080px] tw-mx-auto tw-text-center">
        <p class="title">
            {{ blog.title }}
        </p>
        <p class="tw-text-[13px] tw-font-normal tw-text-light-gray-text tw-text-center tw-mt-[20px] tw-mb-20">
            {{ blog.date }} - 
            <span
                v-for="typeContent in typeContents"
                :key="`${typeContent.text}`"
            >
                <span
                    v-if="blog.category == typeContent.category"
                    class="tw-font-bold tw-text-dark-gray-text"
                >
                    {{ typeContent.text }}
                </span>
            </span>
        </p>
    </main>
    <div class="lg:tw-w-[900px] tw-w-[90%] tw-mx-auto tw-mb-[50px]">
        <img
            :src="blog.linkImgThumbnail"
            class="tw-w-full tw-h-full tw-rounded-[10px]"
        >
    </div>
    <div class="lg:tw-w-[680px] tw-w-[90%] tw-mx-auto tw-text-center tw-mb-[100px]">
        <p class="tw-text-lg tw-font-normal tw-text-dark-gray-text tw-mb-10">{{ blog.textContent }}</p>
        <NuxtLink
            :to="blog.imgReference"
            target="_blank"
            class="tw-text-base tw-font-normal tw-text-title-yellow tw-underline"
        >
            Imagem original
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    import { cardMock } from '~/utils/mocks/card';
    import { CardCategory } from '~/types';

    const route = useRoute()
    const blogArray = cardMock.filter((blog) => (blog.category + blog.id) == (route.params.name + route.params.id));
    const blog = blogArray[0];
    const typeContents = [
        {
            category: CardCategory.Daily,
            text: "CONTEÚDO DIÁRIO"
        },
        {
            category: CardCategory.Game,
            text: "ANÁLISE DE JOGO"
        },
        {
            category: CardCategory.Movie,
            text: "RECOMENDAÇÃO DE MÚSICA"
        }
    ]
</script>

<style lang=scss scoped>
    .title {
		@apply tw-px-10 tw-mt-20 tw-bg-gradient-to-r tw-from-title-red tw-to-title-yellow lg:tw-text-[64px] tw-text-[32px] tw-font-bold tw-inline-block tw-text-transparent tw-bg-clip-text tw-text-center;
	}
</style>
