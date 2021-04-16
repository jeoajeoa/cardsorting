
const lists = [0,1,2,3,4,5,6,7,8,9,'김동진', '양정아']
        for(let list of lists){
            const nmn = document.createElement('div');
            nmn.textContent = list
            document.querySelector('.parent').prepend(nmn);
            nmn.classList.add('box')
        }
        const boxes = document.querySelectorAll('.box');
        for(let box of boxes){
        box.onmousedown = function(e) {
            if(e.shiftKey == false){
            console.log(e);
            e.target.style.position = 'absolute';
            e.target.style.zIndex = 1;
            document.body.append(e.target);
            function moveAt(pageX, pageY) {
                e.target.style.left = pageX - e.target.offsetWidth / 2 + 'px';
                e.target.style.top = pageY - e.target.offsetHeight / 2 + 'px';
            }
              moveAt(event.pageX, event.pageY);
            
              function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
                console.log(event.pageX)
                if(event.pageX == 0){
                    moveAt(0, 0);
                    document.removeEventListener('mousemove', onMouseMove);
                }
              }
            
              document.addEventListener('mousemove', onMouseMove);
              
              
            e.target.onmouseup = function(e) {
                document.removeEventListener('mousemove', onMouseMove);
                event.preventDefault()
            }
        }
            
        }
    }
            
// document.addEventListener('keydown', whereTheyAre)
// function whereTheyAre () {
               
// let yList = [];
// let yGroup = [];
// let xList = [];
// let i = 0;
// for(let box of boxes){
//     yList.push(box.style.top);
//     xList.push(box.style.left);
//     }
// for(let y of yList){
//     for(let yy of yList){
//        y= Number(y.substr(0, y.length-2));
//        yy= Number(yy.substr(0, yy.length-2));
//         }
//         if(Math.abs(y-yy)<50){
//             yGroup.push({y,yy})
//             console.log(yGroup);
//         }          
//     }
// }
            
        
        
        // let boxes = document.querySelector('.box');
        // boxes.addEventListener(onmousedown, clickFunction);
        // function clickFunction (e){
        //     e.target.style.position = 'absolute';
        //     e.target.style.zIndex = 1000;
        //     console.log('asdfkadfj');
        // }