export function reversString(input) {
   return input.split(' ').reverse().map((q) => q.split('').reverse().join('')).join(' ')
}
