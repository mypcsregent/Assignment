/**Create a class called as Student. 
 * The class should have the following functionality.
 * a) Create
 * b) fetchDetails
 * c) setMarks
 * d) getMarks
 */

class Student{
    static totalStudents=0;
    static acessTofunctions=0; //to count how many times the functions [Excluding static functions and constructor] are called.

    constructor(fName,lName,dateOfbirth) {
        this.fName=fName;
        this.lName=lName;
        this.dateOfbirth=dateOfbirth;
        Student.totalStudents+=1;
        this.rollNo='A'+Student.totalStudents;
        
    }

    fetchDetails(address,phoneNo) {
        this.address=address;
        this.phoneNo=phoneNo;
        Student.acessTofunctions+=1;
    }

    setMarks(marks){
        this.marksSubject1=marks[0];
        this.marksSubject2=marks[1];
        this.marksSubject3=marks[2];
        Student.acessTofunctions+=1;
    }

    getMarks() {
        Student.acessTofunctions+=1;
        console.log(`marks of Student Name: ${this.fName+' '+this.lName} \nRollno: ${this.rollNo}`);
        console.log(`Subject 1 ${this.marksSubject1}`);
        console.log(`Subject 2 ${this.marksSubject2}`);
        console.log(`Subject 3 ${this.marksSubject3}`);
    }

    static printAcess(){
        console.log(`The Student objects have accessed the functions of the class ${Student.acessTofunctions} times`);
    }

    static printAverage(X){
        var average=(X.marksSubject1+X.marksSubject2+X.marksSubject3)/3;
        console.log(`Student Name: ${this.fName+' '+this.lName}`);
        console.log(`Rollno: ${this.rollNo}`);
        console.log(`Average Marks scored ${average}`);
    }


}


let Std1= new Student("Rajeshwaran", "R", new Date(1999, 05, 15));
console.log(Std1);
let Std2= new Student("Hariom", "vashista", new Date(1997, 08, 05));
console.log(Std2);
let Std3= new Student("DJ", "Sharma", new Date(1998, 03,30 ));
console.log(Std3);


Std1.fetchDetails('Tiruchirappalli', '123234343');
console.log(Std1);

Std2.setMarks([50,40,30]);
console.log(Std2);

Std2.getMarks();

Std3.setMarks([40,40,50]);
Std3.getMarks();

Student.printAverage(Std3);

Student.printAcess();