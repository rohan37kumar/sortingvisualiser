var inp_as=document.getElementById('arr_size')
var array_size=inp_as.value;
console.log(array_size);
var inp_gen=document.getElementById("arr_generate");
var inp_aspeed=document.getElementById("arr_speed");


var butts_algos=document.querySelectorAll(".algos button");


var div1 = document.getElementById("div1");

var div2 = document.getElementById("div2");


var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
// cont.style="flex-direction:row";

//Array generation and updation.
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.round(Math.random() * 100);
        divs[i]=document.createElement("div");
            divs[i].classList.add('item');
            var text = document.createTextNode(div_sizes[i]);
            divs[i].appendChild(text);
            divs[i].setAttribute('value',div_sizes[i]);

        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color: ; height:" + (div_sizes[i]) + "%;";
    }
    // just to check :
    for (let i = 0; i < array_size; i++) {
        console.log("div-size"+div_sizes[i]);
        console.log("divs"+divs[i]);
        
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();


//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        // butts_algos[i].classList=[];
        butts_algos[i].classList.add("disabled");
        // butts_algos[i].setAttribute("disabled")

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    // this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble-Sort":Bubble();add_info_bubble();
            break;
        case "Selection-Sort":Selection_sort();add_info_selection();
            break;
        case "Insertion-Sort":Insertion();add_info_insertion();
            break;
        case "Merge-Sort":Merge();add_info_merge();
            break;
        case "Quick-Sort":Quick();add_info_quick();
            break;
        case "Heap-Sort":Heap();add_info_heap();
            break;
    }
}

// range slider style
document.getElementById("arr_size").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #FCB1B1 0%, #FCB1B1 ' + value + '%, #fff ' + value + '%, white 100%)'
  };

 
  document.getElementById("arr_speed").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #FCB1B1 0%, #FCB1B1 ' + value + '%, #fff ' + value + '%, white 100%)'
  };


// to clear algo info

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




















        // function createArray(){
        //     // delete all child if there
        //     var num = document.getElementById("num");
        //     var first = num.firstElementChild;
        //     while(first){
        //         first.remove();
        //         first=num.firstElementChild;
        //     }


        // var range = document.getElementById('range');
        // console.log(range.value)
        // input = range.value;
        // for (i = 0; i < input; i++) {
        //     var a = Math.round(Math.random() * 100);
        //     var node = document.createElement('div');
        //     node.classList.add('item');
        //     var text = document.createTextNode(a);
        //     node.appendChild(text);
        //     node.setAttribute('value',a);
        //     document.getElementById("num").appendChild(node);

        // }
        // }