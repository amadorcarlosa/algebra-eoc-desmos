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

import type { QuestionOption } from '@/globalTypes/item-types'
import MathRenderer from '@/components/question/MathRenderer.vue'

interface Props {
  options: QuestionOption[]
  modelValue?: string
}

interface Emits {
  (e: 'update:modelValue', value: string | null): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const handleSelectionChange = (value: string | null) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="answer-section d-flex flex-column align-center ga-3">
    <v-radio-group 
      :model-value="modelValue" 
      @update:model-value="handleSelectionChange"
    >
      <v-card
        v-for="option in options"
        :key="option.label"
        variant="outlined"
        class="answer-option pa-4 d-flex align-center ga-3"
      >
        <v-radio :value="option.label" class="flex-shrink-0" />

        <div class="answer-content">
          <MathRenderer
            v-if="option.mathContent"
            :math-content="option.mathContent"
            size="text-h6"
          />
          <span v-else-if="option.text" class="text-h6">{{ option.text }}</span>
        </div>
      </v-card>
    </v-radio-group>
  </div>
</template>

<style scoped>
.answer-option {
  min-width: 300px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.answer-option:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.answer-content {
  flex: 1;
  text-align: left;
}
</style>