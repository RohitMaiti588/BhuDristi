/* =========================================================================
   BhuDrishti AI : Land Record Digitization, Validation & GIS Intelligence
   Pure HTML / CSS / JS. All data persists locally (localStorage) for this
   offline-first prototype build. No server, no external backend.
   ========================================================================= */

/* ---------------- ICONS (custom line-icon set) ---------------- */
const ICON = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="7" height="8" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="5" rx="1.6"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.6"/><rect x="3.5" y="14.5" width="7" height="6" rx="1.6"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M12 4l-4 4M12 4l4 4"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>',
  extract:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>',
  dup:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="8.5" y="8.5" width="12" height="12" rx="2.2"/><path d="M15.5 8.5V5.7a2.2 2.2 0 0 0-2.2-2.2H5.7a2.2 2.2 0 0 0-2.2 2.2v7.6a2.2 2.2 0 0 0 2.2 2.2h2.8" stroke-linecap="round"/></svg>',
  anomaly:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v5M12 15.5h.01"/></svg>',
  verify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.5 11.2 15 15.5 9.5"/><circle cx="12" cy="12" r="9"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.6-4.6"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M9 3 3 5.5v15L9 18l6 2.5 6-2.5v-15L15 5.5 9 3Z"/><path d="M9 3v15M15 5.5v15"/></svg>',
  report:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M4 20h16"/></svg>',
  audit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.3"/><path d="M2.8 19c.7-3.4 3.2-5.3 6.2-5.3s5.5 1.9 6.2 5.3"/><circle cx="17.5" cy="8.5" r="2.5"/><path d="M15.6 13.9c2.4.4 4.1 2.1 4.6 5.1"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15.3V11a6 6 0 1 0-12 0v4.3L4 18h16z"/><path d="M9.5 21a2.5 2.5 0 0 0 5 0"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a7.7 7.7 0 0 0 0-2l2-1.5-2-3.4-2.4 1a7.8 7.8 0 0 0-1.7-1L15 3.5h-4l-.3 2.6a7.8 7.8 0 0 0-1.7 1l-2.4-1-2 3.4L6.6 11a7.7 7.7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7.8 7.8 0 0 0 1.7 1l.3 2.6h4l.3-2.6a7.8 7.8 0 0 0 1.7-1l2.4 1 2-3.4Z"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2"/><path d="M6 14h12v7H6z"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
  gavel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 4.5 5 5M8 11l5.5-5.5 3.5 3.5L11.5 15zM3 21h9M6.5 17.5 3 21"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 6v6c0 4.5 3.2 7.5 7.5 9 4.3-1.5 7.5-4.5 7.5-9V6z"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
};
const BRAND_MARK = `<svg class="mark" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="18.5" stroke="var(--copper)" stroke-width="2"/>
  <path d="M4 20c4-6.5 10.5-10.5 16-10.5S32 13.5 36 20c-4 6.5-10.5 10.5-16 10.5S8 26.5 4 20Z" stroke="var(--teal)" stroke-width="1.6"/>
  <circle cx="20" cy="20" r="6.5" fill="var(--copper)"/>
  <circle cx="22" cy="18" r="2" fill="#FBF6EA"/>
</svg>`;

/* ---------------- STORAGE KEYS ---------------- */
const K_RECORDS="bhudrishti_records", K_USERS="bhudrishti_users", K_SESSION="bhudrishti_session",
      K_AUDIT="bhudrishti_audit", K_ACTIVITY="bhudrishti_activity", K_TREND="bhudrishti_trend";

