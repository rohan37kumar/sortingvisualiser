
function Insertion()
{
    removeAllChildNodes(div1);
    removeAllChildNodes(div2);
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"darkgrey");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"darkgrey");//Color update

    enable_buttons();
}

function add_info_insertion(){
    
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