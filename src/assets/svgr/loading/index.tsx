import {
    INCoreIconProps
} from "../../../core/types";

const SvgLoadingIcon = ({
    size = 22,
    color,
    ...props
}: INCoreIconProps & {
    className?: string;
}) => {
    const pathScale = 22 / size;

    return <span
        style={{
            height: size,
            width: size
        }}
    >
        <svg
            width={size}
            height={size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                clipRule="evenodd"
                d="M6.993 5.446a2 2 0 0 1 1.01-1.737l2.006-1.144a2 2 0 0 1 1.982 0l2.007 1.144a2 2 0 0 1 1.01 1.737v2.25a2 2 0 0 0 1.008 1.738l1.976 1.128A2 2 0 0 1 19 12.299v2.251a2 2 0 0 1-1.008 1.737l-2.004 1.145a2 2 0 0 1-1.989-.003l-1.995-1.147a2 2 0 0 0-1.99-.002L8 17.432a2 2 0 0 1-1.985.001l-2.007-1.146A2 2 0 0 1 3 14.55v-2.252a2 2 0 0 1 1.008-1.736l1.976-1.128a2 2 0 0 0 1.009-1.737v-2.25Z"
                stroke={color}
                strokeOpacity={0.922}
                strokeWidth={3}
                transform={`scale(${1 / pathScale})`}
            />
        </svg>
    </span>;
};
export default SvgLoadingIcon;
