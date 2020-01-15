<template>
    <div id="yg">
            <router-link to="/"><a>retour</a></router-link>
            <img :src="descriptionpoke.img">
            <img :src="descriptionpoke.ph">
            <h1>{{descriptionpoke.nom}}</h1>
            
             <p v-for="value in langue" :key="value">{{value}}</p>
    </div>
  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
         id: "",
        descriptionpoke: [],
        langue:[]
  
    };
},
 mounted: function () {
     this.id = window.location.href
     this.id = this.id.split("/")
     this.id = this.id[this.id.length - 1] 
     this.id = Number(this.id)
     axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
     .then (result => {
        this.descriptionpoke = {
            nom: result.data.name, img: result.data.sprites.front_default, ph: result.data.sprites.back_default, 
                
          }

     })
     axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.id}`) 
     .then(result => { 
         for (let i = 0; i < result.data.flavor_text_entries.length; i++) {
            if(result.data.flavor_text_entries[i].language.name == "fr"){   
            this.langue.push(result.data.flavor_text_entries[i].flavor_text)
            }
             
         }
         


     })


    },

}
</script>

<style >
    body {
	background-color: #DFF2FF;
}


img {
	width: 30%;
	height: 40%;
}

h1{
	font-family: 'Modak', cursive;
    color:blue;
	
}

button
{
	padding: 10px 30px;
	background:transparent;
	border-radius: 4px;
	border: 1.5px solid grey;
	text-decoration: none;

} 
a{
	text-decoration: none;
	color: blue;
}

p{
	font-family: 'Pacifico', cursive;
}


</style>