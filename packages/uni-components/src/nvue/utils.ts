import { hasOwn } from '@vue/shared'

interface HoverProps {
  hoverClass?: string
  hoverStartTime?: number | string
  hoverStayTime?: number | string
  hoverStopPropagation?: boolean
}
export function useHoverClass(props: HoverProps) {
  if (props.hoverClass && props.hoverClass !== 'none') {
    const hoverAttrs: HoverProps = { hoverClass: props.hoverClass }
    if (hasOwn(props, 'hoverStartTime')) {
      hoverAttrs.hoverStartTime = props.hoverStartTime
    }
    if (hasOwn(props, 'hoverStayTime')) {
      hoverAttrs.hoverStayTime = props.hoverStayTime
    }
    if (hasOwn(props, 'hoverStopPropagation')) {
      hoverAttrs.hoverStopPropagation = props.hoverStopPropagation
    }
    return hoverAttrs
  }
  return {}
}
