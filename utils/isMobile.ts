export function isMobile() {
  const agent = navigator.userAgent;
  const k = ["android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser"];
  let flag = false;
  // Windows
  if (agent.indexOf("Windows NT") < 0 || (agent.indexOf("Windows NT") >= 0 && agent.indexOf("compatible; MSIE 9.0;") >= 0)) {
      // Mac PC
      if (agent.indexOf("Windows NT") < 0 && agent.indexOf("Macintosh") < 0) {
          for (let item of k) {
              if (agent.indexOf(item) >= 0) {
                  flag = true;
                  break;
              }
          }
      }
  }
  return flag;
}