function load(key, fallback){ try{ const v = JSON.parse(localStorage.getItem(key)); return v==null? fallback : v; }catch(e){ return fallback; } }
function save(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

/* ---------------- REFERENCE DATA: states, districts, escalation contacts ---------------- */
const DISTRICTS = {
  "Coimbatore": {state:"Tamil Nadu", lat:11.0168, lng:76.9558, court:"District & Sessions Court, Coimbatore", courtPhone:"+91 422 230 1145", police:"Coimbatore City Police Commissionerate", policePhone:"112 / 0422-2301100"},
  "Lucknow": {state:"Uttar Pradesh", lat:26.8467, lng:80.9462, court:"District & Sessions Court, Lucknow", courtPhone:"+91 522 262 0011", police:"Lucknow Police Commissionerate", policePhone:"112 / 0522-2620000"},
  "Jaipur": {state:"Rajasthan", lat:26.9124, lng:75.7873, court:"District & Sessions Court, Jaipur", courtPhone:"+91 141 220 7100", police:"Jaipur Police Commissionerate", policePhone:"112 / 0141-2202201"},
  "Ranchi": {state:"Jharkhand", lat:23.3441, lng:85.3096, court:"District & Sessions Court, Ranchi", courtPhone:"+91 651 221 2200", police:"Ranchi District Police", policePhone:"112 / 0651-2200100"},
  "Mysuru": {state:"Karnataka", lat:12.2958, lng:76.6394, court:"District & Sessions Court, Mysuru", courtPhone:"+91 821 242 0011", police:"Mysuru City Police", policePhone:"112 / 0821-2419000"},
};
/* ---------------- FULL INDIA STATE/UT -> DISTRICT REFERENCE (for officer signup jurisdiction) ----------------
   Covers all 28 states + 8 union territories (36 total), reflecting the post-2019 Jammu & Kashmir / Ladakh
   split and the 2020 Dadra and Nagar Haveli + Daman and Diu merger. District lists include the major
   2020-2023 reorganisations where confirmed (e.g. Andhra Pradesh's 26 districts, Tamil Nadu's newer
   districts, Chhattisgarh's newest districts); a few states omit the very latest, still-shifting splits
   to avoid guessing at names. This is separate from DISTRICTS above, which only holds the small curated
   set used for seed land records, GIS coordinates and escalation contacts. */

const INDIA_STATES_DISTRICTS = {
  "Andaman and Nicobar Islands": ["Nicobar","North and Middle Andaman","South Andaman"],
  "Andhra Pradesh": ["Srikakulam","Parvathipuram Manyam","Vizianagaram","Visakhapatnam","Anakapalli","Alluri Sitharama Raju","Kakinada","East Godavari","Konaseema","West Godavari","Eluru","Krishna","NTR","Guntur","Palnadu","Bapatla","Prakasam","SPSR Nellore","Kurnool","Nandyal","Anantapur","Sri Sathya Sai","YSR Kadapa","Annamayya","Chittoor","Tirupati"],
  "Arunachal Pradesh": ["Tawang","West Kameng","East Kameng","Pakke-Kessang","Papum Pare","Kurung Kumey","Kra Daadi","Lower Subansiri","Upper Subansiri","Kamle","West Siang","East Siang","Siang","Upper Siang","Lower Siang","Shi Yomi","Lepa Rada","Lower Dibang Valley","Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding"],
  "Assam": ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
  "Bihar": ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariaband","Gaurella-Pendra-Marwahi","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Khairagarh-Chhuikhadan-Gandai","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Manendragarh-Chirmiri-Bharatpur","Mohla-Manpur-Ambagarh Chowki","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sarangarh-Bilaigarh","Shakti","Sukma","Surajpur","Surguja"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Dadra and Nagar Haveli","Daman","Diu"],
  "Delhi": ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],
  "Goa": ["North Goa","South Goa"],
  "Gujarat": ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"],
  "Haryana": ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
  "Jammu and Kashmir": ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
  "Jharkhand": ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"],
  "Karnataka": ["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayanagara","Vijayapura (Bijapur)","Yadgir"],
  "Kerala": ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
  "Ladakh": ["Kargil","Leh"],
  "Lakshadweep": ["Lakshadweep"],
  "Madhya Pradesh": ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad (Narmadapuram)","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
  "Maharashtra": ["Ahmednagar","Akola","Amravati","Beed","Bhandara","Buldhana","Chandrapur","Chhatrapati Sambhajinagar (Aurangabad)","Dharashiv (Osmanabad)","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
  "Manipur": ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],
  "Meghalaya": ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
  "Mizoram": ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
  "Nagaland": ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
  "Odisha": ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"],
  "Puducherry": ["Karaikal","Mahe","Puducherry","Yanam"],
  "Punjab": ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr (SBS Nagar)","Pathankot","Patiala","Rupnagar","SAS Nagar (Mohali)","Sangrur","Tarn Taran"],
  "Rajasthan": ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"],
  "Sikkim": ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
  "Tamil Nadu": ["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],
  "Telangana": ["Adilabad","Bhadradri Kothagudem","Hanumakonda","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal-Malkajgiri","Mulugu","Nagarkurnool","Narayanpet","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
  "Uttar Pradesh": ["Agra","Aligarh","Prayagraj (Allahabad)","Ambedkar Nagar","Amethi","Amroha (J.P. Nagar)","Auraiya","Ayodhya (Faizabad)","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur (Panchsheel Nagar)","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
  "Uttarakhand": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],
  "West Bengal": ["Alipurduar","Bankura","Birbhum","Purba Bardhaman (East Burdwan)","Paschim Bardhaman (West Burdwan)","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"],
};


/* ---------------- SEED LAND RECORDS ---------------- */
let _id = 4000;
function rec(o){ return Object.assign({ id:"BD-"+(_id++), digitized:true, verified:"pending" }, o); }
function jitter(base, i){ return base + ((i%7)-3)*0.012; }

const SEED_RECORDS = [
  rec({owner:"Ramesh Kumar", survey:"142/3A", village:"Kurumbapalayam", district:"Coimbatore", area:2.40, doc:"DOC-88213", regDate:"2014-06-12", status:"valid", confidence:98, verified:"approved"}),
  rec({owner:"Selvam Muthu K", survey:"118/2B", village:"Perur", district:"Coimbatore", area:3.10, doc:"DOC-77231", regDate:"2011-03-15", status:"valid", confidence:97, verified:"approved"}),
  rec({owner:"Lakshmi Narayanan", survey:"56/1", village:"Sulur", district:"Coimbatore", area:1.75, doc:"DOC-65120", regDate:"2009-11-02", status:"valid", confidence:96, verified:"approved"}),
  rec({owner:"Meena Sundaram", survey:"210/4C", village:"Annur", district:"Coimbatore", area:4.60, doc:"DOC-91004", regDate:"2017-01-22", status:"valid", confidence:95, verified:"approved"}),
  rec({owner:"Karthik Raja", survey:"77/2", village:"Pollachi", district:"Coimbatore", area:2.90, doc:"DOC-55871", regDate:"2012-08-09", status:"mismatch", confidence:81, verified:"pending", note:"Area extracted 3.4 ac vs registry 2.9 ac"}),
  rec({owner:"Suresh Babu P", survey:"33/1A", village:"Madukkarai", district:"Coimbatore", area:2.10, doc:"DOC-40218", regDate:"2016-05-30", status:"mismatch", confidence:74, verified:"pending", note:"Owner name spelling differs from registry"}),
  rec({owner:"Devi Prakash", survey:"19/2", village:"Thondamuthur", district:"Coimbatore", area:5.20, doc:"DOC-30011", regDate:"2010-02-18", status:"anomaly", confidence:68, verified:"pending", note:"Land area unusually large for parcel class"}),
  rec({owner:"Rajendran S", survey:"88/", village:"Karamadai", district:"Coimbatore", area:1.40, doc:"DOC-21987", regDate:"2013-09-10", status:"anomaly", confidence:55, verified:"pending", note:"Survey number format incomplete"}),
  rec({owner:"Ganesan V", survey:"142/3A", village:"Kurumbapalayam", district:"Coimbatore", area:2.40, doc:"DOC-88213", regDate:"2014-06-12", status:"duplicate", confidence:60, verified:"pending", note:"Duplicate of BD-4000 — identical survey no. & document no."}),
  rec({owner:"Bhuvaneswari R", survey:"64/3", village:"Sarcarsamakulam", district:"Coimbatore", area:0.85, doc:"DOC-19233", regDate:"2018-07-04", status:"valid", confidence:94, verified:"approved"}),
  rec({owner:"Manikandan T", survey:"101/1B", village:"Kinathukadavu", district:"Coimbatore", area:3.60, doc:"DOC-60044", regDate:"2015-12-01", status:"valid", confidence:93, verified:"approved"}),
  rec({owner:"Anitha Ravi", survey:"12/4", village:"Perur", district:"Coimbatore", area:2.00, doc:"DOC-70092", regDate:"2019-04-19", status:"anomaly", confidence:50, verified:"pending", note:"Taluk field missing from source document"}),
  rec({owner:"Palanisamy K", survey:"29/2A", village:"Pollachi", district:"Coimbatore", area:6.80, doc:"DOC-88450", regDate:"2008-10-27", status:"valid", confidence:91, verified:"approved"}),
  rec({owner:"Vasanthi M", survey:"71/1", village:"Annur", district:"Coimbatore", area:2.25, doc:"DOC-33221", regDate:"2020-01-08", status:"valid", confidence:96, verified:"approved"}),
  rec({owner:"Yogeswari S", survey:"90/2", village:"Karamadai", district:"Coimbatore", area:38.0, doc:"DOC-99871", regDate:"2007-03-02", status:"anomaly", confidence:47, verified:"pending", note:"Extent (38.0 ac) far exceeds village average — possible OCR misread"}),
  rec({owner:"Kalaivani D", survey:"118/2B", village:"Perur", district:"Coimbatore", area:3.1, doc:"DOC-77231", regDate:"2011-03-15", status:"duplicate", confidence:62, verified:"pending", note:"Duplicate of BD-4001 — same survey & document number"}),
  rec({owner:"Elumalai P", survey:"63/1", village:"Madukkarai", district:"Coimbatore", area:2.65, doc:"DOC-48117", regDate:"2016-09-05", status:"valid", confidence:90, verified:"approved"}),
  rec({owner:"Ashok Tiwari", survey:"UP-2210", village:"Rampur Kalan", district:"Lucknow", area:2.15, doc:"DOC-51190", regDate:"2013-02-14", status:"valid", confidence:95, verified:"approved"}),
  rec({owner:"Rekha Singh", survey:"UP-2244", village:"Devgarh", district:"Lucknow", area:3.40, doc:"DOC-51344", regDate:"2015-07-21", status:"mismatch", confidence:77, verified:"pending", note:"Registered owner name mismatch — 'Rekha Devi' in registry"}),
  rec({owner:"Om Prakash Yadav", survey:"UP-2298", village:"Lakshmipur", district:"Lucknow", area:4.05, doc:"DOC-51467", regDate:"2010-11-30", status:"anomaly", confidence:58, verified:"pending", note:"Mutation gap of 6 years with no linked transaction"}),
  rec({owner:"Kavita Meena", survey:"RJ-3312", village:"Sanganer", district:"Jaipur", area:5.30, doc:"DOC-63210", regDate:"2012-05-19", status:"valid", confidence:94, verified:"approved"}),
  rec({owner:"Harish Choudhary", survey:"RJ-3355", village:"Bagru", district:"Jaipur", area:1.60, doc:"DOC-63288", regDate:"2018-09-02", status:"duplicate", confidence:57, verified:"pending", note:"Duplicate submission — same khasra no. filed twice"}),
  rec({owner:"Ravi Oraon", survey:"JH-1187", village:"Namkum", district:"Ranchi", area:6.15, doc:"DOC-71029", regDate:"2011-01-27", status:"anomaly", confidence:52, verified:"pending", note:"Overlapping boundary flagged against adjacent parcel"}),
  rec({owner:"Sushila Munda", survey:"JH-1204", village:"Ormanjhi", district:"Ranchi", area:2.80, doc:"DOC-71155", regDate:"2016-03-11", status:"valid", confidence:93, verified:"approved"}),
  rec({owner:"Nagaraju H S", survey:"KA-4471", village:"Nanjangud", district:"Mysuru", area:3.25, doc:"DOC-82031", regDate:"2014-08-08", status:"valid", confidence:96, verified:"approved"}),
  rec({owner:"Chikkamma R", survey:"KA-4502", village:"Hunsur", district:"Mysuru", area:1.95, doc:"DOC-82117", regDate:"2019-12-04", status:"mismatch", confidence:79, verified:"pending", note:"Extent recorded in guntas vs acres — unit mismatch suspected"}),
];
SEED_RECORDS.forEach((r,i)=>{ const d=DISTRICTS[r.district]; r.state=d.state; r.lat=jitter(d.lat,i); r.lng=jitter(d.lng,i+2); });

const SEED_AUDIT = [
  {time:new Date(Date.now()-6*3600000).toISOString(), record:"SYSTEM", action:"Bulk import", detail:"24 legacy land records digitized from scanned patta/chitta and khasra archives across 5 districts", user:"System"},
  {time:new Date(Date.now()-5*3600000).toISOString(), record:"BD-4004", action:"Flagged", detail:"Mismatch detected during AI validation (area discrepancy)", user:"AI Engine"},
  {time:new Date(Date.now()-5*3600000-1200000).toISOString(), record:"BD-4008", action:"Flagged", detail:"Duplicate candidate identified — matches BD-4000", user:"AI Engine"},
  {time:new Date(Date.now()-3*3600000).toISOString(), record:"BD-4000", action:"Approved", detail:"Verified and approved by revenue officer", user:"Officer R. Menon"},
  {time:new Date(Date.now()-2*3600000).toISOString(), record:"BD-4006", action:"Flagged", detail:"Anomaly: land area unusually large for parcel class", user:"AI Engine"},
  {time:new Date(Date.now()-1*3600000).toISOString(), record:"BD-4020", action:"Flagged", detail:"Anomaly: overlapping boundary flagged against adjacent parcel", user:"AI Engine"},
];

/* ---------------- DEFAULT ADMIN ---------------- */
const DEFAULT_ADMIN_EMAIL = "admin@bhudrishti.ai";
const DEFAULT_ADMIN_PASS = "Drishti@2026";

/* ---------------- LIVE DATA (persisted) ---------------- */
let landRecords = load(K_RECORDS, null) || SEED_RECORDS;
let users = load(K_USERS, null) || [];
let auditLog = load(K_AUDIT, null) || SEED_AUDIT;
_id = 4000 + landRecords.length + 50;

function persistRecords(){ save(K_RECORDS, landRecords); }
function persistUsers(){ save(K_USERS, users); }
function persistAudit(){ save(K_AUDIT, auditLog); }
function addActivity(action, detail){
  const a = load(K_ACTIVITY, []);
  a.unshift({action, detail, time:new Date().toISOString()});
  save(K_ACTIVITY, a.slice(0,40));
}

/* ---------------- CRYPTO (PBKDF2 via Web Crypto) ---------------- */
async function hashPassword(password, saltB64){
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({name:"PBKDF2", salt:enc.encode(saltB64), iterations:120000, hash:"SHA-256"}, key, 256);
  return Array.from(new Uint8Array(bits)).map(b=>b.toString(16).padStart(2,"0")).join("");
}
function randomSalt(){ return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,"0")).join(""); }

