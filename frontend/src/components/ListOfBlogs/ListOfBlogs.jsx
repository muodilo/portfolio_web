import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts,reset } from "../../features/post/postSlice";
import { Table } from "flowbite-react";
import { Spinner } from "flowbite-react";

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
              <Table.Row key={post.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {post.title}
                </Table.Cell>
                <Table.Cell>{post.category}</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Delete
                  </a>
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
