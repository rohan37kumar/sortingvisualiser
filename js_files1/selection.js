
function Selection_sort()
{
    removeAllChildNodes(div1);
    removeAllChildNodes(div2);
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"darkgrey");//Color update
    }
    div_update(divs[i],div_sizes[i],"darkgrey");//Color update

    enable_buttons();
}

function add_info_selection(){
    
    div1.setAttribute("class","col");
    div2.setAttribute("class","col");
    h2 = document.createElement("h2");
    h2.innerHTML="Key points to remember :";
    div1.appendChild(h2)
    li3=document.createElement("li");
      li3.innerHTML="Minimum swaping( always 1 in each pass)";
    li4=document.createElement("li");
      li4.innerHTML="Inplace Algorithm";
    li5=document.createElement("li");
      li5.innerHTML="Unstable sorting";

    div1.appendChild(li3);
    div1.appendChild(li4);
    div1.appendChild(li5);
    
    h2=document.createElement("h2");
    h2.innerHTML = "Time Complexity : O(n^2)";
    div2.appendChild(h2);
    
    }