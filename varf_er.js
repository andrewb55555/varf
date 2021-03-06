var version = 11;


var type = '';
var title = "";

var nystagmus_list = ['No Nystagmus','Positive Paroxysmal (BPV)','Persistent Nystagmus (non-BPV)','Not Tested'];
var direction_list = ['Up-beating','Down-beating','Left-beating','Right-beating','Leftward-torsion','Rightward-torsion'];

var fields = {};

fields['state'] = 		{ label: "Experiencing vertigo during examination", 	type: "radio"};
fields['state'].array = ['Yes','No'];

fields['state_gp'] = 		{ label: "Performed when", 	type: "radio"};
fields['state_gp'].array = ['Sympomatic','Asymptomatic'];

fields['location'] = 		{ label: "Where is the questionaire conducted", 	type: "radio"};
fields['location'].array = ['General Practice','ER','Ward','Neurology','Speciality Clinic'];
fields['location'].other = true;

fields['conducted'] = 	{ label: "Conducted By", 				type: "text"};

fields['designation'] = 		{ label: "Specialty", 	type: "radio"};
fields['designation'].array = ['Emergency','General Practitioner','Neuro-otology','Neurology','Specialist Nurse','Audiology'];
fields['designation'].other = true;


fields['blood_pressure'] = 		{ label: "Blood Pressure", 	type: "bpressure"};

fields['pd_head'] = 		{ label: "Patient Details", 	type: "heading"};
fields['hist_head'] = 		{ label: "Patient History", 	type: "heading"};
fields['mrn'] = 	{ label: "Patient MRN", 				type: "text"};
fields['gname'] = 	{ label: "Patient Given Name(s)", 		type: "text"};
fields['sname'] = 	{ label: "Patient Surname", 			type: "text"};
fields['dob'] = 	{ label: "Patient Date of Birth", 		type: "date"};
fields['adate'] = 	{ label: "Assessment Date", 	type: "date"};
fields['adate'].today = true;
fields['gender'] = 	{ label: "Patient Gender", 				type: "radio"};
fields['gender'].array = ['Male','Female','Other'];
fields['urgent'] = 	{ label: "Referral Urgency", 	type: "radio"};
fields['urgent'].array = ['routine','semi-urgent (1 week)','urgent (24 hours)'];

fields['complaint'] = 	{ label: "Presenting Complaint", 			type: "checkbox"};
fields['complaint'].array = ['Vertigo','Imbalance','Lightheadedness','Frequent Falls','Sudden Hearing Loss'];
fields['complaint'].other = true;
fields['complaint'].otherLarge = true;

fields['complaint_er'] = 	{ label: "Features", 			type: "cr_double"};
fields['complaint_er'].array = ['Vertigo','Lightheadedness','Hearing Change'];
fields['complaint_er'].array2 = ['Right','Left','Bilateral'];


fields['context'] = { label: "Context in which current vertigo occurs", 	type: "checkbox"};
fields['context'].other = true;
fields['context'].array = [
	'bending down or arching back',
	'hanging clothes',	
	'at hairdresser or dentist',
	'in bed / turning in / getting in and out of bed',
	'standing from sitting',
	'walking',
	'in the supermarket',
	'sitting quietly',
	'working at computer or watching TV'];
	
fields['context_er'] = { label: "Context in which current vertigo occurs", 	type: "radio"};
fields['context_er'].array = ['First episode of acute severe vertigo','Recurrent Positional Vertigo','Recurrent Non-positional Vertigo'];

fields['onset'] = 	{ label: "Vertigo Onset", 			type: "numeric_dd"};
fields['onset'].array = ['hours ago','days ago','months ago','years ago'];

fields['onset_er'] = 	{ label: "Vertigo Onset", 			type: "radio"};
fields['onset_er'].array = ['hours ago','days ago','months ago','years ago'];

fields['no_episodes'] = 	{ label: "Number of previous episodes", 				type: "radio"};
fields['no_episodes'].array = ['None','1-5','6-25','26+'];

fields['freq_episodes'] = 	{ label: "Frequency of Episodes", 				type: "radio"};
fields['freq_episodes'].array = ['several times a day','several times a week','several times a month','several times a year','rare','unpredictable','present all the time','n/a'];


fields['increasing_freq'] = 	{ label: "Increasing frequency or severity in the last month", 				type: "radio"};
fields['increasing_freq'].array = ['Yes','No'];

fields['vertigo_type'] = 	{ label: "Vertigo Type", 				type: "checkbox"};
fields['vertigo_type'].array = ['spontaneous','positional'];

fields['vertigo_duration'] = 	{ label: "Vertigo Duration", 				type: "numeric_dd"};
fields['vertigo_duration'].array = ['seconds','minutes','hours','days'];

fields['vertigo_duration_er'] = 	{ label: "Vertigo Duration<br><i><small>please ask for the duration of a single dizzy spell</small></i>", 				type: "radio"};
fields['vertigo_duration_er'].array = ['seconds','minutes','hours','days','ongoing'];

fields['hearing_loss'] = 	{ label: "Hearing Loss", 				type: "triple_radio"};
fields['hearing_loss'].array = ['None','Right','Left','Bilateral'];
fields['hearing_loss'].array2 = ['associated with vertigo','not associated with vertigo','unsure if associated with vertigo'];
fields['hearing_loss'].array3 = ['new','pre-existing','unsure if pre-existing'];

fields['hearing_loss_er'] = 	{ label: "Hearing Loss", 				type: "radio"};
fields['hearing_loss_er'].array = ['None','Right','Left','Bilateral'];

fields['tinnitus'] = 	{ label: "Tinnitus", 				type: "double_radio"};
fields['tinnitus'].array = ['None','Right','Left','Bilateral'];
fields['tinnitus'].array2 = ['associated with vertigo','not associated with vertigo','unsure if associated with vertigo'];

fields['tinnitus_er'] = 	{ label: "Tinnitus", 				type: "radio"};
fields['tinnitus_er'].array = ['None','Right','Left','Bilateral'];

fields['fullness'] = 	{ label: "Aural Fullness", 				type: "double_radio"};
fields['fullness'].array = ['None','Right','Left','Bilateral'];
fields['fullness'].array2 = ['associated with vertigo','not associated with vertigo','unsure if associated with vertigo'];

fields['fullness_er'] = 	{ label: "Aural Fullness", 				type: "radio"};
fields['fullness_er'].array = ['None','Right','Left','Bilateral'];

