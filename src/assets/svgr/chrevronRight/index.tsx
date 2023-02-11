import {
    INCoreIconProps
} from "../../../core/types";

const SvgChevronRight = ({
    size = 30,
    color,
    ...props
}: INCoreIconProps) => {
    const pathScale = 38 / size;

    return <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.924 19.002 11.657 8.594A2.043 2.043 0 0 1 11 7.106c0-.558.236-1.093.657-1.489.207-.195.454-.35.726-.456a2.365 2.365 0 0 1 1.717 0c.271.106.518.26.725.456L27.344 17.51c.42.397.656.932.656 1.49 0 .558-.236 1.093-.656 1.49l-12.52 11.893c-.206.195-.453.35-.724.456a2.366 2.366 0 0 1-1.717 0 2.237 2.237 0 0 1-.726-.456A2.043 2.043 0 0 1 11 30.894c0-.557.236-1.092.657-1.488l10.267-10.404Z"
      fill={color}
      transform={`scale(${1 / pathScale})`}
    />
  </svg>;
};
export default SvgChevronRight;
