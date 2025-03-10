//object literal
let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [ 89, 34, 67 ]
      },
      {
        course: 'INFO 1601',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [ 100, 89, 79 ]
      }
    ]
  };
  
  let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  
  const students = [bob, sally, paul];

  function getAverageGrade(student, course){
    let average=0;
    let count=0;
    for (let i=0;i<student.transcript.length;i++){
        if (student.transcript[i].course === course){
            for (let j=0;j<student.transcript[i].grades.length;j++){
                average += student.transcript[i].grades[j];
                count++;
            }
        }
    }
    if (average === 0){
        average = -1
        count = 1
    }
    return average/count;
  }

console.log(`The Average Grade for ${students[0].fname} is: ${getAverageGrade(students[0],'INFO 1601')}`);

function getAssignmentMark(student,course,num){
  let grade = -1;
  if (student.transcript[course].grades[num]){
    grade = student.transcript[course].grades[num];
  }
  return grade;
}
console.log(`${students[1].fname}'s grade for ${students[1].transcript[0].course} is: ${getAssignmentMark(students[1],0,0)}`);

function averageAssessment(students,courseName,assignment){
  let average=0,count = 0;
  for (let i = 0;i<students.length;i++){
      for (let j=0;j<students[i].transcript.length;j++){
        if (students[i].transcript[j].course === courseName){
          average += students[i].transcript[j].grades[assignment];
          count++;
        }
      }
  }
  average/=count;
  if (average>0){
    return average;
  }else {
    return -1;
  }
}

console.log(`The Average Grade for INFO1601 is: ${averageAssessment(students,'INFO 1601',2)}`);