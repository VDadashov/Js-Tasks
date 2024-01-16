class Company {
  constructor(companyName) {
    this.companyName = companyName
  }

  static companys = [];
  branchs = [];

  static setCompany(value) {
    let data = this.companys;
    data.push(value);
  }

  static getCompany() {
    let data = this.companys

    let tbl = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CompanyName</th>
        </tr>
        </thead>`

    data.forEach((item, index) => {
      let { companyName } = item

      tbl += `<tbody>
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${companyName}</td>
            </tr>
          </tbody>`
    })

    return tbl;
  }

  static showCompanySelect() {
    let data = Company.companys;

    let options = '<option value="" selected disabled>Choose Branch</option>';

    data.forEach((item, index) => {
      options += `<option value="${index}">${item.companyName}</option>`
    })

    return options;
  }
}

class Branch extends Company {
  constructor(branchName, companyName) {
    super(companyName);
    this.branchName = branchName;
  }

  static showBranchSelect(index) {
    let data = this.companys;

    return data[index]
  }
}

class Employee extends Branch {
  constructor(Name, branchName, companyName) {
    super(branchName, companyName)
    this.Name = Name;
  }
}


class Validation {
  static hasNumber(str) {
    return /\d/.test(str);
  }

  static isfirstCharSmall(str) {
    return str.charAt(0) != str.charAt(0).toUpperCase();
  }

  static nameIsLengthThanThree(str) {
    return str.length <= 3;
  }

  static isEqual(str) {
    let data = Company.companys;

    for (let item of data) {
      if (item.companyName == str) return true
    }

    return false
  }
}

function addCompany() {
  const companyNameInput = document.getElementById("companyName");
  const tbl = document.getElementById("tbl");
  const errorMessages = document.getElementById("errorMessages");
  const companySlcs = document.querySelectorAll(".companySlc");

  if (!companyNameInput.value) {
    errorMessages.innerHTML = 'Name cannot be empty!';
    return false;
  }

  if (Validation.hasNumber(companyNameInput.value)) {
    errorMessages.innerHTML = 'Name cannot be number';
    return false;
  }

  if (Validation.isfirstCharSmall(companyNameInput.value)) {
    errorMessages.innerHTML = 'The first char of name cannot be small';
    return false;
  }

  if (Validation.nameIsLengthThanThree(companyNameInput.value)) {
    errorMessages.innerHTML = "This Company Name's length is cannot be three";
    return false;
  }

  if (Validation.isEqual(companyNameInput.value)) {
    errorMessages.innerHTML = "This Company Name is not equal";
    return false;
  }

  errorMessages.innerHTML = "";
  company = new Company(companyNameInput.value);
  Company.setCompany(company);
  tbl.innerHTML = Company.getCompany();
  companyNameInput.value = "";

  companySlcs.forEach((item) => {
    item.innerHTML = Company.showCompanySelect();
  })
}

function addBranch() {
  const companySlc = document.querySelector("#companySlcB");
  const branchName = document.querySelector('#branchName');
  let newBranch = new Branch(branchName.value, companySlc.value);
  let company = Company.companys[companySlc.value];
  company.branchs.push(newBranch);
  updateBranchsSlc();
}

function addEmployee() {
}

function updateBranchsSlc() {
  companySlcE.addEventListener("change", () => {
    const companySlcE = document.querySelector("#companySlcE");
    const branchSlc = document.querySelector("#branchSlc");

    let branchs = Branch.showBranchSelect(companySlcE.value).branchs;
    let options = '<option value="" selected disabled>Choose Branch</option>';

    branchs.forEach((item, index) => {
      options += `<option value="${index}">${item.branchName}</option>`
    })
    branchSlc.innerHTML = options;
  })
}

updateBranchsSlc();







