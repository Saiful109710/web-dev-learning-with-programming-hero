const students = [
    {
      name: "Ayesha Rahman",
      age: 22,
      email: "ayesha.rahman@email.com",
      marks: 72,
      fiftyPercent: true
    },
    {
      name: "Rafiq Ahmed",
      age: 24,
      email: "rafiq.ahmed@email.com",
      marks: 48,
      fiftyPercent: false
    },
    {
      name: "Fatima Khatun",
      age: 20,
      email: "fatima.khatun@email.com",
      marks: 85,
      fiftyPercent: true
    },
    {
      name: "Shakib Al Hasan",
      age: 23,
      email: "shakib.hasan@email.com",
      marks: 39,
      fiftyPercent: false
    },
    {
      name: "Nazmul Hossain",
      age: 21,
      email: "nazmul.hossain@email.com",
      marks: 55,
      fiftyPercent: true
    }
  ];


  const scicEligible = students.filter((student)=>(student.marks>50 && student.fiftyPercent)||(student.marks>60 && student.fiftyPercent===false))

  const lottery = Math.floor(Math.random()*scicEligible.length);
  console.log(scicEligible[lottery])
 


  