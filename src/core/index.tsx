import {
    ReactNode,
    FC
} from "react";
import NCoreContext from "./context";
import {
    NCoreConfig 
} from "./types";
import useStyles from "./style";

type NCoreProvider = {
    config?: NCoreConfig;
    children: ReactNode;
};

const NCoreProvider: FC<NCoreProvider> = ({
    children,
    config
}) => {
    // @ts-ignore
    const classes = useStyles();

    return <NCoreContext
        config={config}
    >
        {children}
    </NCoreContext>;
};
export default NCoreProvider;
