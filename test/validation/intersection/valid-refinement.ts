import { intersection, refine, number } from '../../..'

const A = number()
const B = refine(number(), 'positive', (value) => value > 0)

export const Struct = intersection([A, B])

export const data = 1

export const output = 1
