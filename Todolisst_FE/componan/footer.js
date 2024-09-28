export default class Footer{
    constructor(){}

    render(mainContainer){
        const footer = document.createElement("footer")
        footer.classList.add(
            "container",
            "d-flex",
            "flex-wrap",
            "justify-content-between",
            "align-items-center",
            "py-3",
            "my-4",
            "border-top"
        );
        footer.innerHTML=`
        <div class="col-md-4 d-flex align-items-center">
        <a href="../index.html" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <i class="fa-solid fa-house"></i>
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 JSI Foxdemon, Inc</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="https://www.youtube.com" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
      </ul>`;
      mainContainer.appendChild(footer);
    }
}