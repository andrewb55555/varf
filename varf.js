var version = 3;

var plans = ['Review when symptomatic','Initiation of low salt diet, duretics, betahistine','Intra tympanic steroids / gentamicin','Initiation of migrane preventative therapy','Increase in hydration','Calf and thigh strengthening exercises','Cognitive behavioral therapy','Urgent imaging and followup','Referral to ophthalmologist for examination for stigmata of autoimmune inner ear disease','Referral to balance rehebilitation','Anti-platelet therapy','Cholesterol lowering medication','Regular GP review for risk factor optimisation: monthly BP check, six monthly fasting lipids and BSL','No further intervention is required','Surgical review','Assessment on the Epley Omniax Rotater for BPV','Vestibular function tests and further follow up','Follow up as required only','Referral for cardiology review inclusive of echocardiography','Referral to physio for exercises to treat head-motion intolerance.','Self directed balance rehabilitation','Sleep study for investigation of possible sleep apnoea.','Training in Home Epley Manoeuvre','Home Video Oculography','Desensitisation exercises for head motion intolerance','Discharge from clinic','Trial of Cinnarizine for vestibular symptoms','Otolaryngology Assessment','Electrocochleography','Non-manipulative Neck Physical Therapy (On Balance Rehab)','Increase dietary salt and water','Neurosurgical reviw','Sleep study'];

var diagnoses = ['atypical positing nystagmus','autoimmune disease','Autoimmune inner ear disease (AIIED)','baroreceptor failure','bilateral vestibular loss','bpv','brainstem stroke','Brainstem Tumour','cardiac rhythm disturbance','central vertigo','central vertigo','Cerebellar Ataxia','clinically definite vestibular migraine','clinically probable vestibular migraine','cochlear implant assesment','delayed endolymphatic hydrops','extra pyramidal syndrome','Head Motion Intolerance','Labyrinthitis','meniere\'s disease','migraine','motion sensitivity','Near dehiscence','No abnormality detected','non-specic imbalance','optic neuritis','other','Paraneoplastic syndrome','peripheral neuropathy','posterior circulation ischaemia','postural hypotension','psychophysical vertigo','spinal cord pathology','superior canal dehiscence','TMJ Arthritis','unilateral vestibular loss','unilateral vestibulopathy','Unknown','vestibular neuritis','vestibular paroxysmia','vestibular schwannoma','Visual vertigo'];

