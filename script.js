// ==================== DATA STRUCTURE ====================
let currentUser = null;
let currentRole = null;
let cart = [];

const pharmaData = {
    medicines: [],
    employees: [],
    companies: [],
    sales: [],
    customers: []
};

// Demo Companies Database
const companiesDB = [
    { id: 1, name: 'GSK (GlaxoSmithKline)', contact: 'Ahmed Khan', email: 'gsk@example.com', phone: '0300-1111111', address: 'Karachi Office', city: 'Karachi' },
    { id: 2, name: 'Pfizer', contact: 'Sarah Ali', email: 'pfizer@example.com', phone: '0300-2222222', address: 'Lahore Office', city: 'Lahore' },
    { id: 3, name: 'Roche', contact: 'Fatima Khan', email: 'roche@example.com', phone: '0300-3333333', address: 'Islamabad Office', city: 'Islamabad' },
    { id: 4, name: 'Abbott', contact: 'Hassan Ali', email: 'abbott@example.com', phone: '0300-4444444', address: 'Rawalpindi Office', city: 'Rawalpindi' },
    { id: 5, name: 'Novartis', contact: 'Ayesha Khan', email: 'novartis@example.com', phone: '0300-5555555', address: 'Faisalabad Office', city: 'Faisalabad' },
    { id: 6, name: 'Sanofi', contact: 'Ali Hassan', email: 'sanofi@example.com', phone: '0300-6666666', address: 'Multan Office', city: 'Multan' },
    { id: 7, name: 'Merck', contact: 'Nida Khan', email: 'merck@example.com', phone: '0300-7777777', address: 'Peshawar Office', city: 'Peshawar' },
    { id: 8, name: 'Johnson & Johnson', contact: 'Imran Ahmed', email: 'jnj@example.com', phone: '0300-8888888', address: 'Hyderabad Office', city: 'Hyderabad' },
    { id: 9, name: 'Cipla', contact: 'Rajesh Kumar', email: 'cipla@example.com', phone: '0300-9999999', address: 'Multan Office', city: 'Multan' },
    { id: 10, name: 'Sandoz', contact: 'Omar Khan', email: 'sandoz@example.com', phone: '0300-1010101', address: 'Sialkot Office', city: 'Sialkot' },
    { id: 11, name: 'Boehringer Ingelheim', contact: 'Iqbal Ahmed', email: 'boehringer@example.com', phone: '0300-1111222', address: 'Islamabad Office', city: 'Islamabad' },
    { id: 12, name: 'Galderma', contact: 'Maria Khan', email: 'galderma@example.com', phone: '0300-2222333', address: 'Lahore Office', city: 'Lahore' },
    { id: 13, name: 'Bayer', contact: 'Hans Schmidt', email: 'bayer@example.com', phone: '0300-3333444', address: 'Karachi Office', city: 'Karachi' },
    { id: 14, name: 'Nestle Health Science', contact: 'Sofia Martinez', email: 'nestle@example.com', phone: '0300-4444555', address: 'Rawalpindi Office', city: 'Rawalpindi' },
    { id: 15, name: 'Local Brands', contact: 'Muhammad Hassan', email: 'local@example.com', phone: '0300-5555666', address: 'Multiple Locations', city: 'Pakistan' }
];

