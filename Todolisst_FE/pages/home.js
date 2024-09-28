import Footer from "../componan/footer.js";
import Nav from "../componan/nav.js";

export default class Home{
    constructor(){

        this.nav = new Nav();
        this.footer = new Footer();

    }
    render(mainContainer){
        this.nav.render(mainContainer);
        const main = document.createElement("main");
        main.classList.add("container")
        const addtaskform = document.createElement("form");
        addtaskform.innerHTML=`
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">add task</label>
          <input type="text" 
          class="form-control"
          id="task" name="task" 
          aria-describedby="emailHelp">
        </div>

        <button type="submit" class="btn btn-primary" id = "add-task-btn">Submit</button>


`




        //adđ main 
        mainContainer.appendChild(main);



        //lisr task
        const pre = document.createElement("pre");
        main.appendChild(pre);


        const tasklist = document.createElement("div");
        tasklist.classList.add("list-group")
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
    addtask() {
            console.log("first");
        }




    checkcurrentuser() {}

    gettodolistbyuserid(userid){}
}