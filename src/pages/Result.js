import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";

import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

const columns = [
  {
    field: "reg_no",
    headerName: "Registration Number",
    width: 620,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "grade",
    headerName: "Grade",
    type: "float",
    width: 620,
    headerAlign: "center",
    align: "center",
    editable: "True"
  },
];




const Results= () => {


  const [rows,setRows] = useState([]);

  const  [editRows,setEditRows] = useState([]);


  const [searchData, setSearchData] = useState({
    course_id: "",
    section_id: "",
  });

  const handleCourseIdChange = (event) => {
    // console.log(event.target.value);
    setSearchData({ ...searchData, course_id: event.target.value });
  };

  const handleSectionIdChange = (event) => {
    // console.log(event.target.value);
    setSearchData({ ...searchData, section_id: event.target.value });
  };


  const handleClickChange = async (event) => {
    event.preventDefault();
    
    const body = {editRows,searchData};
    console.log(body);

    // try{

    //   const response = await fetch(
    //     `http://localhost:5000/result/students`,{
    //       method: "POST",
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify(body),
    //     }
    //   );

    //   const data = await response.json();
    //   const [message] = data;
    //   console.log(message);

    // }
    // catch(err){
    //   console.log(err.message);
    // }

  };

  const handleSubmitChange = async (event) => {

    event.preventDefault();

    // console.log(searchData);
    const body = searchData ;

    try{

      const response = await fetch(
        `http://localhost:5000/result/register_students`,
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      let {students} = data ;

      students.forEach((x,i) => {
        x.id=i;
      });

      setRows(students);

    }catch(err){
      console.log(err.message);
    }


  };

  const handleEditRowsModelChange = React.useCallback((model) => {
    console.log(model);
    setEditRows(model);
  }, [searchData]);




  return (
    <div>
      <div class="p-5">
        <div className="my-5">
          <h5>Add Result Entry</h5>
          <hr />
        </div>
        <Form onSubmit={handleSubmitChange}>
          <div class="row">
            <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Course Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Code"
                value={searchData.course_id}
                onChange={handleCourseIdChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Section ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Section ID"
                value={searchData.section_id}
                onChange={handleSectionIdChange}
              />
            </Form.Group>
          </div>
          {/* <div class="row">
            <Form.Group
              className="mb-3"
              class="col  pt-2"
              controlId="formBasic"
            >
              <Form.Label>Registration</Form.Label>
              <Form.Control type="number" placeholder="Enter Registration" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              class="col  pt-2"
              controlId="formBasic"
            >
              <Form.Label>Grade</Form.Label>
              <Form.Control type="basic" placeholder="Enter Grade" />
            </Form.Group>
          </div> */}
          <div className="pt-3 ">
            <Button variant="primary" type="submit" >
              Search
            </Button>
          </div>
        </Form>
        <hr />

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            headerHeight={50}
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            hideFooterPagination
            disableColumnFilter
            editRowsModel={editRows}
            onEditRowsModelChange={handleEditRowsModelChange}
            components={{
              Toolbar: () => {
                return (
                  <GridToolbarContainer sx={{ justifyContent: "flex-end" }}>
                    <GridToolbarExport
                      printOptions={{ disableToolbarButton: true }}
                      csvOptions={{
                        fileName: "result",
                        delimiter: ";",
                        utf8WithBom: true,
                      }}
                    />
                  </GridToolbarContainer>
                );
              },
            }}
          />
        </Box>

        <div class="pt-3 d-md-flex justify-content-md-center text-center btnContainer">
          <Button variant="primary" type="submit" onClick={handleClickChange}>
            Update Result
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Results;
