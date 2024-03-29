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

margin: 4px;
text-align: left;
}

.anonymous {
color: rgba(255, 255, 255, 0.5);
font-style: italic;
}

.listing-buttons {
display: none;
align-items: center;
}

.listing:hover .listing-buttons {
display: flex;
}

.listing-button {
display: flex;
align-items: center;

margin-left: 4px;

filter: invert();
opacity: 30%;
width: 18px;

padding: 4px;
border-radius: 4px;
}

.listing-button:hover {
opacity: 60%;
background-color: rgba(0, 0, 0, 0.2);
}

.listing-selected {
outline: 1px solid rgba(255, 255, 255, 0.8);
box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
}

.listing-selected .listing-buttons {
display: flex;
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