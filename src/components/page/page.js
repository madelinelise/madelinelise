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
          title={data.heading_exp.title}
          headingLevel={data.heading_exp.headingLevel}
        />
        <Timeline jobs={data.jobs} />
        <Heading
          title={data.heading.title}
          headingLevel={data.heading_skills.headingLevel}
        />
        <List items={data.project_items} />
        <Heading
          title={data.heading_logos.title}
          headingLevel={data.heading.headingLevel}
        />
        <LogoList items={data.logo_items} />
        <Heading
          title={data.heading_skills.title}
          headingLevel={data.heading_skills.headingLevel}
        />
        <List items={data.skill_items} />
        <Heading
          title={data.heading_thought.title}
          headingLevel={data.heading_thought.headingLevel}
        />
        <span className="thought-list">
          <List items={data.thought_items} />
        </span>
      </div>
    </div>
  </>
);
