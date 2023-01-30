export function getScrollTop() {
  let e = 0
  return (
    document.documentElement && document.documentElement.scrollTop
      ? (e = document.documentElement.scrollTop)
      : document.body && (e = document.body.scrollTop),
    e
  )
}
