function createInput(data) {

}


  formData.forEach(function(fieldData) {


  // let fields = document.getElementById('fields')
  let input = document.createElement('input');

  if (fieldData.type === 'textarea') {
    console.log('textarea');
    let textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder',fieldData.label);
    textarea.setAttribute('id', fieldData.id);
    fields.appendChild(textarea);
  } else if (fieldData.type === 'select') {
    console.log('select');
    let select = document.createElement('select');
    select.setAttribute('placeholder', fieldData.label);
    select.setAttribute('id', fieldData.id);

    fieldData.options.forEach(function(optionData) {
      console.log(optionData);
      let option = document.createElement('option');
      option.setAttribute('value', optionData.value);
      option.setAttribute('label', optionData.label);
      select.appendChild(option);
    });

    fields.appendChild(select);
  } else {
    input.setAttribute('type', fieldData.type);
    input.setAttribute('placeholder', fieldData.label);
    input.setAttribute('id', fieldData.id);
  }
    // textarea.setAttribute('type', 'textarea');
    // textarea.setAttribute('placeholder', fieldData.label);
    // textarea.setAttribute('id', fieldData.id);

  fields.appendChild(input);

});
