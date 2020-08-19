//调色板
<style>

</style>

<template>
	<div>
		<div :style="{width:'100px', height:'100px',background:`rgb(${R},${G},${B}`}"></div>
		<p>
			<input type="range" min="0" max="255" v-model="R"/>
			<span>{{R}}</span>
		</p>
		<p>
			<input type="range" min="0" max="255" v-model="G"/>
			<span>{{G}}</span>
		</p>
		<p>
			<input type="range" min="0" max="255" v-model="B"/>
			<span>{{B}}</span>
		</p>

	</div>
</template>
	
<script>
export default {
	data() {
	    return {
	        R: 0,
	        G:0,
	        B:0
	    };
  	}
}
</script>