<script setup lang="ts">


/**
 * QuestionHeader.vue
 *
 * A presentational component that displays a question header with the following elements:
 * - The question position (e.g., "Question 1") in a primary chip.
 * - The TEKS (Texas Essential Knowledge and Skills) standard in a secondary chip, optionally shown.
 * - The item type in an info chip.
 *
 * ## Props
 * @prop {number} position - The position or number of the question.
 * @prop {string} teks - The TEKS standard associated with the question.
 * @prop {ItemType} itemType - The type of the item/question.
 * @prop {boolean} [showTeks=true] - Whether to display the TEKS chip.
 *
 * ## Usage
 * Use this component to render a consistent header for question items, including metadata and classification.
 *
 * ## Styling
 * - Responsive layout for mobile screens.
 * - Uses Vuetify chips for visual grouping.
 */

import type { ItemType } from '@/globalTypes/item-types'
interface Props {
  position: number
  teks: string
  itemType: ItemType
  showTeks?: boolean

}

withDefaults(defineProps<Props>(), {
  showTeks: true
})
</script>

<template>
  <div class="question-header d-flex justify-space-between align-center mb-4">
    <div class="question-info">
      <v-chip color="primary" variant="tonal" size="small" class="mr-2">
        Question {{ position }}
      </v-chip>
      
      <v-chip v-if="showTeks" color="secondary" variant="outlined" size="small">
        {{ teks }}
      </v-chip>
    </div>
    
    <div class="header-actions d-flex align-center gap-2">
      <!-- Calculator Button -->
      <v-btn 
        @click="$emit('toggle-calculator')"
        variant="outlined"
        size="small"
        icon
      >
        <v-icon>mdi-calculator</v-icon>
      </v-btn>
      
      <v-chip color="info" variant="text" size="small">
        {{ itemType }}
      </v-chip>
    </div>
  </div>
</template>

<style scoped>
.question-header {
  border-bottom: 1px solid rgb(var(--v-theme-surface-variant));
  padding-bottom: 12px;
}

@media (max-width: 600px) {
  .question-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>