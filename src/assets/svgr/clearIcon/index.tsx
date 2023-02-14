import {
    INCoreIconProps
} from "../../../core/types";

const SvgClearIcon = ({
    size = 20,
    color,
    ...props
}: INCoreIconProps) => {
    const pathScale = 16.67 / size;

    return <svg
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8.333 0a8.326 8.326 0 0 1 8.334 8.333 8.326 8.326 0 0 1-8.334 8.334A8.326 8.326 0 0 1 0 8.333 8.326 8.326 0 0 1 8.333 0Zm2.992 4.167L8.333 7.158 5.342 4.167 4.167 5.342l2.991 2.991-2.991 2.992L5.342 12.5l2.991-2.992 2.992 2.992 1.175-1.175-2.992-2.992L12.5 5.342l-1.175-1.175Z"
            fill={color}
            transform={`scale(${1 / pathScale})`}
        />
    </svg>;
};
export default SvgClearIcon;