fields['migraine'] = 	{ label: "Migraine Symptoms", 				type: "cr_double"};
fields['migraine'].array = ['None','headache','visual aura','photophobia','phonophobia','motion sensitivity'];
fields['migraine'].array2 = ['associated with vertigo','not associated with vertigo','unsure if associated with vertigo'];

fields['migraine_er'] = 	{ label: "Migraine Symptoms", 				type: "radio"};
fields['migraine_er'].array = ['Yes','No'];

fields['other_neuro_symptoms'] = 	{ label: "Other Neurological Symptoms", 				type: "checkbox"};
fields['other_neuro_symptoms'].array = ['None','Diplopia','Hiccups','Dysphonia','Dysarthria','Tullio Phenomenon','Weakness','Numbness','Ataxia'];

fields['other_neuro_symptoms_er'] = 	{ label: "Other Neurological Symptoms", 				type: "textarea"};

fields['vascular_risk'] = 	{ label: "Vascular Risk Factors", 				type: "checkbox"};
fields['vascular_risk'].array = ['None','Diabetes Mellitus (DM)','Hypertension (HTN)','Atrial Fibrillation (AF)','Dyslipidemia','Smoker','Family History','Previous Stroke or Transient Ischaemic Attack (TIA)'];

fields['past_history'] = 	{ label: "Past History", 				type: "checkbox"};
fields['past_history'].array = ['None','Hearing Loss','Tinnitus','Aural Fullness','Migraine','Diabetes Mellitus (DM)','Hypertension (HTN)','Atrial Fibrillation (AF)','Dyslipidemia','Smoker','Family History','Previous Stroke or Transient Ischaemic Attack (TIA)'];

fields['horners'] = 	{ label: "Horners Syndrome", 				type: "radio"};
fields['horners'].array = ['None','Right','Left','Not Tested'];

fields['shaking'] = 	{ label: "Head Shaking Nystagmus", 			type: "rc_depend"};
fields['shaking'].array = ['Yes','No','Not Tested'];
fields['shaking'].array2 = direction_list;

fields['valsalva'] = 	{ label: "Valsalva Induced Nystagmus", 			type: "rc_depend"};
fields['valsalva'].array = ['Yes','No','Not Tested'];
fields['valsalva'].array2 = direction_list;

fields['meds'] = 	{ label: "Medications", 				type: "textarea"};

fields['vertigo_category'] = 	{ label: "Vertigo Category", 				type: "checkbox"};
fields['vertigo_category'].array = ['acute vestibular syndrome','episodic positional vertigo','episodic spontaneous vertigo','chronic persistent dizziness'];
fields['vertigo_category'].other = true;

fields['examination'] = 	{ label: "Examination", 				type: "heading"};
fields['examination'].array = [];

fields['nystagmus3'] = 	{ label: "Nystagmus", 				type: "nystagmus"};

fields['primary_nystagmus'] = 	{ label: "Primary Position Spontaneous Nystagmus", 				type: "checkbox"};
fields['primary_nystagmus'].array = direction_list.concat(['None']);
fields['primary_nystagmus'].other = true;

fields['primary_nystagmus_gp'] = 	{ label: "Nystagmus when looking straight ahead", 				type: "radio"};
fields['primary_nystagmus_gp'].array = ['None','left-beating','right-beating'];
fields['primary_nystagmus_gp'].other = true;

fields['gaze_evoked'] = 	{ label: "Gaze-evoked Nystagmus", 				type: "radio"};
fields['gaze_evoked'].array = ['None','Unidirectional','Bidirectional','Not Tested'];

fields['gaze_evoked_gp'] = 	{ label: "Gaze-evoked Nystagmus", 				type: "radio"};
fields['gaze_evoked_gp'].array = ['Yes','No'];

fields['rhallpike'] = 	{ label: "Right Hallpike Test", 			type: "rc_depend"};
fields['rhallpike'].array = nystagmus_list;
fields['rhallpike'].array2 = direction_list;

fields['rhallpike_gp'] = 	{ label: "Right Hallpike Test", 			type: "radio"};
fields['rhallpike_gp'].array = ['Negative','Positive'];

fields['lhallpike'] = 	{ label: "Left Hallpike Test", 			type: "rc_depend"};
fields['lhallpike'].array = nystagmus_list;
fields['lhallpike'].array2 = direction_list;

fields['lhallpike_gp'] = 	{ label: "Left Hallpike Test", 			type: "radio"};
fields['lhallpike_gp'].array = ['Negative','Positive'];

fields['hallpike_er'] = 	{ label: "Hallpike Test", 			type: "radio"};
fields['hallpike_er'].array = ['Normal','Right Positive','Left Positive','Both Sides Positive','Not Tested'];


fields['hsaccades'] = 	{ label: "Horizontal Saccades", 			type: "radio"};
fields['hsaccades'].array = ['Normal','Abnormal','Not Tested'];
fields['hsaccades'].other = true;

fields['ino'] = 	{ label: "Internuclear Ophthalmoplegia (INO)", 			type: "radio"};
fields['ino'].array = ['Right','Left','None','Not Tested'];

fields['vsaccades'] = 	{ label: "Vertical Saccades", 			type: "radio"};
fields['vsaccades'].array = ['Normal','Abnormal','Not Tested'];
fields['vsaccades'].other = true;

fields['pursuit'] = 	{ label: "Smooth Pursuit", 			type: "radio"};
fields['pursuit'].array = ['Normal','Saccadic','Not Tested'];
fields['pursuit'].other = true;

fields['romberg'] = 	{ label: "Matted Romberg's Test", 			type: "radio"};
fields['romberg'].array = ['Negative','Positive','Equivocal','Not Tested'];

fields['unterberger'] = 	{ label: "Unterberger Test", 			type: "radio"};
fields['unterberger'].array = ['Negative','Leftward','Rightward','Veers to both sides','Not Tested'];

fields['tandem_gait'] = 	{ label: "Tandem Gait", 			type: "radio"};
fields['tandem_gait'].array = ['Normal','Abnormal','Not Tested'];

fields['hit'] = 	{ label: "Head Impulse Test", 				type: "radio"};
fields['hit'].array = ['Normal','Left Positive','Right Positive','Both Sides Positive','Not Tested'];

fields['hit_er'] = 	{ label: "Head Impulse Test", 				type: "radio"};
fields['hit_er'].array = ['Loses Fixation to the Right','Loses Fixation to the Left','Unable to Fixate Bilaterally','Normal Impulse','Not Tested'];

