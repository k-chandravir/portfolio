
function rearrange(type){
    // console.log(type)
    const works = document.getElementsByClassName("work");

    // console.log(Array.isArray(works) )
    // console.log(typeof(works))
    // works.forEach((work) => {
    //     work.style.visibility = 'hidden';
        
    // });

    if(type === 'all'){
        for(var work=0; work<works.length; work++){
            works[work].style.display = 'flex';
        }
        return;
    }

    for(var work=0; work<works.length; work++){
        works[work].style.display = 'none';
    }

    if(type === 'game'){
        let games = document.getElementsByClassName("game");

        // games.forEach((game) => {
        //     game.style.visibility = 'visible';
        // });

        for(var game=0; game<games.length; game++){
            games[game].style.display = 'flex';
        }
    }else if(type === 'calculator'){
        let calculators = document.getElementsByClassName("calculator");

        // calculators.forEach((calculator) => {
        //     calculator.style.visibility = 'visible';
        // });

        for(var calculator=0; calculator<calculators.length; calculator++){
            calculators[calculator].style.display = 'flex';
        }
    }else if(type === 'design'){
        let designs = document.getElementsByClassName("design");

        // designs.forEach((design) => {
        //     design.style.visibility = 'visible';
        // });

        for(var design=0; design<designs.length; design++){
            designs[design].style.display = 'flex';
        }
    }else if(type === 'java'){
        let programmes = document.getElementsByClassName("java");

        // programmes.forEach((program) => {
        //     program.style.visibility = 'visible';
        // });

        for(var program=0; program<programmes.length; program++){
            programmes[program].style.display = 'flex';
        }
    }
}

// document.getElementById("game").addEventListener("click", rearrange);