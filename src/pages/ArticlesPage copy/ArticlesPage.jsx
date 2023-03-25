import React from "react";
import ArticleItem from "../../compoments/ArticleItem/ArticleItem";
import ResourceItem from "../../compoments/ResourceItem/ResourceItem";
import SubTitle from "../../compoments/SubTitle/SubTitle";
import Dash from "../../compoments/svg/Dash";
import s from "./style.module.css";

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      descr: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
    },
    {
      id: 2,
      descr: "Consume streaming data using Spark Streaming, Flink, and Storm.",
    },
    {
      id: 3,
      descr:
        "Choose an appropriate data storage technology for your application",
    },
    {
      id: 4,
      descr: "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
    },
  ];
  const resources = [
    {
      id: 1,
      img: "/images/res1.jpg",
      title: "Significant reading has more info number",
      descr:
        "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
      date: "October 6, 2021",
    },
    {
      id: 2,
      img: "/images/res2.jpg",
      title: "Many variations of pass majority have suffered",
      descr:
        "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
      date: "October 6, 2021",
    },
    {
      id: 3,
      img: "/images/res3.jpg",
      title: "Words which don’t look even slightly believable",
      descr:
        "Podcasting operational change management inside of workflows to establish a framework.",
      date: "October 6, 2021",
    },
  ];

  return (
    <div className={s.page_articles}>
      <SubTitle subTitle={"What Will You Learn?"} />
      <Dash />
      <div className={s.part1_articles_container}>
        <div className={s.part1_articles_article}>
          {articles.map((item) => (
            <ArticleItem key={item.id} {...item} />
          ))}
        </div>
        <div className={s.part1_articles_rightside}>
          <img
            className={s.image_girl_articles}
            src="/images/girl_articles.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className={s.part2_articles_container}>
        <SubTitle subTitle={"Articles & Resources"} />
        <Dash />
        <div className={s.part2_articles_resources}>
          {resources.map((item) => (
            <ResourceItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
