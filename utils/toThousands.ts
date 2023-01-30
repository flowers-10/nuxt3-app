export function toThousands(num:string) {
  return num && num.toString()
    .replace(/\d+/, function(s){
         return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
     })
}
