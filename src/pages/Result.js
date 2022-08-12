import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";






const Results = () => {

  let x,y;

  const [searchData, setSearchData] = useState({
    course_id: "",
    section_id: "",
  });

  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\r\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\r\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        console.log(object);
        return object;
      }, {});
      return obj;
    });

    setArray(array);
    console.log(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(searchData);

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  const handleCourseIdChange = (event) => {
    // console.log(event.target.value);
    setSearchData({ ...searchData, course_id: event.target.value });
  };

  const handleSectionIdChange = (event) => {
    // console.log(event.target.value);
    setSearchData({ ...searchData, section_id: event.target.value });
  };

  const handleClickChange = async () => {

    const body = { array, searchData };
    console.log(body);

    try {
      const response = await fetch(`http://localhost:5000/result/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      const [message] = data;
      console.log(message);
    } catch (err) {
      console.log(err.message);
    }
  };

  

  return (
    <div>
      <div class="p-5">
        <div className="my-5">
          <h5>Add Result Entry</h5>
          <hr />
        </div>
        <Form>
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

          <Form.Group className="mb-3" class="col  pt-2" controlId="formBasic">
            <Form.Control
              type="file"
              name="file"
              accept=".csv"
              onChange={handleOnChange}
            />
          </Form.Group>

          

           <div className="pt-3 ">
            <Button variant="primary" type="submit" onClick={handleOnSubmit}>
              Import CSV
            </Button>
          </div> 
        </Form>
        <hr />

        <table className="table">
          <thead>
            <tr key={"header"}>
              {headerKeys.map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {array.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="m-6 input-group-prepend justify-content-md-center text-center btnContainer">
          <Button variant="primary" onClick={handleClickChange}>
            Submit Result
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
