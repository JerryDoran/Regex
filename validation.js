// let regex = /[a-z]/gi;
// let regex2 = new RegExp(/[a-z]/, 'g', 'i');

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  telephone: /^\d{11}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// Grab all the input fields and put into HTML collection
const inputs = document.querySelectorAll('input');

// Validation function
function validate(field, regex) {
  // console.log(field, regex);
  if (regex.test(field.value)) {
    // passed validation
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    // console.log(e.target);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
