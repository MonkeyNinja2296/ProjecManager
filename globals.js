class project{
  constructor(name,items, descr, ID){
    this.name = name
    this.items = items
    this.descr = descr
    this.ID = ID
  }
}
function getID(){
  for(let i = 0;i < projectList.length ;i++){
    if(projectList[i].ID == null){
      projectList[i].ID = Math.round(random(100000,999999))
    }
  }
}
function change(){
  for(let i = 0; i < projectList[curProject].items.length; i++){
    projectList[curProject].items[i].hide()
  }
  for(let i = 0; i < projectList.length; i++){
    console.log(i)
    if(projectList[i].name == projects.value()){
      curProject = i
      //console.log(curProject)
      for(let j = 0; j < projectList[i].items.length; j++){
        projectList[i].items[j].show()
      }
      return
    }
  }
  
}
function creNeProj(){
  projectList.push(new project(`PROJECT ${projectList.length + 1}`, [], 'DESCRIPTION', null))
  logs()
  projects.selected(`PROJECT ${projectList.length}`)
  //console.log(1)
  change()
  //console.log(2)
}
function save1(){
    
    projectList[curProject].descr = description.value();
}
function creNeItem(){
  projectList[curProject].items.push(createInput(''))
  moveTasks()
}
function moveTasks(){
  let spot = 200
  for(let i = 0; i < projectList[curProject].items.length; i++){
    projectList[curProject].items[i].position(400, spot)
    projectList[curProject].items[i].style('background-color', '#121212')
    projectList[curProject].items[i].style('color', '#ffffff')
    spot += 35
  }
}
