"use client";
import { useState } from "react";
import Button from "../Button";
import BlogCard from "../blog-card";

export default function BlogList({ blogPosts, isOnHomepage }) {
  //   const newsAmount = 2;

  const [maxAmount, setMaxAmount] = useState(2);

  const increaseMaxAmount = () => {
    setMaxAmount(maxAmount + 2);
  };
  return (
    <>
      <ul className="grid grid-cols-1 gap-8 xl:gap-16 xl:grid-cols-2 mx-auto list-none">
        {blogPosts &&
          blogPosts.slice(0, maxAmount).map((item, i) => {
            return (
              <li key={i} className="mx-auto">
                <BlogCard
                  title={item.fields.title}
                  slug={item.fields.slug}
                  img={item.fields.image ? item.fields.image : ""}
                  href={`/blog/${item.fields.slug}`}
                />{" "}
              </li>
            );
          })}
      </ul>
      {!isOnHomepage && (
        <div className="flex justify-center m-16">
          {maxAmount < blogPosts.length && (
            <Button onClick={increaseMaxAmount} title="więcej"></Button>
          )}
        </div>
      )}
    </>
  );
}