var morbidities = ['Acute Lymphocytic Leukaemia','Acute Myeloid Leukaemia','Acute Renal Failure','Addison\'s Disease','Adenoma','Alcoholic Cerebellar Degeneration','Allergy','Alopecia','Alzheimer\'s Disease','Amnesia','Anaemia','Anal Fissure','Anastomosis','Aneurysm','Angina pectoris','Anosmia','Antiphospholipid antibody syndrome','Anxiety','Aortic Incompetence','Aortic Stenosis','Appendiceal carcinoma','Arteriovenous malformation','Arteriovenous malformation','Arteritis','Arthritis','Asbestosis','Aspergillosis','asthma','Asthma','atrial fibrillation','Atrial Fibrillation','Atrial septal defect','Atrocytoma','Attention deficit disorder','Attention deficit hyperactivity disorder','Atypical Facial Pain','Autoimmune inner ear disease','Autonomic Neuropathy','Back pain','Barrett\'s Oesophagus','Basal Cell Carcinoma','Bell\'s Palsy','Benign Essential Tremor','Benign Positional Vertigo','Benign prostatic hypertrophy','Benign Tumour','beta thalassaemia','bilateral hearing loss','Bilateral Vestibular Loss','Bipolar Disorder','Blepharospasm','Bowel Carcinoma','Bowel obstruction','Brachial neuritis','bradycardia','brain neoplasm','Breast Cancer','Breast Carcinoma','Bronchiectasis','Bronchitis','Bulimia','Bursitis','CANVAS','carcinoma (other)','Cardiac Failure','Cardiac Rhythm Disturbance','Cardiomegaly','Cardiomyopathy','Carpal Tunnel Syndrome','Cataracts','cataracts','Cavernoma','Cavernous Sinus Syndrome','cellulitis','cerebellar ataxia','Cerebellar Ataxia','Cerebellar atrophy','Cerebellopontine Ependymoma','Cerebral Palsy','Cerebrovascular Disease','Cervical Canal Stenosis','Cervical Carcinoma','Cervical disc protrusion','Cervical myeopathy','Cervical spondylosis','Charcot-Marie-Tooth Disease','Chiari  Malformation','Cholecystitis','Cholelithiasis','Cholera','Cholesteatoma','Chorioretitinitis','chronic airflow limitation','Chronic Airflow Limitation','Chronic Bronchitis','Chronic Fatigue Syndrome','Chronic Inflammatory Demyelinating Polyneuropathy','Chronic Lymphocytic Leukaemia','chronic lymphocytic leukaemia','Chronic Myeloid Leukaemia','Chronic Renal Failure','Chronic Renal Impairment','Claudication','cochlear implant','Coeliac Disease','Cogan\'s syndrome','Cognitive impairment','Cold agglutin disease','colonic carcinoma','Congestive Cardiac Failure','Conn\'s syndrome','Constipation','Corneal Dystrophy','Coronary','Coronary artery disease','Coronary Bypass','Corpus Collosum Lipoma','Corticobasal Degeneration','Craniosynostosis','CREST syndrome','Creutzfeld Jakob Disease','Crohn\'s Disease','Crowned Dens Syndrome','Current Smoker','currently Pregnant','Cushing\'s Syndrome','Cystic Fibrosis','Deep Vein Thrombosis','Deep Venous Thrombosis','Dementia','Demyelinating disease','Depression','Dercum\'s disease','Dermatomyositis','Diabetes Mellitus','Diaphragmic palsy','diplopia','Discitis','Discitis','Disectomy','Diverticular Disease','Down\'s Syndrome','Duane\'s syndrome','Dupuytens contracture','Dysarthria','dyslexia','Dystonia','Ear Infection','Eczema','Ehlers Danlos Syndrome','Emphysema','Encephalitis','Endometrial carcinoma','Endometriosis','Endometrosis','Epilepsy','Essential Tremor','Ex Smoker','Facial myokymia','facial neuroma','Familial Hemiplegic Migraine','Family History of Heart Disease','Fatty Liver','Fibroadenoma','Fibromyalgia','Fibrosarcoma','Follicular Keratodermatitis','Food Poisoning','Frontotemporal Dementia','G6PD deficiency','gall bladder dysfunction','Gastric Carcinoma','gastro oesophageal reflux','Gastro Oesophageal Reflux Disease','gastroenteritis','Generalised Epilepsy','gestational diabetes','Glandular fever','glaucoma','Glaucoma','Glioblastoma','Glioma','Glomerulornephritis','Glucose Intolerance','Goitre','gout','Gout','Grave\'s Disease','grommets','Guillain-Barre Syndrome','Haemachromatosis','Haemachromatosis','Haemangioma','Haemophilia','Haemothorax','Haemotympanum','Hashimoto\'s Thyroditis','Hay Fever','Headache non-specific','Heavy Ethanol Consumption','Helicobacter Pylori','Hepatic carcinoma','Hepatic Cirrhosis','hepatic cirrhosis','Hepatitis','hepatitis','Hepatitis C','Hernia','Herpes Simplex Virus','Hip dysplasia','Hip Replacement','Histodelia','HIV','Hodgkin\'s Lymphoma','Horner\'s syndrome','Huntington\'s Disease','hydrocephalus','hyper prostatism','Hypercholesterolaemia','hyperhidrosis','Hyperlipidaemia','Hyperparathyroidism','Hyperprostatism','Hypertension','Hyperthyrodism','Hyperthyroidism','Hypertrophic Obstructive Cardiomyopathy','hyperuricemia','Hypogammaglobulinaemia','Hypoglycaemia','Hypokalaemia','hyponatraemia','Hypoparathyroidism','Hypopituitarism','hypotension','Hypotension','Hypothyroidism','Hypotonia','Hysterectomy','IGg4 Systemic Disease','Implanted Defibrillator','inflammatory bowel disease','Inflammatory Bowel Disease','Insomnia','Insulin Resistance','Interstitial Lung Disease','Iron Deficiency','iron deficiency','Irritable Bowel Syndrome','Irritable Bowel Syndrome','Ischaemic Heart Disease','Kidney Stones','Knee pain','Knee Replacement','kyphoscoliosis','Labyrinthitis','Lactose Intolerance','large vestibular aqueduct syndrome','Laryngeal dystonia','Laryngeal dystonia','Laryngeal nodule','Leukaemia','Lewy Body Dementia','lipomatosis','Low blood pressure','Lumbar Canal Stenosis','Lumbar Disc Pathology','Lung Cancer','Lupus','Lyme Disease','Lymphedema','Lymphoma','Macular Degeneration','Mal de Debarquement','Malaria','Malignant Melanoma','Marfan\'s Syndrome','Mastitis','Mastoid effusion','Mastoidectomy','Mastoiditis','Medullary sponge kidney','Medulloblastoma','melanoma','Melatonin','Meniere\'s Disease','Meningioma','Meningioma','Meningitis','meniscal tear','Menorrhagia','Merrnohagia','Mesothelioma','MGUS','Migraine with family history','Migraine without family history','Miller Fisher Syndrome','Mitral Incompetence','Mitral Stenosis','Mitral valve disease','Mitral Valve Prolapse','Mixed Connective Tissue Disease','Motor Neurone Disease','Multiple Endocrine Neoplasia','Multiple pulmonary emboli','Multiple Sclerosis','Multisystem Atrophy','Mumps','Myasthenia Gravis','Mycolonus','Myelodysplasia','myeloproliferative disorder','Myocardial Infarction','Myopathy','Myotonia Dystrophica','Narcolepsy','Nasal Congestion','Nasopharyngeal carcinoma','Neck Pain','Nephrolithiasis','neurofibromatosis','neurolabyrinthitis','neutropenia','Nocturnal Hyperhidrosis','non-Hodgekins lymphoma','Non-Hodgkin\'s Lymphoma','Norrie syndrome','Obesity','Obsessive compulsive disorder','obstructive sleep apnoea','Obstructive Sleep Aponea','Ocular toxoplasmosis','Oesophageal Carcinoma','Oesophagitis','Oligoarthritis','Optic Neuritis','optic neuropathy','orthosclerosis','oscillopsia','Osteoarthritis','Osteogenesis imperfecta','Osteomalacea','Osteomyelitis','Osteomyelitis','Osteopenia','Osteoporosis','osteoporosis','Other','Otitis Externa','Otitis Media','Otosclerosis','Ovarian cancer','ovarian cysts','Paget\'s disease','Pancreatitis','Papillary carcinoma','Paraesthesia','paraneoplastic syndrome','Paraneoplastic Syndrome','Parasthesia','Parathyroidectomy','Parkinson\'s Disease','Parkinsonism','Paroxymal AF','Partial Epilepsy','Patulous Eustachian Tube','pe','Peptic Ulcer','Perianal fistula','pericardial effusion','Pericarditis','Peripheral Neuropathy','Peripheral Vascular Disease','Peritoneal cancer','Permanent Pacemaker','Permanent Pacemaker for rhythm disturbance','pernicious anaemia','Pes Cavus','pharyngeal carcinoma','Phrenic Nerve Palsy','pituitary adenoma','Pleomorphic adenoma','Pleurisy','Pneumonia','Poliomyelitis','Polycystic Ovarian Syndrome','polycythaemia','Polycythaemia','Polymyalgia','Polymyositis','Polyps','Polyuria','Post Traumatic Stress Disorder','postural orthostatic tachycardia syndrome (POTS)','Pre eclampsia/eclampsia','Progressive Supranuclear Palsy','Prolactinoma','prolapsed rectum','Prostate Carcinoma','prostate carcinoma','Prostatic Hypertrophy','Prostatitis','Prostatitis','Pseudo exfoliation syndrome','Pseudogout','Pseudohypoparathyroidism','Psoriasis','Psoriatic Arthritis','Psychosis','Ptosis','Pulmonary Emboli','Pulmonary Embolus','Pulmonary Fibrosis','pulmonary fibrosis','Pulmonary Hypertension','QT Syndrome','Radiculopathy','Ramsay Hunt Syndrome','Raynaud\'s phenomenon','Rectal Adenocarcinoma','Rectocele','Recurrent Miscarriages','Refsum\'s Disease','Renal Artery Stenosis','Renal Calculi','Renal Cell Carcinoma','Renal disease','Respiratory Tract Infection','restless legs and burning toes','Restless Legs Syndrome','Restrictive lung disease','Restrictive strain injury','Retinal Detachment','Retinitis Pigmentosa','rheumatic fever','Rheumatic Heart Disease','rheumatoid arthritis','Rheumatoid Arthritis','Rhinitis','Rosacea','Ross River virus','Rubella','Salmonella','Sarcoidosis','Scheuermann\'s disease','schizophrenia','Schwannoma','Schwannoma, Surgery','Sciatica','Scleroderma','Scoliosis','seizures','Sensorineural hearing loss','Septal defect','Seronegative Arthritis','Shingles','Shoulder Replacement','Sick Sinus Syndrome','Sickle Cell Anaemia','silicosis','Sinus Dysrhthmia','Sinus meningioma','Sinusitis','Sjogren\'s Syndrome','Spina Bifilda Oclta','Spinal Canal Stenosis','Spinal Claudication','Splenectomy','Spondylosis','Squamous Cell Carcinoma','Stapedectomy','Stiff Man\'s Syndrome','Still\'s disease','Stroke','Subarachnoid haemorrhage','Subdural haemorrhage','Sudden Sensorineural Hearing Loss','SUNCT Syndrome','superficial vein thrombosis','superior canal dehiscence','Supraventricular Tachycardia','supraventricular tachycardia','Surgery','Sweet\'s syndrome','Syncope','Syphilis','Systemic Lupus Erythematosis','tachycardia','Tarsal tunnel release','Tendonitis','Tensillomegaly','Tension Headache','Testicular cancer','Thalassaemia Trait','Thrombocythaemia','Thyroid Cancer','thyroid carcinoma','Thyroid Disease','Thyroid nodules','Thyrotoxicosis','TMJ Dysfunction','Tonsillitis','Tracheo-oesophageal fistula','Transitional Cell Carcinoma','Trauma','Trigeminal Neuralgia','Trismus','Tuberculosis','Tubular Adenoma','Tubulovullious Adenoma','Turner\'s Syndrome','tympanic membrane perfusion','tympanoplasty','Typhus','Ulcerative Colitis','Uncompensated Vestibular Loss','Unilateral Hearing  Loss','Unilateral Vestibular Loss','ureteric neoplasm','Urinary Tract Infection','Urosepsis','Urticaria','Uterine Carcinoma','Uterine Prolapse','Valvular Heart Disease','Valvular Heart Disease','Varicocoele','Vascular Dementia','Velocardio facial syndrome','venous sinus thrombosis','Ventricular Fibrillation','ventricular tachycardia','Vestibular aqueduct syndrome','Vestibular Migraine','Vestibular Neuritis','Vestibular Neuropathy','visual impairment','Vitamin B12 Deficiency','Vitamin D Deficiency','Vitiligo','Vitiligo','Vitreous Detachment','Wegener\'s Granulomatosis','White Matter Hyperintensities','White Matter Ischaemia','Whooping Cough']




