import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProjects,reset } from "../../features/projects/projectSlice";
import { Table } from "flowbite-react";
import { Spinner } from "flowbite-react";

const ListOfProjects = () => {
  const dispatch = useDispatch();

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

export default ListOfProjects;
