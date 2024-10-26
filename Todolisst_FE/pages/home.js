import Footer from "../componan/footer.js";
import Nav from "../componan/nav.js";
import Login from "../login.js";
import app from "../app.js";
import {firebaseapp} from "./firebase.js";
import { collection,  getDocs} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

export default class Home{
    constructor(){
      this.currentUser = localStorage.getItem("currentUser");
      if (!localStorage.getItem("currentUser")) {
        // quay lai trang login
        const login = new Login();
        app.renderComponent(login);
      } else {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      }

        // this.nav = new Nav();
        this.footer = new Footer();

    }
    render(mainContainer){
        // this.nav.render(mainContainer);
        const main = document.createElement("main");
        main.classList.add("container")
        const addtaskform = document.createElement("form");
        addtaskform.innerHTML=`
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">add task</label>
          <input type="text" 
          class="form-control"
          id="task" 
          name="task" 
          aria-describedby="emailHelp">
        </div>

        <button type="submit" class="btn btn-primary" id = "add-task-btn">Submit</button>


`
       
       const _this=this

       addtaskform.addEventListener("click",async function(event){
          const add_btn=event.target.closet("#add-task-btn")
          if (add_btn){
            await _this.addtask();
          }
       })


        //adđ main 
        mainContainer.appendChild(main);



        //lisr task
        const pre = document.createElement("pre");
        main.appendChild(pre);
        
        
        const tasklist = document.createElement("div");
        tasklist.classList.add("list-group")
        await this.addtask()
        tasklist.innerHTML=`
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">A second link item</a>
        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
        <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
        `
        main.appendChild(tasklist);
        // addtaskform.closest("#add-task-btn").addEventListener("click",this.addtask);


        






        //add footer 
        this.footer.render(mainContainer);
    }
    async getTasks() {
            //toddo
            //get all task firebase 

            const querySnapshot = await getDocs(collection(db, "users"));
            const results=[]

            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.data()["created_by"]===this.currentUser.uid){
              results.push(doc);
              //doi lai thanh string 
              switch (doc.data()["status"]) {
                case "cancel":
                  str += `<a
              class="list-group-item list-group-item-action disabled" id="${doc.id}"
              aria-disabled="true">${doc.data()["name"]}</a>`;
                  break;
                case "finished":
                  str += `<a class="list-group-item list-group-item-secondary" id="${
                    doc.id
                  }">${doc.data()["name"]}</a>
      `;
                  break;
                default:
                  str += `<a href="#" class="list-group-item list-group-item-action" id="${
                    doc.id
                  }">${doc.data()["name"]}</a>`;
                  break;
              }
            results.push(str);


            }
                });
              this.$tasklist = [... results]; 

        }
    async addtask(){
      //todo 
      //adđ data
      const task_name = document.getElementById("task").value.trim();

      try {
        const docRef = await addDoc(collection(database, "tasks"), {
          created_at: date.now(),
          created_by: this.currentUser.uid,
          name: task_name,
          status:"due",
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }




    checkcurrentuser() {}


}