var fields = {};
fields['pd_head'] = 		{ label: "Patient Details", 	type: "heading"};
fields['hist_head'] = 		{ label: "Patient History", 	type: "heading"};
fields['mrn'] = 	{ label: "MRN", 				type: "text"};
fields['gname'] = 	{ label: "Given Name(s)", 		type: "text"};
fields['sname'] = 	{ label: "Surname", 			type: "text"};
fields['dob'] = 	{ label: "Date of Birth", 		type: "date"};
fields['adate'] = 	{ label: "Assessment Date", 	type: "date"};
fields['gender'] = 	{ label: "Gender", 				type: "radio"};
fields['gender'].array = ['Male','Female'];
fields['urgent'] = 	{ label: "Referral Urgency", 	type: "radio"};
fields['urgent'].array = ['routine','semi-urgent (2 weeks)','urgent (1 week)'];

fields['complaint'] = 	{ label: "Presenting Complaint", 			type: "textarea"};


fields['context'] = { label: "Context in which current vertigo occurs", 	type: "checkbox"};
fields['context'].other = true;
fields['context'].array = [
	'bending down or arching back',
	'hanging clothes',	
	'at hairdresser or dentist',
	'turning in/getting in and out of bed',
	'standing from sitting',
	'walking',
	'in the supermarket',
	'sitting quietly',
	'working at computer or watching TV'];