fields['skew'] = 	{ label: "Skew", 				type: "radio"};
fields['skew'].array = ['Yes','No','Not Tested'];

fields['cranial_nerve_signs'] = 	{ label: "Cranial Nerve Signs", 				type: "checkbox"};
fields['cranial_nerve_signs'].array = [];
fields['cranial_nerve_signs'].other = true;

fields['dysarthria'] = 	{ label: "Dysarthria ", 				type: "radio"};
fields['dysarthria'].array = ['Yes','No','Not Tested'];

fields['cranial_nerve_signs_gp'] = 	{ label: "Cranial Nerve Signs", 				type: "textarea"};

fields['limb_larm'] = 	{ label: "Limb Power Left Arm", 				type: "radio"};
fields['limb_larm'].array = ['no drift','drifts without reaching bed before 10 seconds','some effort against gravity','no effort against gravity','no movement','untestable','Not Tested'];

fields['limb_rarm'] = 	{ label: "Limb Power Right Arm", 				type: "radio"};
fields['limb_rarm'].array = ['no drift','drifts without reaching bed before 10 seconds','some effort against gravity','no effort against gravity','no movement','untestable','Not Tested'];

fields['limb_lleg'] = 	{ label: "Limb Power Left Leg", 				type: "radio"};
fields['limb_lleg'].array = ['no drift','drifts without reaching bed before 5 seconds','some effort against gravity','no effort against gravity','no movement','untestable','Not Tested'];

fields['limb_rleg'] = 	{ label: "Limb Power Right Leg", 				type: "radio"};
fields['limb_rleg'].array = ['no drift','drifts without reaching bed before 5 seconds','some effort against gravity','no effort against gravity','no movement','untestable','Not Tested'];

fields['limb_larm_gp'] = 	{ label: "Left Arm Weakness", 				type: "radio"};
fields['limb_larm_gp'].array = ['present','absent'];
fields['limb_rarm_gp'] = 	{ label: "Right Arm Weakness", 				type: "radio"};
fields['limb_rarm_gp'].array = ['present','absent'];
fields['limb_lleg_gp'] = 	{ label: "Left Leg Weakness", 				type: "radio"};
fields['limb_lleg_gp'].array = ['present','absent'];
fields['limb_rleg_gp'] = 	{ label: "Right Leg Weakness", 				type: "radio"};
fields['limb_rleg_gp'].array = ['present','absent'];

fields['ataxia'] = 	{ label: "Limb Ataxia", 				type: "checkbox"};
fields['ataxia'].array = ['None','Left Arm','Right Arm','Left Leg','Right Leg','Not Tested'];

fields['sensory_loss'] = 	{ label: "Sensory Loss", 				type: "radio"};
fields['sensory_loss'].array = ['None','left patchy loss','left dense loss','right patchy loss','right dense loss','Not Tested'];
fields['sensory_loss'].other = true;

fields['sensory_loss_gp'] = 	{ label: "Sensory Loss", 				type: "textarea"};

fields['morbid_gp'] = 	{ label: "Morbidities", 			type: "textarea"};

fields['morbid'] = 	{ label: "Morbidities", 			type: "mega"};
fields['morbid'].array = [];
fields['morbid'].other = true;
fields['morbid'].otherLarge = true;


fields['gait'] = 	{ label: "Gait (Truncal Ataxia)", 				type: "radio"};
fields['gait'].array = ['No ataxia','Grade 1 - mild to moderate imbalance with walking independently','Grade 2 - severe imbalance with standing, but cannot walk without support','Grade 3 - falling at upright posture','Not Tested'];

fields['prelim_diagnosis'] = 	{ label: "Preliminary Diagnosis", 				type: "mega"};
fields['prelim_diagnosis'].array = [];
fields['prelim_diagnosis'].other = true;

fields['final_diagnosis'] = 	{ label: "Final Diagnosis", 				type: "mega"};
fields['final_diagnosis'].array = [];
fields['final_diagnosis'].other = true;

fields['plan'] = 	{ label: "Management Plan", 				type: "mega"};
fields['plan'].array = [];
fields['plan'].other = true;

fields['other_comments'] = { label: "Other Comments", 				type: "textarea"};
fields['other_comments'].id = 'other_comments';

fields['plan_gp'] = 	{ label: "Management Plan", 				type: "textarea"};

fields['er_diag'] = 	{ label: "Final Diagnosis", 				type: "checkbox"};
fields['er_diag'].array = ['Vestibular Neuritis (VN)','Stroke','Benign Positional Vertigo (BPV)','Other Positional Vertigo','Spontaneous Vertigo'];
fields['er_diag'].other = true;

var currObj;

var gp_ids = ['pd_head','adate','conducted','designation','mrn','sname','gname','gender','dob','urgent','hist_head','complaint','context','onset','no_episodes','freq_episodes','increasing_freq','vertigo_type','vertigo_duration','hearing_loss','tinnitus','fullness','migraine','other_neuro_symptoms','vascular_risk','morbid_gp','meds','examination','state_gp','blood_pressure','primary_nystagmus_gp','gaze_evoked_gp','rhallpike_gp','lhallpike_gp','tandem_gait','hit','skew','horners','cranial_nerve_signs_gp','dysarthria','limb_larm_gp','limb_rarm_gp','limb_lleg_gp','limb_rleg_gp','ataxia','gait','sensory_loss_gp','prelim_diagnosis','plan_gp'];


var gpA_ids = ['pd_head','adate','conducted','mrn','sname','gname','gender','dob','urgent'];
var gpB_ids = ['hist_head','complaint','context','onset','no_episodes','freq_episodes','increasing_freq','vertigo_type','vertigo_duration','hearing_loss','tinnitus','fullness','migraine','other_neuro_symptoms','vascular_risk','morbid_gp','meds'];
var gpC_ids = ['examination','state_gp','blood_pressure','primary_nystagmus_gp','gaze_evoked_gp','rhallpike_gp','lhallpike_gp','tandem_gait','hit','skew','horners','cranial_nerve_signs_gp','dysarthria','limb_larm_gp','limb_rarm_gp','limb_lleg_gp','limb_rleg_gp','ataxia','gait','sensory_loss_gp','prelim_diagnosis','plan_gp'];


