import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, getBlogCategories } from "../features/blogs/blogSlice";
import moment from "moment";

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const categoryState = useSelector((state) => state?.blog?.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
    getCategories();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  const getCategories = () => {
    dispatch(getBlogCategories());
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  {categoryState &&
                    categoryState.map((category, index) => (
                      <li key={index}>{category}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogState &&
                blogState.map((item, index) => (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
