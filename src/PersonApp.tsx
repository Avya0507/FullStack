class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return this.name + ", Age: " + this.age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return "Student: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade;
  }
}

class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }

  getDetails(): string {
    return "Teacher: " + this.name + ", Age: " + this.age + ", Subject: " + this.subject;
  }
}

function PersonApp() {
  const people: Person[] = [
    new Student("Avya", 20, "A"),
    new Teacher("Ms.Amandeep", 27, "Fullstack"),
  ];

  return (
    <div
      style={{
        backgroundColor: "#1b1b2f",
        padding: "30px",
        minHeight: "70vh",
      }}
    >
      <h2 style={{ color: "#fca5a5" }}>Person Class Hierarchy</h2>

      <ul style={{ color: "#d1d5db" }}>
        {people.map((person, index) => (
          <li key={index}>{person.getDetails()}</li>
        ))}
      </ul>
    </div>
  );
}

export default PersonApp;