fields['onset'] = 	{ label: "Vertigo Onset", 			type: "numeric_dd"};
fields['onset'].array = ['hours ago','days ago','months ago','years ago'];

fields['no_episodes'] = 	{ label: "Number of previous episodes", 				type: "radio"};
fields['no_episodes'].array = ['none','1-5','6-25','26+'];

fields['freq_episodes'] = 	{ label: "Frequency of Episodes", 				type: "radio"};
fields['freq_episodes'].array = ['several times a day','several times a week','several times a month','several times a year','rare','unpredictable','present all the time'];


fields['increasing_freq'] = 	{ label: "Increasing frequency or severity in the last month", 				type: "radio"};
fields['increasing_freq'].array = ['yes','no'];

fields['vertigo_type'] = 	{ label: "Vertigo Type", 				type: "checkbox"};
fields['vertigo_type'].array = ['spontaneous','positional'];

fields['vertigo_duration'] = 	{ label: "Vertigo Duration", 				type: "numeric_dd"};
fields['vertigo_duration'].array = ['seconds','minutes','hours','days'];

fields['hearing_loss'] = 	{ label: "Hearing Loss", 				type: "radio"};
fields['hearing_loss'].array = ['none','left','right','both'];


fields['tinnitus'] = 	{ label: "Tinnitus", 				type: "radio"};
fields['tinnitus'].array = ['none','left','right','both'];

