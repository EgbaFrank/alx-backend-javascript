interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = { firstName: 'Guillaume', lastName: 'Salve', age: 23, location: 'San Francisco' };
const student2: Student = { firstName: 'James', lastName: 'Waston', age: 27, location: 'Columbia' };

const studentsList: Array<Student> = [ student1, student2 ];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Create table headers
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);

thead.appendChild(headerRow);

// Create table rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

// Assemble table
table.appendChild(thead);
table.appendChild(tbody);

// Add table to page
document.body.appendChild(table);
