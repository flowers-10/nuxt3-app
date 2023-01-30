export function copy(value:string, callback:Function=()=>{}) {
  if (!document.queryCommandSupported('copy')) {
    callback('暂不支持复制')
    return
  }
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.readOnly = Boolean('readOnly')
  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, value.length)
  document.execCommand('copy')
  textarea.remove()
  callback('复制成功')
}