async function ensureDefaultAdmin(){
  if(users.some(u=>u.email===DEFAULT_ADMIN_EMAIL)) return;
  const salt = randomSalt();
  const hash = await hashPassword(DEFAULT_ADMIN_PASS, salt);
  users.push({name:"Admin Officer", email:DEFAULT_ADMIN_EMAIL, state:"Tamil Nadu", district:"Coimbatore", role:"System Administrator", salt, hash});
  persistUsers();
}

/* ---------------- APP STATE ---------------- */
const state = {
  loggedIn:false, user:null, view:"dashboard", authMode:"login",
  searchQuery:"", recFilter:{status:"", district:"", query:""},
  toast:null, modal:null,
  demo:{running:false, step:0},
  upload:{fileName:null, fileType:null, ocrDone:false, ocrLines:[], extracted:null, validation:null},
};

function toast(msg){
  state.toast = msg; renderToast();
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(()=>{ state.toast=null; renderToast(); }, 3200);
}
function renderToast(){
  const el = document.getElementById("toastRoot");
  if(!el) return;
  el.innerHTML = state.toast ? `<div class="toast">${ICON.bell}${escapeHtml(state.toast)}</div>` : "";
}
function logAudit(record, action, detail, user){
  auditLog.unshift({time:new Date().toISOString(), record, action, detail, user: user||(state.user?state.user.name:"System")});
  persistAudit();
}
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }
function escapeHtml(v){ return String(v==null?"":v).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function pct(x){ return (isFinite(x)? Math.round(x*100):0)+"%"; }
function fmtTime(iso){ const d=new Date(iso); return d.toLocaleString(undefined,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}); }

/* =========================================================================
   ROOT RENDER
   ========================================================================= */
function render(){
  const app = document.getElementById("app");
  if(!state.loggedIn){ app.innerHTML = renderAuth(); attachAuthEvents(); return; }
  app.innerHTML = renderShell();
  attachShellEvents();
  afterViewRender();
  renderToast();
}

/* ---------------- AUTH SCREEN ---------------- */
function renderAuth(){
  const total = landRecords.length;
  const flagged = landRecords.filter(r=>r.status!=="valid").length;
  return `
  <div class="auth-wrap">
    <div class="auth-left">
      <div class="inner">
        <div class="brandmark">${BRAND_MARK} BhuDrishti AI</div>
        <h1>An AI Vision Layer Over Every Land Record.</h1>
        <p class="tagline">BhuDrishti AI digitizes patta, chitta and khasra documents, cross-checks them against the registry, and flags mismatches, duplicates and anomalies before they become disputes — with a live GIS view of every parcel.</p>
        <div class="login-stats">
          <div><b>${total}</b><span>Digitized Records</span></div>
          <div><b>${pct(validCount()/total)}</b><span>Validated</span></div>
          <div><b>${flagged}</b><span>Flagged for Review</span></div>
        </div>
      </div>
      <div class="foot-note">Prototype build · Sample data across 5 districts · Not connected to any real government registry</div>
    </div>
    <div class="auth-right">
      <div class="auth-box">
        ${state.authMode==="login" ? `
          <h2>Officer sign in</h2>
          <p class="sub">Sign in to access the digitization &amp; validation console.</p>
          <form id="loginForm">
            <div class="field"><label>Email</label><input type="text" id="loginEmail" placeholder="officer@bhudrishti.ai" value="${DEFAULT_ADMIN_EMAIL}"></div>
            <div class="field"><label>Password</label><input type="password" id="loginPass" placeholder="••••••••" value="${DEFAULT_ADMIN_PASS}"></div>
            <button type="submit" class="btn copper w-full center">Sign In</button>
          </form>
          <div class="divider">or</div>
          <button class="btn ghost w-full center" id="demoLoginBtn">${ICON.play} Continue as Demo Officer</button>
          <p class="switch-line">New officer? <button id="toSignup">Create an account</button></p>
        ` : `
          <h2>Register officer account</h2>
          <p class="sub">Create a jurisdiction-linked account to review records for your district.</p>
          <form id="signupForm">
            <div class="field"><label>Full name</label><input type="text" id="suName" placeholder="Officer name" required></div>
            <div class="field"><label>Email</label><input type="email" id="suEmail" placeholder="you@bhudrishti.ai" required></div>
            <div class="field-row">
              <div class="field"><label>State / UT</label>
                <select id="suState" onchange="updateSignupDistricts()">${Object.keys(INDIA_STATES_DISTRICTS).map(s=>`<option ${s==="Tamil Nadu"?"selected":""}>${escapeHtml(s)}</option>`).join("")}</select>
              </div>
              <div class="field"><label>District</label>
                <select id="suDistrict">${INDIA_STATES_DISTRICTS["Tamil Nadu"].map(d=>`<option>${escapeHtml(d)}</option>`).join("")}</select>
              </div>
            </div>
            <div class="field"><label>Password</label><input type="password" id="suPass" minlength="8" placeholder="Min. 8 characters" required></div>
            <div class="field"><label>Confirm password</label><input type="password" id="suConfirm" minlength="8" required></div>
            <button type="submit" class="btn copper w-full center">Create Secure Account</button>
          </form>
          <p class="switch-line">Already registered? <button id="toLogin">Back to sign in</button></p>
        `}
        <div class="security-note">${ICON.shield} Passwords are stored locally as salted PBKDF2 hashes (Web Crypto, 120,000 iterations). This is an offline-first prototype — a production deployment must move auth to a server-side identity service.</div>
      </div>
    </div>
  </div>`;
}
function attachAuthEvents(){
  const lf = document.getElementById("loginForm");
  if(lf) lf.addEventListener("submit", async e=>{
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPass").value;
    const u = users.find(x=>x.email.toLowerCase()===email.toLowerCase());
    if(!u){ toast("No account found for that email."); return; }
    const h = await hashPassword(pass, u.salt);
    if(h!==u.hash){ toast("Incorrect password."); return; }
    doLogin(u);
  });
  const demoBtn = document.getElementById("demoLoginBtn");
  if(demoBtn) demoBtn.addEventListener("click", ()=>{
    const u = users.find(x=>x.email===DEFAULT_ADMIN_EMAIL);
    doLogin(u);
  });
  const sf = document.getElementById("signupForm");
  if(sf) sf.addEventListener("submit", async e=>{
    e.preventDefault();
    const name = document.getElementById("suName").value.trim();
    const email = document.getElementById("suEmail").value.trim();
    const st = document.getElementById("suState").value;
    const district = document.getElementById("suDistrict").value;
    const pass = document.getElementById("suPass").value;
    const conf = document.getElementById("suConfirm").value;
    if(pass!==conf){ toast("Passwords do not match."); return; }
    if(pass.length<8){ toast("Use at least 8 characters."); return; }
    if(users.some(u=>u.email.toLowerCase()===email.toLowerCase())){ toast("An account with that email already exists."); return; }
    const salt = randomSalt();
    const hash = await hashPassword(pass, salt);
    const u = {name, email, state:st, district, role:"District Revenue Officer", salt, hash};
    users.push(u); persistUsers();
    doLogin(u);
    toast("Account created securely");
  });
  const toSignup = document.getElementById("toSignup");
  if(toSignup) toSignup.addEventListener("click", ()=>{ state.authMode="signup"; render(); });
  const toLogin = document.getElementById("toLogin");
  if(toLogin) toLogin.addEventListener("click", ()=>{ state.authMode="login"; render(); });
}
function updateSignupDistricts(){
  const stSel = document.getElementById("suState");
  const distSel = document.getElementById("suDistrict");
  if(!stSel || !distSel) return;
  const list = INDIA_STATES_DISTRICTS[stSel.value] || [];
  distSel.innerHTML = list.map(d=>`<option>${escapeHtml(d)}</option>`).join("");
}
window.updateSignupDistricts = updateSignupDistricts;
function doLogin(u){
  state.loggedIn = true; state.user = u; state.view="dashboard"; state.authMode="login";
  logAudit("SYSTEM","Login", `${u.name} signed in to the console`, u.name);
  addActivity("Login", `${u.name} (${u.district})`);
  render();
}
function doLogout(){
  logAudit("SYSTEM","Logout", `${state.user.name} signed out`, state.user.name);
  state.loggedIn=false; state.user=null; state.view="dashboard";
  render();
}

/* =========================================================================
   SHELL / NAVIGATION
   ========================================================================= */
const NAV = [
  {group:"Overview", items:[
    {id:"dashboard", label:"Dashboard", icon:"dashboard"},
    {id:"alerts", label:"Alerts", icon:"bell", count:()=>flaggedCount()},
  ]},
  {group:"Digitization", items:[
    {id:"upload", label:"Upload Document", icon:"upload"},
    {id:"extraction", label:"AI Data Extraction", icon:"extract"},
    {id:"validation", label:"Validation", icon:"check"},
  ]},
  {group:"Quality & Trust", items:[
    {id:"duplicates", label:"Duplicate Detection", icon:"dup"},
    {id:"anomalies", label:"Anomaly Detection", icon:"anomaly"},
    {id:"verification", label:"Human Verification", icon:"verify", count:()=>pendingCount()},
  ]},
  {group:"Explore", items:[
    {id:"records", label:"Land Records", icon:"file"},
    {id:"map", label:"GIS Map", icon:"map"},
    {id:"analytics", label:"Analytics", icon:"report"},
    {id:"audit", label:"Audit Trail", icon:"audit"},
  ]},
  {group:"Administration", items:[
    {id:"officers", label:"Officers", icon:"users"},
    {id:"about", label:"About & Settings", icon:"settings"},
  ]},
];
const VIEW_TITLES = {
  dashboard:["Dashboard","Command center overview"],
  alerts:["Alerts","Records requiring action"],
  upload:["Upload Document","Digitization · Step 1"],
  extraction:["AI Data Extraction","Digitization · Step 2"],
  validation:["Validation","Digitization · Step 3"],
  duplicates:["Duplicate Detection","Quality & Trust"],
  anomalies:["Anomaly Detection","Quality & Trust"],
  verification:["Human Verification","Quality & Trust"],
  records:["Land Records","Explore · Search & filter"],
  map:["GIS Map","Explore · Live parcel map"],
  analytics:["Analytics","Explore · Statistics & reports"],
  audit:["Audit Trail","Explore · Change history"],
  officers:["Officers","Administration · Registered accounts"],
  about:["About & Settings","Administration · System info"],
};

