import React from "react";
import {StateRootType} from "./index";
import store from "./State/redux-store";

const StoreContext = React.createContext(store);

export default StoreContext