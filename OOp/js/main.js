










class App {
    constructor(object_list){
        this.$object_list =object_list
        this.$main_component =document.getElementById("list");
        this.load_object_list();
        this.create_button_stop_all();

    }

    load_object_list(){
        this.$object_list.forEach((element) => {
            this.$main_component.appendChild(element.render());

            
        });

    }

    create_button_stop_all(){
        const button =document.createElement("button");
        button.id="stop-all";
        button.innerText="stop-all";


        button.addEventListener("click",()=>{
            this.$object_list.forEach((cat)=>cat.stop);
        });
        this.$main_component.appendChild(button);

    }
}
class Cat{
    constructor(name){
        this.$name=name;
        this.$interval=null; //intitialize the interval ...

    }
    render(){
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexFlow = "row nowrap";
        div.style.justifyContent = "space-arround";

        // Create an h3 element and set its text content
        const h3 = document.createElement("h3");
        h3.textContent = this.$name;
    // Create the "Start" button
        const startButton = document.createElement("button");
        startButton.id = "start-" + this.$name;
        startButton.textContent = "Start";
        startButton.addEventListener("click",this.start.bind(this))


        // Create the "Stop" button
        const stopButton = document.createElement("button");
        startButton.id = "stop-" + this.$name;
        stopButton.textContent = "Stop";
        stopButton.addEventListener("click",this.stop.bind(this))
    // Append elements to the DOM
        div.appendChild(h3);
        div.appendChild(startButton);
        div.appendChild(stopButton);

        return div;
    }
    speak(){
        console.log(this.$name + "Có chuột AAAAAAAAA!!!!!!!!1");
    }
    stop(){
        //dung lai cai speak
        if (this.$interval){
            clearInterval(this.$interval);
            this.$interval =null;
        }
    }

    start(){
        if (!this.$interval){
            this.$interval =setInterval(()=>{
                this.speak();
            },1000);
        }
    }

}


const cat1=new Cat("MiMi")
const cat2=new Cat("Doraemon")
const cat3=new Cat("Doraemi")
const cat4=new Cat("Pikachu")
const cat5=new Cat("capybara")

const app = new App([cat1,cat2,cat3,cat4,cat5]);