fields['fullness'] = 	{ label: "Fullness", 				type: "radio"};
fields['fullness'].array = ['none','left','right','both'];

fields['migraine'] = 	{ label: "Migraine Symptoms", 				type: "checkbox"};
fields['migraine'].array = ['headache','visual aura','photophobia','phonophobia','motion sensitivity'];

fields['other_neuro_symptoms'] = 	{ label: "Other Neurological Symptoms", 				type: "checkbox"};
fields['other_neuro_symptoms'].array = ['diplopia','dysarthria','weakness','numbness','hiccups','dysphonia'];

fields['vascular_risk'] = 	{ label: "Vascular Risk Factors", 				type: "checkbox"};
fields['vascular_risk'].array = ['DM','HTN','AF','dyslipidemia','smoker','family history'];

fields['vertigo_category'] = 	{ label: "Vertigo Category", 				type: "radio"};
fields['vertigo_category'].array = ['acute vestibular syndrome','episodic positional vertigo','episodic spontaneous vertigo','chronic persistent dizziness','other'];

fields['examination'] = 	{ label: "Examination", 				type: "heading"};
fields['examination'].array = [];

fields['primary_nystagmus'] = 	{ label: "Primary Position Spontaneous Nystagmus", 				type: "radio"};
fields['primary_nystagmus'].array = ['none','up-beating','down-beating','left-beating','right-beating','leftward torsion','rightward torsion'];

fields['gaze_evoked'] = 	{ label: "Gaze-evoked Nystagmus", 				type: "radio"};
fields['gaze_evoked'].array = ['none','unidirectional','bidirectional'];

fields['rhallpike'] = 	{ label: "Right Hallpike Test", 			type: "nystagmus"};
fields['lhallpike'] = 	{ label: "Left Hallpike Test", 			type: "nystagmus"};

fields['hit'] = 	{ label: "Head Impulse Test", 				type: "radio"};
fields['hit'].array = ['normal','left positive','right positive','both'];

fields['skew'] = 	{ label: "Skew", 				type: "radio"};
fields['skew'].array = ['present','absent'];

fields['cranial_nerve_signs'] = 	{ label: "Cranial Nerve Signs", 				type: "textarea"};

fields['limb_larm'] = 	{ label: "Limb Power Left Arm", 				type: "radio"};
fields['limb_larm'].array = ['no drift','drifts without reaching bed before 10 seconds','some effort against gravity','no effort against gravity','no movement','untestable'];

fields['limb_rarm'] = 	{ label: "Limb Power Right Arm", 				type: "radio"};
fields['limb_rarm'].array = ['no drift','drifts without reaching bed before 10 seconds','some effort against gravity','no effort against gravity','no movement','untestable'];

fields['limb_lleg'] = 	{ label: "Limb Power Left Leg", 				type: "radio"};
fields['limb_lleg'].array = ['no drift','drifts without reaching bed before 5 seconds','some effort against gravity','no effort against gravity','no movement','untestable'];

fields['limb_rleg'] = 	{ label: "Limb Power Right Leg", 				type: "radio"};
fields['limb_rleg'].array = ['no drift','drifts without reaching bed before 5 seconds','some effort against gravity','no effort against gravity','no movement','untestable'];

fields['ataxia'] = 	{ label: "Ataxia", 				type: "checkbox"};
fields['ataxia'].array = ['none','left arm','right arm','left leg','right leg'];