var er_ids = ['pd_head','adate','location','conducted','designation','mrn','sname','gname','gender','dob','urgent','hist_head','complaint','context','onset','no_episodes','freq_episodes','increasing_freq','vertigo_type','vertigo_duration','hearing_loss','tinnitus','fullness','migraine','other_neuro_symptoms_er','vascular_risk','morbid','vertigo_category','examination','state','blood_pressure','primary_nystagmus_gp','gaze_evoked_gp','rhallpike_gp','lhallpike_gp','tandem_gait','hit','skew','horners','cranial_nerve_signs','dysarthria','limb_larm','limb_rarm','limb_lleg','limb_rleg','ataxia','gait','sensory_loss_gp','prelim_diagnosis','plan_gp'];

var er2_ids = ['pd_head','adate','mrn','sname','gname','gender','dob','urgent','hist_head','complaint','context','onset_er','vertigo_type','vertigo_duration_er','hearing_loss_er','tinnitus_er','fullness_er','migraine_er','other_neuro_symptoms_er','vascular_risk','morbid','vertigo_category','examination','primary_nystagmus_gp','gaze_evoked_gp','rhallpike_gp','lhallpike_gp','hit','skew','prelim_diagnosis','other_comments'];

var erA_ids = ['pd_head','adate','conducted','mrn','sname','gname','gender','dob','urgent'];
var erB_ids = ['hist_head','complaint_er','context_er','onset_er','vertigo_duration_er','past_history','morbid_gp','meds'];
var erC_ids = ['examination','nystagmus3','hallpike_er','hit_er','skew','er_diag'];

var full_ids = ['pd_head','adate','location','conducted','designation','mrn','sname','gname','gender','dob','urgent','hist_head','complaint','context','onset','no_episodes','freq_episodes','increasing_freq','vertigo_type','vertigo_duration','hearing_loss','tinnitus','fullness','migraine','other_neuro_symptoms','vascular_risk','morbid','meds','vertigo_category','examination','state','blood_pressure','primary_nystagmus','gaze_evoked','rhallpike','lhallpike','hsaccades','ino','vsaccades','pursuit','romberg','unterberger','tandem_gait','hit','skew','horners','cranial_nerve_signs','dysarthria','limb_larm','limb_rarm','limb_lleg','limb_rleg','ataxia','gait','sensory_loss','prelim_diagnosis','plan'];

var neuroA_ids = ['pd_head','adate','location','conducted','designation','mrn','sname','gname','gender','dob','urgent'];
var neuroB_ids = ['hist_head','complaint','context','onset','no_episodes','freq_episodes','increasing_freq','vertigo_type','vertigo_duration','hearing_loss','tinnitus','fullness','migraine','other_neuro_symptoms','vascular_risk','morbid','meds','vertigo_category'];
var neuroC_ids = ['examination','state','blood_pressure','primary_nystagmus','gaze_evoked','rhallpike','lhallpike','hsaccades','ino','vsaccades','pursuit','romberg','unterberger','tandem_gait','hit','skew','horners','shaking','valsalva','cranial_nerve_signs','dysarthria','limb_larm','limb_rarm','limb_lleg','limb_rleg','ataxia','gait','sensory_loss','prelim_diagnosis','plan'];

var ids = [];

function read_html_list(id) {
	var obj = document.getElementById(id);
	var array = obj.innerHTML.split("\n");
	
	while (array[0] === "") { array.shift(); }
	while (array[array.length - 1] === "") { array.pop(); }
	
	console.log("List: "  + id + " -> " + array.join(","));
	
	return array;
}

function prefill_today(id) {
	var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
	let today = new Date(Date.now() - tzoffset).toISOString().substr(0, 10);
	document.getElementById(id).value = today;
	generateText();
}

function parse_query_string(query) {
  var dict = {};
  var a = query.split("?");

  if (a.length < 2) { return dict; }
  var vars = a[1].split("&");
  
  for (var i = 0; i < vars.length; i++) {

    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    dict[key] = value;
  }
  return dict;
}

function setPage(n) {
	var pageA =  document.getElementById("pageA");
	var pageB =  document.getElementById("pageB");
	var pageC =  document.getElementById("pageC");
	var pageD =  document.getElementById("pageD");
		
	var btnA = 	document.getElementById("btnA");
	var btnB = 	document.getElementById("btnB");
	var btnC = 	document.getElementById("btnC");
	var btnD = 	document.getElementById("btnD");
		
	btnA.style.backgroundColor = "#008CBA";
	btnB.style.backgroundColor = "#008CBA";
	btnC.style.backgroundColor = "#008CBA";
	btnD.style.backgroundColor = "#008CBA";
		 
	pageA.style.display = "none"; 
	pageB.style.display = "none"; 
	pageC.style.display = "none"; 
	pageD.style.display = "none"; 
	
	if (n < 0) { n = 0; }
	if (n > 3) { n = 3; }
	switch(n) {
		case 0:
		pageA.style.display = "block"; 
		btnA.style.backgroundColor = "#4CAF50";
		break;
		
		case 1:
		pageB.style.display = "block"; 
		btnB.style.backgroundColor = "#4CAF50";
		break;
		
		case 2:
		pageC.style.display = "block"; 
		btnC.style.backgroundColor = "#4CAF50";
		break;
		
		case 3:
		pageD.style.display = "block"; 
		btnD.style.backgroundColor = "#4CAF50";
		break;							
	}
}

function openScreen(main) {
	var ms = document.getElementById("main_screen");
	var ss = document.getElementById("start_screen");

	reset();

	if (main) {
		ms.style.display = "block";
		ss.style.display = "none";
		myAlert("New form loaded");
	} else {
		ms.style.display = "none";
		ss.style.display = "block";
	}
}

function set_neuro_defaults() {
	console.log("Setting Neuro Defaults");
	title = "Neurology Department Vertigo Assessment";
	fields['location'].def = 'Neurology';
	fields['designation'].def = 'Neurology';
}

function set_gp_defaults() {
	title = "General Practice Referral Form";
	fields['location'].def = 'ER';
}

function set_er_defaults() {
	title = "Emergency Department Vertigo Assessment";
	fields['location'].def = 'ER';
}

