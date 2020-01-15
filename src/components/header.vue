 <template>
 <div>
 <h1>
      <a href="https://fontmeme.com/fr/police-pokemon/">
        <img
          src="https://fontmeme.com/permalink/191115/12bd8d9c940d9e2c4cae6d15f6774308.png"
          alt="police-pokemon"
          border="0"
        />
      </a>
    </h1>
    <p>
      <img class="coins" src="@/assets/Image/coins.png" alt />
      Vous avez: {{piece}} Pokecre
    </p>
    <div
      class="text"
    >Bienvenue dans l'univers pokemon ici trouvez les meilleurs pokemon pour combattre comme un pro !</div>
   </div>
</template>

<script>
export default {
    props : {
        piece: Number
    }
    
}
</script>

<style >

h1 {
  text-align: center;
}

.coins {
  width: 11px;
  height: 13px;
}

.text {
  font-family: "Josefin Slab", serif;
  font-family: "Italiana", serif;
  font-family: "Alegreya Sans SC", sans-serif;
}


</style>