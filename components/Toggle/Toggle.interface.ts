import React from "react";

export interface ToggleInterface {

    value?:boolean;
    onChangeValue?: (isOn:boolean) => void;
    onState?: () => React.ReactNode;
    offState?: () => React.ReactNode;


}