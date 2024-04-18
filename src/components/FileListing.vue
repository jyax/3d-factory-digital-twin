<!-- Displays a file name in FileSelect -->
<template>
    <div class="listing">
      <p class="listing-name" v-if="fileName !== ''">{{fileName}}</p>
    </div>
</template>
  
<style>
.listing {
  display: flex;
  flex-direction: row;

  padding: 8px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  margin-bottom: 8px;

  cursor: pointer;
  user-select: none;
}

.listing:hover {
  background-color: rgba(103, 103, 103, 0.15);
}

.listing-name {
  flex: 1;

  margin: 4px 4px 4px 8px;
  text-align: left;
}

</style>

<script>

export default {
    name: "FileListing",
    props: {
        fileName: {
            type: String,
            required: true
        }
    }
}

</script>