<script setup lang="ts">
/**
 * MathRenderer Component
 * 
 * Renders mathematical content using MathML with PlainText fallback.
 * Designed for extension with cognitive engine interactivity in the future.
 * 
 * @component
 * @example
 * <MathRenderer :math-content="questionMath" />
 * <MathRenderer :math-content="optionMath" size="small" />
 */

/**
 * Represents mathematical content in multiple formats.
 * 
 * @typedef {MathContent}
 * @property {string} latex - LaTeX representation of the mathematical expression.
 * @property {string} plainText - Plain text fallback representation.
 * @property {string} mathml - MathML markup for web rendering.
 */

/**
 * Props interface for MathRenderer component.
 *
 * @interface Props
 * @property {MathContent} mathContent - Mathematical content object containing latex, plainText, and mathml representations.
 * @property {string} [size] - Optional size class for text scaling ('text-caption', 'text-body-2', 'text-body-1', 'text-h6').
 */
import type { MathContent } from '@/globalTypes/item-types'
interface Props {
  mathContent: MathContent
  size?: string
}

withDefaults(defineProps<Props>(), {
  size: 'text-body-1'
})
</script>

<template>
  <span :class="['math-content', size]">
    <!-- Primary: Render MathML if available -->
    <span 
      v-if="mathContent.mathml" 
      v-html="mathContent.mathml"
      class="math-display"
    />
    
    <!-- Fallback: Use PlainText if no MathML -->
    <span 
      v-else-if="mathContent.plainText"
      class="math-fallback"
    >
      {{ mathContent.plainText }}
    </span>
    
    <!-- Error: Show placeholder if no content -->
    <span 
      v-else
      class="math-error text-error"
    >
      [Math content unavailable]
    </span>
  </span>
</template>

<style scoped>
.math-content {
  display: inline-block;
  vertical-align: baseline;
}

.math-display {
  /* MathML styling - browser handles most of this */
  font-family: 'Times New Roman', 'STIX Two Math', serif;
}

.math-fallback {
  /* PlainText math styling */
  font-family: 'Courier New', monospace;
  background-color: rgb(var(--v-theme-surface-variant));
  padding: 2px 1px;
  border-radius: 1px;
  font-size: 0.1em;
}

.math-error {
  font-style: italic;
  opacity: 0.7;
}
</style>