function document_ready() {
	let root = document.documentElement;
	
	var query = window.location.href.toString();
	var qs = parse_query_string(query);
	type = qs['type'];
	
	if (typeof type === 'undefine') { type = 'er'; }
	
	fields['cranial_nerve_signs'].array = read_html_list("cranial_list");
	fields['plan'].array = read_html_list("plans_list");
	fields['morbid'].array = read_html_list("morbid_list");
	fields['prelim_diagnosis'].array = read_html_list("preliminarysymptoms_list");
	fields['final_diagnosis'].array = read_html_list("diagnosis_list");

	

	switch(type) {
	
		case 'gp':
		
		set_gp_defaults();
		
		process_rows(document.getElementById("main_body1"),gpA_ids);
		process_rows(document.getElementById("main_body2"),gpB_ids);
		process_rows(document.getElementById("main_body3"),gpC_ids);

		ids = ids.concat(gpA_ids);
		ids = ids.concat(gpB_ids);
		ids = ids.concat(gpC_ids);
		

		
		break;
		
		case 'neuro':
		
		set_neuro_defaults();
		
		process_rows(document.getElementById("main_body1"),neuroA_ids);
		process_rows(document.getElementById("main_body2"),neuroB_ids);
		process_rows(document.getElementById("main_body3"),neuroC_ids);

		ids = ids.concat(neuroA_ids);
		ids = ids.concat(neuroB_ids);
		ids = ids.concat(neuroC_ids);
		
		break;
				
		default:
		
		set_er_defaults();
		
		process_rows(document.getElementById("main_body1"),erA_ids);
		process_rows(document.getElementById("main_body2"),erB_ids);
		process_rows(document.getElementById("main_body3"),erC_ids);

		ids = ids.concat(erA_ids);
		ids = ids.concat(erB_ids);
		ids = ids.concat(erC_ids);
		
		
		break;
		
	}
	
	console.log("title: " + title);
	
	document.getElementById("varf_title").innerHTML = title;
	document.getElementById("varf_title2").innerHTML = title;
		
	ids.push("other_comments");

	var form = document.getElementById("varf_form");
	form.addEventListener('change', function() {
		console.log("Form update");
		generateText();
	});

	setPage(0);

	openScreen(false);

	console.log("YES " + ids.length);
}

function dateString(str,str2)
{
	if (str2 === '') { return ''; }
	console.log("data is " + str);
	var d = new Date(str);
	const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
	const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
	return `${da}-${mo}-${ye}`;
}

function extract_values(ids) {
	for (var i = 0 ; i < ids.length ; i++) {
		var obj = fields[ids[i]];
		currObj = obj;
		console.log("extract_values: " + obj.id);
		switch (obj.type) {
			case 'date':
				obj.value = dateString(document.getElementById(obj.id).valueAsDate,document.getElementById(obj.id).value);
			break;
			case 'text':
			case 'textarea':			
				obj.value = document.getElementById(obj.id).value;
			break;
			
			case 'heading':
				obj.value = -1;
				break;
				
			case 'numeric_dd':
				obj.value = getNumericDropdownVal(obj.id);
				break;

			case 'bpressure':
				obj.value = getBPVal(obj.id);
				break;

			case 'radio':
				obj.value = getRadioVal(obj.id);
				break;
				
			case 'double_radio':
				obj.value = getDoubleRadioVal(obj.id);
				break;
				
			case 'triple_radio':
				obj.value = getTripleRadioVal(obj.id);
				break;

			case 'cr_double':
				obj.value = getVal_cr_double(obj);
				break;	
				
			case 'checkbox':
				obj.value = getCheckboxVal(obj.id);
				break;

			case 'rc_depend':
				obj.value = getVal_rc_double(obj);
				break;
				
			case 'mega':
				obj.value = getValue_mdd(obj.id);
				break;
				
			case 'nystagmus':
				obj.value = getValue_nystagmus(obj.id);
				break;
				
			default:
			console.log("process_rows: invalid type " + ids[i]);
		}
	}
}

function getNystagmusVal(id) {
	var r = getRadioVal(id+"r");
	var c = getCheckboxVal(id+"c");
	if (r === '') { return c; }
	if (c === '') { return r; }
	return r + ", " + c;
}

function process_rows(tbody,ids) {
	tbody.innerHTML = "";
	for (var i = 0 ; i < ids.length ; i++) {
		var obj = fields[ids[i]];
		obj['id'] = ids[i];
		currObj = obj;
		var string = "";
		switch (obj.type) {
			case 'date':
				string = html_date(obj);
			break;
			
			case 'text':
				string = html_text(obj);
			break;
			
			case 'textarea':
				string = html_textarea(obj);
			break;
			
			case 'heading':
				string = html_head(obj);
				break; 
				
			case 'bpressure':
				string = html_bpressure(obj);
				break;
								
			case 'numeric_dd':
				string = html_numeric_dd(obj);
				break;

			case 'radio':
				string = html_radio(obj);
				break;
				
			case 'cr_double':
				string = html_cr_double(obj);
				break;			

			case 'double_radio':
				string = html_double_radio(obj);
				break;
				
			case 'triple_radio':
				string = html_triple_radio(obj);
				break;		
				
			case 'checkbox':
				string = html_checkbox(obj);
				break;

			case 'rc_depend':
				string = html_rc_depend(obj);
				break;
				
			case 'mega':
				string = html_mdd(obj);
				break;
				
			case 'nystagmus':
				string = html_nystagmus(obj);
				break;

			default:
			console.log("process_rows: invalid type " + ids[i]);
		}
		tbody.innerHTML += string + "\n\n";
	}
}

function mytag(a,t) {
	return '<' + t + '>' + a + '</' + t + '>';
}

function mytagc(a,t,c) {
	return '<' + t + ' class="' + c + '">' + a + '</' + t + '>';
}

function html_row1(a) {
	return "<tr><td colspan=\"2\">" + a + "</td></tr>";
}

function html_row2(a,b) {
	return "<tr><td>" + mytagc(a,"span","label") + "</td><td>" + b + "</td></tr>";
}

function html_head(obj) {
	return html_row1(mytag(mytagc(obj.label,"h3","label"), "center")); 
}

function html_text(obj) {
	return html_row2(obj.label,'<input type="text" style="width: 300px;"  id="' + obj.id + '">');
}
function html_textarea(obj) {
	
	return html_row2(obj.label,'<textarea id="' + obj.id + '" name="' + obj.id + '" rows="4" cols="50"></textarea>');
}

function html_bpressure(obj) {
	var string = '<table><tbody><tr><td>Lying:</td><td><input type="number" id="' + obj.id + '-1"></td><td>/</td><td><input type="number" id="' + obj.id + '-2"></td></tr>';
	string += '<tr><td>Standing:</td><td><input type="number" id="' + obj.id + '-3"></td><td>/</td><td><input type="number" id="' + obj.id + '-4"></td></tr>';
	string += '</tbody></table>';
	
	return html_row2(obj.label,string);
}

