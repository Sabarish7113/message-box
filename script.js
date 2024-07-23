
    const ask=[
        "What is your name",
        "What is your fav food",
        "What is your hobby"
    ]
function get()
{
    const input = document.getElementById("inp").value
    let now = false

    for(let i=0;i<ask.length;i++)
    {
        if(ask[i]==input)now=true;
    const con = document.getElementById("Ask");
    if(now)
    {
        con.style.backgroundColor="green";
    }
    else
    {
        con.style.backgroundColor="red";
    }
}
}

function leave()
{
    const input=document.getElementById("inp")
    inp.value=""
}