fields['sensory_loss'] = 	{ label: "Sensory Loss", 				type: "radio"};
fields['sensory_loss'].array = ['none','left loss','left dense loss','right patchy loss','right dense loss'];

fields['morbid'] = 	{ label: "Morbidities", 			type: "mega"};
fields['morbid'].array = morbidities;

fields['impression'] = 	{ label: "Impression", 				type: "textarea"};
fields['impression'].array = [];

fields['prelim_diagnosis'] = 	{ label: "Preliminary Diagnosis", 				type: "mega"};
fields['prelim_diagnosis'].array = diagnoses;

fields['final_diagnosis'] = 	{ label: "Final Diagnosis", 				type: "mega"};
fields['final_diagnosis'].array = diagnoses;

fields['plan'] = 	{ label: "Management Plan", 				type: "mega"};
fields['plan'].array = plans;


var ids = ['pd_head','adate','mrn','sname','gname','gender','dob','urgent','hist_head','complaint','context','onset','no_episodes','freq_episodes','increasing_freq','vertigo_type','vertigo_duration','hearing_loss','tinnitus','fullness','migraine','other_neuro_symptoms','vascular_risk','vertigo_category','prelim_diagnosis','examination','primary_nystagmus','gaze_evoked','rhallpike','lhallpike','hit','skew','cranial_nerve_signs','limb_larm','limb_rarm','limb_lleg','limb_rleg','ataxia','sensory_loss','morbid','impression','final_diagnosis','plan'];

function document_ready() {
	process_rows(ids);
	console.log("YES " + ids.length );
}

