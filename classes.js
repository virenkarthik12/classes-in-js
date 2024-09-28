class student {
 constructor(name, year) {
    this.name = name;
    this.year = year;
    }
    age(){
     let date = new Date();
     return date.getFullYear() - this.year;
     }}

    student1 = new student("rana", 2001);
   console.log(student1.name)
   console.log(student1.year)

    
   