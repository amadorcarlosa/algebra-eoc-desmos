<script setup lang="ts">
import QuestionHeader from '@/components/question/QuestionHeader.vue';
import TheWelcome from '../components/TheWelcome.vue'
import { ItemType, QuestionExamples } from '@/globalTypes/item-types';
import TextChoices from '@/components/question/TextChoices.vue';
</script>

<template>
  <main>
    <QuestionHeader
      :position="1"
      teks="TEKS 2.3b"
      :itemType="ItemType.MultipleChoice"
      @toggle-calculator="$emit('toggle-calculator')"

    />
    <TextChoices :options="QuestionExamples"  />
  </main>
</template>
