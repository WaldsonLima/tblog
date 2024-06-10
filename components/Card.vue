<template>
    <div
        v-for="card in cardMock"
        :key="`card ${card.id}`"
    >
        <div
            class="card"
            :id="`${card.id}`"
            :name="`${card.category}`"
            v-if="card.id <= 3 && card.category === props.category && props.isDetailPage === false"
            @click="showBlog(card.category, card.id)"
        >
            <div class="tw-w-[310px] tw-h-[400px] sm:tw-w-[610px] sm:tw-h-[180px]">
                <span class="tw-text-[13px] tw-font-medium tw-text-date-gray-text">
                    {{ card.date }}
                </span>
                <p class="tw-text-[26px] tw-font-semibold tw-text-dark-gray-text tw-mt-[10px] tw-mb-[5px] sm:tw-mt-[30px] sm:tw-mb-[10px]">
                    {{ card.title }}
                </p>
                <p class="tw-text-lg tw-font-normal tw-text-light-gray-text tw-hidden sm:tw-flex">
                    {{ card.description }}
                </p>
            </div>

            <div class="tw-w-[350px] sm:tw-w-[300px] tw-h-[210px]">
                <img
                    :src="card.linkImgThumbnail"
                    class="tw-w-full tw-h-full sm:tw-rounded-[10px] tw-mb-20 sm:tw-mb-0"
                >
            </div>
        </div>
        <div
            class="card"
            :id="`${card.id}`"
            :name="`${card.category}`"
            v-if="card.category === props.category && props.isDetailPage"
            @click="showBlog(card.category, card.id)"
        >
            <div class="tw-w-[310px] tw-h-[400px] sm:tw-w-[610px] sm:tw-h-[180px]">
                <span class="tw-text-[13px] tw-font-medium tw-text-date-gray-text">
                    {{ card.date }}
                </span>
                <p class="tw-text-[26px] tw-font-semibold tw-text-dark-gray-text tw-mt-[10px] tw-mb-[5px] sm:tw-mt-[30px] sm:tw-mb-[10px]">
                    {{ card.title }}
                </p>
                <p class="tw-text-lg tw-font-normal tw-text-light-gray-text tw-hidden sm:tw-flex">
                    {{ card.description }}
                </p>
            </div>

            <div class="tw-w-[350px] sm:tw-w-[300px] tw-h-[210px]">
                <img
                    :src="card.linkImgThumbnail"
                    alt="sprigatito"
                    class="tw-w-full tw-h-full sm:tw-rounded-[10px] tw-mb-20 sm:tw-mb-0"
                >
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { cardMock } from '~/utils/mocks/card';

    const props = defineProps({
        isDetailPage: {
            type: Boolean,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    })

    function showBlog(category: string, id: number) {
        navigateTo('/' + category + id.toString())
        console.log('/' + category + id.toString());
    }
</script>

<style lang="scss" scoped>
    .card {
        @apply lg:tw-w-[980px] sm:tw-w-[90vw] lg:tw-h-[260px] tw-w-[350px] tw-h-[300px] sm:tw-flex-row tw-flex tw-flex-col tw-justify-between tw-items-center tw-rounded-[20px] tw-bg-white tw-px-[20px] tw-py-[24px] tw-border tw-border-transparent hover:tw-border-dark-gray-text tw-mb-[20px] tw-cursor-pointer tw-overflow-hidden;
    }
</style>
