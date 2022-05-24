import useArticles from "../../../hooks/articlesByYear";
import Image from "next/image";
import { useState } from "react";
import IndexButtons from "./indexButtons/IndexButtons";
import NavButton from "./navButton/NavButton";
import Excerpt from "./excerpt/Excerpt";
import PublishDate from "./publishDate/PublishDate";
import { listing } from "./dummyData/data";
import React from "react";

import * as S from "./styles/styles";

const BlogMobile = ({ allArticles }) => {
  const [list] = useArticles(allArticles);
  const [activeList, setActiveList] = useState(
    listing[listing.length - 1][Object.keys(listing[listing.length - 1])]
  );

  return (
    <S.BlogMobileContainer>
      <IndexButtons listing={list} setList={setActiveList} />

      <div>
        {activeList.map((item) => (
          <S.CurrentListingContainer key={item.id}>
            <PublishDate date={item.createdAt} />
            <h2>{item.title}</h2>
            <div className="mobile-cover-image">
              <Image src={item.coverImage.url} width={900} height={600} />
            </div>
            <S.NavContent>
              <Excerpt content={item.excerpt} />
              <NavButton slug={item.slug} />
            </S.NavContent>
          </S.CurrentListingContainer>
        ))}
      </div>
    </S.BlogMobileContainer>
  );
};

export default BlogMobile;
