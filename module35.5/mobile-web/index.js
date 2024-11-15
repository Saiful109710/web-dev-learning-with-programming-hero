
const loadAllPhones = async(status,searchText)=>{
    // document.getElementById("spinner").style.display = "none";
    console.log("3 seconds is gone")
    console.log(searchText);
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`);
    const data  =await res.json();
    if(status){
        displayAllPhone(data.data)
    }else{
        displayAllPhone(data.data.slice(0,6));
    }
    
}


const handleSearch=()=>{
    console.log("hello")
    //  document.getElementById("spinner").style.display = "block";
        const searchText = document.getElementById("search-box").value;
    setTimeout(()=>{
        loadAllPhones(false,searchText);
    },2000)
}

const showAllPhone=()=>{
    console.log("hello");
    loadAllPhones(true);
}

const phoneDetails =async(slug)=>{
    console.log(slug)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const data = await res.json();
    console.log(data.data);
    const {brand,image,phone_name} = data.data;
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = `
          <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">${brand}</h3>
          <p class="py-4">${phone_name}</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    `

    
    my_modal_1.showModal();
}


const displayAllPhone=(phones)=>{
    document.getElementById("phones-container").innerHTML = ''
    console.log(phones)
    const phonesContainer = document.getElementById("phones-container");

    phones.forEach((phone)=>{
        console.log(phone);
        const {brand,image,phone_name,slug} = phone;
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card m-2 bg-base-100 w-96 shadow-xl">
                <figure class="px-10 pt-10">
                    <img
                    src=${image}
                    alt="Shoes"
                    class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone_name}</h2>
                    <p>${slug}</p>
                    <div class="card-actions">
                    <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        `
        phonesContainer.append(div);
    })

}

loadAllPhones(false,"iphone");