function renderShell(){
  const [title, sub] = VIEW_TITLES[state.view];
  return `
  ${state.demo.running ? `<div class="demo-banner"><span class="spin"></span> Live demo running — ${DEMO_LABELS[state.demo.step]||''} <button class="icon-btn" style="color:#FBF6EA;margin-left:8px;width:auto;padding:0 8px;" onclick="cancelDemo()">Stop</button></div>` : ``}
  <div class="shell" style="${state.demo.running?'margin-top:44px':''}">
    <div class="sidebar">
      <div class="brandmark">${BRAND_MARK} BhuDrishti AI</div>
      ${NAV.map(g=>`
        <div class="nav-group-label">${g.group}</div>
        ${g.items.map(it=>`
          <button class="navlink ${state.view===it.id?'active':''}" onclick="navigate('${it.id}')">${ICON[it.icon]}<span class="label">${it.label}</span>${it.count && it.count()>0 ? `<span class="count">${it.count()}</span>`:''}</button>
        `).join("")}
      `).join("")}
      <div class="jurisdiction-chip"><b>${escapeHtml(state.user.district)}, ${escapeHtml(state.user.state)}</b>Signed in as ${escapeHtml(state.user.name)} · ${escapeHtml(state.user.role)}</div>
      <div class="sidebar-foot">
        <button class="navlink" onclick="doLogout()">${ICON.logout}<span class="label">Sign Out</span></button>
      </div>
    </div>
    <div class="main">
      <div class="topbar">
        <div>
          <h1>${title}</h1>
          <div class="path">${sub}</div>
        </div>
        <div class="row gap-12">
          <div class="globalsearch">${ICON.search}<input id="topSearch" placeholder="Search survey no., owner, village..." value="${escapeHtml(state.searchQuery)}"></div>
          <button class="btn copper sm" onclick="startDemo()">${ICON.play} Try Demo</button>
          <div class="avatar">${(state.user.name||"U").slice(0,1).toUpperCase()}</div>
        </div>
      </div>
      <div class="content" id="viewContent">
        ${renderView(state.view)}
      </div>
    </div>
  </div>
  ${state.modal ? state.modal() : ""}
  `;
}
function attachShellEvents(){
  const ts = document.getElementById("topSearch");
  if(ts){
    ts.addEventListener("keydown", e=>{
      if(e.key==="Enter"){ state.searchQuery = ts.value; state.recFilter.query = ts.value; navigate("records"); }
    });
  }
}
function navigate(view){ state.view = view; state.modal=null; render(); window.scrollTo({top:0,behavior:"smooth"}); }
window.navigate = navigate;

function renderView(v){
  switch(v){
    case "dashboard": return viewDashboard();
    case "alerts": return viewAlerts();
    case "upload": return viewUpload();
    case "extraction": return viewExtraction();
    case "validation": return viewValidation();
    case "duplicates": return viewDuplicates();
    case "anomalies": return viewAnomalies();
    case "verification": return viewVerification();
    case "records": return viewRecords();
    case "map": return viewMap();
    case "analytics": return viewAnalytics();
    case "audit": return viewAudit();
    case "officers": return viewOfficers();
    case "about": return viewAbout();
    default: return "";
  }
}
function afterViewRender(){
  if(state.view==="map") setTimeout(initGisMap, 10);
  if(state.view==="upload") attachUploadEvents();
}

/* ---------------- counters ---------------- */
function validCount(){ return landRecords.filter(r=>r.status==="valid").length; }
function mismatchCount(){ return landRecords.filter(r=>r.status==="mismatch").length; }
function duplicateCount(){ return landRecords.filter(r=>r.status==="duplicate").length; }
function anomalyCount(){ return landRecords.filter(r=>r.status==="anomaly").length; }
function digitizedCount(){ return landRecords.filter(r=>r.digitized).length; }
function pendingCount(){ return landRecords.filter(r=>r.verified==="pending").length; }
function flaggedCount(){ return landRecords.filter(r=>r.status!=="valid").length; }
function badge(status){
  const map = {valid:"Valid", mismatch:"Mismatch", duplicate:"Duplicate", anomaly:"Anomaly"};
  return `<span class="badge ${status}">${map[status]||status}</span>`;
}
function verifiedBadge(v){
  const map = {pending:"Pending", approved:"Approved", rejected:"Rejected"};
  return `<span class="badge ${v}">${map[v]||v}</span>`;
}

/* =========================================================================
   DASHBOARD
   ========================================================================= */
function viewDashboard(){
  const total = landRecords.length;
  const myDistrict = state.user.district;
  const mine = landRecords.filter(r=>r.district===myDistrict);
  const stats = [
    {lbl:"Total Land Records", num: total, icon:"file", color:"var(--ink)", tint:"var(--slate-tint)", delta:`${digitizedCount()} digitized`},
    {lbl:"Valid Records", num: validCount(), icon:"check", color:"var(--teal)", tint:"var(--teal-tint)", delta:`${pct(validCount()/total)} match rate`},
    {lbl:"Mismatch Records", num: mismatchCount(), icon:"alert", color:"var(--rose)", tint:"var(--rose-tint)", delta:"needs review"},
    {lbl:"Duplicate Records", num: duplicateCount(), icon:"dup", color:"var(--slate)", tint:"var(--slate-tint)", delta:"flagged by AI"},
    {lbl:"Anomaly Records", num: anomalyCount(), icon:"anomaly", color:"var(--violet)", tint:"var(--violet-tint)", delta:"flagged by AI"},
  ];
  const recent = [...landRecords].slice(-6).reverse();
  return `
  <div class="grid cols-5" style="margin-bottom:22px;">
    ${stats.map(s=>`
      <div class="card stat-card">
        <div class="top"><div class="icon" style="background:${s.tint};color:${s.color};">${ICON[s.icon]}</div></div>
        <div class="num">${s.num}</div>
        <div class="lbl">${s.lbl}</div>
        <div class="delta" style="color:${s.color};">${s.delta}</div>
      </div>
    `).join("")}
  </div>
  <div class="grid cols-3" style="align-items:start;margin-bottom:18px;">
    <div class="card panel-pad" style="grid-column:span 2;">
      <div class="panel-head">
        <div class="section-title">Recently Digitized</div>
        <button class="btn ghost sm" onclick="navigate('verification')">View pending queue →</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Record</th><th>Owner</th><th>Village / District</th><th>Status</th><th>Confidence</th></tr></thead>
        <tbody>
          ${recent.map(r=>`
            <tr style="cursor:pointer" onclick="openRecordModal('${r.id}')">
              <td class="mono">${r.id}</td>
              <td>${escapeHtml(r.owner)}</td>
              <td>${escapeHtml(r.village)}, ${escapeHtml(r.district)}</td>
              <td>${badge(r.status)}</td>
              <td>${r.confidence}%</td>
            </tr>
          `).join("")}
        </tbody>
      </table></div>
    </div>
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:14px;">Quality Snapshot</div>
      <div class="col gap-16">
        ${qualityRow("Valid", validCount(), total, "var(--teal)")}
        ${qualityRow("Mismatch", mismatchCount(), total, "var(--rose)")}
        ${qualityRow("Duplicate", duplicateCount(), total, "var(--slate)")}
        ${qualityRow("Anomaly", anomalyCount(), total, "var(--violet)")}
      </div>
      <hr class="divider-line">
      <div class="eyebrow" style="margin-bottom:8px;">Get started</div>
      <button class="btn copper sm w-full center" style="margin-bottom:8px;" onclick="navigate('upload')">${ICON.upload} Upload a document</button>
      <button class="btn ghost sm w-full center" onclick="startDemo()">${ICON.play} Watch the full demo</button>
    </div>
  </div>
  <div class="card panel-pad">
    <div class="panel-head"><div class="section-title">My Jurisdiction — ${escapeHtml(myDistrict)}</div><button class="btn ghost sm" onclick="navigate('records')">Open records →</button></div>
    <div class="kpi-row">
      <div class="kpi"><b>${mine.length}</b><span>Records in district</span></div>
      <div class="kpi"><b>${mine.filter(r=>r.status==='valid').length}</b><span>Valid</span></div>
      <div class="kpi"><b>${mine.filter(r=>r.status!=='valid').length}</b><span>Flagged</span></div>
      <div class="kpi"><b>${mine.filter(r=>r.verified==='pending').length}</b><span>Awaiting verification</span></div>
    </div>
  </div>
  `;
}
function qualityRow(label,n,total,color){
  const p = total? Math.round(n/total*100):0;
  return `<div>
    <div class="row between small" style="margin-bottom:5px;"><span>${label}</span><span class="mono">${n} · ${p}%</span></div>
    <div class="conf-bar"><div style="width:${p}%;background:${color};"></div></div>
  </div>`;
}

/* =========================================================================
   ALERTS
   ========================================================================= */
