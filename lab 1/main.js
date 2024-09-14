//bai 1 in ra 1 aray chứa tên con vật

//map = foreach -----------------
const animals = [
    {
      name: 'Lion',
      type: 'Mammal',
      weight: 190 // in kg
    },
    {
      name: 'Elephant',
      type: 'Mammal',
      weight: 5400 // in kg
    },
    {
      name: 'Eagle',
      type: 'Bird',
      weight: 6.5 // in kg
    },
    {
      name: 'Shark',
      type: 'Fish',
      weight: 1100 // in kg
    },
    {
      name: 'Frog',
      type: 'Amphibian',
      weight: 0.3 // in kg
    }
  ];

const animal_name=animals.map((item)=>item.name)
document.writeln(animal_name);

//for each 
const animal_name_2=[]
animals.forEach((animal) => {
    animal_name_2.push(animal.name);

    
});
document.writeln(animal_name_2);

//bai 2 Lọc các số chẵn của array bên dưới (theo cú pháp ES6)
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//foreach 
const rs =[];
num_list.forEach(item=>{
    if (item%2==0){
        rs.push(item);
    }


})
document.writeln(rs);

//filter
const rs_2=num_list.filter((item)=>item%2==0);
document.writeln(rs_2);

//bai 3 lọc ra các từ chứa âm "at"
const string_list = ["at", "aat", "java", "cat", "dog"];
//filter +includes
const filtered_list=string_list.filter((item)=>item.includes("at"));
document.writeln(filtered_list);

//bai 4 Chuyển đổi array bên dưới thành dạng key value:
const playerProfile = [
    { name: "Ronaldo", team: "MU?" },
    { name: "Messi", team: "Barca" },
    { name: "Neymar", team: "PSG" },
  ];
const getMapFromArray = data =>{
    return data.reduce((obj,item)=>{
        obj[item.name]={team:item.team};
        return obj;
    },{});
}
const playerProfilesModifines =getMapFromArray(playerProfile);
document.writeln(`<pre></pre>`)
document.writeln(JSON.stringify(playerProfilesModifines));
