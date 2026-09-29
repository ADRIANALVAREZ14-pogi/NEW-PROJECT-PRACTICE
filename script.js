let students = [
    {id: 1, name: 'John Adrian', program: 'Bachelor of JDM'},
    {id: 2, name: 'Juan Antonio', program: 'Bachelor of PUGE'},
    {id: 3, name: 'Sandra Isa', program: 'Bachelor of BADDIE'},
    {id: 4, name: 'Neil Gian', program: 'Bachelor of FRUITS'},
    {id: 5, name: 'Adi', program: 'Bachelor of V12'},
    {id: 6, name: 'Shony', program: 'Bachelor of BEST MAMA'},
    {id: 7, name: 'Nime', program: 'Bachelor of BEST PAPA'},
    {id: 8, name: 'Zhjno', program: 'Bachelor of PPT818'}
]

const createListItem = (student) =>{
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    //add value
    h2.innerText = student.name;
    p.innerText = student.program;
    button.innerText = 'DELETE';
    button.addEventListener('click', () =>{
        const newStudents = students.filter((s) => s.id !== student.id)
        students = newStudents;
        displayList();
    });
    //add class
    article.classList.add('list-item');
    //insert
    article.append(h2);
    article.append(p);
    article.append(button);
    
    return article;
}

const studentList = students.map((s) => createListItem(s));
const list = document.querySelector('#studentList');

const displayList = () =>{
    list.replaceChildren();
    const studentList = students.map((s) => createListItem(s));
    studentList.forEach((s) => list.append(s));
}
displayList();

const form = document.querySelector('#studentForm');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = nameField.value;
    const program = programField.value;
    const newStudent = {
        id: students.length + 1,    
        name, 
        program
    }
    
    students.push(newStudent);
    nameField.value = '';
    programField.value = '';
    displayList();
});