function viewAlerts(){
  const flagged = landRecords.filter(r=>r.status!=="valid" && r.verified==="pending");
  if(!flagged.length) return emptyState("No active alerts — every flagged record has been reviewed.");
  return `
  <p class="muted small" style="margin-bottom:16px;">Records flagged by the AI engine that still need officer attention, with direct escalation contacts for conflict cases.</p>
  ${flagged.map(r=>{
    const c = DISTRICTS[r.district] || {};
    return `
    <div class="alert-row ${r.status}">
      <div class="row gap-12">
        <div class="icon" style="width:34px;height:34px;border-radius:9px;background:var(--surface-2);display:flex;align-items:center;justify-content:center;color:var(--ink-2);">${ICON.alert}</div>
        <div>
          <div class="row gap-8"><b class="mono small">${r.id}</b>${badge(r.status)}</div>
          <div class="small" style="margin-top:3px;">${escapeHtml(r.owner)} · ${escapeHtml(r.village)}, ${escapeHtml(r.district)} — ${escapeHtml(r.note||"Flagged for review")}</div>
        </div>
      </div>
      <div class="row gap-8">
        <button class="btn ghost sm" onclick="openRecordModal('${r.id}')">Inspect</button>
        <button class="btn teal sm" onclick="verifyAction('${r.id}','approved')">${ICON.check} Approve</button>
      </div>
    </div>`;
  }).join("")}
  `;
}

/* =========================================================================
   UPLOAD DOCUMENT + OCR
   ========================================================================= */
function viewUpload(){
  const u = state.upload;
  return `
  ${processStepper("upload")}
  <div class="grid cols-2" style="align-items:start;">
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:4px;">1. Upload land document</div>
      <p class="muted small" style="margin-bottom:16px;">Accepted formats: PDF, JPG, PNG. Files stay local to this session — nothing is sent anywhere.</p>
      <div class="dropzone" id="dropzone">
        ${ICON.file}
        <div style="margin-top:10px;font-weight:700;font-size:13.5px;">Drag &amp; drop a document, or</div>
        <label class="btn ghost sm" style="margin-top:12px;display:inline-flex;">
          Browse files <input type="file" id="fileInput" accept=".pdf,.jpg,.jpeg,.png" style="display:none;">
        </label>
        <div class="small muted" style="margin-top:10px;">Demo tip: any file works — we simulate OCR on a sample Patta/Khasra document.</div>
      </div>
      ${u.fileName ? `
        <div class="row between" style="margin-top:16px;padding:12px 14px;border:1px solid var(--line);border-radius:9px;background:var(--surface);">
          <div class="row gap-8">${ICON.file}<div><div style="font-weight:700;font-size:13px;">${escapeHtml(u.fileName)}</div><div class="small muted">${escapeHtml(u.fileType)}</div></div></div>
          <button class="btn sm ${u.ocrDone?'ghost':'copper'}" ${u.ocrDone?'disabled':''} onclick="runOCR()">${u.ocrDone? 'OCR complete' : 'Run OCR extraction'}</button>
        </div>` : ``}
      ${u.ocrDone ? `
        <div class="row gap-10" style="margin-top:16px;">
          <button class="btn sm" onclick="navigate('extraction')">Continue to AI Extraction →</button>
          <button class="btn ghost sm" onclick="resetUpload()">Reset</button>
        </div>` : ``}
    </div>
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:4px;">2. Document &amp; OCR preview</div>
      <p class="muted small" style="margin-bottom:16px;">Raw text extracted from the scanned document.</p>
      <div class="doc-preview" id="ocrPreview">
        ${u.fileName ? renderDocPreview() : `<div class="empty-state">${ICON.file}<div>No document uploaded yet</div></div>`}
      </div>
    </div>
  </div>`;
}
function renderDocPreview(){
  const u = state.upload;
  return `
    ${u.status==='mismatch' ? `<div class="stamp">DRAFT<br>REVIEW</div>`:''}
    <div class="doc-header-line">GOVERNMENT OF INDIA — REVENUE &amp; LAND RECORDS DEPARTMENT<br><span style="font-weight:400;font-size:10.5px;">PATTA / KHASRA EXTRACT (SAMPLE)</span></div>
    <div id="ocrLines">
      ${u.ocrLines.map((l,i)=>`<div class="ocr-line" style="animation-delay:${i*0.05}s">${escapeHtml(l)}</div>`).join("")}
      ${u.ocrDone ? '' : (u.ocrLines.length ? '<span class="blink-cursor"></span>' : '')}
    </div>`;
}
const SAMPLE_OCR_LINES = [
  "Patta No           : 4471",
  "Owner Nam3         : Selvam Muthu K",
  "Survey No          : 118/2B",
  "Village            : Perur",
  "Taluk              : Coimbatore South",
  "District           : Coimbatore",
  "Extent (Acres)     : 2.40",
  "Classification     : Dry / Punjai",
  "Document No        : DOC-77231",
  "Date of Regn       : 15-03-2011",
  "Sub-Registrar Office: Perur SRO",
  "-- end of extract --",
];
function resetUpload(){ state.upload = {fileName:null, fileType:null, ocrDone:false, ocrLines:[], extracted:null, validation:null}; render(); }
function attachUploadEvents(){
  const dz = document.getElementById("dropzone");
  const input = document.getElementById("fileInput");
  if(!dz) return;
  input.addEventListener("change", e=>{ if(e.target.files[0]) handleFile(e.target.files[0]); });
  ["dragover","dragenter"].forEach(ev=>dz.addEventListener(ev, e=>{ e.preventDefault(); dz.classList.add("drag"); }));
  ["dragleave","drop"].forEach(ev=>dz.addEventListener(ev, e=>{ e.preventDefault(); dz.classList.remove("drag"); }));
  dz.addEventListener("drop", e=>{ e.preventDefault(); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); });
}
function handleFile(file){
  state.upload.fileName = file.name;
  state.upload.fileType = file.type || "document";
  state.upload.ocrDone = false;
  state.upload.ocrLines = [];
  render();
}
async function runOCR(){
  state.upload.ocrLines = []; state.upload.ocrDone = false; render();
  for(let i=0;i<SAMPLE_OCR_LINES.length;i++){
    await sleep(130);
    state.upload.ocrLines.push(SAMPLE_OCR_LINES[i]);
    const box = document.getElementById("ocrLines");
    if(box) box.innerHTML = state.upload.ocrLines.map(l=>`<div class="ocr-line" style="animation-delay:0s">${escapeHtml(l)}</div>`).join("")+'<span class="blink-cursor"></span>';
  }
  state.upload.ocrDone = true;
  toast("OCR extraction complete — 12 lines read from document");
  render();
}
window.runOCR = runOCR; window.resetUpload = resetUpload;

function processStepper(current){
  const steps = ["upload","extraction","validation"];
  const idx = steps.indexOf(current);
  return `<div class="stepper">${steps.map((s,i)=>`<div class="step ${i<idx?'done':i===idx?'now':''}"></div>`).join("")}</div>`;
}

/* =========================================================================
   AI DATA EXTRACTION
   ========================================================================= */
function extractFieldsFromOCR(){
  return { owner:"Selvam Muthu K", survey:"118/2B", village:"Perur", district:"Coimbatore", area:2.40, doc:"DOC-77231", regDate:"2011-03-15" };
}
function viewExtraction(){
  const u = state.upload;
  if(!u.ocrDone) return emptyState("Run OCR on a document first.", "upload", "Go to Upload");
  if(!u.extracted) u.extracted = extractFieldsFromOCR();
  const ex = u.extracted;
  const fields = [
    {k:"Owner Name", v:ex.owner, conf:96},
    {k:"Survey No.", v:ex.survey, conf:99},
    {k:"Village", v:ex.village, conf:94},
    {k:"District", v:ex.district, conf:98},
    {k:"Extent (Acres)", v:ex.area, conf:91},
    {k:"Document No.", v:ex.doc, conf:97},
    {k:"Date of Registration", v:ex.regDate, conf:93},
  ];
  return `
  ${processStepper("extraction")}
  <div class="grid cols-2" style="align-items:start;">
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:4px;">AI-extracted fields</div>
      <p class="muted small" style="margin-bottom:16px;">Structured data parsed from the OCR text, with per-field confidence.</p>
      ${fields.map(f=>`
        <div class="field-check">
          <div><div class="k">${f.k}</div><div class="v">${escapeHtml(String(f.v))}</div></div>
          <div class="conf" style="color:${f.conf>=95?'var(--teal)':f.conf>=90?'var(--amber)':'var(--rose)'}">${f.conf}%</div>
        </div>`).join("")}
    </div>
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:4px;">Why this matters</div>
      <p class="muted small" style="margin-bottom:14px;">BhuDrishti AI's extraction model reads scanned patta, chitta and khasra formats and maps free-form text into structured registry fields — the foundation for automated cross-checking against the master registry in the next step.</p>
      <div class="security-note">${ICON.eye} Confidence below 92% is treated as a soft signal — those fields are weighted more heavily when the validation engine looks for anomalies.</div>
      <div class="row gap-10" style="margin-top:18px;">
        <button class="btn copper sm" onclick="navigate('validation')">Continue to Validation →</button>
        <button class="btn ghost sm" onclick="navigate('upload')">← Back</button>
      </div>
    </div>
  </div>`;
}

/* =========================================================================
   VALIDATION
   ========================================================================= */
