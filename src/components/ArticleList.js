import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((article, index) => (
            <Article key={index} {...article} />
        ))}
        </main>
    );
}

export default ArticleList;