// Comprehensive Medicines Database - Real Pakistani Medicines from ePharm Book
const medicinesDB = [
    // Pain Relief - Analgesics
    { id: 1, name: 'Panadol 500mg', company: 'GSK', category: 'pain-relief', strength: '500mg Tablet', batch: 'B001', quantity: 150, costPrice: 8, sellingPrice: 20, expiryDate: '2026-12-31', description: 'Paracetamol - Effective pain reliever' },
    { id: 2, name: 'Panadol Extra 665mg', company: 'GSK', category: 'pain-relief', strength: '665mg Tablet', batch: 'B002', quantity: 120, costPrice: 12, sellingPrice: 28, expiryDate: '2026-06-30', description: 'Extra strength paracetamol' },
    { id: 3, name: 'Tylenol 500mg', company: 'Pfizer', category: 'pain-relief', strength: '500mg Tablet', batch: 'B003', quantity: 100, costPrice: 10, sellingPrice: 25, expiryDate: '2026-05-15', description: 'Paracetamol pain relief' },
    { id: 4, name: 'Ibuprofen 400mg (Brufen)', company: 'Abbott', category: 'pain-relief', strength: '400mg Tablet', batch: 'B004', quantity: 80, costPrice: 12, sellingPrice: 32, expiryDate: '2026-05-15', description: 'Anti-inflammatory pain reliever' },
    { id: 5, name: 'Diclofenac 50mg', company: 'Novartis', category: 'pain-relief', strength: '50mg Tablet', batch: 'B005', quantity: 85, costPrice: 10, sellingPrice: 28, expiryDate: '2026-06-10', description: 'NSAID for pain and inflammation' },
    { id: 6, name: 'Aspirin 500mg', company: 'Local', category: 'pain-relief', strength: '500mg Tablet', batch: 'B006', quantity: 200, costPrice: 4, sellingPrice: 12, expiryDate: '2026-11-30', description: 'Pain relief and fever reducer' },
    { id: 7, name: 'Naproxen 250mg', company: 'Sandoz', category: 'pain-relief', strength: '250mg Tablet', batch: 'B007', quantity: 90, costPrice: 14, sellingPrice: 38, expiryDate: '2026-07-25', description: 'NSAID anti-inflammatory' },
    { id: 8, name: 'Tramadol 50mg', company: 'Cipla', category: 'pain-relief', strength: '50mg Capsule', batch: 'B008', quantity: 60, costPrice: 20, sellingPrice: 55, expiryDate: '2026-08-15', description: 'Strong opioid analgesic - prescription' },
    
    // Cold & Flu - Antihistamines & Decongestants
    { id: 9, name: 'Cetirizine 10mg (Allercet)', company: 'Cipla', category: 'cold-flu', strength: '10mg Tablet', batch: 'B009', quantity: 130, costPrice: 8, sellingPrice: 22, expiryDate: '2026-08-30', description: 'Antihistamine for allergies' },
    { id: 10, name: 'Loratadine 10mg', company: 'Sandoz', category: 'cold-flu', strength: '10mg Tablet', batch: 'B010', quantity: 110, costPrice: 7, sellingPrice: 20, expiryDate: '2026-07-20', description: 'Non-drowsy allergy relief' },
    { id: 11, name: 'Fexofenadine 120mg', company: 'Sanofi', category: 'cold-flu', strength: '120mg Tablet', batch: 'B011', quantity: 100, costPrice: 15, sellingPrice: 40, expiryDate: '2026-09-10', description: 'Antihistamine for seasonal allergy' },
    { id: 12, name: 'Chlorpheniramine 4mg', company: 'Local', category: 'cold-flu', strength: '4mg Tablet', batch: 'B012', quantity: 140, costPrice: 3, sellingPrice: 10, expiryDate: '2026-10-05', description: 'First-generation antihistamine' },
    { id: 13, name: 'Vitamin C 1000mg', company: 'Local', category: 'vitamins', strength: '1000mg Tablet', batch: 'B013', quantity: 180, costPrice: 10, sellingPrice: 30, expiryDate: '2026-09-20', description: 'Immune system booster' },
    
    // Cough & Cold Syrups
    { id: 14, name: 'Coughex Cough Syrup', company: 'Sanofi', category: 'cough', strength: '100ml Syrup', batch: 'B014', quantity: 60, costPrice: 45, sellingPrice: 120, expiryDate: '2026-09-10', description: 'Effective cough relief syrup' },
    { id: 15, name: 'Ambroxol Syrup', company: 'Abbott', category: 'cough', strength: '30mg/5ml', batch: 'B015', quantity: 50, costPrice: 35, sellingPrice: 90, expiryDate: '2026-04-10', description: 'Mucolytic cough syrup' },
    { id: 16, name: 'Bisolvon Cough Syrup', company: 'Boehringer Ingelheim', category: 'cough', strength: '8mg/5ml', batch: 'B016', quantity: 70, costPrice: 40, sellingPrice: 110, expiryDate: '2026-10-30', description: 'Bromhexine based cough syrup' },
    { id: 17, name: 'Salbutamol Inhaler (Ventolin)', company: 'GSK', category: 'cough', strength: '100mcg/dose', batch: 'B017', quantity: 45, costPrice: 80, sellingPrice: 220, expiryDate: '2026-08-20', description: 'Bronchodilator for asthma' },
    
    // Antibiotics
    { id: 18, name: 'Augmentin 625mg', company: 'GSK', category: 'antibiotics', strength: '625mg Tablet', batch: 'B018', quantity: 60, costPrice: 35, sellingPrice: 95, expiryDate: '2026-10-20', description: 'Amoxicillin + Clavulanic Acid' },
    { id: 19, name: 'Azithromycin 500mg', company: 'Cipla', category: 'antibiotics', strength: '500mg Tablet', batch: 'B019', quantity: 75, costPrice: 28, sellingPrice: 75, expiryDate: '2026-08-10', description: 'Macrolide antibiotic' },
    { id: 20, name: 'Ciprofloxacin 500mg', company: 'Sandoz', category: 'antibiotics', strength: '500mg Tablet', batch: 'B020', quantity: 85, costPrice: 30, sellingPrice: 80, expiryDate: '2026-06-05', description: 'Fluoroquinolone antibiotic' },
    { id: 21, name: 'Amoxicillin 500mg', company: 'Merck', category: 'antibiotics', strength: '500mg Capsule', batch: 'B021', quantity: 100, costPrice: 18, sellingPrice: 50, expiryDate: '2026-09-15', description: 'Penicillin-based antibiotic' },
    { id: 22, name: 'Cephalexin 500mg', company: 'Pfizer', category: 'antibiotics', strength: '500mg Capsule', batch: 'B022', quantity: 70, costPrice: 25, sellingPrice: 65, expiryDate: '2026-07-30', description: 'Cephalosporin antibiotic' },
    { id: 23, name: 'Erythromycin 500mg', company: 'Abbott', category: 'antibiotics', strength: '500mg Tablet', batch: 'B023', quantity: 65, costPrice: 22, sellingPrice: 60, expiryDate: '2026-08-05', description: 'Macrolide antibiotic' },
    { id: 24, name: 'Metronidazole 400mg', company: 'Cipla', category: 'antibiotics', strength: '400mg Tablet', batch: 'B024', quantity: 80, costPrice: 12, sellingPrice: 35, expiryDate: '2026-09-25', description: 'Antiprotozoal & anaerobic antibiotic' },
    
    // Digestive/Gastroenterology
    { id: 25, name: 'Omeprazole 20mg', company: 'Sandoz', category: 'digestive', strength: '20mg Capsule', batch: 'B025', quantity: 120, costPrice: 15, sellingPrice: 45, expiryDate: '2026-09-30', description: 'PPI for acid reflux' },
    { id: 26, name: 'Ranitidine 150mg', company: 'Pfizer', category: 'digestive', strength: '150mg Tablet', batch: 'B026', quantity: 100, costPrice: 12, sellingPrice: 35, expiryDate: '2026-07-15', description: 'H2 blocker for ulcers' },
    { id: 27, name: 'Pantoprazole 40mg', company: 'Cipla', category: 'digestive', strength: '40mg Tablet', batch: 'B027', quantity: 90, costPrice: 18, sellingPrice: 50, expiryDate: '2026-08-20', description: 'PPI for GERD' },
    { id: 28, name: 'Antacid Milk of Magnesia', company: 'Local', category: 'antacids', strength: '200ml Suspension', batch: 'B028', quantity: 140, costPrice: 12, sellingPrice: 35, expiryDate: '2026-06-20', description: 'Fast antacid relief' },
    { id: 29, name: 'Tums (Calcium Carbonate)', company: 'Abbott', category: 'antacids', strength: '500mg Tablet', batch: 'B029', quantity: 150, costPrice: 8, sellingPrice: 22, expiryDate: '2026-10-15', description: 'Antacid for indigestion' },
    { id: 30, name: 'Loperamide 2mg (Imodium)', company: 'Pfizer', category: 'digestive', strength: '2mg Tablet', batch: 'B030', quantity: 100, costPrice: 10, sellingPrice: 28, expiryDate: '2026-08-10', description: 'Anti-diarrheal agent' },
    
    // Vitamins & Supplements
    { id: 31, name: 'Multivitamin Tablet', company: 'Roche', category: 'vitamins', strength: 'Daily Multivitamin', batch: 'B031', quantity: 200, costPrice: 12, sellingPrice: 35, expiryDate: '2026-12-31', description: 'Complete daily vitamin' },
    { id: 32, name: 'Vitamin D 1000IU', company: 'Abbott', category: 'vitamins', strength: '1000IU Capsule', batch: 'B032', quantity: 150, costPrice: 8, sellingPrice: 25, expiryDate: '2026-11-15', description: 'Bone health support' },
    { id: 33, name: 'Iron Supplement (Ferrous)', company: 'Novartis', category: 'vitamins', strength: '325mg Tablet', batch: 'B033', quantity: 100, costPrice: 6, sellingPrice: 18, expiryDate: '2026-08-30', description: 'Iron deficiency anemia' },
    { id: 34, name: 'Folic Acid 5mg', company: 'Local', category: 'vitamins', strength: '5mg Tablet', batch: 'B034', quantity: 120, costPrice: 4, sellingPrice: 12, expiryDate: '2026-11-20', description: 'Essential for cell division' },
    { id: 35, name: 'Vitamin B Complex', company: 'Cipla', category: 'vitamins', strength: 'Combination Tablet', batch: 'B035', quantity: 110, costPrice: 8, sellingPrice: 22, expiryDate: '2026-09-30', description: 'All B vitamins' },
    
    // Blood Pressure & Cardiac
    { id: 36, name: 'Amlodipine 5mg', company: 'Pfizer', category: 'cardiac', strength: '5mg Tablet', batch: 'B036', quantity: 100, costPrice: 10, sellingPrice: 28, expiryDate: '2026-12-31', description: 'Calcium channel blocker' },
    { id: 37, name: 'Lisinopril 10mg', company: 'Merck', category: 'cardiac', strength: '10mg Tablet', batch: 'B037', quantity: 90, costPrice: 12, sellingPrice: 32, expiryDate: '2026-11-05', description: 'ACE inhibitor for hypertension' },
    { id: 38, name: 'Atenolol 50mg', company: 'GSK', category: 'cardiac', strength: '50mg Tablet', batch: 'B038', quantity: 95, costPrice: 8, sellingPrice: 22, expiryDate: '2026-10-15', description: 'Beta-blocker for BP' },
    { id: 39, name: 'Aspirin 75mg (Cardio)', company: 'Bayer', category: 'cardiac', strength: '75mg Tablet', batch: 'B039', quantity: 80, costPrice: 5, sellingPrice: 15, expiryDate: '2026-08-20', description: 'Cardiac protection aspirin' },
    { id: 40, name: 'Atorvastatin 10mg', company: 'Cipla', category: 'cardiac', strength: '10mg Tablet', batch: 'B040', quantity: 100, costPrice: 15, sellingPrice: 42, expiryDate: '2026-09-15', description: 'Statin for cholesterol' },
    
    // Diabetes
    { id: 41, name: 'Metformin 500mg', company: 'Cipla', category: 'diabetes', strength: '500mg Tablet', batch: 'B041', quantity: 110, costPrice: 8, sellingPrice: 25, expiryDate: '2026-10-15', description: 'First-line diabetes drug' },
    { id: 42, name: 'Glibenclamide 5mg', company: 'Sandoz', category: 'diabetes', strength: '5mg Tablet', batch: 'B042', quantity: 100, costPrice: 10, sellingPrice: 28, expiryDate: '2026-09-20', description: 'Sulfonylurea antidiabetic' },
    { id: 43, name: 'Gliclazide 80mg', company: 'Pfizer', category: 'diabetes', strength: '80mg Tablet', batch: 'B043', quantity: 85, costPrice: 12, sellingPrice: 35, expiryDate: '2026-08-25', description: 'Sulfonylurea for diabetes' },
    
    // Skincare
    { id: 44, name: 'Differin Gel (Adapalene)', company: 'Galderma', category: 'skincare', strength: 'Topical Gel', batch: 'B044', quantity: 50, costPrice: 80, sellingPrice: 220, expiryDate: '2026-05-30', description: 'Retinoid for acne' },
    { id: 45, name: 'Cetaphil Moisturizer', company: 'Nestle', category: 'skincare', strength: '100ml Cream', batch: 'B045', quantity: 70, costPrice: 25, sellingPrice: 65, expiryDate: '2026-07-10', description: 'Gentle moisturizer' },
    { id: 46, name: 'Acne-Aid Cleansing Lotion', company: 'Local', category: 'skincare', strength: '100ml Lotion', batch: 'B046', quantity: 90, costPrice: 20, sellingPrice: 55, expiryDate: '2026-08-15', description: 'Acne cleanser' },
    
    // Respiratory/Asthma
    { id: 47, name: 'Theophylline 300mg', company: 'Abbott', category: 'cough', strength: '300mg Tablet', batch: 'B047', quantity: 75, costPrice: 18, sellingPrice: 50, expiryDate: '2026-07-20', description: 'Bronchodilator' },
    { id: 48, name: 'Ipratropium Bromide', company: 'Boehringer Ingelheim', category: 'cough', strength: 'Inhaler', batch: 'B048', quantity: 40, costPrice: 90, sellingPrice: 250, expiryDate: '2026-06-15', description: 'Anticholinergic bronchodilator' },
    
    // Injections & Biologics
    { id: 49, name: 'Insulin Injection (Lantus)', company: 'Sanofi', category: 'injections', strength: '100 IU/ml Pen', batch: 'B049', quantity: 40, costPrice: 150, sellingPrice: 450, expiryDate: '2026-04-30', description: 'Long-acting insulin' },
    { id: 50, name: 'Vitamin B12 Injection', company: 'Merck', category: 'injections', strength: '1000mcg Vial', batch: 'B050', quantity: 45, costPrice: 60, sellingPrice: 180, expiryDate: '2026-07-25', description: 'B12 for anemia' },
    
    // Additional Antibiotics
    { id: 51, name: 'Cefixime 200mg', company: 'Cipla', category: 'antibiotics', strength: '200mg Tablet', batch: 'B051', quantity: 80, costPrice: 22, sellingPrice: 60, expiryDate: '2026-09-10', description: 'Third-generation cephalosporin' },
    { id: 52, name: 'Levofloxacin 500mg', company: 'Sandoz', category: 'antibiotics', strength: '500mg Tablet', batch: 'B052', quantity: 70, costPrice: 35, sellingPrice: 95, expiryDate: '2026-08-15', description: 'Respiratory fluoroquinolone' },
    { id: 53, name: 'Clarithromycin 500mg', company: 'Abbott', category: 'antibiotics', strength: '500mg Tablet', batch: 'B053', quantity: 60, costPrice: 32, sellingPrice: 85, expiryDate: '2026-07-20', description: 'Macrolide for respiratory infections' },
    { id: 54, name: 'Doxycycline 100mg', company: 'Pfizer', category: 'antibiotics', strength: '100mg Capsule', batch: 'B054', quantity: 75, costPrice: 18, sellingPrice: 50, expiryDate: '2026-08-30', description: 'Tetracycline antibiotic' },
    { id: 55, name: 'Moxifloxacin 400mg', company: 'Sanofi', category: 'antibiotics', strength: '400mg Tablet', batch: 'B055', quantity: 55, costPrice: 40, sellingPrice: 110, expiryDate: '2026-09-05', description: 'Respiratory fluoroquinolone' },
    
    // Additional NSAIDs & Pain Relief
    { id: 56, name: 'Ketorolac 10mg (Toradol)', company: 'Roche', category: 'pain-relief', strength: '10mg Tablet', batch: 'B056', quantity: 65, costPrice: 18, sellingPrice: 50, expiryDate: '2026-07-15', description: 'Strong NSAID for acute pain' },
    { id: 57, name: 'Meloxicam 15mg', company: 'Boehringer Ingelheim', category: 'pain-relief', strength: '15mg Tablet', batch: 'B057', quantity: 70, costPrice: 22, sellingPrice: 60, expiryDate: '2026-08-20', description: 'Long-acting NSAID' },
    { id: 58, name: 'Piroxicam 20mg', company: 'Local', category: 'pain-relief', strength: '20mg Tablet', batch: 'B058', quantity: 80, costPrice: 16, sellingPrice: 45, expiryDate: '2026-09-10', description: 'OXICAM NSAID for inflammation' },
    { id: 59, name: 'Indomethacin 25mg', company: 'Cipla', category: 'pain-relief', strength: '25mg Capsule', batch: 'B059', quantity: 60, costPrice: 14, sellingPrice: 40, expiryDate: '2026-08-05', description: 'NSAID for pain and inflammation' },
    
    // Additional Antihistamines
    { id: 60, name: 'Promethazine 25mg', company: 'Pfizer', category: 'cold-flu', strength: '25mg Tablet', batch: 'B060', quantity: 100, costPrice: 12, sellingPrice: 35, expiryDate: '2026-09-15', description: 'First-generation antihistamine with sedation' },
    { id: 61, name: 'Terfenadine 120mg', company: 'Abbott', category: 'cold-flu', strength: '120mg Tablet', batch: 'B061', quantity: 80, costPrice: 16, sellingPrice: 45, expiryDate: '2026-08-10', description: 'Non-sedating antihistamine' },
    { id: 62, name: 'Desloratadine 5mg', company: 'Sanofi', category: 'cold-flu', strength: '5mg Tablet', batch: 'B062', quantity: 75, costPrice: 18, sellingPrice: 50, expiryDate: '2026-09-20', description: 'Active metabolite of loratadine' },
    
    // Additional Gastrointestinal
    { id: 63, name: 'Lansoprazole 30mg', company: 'Pfizer', category: 'digestive', strength: '30mg Capsule', batch: 'B063', quantity: 90, costPrice: 20, sellingPrice: 55, expiryDate: '2026-08-25', description: 'PPI for GERD and ulcers' },
    { id: 64, name: 'Esomeprazole 20mg', company: 'Cipla', category: 'digestive', strength: '20mg Tablet', batch: 'B064', quantity: 85, costPrice: 22, sellingPrice: 60, expiryDate: '2026-09-10', description: 'PPI for acid reflux' },
    { id: 65, name: 'Famotidine 20mg', company: 'Merck', category: 'digestive', strength: '20mg Tablet', batch: 'B065', quantity: 95, costPrice: 14, sellingPrice: 40, expiryDate: '2026-07-30', description: 'H2-blocker for ulcers' },
    { id: 66, name: 'Sucralfate 1g', company: 'Local', category: 'digestive', strength: '1g Tablet', batch: 'B066', quantity: 100, costPrice: 12, sellingPrice: 35, expiryDate: '2026-08-15', description: 'Mucosal protectant for ulcers' },
    { id: 67, name: 'Bismuth Subsalicylate', company: 'Abbott', category: 'digestive', strength: '262mg Tablet', batch: 'B067', quantity: 110, costPrice: 10, sellingPrice: 28, expiryDate: '2026-09-05', description: 'Anti-diarrheal and antacid' },
    { id: 68, name: 'Domperidone 10mg', company: 'Cipla', category: 'digestive', strength: '10mg Tablet', batch: 'B068', quantity: 120, costPrice: 15, sellingPrice: 42, expiryDate: '2026-08-20', description: 'Antiemetic and gastrokinetic' },
    
    // Additional Cardiac/Hypertension
    { id: 69, name: 'Nifedipine 10mg', company: 'Pfizer', category: 'cardiac', strength: '10mg Tablet', batch: 'B069', quantity: 95, costPrice: 14, sellingPrice: 40, expiryDate: '2026-09-15', description: 'Calcium channel blocker for hypertension' },
    { id: 70, name: 'Diltiazem 60mg', company: 'Sanofi', category: 'cardiac', strength: '60mg Tablet', batch: 'B070', quantity: 85, costPrice: 18, sellingPrice: 50, expiryDate: '2026-08-10', description: 'Calcium channel blocker' },
    { id: 71, name: 'Metoprolol 50mg', company: 'GSK', category: 'cardiac', strength: '50mg Tablet', batch: 'B071', quantity: 90, costPrice: 16, sellingPrice: 45, expiryDate: '2026-09-20', description: 'Beta-blocker for hypertension' },
    { id: 72, name: 'Captopril 25mg', company: 'Merck', category: 'cardiac', strength: '25mg Tablet', batch: 'B072', quantity: 80, costPrice: 15, sellingPrice: 42, expiryDate: '2026-08-25', description: 'ACE inhibitor for BP control' },
    { id: 73, name: 'Enalapril 10mg', company: 'Novartis', category: 'cardiac', strength: '10mg Tablet', batch: 'B073', quantity: 100, costPrice: 18, sellingPrice: 50, expiryDate: '2026-09-10', description: 'ACE inhibitor for hypertension' },
    { id: 74, name: 'Verapamil 120mg', company: 'Abbott', category: 'cardiac', strength: '120mg Tablet', batch: 'B074', quantity: 70, costPrice: 22, sellingPrice: 60, expiryDate: '2026-08-15', description: 'Calcium channel blocker for angina' },
    
    // Additional Diabetes Medications
    { id: 75, name: 'Sitagliptin 100mg', company: 'Pfizer', category: 'diabetes', strength: '100mg Tablet', batch: 'B075', quantity: 85, costPrice: 45, sellingPrice: 120, expiryDate: '2026-09-05', description: 'DPP-4 inhibitor for diabetes' },
    { id: 76, name: 'Pioglitazone 15mg', company: 'Sanofi', category: 'diabetes', strength: '15mg Tablet', batch: 'B076', quantity: 75, costPrice: 40, sellingPrice: 110, expiryDate: '2026-08-20', description: 'Thiazolidinedione antidiabetic' },
    { id: 77, name: 'Acarbose 50mg', company: 'Bayer', category: 'diabetes', strength: '50mg Tablet', batch: 'B077', quantity: 90, costPrice: 25, sellingPrice: 70, expiryDate: '2026-09-15', description: 'Alpha-glucosidase inhibitor' },
    { id: 78, name: 'Vildagliptin 50mg', company: 'Novartis', category: 'diabetes', strength: '50mg Tablet', batch: 'B078', quantity: 80, costPrice: 48, sellingPrice: 130, expiryDate: '2026-08-10', description: 'DPP-4 inhibitor for diabetes' },
    
    // Additional Respiratory/Asthma
    { id: 79, name: 'Formoterol 12mcg', company: 'GSK', category: 'cough', strength: 'Dry powder inhaler', batch: 'B079', quantity: 50, costPrice: 95, sellingPrice: 260, expiryDate: '2026-07-25', description: 'Long-acting beta-2 agonist' },
    { id: 80, name: 'Beclomethasone 50mcg', company: 'Abbott', category: 'cough', strength: 'Inhaler', batch: 'B080', quantity: 60, costPrice: 85, sellingPrice: 240, expiryDate: '2026-08-30', description: 'Inhaled corticosteroid for asthma' },
    { id: 81, name: 'Montelukast 10mg', company: 'Merck', category: 'cough', strength: '10mg Tablet', batch: 'B081', quantity: 100, costPrice: 35, sellingPrice: 95, expiryDate: '2026-09-20', description: 'Leukotriene receptor antagonist' },
    { id: 82, name: 'Zafirlukast 20mg', company: 'AstraZeneca', category: 'cough', strength: '20mg Tablet', batch: 'B082', quantity: 75, costPrice: 32, sellingPrice: 90, expiryDate: '2026-08-15', description: 'Leukotriene antagonist for asthma' },
    
    // Additional Vitamins & Supplements
    { id: 83, name: 'Vitamin B1 (Thiamine) 50mg', company: 'Cipla', category: 'vitamins', strength: '50mg Tablet', batch: 'B083', quantity: 150, costPrice: 5, sellingPrice: 15, expiryDate: '2026-12-10', description: 'Thiamine for energy metabolism' },
    { id: 84, name: 'Vitamin B2 (Riboflavin) 50mg', company: 'Local', category: 'vitamins', strength: '50mg Tablet', batch: 'B084', quantity: 140, costPrice: 6, sellingPrice: 18, expiryDate: '2026-11-15', description: 'Riboflavin for cell growth' },
    { id: 85, name: 'Vitamin B6 (Pyridoxine) 50mg', company: 'Abbott', category: 'vitamins', strength: '50mg Tablet', batch: 'B085', quantity: 130, costPrice: 7, sellingPrice: 20, expiryDate: '2026-10-20', description: 'Pyridoxine for amino acid metabolism' },
    { id: 86, name: 'Niacin 500mg', company: 'Roche', category: 'vitamins', strength: '500mg Tablet', batch: 'B086', quantity: 120, costPrice: 8, sellingPrice: 22, expiryDate: '2026-09-25', description: 'Niacin for cholesterol management' },
    { id: 87, name: 'Calcium Carbonate 500mg', company: 'Pfizer', category: 'vitamins', strength: '500mg Tablet', batch: 'B087', quantity: 180, costPrice: 10, sellingPrice: 28, expiryDate: '2026-11-30', description: 'Calcium supplement for bones' },
    { id: 88, name: 'Magnesium 400mg', company: 'Cipla', category: 'vitamins', strength: '400mg Tablet', batch: 'B088', quantity: 150, costPrice: 12, sellingPrice: 35, expiryDate: '2026-10-15', description: 'Magnesium for muscle and nerve function' },
    { id: 89, name: 'Zinc Sulphate 220mg', company: 'Abbott', category: 'vitamins', strength: '220mg Tablet', batch: 'B089', quantity: 140, costPrice: 11, sellingPrice: 30, expiryDate: '2026-09-30', description: 'Zinc for immune function' },
    
    // Additional Skincare/Dermatology
    { id: 90, name: 'Clotrimazole 1%', company: 'Sandoz', category: 'skincare', strength: 'Topical Cream 20g', batch: 'B090', quantity: 100, costPrice: 25, sellingPrice: 70, expiryDate: '2026-08-20', description: 'Antifungal for skin infections' },
    { id: 91, name: 'Miconazole 2%', company: 'Pfizer', category: 'skincare', strength: 'Topical Powder 50g', batch: 'B091', quantity: 90, costPrice: 28, sellingPrice: 75, expiryDate: '2026-09-15', description: 'Antifungal cream' },
    { id: 92, name: 'Salicylic Acid 2%', company: 'Local', category: 'skincare', strength: 'Topical Solution 50ml', batch: 'B092', quantity: 120, costPrice: 20, sellingPrice: 55, expiryDate: '2026-08-10', description: 'Keratolytic for acne and warts' },
    { id: 93, name: 'Benzoyl Peroxide 5%', company: 'Galderma', category: 'skincare', strength: 'Topical Gel 30g', batch: 'B093', quantity: 85, costPrice: 32, sellingPrice: 85, expiryDate: '2026-09-20', description: 'Antibacterial for acne' },
    { id: 94, name: 'Hydrocortisone Cream 1%', company: 'Abbott', category: 'skincare', strength: 'Topical Cream 20g', batch: 'B094', quantity: 110, costPrice: 22, sellingPrice: 60, expiryDate: '2026-08-25', description: 'Topical steroid for inflammation' },
    { id: 95, name: 'Triamcinolone 0.1%', company: 'Sanofi', category: 'skincare', strength: 'Topical Ointment 30g', batch: 'B095', quantity: 95, costPrice: 28, sellingPrice: 75, expiryDate: '2026-09-10', description: 'Topical corticosteroid' },
    
    // Additional Antiemetics & Neurological
    { id: 96, name: 'Metoclopramide 10mg', company: 'Cipla', category: 'digestive', strength: '10mg Tablet', batch: 'B096', quantity: 130, costPrice: 14, sellingPrice: 40, expiryDate: '2026-09-15', description: 'Antiemetic and gastrokinetic' },
    { id: 97, name: 'Ondansetron 4mg', company: 'Pfizer', category: 'digestive', strength: '4mg Tablet', batch: 'B097', quantity: 70, costPrice: 45, sellingPrice: 120, expiryDate: '2026-08-10', description: '5-HT3 antagonist antiemetic' },
    { id: 98, name: 'Granisetron 1mg', company: 'Abbott', category: 'digestive', strength: '1mg Tablet', batch: 'B098', quantity: 60, costPrice: 48, sellingPrice: 130, expiryDate: '2026-09-05', description: 'Selective 5-HT3 antagonist' },
    { id: 99, name: 'Cinnarizine 25mg', company: 'Sanofi', category: 'cough', strength: '25mg Tablet', batch: 'B099', quantity: 100, costPrice: 18, sellingPrice: 50, expiryDate: '2026-08-20', description: 'Antivertigo and antiemetic' },
    { id: 100, name: 'Dimenhydrinate 50mg', company: 'Local', category: 'cold-flu', strength: '50mg Tablet', batch: 'B100', quantity: 140, costPrice: 12, sellingPrice: 35, expiryDate: '2026-09-25', description: 'Motion sickness and nausea relief' },
    
    // Additional Pakistani Medicines (101-150)
    { id: 101, name: 'Salbutamol Solution 0.5%', company: 'GSK', category: 'cough', strength: '100ml', batch: 'B101', quantity: 80, costPrice: 45, sellingPrice: 125, expiryDate: '2026-08-30', description: 'Nebulizer solution for asthma' },
    { id: 102, name: 'Terbutaline Sulphate 5mg', company: 'Abbott', category: 'cough', strength: '5mg Tablet', batch: 'B102', quantity: 85, costPrice: 18, sellingPrice: 50, expiryDate: '2026-09-15', description: 'Beta-2 agonist bronchodilator' },
    { id: 103, name: 'Ephedrine 25mg', company: 'Local', category: 'cough', strength: '25mg Tablet', batch: 'B103', quantity: 100, costPrice: 14, sellingPrice: 38, expiryDate: '2026-10-10', description: 'Bronchodilator and decongestant' },
    { id: 104, name: 'Theophylline Sustained Release 300mg', company: 'Cipla', category: 'cough', strength: '300mg SR Tablet', batch: 'B104', quantity: 90, costPrice: 20, sellingPrice: 55, expiryDate: '2026-09-20', description: 'Long-acting bronchodilator' },
    { id: 105, name: 'Dextromethorphan 10mg', company: 'Pfizer', category: 'cough', strength: '10mg/5ml', batch: 'B105', quantity: 70, costPrice: 32, sellingPrice: 85, expiryDate: '2026-08-25', description: 'Cough suppressant' },
    { id: 106, name: 'Codeine Phosphate 30mg', company: 'Sanofi', category: 'cough', strength: '30mg Tablet', batch: 'B106', quantity: 60, costPrice: 22, sellingPrice: 60, expiryDate: '2026-09-10', description: 'Opioid cough suppressant' },
    { id: 107, name: 'Guaifenesin 100mg', company: 'Abbott', category: 'cough', strength: '100mg/5ml', batch: 'B107', quantity: 95, costPrice: 18, sellingPrice: 48, expiryDate: '2026-08-20', description: 'Expectorant for mucus clearance' },
    { id: 108, name: 'Acetylcysteine 600mg', company: 'Cipla', category: 'cough', strength: '600mg Effervescent', batch: 'B108', quantity: 75, costPrice: 28, sellingPrice: 75, expiryDate: '2026-09-05', description: 'Mucolytic agent' },
    { id: 109, name: 'Bromhexine 8mg', company: 'Sandoz', category: 'cough', strength: '8mg Tablet', batch: 'B109', quantity: 85, costPrice: 16, sellingPrice: 45, expiryDate: '2026-08-30', description: 'Mucolytic for cough' },
    { id: 110, name: 'Chlorpheniramine Maleate 4mg', company: 'Local', category: 'cold-flu', strength: '4mg Tablet', batch: 'B110', quantity: 120, costPrice: 8, sellingPrice: 22, expiryDate: '2026-10-15', description: 'First-generation antihistamine' },
    { id: 111, name: 'Hydroxyzine HCl 25mg', company: 'Pfizer', category: 'cold-flu', strength: '25mg Tablet', batch: 'B111', quantity: 80, costPrice: 18, sellingPrice: 50, expiryDate: '2026-09-20', description: 'Antihistamine with sedative effect' },
    { id: 112, name: 'Mebhydrolin 25mg', company: 'Abbott', category: 'cold-flu', strength: '25mg Tablet', batch: 'B112', quantity: 90, costPrice: 14, sellingPrice: 38, expiryDate: '2026-08-15', description: 'Antihistamine for allergies' },
    { id: 113, name: 'Pheniramine Maleate 25mg', company: 'Cipla', category: 'cold-flu', strength: '25mg Tablet', batch: 'B113', quantity: 85, costPrice: 12, sellingPrice: 32, expiryDate: '2026-09-10', description: 'First-generation antihistamine' },
    { id: 114, name: 'Trimeprazine Tartrate 2.5mg', company: 'Sanofi', category: 'cold-flu', strength: '2.5mg Tablet', batch: 'B114', quantity: 75, costPrice: 16, sellingPrice: 45, expiryDate: '2026-08-25', description: 'Phenothiazine antihistamine' },
    { id: 115, name: 'Pseudoephedrine 30mg', company: 'Local', category: 'cold-flu', strength: '30mg Tablet', batch: 'B115', quantity: 100, costPrice: 10, sellingPrice: 28, expiryDate: '2026-10-05', description: 'Nasal decongestant' },
    { id: 116, name: 'Phenylephrine HCl 10mg', company: 'Abbott', category: 'cold-flu', strength: '10mg Tablet', batch: 'B116', quantity: 85, costPrice: 12, sellingPrice: 32, expiryDate: '2026-09-15', description: 'Sympathomimetic decongestant' },
    { id: 117, name: 'Xylometazoline 0.1%', company: 'Pfizer', category: 'cold-flu', strength: 'Nasal Spray', batch: 'B117', quantity: 60, costPrice: 25, sellingPrice: 65, expiryDate: '2026-08-20', description: 'Nasal decongestant spray' },
    { id: 118, name: 'Oxymetazoline HCl 0.05%', company: 'Cipla', category: 'cold-flu', strength: 'Nasal Spray 10ml', batch: 'B118', quantity: 70, costPrice: 22, sellingPrice: 60, expiryDate: '2026-09-10', description: 'Long-acting nasal spray' },
    { id: 119, name: 'Sodium Cromoglycate 4%', company: 'Abbott', category: 'cold-flu', strength: 'Eye Drops 10ml', batch: 'B119', quantity: 50, costPrice: 35, sellingPrice: 95, expiryDate: '2026-08-30', description: 'Mast cell stabilizer' },
    { id: 120, name: 'Levocabastine 0.5%', company: 'Sandoz', category: 'cold-flu', strength: 'Nasal Spray', batch: 'B120', quantity: 55, costPrice: 32, sellingPrice: 85, expiryDate: '2026-09-20', description: 'Selective H1 antagonist' },
    { id: 121, name: 'Azelastine HCl 0.1%', company: 'Sanofi', category: 'cold-flu', strength: 'Nasal Spray 10ml', batch: 'B121', quantity: 65, costPrice: 30, sellingPrice: 80, expiryDate: '2026-08-15', description: 'Antihistamine nasal spray' },
    { id: 122, name: 'Bambuterol HCl 20mg', company: 'GSK', category: 'cough', strength: '20mg Tablet', batch: 'B122', quantity: 75, costPrice: 24, sellingPrice: 65, expiryDate: '2026-09-05', description: 'Prodrug of terbutaline' },
    { id: 123, name: 'Fenoterol Hydrobromide 100mcg', company: 'Abbott', category: 'cough', strength: 'Inhaler', batch: 'B123', quantity: 50, costPrice: 85, sellingPrice: 235, expiryDate: '2026-08-25', description: 'Beta-2 agonist' },
    { id: 124, name: 'Pirbuterol Acetate 12mcg', company: 'Cipla', category: 'cough', strength: 'Inhaler', batch: 'B124', quantity: 55, costPrice: 80, sellingPrice: 220, expiryDate: '2026-09-15', description: 'Selective beta-2 agonist' },
    { id: 125, name: 'Procaterol 10mcg', company: 'Pfizer', category: 'cough', strength: 'Inhaler', batch: 'B125', quantity: 60, costPrice: 82, sellingPrice: 225, expiryDate: '2026-08-30', description: 'Rapid-acting beta-2 agonist' },
    { id: 126, name: 'Albuterol Sulphate 4mg', company: 'Sanofi', category: 'cough', strength: '4mg Tablet', batch: 'B126', quantity: 85, costPrice: 16, sellingPrice: 44, expiryDate: '2026-09-20', description: 'Beta-2 agonist tablet' },
    { id: 127, name: 'Ipratropium+Albuterol Combination', company: 'Abbott', category: 'cough', strength: 'Combination Inhaler', batch: 'B127', quantity: 50, costPrice: 95, sellingPrice: 260, expiryDate: '2026-08-20', description: 'Anticholinergic and beta-2 agonist' },
    { id: 128, name: 'Tiotropium 18mcg', company: 'Boehringer Ingelheim', category: 'cough', strength: 'Powder Capsule', batch: 'B128', quantity: 45, costPrice: 110, sellingPrice: 300, expiryDate: '2026-09-10', description: 'Long-acting anticholinergic' },
    { id: 129, name: 'Aclidinium Bromide 400mcg', company: 'GSK', category: 'cough', strength: 'Inhaler Powder', batch: 'B129', quantity: 50, costPrice: 105, sellingPrice: 290, expiryDate: '2026-08-30', description: 'Long-acting muscarinic antagonist' },
    { id: 130, name: 'Umeclidinium 62.5mcg', company: 'Pfizer', category: 'cough', strength: 'Inhaler', batch: 'B130', quantity: 55, costPrice: 108, sellingPrice: 295, expiryDate: '2026-09-15', description: 'Long-acting anticholinergic' },
    { id: 131, name: 'Indacaterol 75mcg', company: 'Novartis', category: 'cough', strength: 'Inhaler', batch: 'B131', quantity: 50, costPrice: 100, sellingPrice: 275, expiryDate: '2026-08-25', description: 'Ultra long-acting beta-2 agonist' },
    { id: 132, name: 'Vilanterol 25mcg', company: 'GSK', category: 'cough', strength: 'Combination Inhaler', batch: 'B132', quantity: 55, costPrice: 98, sellingPrice: 270, expiryDate: '2026-09-20', description: 'Long-acting beta-2 agonist' },
    { id: 133, name: 'Olodaterol 2.5mcg', company: 'Sanofi', category: 'cough', strength: 'Inhaler', batch: 'B133', quantity: 50, costPrice: 102, sellingPrice: 280, expiryDate: '2026-08-30', description: 'Ultra-long-acting beta-2 agonist' },
    { id: 134, name: 'Vilanterol+Umeclidinium', company: 'Pfizer', category: 'cough', strength: 'Combination', batch: 'B134', quantity: 45, costPrice: 115, sellingPrice: 315, expiryDate: '2026-09-10', description: 'Dual LABA and LAMA' },
    { id: 135, name: 'Loratadine 10mg Tab', company: 'Cipla', category: 'cold-flu', strength: '10mg Tablet', batch: 'B135', quantity: 100, costPrice: 10, sellingPrice: 28, expiryDate: '2026-10-20', description: 'Non-drowsy antihistamine' },
    { id: 136, name: 'Rupatadine 10mg', company: 'Abbott', category: 'cold-flu', strength: '10mg Tablet', batch: 'B136', quantity: 85, costPrice: 20, sellingPrice: 55, expiryDate: '2026-09-15', description: 'PAF antagonist antihistamine' },
    { id: 137, name: 'Ebastine 10mg', company: 'Sandoz', category: 'cold-flu', strength: '10mg Tablet', batch: 'B137', quantity: 80, costPrice: 22, sellingPrice: 60, expiryDate: '2026-08-25', description: 'Selective H1 receptor antagonist' },
    { id: 138, name: 'Mizolastine 10mg', company: 'Sanofi', category: 'cold-flu', strength: '10mg Tablet', batch: 'B138', quantity: 75, costPrice: 24, sellingPrice: 65, expiryDate: '2026-09-20', description: 'Selective H1 antagonist' },
    { id: 139, name: 'Acrivastine 8mg', company: 'Cipla', category: 'cold-flu', strength: '8mg Tablet', batch: 'B139', quantity: 90, costPrice: 18, sellingPrice: 50, expiryDate: '2026-08-30', description: 'Non-sedating antihistamine' },
    { id: 140, name: 'Ketotifen 1mg', company: 'Abbott', category: 'cold-flu', strength: '1mg Tablet', batch: 'B140', quantity: 85, costPrice: 16, sellingPrice: 44, expiryDate: '2026-09-15', description: 'Mast cell stabilizer' },
    { id: 141, name: 'Azelastine+Fluticasone Nasal Spray', company: 'Pfizer', category: 'cold-flu', strength: 'Combination Spray', batch: 'B141', quantity: 60, costPrice: 50, sellingPrice: 135, expiryDate: '2026-08-20', description: 'Antihistamine and steroid combination' },
    { id: 142, name: 'Olopatadine HCl 0.1%', company: 'Abbott', category: 'cold-flu', strength: 'Eye Drops', batch: 'B142', quantity: 55, costPrice: 40, sellingPrice: 110, expiryDate: '2026-09-10', description: 'Selective H1 and PAF antagonist' },
    { id: 143, name: 'Emedastine 0.05%', company: 'Cipla', category: 'cold-flu', strength: 'Eye Drops', batch: 'B143', quantity: 50, costPrice: 38, sellingPrice: 105, expiryDate: '2026-08-30', description: 'H1 receptor antagonist eye drops' },
    { id: 144, name: 'Lodoxamide 0.1%', company: 'Sandoz', category: 'cold-flu', strength: 'Eye Drops', batch: 'B144', quantity: 60, costPrice: 36, sellingPrice: 100, expiryDate: '2026-09-20', description: 'Mast cell stabilizer eye drops' },
    { id: 145, name: 'Pemirolast 0.1%', company: 'Sanofi', category: 'cold-flu', strength: 'Eye Drops', batch: 'B145', quantity: 55, costPrice: 34, sellingPrice: 95, expiryDate: '2026-08-15', description: 'Mast cell stabilizer' },
    { id: 146, name: 'Bepotastine 1.5%', company: 'Abbott', category: 'cold-flu', strength: 'Eye Drops', batch: 'B146', quantity: 65, costPrice: 38, sellingPrice: 105, expiryDate: '2026-09-25', description: 'H1 and PAF antagonist' },
    { id: 147, name: 'Nedocromil Sodium 2%', company: 'Cipla', category: 'cold-flu', strength: 'Eye Drops', batch: 'B147', quantity: 60, costPrice: 32, sellingPrice: 85, expiryDate: '2026-08-20', description: 'Mast cell stabilizer drops' },
    { id: 148, name: 'Ibuprofen 200mg Tab', company: 'Local', category: 'pain-relief', strength: '200mg Tablet', batch: 'B148', quantity: 120, costPrice: 8, sellingPrice: 22, expiryDate: '2026-10-30', description: 'NSAID for mild to moderate pain' },
    { id: 149, name: 'Oxaprozin 600mg', company: 'Pfizer', category: 'pain-relief', strength: '600mg Tablet', batch: 'B149', quantity: 75, costPrice: 28, sellingPrice: 75, expiryDate: '2026-09-15', description: 'Long-acting NSAID' },
    { id: 150, name: 'Tenoxicam 20mg', company: 'Abbott', category: 'pain-relief', strength: '20mg Tablet', batch: 'B150', quantity: 80, costPrice: 26, sellingPrice: 70, expiryDate: '2026-08-25', description: 'Oxicam NSAID' },
    
    // Additional Pakistani Medicines Extended (151-200)
    { id: 151, name: 'Lornoxicam 8mg', company: 'Cipla', category: 'pain-relief', strength: '8mg Tablet', batch: 'B151', quantity: 85, costPrice: 24, sellingPrice: 65, expiryDate: '2026-09-20', description: 'Oxicam NSAID for pain' },
    { id: 152, name: 'Piroxicam 10mg', company: 'Sandoz', category: 'pain-relief', strength: '10mg Capsule', batch: 'B152', quantity: 80, costPrice: 20, sellingPrice: 55, expiryDate: '2026-08-30', description: 'Long-acting NSAID' },
    { id: 153, name: 'Indomethacin 50mg', company: 'Abbott', category: 'pain-relief', strength: '50mg Capsule', batch: 'B153', quantity: 75, costPrice: 18, sellingPrice: 50, expiryDate: '2026-09-15', description: 'NSAID for inflammation' },
    { id: 154, name: 'Sulindac 200mg', company: 'Pfizer', category: 'pain-relief', strength: '200mg Tablet', batch: 'B154', quantity: 70, costPrice: 22, sellingPrice: 60, expiryDate: '2026-08-20', description: 'NSAID prodrug' },
    { id: 155, name: 'Etodolac 400mg', company: 'Cipla', category: 'pain-relief', strength: '400mg Tablet', batch: 'B155', quantity: 80, costPrice: 25, sellingPrice: 68, expiryDate: '2026-09-10', description: 'NSAID for arthritis' },
    { id: 156, name: 'Mefenamic Acid 250mg', company: 'Local', category: 'pain-relief', strength: '250mg Capsule', batch: 'B156', quantity: 100, costPrice: 12, sellingPrice: 32, expiryDate: '2026-10-25', description: 'NSAID for period pain' },
    { id: 157, name: 'Flurbiprofen 100mg', company: 'Abbott', category: 'pain-relief', strength: '100mg Tablet', batch: 'B157', quantity: 85, costPrice: 20, sellingPrice: 55, expiryDate: '2026-09-20', description: 'NSAID analgesic' },
    { id: 158, name: 'Ketoprofen 50mg', company: 'Sandoz', category: 'pain-relief', strength: '50mg Capsule', batch: 'B158', quantity: 75, costPrice: 18, sellingPrice: 50, expiryDate: '2026-08-30', description: 'NSAID for pain and inflammation' },
    { id: 159, name: 'Tiaprofenic Acid 300mg', company: 'Cipla', category: 'pain-relief', strength: '300mg Tablet', batch: 'B159', quantity: 70, costPrice: 22, sellingPrice: 60, expiryDate: '2026-09-15', description: 'NSAID for arthritis' },
    { id: 160, name: 'Fenoprofen 600mg', company: 'Pfizer', category: 'pain-relief', strength: '600mg Tablet', batch: 'B160', quantity: 80, costPrice: 24, sellingPrice: 65, expiryDate: '2026-08-25', description: 'NSAID analgesic' },
    { id: 161, name: 'Isoflupredone Acetate 0.5mg', company: 'Abbott', category: 'pain-relief', strength: '0.5mg Tablet', batch: 'B161', quantity: 90, costPrice: 16, sellingPrice: 44, expiryDate: '2026-09-20', description: 'Corticosteroid for inflammation' },
    { id: 162, name: 'Fluocortolone 20mg', company: 'Sanofi', category: 'pain-relief', strength: '20mg Tablet', batch: 'B162', quantity: 85, costPrice: 20, sellingPrice: 55, expiryDate: '2026-08-30', description: 'Corticosteroid' },
    { id: 163, name: 'Deflazacort 6mg', company: 'Cipla', category: 'pain-relief', strength: '6mg Tablet', batch: 'B163', quantity: 80, costPrice: 28, sellingPrice: 75, expiryDate: '2026-09-15', description: 'Oxazoline corticosteroid' },
    { id: 164, name: 'Clobetasone Butyrate 0.05%', company: 'Abbott', category: 'skincare', strength: 'Cream 30g', batch: 'B164', quantity: 70, costPrice: 35, sellingPrice: 95, expiryDate: '2026-08-20', description: 'Topical corticosteroid' },
    { id: 165, name: 'Mometasone Furoate 0.1%', company: 'Pfizer', category: 'skincare', strength: 'Cream 30g', batch: 'B165', quantity: 65, costPrice: 38, sellingPrice: 105, expiryDate: '2026-09-10', description: 'Potent topical steroid' },
    { id: 166, name: 'Clobetasol Propionate 0.05%', company: 'Sandoz', category: 'skincare', strength: 'Cream 30g', batch: 'B166', quantity: 60, costPrice: 42, sellingPrice: 115, expiryDate: '2026-08-25', description: 'Ultra-potent topical steroid' },
    { id: 167, name: 'Fluticasone Propionate 0.05%', company: 'GSK', category: 'skincare', strength: 'Cream 30g', batch: 'B167', quantity: 75, costPrice: 40, sellingPrice: 110, expiryDate: '2026-09-20', description: 'Potent topical corticosteroid' },
    { id: 168, name: 'Betamethasone Valerate 0.1%', company: 'Abbott', category: 'skincare', strength: 'Cream 30g', batch: 'B168', quantity: 80, costPrice: 36, sellingPrice: 98, expiryDate: '2026-08-30', description: 'Topical corticosteroid' },
    { id: 169, name: 'Amcinodide 0.1%', company: 'Cipla', category: 'skincare', strength: 'Cream 30g', batch: 'B169', quantity: 70, costPrice: 38, sellingPrice: 105, expiryDate: '2026-09-15', description: 'Topical steroid' },
    { id: 170, name: 'Halobetasol Propionate 0.05%', company: 'Pfizer', category: 'skincare', strength: 'Cream 30g', batch: 'B170', quantity: 65, costPrice: 44, sellingPrice: 120, expiryDate: '2026-08-20', description: 'Super-potent topical steroid' },
    { id: 171, name: 'Flurandrenolide 4mcg', company: 'Abbott', category: 'skincare', strength: 'Tape 7.5cm x 73cm', batch: 'B171', quantity: 50, costPrice: 28, sellingPrice: 75, expiryDate: '2026-09-10', description: 'Adhesive topical steroid' },
    { id: 172, name: 'Tacrolimus 0.03%', company: 'Sanofi', category: 'skincare', strength: 'Ointment 30g', batch: 'B172', quantity: 55, costPrice: 85, sellingPrice: 235, expiryDate: '2026-08-25', description: 'Calcineurin inhibitor for eczema' },
    { id: 173, name: 'Pimecrolimus 1%', company: 'Cipla', category: 'skincare', strength: 'Cream 30g', batch: 'B173', quantity: 60, costPrice: 82, sellingPrice: 225, expiryDate: '2026-09-20', description: 'Immunosuppressant for atopic dermatitis' },
    { id: 174, name: 'Sulfur 10%', company: 'Local', category: 'skincare', strength: 'Ointment 50g', batch: 'B174', quantity: 90, costPrice: 15, sellingPrice: 40, expiryDate: '2026-10-30', description: 'Scabicide and keratolytic' },
    { id: 175, name: 'Permethrin 5%', company: 'Abbott', category: 'skincare', strength: 'Cream 60g', batch: 'B175', quantity: 75, costPrice: 32, sellingPrice: 85, expiryDate: '2026-09-15', description: 'Scabicide insecticide' },
    { id: 176, name: 'Lindane 1%', company: 'Pfizer', category: 'skincare', strength: 'Lotion 60ml', batch: 'B176', quantity: 70, costPrice: 28, sellingPrice: 75, expiryDate: '2026-08-20', description: 'Pediculicide for lice' },
    { id: 177, name: 'Ivermectin 1%', company: 'Cipla', category: 'skincare', strength: 'Cream 30g', batch: 'B177', quantity: 65, costPrice: 38, sellingPrice: 105, expiryDate: '2026-09-10', description: 'Antiparasitic agent' },
    { id: 178, name: 'Crotamiton 10%', company: 'Sandoz', category: 'skincare', strength: 'Lotion 100ml', batch: 'B178', quantity: 80, costPrice: 24, sellingPrice: 65, expiryDate: '2026-08-25', description: 'Scabicide and antipruritic' },
    { id: 179, name: 'Pioglitazone 30mg', company: 'Abbott', category: 'diabetes', strength: '30mg Tablet', batch: 'B179', quantity: 75, costPrice: 50, sellingPrice: 135, expiryDate: '2026-09-20', description: 'Thiazolidinedione for type 2 diabetes' },
    { id: 180, name: 'Rosiglitazone 8mg', company: 'Pfizer', category: 'diabetes', strength: '8mg Tablet', batch: 'B180', quantity: 70, costPrice: 48, sellingPrice: 130, expiryDate: '2026-08-30', description: 'TZD antidiabetic' },
    { id: 181, name: 'Canagliflozin 100mg', company: 'Abbott', category: 'diabetes', strength: '100mg Tablet', batch: 'B181', quantity: 80, costPrice: 65, sellingPrice: 175, expiryDate: '2026-09-15', description: 'SGLT2 inhibitor' },
    { id: 182, name: 'Dapagliflozin 5mg', company: 'Cipla', category: 'diabetes', strength: '5mg Tablet', batch: 'B182', quantity: 85, costPrice: 62, sellingPrice: 170, expiryDate: '2026-08-20', description: 'SGLT2 inhibitor for diabetes' },
    { id: 183, name: 'Empagliflozin 25mg', company: 'Sanofi', category: 'diabetes', strength: '25mg Tablet', batch: 'B183', quantity: 75, costPrice: 64, sellingPrice: 172, expiryDate: '2026-09-25', description: 'SGLT2 inhibitor' },
    { id: 184, name: 'Ertugliflozin 5mg', company: 'Pfizer', category: 'diabetes', strength: '5mg Tablet', batch: 'B184', quantity: 80, costPrice: 60, sellingPrice: 165, expiryDate: '2026-08-15', description: 'SGLT2 inhibitor' },
    { id: 185, name: 'Insulin Aspart 100 IU', company: 'Novo Nordisk', category: 'injections', strength: '100 IU/ml Pen', batch: 'B185', quantity: 45, costPrice: 180, sellingPrice: 480, expiryDate: '2026-07-30', description: 'Rapid-acting insulin analog' },
    { id: 186, name: 'Insulin Glulisine 100 IU', company: 'Sanofi', category: 'injections', strength: '100 IU/ml Pen', batch: 'B186', quantity: 50, costPrice: 175, sellingPrice: 470, expiryDate: '2026-08-10', description: 'Ultra rapid-acting insulin' },
    { id: 187, name: 'Insulin Lispro 100 IU', company: 'Eli Lilly', category: 'injections', strength: '100 IU/ml Pen', batch: 'B187', quantity: 48, costPrice: 182, sellingPrice: 485, expiryDate: '2026-07-25', description: 'Rapid-acting insulin' },
    { id: 188, name: 'Insulin NPH 100 IU', company: 'Cipla', category: 'injections', strength: '100 IU/ml Vial', batch: 'B188', quantity: 60, costPrice: 95, sellingPrice: 260, expiryDate: '2026-09-15', description: 'Intermediate-acting insulin' },
    { id: 189, name: 'Insulin Degludec 100 IU', company: 'Novo Nordisk', category: 'injections', strength: '100 IU/ml Pen', batch: 'B189', quantity: 50, costPrice: 200, sellingPrice: 530, expiryDate: '2026-08-30', description: 'Ultra long-acting insulin' },
    { id: 190, name: 'Insulin Glargine 100 IU', company: 'Sanofi', category: 'injections', strength: '100 IU/ml Pen', batch: 'B190', quantity: 55, costPrice: 190, sellingPrice: 510, expiryDate: '2026-09-10', description: 'Long-acting basal insulin' },
    { id: 191, name: 'Insulin Detemir 100 IU', company: 'Novo Nordisk', category: 'injections', strength: '100 IU/ml Pen', batch: 'B191', quantity: 50, costPrice: 185, sellingPrice: 495, expiryDate: '2026-08-20', description: 'Long-acting insulin' },
    { id: 192, name: 'GLP-1 Agonist Liraglutide', company: 'Novo Nordisk', category: 'injections', strength: '6mg/ml Pen', batch: 'B192', quantity: 40, costPrice: 250, sellingPrice: 670, expiryDate: '2026-07-15', description: 'GLP-1 receptor agonist injectable' },
    { id: 193, name: 'GLP-1 Agonist Semaglutide', company: 'Novo Nordisk', category: 'injections', strength: '1.34mg/0.5ml Pen', batch: 'B193', quantity: 35, costPrice: 280, sellingPrice: 750, expiryDate: '2026-06-30', description: 'GLP-1 agonist for diabetes' },
    { id: 194, name: 'GLP-1 Agonist Dulaglutide', company: 'Eli Lilly', category: 'injections', strength: '0.75mg Pen', batch: 'B194', quantity: 40, costPrice: 260, sellingPrice: 700, expiryDate: '2026-07-20', description: 'Once-weekly GLP-1 agonist' },
    { id: 195, name: 'Potassium Chloride 10%', company: 'Local', category: 'vitamins', strength: '100ml Syrup', batch: 'B195', quantity: 100, costPrice: 18, sellingPrice: 50, expiryDate: '2026-10-20', description: 'Potassium supplement' },
    { id: 196, name: 'Sodium Chloride 0.9%', company: 'Abbott', category: 'vitamins', strength: '500ml Infusion', batch: 'B196', quantity: 80, costPrice: 35, sellingPrice: 95, expiryDate: '2026-09-15', description: 'Normal saline solution' },
    { id: 197, name: 'Magnesium Sulphate 50%', company: 'Cipla', category: 'vitamins', strength: '10ml Vial', batch: 'B197', quantity: 70, costPrice: 28, sellingPrice: 75, expiryDate: '2026-08-30', description: 'Injectable electrolyte' },
    { id: 198, name: 'Calcium Gluconate 10%', company: 'Pfizer', category: 'vitamins', strength: '10ml Vial', batch: 'B198', quantity: 75, costPrice: 32, sellingPrice: 85, expiryDate: '2026-09-20', description: 'Injectable calcium supplement' },
    { id: 199, name: 'Glucose Monohydrate 50%', company: 'Abbott', category: 'vitamins', strength: '500ml Infusion', batch: 'B199', quantity: 85, costPrice: 38, sellingPrice: 105, expiryDate: '2026-08-25', description: 'IV glucose solution' },
    { id: 200, name: 'Dextrose+Saline Infusion', company: 'Cipla', category: 'vitamins', strength: '500ml', batch: 'B200', quantity: 90, costPrice: 42, sellingPrice: 115, expiryDate: '2026-09-15', description: 'IV fluid combination' }
];

