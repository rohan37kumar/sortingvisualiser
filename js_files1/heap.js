
function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"red");//Color update
    div_update(divs[j],div_sizes[j],"red");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"red");//Height update
    div_update(divs[j],div_sizes[j],"red");//Height update

    div_update(divs[i],div_sizes[i],"blue");//Color update
    div_update(divs[j],div_sizes[j],"blue");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    removeAllChildNodes(div1);
    removeAllChildNodes(div2);
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"darkgrey");//Color update
        div_update(divs[i],div_sizes[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"blue");//Color update
        div_update(divs[i],div_sizes[i],"darkgrey");//Color update
    }
    div_update(divs[i],div_sizes[i],"darkgrey");//Color update
}

function add_info_heap(){
    
    div1.setAttribute("class","col");
    div2.setAttribute("class","col");
    h2 = document.createElement("h2");
    h2.innerHTML="Key points to remember :";
    div1.appendChild(h2)
    // li1=document.createElement("li");
    //   li1.innerHTML="Divide and conqure approch";
    li2=document.createElement("li");
      li2.innerHTML="MAX-heap => assending order";
    li3=document.createElement("li");
      li3.innerHTML="MIN-heap => desending order";
    li4=document.createElement("li");
      li4.innerHTML="Inplace Algorithm";
    li5=document.createElement("li");
      li5.innerHTML="Unstable sorting";
    
    div1.appendChild(li2);
    div1.appendChild(li3);
    div1.appendChild(li4);
    div1.appendChild(li5);
    
    h2=document.createElement("h2");
    h2.innerHTML = "Time Complexity : O(n Log n)";
    div2.appendChild(h2);
    
    }