<template>
	<div>
		<h3
			class="tw-text-3xl"
		>
			{{ helloWorld }}
		</h3>
		<app-hello-world />

		<h3 class="tw-mt-4 tw-font-bold">
			Exemplo de uso de imagens dinâmicas
		</h3>
		<img
			:src="foto"
			width="200"
		>

		<div class="tw-mt-4 tw-flex tw-items-center tw-gap-2">
			<h3>Exemplo de uso do phosphor icons</h3>
			<PhHorse />
			<PhHeart
				:size="32"
				color="hotpink"
				weight="fill"
			/>
			<PhCube />
		</div>

		<h3 class="tw-mt-4 tw-font-bold">
			Quantidade de cliques que quis registrar: {{ clickCount }}
		</h3>
		<div class="tw-flex tw-gap-4">
			<v-btn
				class="tw-w-40"
				@click="increment()"
			>
				Incrementar
			</v-btn>
			<v-btn
				class="tw-w-40"
				@click="decrement()"
			>
				Decrementar
			</v-btn>
		</div>

		<h3 class="tw-mt-4 tw-font-bold">
			Utilizando ícones customizados (assets/icons)
		</h3>
		<p>Garanta que ícones tenham a propriedade "viewbox"</p>
		<nuxt-icon
			name="3d-center"
			class="tw-text-2xl tw-text-blue-400"
		/>
	</div>
</template>
<script lang="ts" setup>
import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
import { firstStore } from "~/store/index";
import { storeToRefs } from "pinia";
import foto from "~/assets/foto.png";

const helloWorld: string = "Hello world";
const store = firstStore();
const { increment, decrement } = store;
const { clickCount } = storeToRefs(store);
</script>

<style lang="scss" scoped>
</style>