// Demo Employees
const employeesDB = [
    { id: 1, name: 'Muhammad Ali', email: 'ali@pharmacy.com', phone: '0300-1234567', position: 'pharmacist', username: 'ali_pharma', password: 'pass123', salary: 50000, joinDate: '2023-01-15', status: 'active', salesCount: 45 },
    { id: 2, name: 'Ayesha Khan', email: 'ayesha@pharmacy.com', phone: '0300-2345678', position: 'cashier', username: 'ayesha_cash', password: 'pass123', salary: 35000, joinDate: '2023-06-20', status: 'active', salesCount: 78 },
    { id: 3, name: 'Hassan Ahmed', email: 'hassan@pharmacy.com', phone: '0300-3456789', position: 'inventory', username: 'hassan_inv', password: 'pass123', salary: 40000, joinDate: '2023-03-10', status: 'active', salesCount: 0 }
];

// ==================== INITIALIZATION ====================
let ownerPhone = '03130203026';
window.addEventListener('DOMContentLoaded', function() {
    loadData();
    pharmaData.companies = companiesDB;
    pharmaData.medicines = medicinesDB;
    pharmaData.employees = employeesDB;
    populateCompanySelect();
    showPage('loginPage');
});

// ==================== LOGIN & AUTHENTICATION ====================
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const regForm = document.getElementById('registrationForm');
    const toggleSection = document.getElementById('toggleAuthSection');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        regForm.style.display = 'none';
        toggleSection.innerHTML = '<p>Don\'t have an account? <button type="button" class="btn btn-link" onclick="toggleForms()" style="background: none; border: none; color: #0066cc; cursor: pointer; text-decoration: underline;">Register here</button></p>';
    } else {
        loginForm.style.display = 'none';
        regForm.style.display = 'block';
        toggleSection.innerHTML = '<p>Already have an account? <button type="button" class="btn btn-link" onclick="toggleForms()" style="background: none; border: none; color: #0066cc; cursor: pointer; text-decoration: underline;">Login here</button></p>';
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Validate password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }
    
    // Check if username already exists
    if (pharmaData.customers.find(c => c.username === username)) {
        alert('Username already exists! Please choose another.');
        return;
    }
    
    // Check if email already exists
    if (pharmaData.customers.find(c => c.email === email)) {
        alert('Email already registered! Please login or use another email.');
        return;
    }
    
    // Create new customer
    const newCustomer = {
        id: Math.max(...pharmaData.customers.map(c => c.id), 0) + 1,
        name: name,
        email: email,
        phone: phone,
        username: username,
        password: password,
        registrationDate: new Date().toISOString().split('T')[0]
    };
    
    pharmaData.customers.push(newCustomer);
    saveData();
    
    alert('Account created successfully! You can now login.');
    toggleForms();
    
    // Clear registration form
    document.getElementById('registrationForm').reset();
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if owner
    if (username === 'admin' && password === ownerPassword) {
        currentUser = { role: 'owner', name: 'Owner', username: 'admin', id: 0 };
        showPage('ownerDashboard');
        loadOwnerDashboard();
    } 
    // Check if customer
    else {
        const customer = pharmaData.customers.find(c => (c.username === username || c.email === username) && c.password === password);
        if (customer) {
            currentUser = { ...customer, role: 'customer' };
            showPage('customerPortal');
            loadCustomerPage();
        } else {
            alert('Invalid credentials! Please check your username/email and password.');
        }
    }
}

