import { isDefined, isString } from 'element-ui/src/utils/types'

const use = (o) => {
  console.log(1111)
  if (!isDefined(o)) return;
  if (isString(o)) {
    window.offsetEl = document.querySelector(o)
    return
  }
  console.error('offset -- the input is a non string parameter!')
}


export default { use }
