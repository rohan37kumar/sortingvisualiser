var comparision = 0;

function Merge()
{
    removeAllChildNodes(div1);
    removeAllChildNodes(div2);
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
    
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            comparision ++;
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            comparision ++;
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            comparision ++;
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            comparision ++;
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"darkgrey");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
function add_info_merge(){
    
div1.setAttribute("class","col");
div2.setAttribute("class","col");
h2 = document.createElement("h2");
h2.innerHTML="Key points to remember :";
div1.appendChild(h2)
li1=document.createElement("li");
  li1.innerHTML="Divide and conqure approch";
li2=document.createElement("li");
  li2.innerHTML="Top-Down approch";
li3=document.createElement("li");
  li3.innerHTML="Blind division";
li4=document.createElement("li");
  li4.innerHTML="Outplace Algorithm";
li5=document.createElement("li");
    li5.innerHTML="Stable sorting";
div1.appendChild(li1);
div1.appendChild(li2);
div1.appendChild(li3);
div1.appendChild(li4);
div1.appendChild(li5);

h2=document.createElement("h2");
h2.innerHTML = "Time Complexity : O(Log n)";
div2.appendChild(h2);

}