function logout() {
    currentUser = null;
    currentRole = null;
    cart = [];
    showPage('loginPage');
    document.querySelector('.role-selector').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// ==================== PAGE NAVIGATION ====================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');
    
    // Show/hide navbar
    const navbar = document.getElementById('navbar');
    if (pageId === 'loginPage' || pageId === 'customerPortal') {
        navbar.style.display = pageId === 'customerPortal' ? 'block' : 'none';
    } else {
        navbar.style.display = 'block';
    }
    
    // Update greeting
    if (currentUser) {
        document.getElementById('userGreeting').textContent = `Welcome, ${currentUser.name}!`;
    }
}

function goToSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// ==================== OWNER FUNCTIONS ====================
function loadOwnerDashboard() {
    goToSection('ownerStats');
    updateOwnerStats();
    loadMedicinesTable();
    loadCompaniesTable();
    loadOwnerNotifications();
}

function updateOwnerStats() {
    const totalRevenue = pharmaData.sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
    const lowStockCount = pharmaData.medicines.filter(m => m.quantity < 10).length;
    const expiringCount = pharmaData.medicines.filter(m => {
        const expiry = new Date(m.expiryDate);
        const today = new Date();
        const daysLeft = Math.floor((expiry - today) / (1000 * 60 * 60 * 24));
        return daysLeft <= 30 && daysLeft > 0;
    }).length;
    
    document.getElementById('totalProducts').textContent = pharmaData.medicines.length;
    document.getElementById('totalRevenue').textContent = 'PKR ' + totalRevenue.toFixed(2);
    document.getElementById('totalCompanies').textContent = pharmaData.companies.length;
    document.getElementById('lowStockCount').textContent = lowStockCount;
    document.getElementById('expiringCount').textContent = expiringCount;
}