function html_numeric_dd(obj) {
	var string = '<div id="' + obj.id + '">';
	string += '<input type="number" id="' + obj.id + 'n" min="10" max="100"><select id="' + obj.id + 'd">';
	for (var i = 0 ; i < obj.array.length ; i++) {
		string += '<option value=' + i + '>' + obj.array[i] + '</option>';
	}
	string += '</select></div>';

	return html_row2(obj.label,string);
}


function html_date(obj) {
	var string = '<input type="date" id="' + obj.id + '">';
	if (obj.today) {
		 string += '<button type="button" onclick="prefill_today(\'' + obj.id + '\')">Today</button>';
	}
	return html_row2(obj.label,string);
}

function reset_mega(obj) {
	var array = document.getElementsByClassName("mdd");
	for (var i = 0 ; i < array.length ; i++) {
		rebuild_mdd(array[i].id);
	}
}

function html_mdd(obj) {
  var string = '<div class="mdd" id="' + obj.id + '"><button type="button" onclick="toggle_mdd(\'' + obj.id + '\')" class="mdd_btn">Select</button><input type="text" placeholder="Search.." class="mdd-text" onkeyup="filter_mdd(\'' + obj.id + '\')" style="display:none"><div class="mdd-content" style="display:none">';
  var obj_main = document.getElementById("main");
	for (var i = 0 ; i < obj.array.length ; i++) {
		string += '<span class="fopt"><input type="checkbox" class="fopt_label" unchecked value="' + obj.array[i] + '">' + obj.array[i] + '</span>';
	}
	string += '</div><div class="mdd-display"></div>';
	if (obj.other) { string += html_other_field(obj.id); }
	string += '</div>';
	//console.log(string);
	
	return html_row2(obj.label,string);
}

function html_nystagmus(obj) {	
	var str = '<div class="nystagbox"><span style="text-align: center;width:100%;display:inline-block;"><br /><br />Nystagmus<br /><br /></span></div>';
	str += '<div class="nystagbox"><span class="centertxt">Right Gaze</span><br /><br />'   + raw_radio('nystagmus3-1',['Right-beating','Left-beating','None'],'') + "</div>";
	str += '<div class="nystagbox">Neutral Gaze<br /><br />' + raw_radio('nystagmus3-2',['Right-beating','Left-beating','None'],'') + "</div>";
	str += '<div class="nystagbox">Left Gaze<br /><br />'    + raw_radio('nystagmus3-3',['Right-beating','Left-beating','None'],'') + "</div>";
	
	return html_row1(str);
}


function toggle_mdd(id) {
	var obj = document.getElementById(id);
	var obj_dd 			= obj.getElementsByClassName("mdd-content")[0];
	var obj_display 	= obj.getElementsByClassName("mdd-display")[0];
	var obj_txt 		= obj.getElementsByClassName("mdd-text")[0];
	var obj_btn 		= obj.getElementsByClassName("mdd_btn")[0];
  if (obj_dd.style.display === "none") {
	obj_dd.style.display = "block";
	obj_txt.style.display = "block";
	obj_display.style.display = "none";
	obj_btn.innerHTML = 'Accept';
  } else {
	obj_dd.style.display = "none";
	obj_display.style.display = "block";  
	obj_txt.style.display = "none";
	obj_btn.innerHTML = 'Select';
	rebuild_mdd(id);
  }
}

function getValue_mdd(id) {
	var string = '';
	var array = document.getElementById(id).getElementsByClassName("fopt_label");
	for (var i = 0 ; i < array.length ; i++) {
		if (array[i].checked) {
			if (string === '') {
				string += array[i].value;
				console.log("***" + array[i].value);
			} else {
				string += ", " + array[i].value;
			}
		}
	}
	if (fields[id].other) { string = myJoin(',',string,document.getElementById(id + '-other').value); }
	return string;
}

function myJoin(a,b,c) {
	if (b === '') { return c; }
	if (c === '') { return b; }
	return b + a + c;
}


function rebuild_mdd(id) {
	var obj = document.getElementById(id).getElementsByClassName("mdd-content")[0];
	var obj_display = document.getElementById(id).getElementsByClassName("mdd-display")[0];
	var string = '<ul>';
	
	var array = obj.getElementsByClassName("fopt_label");
	for (var i = 0 ; i < array.length ; i++) {
		if (array[i].checked) {
			string += '<li>' + array[i].value + '</li>';
		}
	}
	string += '</ul>';
	obj_display.innerHTML = string;
}

function filter_mdd(id) {
  console.log("filter");
  var input, filter, ul, li, a, i;
  var count = 0, limit = 5;
  
  input = document.getElementById(id).getElementsByClassName("mdd-text")[0];

  filter = input.value.toUpperCase();
  div =  document.getElementById(id).getElementsByClassName("mdd-content")[0];
  a = div.getElementsByTagName("span");
  for (i = 0; i < a.length; i++) {
	txtValue = a[i].getElementsByTagName("input")[0].value;
    if (txtValue.toUpperCase().indexOf(filter) > -1 && count < limit) {
      a[i].style.display = "";
	  count++;
    } else {
      a[i].style.display = "none";
    }
  }
}

function bc_append(obj) {
	
    var main = obj.parentElement; 
	
	for (var i = 0; i < main.childNodes.length; i++) {
		console.log("bc_append: Child tag " + main.childNodes[i].tagName);
		if (main.childNodes[i].tagName === "SELECT") {
				var string = main.childNodes[i].options[main.childNodes[i].selectedIndex].text;
				if (bc_contains(main,string)) { break; }
		}
		if (main.childNodes[i].tagName === "DIV") {
			var list = main.childNodes[i];
			var html = "<p>" + string + "</p>";
			list.innerHTML += '<p><button type="button" onclick="bc_remove(this)">&#10004;</button><span class="bc">' + string + '</span></p>';
			
			break;
		}
	}
	//alert(bc_toString(main));
	return false;
}

function raw_checkbox(id,array,div_options,inc_other)
{
	var string = '<div id="' + id + '" ' + div_options + '>';
	
	if (typeof array === "undefined") { array = []; }
	if (id === "") { id = "checkbox"; }
	
	for (var i = 0 ; i < array.length ; i++) {
		var subid = id + '-' + i;
		if (i > 0) { string += '<br>'; }
		string += '<input type="checkbox" onclick="nonefix(this)" name="' + id + '" id="' + subid +'" value="' + array[i] + '">';
		string += '<label for="' + subid + '">' + array[i] + '</label>';
	}
	if (inc_other) { string += html_other_field(id); }
	string += '</div>';

	return string;
}