function extract_values(ids) {
	for (var i = 0 ; i < ids.length ; i++) {
		var obj = fields[ids[i]];
		console.log("extract_values: " + obj.id);
		switch (obj.type) {
			case 'date':
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

			case 'radio':
				obj.value = getRadioVal(obj.id);
				break;
				
			case 'checkbox':
				obj.value = getCheckboxVal(obj.id);
				break;

			case 'nystagmus':
				obj.value = getNystagmusVal(obj.id);
				break;
				
			case 'mega':
				obj.value = bc_toString(document.getElementById(obj.id));
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

function process_rows(ids) {
	tbody = document.getElementById("main_body");
	tbody.innerHTML = "";
	for (var i = 0 ; i < ids.length ; i++) {
		var obj = fields[ids[i]];
		obj['id'] = ids[i];
		var string = "";
		console.log("process_rows: " + obj.id);
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
				
			case 'numeric_dd':
				string = html_numeric_dd(obj);
				break;

			case 'radio':
				string = html_radio(obj);
				break;
				
			case 'checkbox':
				string = html_checkbox(obj);
				break;

			case 'nystagmus':
				string = html_nystagmus(obj);
				break;
				
			case 'mega':
				string = html_mega(obj);
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
	return html_row2(obj.label,'<input type="text" id="' + obj.id + '">');
}
function html_textarea(obj) {
	
	return html_row2(obj.label,'<textarea id="' + obj.id + '" name="w3review" rows="4" cols="50"></textarea>');
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
	return html_row2(obj.label,'<input type="date" id="' + obj.id + '">');
}

function reset_mega(obj) {
	var array = document.getElementsByClassName("megacheckboxlist");
	for (var i = 0 ; i < array.length ; i++) {
		array[i].innerHTML = '';
	}
}

function html_mega(obj) {

	var string = '<div id="' + obj.id + '" class="megacheckbox"><select>';

	for (var i = 0 ; i < obj.array.length ; i++) {
		string += '<option value=' + i + '>' + obj.array[i] + '</option>';
	}
	string += '</select><button type="button" onclick="bc_append(this)">&#8595; Add</button><div class="megacheckboxlist"></div></div>';
	
	return html_row2(obj.label,string);
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


function html_radio(obj) {
	var string = '<div style="float:left;vertical-align:middle;">';
	
	if (typeof obj.array === "undefined") { obj.array = []; }
	
	for (var i = 0 ; i < obj.array.length ; i++) {
		string += '<input type="radio" id="' + obj.id + '-' + i + '" name="' + obj.id + '" value="' + obj.array[i] + '" >' + obj.array[i] + '<br>';
	}
	string += '</div>';
	
	return html_row2(obj.label,string);
}

function html_nystagmus(obj) {
	var string = `<div style="float:left;vertical-align:middle;">
<input type="radio" id="_ID_r-0" name="_ID_r" value="no nystagmus" onclick="noNystagmus('_ID_c');">no nystagmus<br>
<input type="radio" id="_ID_r-1" name="_ID_r" value="paroxysmal" onclick="yesNystagmus('_ID_c');">paroxysmal<br>
<input type="radio" id="_ID_r-2" name="_ID_r" value="persistent" onclick="yesNystagmus('_ID_c');">persistent<br>
</div>
<div id="_ID_c" style="display:inline-block; vertical-align:middle;float:left;">
<input type="checkbox" onclick="nonefix(this)" name="_ID_c" id="_ID_c-0" value="up-beating"><label for="_ID_c-0">up-beating</label>
<br><input type="checkbox" onclick="nonefix(this)" name="_ID_c" id="_ID_c-1" value="down-beating"><label for="_ID_c-1">down-beating</label>
<br><input type="checkbox" onclick="nonefix(this)" name="_ID_c" id="_ID_c-2" value="left-beating"><label for="_ID_c-2">left-beating</label>
<br><input type="checkbox" onclick="nonefix(this)" name="_ID_c" id="_ID_c-3" value="right-beating"><label for="_ID_c-3">right-beating</label>
<br><input type="checkbox" onclick="nonefix(this)" name="_ID_c" id="_ID_c-4" value="leftward torsion"><label for="_ID_c-4">leftward torsion</label>
<br><input type="checkbox" onclick="nonefix(this)" name="_ID_c" id="_ID_c-5" value="rightward torsion"><label for="_ID_c-5">rightward torsion</label>
</div>`;

	string = string.replace(/_ID_/g,obj.id);
	
	return html_row2(obj.label,string);
}

function html_checkbox(obj) {
	var string = '<div id="' + obj.id + '" style="display:inline-block; vertical-align:middle;float:left;">';
	for (var i = 0 ; i < obj.array.length ; i++) {
		var subid = obj.id + '-' + i;
		if (i > 0) { string += '<br>'; }
		string += '<input type="checkbox" onclick="nonefix(this)" name="' + obj.id + '" id="' + subid +'" value="' + obj.array[i] + '">';
		string += '<label for="' + subid + '">' + obj.array[i] + '</label>';
	}
	if (obj.other) {
		var subid = obj.id + '-other';
		string += '<p><span class="label">other</span><input type="text" id="' + subid + '">';
	}
	string += '</div>';
	
	return html_row2(obj.label,string);
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
	extract_values(ids);

	var string = "";
	
	for (var i = 0 ; i < ids.length ; i++) {
		var obj = fields[ids[i]];
		if (obj.value != -1) {
			string += obj.label + ": " + obj.value + "\n";
		}
	}

	return string;
}

function noNystagmus(name)
{
	uncheckBoxes(name);
	document.getElementById(name).style.display = "none"; 
}

function yesNystagmus(name)
{
	document.getElementById(name).style.display = "inline"; 
}


function uncheckBoxes(name) {
	var es = document.getElementsByName(name);
	for (var i = 0; i < es.length; i++) {
		es[i].checked = false;
	}	
}


function nonefix(elm, name) {
	if (! elm.checked) { return; }
	if (name == undefined) {  name = elm.name; }
	
	var val = elm.value;
	
	console.log("in here name: " + name + "," + val);
	var es = document.getElementsByName(name);
	if (val === 'none') {
		for (var i = 0; i < es.length; i++) {
			if (es[i] != elm) {
				es[i].checked = false;
			}
		}		
	} else {
		for (var i = 0; i < es.length; i++) {
			if (es[i].value === "none") {
				es[i].checked = false;
			}
		}		

	}
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

function getDoubleRadioVal(name1,name2) {
	var string1 = getRadioVal(name1);
	var string2 = getRadioVal(name2);
	if (string1 === "no nystagmus") {
			return string1;
	}
	if (string1 === "") {
			return string2;
	}
	if (string2 === "") {
			return string1;
	}
	return string1 + ", " + string2;
}

function getRadioVal(name) {
	var radios = document.getElementsByName(name);

	for (var i = 0, length = radios.length; i < length; i++) {
	  if (radios[i].checked) {
		// do whatever you want with the checked radio
		return radios[i].value;
		// only one radio can be logically checked, don't check the rest
		break;
	  }
	}
	return ""
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

function reset() {
	document.getElementById('varf_form').reset();
	reset_mega();
}

function commit() {
	copyTextToClipboard(generateText());
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
