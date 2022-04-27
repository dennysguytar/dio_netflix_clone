function get_info ()
{
    var content = '<div class="info_container"><div class="info_capa"><img src="/img/capa-house.jpg" alt=""><div class="info_desc_titulo"><h5 class="titulo_info">FOR LIFE</h5>	<button id="btn_info" onclick="watch()" role="button" class="botao"><i class="fas fa-play"></i>Assistir</button></div></div><div class="info_close" role="button" onclick="info_close()"><i class="fas fa-xmark"></i></div><div class="info_detalhe_main"><div class="info_detalhe"><div class="info_det_varios"><div class="info_det_perc">94% Relevante</div><div class="info_det_ano">2020</div><div class="info_det_idade">16</div><div class="info_det_temp">2 Temporadas</div><div class="info_det_qual">HD</div></div><div class="info_det_rec">Assista à temporada 2 agora</div><div class="info_det_ep">T1:E1 "Piloto"</div><div class="info_det_desc">Aaron Wallace, agora advogado recém-formado na prisão, assume seu primeiro caso e enfrenta um inimigo conhecido.</div></div><div><div style="margin: .5em;"><span style="color: #777;">Elenco:</span> Nicholas Pinnock, Indira Varma, Joy Bryant, mais</div><div style="margin: .5em;"><span style="color: #777;">Gêneros:</span> Séries policiais, Séries de tribunal, Séries dramáticas sobre questões sociais</div><div style="margin: .5em;"><span style="color: #777;">Cenas e momentos:</span> Comoventes</div></div></div></div></div><div onclick="info_close()" class="info_modal"></div>';
    var newNode = document.createElement("DIV");
    newNode.setAttribute("class", "info_main");
    newNode.innerHTML = content;
    document.body.appendChild(newNode);
}


function info_close ()
{
    document.getElementsByClassName("info_main")[0].remove();
    document.getElementsByClassName("info_modal")[0].remove();
}