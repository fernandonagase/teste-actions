<template>
    {{ goodbye }} World
</template>
<script setup>
import { ref } from 'vue';

const goodbye = ref('Goodbye');
</script>