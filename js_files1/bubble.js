
function Bubble()
{
    removeAllChildNodes(div1);
    removeAllChildNodes(div2);
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j],div_sizes[j], "darkgrey");//Color update
    }
    div_update(divs[0],div_sizes[0], "darkgrey");//Color update

    enable_buttons();
}

function add_info_bubble(){
    
    div1.setAttribute("class","col");
    div2.setAttribute("class","col");
    h2 = document.createElement("h2");
    h2.innerHTML="Key points to remember :";
    div1.appendChild(h2)
    li1=document.createElement("li");
      li1.innerHTML="Inplace Algorithm";
    li5=document.createElement("li");
      li5.innerHTML="Stable sorting";
    div1.appendChild(li1);
    div1.appendChild(li5);
    
    h2=document.createElement("h2");
    h2.innerHTML = "Time Complexity : O(n^2)";
    div2.appendChild(h2);
    
    }
