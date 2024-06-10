<template>
    <v-app-bar :elevation="2">
        <v-app-bar-title class="tw-ml-10">
            <NuxtLink
                to="/"
                class="!tw-hidden sm:!tw-flex"
            >
                T-Blog
            </NuxtLink>
            <NuxtLink
                to="/"
                class="sm:!tw-hidden !tw-flex"
            >
                <PhHouse size="32" />
            </NuxtLink>
        </v-app-bar-title>

        <template v-slot:append>
            <div class="sm:tw-mr-6">
                <v-btn class="!tw-mr-2">
                    <NuxtLink to="/daily">Diário</NuxtLink>
                </v-btn>
                <v-btn class="!tw-mr-2">
                    <NuxtLink to="/games">Jogos</NuxtLink>
                </v-btn>
                <v-btn>
                    <NuxtLink to="/movies">Filmes</NuxtLink>
                </v-btn>
            </div>
        </template>
    </v-app-bar>
</template>

<script lang="ts" setup>
    import { PhHouse } from '@phosphor-icons/vue';

</script>

<style lang="scss" scoped>
    :deep() {
        .v-toolbar__content {
            @apply tw-mt-2 sm:tw-mt-0;
        }

        .v-toolbar__append {
            @apply tw-m-0 tw-flex tw-justify-center tw-items-center;
        }
    }
</style>
