projectList = [new project(`PROJECT 1`, [], 'DESCRIPTION', null)]
let projects
let curProject = 0

function setup() {
  //projectList = getItem('projects')
  getID()
  createCanvas(windowWidth - 160, windowHeight - 90);
  background('#2b2727');
  projects = createSelect()
  projects.style('background-color', '#2b2727')
  projects.style('color', '#ffffff')
  projects.style('border', '#2b2727');
  projects.position(20,10)
  projects.input(change)
  for(let i = 0; i < projectList.length; i++){
    projects.option(projectList[i].name)
  }

  curName = createInput('')
  //curName.hide()
  //curName.input(logs)
  curName.style('background-color', '#2b2727')
  curName.style('color', '#ffffff')
  curName.style('border', '#2b2727');
  curName.position(10,25)
  curName.changed(changeName)

  createProject = createButton('Create New Project')
  createProject.style('background-color', '#2b2727')
  createProject.style('color', '#ffffff')
  createProject.style('border', '#2b2727');
  createProject.mousePressed(creNeProj)

  itemButton = createButton('Create New Item')
  itemButton.style('background-color', '#2b2727')
  itemButton.style('color', '#ffffff')
  itemButton.style('border', '#2b2727');
  itemButton.position(500,20)
  itemButton.mousePressed(creNeItem)

  description = createElement('textarea')
  description.elt.placeholder = 'DESCRIPTION';
  description.style('background-color', '#2b2727')
  description.style('color', '#ffffff')
  description.style('border', 'solid');
  description.position(20,100)
  description.size(300,300)
  description.input(save1)
}

function draw() {
  
}

function logs(){
  projects.remove()
  projects = createSelect()
  projects.style('background-color', '#2b2727')
  projects.style('color', '#ffffff')
  projects.style('border', '#2b2727');
  projects.changed(change)
  projects.position(20,10)
  for(let i = 0; i < projectList.length; i++){
    projects.option(projectList[i].name)
  }
  
  
}
function changeName(){
  projectList[curProject].name = curName.value()
  logs()
  projects.selected(curName.value())
  curName.value('')
  
  
}
