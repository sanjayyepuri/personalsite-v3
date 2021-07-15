import { Button } from "@carbonplan/components";
import { RotatingArrow } from "@carbonplan/icons";
import React from "react";


const ArrowButton = ({ children, color, size }) => (
    <Button size={size} suffix={<RotatingArrow sx={{color: color}} />}>
        { children }
    </Button>
);

export default ArrowButton;