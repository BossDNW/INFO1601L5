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

console.log(getAverageGrade(students[0],'INFO 1601'));