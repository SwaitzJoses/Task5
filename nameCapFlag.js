//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/' , true)  
//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    var result = data.forEach(x => console.log(x.name,x.capital, x.flag));
    
    
}


// output:

// Afghanistan Kabul https://restcountries.eu/data/afg.svg
// nameCapFlag.js:16 Åland Islands Mariehamn https://restcountries.eu/data/ala.svg
// nameCapFlag.js:16 Albania Tirana https://restcountries.eu/data/alb.svg
// nameCapFlag.js:16 Algeria Algiers https://restcountries.eu/data/dza.svg
// nameCapFlag.js:16 American Samoa Pago Pago https://restcountries.eu/data/asm.svg
// nameCapFlag.js:16 Andorra Andorra la Vella https://restcountries.eu/data/and.svg
// nameCapFlag.js:16 Angola Luanda https://restcountries.eu/data/ago.svg
// nameCapFlag.js:16 Anguilla The Valley https://restcountries.eu/data/aia.svg
// nameCapFlag.js:16 Antarctica  https://restcountries.eu/data/ata.svg
// nameCapFlag.js:16 Antigua and Barbuda Saint John's https://restcountries.eu/data/atg.svg
// nameCapFlag.js:16 Argentina Buenos Aires https://restcountries.eu/data/arg.svg
// nameCapFlag.js:16 Armenia Yerevan https://restcountries.eu/data/arm.svg
// nameCapFlag.js:16 Aruba Oranjestad https://restcountries.eu/data/abw.svg
// nameCapFlag.js:16 Australia Canberra https://restcountries.eu/data/aus.svg
// nameCapFlag.js:16 Austria Vienna https://restcountries.eu/data/aut.svg
// nameCapFlag.js:16 Azerbaijan Baku https://restcountries.eu/data/aze.svg
// nameCapFlag.js:16 Bahamas Nassau https://restcountries.eu/data/bhs.svg
// nameCapFlag.js:16 Bahrain Manama https://restcountries.eu/data/bhr.svg
// nameCapFlag.js:16 Bangladesh Dhaka https://restcountries.eu/data/bgd.svg
// nameCapFlag.js:16 Barbados Bridgetown https://restcountries.eu/data/brb.svg
// nameCapFlag.js:16 Belarus Minsk https://restcountries.eu/data/blr.svg
// nameCapFlag.js:16 Belgium Brussels https://restcountries.eu/data/bel.svg
// nameCapFlag.js:16 Belize Belmopan https://restcountries.eu/data/blz.svg
// nameCapFlag.js:16 Benin Porto-Novo https://restcountries.eu/data/ben.svg
// nameCapFlag.js:16 Bermuda Hamilton https://restcountries.eu/data/bmu.svg
// nameCapFlag.js:16 Bhutan Thimphu https://restcountries.eu/data/btn.svg
// nameCapFlag.js:16 Bolivia (Plurinational State of) Sucre https://restcountries.eu/data/bol.svg
// nameCapFlag.js:16 Bonaire, Sint Eustatius and Saba Kralendijk https://restcountries.eu/data/bes.svg
// nameCapFlag.js:16 Bosnia and Herzegovina Sarajevo https://restcountries.eu/data/bih.svg
// nameCapFlag.js:16 Botswana Gaborone https://restcountries.eu/data/bwa.svg
// nameCapFlag.js:16 Bouvet Island  https://restcountries.eu/data/bvt.svg
// nameCapFlag.js:16 Brazil Brasília https://restcountries.eu/data/bra.svg
// nameCapFlag.js:16 British Indian Ocean Territory Diego Garcia https://restcountries.eu/data/iot.svg
// nameCapFlag.js:16 United States Minor Outlying Islands  https://restcountries.eu/data/umi.svg
// nameCapFlag.js:16 Virgin Islands (British) Road Town https://restcountries.eu/data/vgb.svg
// nameCapFlag.js:16 Virgin Islands (U.S.) Charlotte Amalie https://restcountries.eu/data/vir.svg
// nameCapFlag.js:16 Brunei Darussalam Bandar Seri Begawan https://restcountries.eu/data/brn.svg
// nameCapFlag.js:16 Bulgaria Sofia https://restcountries.eu/data/bgr.svg
// nameCapFlag.js:16 Burkina Faso Ouagadougou https://restcountries.eu/data/bfa.svg
// nameCapFlag.js:16 Burundi Bujumbura https://restcountries.eu/data/bdi.svg
// nameCapFlag.js:16 Cambodia Phnom Penh https://restcountries.eu/data/khm.svg
// nameCapFlag.js:16 Cameroon Yaoundé https://restcountries.eu/data/cmr.svg
// nameCapFlag.js:16 Canada Ottawa https://restcountries.eu/data/can.svg
// nameCapFlag.js:16 Cabo Verde Praia https://restcountries.eu/data/cpv.svg
// nameCapFlag.js:16 Cayman Islands George Town https://restcountries.eu/data/cym.svg
// nameCapFlag.js:16 Central African Republic Bangui https://restcountries.eu/data/caf.svg
// nameCapFlag.js:16 Chad N'Djamena https://restcountries.eu/data/tcd.svg
// nameCapFlag.js:16 Chile Santiago https://restcountries.eu/data/chl.svg
// nameCapFlag.js:16 China Beijing https://restcountries.eu/data/chn.svg
// nameCapFlag.js:16 Christmas Island Flying Fish Cove https://restcountries.eu/data/cxr.svg
// nameCapFlag.js:16 Cocos (Keeling) Islands West Island https://restcountries.eu/data/cck.svg
// nameCapFlag.js:16 Colombia Bogotá https://restcountries.eu/data/col.svg
// nameCapFlag.js:16 Comoros Moroni https://restcountries.eu/data/com.svg
// nameCapFlag.js:16 Congo Brazzaville https://restcountries.eu/data/cog.svg
// nameCapFlag.js:16 Congo (Democratic Republic of the) Kinshasa https://restcountries.eu/data/cod.svg
// nameCapFlag.js:16 Cook Islands Avarua https://restcountries.eu/data/cok.svg
// nameCapFlag.js:16 Costa Rica San José https://restcountries.eu/data/cri.svg
// nameCapFlag.js:16 Croatia Zagreb https://restcountries.eu/data/hrv.svg
// nameCapFlag.js:16 Cuba Havana https://restcountries.eu/data/cub.svg
// nameCapFlag.js:16 Curaçao Willemstad https://restcountries.eu/data/cuw.svg
// nameCapFlag.js:16 Cyprus Nicosia https://restcountries.eu/data/cyp.svg
// nameCapFlag.js:16 Czech Republic Prague https://restcountries.eu/data/cze.svg
// nameCapFlag.js:16 Denmark Copenhagen https://restcountries.eu/data/dnk.svg
// nameCapFlag.js:16 Djibouti Djibouti https://restcountries.eu/data/dji.svg
// nameCapFlag.js:16 Dominica Roseau https://restcountries.eu/data/dma.svg
// nameCapFlag.js:16 Dominican Republic Santo Domingo https://restcountries.eu/data/dom.svg
// nameCapFlag.js:16 Ecuador Quito https://restcountries.eu/data/ecu.svg
// nameCapFlag.js:16 Egypt Cairo https://restcountries.eu/data/egy.svg
// nameCapFlag.js:16 El Salvador San Salvador https://restcountries.eu/data/slv.svg
// nameCapFlag.js:16 Equatorial Guinea Malabo https://restcountries.eu/data/gnq.svg
// nameCapFlag.js:16 Eritrea Asmara https://restcountries.eu/data/eri.svg
// nameCapFlag.js:16 Estonia Tallinn https://restcountries.eu/data/est.svg
// nameCapFlag.js:16 Ethiopia Addis Ababa https://restcountries.eu/data/eth.svg
// nameCapFlag.js:16 Falkland Islands (Malvinas) Stanley https://restcountries.eu/data/flk.svg
// nameCapFlag.js:16 Faroe Islands Tórshavn https://restcountries.eu/data/fro.svg
// nameCapFlag.js:16 Fiji Suva https://restcountries.eu/data/fji.svg
// nameCapFlag.js:16 Finland Helsinki https://restcountries.eu/data/fin.svg
// nameCapFlag.js:16 France Paris https://restcountries.eu/data/fra.svg
// nameCapFlag.js:16 French Guiana Cayenne https://restcountries.eu/data/guf.svg
// nameCapFlag.js:16 French Polynesia Papeetē https://restcountries.eu/data/pyf.svg
// nameCapFlag.js:16 French Southern Territories Port-aux-Français https://restcountries.eu/data/atf.svg
// nameCapFlag.js:16 Gabon Libreville https://restcountries.eu/data/gab.svg
// nameCapFlag.js:16 Gambia Banjul https://restcountries.eu/data/gmb.svg
// nameCapFlag.js:16 Georgia Tbilisi https://restcountries.eu/data/geo.svg
// nameCapFlag.js:16 Germany Berlin https://restcountries.eu/data/deu.svg
// nameCapFlag.js:16 Ghana Accra https://restcountries.eu/data/gha.svg
// nameCapFlag.js:16 Gibraltar Gibraltar https://restcountries.eu/data/gib.svg
// nameCapFlag.js:16 Greece Athens https://restcountries.eu/data/grc.svg
// nameCapFlag.js:16 Greenland Nuuk https://restcountries.eu/data/grl.svg
// nameCapFlag.js:16 Grenada St. George's https://restcountries.eu/data/grd.svg
// nameCapFlag.js:16 Guadeloupe Basse-Terre https://restcountries.eu/data/glp.svg
// nameCapFlag.js:16 Guam Hagåtña https://restcountries.eu/data/gum.svg
// nameCapFlag.js:16 Guatemala Guatemala City https://restcountries.eu/data/gtm.svg
// nameCapFlag.js:16 Guernsey St. Peter Port https://restcountries.eu/data/ggy.svg
// nameCapFlag.js:16 Guinea Conakry https://restcountries.eu/data/gin.svg
// nameCapFlag.js:16 Guinea-Bissau Bissau https://restcountries.eu/data/gnb.svg
// nameCapFlag.js:16 Guyana Georgetown https://restcountries.eu/data/guy.svg
// nameCapFlag.js:16 Haiti Port-au-Prince https://restcountries.eu/data/hti.svg
// nameCapFlag.js:16 Heard Island and McDonald Islands  https://restcountries.eu/data/hmd.svg
// nameCapFlag.js:16 Holy See Rome https://restcountries.eu/data/vat.svg
// nameCapFlag.js:16 Honduras Tegucigalpa https://restcountries.eu/data/hnd.svg
// nameCapFlag.js:16 Hong Kong City of Victoria https://restcountries.eu/data/hkg.svg
// nameCapFlag.js:16 Hungary Budapest https://restcountries.eu/data/hun.svg
// nameCapFlag.js:16 Iceland Reykjavík https://restcountries.eu/data/isl.svg
// nameCapFlag.js:16 India New Delhi https://restcountries.eu/data/ind.svg
// nameCapFlag.js:16 Indonesia Jakarta https://restcountries.eu/data/idn.svg
// nameCapFlag.js:16 Côte d'Ivoire Yamoussoukro https://restcountries.eu/data/civ.svg
// nameCapFlag.js:16 Iran (Islamic Republic of) Tehran https://restcountries.eu/data/irn.svg
// nameCapFlag.js:16 Iraq Baghdad https://restcountries.eu/data/irq.svg
// nameCapFlag.js:16 Ireland Dublin https://restcountries.eu/data/irl.svg
// nameCapFlag.js:16 Isle of Man Douglas https://restcountries.eu/data/imn.svg
// nameCapFlag.js:16 Israel Jerusalem https://restcountries.eu/data/isr.svg
// nameCapFlag.js:16 Italy Rome https://restcountries.eu/data/ita.svg
// nameCapFlag.js:16 Jamaica Kingston https://restcountries.eu/data/jam.svg
// nameCapFlag.js:16 Japan Tokyo https://restcountries.eu/data/jpn.svg
// nameCapFlag.js:16 Jersey Saint Helier https://restcountries.eu/data/jey.svg
// nameCapFlag.js:16 Jordan Amman https://restcountries.eu/data/jor.svg
// nameCapFlag.js:16 Kazakhstan Astana https://restcountries.eu/data/kaz.svg
// nameCapFlag.js:16 Kenya Nairobi https://restcountries.eu/data/ken.svg
// nameCapFlag.js:16 Kiribati South Tarawa https://restcountries.eu/data/kir.svg
// nameCapFlag.js:16 Kuwait Kuwait City https://restcountries.eu/data/kwt.svg
// nameCapFlag.js:16 Kyrgyzstan Bishkek https://restcountries.eu/data/kgz.svg
// nameCapFlag.js:16 Lao People's Democratic Republic Vientiane https://restcountries.eu/data/lao.svg
// nameCapFlag.js:16 Latvia Riga https://restcountries.eu/data/lva.svg
// nameCapFlag.js:16 Lebanon Beirut https://restcountries.eu/data/lbn.svg
// nameCapFlag.js:16 Lesotho Maseru https://restcountries.eu/data/lso.svg
// nameCapFlag.js:16 Liberia Monrovia https://restcountries.eu/data/lbr.svg
// nameCapFlag.js:16 Libya Tripoli https://restcountries.eu/data/lby.svg
// nameCapFlag.js:16 Liechtenstein Vaduz https://restcountries.eu/data/lie.svg
// nameCapFlag.js:16 Lithuania Vilnius https://restcountries.eu/data/ltu.svg
// nameCapFlag.js:16 Luxembourg Luxembourg https://restcountries.eu/data/lux.svg
// nameCapFlag.js:16 Macao  https://restcountries.eu/data/mac.svg
// nameCapFlag.js:16 Macedonia (the former Yugoslav Republic of) Skopje https://restcountries.eu/data/mkd.svg
// nameCapFlag.js:16 Madagascar Antananarivo https://restcountries.eu/data/mdg.svg
// nameCapFlag.js:16 Malawi Lilongwe https://restcountries.eu/data/mwi.svg
// nameCapFlag.js:16 Malaysia Kuala Lumpur https://restcountries.eu/data/mys.svg
// nameCapFlag.js:16 Maldives Malé https://restcountries.eu/data/mdv.svg
// nameCapFlag.js:16 Mali Bamako https://restcountries.eu/data/mli.svg
// nameCapFlag.js:16 Malta Valletta https://restcountries.eu/data/mlt.svg
// nameCapFlag.js:16 Marshall Islands Majuro https://restcountries.eu/data/mhl.svg
// nameCapFlag.js:16 Martinique Fort-de-France https://restcountries.eu/data/mtq.svg
// nameCapFlag.js:16 Mauritania Nouakchott https://restcountries.eu/data/mrt.svg
// nameCapFlag.js:16 Mauritius Port Louis https://restcountries.eu/data/mus.svg
// nameCapFlag.js:16 Mayotte Mamoudzou https://restcountries.eu/data/myt.svg
// nameCapFlag.js:16 Mexico Mexico City https://restcountries.eu/data/mex.svg
// nameCapFlag.js:16 Micronesia (Federated States of) Palikir https://restcountries.eu/data/fsm.svg
// nameCapFlag.js:16 Moldova (Republic of) Chișinău https://restcountries.eu/data/mda.svg
// nameCapFlag.js:16 Monaco Monaco https://restcountries.eu/data/mco.svg
// nameCapFlag.js:16 Mongolia Ulan Bator https://restcountries.eu/data/mng.svg
// nameCapFlag.js:16 Montenegro Podgorica https://restcountries.eu/data/mne.svg
// nameCapFlag.js:16 Montserrat Plymouth https://restcountries.eu/data/msr.svg
// nameCapFlag.js:16 Morocco Rabat https://restcountries.eu/data/mar.svg
// nameCapFlag.js:16 Mozambique Maputo https://restcountries.eu/data/moz.svg
// nameCapFlag.js:16 Myanmar Naypyidaw https://restcountries.eu/data/mmr.svg
// nameCapFlag.js:16 Namibia Windhoek https://restcountries.eu/data/nam.svg
// nameCapFlag.js:16 Nauru Yaren https://restcountries.eu/data/nru.svg
// nameCapFlag.js:16 Nepal Kathmandu https://restcountries.eu/data/npl.svg
// nameCapFlag.js:16 Netherlands Amsterdam https://restcountries.eu/data/nld.svg
// nameCapFlag.js:16 New Caledonia Nouméa https://restcountries.eu/data/ncl.svg
// nameCapFlag.js:16 New Zealand Wellington https://restcountries.eu/data/nzl.svg
// nameCapFlag.js:16 Nicaragua Managua https://restcountries.eu/data/nic.svg
// nameCapFlag.js:16 Niger Niamey https://restcountries.eu/data/ner.svg
// nameCapFlag.js:16 Nigeria Abuja https://restcountries.eu/data/nga.svg
// nameCapFlag.js:16 Niue Alofi https://restcountries.eu/data/niu.svg
// nameCapFlag.js:16 Norfolk Island Kingston https://restcountries.eu/data/nfk.svg
// nameCapFlag.js:16 Korea (Democratic People's Republic of) Pyongyang https://restcountries.eu/data/prk.svg
// nameCapFlag.js:16 Northern Mariana Islands Saipan https://restcountries.eu/data/mnp.svg
// nameCapFlag.js:16 Norway Oslo https://restcountries.eu/data/nor.svg
// nameCapFlag.js:16 Oman Muscat https://restcountries.eu/data/omn.svg
// nameCapFlag.js:16 Pakistan Islamabad https://restcountries.eu/data/pak.svg
// nameCapFlag.js:16 Palau Ngerulmud https://restcountries.eu/data/plw.svg
// nameCapFlag.js:16 Palestine, State of Ramallah https://restcountries.eu/data/pse.svg
// nameCapFlag.js:16 Panama Panama City https://restcountries.eu/data/pan.svg
// nameCapFlag.js:16 Papua New Guinea Port Moresby https://restcountries.eu/data/png.svg
// nameCapFlag.js:16 Paraguay Asunción https://restcountries.eu/data/pry.svg
// nameCapFlag.js:16 Peru Lima https://restcountries.eu/data/per.svg
// nameCapFlag.js:16 Philippines Manila https://restcountries.eu/data/phl.svg
// nameCapFlag.js:16 Pitcairn Adamstown https://restcountries.eu/data/pcn.svg
// nameCapFlag.js:16 Poland Warsaw https://restcountries.eu/data/pol.svg
// nameCapFlag.js:16 Portugal Lisbon https://restcountries.eu/data/prt.svg
// nameCapFlag.js:16 Puerto Rico San Juan https://restcountries.eu/data/pri.svg
// nameCapFlag.js:16 Qatar Doha https://restcountries.eu/data/qat.svg
// nameCapFlag.js:16 Republic of Kosovo Pristina https://restcountries.eu/data/kos.svg
// nameCapFlag.js:16 Réunion Saint-Denis https://restcountries.eu/data/reu.svg
// nameCapFlag.js:16 Romania Bucharest https://restcountries.eu/data/rou.svg
// nameCapFlag.js:16 Russian Federation Moscow https://restcountries.eu/data/rus.svg
// nameCapFlag.js:16 Rwanda Kigali https://restcountries.eu/data/rwa.svg
// nameCapFlag.js:16 Saint Barthélemy Gustavia https://restcountries.eu/data/blm.svg
// nameCapFlag.js:16 Saint Helena, Ascension and Tristan da Cunha Jamestown https://restcountries.eu/data/shn.svg
// nameCapFlag.js:16 Saint Kitts and Nevis Basseterre https://restcountries.eu/data/kna.svg
// nameCapFlag.js:16 Saint Lucia Castries https://restcountries.eu/data/lca.svg
// nameCapFlag.js:16 Saint Martin (French part) Marigot https://restcountries.eu/data/maf.svg
// nameCapFlag.js:16 Saint Pierre and Miquelon Saint-Pierre https://restcountries.eu/data/spm.svg
// nameCapFlag.js:16 Saint Vincent and the Grenadines Kingstown https://restcountries.eu/data/vct.svg
// nameCapFlag.js:16 Samoa Apia https://restcountries.eu/data/wsm.svg
// nameCapFlag.js:16 San Marino City of San Marino https://restcountries.eu/data/smr.svg
// nameCapFlag.js:16 Sao Tome and Principe São Tomé https://restcountries.eu/data/stp.svg
// nameCapFlag.js:16 Saudi Arabia Riyadh https://restcountries.eu/data/sau.svg
// nameCapFlag.js:16 Senegal Dakar https://restcountries.eu/data/sen.svg
// nameCapFlag.js:16 Serbia Belgrade https://restcountries.eu/data/srb.svg
// nameCapFlag.js:16 Seychelles Victoria https://restcountries.eu/data/syc.svg
// nameCapFlag.js:16 Sierra Leone Freetown https://restcountries.eu/data/sle.svg
// nameCapFlag.js:16 Singapore Singapore https://restcountries.eu/data/sgp.svg
// nameCapFlag.js:16 Sint Maarten (Dutch part) Philipsburg https://restcountries.eu/data/sxm.svg
// nameCapFlag.js:16 Slovakia Bratislava https://restcountries.eu/data/svk.svg
// nameCapFlag.js:16 Slovenia Ljubljana https://restcountries.eu/data/svn.svg
// nameCapFlag.js:16 Solomon Islands Honiara https://restcountries.eu/data/slb.svg
// nameCapFlag.js:16 Somalia Mogadishu https://restcountries.eu/data/som.svg
// nameCapFlag.js:16 South Africa Pretoria https://restcountries.eu/data/zaf.svg
// nameCapFlag.js:16 South Georgia and the South Sandwich Islands King Edward Point https://restcountries.eu/data/sgs.svg
// nameCapFlag.js:16 Korea (Republic of) Seoul https://restcountries.eu/data/kor.svg
// nameCapFlag.js:16 South Sudan Juba https://restcountries.eu/data/ssd.svg
// nameCapFlag.js:16 Spain Madrid https://restcountries.eu/data/esp.svg
// nameCapFlag.js:16 Sri Lanka Colombo https://restcountries.eu/data/lka.svg
// nameCapFlag.js:16 Sudan Khartoum https://restcountries.eu/data/sdn.svg
// nameCapFlag.js:16 Suriname Paramaribo https://restcountries.eu/data/sur.svg
// nameCapFlag.js:16 Svalbard and Jan Mayen Longyearbyen https://restcountries.eu/data/sjm.svg
// nameCapFlag.js:16 Swaziland Lobamba https://restcountries.eu/data/swz.svg
// nameCapFlag.js:16 Sweden Stockholm https://restcountries.eu/data/swe.svg
// nameCapFlag.js:16 Switzerland Bern https://restcountries.eu/data/che.svg
// nameCapFlag.js:16 Syrian Arab Republic Damascus https://restcountries.eu/data/syr.svg
// nameCapFlag.js:16 Taiwan Taipei https://restcountries.eu/data/twn.svg
// nameCapFlag.js:16 Tajikistan Dushanbe https://restcountries.eu/data/tjk.svg
// nameCapFlag.js:16 Tanzania, United Republic of Dodoma https://restcountries.eu/data/tza.svg
// nameCapFlag.js:16 Thailand Bangkok https://restcountries.eu/data/tha.svg
// nameCapFlag.js:16 Timor-Leste Dili https://restcountries.eu/data/tls.svg
// nameCapFlag.js:16 Togo Lomé https://restcountries.eu/data/tgo.svg
// nameCapFlag.js:16 Tokelau Fakaofo https://restcountries.eu/data/tkl.svg
// nameCapFlag.js:16 Tonga Nuku'alofa https://restcountries.eu/data/ton.svg
// nameCapFlag.js:16 Trinidad and Tobago Port of Spain https://restcountries.eu/data/tto.svg
// nameCapFlag.js:16 Tunisia Tunis https://restcountries.eu/data/tun.svg
// nameCapFlag.js:16 Turkey Ankara https://restcountries.eu/data/tur.svg
// nameCapFlag.js:16 Turkmenistan Ashgabat https://restcountries.eu/data/tkm.svg
// nameCapFlag.js:16 Turks and Caicos Islands Cockburn Town https://restcountries.eu/data/tca.svg
// nameCapFlag.js:16 Tuvalu Funafuti https://restcountries.eu/data/tuv.svg
// nameCapFlag.js:16 Uganda Kampala https://restcountries.eu/data/uga.svg
// nameCapFlag.js:16 Ukraine Kiev https://restcountries.eu/data/ukr.svg
// nameCapFlag.js:16 United Arab Emirates Abu Dhabi https://restcountries.eu/data/are.svg
// nameCapFlag.js:16 United Kingdom of Great Britain and Northern Ireland London https://restcountries.eu/data/gbr.svg
// nameCapFlag.js:16 United States of America Washington, D.C. https://restcountries.eu/data/usa.svg
// nameCapFlag.js:16 Uruguay Montevideo https://restcountries.eu/data/ury.svg
// nameCapFlag.js:16 Uzbekistan Tashkent https://restcountries.eu/data/uzb.svg
// nameCapFlag.js:16 Vanuatu Port Vila https://restcountries.eu/data/vut.svg
// nameCapFlag.js:16 Venezuela (Bolivarian Republic of) Caracas https://restcountries.eu/data/ven.svg
// nameCapFlag.js:16 Viet Nam Hanoi https://restcountries.eu/data/vnm.svg
// nameCapFlag.js:16 Wallis and Futuna Mata-Utu https://restcountries.eu/data/wlf.svg
// nameCapFlag.js:16 Western Sahara El Aaiún https://restcountries.eu/data/esh.svg
// nameCapFlag.js:16 Yemen Sana'a https://restcountries.eu/data/yem.svg
// nameCapFlag.js:16 Zambia Lusaka https://restcountries.eu/data/zmb.svg
