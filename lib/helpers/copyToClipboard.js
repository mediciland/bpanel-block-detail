export default function copyToClipboard (text, callback) {
  return async function () {
    if (navigator) {
      let copied
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
        copied = true
      } else copied = false
      if (callback) {
        callback(copied, text)
      }
    }
  }
}
