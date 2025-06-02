<script setup lang="ts">
/**
 * TextChoices Component
 *
 * Renders text-based answer choices with radio buttons for algebra questions.
 * Handles both plain text and mathematical content options.
 *
 * @component
 * @example
 * <TextChoices :options="questionOptions" v-model="selectedAnswer" />
 */

import type { QuestionStemType } from '@/globalTypes/item-types'
import MathRenderer from '@/components/question/MathRenderer.vue'
interface Props {
  item:  QuestionStemType
   loading?: boolean
}

defineProps<Props>()




</script>

<template>



<div class="question-content text-center" max-width="400px" style="margin: 0 auto;">
      <div class="question-text d-flex justify-center align-center gap-2 mb-6" max-width="400px">
       <v-sheet
        border="lg opacity-12"
        width="75%
        "
     >
          <v-icon color="white">mdi-help-circle</v-icon>
        <span class="text-h6">{{ item.questionText }}</span>
        <MathRenderer
          v-if="item.questionMath"
          :math-content="item.questionMath"
          size="text-h6"
        /></v-sheet> 
      </div>
      </div>
</template>