function addMedicine(event) {
    event.preventDefault();
    
    const medicine = {
        id: Math.max(...pharmaData.medicines.map(m => m.id), 0) + 1,
        name: document.getElementById('medicineName').value,
        company: document.getElementById('medicineCompany').value,
        category: document.getElementById('medicineCategory').value,
        strength: document.getElementById('strength').value,
        batch: document.getElementById('batchNumber').value,
        quantity: parseInt(document.getElementById('medicineQuantity').value),
        costPrice: parseFloat(document.getElementById('costPrice').value),
        sellingPrice: parseFloat(document.getElementById('sellingPrice').value),
        expiryDate: document.getElementById('expiryDate').value,
        description: document.getElementById('medicineDescription').value
    };
    
    pharmaData.medicines.push(medicine);
    saveData();
    loadMedicinesTable();
    toggleForm('addMedicineForm');
    alert('Medicine added successfully!');
}

function loadMedicinesTable() {
    const tbody = document.getElementById('medicinesBody');
    tbody.innerHTML = '';
    
    pharmaData.medicines.forEach(medicine => {
        const expiry = new Date(medicine.expiryDate);
        const today = new Date();
        const daysLeft = Math.floor((expiry - today) / (1000 * 60 * 60 * 24));
        const statusClass = daysLeft < 30 ? 'badge-warning' : 'badge-success';
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${medicine.name}</strong></td>
                <td>${medicine.company}</td>
                <td>${medicine.category}</td>
                <td>${medicine.batch}</td>
                <td>${medicine.quantity}</td>
                <td>PKR ${medicine.costPrice}</td>
                <td>PKR ${medicine.sellingPrice}</td>
                <td><span class="badge ${statusClass}">${medicine.expiryDate}</span></td>
                <td>
                    <button class="btn btn-danger" onclick="deleteMedicine(${medicine.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteMedicine(id) {
    if (confirm('Delete this medicine?')) {
        pharmaData.medicines = pharmaData.medicines.filter(m => m.id !== id);
        saveData();
        loadMedicinesTable();
    }
}

function filterMedicines() {
    const searchTerm = document.getElementById('searchMedicines').value.toLowerCase();
    const tbody = document.getElementById('medicinesBody');
    tbody.querySelectorAll('tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function addCompany(event) {
    event.preventDefault();
    
    const company = {
        id: Math.max(...pharmaData.companies.map(c => c.id), 0) + 1,
        name: document.getElementById('companyName').value,
        contact: document.getElementById('companyContact').value,
        email: document.getElementById('companyEmail').value,
        phone: document.getElementById('companyPhone').value,
        address: document.getElementById('companyAddress').value,
        city: document.getElementById('companyCity').value
    };
    
    pharmaData.companies.push(company);
    saveData();
    loadCompaniesTable();
    populateCompanySelect();
    toggleForm('addCompanyForm');
    alert('Company added successfully!');
}

function loadCompaniesTable() {
    const tbody = document.getElementById('companiesBody');
    tbody.innerHTML = '';
    
    pharmaData.companies.forEach(company => {
        const productCount = pharmaData.medicines.filter(m => m.company === company.name).length;
        tbody.innerHTML += `
            <tr>
                <td><strong>${company.name}</strong></td>
                <td>${company.contact}</td>
                <td>${company.email}</td>
                <td>${company.phone}</td>
                <td>${company.city}</td>
                <td>${productCount}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteCompany(${company.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteCompany(id) {
    if (confirm('Delete this company?')) {
        pharmaData.companies = pharmaData.companies.filter(c => c.id !== id);
        saveData();
        loadCompaniesTable();
        populateCompanySelect();
    }
}

function populateCompanySelect() {
    const select = document.getElementById('medicineCompany');
    select.innerHTML = '<option value="">Select Company</option>';
    pharmaData.companies.forEach(company => {
        select.innerHTML += `<option value="${company.name}">${company.name}</option>`;
    });
}

// Reports
function generateSalesReport() {
    const fromDate = document.getElementById('reportFromDate').value;
    const toDate = document.getElementById('reportToDate').value;
    
    if (!fromDate || !toDate) {
        alert('Please select date range!');
        return;
    }
    
    const filtered = pharmaData.sales.filter(s => s.date >= fromDate && s.date <= toDate);
    const totalRevenue = filtered.reduce((sum, s) => sum + s.totalAmount, 0);
    
    let html = `<div class="report-item"><strong>Period:</strong> ${fromDate} to ${toDate}</div>`;
    html += `<div class="report-item"><strong>Total Sales:</strong> PKR ${totalRevenue.toFixed(2)}</div>`;
    html += `<div class="report-item"><strong>Transactions:</strong> ${filtered.length}</div>`;
    
    document.getElementById('salesReportResult').innerHTML = html;
}

function generateInventoryReport() {
    const totalValue = pharmaData.medicines.reduce((sum, m) => sum + (m.quantity * m.costPrice), 0);
    const lowStock = pharmaData.medicines.filter(m => m.quantity < 10);
    
    let html = `<div class="report-item"><strong>Total Products:</strong> ${pharmaData.medicines.length}</div>`;
    html += `<div class="report-item"><strong>Inventory Value:</strong> PKR ${totalValue.toFixed(2)}</div>`;
    html += `<div class="report-item"><strong>Low Stock Items:</strong> ${lowStock.length}</div>`;
    
    document.getElementById('inventoryReportResult').innerHTML = html;
}

function generateProfitReport() {
    const totalRevenue = pharmaData.sales.reduce((sum, s) => sum + s.totalAmount, 0);
    const totalCost = pharmaData.sales.reduce((sum, sale) => {
        return sum + sale.items.reduce((itemSum, item) => {
            const medicine = pharmaData.medicines.find(m => m.id === item.medicineId);
            return itemSum + (item.quantity * (medicine?.costPrice || 0));
        }, 0);
    }, 0);
    const profit = totalRevenue - totalCost;
    
    let html = `<div class="report-item"><strong>Total Revenue:</strong> PKR ${totalRevenue.toFixed(2)}</div>`;
    html += `<div class="report-item"><strong>Total Cost:</strong> PKR ${totalCost.toFixed(2)}</div>`;
    html += `<div class="report-item total"><strong>Profit:</strong> PKR ${profit.toFixed(2)}</div>`;
    
    document.getElementById('profitReportResult').innerHTML = html;
}

// ==================== OWNER NOTIFICATIONS ====================
function loadOwnerNotifications() {
    const container = document.getElementById('notificationsContainer');
    
    if (pharmaData.sales.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No orders yet</p>';
        updateNotificationBadge();
        return;
    }
    
    // Show orders in reverse order (newest first)
    let html = '';
    const orders = [...pharmaData.sales].reverse();
    
    orders.forEach(order => {
        if (order.isCustomerOrder) {
            let itemsList = '';
            order.items.forEach(item => {
                itemsList += `
                    <div style="padding: 0.3rem 0; font-size: 0.9rem;">
                        • ${item.medicineName} (Qty: ${item.quantity}) - PKR ${(item.quantity * item.price).toFixed(2)}
                    </div>
                `;
            });
            
            const statusColor = order.status === 'completed' ? '#28a745' : '#ffc107';
            const statusBg = order.status === 'completed' ? '#d4edda' : '#fff3cd';
            
            html += `
                <div class="activity-item" style="border-left: 4px solid ${statusColor}; margin-bottom: 1rem; padding: 1rem; background: ${statusBg}; border-radius: 5px;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <strong style="font-size: 1.05rem;">Order #${order.id}</strong>
                            <p style="color: #666; font-size: 0.9rem; margin: 0.3rem 0;">${order.date} ${order.time}</p>
                            <p style="margin: 0.5rem 0;"><strong>👤 ${order.customerName}</strong></p>
                            <p style="margin: 0.3rem 0; color: #555;">📱 ${order.customerPhone}</p>
                            <p style="margin: 0.3rem 0; color: #555;">📧 ${order.customerEmail}</p>
                            <div style="margin: 0.5rem 0; padding: 0.5rem; background: white; border-radius: 3px; font-size: 0.9rem;">
                                ${itemsList}
                            </div>
                            <div style="margin-top: 0.5rem; padding: 0.5rem; background: white; border-radius: 3px; font-weight: bold; font-size: 0.95rem;">
                                💰 Total: PKR ${order.totalAmount.toFixed(2)}
                            </div>
                        </div>
                        <div style="text-align: right; min-width: 100px;">
                            <span class="badge" style="background: ${statusColor}; color: white; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.85rem;">${order.status.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    container.innerHTML = html;
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    const pendingOrders = pharmaData.sales.filter(s => s.isCustomerOrder && s.status === 'completed').length;
    
    if (pendingOrders > 0) {
        badge.textContent = pendingOrders;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

// ==================== CUSTOMER FUNCTIONS ====================
function loadCustomerPage() {
    goToSection('custBrowse');
    displayMedicinesForCustomer();
    
    // Check if coming from "My Orders" click
    if (event && event.target.textContent.includes('My Orders')) {
        displayCustomerOrders();
        goToSection('custMyOrders');
    }
}

function displayCustomerOrders() {
    const ordersList = document.getElementById('customerOrders');
    ordersList.innerHTML = '';
    
    // Get all customer orders from pharmaData.sales
    const customerOrders = pharmaData.sales.filter(sale => sale.isCustomerOrder);
    
    if (customerOrders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #999;">No orders yet. Start shopping now!</p>';
        return;
    }
    
    customerOrders.forEach(order => {
        let itemsList = '';
        order.items.forEach(item => {
            itemsList += `
                <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                    ${item.medicineName} x${item.quantity} = PKR ${(item.quantity * item.price).toFixed(2)}
                </div>
            `;
        });
        
        ordersList.innerHTML += `
            <div class="activity-item" style="border-left: 4px solid #28a745;">
                <strong>Order #${order.id}</strong>
                <p style="color: #999; font-size: 0.9rem;">${order.date} ${order.time}</p>
                <div style="margin: 0.5rem 0;">
                    <strong>Items:</strong>
                    ${itemsList}
                </div>
                <div style="margin: 0.5rem 0;">
                    <strong>Total:</strong> PKR ${order.totalAmount.toFixed(2)}
                    <span class="badge badge-success" style="margin-left: 1rem;">${order.status.toUpperCase()}</span>
                </div>
            </div>
        `;
    });
}

function displayMedicinesForCustomer() {
    const grid = document.getElementById('medicinesGrid');
    grid.innerHTML = '';
    
    pharmaData.medicines.filter(m => m.quantity > 0).forEach(medicine => {
        grid.innerHTML += `
            <div class="medicine-card">
                <h4>${medicine.name}</h4>
                <p><strong>Company:</strong> ${medicine.company}</p>
                <p><strong>Strength:</strong> ${medicine.strength}</p>
                <p><strong>Category:</strong> ${medicine.category}</p>
                <p>${medicine.description}</p>
                <div class="medicine-price">PKR ${medicine.sellingPrice}</div>
                <p class="medicine-stock">Stock: ${medicine.quantity} available</p>
                <button class="btn btn-primary" onclick="addToCustomerCart(${medicine.id}, '${medicine.name}', ${medicine.sellingPrice})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCustomerCart(medicineId, name, price) {
    const existingItem = cart.find(item => item.medicineId === medicineId);
    if (existingItem) {
        if (existingItem.quantity < 10) {
            existingItem.quantity += 1;
        } else {
            alert('Maximum quantity (10) reached for this item!');
            return;
        }
    } else {
        cart.push({ medicineId, medicineName: name, quantity: 1, price });
    }
    alert(`${name} added to cart!`);
    updateCartDisplay();
}

function updateCartItemQuantity(medicineId, change) {
    const item = cart.find(item => item.medicineId === medicineId);
    if (item) {
        const newQty = item.quantity + change;
        if (newQty >= 1 && newQty <= 10) {
            item.quantity = newQty;
            updateCartDisplay();
        } else if (newQty < 1) {
            removeFromCart(medicineId);
        } else if (newQty > 10) {
            alert('Maximum quantity is 10 items!');
        }
    }
}

function removeFromCart(medicineId) {
    cart = cart.filter(item => item.medicineId !== medicineId);
    updateCartDisplay();
}

function filterMedicinesCustomer() {
    const searchTerm = document.getElementById('custSearchMedicines').value.toLowerCase();
    const cards = document.querySelectorAll('.medicine-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function filterByCategory() {
    const category = document.getElementById('categoryFilter').value;
    const cards = document.querySelectorAll('.medicine-card');
    
    if (!category) {
        displayMedicinesForCustomer();
    } else {
        const filtered = pharmaData.medicines.filter(m => m.category === category && m.quantity > 0);
        const grid = document.getElementById('medicinesGrid');
        grid.innerHTML = '';
        
        filtered.forEach(medicine => {
            grid.innerHTML += `
                <div class="medicine-card">
                    <h4>${medicine.name}</h4>
                    <p><strong>Company:</strong> ${medicine.company}</p>
                    <p><strong>Strength:</strong> ${medicine.strength}</p>
                    <p class="medicine-price">PKR ${medicine.sellingPrice}</p>
                    <p class="medicine-stock">Stock: ${medicine.quantity}</p>
                    <button class="btn btn-primary" onclick="addToCustomerCart(${medicine.id}, '${medicine.name}', ${medicine.sellingPrice})">Add to Cart</button>
                </div>
            `;
        });
    }
}

// Update cart display in modal
function updateCartDisplay() {
    const cartSummary = document.getElementById('cartSummary');
    if (!cartSummary) return;
    
    if (cart.length === 0) {
        cartSummary.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        return;
    }
    
    let html = '<table style="width: 100%; border-collapse: collapse;"><thead><tr><th style="text-align: left; padding: 0.5rem; border-bottom: 2px solid #ddd;">Medicine</th><th style="text-align: center; padding: 0.5rem; border-bottom: 2px solid #ddd;">Quantity</th><th style="text-align: right; padding: 0.5rem; border-bottom: 2px solid #ddd;">Price</th><th style="text-align: right; padding: 0.5rem; border-bottom: 2px solid #ddd;">Total</th><th style="text-align: center; padding: 0.5rem; border-bottom: 2px solid #ddd;">Action</th></tr></thead><tbody>';
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
        html += `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 0.5rem;">${item.medicineName}</td>
                <td style="text-align: center; padding: 0.5rem;">
                    <button onclick="updateCartItemQuantity(${item.medicineId}, -1)" style="padding: 4px 8px; font-weight: bold; cursor: pointer; background: #ff6b6b; color: white; border: none; border-radius: 3px;">−</button>
                    <span style="margin: 0 0.5rem; font-weight: bold;">${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.medicineId}, 1)" style="padding: 4px 8px; font-weight: bold; cursor: pointer; background: #51cf66; color: white; border: none; border-radius: 3px;">+</button>
                </td>
                <td style="text-align: right; padding: 0.5rem;">PKR ${item.price}</td>
                <td style="text-align: right; padding: 0.5rem;">PKR ${itemTotal.toFixed(2)}</td>
                <td style="text-align: center; padding: 0.5rem;">
                    <button onclick="removeFromCart(${item.medicineId})" style="padding: 4px 8px; cursor: pointer; background: #e74c3c; color: white; border: none; border-radius: 3px;">Remove</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    html += `<div style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid #ddd;"><strong style="font-size: 1.2rem;">Total: PKR ${total.toFixed(2)}</strong></div>
    <div style="margin-top: 0.5rem; color: #666; font-size: 0.9rem;"><em>Note: Maximum 10 units per medicine, Minimum 1 unit</em></div>`;
    
    cartSummary.innerHTML = html;
}

// Customer checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    
    // Use current user details if logged in
    const customerName = currentUser.name || prompt('Please enter your name:');
    if (!customerName) return;
    
    const customerEmail = currentUser.email || prompt('Please enter your email address:');
    if (!customerEmail) return;
    
    const customerPhone = currentUser.phone || prompt('Please enter your phone number:');
    if (!customerPhone) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const totalAmount = subtotal;
    
    const order = {
        id: Math.max(...pharmaData.sales.map(s => s.id || 0), 0) + 1,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString(),
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone,
        items: [...cart],
        subtotal: subtotal,
        totalAmount: totalAmount,
        status: 'completed',
        isCustomerOrder: true
    };
    
    pharmaData.sales.push(order);
    
    // Update medicine quantities
    cart.forEach(item => {
        const medicine = pharmaData.medicines.find(m => m.id === item.medicineId);
        if (medicine) medicine.quantity -= item.quantity;
    });
    
    saveData();
    
    // Send email and SMS notifications
    sendOrderNotifications(order);
    
    cart = [];
    closeModal('cartModal');
    alert('✓ Order placed successfully! A confirmation email has been sent to you and the owner.');
    displayMedicinesForCustomer();
}

// Email notification function
function sendOrderNotifications(order) {
    // Owner Email Notification
    const ownerEmail = 'admin@pakpharma.com'; // Owner's email
    const ownerSubject = '📦 NEW CUSTOMER ORDER - ' + order.id;
    
    let itemsDetails = '';
    order.items.forEach(item => {
        itemsDetails += `
- ${item.medicineName}
  Quantity: ${item.quantity}
  Price: PKR ${item.price}
  Subtotal: PKR ${(item.quantity * item.price).toFixed(2)}
`;
    });
    
    const ownerEmailBody = `
================================================================================
                    NEW CUSTOMER ORDER NOTIFICATION
================================================================================

Order ID: ${order.id}
Date: ${order.date}
Time: ${order.time}

CUSTOMER DETAILS:
- Name: ${order.customerName}
- Email: ${order.customerEmail}
- Phone: ${order.customerPhone}

ORDER ITEMS:
${itemsDetails}

ORDER SUMMARY:
- Subtotal: PKR ${order.subtotal.toFixed(2)}
- Total: PKR ${order.totalAmount.toFixed(2)}

Status: ${order.status.toUpperCase()}

================================================================================
Please process this order and arrange delivery.
This is an automated message from Pak Pharma Pro System
================================================================================
`;
    
    // Customer Email Notification
    const customerSubject = '✅ ORDER CONFIRMATION - Order #' + order.id;
    const customerEmailBody = `
================================================================================
                         ORDER CONFIRMATION
================================================================================

Thank you for shopping with Pak Pharma Company Limited!

Your Order Details:
Order ID: ${order.id}
Date: ${order.date}
Time: ${order.time}

ITEMS ORDERED:
${itemsDetails}

ORDER SUMMARY:
- Subtotal: PKR ${order.subtotal.toFixed(2)}
- Total Amount: PKR ${order.totalAmount.toFixed(2)}

Status: ${order.status.toUpperCase()}

CONTACT INFORMATION:
For inquiries about your order, contact:
📞 Owner Phone: ${ownerPhone}
📧 Email: info@pakpharma.com

================================================================================
Your order has been received by our pharmacy. We will contact you soon for 
confirmation and delivery details.

Thank you for your business!
Pak Pharma Company Limited
================================================================================
`;
    
    // Log emails to console (in real system, use email service like SendGrid, Nodemailer, etc.)
    console.log('='.repeat(80));
    console.log('📞 ORDER NOTIFICATION - SMS TO OWNER');
    console.log('='.repeat(80));
    console.log(`To: ${ownerPhone}`);
    console.log(`Message: New Order #${order.id} from ${order.customerName} (${order.customerPhone}). Total: PKR ${order.totalAmount.toFixed(2)}`);
    console.log('='.repeat(80));
    
    console.log('='.repeat(80));
    console.log('EMAIL TO OWNER: ' + ownerEmail);
    console.log('Subject: ' + ownerSubject);
    console.log(ownerEmailBody);
    console.log('='.repeat(80));
    
    console.log('='.repeat(80));
    console.log('EMAIL TO CUSTOMER: ' + order.customerEmail);
    console.log('Subject: ' + customerSubject);
    console.log(customerEmailBody);
    console.log('='.repeat(80));
    
    // Store order notification logs in localStorage
    let orderLogs = JSON.parse(localStorage.getItem('orderLogs')) || [];
    orderLogs.push({
        timestamp: new Date().toISOString(),
        orderId: order.id,
        customerName: order.customerName,
        customerPhone: order.customerPhone,
        customerEmail: order.customerEmail,
        totalAmount: order.totalAmount,
        ownerPhone: ownerPhone,
        ownerEmail: ownerEmail,
        status: 'notified'
    });
    localStorage.setItem('orderLogs', JSON.stringify(orderLogs));
}

// ==================== OWNER PROFILE EMPLOYEE MANAGEMENT ====================
// ==================== PASSWORD CHANGE FUNCTIONS ====================
let passwordChangeRole = null;
let ownerPassword = localStorage.getItem('ownerPassword') || 'admin123';

function openPasswordChangeModal(role) {
    passwordChangeRole = role;
    document.getElementById('passwordChangeForm').reset();
    document.getElementById('passwordChangeMessage').style.display = 'none';
    openModal('passwordChangeModal');
}

function handlePasswordChange(event) {
    event.preventDefault();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('passwordChangeMessage');
    
    // Validate passwords match
    if (newPassword !== confirmPassword) {
        showPasswordChangeMessage('New passwords do not match!', 'error');
        return;
    }
    
    // Validate password length
    if (newPassword.length < 6) {
        showPasswordChangeMessage('Password must be at least 6 characters long!', 'error');
        return;
    }
    
    // Check if new password is same as current
    if (newPassword === currentPassword) {
        showPasswordChangeMessage('New password must be different from current password!', 'error');
        return;
    }
    
    if (passwordChangeRole === 'owner') {
        if (currentPassword !== ownerPassword) {
            showPasswordChangeMessage('Current password is incorrect!', 'error');
            return;
        }
        // Update owner password and persist it
        ownerPassword = newPassword;
        localStorage.setItem('ownerPassword', ownerPassword);
        showPasswordChangeMessage('✓ Owner password changed successfully!', 'success');
        setTimeout(() => {
            closeModal('passwordChangeModal');
        }, 1500);
    }
}

function showPasswordChangeMessage(message, type) {
    const messageDiv = document.getElementById('passwordChangeMessage');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    
    if (type === 'error') {
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    } else if (type === 'success') {
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    }
}

// ==================== UTILITY FUNCTIONS ====================
function toggleForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

function saveData() {
    localStorage.setItem('pharmaData', JSON.stringify(pharmaData));
}

function loadData() {
    const saved = localStorage.getItem('pharmaData');
    if (saved) {
        const data = JSON.parse(saved);
        pharmaData.medicines = data.medicines || medicinesDB;
        pharmaData.employees = data.employees || employeesDB;
        pharmaData.companies = data.companies || companiesDB;
        pharmaData.sales = data.sales || [];
        pharmaData.customers = data.customers || [];
    } else {
        pharmaData.medicines = medicinesDB;
        pharmaData.employees = employeesDB;
        pharmaData.companies = companiesDB;
    }
}

// Close modals on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}