function html_checkbox(obj) {
	var string = raw_checkbox(obj.id,obj.array,'style="display:inline-block; vertical-align:middle;float:left;"',obj.other);
	
	return html_row2(obj.label,string);
}

function raw_radio(id,array,div_options)
{
	var string = '<div id="' + id + '" ' + div_options + '>';
	
	if (typeof array === "undefined") { array = []; }
	if (id === "") { id = "radio"; }
	
	var test = typeof fields[id] !== 'undefined' && typeof fields[id].def !== 'undefined';
	if (test) {
		console.log("Radio Id: " + id + " -> " + fields[id].def);
	}
	
	var checked_text = '';
	for (var i = 0 ; i < array.length ; i++) {
		if (test && fields[id].def === array[i]) {
				checked_text = 'checked';
				console.log("Setting CHECKED");
		} else { checked_text = ''; }
		string += '<input type="radio" id="' + id + '-' + i + '" name="' + id + '" value="' + array[i] + '" ' + checked_text + '>' + array[i] + '<br>';
	}
	if (currObj.other) {
		//string += html_other_field(id);
		
		string += '<input type="radio" id="' + id + '-' + i + '" name="' + id + '" value="other">other: <input type="text" style="width: 300px;" id="' + id + '-other"><br>';
	}
	string += '</div>';

	return string;
}

function raw_radio_fn(id,array,div_options,fn)
{
	var string = '<div id="' + id + '" ' + div_options + '>';
	
	if (typeof array === "undefined") { array = []; }
	if (id === "") { id = "radio"; }
	
	var fname = 'poo';
	for (var i = 0 ; i < array.length ; i++) {
		if (array[i].toLowerCase() === 'no nystagmus' || array[i].toLowerCase() === 'no' || array[i].toLowerCase() === 'not tested') { fname = 'removeOptions'; } else { fname = 'showOptions'; }
		string += '<input type="radio" id="' + id + '-' + i + '" name="' + id + '" value="' + array[i] + '" onclick="' + fname + '(\'' + fn + '\');">' + array[i] + '<br>';
	}
	string += '</div>';

	return string;
}

function html_cr_double(obj) {
	var string = raw_checkbox(obj.id + "-a",obj.array,'style="display:inline-block; vertical-align:middle;float:left;"',obj.other);
	string += raw_radio(obj.id + "-b",obj.array2,'style="display:inline-block; vertical-align:middle;float:left;"');
	return html_row2(obj.label,string);
}

function html_radio(obj) {
	return html_row2(obj.label,raw_radio(obj.id,obj.array,'style="float:left;vertical-align:middle;"'));
}

function html_double_radio(obj) {
	var string = raw_radio(obj.id + "-a",obj.array,'style="float:left;vertical-align:middle;"');
	string += raw_radio(obj.id + "-b",obj.array2,'style="display:inline-block; vertical-align:middle;float:left;"');
	
	return html_row2(obj.label,string);
}

function html_triple_radio(obj) {
	var string = raw_radio(obj.id + "-a",obj.array,'style="float:left;vertical-align:middle;"');
	string += raw_radio(obj.id + "-b",obj.array2,'style="display:inline-block; vertical-align:middle;float:left;"');
	string += raw_radio(obj.id + "-c",obj.array3,'style="display:inline-block; vertical-align:middle;float:left;"');
	
	return html_row2(obj.label,string);
}


function html_rc_depend(obj) {
	var string = raw_radio_fn(obj.id + '-a', obj.array, 'style="float:left;vertical-align:middle;"', obj.id + '-b');
	string += raw_checkbox(obj.id + '-b',obj.array2,'style="display:inline-block; vertical-align:middle;float:left;"',false,false);
	return html_row2(obj.label,string);
}

function html_other_field(id) {
	if (currObj.otherLarge) {
		return '<p><span class="label">other: </span><textarea id="' + id + '-other" name="' + id + '-other" rows="3" cols="50" style="display:inline-block; vertical-align:middle;"></textarea></p>';
	} else {
		return '<p><span class="label">other: </span><input type="text" style="width: 300px;" id="' + id + '-other"></p>';
	}
}

function bc_toString(obj) {
	var out = "";
	var x = obj.getElementsByClassName("bc");
	for (var i = 0; i < x.length; i++) {
		if (out === '') { out = x[i].innerHTML; }
		else { out += ", " + x[i].innerHTML; }
	}
	return out;
}

function bc_contains(obj,text) {
	var x = obj.getElementsByClassName("bc");
	for (var i = 0; i < x.length; i++) {
		if (x[i].innerHTML === text) { return true; }
	}
	return false;
}

function bc_remove(obj) {
	obj.parentElement.remove();
}

function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

function aes_encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function generateJSON() {


	return "Test JSON String";
}

function getValue_nystagmus(id) {
	var s1 = getRadioVal(id + "-1");
	if (s1 !== '') { s1 += " on Right Gaze"; }
	var s2 = getRadioVal(id + "-2");
	if (s2 !== '') { s2 += " on Neutral Gaze"; }
	var s3 = getRadioVal(id + "-3");
	if (s3 !== '') { s3 += " on Left Gaze"; }
	return combineStrings3(s1,s2,s3);
}

function myGetElementValue(id) {
	var obj = document.getElementById(id);

	console.log("getVal: " + obj.tagName + " " + obj.type);

	if (obj.type === 'radio' || obj.type === 'checkbox') {
		if (obj.checked) {
			return obj.value;
		} else {
			return '';
		}
	} else if (obj.tagName === 'SELECT') {
		var sel = document.getElementById(id);
		return sel.options[sel.selectedIndex].text;
	} else {
		return obj.value;
	}
}

function generateText() {
	clearAlert();
	extract_values(ids);

	var string = "";
	
	for (var i = 0 ; i < ids.length ; i++) {
		var obj = fields[ids[i]];
		if (obj.value != -1) {
			if (obj.value.toString() !== '') {
				string += "<b>" + obj.label + ":</b> " + obj.value + "<br />";
			}
		}
	}
	
	document.getElementById("ab_content").innerHTML = string;

	return string;
}

function removeOptions(name)
{
	uncheckBoxes(name);
	document.getElementById(name).style.display = "none"; 
}

function showOptions(name)
{
	document.getElementById(name).style.display = "inline"; 
}


function uncheckBoxes(name) {
	var es = document.getElementsByName(name);
	for (var i = 0; i < es.length; i++) {
		es[i].checked = false;
	}	
}


