import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts,deletePost,reset } from "../../features/post/postSlice";
import { Table } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { toast } from 'react-toastify';
import ListOfBlogRow from './ListOfBlogRow';
import { useNavigate } from 'react-router-dom';

const ListOfBlogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleDeletePost = async (postId) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this post?");
      if (confirmed) {
        await dispatch(deletePost(postId)); // Dispatch the deletePost action with postId and token
        dispatch(getAllPosts());
        toast.success('Post deleted successfully');
        dispatch(reset());
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete post');
      dispatch(reset());
    }
  };

  const handleEdit = (postId) => {
    navigate(`/posts/update/${postId}`);
  }


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
              <Table.Row key={post._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {post.title}
              </Table.Cell>
              <Table.Cell>{post.category}</Table.Cell>
              <Table.Cell>
              <button onClick={()=>handleEdit(post._id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
              </button>
              </Table.Cell>
              <Table.Cell>
              <button onClick={() => handleDeletePost(post._id)} className="font-medium text-red-700 hover:underline dark:text-cyan-500">
              Delete
                </button>
              </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ListOfBlogs;
