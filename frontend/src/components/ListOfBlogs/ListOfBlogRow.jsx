import React from 'react'
import { Table } from "flowbite-react";
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { deletePost, reset } from '../../features/post/postSlice';

const ListOfBlogRow = ({ post }) => {

  const { user } = useSelector(state => state.reducer.auth);
  const dispatch = useDispatch()
  
  const handleDeletePost = async (postId) => {
    try {
      await dispatch(deletePost(postId)); // Dispatch the deletePost action with postId and token
      toast.success('Post deleted successfully');
      dispatch(reset());
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete post');
      dispatch(reset());
    }
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {post.title}
      </Table.Cell>
      <Table.Cell>{post.category}</Table.Cell>
      <Table.Cell>
        <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          Edit
        </button>
      </Table.Cell>
      <Table.Cell>
        <button onClick={() => handleDeletePost(post._id)} className="font-medium text-red-700 hover:underline dark:text-cyan-500">
          Delete
        </button>
      </Table.Cell>
    </Table.Row>
  )
}

export default ListOfBlogRow
