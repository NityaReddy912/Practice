import React from "react";
import SearchBar from "./searchBar";

export default{
    title:'Components/SearchBar',
    component: SearchBar
};

const Template=(args)=><SearchBar {...args}/>;
export const  Default = Template.bind({});

