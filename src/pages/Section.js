import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const Section = () => {


    const [sectionData,setSectionData] = useState({
        course_id: "",
        section_id: "",
        teacher_id: "",
        year: "",
        phase: "",
        semester:"",
    });

    const handleSectionIdChange = (event) => {
        setSectionData({ ...sectionData, section_id: event.target.value });
    };

    const handleCourseIdChange = (event) => {
        setSectionData({ ...sectionData, course_id: event.target.value });
    };

    const handleTeacherIdChange = (event) => {
        setSectionData({...sectionData,teacher_id: event.target.value});
    };

    const handleYearChange = (event) => {
        setSectionData({ ...sectionData, year: event.target.value });
    };

    const handlePhaseChange = (event) => {
        setSectionData({ ...sectionData, phase: event.target.value });
    };
    const handleSemesterChange = (event) => {
        setSectionData({ ...sectionData, semester: event.target.value });
    };

    const handleSubmitChange = async (event) =>{
        event.preventDefault();
        
        const body = sectionData;

        console.log(body);

        try{

            const response = await fetch(
                `http://localhost:5000/section`, {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),

            });

            const data = await response.json();
            const {message} = data ;
            console.log(message);
            
            setSectionData({
                course_id: "",
                year: "",
                section_id: "",
                semester: "",
                phase: "",
                teacher_id:"",
            });

        }catch(err){
            console.log(err.message);
        }

    };



  return (
    <div class="p-5">
      <div className="my-5">
          <h5>Create Section</h5>
          <hr />
        </div>
      <Form onSubmit={handleSubmitChange}>
      <div class="row">
          <Form.Group className="mb-3" class="col"  controlId="formBasic">
              <Form.Label>Section ID</Form.Label>
              <Form.Control 
                type="basic" 
                placeholder="Enter Section ID" 
                value={sectionData.section_id}
                onChange={handleSectionIdChange}/>
              <Form.Text className="text-muted">
                e.g.   2022-1
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Course ID</Form.Label>
              <Form.Control 
                type="basic" 
                placeholder="Enter Course ID"
                value={sectionData.course_id}
                onChange={handleCourseIdChange}/>
              <Form.Text className="text-muted">
                e.g.   CSE205
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Teacher ID" 
                value={sectionData.teacher_id}
                onChange={handleTeacherIdChange}/>
              <Form.Text className="text-muted">
                e.g.   1
              </Form.Text>
          </Form.Group>
      </div>
      <div class="row" >
          

          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
            <Form.Label>Semester</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter Semester" 
                    value={sectionData.semester}
                    onChange={handleSemesterChange}/>
                <Form.Text className="text-muted">
                    e.g.   5
                </Form.Text>
            </Form.Group>
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>Year</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Enter Year"
                value={sectionData.year}
                onChange={handleYearChange} />
              <Form.Text className="text-muted">
                 e.g.   2022
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>Phase</Form.Label>
              <Form.Control 
                type="number" p
                laceholder="Enter Phase"
                value={sectionData.phase}
                onChange={handlePhaseChange} />
              <Form.Text className="text-muted">
                 e.g.   either 1 or 2
              </Form.Text>
          </Form.Group>
      </div>
      <div class=" pt-4">
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </div>

      
      </Form>
      <hr />
  </div>
  )
}

export default Section