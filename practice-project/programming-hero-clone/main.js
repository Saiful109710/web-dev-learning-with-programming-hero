const milestonesData = data.data;

function loadMilestones(){
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestonesData.map(function(milestone){
        return `
            
             <div class="milestone border-b onclick='openMilestone()'>
                            <div class="flex">
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">

                                </div>
                                <div >
                                    <p>${milestone.name}<span><i class="fas fa-chevron-down"></i></span></p>
                                    
                                </div>

                            </div>
                            <div class="hidden_panel">
                            ${milestone.modules.map(function(module){
                                return `
                                          <div class="module border-b">
                                     <p>${module.name}</p>

                                </div>
                                `
                            }).join("")}

                            </div>

                        </div>
    
        `
    }).join('')}`;
}

function openMilestone(){
    document.querySelector(".hidden_panel").classList.toggle('show')

}

loadMilestones();
