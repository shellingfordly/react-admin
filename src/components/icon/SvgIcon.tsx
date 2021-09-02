import { FunctionComponent, SVGAttributes } from 'react'
import './importIcons.ts'
interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
  size?: number
}

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}

const Icon: FunctionComponent<IconProps> = (props) => {
  const { className, size = 16, ...restProps } = props
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <svg
        className={classes('fui-icon', className)}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        {...restProps}
        width={size}
        height={size}
      >
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  )
}

export default Icon