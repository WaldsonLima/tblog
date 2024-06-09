<template>
    <v-app-bar :elevation="2">
        <v-app-bar-title class="!tw-ml-10">
            <NuxtLink to="/">T-Blog</NuxtLink>
        </v-app-bar-title>

        <template v-slot:append>
            <div class="tw-mr-6">
                <v-btn class="!tw-mr-2">
                    <NuxtLink to="/daily">Diário</NuxtLink>
                </v-btn>
                <v-btn class="!tw-mr-2">
                    <NuxtLink to="/games">Jogos</NuxtLink>
                </v-btn>
                <v-btn>
                    <NuxtLink to="/musics">Músicas</NuxtLink>
                </v-btn>
            </div>
        </template>
    </v-app-bar>
</template>
