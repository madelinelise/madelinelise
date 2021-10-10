import React from "react";
import { Contact } from "./contact";
import data from "./data.json";

export default {
  title: "Components/Contact",
  component: Contact,
};

const Template = (args) => <Contact ctas={data.ctas} description={data.description} />;

export const ContactStory = Template.bind({});
