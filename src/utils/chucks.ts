const splitIntoChucks = (string_: string, chunkSize: number) => {
  const words = string_.split(' ')
  const chunks = []
  for (let index = 0; index < words.length; index += chunkSize) {
    chunks.push(words.slice(index, index + chunkSize).join(' '))
  }
  return chunks
}
export default splitIntoChucks
