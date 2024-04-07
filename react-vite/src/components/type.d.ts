interface Items {
  date: Date,
  desc: string,
  time: number
}

type Add = (Items) => void
type Del = (number) => () => void
