import React from "react";
import data from "./data.json";
import "./page.scss";
import { Heading } from "../heading/heading";
import { List } from "../list/list";
import { LogoList } from "../logo-list/logo-list";
import { Timeline } from "../timeline/timeline";
import { Contact } from "../contact/contact";

export const Page = () => (
  <>
    <div className="page-layout">
      <div className="page-layout__column page-layout__column--1">
        <Contact
          description={data.contact.description}
          ctas={data.contact.ctas}
        />
      </div>
      <div className="page-layout__column page-layout__column--2">
        <Heading
          title="Experience"
          headingLevel="h2"
        />
        <Timeline jobs={data.jobs} />
        <Heading
          title="A few organizations I've worked with"
          headingLevel="h2"
        />
        <LogoList items={data.logo_items} />
        <Heading
          title="A few projects I've worked on"
          headingLevel="h2"
        />
        <List items={data.project_items} />
        <Heading
          title="A mix of management + tech skills"
          headingLevel="h2"
        />
        <Heading
          title="Management"
          headingLevel="h3"
        />
        <List items={data.mng_skill_items} />
        <Heading
          title="Technology"
          headingLevel="h3"
        />
        <List items={data.tech_skill_items} />
        <Heading
          title="Thought Leadership"
          headingLevel="h2"
        />
        <span className="thought-list">
          <List items={data.thought_items} />
        </span>
      </div>
    </div>
  </>
);