function fuzzyMatch(a,b){
  a=(a||"").toLowerCase().replace(/\s+/g,""); b=(b||"").toLowerCase().replace(/\s+/g,"");
  if(a===b) return 100;
  if(!a.length||!b.length) return 0;
  let matches=0; const shorter = a.length<b.length?a:b, longer = a.length<b.length?b:a;
  for(let i=0;i<shorter.length;i++) if(longer.includes(shorter[i])) matches++;
  return Math.round((matches/longer.length)*100);
}
function computeValidation(extracted){
  // Registry intentionally differs on extent (3.10 ac vs 2.40 ac extracted) so the
  // demo walkthrough always demonstrates a real discrepancy catch, not just a rubber stamp.
  const registry = {owner:"Selvam Muthu K", survey:"118/2B", village:"Perur", area:3.10, doc:"DOC-77231"};
  const ownerScore = fuzzyMatch(extracted.owner, registry.owner);
  const surveyScore = extracted.survey===registry.survey ? 100 : 40;
  const areaDiff = Math.abs(extracted.area - registry.area);
  const areaOk = areaDiff < 0.15;
  return {
    registry,
    rows:[
      {field:"Owner Name", extracted:extracted.owner, registry:registry.owner, ok: ownerScore>85},
      {field:"Survey No.", extracted:extracted.survey, registry:registry.survey, ok: surveyScore===100},
      {field:"Village", extracted:extracted.village, registry:registry.village, ok: extracted.village===registry.village},
      {field:"Extent (Acres)", extracted:extracted.area, registry:registry.area, ok: areaOk},
      {field:"Document No.", extracted:extracted.doc, registry:registry.doc, ok: extracted.doc===registry.doc},
    ],
  };
}
function viewValidation(){
  const u = state.upload;
  if(!u.extracted) return emptyState("Complete AI extraction first.", "extraction", "Go to Extraction");
  if(!u.validation) u.validation = computeValidation(u.extracted);
  const v = u.validation;
  const allOk = v.rows.every(r=>r.ok);
  return `
  ${processStepper("validation")}
  <div class="card panel-pad" style="margin-bottom:18px;">
    <div class="panel-head"><div class="section-title">Field-by-field comparison against registry</div>${allOk? `<span class="badge valid">All fields match</span>` : `<span class="badge mismatch">Discrepancy found</span>`}</div>
    ${v.rows.map(r=>`
      <div class="diff-row">
        <div class="lbl">${r.field}</div>
        <div class="diff-val ${r.ok?'ok':'bad'}">Extracted: ${escapeHtml(String(r.extracted))}</div>
        <div class="diff-val ${r.ok?'ok':'bad'}">Registry: ${escapeHtml(String(r.registry))}</div>
        <div>${r.ok?ICON.check:ICON.alert}</div>
      </div>`).join("")}
  </div>
  <div class="row gap-10">
    <button class="btn copper sm" onclick="finalizeValidation()">${ICON.check} Finalize &amp; add to registry</button>
    <button class="btn ghost sm" onclick="navigate('extraction')">← Back</button>
  </div>`;
}
function finalizeValidation(){
  const u = state.upload;
  const allOk = u.validation.rows.every(r=>r.ok);
  const ex = u.extracted;
  const d = DISTRICTS[ex.district] || DISTRICTS["Coimbatore"];
  const newRec = rec({
    owner:ex.owner, survey:ex.survey, village:ex.village, district:ex.district, state:d.state,
    area:ex.area, doc:ex.doc, regDate:ex.regDate,
    status: allOk? "valid":"mismatch", confidence: allOk? 95:76, verified:"pending",
    lat: jitter(d.lat, landRecords.length), lng: jitter(d.lng, landRecords.length+2),
    note: allOk? undefined : "Field mismatch detected during AI validation",
  });
  landRecords.push(newRec); persistRecords();
  logAudit(newRec.id, "Digitized", `New record added via upload & AI validation — status: ${newRec.status}`);
  addActivity("Record digitized", `${newRec.id} — ${newRec.owner}`);
  toast(`${newRec.id} added to the registry as ${newRec.status}`);
  resetUpload();
  navigate(allOk? "dashboard":"verification");
}

/* =========================================================================
   DUPLICATE DETECTION
   ========================================================================= */
function findDuplicateGroups(){
  const groups = {};
  landRecords.filter(r=>r.status==="duplicate").forEach(r=>{
    const key = r.survey+"|"+r.doc;
    (groups[key]=groups[key]||[]).push(r);
  });
  landRecords.forEach(r=>{
    const key = r.survey+"|"+r.doc;
    if(groups[key] && !groups[key].includes(r) && r.status==="valid") groups[key].push(r);
  });
  return Object.values(groups).filter(g=>g.length>1);
}
function viewDuplicates(){
  const groups = findDuplicateGroups();
  if(!groups.length) return emptyState("No duplicate records detected.");
  return `
  <p class="muted small" style="margin-bottom:16px;">Records sharing an identical survey number and document number are grouped for review. Keep one authoritative record and reject the rest.</p>
  ${groups.map((g,gi)=>`
    <div class="dup-group">
      <div class="ghead"><b class="small">Duplicate group ${gi+1} · Survey ${escapeHtml(g[0].survey)}</b><span class="badge duplicate">${g.length} records</span></div>
      ${g.map(r=>`
        <div class="dup-item">
          <div class="row gap-10"><span class="mono">${r.id}</span><span>${escapeHtml(r.owner)}</span><span class="muted">${escapeHtml(r.village)}, ${escapeHtml(r.district)}</span>${badge(r.status)}</div>
          <div class="row gap-8">
            <button class="btn ghost sm" onclick="openRecordModal('${r.id}')">Inspect</button>
            ${r.status!=="valid" ? `<button class="btn danger sm" onclick="verifyAction('${r.id}','rejected')">Reject</button>` : `<span class="badge valid">Kept</span>`}
          </div>
        </div>`).join("")}
    </div>`).join("")}`;
}

/* =========================================================================
   ANOMALY DETECTION
   ========================================================================= */
function detectAnomalies(r){
  const reasons = [];
  if(r.area>15) reasons.push("Extent far exceeds typical parcel size for this village — possible OCR misread");
  if(!r.survey || r.survey.trim().endsWith("/")) reasons.push("Survey number format looks incomplete");
  if(r.confidence<60) reasons.push("Overall extraction confidence unusually low");
  return reasons;
}
function viewAnomalies(){
  const list = landRecords.filter(r=>r.status==="anomaly");
  if(!list.length) return emptyState("No anomalies detected.");
  return `
  <p class="muted small" style="margin-bottom:16px;">Records with statistical or structural irregularities the AI engine flagged for manual review.</p>
  ${list.map(r=>`
    <div class="anomaly-card">
      <div class="row between">
        <div class="row gap-10"><span class="mono small">${r.id}</span><b>${escapeHtml(r.owner)}</b>${badge(r.status)}</div>
        <button class="btn ghost sm" onclick="openRecordModal('${r.id}')">Inspect</button>
      </div>
      <div class="small muted" style="margin-top:6px;">${escapeHtml(r.village)}, ${escapeHtml(r.district)} · Survey ${escapeHtml(r.survey)} · ${r.area} ac · Confidence ${r.confidence}%</div>
      <div class="small" style="margin-top:8px;color:var(--violet);font-weight:600;">${escapeHtml(r.note || detectAnomalies(r)[0] || "Flagged for structural anomaly")}</div>
    </div>`).join("")}`;
}

/* =========================================================================
   HUMAN VERIFICATION
   ========================================================================= */
function viewVerification(){
  const pending = landRecords.filter(r=>r.verified==="pending");
  if(!pending.length) return emptyState("No records awaiting verification. Great work!");
  return `
  <p class="muted small" style="margin-bottom:16px;">Approve, correct or reject records the AI engine has flagged. Approving keeps the record; correcting lets you fix a field before approving; rejecting removes it from the active registry.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Record</th><th>Owner</th><th>Village / District</th><th>Status</th><th>Confidence</th><th></th></tr></thead>
    <tbody>
      ${pending.map(r=>`
        <tr>
          <td class="mono">${r.id}</td>
          <td>${escapeHtml(r.owner)}</td>
          <td>${escapeHtml(r.village)}, ${escapeHtml(r.district)}</td>
          <td>${badge(r.status)}</td>
          <td>${r.confidence}%</td>
          <td>
            <div class="row gap-6">
              <button class="btn teal sm" onclick="verifyAction('${r.id}','approved')" title="Approve">${ICON.check}</button>
              <button class="btn ghost sm" onclick="openCorrectModal('${r.id}')" title="Correct">Correct</button>
              <button class="btn danger sm" onclick="verifyAction('${r.id}','rejected')" title="Reject">${ICON.close}</button>
            </div>
          </td>
        </tr>`).join("")}
    </tbody>
  </table></div>`;
}
function verifyAction(id, outcome){
  const r = landRecords.find(x=>x.id===id);
  if(!r) return;
  r.verified = outcome;
  if(outcome==="approved") r.status="valid";
  persistRecords();
  logAudit(id, outcome==="approved"?"Approved":"Rejected", `Record marked ${outcome} by revenue officer`, state.user.name);
  addActivity(outcome==="approved"?"Record approved":"Record rejected", `${id} — ${r.owner}`);
  toast(`${id} marked ${outcome}`);
  render();
}
window.verifyAction = verifyAction;

