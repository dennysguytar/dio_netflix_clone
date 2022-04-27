function watch ()
{
    var content = '<div class="watch" style="z-index: 1000; position: fixed; top: 0; background-color: black; align-items: baseline; flex-direction: column; display: flex;"><button id="btn_voltar" onclick="btn_voltar()" role="button" class="botao"><i class="fa-solid fa-arrow-left-long"></i></button><iframe id="video_iframe" src="https://www.youtube.com/embed/FiIhFe4xQzc?autoplay=1" title="For Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" style="width: 100vw; height: calc(100vh - 60px);"></iframe></div>';
    var newNode = document.createElement("DIV");
    newNode.setAttribute("id", "main_watch");
    newNode.innerHTML = content;
    document.body.appendChild(newNode);
}

function btn_voltar()
{
    document.getElementById("main_watch").remove();
}