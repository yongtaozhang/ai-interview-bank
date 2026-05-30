import {
  frequencyLabels,
  type QuestionFrequency,
} from '../../types/question'

const frequencyOptions: QuestionFrequency[] = ['low', 'medium', 'high']

interface FrequencyFilterProps {
  value: QuestionFrequency | 'all'
  onChange: (value: QuestionFrequency | 'all') => void
}

export default function FrequencyFilter({ value, onChange }: FrequencyFilterProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">高频程度</span>
      <select
        className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none transition hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        onChange={(event) => onChange(event.target.value as QuestionFrequency | 'all')}
        value={value}
      >
        <option value="all">全部频率</option>
        {frequencyOptions.map((frequency) => (
          <option key={frequency} value={frequency}>
            {frequencyLabels[frequency]}
          </option>
        ))}
      </select>
    </label>
  )
}
