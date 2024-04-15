import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts,reset } from "../../features/post/postSlice";
import { Table } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { toast } from 'react-toastify';
import ListOfBlogRow from './ListOfBlogRow';

const ListOfBlogs = () => {
  const dispatch = useDispatch();

  const { allPosts, isAllPostsLoading, isAllPostsSuccess } = useSelector(state => state.reducer.posts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllPosts());
        dispatch(reset());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);


  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Blog title</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {isAllPostsLoading ? (
            <tr>
              <td colSpan="4">Loading... <Spinner aria-label="Default status example" /></td>
            </tr>
          ) : (
            allPosts.map((post) => (
              <ListOfBlogRow key={post._id } post={post} />
            ))
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ListOfBlogs;
