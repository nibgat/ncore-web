import {
    ReactNode,
    FC
} from "react";
import NCoreContext from "./context";
import {
    NCoreConfig 
} from "./types";
import useStyles from "./style";
import "./style";

type NCoreProvider = {
    config?: NCoreConfig;
    children: ReactNode;
};

const NCoreProvider: FC<NCoreProvider> = ({
    children,
    config
}) => {
    const classes = useStyles();

    return <NCoreContext
        config={config}
    >
        <header>
            <link rel="stylesheet" href="https://fonts.nibgat.space/ncore.css"/>
        </header>
        <span className={classes.hide}></span>
        {children}
    </NCoreContext>;
};
export default NCoreProvider;
