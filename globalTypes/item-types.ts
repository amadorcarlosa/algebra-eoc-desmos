// Item types for different question formats
export const ItemType = {
  MultipleChoice: 'Multiple Choice',
  MultipleSelect: 'Multiple Select',
  OpenResponse: 'Open Response',
  DragAndDrop: 'Drag and Drop',
} as const;

export type ItemType = typeof ItemType[keyof typeof ItemType];
export const QuestionExamples: QuestionOption[] = [
  { 
    label: 'A', 
    text: 'x = 2', 
    isCorrect: true 
  },
  { 
    label: 'B', 
    text: 'x = -2', 
    isCorrect: true 
  },
  { 
    label: 'C', 
    text: 'x = 0', 
    isCorrect: false 
  }
];

export type QuestionOption = {
  label: string;
  text?: string | null;
  mathContent?: MathContent;
  graphContent?: GraphContent;
  isCorrect: boolean;
}
export type MathContent={
    latex: string
    plainText: string
    mathml: string
}

export type CoordinatePoint = {
  x: number;
  y: number;
};

export type KeyCharacteristics = {
  minValue?: number;
  maxValue?: number;
  domain: string;
  range: string;
};

export type GraphContent = {
  type: string;
  hasRealZeros: boolean;
  opensUpward: boolean;
  opensDownward: boolean;
  vertex?: CoordinatePoint;
  yIntercept: number;
  xIntercepts?: number[];
  discriminant: string;
  equation: string;
  keyCharacteristics?: KeyCharacteristics;
   desmosConfig?: DesmosConfiguration; 
};

export type AxisLabels = {
  x: string;
  y: string;
};

export type CoordinateSystem = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  gridEnabled: boolean;
  axisLabels?: AxisLabels;
};

export type KeyPoint = {
  x: number;
  y: number;
  label: string;
};

export type InterceptData = {
  xIntercepts?: number[];
  yIntercept: number;
};

export type GraphFunction = {
  equation: string;
  type: string;
  keyPoints?: KeyPoint[];
  vertex?: CoordinatePoint;
  intercepts?: InterceptData;
};

export type GraphElement = {
  type: string;
  coordinateSystem?: CoordinateSystem;
  functions?: GraphFunction[];
  description: string;
};
export type DesmosConfiguration = {
  expressions?: DesmosExpression[];
  viewport?: DesmosViewport;
  settings?: DesmosSettings;
  pointsOfInterest?: DesmosPointOfInterest[];
};
export type DesmosExpression = {
  id: string;
  latex: string;
  color: string;
  lineStyle: string;
  lineWidth: number;
};

export type DesmosViewport = {
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
};

export type DesmosSettings = {
  showGrid: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  xAxisNumbers: boolean;
  yAxisNumbers: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  xAxisStep: number;
  yAxisStep: number;
};
export type DesmosPointOfInterest = {
  id: string;
  latex: string;
  color: string;
  size: number;
  style: string;
  label: string;
  showLabel: boolean;
};
