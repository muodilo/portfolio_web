import React, { useEffect, useState } from 'react';
import BlogCard from "../latestBlogs/BlogCard";
import SkeletonCard from '../latestBlogs/SkeletonCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, getPostByCategory, reset } from "../../features/post/postSlice";

const BlogsContainer = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("all"); // State to track active category

  const { allPosts, isAllPostsLoading, isAllPostsSuccess, postsByCategory, isPostsByCategoryLoading, isPostsByCategorySuccess } = useSelector(state => state.reducer.posts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllPosts());
        dispatch(reset());
      } catch (error) {
        console.error(error);
        dispatch(reset());
      }
    };

    fetchData();
  }, [dispatch]);

  const handleCategoryClick = async (category) => {
    setActiveCategory(category); // Set active category on button click

    if (category === "all") {
      try {
        await dispatch(getAllPosts());
        dispatch(reset());
      } catch (error) {
        console.error(error);
        dispatch(reset());
      }
    } else {
      try {
        await dispatch(getPostByCategory(category));
        dispatch(reset());
      } catch (error) {
        console.error(error);
        dispatch(reset());
      }
    }
  };

  return (
    <section className="px-0 md:px-[60px] lg:px-[100px]">
      <div className="p-3">
        <div className="text-center md:mb-16 animate-in fade-in zoom-in duration-300">
          <button className={`btn m-2 ${activeCategory === "all" ? "btn-primary" : ""}`} onClick={() => handleCategoryClick("all")}>All blogs</button>
          <button className={`btn  m-2 ${activeCategory === "Business" ? "btn-primary" : ""}`} onClick={() => handleCategoryClick("Business")}>Business</button>
          <button className={`btn m-2 ${activeCategory === "Software development" ? "btn-primary" : ""}`} onClick={() => handleCategoryClick("Software development")}>Software development</button>
          <button className={`btn m-2 ${activeCategory === "Tutorials" ? "btn-primary" : ""}`} onClick={() => handleCategoryClick("Tutorials")}>Tutorials</button>
          <button className={`btn m-2 ${activeCategory === "Technology" ? "btn-primary" : ""}`} onClick={() => handleCategoryClick("Technology")}>Technology</button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 animate-in fade-in zoom-in duration-300">
          {(activeCategory === "all" && isAllPostsLoading) && [1, 2, 3, 4, 5, 6].map((post, index) => (
            <SkeletonCard key={index} />
          ))}
          {(activeCategory === "all" && !isAllPostsLoading && isAllPostsSuccess) && allPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
          {(activeCategory !== "all" && isPostsByCategoryLoading) && [1, 2, 3, 4, 5, 6].map((post, index) => (
            <SkeletonCard key={index} />
          ))}
          {(activeCategory !== "all" && !isPostsByCategoryLoading && isPostsByCategorySuccess) && postsByCategory.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsContainer;


