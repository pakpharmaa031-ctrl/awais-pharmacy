# Pak Pharma Pro - Professional Pharmacy Management System

A complete, role-based pharmacy management software with separate interfaces for **Owner**, **Employees**, and **Customers**.

## 🎯 Key Features

### 👔 **Owner Dashboard**
- **Business Statistics**
  - Total products and revenue tracking
  - Employee count and management
  - Low stock alerts
  - Expiring items warnings

- **Medicines Management**
  - Add/edit/delete medicines
  - Batch tracking
  - Automatic stock management
  - Expiry date monitoring
  - Support for all pharmaceutical categories

- **Employee Management**
  - Add employees with positions (Pharmacist, Cashier, Inventory Manager, Sales Executive)
  - Set salaries and track performance
  - Manage employee credentials
  - Track sales per employee

- **Company Management**
  - Manage pharmaceutical company suppliers
  - Track company contact information
  - View products per company
  - Support for 10+ companies

- **Business Reports**
  - Sales reports with date range
  - Inventory valuation
  - Employee performance
  - Profit & Loss analysis

### 👨‍💼 **Employee Dashboard**
- **Sales Management**
  - Create sales transactions
  - Multi-item cart system
  - Apply discounts
  - Track payment methods
  - Complete sale history

- **Inventory Viewing**
  - Browse available medicines
  - Check stock levels
  - View medicine details
  - Search functionality

- **Profile Management**
  - View personal information
  - Check salary details
  - Track total sales
  - Join date information

### 👤 **Customer Portal**
- **Browse Medicines**
  - Search medicines by name
  - Filter by category
  - View detailed information
  - Check availability
  - Price information

- **Shopping Experience**
  - Add medicines to cart
  - View company information
  - Browse by categories
  - See stock availability

## 💊 Comprehensive Medicines Database

### Included Companies (10+ Suppliers)
1. **GSK (GlaxoSmithKline)** - 6 medicines
2. **Pfizer** - 6 medicines
3. **Roche** - 4 medicines
4. **Abbott** - 5 medicines
5. **Novartis** - 4 medicines
6. **Sanofi** - 4 medicines
7. **Merck** - 4 medicines
8. **Johnson & Johnson** - 3 medicines
9. **Eli Lilly** - 3 medicines
10. **AstraZeneca** - 1 medicine

### Medicine Categories
- 💊 **Pain Relief** (Aspirin, Paracetamol, Ibuprofen, Joint Pain Relief)
- 🤧 **Cold & Flu** (Cough Syrup, Vitamin C, Flu Relief, Allergy Relief)
- 🍽️ **Digestive** (Omeprazole, Ranitidine, Metoclopramide)
- 🧬 **Antibiotics** (Amoxicillin, Azithromycin, Ciprofloxacin)
- 💪 **Vitamins & Supplements** (Multivitamin, Vitamin D, Calcium)
- 🧴 **Skincare** (Acne Cream, Moisturizing Lotion, Anti-Itch Cream)
- 🥗 **Antacids** (Antacid Tablet, Liquid Antacid)
- 🤐 **Cough Syrups** (Multi-symptom, Honey-based)
- ❤️ **Cardiac** (Low-dose Aspirin, Atenolol)
- 🩺 **Diabetes** (Metformin, Glibenclamide)
- 💉 **Injections** (Insulin, Vitamin B12, Antibiotic)

**Total: 32+ Pre-loaded Medicines**

## 🔐 Default Credentials

### Owner Login
- **Username:** admin
- **Password:** admin123

### Employee Logins
- **Employee 1**
  - Username: ali_pharma
  - Password: pass123
  - Position: Pharmacist
  
- **Employee 2**
  - Username: ayesha_cash
  - Password: pass123
  - Position: Cashier

- **Employee 3**
  - Username: hassan_inv
  - Password: pass123
  - Position: Inventory Manager

### Customer Access
- No login required - direct access as guest

## 📊 Employee Profiles

1. **Muhammad Ali** - Pharmacist
   - Email: ali@pharmacy.com
   - Salary: PKR 50,000
   - Specialized in customer consultation

2. **Ayesha Khan** - Cashier
   - Email: ayesha@pharmacy.com
   - Salary: PKR 35,000
   - Primary sales handler

3. **Hassan Ahmed** - Inventory Manager
   - Email: hassan@pharmacy.com
   - Salary: PKR 40,000
   - Stock management specialist

## 🚀 Getting Started

### Installation
1. Extract all files to a folder
2. Open `index.html` in a modern web browser
3. Select your role (Owner/Employee/Customer)
4. Login with credentials above

### Usage Flow

**For Owner:**
1. Login as admin
2. View dashboard statistics
3. Manage medicines inventory
4. Add/manage employees
5. Add pharmaceutical companies
6. Generate business reports

**For Employees:**
1. Login with employee credentials
2. Create sales transactions
3. Add items to cart
4. Process payments
5. View medicine catalog
6. Check personal profile

**For Customers:**
1. Skip login (guest access)
2. Browse medicines by category
3. Search for specific medicines
4. View company and pricing info
5. Check stock availability

## 📈 Business Capabilities

- **Inventory Management**
  - Real-time stock tracking
  - Expiry date monitoring
  - Low stock alerts
  - Batch number tracking

- **Sales Operations**
  - Multi-item transactions
  - Discount support
  - Payment method tracking
  - Sales history

- **Financial Management**
  - Cost price tracking
  - Profit margin calculation
  - Revenue reports
  - Expense tracking

- **Human Resources**
  - Employee management
  - Salary tracking
  - Performance monitoring
  - Role-based access

## 💾 Data Storage

All data is stored in browser's localStorage:
- Medicine inventory
- Employee information
- Company details
- Sales transactions
- Customer data

**Note:** For production, implement backend database with authentication and encryption.

## 🎨 Technical Features

- **Responsive Design** - Works on desktop, tablet, mobile
- **Role-Based Access** - Different interfaces for different users
- **Real-time Updates** - Instant data synchronization
- **Search & Filter** - Quick access to medicines and data
- **Reports Generation** - Business intelligence and analytics
- **Data Persistence** - Automatic saving to localStorage

## 📋 System Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Minimum screen resolution: 1024x768

## 🛠️ Customization

### Adding New Medicines
1. Owner → Medicines → Add Medicine
2. Fill all required fields
3. Select company and category
4. Set pricing and expiry date

### Adding New Companies
1. Owner → Companies → Add Company
2. Enter company details
3. Add contact information
4. Save

### Adding New Employees
1. Owner → Employees → Add Employee
2. Set position and credentials
3. Assign salary
4. Save

## 📞 Support Features

- Responsive user interface
- Clear navigation
- Form validation
- Error messages
- Confirmation dialogs

## 🔍 Key Modules

| Module | Owner | Employee | Customer |
|--------|-------|----------|----------|
| Dashboard | ✅ | ✅ | ❌ |
| Sales | ❌ | ✅ | ❌ |
| Inventory | ✅ | View Only | View Only |
| Employees | ✅ | ❌ | ❌ |
| Reports | ✅ | ❌ | ❌ |
| Companies | ✅ | ❌ | ❌ |
| Browse Medicines | ❌ | View | ✅ |
| Manage Profile | ❌ | ✅ | ❌ |

## 🚀 Performance

- Fast loading times
- Efficient database queries
- Optimized storage
- Smooth transitions
- Responsive interactions

## 📱 Mobile Responsive

- Adapts to all screen sizes
- Touch-friendly buttons
- Readable text on all devices
- Optimized layouts

---

**Pak Pharma Pro** - Complete Professional Pharmacy Management System for Pakistan's Healthcare Sector
