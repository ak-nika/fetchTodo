const all_page = document.getElementById("div1");
    const completed_page = document.getElementById("div2");
    const incomplete_page = document.getElementById("div3");
    const btn_all = document.getElementById("btn_all");
    const btn_com = document.getElementById("btn_com");
    const btn_incom = document.getElementById("btn_incom");

    completed_page.style.display = "none";
    incomplete_page.style.display = "none";

    fetch("https://dummyjson.com/todos").then(result=>result.json())
    .then(data=>{
        console.log(data.todos);
        btn_all.addEventListener('click', ()=>{
            if (all_page.style.display = "none") {
                all_page.style.display = "block";
                completed_page.style.display = "none";
                incomplete_page.style.display = "none";
            }
            for (let index = 0; index < data.todos.length; index++) {
                const element = data.todos[index];
                all_page.innerHTML += `
                <span>${element.id}. ${element.todo}</span><br>
                `;
            }
        })
        // allTodo();

        btn_com.addEventListener('click', () => {
            if(completed_page.style.display = "none"){
                completed_page.style.display = "block";
                incomplete_page.style.display = "none";
                all_page.style.display = "none"
            }
            let done = data.todos.filter((el)=> el.completed == true);
            for (let index = 0; index < done.length; index++) {
                const element = data.todos[index];
                completed_page.innerHTML += `
                <span>${element.id}. ${element.todo}</span><br>
                `;
            }
        })

        btn_incom.addEventListener('click', () => {
            if(incomplete_page.style.display = "none"){
                incomplete_page.style.display = "block";
                completed_page.style.display = "none";
                all_page.style.display = "none";
            }
            let notDone = data.todos.filter((el)=> el.completed == false);
            console.log(notDone);
            for (let index = 0; index < notDone.length; index++) {
                const element = data.todos[index];
                incomplete_page.innerHTML += `
                <span>${element.id}. ${element.todo}</span><br>
                `;
            }
        })
    }).catch(err=>{})
