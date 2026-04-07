interface SectionLabelProps {
  index: number
  label: string
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
      <span className="font-mono text-green text-xs sm:text-sm">0{index}.</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">{label}</h2>
      <div className="flex-1 h-px bg-border ml-2 sm:ml-3" />
    </div>
  )
}