function isUniqueOption(string) {
	var s = string.toLowerCase();
	return s === 'none' || s === 'not tested';
}

function nonefix(elm, name) {
	if (! elm.checked) { return; }
	if (name == undefined) {  name = elm.name; }
	
	var val = elm.value;
	
	console.log("in here name: " + name + "," + val);
	var es = document.getElementsByName(name);
	if (isUniqueOption(val)) {
		for (var i = 0; i < es.length; i++) {
			if (es[i] != elm) {
				es[i].checked = false;
			}
		}		
	} else {
		for (var i = 0; i < es.length; i++) {
			if (isUniqueOption(es[i].value)) {
				es[i].checked = false;
			}
		}		

	}
}

function getBPVal(id) {
	var v1 = document.getElementById(id + "-1").value;
	var v2 = document.getElementById(id + "-2").value;
	var v3 = document.getElementById(id + "-3").value;
	var v4 = document.getElementById(id + "-4").value;
	
	if (v1 === "" && v2 === "" && v3 === "" && v4 === "") { return ""; }
	if (v1 === '') { v1 = 0; }
	if (v2 === '') { v2 = 0; }
	if (v3 === '') { v3 = 0; }
	if (v4 === '') { v4 = 0; }
	return "Lying: " + v1 + " / " + v2 + " Standing: " + v3 + " / " + v4;
}

function getNumericDropdownVal(id) {
	
	var vn = document.getElementById(id + "n").value;
	var sel = document.getElementById(id + "d");
	var vd = sel.options[sel.selectedIndex].text;
	
	if (vn === "") {
		return "";
	}
	return "" + vn + " " + vd;
}

function getCheckboxVal(id) {
	var obj = fields[id];
	var string = "";
	if (typeof obj !== "undefined" && obj.other) {
		string = document.getElementById(obj.id + '-other').value;
	}

	var es = document.getElementById(id).getElementsByTagName( 'input' );
	
	for (var i = 0; i < es.length; i++) {
		if (es[i].checked) {
			if (string !== "") { string += ", "; }
			string += es[i].value;
		}
	}
	return string;
}

function getCBVal(id) {
	console.log("getCBVal: " + id);
	var es = document.getElementById(id).getElementsByTagName( 'input' );
	var string = '';
	for (var i = 0; i < es.length; i++) {
		if (es[i].checked) {
			if (string !== "") { string += ", "; }
			string += es[i].value;
		}
	}
	return string;
}

function combineStrings(a,b)
{
	if (b === '') { return a; }
	if (a === '') { return b; }
	return a + "; " + b;
}

function combineStrings3(a,b,c)
{
	return combineStrings(a,combineStrings(b,c));
}


function getVal_rc_double(obj) {
	var string1 = getRadioVal(obj.id + "-a");
	var string2 = getCBVal(obj.id + "-b");
	console.log("getVal_cr_double: " + string1 + ',' + string2);
	return combineStrings(string1,string2);
}


function getVal_cr_double(obj) {
	var string1 = getCBVal(obj.id + "-a");
	var string2 = getRadioVal(obj.id + "-b");
	console.log("getVal_cr_double: " + string1 + ',' + string2);
	return combineStrings(string1,string2);
}


function getDoubleRadioVal(id) {
	var string1 = getRadioVal(id + "-a");
	var string2 = getRadioVal(id + "-b");
	return combineStrings(string1,string2);
}

function getTripleRadioVal(id) {
	var string1 = getRadioVal(id + "-a");
	var string2 = getRadioVal(id + "-b");
	var string3 = getRadioVal(id + "-c");
	return combineStrings3(string1,string2,string3);
}

function getRadioVal(name) {
	var radios = document.getElementsByName(name);

console.log("getRadioVal: " + name);

	for (var i = 0, length = radios.length; i < length; i++) {
	  if (radios[i].checked) {
		// do whatever you want with the checked radio
		console.log("getRadioVal: " + radios[i].value);
		if (radios[i].value === 'other') {
			return document.getElementById(name + "-other").value;
		} else {
			return radios[i].value;
		}
		// only one radio can be logically checked, don't check the rest
		break;
	  }
	}
	return ""
}

var myConfirm_fnA = "";
var myConfirm_fnB = "";

function myConfirm(title,subtitle,a,b,fnA,fnB)
{
	myConfirm_fnA = fnA;
	myConfirm_fnB = fnB;
	document.getElementById('diag_title').innerHTML = title;
	document.getElementById('diag_subtitle').innerHTML = subtitle;
	document.getElementById('diag_btnA').innerHTML = a;
	document.getElementById('diag_btnB').innerHTML = b;
	document.getElementById('diag_id01').style.display='block';
}

function myConfirm_close()
{
	document.getElementById('diag_id01').style.display='none';
	myConfirm_fnA = "";
	myConfirm_fnB = "";
}

function myConfirm_optionA()
{
	if (myConfirm_fnA !== '') { myConfirm_fnA(); }
	myConfirm_close();
}

function myConfirm_optionB()
{
	if (myConfirm_fnB !== '') { myConfirm_fnB(); }
	myConfirm_close();
}

function submit() {	
	$.post("json_transfer.pl",
		{
			data: string,
			op: 'save'
		},
		function(data, status){ alert("Data: " + data + "\nStatus: " + status); }
	);
}

function submit_event() {

	myConfirm("Submit Form","Are you sure you want to submit the form to Neurology?","Cancel","Yes",'',commit);
}

function reset_action() {
	reset();
	openScreen(false);
	myAlert("Form Reset");
}

function reset_event() {
	myConfirm("Reset Form","Are you sure you want to erase the form?","Cancel","Yes",'',reset_action);
}

function reset() {
	document.getElementById('varf_form').reset();
	document.getElementById("ab_content").innerHTML = "";
	reset_mega();
}

function commit() {
	copyTextToClipboard(generateText());
	generateJSON();
	openScreen(false);
	myAlert("Form submitted to Neurology");
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}


function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

function copyText()
{
	var str = document.getElementById("ab_content").innerHTML;
	str = str.replace(/<\/?b>/gi, "");
	str = str.replace(/<br\s*[\/]?>/gi, "\n");
	copyTextToClipboard(str);
	myAlert("Text Copied");
}

function clearAlert()
{
	var obj = document.getElementById("abalert");
	obj.style.display = 'none';
}

function myAlert(str)
{
	var obj = document.getElementById("abalert");
	obj.innerHTML = str;
	obj.style.display = 'block';
	setTimeout(clearAlert,3000);
}