function openCorrectModal(id){
  const r = landRecords.find(x=>x.id===id);
  if(!r) return;
  state.modal = ()=>`
  <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <div class="modal-head"><b>Correct record ${r.id}</b><button class="icon-btn" onclick="closeModal()">${ICON.close}</button></div>
      <div class="modal-body">
        <div class="field"><label>Owner Name</label><input id="cfOwner" value="${escapeHtml(r.owner)}"></div>
        <div class="field-row">
          <div class="field"><label>Survey No.</label><input id="cfSurvey" value="${escapeHtml(r.survey)}"></div>
          <div class="field"><label>Extent (Acres)</label><input id="cfArea" type="number" step="0.01" value="${r.area}"></div>
        </div>
        <div class="field"><label>Village</label><input id="cfVillage" value="${escapeHtml(r.village)}"></div>
        <button class="btn copper w-full center" onclick="saveCorrect('${r.id}')">${ICON.check} Save &amp; approve</button>
      </div>
    </div>
  </div>`;
  render();
}
function saveCorrect(id){
  const r = landRecords.find(x=>x.id===id);
  if(!r) return;
  r.owner = document.getElementById("cfOwner").value.trim() || r.owner;
  r.survey = document.getElementById("cfSurvey").value.trim() || r.survey;
  r.area = parseFloat(document.getElementById("cfArea").value) || r.area;
  r.village = document.getElementById("cfVillage").value.trim() || r.village;
  r.status = "valid"; r.verified = "approved"; r.confidence = 97;
  persistRecords();
  logAudit(id, "Corrected", "Officer manually corrected one or more fields and approved the record", state.user.name);
  addActivity("Record corrected", `${id} — ${r.owner}`);
  closeModal();
  toast(`${id} corrected and approved`);
}
window.openCorrectModal = openCorrectModal; window.saveCorrect = saveCorrect;
function closeModal(){ state.modal=null; render(); }
window.closeModal = closeModal;

/* ---------------- record inspect modal ---------------- */
function openRecordModal(id){
  const r = landRecords.find(x=>x.id===id);
  if(!r) return;
  const c = DISTRICTS[r.district] || {};
  state.modal = ()=>`
  <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <div class="modal-head"><div class="row gap-8"><b class="mono">${r.id}</b>${badge(r.status)}${verifiedBadge(r.verified)}</div><button class="icon-btn" onclick="closeModal()">${ICON.close}</button></div>
      <div class="modal-body">
        <h3 style="margin-bottom:4px;">${escapeHtml(r.owner)}</h3>
        <p class="muted small" style="margin:0 0 16px;">${escapeHtml(r.village)}, ${escapeHtml(r.district)}, ${escapeHtml(r.state)}</p>
        <div class="grid cols-2" style="gap:10px;">
          <div class="field-check"><div><div class="k">Survey No.</div><div class="v">${escapeHtml(r.survey)}</div></div></div>
          <div class="field-check"><div><div class="k">Document No.</div><div class="v">${escapeHtml(r.doc)}</div></div></div>
          <div class="field-check"><div><div class="k">Extent</div><div class="v">${r.area} acres</div></div></div>
          <div class="field-check"><div><div class="k">Registered</div><div class="v">${escapeHtml(r.regDate)}</div></div></div>
        </div>
        ${r.note ? `<div class="security-note" style="margin-top:12px;">${ICON.alert} ${escapeHtml(r.note)}</div>` : ``}
        ${r.status!=="valid" && c.court ? `
        <div class="contact-card">
          <b>${ICON.gavel} Escalation contacts — ${escapeHtml(r.district)}</b>
          ${escapeHtml(c.court)} · ${escapeHtml(c.courtPhone)}<br>
          ${escapeHtml(c.police)} · ${escapeHtml(c.policePhone)}
        </div>` : ``}
        <div class="row gap-8" style="margin-top:16px;">
          ${r.verified==="pending" ? `<button class="btn teal sm" onclick="verifyAction('${r.id}','approved')">${ICON.check} Approve</button><button class="btn ghost sm" onclick="closeModal();openCorrectModal('${r.id}')">Correct</button><button class="btn danger sm" onclick="verifyAction('${r.id}','rejected')">Reject</button>` : ``}
        </div>
      </div>
    </div>
  </div>`;
  render();
}
window.openRecordModal = openRecordModal;

function emptyState(msg, viewId, label){
  return `<div class="card panel-pad"><div class="empty-state">${ICON.check}<div>${escapeHtml(msg)}</div>${viewId?`<button class="btn copper sm" style="margin-top:8px;" onclick="navigate('${viewId}')">${escapeHtml(label)}</button>`:''}</div></div>`;
}

/* =========================================================================
   LAND RECORDS — SEARCH / FILTER / EXPORT
   ========================================================================= */
function filteredRecords(){
  const f = state.recFilter;
  const q = (f.query||"").toLowerCase().trim();
  return landRecords.filter(r=>{
    if(f.status && r.status!==f.status) return false;
    if(f.district && r.district!==f.district) return false;
    if(q && !(r.owner.toLowerCase().includes(q) || r.survey.toLowerCase().includes(q) || r.village.toLowerCase().includes(q) || r.id.toLowerCase().includes(q))) return false;
    return true;
  });
}
function viewRecords(){
  const f = state.recFilter;
  const results = filteredRecords();
  const districts = Object.keys(DISTRICTS);
  return `
  <div class="card panel-pad" style="margin-bottom:16px;">
    <div class="row gap-10 wrap between">
      <div class="row gap-10 wrap">
        <input id="recQ" placeholder="Search owner, survey no., village..." value="${escapeHtml(f.query)}" style="padding:9px 12px;border:1px solid var(--line);border-radius:9px;min-width:230px;">
        <select id="recStatus" style="padding:9px 12px;border:1px solid var(--line);border-radius:9px;">
          <option value="">All statuses</option>
          ${["valid","mismatch","duplicate","anomaly"].map(s=>`<option value="${s}" ${f.status===s?'selected':''}>${s[0].toUpperCase()+s.slice(1)}</option>`).join("")}
        </select>
        <select id="recDistrict" style="padding:9px 12px;border:1px solid var(--line);border-radius:9px;">
          <option value="">All districts</option>
          ${districts.map(d=>`<option value="${d}" ${f.district===d?'selected':''}>${d}</option>`).join("")}
        </select>
        <button class="btn ghost sm" onclick="applyRecFilter()">Apply</button>
        <button class="btn ghost sm" onclick="clearRecFilter()">Clear</button>
      </div>
      <div class="row gap-8">
        <button class="btn ghost sm" onclick="exportCSV()">${ICON.download} Export CSV</button>
        <button class="btn ghost sm" onclick="window.print()">${ICON.print} Print report</button>
      </div>
    </div>
  </div>
  <div class="card panel-pad">
    <div class="panel-head"><div class="section-title">${results.length} record${results.length===1?'':'s'}</div></div>
    ${results.length? `<div class="table-wrap"><table>
      <thead><tr><th>Record</th><th>Owner</th><th>Survey No.</th><th>Village</th><th>District</th><th>Area</th><th>Status</th><th>Verified</th></tr></thead>
      <tbody>
        ${results.map(r=>`
          <tr style="cursor:pointer" onclick="openRecordModal('${r.id}')">
            <td class="mono">${r.id}</td><td>${escapeHtml(r.owner)}</td><td class="mono">${escapeHtml(r.survey)}</td>
            <td>${escapeHtml(r.village)}</td><td>${escapeHtml(r.district)}</td><td>${r.area} ac</td>
            <td>${badge(r.status)}</td><td>${verifiedBadge(r.verified)}</td>
          </tr>`).join("")}
      </tbody>
    </table></div>` : emptyState("No records match this filter.")}
  </div>`;
}
function applyRecFilter(){
  state.recFilter.query = document.getElementById("recQ").value;
  state.recFilter.status = document.getElementById("recStatus").value;
  state.recFilter.district = document.getElementById("recDistrict").value;
  render();
}
function clearRecFilter(){ state.recFilter = {status:"",district:"",query:""}; state.searchQuery=""; render(); }
window.applyRecFilter = applyRecFilter; window.clearRecFilter = clearRecFilter;

function exportCSV(){
  const rows = [["Record ID","Owner","Survey No.","Village","District","State","Area (Acres)","Document No.","Registered","Status","Verified","Notes"],
    ...filteredRecords().map(r=>[r.id,r.owner,r.survey,r.village,r.district,r.state,r.area,r.doc,r.regDate,r.status,r.verified,r.note||""])];
  const csv = rows.map(row=>row.map(x=>`"${String(x).replaceAll('"','""')}"`).join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
  a.download = "BhuDrishti_Land_Records.csv";
  a.click(); URL.revokeObjectURL(a.href);
  toast("CSV export downloaded");
}
window.exportCSV = exportCSV;

/* =========================================================================
   GIS MAP (Leaflet)
   ========================================================================= */
let gisMap = null;
const STATUS_COLOR = {valid:"#2C6E5E", mismatch:"#AC3B33", duplicate:"#5F6E68", anomaly:"#6C4E86"};
function viewMap(){
  return `
  <div class="card panel-pad" style="margin-bottom:16px;">
    <div class="panel-head">
      <div><div class="section-title">Live cadastral parcel map</div><p class="muted small" style="margin-top:4px;">Approximate parcel locations across ${Object.keys(DISTRICTS).length} districts. Click a marker to inspect the record.</p></div>
      <span class="badge pending">${landRecords.length} parcels</span>
    </div>
    <div class="map-wrap">
      <div id="gisMap"></div>
      <div class="legend">
        <div class="li"><span class="sw" style="background:${STATUS_COLOR.valid}"></span>Valid</div>
        <div class="li"><span class="sw" style="background:${STATUS_COLOR.mismatch}"></span>Mismatch</div>
        <div class="li"><span class="sw" style="background:${STATUS_COLOR.duplicate}"></span>Duplicate</div>
        <div class="li"><span class="sw" style="background:${STATUS_COLOR.anomaly}"></span>Anomaly</div>
      </div>
    </div>
  </div>`;
}
function initGisMap(){
  const el = document.getElementById("gisMap");
  if(!el || !window.L) return;
  if(gisMap){ gisMap.remove(); gisMap=null; }
  gisMap = L.map("gisMap", {scrollWheelZoom:false}).setView([22.5,79.5], 4.6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution:"&copy; OpenStreetMap contributors", maxZoom:17}).addTo(gisMap);
  landRecords.forEach(r=>{
    if(!isFinite(r.lat)||!isFinite(r.lng)) return;
    const color = STATUS_COLOR[r.status]||"#5F6E68";
    L.circleMarker([r.lat,r.lng], {radius:7, color, fillColor:color, fillOpacity:.75, weight:1.5})
      .addTo(gisMap)
      .bindPopup(`<b>${escapeHtml(r.id)}</b><br>${escapeHtml(r.owner)}<br>Survey ${escapeHtml(r.survey)} · ${r.area} ac<br>${escapeHtml(r.village)}, ${escapeHtml(r.district)}<br><b style="color:${color}">${r.status.toUpperCase()}</b>`)
      .on("click", ()=>{});
  });
  setTimeout(()=>gisMap.invalidateSize(), 120);
}

