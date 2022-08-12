import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const Schedule = () => {

  const [scheduleData,setScheduledata] = useState({
    date: "",
    course_id: "",
    section_id: "",
    classroom_id: "",
    start_time: "",
    end_time: "",
  });


  const handleDateChange = (event) => {
    console.log(event.target.value);
    setScheduledata({...scheduleData,date: event.target.value});
  }

  const handleCourseIdChange = (event) => {
    console.log(event.target.value);
    setScheduledata({...scheduleData,course_id: event.target.value});
  }

  const handleSectionIdChange = (event) => {
    console.log(event.target.value);
    setScheduledata({...scheduleData,section_id: event.target.value});
  }

  const handleClassroomIdChange = (event) => {
    console.log(event.target.value);
    setScheduledata({...scheduleData,classroom_id: event.target.value});
  }

  const handleStartTimeChange = (event) => {
    console.log(event.target.value);
    setScheduledata({...scheduleData,start_time: event.target.value});
  }

  const handleEndTimeChange = (event) => {
    console.log(event.target.value);
    setScheduledata({...scheduleData,end_time: event.target.value});
  }


  const handleClickChange = async (event) =>{

    event.preventDefault();

    const body = scheduleData;

    console.log(body);

    try{

      const response = await fetch(
        `http://localhost:5000/schedule/post`,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body),
        }
      );
      
      const data = await response.json();
      const {message} = data;
      console.log(message);

    }catch(err){
      console.log(err.message);
    }

  }
return (
  <div class="p-5">
      <div className="my-5">
          <h5>Add Schedule</h5>
          <hr />
        </div>
      <Form>
      <div class="row">
          <Form.Group className="mb-3" class="col"  controlId="formBasic">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" placeholder="Enter Date" value={scheduleData.date} onChange={handleDateChange}/>
              <Form.Text className="text-muted">
                must be in the form YYYY-MM-DD   e.g.   2022-12-21
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Course ID</Form.Label>
              <Form.Control type="basic" placeholder="Enter Course ID" value={scheduleData.course_id} onChange={handleCourseIdChange}/>
              <Form.Text className="text-muted">
                e.g.   CSE205
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Section ID</Form.Label>
              <Form.Control type="basic" placeholder="Section ID" value={scheduleData.section_id} onChange={handleSectionIdChange}/>
              <Form.Text className="text-muted">
                e.g.   2022-1
              </Form.Text>
          </Form.Group>
      </div>
      <div class="row" >
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>Classroom ID</Form.Label>
              <Form.Control type="basic" placeholder="Enter Classroom ID" value={scheduleData.classroom_id} onChange={handleClassroomIdChange}/>
              <Form.Text className="text-muted">
                e.g.   301-IICT
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="basic" placeholder="Enter Start Time" value={scheduleData.start_time} onChange={handleStartTimeChange}/>
              <Form.Text className="text-muted">
                must be in the 24H form HH:MM   e.g.   14:00
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="basic" placeholder="Enter End Time" value={scheduleData.end_time} onChange={handleEndTimeChange}/>
              <Form.Text className="text-muted">
                must be in the 24H form HH:MM   e.g.   14:00
              </Form.Text>
          </Form.Group>
      </div>
      <div class=" pt-4">
        <Button variant="primary" type="submit" onClick={handleClickChange}>
            Submit
        </Button>
      </div>

      
      </Form>
      <hr />
  </div>
)
}

export default Schedule