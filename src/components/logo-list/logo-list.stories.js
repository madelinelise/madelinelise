import React from "react";
import { List } from "./logo-list";
import data from "./data.json";

// This default export determines where you story goes in the story list
export default {
  title: "Components/LogoList",
  component: List,
};

const Template = (args) => <LogoList items={data.items} />;

export const LogoListStory = Template.bind({});

LogoListStory.args = {
  /* the args you need here will depend on your component */
};
