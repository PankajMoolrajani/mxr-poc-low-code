import { makeAutoObservable } from 'mobx'
import ToDoApp from '../apps/ToDoApp.json'

const stateProps = [];

const createStateProperty = (data) => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const singledata = data[key];
      if (singledata instanceof Object) {
        if (singledata.isStateFull) {
          stateProps.push(singledata.name);
        }
        createStateProperty(singledata);
      }
    }
  }
};

createStateProperty(ToDoApp);



class ToDoAppStore { 
  constructor() { 
    stateProps.forEach(prop => {
      this[prop] = null
    })
    makeAutoObservable(this)
  }
}


export default new ToDoAppStore()




 


 