/* =========================================================================
   ANALYTICS (custom CSS donut + bar — no external chart library)
   ========================================================================= */
function viewAnalytics(){
  const total = landRecords.length;
  const segs = [
    {k:"valid", n:validCount(), color:"var(--teal)"},
    {k:"mismatch", n:mismatchCount(), color:"var(--rose)"},
    {k:"duplicate", n:duplicateCount(), color:"var(--slate)"},
    {k:"anomaly", n:anomalyCount(), color:"var(--violet)"},
  ];
  let acc=0;
  const gradient = segs.map(s=>{ const start=acc, end=acc+(s.n/total*100); acc=end; return `${s.color} ${start}% ${end}%`; }).join(", ");
  const byDistrict = Object.keys(DISTRICTS).map(d=>({d, n: landRecords.filter(r=>r.district===d).length}));
  const maxD = Math.max(...byDistrict.map(x=>x.n),1);
  return `
  <div class="grid cols-3" style="margin-bottom:18px;">
    <div class="card stat-card"><div class="lbl">Total Records</div><div class="num">${total}</div><div class="small muted">All digitized records</div></div>
    <div class="card stat-card"><div class="lbl">Validation Rate</div><div class="num" style="color:var(--teal)">${pct(validCount()/total)}</div><div class="small muted">Currently marked valid</div></div>
    <div class="card stat-card"><div class="lbl">Flagged Records</div><div class="num" style="color:var(--rose)">${flaggedCount()}</div><div class="small muted">Mismatch, duplicate or anomaly</div></div>
  </div>
  <div class="grid cols-2" style="align-items:start;">
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:14px;">Status breakdown</div>
      <div class="row gap-20" style="align-items:center;">
        <div class="donut" style="background:conic-gradient(${gradient});"><div class="hole"><b>${total}</b><span>records</span></div></div>
        <div class="col gap-10">
          ${segs.map(s=>`<div class="row gap-8 small"><span class="dot" style="color:${s.color}"></span>${s.k[0].toUpperCase()+s.k.slice(1)}<b class="mono" style="margin-left:auto;">${s.n}</b></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:10px;">Records per district</div>
      ${byDistrict.map(x=>`
        <div class="bar-h">
          <span>${x.d}</span>
          <div class="track"><div style="width:${(x.n/maxD*100)}%;background:var(--copper);"></div></div>
          <span class="mono">${x.n}</span>
        </div>`).join("")}
    </div>
  </div>
  <div class="card panel-pad" style="margin-top:16px;" id="reportSummary">
    <div class="panel-head"><div class="section-title">Generate report</div>
      <div class="row gap-8"><button class="btn ghost sm" onclick="exportCSV()">${ICON.download} CSV</button><button class="btn ghost sm" onclick="window.print()">${ICON.print} Print / Save PDF</button></div>
    </div>
    <p class="muted small">Generated ${new Date().toLocaleString()} · Jurisdiction: ${escapeHtml(state.user.district)}, ${escapeHtml(state.user.state)} · Prepared by ${escapeHtml(state.user.name)}</p>
  </div>`;
}

/* =========================================================================
   AUDIT TRAIL
   ========================================================================= */
function viewAudit(){
  return `
  <div class="card panel-pad">
    <div class="table-wrap"><table>
      <thead><tr><th>Time</th><th>Record</th><th>Action</th><th>Detail</th><th>By</th></tr></thead>
      <tbody>
        ${auditLog.map(a=>`<tr><td class="small mono">${fmtTime(a.time)}</td><td class="mono">${escapeHtml(a.record)}</td><td><b>${escapeHtml(a.action)}</b></td><td class="small">${escapeHtml(a.detail)}</td><td class="small">${escapeHtml(a.user)}</td></tr>`).join("")}
      </tbody>
    </table></div>
  </div>`;
}

/* =========================================================================
   OFFICERS
   ========================================================================= */
function viewOfficers(){
  return `
  <div class="card panel-pad">
    <div class="panel-head"><div class="section-title">Registered officer accounts</div><span class="badge pending">${users.length} accounts</span></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Name</th><th>Email</th><th>District</th><th>Role</th><th>Status</th></tr></thead>
      <tbody>
        ${users.map(u=>`<tr><td>${escapeHtml(u.name)}</td><td class="mono small">${escapeHtml(u.email)}</td><td>${escapeHtml(u.district)}, ${escapeHtml(u.state)}</td><td>${escapeHtml(u.role)}</td><td><span class="badge valid">Active</span></td></tr>`).join("")}
      </tbody>
    </table></div>
  </div>`;
}

/* =========================================================================
   ABOUT & SETTINGS
   ========================================================================= */
function viewAbout(){
  return `
  <div class="grid cols-2" style="align-items:start;">
    <div class="card panel-pad">
      <div class="brandmark" style="margin-bottom:14px;">${BRAND_MARK} BhuDrishti AI</div>
      <p class="small" style="line-height:1.7;">BhuDrishti AI ("land vision") is a prototype AI-assisted platform for digitizing, validating and safeguarding land records — built so revenue departments can catch mismatches, duplicates and anomalies before they become disputes. It combines simulated OCR/AI extraction with a rules-based validation engine, a live GIS parcel map, and a full audit trail.</p>
      <div class="security-note" style="margin-top:14px;">${ICON.shield} This is a hackathon-grade frontend prototype: all data lives in this browser's local storage. A production deployment would move records, users and audit logs to a server-side database with real OCR/ML services, RBAC, encrypted transport and official registry integrations.</div>
    </div>
    <div class="card panel-pad">
      <div class="section-title" style="margin-bottom:12px;">Local data controls</div>
      <p class="muted small" style="margin-bottom:14px;">Records and accounts are stored only in this browser. Use these controls to reset the demo.</p>
      <button class="btn ghost sm w-full center" style="margin-bottom:10px;" onclick="restoreSampleData()">Restore sample data</button>
      <button class="btn danger sm w-full center" onclick="clearLocalData()">Clear all local data</button>
    </div>
  </div>`;
}
function restoreSampleData(){
  if(!confirm("Restore the original sample land records? Any records you've added or changed will be replaced.")) return;
  landRecords = JSON.parse(JSON.stringify(SEED_RECORDS));
  _id = 4000 + landRecords.length + 50;
  persistRecords();
  logAudit("SYSTEM","Data reset","Sample land records restored by officer", state.user.name);
  toast("Sample data restored");
  render();
}
function clearLocalData(){
  if(!confirm("Delete ALL local land records? This cannot be undone.")) return;
  landRecords = []; persistRecords();
  logAudit("SYSTEM","Data cleared","All local land records deleted by officer", state.user.name);
  toast("Local records cleared");
  render();
}
window.restoreSampleData = restoreSampleData; window.clearLocalData = clearLocalData;

/* =========================================================================
   GUIDED DEMO WALKTHROUGH
   ========================================================================= */
const DEMO_STEPS = ["dashboard","upload","extraction","validation","duplicates","anomalies","verification","map","analytics"];
const DEMO_LABELS = {
  dashboard:"Touring the dashboard", upload:"Uploading & running OCR", extraction:"Reviewing AI-extracted fields",
  validation:"Cross-checking against the registry", duplicates:"Scanning for duplicate filings",
  anomalies:"Scanning for anomalies", verification:"Human verification queue", map:"Live GIS parcel map", analytics:"Analytics & reporting",
};
async function startDemo(){
  if(state.demo.running) return;
  state.demo.running = true; state.demo.step = 0; render();
  for(let i=0;i<DEMO_STEPS.length;i++){
    if(!state.demo.running) return;
    state.demo.step = i;
    navigate(DEMO_STEPS[i]);
    if(DEMO_STEPS[i]==="upload"){
      await sleep(500);
      if(!state.demo.running) return;
      handleFile(new File([""], "sample_patta_perur.pdf", {type:"application/pdf"}));
      await attachDemoUploadEvents();
      await runOCR();
    }
    await sleep(DEMO_STEPS[i]==="upload"?900:1700);
  }
  state.demo.running = false;
  toast("Demo walkthrough complete");
  navigate("dashboard");
}
async function attachDemoUploadEvents(){ /* handleFile already re-renders; OCR runs via runOCR() */ }
function cancelDemo(showToast=true){
  state.demo.running = false;
  if(showToast) toast("Demo stopped");
  render();
}
window.startDemo = startDemo; window.cancelDemo = cancelDemo;

/* =========================================================================
   BOOT
   ========================================================================= */
async function boot(){
  await ensureDefaultAdmin();
  render();
}
document.addEventListener("DOMContentLoaded", boot);
