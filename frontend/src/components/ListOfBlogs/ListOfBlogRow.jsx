import React from 'react'
import { Table } from "flowbite-react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector} from 'react-redux';

const ListOfBlogRow = ({ post }) => {

  const { user } = useSelector(state => state.reducer.auth);
  
  const deletePost = async (postId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}` // Include user token in the request headers
        }
      };
      await axios.delete(`http://localhost:5000/api/v1/posts/${postId}`, config);
      toast.success('Post deleted successfully'); // Display success toast
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete post'); // Display error toast
    }
  }
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
        <button onClick={() => deletePost(post._id)} className="font-medium text-red-700 hover:underline dark:text-cyan-500">
          Delete
        </button>
      </Table.Cell>
    </Table.Row>
  )
}

export default ListOfBlogRow
