<script lang="ts">
	import spoonNumber from '../stores.ts';
	// import {hour} from '../stores.ts';
	// import {minute} from '../stores.ts';
	import {handleTextSpoon, handleImageSpoon} from '../helpers/helpers.ts';
	import Button from "../components/Button.svelte";
	import Wheel from "../components/Wheel.svelte";
	import edit from "$lib/assets/edit.png";
	import lightningNegative from "$lib/assets/lightningNegative.png";
	import lightningPositive from "$lib/assets/lightningPositive.png";

</script>

<svelte:head>
	<title>Spooon</title>
	<meta name="description" content="Spooon App" />
</svelte:head>


	<div class="flex flex-col justify-center h-full">
		<h1 class="text-center pb-3 md:pb-10">Mon niveau d'énergie aujourd'hui</h1>
		<a href="/startDay">
			<div class="flex flex-row gap-2 justify-center items-center">
				<img src={edit} class="h-6" alt="modifier son nombre de cuillère"/>
				<p class="text-darkBlue">Définir mon énergie au réveil</p>
			</div>
		</a>
		<div class="h-[80%] flex flex-col justify-center">
			<Wheel />
			<h2 class="mx-auto flex items-center justify-center text-center ">{handleTextSpoon($spoonNumber)}</h2>
		</div>
		<div class="h-[20%] flex flex-col justify-end gap-2 mx-auto w-full">
			<Button
				firstColor="pink"
				secondColor="orange"
				source={lightningNegative}
				hasIcon={false}
				title="J'ai dépensé de l'énergie"
				href="/activities"
				disabled={$spoonNumber	=== 0}
			/>
			<Button
				firstColor="darkBlue"
				secondColor="lightBlue"
				source={lightningPositive}
				hasIcon={false}
				title="J'ai récupéré de l'énergie"
				href="/gain"
				disabled={$spoonNumber	=== 12}
			/>
		</div>
		<!-- <label for="hour">Heure :</label>
					<input
							type="number"
							id="hour"
							min="0"
							max="23"
							bind:value={$hour}
					/>
					<br />
					<label for="minute">Minute :</label>
					<input
							type="number"
							id="minute"
							min="0"
							max="59"
							bind:value={$minute}
					/>
		<button class="mx-auto flex items-center justify-center mt-10 h-10 w-10 border-2" on:click={setUserMorningTime}></button> -->
	</div>

