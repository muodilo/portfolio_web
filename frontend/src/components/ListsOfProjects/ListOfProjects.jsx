import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {deleteProject, getAllProjects,reset,getProjectById } from "../../features/projects/projectSlice";
import { Table } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { toast } from 'react-toastify';

const ListOfProjects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allProjects, isAllProjectsLoading, isAllProjectsSuccess } = useSelector(state => state.reducer.project);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllProjects());
        dispatch(reset());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDeleteProject = async (postId) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this post?");
      if (confirmed) {
        await dispatch(deleteProject(postId)); // Dispatch the deletePost action with postId and token
        dispatch(getAllProjects());
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
    const fetchSinglePost = async () => {
      try {
        await dispatch(getProjectById(postId));
        navigate(`/projects/update/${postId}`);
        dispatch(reset());
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchSinglePost();
    dispatch(reset());
  }

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Project title</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {isAllProjectsLoading ? (
            <tr>
              <td colSpan="4">Loading... <Spinner aria-label="Default status example" /></td>
            </tr>
          ) : (
            allProjects.map((project) => (
              <Table.Row key={project._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {project.title}
                </Table.Cell>
                <Table.Cell>
                  <button onClick={()=>handleEdit(project._id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </button>
                </Table.Cell>
                <Table.Cell>
                  <button onClick={()=>handleDeleteProject(project._id)} className="font-medium text-red-700 hover:underline dark:text-cyan-500">
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

export default ListOfProjects;
