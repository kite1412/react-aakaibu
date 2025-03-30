export default interface DateRange {
  from: string | null
  to: string | null
  prop: DateProp
}

interface DateProp {
  from: Prop
  to: Prop
  string: string | null
}

interface Prop {
  day: number | null
  month: number | null
  year: number | null
}