<template>

  <div id="yg">
       <img @click="seepanier()" class="panier" src="@/assets/Image/shopping.png" alt />
     
      <div v-if="affpanier == true">
     <p v-for="(value,index) in panier " :key="index" > {{value.name}} <button @click="deletepoke(index)">X</button></p>
     
      </div>
    <HeaderPoke :piece="piece"/>
    <div class="wrap">
      <div class="pk" v-for="value in poke" :key="value.id">
        <img :src="value.img" />
        <p>{{value.nom}}</p>
        <p>
          <img class="coins" src="@/assets/Image/coins.png" alt />
          {{value.prix}} pokecre
        </p>
        <button @click="id(value.id)">
          <a href="#"></a> Description
        </button>
        <button v-if="value.prix < piece" @click="monnaie(value.prix, value.nom)">
          <a href="#"></a> Acheter
        </button>
        <p v-else>vous n'avez pas assez de Pokecre</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPoke from "@/components/header"
export default {
  data() {
    return {
      poke: [],
      piece: 200,
      panier: [],
      affpanier: false,
     
    
     
    };
  },
  components:{
    HeaderPoke
  },
  mounted: function() {
      //function(response) == response =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=22")
      .then(response => {
        for (let i = 1; i < response.data.results.length; i++) {
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(result => {
              let infopoke = {
                nom: result.data.name,
                img: result.data.sprites.front_default,
                id: result.data.id,
                prix: result.data.base_experience
              };
              this.poke.push(infopoke);
            });
        }
      });
  },

  methods: {
    id(idpoke) {
      this.$router.push('/descriptionpoke/' + idpoke);
      window.location.reload();
    },

    monnaie(prixpoke, nompoke ) {
      this.piece -= prixpoke;
      this.panier.push({name: nompoke, price: prixpoke})
      
      
    },

   deletepoke(index){
     this.panier.splice(index, 1)
      this.piece += this.panier[index].price
   },

    seepanier(){
      if (this.affpanier == false) {
        this.affpanier = true
      }
      else {
        this.affpanier = false
      }
    }
  }
};
</script>

<style>
body {
  background-color: #dff2ff;
}

h1 {
  text-align: center;
}

.coins {
  width: 11px;
  height: 13px;
}

.panier {
  width: 20px;
  height: 23px;
  
}

button {
  padding: 10px 30px;
  background: transparent;
  color: black;
  border-radius: 6px;
  border: 2.5px solid black;
  text-decoration: none;
}

p {
  font-family: "Modak", cursive;
}

.text {
  font-family: "Josefin Slab", serif;
  font-family: "Italiana", serif;
  font-family: "Alegreya Sans SC", sans-serif;
}

.wrap {
  width: 100%;
  height: auto;
  margin: 70 auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.pk {
  width: 30%;
  height: 70%;
}

img {
  width: 50%;
  height: 40%;
}
</style>